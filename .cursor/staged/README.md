# Staged scale steps (inert — nothing here is loaded by Cursor)

Cursor reads `.cursor/rules/`, `.cursor/commands/`, `.cursor/agents/`, and `.cursor/mcp.json`.
This directory is none of those: it holds the **gate-ready designs** for the capabilities the
pilot deliberately does not enable. Each file is written so the named reviewer can approve or
reject a concrete artifact instead of a slideware promise — "not enabled" is a decision with a
design attached, not a gap.

| Staged artifact | Enable gate (owner) | Precondition |
|---|---|---|
| `mcp.github.json` — read-only GitHub MCP server config | Security review (Marcus) | Least-privilege token issued; foreground workflow trusted for evidence capture |
| `new-joiner-mode.md` — restricted custom-mode spec | Team adoption call (Maya + David) | Pilot cohort feedback shows the default surface is too open for week-one joiners |
| `drift-automation-spec.md` — scheduled drift-check automation | Security + platform review (Marcus, with Maya) | Workflow rolled out beyond one repository; human-triggered `/update-rules` cadence outgrown |

To enable one: copy or recreate it at its live location (e.g. `mcp.github.json` →
`.cursor/mcp.json`) **after** the gate owner signs off, and record the decision in the pilot
decision log. Do not enable anything from here during the wedge phase.
