# Chapter Sources and Decisions

Per-chapter audit trail: which source notes fed each chapter and which locked decisions each chapter implements. This is documentation metadata, not rules content - it lives here so the chapter files in `chapters/` stay clean for publishing.

Maintained as chapters change. When a chapter is edited in a way that touches a new source note or applies a new locked decision, update the relevant section here.

---

## Player Book

### P1 Introduction

**Source notes cited:**

- `design.md` §1, §2.1, §3.1, §3.2, §4
- `decisions.md` (Borrowing principle; ORC basis; system name)
- `notes/chapter-mapping.md` (P1 entry)

**Locked decisions applied:**

- 2026-05-09 - System name: Warrior \* Sorcerer \* Rogue
- 2026-05-09 - Source rules: BRP UGE under ORC License
- 2026-05-10 - Borrowing principle: mechanisms only from non-ORC sources
- 2026-05-10 - Chapter extraction order finalised (chapter codes table)
- 2026-05-10 - Combat resolution: matching-dice criticals + PP-buy (referenced in §2)
- 2026-05-09 - Fate Points share the Power Point pool (referenced in §2 and §4)
- 2026-05-10 - Fate Point spend menu finalised (referenced in §4)

---

### P2 Character Creation

**Source notes cited:**

- `notes/source-2-characters.md`
- `notes/source-4-passions-reputation.md`
- `notes/source-9-allegiance.md`
- `notes/source-12-sanity.md`
- `notes/pulp-cthulhu.md`

**Locked decisions applied:**

- 2026-05-10 - Talent system: borrow Pulp Cthulhu structure (4 tables, choose 2 at chargen, gate PP spends)
- 2026-05-10 - Status / Reputation kept separate (Status = skill in P3; Reputation = mechanic here in P2 §8)
- 2026-05-10 - Currency: Shard / Dram / Stater / Sun
- 2026-05-09 - Allegiance canonised as optional Patron Score for sorcerers
- 2026-05-09 - Sanity adopted as sorcerer-specific Corruption track (starting Corruption = POW x5, default 0 spent)
- 2026-05-10 - Borrowing principle: mechanisms only from non-ORC sources (Pulp Cthulhu talent structure, not text)
- 2026-05-09 - Design doc v1: Heroic power level as WSR default; exceptional but mortal heroes; ancient-world setting

---

### P3 Skills

**Source notes cited:**

- `notes/source-6-skills.md`
- `notes/special-success-audit.md`
- `notes/source-4-passions-reputation.md`

**Locked decisions applied:**

- 2026-05-10 - Combat resolution: five non-combat skills carry explicit Critical: lines (First Aid, Medicine, Teach, Cooperative Rolls, Jump)

---

### P4 Action Resolution

**Source notes cited:**

- `notes/source-11-system.md`
- `notes/special-success-audit.md`
- `notes/delta-green.md`
- `notes/source-gaps-batch1.md`
- `notes/pulp-cthulhu.md`

**Locked decisions applied:**

- 2026-05-10 - Combat resolution: matching-dice criticals + matching-dice fumbles + PP-buy mechanic
- 2026-05-09 - Fate Points share the Power Point pool

---

### P5 Combat

**Source notes cited:**

- `notes/source-5-combat.md`
- `notes/source-10-spot-rules.md`
- `notes/pulp-cthulhu.md`
- `notes/rolemaster-arms-law.md`

**Locked decisions applied:**

- 2026-05-10 - Combat resolution: matching-dice criticals + weapon-type tables + PP-buy + matching-dice fumbles
- 2026-05-09 - Combat: Major Wounds as default, no per-location HP
- 2026-05-10 - Mook rule: borrow Pulp Cthulhu mechanism (WSR-original prose)
- 2026-05-10 - Fate Point spend menu finalised

---

### P6 Sorcery

**Source notes cited:**

- `notes/source-1-sorcery.md`
- `notes/source-9-allegiance.md`
- `notes/source-12-sanity.md`
- `notes/runequest-weapons-equipment.md`
- `notes/source-13-equipment.md`

**Locked decisions applied:**

