# Warrior \* Sorcerer \* Rogue

A sword & sorcery roleplaying game built on Chaosium's **Basic Roleplaying Universal Game Engine (BRP UGE)**, released under the ORC License.

## Project Purpose

Compile a focused, opinionated subset of BRP UGE rules suitable for sword & sorcery in the lineage of:

- **Robert E. Howard** (Conan, Kull, Solomon Kane)
- **Fritz Leiber** (Fafhrd & the Grey Mouser)
- **Michael Moorcock** (Elric of Melniboné, the Eternal Champion)

The output is a per-chapter set of PDFs that together form the rules of the system. Each chapter is a deliberate extraction - we keep what serves the genre, drop what doesn't, and modify where the source falls short of the tone we want.

## Documents

- **[design.md](design.md)** - Genre definition, aesthetic, and design goals. The "north star" the rules must serve. Read first when touching any rules question; update when the genre understanding sharpens.
- **[PLAN.md](PLAN.md)** - The active phase plan (currently: Phase 1 - source review and chapter enumeration). Read at the start of any working session, when picking what to do next, or when scope creep is tempting. Replaced at phase boundaries; previous plans archived to `plans/`.
- **[decisions.md](decisions.md)** - Decision log. Every meaningful choice (which optional rule to canonise, which to drop, which to modify) is recorded here with reasoning. Append-only; do not rewrite history.
- **[progress.md](progress.md)** - What has been done, what is in progress, what is still to do. Update as work moves.

## Source Material

- **[source/BasicRoleplaying-ORC-Content-Document.pdf](source/BasicRoleplaying-ORC-Content-Document.pdf)** - Chaosium's BRP UGE under the ORC License. The pool of rules we draw from.
- License: ORC (https://www.chaosium.com/content/orclicense/)

## Output

Per-chapter PDFs live in `chapters/`. Each file is one chapter of the finished system.

## Working Conventions

- Filenames use kebab-case.
- Hyphens, not emdashes, in markdown.
- The stylized name `Warrior \* Sorcerer \* Rogue` uses asterisks as separators; in markdown source they are escaped so they render as literal `*` rather than triggering italics.
- Every rules decision goes through `decisions.md` _before_ the chapter PDF is generated.
- Status updates live in `progress.md`, not in commit messages.
- **Markdown formatting and linting are mandatory before commit.** After drafting or editing any chapter Markdown file, run:
  - `npx --yes prettier@3.8.3 --write 'chapters/p*.md'` (formats in place)
  - `npx --yes markdownlint-cli2 'chapters/p*.md'` (must report `0 error(s)`)
  - Linting config: `.markdownlint-cli2.yaml` (project root). MD013/MD024/MD033/MD036/MD040/MD041 are intentionally disabled - see the file for rationale.
  - Cross-reference integrity: `python3 scripts/verify-cross-refs.py` (must report `Broken references: 0`).
