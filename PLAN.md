# Warrior \* Sorcerer \* Rogue - Phase 2 Implementation Plan

> **For agentic workers:** This is a content-extraction plan, not a software build. Steps are atomic but coarser than software TDD - drafting a chapter is one-to-multi-hour work. Verification is "does this serve `design.md` and apply `decisions.md`?", not "does the test pass?". Use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Draft all 17 chapter Markdown files for *Warrior \* Sorcerer \* Rogue* (Player Book + GM Book), applying every locked design decision and citing source notes as needed. PDF generation is **deferred** to a later phase per user direction; Phase 2 produces Markdown only.

**Architecture:** Sequential per-chapter authoring in the locked extraction order from `progress.md`. Each chapter task reads its source feeders and the relevant locked decisions, drafts the chapter Markdown, self-reviews, commits, and ticks the progress table. After all 17 chapters draft, a cross-reference pass + a Player/GM Book assembly task + a closeout complete the phase.

**Tech Stack:** Read tool (existing `notes/source-*.md` + occasional source PDF re-reads), Write tool (chapter Markdown), Edit tool (cross-reference fixes + `progress.md` updates), Bash for git. No source code, no PDF tooling.

**Inputs (read at start, referenced throughout):**
- `design.md` - the genre / aesthetic / design goals rubric
- `decisions.md` - 12 locked design decisions
- `notes/chapter-mapping.md` - per-chapter brief (source feeders, content outline, page estimates)
- `progress.md` - sequenced chapter table
- All `notes/source-*.md` and the four external research notes (`notes/pulp-cthulhu.md`, `notes/delta-green.md`, `notes/runequest-weapons-equipment.md`, `notes/rolemaster-arms-law.md`)
- `notes/special-success-audit.md`

**Outputs:**
- `chapters/<C>-<kebab-name>.md` - one Markdown file per chapter (17 files total)
- `progress.md` - updated as chapters complete (`[x]` per row)
- `decisions.md` - new entries as smaller chapter-time decisions are made
- `book-player.md` and `book-gm.md` - assembled book-level Markdown produced at closeout

---

## Pre-flight

Before starting Task 1, the executor MUST:

- [ ] Read `design.md` end-to-end
- [ ] Read `decisions.md` end-to-end (12 locked decisions)
- [ ] Read `notes/chapter-mapping.md` end-to-end
- [ ] Read `progress.md`'s "Phase 2: Chapter Extraction" table
- [ ] Skim the `notes/source-*.md` index in `notes/source-structure.md`

---

## Conventions

### Chapter file naming

`chapters/<C>-<kebab-name>.md` where `<C>` is the chapter ID from `notes/chapter-mapping.md` (P1, P2, ..., PA1, PA2, G1, ..., GA1) lowercased, with single-digit numerics zero-padded for natural sort order.

Examples:
- `chapters/p01-introduction.md`
- `chapters/p04-action-resolution.md`
- `chapters/pa1-critical-hit-tables.md`
- `chapters/g04-npc-sorcery-and-patrons.md`
- `chapters/ga1-gm-examples.md`

### Chapter section structure

Each chapter Markdown file follows this scaffold:

```markdown
# Chapter Title

> Optional epigraph (literary touchstone quote, max 3 lines)

## 1. First Major Section

[Prose. Tables and sidebars where needed. No interleaved examples per `design.md` §3.1.]

### 1.1 Subsection

[Prose.]

## 2. Second Major Section

[etc.]
```

Sections numbered for cross-reference clarity. Subsections use third-level headers.

### Cross-reference syntax

Cross-references between chapters use the chapter ID and section number:

- `See P5 §3 for parry rules.`
- `Per G2 §1, mooks are incapacitated at half HP.`

Greppable from the closeout cross-reference pass.

### Tone and language

- **Hyphens, not emdashes** (per project convention).
- **British English spelling** (matches existing project files).
- Prose voice: direct, opinionated, evocative. Avoid academic hedging.
- **Sidebars and call-outs are allowed** for designer notes but **never interleaved into the rules text**. Examples go in the appendix chapters (PA2 and GA1).
- The book is written from the perspective of someone who knows the genre intimately and is presenting a focused tool to GMs and players. Howard's prose pace is a fine model.