- 2026-05-09 - Magic (secondary system) dropped entirely
- 2026-05-09 - Allegiance canonised as optional Patron Score for sorcerers
- 2026-05-09 - Sanity adopted as sorcerer-specific Corruption track
- 2026-05-09 - Fate Points share the Power Point pool
- 2026-05-10 - Iron-vs-sorcery rule: -5% sorcery skill per ENC of unenchanted iron carried
- 2026-05-10 - Healing magic revision: rare and costly, not absent
- 2026-05-10 - Borrowing principle: mechanisms only from non-ORC sources
- 2026-05-10 - Fate Point spend menu finalised

---

### P7 Equipment

**Source notes cited:**

- `notes/source-13-equipment.md`
- `notes/runequest-weapons-equipment.md`

**Locked decisions applied:**

- 2026-05-10 - Equipment chapter: borrow extensively from RuneQuest W&E (mechanism only; WSR-original tables)
- 2026-05-10 - Iron-vs-sorcery rule: -5% sorcery skill per ENC of unenchanted iron carried
- 2026-05-09 - Combat: Major Wounds as default, no per-location HP (single AP value per armour item)

---

### PA1 Critical Hit Tables

**Source notes cited:**

- `notes/rolemaster-arms-law.md` (format inspiration - WSR-original prose throughout)

**Locked decisions applied:**

- 2026-05-10 - Combat resolution: matching-dice criticals; severity band determined by matching-dice value
- 2026-05-10 - Borrowing principle: Rolemaster is inspire only; all prose WSR-original
- 2026-05-09 - Major Wounds as default; no per-location HP (results push toward Major Wound threshold, not per-location damage)
- 2026-05-10 - Fate Point spend menu (Deflect the Killing Blow interaction with Band E results)

**Chapter-time decisions made:**

- **3 damage types (Slash, Pierce, Krush).** Burn and Grapple deferred to supplementary tables; interim rules provided.
- **Band assignment:** 11 = A, 22 = B, 33 = C, 44/55 = D, 66/77/88 = E. Maps directly to matching-dice values from P4.
- **Within-band result selection:** 1d10, selecting from 10 numbered entries per band.
- **Penalty vocabulary:** Attacks/parries Difficult = halved skill. Round counts start from the round the result is applied. All vocabulary defined in §1.4.

---

### PA2 Examples

**Source notes cited:**

- `notes/source-5-combat.md` (the Yvarre/Kallistor example as template)
- `chapters/p02-character-creation.md`
- `chapters/p03-skills.md`
- `chapters/p04-action-resolution.md`
- `chapters/p05-combat.md`
- `chapters/p06-sorcery.md`
- `chapters/p07-equipment.md`
- `chapters/pa1-critical-hit-tables.md`

**Locked decisions applied:**

- 2026-05-10 - Combat resolution: matching-dice criticals + PP-buy mechanic (§2, §3)
- 2026-05-10 - Fate Point spend menu finalised (§2.5)
- 2026-05-10 - Mook rule: borrow Pulp Cthulhu mechanism (§2.2, §2.5)
- 2026-05-10 - Talent system: borrow Pulp Cthulhu structure (§1.6, §2.2)
- 2026-05-10 - Phase 2 batch 2 decisions: critical severity band mapping 11=A, 22=B, 33=C, 44/55=D, 66/77/88=E (§2.2)
- 2026-05-09 - Sanity adopted as sorcerer-specific Corruption track (§3)
- 2026-05-09 - Allegiance canonised as optional Patron Score for sorcerers (§3.6)
- 2026-05-09 - Fate Points share the Power Point pool (§2.4, §3.8)
- 2026-05-10 - Iron-vs-sorcery rule (§3.2)
- 2026-05-10 - Currency names: Shard / Dram / Stater / Sun (§1.10)
- 2026-05-10 - Status and Reputation kept separate (§1.8)

---

### PA3 Inspirational Influences

**Source notes cited:** None recorded; the chapter is a user-supplied list with light annotations.
**Locked decisions applied:** None directly.

---

## GM Book

### G1 Running the Game

**Source notes cited:**

