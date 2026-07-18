# Ramp metrics dashboard

Generated 2026-07-18 16:47 UTC from `dotnet/efcore` PR history by
`tools/onboarding-metrics/ramp_metrics.py` — parameters: ramp window 90d, meaningful threshold 20 changed lines, sample cap 100 PRs/author.

Labels: **observed** (directly measured), **historical** (from repo history),
**proxy** (stand-in definition — replace before presenting), **MISSING/TRUNCATED**
(not computable from this data — never inferred).

**Definition notes (proxies until the team approves their own):** start date defaults to the
author's earliest sampled PR creation — replace with the real start date via `--start`;
"meaningful PR" defaults to a changed-lines threshold — replace with the engineering
manager's approved definition; rework = `CHANGES_REQUESTED` review events on ramp-window PRs
(the QA-owned taxonomy supersedes this).

## Per-author ramp metrics (historical)

| Author | Start (label) | First meaningful merged PR | Days to first | Ramp-window PRs | Rework events/PR (sampled) |
|---|---|---|---|---|---|
| `JoasE` | 2025-09-01 (proxy) | [#36693](https://github.com/dotnet/efcore/pull/36693) 2025-09-12 | 11 | 5 | median 0, n=5 |
| `cincuranet` | 2024-12-16 (proxy) | TRUNCATED | TRUNCATED | 13 | median 0, n=5 |

## Cohort summary (historical)

- Time to first meaningful merged PR: **median 11 days** (n=1; every observation shown above — no observation is hidden).
- Rework on ramp-window PRs: median 0.0 changes-requested events/PR; 20% of sampled PRs had at least one (n=10 PRs).

## Gaps and caveats

- `cincuranet`: sample capped at 100 newest PRs — first PR not observed (TRUNCATED); time-to-first metrics suppressed for this author
- `cincuranet`: review data fetched for first 5 of 13 ramp-window PRs (sampled)

## Senior-engineer interrupt pulse (manual — supporting evidence)

Not derivable from repo data. Filled in weekly from the mentor/office-hours log and the
senior-engineer pulse; label **proxy** unless the team has a credible collection method.

| Week | Interrupts logged | Source | Label |
|---|---|---|---|
| | | | |

## Champion quotes (manual — qualitative evidence)

Verbatim, dated, attributed, approved for reuse. A quote is qualitative evidence,
never an outcome metric.

