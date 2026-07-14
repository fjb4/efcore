# Solutions Architect Technical Screen - Presentation Script

## Purpose

This is a rehearsal script for a 45-minute technical screen. It is designed to demonstrate:

- Business and product judgment.
- A real, runnable artifact rather than slideware.
- The full path from request through design, code, review, test, CI, and deployment handoff.
- A maintainable solution that supports engineering, PM, QA, and DevOps.
- An honest understanding of how Cursor rules, commands, agent instructions, and CI actually work.
- The reasoning journey: alternatives considered, failed attempts, tradeoffs, and known limitations.

Target timing: **33 minutes of walkthrough and live demonstration, followed by 12 minutes for questions.**

## Core narrative

> The basic idea is to take a rough product request and guide it all the way to a well-scoped,
> CI-validated pull request. Along the way, a human approves the plan, the code and tests follow the
> repository's conventions, and provider-specific problems get caught before review. It's one
> workflow that helps product, engineering, QA, DevOps, and maintainers without replacing the tools
> or controls they already trust.

---

# Pre-screen setup - do not present

## Repository and branch preparation

- [ ] Decide the PR base before the session:
  - Preferred: merge the Cursor toolkit into the fork's `main`, then branch the demo from `main`.
  - Alternative: create the demo branch from `cursor-onboarding` and target the demo PR back to
    `cursor-onboarding` as a stacked PR. In that case, run
    `/pre-review cursor-onboarding...HEAD`; the command's default `main...HEAD` range would include
    the toolkit itself.
- [ ] Do not create a demo branch from `cursor-onboarding` and target `main` while the toolkit PR is
  unmerged. That would mix the toolkit's 622-line diff into the contribution PR.
- [ ] Start from a clean working tree.
- [ ] Use an obvious demo branch name, such as `demo/19287-sqlite-indexof`.
- [ ] Confirm `origin` is the personal fork, not `dotnet/efcore`.
- [ ] Confirm the demo PR will target only the personal fork.

## Local preparation

- [ ] Allow Cursor to finish indexing before the session.
- [ ] Restore dependencies and pre-warm the affected build without leaving generated code changes.
- [ ] Confirm the focused test command works from a clean checkout.
- [ ] Confirm GitHub authentication and push permissions.
- [ ] Confirm Cursor commands appear in the `/` menu.
- [ ] Confirm `/review` appears in the installed Cursor version and opens the picker containing
  Bugbot and Security Review.
- [ ] In a fresh Agent chat, run:

  ```text
  /scope-issue Translate Array.IndexOf over byte arrays for SQLite so the query remains server-evaluated
  ```

  Confirm the real output includes classification, project/skill placement, first-contribution
  verdict, API and SQLite-testability assessment, acceptance criteria, existing-issue/PR warning,
  and the draft-only boundary. Pin this chat as **Scope issue**. Do not save the output as an indexed
  repository file or reuse the chat for implementation.
- [ ] Rehearse `/first-contribution` at least twice and confirm it stops after the plan.
- [ ] Rehearse `/pre-review` at least twice with the planted off-by-one defect.
- [ ] Confirm the expected generated SQL clearly contains the zero-based adjustment.

## Cursor-only presentation preparation

Use one dedicated Cursor window for the entire screen. Do not share the desktop or switch to an
external browser. The editor, Agent, terminal, source control, and integrated browser become the
presentation surfaces.

- [ ] Use the same Cursor version and settings used in the final rehearsal; do not update on the
  morning of the interview.
- [ ] Close unrelated workspaces, chats, terminals, browser tabs, notifications, and extensions that
  could expose private information or distract from the walkthrough.
- [ ] Set the window and screen-sharing resolution first, then increase Cursor's UI, editor,
  terminal, and browser zoom until code and CI labels are readable in the meeting recording.
- [ ] Hide the minimap and unnecessary panels. Keep the Activity Bar available so the audience can
  understand whether they are looking at files, source control, Agent, or browser.
- [ ] Select a simple terminal profile and prompt. Clear its scrollback and confirm no secrets,
  tokens, unrelated paths, or command history are visible.
- [ ] Let repository indexing finish and confirm the rules, commands, and skills are discoverable.
- [ ] Turn compact chat responses on and reduce tool-call density if the installed Cursor version
  exposes those settings. The important artifacts should dominate the screen, not tool chatter.
- [ ] Confirm source control shows only the intended demo changes.

Prepare Cursor's integrated browser with these tabs, in this order:

1. EF Core repository README.
2. EF Core issue #19287.
3. The fork's Cursor onboarding PR or branch.
4. The current demo PR placeholder or branch page.
5. The previous successful Cursor onboarding CI run.

Prepare these editor tabs, in presentation order:

1. `.cursor/README.md`
2. `.cursor/commands/first-contribution.md`
3. `.cursor/commands/pre-review.md`
4. `.cursor/commands/scope-issue.md`
5. The in-repository sibling implementation.
6. The candidate SQLite implementation.
7. The specification test.
8. The SQLite test and SQL baseline.
9. `.github/workflows/cursor-onboarding-checks.yml`

Prepare and pin three Agent chats:

1. **Scope issue** - completed pre-run chat with the real `/scope-issue` invocation and output
   visible. Keep it separate so it cannot influence the contribution conversation.
2. **Contribution** - clean chat ready for `/first-contribution <issue-url>`.
3. **Pre-review** - a separate clean chat ready for `/pre-review`; do not reuse the contribution
   chat because the independence is part of the review story.

Keep the presentation script open only during rehearsal. Do not leave it visible in the interview,
because it contains the planted defect and recovery choreography.

## Cursor shortcut card - verify before presenting

Cursor shortcuts are remappable and some are context-sensitive. Confirm these in **Keyboard
Shortcuts** on the exact installation used for the interview. Use the Command Palette as the
fallback instead of debugging a shortcut live.

| Presentation action | Default macOS shortcut | Fallback |
| --- | --- | --- |
| Open a prepared file by name | `Cmd+P` | Click its prepared editor tab |
| Open the Command Palette | `Cmd+Shift+P` | Cursor menu -> Command Palette |
| Cycle Cursor layouts | `Cmd+Option+Tab` | Layout picker |
| Cycle layouts backward | `Cmd+Shift+Option+Tab` | Layout picker |
| Expand the active file, chat, terminal, PR, or browser tab | `Cmd+Shift+M` | Expand button in the tab header |
| Toggle the bottom panel | `Cmd+J` | View -> Appearance -> Panel |
| Toggle the integrated terminal | `Ctrl+Backtick` | Terminal -> Toggle Terminal |
| Open a new Agent chat | Verify locally before use | Click `+` in Agent |
| Open Keyboard Shortcuts | Use `Cmd+Shift+P`, then search | Command Palette -> Keyboard Shortcuts |

