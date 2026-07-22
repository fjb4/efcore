# Final-challenge demo run

Prepare a seven-minute path; allow it to reach 8-10 minutes only through useful account-team
interaction. The purpose is to prove that the technical-screen artifact has become an engagement
system, not to repeat the implementation demo.

**Bailout rule (session clock, not demo clock): at minute 16, stop wherever the demo stands.**
Name the remaining commands in one line each and move to the operating loop. The demo's job is
done the moment the pilot plan has been revised live with the room's input — everything after
that is optional depth. Interruptions are the format working, not the demo failing; never buy
demo minutes back by talking faster.

## Cursor setup

- Open the repository on `challenge-prep` for the final session; do not change branches while
  sharing. This branch contains the complete runnable artifact and the live board. Do not depend
  on `demo-19287-sqlite-indexof` unless the checklist's branch-sync verification has passed.
- Pin `challenge-prep/LIVE_SESSION_BOARD.md`, `.cursor/README.md`,
  `.cursor/commands/start-onboarding-pilot.md`, and `metrics/ramp-dashboard.md` in that order.
- Start the demo block by moving from the live board to `.cursor/README.md`.
- Use a fresh Agent conversation.
- Keep the existing PR/green test available as supporting evidence, not the main path.
- Do not create or present fictional pilot results.

## Lead with the architecture (90 seconds, before any command)

Screen-feedback correction: the rules' role was not clear last time. Before invoking anything,
walk the capability map **account-risk first** (the session card holds the four-line risk →
response version); name the Cursor components — rules, commands, skills, subagents, hooks + CI,
Bugbot, staged surfaces — only as the mechanism behind each business job. Then say the model
policy out loud:

> Planning and repository analysis inherit the deliberately selected main-conversation model and
> run read-only; bounded edits after plan approval run on an explicit Composer binding —
> Cursor-native and cost-efficient; high-risk review gets an independent reviewer plus the
> deterministic gates; Auto is the default where Cursor's router has fresher information than a
> static policy. The routing is policy-as-code in the subagent frontmatter; the enforced boundary
> is the admin model allowlist.

If pressed on the staged surfaces (MCP, custom modes, cloud agents): open `.cursor/staged/` —
the read-only GitHub MCP config, new-joiner mode spec, and drift-automation spec are committed,
inert, and labeled with their review gates. The line: "not enabled is a decision with a design
attached — this is the artifact Marcus's security review would approve."

Close the architecture setup with:

> This is Acme's first governed production line, not the whole software factory. The foreground
> workflow proves the line; connected systems, team distribution, and bounded cloud execution are
> earned scale stages after its controls hold.

Then the one-line proof: open the three files under `.cursor/agents/` and point at the `model:`
and `readonly:` lines — planner and reviewer `inherit` + read-only, implementer pinned to
`composer-2.5` (Cursor's own coding model, a cost-efficient native binding; do **not** call it
"the fast tier" — Composer 2.5 has a separate Fast mode at 6x the price, and the dry-run
confirms which variant the frontmatter selects); the approval gate stays in the main
conversation. Say:

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

**The live miner stays out of the default demo** — do not spend main-flow minutes explaining why
one open-source contributor is usable and another is truncated. It is Q&A evidence of measurement
integrity: if evidence rigor is challenged, open the pre-generated `metrics/ramp-dashboard.md`
(the committed output of a real run against this repository) and say:

> One usable historical observation was 11 days, with a clickable PR; the second was suppressed
> because the sample was incomplete. The tool refuses to state what the data can't support —
> that discipline is what makes the renewal pack defensible.

Never call an n=1 observation a cohort median aloud. Run it live only if directly asked to:

```text
python3 tools/onboarding-metrics/ramp_metrics.py --repo dotnet/efcore \
  --authors JoasE,cincuranet --max-review-prs 5 --stdout
```

— stating up front that this is historical open-source data standing in for Acme joiners, with
the dashboard as the fallback if it is slow or fails.

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
