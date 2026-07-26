# Cursor Final Challenge - Presenter Script

Use this as a glanceable cue sheet, not something to read word for word. Keep it on a second
screen or print it; do not show it in the shared Cursor window.

## North star

> You've already seen how the engineering pieces work. Today is about how Acme would keep them
> running, how we'd know whether new engineers are getting productive faster, and what we'd need
> to see before trying this with another team.

## The session in one line

**Align the account team -> test the plan -> show the existing proof briefly -> transfer ownership
-> defend the renewal -> agree on the next move.**

## At-a-glance run of show

| Clock | Screen | Job | Landing point |
|---|---|---|---|
| 0:00-3:00 | Empty live notes | Establish the working contract | Hypothesis, not promise |
| 3:00-8:00 | Build assumptions | Learn what Priya must see | First visible plan change |
| 8:00-13:00 | Add decisions and owners | Land owners and blockers | One team, cohort, definition |
| 13:00-16:00 | `.cursor/README.md` | Establish prior technical proof | Do not repeat the screen |
| 16:00-25:00 | Build ownership plan | Explain three-session handoff | Acme must operate it without you |
| 25:00-27:00 | Factory map | Connect staged prototypes to Cursor capabilities | Inactive by design |
| 27:00-34:00 | Add evidence requirements | Define speed, quality, and reach | Evidence decides expand/iterate/stop |
| 34:00-39:00 | Add commitments | Make leadership asks | Precise help, named owners |
| 39:00-45:00 | Completed live notes | Read back the working record | One concrete next action |

## Non-negotiables

- This is an **internal Cursor account-team working session**, not a customer presentation.
- Address the interviewers by name and ask them to flex between ADM, AE/field engineer, and RD.
- Keep `ACME_LIVE_WORKING_SESSION.md` on screen for most of the session and build it visibly.
- Type only short bullets. Do not build tables or diagrams live.
- Capture at least one answer that visibly changes the plan; the stalled-pilot self-challenge is
  the reserve if answers run thin.
- Do not repeat the technical-screen implementation demo.
- Do not promise a 3x result. Test about six weeks toward two weeks without increased rework.
- Call historical, proxy, hypothesis, observed, and missing evidence what they are.
- End with decisions, owners, and a specific next action.

---

# Before screen sharing

## Shared Cursor window

Pin these tabs in this order:

1. `challenge-prep/ACME_LIVE_WORKING_SESSION.md`
2. `.cursor/README.md`
3. `.cursor/staged/SOFTWARE_FACTORY.md`
4. `.cursor/staged/README.md`
5. `metrics/ramp-dashboard.md`
6. `.github/workflows/cursor-onboarding-checks.yml`

Keep these available for Q&A, but do not open them in the normal path:

- `challenge-prep/LIVE_SESSION_BOARD.md` (prepared-content fallback only)
- `.cursor/commands/first-contribution.md`
- `.cursor/commands/pre-review.md`
- `.cursor/commands/start-onboarding-pilot.md`
- `.cursor/commands/renewal-evidence.md`
- `.cursor/commands/update-rules.md`
- `.cursor/agents/`
- `.cursor/staged/mcp.github.json`
- `.cursor/staged/new-joiner-agent.md`
- `.cursor/staged/issue-to-draft-pr.md`
- `.cursor/staged/agent-pr-policy.md`
- `.cursor/staged/workflows/issue-to-draft-pr.yml`
- `.cursor/staged/drift-automation-spec.md`

## Display

- Share the entire Cursor window.
- Hide notifications, the minimap, and unnecessary sidebars.
- Turn on word wrap and increase editor zoom.
- Keep the sparse Markdown working file in source view so changes are visible.
- Use heading navigation rather than scrolling around.
- Put this script on a second screen or paper.
- Type three-to-eight-word bullets yourself; never ask the interviewers to co-edit.
- Stop typing while someone is giving a substantive answer.

## Preflight checks

- Confirm `ACME_LIVE_WORKING_SESSION.md` contains headings only.
- Practice reaching each heading with heading navigation.
- Verify the `challenge-prep` branch and a clean, understood working tree.
- Verify the capability-map links open.
- Verify the staged README matches the files actually present.
- Verify the metrics dashboard opens.
- Keep the prior technical-screen proof chain available, but do not depend on a live rerun.

