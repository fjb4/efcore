# Final-challenge demo run

Keep this portion to about 8-10 minutes. The purpose is to prove that the technical-screen artifact
has become an engagement system, not to repeat the implementation demo.

## Cursor setup

- Open the repository on `demo-19287-sqlite-indexof`.
- Start from `.cursor/README.md`.
- Use a fresh Agent conversation.
- Keep the existing PR/green test available as supporting evidence, not the main path.
- Do not create or present fictional pilot results.

## Lead with the architecture (90 seconds, before any command)

Screen-feedback correction: the rules' role was not clear last time. Before invoking anything,
walk the capability map — rules (persistent scoped context, "point, don't copy"), commands
(workflow orchestration), skills (packaged expertise on demand), subagents (phase isolation with
pinned model tier and write access), hooks + CI (policy and deterministic enforcement), Bugbot
(independent review), and custom modes / MCP / cloud agents as expansion surfaces staged for
later. Then say the model policy out loud:

> Planning and repository analysis run on a high-context reasoning model; bounded edits after plan
> approval drop to a fast fit-for-purpose model; high-risk review gets an independent reviewer plus
> the deterministic gates; Auto is the default where Cursor's router has fresher information than a
> static policy. The routing is policy-as-code in the subagent frontmatter; the enforced boundary
> is the admin model allowlist.

Then the one-line proof: open the three files under `.cursor/agents/` and point at the `model:`
and `readonly:` lines — planner and reviewer `inherit` + read-only, implementer pinned to
`composer-2.5` (Cursor's own fast model — the fast tier is where Cursor's model differentiates on
cost); the approval gate stays in the main conversation. Say:

> Maya changes the model pin in one line, the change is a git diff her team reviews, and
> `/update-rules` flags it if it drifts from the documented policy — a pinned name going stale is
> a managed drift surface with an owner and a cadence, not a surprise.

## Exact command

Run:

```text
/start-onboarding-pilot Acme internal-library onboarding. Target team: 12 engineers with high
Cursor use. Baseline: about 6 weeks to first meaningful PR. Renewal: about 90 days. Proposed cohort:
3 new joiners in the next 30 days; if unavailable, use cold-module engineers as a labeled proxy.
Stakeholders: David Park (engineering manager), Maya Chen (staff engineer), Nina Alvarez (QA),
Marcus Webb (DevOps), Ravi Shah (PM), Priya Nair (director). Target: test whether the workflow can
move ramp toward 2 weeks without increasing material PR rework. Use the current repository as the
SDK stand-in. Plan only and stop for approval.
```

## Review only these five things

1. A target is not presented as a promised result.
2. The meaningful-PR definition and cohort are explicit approval decisions.
3. David, Maya, Nina, Marcus, and Ravi have different ownership.
4. The three primary measures cover speed, quality, and SDLC reach.
5. The command stops before creating files or changing the workflow.

Say:

> This is the same approval pattern from the technical screen, moved one level up. The customer
> approves the outcome, cohort, controls, and evidence contract before we optimize anything.

Do not approve the live plan unless timing is excellent. Explain that the next step creates the
charter, evidence ledger, decision log, and handoff checklist.

## Show the existing workflow underneath

Open, but do not rerun in full:

- `/scope-issue` - Product turns roadmap intent into a contribution-ready issue.
- `/first-contribution` - the new joiner follows a grounded plan and approval gate.
- `/pre-review` - QA/maintainers get a skeptical, read-only check.
- Fork CI - deterministic format, analyzer, API, and focused test gates.

Then open `/renewal-evidence` and say:

> This command cannot turn usage or a champion quote into productivity. It audits the ledger,
> calculates only comparable observations, and recommends expand, iterate, or stop.

Optional (~90 seconds, if timing is good) — mine a real baseline live:

```text
python3 tools/onboarding-metrics/ramp_metrics.py --repo dotnet/efcore \
  --authors JoasE,cincuranet --max-review-prs 5 --stdout
```

State up front that this is historical open-source data standing in for Acme joiners. The
tested result is the point: one author yields an **observed 11-day** time-to-first with a
clickable PR; the other is suppressed as **TRUNCATED** because the sample cannot see their true
first PR. Say:

> The baseline comes from the customer's own history, and the tool refuses to state what the
> data can't support — that discipline is what makes the renewal pack defensible.

If it is slow or fails live, open the pre-generated `metrics/ramp-dashboard.md` instead and say
that is the committed fallback output of the same run.

## Proof and limitation

Show one compact chain from the technical screen:

```text
issue -> plan approval -> diff/test/SQL -> skeptical finding -> fix -> green CI
```

Say:

> That run proves the engineering workflow can work on this repository. It does not prove Acme's
> ramp improved. The pilot and evidence contract are how we earn that second claim.

## Recovery

If the command is slow:

> The planning run is still grounding itself in the repository. I do not want the account session
> to become a progress indicator, so I will continue with the command contract and the already
> verified engineering workflow. I am not presenting a generated pilot result.

If Cursor does not discover the new commands:

- Confirm the files are under `.cursor/commands/`.
- Start a fresh Agent conversation or reload the window.
- Open the command file directly and ask Agent to follow it with the same Acme input.
- State that fallback honestly; do not pretend slash-command discovery worked.

