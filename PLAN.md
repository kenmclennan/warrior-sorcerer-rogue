# Warrior \* Sorcerer \* Rogue - Active Plan

## Phase 1: Source Review and Chapter Enumeration - COMPLETE (2026-05-10)

Phase 1 plan archived at [`plans/2026-05-09-phase-1-source-review.md`](plans/2026-05-09-phase-1-source-review.md).

## Phase 2: Chapter Drafting - COMPLETE (2026-05-10)

Phase 2 plan archived at [`plans/2026-05-10-phase-2-chapter-drafting.md`](plans/2026-05-10-phase-2-chapter-drafting.md).

### Phase 2 outputs

**`chapters/`** - 18 chapter Markdown files (single book):

- **Player-facing (P1-P7):** P1 Introduction, P2 Character Creation, P3 Skills, P4 Action Resolution, P5 Combat, P6 Sorcery, P7 Equipment.
- **GM-facing (P8-P13):** P8 NPCs and Adversaries, P9 Bestiary, P10 NPC Sorcery and Patrons, P11 Treasure and Artifacts, P12 Hazards and Spot Rules, P13 The Deep Past.
- **Appendices (PA1-PA5):** PA1 Critical Hit Tables, PA2 Play Examples, PA3 Inspirational Influences, PA4 Names, PA5 GM Examples.

The earlier Player Book / GM Book split was collapsed into a single book on 2026-05-21; the old G1 (Running the Game) was dropped at the same time. Theatre-of-mind combat and group stealth adjudication migrated into P12 §§10-11; G7's generators stayed in P13 §§1-4 and grew worked examples in §§5-7.

All chapters pass `npx markdownlint-cli2 'chapters/p*.md'` with 0 errors. All cross-references pass `python3 scripts/verify-cross-refs.py` with 0 broken.

**`decisions.md`** - 18 locked design decisions covering:

- Genre and aesthetic direction (Phase 1)
- Combat resolution: matching-dice criticals + weapon-type tables + matching-dice fumbles + PP-buy
- Sorcery cost architecture: PP (immediate, shared with Fate Points) + Patron Score (relational, optional) + Corruption (permanent, sorcerer-only)
- Mook rule (Pulp Cthulhu mechanism)
- Talent system (Pulp Talents structure, 4 tables × 10 = 40 WSR-original talents)
- Equipment borrows from RuneQuest W&E (currency Shard/Dram/Stater/Sun, mundane gear, weapons, armour, mounts)
- Iron-vs-sorcery rule
- Major Wounds default (no per-location HP)
- Healing magic revision (rare, costly, sorcery-channelled - never default)
- Borrowing principle (mechanisms only from non-ORC sources; rules text WSR-original)
- Fate Point spend menu (8 options, finalised)
- Critical severity band mapping (11=A through 88=E)
- G8 Sample Material chapter dropped; sample adventures deferred to a separate post-core supplement
- Publishing pipeline (GitHub Actions to GitHub Pages, deferred to Phase 3)

**Tooling:**

- `.markdownlint-cli2.yaml` - markdown lint config
- `scripts/verify-cross-refs.py` - cross-reference integrity verifier
- CLAUDE.md mandates prettier format + markdownlint + cross-ref verification before any commit touching chapters

### Phase 2 deferrals (intentional)

- **Book assembly (Phase 2 plan Task 21).** Chapters remain as the canonical artifact. Assembly happens as part of Phase 3 (the publishing pipeline) rather than as a separate bundling step.

### Phase 2 known issues to revisit

Recorded in `progress.md` "Open questions / blockers":

- **PA1 Critical Hit Tables: lethality needs softening.** Initial draft is too brutal for PCs on the receiving end. Tweak Band E (and possibly Band D) downward before publishing.
- **Burn and Grapple crit tables.** Currently using interim rules (Burn = Krush one band lower; Grapple = Krush same band). Proper tables to be authored later.

---

## Phase 3: Publishing - NOT YET PLANNED

Phase 3 publishes the chapters as a styled site to GitHub Pages via a GitHub Actions pipeline. Per the publishing decision in `decisions.md` (2026-05-10).

### Phase 3 high-level scope

1. **Choose a build approach.** Pandoc + custom HTML templates, or a static-site generator (Hugo / MkDocs / Eleventy / Astro / etc.). Each has trade-offs:
   - **Pandoc + custom templates:** Maximum control, minimal dependency surface, more design work upfront.
   - **MkDocs (Material theme):** Fastest path to a credible technical-docs aesthetic, but biased toward documentation rather than RPG book layout.
   - **Hugo / Eleventy / Astro:** Full static-site flexibility, larger dependency footprint, requires theme design or selection.
2. **Design the styling.** Sword-and-sorcery flavoured layout. Genre-evocative typography. Sidebar / call-out treatment. Stat block presentation. Crit table formatting. Palette.
3. **Set up the GitHub Action workflow.** Trigger on push to `main`; build the site; deploy to GitHub Pages.
4. **Configure GitHub Pages.** Enable on the repo; configure custom domain if desired.
5. **Optional: PDF output.** The same pipeline can also produce per-chapter PDFs and book-level PDFs (via Pandoc) if desired.

### Phase 3 prerequisites

- **Project repo pushed to GitHub.** Currently local-only. Needs a remote and a first push.
- **GitHub Pages enabled** for the repo.
- **Build approach chosen** (decision pending).

### Pre-Phase-3 review (recommended before kicking off)

Before triggering the writing-plans skill for Phase 3:

- **Review chapters individually.** They are the canonical artifact. Read for content quality, tone consistency, mechanical correctness.
- **Revise PA1 critical hit tables** for less brutal lethality (open issue in `progress.md`).
- **Decide whether to author Burn and Grapple crit tables** before publishing or leave the interim rules in place for v1.
- **Choose the build approach** (the most consequential Phase 3 decision).

### Triggering Phase 3

When ready, invoke the writing-plans skill (`superpowers:writing-plans`) to draft the Phase 3 implementation plan.