Use shortcuts only for high-value transitions. A visible click is better than an unexplained or
failed key combination. The most useful presentation shortcuts are `Cmd+P` for prepared files,
`Cmd+Option+Tab` for changing surfaces, and `Cmd+Shift+M` for making the current artifact readable.

Keep the following files easy to reach, but do not tour all of them unless asked:

- `.cursor/README.md`
- `.cursor/commands/first-contribution.md`
- `.cursor/commands/pre-review.md`
- `.cursor/commands/scope-issue.md`
- `.cursor/rules/conventions-source-of-truth.mdc`
- `.cursor/rules/architecture-map.mdc`
- `.cursor/rules/contribution-workflow.mdc`
- `.github/workflows/cursor-onboarding-checks.yml`

## Recovery checkpoints

Prepare local or remote checkpoints for:

- [ ] Real `/scope-issue` output in its own pinned chat.
- [ ] Approved plan, before implementation.
- [ ] Candidate scaffold with green focused test, reviewed against the approved plan.
- [ ] Scaffold containing the planted defect.
- [ ] Fixed, committed contribution ready to push.
- [ ] A previously green fork PR and CI run.

These are recovery paths, not substitutes for the live artifact. If one is needed, state exactly
what failed and why you are moving to a known checkpoint.

---

# Live presentation

## Live timing rule

The order is event-driven once `/first-contribution` starts. If the plan arrives early, review it
immediately and move unused alternatives or architecture narration to the implementation/build wait.
If it runs long, use those sections as narration buffer, then move to the prepared checkpoint at the
stated cutoff. Never leave a ready live artifact waiting just to preserve the written order.

If an interviewer question puts the presentation more than two minutes behind, answer it fully and
then take the next listed cut. Cut tours, secondary examples, and repeated explanations before
cutting evidence. Never rush or remove the approved-context boundary, plan gate, generated SQL and
focused test, pre-review finding and fix, fork/CI evidence, or honest limitations.

## 0:00-3:00 - Introduction and EF Core overview

### Say

> Thanks for having me. I approached this as an onboarding problem, not just a code-generation
> problem. I wanted to shorten the gap between "we should change this" and "here's a contribution a
> maintainer can actually review," without skipping the team's conventions, human decisions, or CI
> controls.

> I chose Entity Framework Core for the scenario. EF Core is the object-relational mapper for .NET.
> A developer can write a query in C# using LINQ, and EF Core translates it for a database such as
> SQL Server or SQLite. It also handles change tracking, database updates, migrations, scaffolding,
> and command-line tooling.

> It's a good fit because it's a large, active project with well-established conventions. There are
> thousands of source and test files, multiple database providers, a layered architecture, a
> specialized test hierarchy, API checks, and a substantial CI matrix. A change can look completely
> reasonable on its own and still be in the wrong project, miss a required test override, violate a
> provider rule, or fail an API check.

### Do

- Open the repository README.
- Briefly expand the repository root in the editor or file browser.
- Do not explain EF Core internals in depth.

### Show

- The README's one-sentence description of EF Core and its supported providers.
- The top-level `src`, `test`, `.github`, `.agents`, and `eng` directories.
- Enough repository scale to support the claim that this is not a toy, without scrolling through
  file counts or unrelated internals.

### Present in Cursor

- Start in the **Browser layout** on the prepared EF Core README tab; expand it with `Cmd+Shift+M`.
- When describing repository scale, return to the **Editor layout** with `Cmd+Option+Tab` and show
  the already-expanded root. Do not build the tree live.
- End on `.cursor/README.md`, ready for the customer-problem section.

### Point to land

> So this gives us the real version of the onboarding problem. These are the conventions and review
> gates an actual EF Core contributor has to navigate.

### If interrupted or behind

Cut the repository-tree tour first. Keep the short EF Core explanation and why its conventions make
first contributions difficult; resume on the customer problem.

---

## 3:00-5:00 - Customer problem, priority, and expected impact

### Say

> The brief covers the whole development lifecycle. Rather than try to improve every stage at once,
> I focused on one point that touches all of them: a developer's first contribution. That's where a
> new engineer has to work out where the code belongs, find an example worth following, understand
> the test structure, avoid an accidental API change, and eventually get through CI. Most of that
> knowledge exists, but it's scattered across documentation, conventions, and experienced
> maintainers.

> If this is useful, the first reviewable PR should arrive sooner, and reviewers should spend less
> time correcting repository mechanics. I'd look at time to first reviewable PR, first-run CI pass
> rate, convention issues caught early, review rounds, and maintainer time.

> Those metrics also give the customer a way to connect their investment in Cursor to delivery
> outcomes, rather than measuring success by usage alone.

> I deliberately kept the first version small. I'm not trying to automate every contribution or
> recreate the release pipeline. I'm trying to build one onboarding path the team can understand,
> own, and improve.

### Do

- Keep the discussion on business outcomes, not token counts or prompt cleverness.

### Show

- The "Multi-audience doors" section in `.cursor/README.md` for no more than 20 seconds.
- The single workflow shared by PM, engineering, QA, DevOps, and maintainers.

### Present in Cursor

- Stay in the **Editor layout** and use `Cmd+P` to open `.cursor/README.md` if it is not already
  active.
- Expand the README tab while showing the multi-audience section, then contract it before moving
  into the implementation files.
- Keep the pointer still while speaking about metrics; the audience should be listening, not
  following incidental scrolling.

### If interrupted or behind

Name only time to first reviewable PR and first-run CI pass rate. Keep the onboarding-value
hypothesis; resume on how the Cursor integration was built.

---

## 5:00-8:00 - How the Cursor integration was built

### Say

> I started by asking what the repository already gave me. EF Core already has strong project-wide
> instructions, contribution guidance, issue and PR templates, and detailed skills for areas such
> as query translation, testing, migrations, model building, and change tracking.

> That gave me a simple design rule: point, don't copy. Copying all of those conventions into one
> large Cursor prompt would create a second source of truth that could drift. So this layer points
> back to the repository's own guidance and adds only what's missing: a compact repository map,
> scoped rules, the local SQLite constraint, the context boundary, and a few guided workflows.

> In Cursor, those pieces have different jobs. Rules give the agent stable context for the work in
> front of it. Commands are workflows that a person chooses to start. EF Core's existing skills add
> deeper knowledge when a task needs it. And CI handles the checks that ought to be deterministic.

> `/first-contribution` plans and scaffolds the candidate. `/pre-review` comes back to the diff with
> a more skeptical job. And `/scope-issue` gives product and engineering a shared way to turn a
> rough request into testable work.

### Do

- Open `.cursor/README.md` at its component table.
- Briefly open one representative rule, command, and EF Core skill. Do not tour every file.

### Show

- The README's rules, commands, context exclusions, and CI workflow table.
- The small `.cursor/rules` and `.cursor/commands` directory structure.
- One existing EF Core skill as an example of specialized knowledge loaded when relevant.

