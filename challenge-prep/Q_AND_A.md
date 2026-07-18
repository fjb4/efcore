# Challenge pushback and Q&A

Pattern for every objection: **acknowledge → answer in two sentences → tie back to the
plan → return to the agenda out loud.** Use names constantly; check in with the quiet
interviewer. When personas conflict (RD wants speed, FE wants rigor), name the tension
and arbitrate — that's the SA job. "I don't know — here's how I'd find out" is scored
positive; use it once, genuinely, rather than bluffing.

## "Why Cursor instead of Codex or Claude Code?"

Do not claim a universal model advantage. Acme's decision is whether Cursor can standardize and
govern a workflow that reaches planning, review, CI, and deployment, then prove the outcome in its
own telemetry. Use the same task class, outcome definition, and quality gates for any comparison.
The differentiator you are testing is repeatable workflow adoption and governance, not a cherry-
picked code-generation result.

## "Why not make Maya the primary champion?"

Maya is the essential technical champion and co-builder, but she has limited executive reach and
does not own the team goal. David is the accountable champion because he owns the six-week problem
and can bring the result to Priya. The champion system needs both; choosing Maya alone creates a
renewal story that is enthusiastic but politically weak.

## "David is lukewarm on tools. Why would he champion Cursor?"

He does not need to become a product enthusiast. He needs to own a measured improvement in an
existing team objective. Frame the engagement around his ramp metric, quality guardrail, and senior
capacity—not Cursor usage for its own sake.

## "Why are weekly active seats not one of your three metrics?"

The pilot team already has high usage, so more activity does not prove better onboarding. WAU is
important for adoption health and later expansion, but Finance needs an outcome. First meaningful
PR, rework, and design-to-deploy connect usage to speed, quality, and delivered work.

## "Why not senior-engineer interrupts?"

It is directionally valuable but usually depends on self-reporting and can be distorted by task
difficulty or team culture. Track it as supporting evidence if Acme already has a credible method.
Do not displace a more auditable primary metric during a short pilot.

## "What is a meaningful PR?"

David must define it before the pilot. Recommend: non-trivial production or library code, accepted
by a maintainer, through required CI, and merged or approved for merge. Exclude typo-only, generated,
or training-only changes. Fix the definition before looking at results.

## "You cannot wait for new hires."

Use engineers unfamiliar with the selected module as a cold-task proxy. Match task complexity,
record every intervention, and label the result proxy. It can validate workflow usability but
cannot establish actual new-hire time-to-productivity; confirm that with the next real cohort.

## "The sample will be tiny."

Show every observation, the median, the range, and the baseline matching method. Combine the
quantitative signal with before/after artifacts and stakeholder evidence. Use the pilot to make a
bounded expansion decision, not to claim organization-wide causality.

## "How will you avoid cherry-picking easy issues?"

Ravi and David define a task rubric before assignment: comparable complexity, real roadmap value,
same review/CI gates, and no task selected based on expected AI performance. Preserve excluded tasks
and reasons in the evidence ledger.

## "Faster onboarding could mean worse code."

That is why ramp rework is a co-primary metric and Nina owns its taxonomy. A speed improvement does
not count if material rework, defects, or bypassed gates increase. `/pre-review` is advisory; human
review and CI remain authoritative.

## "What if the pilot misses the 3x target?"

Do not hide it. Decompose design-to-deploy time to identify whether context discovery, coding,
review, CI, or deployment is still the bottleneck. Recommend the smallest next intervention—or
stop—based on evidence. A credible no-go decision is more useful to the renewal than inflated ROI.

## "How do you prove teach-to-fish?"

Maya must make a rule or command change without the SA, a second engineer must complete the workflow,
and the team must name owners and a review cadence. David, not the SA, presents the outcome to Priya.

## "Why not roll this out to all 18 teams now?"

Six teams are meaningfully active and two previous pilots stalled. First prove the pattern on the
wedge team, then reproduce it on one stalled team with different conditions. Broad rollout before
repeatability would amplify support burden and weaken the renewal evidence.

## "Where do PM, QA, and DevOps actually participate?"

