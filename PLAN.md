# Warrior \* Sorcerer \* Rogue - Phase 1 Implementation Plan

> **For agentic workers:** This is a content-extraction plan, not a software build. Steps are atomic but coarser than software TDD (reading 20 PDF pages and writing structured notes is one step). Verification is "does this serve `design.md`?", not "does the test pass?". Use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Read the BRP UGE source PDF, understand its structure, and produce an annotated chapter list for *Warrior \* Sorcerer \* Rogue* mapping source material to Player Book and GM Book chapters with extraction decisions and a sequenced extraction order ready for Phase 2.

**Architecture:** Sequential reading + note-taking. Source review feeds chapter enumeration; chapter enumeration feeds Phase 2 (per-chapter extraction, planned separately after Phase 1 ships).

**Tech Stack:** Read tool for paginated PDF reading (max 20 pages per call), Write/Edit for markdown notes, Bash for git. No source code involved.

**Inputs:**
- `design.md` - the rubric every decision is grounded against.
- `source/BasicRoleplaying-ORC-Content-Document.pdf` - the pool of rules.
- `progress.md` - the four watch-items to flag whenever they appear.

**Outputs:**
- `notes/source-structure.md` - high-level source TOC and page ranges.
- `notes/source-<n>-<section>.md` - one file per major BRP section, with canonise/drop/modify decisions.
- `notes/chapter-mapping.md` - our chapter list, Player vs GM Book split, source feeders, open decisions per chapter.
- `progress.md` - chapter table replaced with the populated, sequenced list; Phase 1 marked done.
- `decisions.md` - new entries for major mapping/sequencing decisions.

---

## Pre-flight

Before starting Task 1, the executor MUST:

- [ ] Read `design.md` end to end. Hold §3.1 (Must Do), §3.2 (Will Not Do), §3.3 (Open Questions) in active context.
- [ ] Read the "Watch-items for source PDF review" section of `progress.md`.
- [ ] Read `decisions.md` to know what's already decided.

These three documents are the rubric. Every extraction decision in this phase must cite at least one of them.

---

## Conventions

- Notes filenames are kebab-case: `notes/source-3-skills.md`, `notes/chapter-mapping.md`.
- Source-section files are 1-indexed by reading order from the Task 1 reading list.
- Every canonise/drop/modify decision in a section file includes a one-sentence reason citing `design.md` (e.g. "drop per §3.2 - 'no demi-humans'").
- After each section's notes are written, the four watch-items (character distinctiveness, party cohesion, mook rules, sorcery cost) are explicitly addressed - either marked "no match in this section" or noted with what was found.
- Commit after each task group completes. Commit messages prefixed `phase1:`.
- Hyphens, not emdashes, in markdown.

---

### Task 1: Discover source structure

**Goal:** Get a complete map of the source PDF before reading any section in depth.

**Files:**
- Read: `source/BasicRoleplaying-ORC-Content-Document.pdf` (pages 1-20, more if the TOC continues)
- Create: `notes/source-structure.md`

- [ ] **Step 1: Read the source TOC and front matter.** Use the Read tool with `file_path=/Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue/source/BasicRoleplaying-ORC-Content-Document.pdf` and `pages="1-20"`. If the TOC clearly continues past page 20, read the next batch (e.g. `pages="21-40"`).
- [ ] **Step 2: Write `notes/source-structure.md`** with: total page count, full chapter list with page ranges, any sub-sections, appendices, indices, license text. Note any unusual structural features (e.g. multiple alternate magic systems, optional-rules sidebars, sample setting fragments).
- [ ] **Step 3: At the bottom of `notes/source-structure.md`, write the Task 2 reading list** as a 1-indexed list of major sections to read separately, with their page ranges. Likely (verify against the actual TOC): Characteristics, Skills, System / Resolution, Combat, each Magic System, Equipment, Vehicles, Spot Rules / Optional Rules, GM Section, Bestiary, Appendices.
- [ ] **Step 4: Commit.** `git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue add notes/source-structure.md && git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue commit -m "phase1: source structure notes"`

---

### Task 2: Read and note each major section

**Goal:** Produce one structured notes file per major BRP section, capturing what to canonise, drop, or modify, with reasoning grounded in `design.md`.

**Files (per section, repeating):**
- Read: `source/BasicRoleplaying-ORC-Content-Document.pdf` (page range from the Task 1 reading list)
- Create: `notes/source-<n>-<section-name>.md` (1-indexed, kebab-case section name)

For each section in the Task 1 reading list:

- [ ] **Step 1: Read the section.** Use Read with the relevant `pages` range. Sections >20 pages need multiple Read calls.
- [ ] **Step 2: Write `notes/source-<n>-<section-name>.md`** with the following sections:
  - **Summary** - what's in this section (3-5 sentences).
  - **Canonise** - rules to keep largely as-is. Bulleted list, each item with a one-line reason citing `design.md`.
  - **Drop** - rules to leave out. Bulleted list with reasons.
  - **Modify** - rules to keep but change. Bulleted list with what changes and why.
  - **Open questions** - anything requiring a design call we don't yet have.
  - **Watch-items** - address each of the four explicitly: `character distinctiveness:`, `party cohesion:`, `mook rules:`, `sorcery cost:`. Mark "no match" or describe what was found.
  - **Book placement** - Player Book / GM Book / both, with a one-sentence reason.
