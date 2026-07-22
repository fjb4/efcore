# Acme onboarding pilot

> **Working thesis:** Use the 12-person high-adoption team to test whether an Acme-owned,
> governed workflow moves first meaningful PR from 42 days toward 14 without increasing rework.
>
> **Internal roles:** ADM = `[name]` | AE/field engineer = `[name]` | RD = `[name/either]`

## Decisions we need today

Update these four lines throughout the session. Keep each live entry to 3-8 words.

- [ ] **Renewal proof** - What must Priya see? **LIVE:** `TBD`
- [ ] **Pilot change** - What assumption or blocker changes the design? **LIVE:** `TBD`
- [ ] **Operating owner** - Who owns the weekly evidence artifact? **LIVE:** `TBD`
- [ ] **Next move** - What evidence bar unlocks a second team? **LIVE:** `TBD`

**Evidence labels:** observed | historical | proxy | hypothesis | missing

---

## 1. Align with the ADM

**Known:** 1,200 seats | 38% weekly active | 6 of 18 teams meaningfully active | renewal in ~90 days

**Working decisions**

- David is the accountable champion; Maya is the builder-champion; Priya is the sponsor target.
- Primary measures are first meaningful PR, ramp rework, and design-to-deploy.
- The target is 42 days toward 14; quality is a hard guardrail, not a trade.

**Assumptions to test**

- [ ] A 3-5-person cohort is available within 30 days; otherwise use a clearly labeled proxy.
- [ ] David will define "meaningful PR" before the pilot.
- [ ] Acme can provide six months of comparable Git, review, and CI/CD history.
- [ ] Security permits a repository-local prototype; connected/cloud surfaces require later review.
- [ ] The engagement optimizes the workflow; it does not mandate one model or automate everything.

**Ask the ADM:** What renewal risk have I missed, and what must Priya be able to repeat herself?

**Capture now:** Update **Renewal proof** above and strikethrough any corrected assumption.

---

## 2. Pilot and champion strategy

| Person | Role in the engagement | Proof of ownership |
|---|---|---|
| **David** | Accountable champion | Defines the outcome and presents the result to Priya |
| **Maya** | Technical builder-champion | Changes and maintains the workflow without the SA |
| **Priya** | Executive sponsor target | Sets the evidence threshold and decides whether to scale |
| **Nina** | QA/control owner | Defines rework and the quality guardrail |
| **Marcus** | DevOps/control owner | Approves CI/CD and environment boundaries |
| **Ravi** | Product/outcome owner | Supplies comparable roadmap work and tracks delivery reach |

**Decision to land:** One team, one cohort, one agreed outcome definition.

**Ask the AE/RD:** Is Finance making a price decision, a standardization decision, or both?

**Ask the field engineer:** Which data or access dependency is most likely to block the pilot?

**Capture now:** Update **Pilot change** above and revise the affected assumption or control.

---

## 3. Co-build in Cursor

### Account risk -> Cursor response

| Acme risk | Cursor response |
|---|---|
| Fragmented tools | One governed model and workflow surface: rules, commands, and admin policy |
| One expert workflow | Repo-owned adaptation now; distributable package and Team Marketplace at scale |
| Unclear ROI | Cursor attribution plus Git, review, and CI/CD outcome evidence |
| Quality concern | Independent review, human judgment, and deterministic CI |

**Model policy:** Read-only planning and analysis inherit the deliberately selected parent model;
bounded edits use an explicit Composer binding after approval; high-risk review gets an independent
reviewer plus deterministic gates; the admin allowlist is the enforced boundary.

**Working proof**

1. Open [the repository capability map](../.cursor/README.md).
2. Run [`/start-onboarding-pilot`](../.cursor/commands/start-onboarding-pilot.md) and stop at approval.
3. Revise its cohort, control, or evidence contract with the account team's input.
4. Name the engineer/QA path: [`/first-contribution`](../.cursor/commands/first-contribution.md) ->
   [`/pre-review`](../.cursor/commands/pre-review.md) -> deterministic CI.