### Decision citation in chapter text

When a chapter applies a non-obvious locked decision, cite it briefly inline:

> Combat resolution uses matching-dice criticals (per the Combat Resolution decision, 2026-05-10).

Don't over-cite. Inline citation is for genuine design-rationale moments, not every rule.

### Standard chapter task steps

Each of Tasks 3-19 (the 17 chapter tasks) follows this six-step procedure:

1. **Read inputs.** Re-read `design.md`, the chapter-specific entry in `notes/chapter-mapping.md`, every `notes/source-*.md` listed as a source feeder for this chapter, and any `decisions.md` entries flagged for this chapter. (10-20 min for a small chapter, 30-45 min for a large one.)
2. **Outline the chapter.** Draft a section outline: section titles + brief content notes per section + rough word-count target per section.
3. **Draft the chapter content.** Write the Markdown source. Apply every relevant locked decision. Cite source notes where genuinely useful.
4. **Self-review.** Did you apply every relevant locked decision? Did you cite source where needed? Did you keep examples out of rules text? Does the tone match `design.md` §2? Are cross-references using the standard syntax?
5. **Commit chapter draft.** `git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue add chapters/<C>-<name>.md && git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue commit -m "phase2: draft <C> <chapter title>"`
6. **Update `progress.md`.** Mark this chapter `[x]` in the "Phase 2: Chapter Extraction" table. Commit the progress update separately or fold into the chapter commit at the executor's discretion.

---

# Tasks

## Setup

### Task 1: Establish chapter authoring template

**Goal:** Create a single template file that codifies the chapter scaffold so every draft starts from a consistent baseline.

**Output:** `chapters/_template.md` (the leading underscore makes it sort to the top of `ls chapters/` and signals "not a real chapter")

- [ ] **Step 1:** Write `chapters/_template.md` containing:
  - The chapter scaffold from the Conventions section above
  - Inline comments explaining each placeholder
  - A "Standard front-matter" stub (chapter ID, title, brief blurb)
  - A "Standard back-matter" stub (cross-references-out, source notes cited)
- [ ] **Step 2:** Commit. `git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue add chapters/_template.md && git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue commit -m "phase2: chapter authoring template"`

---

### Task 2: Set up book assembly placeholders

**Goal:** Create empty Markdown files that will become the assembled Player Book and GM Book at closeout.

**Output:** `book-player.md`, `book-gm.md`

- [ ] **Step 1:** Create both files containing only a one-line placeholder: `# Player Book` / `# GM Book`, plus a comment line `<!-- Assembled at Phase 2 closeout (PLAN.md Task 21). -->`
- [ ] **Step 2:** Commit. `git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue add book-player.md book-gm.md && git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue commit -m "phase2: book assembly placeholders"`

---

## Chapter tasks (17, in extraction order)

All chapter tasks follow the **Standard chapter task steps** defined in Conventions. The brief below specifies what is unique to each chapter (output file, source feeders, decisions to apply, content outline, estimated pages, open chapter-time decisions).

---

### Task 3: P4 Action Resolution

**Output:** `chapters/p04-action-resolution.md`

**Source feeders:** `notes/source-11-system.md`, `notes/special-success-audit.md`, `notes/delta-green.md`, `notes/source-gaps-batch1.md`, `notes/pulp-cthulhu.md` (Fate Point spend menu inspiration)

**Locked decisions to apply:**
- Combat resolution: matching-dice criticals + matching-dice fumbles + PP-buy
- Fate Points share the PP pool
- Borrowing principle (write Fate spend menu in WSR-original prose)

**Section outline (from chapter-mapping.md P4):**
1. Percentile rolls (skill vs target)
2. Outcome tiers (Critical via matching dice ≤ skill, Success, Failure, Fumble via 00 or matching dice > skill)
3. PP-buy mechanic
4. Resistance Table (POW vs POW, PP vs PP)
5. Time, rounds, turns
6. Power Points (definition, regeneration, what spends them)
7. Fate Point spend menu (WSR-original, ~6-8 options)
8. Experience and improvement (use-based with 75% training cap)

