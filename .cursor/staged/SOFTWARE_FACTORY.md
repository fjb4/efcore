# The software factory: what we build toward (map, not a promise)

**Status: this file is the map.** Everything below is either **live today** in this repository,
**staged** here as a reviewable design, or **named and deliberately not designed yet**. Nothing on
this page is enabled by being written down.

A software factory is not "the agent ships code." It is a **production line with gates**: work
enters in a form an agent can act on, each stage has an owner and an artifact, and the line
produces evidence about itself. The pilot's job is to build the first line — small, human-gated,
and measured. Automation is what we add to a line that already works, one stage at a time, when
the evidence says the humans in that stage are spending their attention on the wrong thing.

## The line

| Stage | Acme owner | Live today | Staged next | The control that must hold |
|---|---|---|---|---|
| **Intake** — request becomes a placed, testable issue | Ravi (product) | `/scope-issue` | Read-only GitHub MCP so the issue, its links, and prior art load without transcription | Least privilege; the human still writes the acceptance criteria |
| **Plan** — issue becomes a grounded change plan | New joiner + Maya | `/first-contribution` step 1 (`contribution-planner`, read-only) | Same command, invoked by an automation on labeled issues, producing a plan comment | **Human approval before any edit.** Never automated away |
| **Build** — approved plan becomes a diff | New joiner | `/first-contribution` steps 2–3 (`contribution-implementer`) | Bounded cloud-agent execution → **draft** PR | Draft only, provenance-labeled, no self-merge |
| **Review** — diff meets independent judgment | Nina (quality) | `/pre-review` (`skeptical-reviewer`, read-only, advisory) | Bugbot on agent-authored PRs, with the same rules as context | Human review stays authoritative; Bugbot is a second opinion, not a gate |
| **Test** — deterministic verification | Marcus (platform) | `cursor-onboarding-checks.yml` (SQLite, ~10 min) | A guardrail job that enforces the agent-PR policy mechanically | CI is the enforcement boundary. Agent suggests, CI enforces |
| **Deploy** — change reaches production | Marcus | Acme's existing pipeline, unchanged | Unchanged | Deployment authority never moves into the agent surface |
| **Evidence** — the line reports on itself | David (outcome) | `ramp_metrics.py` + `/renewal-evidence` | Scheduled refresh once the cohort is pinned | Evidence leadership audits is generated on Acme's CI, not inside the vendor's surface |
| **Maintain** — the paved road stays true | Maya (builder) | `/update-rules` (read-only, monthly) | Scheduled multi-repo drift automation → draft remediation PRs | Findings and drafts only; the road changes through reviewed human merges |

Read the table down the "live today" column and you have the pilot. Read it down "staged next"
and you have the factory. Every step across is one review gate, not a re-platforming.

## Three horizons

| Horizon | What changes | What Acme must decide first |
|---|---|---|
| **1. Repeatable** (the pilot) | One team's workflow is versioned, owned, and measured. Humans drive every step | Cohort, outcome definition, rework taxonomy, local boundary |
| **2. Connected** | Context arrives automatically (MCP), the workflow distributes to more repos and roles, Bugbot reviews | Token scope, egress, admin model policy, who maintains the shared layer |
| **3. Automated** | Bounded work starts without a human starting it: labeled issues get drafted, drift gets checked, evidence gets refreshed | Which classes of work are safe to draft, the spend limit, the kill switch, who reads the queue |

The horizons are sequential for a reason: horizon 3 automation on a horizon 1 workflow just
produces unreviewed volume. Acme's first automated stage should be the one where a human is
currently doing something a rule already describes.

## Staged designs in this directory

| Artifact | Horizon | Enable gate (owner) | Precondition |
|---|---|---|---|
| [`mcp.github.json`](mcp.github.json) — read-only GitHub MCP server | Connected | Security review (Marcus) | Least-privilege token issued; foreground workflow trusted for evidence capture |
| [`new-joiner-mode.md`](new-joiner-mode.md) — restricted custom mode | Connected | Team adoption call (Maya + David) | Pilot feedback shows the default surface is too open for week-one joiners |
| [`issue-to-draft-pr.md`](issue-to-draft-pr.md) — labeled issue → draft PR automation | Automated | Security + engineering review (Marcus, Nina, David) | Agent-PR policy adopted; a task class with a repeatable acceptance rate identified |
| [`agent-pr-policy.md`](agent-pr-policy.md) — provenance, draft, and evidence rules for agent-authored PRs | Automated (precondition) | Nina + Marcus | None — this is the artifact that unblocks the others |
| [`drift-automation-spec.md`](drift-automation-spec.md) — scheduled multi-repo drift check | Automated | Security + platform review (Marcus, with Maya) | Workflow rolled out beyond one repository |
| [`workflows/`](workflows/) — inert GitHub Actions implementing the above | Automated | Marcus | Secrets provisioned; policy adopted |

## The whole workflow, not one engineer's

The onboarding wedge is the first product of this line, not its only one. The same stages serve
the partner roles, which is what makes it a factory rather than a personal productivity tool:

- **PM (Ravi)** — `/scope-issue` today; connected intake next. A product manager who can produce a
  placed, testability-triaged issue has done engineering work without writing code.
- **QA (Nina)** — `/pre-review`'s test-gap pass today; next, a bug report labeled `agent-ready`
  drafts its own failing regression test through the same issue→draft-PR line. Nina owns the
  policy that decides which classes qualify.
- **DevOps (Marcus)** — owns `.cursorignore`, the CI gates, the admin model allowlist, and every
  token in this directory. In the automated horizon he owns the automation scope, the spend limit,
  and the kill switch — the factory's on/off switch stays with platform.
- **Engineering (Maya, David)** — Maya maintains the road; David owns whether the line produced a
  business outcome.

## What stays human, permanently

Not a phasing statement — a design boundary. These do not move into the automated column at any
horizon:

1. **Approving a plan before code is written.** The gate that makes the workflow safe is the one
   that would be most convenient to remove.
2. **Merging.** Agents open drafts. Humans merge.
3. **Deploying.** Marcus's pipeline and authority are unchanged by anything here.
4. **Deciding what the evidence means.** `/renewal-evidence` audits claims; it does not upgrade a
   proxy into a result, and neither does an automation that runs it on a schedule.

## How we would know it is working

The factory is worth building only if each automated stage removes human effort *without* moving
work to a queue nobody reads. Per automated stage, capture:

- **Acceptance rate** — share of agent-drafted PRs a human takes forward (merged or edited then
  merged) rather than closing. Below a threshold Nina sets, the stage is noise; turn it off.
- **Human touch time** — time from draft opened to human decision. If this grows, the queue is
  the new bottleneck.
- **Rework** — the same taxonomy the pilot uses. Automation that raises rework fails the guardrail
  the same way a fast human ramp would.
- **Evidence separation** — agent-drafted PRs are labeled and counted **separately** from
  new-joiner PRs. A ramp number contaminated by automated volume answers no question Priya asked.