### Present in Cursor

- Use the **Editor layout** with the Explorer visible. Open files with `Cmd+P`; do not hunt through
  the tree.
- Briefly split the editor between `.cursor/README.md` and one representative rule, command, and EF
  skill. Close the split after making the rules/commands/skills distinction.
- End on `.cursor/README.md`, then switch directly to the prepared issue tab.

### Point to land

> Writing C# is only one piece. The workflow also has to reflect how this repository actually works
> and where contributors really get stuck.

### If interrupted or behind

Show one rule, one command, and one skill, then skip the rest of the component tour. Keep the
rules/commands/skills/CI distinction; resume on the issue.

---

## 8:00-9:00 - Select the issue, set the boundary, and explain the gate

### Do

- Open the prepared `https://github.com/dotnet/efcore/issues/19287` browser tab.
- Do not open or read the existing upstream PR's implementation.
- Move directly from the issue to the pinned **Contribution** Agent chat.

### Show

- The issue title and its `good first issue` and `area-query` labels.
- The active upstream draft PR signal without opening its files or solution.
- The local SQLite scope, fork boundary, and fact that the command stops at a plan.

### Say

> For the live example, I chose issue #19287 and bounded it to one SQLite-verifiable overload. It
> has a nearby repository example, requires no public API, and exposes a real mismatch between
> .NET's zero-based `IndexOf` and SQLite's one-based `instr`.

> There is active work upstream, so that implementation is outside the approved context, and
> everything today stays in my fork. This command will investigate from repository evidence,
> produce a plan, and stop before it writes code.

### Present in Cursor

- Use the **Browser layout** and point only to the title, labels, and upstream-PR signal.
- Do not open the upstream PR or browse the issue discussion.
- Switch to the **Agent layout**, expand the Contribution chat, and leave the complete command ready
  to submit.

### If interrupted or behind

Drop the label details and local-sibling preview. Do not cut the SQLite scope, active-upstream-work
exclusion, fork boundary, or statement that the command stops at a plan; resume by invoking it.

---

## 9:00-12:00 - Start `/first-contribution` and narrate while it investigates

### Do

Invoke:

```text
/first-contribution https://github.com/dotnet/efcore/issues/19287
```

Let the agent investigate. Use the narration below as a flexible menu, not a speech that must finish.
The moment the plan appears, finish the current sentence and move to plan review. Deliver unused
material during later build or CI wait time, or leave it for questions.

### Say immediately after invoking it

> I wanted a new contributor to have one clear entry point: run `/first-contribution` with the issue
> URL. That doesn't mean handing the entire task to the agent. Its first output is a plan, and then
> it stops for approval. While it gathers the evidence for that plan, I'll explain a few choices that
> led to this design.

### Narration menu while the agent works

Use these in order and stop as soon as the plan is ready.

> The fastest design would have been one large prompt with every convention copied into it. I
> rejected that because it would drift and consume context even when most of the guidance wasn't
> useful. Smaller rules let the repository's own documentation remain the source of truth.

> I also considered making this mainly a documentation-search or RAG experience. That would help
> someone answer questions, but it would stop before the harder part: producing a plan, tests, a
> reviewed diff, and a passing CI run. I wanted the workflow to lead to an outcome.

> I also considered splitting planning and implementation into two commands. I kept one
> `/first-contribution` entry point because the approval stop lives inside the workflow, the context
> stays together, and a new engineer has one place to start.

> This wasn't the first version. I started with the repository map and test-placement rules, then
> added the contribution and pre-review workflows. The context boundary came next. `/scope-issue`
> came later, when I realized I had a good engineering entry point but not a good product entry
> point.

> CI needed a few passes too. Plain `dotnet format` couldn't find `EFCore.slnx`, and the Ubuntu check
> exposed a CRLF-versus-LF mismatch. The full upstream build was also too slow and service-dependent
> for this loop. Narrowing the fork workflow to SQLite brought the run under four minutes.

> I also chose not to create an issue or submit an upstream PR automatically. That adds permission
> and trust risk before the workflow has earned it. Here, the agent recommends, a person approves,
> and CI handles the deterministic checks.

### Show

- The submitted command and issue URL.
- The live investigation using repository rules, skills, and local evidence.
- That no source or test files are modified before the plan and approval.
- Enough progress to prove the run is live, without asking the audience to read every tool call.

### Present in Cursor

- Keep the Agent's progress visible in a compact side panel while `.cursor/README.md` or branch
  history occupies the main editor. Do not make the audience read scrolling tool output.
- Use no more than one navigation action while narrating. The live run should remain visibly active.
- If the plan arrives, stop the narration at the next sentence boundary and expand the Agent chat.
- If no plan is available after the narration window, continue into the architecture section. If it
  still has not arrived by plan-review time, use the prepared checkpoint and state that clearly.

### If interrupted or behind

Use only the large-prompt, RAG-only, and split-command alternatives. Stop all narration when the
plan is ready; resume on plan review, moving any unused material to Q&A.

---

## 12:00-14:00 - Explain the architecture and control model if investigation continues

### Say if the agent is still investigating

> What you're watching is the first half of the workflow. Let me use that to show how the pieces fit
> together.

### Say if this material moved to the implementation or build wait

> While that runs, let me step back and connect what you've just seen to the rest of the workflow.

### Continue

> Product can start with `/scope-issue` and turn an idea into something testable.
> `/first-contribution` gathers evidence, proposes a plan, and stops. After a person approves that
> plan, it can create the code and tests. `/pre-review` checks the resulting diff, the fork PR runs
> the deterministic checks, and the upstream pipeline still owns the larger provider matrix,
> packaging, signing, and release.

```text
PM request
    -> /scope-issue
    -> /first-contribution
    -> evidence-backed plan
    -> HUMAN APPROVAL
    -> code + tests
    -> /pre-review
    -> fork PR
    -> fast CI guardrails
    -> upstream validation and release path
```

> One distinction matters: rules and command instructions guide the model; they aren't security
> controls. Approval, repository permissions, and CI give us progressively stronger protection. I
> wouldn't call a Markdown instruction a hard security boundary.

### Do

- Put the workflow diagram on screen while keeping the live Agent status visible if practical.
- Emphasize the approval point and the advisory-versus-deterministic boundary.
- If the plan arrived early, review it immediately instead. Deliver this architecture explanation
  during the implementation or build wait rather than leaving a live plan waiting on screen.

### Show

- The live investigation or waiting plan beside the end-to-end workflow.
- The human approval point between planning and implementation.
- The boundary between model guidance, repository controls, and CI/release enforcement.

### Present in Cursor

- Use the Markdown preview in the **Editor layout**, with Agent still visible in the side panel.
- Trace the workflow once and pause at **HUMAN APPROVAL**.
- When the plan becomes available, expand Agent immediately and move to the next section.

