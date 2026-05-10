# WSR Chapter Mapping

The chapter list for *Warrior \* Sorcerer \* Rogue*, split into Player Book and GM Book, each chapter mapped to its source feeders and major decisions. Generated as Task 3 of the Phase 1 plan after all source notes are in and the load-bearing decisions are locked.

## Conventions

- Each chapter publishes as a separate PDF in `chapters/`.
- Examples live in dedicated appendices, not interleaved with rules text (per `decisions.md` borrowing principle and `design.md` §3.1).
- Page estimates are deliberately rough - tighter ranges happen during chapter drafting.
- Source feeders cite `notes/source-*.md` files plus the four external research notes (`notes/pulp-cthulhu.md`, `notes/delta-green.md`, `notes/runequest-weapons-equipment.md`, `notes/rolemaster-arms-law.md`).

---

# Player Book (9 chapters)

## P1. Introduction

**Purpose:** Genre primer + how to read this book + the basic premise.

**Source feeders:** `design.md` §1, §2.1 (genre / tone summary).

**Key content:** What sword & sorcery is for our purposes; what makes WSR distinct from other fantasy RPGs; conventions used in the book; a one-page "how to play" primer.

**Estimated pages:** 4-6

**Open decisions:** None.

---

## P2. Character Creation

**Purpose:** Step-by-step character creation.

**Source feeders:** `notes/source-2-characters.md`, `notes/source-4-passions-reputation.md`, `notes/source-9-allegiance.md`, `notes/source-12-sanity.md`, `notes/pulp-cthulhu.md`.

**Key content:**
- Characteristics (BRP UGE rolling methods + Heroic-level point allocation)
- Backgrounds / cultures (WSR-original ancient-world set: Mediterranean, Levantine, Mesopotamian, Persian, Steppe)
- Professions (BRP UGE keepers + WSR additions; estimated 12-15 professions including Scholar of the Dark Arts for sorcerers, Tribal Warrior, Sea-Raider, City Thief, etc.)
- Talents (2 chosen at chargen from 4 themed tables; talent table eligibility constrained by profession)
- Passions (mandatory: 1 at 80%, 2 at 60%; player-authored)
- Reputation (starting score by profession)
- For sorcerer-archetype PCs only:
  - Patron compact (optional)
  - Starting Corruption (default 0)
- Starting equipment

**Estimated pages:** 12-16

**Open decisions:** Final profession list; talent table contents; starting Reputation values per profession.

---

## P3. Skills

**Purpose:** Full skill reference.

**Source feeders:** `notes/source-6-skills.md`, `notes/special-success-audit.md`.

**Key content:**
- Skill list (~44 skills, ancient-world-relevant subset of BRP UGE)
- Specialty mechanics (Melee Weapon, Knowledge, Craft, etc.)
- Complementary Skill / Augment cooperative rules
- Cross-reference to P4 (Action Resolution) for the percentile mechanic
- "Critical:" rulings for the five carry-over special-success skills (First Aid, Medicine, Teach, Cooperative Rolls, Jump)

**Estimated pages:** 10-14

**Open decisions:** Whether to merge Status (a skill) and Reputation (a separate mechanic) into one social-standing system.

---

## P4. Action Resolution

**Purpose:** The core mechanic.

**Source feeders:** `notes/source-11-system.md`, `notes/special-success-audit.md`, `notes/delta-green.md`, `notes/source-gaps-batch1.md` (Fate Points), `notes/pulp-cthulhu.md` (Fate Point spend menu inspiration).

