---
name: start-onboarding-pilot
description: Baseline, co-design, and hand off a measured new-engineer onboarding pilot
---

# Start an onboarding pilot

Turn a customer onboarding goal into a small, measurable, team-owned pilot around the repository's
existing contribution workflow. The output is an engagement plan and, after approval, a lightweight
evidence workspace. It does not implement a product change or claim an outcome before evidence
exists.

**Input:** the pilot context typed after this command: business problem, target team, intended
cohort, time window, and any known baseline or stakeholders. If an essential field is missing, make
the smallest explicit assumption that keeps the planning work moving and mark it for validation.

Work in three steps. **HARD STOP after Step 1** - show the plan and wait for explicit approval. Do
not create pilot files or edit repository assets before approval.

## Step 1 - Frame the pilot (no edits)

1. Restate the business question in outcome language. Separate the target from a promised result.
2. Define the unit of value:
   - What qualifies as a "meaningful PR"?
   - What starts and stops the ramp clock?
   - What task classes are in and out?
3. Propose a small cohort and a comparison baseline. Prefer real new joiners. If unfamiliar-module
   engineers are the only practical option, label them as a **proxy cohort** and state what the
   proxy cannot prove.
4. Name the owners at each workflow boundary:
   - Engineering manager: accountable outcome owner.
   - Staff engineer/maintainer: technical builder and workflow maintainer.
   - Product: real, bounded work and design/start timestamp.
   - QA: quality taxonomy and unacceptable-regression threshold.
   - DevOps/platform: CI, permissions, and deployment/end timestamp.
5. Select exactly three primary metrics from:
   - Time to first meaningful PR.
   - Ramp PR rejection/rework rate.
   - Weekly active/provisioned seats.
   - Senior-engineer interrupt volume.
   - Design-to-deploy cycle time.
6. For each metric give the definition, source, owner, baseline, target/guardrail, sample-size plan,
   and the decision it informs. Label any unavailable field **missing**; never infer a value.
7. Map the co-build workflow to the existing assets rather than duplicating them:
   - Product scopes a real issue with `/scope-issue`.
   - The new engineer uses `/first-contribution`, including its plan approval gate.
   - QA/maintainers use a fresh `/pre-review`.
   - CI remains the deterministic gate.
   - `/renewal-evidence` audits the resulting evidence.
8. Propose two or three working sessions that transfer ownership. The final session must include a
   maintainer changing the workflow without the pilot author and a second person running it.
9. List assumptions, data/access dependencies, privacy/security checks, stop conditions, and what is
   explicitly out of scope. MCP, hooks, cloud agents, or automations are scale options only after
   their data, permissions, and control model are approved.

Output a concise pilot plan:

- Business question and target (not a promise).
- Cohort and comparison.
- Stakeholder/owner map.
- Three-metric evidence table.
- Two-to-three-session co-build and handoff plan.
- Assumptions, risks, stop conditions, and excluded scope.
- The exact evidence artifacts to create after approval.

Then stop and ask the accountable owner to approve or change the outcome definition, cohort,
metrics, and controls.

## Step 2 - Create the pilot workspace (only after approval)

Create `pilot/<short-pilot-name>/` with four concise Markdown files:

1. `charter.md`
   - Approved business question, target, dates, cohort, comparison, owners, included task rubric,
     controls, stop conditions, and excluded scope.
2. `evidence-ledger.md`
   - One row per observation with timestamp/source, metric, baseline or pilot, value, unit, cohort
     member/task identifier, confidence label (**observed**, **historical**, **proxy**,
     **hypothesis**), artifact link, and owner verification.
   - Leave unknown values blank and mark them missing.
3. `decision-log.md`
   - Date, decision, owner, evidence used, alternatives, and revisit trigger.
4. `handoff-checklist.md`
   - Named maintainer, teach-back date, maintainer-authored workflow change, second-user run,
     QA/DevOps sign-off, review cadence, known limits, and next-team decision.

Seed the ledger's **baseline** rows from real history rather than leaving them blank: run
`python3 tools/onboarding-metrics/ramp_metrics.py --authors <baseline cohort>` (writes
`metrics/ramp-dashboard.md`; the `ramp-metrics` workflow refreshes it after handoff). Its rows
enter the ledger labeled **historical**, with the definitions it proxies (start dates, the
meaningful-PR threshold) marked pending until the accountable owner approves them.

Do not add fictional results or customer-sensitive data. Templates and field names are enough until
approved evidence is available.

## Step 3 - Report the next working session

Report:

- Files created.
- The first 60-90 minute co-build agenda.
- Data and access needed before the session.
- The three decisions the customer team must make.
- The specific asks for the deployment/account manager.

Do not schedule meetings, message stakeholders, enable integrations, or change production access.

## Guardrails

- **Evidence before claims** - every result is observed, historical, proxy, hypothesis, or missing.
- **Customer ownership** - the pilot fails if the workflow still depends on its original author
  after the handoff session.
- **Quality is co-primary** - a faster ramp is not a success if material rework, defects, or bypassed
  gates increase.
- **Approved context and permissions** - follow `contribution-workflow`; do not connect external
  systems or move customer data without explicit approval.
- **Reuse the existing workflow** - do not restate or fork `/scope-issue`, `/first-contribution`,
  `/pre-review`, repository rules, area skills, or CI.
- **No automatic external action** - do not create issues/PRs, send messages, or trigger cloud work
  unless explicitly asked after the plan is approved.