### If interrupted or behind

Do not trace the full diagram. Point only to human approval, `/pre-review`, and deterministic CI,
then state that instructions guide while permissions and CI enforce; resume on the plan.

---

## 14:00-16:00 - Review the generated plan and approve it, or do this as soon as it is ready

### Review these plan elements aloud

- [ ] Root cause and expected behavior are restated.
- [ ] Applicable rules are cited by name.
- [ ] The query-pipeline and testing skills are identified.
- [ ] The owning source and test projects are named.
- [ ] A nearest in-repo sibling is identified.
- [ ] The specification and SQLite SQL-baseline strategy are explicit.
- [ ] Public API impact is assessed as none.
- [ ] The SQLite-only implementation boundary is explicit.
- [ ] SQL Server, other overloads, and upstream submission are excluded.
- [ ] The approved-context and fork-only boundaries are repeated.

### Show

- The cited rule and skill names in the plan.
- The owning source and test projects and nearest sibling.
- The specification-test and SQLite-baseline strategy.
- The explicit no-public-API, SQLite-only, fork-only, and excluded-upstream-PR boundaries.
- The visible stop before any source or test files are modified.

### Say

> This is where a lead or maintainer can change the direction before anyone spends time implementing
> the wrong thing. The agent's assumptions are visible and reviewable instead of being buried in the
> implementation.

### Do

Approve with:

```text
Approved. Proceed with the plan as written.
```

If the live plan is still unavailable, say:

> The live run is still investigating, and I don't want to turn this into waiting time. I'm moving
> to a plan created by the same workflow during rehearsal. I'll leave the live run available and
> return to it if it finishes.

Then open the prepared plan checkpoint, review it honestly, and continue from the matching scaffold
checkpoint after approval.

### Present in Cursor

- Expand the Agent plan and stop moving the pointer while reviewing it.
- Review the plan in order; do not read every sentence aloud.
- Pause visibly before submitting the approval.
- After approval, keep the Contribution chat active as it begins implementation.

### If interrupted or behind

Review only the target projects, sibling patterns, test strategy, and excluded scope. Keep the
visible stop and explicit approval; resume on the generated diff.

---

## 16:00-22:00 - Scaffold a first cut, inspect it, and run the focused test

### Do

- Allow `/first-contribution` to continue in the same context and generate the candidate code and
  tests.
- Watch the files it reads and edits.
- Show the resulting diff, focusing on:
  - Method recognition and the `byte[]` type boundary.
  - The SQLite `instr` translation.
  - The zero-based adjustment.
  - Specification-level behavior.
  - SQLite functional override and generated SQL baseline.
- Run the focused build and test loop.
- Show the green result and generated SQL.
- Pause on the diff and make an explicit human decision that the implementation matches the
  approved plan. Do not treat the green test as automatic acceptance.

### Show

- A concise contribution-only diff rather than every generated line.
- The method/type recognition that limits translation to the intended `byte[]` case.
- The SQLite `instr` expression and zero-based adjustment.
- The specification test defining behavior and the SQLite override asserting generated SQL.
- The focused build/test result and the actual generated SQL.
- Only the expected implementation and test files in the working-tree scope.

### Say

> The implementation follows a nearby example instead of inventing a new translator pattern. The
> key detail is in the SQL: SQLite's `instr` returns a one-based position, while .NET's `IndexOf` is
> zero-based and returns `-1` when it finds nothing. The translation has to reconcile those two
> behaviors.

> The tests tell the same story at two levels. The specification test defines the behavior EF Core
> promises, and the SQLite override verifies the SQL used to deliver it.

> What I like here is that the agent isn't simply producing C#. The repository told it where the
> code belongs, which pattern to follow, how the tests are organized, and where the public API
> boundary sits.

> At this point, here's what I know: the first cut compiles and passes the focused scenario. I don't
> yet know that every convention is satisfied, the tests are complete, or the rest of the diff is
> semantically correct. This is fast feedback, not a review certificate.

> And the human doesn't need to retype generated code just to show ownership. The responsibility is
> to approve the plan, read the diff, validate the SQL and tests, and decide whether the change is
> acceptable. If the first cut is right, no manual edit is required. If it isn't, the person still
> owns the correction before the PR.

### What this step proves

- The approved plan can be turned into a concrete source-and-test diff.
- The affected project builds.
- The selected behavior passes locally.
- The generated SQL matches the expected happy-path semantics.

### What this step does not prove

- Every EF Core convention was followed.
- The implementation has no semantic defects outside the focused case.
- Edge-case and cross-provider coverage are complete.
- The entire branch is ready for human review or upstream CI.

### If the build is slow

> The build is still running, and I don't want the rest of the walkthrough to become waiting time. I
> have a checkpoint from this same workflow, so I'll continue from there and come back to the live
> run when it finishes.

Do not hide or imply that the live command completed if it did not.

### Present in Cursor

- Keep the Contribution chat visible while edits are being made, then switch to Cursor's **Changes**
  or Source Control diff rather than opening each file separately.
- Expand the diff and use the changed-file list to move in this order: translator, specification
  test, SQLite override, SQL baseline.
- Switch to the prepared integrated terminal for the focused command. Expand the terminal while the
  result and SQL are on screen; contract it as soon as you have stated what the test proves.
- Return to the diff for the explicit human inspection. If the build is slow, use the prepared
  checkpoint tab and leave the still-running terminal accessible rather than concealing it.

### If interrupted or behind

Show the translator, generated SQL, and green focused result. Skip the line-by-line specification
and provider-test tour, but keep the statement that focused success is not a review certificate;
resume on fault injection.

---

## 22:00-26:00 - Fault-inject a post-scaffold regression and run `/pre-review`

### Clarify the purpose

In the normal workflow, `/pre-review` runs on the **current contribution diff before the PR**,
whether that diff is exactly what `/first-contribution` scaffolded or includes approved human or
agent follow-up edits. A clean result is useful. For the technical screen, the deliberate edit is a
fault-injection test: it demonstrates the unhappy path and proves that the review layer adds value
beyond repeating the scaffold's happy-path test.

The injected change represents a realistic edit made after scaffolding - by the engineer, a later
agent request, a merge resolution, or a refactor. It is not a required step in an actual
contribution.

### Do

Change the generated zero-based adjustment from:

```text
Constant(1)
```

to:

```text
Constant(0)
```

Open a **fresh Cursor conversation** so the review does not inherit the implementation discussion.
If the toolkit has been merged into the fork's `main`, invoke:

```text
/pre-review
```

If this is a stacked demo branch targeting `cursor-onboarding`, invoke this instead so the review
sees only the contribution:

```text
/pre-review cursor-onboarding...HEAD
```

### Show

