---
name: renewal-evidence
description: Audit onboarding-pilot evidence for an account or renewal readout
---

# Renewal evidence audit

Produce a skeptical, read-only audit of an onboarding pilot. Separate what the evidence supports
from what the team hopes is true, and leave the working tree unchanged.

**Input:** an optional pilot workspace path (for example,
`/renewal-evidence pilot/library-onboarding`). If omitted, locate the single workspace under
`pilot/`. If there are none or several, ask which one to review.

## Step 1 - Validate the evidence contract

Read the pilot charter, evidence ledger, decision log, and handoff checklist. Report any missing
file or required field.

Confirm that the charter fixes these definitions before the results:

- Meaningful PR.
- Ramp clock start and stop.
- Included/excluded task rubric.
- Cohort and comparison method.
- Three primary metrics.
- Quality guardrail and stop conditions.

If a definition was added after results were known, flag the risk of outcome-driven measurement.

## Step 2 - Inventory evidence

Group entries by confidence label:

- **Observed** - directly measured during the pilot with a source artifact.
- **Historical** - comparable baseline evidence with date/cohort provenance.
- **Proxy** - a simulation or cold-module cohort; state what it cannot prove.
- **Hypothesis** - a target or expected relationship, not a result.
- **Missing** - required evidence that is absent or not verifiable.

For each entry verify:

- Source and timestamp.
- Cohort/task identifier without unnecessary personal data.
- Owner verification.
- Link to a before/after artifact where applicable.
- Consistent units and definitions.

Do not convert a quote, usage event, generated-code volume, or demo checkpoint into a productivity
claim.

## Step 3 - Calculate only supported measures

For each of the three primary metrics:

1. Show the definition and owner.
2. Show every included observation and the sample size.
3. Calculate the cohort median and range only when the units and definitions are comparable.
4. Compare against the approved historical baseline without implying causality from a small cohort.
5. State whether the target or guardrail was met.
6. Link the result to the account decision it informs.

When the ledger lacks an accepted historical baseline (or a baseline row has no verifiable
provenance), compute one live instead of skipping the comparison: run
`python3 tools/onboarding-metrics/ramp_metrics.py --authors <baseline cohort> --stdout` and report
its output labeled **historical**, noting it is pending the accountable owner's acceptance. Use
`--stdout` so the audit stays read-only; the script suppresses anything the data cannot support
(MISSING/TRUNCATED) rather than inferring it.

For time to first meaningful PR and design-to-deploy, decompose the duration when timestamps allow:
planning, implementation, review, CI, and deployment wait. For rework, use the QA-owned taxonomy,
not an agent-generated quality score.

Weekly active seats and senior-engineer interruptions may be supporting measures when they are not
one of the selected three. Segment usage by team/role where possible; organization-wide averages can
hide the pilot signal.

## Step 4 - Audit ownership and champion evidence

Report whether:

- The named maintainer changed a rule or command without the pilot author.
- A second engineer completed the workflow.
- QA and DevOps confirmed their controls held.
- The accountable engineering owner can present the result.
- Practitioner, control-owner, and accountable-owner quotes have source/date/approval.

Treat an enthusiastic quote as qualitative evidence, not an outcome metric.

## Step 5 - Produce the readout

Output five sections:

1. **Decision headline** - one sentence, calibrated to the evidence.
2. **Metric table** - baseline, pilot result, sample size, confidence, guardrail, and decision.
3. **Before/after artifacts and quotes** - source links and what each proves.
4. **Gaps and risks** - missing evidence, confounders, proxy limits, quality or ownership concerns.
5. **Recommendation** - expand to one team, iterate the pilot, or stop; name the evidence required
   for the next decision.

End with two versions of the conclusion:

- A three-sentence account-team summary for the deployment manager and account executive.
- A plain-language executive summary for the customer's engineering director.

## Guardrails

- **Read-only** - do not edit the ledger or repair missing data during the audit.
- **No fabricated precision** - do not calculate from missing, incompatible, or ambiguous values.
- **No causal overclaim** - a small before/after pilot is directional unless the design supports a
  stronger inference.
- **No feature-checklist defense** - connect Cursor use to measured workflow outcomes and controls.
- **No hidden proxy** - label rehearsals, simulations, sample data, and unfamiliar-module cohorts.
- **Quality and ownership matter** - speed alone is not a renewal result.