**Staged-directory state:** `new-joiner-agent.md` supersedes the removed custom-mode prototype.
Before presenting, verify the staged README, factory map, and directory agree and contain no stale
`new-joiner-mode.md` references. Mention the product change once in the factory section, then
return immediately to Acme's goal.

---

# 0:00-3:00 - Open the working session

## SHOW

`challenge-prep/ACME_LIVE_WORKING_SESSION.md`.

Start with the sparse headings visible. Do not preload the answers.

## SAY

> Thanks for making the time. I'd like to use this as a working session for the Acme account, not
> as a finished customer presentation. As we go, could you flex between the ADM, AE or field
> engineer, and RD roles?

> I'm starting with a mostly empty working note. I'll put my assumptions on the screen, get your
> read, and build out the plan with you. At the end, I'll play back what we decided, who owns what,
> what Priya needs to see, and what would unlock the next step.

## DO

- Under **Account-team roles**, type:

  ```text
  - [Name]: ADM
  - [Name]: AE / field engineer / RD
  ```

- Under **Working hypothesis**, type while speaking:

  ```text
  - 12-person active team
  - About 6 weeks toward 2 weeks
  - No increase in rework
  ```

## SAY

> My read is that Acme's first problem isn't the number of seats. Different teams are using Cursor
> in different ways, and leadership can't tell whether it's helping. I'd start with the 12-person
> team that's already using Cursor. We'd test whether a clearer onboarding path—one we'd help Acme
> build in Cursor and Acme would maintain after the pilot—can cut the time to a new engineer's
> first meaningful PR from about six weeks toward two weeks, without increasing rework.

## LAND

**This is a hypothesis and operating plan, not a promised result.**

---

# 3:00-8:00 - Align with the ADM

## SHOW

The live file, heading **Assumptions to test**.

## SAY

> I'm starting with this team because we don't have to create interest from scratch. They're
> already using Cursor, and they have a real problem we can measure.

> I'm making four assumptions: we can get a small group of new engineers, David will define up
> front what counts as a meaningful PR, Acme can show us what happened with similar hires, and
> we can run the pilot within Acme's existing approved Cursor setup. Anything that adds new
> credentials, external access, or unattended execution would wait for Marcus and Acme's security
> team.

## DO - seed the assumptions

Type only:

```text
- Small cohort available
- Meaningful PR defined first
- Comparable baseline accessible
- Existing Cursor setup approved
```

## ASK - ADM

> From the ADM seat, what's the biggest renewal risk I'm missing? And what would Priya need to see
> before she'd repeat this story herself?

## DO

- Listen without defending the prepared plan.
- Ask one short clarifying question if needed.
- Under **Evidence required**, type `- Priya needs: [three-to-eight-word answer]`.

Then branch on what the answer did to the assumptions — do not force the strike-through:

**If it invalidates an assumption**, strike it through and type the replacement directly below it.

> That's helpful. It means `[old assumption]` isn't quite right; the real bar is `[their answer]`.
> I'm changing it now because that should shape the pilot, not sit in the meeting notes.

**If it confirms the plan**, append `— confirmed` to the matching assumption and say so; a
validated assumption is also a visible outcome, and pretending otherwise looks staged.

> Good — that matches my read, so I'm marking that assumption confirmed rather than open. That's
> one less thing we're guessing about when we walk into Acme.

## ASK - ADM (reserve — the self-challenge you control)

Use this if the first answer ran thin or only confirmed the plan; otherwise hold it for the
8:00–13:00 block. This is the guaranteed plan-change beat, because it attacks your own assumption:

> One thing I want to challenge in my own plan: two Acme teams piloted and stalled. What do we
> know about why? I'm asking because my fourth assumption — that we can run inside the existing
> approved setup — might be exactly what killed them, and I'd rather design around that now than
> find out in week three.

## DO

- Under **Assumptions to test**, revise the fourth assumption or add
  `- Stall cause: [their answer / unknown - data requested]`.