- The single fault-injected `Constant(1)` -> `Constant(0)` diff before starting review.
- A visibly fresh Cursor conversation.
- The exact diff range being reviewed, especially for a stacked demo branch.
- The blocking off-by-one finding with file and line.
- The in-repository sibling or rule used as evidence.
- The proposed fix and concrete missing-test scenarios.
- That `/pre-review` has not silently edited the working tree.

### Say before running it

> I planted this deliberately; otherwise, you'd watch the happy path twice. It shows whether the
> review layer catches one known provider risk.

> I'm also using a fresh conversation. `/first-contribution` was trying to create a solution from an
> approved plan. This pass starts with the diff and a different instruction: be skeptical. Check the
> conventions, public API, EF-specific behavior, and test gaps. That helps reduce confirmation bias,
> but it still doesn't replace executable tests or a human reviewer.

### Highlight in the review output

- [ ] It identifies the one-based versus zero-based mismatch.
- [ ] It points to the changed file and line.
- [ ] It cites the relevant rule or query-pipeline guidance.
- [ ] It grounds the conclusion in an in-repository sibling.
- [ ] It explains the user-visible effect, not just the syntactic difference.
- [ ] It proposes a concrete fix.
- [ ] It proposes missing or stronger edge cases, such as first position, not found, empty input,
  parameter versus constant, or a starting-position overload if that scope is later added.
- [ ] It leaves the working tree unchanged until asked to fix it.

### Say

> It caught this because one-based SQL functions are a known source of provider bugs, and that
> knowledge is now part of the review workflow. The model didn't magically guess. We took something
> an experienced maintainer would normally raise in review and made it available earlier. CI and a
> person still validate the result.

> The output is useful to QA too. It doesn't just say "add more tests"; it names cases that can become
> acceptance or regression tests.

> If I hadn't changed the scaffold, pre-review could simply say the diff looked ready. It still has
> a job because creation and review have different goals, and because branches keep changing after
> the first scaffold through human edits, follow-up agent work, rebases, and merge resolutions.

> This planted case proves one known check works. It doesn't prove pre-review will find every bug. In
> a customer pilot, I'd run it against unseen diffs and track both misses and false positives.

### Do

- Fix the constant manually, or explicitly approve an agent-applied fix. If fixing it manually, say
  that this demonstrates understanding and ownership, not that humans must always type the repair.
- Rerun the focused test.
- Show the restored green result and SQL.

### Say after the green rerun

> If pre-review had missed this and the defect had reached the PR unchanged, the focused SQLite test
> would have failed in CI. The model-assisted review catches it earlier; the deterministic gate
> remains the backstop.

### Present in Cursor

- In the **Editor layout**, make the one-character fault injection with the relevant expression
  centered and readable. Immediately open Cursor's diff so the audience sees that this is the only
  change.
- Switch to the pinned **Pre-review** chat; its empty history should be visible before invoking the
  command. Expand the chat with `Cmd+Shift+M`.
- Keep the exact review range in the submitted prompt. When the finding arrives, use its file link
  to jump directly to the defect, then return to the finding for the evidence and test suggestions.
- Apply or type the approved correction, switch to the terminal, and leave the restored green result
  and generated SQL visible for one beat before moving to source control.
- If review stalls, open the prepared review-result checkpoint and explicitly label it as the output
  of the rehearsed run.

### If interrupted or behind

Keep the planted defect, blocking finding, repository evidence, fix, and green rerun. Reduce the QA
and missing-test discussion to one example, but keep the one-sentence CI-backstop point; resume on
the final diff and PR.

---

## 26:00-29:00 - Commit, push, open the fork PR, and start CI

### Do

- Show `git diff` and `git status`.
- Commit with a concise issue-oriented message.
- Push only to the personal fork.
- Open a PR against the prepared fork base branch.
- Show the PR diff and checks starting.

### Show

- The fork remote and target branch before pushing.
- The concise commit and contribution-only changed-file list.
- The new PR targeting the fork, not `dotnet/efcore`.
- The four onboarding CI gates as they enter queued or running state.
- Bugbot as the broader independent review layer, if its check is visible.
- The current run's status without implying completion.

### Say

> I'm stopping at my fork. This workflow won't open or target an upstream PR. For this prototype,
> that's an intentional trust boundary.

> The fork workflow checks formatting on the changed files, builds the SQLite functional tests with
> analyzer warnings treated as errors, runs the API-baseline tests, and then runs the focused SQLite
> scenario. That moves the change toward production, but it isn't the production release. The
> upstream pipeline still owns the broader provider matrix, packaging, signing, and release.

> In a real accepted contribution, a maintainer would merge the change into `main`. EF Core's
> official build and release processes would then take over the broader matrix, packaging, signing,
> and eventual release. This fork demo stops just before that handoff.

> There are three review layers, each doing a different job. `/pre-review` is specific to this
> customer and repository: EF conventions, provider behavior, and test gaps. Bugbot gives the PR a
> broader independent review. CI handles the deterministic checks: formatting, analyzers, API
> baselines, and tests. I could also run Cursor's native `/review` before pushing and select Bugbot,
> but I left it out of the timed path because Bugbot already runs here on the PR.

> One honest limitation is the focused-test filter. It's tailored to this ByteArray scenario, which
> made the MVP fast and the live demo reliable, but it isn't a general test selector. In a production
> version, I'd derive the scope from the changed tests or validated PR metadata.

### Present in Cursor

- Use Cursor's **Source Control** surface for `git status`, the final diff, staging, and commit. Keep
  the contribution-only file list visible before pushing.
- Run the push from the integrated terminal or the Source Control action already rehearsed; do not
  improvise Git commands.
- Switch to the **Browser layout** and open the prepared fork target before creating the PR. Verify
  the owner and base branch aloud before submitting.
- Keep the new PR in a full-screen browser tab until the checks appear, then leave it open while you
  move through the multi-role tabs.

### Do not wait silently

Move immediately into the multi-role explanation while CI and Bugbot run.

### If interrupted or behind

Show the contribution-only diff, fork target, and current checks. Collapse the three review layers
to one sentence, keep the `main`-to-release handoff, and move the focused-filter limitation to the
close; resume on multi-role value.

---

## 29:00-31:00 - Show the multi-role surfaces

### Say

> This is one small slice of the software-factory idea: using Cursor to support shared work across
> the SDLC, not just helping one developer type faster. It's one workflow, but each role gets value
> from a different part of it.

- **PM / Product:**

  > Product can start with the behavior they want in plain language. I pre-ran that entrance to keep
  > the live path focused on implementation. It classified and placed the work, assessed the
  > first-contribution fit, drafted acceptance criteria, flagged the existing issue and PR, and
  > stopped without opening or changing anything.

  > Plan Mode is Cursor's native planning surface. `/scope-issue` adds the repository-specific issue
  > contract that Product and Engineering can share, even if the PM isn't the person running Cursor.

