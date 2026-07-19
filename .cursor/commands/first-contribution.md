---
name: first-contribution
description: Plan, scaffold, and verify a first contribution from a GitHub issue (SQLite-local)
---

# First contribution

Scaffold a convention-correct first contribution from a GitHub issue: plan it against the
workspace rules, implement it modelled on the nearest existing code, and verify it against
SQLite locally.

**Input:** the GitHub issue URL or number typed after this command (e.g.
`/first-contribution https://github.com/.../issues/123` or `/first-contribution 123`). That
trailing text is the command argument. If none was given, ask for one before doing anything else.

Work in three steps. **HARD STOP after Step 1** — output the plan and wait for explicit approval.
Do not edit, create, or delete any files until the plan is confirmed.

**Orchestration (the model policy as code):** delegate the steps to the repository subagents
rather than running them inline:

- **Step 1 →** the `contribution-planner` subagent (read-only; `model: inherit`, so planning stays
  on the high-reasoning tier). Present its returned plan unchanged.
- **The approval gate runs here, in this conversation — never inside a subagent.** Stop and wait.
- **Steps 2–3 →** the `contribution-implementer` subagent (pinned to a fast fit-for-purpose
  model — bounded execution of a decided plan). Pass the approved plan **verbatim** and state that
  it was approved.
- Afterwards, suggest a fresh `/pre-review` (the `skeptical-reviewer` subagent). Do not review the
  implementation in this same conversation.

If subagent dispatch is unavailable, run the steps below inline — the procedure is identical; only
the per-step model routing is lost. Say which path was taken.

## Step 1 — Plan (no edits)

1. Read the issue: reported behaviour, expected behaviour, and any maintainer guidance in the
   thread. Restate the root cause in your own words.
2. Ground the plan in the workspace rules — cite the ones that apply **by name** and follow them;
   do not re-derive conventions:
   - `conventions-source-of-truth` — maintainer conventions doc and area skills.
   - `architecture-map` — which project(s) the change and tests belong in. Name them explicitly
     (e.g. provider translator → `src/EFCore.Sqlite.Core`; test → specification base plus the
     SQLite functional override).
   - `test-conventions` — specification-vs-functional split and where the new test lands.
   - `coding-style` — C# file shape for any `src/` edit.
   - `contribution-workflow` — approved-context boundary and fork-only PR rule.
3. Consult the matching area skill(s) under `.agents/skills/<area>/SKILL.md` (e.g.
   `query-pipeline`, `testing`, `model-building`, `migrations`) and **reference** them — do not
   restate their guidance.
4. Identify the **nearest sibling** already in the codebase to model on (same file or an adjacent
   method solving an analogous problem). Name it.
5. Output the plan: root cause → target project(s) → sibling to follow → test placement
   (specification base + SQLite functional override, per `test-conventions`) → public-API impact
   (must be none for a first contribution). Scope the scaffold's **implementation** to the
   provider(s) that are locally verifiable per `test-conventions` (SQLite here) **and** to the
   minimal case/overload that resolves the issue; name any other providers or additional
   overloads as explicit upstream follow-ups in the plan — do not implement them. Restate the
   approved-context boundary and that any PR targets **this fork**, not upstream (per
   `contribution-workflow`). Then **stop for approval**.

## Step 2 — Scaffold (only after the plan is approved)

1. Implement in the project(s) the plan named, following the nearest sibling closely — match its
   structure, nullability handling, and helpers rather than inventing a new shape. Limit the
   **implementation** (not only the tests) to the locally verifiable provider(s) per
   `test-conventions` and to the minimal overload that resolves the issue. Do not implement other
   providers or extra overloads; list them as upstream follow-ups.
2. Apply `coding-style` to any new or edited `src/` file: .NET Foundation licence header,
   file-scoped namespace, one type per file, and `[EntityFrameworkInternal]` / `.Internal` XML-doc
   boilerplate on internal members where the surrounding code uses it.
3. Add tests per `test-conventions`: the specification-base test that defines *what* to assert, and
   the **SQLite** functional override that asserts *how* (generated SQL). Locally add only the
   SQLite override; note that a full upstream PR must override the new specification test in
   **every** inheriting provider or `Check_all_tests_overridden` will fail.

## Step 3 — Verify against SQLite (local target only)

1. Build the affected test project (do **not** pass `--no-build` unless it was just built).
2. Run the specific test by invoking the built assembly directly — `dotnet test --filter`
   conflicts with this repo's test platform, so use:

   ```
   dotnet exec ./<Provider>.FunctionalTests.dll \
     --filter-method '*<TestClass>.<TestMethod>' \
     --filter-not-trait category=failing --ignore-exit-code 8
   ```

3. If a SQL baseline mismatches, re-run once with `EF_TEST_REWRITE_BASELINES=1` to regenerate it,
   confirm the rewritten baseline is correct, then re-run without the flag.
4. Report: pass/fail, the generated SQL, and the files touched.

## Guardrails

- **Approved context only** — this repo, its in-repo docs (`docs/`, `.github/`, `.agents/`), and
  the official EF Core documentation. Do not pull guidance from blogs, Q&A sites, third-party
  samples, or an existing pull request for this issue.
- **This fork only** — never open or target a PR against the upstream repository.
- **No public-API surface** for a first contribution — if the issue genuinely requires new public
  API (API-baseline process), say so and stop rather than proceeding.
- When the scaffold and the workspace rules disagree, the **rules win**. If a rule is wrong or
  missing, flag it so the rule gets fixed — do not work around it in the output.
