# Cursor Final Challenge - Preparation Pack

## The answer in one sentence

Use the high-adoption 12-person team as a measured wedge: Maya co-builds a maintainable onboarding
workflow, David owns the operating outcome, Priya sees credible speed-and-quality evidence, and the
ADM gets a repeatable renewal story rather than a one-off demo.

## The three decisions to lead with

| Decision | Choice | Why |
|---|---|---|
| Primary champion | **David Park**, accountable champion | He owns the six-week ramp problem, the team goal, and the organizational follow-through. Maya is the technical builder-champion; Priya is the executive sponsor target. |
| Primary metrics | **Time to first meaningful PR**, **ramp PR rework rate**, **design-to-deploy cycle time** | Together they prove speed, quality, and reach across the SDLC. All can be grounded in Git, review, and CI/CD timestamps. |
| Pilot target | **Six weeks to two weeks**, with no increase in rework | "3x" is a target to test, not a result to promise. A speed gain does not count if quality falls. |

Weekly active seats remains an account-health and expansion metric, but it is not one of the three
primary outcome metrics. The pilot team already has high Cursor use, and Finance is asking what the
use produces. Senior-engineer interrupt volume is a useful secondary metric, but noisier to measure
reliably in a short pilot.

## Account diagnosis

This is not primarily a seat-activation problem. It is a standardization and proof problem:

- Cursor has grassroots pull but no durable workflow standard.
- The strongest team mostly uses Tab, Agent, and ad-hoc chat; it is leaving rules, commands, skills,
  CI interlock, and repeatable agent workflows on the table.
- Leadership sees three overlapping tools and duplicated spend.
- There is no executive champion, and the renewal is about 90 days away.
- The six-week onboarding bottleneck is specific enough to solve and important enough to earn an
  executive audience.

The renewal thesis is:

> Cursor is valuable to Acme if a governed, team-owned workflow materially moves the new-hire ramp
> curve without increasing rework, and if Acme can reproduce that result beyond one expert user.

Do not argue that Cursor deserves renewal because it has a longer feature checklist. Show that the
combination of repository-scoped context, reusable workflows, independent review, CI guardrails,
and enterprise observability reduces variation in how work reaches production.

## Explicit assumptions

State these near the beginning and invite correction:

1. Acme can provide a three-to-five-person pilot cohort within 30 days. Ideally these are actual new
   joiners; otherwise use engineers unfamiliar with the module as a clearly labeled proxy.
2. David can define "meaningful PR" before the pilot. Recommended definition: a non-trivial change
   accepted by a maintainer, through required CI, and merged or approved for merge.
3. Acme can provide six months of issue, PR, review, and CI timestamps for a comparable baseline.
4. Security permits a repository-local prototype. GitHub/issue-tracker MCP and cloud agents are
   optional later steps, subject to Acme's access and data policies.
5. The engagement optimizes the workflow first; it does not mandate one model or automate every
   contribution.

If there is no real new-hire cohort, say plainly that the cold-module exercise is directional and
must not be presented to Priya as observed new-hire impact.

## Champion ladder

### David Park - primary/accountable champion

- Owns the problem and the team goal.
- Defines "meaningful PR" and accepts the baseline.
- Opens the QA, DevOps, and PM doors.
- Delivers the outcome readout to Priya, with you and the ADM supporting.
- Success test: David can defend the result without Cursor in the room.

### Maya Chen - technical builder-champion

- Co-builds the rules and commands instead of receiving them.
- Reviews the source-of-truth pointers and owns drift.
- Facilitates the teach-back and makes the first post-handoff change.
- Supplies practitioner quotes and before/after artifacts.
- Risk: do not confuse enthusiasm with organizational authority.

### Priya Nair - executive sponsor target

- Aligns on the business question and evidence threshold early.
- Receives a midpoint signal, not a surprise deck at renewal time.
- Decides whether a second team should adopt the pattern.
- Success test: Priya repeats the ramp-and-quality outcome in the renewal conversation.

### Champion risk register

- **Maya gets pulled to other work** → her ownership is ratified by David as a team
  goal, not a side project.
- **David stays lukewarm** → the pilot is designed to move *his* metric first; the
  early checkpoint exists to show him movement on the ramp number he already owns.
- **Priya's staff-meeting question gets answered by someone else's initiative first**
  → the baseline lands in week 1, time-stamping the ramp story as this engagement's.

## Three-session co-build and enablement plan

### Session 1 - Baseline and co-design (90 minutes)

Attendees: David, Maya, one new joiner, Nina, Marcus, Ravi.

- Map the current path from roadmap item to production and mark delays, rework, and interruptions.
- David defines "meaningful PR"; Ravi supplies a real, bounded roadmap task.
- Nina defines quality gates and the unacceptable-regression threshold.
- Marcus validates CI and permission boundaries.
- Maya and the new joiner adapt the existing rules and `/first-contribution` plan gate.
- Capture the baseline cohort, data sources, owners, and confidence.

Exit criteria: signed pilot charter, two or three comparable tasks, baseline accepted, controls
approved, evidence ledger assigned.

### Session 2 - Paired pilot and observation (two 60-minute working blocks)

- The new joiner drives; Maya coaches; the SA observes and intervenes only when needed.
- Run issue -> grounded plan -> human approval -> implementation -> skeptical pre-review -> CI.
- Nina evaluates the proposed tests and reviews defects/rework.
- Marcus validates what reaches CI and where the workflow must stop.
- Record timestamps, review cycles, human interventions, and any failure or workaround.
- End with the new joiner explaining what each guardrail protects.

Exit criteria: at least one end-to-end contribution, honest evidence, named workflow changes, and
no hidden SA rescue.

