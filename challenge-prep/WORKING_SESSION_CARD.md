# 45-minute working session card

The interviewers are the internal Cursor team, not the customer. Get their names at the start,
address them by name, and ask them to flex roles explicitly.

The blocks below contain about **29 minutes of prepared airtime**. Interviewer questions and
decisions expand them across the 45-minute working session. Interruptions are the format working;
do not protect the outline by talking faster or deferring account-team input to the end.

## Board setup (prepare before the session - Cursor only)

Use one shared control surface, `LIVE_SESSION_BOARD.md`, plus the actual repository artifacts.
The Markdown file is not a presentation or a teleprompter; it is the internal account team's live,
version-controlled decision record.

Pin these tabs in order:

1. `challenge-prep/LIVE_SESSION_BOARD.md` - alignment, live decisions, operating loop, metrics,
   commitments.
2. `.cursor/README.md` - the repository capability map.
3. `.cursor/commands/start-onboarding-pilot.md` - the live plan contract and approval gate.
4. `metrics/ramp-dashboard.md` - historical evidence fallback, opened only if useful.
5. `.cursor/staged/README.md` - the staged-scale-step gate table, walked in Block 5.

Keep the Markdown board in source view while capturing decisions. Hide the sidebar and minimap,
turn on word wrap, increase editor zoom, and use heading navigation rather than hunting by scroll.
Prepared tables are for reading; edit only the short `LIVE` entries, decision checkboxes, and any
assumption that changes. Use strikethrough to preserve the changed assumption visibly.

**The four blanks are pre-mapped, not improvised:** renewal proof captures the ADM's missed risk
and Priya's threshold; pilot change captures the Finance framing or blocking dependency that
changes the design; operating owner captures the ADM's preferred weekly artifact and owner; next
move captures the evidence bar and expansion target. Empty blanks after the co-build mean the
questions need to land harder.

Execution discipline: lead verbally and type yourself (3-8 word entries); never ask interviewers
to co-edit or open a link; share the **entire screen** so all Cursor transitions stay visible. The
invariant is that at least one interviewer answer visibly changes the plan. Keep
`ACME_WORKING_SESSION_BOARD.png` as the static visual fallback; do not open Excalidraw in the
normal path.

## Block 1 - Open and create the working contract (3 minutes prepared)

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

**Start the visible decision board now** (`LIVE_SESSION_BOARD.md`; four entries: **renewal proof /
pilot change / operating owner / next move**) and keep it updated all session. The board is the
proof this is a working session: at least one interviewer answer must visibly change the pilot
plan on it — cohort, evidence threshold, expansion target, or a control. If nothing has changed
by the co-build block, ask a question whose answer forces a change.

## Block 2 - Validate decisions and surface blockers (4 minutes prepared)

Show the three-decision table:

- David = accountable champion; Maya = builder champion; Priya = sponsor target.
- Primary measures = first meaningful PR, rework, design-to-deploy.
- Pilot target = 42 days toward 14, with quality as a hard guardrail.

State the five assumptions from the prep memo. Ask the AE/RD:

> Is Finance evaluating a price decision, a standardization decision, or both? That changes how we
> stage the evidence, even though it does not change the pilot controls.

Decision to land: one team, one cohort, one agreed outcome definition.

Ask the field-engineer role:

> Which data or access dependency is most likely to block this in Acme's environment?

## Block 3 - Use the artifact as a co-build surface (7 minutes prepared)

Do not repeat the technical screen. Use a short proof:

1. **Lead with the capability map — 90 seconds, before any command runs** (a screen-feedback
   correction; do not skip). Frame it as Acme's risks, not a product taxonomy — name the Cursor
   component only after the business job it performs:

   ```
   Acme risk                Cursor response
   fragmented tools      -> one governed model + workflow surface (rules, commands, admin policy)
   one expert workflow   -> distributable package + repo-owned adaptation (skills, subagents,
                            Marketplace plugin at scale)
   unclear ROI           -> usage attribution + delivery-system outcomes (analytics + Git/CI data)
   quality concern       -> independent review + human judgment + deterministic CI (Bugbot, gates)
   ```

   Say the selection was deliberate: every surface earns its place or stays out — MCP, restricted
   agents, and cloud agents/automations are consciously staged, not missing. (If asked about
   custom modes: removed in Cursor 2.1; the same property is staged as a read-only subagent.)
2. **State the model policy in one breath:** planning and repository analysis inherit the
   deliberately selected main-conversation model and run read-only; bounded edits after approval
   run on an explicit Composer binding — Cursor-native and cost-efficient; high-risk review gets
   an independent reviewer plus deterministic gates; Auto where the router has fresher
   information. It is not a slide — the routing lives in `.cursor/agents/` frontmatter; open an
   agent file if pressed. The admin model allowlist is the enforced boundary.
3. Show `.cursor/README.md` as the on-disk proof of the map.
4. Invoke `/start-onboarding-pilot` with the Acme assumptions.
5. Review its baseline, cohort, stakeholder, and evidence plan **with the room, and revise it
   live**: take the ADM's renewal-risk answer and the field engineer's blocking-dependency answer
   from earlier and change the plan where they demand it — cohort definition, a control, the
   evidence threshold. Update the Markdown decision board as it happens. Stop at the approval
   gate.
6. Show `/first-contribution` and `/pre-review` as the already-proven engineer/QA path.
7. Show `/renewal-evidence` and emphasize that missing evidence stays missing.
8. Show the existing green SQL/test/CI evidence only if useful; do not tour the translator.

Say:

> Maya and Nina should change these assets with me. If I leave behind a black box that only I can
> operate, the engagement has failed.

Then ask the ADM:

> Which of these artifacts would help you most in the weekly account update: the evidence ledger,
> the risk/decision log, or the champion quote capture?

