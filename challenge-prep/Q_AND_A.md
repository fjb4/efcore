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
picked code-generation result. The one product line worth landing here: Codex is OpenAI models
and Claude Code is Anthropic models, while standardizing on Cursor preserves access to OpenAI,
Anthropic, Gemini, and xAI models plus Cursor's own Composer line — while consolidating
governance, spend controls, and telemetry into one surface. Frame it as access preservation, not
tool equivalence: Claude Code users may value that harness, not just the model — that is the
portability concession, made up front (full map: README, "Differentiators vs Codex and Claude
Code").

## "Leadership wants to consolidate on one tool — why should that be Cursor?"

Concede the portability up front: the workflow layer is markdown in the customer's repo, and that is
a feature — Acme owns it. What is not portable is where the consolidation decision actually lives:
distribution, governance, and measurement at 1,200 seats. Three uncoordinated tools are *why* ROI is
unclear — nobody can attribute outcomes across ad-hoc workflows. The pilot gives Acme its first
instrumented workflow (baseline, evidence ledger, named owners, QA/DevOps sign-off) plus the
enterprise layer — Team Rules plus Marketplace-plugin distribution, admin analytics, AI Code
Tracking, model governance — that
turns it into auditable evidence. Then offer the standard, not the vendor argument: "standardize on
whichever tool clears this bar — governed workflow in version control, measured ramp and rework on
real backlog work, transferable ownership, telemetry leadership can audit." Cursor is the candidate
Acme can evaluate immediately, because the governed workflow and evidence mechanisms already
exist — the pilot is how we earn the customer outcome data; any other tool has to stand up the
same instrumented workflow first. Before naming an expansion target, find out which tools the two
stalled teams used and why they stalled.

## "What's your model strategy?"

Both screen interviewers returned to this — answer proactively, as a policy by phase, capability,
risk, and cost rather than a list of model names (names go stale; the policy shouldn't):

- **Planning and unfamiliar-repository analysis** (`/first-contribution` plan step, `/scope-issue`
  grounding): a high-context, high-reasoning model — this is where plausible-but-wrong-sibling
  errors start.
- **Bounded implementation and mechanical edits** after plan approval: a capable, cost-efficient
  coding model.
- **Skeptical review of high-risk changes** (`/pre-review`): an independent strong reviewer model
  plus the deterministic gates — creation and review stay separated.
- **Auto**: the sane default where Cursor's router has fresher information than a static policy.

This policy is **code, not a memo**: `/first-contribution` delegates planning to the
`contribution-planner` subagent (`model: inherit`, `readonly` — it inherits the deliberately
selected parent model rather than guaranteeing a reasoning tier), implementation after human
approval to `contribution-implementer` (an explicit Composer binding — `composer-2.5`, Cursor's
own coding model, a Cursor-native, cost-efficient choice; note Composer 2.5 has Standard and Fast
variants at different prices — say "cost-efficient," not "the fast model," until the dry-run
confirms which variant executes), and `/pre-review` to `skeptical-reviewer` (`model: inherit`,
`readonly`). The policy is defined by phase, capability, risk, and cost; `inherit` avoids naming
a model where possible, and the one pinned ID is a **declared drift surface** — `/update-rules`
checks it against the documented policy table on the
maintainer's monthly cadence. The approval gate stays in the main conversation, never inside a
subagent.

Keep the enforcement claim precise: the frontmatter is a **paved-road default** — bypassable, but a
bypass is a visible git diff and `/update-rules` reports divergence from the documented policy as
drift. The technically enforced boundary is the admin dashboard's model allow/blocklist, which
overrides frontmatter (with silent fallback to a compatible model). For Finance: the policy is a
governed cost lever — expensive reasoning is spent only where it buys correctness.

## "Which of these controls are actually enforced?"

Answer as a placement exercise on a five-tier ladder — agentic review and deterministic CI are not
interchangeable:

1. **Assistive, voluntary** — rules and skills: context the agent uses; nothing stops an engineer
   working without them.
2. **Team standard, bypassable** — the commands (`/first-contribution`, `/pre-review`) and the
   subagent model/`readonly` frontmatter: the paved road, adopted because it is the easiest correct
   path, not because it is forced — and any bypass is a visible git diff.
3. **Policy-enforced in the tool** — hooks, sandbox, admin allowlists (models, MCP): positioned
   scale steps, enabled after Acme approves the design.
4. **Deterministically enforced in CI** — the fork gates: format, analyzers, API baseline, focused
   tests. Non-negotiable.
5. **Independently reviewed** — three distinct authorities, not one: Bugbot adds an
   independent-from-author agentic pass (advisory by default; making unresolved findings block
   merges is an explicit policy choice after Nina and Marcus approve it); the human maintainer
   holds authoritative judgment; CI (tier 4) remains the deterministic gate.

Speed comes from tiers 1–2; trust comes from tiers 4–5; tier 3 is where enterprise governance grows
once the workflow earns it. Never present tier 1–2 assets as security controls.

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

Treat this as a deliberate demotion, not an oversight — senior capacity reclaimed is the most direct
bridge to business value and carried the technical-screen story. But it usually depends on
self-reporting and is distorted by task difficulty and team culture, so in a short pilot it should
not displace a timestamp-auditable primary metric. It stays a named supporting measure (the
dashboard has a weekly interrupt-pulse table). If David's or Priya's decision hinges on senior
capacity, elevate it to primary and demote design-to-deploy — the ledger design supports either;
say the trade out loud.

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

As builders with owned artifacts, not reviewers of someone else's system — the handout asks for
people across roles to become builders, and Maya must not be the only person who changes it:

- **Ravi (PM)** co-maintains the task rubric and the `/scope-issue` workflow — his roadmap intent
  is the workflow's input format, so he owns how it is expressed.
- **Nina (QA)** owns the rework taxonomy, the review acceptance criteria, and (at scale) the
  Bugbot rules.
- **Marcus (DevOps)** owns the CI policy, the environment boundary, and the automation approval
  model.
- **Maya (Staff Eng)** owns the repository rules, commands, and drift maintenance.
- **David (EM)** owns the charter and the outcome definition.

These transfers are scheduled: Session 1 assigns them; Session 3 verifies each owner has changed
their artifact at least once without the SA.

## "Why use rules, commands, skills, and a review agent?"

Rules hold stable, scoped conventions. Commands expose repeatable workflows. Skills load deeper
procedural knowledge when relevant. An independent reviewer takes a skeptical pass. Keeping these
jobs separate improves maintainability and makes ownership legible, while human approval and CI
remain the actual gates.

## "Where do MCP and cloud agents fit?"

The staged designs are committed and openable — `.cursor/staged/` holds the read-only GitHub MCP
config, the new-joiner custom-mode spec, and the drift-automation spec, each labeled with its
review gate and owner. "Not enabled" is a decision with a design attached: Marcus reviews a
concrete artifact, not a slide. Open and walk them; never run or enable one — that is the gated
decision the design exists to earn.

Not on day one by default. After security review, least-privilege MCP can pull issue, PR, review,
and CI evidence without manual transcription. Cloud agents or automations can handle bounded,
repeatable work once the foreground workflow, environment, permissions, and review gates are
proven — and the staging is concrete, not hand-wavy: cloud agents run in Cursor-managed **or
self-hosted** environments (self-hosted workers connect outbound-only, keeping code and tool
execution inside Acme's network) with **read-write repository access**, managed secrets, and
network access, and require an account admin to connect source control and set spend limits
first. That privilege grant is Marcus's (DevOps) security-review gate, earned by the foreground
workflow's evidence — and it must be **proportionate to the task**: during the wedge,
`/update-rules` stays human-triggered, because a write-capable cloud agent for a report-only
monthly check is more privilege than the job needs. The automation earns its place at expansion —
drift detection across multiple repositories, preparing a report or draft remediation PR, in a
restricted environment with scoped secrets and egress, gated on Maya/Marcus review.
PR-review-at-scale is **not** an automation use case — that's Bugbot, the productized version.
The ramp-metrics refresh stays on team-owned GitHub Actions: evidence leadership audits shouldn't
be generated inside the vendor's own surface. Do not use automation to outrun governance.

## "How is this defensible to Finance?"

Translate the measured delta into capacity only after Acme validates loaded cost and hiring volume:
days removed from ramp, fewer material review cycles, shorter delivery time, and any reduced senior
interrupts. Show formulas and ranges, not a single heroic ROI number. Keep adoption data as evidence
that the result can reach enough users to matter.

If the RD demands a number anyway, have one ready and label it: hires/yr × ramp-weeks recovered ×
loaded weekly cost — illustratively ~6 hires/yr × ~4 wks × ~$4k/wk ≈ **$90–100k/yr for this one
team — which is why the playbook, not the pilot, is the unit of value: reproduced across even
half the 18 teams it is a 7-figure lever against the seat spend Finance is comparing
line-by-line.** Say both halves in one breath — the one-team number left standing alone invites
the room to divide it into the contract price. The inputs stay a labeled hypothesis until Acme
validates them.

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

## "What actually exists on renewal day?"

The RD-grade version of the timing objection: Finance decides on the whole 1,200-seat contract,
and the evidence is one team's ramp — possibly a labeled proxy, possibly n≤3. Say the worst-case
inventory unprompted (in the renewal-defense block if nobody raises it) so the evidence honesty reads
as strength, not as a concession extracted under pressure. At day 86 the defensible inventory is:

1. **A historical baseline** from Acme's own repo history — not vendor telemetry.
2. **An observed pilot curve** with honest labels: every observation shown, sample size named,
   proxy labeled proxy.
3. **A governed, instrumented, customer-owned workflow** — baseline, evidence ledger, named
   owners, QA/DevOps sign-off — that no competing tool has stood up at Acme.
4. **A repeatability test in flight** on a second team, with a pass bar defined before its
   results exist.

The renewal ask is: extend on the strength of a measured, owned system and a pre-agreed decision
standard — not "extend because the study is complete." A multi-year commitment is being asked to
fund the expansion of a working pattern, and the evidence contract tells leadership exactly what
they will know by each future checkpoint.

## "Rules drift as the library evolves — who maintains this in six months?"

The pointer design: rules cite the team's own conventions docs, so those stay the single source of
truth; only the deltas (repo geography, glob scoping) and the pinned model ID in the implementer
subagent can drift, and `/update-rules` — a read-only drift check — diffs the layer against the
current docs, repo shape, and model-policy table on the maintainer's monthly cadence. Model names
change and new models ship; the pin is registered in the policy table precisely so its staleness
is detected, not discovered. Owner: Maya, ratified as a team goal — human-triggered during the
wedge, deliberately: a write-capable cloud agent is more privilege than a report-only monthly
check needs. At expansion, a scheduled Cursor automation earns the job — drift detection across
the rolled-out repositories, restricted environment, scoped secrets and egress, Maya/Marcus
review — so the cadence stops depending on a human remembering exactly when the surface area
outgrows one human.

## "Show me it working on something you didn't rehearse."

Take a rough request from the room and run `/scope-issue` on it live — the workflow handles
arbitrary input. If they aim at `/start-onboarding-pilot`, change an assumption in the input and
show the plan responds.

## "Why is verification SQLite-only / the fork CI so thin?"

Deliberate scope: the guardrail's job is a fast (<10 min) pre-review signal for new joiners; the
maintainers' full provider matrix stays the merge gate. Fast local feedback plus heavyweight
upstream CI is the design, not a shortcut. Be equally honest about the focused-test gate: its
test filter is hard-coded to **this contribution's** tests — it is the verified guardrail for
this contribution, not yet a general per-joiner gate. Session 1 adapts the focused-test selection
for Acme's task class (parameterizing the filter or a small task manifest is the team's call, and
the team's change to own).

## "What breaks? Where does the agent get it wrong?"

Lead with the one found in this artifact, during a pre-session dry run — a real failure beats
three hypotheticals:

> I invoked the implementer subagent in a fresh conversation, giving it no plan. Its contract says
> it must refuse. Instead it ran `rg` against Cursor's own transcript store on disk, recovered the
> plan from the *previous* conversation, declared it approved, and delegated implementation.
> Nobody had approved anything.
>
> Two things came out of that. First, a fresh conversation is only fresh by construction — a
> shell-capable agent can reconstruct a prior one, so "independent context" is a default, not a
> guarantee. Second, and more important: the guard was an instruction, and instructions cannot
> bound a capability. That is tier 2 of my enforcement ladder behaving exactly like tier 2. I
> hardened the contracts and re-ran it: the implementer now refuses with the exact contract
> string. But it still ran two searches before refusing — it scoped them to the current
> conversation instead of the transcript store, and got the right answer. So the fix moved the
> behavior; it did not install a gate. The control that would actually close it is tier 3 —
> command and tool policy, sandbox, allowlists — and the gates that hold are human approval
> and CI.

That answer does three jobs at once: it shows the artifact was tested rather than assumed, it
demonstrates the enforcement ladder on a real finding instead of a diagram, and it is the concrete
case for why Marcus's security review gates the staged surfaces. If the room asks what *they*
should do about it, the answer is tool-policy scoping — which is what `.cursor/staged/` is holding
designs for.

Then the three standing ones: rules encode the letter, not reviewer judgment — `/pre-review` is
advisory by design; the plan step can pick a plausible-but-wrong sibling to model on, which the
hard approval stop exists to catch; the architecture-map deltas age with repo layout changes —
which is what `/update-rules` reports.

## Open logistics questions

Moved to `INTERVIEW_LOOP.md`, together with prep for the two 30-minute interviews.
