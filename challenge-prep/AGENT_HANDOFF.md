---
title: Cursor final-challenge prep — agent handoff
type: handoff
status: current
created: 2026-07-19
updated: 2026-07-19
---

# Cursor final-challenge prep — agent handoff

Self-contained context for an agent continuing John Bush's Cursor Solutions Architect
final-round preparation. Supersedes prior handoffs for the prep-work stream; the July 19
technical-screen/final-round notes in John's vault remain the authority on interview history
and role context.

## Situation

- John passed the technical screen (2026-07-17, Biodun Awojobi + Yemi Adejumobi) and is in the
  **final round**: two 30-minute interviews (an AI Deployment Manager; a senior SA leader) plus a
  **60-minute working session** (John leads ~45, ~15 wrap-up/feedback).
- The challenge (handout: `SA - Final Challenge v2.2 07102026.pdf`, this directory): role-play an
  SA on the fictional **Acme** account — 1,200 seats/18 teams, 38% weekly active, 6-week
  new-engineer ramp on one 12-engineer team, renewal ~90 days, no exec champion, Cursor + Codex +
  Claude Code fragmentation. Interviewers play the **internal account team** (AE/FE, ADM, RD),
  not the customer. Must extend the technical-screen artifact, in Cursor specifically.
- Scheduling: availability submitted; Ally Anderson (recruiter) still owes the loop schedule, the
  15-min prep-call link, and the **hiring manager's name/email** (blocker for the send-ahead
  engagement email, due the day before the session).

## Repo state (github.com/fjb4/efcore — John's public fork of dotnet/efcore)

- **`challenge-prep`** (branch): the prep pack (this directory) + the full artifact. Pushed.
  Tip: `007c0e3184`.
- **`demo-19287-sqlite-indexof`** (branch): the demo branch — artifact only, deliberately free of
  prep files. Pushed. Tip: `0837d64c5c` (cherry-pick of the artifact commit; artifact paths are
  byte-identical across the two branches — keep them that way).
- The handout PDF is committed on `challenge-prep` and **John explicitly chose to keep it in the
  public remote** — do not re-flag it or the public prep pack; visible thinking is a scored
  criterion. `.DS_Store` is handled by John's global git ignore (`~/.config/git/ignore`), not the
  repo's `.gitignore` (kept identical to upstream).

## The artifact (what exists and why)

A thin, repo-owned Cursor onboarding layer over EF Core as the stand-in for Acme's internal SDK.
Design principles: **point, don't copy** (rules cite the repo's own conventions docs/skills as
source of truth) and **agent suggests, CI enforces**.

- `.cursor/rules/` — five scoped rules (conventions pointer, architecture map, coding style,
  test conventions, contribution workflow).
- `.cursor/commands/` — six commands: `/scope-issue` (PM), `/first-contribution` (new joiner,
  hard approval gate after planning), `/pre-review` (skeptical advisory review), `/update-rules`
  (read-only drift check), `/start-onboarding-pilot` (engagement/pilot planning, hard stop for
  approval), `/renewal-evidence` (read-only evidence audit; refuses to overclaim).
- `.cursor/agents/` — **added 2026-07-19, untested in-product**: `contribution-planner`
  (`model: inherit`, `readonly: true`), `contribution-implementer` (`model: composer-2.5`),
  `skeptical-reviewer` (`model: inherit`, `readonly: true`). The model-orchestration policy as
  versioned frontmatter. `/first-contribution` and `/pre-review` orchestrate them; **the human
  approval gate stays in the main conversation**; both commands document an inline fallback if
  dispatch fails. Agent bodies point at the command steps (no duplicated procedure).
  `/update-rules` gained a model-policy drift check against the policy table in
  `.cursor/README.md` (the registry of model pins).
- `tools/onboarding-metrics/ramp_metrics.py` — mines real ramp metrics from PR history via `gh`;
  labels everything observed/historical/proxy; emits MISSING/TRUNCATED rather than inferring.
  Tested live against dotnet/efcore (~16 s; one observed 11-day time-to-first, one correctly
  TRUNCATED — the refusal to overclaim is a demo beat). `metrics/ramp-dashboard.md` is the
  committed fallback output; `.github/workflows/ramp-metrics.yml` is the team-owned refresh.