- **New engineer:**

  > A new engineer gets one place to start, a plan someone can approve, the right project and local
  > example, and a focused code-and-test loop.

- **QA:**

  > QA gets concrete test gaps and provider risks from the repository-specific pre-review. Cursor's
  > native `/review` can run Bugbot before push, while Bugbot also covers the PR boundary.

- **DevOps:**

  > DevOps still owns the deterministic layer: runners, permissions, artifacts, CI gates, and the
  > handoff into the full delivery pipeline.

- **Maintainers / reviewers:**

  > Maintainers keep the issue, approval, PR review, and merge process they already trust. This takes
  > repetitive work out of review; it doesn't replace their judgment.

### Do

- Move through the already-open role surfaces while the PR checks run.
- Open the pinned **Scope issue** chat for 15-20 seconds and explicitly say that it was pre-run.
- Do not invoke another long-running command in this section.
- Keep each role to one shared artifact. After the Product output, keep every other role to one
  sentence of value.

### Show

- PM / Product: the real pre-run `/scope-issue` invocation and output, including its existing-work
  warning and draft-only boundary.
- New engineer: the approved `/first-contribution` plan and resulting diff.
- QA: the concrete missing-test proposals from `/pre-review`.
- DevOps: the fork workflow's permissions, gates, and test artifact.
- Maintainers: the ordinary PR diff, checks, and review surface.

### Present in Cursor

- Use prepared tabs rather than the Explorer: pinned Scope issue output, Contribution plan,
  Pre-review finding, workflow YAML or CI tab, then PR.
- Cycle layouts only when the artifact type changes. Use **Editor** for commands, **Agent** for plan
  and review, and **Browser** for CI and maintainer evidence.
- Spend roughly 15 seconds per role and avoid rerunning anything. The continuity comes from showing
  the same issue and artifacts, not from opening five independent demos.
- End on the PR so the audience sees the shared delivery object behind every role.

### Point to land

> So these aren't five separate experiences. Everyone is working from the same issue, plan, tests,
> review findings, and PR.

### If interrupted or behind

Show the real Product output and the QA finding, then summarize engineering, DevOps, and maintainers
in one sentence. Keep the software-factory framing and the point that every role shares the same
artifacts; resume on limitations and customer value.

---

## 31:00-33:00 - Limitations, next steps, account value, and close

### Say

> There are real limits to what I've shown. The local loop only covers SQLite. Cursor's rules and
> commands guide the agent, but they don't enforce security. The focused CI test is specific to this
> example, the architecture map can drift, and model output can vary. That's why approval, tests, CI,
> and human review all remain part of the design. And this moves a change toward deployment; it
> doesn't package or release EF Core itself.

> The first small improvement I'd make is a project-specific `.cursor/BUGBOT.md`, so the PR review
> knows about the same high-value EF risks without copying the entire repository guide.

> With a real customer, I'd grow this in three stages. First, strengthen the controls with hooks,
> sandbox allowlists, and narrowly scoped MCP access where they're needed. Second, add specialization:
> a read-only review agent, project-specific Bugbot guidance, and skills for recurring work. Third,
> add scale through reproducible cloud environments, automations, and team-managed plugins. I would
> add each of those because pilot data calls for it, not just because the feature is available.

> For the rollout, I'd establish a baseline for onboarding time and review rework, pilot this with
> one provider team, and compare time to first reviewable PR and first-run CI pass rate. Then we'd
> have evidence for whether the workflow is worth expanding.

> That gives the account team a concrete value story: whether Cursor is reducing onboarding time
> and review cost enough to justify broader adoption.

> The bottom line is that this isn't an autonomous developer. It's a maintainable, gated path that
> makes the team's existing knowledge easier to use from the first request through CI.

### Do

- Return to the live PR.
- Refresh the current CI state once.
- If the current run is still active, move to the previously verified run without waiting.

### Show

- The current PR's honest CI state.
- If green, the completed format, build/analyzer, API-baseline, and focused-test gates.
- If still running, the previously verified green run as evidence that the workflow has completed
  successfully before. Do not imply the current run has finished.
- End on the PR or CI evidence, not on presentation notes or a static diagram.

### Present in Cursor

- Stay in the **Browser layout** and refresh the live PR once. Do not repeatedly poll.
- If the run is incomplete, switch to the adjacent known-green CI tab and explicitly distinguish it
  from the current run.
- Expand the final PR or CI evidence with `Cmd+Shift+M`, deliver the last sentence, and stop moving
  the pointer. Leave the proof on screen for questions.
- During questions, use `Cmd+P`, the pinned chats, or the prepared browser tabs to answer with the
  artifact. Return to the PR after each answer instead of leaving an incidental file on screen.

### If interrupted or behind

Keep the SQLite, non-enforcement, and focused-test limitations; name the two pilot metrics; deliver
the final takeaway. Collapse the three-stage Cursor roadmap and `.cursor/BUGBOT.md` improvement into
one sentence.

---

# Questions to anticipate

## 1. Why did you choose EF Core instead of one of the suggested Python libraries?

### Answer

> I considered Angular, but its CLI already handles a lot of scaffolding-by-convention, which made
> it harder to isolate the value of this agentic workflow. I also evaluated OpenCV, one of the
> suggested options, but its C++ build and test loop introduced too much risk for a live demo.

> EF Core gave me a fast SQLite path, conventions complex enough to matter, an ecosystem I can
> defend technically, and an enterprise delivery story I can carry into the final account round.

## 2. Why is issue #19287 a good first contribution if an upstream PR already exists?

### Answer

> I wouldn't present the whole issue as unclaimed work. I'm using a small SQLite slice as a fork-only
> simulation. That slice doesn't change EF's public API, has nearby examples, and runs locally, but
> it still exposes a meaningful provider problem. The existing PR is outside my approved context,
> and I wouldn't submit competing work upstream.

## 3. Why Cursor commands and rules instead of a custom application?

### Answer

> This problem shows up inside the engineering workflow, so I wanted the first version to live there
> too. Repository-versioned commands and rules can use the local code and tools, and the team can
> review them just like any other change. A separate application would add authentication,
> deployment, and synchronization before I'd proven the main idea. A service could make sense later
> for centralized policy, observability, or managing this across repositories.

## 4. Why not copy all conventions into one comprehensive rule?

### Answer

> That would give the team a second source of truth and would load a lot of guidance when it isn't
> relevant. This thinner layer points back to the repository-owned instructions and skills, and only
> adds the pieces that are missing. The tradeoff is that I still have to validate that those pointers
> work as expected and that my small set of additions hasn't drifted.

## 5. Why keep `/first-contribution` as one command instead of separating plan and implementation?

### Answer

> I wanted one obvious place for a new engineer to start, but that doesn't mean one autonomous step.
> The first output is a plan, and the workflow stops until a person approves it. Splitting that into
> two commands would add a context handoff and give the engineer another sequence to remember. I'd
> split them if the customer needed separately persisted approvals for role separation or auditing,
> but I don't think that complexity helps this first version.