### Session 3 - Handoff and scale decision (60 minutes)

- Maya changes a rule or command without the SA and explains the maintenance model.
- A second engineer runs the workflow from a fresh task.
- David presents the speed/quality/reach readout.
- Nina and Marcus confirm whether quality and CI controls held.
- Priya decides: iterate, expand to one stalled team, or stop.

Exit criteria: Acme-owned repository assets, named maintainers, a 30-day review cadence, and a
decision grounded in evidence.

## Ninety-day engagement shape

| Window | Outcome |
|---|---|
| Days 0-10 | Baseline, stakeholder alignment, security/permissions, pilot cohort, meaningful-PR definition |
| Days 11-35 | Co-build and paired pilot; evidence captured at each handoff |
| Days 36-55 | Teach-back and second-run validation without SA ownership |
| Days 56-70 | Priya midpoint readout; decide whether to expand to one stalled team |
| Days 71-85 | Validate repeatability, document gaps, assemble renewal evidence |
| Days 86-90 | ADM/AE renewal narrative and executive decision |

## Evidence design

### Metric 1 - time to first meaningful PR

- Start: engineer start date or module-assignment timestamp, fixed before analysis.
- End: first qualifying PR approved or merged, fixed before analysis.
- Report: cohort median plus each observation; never hide sample size.
- Baseline: comparable joiners from the prior six months.
- Target: median from about 42 days to 14 days.

### Metric 2 - ramp PR rework rate

- Definition: requested change cycles or PRs rejected/closed for correctness, test, convention, or
  CI reasons during the ramp window.
- Report: median material review cycles per qualifying PR and percentage needing major rework.
- Guardrail: the speed result is invalid if rework materially worsens.
- Nina owns the taxonomy; do not let Cursor grade itself.

### Metric 3 - design-to-deploy cycle time

- Start: scoped task accepted by engineering.
- End: production deployment or the closest auditable production-ready gate.
- Decompose: planning, coding, review, CI, deployment wait.
- Ravi and Marcus validate that the result reaches product and platform surfaces, not merely code
  generation.

### Supporting evidence

- Weekly active/provisioned seats, segmented by team and role.
- Senior-engineer interrupt count or minutes, if Acme already has a credible collection method.
- Before/after issue, plan, PR, review finding, CI trace, and deployment record.
- Quotes from Maya (builder), new joiner (learner), Nina/Marcus (control owners), and David
  (accountable outcome owner).
- Confidence label on every claim: observed, historical baseline, proxy, or hypothesis.

## What to ask from the ADM

1. **Stakeholder choreography:** secure David and Maya as named owners, a 20-minute baseline
   alignment with Nina/Marcus/Ravi, and two Priya checkpoints (evidence threshold and midpoint
   readout).
2. **Account evidence:** provide segmented Cursor telemetry, identify the two stalled teams and
   their failure modes, and clarify the commercial/competitive decision process.
3. **Renewal partnership:** maintain the decision log, pressure-test what is executive-worthy, and
   package the evidence with the AE while the SA runs the technical engagement.

The SA should not ask the ADM to project-manage the pilot. Send a short weekly update containing
decisions, evidence, risks, and the next specific ask.

## Three asks from Cursor leadership

1. **Product/analytics:** a named product escalation path for enterprise analytics, hooks, team-rule
   rollout, and cloud-agent policy blockers, with help exporting pilot data at the team level.
2. **Executive support:** a Cursor engineering or product executive for Priya's midpoint readout,
   briefed on the evidence and competitive context rather than arriving for a generic relationship
   meeting.
3. **GTM/enablement:** a validated competitive/TCO framework and a reusable onboarding-pilot kit
   (data dictionary, security checklist, evidence ledger, and reference architecture) that the
   account team can apply to the next team without reinventing the engagement.

## Cursor-specific positioning

Use only the capabilities that serve the account:

- **Project rules** carry the library's conventions in version control.
- **Commands** make the plan, contribution, review, and evidence workflows discoverable.
- **Skills** provide deeper domain guidance on demand without bloating always-on context.
- **A skeptical review agent/subagent** separates creation from review.
- **Hooks** can add audit/measurement or block unsafe actions after Acme approves the design.
- **MCP** can connect issue, PR, CI, and documentation systems after least-privilege review.
- **Cloud agents/automations** are a scale step after the foreground workflow has earned trust.
- **Team rules and admin analytics** support organization-wide governance and adoption evidence.

Current official references:

- [Rules](https://docs.cursor.com/context/rules)
- [Commands](https://docs.cursor.com/en/agent/chat/commands)
- [Modes](https://docs.cursor.com/en/agent/modes)
- [Cloud agents](https://cursor.com/cloud)
- [Enterprise controls and analytics](https://cursor.com/enterprise)
- [AI Code Tracking API](https://docs.cursor.com/en/account/teams/ai-code-tracking-api)
- [Enterprise hooks, team rules, analytics, and sandbox](https://cursor.com/blog/enterprise)
- [Subagents and skills](https://cursor.com/changelog/2-4)

Do not imply that rules are security controls. Repository permissions, sandbox/policy, human
approval, CI, and audit are the stronger protections.

## What not to do

- Do not repeat the 33-minute technical screen.
- Do not promise a 3x result before a cohort exists.
- Do not make Maya the only champion.
- Do not use 38% WAU as proof of business value.
- Do not claim every Cursor feature is required.
- Do not expand to all 18 teams before one second team reproduces the result.
- Do not let sample data, rehearsed checkpoints, or a proxy cohort appear to be customer evidence.
- Do not turn the role-play into a presentation delivered at silent interviewers.
