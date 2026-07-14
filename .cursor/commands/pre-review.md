---
name: pre-review
description: Advisory pre-review of the current change set against workspace rules and EF correctness
---

# Pre-review

Review the change set **before** human review or CI. Check it against the workspace rules, flag
EF-specific correctness and convention problems, and find test gaps. Produce a report — **do not
edit, create, or delete any files** unless explicitly asked to apply a fix. The agent suggests; CI
enforces.

**Input:** by default, the work on the current branch versus `main`
(`git diff main...HEAD`) plus any uncommitted changes (`git diff`, `git status`). Optional trailing
text after this command is the argument — a file list, path glob, or diff range (e.g.
`/pre-review src/EFCore.Sqlite.Core/` or `/pre-review abc123..def456`). When present, review that
instead of the default change set.

## Step 1 — Gather the diff

List the changed files, grouped by project, and note which layer each belongs to (per
`architecture-map`). If nothing has changed, say so and stop.

## Step 2 — Convention check (against the workspace rules)

The rules are the source of truth — check the diff against them and cite the specific one for each
finding. Do not re-derive conventions:

- `coding-style` + `conventions-source-of-truth` (→ the maintainer conventions doc): license header
  on every new `.cs` file; file-scoped namespace; one top-level type per file; `ConfigureAwait(false)`
  on awaited calls in library code; error messages from resx, never hardcoded strings; the
  `[EntityFrameworkInternal]` / `.Internal` XML-doc boilerplate on internal members where the
  surrounding code uses it; NativeAOT-safe patterns; no hardcoded package versions.
- `architecture-map`: is the change in the right project, and does it respect the dependency
  direction (no upward references)?
- `test-conventions`: are tests placed correctly (specification base vs provider functional), and is
  generated SQL asserted with a baseline rather than left unchecked?
- `contribution-workflow`: does the change stay within the approved-context and fork-only boundary?

For anything the maintainer conventions cover, defer to that doc rather than restating it here.

## Step 3 — EF correctness anti-patterns (in the changed code)

Consult the relevant area skill under `.agents/skills/<area>/SKILL.md` for what "correct" looks like,
then scan the diff for:

- **Query / translation:** unintended **client evaluation** or a silent translation fallback where
  SQL was expected; wrong nullability (`nullable:` / `argumentsPropagateNullability` not matching
  the operation); **off-by-one against 1-based SQL functions** (e.g. `instr`, `charindex`, `substr`);
  incorrect or missing type mapping; operations that don't hold for the target database's type
  system (e.g. decimal on SQLite).
- **Async:** sync-over-async (`.Result`, `.Wait()`, `.GetAwaiter().GetResult()`) where an async path
  exists; a missing `ConfigureAwait(false)`.
- **Deprecated API:** use of `[Obsolete]` members; and if public behaviour changes, is the
  "add the new API, mark the old one `[Obsolete]`" pattern followed instead of a breaking change?
- **Test / fixture code:** N+1 or non-`AsNoTracking` query shapes where a fixture only needs to
  read; assertions that don't actually exercise the new path.

## Step 4 — Public-API surface

Does the diff add or change any public API? If so, flag that the API baseline must be regenerated
and that the change needs API review — and note that a *first contribution* should normally avoid
public surface entirely (translating an existing method does not touch it).

## Step 5 — Test-gap analysis

- Is there a specification-base test defining *what* to assert, plus a provider functional override
  asserting *how* (the SQL)? If the change adds a spec test, would `Check_all_tests_overridden`
  pass — i.e. is it overridden in **every** inheriting provider (or, for the local SQLite-only loop,
  at least the SQLite one, with the others named as follow-ups)?
- Are edge cases covered (null, empty, not-found, boundary values)?
- For each gap, **propose the specific missing test** — name, query shape, and the expected SQL or
  result — so it can be added directly.

## Step 6 — Report

Output findings grouped by severity, most serious first:

- **Blocking** — correctness bugs, convention violations CI will reject (format, analyzers, API
  baseline, `Check_all_tests_overridden`), missing required tests. In the local SQLite-only loop, a
  missing **SQLite** override (or SQLite baseline) is still Blocking; a missing override for a
  *non-SQLite* provider (SqlServer, Cosmos, InMemory) is **not** Blocking here — report it as a
  Should-fix follow-up per Step 5, since the focused SQLite loop does not run those suites.
- **Should-fix** — weaker coverage, a sibling pattern not followed, an avoidable client evaluation,
  or a non-SQLite provider override needed for full CI but out of the SQLite-only loop's scope.
- **Nit** — style/readability within the rules' latitude.

For each finding give `file:line`, the rule or skill it maps to, and a concrete fix. End with a
one-line verdict: **ready for review**, or the shortlist of blockers to clear first. Only apply
fixes if asked — otherwise leave the working tree untouched.

## Guardrails

- **Approved context only** — this repo, its in-repo docs (`docs/`, `.github/`, `.agents/`), and the
  official EF Core documentation.
- **Advisory by default** — surface issues; don't rewrite the change unless asked. This pass is the
  fast local mirror of what CI (format, analyzers-as-errors, API baseline, focused tests) will check,
  so problems get caught before the push, not after.
- When a finding is really a wrong or missing **rule** rather than a bad change, flag the rule so it
  gets fixed — do not work around it in the report.