- If the cause is unknown, that itself is the plan change: the data request to the ADM moves from
  the email into the working record as a named dependency.

## LAND

**The plan has visibly responded to account-team input — an assumption changed, or was confirmed
and the stalled-pilot risk is now in the plan.**

---

# 8:00-13:00 - Land the wedge, champions, and controls

## SHOW

The live file, headings **Decisions** and **Owners**.

## SAY

> I don't think one person can do every job here. David owns the six-week problem and can take the
> result to Priya. Maya can build this with us and keep it working after I leave. We need both.

> Then I'd keep each decision with the person who already owns it. Nina decides what counts as
> significant rework. Marcus owns CI, permissions, and deployment. Ravi gives us real work of
> similar size so we aren't picking tasks that make Cursor look good.

## ASK - AE/RD

> Do you think Finance is mainly trying to lower the cost, choose one tool, or both?

## ASK - FIELD ENGINEER

> From the field-engineer side, what data, access, or control issue is most likely to block us?

## DO

- Under **Decisions**, type:

  ```text
  - Pilot: 12-person active team
  - Champions: David + Maya
  - Cohort: [decision]
  - Finance lens: [their answer]
  ```

- Add or revise one short assumption, control, or dependency.
- Under **Owners**, add:

  ```text
  - David: accountable outcome
  - Maya: workflow builder
  - Priya: decision to expand
  - Nina: quality guardrail
  - Marcus: CI and deployment
  - Ravi: comparable work
  ```

## SAY

> Before we take this to Acme, I want us aligned on the team, the group we're measuring, and what
> counts as a meaningful PR. Otherwise we'll get to renewal with a number everyone can argue about.

## LAND

**David is accountable; Maya is the builder; quality and platform have independent owners.**

---

# 13:00-16:00 - Show the existing Cursor proof, briefly

## SHOW

Switch to `.cursor/README.md`.

Show only:

1. The opening "point, do not copy" idea.
2. The asset table.
3. The multi-audience map.

Do not tour individual rule or command files.

## SAY

> You've already seen this engineering path run, so I won't replay the technical screen. You
> saw it ground the issue, stop for plan approval, make the change, catch a problem in a fresh
> review, fix it, and clear CI.

> For an Acme engineer, the path is still pretty simple. Product scopes real work. The new joiner
> runs `/first-contribution`. A person approves the plan. `/pre-review` gives them a fresh second
> look, and CI enforces the checks that can't be left to judgment.

> Underneath that, the rules point to Acme's existing conventions instead of copying them. The
> commands make the path repeatable, and the agents separate planning, implementation, and review.
> The human reviewer and CI still have the final say.

## SHOW - 20 seconds

Point at the model table and the planner/implementer rows.

## SAY

> One thing I changed after the technical screen was the model routing. You asked how I'd use
> different models for planning and implementation. `/first-contribution` now sends those stages
> to separate agents. Planning inherits the model I choose for the main conversation and runs
> read-only. After a person approves the plan, implementation moves to a pinned Composer model.

> That model choice and write access are now versioned in the repository, so the team can review
> and change them.

## SAY

> The part I've added for Acme is everything around that engineering path: who keeps it up to date,
> how we tell whether it's helping, and what has to happen before another team uses it.

## RETURN

Return immediately to `ACME_LIVE_WORKING_SESSION.md`.

## LAND

**The engineering proof is established; the evaluated work today is turning it into customer
value.**

---

# 16:00-25:00 - Co-build and transfer ownership

## SHOW

The live file, heading **Owners**.

## SAY

> The files aren't enough by themselves. Acme needs people who know what they own and can run this
> without me. Here's how we'd build that ownership over three working sessions.

## SAY - SESSION 1

> In the first session, we'd agree on what counts as a meaningful PR and set up the pilot. Ravi
> chooses the kinds of tasks we'll use. Nina says what counts as a significant redo. Marcus
> confirms which CI checks and deployment process the pilot will use. Maya and I adapt the Cursor
> files together, while the new joiner helps us test whether they're understandable and useful.
> Everyone leaves responsible for something; they aren't just reviewing my work.

## SAY - SESSION 2