**Estimated pages:** 8-12

**Open chapter-time decisions:** Exact Fate Point spend menu (cost per option, what's in vs out).

**Steps:** Standard chapter task steps (see Conventions).

---

### Task 4: P5 Combat

**Output:** `chapters/p05-combat.md`

**Source feeders:** `notes/source-5-combat.md`, `notes/source-10-spot-rules.md`, `notes/pulp-cthulhu.md`, `notes/rolemaster-arms-law.md`

**Locked decisions to apply:**
- Combat resolution (full)
- Major Wounds default; no per-location HP
- Mook rule (Pulp Cthulhu mechanism)

**Section outline (from chapter-mapping.md P5):**
1. Combat round structure (Strike Ranks, Initiative)
2. Attack and Defense (weapon vs parry vs dodge)
3. Major Wounds (single threshold)
4. Mook handling (incapacitated at half HP; the player view)
5. Dying Blows (Desperate Action folded in)
6. Knockout, Subdual, Disengage, Surprise
7. Common combat situations (cover, multiple attackers, etc.)
8. Reading the crit tables (forward reference to PA1)

**Estimated pages:** 14-18

**Open chapter-time decisions:** None major; lock-in chapter.

**Steps:** Standard chapter task steps.

---

### Task 5: PA1 Critical Hit Tables

**Output:** `chapters/pa1-critical-hit-tables.md`

**Source feeders:** `notes/rolemaster-arms-law.md` (format inspiration only - WSR-original prose)

**Locked decisions to apply:**
- Combat resolution (the tables ARE the effect side of this decision)
- Borrowing principle (Rolemaster is INSPIRE ONLY - WSR-original prose, no verbatim entries)
- Major Wounds default

**Section outline:**
1. How to read the tables (band assignment from roll-within-success-range)
2. Slash table (A-E severity bands, ~10 results per band = ~50 entries)
3. Pierce table (A-E)
4. Krush table (A-E)
5. (If scoped) Burn table (A-E)
6. (If scoped) Grapple table (A-E)

**Estimated pages:** 10-15 (table-heavy)

**Open chapter-time decisions:**
- Damage type count: 3 (Slash + Pierce + Krush) or 5 (add Burn + Grapple)
- Final word counts per result (one-sentence vs two-sentence richness)

**Steps:** Standard chapter task steps. **NB:** This task is the largest single writing job in the plan. Expect multi-session work (estimated 150-250 prose entries to author). Consider sub-committing per damage type if needed.

---

### Task 6: P3 Skills

**Output:** `chapters/p03-skills.md`

**Source feeders:** `notes/source-6-skills.md`, `notes/special-success-audit.md`

**Locked decisions to apply:**
- Combat resolution (the five non-combat skills with carry-over special-success effects each get a "Critical:" ruling)

**Section outline:**
1. Using skills (cross-reference to P4 Action Resolution)
2. Specialty mechanics (skills with specialties: Melee Weapon, Knowledge, Craft, etc.)
3. Complementary Skill / Augment cooperative rules
4. Skill list (44 skills, alphabetical, with descriptions)
5. The five skills with explicit Critical effects (First Aid, Medicine, Teach, Cooperative Rolls, Jump - inline within the alphabetical list)

**Estimated pages:** 10-14

**Open chapter-time decisions:** Whether to merge Status (skill) and Reputation (mechanic) into one social-standing system.

**Steps:** Standard chapter task steps.

---

### Task 7: P7 Equipment

**Output:** `chapters/p07-equipment.md`

**Source feeders:** `notes/source-13-equipment.md`, `notes/runequest-weapons-equipment.md`

**Locked decisions to apply:**
- Equipment chapter borrows from RuneQuest W&E (mechanism only, WSR-original tables)
- Iron-vs-sorcery rule
- Major Wounds default (armour AP collapses to single value, not per-location)

**Section outline:**
1. Currency (4-tier WSR-original coin system; ancient-world names)
2. Weapons (BRP UGE keepers + ~11 RuneQuest additions)
3. Armour (BRP UGE + RuneQuest additions; single-AP)
4. Shields
5. Material tiers (copper / bronze / iron quality)
6. Mundane gear (9 categories: clothing, tools, writing, containers, lighting, rope, supplies, food/drink, herbs/musical)
7. Mounts and beasts of burden
8. Vehicles (carts, wagons, chariots)
9. Watercraft (rowboats, riverboats, sailing ships)
10. Hirelings and inn prices
11. Encumbrance (basic ENC; required for the iron-vs-sorcery rule)
12. Equipment with sorcery (artifact basics; full creation rules in G5)

**Estimated pages:** 12-16

**Open chapter-time decisions:** Currency names; specific weapon stat balancing; encumbrance system simplification level.

**Steps:** Standard chapter task steps.

---

### Task 8: P6 Sorcery (player-facing)

**Output:** `chapters/p06-sorcery.md`

**Source feeders:** `notes/source-1-sorcery.md`, `notes/source-9-allegiance.md`, `notes/source-12-sanity.md`, `notes/runequest-weapons-equipment.md` (iron-vs-sorcery), `notes/source-13-equipment.md` (grimoire formats)

**Locked decisions to apply:**
- Magic dropped (only Sorcery exists)
- Allegiance canonised as optional Patron Score for sorcerers
- Sanity adopted as sorcerer-specific Corruption track
- Iron-vs-sorcery rule
- Healing magic revision (sorcerous healing is permitted, rare and costly)
- Borrowing principle

**Section outline:**
1. Becoming a sorcerer (chargen requirements: POW threshold, profession constraint, learning method)
2. Casting (PP cost, automatic success, time, components)
3. The cost trio:
   - PP (immediate, shared with Fate and crit-buy)
   - Patron Score (optional - the Patron compact)
   - Corruption (sorcerer-only, accumulating with use)
4. Iron disrupts sorcery (-5%/ENC unenchanted iron)
5. Grimoires (formats, learning new spells, scribing)
6. Spell list (alphabetical, WSR-original tone-rich descriptions)
7. Demon summoning basics (bargaining, binding, releasing - GM Book G4 has the deep dive)

**Estimated pages:** 16-22 (spell list will be the bulk)

**Open chapter-time decisions:** Final spell list (WSR-edited from BRP UGE's ~32 candidate Sorcery spells, plus 1-3 healing-themed entries per the healing revision); demon-bargaining mechanic detail.

**Steps:** Standard chapter task steps.

---

### Task 9: P2 Character Creation

**Output:** `chapters/p02-character-creation.md`

**Source feeders:** `notes/source-2-characters.md`, `notes/source-4-passions-reputation.md`, `notes/source-9-allegiance.md`, `notes/source-12-sanity.md`, `notes/pulp-cthulhu.md` (talent system)

**Locked decisions to apply:**
- Talent system: borrow Pulp Talents structure (4 tables, ~10 talents each, choose 2 at chargen, gate PP spends)
- Allegiance canonised as optional Patron Score for sorcerers
- Sanity / Corruption is sorcerer-only

**Section outline:**
1. Step-by-step chargen overview
2. Characteristics (Heroic-level point allocation)
3. Backgrounds / cultures (WSR-original ancient-world set: Mediterranean, Levantine, Mesopotamian, Persian, Steppe)
4. Professions (~12-15, including Scholar of the Dark Arts for sorcerers, Tribal Warrior, Sea-Raider, City Thief, etc.)
5. Skills (refer to P3; skill-bundle by profession)
6. Talents (choose 2 from 4 tables; talent eligibility per profession)
7. Passions (mandatory: 1 at 80%, 2 at 60%; player-authored)
8. Reputation (starting score by profession)
9. Sorcerer-specific (POW threshold, optional patron, starting Corruption)
10. Starting equipment

**Estimated pages:** 12-16

**Open chapter-time decisions:** Final profession list; talent table contents (40 talents to design); starting Reputation values; cultural background details.

**Steps:** Standard chapter task steps.

---

### Task 10: P1 Introduction

**Output:** `chapters/p01-introduction.md`

**Source feeders:** `design.md` §1, §2.1 (genre / tone summary)

**Locked decisions to apply:** All of design.md (this is the synthesis chapter)

**Section outline:**
1. What sword & sorcery is (for our purposes)
2. What WSR is (the system in one page)
3. Conventions used in this book
4. The one-page "how to play" primer
5. Credits and attribution (BRP UGE under ORC; non-ORC inspirations cited)

**Estimated pages:** 4-6

**Open chapter-time decisions:** None.

**Steps:** Standard chapter task steps.

---

### Task 11: PA2 Examples (Player Book appendix)

**Output:** `chapters/pa2-examples.md`

**Source feeders:** `notes/source-5-combat.md` (Yvarre/Kallistor as a template), all Player Book chapters as basis

**Locked decisions to apply:** All Player Book decisions (this is the demonstration chapter)

**Section outline:**
1. Chargen example (full PC walkthrough)
2. Combat example (multi-round combat showing crits, mooks, Fate Points, PP-buy)
3. Sorcery example (a sorcerer casting at cost - PP + Corruption + Patron implications)
4. Optional: a short scenario walkthrough

**Estimated pages:** 6-10

**Open chapter-time decisions:** Whether to include the scenario walkthrough.

**Steps:** Standard chapter task steps.

---

### Task 12: G1 Running the Game

**Output:** `chapters/g01-running-the-game.md`

**Source feeders:** `notes/source-3-gamemastering.md`, `design.md` §1, §2, §4

**Locked decisions to apply:** All of design.md (this is the GM-side synthesis chapter)

**Section outline:**
1. Genre primer (deeper than P1 - the literary touchstones, the doom, the cyclic history)
2. Session structure (hook / complications / reckoning per design.md §4.1)
3. GM principles (be lethal but fair, telegraph dread, reward cleverness, never save the village for free)
4. Connecting characters at session zero (Passions-based per source-3 notes)
5. Theatre-of-mind combat (no VTT - guidance for GMs)
6. Pacing
7. The lightweight-vs-tactical tension (how to read the table)

**Estimated pages:** 10-14

**Open chapter-time decisions:** None major.

**Steps:** Standard chapter task steps.

---

### Task 13: G2 NPCs and Adversaries

**Output:** `chapters/g02-npcs-and-adversaries.md`

**Source feeders:** `notes/source-3-gamemastering.md`, `notes/source-14-npc-digest-customizing.md`, `notes/pulp-cthulhu.md`

**Locked decisions to apply:**
- Mook rule (Pulp Cthulhu mechanism + "Look Out Master!")

**Section outline:**
1. Three-tier NPC model (mook / professional / named antagonist)
2. Mook stat block format and the half-HP rule (the GM's view)
3. "Look Out Master!" - villain spends PP to redirect a hit, killing a mook
4. Building professional NPCs (mid-grade)
5. Building named antagonists (full PC-grade NPCs)
6. Sample stat blocks (city guard mook, mercenary captain, sorcerer-villain - WSR-original entries)

**Estimated pages:** 8-12

**Open chapter-time decisions:** None major.

**Steps:** Standard chapter task steps.

---

### Task 14: G4 NPC Sorcery and Patrons

**Output:** `chapters/g04-npc-sorcery-and-patrons.md`

**Source feeders:** `notes/source-1-sorcery.md`, `notes/source-9-allegiance.md`

**Locked decisions to apply:**
- Allegiance canonised (the GM Book has the patron-design deep-dive)
- Sanity / Corruption (NPC sorcerer perspective)

**Section outline:**
1. Designing an NPC sorcerer (POW thresholds, spell loadouts, cost-architecture choices)
2. Sample NPC sorcerers (cult leader, court mage, hermit, witch-queen)
3. Patron design (creating a named patron with agendas, demands, gifts, dooms)
4. Sample patrons (5-7 worked examples)
5. Ritual magic (extended workings - days/weeks of preparation; party-pooled PP via Chain of Being)
6. Demon binding deep-dive (long-term demon servitors, contracts, escape conditions)
7. The Brazier of Power (sorcerer's lair as PP reservoir)
8. Apotheosis (optional Moorcock-tone end-state for high-Patron-Score sorcerers)

**Estimated pages:** 12-16

**Open chapter-time decisions:** Number and identity of sample patrons; how detailed the apotheosis arc should be.

**Steps:** Standard chapter task steps.

---

### Task 15: G3 Bestiary

**Output:** `chapters/g03-bestiary.md`

**Source feeders:** `notes/source-7-creatures.md`

**Locked decisions to apply:** None unique (covered by general decisions)

**Section outline:**
1. Creature entry format
2. Mortal beasts (lion, snake, wolf, bear, prehistoric megafauna)
3. Undead (Skeleton, Zombie, Mummy with sorcerer variant, Ghoul, Vampire, Ghost)
4. Fantasy beasts (Dragon, Giant, Minotaur, Werewolf, Troll, Centaur reframed, Griffin reframed)
5. Demons (Lesser, Greater - tied to Sorcery)
6. Elementals (reframed as alien intelligences)
7. Chaotic Features table (for unique demons / mutated creatures)

**Estimated pages:** 14-18

**Open chapter-time decisions:** Final creature list; whether to include any "ancient peoples" antagonists as replacement for dropped demi-humans.

**Steps:** Standard chapter task steps.

---

### Task 16: G5 Treasure and Artifacts

**Output:** `chapters/g05-treasure-and-artifacts.md`

**Source feeders:** `notes/source-13-equipment.md` (Equipment with Sorcery section), `notes/source-1-sorcery.md` (Wizard's Staff alternatives - Brazier of Power lineage)

**Locked decisions to apply:** Borrowing principle (BRP UGE artifact rules canonised cleanly)

**Section outline:**
1. Mundane treasure (coin, gems, art objects, exotic goods)
2. Artifact creation (permanent POW cost, PP reservoir, recharge mechanic)
3. Sample artifacts (5-10 named pre-cataclysm relics with adventure hooks)
4. Cursed items
5. The economics of fame (Reputation interaction with treasure value)

**Estimated pages:** 8-12

**Open chapter-time decisions:** Sample artifact list size and identity.

**Steps:** Standard chapter task steps.

---

### Task 17: G6 Hazards and Spot Rules

**Output:** `chapters/g06-hazards-and-spot-rules.md`

**Source feeders:** `notes/source-10-spot-rules.md`

**Locked decisions to apply:** Theatre-of-mind / no grid (chase rules use narrative range track)

**Section outline:**
1. Disease (the Illness Severity Table)
2. Poison (compact list of ancient-world poisons)
3. Fire and heat
4. Cold and exposure
5. Hunger, thirst, fatigue
6. Falling and drowning
7. Chases (narrative range track, no metres)
8. Mass Combat abstraction (Luck-roll-per-turn)

**Estimated pages:** 10-14

**Open chapter-time decisions:** None major.

**Steps:** Standard chapter task steps.

---

### Task 18: G7 The Deep Past

**Output:** `chapters/g07-the-deep-past.md`

**Source feeders:** `design.md` §1.2 #4 (deep cyclic history), §2.4 (the world)

**Locked decisions to apply:** All world-building decisions in design.md

**Section outline:**
1. The cyclic history principle (genre frame as a GM tool)
2. Tools for designing fallen empires (1-page generator: who they were, what they did, what destroyed them, what's left)
3. Tools for designing cataclysms (1-page generator)
4. Tools for designing ruins (encounter / loot / dread)
5. The role of pre-cataclysm tech and sorcery in modern adventures (the SF-permitted thread from design.md §1.2 #10)

**Estimated pages:** 8-12

**Open chapter-time decisions:** None major (G8 sample fragments was dropped; this chapter provides tools, not examples).

**Steps:** Standard chapter task steps.

---

### Task 19: GA1 GM Examples

**Output:** `chapters/ga1-gm-examples.md`

**Source feeders:** N/A - new content

**Locked decisions to apply:** All GM Book decisions (this is the GM Book demonstration chapter)

**Section outline:**
1. Designing a session
2. Designing an NPC sorcerer step-by-step
3. Running a chase scene at the table
4. Adjudicating sorcery costs in play

**Estimated pages:** 4-8

**Open chapter-time decisions:** None major.

**Steps:** Standard chapter task steps.

---

## Closeout

### Task 20: Cross-reference pass

**Goal:** Verify every cross-reference between chapters is valid (target chapter exists, target section exists). Fix any broken references.

- [ ] **Step 1:** Grep all chapters for the cross-reference patterns. `grep -nE "(See|Per|See also) [PG][A-Z0-9]+" chapters/*.md`
- [ ] **Step 2:** For each match, verify the target chapter file exists and the target section exists in that file.
- [ ] **Step 3:** Fix broken references (correct target or rephrase to remove the dependency).
- [ ] **Step 4:** Commit fixes (or empty commit noting "all cross-refs valid"). `git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue commit --allow-empty -m "phase2: cross-reference pass complete"`

---

### Task 21: Book assembly (Player Book + GM Book)

**Goal:** Produce single-file Markdown documents for the Player Book and GM Book by concatenating chapter files in book reading order.

**Note:** Book reading order DIFFERS from extraction order. Reading order = P1 first (introduction), then P2-P7, then PA1-PA2 (appendices). GM Book reading order = G1 first, G2-G7, then GA1.

- [ ] **Step 1:** Replace `book-player.md` placeholder with: short table of contents + concatenation of P1, P2, P3, P4, P5, P6, P7, PA1, PA2 in that order. Include a horizontal rule between chapters.
- [ ] **Step 2:** Replace `book-gm.md` placeholder with: short table of contents + concatenation of G1, G2, G3, G4, G5, G6, G7, GA1 in that order.
- [ ] **Step 3:** Commit. `git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue add book-player.md book-gm.md && git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue commit -m "phase2: book assembly"`

---

### Task 22: Phase 2 closeout

**Goal:** Mark Phase 2 done. Archive this plan. Prep PLAN.md for Phase 3 (PDF production / styling) if any.

- [ ] **Step 1:** Verify all 17 chapter rows in `progress.md`'s "Phase 2: Chapter Extraction" table are marked `[x]`. Fix any that were missed during chapter commits.
- [ ] **Step 2:** Add a Done log entry: `- **YYYY-MM-DD:** **Phase 2 complete.** All 17 chapter Markdown drafts complete. Player Book and GM Book assembled. Ready for Phase 3 (PDF production / styling).`
- [ ] **Step 3:** Archive this plan. `mkdir -p /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue/plans && cp /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue/PLAN.md /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue/plans/YYYY-MM-DD-phase-2-chapter-drafting.md` (substitute the actual closeout date).
- [ ] **Step 4:** Replace `PLAN.md` with a Phase 2 summary + Phase 3 stub (mirror the Phase 1 closeout pattern).
- [ ] **Step 5:** Commit. `git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue add progress.md PLAN.md plans/ && git -C /Users/kenmclennan/workspace/projects/warrior-sorcerer-rogue commit -m "phase2: closeout"`

---

## Self-review checklist

Run before declaring the plan ready for execution.

1. **Spec coverage.** All 17 chapters from `notes/chapter-mapping.md` have a task. ✓
2. **Placeholder scan.** No "TBD," no "fill in details." Per-chapter tasks reference `notes/chapter-mapping.md` for content detail (which is fully specified there).
3. **Filename consistency.** `chapters/<C>-<kebab-name>.md` pattern used consistently. Commit prefix `phase2:` consistent.
4. **Decision-citation coverage.** Every chapter task lists the relevant locked decisions to apply.
5. **Sequence correctness.** Tasks ordered to match the extraction sequence in `progress.md`'s table.
6. **Reading-order correctness.** Task 21 uses book reading order (P1-first), not extraction order (P4-first).
