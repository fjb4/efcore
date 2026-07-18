# 45-minute working session card

The interviewers are the internal Cursor team, not the customer. Get their names at the start,
address them by name, and ask them to flex roles explicitly.

## 0:00-2:00 - Open and create the working contract

Say:

> Thanks for the kickoff. I am going to run this as our Acme account-team working session, not as a
> customer presentation. I will treat [name] as the ADM, [name] as AE/field engineer when we go
> technical, and either of you as RD when we reach the renewal. I will make assumptions visible,
> ask you for the account judgment only you have, and leave with decisions and owners.

Then:

> My working thesis is that this is a standardization-and-proof problem, not primarily a seat
> problem. We can use the 12-person high-adoption team to test whether a governed workflow takes
> first meaningful PR from six weeks toward two without increasing rework.

Ask the ADM:

> Before I lock that path: what is the most important renewal risk I have missed, and what would
> Priya have to see to repeat this story herself?

## 2:00-7:00 - Align on decisions and assumptions

Show the three-decision table:

- David = accountable champion; Maya = builder champion; Priya = sponsor target.
- Primary measures = first meaningful PR, rework, design-to-deploy.
- Pilot target = 42 days toward 14, with quality as a hard guardrail.

State the five assumptions from the prep memo. Ask the AE/RD:

> Is Finance evaluating a price decision, a standardization decision, or both? That changes how we
> stage the evidence, even though it does not change the pilot controls.

Decision to land: one team, one cohort, one agreed outcome definition.

## 7:00-12:00 - Map the customer system

Draw or show:

```
Ravi: scoped outcome
        |
new joiner -> plan -> HUMAN APPROVAL -> build -> Nina review -> Marcus CI/deploy
                   Maya co-builds                 |
                         David owns outcome -------+
                                      |
                               Priya scale decision
```

Say:

> The artifact is not the solution by itself. The solution is this operating loop, with named
> owners and evidence at each handoff.

Ask the field-engineer role:

> Which data or access dependency is most likely to block this in Acme's environment?

## 12:00-22:00 - Use the artifact as a co-build surface

Do not repeat the technical screen. Use a short proof:

1. Show `.cursor/README.md`: rules, commands, skills, CI; "point, don't copy."
2. Invoke `/start-onboarding-pilot` with the Acme assumptions.
3. Review its baseline, cohort, stakeholder, and evidence plan. Stop at the approval gate.
4. Show `/first-contribution` and `/pre-review` as the already-proven engineer/QA path.
5. Show `/renewal-evidence` and emphasize that missing evidence stays missing.
6. Show the existing green SQL/test/CI evidence only if useful; do not tour the translator.

Say:

> Maya and Nina should change these assets with me. If I leave behind a black box that only I can
> operate, the engagement has failed.

Then ask the ADM:

> Which of these artifacts would help you most in the weekly account update: the evidence ledger,
> the risk/decision log, or the champion quote capture?

## 22:00-31:00 - Co-build and ownership transfer

Walk the three sessions:

- Session 1: define outcome and controls; co-build; baseline.
- Session 2: new joiner drives a real task; observe; capture evidence.
- Session 3: Maya modifies the workflow; second engineer runs it; David presents.

Pull the interviewers in:

> As ADM, where would you want a checkpoint rather than a status report?

> As field engineer, what would you require before enabling MCP or a cloud agent?

> As RD, what makes this repeatable enough to matter commercially?

Land:

> Foreground, human-gated work is the pilot. MCP, hooks, team rules, and cloud automation are scale
> steps after the workflow earns trust.

## 31:00-39:00 - Renewal-defense readout

Present each metric with definition, source, owner, and decision:

| Metric | Source | Owner | Renewal decision |
|---|---|---|---|
| First meaningful PR | HR/start date + Git/PR | David | Did ramp materially improve? |
| Ramp rework | Review taxonomy + PR events | Nina | Did speed preserve quality? |
| Design-to-deploy | issue + PR + CI/CD | Ravi/Marcus | Did value reach the SDLC? |

Say:

> At day 55, I want Priya to see individual observations, the median, the sample size, and the
> before/after artifacts. If the cohort is a proxy, the label says proxy. If the data is weak, the
> recommendation is another pilot, not a stronger adjective.

Ask the RD:

> Is that evidence threshold strong enough to defend a multi-year renewal? If not, what commercial
> objection remains untested?

Competitive response:

> I would not ask Finance to pay for a feature checklist. I would ask them to compare the measured
> outcome of Acme's standardized Cursor workflow against today's fragmented baseline—or against a
> controlled alternative if they require it.

## 39:00-44:00 - Leadership asks and account-team commitments

Name:

1. Product/analytics escalation for telemetry, hooks, team rules, and policy blockers.
2. Cursor executive sponsor for Priya's midpoint evidence review.
3. Competitive/TCO framework plus reusable pilot kit.

Then assign the internal team:

- SA: technical lead, co-build, controls, evidence integrity.
- ADM: stakeholder cadence, adoption telemetry, champion development.
- AE: buying process, competitive frame, commercial path.
- RD: executive air cover and decision standard.

Ask:

> What would each of you change before we take this plan to Acme?

## 44:00-45:00 - Close

> We are not promising that Cursor makes onboarding 3x faster. We are proposing a controlled way to
> find out, with speed, quality, and production reach measured; Acme ownership built in; and Priya
> engaged before the renewal story is already written. The next action is a 45-minute baseline
> session with David and Maya, preceded by the data request and stakeholder confirmation.

Stop. Invite Q&A and feedback.

## If time slips

Cut:

- Technical implementation details.
- More than one example from the old demo.
- Feature-by-feature Cursor tour.
- Full 90-day calendar.

Never cut:

- Assumptions.
- Champion ladder.
- Metric definitions and quality guardrail.
- Teach-back/handoff.
- Internal team asks and owners.
- Honest evidence labels.