> In the second session, the new joiner drives a real contribution and Maya coaches. I mostly
> watch. We capture the timing, review cycles, interventions, failures, and workarounds. If I have
> to quietly rescue the run, that's a failed ownership test, and we record it that way.

## SAY - SESSION 3

> The third session tells us whether I can step away. Maya changes the files without me, and a
> second engineer uses them. Nina and Marcus confirm that their checks worked. Then David, not
> Cursor, presents the result.

## TRIM - pre-decided, if the clock is slipping

This is the longest block and sits directly before the overloaded factory section. Sessions 1 and
3 carry the ownership logic — keep them full. Session 2 compresses to one sentence:

> In the second session, the new joiner drives real work, Maya coaches, and I watch and log every
> intervention.

If still behind, merge the two ADM asks into one breath and drop the RD repeatability ask — the
27:00–34:00 RD question covers the same ground. Keep the weekly-record-owner answer in some form;
the 39:00 recap reads it back.

## ASK - ADM

> Where should we require a go-or-no-go decision—after we agree on the pilot, after the first
> engineer uses it, or when Priya reviews the results?

## ASK - ADM

> Once the pilot starts, who at Acme should keep the weekly record of results and decisions up to
> date?

## ASK - RD

> From the RD seat, what would make this repeatable enough to matter beyond this one team?

## DO

- Type `- Weekly results record: [owner]`.
- Under **Decisions**, add the agreed checkpoint or ownership test.
- Under **Next move**, add `- Three sessions: build together -> real work -> handoff`.
- Under **Next move**, add `- Second-user run before handoff`.

## LAND

**The pilot fails if it still depends on the SA after the handoff session.**

---

# 25:00-27:00 - Connect the staged prototypes to the software-factory goal

## SHOW

Reveal the `.cursor/staged` folder in the Explorer, then open
`.cursor/staged/SOFTWARE_FACTORY.md`, section **The line**.

Stay on the table. Open `issue-to-draft-pr.md`, the YAML workflows, or the other staged files
only if asked — the Q&A drill-down map covers each one.

## SAY

> I've also prototyped where this goes next. These files live in `.cursor/staged`, which is
> deliberately inactive—Cursor loads nothing from that folder—and I'm not proposing Acme turn any
> of it on during the pilot.

> By "software factory," I mean a repeatable path from an idea to a reviewed, tested, and deployed
> change, with someone responsible at each step—not an agent shipping code by itself. The "Live
> today" column is the human-gated pilot; "Staged next" automates one step at a time.

> The most concrete step: once the pilot shows which kinds of work are safe and repeatable, a
> person adds an `agent-ready` label to a GitHub issue, and Cursor Automation—or an Acme-owned
> workflow on the Cloud Agents API—runs the same repository rules and opens a draft PR carrying
> its plan. It's the pieces Acme has already tested, triggered by a label.

> People keep every decision that matters: a person applies the label, a person reviews the plan
> and the code, CI checks it, a person merges, and Marcus's existing process controls deployment.
> Nothing approves, merges, or deploys itself.

> One product note: the custom modes named in the handout were removed in Cursor 2.1, so the
> plan-first new-joiner experience is a versioned, read-only agent Acme can review in Git instead.

Held for Q&A, not spoken: the plan-approval-moves-into-the-draft-PR tradeoff, the supporting
prototypes (MCP context, Bugbot, drift automation), and the custom-modes rebuild detail — see the
Q&A drill-down map and `Q_AND_A.md`.