Ravi provides a real, bounded outcome and validates design-to-delivery relevance. Nina defines the
quality taxonomy and test gates. Marcus approves permissions, CI, and deployment evidence. Their
artifacts are inputs and controls, not personas pasted into an engineering demo.

## "Why use rules, commands, skills, and a review agent?"

Rules hold stable, scoped conventions. Commands expose repeatable workflows. Skills load deeper
procedural knowledge when relevant. An independent reviewer takes a skeptical pass. Keeping these
jobs separate improves maintainability and makes ownership legible, while human approval and CI
remain the actual gates.

## "Where do MCP and cloud agents fit?"

Not on day one by default. After security review, least-privilege MCP can pull issue, PR, review,
and CI evidence without manual transcription. Cloud agents or automations can handle bounded,
repeatable work once the foreground workflow, environment, permissions, and review gates are
proven. Do not use automation to outrun governance.

## "How is this defensible to Finance?"

Translate the measured delta into capacity only after Acme validates loaded cost and hiring volume:
days removed from ramp, fewer material review cycles, shorter delivery time, and any reduced senior
interrupts. Show formulas and ranges, not a single heroic ROI number. Keep adoption data as evidence
that the result can reach enough users to matter.

If the RD demands a number anyway, have one ready and label it: hires/yr × ramp-weeks recovered ×
loaded weekly cost — illustratively ~6 hires/yr × ~4 wks × ~$4k/wk ≈ **$90–100k/yr for this one
team**, a hypothesis until Acme validates the inputs; across 18 teams the playbook is a 7-figure
lever against the seat spend Finance is comparing line-by-line.

## "What do you need from the ADM if you are running point?"

Stakeholder access and choreography, account/usage evidence, and renewal decision context. The SA
runs the technical work, maintains the risk/decision log, and sends a concise weekly evidence update;
the ADM does not become the pilot project manager.

## "What would cause you to stop the pilot?"

- No accepted definition or baseline.
- No accountable customer owner.
- Security/permission controls cannot be satisfied.
- Tasks cannot be made comparable.
- Speed comes with materially worse quality.
- The workflow depends on the SA after the planned handoff.

## "What is the biggest risk in your plan?"

The renewal window can pressure the team into presenting a small proxy pilot as causal proof. The
countermeasure is to agree on evidence labels and decision thresholds with David and Priya before
the results exist, and to make the second-team expansion conditional rather than assumed.

## "The team says they're too busy for three working sessions."

The sessions run on their real backlog — sprint work done through the new workflow, not extra
work. Ravi supplies the tasks from the roadmap, and David sponsors the time because the pilot
moves the ramp goal he already owns.

## "90 days isn't enough — joiners take six weeks!"

The baseline comes from history in week 1; the cohort (real joiners or a labeled proxy) starts
inside 30 days; rework and cycle-time decomposition show signal within weeks. The midpoint gives
Priya a defensible early curve, labeled exactly that — not a completed cohort study.

## "Rules drift as the library evolves — who maintains this in six months?"

The pointer design: rules cite the team's own conventions docs, so those stay the single source of
truth; only the deltas (repo geography, glob scoping) can drift, and `/update-rules` — a read-only
drift check — diffs the layer against the current docs on the maintainer's monthly cadence. Owner:
Maya, ratified as a team goal.

## "Show me it working on something you didn't rehearse."

Take a rough request from the room and run `/scope-issue` on it live — the workflow handles
arbitrary input. If they aim at `/start-onboarding-pilot`, change an assumption in the input and
show the plan responds.

## "Why is verification SQLite-only / the fork CI so thin?"

Deliberate scope: the guardrail's job is a fast (<10 min) pre-review signal for new joiners; the
maintainers' full provider matrix stays the merge gate. Fast local feedback plus heavyweight
upstream CI is the design, not a shortcut.

## "What breaks? Where does the agent get it wrong?"

Have three real ones ready: rules encode the letter, not reviewer judgment — `/pre-review` is
advisory by design; the plan step can pick a plausible-but-wrong sibling to model on, which the
hard approval stop exists to catch; the architecture-map deltas age with repo layout changes —
which is what `/update-rules` reports.

## Questions for Ally's prep call

Moved to `INTERVIEW_LOOP.md`, together with prep for the two 30-minute interviews.