- [ ] **Step 3: Commit.** `git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue add notes/source-<n>-<section>.md && git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue commit -m "phase1: notes on <section>"`

(Repeat the three steps for every section in the Task 1 reading list.)

---

### Task 3: Draft chapter mapping

**Goal:** Produce our final chapter list, split between Player Book and GM Book, each annotated with source feeders and major open decisions.

**Files:**
- Read: All `notes/source-*.md` files (created in Tasks 1 and 2)
- Read: `design.md` (re-read to keep the rubric fresh)
- Create: `notes/chapter-mapping.md`

- [ ] **Step 1: Read all section notes back-to-back** to hold the full source picture in context. Re-read `design.md`.
- [ ] **Step 2: Draft the Player Book chapter list.** Likely chapters (verify against actual source coverage): Character Creation, Skills, Action Resolution, Combat, Magic (player-facing - spells, casting, costs from PC perspective), Equipment, Luck / Hero Points. For each, list: which `notes/source-*.md` files feed it, major open decisions (cite `design.md` §3.3 where relevant), rough estimated page count.
- [ ] **Step 3: Draft the GM Book chapter list.** Likely chapters: Running the Game, Bestiary, NPC Sorcery / Patrons, Scenario Seeds, Treasure & Artifacts, Optional Modules. Same per-chapter detail as Step 2.
- [ ] **Step 4: Write `notes/chapter-mapping.md`.** One section per chapter, in our final book order. Each section has: Title, Book (Player/GM), Source feeders (cite notes files), Major decisions (cite open questions from `design.md` §3.3), Estimated page count.
- [ ] **Step 5: Commit.** `git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue add notes/chapter-mapping.md && git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue commit -m "phase1: draft chapter mapping"`

---

### Task 4: Sequence extraction order

**Goal:** Decide which chapter to extract first, second, third, etc. for Phase 2.

**Files:**
- Read: `notes/chapter-mapping.md`
- Modify: `progress.md` (replace the TBD chapter table with the sequenced list)
- Modify: `decisions.md` (new entry capturing the order and reasoning)

- [ ] **Step 1: Reason about sequencing.** Three competing pressures:
  - **Dependencies** - some chapters need others done first (e.g. character creation references the skill list; combat references weapons from equipment).
  - **Risk** - tackle high-risk chapters early to surface design problems while there's room to recover. Magic is currently highest-risk (cost mechanic unresolved per `design.md` §2.2 and §3.3).
  - **Value** - tackle high-value chapters early so partial progress is usable. (Character creation + skills + combat + equipment = a playable subset.)
- [ ] **Step 2: Decide the order.** Write the sequence with one-sentence reasoning per chapter explaining why it's positioned where it is.
- [ ] **Step 3: Update `progress.md`.** Replace the current TBD chapter table with the populated, sequenced list. Status `[ ]` for all chapters. Add a "Phase 2: Chapter Extraction" section header above the table.
- [ ] **Step 4: Add a `decisions.md` entry** at the top (after the preamble, newest first per the existing convention). Title: `YYYY-MM-DD - Chapter list and extraction order finalised`. Capture: the chapter list, the Player Book / GM Book split, the sequencing rationale.
- [ ] **Step 5: Commit.** `git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue add progress.md decisions.md && git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue commit -m "phase1: sequence chapter extraction order"`

---

### Task 5: Phase 1 closeout

**Goal:** Mark Phase 1 done. Archive this plan. Leave `PLAN.md` ready for the Phase 2 plan.

**Files:**
- Modify: `progress.md` (mark Phase 1 done)
- Create: `plans/2026-05-09-phase-1-source-review.md` (archived copy of this plan)
- Modify: `PLAN.md` (replace contents with a short "Phase 1 complete - awaiting Phase 2 planning" placeholder)

- [ ] **Step 1: Mark Phase 1 done in `progress.md`.** Tick the relevant project-setup line. Add an entry to the Done log: `Phase 1: source review and chapter enumeration complete (YYYY-MM-DD).`
- [ ] **Step 2: Archive this plan.** `mkdir -p /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue/plans && cp /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue/PLAN.md /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue/plans/2026-05-09-phase-1-source-review.md`. Then overwrite `PLAN.md` with a short notice: "Phase 1 complete. Phase 2 plan not yet drafted."
- [ ] **Step 3: Commit.** `git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue add progress.md PLAN.md plans/ && git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue commit -m "phase1: closeout"`
- [ ] **Step 4: Notify user.** Summarise what Phase 1 produced (notes files, chapter mapping, sequenced order, decisions). Ask whether to proceed to Phase 2 planning now or pause.

---

## Self-review checklist

Run this before declaring the plan ready for execution.

1. **Spec coverage.** For each output named in the header, point at the task that produces it. ✓ for each.
2. **Placeholder scan.** No "TBD," no "fill in details," no "similar to Task N." (`<n>` and `<section-name>` are *naming slots*, not content placeholders - the file naming pattern is fully specified.)
3. **Filename consistency.** `notes/source-<n>-<section>.md` pattern used consistently. Commit message prefix `phase1:` used consistently.
4. **Watch-item coverage.** Task 2 Step 2 explicitly addresses all four watch-items.
5. **Design.md grounding.** Every canonise/drop/modify decision must cite a `design.md` section (enforced by the Conventions section).