## Block 4 - Co-build, controls, and ownership transfer (5 minutes prepared)

Use the customer-owned operating-loop section of the Markdown board:

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

Walk the three sessions:

- Session 1: define outcome and controls; co-build; baseline.
- Session 2: new joiner drives a real task; observe; capture evidence.
- Session 3: Maya modifies the workflow; second engineer runs it; David presents.

Pull the interviewers in:

> As ADM, where would you want a checkpoint rather than a status report?

> As RD, what makes this repeatable enough to matter commercially?

Decision to land: Acme owns every operating artifact, the SA has a planned exit, and expansion
requires a successful second-user run.

## Block 5 - Show the software-factory progression (4 minutes prepared)

Say:

> We are not proposing an autonomous factory on day one. This pilot creates Acme's first governed
> production line: plan, approve, build, review, test, and deploy with named owners and evidence.
> Once that line proves safe, we connect it to Acme's systems, distribute it across teams, and
> delegate bounded work to cloud agents without removing the human, CI, or deployment controls.

Walk the progression:

| Stage | Operating model | Control that must hold |
|---|---|---|
| **Pilot: repeatable** | Human-gated commands, repository rules, subagents, CI, evidence capture | Approved plan, human review, deterministic CI |
| **Connected: governed** | MCP supplies issue/PR/CI context; hooks capture or block; Bugbot reviews; Team Marketplace distributes | Least privilege, admin policy, Nina/Marcus approval |
| **Scaled: automated** | Cloud agents execute bounded approved work; scheduled automation checks drift and refreshes evidence | Scoped environment/secrets, PR review, CI, Marcus-controlled deploy |

Ground the connected and automated rows in committed artifacts. Open
`.cursor/staged/SOFTWARE_FACTORY.md` first and read **The line** down two columns — live today is
the pilot, staged next is the factory, one gate per step across. Then name the staged files by
gate and owner (under 2 minutes total):

| Staged artifact | Enable gate (owner) |
|---|---|
| `SOFTWARE_FACTORY.md` - the production line, stage by stage | The map itself; nothing to enable |
| `mcp.github.json` - read-only GitHub MCP config | Security review (Marcus) |
| `new-joiner-agent.md` - restricted read-only joiner agent | Team adoption call (Maya + David) |
| `agent-pr-policy.md` + `workflows/agent-pr-guardrails.yml` - draft-only, provenance, evidence separation | Nina (review) + Marcus (enforcement) — **adopt first** |
| `issue-to-draft-pr.md` + `workflows/issue-to-draft-pr.yml` - labeled issue -> draft PR | Marcus + Nina + David |
| `drift-automation-spec.md` - scheduled drift-check automation | Security + platform review (Marcus, with Maya) |

If you only have one minute, spend it on the issue-to-draft-PR trade: a human applies the label,
the plan gate moves from before-the-code to plan-plus-diff-before-merge, and that is exactly why
the eligible class list is narrow, starts empty, and belongs to Nina.

Each is committed, inert, and labeled with its gate, owner, and precondition. Show and discuss
them; never run or enable one - that is Acme's decision, and the design is what earns the gate.

Say:

> Not enabled is a decision with a design attached. This is the artifact Marcus's security review
> would approve or reject, not a slide promising it later.

Make the north-star factory job concrete:

```text
Ravi-approved backlog item
        ↓
bounded cloud-agent execution
        ↓
PR + Bugbot/Nina review
        ↓
deterministic CI
        ↓
Marcus-controlled deployment
        ↓
automatic evidence capture
```

This progression does three enterprise jobs: govern Acme's fragmented tool usage, scale a
team-owned paved road, and connect Cursor adoption to delivery outcomes.

Ask the field-engineer role:

> What would you require before enabling MCP, hooks, Bugbot, or a cloud agent for this workflow?

Land:

> Foreground, human-gated work is the pilot. MCP, hooks, team rules, and cloud automation are scale
> steps after the workflow earns trust.

Ask the RD:

> Which of these scale steps makes the wedge commercially repeatable, and which would you hold
> until the second-team result?

## Block 6 - Renewal-defense readout (4 minutes prepared)

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

If the consolidation question lands ("pick one tool"), own the evaluation standard:

> Acme should standardize — on whichever tool clears this bar: governed workflow in version
> control, measured ramp and rework on real backlog work, transferable ownership, and telemetry
> leadership can audit. We built that bar, and we're happy to be judged by it. Cursor is the
> candidate Acme can evaluate immediately, because the governed workflow and evidence mechanisms
> already exist — the pilot is how we earn the customer outcome data.

## Block 7 - Leadership asks, commitments, and close (2 minutes prepared)

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

### Close

> We are not promising that Cursor makes onboarding 3x faster. We are proposing a controlled way to
> find out, with speed, quality, and production reach measured; Acme ownership built in; and Priya
> engaged before the renewal story is already written. The next action is a 45-minute baseline
> session with David and Maya, preceded by the data request and stakeholder confirmation.

Stop. Invite Q&A and feedback.

**Receiving the ~15-minute feedback block (evaluated behavior, even if unscored):** take notes
visibly, ask one clarifying question about the most critical piece of feedback, and do not
rebut — "that's fair, here's how I'd adjust" beats defending the plan. A customer-facing role is
being watched for how coaching lands.

## If time slips

Cut:

- Technical implementation details.
- More than one example from the old demo.
- Feature-by-feature Cursor tour.
- Full 90-day calendar.

Never cut:

- The capability map and the one-breath model policy (screen-feedback corrections).
- Assumptions.
- Champion ladder.
- Metric definitions and quality guardrail.
- Teach-back/handoff.
- Internal team asks and owners.
- Honest evidence labels.