5. Show [`/renewal-evidence`](../.cursor/commands/renewal-evidence.md): missing evidence stays missing.

**Ask the ADM:** Which weekly artifact helps most: evidence ledger, decision log, or champion quotes?

**Capture now:** Update **Operating owner** above.

---

## 4. Customer-owned operating loop

```text
Ravi: scoped outcome
        |
new joiner + Maya -> plan -> HUMAN APPROVAL -> build -> Nina review -> Marcus CI/deploy
                                     |                              |
                                     +----- David owns outcome -----+
                                                        |
                                                Priya scale decision
```

| Session | Customer work | Ownership test |
|---|---|---|
| **1. Baseline + co-design** | Define outcome and controls; adapt the workflow | Named owners accept the charter and evidence contract |
| **2. Observed contribution** | New joiner drives a real task; SA observes | Evidence is captured without turning the demo into a result |
| **3. Teach-back + handoff** | Maya changes the workflow; a second engineer runs it | David, not the SA, presents the outcome |

**Ask the ADM:** Where do you want a decision checkpoint rather than a status report?

**Ask the RD:** What makes this repeatable enough to matter commercially?

### Software-factory path

| Stage | Operating model | Control that must hold |
|---|---|---|
| **Repeatable** | Human-gated commands, repository rules, agents, CI, evidence capture | Approved plan, human review, deterministic CI |
| **Connected** | MCP context, hooks, Bugbot, and team distribution | Least privilege, admin policy, Nina/Marcus approval |
| **Automated** | Bounded cloud-agent execution and scheduled evidence/drift work | Scoped secrets and egress, PR review, CI, Marcus-controlled deploy |

**Capture now:** Update **Next move** above with the agreed scale gate.

---

## 5. Renewal defense

| Renewal question | Metric | Source | Owner |
|---|---|---|---|
| Did ramp materially improve? | First meaningful PR | HR/start date + Git/PR | David |
| Did speed preserve quality? | Ramp PR rework | Review taxonomy + PR events | Nina |
| Did value reach the SDLC? | Design-to-deploy | Issue + PR + CI/CD | Ravi + Marcus |

**Priya sees:** individual observations, median, sample size, before/after artifacts, and honest
evidence labels. If the cohort is a proxy, call it a proxy. If the evidence is weak, recommend
another pilot rather than a stronger adjective.

Open [the historical evidence fallback](../metrics/ramp-dashboard.md) only if evidence rigor is
challenged. It is open-source history standing in for Acme data, not a fictional customer result.

**Competitive standard:** Acme should standardize on whichever tool produces a governed,
version-controlled workflow; measured ramp and rework on real work; transferable ownership; and
telemetry leadership can audit. Cursor is ready to be evaluated against that bar now.

**Ask the RD:** What commercial objection does this evidence still leave untested?

**Capture now:** Refine **Renewal proof** or **Next move** above if the evidence bar changes.

---

## 6. Commitments and close

### Three Cursor leadership asks

1. Product/analytics escalation for telemetry, hooks, team rules, and policy blockers.
2. A Cursor executive sponsor for Priya's midpoint evidence review.
3. A competitive/TCO framework and reusable onboarding-pilot kit.

### Internal account-team commitments

- **SA:** Technical lead, co-build, controls, and evidence integrity.
- **ADM:** Stakeholder cadence, adoption telemetry, and champion development.
- **AE:** Buying process, competitive frame, and commercial path.
- **RD:** Executive air cover and the decision standard.

**Ask the room:** What would each of you change before we take this plan to Acme?

### Decision recap

[Return to the four live decisions](#decisions-we-need-today), check each resolved item, and read
the changed plan back to the room. The default next action is a 45-minute baseline session with
David and Maya; replace it if the account team lands somewhere else.

> We are not promising that Cursor makes onboarding 3x faster. We are proposing a controlled way
> to find out, with speed, quality, and production reach measured; Acme ownership built in; and
> Priya engaged before the renewal story is already written.

## Feedback capture

- **Most important feedback:** `TBD`
- **Clarifying question:** `TBD`
- **Adjustment I would make:** `TBD`