- `notes/source-3-gamemastering.md`
- `design.md` §1, §2, §4

**Locked decisions applied:**

- design.md §3.1 - Theatre-of-mind combat (no grid), lean GM-facing rules
- design.md §4.1 - Hook / complications / reckoning session structure
- design.md §4.5 - Episodic campaign model
- design.md §4.3 - Party size (1-6, sweet spot 2-4)
- 2026-05-09 - Fate Points share the Power Point pool
- 2026-05-10 - Mook rule: borrow Pulp Cthulhu mechanism (WSR-original prose)
- 2026-05-10 - Combat resolution: matching-dice criticals + PP-buy mechanic

---

### G2 NPCs and Adversaries

**Source notes cited:**

- `notes/source-3-gamemastering.md`
- `notes/source-14-npc-digest-customizing.md`
- `notes/pulp-cthulhu.md`

**Locked decisions applied:**

- 2026-05-10 - Mook rule: borrow Pulp Cthulhu mechanism (WSR-original prose); incapacitated at half HP, no Fate Point access
- 2026-05-10 - Borrowing principle: mechanisms only from non-ORC sources (Look Out Master! mechanic, WSR-original text)
- 2026-05-10 - Fate Point spend menu finalised (Deflect the Killing Blow minimum 8 PP; applies to Look Out Master! cost floor)
- 2026-05-10 - Combat resolution: matching-dice criticals (referenced in §2.2 critical interaction)
- 2026-05-09 - Fate Points share the Power Point pool (named antagonists have PP = Fate Points = sorcery resource)
- 2026-05-09 - Allegiance canonised as optional Patron Score for sorcerers (applied in Nashtira stat block)

---

### G3 Bestiary

**Source notes cited:**

- `notes/source-7-creatures.md`
- `chapters/p05-combat.md` (stat block format and wound threshold conventions)
- `chapters/p06-sorcery.md` (demon and elemental references)

**Locked decisions applied:**

- 2026-05-09 - Combat: Major Wounds as default, no per-location HP (single HP threshold, single AV for all creatures)
- 2026-05-09 - Fate Points share the Power Point pool (demons have PP; creatures do not have Fate Point access)
- 2026-05-10 - Mook rule: borrow Pulp Cthulhu mechanism (skeletons and zombies designated mooks; morale notes for other creatures follow same principle)
- 2026-05-10 - Borrowing principle: mechanisms only from non-ORC sources (all descriptions WSR-original; BRP stat blocks adapted)

**Chapter-time decisions:**

- **Demi-humans excluded.** Elf, Dwarf, Halfling, and Angel are all absent per the locked design. No Unicorn.
- **Orc/Goblinkin omitted.** The source-7 notes recommend canonising "Goblinkin" as human-adjacent predatory antagonists, but the chapter-mapping flagged this as a naming open question ("what is the WSR editorial direction?"). Rather than commit to a name that should be resolved in G7 worldbuilding, this chapter omits an explicit Goblinkin entry. The GM has the stat block concept (human-level opposition, group dynamics, possible sorcerer-priest subtype) from the G2 NPCs framework; the specific name and cultural framing belong to the world-building layer.
- **Wight added in place of generic undead.** The source-7 undead list included seven entries but listed Ghost/Ghoul/Mummy/Skeleton/Vampire/Zombie/Werewolf. Werewolf moved to Fantasy Beasts (it is a transformation, not straightforwardly undead). A Wight was added as the seventh undead entry, filling the barrow-guardian niche and providing an intelligent undead type that isn't the vampire.
- **Werewolf in Fantasy Beasts.** The werewolf is a transformed human, not undead. Placed with Fantasy Beasts accordingly.
- **Chaotic Features table as 1D20 (20 entries).** The source has 38+ entries with roughly a third being raw stat bonuses. Per the source-7 open question, this table weights toward qualitative/narrative features and drops the pure stat-increment entries (POW+1D6, DEX+2D6, etc.) in favour of dramatic, descriptive features that make demons feel distinct without just inflating numbers.
- **Yog-Hath entry.** The chapter-mapping required one fully-fleshed named Greater Demon as a template. Yog-Hath the Devourer was created as a WSR-original entity with a POW-drain agenda, calibrated to be a campaign-level threat requiring preparation to face.
- **Vampire holy symbol weakness.** Per source-7 open question (c): stated as a weakness the GM populates once the Allegiance/faith system is finalised in context. Not mechanically specified here.

