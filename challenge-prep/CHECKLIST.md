# Checklist, timeline, and build status

## Do first

- **Subagent dry run — run 2026-07-26. Observed, not assumed:**
  - [x] Dispatch works. `/first-contribution 38671` delegates to `contribution-planner`,
        returns the plan in Step 1's shape, **stops in the main conversation for approval**,
        and writes nothing (`git status` clean at the gate).
  - [x] `model: inherit` inherits the parent conversation's *selection* — Auto parent → card
        reads `Auto`; named parent → card reads that model. It does not itself guarantee a
        reasoning tier, exactly as the wording claims. **Set the picker deliberately before
        the session.**
  - [x] A bare `composer-2.5` resolves to **Composer 2.5 Fast** (~6x the token price). Pin
        changed to `composer-2.5[fast=false]` and re-verified in-product: the card reads
        "Composer 2.5", standard variant. The cost claim is now observed, not assumed.
  - [x] Approval-contract failure found and fixed: the implementer recovered a prior
        conversation's plan from Cursor's agent-transcript store and declared it approved.
        Contracts hardened; re-run refuses with the exact contract string (but still searched
        first — the fix moved behavior, it did not install a gate). This is now the lead
        answer in `Q_AND_A.md` under "What breaks?".
  - [x] `/pre-review` delegates to `skeptical-reviewer` and passes the scope argument through.
        `readonly` is honored **as a property of the agent** — asked to apply a fix, the
        orchestrator read the frontmatter, declined to edit, and routed the work to an editable
        subagent instead. Constraints do not compose upward; least privilege has to be enforced
        at the boundary. Spoken answer: `Q_AND_A.md`, "What breaks?" (30 seconds, one example).
  - [ ] `/update-rules` re-run after the hardening and model-pin commits (the 2026-07-19 clean
        check predates them).
- [ ] **Re-sync `demo-19287-sqlite-indexof` if keeping it as a clean fallback.** Verified
      identical to `challenge-prep` outside `challenge-prep/` on 2026-07-26, then diverged again
      by the approval-hardening and model-pin commits. Do not call it byte-identical until
      `git diff --quiet challenge-prep demo-19287-sqlite-indexof -- .cursor` passes.

## Before sending the engagement email

- Recipients settled: **Frank Lamprea** (hiring manager, frank.lamprea@anysphere.co), copying
  **Ally Anderson** (recruiter, ally.anderson@anysphere.co) at her request.
- Subject line is settled: `John Bush - Challenge - Solution Plan`, per the handout.

## Timeline

- [ ] Re-verify the artifact-only demo branch after syncing; the historical 2026-07-19
      byte-identical check is stale as of the 2026-07-22 local-ref comparison
- [x] Decision 2026-07-19: prep materials stay on the fork (`challenge-prep` branch) —
      visible-thinking is a scored criterion; the demo branch stays clean of them. Final-session
      update 2026-07-22: run the session from `challenge-prep` in one Cursor window so the live
      Markdown board and the complete runnable artifact share one surface; the clean demo branch
      becomes a fallback only after the sync check above passes.
- [ ] Rehearse from `WORKING_SESSION_CARD.md` + `DEMO_RUN.md`; drill `Q_AND_A.md`
- [ ] Rehearse the screen-gap corrections until automatic: capability map first, the
      one-breath model policy, and the five-tier enforcement ladder (both interviewers
      raised model strategy in the screen — assume it returns)
- [ ] Rehearse the software-factory progression in under 3 minutes: repeatable → connected →
      automated; land the bounded backlog-item → cloud agent → review → CI → deploy → evidence
      flow without implying that Cursor bypasses customer controls
- [ ] **One compressed 28-minute run of the full session from the decision skeleton
      only — no card text visible.** The card is prep, not a teleprompter; role-play pushback
      can halve airtime, and visible thinking beats recited prose. Keep only the block intents
      and the invariants (Markdown board changes live, capability map before commands, honest
      labels). Interviewer challenges expand the spine across 45 minutes.
