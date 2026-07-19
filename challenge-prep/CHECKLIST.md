# Checklist, timeline, and build status

## Blockers (resolve on the Ally call — see INTERVIEW_LOOP.md for the full question list)

- [ ] **HM name + email** — Ally's email says to send the plan to "the HM (insert name +
      email here)"; the placeholder was never filled in. Cannot send without it.
- [ ] **Subject line** — Ally's email: `John <Last> - Challenge - Solution`; the handout:
      `...Solution Plan`. Draft follows Ally's newer email; confirm.

## Timeline

- [x] Availability submitted + Ally's 15-min prep call booked (done 2026-07-18)
- [x] Commit the new artifact assets to the demo branch (verified 2026-07-19: assets are
      byte-identical on `demo-19287-sqlite-indexof` and `challenge-prep`)
- [x] Decision 2026-07-19: prep materials stay on the fork (`challenge-prep` branch) —
      visible-thinking is a scored criterion; the demo branch stays clean of them
- [ ] Rehearse from `WORKING_SESSION_CARD.md` + `DEMO_RUN.md`; drill `Q_AND_A.md`
- [ ] Rehearse the screen-gap corrections until automatic: capability map first, the
      one-breath model policy, and the five-tier enforcement ladder (both interviewers
      raised model strategy in the screen — assume it returns)
- [ ] **Day before session:** send `ENGAGEMENT_EMAIL.md` to the HM with the confirmed
      subject line
- [ ] Keep the Scenario Pack names visible in-session: ADM (unnamed — ask), Maya Chen
      (Staff Eng), David Park (EM), Priya Nair (Dir Eng), Nina Alvarez (QA), Marcus
      Webb (DevOps), Ravi Shah (PM)

## Artifact build status (committed and pushed on both branches; CI green as of 2026-07-19)

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
- `.cursor/agents/` (added 2026-07-19, **untested in-product — dry-run before the session**):
  `contribution-planner` (`inherit` + `readonly`), `contribution-implementer` (`composer-2.5` —
  a real model ID; the docs' `model` field takes `inherit` or a concrete ID, no `fast` tier),
  `skeptical-reviewer` (`inherit` + `readonly`) — the model policy as versioned frontmatter.
  `/first-contribution` and `/pre-review` now orchestrate them; the human approval gate stays in
  the main conversation; both commands document an inline fallback if dispatch is unavailable.
  `/update-rules` gained a model-policy drift check against the README policy table.

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
- [ ] **Dry-run the subagent dispatch in a fresh window** (docs-vs-product gaps are exactly the
      overclaim risk): `/first-contribution` should return a planner plan and stop for approval;
      `/pre-review` should delegate to `skeptical-reviewer`. If dispatch misbehaves, both
      commands document the inline fallback — rehearse stating that honestly
- [ ] **In the dry-run, confirm which Composer variant `model: composer-2.5` executes** —
      Composer 2.5 has Standard ($0.50/$2.50) and Fast ($3/$15) variants; until confirmed, say
      "Cursor-native, cost-efficient," never "the fast model" (pack wording already corrected)
- [ ] Rehearse the co-creation invariants: visible confirmed/changed/owner/next-action board;
      at least one interviewer answer visibly changes the pilot plan; decide during timed
      rehearsal whether to adopt the alternative run of show in WORKING_SESSION_CARD.md
- [ ] The IndexOf chain reachable as the finished-first-contribution exhibit
      (issue → plan approval → diff/test/SQL → skeptical finding → fix → green CI)
      — **2026-07-19: the branch rebuild had stacked two superseded IndexOf drafts;
      the combination didn't compile and CI went red on `63e7e0f`/`0837d64`. Fixed by
      restoring the verified-green translator + tests (from `c5b7f9ac9d`) as
      `085459d409` (challenge-prep) / `e00500d439` (demo); branches remain
      byte-identical; 12/12 focused tests pass locally; CI re-run confirmed green**
- [x] Run `/update-rules` once before the session — fix or be ready to explain findings
      (2026-07-19 drift check: all pointers resolve, README table matches the layer
      inventory, model-policy frontmatter matches the README table, sources of truth
      unchanged since the rules were written — layer is current)
- [ ] Screen setup: Cursor + whiteboard + metrics sheet; notifications off
- [ ] Full demo path timed twice; 8–10 min target, 12 hard cap