**Key content:**
- Percentile rolls (skill vs target)
- Outcome tiers under the locked combat-resolution decision: Critical (matching dice ≤ skill), Success, Failure, Fumble (00 or matching dice > skill)
- PP-buy mechanic for criticals (`current_roll - nearest_lower_double`)
- Resistance Table (POW vs POW, PP vs PP, etc.)
- Time, rounds, turns
- Power Points (definition, regeneration, what spends them - sorcery, Fate Points, talents, crit-buy)
- Fate Point spend menu (WSR-original, inspired by Pulp Cthulhu's spend list - reroll, deflect a hit, ignore a fumble, avoid unconsciousness, etc.)
- Experience and improvement (use-based with 75% training cap)

**Estimated pages:** 8-12

**Open decisions:** Exact Fate Point spend menu (cost per option, what's in vs out).

---

## P5. Combat

**Purpose:** Combat-specific rules.

**Source feeders:** `notes/source-5-combat.md`, `notes/source-10-spot-rules.md` (Desperate Action, combat-adjacent), `notes/pulp-cthulhu.md` (mook rule), `notes/rolemaster-arms-law.md` (crit table reading).

**Key content:**
- Combat round structure (Strike Ranks, Initiative)
- Attack and Defense (weapon vs parry vs dodge)
- Major Wounds (single threshold, no per-location HP per locked decision)
- Mook handling (Pulp Cthulhu mechanism: incapacitated at half HP; "Look Out Master!" goes in GM Book)
- Dying Blows (folding in Desperate Action)
- Knockout, Subdual, Disengage, Surprise
- How to read the crit tables (in PA1 appendix)
- Reference forward to PA1 for the actual tables

**Estimated pages:** 14-18

**Open decisions:** None major - everything locked.

---

## P6. Sorcery (Player-facing)

**Purpose:** PC sorcerer's view of magic.

**Source feeders:** `notes/source-1-sorcery.md`, `notes/source-9-allegiance.md` (Patron Score), `notes/source-12-sanity.md` (Corruption), `notes/runequest-weapons-equipment.md` (iron-vs-sorcery), `notes/source-13-equipment.md` (grimoire formats).

**Key content:**
- Becoming a sorcerer (chargen requirements: POW threshold, profession, learning method)
- Casting (PP cost, automatic success, time, components)
- The cost trio:
  - PP (immediate, shared with Fate Points and crit-buy)
  - Patron Score (optional - if you take a patron, this gives you the PP-reserve and Patron Intercession with relational obligations)
  - Corruption (sorcerer-only, accumulates with casting and exposure)
- Iron disrupts sorcery (-5% per ENC of unenchanted iron)
- Grimoires (formats - books, scrolls, tablets, hides, knotted ropes; learning new spells; scribing)
- Spell list (alphabetical, with WSR-original tone-rich descriptions)
- Demon summoning basics (bargaining, binding, releasing - GM Book has the deep dive on individual demons and ritual mechanics)

**Estimated pages:** 16-22 (spell list will be the bulk)

**Open decisions:** Final spell list (WSR-edited from BRP UGE's ~32 candidate Sorcery spells); demon-bargaining mechanic detail (cleanup of BRP UGE's brief treatment).

---

## P7. Equipment

**Purpose:** Gear reference.

**Source feeders:** `notes/source-13-equipment.md`, `notes/runequest-weapons-equipment.md`.

**Key content:**
- Currency (WSR-original 4-tier coin system, ancient-world-flavored names)
- Weapons (BRP UGE keepers + RuneQuest additions: ~60 weapons; ancient-world only)
- Armour (BRP UGE keepers + RuneQuest additions: ~15-18 types; converted to single-AP per Major Wounds)
- Shields
- Material tiers (copper / bronze / iron quality and damage variations)
- Mundane gear (rope, torches, rations, tools, containers, etc. - 9 categories from RuneQuest structure)
- Mounts (horses, mules, camels, war-elephants, etc.)
- Vehicles (carts, wagons, chariots)
- Watercraft (rowboats, riverboats, sailing ships)
- Hirelings, inn prices
- Encumbrance (basic ENC system, ENC-as-load measure for the iron-vs-sorcery rule)
- Equipment with sorcery (artifact basics; full creation rules in GM Book)

**Estimated pages:** 12-16

**Open decisions:** Currency names; specific weapon stat balancing; encumbrance system simplification (full BRP ENC vs lighter version).

---

## PA1. Appendix: Critical Hit Tables

**Purpose:** The crit lookup tables.

**Source feeders:** `notes/rolemaster-arms-law.md` (format inspiration only - WSR-original prose).

**Key content:**
- Reading the tables (band assignment based on roll-within-success-range)
- Slash table (A-E severity bands, ~10 results per band)
- Pierce table (A-E)
- Krush table (A-E)
- (Possibly) Burn table (A-E)
- (Possibly) Grapple table (A-E)
- Each entry is one or two prose sentences: wound description + bonus damage + condition flag

**Estimated pages:** 10-15 (table-heavy)

**Open decisions:** Final damage type list (3 vs 5 tables); content sizing (~150-250 prose entries to author).

---

## PA3. Appendix: Inspirational Influences

**Purpose:** The "Appendix N" of WSR - films, books, comics, music, and art that informed the genre and the system. For both players and GMs.

**Source feeders:** User-supplied list (2026-05-10), with light WSR-relevant annotations.

**Key content:**

- Films (Harryhausen-era stop-motion, the 1980s sword-and-sorcery cycle, John Carter)
- Books (Howard's Conan stories, Moorcock's Elric, Leiber's Fafhrd & Grey Mouser, Gemmell, Shea, Burroughs, Dickinson, Fox)
- Comics (Head Lopper)
- Music (Hawkwind's Black Sword, Poledouris's Conan score, Horner's Krull score)
- Art (Frazetta, Brom)

**Estimated pages:** 2-3.

**Open decisions:** None.

---

## PA2. Appendix: Examples

**Purpose:** Worked examples for the rules in earlier chapters.

**Source feeders:** `notes/source-5-combat.md` (the Yvarre/Kallistor example as a template).

**Key content:**
- Chargen example (full PC walkthrough end-to-end)
- Combat example (multi-round combat showing crits, mooks, sorcery, PP-buy)
- Sorcery example (a sorcerer casting at cost - PP + Corruption + Patron implications)
- Optional: a short scenario walkthrough

**Estimated pages:** 6-10

**Open decisions:** Whether to include a scenario walkthrough.

---

# GM Book (9 chapters)

## G1. Running the Game

**Purpose:** GM principles, session structure, genre advice.

**Source feeders:** `notes/source-3-gamemastering.md`, `design.md` §1, §2, §4.

**Key content:**
- Genre primer (deeper than P1's intro - the literary touchstones, the doom, the cyclic history)
- Session structure (hook / complications / reckoning per `design.md` §4.1)
- GM principles (be lethal but fair, telegraph dread, reward cleverness, never save the village for free)
- Connecting characters at session zero (Passions-based per `notes/source-3-gamemastering.md`)
- Theatre-of-mind combat (no VTT - guidance for GMs)
- Pacing
- The lightweight-vs-tactical tension (how to read the table)

**Estimated pages:** 10-14

**Open decisions:** None major.

---

## G2. NPCs and Adversaries

**Purpose:** NPC creation, mooks, professional foes, named antagonists.

**Source feeders:** `notes/source-3-gamemastering.md`, `notes/source-14-npc-digest-customizing.md`, `notes/pulp-cthulhu.md` (three-tier NPC model + Look Out Master).

**Key content:**
- Three-tier NPC model: mook / professional / named antagonist
- Mook stat block format and the half-HP rule (mechanic detail; Player Book P5 has the player view)
- "Look Out Master!" - villain spends PP to redirect a hit, killing a mook
- Building professional NPCs (mid-grade with limited PP / no Patron / no Corruption)
- Building named antagonists (full PC-grade NPCs)
- Sample stat blocks for each tier (city guard mook, mercenary captain professional, sorcerer-villain named antagonist - WSR-original entries based on BRP NPC Digest calibration)

**Estimated pages:** 8-12

**Open decisions:** None major.

---

## G3. Bestiary

**Purpose:** Creatures and supernatural antagonists.

**Source feeders:** `notes/source-7-creatures.md`.

**Key content:**
- Creature entry format
- Mortal beasts (lion, snake, wolf, bear, prehistoric megafauna)
- Undead (Skeleton, Zombie, Mummy with sorcerer variant, Ghoul, Vampire, Ghost)
- Fantasy beasts (Dragon, Giant, Minotaur, Werewolf, Troll, Centaur reframed, Griffin reframed)
- Demons (Lesser, Greater - tied to Sorcery; Greater Demons are named entities, not random encounters)
- Elementals reframed as "alien intelligences that do not sufficiently value your continued existence"
- Chaotic Features table (for unique demons / mutated creatures - retained for Moorcock-tone gold)

**Estimated pages:** 14-18

**Open decisions:** Final creature list (which BRP keepers vs which to drop); whether to include any "ancient peoples" antagonists as a replacement for the dropped demi-humans.

---

## G4. NPC Sorcery and Patrons

**Purpose:** Deeper sorcery for GM use.

**Source feeders:** `notes/source-1-sorcery.md`, `notes/source-9-allegiance.md`.

**Key content:**
- Designing an NPC sorcerer (POW thresholds, spell loadouts, cost-architecture choices)
- Sample NPC sorcerers (cult leader, court mage, hermit, witch-queen)
- Patron design (creating a named patron with agendas, demands, gifts, dooms)
- Sample patrons (5-7 worked examples - a serpent-god, a chaos-lord, a dead emperor still hungering, etc.)
- Ritual magic (extended workings - days/weeks of preparation, party-pooled PP via Chain of Being)
- Demon binding deep-dive (long-term demon servitors, contracts, escape conditions)
- The Brazier of Power (sorcerer's lair as PP reservoir)
- Apotheosis (the optional Moorcock-tone end-state for high-Patron-Score sorcerers - reframed as tragedy)

**Estimated pages:** 12-16

**Open decisions:** Number and identity of sample patrons; how detailed the apotheosis arc should be.

---

## G5. Treasure and Artifacts

**Purpose:** Loot, artifacts, magical items.

**Source feeders:** `notes/source-13-equipment.md` (Equipment with Sorcery section), `notes/source-1-sorcery.md` (Wizard's Staff alternatives - Brazier of Power lineage).

**Key content:**
- Mundane treasure (coin, gems, art objects, exotic goods)
- Artifact creation (permanent POW cost, PP reservoir, recharge mechanic - WSR-original from BRP UGE Equipment with Sorcery)
- Sample artifacts (5-10 named pre-cataclysm relics with adventure hooks)
- Cursed items
- The economics of fame (how Reputation interacts with treasure value)

**Estimated pages:** 8-12

**Open decisions:** Sample artifact list size and identity.

---

## G6. Hazards and Spot Rules

**Purpose:** Environmental and edge-case rules.

**Source feeders:** `notes/source-10-spot-rules.md`.

**Key content:**
- Disease (the genre-perfect Illness Severity table)
- Poison (compact list of ancient-world poisons)
- Fire and heat
- Cold and exposure
- Hunger, thirst, fatigue
- Falling and drowning
- Chases (narrative range track, no metres per locked theatre-of-mind constraint)
- Mass combat abstraction (Luck-roll-per-turn for PCs caught in larger battles)

**Estimated pages:** 10-14

**Open decisions:** None major.

---

## G7. The Deep Past

**Purpose:** Building the world's history, cataclysms, lost civilizations.

**Source feeders:** `design.md` §1.2 #4 (deep cyclic history), §2.4 (the world).

**Key content:**
- The cyclic history principle (the genre frame as a GM tool)
- Tools for designing fallen empires (a one-page generator: who they were, what they did, what destroyed them, what's left)
- Tools for designing cataclysms (a one-page generator)
- Tools for designing ruins (encounter / loot / dread)
- The role of pre-cataclysm tech and sorcery in modern adventures (the SF-permitted thread from `design.md` §1.2 #10)

**Estimated pages:** 8-12

**Open decisions:** Whether to include sample lost civilizations here vs in G8 (or both).

---

## GA1. Appendix: GM Examples

**Purpose:** Worked GM examples.

**Source feeders:** N/A - new content.

**Key content:**
- Designing a session
- Designing an NPC sorcerer step-by-step
- Running a chase scene at the table
- Adjudicating sorcery costs in play

**Estimated pages:** 4-8

**Open decisions:** None major.

---

# Summary

| Book | Chapters (incl. appendices) | Est. pages |
|------|----------------------------|------------|
| Player Book | 7 + 2 appendices = 9 | 92-129 |
| GM Book | 7 + 1 appendix = 8 | 74-122 |
| **Total** | **17** | **~166-251** |

Slightly over the "compact" target but defensible given the opinionated scope. Tightening happens during chapter drafting.

---

# Cross-cutting decisions still open

These don't block any single chapter but should be resolved before Phase 2 begins:

1. **Status (skill) and Reputation (mechanic) merge or keep separate?** (Affects P3 Skills and P2 Character Creation.)
2. **Crit table damage type count: 3 vs 5?** (Affects PA1 sizing.)
3. **Currency naming convention.** (Affects P7 Equipment.)
4. **Final profession list.** (Affects P2 Character Creation.)

These all become Phase 2 decisions during chapter drafting, but flagging for visibility.

---

# Future products / supplements (post-core release)

Not part of the Player Book or GM Book scope. Captured here so we don't lose them.

- **Sample adventures and setting fragments.** Originally proposed as G8 of the GM Book; dropped to keep the core books opinionated and setting-light (per `decisions.md`). Worth packaging separately after the core books ship: a sample port city, a sample cult, a sample lost ruin, a sample patron NPC, and a one-shot scenario. Format TBD - could be a single "Sample Adventures" supplement or several short standalone PDFs.
