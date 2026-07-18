#!/usr/bin/env python3
"""Mine onboarding ramp metrics from a repository's real PR history.

Produces the historical-baseline / pilot-tracking dashboard used by the onboarding
pilot (`/start-onboarding-pilot`, `/renewal-evidence`): per-author time to first
meaningful merged PR and ramp-window rework signals, computed only from what the
GitHub data actually supports. Every derived number carries an evidence label
(observed / historical / proxy); anything the data cannot support is reported as
MISSING or TRUNCATED — never inferred.

Requires the GitHub CLI (`gh`) authenticated with read access to the target repo.

Examples:
  python3 tools/onboarding-metrics/ramp_metrics.py --authors alice,bob
  python3 tools/onboarding-metrics/ramp_metrics.py --repo dotnet/efcore \
      --authors alice,bob --start alice=2026-05-04 --ramp-days 60 --stdout
"""

from __future__ import annotations

import argparse
import json
import shutil
import statistics
import subprocess
import sys
from datetime import datetime, timedelta, timezone
from pathlib import Path

PR_FIELDS = "number,title,url,createdAt,mergedAt,additions,deletions"


def run(cmd: list[str]) -> str:
    res = subprocess.run(cmd, capture_output=True, text=True)
    if res.returncode != 0:
        raise RuntimeError(f"command failed: {' '.join(cmd)}\n{res.stderr.strip()}")
    return res.stdout


def gh_json(args: list[str]):
    return json.loads(run(["gh", *args]))


def parse_iso(value: str) -> datetime:
    return datetime.fromisoformat(value.replace("Z", "+00:00"))


def detect_repo() -> str | None:
    try:
        url = run(["git", "remote", "get-url", "origin"]).strip()
    except RuntimeError:
        return None
    if "github.com/" in url:
        tail = url.split("github.com/", 1)[1]
    elif ":" in url:
        tail = url.rsplit(":", 1)[1]
    else:
        return None
    return tail.removesuffix(".git") or None


def mine_author(repo: str, login: str, args, start_overrides: dict[str, datetime]) -> dict:
    """Collect one author's ramp facts. Returns a dict of values plus label/gap notes."""
    prs = gh_json([
        "pr", "list", "--repo", repo, "--author", login, "--state", "merged",
        "--json", PR_FIELDS, "--limit", str(args.max_prs),
    ])
    info: dict = {"login": login, "gaps": [], "merged_sampled": len(prs)}

    if not prs:
        info["gaps"].append("no merged PRs found — metric not computable (MISSING)")
        return info

    # `gh pr list` returns newest-first; a full page means older PRs were not seen,
    # so "first" cannot be established from this sample.
    info["truncated"] = len(prs) >= args.max_prs
    prs.sort(key=lambda p: parse_iso(p["createdAt"]))

    if login in start_overrides:
        start, start_label = start_overrides[login], "observed (provided start date)"
    else:
        start, start_label = parse_iso(prs[0]["createdAt"]), "proxy (earliest sampled PR creation)"
    info["start"], info["start_label"] = start, start_label

    meaningful = [
        p for p in prs
        if p["mergedAt"] and (p["additions"] + p["deletions"]) >= args.meaningful_lines
    ]
    if info["truncated"]:
        info["gaps"].append(
            f"sample capped at {args.max_prs} newest PRs — first PR not observed (TRUNCATED); "
            "time-to-first metrics suppressed for this author"
        )
    elif meaningful:
        first = min(meaningful, key=lambda p: parse_iso(p["mergedAt"]))
        info["first_meaningful"] = first
        info["days_to_first"] = (parse_iso(first["mergedAt"]) - start).days
    else:
        info["gaps"].append(
            f"no merged PR meets the meaningful threshold (>= {args.meaningful_lines} changed lines) (MISSING)"
        )

    ramp_end = start + timedelta(days=args.ramp_days)
    ramp_prs = [p for p in prs if parse_iso(p["createdAt"]) <= ramp_end]
    info["ramp_prs"] = len(ramp_prs)

    reviewed = ramp_prs[: args.max_review_prs]
    if len(ramp_prs) > len(reviewed):
        info["gaps"].append(
            f"review data fetched for first {len(reviewed)} of {len(ramp_prs)} ramp-window PRs (sampled)"
        )
    rework_counts = []
    for pr in reviewed:
        reviews = gh_json([
            "pr", "view", str(pr["number"]), "--repo", repo, "--json", "reviews",
        ]).get("reviews", [])
        rework_counts.append(sum(1 for r in reviews if r.get("state") == "CHANGES_REQUESTED"))
    if rework_counts:
        info["rework_counts"] = rework_counts
    return info


def fmt_date(dt: datetime) -> str:
    return dt.date().isoformat()


