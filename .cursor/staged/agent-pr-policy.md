# Staged: policy for agent-authored PRs (the precondition artifact)

**Status: staged, and it is the first thing to adopt.** Nothing else in the automated horizon
should be enabled before this exists, because every automation in
[`SOFTWARE_FACTORY.md`](SOFTWARE_FACTORY.md) produces pull requests that a human did not start —
and a repository with no rule for those learns the rule the expensive way. Owners: **Nina**
(review and class list), **Marcus** (enforcement and secrets).

## The four rules

1. **Draft, always.** An agent-opened PR is a draft until a human converts it. Conversion is a
   deliberate human act and the point at which someone owns the change.
2. **Declared provenance.** Label `agent-authored`, title prefixed `[agent-draft]`, and a PR body
   that carries the plan the agent followed plus the `.cursor/` commit SHA it ran against. A
   reviewer must be able to see *what reasoning* produced the diff, not just the diff.
3. **Human review is authoritative.** Existing CODEOWNERS review applies unchanged. Bugbot and
   `/pre-review` are advisory second opinions. No agent-authored PR merges on automation alone,
   and no auto-merge configuration is added for this class.
4. **Counted separately.** Agent-authored PRs are excluded from ramp and rework metrics by label,
   and tracked in their own ledger. The renewal evidence answers "did new joiners ramp faster" —
   automated volume in that number would corrupt the only question leadership asked.
   Today [`ramp_metrics.py`](../../tools/onboarding-metrics/ramp_metrics.py) samples by cohort
   author, so an agent identity's PRs already fall outside it — by accident of authorship, not by
   design. Enabling any producer automation includes adding the explicit label exclusion.

## In-class work (Nina owns this list)

An issue may be labeled `agent-ready` only if its class has been run manually through
`/first-contribution` enough times to have an observed acceptance rate. Reviewed quarterly, and
immediately after any class falls below threshold.

**Starting list (proposed, to be set at the enable gate):** none. The list starts empty on
purpose. The pilot populates it with classes that earned their place.

**Permanently out of class:** public API surface and anything touching the API baseline,
provider-specific behavior beyond the local SQLite target, security or auth paths, data migration,
and any issue whose real work is deciding what the behavior should be.

## Enforcement

Conventions are not controls. The mechanical gate is
[`workflows/agent-pr-guardrails.yml`](workflows/agent-pr-guardrails.yml), which fails the check on
any PR carrying the `agent-authored` label that is not a draft, is missing the plan section, or
targets a protected path on the out-of-class list. Branch protection makes that check required.

**What this does not claim:** a label can be removed and a title can be edited, by a human or by a
sufficiently capable agent. The label is a *declaration*, and CI is what makes the declaration
load-bearing. The real boundaries remain branch protection, the admin model and tool policy, and
the scoped credential — the same posture the rest of this layer takes: agent suggests, CI
enforces.

## Acceptance ledger (per class, per month)

| Field | Why it is captured |
|---|---|
| Drafts opened | Denominator. Volume alone is not a result |
| Taken forward (merged, or edited then merged) | Acceptance rate. Below Nina's threshold the class leaves the list |
| Closed unmerged | The honest cost of the stage |
| Median human touch time (draft → decision) | Detects the queue becoming the new bottleneck |
| Rework tags on merged agent drafts | Same taxonomy as the pilot; automation does not get a softer quality bar |

This ledger feeds [`/renewal-evidence`](../commands/renewal-evidence.md) as its **own** claim —
"automation drafted N changes at an M% acceptance rate" — labeled observed or missing like every
other claim, and never folded into the ramp result.

## Escalation and stop

Any of Nina, Marcus, or David can disable an automation without consulting the others. Stopping
costs nothing: every automated stage has a human-invoked equivalent that keeps working, which is
the property that made it safe to automate in the first place.