[Source for rehearsal: Cursor 2.1 changelog](https://cursor.com/changelog/2-1)

## DO

- Return to `ACME_LIVE_WORKING_SESSION.md`.
- Under **Scale gate**, type `- Agent-ready label; draft PR only`.
- If the room has already named a stronger gate, capture that instead.

## LAND

**The staged files prove a Cursor-specific path to the factory without pretending Acme should
enable everything on day one.**

---

# 27:00-34:00 - Renewal-defense readout

## SHOW

The live file, heading **Evidence required**.

## SAY

> Now to the question Finance actually cares about. Usage matters, but this team already uses
> Cursor. More activity by itself doesn't tell us whether onboarding got better.

> I'd anchor the pilot on three outcomes: time to first meaningful PR for speed, rework during
> ramp for quality, and design-to-deploy time to see whether the improvement makes it through the
> rest of the delivery system.

## DO

Type:

```text
- Ramp velocity: David
- Rework guardrail: Nina
- Design to deploy: Ravi + Marcus
- Labels: observed / historical / proxy / missing
```

## WALK THE METRICS

### Time to first meaningful PR

> David defines what starts the clock, what stops it, and what counts as a meaningful PR before the
> pilot begins. When we report the results, we show each engineer's time, how many engineers
> participated, the median, and the range.

### Ramp rework

> Nina decides what counts as material rework. If people move faster but create more review
> cycles, defects, or bypassed gates, the pilot didn't succeed.

### Design to deploy

> For design-to-deploy time, Ravi and Marcus agree on when the work starts and when it reaches
> production. That way, we measure whether work is actually delivered—not just whether Cursor
> helps generate code faster.

## SAY

> For every number or conclusion, I'd say where it comes from: something we directly observed in
> the pilot, Acme's historical data, an indirect signal, an assumption we're still testing, or
> information we don't have yet. If we use engineers who are new to the module instead of actual
> new hires, that's still useful, but it only tells us whether the workflow is usable. It doesn't
> prove that new hires become productive faster.

> Before we take the results to Priya, we'd check what we directly observed, what we're inferring,
> and what's still missing. That tells us whether the honest next step is to try another team,
> adjust the pilot, or stop.

## ASK - RD

> Would this be enough for Priya to decide whether we try a second team? If not, what would she
> still need to see for the renewal?

## DO

- Revise the Priya-evidence bullet or **Scale gate** if the answer changes the bar.

## LAND

**If the evidence is weak, the recommendation is another test, not a stronger adjective.**

---

# 34:00-39:00 - Leadership asks and account-team commitments

## SHOW

The live file, headings **Owners** and **Next move**.

## SAY

> To make this work, I'd ask Cursor leadership for three specific things.

## SAY - three asks

1. **Product and analytics**

   > First, I'd ask someone from product or analytics to help us see who in the pilot had access to
   > Cursor and who actually used it, and to help if a product or admin issue gets in the way. Git
   > and CI tell us whether delivery improved; Cursor data tells us whether people actually used
   > the workflow.

2. **Executive support**

   > Second, if the early results are promising, I'd ask the ADM to schedule a review with Priya
   > early enough that we can act before the renewal. I'd also ask a Cursor product or engineering
   > leader to join if Priya has product or enterprise concerns that I can't make commitments on.
   > That leader can answer those questions and own any Cursor follow-up.

3. **GTM and enablement**

   > Third, Finance is asking whether Acme should keep paying for overlapping tools. I'd need a
   > current, fact-checked comparison of their price, capabilities, and the cost of operating each
   > option. That lets the AE and me combine the pilot results with the cost picture and give
   > Finance an honest recommendation. And the pilot is half of that answer already: it produces
   > the outcome numbers Finance asked for on a governed, instrumented workflow that neither of
   > the other tools has stood up at Acme. I'd also want a reusable pilot kit so the ADM and I
   > aren't rebuilding this process for every team.

## SAY - internal commitments

> On our side, I'd run the technical work and make sure we don't overstate the results. I'd ask the
> ADM to keep the right people involved and help David and Maya succeed, the AE to handle the
> renewal path, and the RD to challenge our thinking and get the right executive support.

## ASK - ROOM

> Before we take this to Acme, what would each of you change?

## DO

- Capture the most material adjustment under **Decisions**.
- Under **Owners**, add the relevant internal Cursor commitment.
- Under **Next move**, type the agreed first customer action.
- Do not defend the prepared plan.
- Say how the adjustment changes the next step.

## LAND

**The SA runs point and gives the ADM precise, economical asks—not another program to manage.**

---

# 39:00-45:00 - Recap and close

## SHOW

Return to the top of `ACME_LIVE_WORKING_SESSION.md`.

## DO

- Read the file from top to bottom.
- Check that assumptions, decisions, owners, evidence, scale gate, and next move are represented.
- Name any unresolved item honestly.
- State the owner and date/trigger for resolving it.

## SAY

> Let me play back where we landed.

> We're testing `[what we agreed to test]`, and the biggest change we made today was `[most important
> decision]`.

> `[owner]` keeps the weekly results record up to date, and Priya needs `[evidence requirement]`.

> We won't try this with another team or turn on more automation until `[what must happen first]`.

> So we're not promising that Cursor makes onboarding three times faster. We're agreeing on a
> fair way to test it, protect quality, and make sure Acme can keep it running if it works.

> The next step is a 45-minute session with David and Maya to agree on how we'll measure the
> current six weeks. Before that, we'll send the data request and confirm who needs to be there.

## STOP

Do not add another feature summary. Invite questions and feedback.

---

# Timing cutoffs

## If five minutes behind

Cut:

- The model-orchestration detail.
- The individual staged-artifact explanations. Keep only the one-sentence factory boundary.
- Session 2 narrative — use its one-line form from the 16:00–25:00 TRIM note — and the RD
  repeatability ask in that block.

Do not cut:

- Live account-team input that changes the plan.
- Champion and ownership logic.
- Three-session handoff (sessions 1 and 3 stay full; session 2 may compress).
- Metric definitions and evidence labels.
- Leadership asks.
- Working-record recap.

## If ten minutes behind

Use these one-line bridges:

> You've already seen the engineering pieces work. The rest of this is about who at Acme runs
> them and how we'll know whether they're helping.

> The files for connecting systems and automating work are here, but they stay off until Acme's
> owners approve them.

> For renewal, we're measuring speed, quality, and whether the change reaches production—and we're
> being plain about what each number does and doesn't prove.

Then move directly to leadership asks and the working-record recap.

---

# Q&A drill-down map

| If asked about | Open | One-line answer |
|---|---|---|
| The engineer workflow | `.cursor/commands/first-contribution.md` | Plan, human approval, bounded implementation, fresh review, CI |
| Independent review | `.cursor/commands/pre-review.md` | Advisory fresh-context review; human and CI remain authoritative |
| Rules maintenance | `.cursor/commands/update-rules.md` | Read-only drift report owned by Maya, monthly or after major changes |
| Pilot packaging | `.cursor/commands/start-onboarding-pilot.md` | Repeatable charter, cohort, controls, owners, and evidence contract |
| Renewal integrity | `.cursor/commands/renewal-evidence.md` | Audits claims and leaves unsupported evidence missing |
| Model strategy | `.cursor/README.md`, model table | Planning inherits the chosen parent model; implementation uses a pinned model after approval |
| CI enforcement | `.github/workflows/cursor-onboarding-checks.yml` | Focused fork gates, not full upstream release proof |
| Historical evidence | `metrics/ramp-dashboard.md` | Baseline mechanism, not fictional Acme results |
| Connected context | `.cursor/staged/mcp.github.json` | Read-only and repo-scoped, enabled only after Marcus approves |
| Software-factory vision | `.cursor/staged/SOFTWARE_FACTORY.md` | A production line with an owner per stage; live today versus staged next |
| Restricted week-one surface | `.cursor/staged/new-joiner-agent.md` | Read-only plan-first agent with a defined exit criterion; not a containment control |
| Issue to PR automation | `.cursor/staged/issue-to-draft-pr.md` | Human label triggers it, the draft PR carries its plan, nothing merges itself |
| Agent PR governance | `.cursor/staged/agent-pr-policy.md` | Draft-only, provenance-labeled, counted outside the ramp metrics |
| Who enforces any of it | `.cursor/staged/workflows/agent-pr-guardrails.yml` | Labels are declarations; a required check is the control |
| Cloud automation | `.cursor/staged/drift-automation-spec.md` | Scheduled reporting or draft remediation, never self-merge |

## Spoken answers — nothing to open

Full versions with the supporting reasoning are in `Q_AND_A.md`; these are the compressed lines
to say in the room.

| If asked about | The line |
|---|---|
| Why Cursor vs Codex / Claude Code | Those tie Acme to one vendor's models; Cursor preserves access to OpenAI, Anthropic, Gemini, and xAI models plus Composer while consolidating governance, spend, and telemetry into one surface — and the new Router routes across them per task under admin-governed cost modes, which a single-vendor tool structurally can't offer |
| Consolidating on one tool | Standardize on whichever tool clears the bar — governed workflow in version control, measured ramp and rework, owners, auditable telemetry; Cursor is the only candidate with that stood up at Acme |
| Whether 3x is achievable | 3x is Acme's own number; what decides it is what share of the six weeks is context and code discovery — week one decomposes the baseline, then we both know |
| What exists on renewal day | A historical baseline, an honestly labeled pilot curve, a customer-owned instrumented workflow no competitor has stood up, and a repeatability test in flight with a pre-agreed pass bar |
| A dollar number for Finance | Hires per year × ramp-weeks recovered × loaded weekly cost — a labeled hypothesis, and the playbook across teams, not the one-team pilot, is the unit of value |
| What breaks / where the agent fails | Per-agent constraints don't compose — least privilege lives at the boundary, so human review and CI are the gates I actually rely on |

---

# Recovery lines

## If a Cursor command is not discovered

> The command is in the repository, but Cursor isn't finding it in this session. Rather than spend
> our time debugging that, I'll open the file directly. The steps are the same ones you saw in the
> technical screen.

## If asked whether the model settings are enforced

> The model setting is a team default. The admin allowlist controls which models can run, while CI
> controls whether the resulting change can merge.

## If asked why you are not rerunning the technical demo

> You already saw the implementation steps run in the technical screen. Since this session is
> meant to be lighter on internals, I'm using the time on ownership, evidence, and account
> decisions. The files are here if you'd like to go deeper.

## If challenged that the future capabilities are not enabled

> That's right—they aren't enabled. New credentials, external access, and unattended execution
> haven't been approved, so turning them on here would be the wrong move. For each one, I can show
> Acme the file, who would own it, what has to happen before it turns on, and how to turn it back
> off.

## If asked why custom modes are absent

> The handout mentions custom modes, but Cursor removed them in 2.1. I didn't want to present a
> stale feature, so I kept the need—a plan-first experience for a new joiner—and rebuilt it as a
> versioned, read-only agent with a command as the entry point. Acme can review that in Git. Admin
> policy, human approval, and CI are still the real boundaries.

## If pushed on why the automation cannot merge its own work

> Because I still want a person reading the plan next to the diff. If we remove that gate, we lose
> the reason to trust the output—and we muddy the ramp evidence. I'd rather automate another
> small, clearly defined step than remove the review that makes this one safe.

## If asked whether the factory is real or a diagram

> The factory isn't running here, and I wouldn't claim that it is. What's real are the files:
> they show who owns each step, what has to be true first, and what the automated checks would
> enforce. Acme would still have to choose the token access, spending limit, and kinds of work
> allowed.

## If pushed to promise 3x

> Three times is the goal Acme wants us to test, not a result I'm promising. We'd measure the time
> to first meaningful PR and the rework that came with it. If it moves toward two weeks without
> hurting quality, we have a reason to expand. If it doesn't, we adjust or stop.

## If the cohort is unavailable

> I'd use engineers who are new to the module and label them as a proxy. That can tell us whether
> the steps are usable, but it can't prove that actual new hires get productive faster.

## If evidence is too small

> I'd show every observation, the sample size, median, range, which past hires we compared them
> with, and the links behind the numbers. That's enough for a careful decision about another
> team—not a company-wide claim.

---

# Final 30-second memory cue

**Wedge:** 12-person active team, six-week ramp problem.

**People:** David accountable, Maya builder, Priya sponsor target, Nina quality, Marcus platform,
Ravi real work.

**Workflow:** scope -> plan -> approve -> build -> review -> CI/deploy.

**Evidence:** ramp, rework, design-to-deploy; label every claim.

**Handoff:** Maya changes it, second engineer runs it, David presents it.

**Scale:** repeatable -> connected -> automated, each behind a gate.

**Close:** changed assumptions, decisions, owners, evidence bar, scale gate, and one next action.