def render(repo: str, results: list[dict], args) -> str:
    now = datetime.now(timezone.utc)
    lines = [
        "# Ramp metrics dashboard",
        "",
        f"Generated {now:%Y-%m-%d %H:%M} UTC from `{repo}` PR history by",
        "`tools/onboarding-metrics/ramp_metrics.py` — parameters: "
        f"ramp window {args.ramp_days}d, meaningful threshold {args.meaningful_lines} changed lines, "
        f"sample cap {args.max_prs} PRs/author.",
        "",
        "Labels: **observed** (directly measured), **historical** (from repo history),",
        "**proxy** (stand-in definition — replace before presenting), **MISSING/TRUNCATED**",
        "(not computable from this data — never inferred).",
        "",
        "**Definition notes (proxies until the team approves their own):** start date defaults to the",
        "author's earliest sampled PR creation — replace with the real start date via `--start`;",
        "\"meaningful PR\" defaults to a changed-lines threshold — replace with the engineering",
        "manager's approved definition; rework = `CHANGES_REQUESTED` review events on ramp-window PRs",
        "(the QA-owned taxonomy supersedes this).",
        "",
        "## Per-author ramp metrics (historical)",
        "",
        "| Author | Start (label) | First meaningful merged PR | Days to first | Ramp-window PRs | Rework events/PR (sampled) |",
        "|---|---|---|---|---|---|",
    ]

    days_values, rework_all = [], []
    for r in results:
        if "start" not in r:
            lines.append(f"| `{r['login']}` | MISSING | — | — | — | — |")
            continue
        start_cell = f"{fmt_date(r['start'])} ({r['start_label'].split(' ')[0]})"
        if "first_meaningful" in r:
            fm = r["first_meaningful"]
            fm_cell = f"[#{fm['number']}]({fm['url']}) {fmt_date(parse_iso(fm['mergedAt']))}"
            days_cell = str(r["days_to_first"])
            days_values.append(r["days_to_first"])
        else:
            fm_cell, days_cell = ("TRUNCATED", "TRUNCATED") if r.get("truncated") else ("MISSING", "MISSING")
        if "rework_counts" in r:
            rework_all.extend(r["rework_counts"])
            rework_cell = f"median {statistics.median(r['rework_counts'])}, n={len(r['rework_counts'])}"
        else:
            rework_cell = "MISSING"
        lines.append(
            f"| `{r['login']}` | {start_cell} | {fm_cell} | {days_cell} | {r.get('ramp_prs', '—')} | {rework_cell} |"
        )

    lines += ["", "## Cohort summary (historical)", ""]
    if days_values:
        lines.append(
            f"- Time to first meaningful merged PR: **median {statistics.median(days_values)} days** "
            f"(n={len(days_values)}; every observation shown above — no observation is hidden)."
        )
    else:
        lines.append("- Time to first meaningful merged PR: MISSING (no computable observations).")
    if rework_all:
        pct = round(100 * sum(1 for c in rework_all if c > 0) / len(rework_all))
        lines.append(
            f"- Rework on ramp-window PRs: median {statistics.median(rework_all)} changes-requested "
            f"events/PR; {pct}% of sampled PRs had at least one (n={len(rework_all)} PRs)."
        )
    else:
        lines.append("- Rework on ramp-window PRs: MISSING.")

    gap_lines = [f"- `{r['login']}`: {g}" for r in results for g in r["gaps"]]
    lines += ["", "## Gaps and caveats", ""] + (gap_lines or ["- none"])

    lines += [
        "",
        "## Senior-engineer interrupt pulse (manual — supporting evidence)",
        "",
        "Not derivable from repo data. Filled in weekly from the mentor/office-hours log and the",
        "senior-engineer pulse; label **proxy** unless the team has a credible collection method.",
        "",
        "| Week | Interrupts logged | Source | Label |",
        "|---|---|---|---|",
        "| | | | |",
        "",
        "## Champion quotes (manual — qualitative evidence)",
        "",
        "Verbatim, dated, attributed, approved for reuse. A quote is qualitative evidence,",
        "never an outcome metric.",
        "",
    ]
    return "\n".join(lines) + "\n"


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--repo", help="owner/name (default: derived from the origin remote)")
    ap.add_argument("--authors", required=True, help="comma-separated GitHub logins (the cohort)")
    ap.add_argument("--start", action="append", default=[], metavar="LOGIN=YYYY-MM-DD",
                    help="real start date for an author (repeatable); otherwise a labeled proxy is used")
    ap.add_argument("--ramp-days", type=int, default=90)
    ap.add_argument("--meaningful-lines", type=int, default=20,
                    help="changed-lines threshold for a 'meaningful' PR (proxy definition)")
    ap.add_argument("--max-prs", type=int, default=100, help="PR sample cap per author")
    ap.add_argument("--max-review-prs", type=int, default=10,
                    help="ramp-window PRs per author to fetch review data for")
    ap.add_argument("--out", default="metrics/ramp-dashboard.md")
    ap.add_argument("--stdout", action="store_true", help="print the dashboard instead of writing --out")
    args = ap.parse_args()

    if shutil.which("gh") is None:
        print("error: GitHub CLI (`gh`) not found — install and authenticate it; "
              "this tool reports real data or nothing.", file=sys.stderr)
        return 2
    repo = args.repo or detect_repo()
    if not repo:
        print("error: could not derive the repo from the origin remote; pass --repo owner/name.",
              file=sys.stderr)
        return 2

    start_overrides = {}
    for item in args.start:
        login, _, date = item.partition("=")
        try:
            start_overrides[login] = datetime.fromisoformat(date).replace(tzinfo=timezone.utc)
        except ValueError:
            print(f"error: bad --start value {item!r} (expected LOGIN=YYYY-MM-DD)", file=sys.stderr)
            return 2

    results = []
    for login in [a.strip() for a in args.authors.split(",") if a.strip()]:
        try:
            results.append(mine_author(repo, login, args, start_overrides))
        except RuntimeError as err:
            results.append({"login": login, "gaps": [f"GitHub query failed: {err} (MISSING)"]})

    dashboard = render(repo, results, args)
    if args.stdout:
        print(dashboard)
    else:
        out = Path(args.out)
        out.parent.mkdir(parents=True, exist_ok=True)
        out.write_text(dashboard)
        print(f"wrote {out}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