- Fork CI: `cursor-onboarding-checks.yml` — fast SQLite-only gates (format, analyzers, API
  baseline, focused tests); `/pre-review` is its deliberate local mirror.
- Staged (positioning-only, not built): MCP, hooks, team rules, custom modes, cloud
  agents/Bugbot-at-scale — "least-privilege scale steps after the workflow earns trust."

## Prep pack (this directory — the session materials)

`README.md` (strategy: diagnosis, three decisions, champion ladder, 3-session co-build, 90-day
shape, evidence design, asks), `WORKING_SESSION_CARD.md` (minute-by-minute run of show),
`DEMO_RUN.md` (8–10 min demo script + recovery paths), `Q_AND_A.md` (objection drills),
`ENGAGEMENT_EMAIL.md` (send-ahead draft; HM name/subject line pending Ally),
`INTERVIEW_LOOP.md` (Ally-call questions + the two 30-min interviews), `CHECKLIST.md`
(**the live to-do list — read it first**).

## Key decisions this session (with rationale — don't relitigate)

1. **Screen-gap corrections baked in** (the screen exposed four gaps; interviewers will return to
   them): (a) capability map led *before* any command runs (session card, DEMO_RUN); (b)
   model-orchestration policy — by phase/capability/risk/cost — now policy-as-code via the
   subagents, proactively stated; (c) five-tier enforcement ladder (assistive → bypassable
   standard → tool-policy → deterministic CI → independent review) in Q_AND_A; (d) evidence
   design was already strong — unchanged.
2. **Metrics: time-to-first-meaningful-PR, ramp rework, design-to-deploy** — kept over the
   vault notes' suggestion of senior-interrupt volume; the demotion is now framed as deliberate
   in Q_AND_A, with a rehearsed swap if the room pushes (ledger supports either).
3. **Consolidation answer** ("pick one tool — why Cursor?"): concede workflow portability as a
   feature of customer ownership; own the evaluation standard (governed workflow, measured
   outcomes, transferable ownership, auditable telemetry) — Cursor arrives as the only candidate
   with data. Probe which tools the two stalled teams used before choosing the expansion target.
4. **`composer-2.5` pin, not Sonnet**: Cursor's subagent `model` field takes `inherit` or a
   concrete model ID — there is **no** `fast` tier value. Composer 2.5 is Cursor's own fast/cheap
   model ($0.5/$2.5 per 1M vs Sonnet 5's frontier $3/$15), its ID appears verbatim in the docs'
   examples (demo-safe), and pinning Cursor's differentiated model is itself positioning.
   Hard-coded names are fine **if registered**: the README policy table is the registry,
   `/update-rules` detects staleness, Maya owns the cadence.
5. **Verified product facts** (do not overclaim beyond these): admin dashboard model
   allow/blocklists exist at provider/model level and override subagent frontmatter (silent
   fallback to a compatible model) — sources: cursor.com/docs/enterprise/llm-safety-and-controls,
   cursor.com/docs/subagents.md, cursor.com/docs/models. Per-phase routing is a paved-road
   default, never "enforced."

## Open items (mirror of CHECKLIST.md — verify there for current state)

1. **Dry-run the subagent dispatch in a fresh Cursor window** — the agents are untested
   in-product; docs-vs-product drift is exactly the overclaim risk. Confirm: planner plan +
   approval stop, `/pre-review` delegation, `composer-2.5` resolves. Rehearse the honest inline
   fallback if not.
2. Ally call: get HM name/email + confirm subject line (`John <Last> - Challenge - Solution` per
   her email vs `...Solution Plan` per handout; draft follows her email).
3. Send `ENGAGEMENT_EMAIL.md` the day before the session.
4. Rehearse: capability map → model policy → enforcement ladder without prompting; timed demo
   (8–10 min, 12 cap); one unrehearsed `/scope-issue` run; run `/update-rules` once pre-session.

## Evidence versus interpretation

- **Confirmed:** repo/branch state, artifact contents, commit SHAs, the handout's requirements,
  the product facts cited above with sources.
- **Inference:** that model strategy and Cursor-native architecture will be re-tested in the
  final (from screen behavior; high confidence).
- **Not known:** final schedule, interviewer names/roles, HM contact, whether subagent dispatch
  behaves as documented on John's plan (hence the dry-run). Verify rather than invent.