> Cursor's native Plan Mode is useful for separating planning from execution. The custom workflow
> adds the EF-specific contract I need here: cited repository rules, named projects and sibling
> patterns, an explicit test strategy and scope boundary, and a visible approval stop before code.

## 6. If `/first-contribution` generates the implementation and tests, why do you need `/pre-review`?

### Answer

> Because generation and review are different jobs. `/first-contribution` is trying to turn an
> approved plan into a useful first cut, and its local test loop is deliberately narrow. `/pre-review`
> starts from the resulting branch and assumes it may be wrong. It checks the whole diff for
> conventions, API changes, EF-specific mistakes, and missing tests. I run it in a fresh conversation
> so it doesn't simply continue defending its earlier choices.

> If the first cut is correct, pre-review can say it's ready; nobody has to invent work. But branches
> rarely stop changing after the initial scaffold. Human edits, later agent requests, rebases, and
> merge resolutions can all introduce problems. The separate pass catches those too. And because
> both commands are still model-assisted, CI and human review remain the stronger backstops.

## 7. Can the agent ignore the hard stop?

### Answer

> It can. The hard stop is an agent instruction and a workflow control, not a cryptographic guarantee.
> Cursor's plan-and-act interaction and the visible approval make it stronger, but the deterministic
> protection comes from permissions, protected branches, and CI. For a higher-risk customer, I'd add
> a hook or an external approval record that actually blocks write tools until approval exists.

## 8. Is the approved-context boundary actually enforced?

### Answer

> Not completely. In this prototype, part of the boundary is structural and part of it is policy.
> The repository exclusions reduce what gets indexed or read, the command names the allowed sources,
> and the fork limits where work can go. But that doesn't prove the model can never reach another
> source. I call it a declared and observable boundary. If a customer needed hard enforcement, I'd
> add tool permissions, network controls, or hooks.

## 9. Why SQLite only?

### Answer

> SQLite is the smallest provider path I can run reliably on this Mac, and it's fast enough to keep
> the onboarding loop useful. SQL Server and Cosmos would add services and quite a bit more runtime.
> This gives the contributor fast local feedback, while the upstream matrix provides the broader
> confidence. I'd expand the local coverage when the failure data showed the extra cost was worth it.

## 10. Does this really cover deployment?

### Answer

> It covers the path toward deployment, not deployment itself. We have bounded context, a reviewable
> plan, tests, API compatibility, and a CI handoff. I deliberately didn't recreate EF Core's
> packaging, signing, and publishing pipeline because those controls already exist downstream. For
> a customer's private library, I'd connect this fast gate to their existing promotion stages rather
> than build a parallel release process.

## 11. Why is the CI test filter hard-coded?

### Answer

> That's a conscious MVP limitation. The filter matches this ByteArray scenario, which keeps the fork
> loop fast and makes the live demo reliable. But it isn't the general solution. The next version
> should derive the focused tests from the diff, a checked-in manifest, or validated PR metadata,
> with the broader upstream suite still acting as the backstop.

## 12. What happens as EF Core changes?

### Answer

> Most of the detailed guidance stays in the instructions and skills the repository already owns,
> so updates there don't have to be copied into this layer. The things I've added, especially the
> architecture map and local workflow assumptions, can still drift. I'd give those files explicit
> ownership, add versioned tests for the command behavior, and trigger a drift check when relevant
> project-layout or convention files change.

## 13. How would you make `/pre-review` deterministic?

### Answer

> I'd separate the checks based on what they are. Formatting, analyzers, API baselines, and executable
> tests belong in deterministic tools and CI. Semantic review, comparison with nearby code, and ideas
> about missing tests are still good uses for the model. If the same important defect kept appearing,
> I'd promote that check out of the prompt and into an analyzer, test helper, or CI rule.

## 14. How does this really help PMs if they do not use Cursor?

### Answer

> They don't necessarily have to use Cursor themselves. A technical PM or an engineer can run
> `/scope-issue`, but the output is a normal GitHub issue with scope, placement, acceptance criteria,
> testability, and API-impact flags. The PM participates through that shared artifact instead of
> having to read code or inspect prompts.

## 15. How would you measure success?

### Answer

> I'd start with a baseline, then compare time to first reviewable PR, first-run CI pass rate,
> convention-related review comments, review iterations, maintainer time, and whether contributors
> actually finish. I'd also measure false positives from pre-review and whether the suggested tests
> catch anything. That way, we judge the pilot on value, not just how often people invoke it.

## 16. What did you try that did not work?

### Answer

> Three things stand out. Plain `dotnet format` didn't find the `.slnx`. The Ubuntu formatting check
> initially failed because of the repository's CRLF expectations. And the full upstream CI path was
> too broad and service-dependent for the feedback loop I wanted. Those failures led directly to an
> explicit solution target, configuring line endings before checkout, and the focused SQLite gate.

## 17. Where does the artifact break?

### Answer

> It gets weaker when a change crosses several subsystems, adds public API, depends on providers that
> aren't available locally, or starts from an issue the maintainers haven't aligned on. It also
> depends on the repository having usable conventions in the first place. And instructions alone
> can't guarantee semantic correctness or source-boundary compliance. In those cases, the right
> behavior is to stop or escalate, not to manufacture confidence.

## 18. How would you adapt this to a private customer repository?

### Answer

> I'd start with discovery: talk to contributors and maintainers, review recent PR comments and CI
> failures, map the architecture and permissions, and identify the real sources of truth. Then I'd
> pilot one common contribution type, encode only the gaps that repeatedly create rework, connect it
> to the customer's existing controls, and measure the result before expanding. Access to private
> sources and networks would be enforced through the customer's identity and execution controls,
> not just through prompt instructions.

## 19. How does this become the final-round account scenario?

### Answer

> The artifact already gives me the pieces for that conversation: the business baseline, the target
> users, an adoption path, the control model, measurable outcomes, risks, and expansion choices. I'd
> use pilot results to align with the account leader on value, be very clear with a skeptical
> stakeholder about what's advisory and what's enforced, and recommend phased expansion based on
> the review and CI costs we actually observe.

## 20. Why didn't you use hooks, subagents, MCP, or cloud agents in the prototype?

### Answer

> I wanted the first version to prove the customer workflow with the fewest moving parts. Each of
> those capabilities can be valuable, but each also adds configuration, permissions, operational
> surface, or another failure mode. The pilot tells me which problem is real: hooks when an approval
> needs hard enforcement, a read-only subagent when independent review adds value, scoped MCP when
> trusted external context is necessary, and cloud agents when reproducibility or parallel scale
> becomes the constraint. That's a roadmap driven by evidence, not a checklist of features.