- [x] **Day before session:** sent `ENGAGEMENT_EMAIL.md` to Frank, copying Ally (2026-07-26)
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
- `.cursor/agents/` (added 2026-07-19, **exercised in-product 2026-07-26 — see the dry-run
  results at the top of this file**): `contribution-planner` (`inherit` + `readonly`),
  `contribution-implementer` (`composer-2.5[fast=false]` — a concrete ID plus a bracket
  parameter selecting the standard variant), `skeptical-reviewer` (`inherit` + `readonly`) —
  the model policy as versioned frontmatter.
  `/first-contribution` and `/pre-review` now orchestrate them; the human approval gate stays in
  the main conversation; both commands document an inline fallback if dispatch is unavailable.
  `/update-rules` gained a model-policy drift check against the README policy table.

Staging upgrade (2026-07-19): `.cursor/staged/` now holds **gate-ready, inert designs** for
three of the staged surfaces — read-only GitHub MCP config, new-joiner custom-mode spec, and
the drift-automation spec — each labeled with its review gate and owner, shown and talked
through on screen (never run) as the answer to why MCP/modes/cloud agents aren't live ("not
enabled is a decision with a design attached"). Hooks, team rules, and Bugbot-at-scale remain **positioning-only** (per the
staging in `README.md`): "least-privilege scale steps after the workflow earns trust."

## Demo hygiene

- [ ] All six commands discoverable in a **fresh** Cursor window / new Agent chat
      (recovery per `DEMO_RUN.md`: open the command file, ask Agent to follow it, say so)
- [ ] `DEMO_RUN.md`'s exact `/start-onboarding-pilot` input ready to paste
- [ ] Decide the live-miner cohort (real upstream contributors read well; keep the
      pre-generated dashboard as fallback) — the demo cohort is **historical
      open-source data standing in for Acme joiners; say so out loud**
- [ ] One unrehearsed-input dry run of `/scope-issue`
- [ ] Time the `.cursor/staged/` walk in Block 5 (MCP config, new-joiner mode, drift
      automation) — three files, their gates and owners, in under 60 seconds; shown and
      discussed, never run
- [ ] Subagent dispatch + Composer-variant dry-run — **moved to "Do first" at the top of this
      file**; it gates all wording rehearsal
- [ ] Rehearse the co-creation invariants: visible renewal-proof/pilot-change/owner/next-action
      entries in `LIVE_SESSION_BOARD.md`;
      at least one interviewer answer visibly changes the pilot plan; follow the adopted
      early-co-creation run of show in `WORKING_SESSION_CARD.md`
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
- [x] Cursor-first Markdown board built: `LIVE_SESSION_BOARD.md`, with six lightweight sections,
      four pre-mapped live decisions, direct links to the real artifacts, the named operating loop,
      metrics, scale path, commitments, and feedback capture (2026-07-22)
- [x] Excalidraw board retained as fallback only: `ACME_WORKING_SESSION_BOARD.png` is the static
      visual backup; the `.excalidraw` and SVG sources remain available (2026-07-22)
- [ ] **Set the main conversation's model picker to a named reasoning model, never Auto**, before
      sharing. `inherit` renders the parent's selection on the subagent card (verified
      2026-07-26: Auto parent → card reads `Auto`; named parent → card reads the model name).
      That label is what makes "the deliberately selected model" visible instead of asserted —
      and whatever name shows must match the sentence being said out loud.
- [ ] Screen setup: open `challenge-prep` in Cursor; pin the board, capability map, pilot command,
      evidence fallback, and the staged-scale-step README; use source view, word wrap, hidden
      sidebar/minimap, readable zoom;
      share the entire screen; notifications off
- [ ] Full demo path timed twice **with the Markdown board live** (short source edits and tab
      transitions are the new failure modes to time); 7-minute prepared target, session-minute-16
      hard bailout