---

### G4 NPC Sorcery and Patrons

**Source notes cited:**

- `notes/source-1-sorcery.md`
- `notes/source-9-allegiance.md`

**Locked decisions applied:**

- 2026-05-09 - Allegiance canonised as optional Patron Score for sorcerers
- 2026-05-09 - Sanity adopted as sorcerer-specific Corruption track
- 2026-05-09 - Magic (secondary system) dropped entirely
- 2026-05-09 - Fate Points share the Power Point pool
- 2026-05-10 - Borrowing principle: mechanisms only from non-ORC sources

---

### G5 Treasure and Artifacts

**Source notes cited:**

- `notes/source-13-equipment.md` (Equipment with Sorcery, pp. 188-189)
- `notes/source-1-sorcery.md` (Brazier of Power lineage, artifact interaction with PP system)
- `chapters/p07-equipment.md` §12 (Artifact Basics cross-reference)
- `chapters/p06-sorcery.md` §3 (Cost trio: PP / Patron Score / Corruption)
- `chapters/p02-character-creation.md` §8 (Reputation mechanic)

**Locked decisions applied:**

- 2026-05-10 - Currency names: Shard / Dram / Stater / Sun (per P7 §1)
- 2026-05-10 - Iron-vs-sorcery rule: -5% per ENC of unenchanted iron carried by sorcerers; enchanted iron (artifacts) exempt
- 2026-05-10 - Borrowing principle: artifact creation rules are WSR-original from BRP UGE Equipment with Sorcery (ORC-licensed source); sample artifacts and cursed items are WSR-original prose

---

### G6 Hazards and Spot Rules

**Source notes cited:**

- `notes/source-10-spot-rules.md`

**Locked decisions applied:**

- 2026-05-09 - Design doc: theatre-of-mind, no grid (§3.2)
- 2026-05-10 - Borrowing principle: mechanisms only from non-ORC sources

---

### G7 The Deep Past

**Source notes cited:**

- `design.md` §1.2 #4 (deep cyclic history), §1.2 #10 (science fiction permitted), §2.4 (the world), §3.2 (no defined setting)

**Locked decisions applied:**

- 2026-05-10 - G8 (Sample Material) dropped; G7 carries the world-building generator load
- design.md §3.2 - No defined setting: all entries are generator tools, not setting fragments

---

### GA1 GM Examples

**Source notes cited:**

- `chapters/g01-running-the-game.md`
- `chapters/g02-npcs-and-adversaries.md`
- `chapters/g04-npc-sorcery-and-patrons.md`
- `chapters/g06-hazards-and-spot-rules.md`
- `chapters/g07-the-deep-past.md`
- `chapters/pa2-examples.md`

**Locked decisions applied:**

- design.md §3.1 - Examples in dedicated appendix, never interleaved with rules text
- design.md §4.1 - Hook / complications / reckoning session structure (§1)
- design.md §2.2 - Magic is theatrical; casting signatures mandatory (§2.6, §4.1, §4.3)
- 2026-05-10 - Combat resolution: matching-dice criticals (§3.2)
- 2026-05-10 - Mook rule: borrow Pulp Cthulhu mechanism (§3.1)
- 2026-05-09 - Allegiance canonised as optional Patron Score for sorcerers (§2.4, §4.3)
- 2026-05-09 - Sanity adopted as sorcerer-specific Corruption track (§2.2, §4.2)
- 2026-05-09 - Fate Points share the Power Point pool (§4.1, §4.4)
- 2026-05-10 - Iron-vs-sorcery rule: -5% per ENC of unenchanted iron (§4.1)
- 2026-05-10 - Phase 2 batch 2: critical severity band mapping 11=A, 22=B, 33=C, 44/55=D, 66/77/88=E (§3.2)
