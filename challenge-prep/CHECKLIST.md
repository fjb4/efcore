# Checklist, timeline, and build status

## Blockers (resolve on the Ally call — see INTERVIEW_LOOP.md for the full question list)

- [ ] **HM name + email** — Ally's email says to send the plan to "the HM (insert name +
      email here)"; the placeholder was never filled in. Cannot send without it.
- [ ] **Subject line** — Ally's email: `John <Last> - Challenge - Solution`; the handout:
      `...Solution Plan`. Draft follows Ally's newer email; confirm.

## Timeline

- [ ] **Now:** book the availability link + Ally's 15-min prep call (both action items
      from her email; accept the extra Cursor credits)
- [ ] Commit the new artifact assets to the demo branch (currently uncommitted)
- [ ] Rehearse from `WORKING_SESSION_CARD.md` + `DEMO_RUN.md`; drill `Q_AND_A.md`
- [ ] **Day before session:** send `ENGAGEMENT_EMAIL.md` to the HM with the confirmed
      subject line
- [ ] Keep the Scenario Pack names visible in-session: ADM (unnamed — ask), Maya Chen
      (Staff Eng), David Park (EM), Priya Nair (Dir Eng), Nina Alvarez (QA), Marcus
      Webb (DevOps), Ravi Shah (PM)

## Artifact build status (2026-07-18 — built and tested, uncommitted)

- `/start-onboarding-pilot`, `/renewal-evidence` — the engagement commands (already existed).
- `tools/onboarding-metrics/ramp_metrics.py` — mines real PR history via `gh`:
  time-to-first-meaningful-merged-PR, ramp-window rework, cohort medians; labels all
  evidence; emits **MISSING/TRUNCATED** instead of inferring. Tested live against
  `dotnet/efcore` (~16 s, 2-author cohort): one observed 11-day time-to-first with a
  clickable PR; the other correctly suppressed as TRUNCATED. **The refusal to
  overclaim is itself a demo beat.**
- `metrics/ramp-dashboard.md` — pre-generated fallback if the live run fails.
- `.github/workflows/ramp-metrics.yml` — dispatch/schedulable wrapper ("the team owns
  the metrics refresh after handoff").
- Wiring: `/renewal-evidence` computes a missing baseline live via `--stdout`
  (read-only); `/start-onboarding-pilot` Step 2 seeds ledger baseline rows from the
  miner, labeled historical, proxied definitions marked pending.
- `/update-rules` — read-only drift check (pointers, contradicted/duplicated deltas,
  stale globs/map, `/pre-review` ↔ CI gate mirror). The tool behind Maya's
  drift-ownership answer: "how she keeps the layer honest after I'm gone — monthly,
  five minutes."
- `.cursor/README.md` — updated table + honest-limits section.

Still **positioning-only** (per the staging in `README.md` — not build items): GitHub
MCP, hooks, team rules, cloud agents/Bugbot — "least-privilege scale steps after the
workflow earns trust."

## Demo hygiene

- [ ] All six commands discoverable in a **fresh** Cursor window / new Agent chat
      (recovery per `DEMO_RUN.md`: open the command file, ask Agent to follow it, say so)
- [ ] `DEMO_RUN.md`'s exact `/start-onboarding-pilot` input ready to paste
- [ ] Decide the live-miner cohort (real upstream contributors read well; keep the
      pre-generated dashboard as fallback) — the demo cohort is **historical
      open-source data standing in for Acme joiners; say so out loud**
- [ ] One unrehearsed-input dry run of `/scope-issue`
- [ ] The IndexOf chain reachable as the finished-first-contribution exhibit
      (issue → plan approval → diff/test/SQL → skeptical finding → fix → green CI)
- [ ] Run `/update-rules` once before the session — fix or be ready to explain findings
- [ ] Screen setup: Cursor + whiteboard + metrics sheet; notifications off
- [ ] Full demo path timed twice; 8–10 min target, 12 hard cap
