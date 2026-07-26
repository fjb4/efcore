# Cursor onboarding layer

This directory is a **thin Cursor integration layer** over conventions this repo *already*
documents. It exists so a new engineer's first contribution comes out convention-correct without a
human walking them through the codebase — and so the team can maintain it without the person who
built it.

## The one idea: point, don't copy

The maintainers already invested in machine-readable conventions:

- **[`.github/copilot-instructions.md`](../.github/copilot-instructions.md)** — the repo-wide
  conventions (code style, `ConfigureAwait(false)`, the `.Internal` / `[EntityFrameworkInternal]`
  rule, the API-baseline process, NativeAOT safety, resx-only error messages).
- **[`.agents/skills/`](../.agents/skills)** — deep, area-specific guides (testing, query-pipeline,
  migrations, model-building, change-tracking, scaffolding, …).

This layer **does not duplicate any of that.** The rules *point* at those documents as the source of
truth and add only the **deltas Cursor needs and those docs don't cover**: repo geography, the
local (macOS/SQLite) environment constraints, workflow commands, and glob scoping. When the
maintainers update their conventions doc or a skill, this layer follows automatically — there is
nothing here to fall out of sync **except** the deltas, which is the one thing to watch (see
[Keeping it honest](#keeping-it-honest-known-limits) below).

## What's here

| Piece | What it is |
|-------|------------|
| `rules/conventions-source-of-truth.mdc` | Keystone. Points at the conventions doc + the area skills. Always on. |
| `rules/architecture-map.mdc` | Repo geography: project roles, dependency direction, test layout. Always on. |
| `rules/coding-style.mdc` | Thin C# delta for `src/**` (the conventions doc holds the rest). |
| `rules/test-conventions.mdc` | Test placement, SQL baselines, the local SQLite-only target. Scoped to `test/**`. |
| `rules/contribution-workflow.mdc` | Contribution lifecycle + the approved-context / fork-only boundary. Always on. |
| `commands/first-contribution.md` | `/first-contribution <issue>` — plan → scaffold → verify a first change. |
| `commands/pre-review.md` | `/pre-review` — check a change against the rules before human review or CI. |
| `commands/scope-issue.md` | `/scope-issue <request>` — turn a rough request into a convention-aware issue. |
| `commands/start-onboarding-pilot.md` | `/start-onboarding-pilot <context>` — baseline, co-design, and hand off a measured pilot. |
| `commands/renewal-evidence.md` | `/renewal-evidence [pilot path]` — audit outcome evidence without inventing missing data. |
| `commands/update-rules.md` | `/update-rules [scope]` — drift check: diff this layer against its sources of truth (read-only). |
| `agents/contribution-planner.md` | Subagent for `/first-contribution` Step 1. `model: inherit`, `readonly` — planning inherits the deliberately selected parent model and cannot edit. |
| `agents/contribution-implementer.md` | Subagent for `/first-contribution` Steps 2–3, after human approval. Explicit Composer binding (`model: composer-2.5[fast=false]`) — cost-efficient bounded execution, not maximum reasoning depth. |
| `agents/skeptical-reviewer.md` | Subagent behind `/pre-review`. `model: inherit`, `readonly` — fresh context, strong model, cannot edit. |
| [`../tools/onboarding-metrics/`](../tools/onboarding-metrics/ramp_metrics.py) | Mines ramp metrics (time-to-first-PR, rework) from real PR history; feeds the evidence ledger. |
| [`../.github/workflows/ramp-metrics.yml`](../.github/workflows/ramp-metrics.yml) | Dispatch-run wrapper so the team owns the metrics refresh after handoff (manual now; schedulable once the cohort is pinned). |
| [`../.cursorignore`](../.cursorignore) | Keeps agent context on the source of truth and off build noise / private docs. |
| [`../.github/workflows/cursor-onboarding-checks.yml`](../.github/workflows/cursor-onboarding-checks.yml) | The fast SQLite guardrail CI. "Agent suggests, CI enforces." |
| [`staged/`](staged/README.md) | Gate-ready designs for the scale steps — the [software-factory map](staged/SOFTWARE_FACTORY.md), read-only GitHub MCP config, restricted new-joiner agent, agent-PR policy, issue→draft-PR automation, drift-automation spec, and the inert workflows that enforce them. Inert here; each enables only after its named review gate. |

**How they fit:** rules are the always-available context; commands are the workflows that cite those
rules by name; the subagents under `agents/` are the model policy as code — commands delegate each
phase to an agent whose frontmatter pins the model tier and write access, while the human approval
gate stays in the main conversation; CI is the enforcement backstop. `/pre-review` is deliberately
the *local mirror* of the four CI gates, so problems surface before the push, not after.

## Model orchestration (policy as code)

Phase-appropriate models, expressed in versioned subagent frontmatter rather than a memo:

| Phase | Agent | Frontmatter | Why |
|-------|-------|-------------|-----|
| Plan / repository analysis | `contribution-planner` | `model: inherit`, `readonly: true` | High-context reasoning is spent where wrong-sibling errors start. |
| Bounded implementation | `contribution-implementer` | `model: composer-2.5[fast=false]` | Executing an approved plan needs a capable, cost-efficient model, not maximum depth — an explicit Cursor-native binding. `[fast=false]` selects the standard variant; a bare ID resolves to Fast at ~6x the token price (verified in-product 2026-07-26). |
| Skeptical review | `skeptical-reviewer` | `model: inherit`, `readonly: true` | Strong model, fresh unanchored context, cannot edit. |

The policy is defined by **phase, capability, risk, and cost** — the frontmatter is just its
current binding. `inherit` avoids naming a model wherever the phase should simply run at the main
agent's deliberately selected level — it inherits the parent's selection rather than guaranteeing
a reasoning tier; the one **pinned ID** (the implementer's Composer binding) is a concrete name
because that is what the product's `model` field takes, and a concrete name goes stale — so it is a
**declared drift surface**: `/update-rules` checks the frontmatter against this table on the
maintainer's monthly cadence, and changing the pin is a one-line, reviewable git diff. This routing
is a **paved-road default, not an enforcement claim**: the enforced boundary is the team admin's
model allow/blocklist, which overrides frontmatter (Cursor falls back to a compatible model when a
requested one is blocked or unavailable). Deterministic enforcement remains CI's job.

## Extending it

**Add or change a rule** (`rules/*.mdc`):

1. First ask: **is this already in the conventions doc or a skill?** If yes, don't add a rule —
   point at it. A rule earns its place only by covering a *delta* those docs miss.
2. Frontmatter decides when it loads: `alwaysApply: true` for repo-wide orientation; `globs:` (e.g.
   `src/**/*.cs`, `test/**/*.cs`) for rules that should wake only when a matching file is in play.
   Keep always-on rules short — they cost context on every request.
3. Keep it a **delta and a pointer**, never a restatement. Link the authoritative doc with a
   relative markdown link so the model reads it on demand.

**Add a command** (`commands/*.md`): one markdown file per command; the filename is the command name
(`first-contribution.md` → `/first-contribution`). Follow the shape of the existing three: number
the steps, **cite the applicable rules by name** (don't re-derive conventions), stop for approval
before editing when the command writes code, and end with a **Guardrails** block (approved context,
fork-only, draft-vs-act). Reference the matching skill instead of restating it.

**Add a subagent** (`agents/*.md`): only when a phase needs different context isolation, write
access, or model tier than the conversation it runs in — otherwise a command is enough. The
frontmatter carries the policy (`model`, `readonly`); the body should *point* at the command steps
it executes, never restate them. If you pin a concrete model ID, **add it to the
[model-orchestration table](#model-orchestration-policy-as-code)** — that table is the registry of
pins `/update-rules` checks, so a pinned name gets adjusted when models change or better-fit ones
ship, instead of silently rotting in frontmatter nobody rereads.

**Change the CI:** `cursor-onboarding-checks.yml` is intentionally SQLite-only and single-runner to
stay under ~10 minutes — it is *not* the maintainers' full `Build.yml`. Keep new gates fast and
local; heavy provider/matrix coverage belongs in the upstream workflow, not here.

## Multi-audience doors

- **New engineer** → `/first-contribution` (scaffold) + `/pre-review` (self-check).
- **PM / product** → `/scope-issue` turns a request into a placed, testability-triaged issue.
- **QA** → `/pre-review`'s test-gap analysis proposes the missing spec/functional tests; CI runs them.
- **DevOps** → owns `cursor-onboarding-checks.yml` and `.cursorignore` (the enforcement + context
  boundary).
- **Engineering manager / deployment lead** → `/start-onboarding-pilot` defines the outcome,
  cohort, controls, and ownership before rollout.
- **ADM / account leadership** → `/renewal-evidence` separates observed results from proxies,
  hypotheses, and missing evidence.

## Keeping it honest (known limits)

- **Delta drift.** The pointers self-heal when the source docs change, but the *deltas* (architecture
  map, glob scoping, style deltas) are judgment calls that can age. Run `/update-rules` (read-only
  drift check) monthly or after any layout/conventions shift — it diffs this layer against the
  current conventions doc, skills, and repo shape, and reports broken pointers and contradicted
  deltas.
- **Letter vs. intent.** Rules encode conventions the model can check mechanically; they don't
  replace reviewer judgment. `/pre-review` is advisory — CI and a human are still the gate.
- **Routing is a default, not a lock.** Subagent `model:` frontmatter is a paved-road choice —
  editable (visibly, in git) and subject to silent fallback when the admin allowlist blocks a
  model. The allowlist is the boundary and CI the enforcement; never present the routing itself as
  a control.
- **Context isolation is by construction, not by enforcement.** Subagents start with fresh context,
  but a shell-capable agent can read Cursor's own transcript store
  (`~/.cursor/projects/<workspace>/agent-transcripts/`) and reconstruct a prior conversation.
  Observed in a dry run: an implementer invoked with no plan recovered the previous conversation's
  plan by grepping that store and treated it as approved. The contracts here now forbid it, but an
  instruction cannot bound a capability — the real boundary is tool and command policy (sandbox,
  allowlists), with human approval and CI as the gates that hold.
- **Local scope.** Verification here is SQLite-only by environment constraint; SQL Server / Cosmos
  coverage is left to the maintainers' full CI.