## 21. Why are you presenting entirely inside Cursor?

### Answer

> Because the artifact is a workflow, not a set of slides. Keeping the issue, repository context,
> plan, code, terminal, review, PR, and CI in one environment lets you see the handoffs rather than
> taking my word for them. I still prepared checkpoints and a known-green run inside Cursor, so the
> format doesn't depend on every network or model call finishing on cue. The one-window choice is a
> way to make the customer journey concrete, not a claim that teams should abandon GitHub or their
> existing delivery systems.

---

# Requirement coverage checklist

Use this only for rehearsal or if asked how the presentation maps to the brief.

| Technical-screen objective | Where it is demonstrated |
| --- | --- |
| Large, active, convention-heavy library | EF Core introduction and repository tour |
| Correct first-contribution scaffold | `/first-contribution` creates the candidate; human inspection, focused verification, and review move it toward correctness |
| Catch mistakes early | Fresh-context `/pre-review` plus a fault-injected post-scaffold regression |
| Strengthen tests | Specification/provider test discussion and concrete missing-test proposals |
| Fit CI and guardrails | Fork boundary, context declaration, format/analyzer/API/test workflow |
| Move safely toward deployment | Fast fork gate followed by upstream matrix, packaging, and release handoff |
| Stay maintainable | "Point, don't copy," scoped rules, repository-owned skills, drift limitation |
| Serve multiple audiences | Real `/scope-issue` output, `/first-contribution`, `/pre-review`, CI, and PR evidence |
| Business judgment | Onboarding-cost framing, minimal SQLite scope, metrics, phased investment |
| Thinking journey | Iterative rules/commands/CI story and concrete failed attempts |
| Alternative designs | Large prompt, RAG-only, split commands, autonomous PRs, full matrix |
| Full SDLC breadth | Request -> plan -> design -> code -> test -> review -> PR -> CI -> release handoff |
| Runnable artifact | Real pre-run PM output plus live Cursor commands, local test, generated SQL, push, PR, and CI |
| Tooling rationale | Distinct rules, commands, and skills; customer review, Bugbot, and deterministic CI layers; staged Cursor roadmap |
| Honest limitations | SQLite scope, prompt non-enforcement, fixed test filter, drift, model variability |
| Reusable for final round | Account metrics, pilot plan, stakeholder controls, expansion path |

---

# Phrases to use and avoid

## Prefer

- "Workflow-level approval gate"
- "Declared and observable context boundary"
- "Moves the change toward deployment"
- "Fast fork guardrail"
- "The upstream pipeline remains authoritative"
- "A bounded SQLite slice"
- "Fork-only customer simulation"
- "The agent advises; CI and humans enforce"
- "Point to the source of truth rather than copy it"
- "Candidate first cut"
- "Focused feedback, not a review certificate"
- "Fault-injection test of the review control"
- "Customer-specific review, independent Bugbot review, deterministic CI"

## Avoid

- "The prompt guarantees the agent cannot proceed"
- "`.cursorignore` is a complete security boundary"
- "This deploys EF Core"
- "The CI dynamically tests every contribution"
- "I solved issue #19287 upstream"
- "The model always catches this bug"
- "PMs must use Cursor"
- "The agent replaces review"
- "`/first-contribution` guarantees correct code"
- "A green focused test means the branch is review-ready"
- "The human does not need to understand the generated code"

---

# Final rehearsal checklist

- [ ] The entire walkthrough has been rehearsed while sharing only the dedicated Cursor window.
- [ ] Cursor version, layouts, zoom, keybindings, terminal profile, and compact-chat settings are
  frozen and verified on the presentation machine.
- [ ] Integrated-browser tabs, editor tabs, pinned chats, and recovery checkpoints are in the exact
  presentation order.
- [ ] The pinned Scope issue chat contains the real invocation and output, is clearly described as
  pre-run, and remains separate from the Contribution chat.
- [ ] The Scope issue output visibly includes the existing-work warning and draft-only boundary.
- [ ] No unrelated chat, browser tab, terminal history, notification, secret, or working-tree change
  is visible.
- [ ] `Cmd+P`, layout switching, full-screen tabs, terminal toggling, and their click-based fallbacks
  have all been rehearsed.
- [ ] Every timed section has a rehearsed cut and a clear resume point.
- [ ] One rehearsal includes at least five minutes of simulated interviewer interruptions.
- [ ] The interrupted rehearsal still shows the context boundary, plan approval, SQL and focused
  test, pre-review finding and fix, fork/CI evidence, and honest limitations.
- [ ] The spoken walkthrough finishes in 33 minutes or less.
- [ ] The EF Core explanation stays under 90 seconds.
- [ ] The integration history includes at least two concrete iterations or failures.
- [ ] Rules, commands, and skills are explained as distinct Cursor primitives.
- [ ] At least three alternative designs and their tradeoffs are stated.
- [ ] The issue boundary and plan gate are clear before `/first-contribution` is invoked.
- [ ] `/first-contribution` starts at approximately minute 9.
- [ ] Alternatives and iteration are treated as flexible agent-wait narration, not material that
  must delay a ready plan.
- [ ] `/first-contribution` visibly stops at the plan.
- [ ] The approved plan names projects, sibling, tests, API impact, and excluded scope.
- [ ] The scaffold is described as a candidate first cut, not an automatically trusted contribution.
- [ ] The scaffold produces visible generated SQL and a green focused test.
- [ ] The focused test's limits are stated before moving to review.
- [ ] `/pre-review` runs in a fresh conversation and reliably catches the fault-injected regression
  without presentation notes in context.
- [ ] The audience understands that fault injection is a demo acceptance test, not a normal workflow
  requirement.
- [ ] The human role is framed as judgment and ownership, not mandatory manual typing.
- [ ] The defect is fixed and the focused test returns green.
- [ ] The green rerun is followed by the one-sentence CI-backstop explanation.
- [ ] The PR targets only the fork and has a clean contribution-only diff.
- [ ] The real upstream consumer is described accurately as `main` followed by EF Core's official
  build and release processes, not a servicing branch.
- [ ] The CI limitation is described honestly.
- [ ] `/pre-review`, Bugbot, and CI are presented as complementary review layers.
- [ ] Plan Mode and `/review` are named accurately, the installed `/review` picker is verified, and
  `/review` is not described as Graphite.
- [ ] PM, engineering, QA, DevOps, and maintainer value are all shown.
- [ ] The software-factory sentence frames multi-role SDLC value without becoming a feature list.
- [ ] Limitations and next steps are stated without waiting to be challenged.
- [ ] The real-world roadmap covers controls, specialization, and scale without becoming a feature
  parade.
- [ ] A live recovery path exists for model, build, network, and CI timing failures.
- [ ] Every live recovery path stays inside Cursor and is described honestly when used.
- [ ] The closing ties the technical artifact to measurable customer/account value.
