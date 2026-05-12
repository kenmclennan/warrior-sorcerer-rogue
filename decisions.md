# Warrior \* Sorcerer \* Rogue - Decision Log

Append-only record of meaningful decisions. Newest at the top. Each entry follows:

- **Date**
- **Title** (what was decided)
- **Context** (the situation/question)
- **Decision** (what we chose)
- **Reasoning** (why - the part that matters most when revisiting later)

If a decision is later overturned, do not delete it. Add a new entry that supersedes it and link back.

---

## 2026-05-12 - P7 armour and shields: cull post-period entries; rename medieval-term entries; add Cataphract Suit and Pelta

**Context:** User reviewed P7 §3 (Armour) and §4 (Shields) for anachronisms after the weapons cull.

**Anachronisms found:**

Armour:

- Plate, Half and Plate, Full - late medieval / Renaissance European (~14-15th c.); no ancient precedent.
- Gambeson, Heavy - "Gambeson" is medieval European terminology.
- Leather, Cuirbouilli - _cuir bouilli_ is medieval French; the boiled-leather technique is ancient but the name isn't.

Shields:

- Kite Shield - distinctively Norman/medieval European (~11-13th c.); not an ancient form.
- Tower Shield - medieval term; ancient cousins exist but the name pulls modern.
- Primitive Shield - "Primitive" reads patronising (same issue as the old Primitive Missile Weapons heading).
- Target Shield - "Target" specifically refers to small medieval/early modern round shield.

**Decision:**

Armour:

- **REMOVE:** Plate, Half / Plate, Full. Plate armour didn't exist in antiquity. Greek/Roman muscle cuirasses (already covered by Breastplate, Bronze) gave torso plate; Persian cataphracts had heavy lamellar/scale full-coverage but not articulated plate.
- **RENAME:** Gambeson, Heavy -> **Linen Cuirass, Heavy** (the garment existed in antiquity as quilted linen protection; just rename).
- **RENAME:** Leather, Cuirbouilli -> **Leather, Boiled** (descriptive, period-neutral; technique is ancient).
- **ADD:** **Cataphract Suit** (AP 6, ENC 18, -20% skill mod). Heavy lamellar over scale; Persian/Sassanian elite cavalry. Fills the heavy-coverage niche that Plate, Half occupied.

Shields:

- **REMOVE:** Kite Shield.
- **RENAME:** Tower Shield -> **Pavise**; Primitive Shield -> **Hide Shield**; Target Shield -> **Round Shield**.
- **ADD:** **Pelta** (AP 4, HP 8, ENC 1, +5% parry, STR/DEX 5/9, Inexpensive). Light crescent shield used by Thracian and Greek skirmishers (peltasts). Fills the light-shield niche alongside Buckler with a more cultural-specific option.

**Files updated:**

- P7 §3.1 Layering prose: "leather, padded, gambeson" -> "leather, padded, linen cuirass".
- P7 §3.3 Armour Table: 4 changes (2 removes, 2 renames, 1 add).
- P7 §3.3 prose: "Full and Half Plate" note replaced with **Cataphract Suit** note.
- P7 §4.1 Shield Table: 5 changes (1 remove, 3 renames, 1 add).

**Reasoning:**

- Sword & sorcery is Bronze Age / Iron Age in flavour. Plate armour pulls straight to medieval / Renaissance European warfare, breaking the genre's tonal anchoring.
- Renames preserve the gear that actually existed in antiquity but uses period-appropriate names. Quilted linen armour existed widely (Egyptian, Persian, Indian, Greek); the term "gambeson" doesn't.
- Cataphract Suit is the genuine ancient equivalent of "knight in heavy armour" - the Persian Immortals and Sassanian cataphracts were the heavy cavalry of antiquity. It's a single entry covering the role that "half plate" was trying to fill.
- Pelta is a small genre-flavourful add - useful for Thracian-style skirmishers and the Horse Folk archetype.

**Implications:**

- Armour table net: -2 removed, +1 added = 15 entries (was 16).
- Shield table net: -1 removed, +1 added = 7 entries (was 7, but with cleaner names and one new option).
- No bestiary, profession bundle, or talent prerequisite uses any of the removed/renamed items.
- The "Full and Half Plate" prose paragraph replaced with Cataphract Suit description in §3.3.

---

## 2026-05-12 - P7 missile weapons: merge Primitive/Historic subsections into one table

**Context:** User reviewing P7 §2.3 flagged that the "Primitive Missile Weapons" / "Historic Missile Weapons" subsection split was an odd distinction. After the crossbow drop, the "Historic" subsection had only three entries (Bow Composite, Bow Long, Throwing Knife), making the split feel arbitrary.

**Decision:** Merge the two subsections into a single Missile Weapons table sorted alphabetically by weapon name. Consolidate the prose notes after the merged table.

**Reasoning:**

- "Primitive" reads as patronising - the listed weapons (sling, composite bow, javelin) are real capable weapons, not pre-civilised junk.
- "Historic" is meaningless when every weapon in WSR is historic.
- The split obscured more than it revealed. The 1/2dm rule, range bands, and Pierce damage type apply uniformly across thrown and drawn missile weapons; there was no mechanical distinction the subsections actually carried.

Considered an alternative split by use-pattern (Thrown vs Drawn/Slung) but the rules don't lean on the distinction mechanically, and a single table is simpler.

**Files updated:**

- P7 §2.3: subsection headings removed; tables merged into one alphabetised table (15 weapons); prose notes consolidated.

**Implications:**

- One subsection, one table - cleaner chapter structure.
- "Bow, Composite" / "Bow, Long" / "Bow, Self" still group naturally under "B" in alphabetical order.
- "Knife (thrown)" (improvised throw of a regular knife) and "Knife, Throwing" (purpose-built throwing knife) both retained as distinct entries with different stats.

---

## 2026-05-12 - P7 weapons: drop crossbows entirely (follow-up to weapon cull)

**Context:** Follow-up to the P7 weapon cull. User reviewed the kept Crossbow, Light / Crossbow, Heavy entries (which represented ancient gastraphetes / cheiroballistra) and directed: drop them entirely.

**Decision:** Remove all crossbow entries and prose from the equipment chapter; remove "crossbow bolts" from the Pierce damage type source lists in PA1 §1.1 and P5 §10.1.

**Reasoning:** Sword & sorcery doesn't feature crossbows. Howard's Conan never uses one. Mouser doesn't. Elric doesn't. The composite bow already dominates the long-range high-damage missile niche in the genre. Keeping crossbows as "specialty equipment" left them in the equipment list as a temptation that didn't pay off in genre flavour. Cleaner to remove than to leave a "rare option" that adds list weight without adding genre texture.

Ancient crossbows did historically exist (Greek gastraphetes, Roman cheiroballistra, Chinese repeating crossbows), but they were specialty / siege equipment in cultures peripheral to the sword & sorcery imaginary register. Their inclusion pulled toward medieval European warfare more than toward Howard's Hyborian Mediterranean. Out.

**Files updated:**

- P7 §2.3 Historic Missile Weapons: both Crossbow rows (Light, Heavy) removed; "Crossbows:" prose paragraph removed; Range bands paragraph trimmed ("extreme bow or crossbow range" -> "extreme bow range").
- PA1 §1.1 Pierce sources: "crossbow bolts" removed.
- P5 §10.1 Pierce damage type sources: "crossbow bolts" removed.

**Implications:**

- Missile weapons in WSR: bows (self, composite, long), sling and staff-sling, javelin, darts, thrown axe/knife/rock, blowgun, lasso, bola, boomerang, throwing knife.
- No bestiary or NPC stat block references to crossbows existed - sweep was clean.
- The composite bow's role as "premier cavalry weapon, ancient steppe" is reinforced now that it has no crossbow competition for the high-damage missile slot.

---

## 2026-05-12 - P7 weapons: cull post-period weapons; add ancient-world replacements

**Context:** User reviewing P7 equipment flagged that several weapons were anachronistic for WSR's pseudo-ancient-world setting (Bronze Age / Iron Age, ~Hyborian / Howard-genre period). Specifically named: Main-gauche, Rapier. Directive: "stay within the technology and pseudo time period."

**Decision:** Remove 10 post-period weapons; add 3 ancient-world replacements; tighten crossbow list and prose; update cross-references.

**Removed (post-period, medieval to modern):**

| Weapon              | Period mismatch                                   |
| ------------------- | ------------------------------------------------- |
| Dagger, Main-gauche | Renaissance off-hand parrying dagger (16-17th c.) |
| Sai                 | Okinawan martial weapon (~17th c.)                |
| Sword, Bastard      | Late medieval European hand-and-a-half            |
| Sword, Great        | Late medieval / Renaissance two-hander            |
| Falchion            | Medieval European (12-14th c.)                    |
| Saber               | Modern cavalry sword (17-19th c.)                 |
| Rapier              | Renaissance duelling sword                        |
| Flail, Morningstar  | "Morningstar" is medieval terminology             |
| Halberd             | Medieval European polearm (14th c.)               |
| Arbalest            | Medieval European heavy crossbow                  |

**Added (ancient-world replacements covering the same combat niches):**

| Weapon     | Niche                                                    | Stats                      | Historical                                                    |
| ---------- | -------------------------------------------------------- | -------------------------- | ------------------------------------------------------------- |
| **Kopis**  | One-handed curved slasher (replaces falchion)            | 1D6+2+dm, 1H, ENC 1, HP 12 | Greek/Iberian, ~5th c. BCE forward-curving sword              |
| **Spatha** | Longer one-handed sword (replaces bastard sword 1H role) | 1D10+dm, 1H, ENC 2, HP 16  | Late Roman / Iron Age cavalry sword                           |
| **Falx**   | Two-handed curved heavy slasher (replaces great sword)   | 2D8+dm, 2H, ENC 3, HP 16   | Dacian/Thracian, feared by Roman legions for cleaving helmets |

**Crossbow consolidation:** Reduced from 4 entries (Light, Medium, Heavy, Arbalest) to 2 entries (Light, Heavy). Arbalest removed (medieval). Medium dropped as redundant. Crossbow prose updated to flag that ancient crossbows existed (Greek _gastraphetes_, Roman _cheiroballistra_, Chinese repeating crossbow) but are specialty equipment, never as common as the composite bow. The Extreme range band reference removed (was specific to arbalest).

**Cross-references updated:**

- P5 §10.1: weapon-type example "a falchion used for a hacking cut" -> "a short sword used for a hacking cut".
- PA1 §1.1 Slash damage type sources: removed "falchions"; added "kopis, falx" to the list (khopesh already there).
- P7 §11 encumbrance example: "great sword" -> "falx".
- G2 mercenary captain stat block: "Morningstar" -> "Heavy mace".
- G3 greater demon stat block: "Great Sword" -> "Falx".

**Reasoning:**

- **Sword & sorcery is Bronze Age / Iron Age in flavour.** Howard's Hyborian Age, Burroughs' Barsoom, Moorcock's Young Kingdoms - all draw on Mediterranean / Mesopotamian / Persian / Egyptian / steppe technology. Rapiers, bastard swords, and halberds pull straight to Renaissance Italy or late medieval Germany, breaking the genre's tonal anchoring.
- **Ancient-world replacements fill the same mechanical niches.** Kopis = curved slasher; Spatha = longer 1H sword; Falx = two-hander. The combat options remain available; the names just change to fit the period.
- **Crossbow simplification.** Ancient crossbows existed but were specialty equipment. Reducing the table from 4 entries to 2 reflects this rarity and removes the medieval European stratification (Light/Medium/Heavy/Arbalest implied a developed crossbow industry that didn't exist in the genre's period).

**Edge cases kept:**

- **Sword, Long** and **Sword, Broad** - kept as generic types. Real Iron Age long swords existed (Celtic La Tène ~3rd c. BCE; Roman spatha ~3rd c. CE). The terms are slightly post-period but the weapons themselves are real ancient forms.
- **Scimitar** - kept. The term is medieval Islamic but curved single-handed sabres of this profile existed in antiquity (Persian akinaka, Anatolian).
- **Lance** - kept. Sassanian and Parthian cataphracts used long lances (_kontos_).
- **Pike** - kept. Macedonian _sarissa_ = 18-foot pike; the term is generic enough to cover ancient pike-equivalents.
- **Quarterstaff** - kept. Generic ancient weapon, simple to imagine in any pre-modern setting.

**Implications:**

- Weapon list net change: -10 + 3 + crossbow consolidation (-2) = 9 weapons fewer. List is tighter and more genre-coherent.
- Gladiator profession examples in P2 still work (the profession references "Net, Shield" not specific anachronistic weapons).
- No profession bundle changes needed.
- Talent prerequisites unaffected.

---

## 2026-05-12 - PA4 Names: revise lists to fabricated names (avoid recognisable historical figures)

**Context:** User reviewed the initial PA4 names and flagged that many were instantly recognisable real historical or mythological figures (Bjorn, Sigurd, Ragnar in Cold Wilds; Darius, Xerxes, Cyrus in Vast Empire; Khufu, Imhotep, Hatshepsut in Great River Kingdoms; Maui, Calypso, Penelope in Scattered Isles). User directive: "fantastic names - evocative of the culture but not taken directly from" real sources. Cold Wilds identified as the worst offender.

**Decision:** Replace every name in all eight sections with fabricated variants that preserve the cultural phonetics but don't match specific historical figures. Approach: take real cultural name elements (root words, prefixes, suffixes) and combine them in unfamiliar ways, or mutate familiar names by enough letters to break direct recognition.

**Example transformations:**

- Cold Wilds male: Bjorn -> Bjarmir; Sigurd -> Snorragar; Ragnar -> Ragenmar; Olaf -> Hakthal; Eirik -> Eirvald.
- Cold Wilds female: Astrid -> Astharil; Brynhildr -> Bryndila; Freya -> Freyhild; Gudrun -> Gudvinna; Yngvild -> Yngslada.
- Vast Empire male: Darius -> Darianos; Xerxes -> Khsathrios; Cyrus -> Khordagh; Cambyses -> Mardonal.
- Great River Kingdoms male: Khufu -> Khufran; Imhotep -> Petephor; Sargon -> Sargunet; Tutmoses -> Tutmosen.
- Scattered Isles female: Calypso -> Kalythanu; Penelope -> Pelenath; Ariadne -> Ariadora.

Phonetic patterns (Norse -ulfr/-hild/-valdr; Persian -anos/-arid/-os; Egyptic -hor/-ra/-tep; Greek -ides/-os/-as) retained so names still _sound_ Norse, Persian, Egyptic, or Greek. But individual names no longer match specific Persian kings, Norse jarls, or Egyptian pharaohs.

**Reasoning:** The original lists were too on-the-nose - reading "Bjorn from the Cold Wilds" pulls the player straight to Viking-era Scandinavia, breaking the genre's fantasy register. Fabricated names that _feel_ Norse without _being_ specific historical Vikings let the cultural archetype do its work without the real-world reference dominating the imaginative space. This matches the locked design choice that "the eight Cultural Backgrounds are archetypes, not specific cultures."

**Verification:** All 160 revised names spot-checked against well-known historical figures and mythological named individuals. Variants close to real elements (e.g., Astharil shares the "Astr" prefix with Astrid; Sapha'it shares "Sapha" with the Phoenician root) preserve cultural texture without being direct lifts.

---

## 2026-05-12 - New PA4 Names appendix; 10 male + 10 female names per Cultural Background

**Context:** User added _The Nomicon_ (Matt Finch, Mythmere Games, 2025; 354 pages) as a project source. Requested: a new Player Book appendix providing ten male and ten female names for each of the eight Cultural Backgrounds in P2 §4.

**Decision:** Create **PA4 Appendix: Names**. 160 names total (8 archetypes × 2 genders × 10 names).

**Cultural Background → name-tradition mapping:**

| Background               | Name tradition                                                                         |
| ------------------------ | -------------------------------------------------------------------------------------- |
| The Warm Coast           | Hellenic (Nomicon Ch. 14 Hellenica)                                                    |
| The Walled Cities        | Phoenician/Levantine (Carthaginian/Punic; Nomicon has no dedicated Phoenician chapter) |
| The Great River Kingdoms | Mesopotamian + Egyptic (Nomicon Ch. 21 Stygian/Egyptic, plus Akkadian/Sumerian)        |
| The Vast Empire          | Persian (Nomicon Ch. 5 Arabish, Persian-Styled variant)                                |
| The Horse Folk           | Scythian + Steppe-Mongol (mixed; Nomicon has no dedicated Scythian chapter)            |
| The Cold Wilds           | Norse/Germanic (Nomicon Ch. 18 Nörslik, Ch. 22 Teutonnic)                              |
| The Burning Lands        | Arabic + Saharan/Sahel (Nomicon Ch. 5 Arabish; West African historical figures)        |
| The Scattered Isles      | Polynesian + Aegean (Nomicon has no dedicated archipelago chapter)                     |

**Reasoning:**

- **Why an appendix, not inline.** Names are reference material - a player picks one at chargen and may not consult the lists again. An appendix is the right home; putting them in P2 §4 would bloat the chargen flow with 160 entries.
- **Why 10 + 10.** Substantial enough that two players from the same background don't end up with the same name; small enough that the appendix doesn't dominate the Player Book.
- **Why ground in real linguistic traditions.** The genre's archetypal cultures (Greco-Roman, Norse, Persian) are evocative because readers recognise them. A Tarkhan from the steppe feels different from a Hakon from the wilds.
- **Why blend Nomicon-drawn and historically-grounded names.** _The Nomicon_ provides curated lists for many traditions but doesn't cover every WSR archetype (no Phoenician, no Scythian-Mongol, no archipelago). The appendix combines Nomicon-sampled names where the chapter mapping is clean and historically-grounded names where it isn't.
- **Why Carthaginian names for the Walled Cities.** Phoenician trading-port civilisation is the closest historical analogue. Names like Hanno, Bomilcar, Tanith, Imilce carry the right air of mercantile sophistication and inland-sea cosmopolitanism.
- **Why blend Polynesian + Aegean for the Scattered Isles.** Both are archipelago cultures with sea-as-highway, but neither alone covers the full WSR archetype. The blend signals "this is an island people" without committing to one specific real-world tradition.

**Implementation:**

- New file: `chapters/pa4-names.md`.
- P2 §13.1 (Name and Physical Description) updated to point at PA4 as a starter palette.
- _The Nomicon_ credited in the appendix intro as the inspiration source for the linguistic mapping.

**Source credit:** _The Nomicon_ is copyright Matt Finch 2025; consulted for inspiration only. All names in the appendix are either historical names from real linguistic traditions or stylistic generations in the appropriate tradition. No tables, formulas, or copyrighted content from _The Nomicon_ is reproduced - the source informs the linguistic mapping; the names themselves come from real-world history or are stylistic compositions.

**Implications:**

- New project chapter count: 19 (was 18). Cross-ref verifier indexes one more chapter.
- P2 §13.1 cross-references PA4.
- The appendix is short and stable - names lists rarely need revision.
- "Starter palette" framing makes it clear that GMs with setting-specific name traditions (Argolis instead of Warm Coast) can substitute freely.

---

## 2026-05-12 - P6 Spell List expansion: 8 new spells (sleep, charm, forget, dispel, scrying, telepathy, necromancy, lighter shape-change)

**Context:** User reviewing P6 Sorcery flagged that the spell list (29 spells) had no magical sleep, charm, forget, or shape-changing spells. Source check confirmed BRP UGE's Magic and Sorcery chapters don't have direct Sleep / Charm / Forget spells either, but the BRP Sorcery list has other useful gaps to port (Undo Sorcery, Far Sight, Keen Ear, etc.). Shape Thief in WSR already covers animal shape-change at 4 PP + 1 Corruption per casting; what was missing was a cheaper alternative for "wolfskin"-style frequent transformation.

**Decision:** Add 8 spells in alphabetical order. WSR-original entries for the user-named gaps (sleep, charm, forget, lighter shape-change); BRP-sourced ports for the dispel, scrying, telepathy gaps; original entry for the genre-essential necromancy.

**The 8 new spells:**

| Spell                       | Type                        | Origin                                                                                                        |
| --------------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Animate Dead**            | Necromancy                  | WSR-original (genre-staple - Howard/Smith/Moorcock necromancers)                                              |
| **Far Sight**               | Scrying                     | BRP-canonical (BRP "Farsight")                                                                                |
| **Honeyed Whisper**         | Charm                       | WSR-original (BRP "Control" approximates, but WSR design fitted to genre register)                            |
| **Lethe Touch**             | Memory erasure              | WSR-original (genre gap; BRP has no equivalent)                                                               |
| **Skin of the Beast**       | Shape-change (totem animal) | WSR-original (lighter alternative to Shape Thief; "wolfskin" magic)                                           |
| **Slumber of the Lotus**    | Sleep                       | WSR-original (genre gap; BRP has no equivalent)                                                               |
| **Undo Sorcery**            | Dispel                      | BRP-canonical; already referenced by Curse of the Withered Hand (which needed a definition that didn't exist) |
| **Whisper Across Distance** | Long-range telepathy        | BRP-sourced (BRP "Keen Ear" repurposed for telepathic communication)                                          |

**Design notes per spell:**

- **Animate Dead** - 3 PP + 1 Corruption per body, 10 min ritual per body, POW hours duration. Animated corpse keeps physical stats but loses INT/POW; treats incoming attacks like Rabble (half-HP threshold doesn't apply to undead but the body's HP value uses the half formula, no crits applicable). Cap of POW/3 active bodies. Necromancy is reviled - communities turn hostile on discovery. Corruption escalates (1D3) for relatives or personally-killed targets.
- **Far Sight** - 2 PP/intensity, intensities 1-3 ranging from line-of-sight to "anywhere I've been or anyone I've bound." Requires reflective focus and quiet space; broken by any damage to caster.
- **Honeyed Whisper** - 2 PP/intensity, POW rounds. Intensities scale from "won't attack me" to "will die for me," with a Passion-resistance check at the top. Permanent -30% social penalty after spell ends.
- **Lethe Touch** - 3 PP, requires skin contact. Erases 1D6+POW/5 minutes; partial recovery possible with sensory cues or sorcerous intervention.
- **Skin of the Beast** - 3 PP, POW rounds. Single totem form chosen at learning (wolf, eagle, etc.). No Corruption per casting. Genuinely lighter than Shape Thief - shorter duration, single form, but castable freely. Sorcerer can learn multiple instances for different forms.
- **Slumber of the Lotus** - 2 PP/intensity, intensities 1-4 scaling sleep duration from 1D6 rounds to 1D6 days. Wakes on damage or vigorous shaking; once-per-24-hours per sorcerer.
- **Undo Sorcery** - 1 PP/intensity matching the target spell's intensity. Resistance Table compare against original caster or original casting intensity. Closes the gap that Curse of the Withered Hand was already referencing.
- **Whisper Across Distance** - 2 PP/intensity, intensities 1-4 scaling from line-of-sight to global range. One short exchange per casting; target may resist with Difficult POW.

**Reasoning:**

- **Sleep / Charm / Forget gap:** The user-named gaps are genre-essential. Conan's adventures feature sleep-spells (lotus-poison and sorcery), Mouser-stories feature charm magic, and forget-magic is a classic wizard's tool for covering tracks. Source BRP doesn't have direct equivalents - we designed in the WSR register, matching the existing entries' tone and intensity-scaling style.
- **Shape change:** Shape Thief already covered the heavy lift. Adding Skin of the Beast gives sorcerers a cheaper, totemic alternative - "I am wolf-marked, I become wolf without paying every time" - which is the Howard/Burroughs flavour rather than the more sinister Shape Thief.
- **BRP ports:** Undo Sorcery was being referenced already (Curse of the Withered Hand says "broken by Undo Sorcery") but never defined. Far Sight and Whisper Across Distance are scrying/communication staples; the BRP source has both. Including them now closes obvious gaps.
- **Animate Dead:** Not in BRP UGE Sorcery list but central to sword & sorcery necromancy. The reviled-by-community framing is genre-correct.

**Considered and rejected:**

- **Characteristic boosters** (BRP has 8 - Bolster the Soul, Titan's Strength, etc.). Undying Strength already covers STR. Adding more would dilute the "every spend has cost" theme and feel buff-stacky.
- **Elemental damage spells** (Fires of the Sun, etc.). WSR's sorcery is curses and bargains, not artillery; this preserves the tonal stance.
- **Minor utility** (Make Fast, Breath of Life, Unbreakable Bulwark). Useful but not genre-essential.

**Implications:**

- P6 spell count: 29 -> 37.
- Curse of the Withered Hand's reference to "Undo Sorcery" now resolves to an actual spell entry (closes a long-standing dangling reference).
- The four user-named gaps (sleep, charm, forget, shape-change) are all addressed.
- Sorcerers gain meaningful new tools: Slumber for non-lethal incapacitation, Honeyed Whisper for socially-loaded encounters, Lethe Touch for post-extraction cleanup, Skin of the Beast for genre-true totem transformation, Animate Dead for the necromancy archetype.
- Genre framing preserved: Sleep/Charm/Forget all carry Corruption costs at higher intensities (the cost of bending wills). Necromancy is socially toxic. Memory erasure is intimate violation.

---

## 2026-05-12 - Populate PA1 Burn and Grapple critical hit tables (100 entries)

**Context:** PA1 had Burn and Grapple as "Future Expansion" with interim rules (treat as Krush at one band lower / treat as Krush). User asked whether to populate now given the use cases:

- **Grapple:** heavily used across the bestiary (Lion, Tiger, Bear, Giant Constrictor, Eagle, Giant, Griffin, Greater Demon, Yog-Hath, Air Elemental, Otherworldly Tentacle Mass, plus the Great Wolf's "Drag"). PC Grapple skill (P3) is a player tool. Currently every grapple critical reads as a Krush hammer-strike - jarring for a snake's coils or a lion's jaws.
- **Burn:** Fire Elemental (already cross-referenced "Burn interim rules"), Greater Demon flame breath and Sheath of Smoke and Fire, Mummy fire-vulnerability, sorcerous fire spells in P6, Greek fire / burning oil.

**Decision:** Populate both tables in full. 100 entries (5 bands × 10 results × 2 tables). Same 1-2-2-2-2 band distribution as Slash/Pierce/Krush and same severity gradient (slots 1-5 severe-but-recoverable, 6-7 severe with permanent component, 8-10 dying/instant death).

**New vocabulary added to PA1 §1.4:**

- **Burns** - similar to Bleeds, but time-limited (1 HP/round for stated duration, or extinguished by patting out / dousing). Catastrophic burns (2 HP/round) require Medicine or sorcery to stop, like a severe bleed.

**Section structure in PA1:**

- §1.1 Damage Types table extended from 3 types to 5 (+ Burn + Grapple). Header changed "Weapons" -> "Sources" since neither Burn nor Grapple is exclusively weapon-driven.
- §1.1 Animal and natural-weapon attacks paragraph extended: bite/rake -> Slash, gore -> Pierce, hoof/paw -> Krush, constricting/grappling -> Grapple, supernatural flame -> Burn.
- §5 (was "Future Expansion") replaced with full §5 Burn Critical Hit Table.
- New §6 Grapple Critical Hit Table.

**Burn flavour:** Singes, hot ash, blistering, scalded lungs, ignited cloak, blinded eyes, charred limbs, supernatural fire that cannot be extinguished. Effects: bonus damage, burns (1 HP/round time-limited), blinded vision, attacks Difficult, stunned, unconsciousness, permanent CHA/CON loss at extreme severity, full incineration at slot 10 of Band E.

**Grapple flavour:** Wrist-locks, bear hugs, chokes, dislocations, constriction, neck-twists, spinal compression. Effects: drop weapon, stunned, attacks Difficult, knocked down, dislocations (treatable), cracked ribs, suffocation, dying, snapped necks, permanent DEX/INT loss for extreme spine/oxygen damage.

**Knock-on updates:**

- **G3 Fire Elemental** - "fire crits may use the Burn interim rules from PA1" replaced with first-class damage type tag: "Flame Touch 70% / 2D6 fire (Burn); Flame Breath 60% / 3D6 fire (Burn)."
- **P5 §7 (Damage Types)** - closing paragraph added pointing readers to PA1 §5 (Burn) and §6 (Grapple) for non-weapon damage types.

**Implications:**

- A PC bitten and grappled by a constrictor and rolling matching dice within skill now consults PA1 §6 Grapple, not §4 Krush with substitution.
- The Great Wolf's "Drag" Grapple, a Bear Hug, a snake constriction - all get proper Grapple criticals with appropriate flavour.
- Sorcerous fire attacks (Yog-Hath flame breath, Fire Elemental Flame Touch, a future fire spell critical) consult PA1 §5 Burn.
- PA1 table count: 5 (Slash/Pierce/Krush/Burn/Grapple). Total critical entries: 250.

---

## 2026-05-12 - Bump First Aid / Medicine to 1D4; introduce Named Creature concept for bestiary

**Context:** Two follow-ups from the Total Hit Points decision:

1. User confirmed First Aid and Medicine healing rates (1D3 HP, crit 2D3) felt underweight against doubled PC HP - relative impact halved. Bump approved.
2. User raised the idea of Named Creatures - extreme examples of a species ("the Great Wolf of T'althu and the like") elevated mechanically to Named Antagonist tier.

**Decisions:**

**1. First Aid and Medicine: 1D3 -> 1D4 HP healed.** Critical results: 2D3 -> 2D4. Characteristic restoration (Medicine 1D3 points) unchanged - characteristics are 3-18, not HP-scaled.

Files updated:

- P1 §4 (how-to-play primer): natural healing line bumped.
- P3 First Aid skill entry: 1D3/2D3 -> 1D4/2D4.
- P3 Medicine skill entry: 1D3/2D3 -> 1D4/2D4 for HP healing; characteristic restoration unchanged.
- P4 §2.4 Non-Combat Critical Outcomes: First Aid and Medicine entries updated.
- P4 §5.2 Key Intervals table: natural healing entry updated.
- P5 §5.3 healing block: First Aid and Medicine paragraphs updated to 1D4 (natural healing was already bumped in prior commit).
- PA2 §4 (Selka fight callback): First Aid reference updated.

Left unchanged (deliberately):

- Vampire and troll regeneration (1D3 HP/round) - creature abilities, scale-independent.
- Major Wounds Table killing-wound entry (1D3 HP/round Stamina cascade) - bleed cascade, scale-independent.
- Mask of Pricelessness 1D3 damage (G5) - damage mechanic, unrelated.
- Rally From the Wound (P4 §7.9, 1D6 HP) - already higher tier; not flagged.

**2. Named Creatures: new G3 §1.2 section.** A singular legendary individual of a species, mechanically elevated to Named Antagonist tier.

Section adds:

- Definition (singular, named, legendary).
- Mechanical effect: Named Antagonist HP formula (CON+SIZ), higher characteristics, unique signature abilities, reputation in local folklore, possible Talents/Passions/Patron for intelligent creatures.
- Build procedure: start from bestiary entry, apply Named HP, bump 1-2 characteristics, add unique ability, name.
- Worked example: The Great Wolf of T'althu. Built from the §2.3 Wolf entry, statted out with elevated characteristics, doubled HP (12 -> 28 via CON+SIZ), 75% Bite, signature ability "The Drag" (Grapple-from-bite to pull rider/standing target).
- Note: Named Creatures follow the Critical/Major Wound exclusivity (PA1 critical tables apply; MW Table does not).

**Reasoning:**

- **Healing bump.** First Aid/Medicine at 1D3 against HP 23 healed ~9% per success. At 1D4 it heals ~11% - still slower in absolute terms than under the old HP scale (where 1D3 was ~17%), but the skills now hit meaningfully without trivialising wounds.
- **Named Creatures.** Genre-canonical - Howard's "Beast-God of the Forgotten Land," Moorcock's individual named demons, Smith's specific Old Ones. A bestiary species entry tells you what a wolf is; a Named Creature tells you what THIS wolf is. Mechanically reuses the Named Antagonist tier; we just give it a name, a procedure, and an example.

**Implications:**

- First Aid / Medicine 1D4 bump propagates across all healing-relevant text. The math in worked examples now uses 1D4.
- Named Creatures give the GM a clean way to elevate any bestiary creature for a singular encounter. The Great Wolf example shows the procedure.
- This completes the Q1 lethality-and-recovery rebalance: doubled PC HP + softened Band D/E low-roll entries + bumped First Aid/Medicine (1D4) + 1D4 natural healing + Named Creature concept. PCs are durable enough for wounded-but-fighting, recovery is paced reasonably, the deadly tier (Band D/E slots 6-10) is preserved for dramatic moments, and the GM has a clean tool for legendary monster encounters.

---

## 2026-05-12 - Adopt BRP Total Hit Points option (asymmetric): PCs and Named Antagonists use CON+SIZ; healing 1D3->1D4

**Context:** User asked whether WSR should adopt BRP UGE's optional Total Hit Points rule given the lethality concern raised in the PA1 review. The BRP option: PCs and important NPCs use full CON+SIZ for HP; lesser NPCs use (CON+SIZ)/2. This roughly doubles PC durability and allows the genre's "wounded but fighting on" pattern.

**Decision:** Adopt with a three-tier split aligned to WSR's NPC tiers:

| Tier             | HP formula                              |
| ---------------- | --------------------------------------- |
| PC               | **CON + SIZ**                           |
| Named Antagonist | **CON + SIZ** (PC-grade)                |
| Professional     | (CON + SIZ) / 2, rounded up (unchanged) |
| Rabble           | (CON + SIZ) / 2, rounded up (unchanged) |

Bump natural healing from 1D3 HP/week to **1D4 HP/week** to keep calendar-time recovery from doubling outright. First Aid (1D3 / 2D3 crit), Medicine (1D3 / 2D3 crit), and Rally From the Wound (1D6) untouched - those are skill outcomes, not natural healing rates.

**Reasoning:**

- **Genre fit.** Howard's Conan takes deep cuts and keeps fighting. Current HP scale (half formula) made every critical potentially fatal, preventing the wounded-but-fighting pattern. Doubled PC HP plus today's earlier band redistribution and entry softening restore the genre arc.
- **Three-tier sharpening.** Rabble fall fast (half HP, no PP, half-HP incapacitation threshold). Professionals are deadly via skill and PP but mechanically fragile to crits (half HP, no Fate Points). Named Antagonists are PC-grade (full HP, full PP, full Fate Points, Talents).
- **Major Wound threshold scales naturally.** Threshold is "half max HP" - automatically doubles for PCs/Named. MW becomes the "you took a really bad hit" moment rather than a routine combat occurrence.
- **Healing bump preserves calendar pacing.** With doubled HP and 1D4 (mean 2.5) vs 1D3 (mean 2), recovery time goes up by ~60% in calendar terms rather than ~100%. Still slower than before (genre-true: long convalescence) but not punishing.

**Files updated:**

- **P2 §3.1 Hit Points** - formula changed to CON+SIZ for PCs; tier note added pointing to G2 §1.
- **P5 §5.3 Healing** - 1D3 -> 1D4 across the natural-healing table and intro sentence.
- **G2 §1.1 Rabble** - formula explicitly noted: (CON+SIZ)/2.
- **G2 §1.2 Professionals** - formula explicitly noted: (CON+SIZ)/2 (the half formula). Rationale clarified: "competent but mortal; their toughness comes from skill and PP, not from a doubled HP buffer."
- **G2 §1.3 Named Antagonists** - formula explicitly noted: CON+SIZ (PC-grade).
- **PA2 §1.2 Khess chargen** - HP calc updated to 23; MW threshold to 12. Pointer to G2 §1 added.
- **PA2 §3 combat stat blocks**:
  - Khess: HP 12 -> 23 (PC)
  - Orryn: HP 14 -> 28 (PC)
  - Karash: HP 10 -> 20 (PC)
  - Davan: HP 12 (Professional, unchanged) - "named alley enforcer" is a named Professional, not a Named Antagonist tier
  - Rabble: HP 9 each (unchanged)
- **PA2 §3 worked combat narrative** - unchanged. Davan still goes 12->1 from the 11-damage Critical Buy; mechanics are unaffected because Davan is Professional tier.
- **GA1 §2 Ysolde the Annotator** (Named Antagonist patron sorcerer) - HP 11 -> 22; MW threshold corrected to 11. Also fixed the pre-existing line 142 typo ("5 (half of 11, rounded up)" - half of 11 rounded up is 6, not 5; now obsolete under new formula anyway).
- **G3 §1.1 Bestiary header** - note added: bestiary stat blocks use half formula by default; GMs treating a creature as Named-tier should double the listed HP.

**Implications:**

- A PC with HP 23 taking a Band C Pierce crit (~10 damage) drops to ~13 HP, ~57%. Severe but not crippling. They keep fighting.
- Band D Slash slot 1 (shield arm useless, +6 bonus damage, bleeds) on a PC takes them from HP 23 to ~12-15. Major Wound threshold is 12 - this hit may trigger MW. Either way, character is wounded but fighting.
- Combat against Named Antagonists takes roughly twice as long in terms of damage dealt. Quiet Knife, Killing Ground, Push Through become more tactically meaningful.
- Rabble pacing unchanged - they still fall at half HP.
- Sabre Tiger's Killing Bite (G3) and similar "If this causes a Major Wound" creature abilities trigger less often against PCs (higher threshold).

**Open follow-ups (not addressed in this pass):**

- First Aid (1D3 HP) and Medicine (1D3 HP) healing rates unchanged - relative impact is halved against doubled HP. May want to bump to 1D4 / 1D4 (crit 2D4 / 2D4) in a future pass if play reveals they feel underweight.
- Bestiary doesn't have per-creature Named-tier flags. GMs apply judgment per the new header note.

---

## 2026-05-12 - PA1 Band D/E lethality pass: bottom-half entries softened to survivable-severe

**Context:** User Q1 from PA1 review: high percentage of Band D and Band E entries were fight-enders (dying or instant death), fine for foes but punishing for PCs. Today's 1-2-2-2-2 redistribution made high-band crits rarer, but the _content_ was untouched. Directive: "bottom 1-5 results should be severe but not fight-ending. Go back to Rolemaster tables to establish the distribution of critical severity."

**Decision:** Revise Band D and Band E entries 1-5 across all three damage tables to be severe-but-recoverable. Entries 6-10 keep the dying/death/permanent-destruction results.

**Rolemaster-aligned distribution within each band:**

- **Slots 1-5:** Heavy bleeds, prolonged stuns, prolonged unconsciousness, treatable maiming, "rest of the fight" condition impairments, permanent characteristic loss (Band E only). Character keeps fighting at reduced capacity.
- **Slots 6-7:** Severe maiming with permanent component (hand gone, limb destroyed). Alive but diminished.
- **Slots 8-10:** Dying or instant death. The legendary devastating-blow tier.

**Entries revised (21 total):**

- Band D Slash: slots 2, 4, 5 - removed "dying in N rounds," replaced with heavy bleeds, "rest of the fight" condition impairments, prolonged stuns.
- Band E Slash: slots 1-5 - replaced instant-death/dying-in-rounds with permanent maiming, jaw-shattered, prolonged unconsciousness, heavy bleed, "rest of fight" conditions.
- Band D Pierce: slots 1, 3, 4 - removed dying results; heavy bleeds + "rest of fight" conditions.
- Band E Pierce: slots 1, 3, 4, 5 - eye-through-brain becomes prolonged unconsciousness + INT loss; throat severance becomes permanent voice loss + heavy bleed; aorta-pierce becomes knocked-down + heavy bleed.
- Band D Krush: slots 3, 4 - dying-in-5 and conditional-dying replaced with prolonged unconsciousness and "rest of fight" conditions.
- Band E Krush: slots 2-5 - replaced instant deaths and dying-in-rounds with prolonged unconsciousness, permanent INT/POW loss, jaw-shattered, heavy "rest of fight" effects.

**PA1 §1.5 lethality summary** updated to match the new distribution for Bands D and E.

**Reasoning:** Sword & sorcery features serious wounds that don't kill the hero - Conan takes deep cuts and keeps fighting. Howard's prose is full of "blood streaming from a slash across the ribs, but he fought on." Rolemaster's distribution (low-slot survivable, high-slot lethal) captures this. PCs taking low-roll Band D/E crits now get memorable, scary, descriptive wounds but don't immediately die - they dig deep, fight on impaired, and may use Push Through or Stand Your Ground to survive. The deadly tier at slots 6-10 is preserved because the genre also features moments where the throat is opened and the hero falls.

**New mechanical vocabulary used:**

- "Falls unconscious for 1D6/1D10/2D6 rounds" - non-dying severe effect
- "Bleeds catastrophically (2 HP/round until bound)" - higher-tier bleed
- "Permanently loses 1D3 INT/POW" - characteristic loss as PA1-intrinsic permanent (precedent: existing Band E Krush slot 9)
- "Cannot speak or cast spells without sorcerous restoration" - jaw/throat damage condition

**Implications:**

- PCs taking Band D crits no longer face ~50% dying rate at low rolls.
- Band E crits at low rolls become "catastrophic and life-changing" but survivable.
- Deflect the Killing Blow remains relevant for Band E slots 6-10 and high-roll Band D dying results.
- PA2 worked example (Khess's Band C Pierce critical) is unaffected - that's Band C, not D or E.

---

## 2026-05-12 - Criticals and Major Wounds: fully exclusive systems (Option A)

**Context:** User flagged a real ambiguity in the interaction between criticals and the Major Wounds Table. Two issues:

1. The wording "the player may forgo the Major Wounds Table and look up the crit result in PA1 instead" (P5 §5.2 last paragraph) made the exclusivity sound optional - a careful reader might apply BOTH the PA1 entry and the Table, double-punishing the character.
2. Even ignoring the Table, the Major Wound _status_ (Luck roll for permanence, impaired-capacity narrative) was still triggering on crits when damage ≥ MW threshold - layering on top of PA1 entries that already encoded their own duration and permanence ("the hand is gone," "useless for 2 rounds," "dying in 5 rounds"). Functionally redundant.

User: "Should Major Wounds only apply when there WASN'T a critical?"

**Decision (Option A - fully exclusive systems):** PA1 critical and Major Wound are parallel wound systems, not stacked. A critical attack resolves entirely via PA1. The Major Wounds Table does not roll, the Luck roll for permanence does not apply, and the impaired-capacity status does not apply. PA1 entries already encode their own severity and recovery.

The Major Wound system (Table + Luck roll + impaired status) applies only to **non-critical** attacks that deal ≥ half HP damage in a single blow.

**Reasoning:** Sword & sorcery is about specific wounds with specific effects, not generic statuses stacked on top of each other. The PA1 entry IS the wound - its words are the wound's truth, including how long it lasts. PA1 already specifies "useless for 2 rounds" (temporary), "the hand is gone" (permanent), "dying in N rounds" (terminal). Adding a separate Luck roll on top either duplicates the permanence question or muddles it. Cleaner to make the systems exclusive.

The user's instinct ("Major Wounds only apply when there wasn't a critical") aligns perfectly with Option A. Considered Option B (clarify wording, keep stacked Luck roll for crits) but rejected: the redundancy was the real problem, not just the wording.

**Files updated:**

- **P5 §5.1 Major Wound paragraph** - restructured to split by source: critical → PA1 only (no Table, no Luck roll, no impaired status); non-critical → MW Table + Luck roll + impaired narrative. The bonus-damage-counts-toward-threshold sentence is removed (no longer relevant for crits, which don't check the threshold).
- **P5 §5.2 Criticals and Major Wounds** - rewritten as deterministic: "Critical attacks resolve via PA1. The Major Wounds Table does not apply, and the Luck roll and impaired-capacity status in §5.1 do not apply. PA1 critical and Major Wound are parallel wound systems, not stacked."
- **PA1 §1.4 Major Wound vocabulary entry** - rewritten to clarify its role for entries that say "if this causes a Major Wound, [extra effect]." The vocabulary still applies: PA1 entries reference the threshold as a conditional trigger for additional effects (e.g., "dying" when the damage crosses half HP). But the Major Wounds Table itself is never rolled for criticals.
- **PA2 §3 worked example** (Davan's critical) - tightened to match: "Under §5.1, the critical's PA1 result is the wound... The Major Wounds Table does not roll, and there is no Luck roll: PA1 critical and Major Wound are parallel wound systems, not stacked."

**Implications:**

- Critical attacks: simpler resolution. PA1 entry, done. No additional rolls.
- Non-critical Major Wounds: unchanged. Table + Luck roll + impaired narrative.
- "Major Wound" as a PA1 vocabulary term still exists - it gates conditional effects within entries ("if this causes a Major Wound, the target is dying"). The trigger is "damage crosses the threshold"; the effect is whatever the PA1 entry specifies.
- Sabre Tiger's "Killing Bite" ability (G3 line 340) and similar creature abilities that reference "Major Wound" still work - they trigger on damage crossing threshold, not on rolling the Table.

---

## 2026-05-12 - Crit table coordination: bonus damage + MW, cross-ref fix, animal-attack note

**Context:** User review of PA1 raised three clarification asks:

1. Does PA1 bonus damage count toward Major Wound threshold? (Yes per PA1 §1.4, but P5 §5.1's MW definition just says "damage" - clarification arrives late in reader sequence.)
2. P5 §5.2 cross-ref "applying the severity band per §8" - broken (§8 is "Rabble" after the renumber; should be §10.2 "Determine the Severity Band").
3. Do animal attacks need their own crit tables? No - existing Slash/Pierce/Krush mechanical effects (bleed, stun, knocked down, useless limb, bonus damage) are weapon-agnostic. Only the wound descriptors are weapon-flavoured.

**Decision:**

1. **P5 §5.1 - explicit bonus-damage rule.** Added one sentence to the Major Wound definition: "For critical hits, the total damage that counts toward this threshold includes the PA1 entry's bonus damage on top of the weapon's base damage roll." Makes the rule discoverable on first reading.

2. **P5 §5.2 - cross-ref fixed.** "§8" -> "§10.2".

3. **PA1 §1.1 - animal attack note.** Added paragraph: animal/natural-weapon attacks use the same three tables with descriptor substitution (fang for blade, claw for edge, hoof for haft, gore for thrust). Damage-type mapping: bite/rake = Slash, gore = Pierce, hoof/paw/constriction = Krush. Mechanical effects apply unchanged.

**Reasoning:** All three are clarification fixes for behaviour already supported by existing rules - the bonus-damage-counts rule is in PA1 §1.4 (just not surfaced in P5); the §10.2 cross-ref target exists (just was mislinked after the §6.8 Knockback removal and subsequent renumbering); animal-attack mechanical effects already work in the existing tables (just need GM-substituted descriptors). No design change.

**Deferred (Q1 from user's review):** Band D/E entry-level lethality remains as-is for now. Today's 1-2-2-2-2 redistribution already reduces the _frequency_ of high-band crits (44/55 moved D->C, 66/77 moved E->D, Band E gated to skill 88+). If the entry _content_ still feels too brutal on review, that's a separate targeted pass on specific Band D/E entries (most likely the "dying in N rounds" results).

---

## 2026-05-12 - P5 §10.4 clarified: Rabble can inflict criticals (asymmetric crit handling)

**Context:** User reading P5 §10.4 "Criticals and Rabble" asked whether Rabble can inflict criticals on PCs. The section only addressed Rabble _receiving_ criticals (they skip the PA1 table; auto-incapacitation at half HP). The reverse direction was unstated.

**Decision:** Rabble inflicting criticals follow the standard rules: PC may defend; if the attack lands, full damage + armour ignored + PA1 table consulted. The §8 rule already implied this ("Rabble still attack, parry, and roll to hit normally - only the incapacitation threshold is simplified"), but the §10.4 text didn't surface it. Now made explicit with both directions of crit handling labelled in §10.4.

**Natural soft-cap.** Rabble skill caps at 30-50% (occasionally 60%) per the design envelope in G2 §2. Under the new band distribution (1-2-2-2-2), this means:

- Skill 30-40: caps at Band B (via 22 or 33)
- Skill 50: caps at Band C (via 44)
- Skill 60: caps at Band C (via 44 or 55)
- Skill 66+: would unlock Band D, but this is above the Rabble design envelope

So typical Rabble crit Band A or B; an unusually-skilled Rabble may reach Band C. Bands D and E are gated behind Named Antagonist skill ranges. Rabble also cannot Critical Buy (no Fate Point access).

**Reasoning:** This is genre-true - Howard's heroes take wounds from random soldiers all the time ("the city guard got lucky and cut the hero deep"). But the truly devastating crits are reserved for Named Antagonists who have full skill and full PP. The asymmetric crit handling (Rabble inflict normally, receive simplified) preserves both the genre's lethality and the system's pacing goal of keeping Rabble fights brief.

**Files updated:**

- P5 §10.4: rewritten with two labelled paragraphs - "Rabble inflicting criticals" and "Rabble receiving criticals".

**No mechanical change** - this is clarification of behaviour already supported by P5 §8 ("Rabble still attack normally") and P5 §3.5 (Critical Attacks and Armour). Just making it explicit that the standard rules apply when Rabble are the attacker.

---

## 2026-05-12 - Severity band redistribution (1-2-2-2-2); 01 = best reachable band; supersedes earlier 01 -> A rule

**Context:** User reviewing the combat chapter flagged two related issues with P5 §10.2 "Determine the Severity Band":

1. **P5 §10.2 was stale.** It had an old band split (11=A, 22=B, 33=C, 44=D, 55=E, 66-88=E) that never reconciled with PA1 §1.2 (44/55=D, 66-99=E) after the 99 addition earlier today.
2. **PA1's distribution was E-heavy.** Pattern was 1-1-1-2-4 (one each in A/B/C, two at D, four at E). At skill 80+, ~44% of natural crits landed Band E (the deadliest band). User: "66 is an odd cut off point that makes most criticals likely to be the E band, which is the deadliest."
3. **01 missing from P5 §10.2 entirely** (an inconsistency carried over since the 01 always-crit rule was added).

**Decision:** Redistribute the matching-dice -> band mapping to a balanced **1-2-2-2-2** pattern:

| Matching-Dice Value | Band |
| ------------------- | ---- |
| 11                  | A    |
| 22, 33              | B    |
| 44, 55              | C    |
| 66, 77              | D    |
| 88, 99              | E    |

**01 always-crit rule (supersedes today's earlier "01 -> A flat" decision).** A roll of 01 is always a Critical Success, with severity band = the highest band the character could otherwise reach at their effective skill (skill after difficulty modifiers). A novice's lucky shot is mild; a master's lucky shot is devastating. Difficulty halves effective skill, so a Difficult lucky shot caps lower than an unmodified one.

**Lookup table added to PA1 §1.2.** Full skill-vs-value matrix included so GMs can determine bands by direct lookup. Rows are effective-skill ranges; columns are matching-dice values plus an "01" column for the always-crit band; cells show the resulting band (or "-" for fumble-above-skill).

**Reasoning:**

- **Distribution balance.** At skill 99+ (max), the new pattern gives 1 A + 2 B + 2 C + 2 D + 2 E = 9 crit values across the bands. Compare old: 1+1+1+2+4 = 9. The old curve made Band E (the deadliest) overwhelmingly common at high skill; the new curve smooths it.
- **Band E now meaningfully gated.** Band E requires matching 88 or 99 - skill 88+ is required to crit on 88 naturally, skill 99+ to crit on 99. The training cap (75%) means PCs reach Band E only through in-play experience, sharpening the reward for skill investment past the trainer ceiling.
- **01 effective-skill rule preserves the always-crit's "lucky shot" sense while making it skill-rewarding.** A flat 01 -> A was anticlimactic for masters. The new rule lets the 01 land at whatever band the character's effective skill already grants access to - the lucky shot reaches the master's full potential, not the bare minimum.
- **Skill thresholds align cleanly with band-mapping thresholds.** Effective skill 11-21 -> Band A only; 22-43 -> up to B; 44-65 -> up to C; 66-87 -> up to D; 88+ -> up to E. Easy to remember.

**Files updated:**

- P1 §2 (combat overview band-mapping reference): full band list + 01 rule explanation.
- P5 §10.2 (Determine the Severity Band): new table, 01 rule, Critical Buy example corrected (44 = C, not D).
- PA1 §1.2 (canonical band mapping): new table, 01 rule, full skill-vs-value lookup table added.
- PA1 §1 worked example (Korrath's hypothetical): "If Korrath had rolled 44, he would be in Band D" -> "Band C".
- PA2 multi-round combat example (Khess's Critical Buy on Davan): band updated D -> C, result quote replaced with actual PA1 Band C Pierce result 5, damage math adjusted (1D4 rolled max instead of 2; +5 bonus instead of +7; total 11 unchanged), bleed removed from narrative (not in Band C result 5), First Aid scene updated to "HP 1, helpless from lung-puncture, gravely wounded prisoner" rather than "unconscious and dying" (which depended on the bleeding cascade).
- decisions.md: this entry, which supersedes the band split and the 01 -> A rule from earlier today's "Combat resolution clarification" entry.

**Implications:**

- PA1 critical hit table CONTENT is unchanged (the Slash/Pierce/Krush tables at each band still have the same entries). Only the mapping of matching-dice value -> band changes.
- Combat lethality at high skill goes down meaningfully. Skill-80 fighters cap at Band D unless they pay PP to buy higher (and even buying requires the value to be within skill, so they still cap at D until they have skill 88+).
- 01 always-crit becomes a more interesting design element - scaling with skill instead of flat.

---

## 2026-05-12 - Renamed NPC tier "Mook" -> "Rabble"

**Context:** User reviewing the combat chapter flagged that "Mook" is Damon Runyon / Cagney-era American slang - very 1920s pulp, the wrong register for sword & sorcery. Howard, Leiber, and Moorcock all reach for different vocabulary for disposable foes.

**Decision:** Rename the lowest NPC tier from **Mook** to **Rabble** across the entire project. Treat "Rabble" as a proper-noun tier name and as a count noun for individual references ("a Rabble," "two Rabble," "the Rabble"). "Rabble" is invariant in plural form, like "sheep" or "fish."

**Reasoning:**

- **Genre pedigree.** "Rabble" is Howard-canon - Conan slaughters "the rabble" in dozens of stories. The word is also period-appropriate (Bronze Age / Renaissance / Lankhmar registers).
- **Coverage.** Works in every context the tier covers (city guards, mercenaries, conscripts, thieves, cultists). Not tied to a specific role like "Bravos" (Leiber's hired urban sword-fodder) or "Conscripts" (military levies).
- **Collective register.** The genre's framing is that these foes aren't individuals; they're the _aggregate_ threat. "Rabble" carries that collective sense naturally, even when used as a count noun for a single NPC.
- **Tonal fit.** Slightly evocative but not overwrought; works clean in rules text ("Rabble have no PP," "Rabble are incapacitated at half HP").

**Considered and rejected:**

- **Bravos** (Leiber Lankhmar word): too specifically urban; awkward for tribal warriors, temple cultists, military conscripts.
- **Curs** (Howard insult): too colorful for a rules term used dozens of times per session.
- **Footmen** (medieval-neutral): feels servile; a city guard isn't really a footman.
- **Soldiery** (Moorcock): awkward singular form, military-only connotation.

**Implementation:** Sed-swept all instances across ten chapter files. Decisions.md historical entries preserved under the append-only convention.

**Files swept:** P1, P4, P5, PA1, PA2, G1, G2, G3, G5, GA1.

**Polish:** One sentence in P5 §10.4 ("if this reaches the incapacitation threshold, the Rabble is done") rephrased to "the target is done" to avoid the collective-vs-singular ambiguity. Everywhere else the count-noun usage ("A Rabble who takes...") reads cleanly.

**Implications:**

- All player-facing and GM-facing prose now uses "Rabble" as the tier name.
- The "Rabble rule" (auto-incapacitation at half HP) is unchanged - this is purely a naming decision.
- Three-tier model: **Rabble** / Professionals / Named Antagonists. The other two tier names were already coherent and remain unchanged.
- Bestiary entries that explicitly call out "treated as Rabble" (skeletons, zombies, wolf-pack incapacitation) updated.
- Stat-block labels in PA2 ("Mook A" / "Mook B") -> "Rabble A" / "Rabble B".

---

## 2026-05-12 - P5 Special Damage Types reframed; §6.8 Knockback dropped

**Context:** User reviewing the combat chapter flagged two related issues: §7 "Special Damage Types" still referenced BRP "special success" outcomes (a tier WSR doesn't have - it collapsed Special/Critical into a single matching-dice Critical), and §6.8 Knockback was a stand-alone section triggered by the orphan "crushing special effect" in §7.3. Both sections were BRP two-tier fossils.

**Decision:**

1. **Reframe §7 "Special Damage Types" -> "Damage Types".** Strip every "Special success: X" entry. Each subsection becomes a brief pointer to the relevant PA1 critical table (Slash -> PA1 §2; Impale -> PA1 §3; Crush -> PA1 §4) plus a mention of the common critical effects defined in PA1 §1.4 (Bleeds, Stunned, Knocked down).

2. **Preserve the Entangle Attempt declaration.** This was the only genuinely-useful mechanic in old §7 - a tactical choice to entangle without damage at Difficult. Kept as a labelled option in §7.4. An entangling critical now imposes the entangle effect immediately and irresistibly.

3. **Drop §6.8 Knockback entirely.** The trigger no longer exists (no "special effect"), and the consequence is already covered: PA1 Krush critical entries include "Knocked down" outcomes, and §6.9 Fighting While Down (renumbered to §6.8) defines the prone-fighting penalties. Knockback as a _cause_ lives in PA1 critical entries and creature abilities (bestiary Charge effects); the _consequence_ lives in §6.8 Fighting While Down.

4. **Renumber.** §6.9 Fighting While Down -> §6.8. §6.10 Aimed Attacks -> §6.9.

5. **Knock-on fixes:**
   - §6.1 disengage method 2 "Knockback disengage" rephrased to reference PA1 §1.4 _Knocked down_ instead of the deleted §6.8.
   - §6.2 Knockout attack: "No Slash or knockback special effects" replaced with explicit guidance that PA1 critical effects do not apply to Knockout criticals (the result is the unconsciousness rule, not the brutal lethal-critical wounds).
   - G3 §1 line 981 (the otherworldly Scream entry) cross-ref: "standard stun effects per P5 §7.3" -> "standard stun effects per PA1 §1.4".

**Reasoning:** PA1 critical hit tables already deliver the genre-flavoured damage effects (bleed, lodge, stun, knockdown, sever, dying) at the Critical tier. The old §7 special-success effects were duplicates that no longer had a trigger after WSR collapsed BRP's two-tier success ladder into a single matching-dice Critical. Keeping a Damage Types reference section (without the orphan mechanics) preserves the necessary weapon -> damage type -> PA1 table linkage; entangling weapons keep their tactical declaration because it is genuinely a player-controlled choice, not a special-success effect.

**Implications:**

- P5 §6.8 Knockback section removed; subsections §6.9 and §6.10 renumbered.
- P5 §7 entirely rewritten; word "Special" removed from heading and body.
- P5 §6.1 and §6.2 internal references updated.
- G3 cross-ref redirected.
- No mechanical loss: every effect that used to require a special success now lives in PA1 critical entries, where it always did under WSR's actual rules. The entangle-attempt declaration is preserved.

---

## 2026-05-12 - Battle Tempo Combat Talent added; Warlord's Eye fixed

**Context:** User asked whether any Fate Point spend let a character improve their DEX for initiative order. None did. The discussion turned on whether to add one as a tenth universal spend or scope it to a Combat Talent.

**Decision:** Add as a Combat Talent in P2 §7.1, not as a universal Fate Point spend.

> **Battle Tempo.** 3 PP. Declare before Phase One Statements. For this round, treat your DEX as +5 for initiative order only. The bonus does not affect skill rolls, Dodge, or damage modifier - it changes the order in which you declare and act, nothing more. Once per combat.

**Reasoning:**

- **Menu discipline.** The Fate Point menu is at nine spends already; a tenth universal spend would strain cognitive load for a benefit that is archetype-specific (rogues and duellists want initiative; priests and merchants generally do not).
- **Genre fit.** Sword & sorcery initiative is preparation, not reflex-burst. A trained fighter with the _Battle Tempo_ talent has the trained reflexes; a generic character does not get to summon them by spending PP.
- **Mechanical envelope.** +5 effective DEX, one round, once per combat - meaningful but not dominant. Costs 3 PP (same as Steady Blade).
- **Talent count.** Combat Talents goes from 10 to 11. Within tolerance; original design target was "~10 per table", not a hard cap.

**Side fix - Warlord's Eye.** The existing Warlord's Eye talent referenced "+20% to their initiative roll this round" - but WSR initiative is determined by DEX order (descending in Phase Three, reverse in Phase One Statements), not by a roll. The "+20%" was a pre-existing inconsistency from BRP-era language. Replaced with "+5 effective DEX for initiative order this round" to match WSR's actual mechanic and Battle Tempo's wording. Critical effect now applies to every ally rather than the slightly ambiguous "the entire party".

**Implications:**

- P2 §7.1: 11 Combat Talents now (was 10). Battle Tempo inserted after Warlord's Eye to group the two initiative-themed talents.
- P5 combat phases unchanged.
- No new Fate Point spend - the menu remains at nine.
- "Initiative roll" was the only legacy phrase of its kind; no other chapter referenced it.

---

## 2026-05-12 - Critical Buy reframed as Fate Point spend; Push Through added; PP-buy terminology retired

**Context:** User review of P4 Action Resolution flagged that Fate Points were "mentioned in the GM section under mass combat rules but not in action resolution" - reading sequentially through P4 §1-§3, they hit the PP-Buy mechanic before the Fate Point system in §6-§7. They observed: "Converting a Success to a Critical is probably a Fate Point system but we would need to consider how it would interact with the other rules there." The PP-Buy was technically a Fate Point spend (same pool, same flavour) but labelled as a separate system, which created a reading-order confusion.

User also identified a real gap: the standard BRP UGE "shift the result one level for 6 PP" spend covers Fumble -> Failure (already handled by Ignore a Fumble at 6 PP), Failure -> Success (no current spend), and Success -> Critical (handled by the variable-cost Critical Buy). The Failure -> Success transition was the genuine missing piece.

**Decision:**

1. **Rename P4 §3 "The PP-Buy: Converting a Success to a Critical" -> "Buying a Critical".** Open the section with one sentence locating it as a Fate Point spend with variable cost: "Buying a Critical is a Fate Point spend with a variable cost - it has its own section because the cost is calculated from the dice rather than being fixed. The Critical Buy draws from the same PP pool as every other Fate Point spend."

2. **Add new Fate Point spend §7.5 Push Through (6 PP).** Converts a Failure on your own roll into an ordinary Success. Cannot apply to a re-rolled die; success does not earn an experience checkmark.

3. **Explicit no-chain rule.** Push Through and Buying a Critical cannot combine on the same roll. A failure forced to success by Push Through is not eligible for a Critical Buy. User's direct words: "you cannot buy your way from a failure to a success to a critical."

4. **Combining-spends rule added to P4 §7 opening.** Each Fate Point spend resolves independently. Multiple spends on a single action are legal where they do not contradict each other (e.g., Steady Blade pre-roll, Shrug Off a Blow post-damage). Two specific restrictions: no spend on a re-rolled die; no Push Through + Critical Buy chain.

5. **Skipped from the BRP version: multi-level shifts (12/18 PP).** WSR pool sizes are too small (~12 PP average) for cascading shifts to be balanced, and the genre needs catastrophic moments to actually matter. Each spend in the menu addresses one specific transition.

6. **Renumber P4 §7.5-§7.8 -> §7.6-§7.9.** Push Through slots in at §7.5 between Ignore a Fumble (§7.4) and Stand Your Ground (now §7.6). External cross-refs to §7.6 Deflect the Killing Blow updated in P5 (Dying Blow section) and PA1 (Band E sidebar).

7. **Terminology sweep.** "PP-buy" / "critical-buy" / "critical buy" -> "Critical Buy" (proper noun for the mechanic) across all chapters. The old terminology suggested a separate system from Fate Points; the new terminology makes the unified Fate Point framework explicit. Files swept: P2, P3, P4, P5, P6, G1, G2, GA1, PA1, PA2. Historical decisions.md entries left as-is (append-only convention).

**Reasoning:** The Fate Point system was always present in P4 §6-§7, but the PP-Buy in §3 read as orphaned because of its own naming and structural separation. Folding it conceptually into the Fate Point menu (while keeping its own section for the math) restores the reading flow. The Push Through addition fills a real gap that BRP UGE addressed with its shift mechanic, but without importing the cascade pricing that would unbalance WSR's smaller pool sizes. The no-chain rule preserves the genre's stake on failure - if every failed roll could become a critical for 9 PP, the system's lethality discipline would erode.

**Implications:**

- P4 §3 renamed; framing paragraph added; new restrictions (no chain with Push Through; no Critical Buy on re-rolled die).
- P4 §6.4 list updated to reflect the unified framing.
- P4 §7 opening rewritten with combining-spends rule.
- P4 §7.5 Push Through inserted; §7.5-§7.8 renumbered to §7.6-§7.9.
- P5 §9 (Dying Blow) cross-ref: §7.6 -> §7.7.
- PA1 §1 (Band E sidebar) cross-ref: §7.6 -> §7.7.
- "PP-buy"/"critical-buy" terminology retired in active chapter text; replaced with "Critical Buy".
- G1 (GM Principles) updated to reference nine Fate Point spend options (was eight).

---

## 2026-05-12 - Skill list additions and Stealth -> Move Quietly rename

**Context:** User review of P3 skill list flagged four gaps and one framing problem:

1. **Survival** - referenced in P2 Cultural Background bonuses (Cold Wilds +15%) but absent from P3.
2. **Animal handling** - Ride exists for mounted use but no skill covers calming, training, or commanding non-mount beasts. Genre-core in Howard and Burroughs (Beastmaster, falconer, snake-charmer territory).
3. **Herbalism / poison handling** - Medicine references herbs as material input but no skill produces them; the apothecary trade had no home.
4. **Sailor** - discovered during the profession audit; referenced in Sea-Raider and Merchant bundles but absent from the skill list. (Latent pre-existing inconsistency.)
5. **Stealth** - name and framing carried commando/ninja baggage that misaligned with the genre's lower-key sneaking. User: "make sure that the skill description (and maybe even name) sets the level of expectation."

**Decision:**

1. **Add Survival** (Mental, base 15%). One skill, no specialities - covers hunting, foraging, water-finding, shelter, weather, route-finding. Resolves the P2 Cultural Background reference.

2. **Add Animal Handling** (Mental, base 05%). Non-mount beasts only; Ride remains the specialised mounted-use skill. A horse-breaker uses Animal Handling to break the horse, then Ride to use it.

3. **Add Craft (Apothecary)** as a new Craft speciality - rather than a top-level skill. Gathers and prepares herbs, salves, antitoxins, sleep-draughts, poisons. Produces consumables that other skills use (Medicine, combat skills, Survival). Distinct from Knowledge (Occult) (theoretical toxicology) and Medicine (bedside treatment).

4. **Add Sailor** (Physical, base 05%). Practical seamanship - rigging, lines, weather at sea, working a vessel. Distinct from Navigate (charts) and Craft (Carpentry/Shipwright).

5. **Rename Stealth -> Move Quietly.** New entry adds explicit failure rules:
   - **Failure is not automatic detection** - it means the character did not conceal their passage, and any alert observer gets a Spot/Listen roll.
   - With no alert observer: success unnoticed, failure inconsequential.
   - With an alert observer: opposed roll, Move Quietly vs Spot/Listen. Higher successful result wins; ties favour the observer.
   - **Fumble is automatic detection** - the GM narrates the specific noise (kicked tankard, snapped branch, etc.).

6. **New G1 §8 Group Stealth and Concealment.** Group rolls Move Quietly at the _worst_ member's rating. Hangouts: opt-out (lag behind, roll separately), Strategy complementary bonus for leadership, individual fumble still detects that member with one-round grace for the rest. Same rule applies to Hide for stationary groups.

**Profession audit (consequence of the skill changes):**

- **Tribal Warrior**: OR slot now "Move Quietly / Animal Handling / Missile Weapon (Bow)" (was Stealth/Navigate/Bow; tribal warriors know their territory, so Navigate was the weakest fit).
- **Sea-Raider**: Stealth -> Move Quietly. Sailor reference now resolves.
- **City Thief**, **Outcast**, **Spy/Infiltrator**: Stealth -> Move Quietly.
- **Wayfarer**: OR slot adds Survival as a third option (Knowledge (Folklore) / Knowledge (History) / Survival).
- **Hunter-Tracker**: dropped Medicine and Sense; added Survival as core, Move Quietly as core, OR slot for Animal Handling / Craft (Apothecary). Profile sharpens: more wild, less physician/supernatural.
- **Scholar of the Dark Arts**: OR slot adds Craft (Apothecary) as a third option.
- **Merchant**: Sailor reference now resolves (no other change).
- Other professions unchanged.

**Talent text in P2 §7.3**: three talents (Shadow's Step, Vanishing Act, Death's Calm) updated to reference Move Quietly. The talent category name "Stealth and Finesse" preserved as a thematic label, not a skill reference.

**Side fix:** P7 §3 armour skill modifier mentioned "Athletics" (which is not a WSR skill). Replaced with concrete examples (Climb, Brawl, Dodge, Move Quietly, Swim).

**Reasoning:** Filling the skill gaps was clarification of what was already implied by the rest of the system - Cultural Background grants Survival, professions assume Sailor exists, Medicine lists herbs as materials. The Move Quietly rename addresses a tone issue: the genre is unsuited to commando-level infiltration mythology, and the new name plus failure-consequence text set the more genre-appropriate expectation that sneaking is a relative skill, not a binary one.

**Implications:**

- Four new skills in P3 (Animal Handling, Sailor, Survival, Move Quietly) + one new Craft speciality (Apothecary).
- Eight profession bundles updated.
- Three talents updated.
- New G1 §8 Group Stealth and Concealment.
- P5 §3 armour penalty list and P7 §3 armour skill modifier updated.
- P6 Cloak of Night spell description updated.
- PA2 examples updated.
- G2 NPC-building guidance updated.

---

## 2026-05-12 - Remove P1 §5.2 Mechanism Inspirations from public credits

**Context:** The original P1 §5 Credits and Attribution chapter included a §5.2 "Mechanism Inspirations" listing four non-ORC published games (Delta Green, Pulp Cthulhu, RuneQuest W&E, Rolemaster Arms Law) as sources of mechanical ideas. User questioned whether this section was legally obligated.

**Decision:** Remove P1 §5.2 entirely. Renumber §5.3 → §5.2 (Literary Inspirations) and §5.4 → §5.3 (Author).

**Reasoning:**

- Game mechanics are not copyrightable in US law (Baker v. Selden; Allen v. Academic Games line). Only the specific text expressing them is. The ORC License only governs the BRP UGE Licensed Material; it has no claim over non-ORC mechanical influences.
- ORC's required notices (Powered by BRP, copyright stack, trademark notice, license text, Reserved/Licensed Material identification, downstream attribution clause) are all in §5.1. Nothing in the license obliges acknowledgment of non-ORC inspirations.
- The provenance trail already exists internally: every mechanism borrowed from a non-ORC source is documented per the 2026-05-10 "ORC + non-ORC borrowing principle" entry in this decision log. That's the authoritative record; the public-facing §5.2 was a courtesy duplicate.
- Naming Delta Green / Arms Law / Pulp Cthulhu in front matter risks the (mistaken) reader assumption that some licensing relationship is involved, which there is not. Silence is the cleaner posture.

**Implications:**

- P1 §5.2 deleted; §5.3 (Literary Inspirations) becomes §5.2; §5.4 (Author) becomes §5.3.
- No external cross-references to the renumbered sections exist (verified by grep across `chapters/` and `decisions.md`).
- No change to the internal borrowing principle - mechanism citations continue to live in `decisions.md` as the project's authoritative provenance record.

---

## 2026-05-12 - Experience checkmarks require successful skill use

**Context:** P1 §2 (how-to-play primer) and P4 §8.1 (canonical experience rule) both described the checkmark trigger as "use a skill in a stressful/uncertain situation" without explicitly stating whether the use had to be successful. P4 §8.1 hinted at the answer via the parenthetical "(without requiring a successful roll)" on its training/immersion exception, but never stated the default rule plainly. User flagged the omission during review of the how-to-play primer.

**Decision:** Checkmarks require **successful** use of the skill under stressful or uncertain conditions. Failure earns nothing. The only exception is the GM-granted checkmark for sustained immersive exposure (training, prolonged practice, deep cultural immersion), which requires no specific roll.

**Reasoning:** This is BRP UGE's traditional rule and the source for the existing wording. Making it explicit prevents tables drifting toward "every dramatic attempt earns a check" (which devalues the mark) or the inverse (which feels punitive). The genre frames competence as earned through results, not effort - heroes are honed by what works, not by what they tried.

**Implications:**

- P1 §2 (how-to-play primer): "_successfully_ use" added; immersion exception flagged with cross-ref to P4 §8.
- P4 §8.1: restructured to state the success requirement plainly, then articulate the immersion exception as exactly that.
- No mechanical change - clarification of the locked rule, not a new rule.

---

## 2026-05-12 - Combat resolution clarification: 01 always-crit; 99 included in the matching-dice set

**Context:** During chapter review, the user flagged that the original Combat Resolution decision (2026-05-10) listed the matching-dice values as `11, 22, 33, 44, 55, 66, 77, 88` without `99`, and that `01 is also a critical`. Both were incompletely expressed in the original decision text.

**Decision:** Clarify the matching-dice rule:

- The full matching-dice set is `11, 22, 33, 44, 55, 66, 77, 88, 99` (nine values).
- A roll of **01 is always a Critical Success**, regardless of skill - the traditional BRP "lucky shot" rule, preserved in WSR.
- A roll of **00 is always a Fumble**, regardless of skill (unchanged from the original decision).
- Other matching-dice rolls (11-99) are Critical if within success range (≤ skill), Fumble if outside (> skill).
- At skill 99+, all nine matching-dice values are Criticals. Below skill 99, the higher matching values are Fumbles.

**Band mapping update:** `99` joins Band E (alongside 66, 77, 88). `01` maps to Band A (the lowest band; the lucky-shot tier).

**Reasoning:** The original entry was an incomplete expression of the locked rule. 01-as-always-crit has been the BRP convention since the system's inception; preserving it is appropriate. 99 is naturally a matching-dice value; omitting it from the listed set was an error. Neither change alters mechanical balance - 99-criticals only matter at skill 99+ (rare under the 75% training cap), and 01-criticals replace what would otherwise be ordinary successes at a rate of one in a hundred rolls.

**Implications for downstream work:**

- P1 §2 (outcome-tier summary) and §4 (how-to-play primer) updated to list 99 and the 01 always-crit.
- P4 §2 intro, §2.1 Critical Success, and §2.2 table updated: 99 added to fumble columns at skill ≤98; new row added for skill 99+; 01 and 00 always-rules surfaced.
- PA1 §1.2 band table updated: 99 added to Band E; 01 maps to Band A.
- The PP-buy mechanic is unchanged (it operates on matching-dice values within success range; 01 cannot be bought-from because it is not a matching pair, and 99 can only be bought-to at skill 99+).

---

## 2026-05-12 - Slavery references swept game-wide (extends the profession removal)

**Context:** The earlier 2026-05-12 "Slave or Freedman profession removed" decision dropped the explicit slavery-themed profession. During subsequent chapter review the user flagged additional slavery references across the books - in PC-side examples, Passion examples, profession descriptions, GM advice examples, and the GA1 worked session walkthrough. User directive: "lets not have slavery references in the game please." Per `design.md` §3.2 ("modernised attitudes - pulp-era prejudices will not survive the port"), the topic is out entirely.

**Decision:** Sweep all remaining slavery references across the chapters. Seven replacements:

- **P2 §11** Significant Possession example: "slave collar I cut off" -> "manacle I cut off the night I escaped" (generic captivity)
- **P2 §7** Hate Passion example: "Hatred of slavers" -> "Hatred of the Pit Lords"
- **P2 §5** Gladiator profession description: "slave, freedman, or voluntary" -> "war-captive, condemned criminal, or voluntary"
- **P7 §1** Wealth tier examples: "slave" -> "captive"
- **G1 §2** Internal Complications example: slaver-merchant scenario -> Pit Lord-buyer scenario
- **GA1 §1** GM session walkthrough (Orryn's arc): "Hatred of slavers" -> "Hatred of the Pit Lords" everywhere; Essa's threat reframed from "sold to a labour contractor" to "sold to the Pit Lords"; three line changes total
- **G7 §2** Fallen Empire generator: "They enslaved on a massive scale" -> "They put conquered peoples to the sword or pressed them into legion service"

**Reasoning:** Per the user's directive and `design.md` §3.2. The Pit Lords substitution (illegal arena operators who kidnap people for forced gladiatorial combat) is a clean antagonist replacement - genre-evocative for sword & sorcery, connects to the existing Gladiator profession, provides the same dramatic weight as slaver-antagonists without invoking slavery as such.

**Implications for downstream work:**

- No further slavery references should be introduced in any chapter. **The Pit Lords are now the canonical "kidnap-for-forced-violence" antagonist faction** for example use.
- War-captives, prisoners, and the briefly-imprisoned are NOT slavery references and remain available as character-background framings (the Gladiator profession explicitly includes "war-captive" as one path).

---

## 2026-05-12 - Slave or Freedman profession removed

**Context:** During chapter review the user identified slavery as a "murky area" they wish to avoid in the game. The "Slave or Freedman" profession in P2 §5 contained explicit slavery framing in its description ("Born into bondage, or freed from it...") and design-note sidebar ("a household slave to a sorcerer knows different things than a galley slave..."). Per `design.md` §3.2 ("modernised attitudes" - "the genre's regrettable... attitudes do not survive the port"), this is exactly the pulp-era content the system avoids.

**Decision:** **Remove the Slave or Freedman profession entirely.** Profession count drops from 14 to 13. The Outcast profession (an "exile, disgraced, fell from a previous profession" archetype with similar Destitute / flexible-build mechanics) already covers the same character-build space without invoking slavery.

**Reasoning:** Per `design.md` §3.2. The Outcast profession provides a "destitute, varied past, flexible skill spread" build option - removing Slave/Freedman does not foreclose any meaningful character concept. A player who wants to play a character with a hard past (an escaped slave, a forced labourer, a prisoner of war freed in a chaos) can build that as an Outcast with the "former profession" framing they choose.

**Implications for downstream work:**

- P2 §5.1 header changed from "The Fourteen Professions" to "The Thirteen Professions."
- P2 §1 chargen overview row updated.
- P2 Reputation table and Starting Equipment table: Slave/Freedman row removed from each.
- `progress.md` chapter table row updated.
- No other chapters reference this profession; no cross-references to fix.

---

## 2026-05-12 - Cultural backgrounds renamed to archetypes ("serial numbers off")

**Context:** The original eight cultural backgrounds in P2 §4 used real-world labels (Mediterranean Coastal, Levantine City-Dweller, Mesopotamian Urban, Persian Imperial, Steppe Nomad, Northern Tribes, Southern Reaches, Island Peoples) with real-world languages (Greek, Aramaic, Phoenician, Akkadian, Sumerian, Cuneiform, Old Persian) and specific cultural signifiers (satraps, fire temples, ziggurats). This conflicts with the locked "no defined setting" decision (`design.md` §3.2): a player choosing "Levantine City-Dweller" in a Hyborian campaign or homebrew setting carries an incongruous label onto the character sheet.

**Decision:** Rename the cultural backgrounds to setting-agnostic archetypes. The §4 intro now explicitly frames them as **"archetypes, not specific cultures"** that the GM names within the campaign setting.

| Old                    | New                      |
| ---------------------- | ------------------------ |
| Mediterranean Coastal  | The Warm Coast           |
| Levantine City-Dweller | The Walled Cities        |
| Mesopotamian Urban     | The Great River Kingdoms |
| Persian Imperial       | The Vast Empire          |
| Steppe Nomad           | The Horse Folk           |
| Northern Tribes        | The Cold Wilds           |
| Southern Reaches       | The Burning Lands        |
| Island Peoples         | The Scattered Isles      |

Real-world languages also genericised (e.g. "Aramaic" -> "the trading tongue of the cities"; "Cuneiform" -> "river-city script"). Real-world cultural signifiers genericised where too specific ("satraps" -> "provincial governors"; "fire temples" -> "sacred fires"; "ziggurats" -> "stepped temples").

**Reasoning:** Serves `design.md` §3.2 (the GM brings the setting). The archetypes preserve all mechanical content (skills, common items, demeanour) and all genre flavour; only the specific real-world labels are removed. The same archetype can be named differently in different campaigns - Hyborian, homebrew, or otherwise.

**Implications for downstream work:**

- PA2 Examples updated: Khess's background changed from "Levantine City-Dweller" to "The Walled Cities."
- `notes/chapter-mapping.md` P2 entry updated with new archetype names.
- Real-world references elsewhere in the books (P1 introduction's genre primer mentioning "Mediterranean, Levantine, Mesopotamian, Persian, Steppe"; P7 Equipment flavour notes; P3 Skills language and script lists; G1's setting framing) are **intentionally left in place**. They serve `design.md` §1.2 #3 ("ancient world setting - Mediterranean, Levantine, Mesopotamian, Persian, Steppe") as pedagogical signposts for the genre register, not as character-sheet labels. Different rule, different treatment.

---

## 2026-05-12 - Character generation simplified: Choose Placement is the only method

**Context:** The 2026-05-11 decision added Method B (Choose Placement) as an optional alternative to Method A (Rolled in Order). On further reflection, the user chose to simplify by making the choose-placement method the default and only method, removing Method A entirely. **This entry supersedes the 2026-05-11 "two methods" entry.**

**Decision:** P2 §2.1 now offers a single method:

- Roll 3D6 seven times.
- Assign each result to a characteristic of your choice.
- SIZ and INT may not be set below 8.

Method A (in-order rolling with 3-point redistribution) is removed.

**Reasoning:** Per `design.md` §3.1 ("focused, opinionated extraction; the books are opinionated"). Offering two methods adds choice without proportional payoff - players read both, compare, then pick. A single clean method respects the reader's time and reinforces WSR's directness. The chosen method gives players agency over placement, produces no power-level difference from the in-order method, and is faster to teach.

**Implications for downstream work:**

- No other chapter affected. Combat, sorcery, equipment, and chargen-downstream steps read the same final characteristic values.
- The 2026-05-11 entry remains in this log per the append-only convention but is superseded.

---

## 2026-05-10 - Publishing pipeline: GitHub Actions to GitHub Pages (deferred to Phase 3)

**Context:** Phase 2 produces Markdown chapters only (per user direction). The question of how to publish them surfaced when the chapters were complete. User preference: GitHub Actions building a styled site to GitHub Pages, rather than local PDF generation.

**Decision:** **Deferred to Phase 3 (Publishing).** Captured here so the direction is recorded.

The rough shape of Phase 3:

- Chapters remain as canonical Markdown in `chapters/`.
- A GitHub Action (likely Pandoc-based, or a static-site generator) builds the chapters into a styled HTML site.
- Output is published to GitHub Pages.
- Styling: sword-and-sorcery flavoured layout with appropriate typography. Specific theme TBD.
- PDF output may be added to the same pipeline later if desired.

**Reasoning:** Markdown is the canonical source; HTML / GitHub Pages is the published artifact. This keeps the editing workflow simple (Markdown only, lint-clean) and pushes presentation concerns to a separate, automatable pipeline. Deferring to Phase 3 keeps Phase 2 closeout focused on Markdown completeness.

**Implications for Phase 3 planning:**

- Choose a static-site generator (Pandoc + custom HTML, Hugo, MkDocs, Eleventy, etc.) or a direct Pandoc-to-HTML pipeline.
- Design the styling (typography, layout, sidebar treatment, table styling, palette).
- Set up the GitHub Action workflow.
- Configure GitHub Pages deployment.
- Decide whether the repo gets pushed to GitHub at this point (currently local-only).

---

## 2026-05-10 - Phase 2 batch 2 chapter-time decisions (P5, PA1, P3, P7)

**Context:** Phase 2 chapter dispatches for P5 Combat, PA1 Critical Hit Tables, P3 Skills, and P7 Equipment all returned together. Each subagent made local chapter-time decisions that need to be locked because downstream chapters and cross-references depend on them.

**Decisions (locked, en bloc):**

1. **Critical severity band mapping.** P5 and PA1 independently converged on:
   - 11 = Band A (mild)
   - 22 = Band B
   - 33 = Band C
   - 44, 55 = Band D
   - 66, 77, 88 = Band E (devastating)
     The matching-dice value of the roll IS the band selector. Within-band entry selection: 1d10.

2. **Status (skill) and Reputation (mechanic) kept separate** (Option A from `notes/chapter-mapping.md` open decisions). Status = standing within a single community (skill in P3); Reputation = fame across cultures (mechanic in P2).

3. **Major Wounds Table contents** are WSR-original, drafted in P5 §5 (20 results, ancient-world prose, no per-location framing). A critical attack's PA1 result may supersede the Major Wounds Table.

4. **Desperate Action folded into Dying Blows.** A character whose actions are spent when the killing blow lands rolls a Difficult (halved) Stamina roll instead of standard Stamina.

5. **PA1 damage-type scope: 3 tables for now (Slash, Pierce, Krush).** Burn and Grapple have interim rules (Burn = Krush one band lower; Grapple = Krush same band) pending later dispatch.

6. **Currency names: Shard / Dram / Stater / Sun** (4 tiers, ascending). Ancient-world flavoured, culturally non-specific. P7 §1.

7. **Encumbrance: STR-based, 4-band penalty system** (P7 §11). ENC values listed for significant items; trivial items accumulate at 10:1. Light tracking, suitable for theatre-of-mind.

8. **Literacy: 0% base, mandatory speciality-by-script** (P3 Literacy entry).

9. **Martial Arts specialities** named after ancient-world traditions (Pankration, Kalaripayattu, etc.) rather than modern names.

10. **Ride absorbs Chariot driving** (speciality: Chariot driver). Drive (vehicle) skill dropped cleanly.

**Reasoning:** All decisions consistent with locked design.md and prior decisions.md entries. The band mapping in particular is load-bearing for the Combat Resolution decision and is now needed for any chapter that interacts with criticals.

**Implications for downstream work:**

- Future chapter dispatches read `decisions.md` and inherit these.
- Burn and Grapple table dispatches can happen anytime after PA1 is done; interim rules are usable immediately.
- P2 Character Creation (forthcoming) inherits the Status/Reputation split, the currency names, and the encumbrance system.

---

## 2026-05-11 - Character generation: Method B "Choose Placement" added as option

**Context:** During chapter review, the user requested an alternative to the default "rolled in order with 3 points redistribution" characteristic generation method. User text: _"Choosing Characteristic Values (Option): Traditionally, characteristics are rolled in order, with up to 3 points redistributed. Instead, you may roll 3D6 seven times and choose where results go. In this case, SIZ and INT cannot be below 8."_

**Decision:** Add **Method B: Choose Placement** as an optional alternative to Method A (the existing in-order method) in P2 §2.1:

- **Method A (default):** rolled in order using 3D6 / 2D6+6 mix; up to 3 points redistributed after rolling; the original WSR rule, unchanged.
- **Method B (option):** roll 3D6 seven times, assign results to characteristics in any order. SIZ and INT may not be set below 8. No redistribution.

**Reasoning:** Player choice. Method A is reactive (the character emerges through the dice); Method B is authorial (the player designs the character and accepts variance on top). The two methods produce roughly equivalent power levels - Method A's 2D6+6 floors SIZ and INT at 8 automatically; Method B replicates that floor as an explicit constraint because all seven rolls are pure 3D6. Offering both costs nothing and respects player taste.

**Implications for downstream work:**

- No other chapter affected. Combat, sorcery, equipment, and chargen-downstream steps (skills, talents, passions) all read the same final characteristic values whichever method was used.

---

## 2026-05-10 - Fate Point spend menu finalised

**Context:** P4 Action Resolution required the WSR-original Fate Point spend menu (per the locked Combat Resolution and Fate Points = PP decisions). Subagent designed the menu drawing on Pulp Cthulhu's structure as inspiration only (mechanism borrowable, prose WSR-original). User reviewed and confirmed the menu plus three chapter-time rulings.

**Decision:** The Fate Point spend menu and its associated rulings are:

| Option                   | Cost                        | Effect                                                                           |
| ------------------------ | --------------------------- | -------------------------------------------------------------------------------- |
| Re-roll                  | 5 PP                        | Re-roll any one roll; second result is final; no experience checkmark            |
| Trust the Fates          | 5 PP                        | Substitute a Difficult Luck roll (POW×5, halved) for a skill roll                |
| Shrug Off a Blow         | 2 PP per point              | Reduce damage of one attack by 1 point per 2 PP spent (minimum 1 damage remains) |
| Ignore a Fumble          | 6 PP                        | Convert a fumble to ordinary failure; complication does not occur                |
| Stand Your Ground        | 2/4/8 PP escalating         | Prevent incapacitation for one more round (cost doubles each round)              |
| Deflect the Killing Blow | All remaining PP (min 8 PP) | Survive a killing blow; drop to 1 HP, fall unconscious but alive                 |
| Steady Blade             | 3 PP                        | Ignore all situational penalties on one roll this round                          |
| Rally From the Wound     | 8 PP                        | Immediately recover 1D6 HP; once per scene                                       |

Confirmed chapter-time rulings:

- **Deflect the Killing Blow** minimum cost is 8 PP (calibrated to WSR's smaller PP pools, max POW typically 10-16).
- **Shrug Off a Blow** cannot reduce damage below 1 (preserves the fiction of being struck).
- **Rally From the Wound** limited to once per scene (prevents HP-battery abuse).

**Reasoning:** Per the locked Fate Points = PP decision. The menu is WSR-original; Pulp Cthulhu's spend categories provided the framework but every option is rewritten for WSR's smaller pool sizes (max ≈ POW) and tonal register. The PP-buy mechanic for criticals (per the Combat Resolution decision) is documented in P4 §3 separately from this menu.

**Implications for downstream work:**

- P5 Combat references this menu for in-combat spends.
- G2 NPCs and Adversaries notes that mooks have no Fate Point access.
- The PP-buy mechanic for criticals is detailed alongside this menu in P4 §3.

---

## 2026-05-10 - Healing magic revision: rare and costly, not absent

**Context:** The original design doc stated "No healing magic" (`design.md` §1.3 and §2.2). The Magic dispatch (`notes/source-8-magic.md`) flagged BRP Magic's Heal spell as a mandatory drop on this basis. The user amended this position: healing magic IS permitted, as long as it is not the _expected_ or _default_ way to heal.

**Decision:** Revise the position on healing magic:

- **Routine healing magic remains rejected** - no white mage Cure spells, no out-of-combat heal-to-full mechanics, no D&D-style hit-point batteries.
- **Sorcerous healing is permitted** as rare, costly, dramatic spells in the Sorcery list. Examples could include "Mend the Mortal Frame" (sorcerer pays Corruption / PP / patron debt to knit a wound) or "Vampire's Kiss" (heal yourself by draining another character's vitality).
- **Naturalistic healing remains the default** - herbs, rest, salves, time. The Player Book's healing rules are built around this; sorcerous healing is a chapter-time addition to the Sorcery spell list, not a separate healing chapter.
- `design.md` §1.3 and §2.2 wording updated to reflect this.

**Reasoning:** Per the user: "I think it is OK to have healing magic as long as it's not expected that this is the main way to heal in the game." The genre-fit case is strong - Howard's Conan stories use healing potions and salves; Moorcock's Elric draws health from Stormbringer at terrible cost; Leiber has tavern wenches with herbal cures. The locked sorcery cost architecture (PP / Patron / Corruption) already enforces cost, so healing-themed sorcery spells fit cleanly without a new mechanic.

**Implications for downstream work:**

- The Sorcery spell list (P6) may include 1-3 healing-themed spells, each paying the standard sorcery cost.
- The dropped secondary Magic system (`decisions.md` 2026-05-09 "Magic (secondary system) dropped") remains dropped - this revision is about Sorcery, not about reviving the alternate system.
- The Hazards chapter (G6) and Equipment chapter (P7) keep naturalistic healing (herbalism, salves, etc.) as the default mechanism.

---

## 2026-05-10 - Chapter extraction order finalised

**Context:** Phase 1 produced the chapter mapping (`notes/chapter-mapping.md`). Sequencing the extraction order for Phase 2 requires balancing dependencies (chassis-first), risk (new mechanics need early validation), and value (a playable subset emerges quickly).

**Decision:** Extraction order is set as recorded in `progress.md`'s "Phase 2: Chapter Extraction" table.

**Player Book (in order):**

1. P4 Action Resolution
2. P5 Combat
3. PA1 Critical Hit Tables
4. P3 Skills
5. P7 Equipment
6. P6 Sorcery
7. P2 Character Creation
8. P1 Introduction
9. PA2 Examples

**GM Book (in order):** 10. G1 Running the Game 11. G2 NPCs and Adversaries 12. G4 NPC Sorcery and Patrons 13. G3 Bestiary 14. G5 Treasure and Artifacts 15. G6 Hazards and Spot Rules 16. G7 The Deep Past 17. GA1 GM Examples

**Reasoning:**

- **Chassis first.** P4 Action Resolution is the foundation everything references. Must be first.
- **High-risk early.** P5 Combat locks our biggest new mechanic (matching-dice criticals + weapon-type crit tables). Drafting it second surfaces design problems while there is still time to recover.
- **Heavy prose content immediately follows.** PA1 Crit Tables is 150-250 prose entries - tackling it third validates the combat mechanic with actual content under load.
- **Reference chapters next.** P3 Skills and P7 Equipment establish the vocabulary Character Creation will use.
- **Sorcery before Chargen.** P6 must be drafted before P2 because chargen for sorcerer-archetype PCs depends on the sorcery rules being concrete.
- **Introduction and Examples last.** They synthesise the rest.
- **Player Book before GM Book.** A playable subset emerges as soon as the Player Book chapters are done; the user can run sessions before the GM Book is complete.

---

## 2026-05-10 - GM Book chapter G8 (Sample Material) dropped; sample adventures deferred to separate product

**Context:** During chapter mapping (Task 3 of Phase 1, output `notes/chapter-mapping.md`) the proposed GM Book chapter G8 "Sample Material" (sample city, cult, ruin, patron NPC, short scenario) was flagged as conditional because it risked implicit setting creep against the locked "no defined setting" position (`design.md` §3.2).

**Decision:** **Drop G8 from the GM Book.** The core Player Book and GM Book remain setting-light. They provide tools (GM Book G7 generators for fallen empires, cataclysms, ruins; G2 NPC creation; G4 patron design) but no specific named content.

**Future commitment:** Sample adventures and setting fragments will be packaged as a **separate product (or supplement)** released after the core Player Book and GM Book ship. Likely contents: a sample port city, a sample cult, a sample lost ruin, a sample fully-detailed patron NPC, and a short one-shot scenario. Format: either bundled as a single supplement or released as small individual PDFs.

**Reasoning:** Per `design.md` §3.2 ("the GM brings the setting") and the established borrowing principle that the books are opinionated and focused. Sample material in the core books undermines that discipline. Packaging it separately preserves the purity of the core release while acknowledging the genuine onboarding value of sample content for new GMs.

---

## 2026-05-10 - Borrowing principle: mechanisms only from non-ORC sources

**Context:** The project is now mining four BRP-derived sources beyond BRP UGE itself: Pulp Cthulhu, Delta Green Agent's Handbook, RuneQuest Weapons & Equipment, and Rolemaster Arms Law. Of these, **only BRP UGE is ORC-licensed**. The others are commercial copyright (Chaosium / Arc Dream / Iron Crown).

**Decision:** Establish the working principle for cross-source borrowing:

- **BRP UGE content:** may be reproduced largely verbatim under the ORC License with proper attribution.
- **Non-ORC sources** (Pulp Cthulhu, Delta Green, Rolemaster Arms Law; RuneQuest W&E status to be verified): **mechanisms are borrowable, but rules text and tables must be WSR-original.** We do not reproduce stat blocks, table contents, or rules paragraphs verbatim.
- **For each non-ORC borrow:** cite the source mechanism in `decisions.md`; write the WSR rule in our own words; author WSR-original tables and entries.

**Reasoning:** Game mechanics are not copyrightable; specific expression is. Re-implementing the _idea_ (e.g. "mooks are incapacitated at half HP") in WSR-original prose is legally clean. Reproducing a table verbatim or copying a rules paragraph is not. This principle protects the project at publication time and keeps every borrowed mechanic's lineage transparent in the decision log.

---

## 2026-05-10 - Mook rule: borrow Pulp Cthulhu mechanism

**Context:** BRP UGE has no native mook handling. Both `notes/source-5-combat.md` and `notes/source-14-npc-digest-customizing.md` confirmed the gap. `notes/pulp-cthulhu.md` found a clean, two-paragraph borrow.

**Decision:** Adopt the Pulp Cthulhu mook mechanism (mechanism only, WSR-original rules text):

- A mook is automatically **incapacitated** when reduced to half their hit points by any combination of hits. No further damage rolls or wound effects.
- Mook stat blocks use averaged characteristics. Mooks have no Fate / Power Pool to spend on luck.
- "Look Out Master!" - a villain may spend their remaining PPs to have a nearby mook take a hit instead, killing the mook.

**Reasoning:** Per `design.md` §2.3 ("ordinary foes go down quickly and don't drag fights out") and §3.1 ("rules text uncluttered"). Mooks are simpler, not more complex. Look Out Master is dramatic and reinforces villain PP depletion as a pacing tool.

---

## 2026-05-10 - Talent system: borrow Pulp Cthulhu structure

**Context:** Character distinctiveness without classes (per `design.md` §3.1) is a watch-item. `notes/source-2-characters.md` flagged BRP UGE's distinctiveness mechanisms as "shallow without Passions." `notes/pulp-cthulhu.md` identified Pulp Talents as "better than anything in BRP UGE" - 4 tables of 10 talents each, choose 2 at chargen, talents gate PP spends.

**Decision:** Borrow the **Pulp Talents structural model** (mechanism only, WSR-original talent list):

- Multiple themed tables of talents (likely 4 tables, ~10 talents each: Combat / Sorcery / Stealth & Finesse / Social & Cunning - exact tables defined during chapter drafting).
- Each PC chooses 2 talents at chargen, with structural constraints (e.g. one per allowed table; sorcerer-only talents restricted to sorcerer PCs).
- Each talent enables a specific PP-spend ability (exact costs and effects designed in Phase 2).
- Additional talents may be earned through play.

**Reasoning:** Per `design.md` §3.1 (character distinctiveness watch-item). The combinatorial structure (4 tables of 10 = 780 unique 2-talent pairs) creates strong PC differentiation without classes. PP-gated activations compound with the locked Fate Points = PP architecture - every talent spend competes with sorcery, luck, and crit-buying.

---

## 2026-05-10 - Equipment chapter: borrow extensively from RuneQuest W&E

**Context:** `notes/source-13-equipment.md` found BRP UGE's equipment chapter ~70% out of scope, with major gaps: no mundane gear list, no ancient currency, only bare-minimum mounts/vehicles. `notes/runequest-weapons-equipment.md` provides extensive ancient-world content that fills these gaps.

**Decision:** Borrow extensively from RuneQuest W&E (mechanisms and category structures only - WSR-original tables):

- **Mundane gear:** WSR-original tables across 9 categories (clothing, tools, writing supplies, containers, light sources, rope, adventuring supplies, food/drink, herbs, musical instruments). Stats: cost (in WSR coins), ENC.
- **Currency:** WSR-original 4-tier coin system (denominations and names TBD during chapter drafting; ancient-world-flavored).
- **Weapons:** add ~11 weapons missing from BRP UGE that RuneQuest covers (khopesh, falchion, whip, combat net, composite bow, etc.) - WSR-original stat blocks.
- **Armour:** expand with RuneQuest's ancient-world types (linothorax, gambeson, lamellar variants) - WSR-original AP values, converted from per-location to single-AP per the locked Major Wounds decision.
- **Material tiers:** adopt copper / bronze / iron quality tiers as a WSR mechanism (damage and durability variations).
- **Mounts, vehicles, watercraft:** WSR-original tables for the categories RuneQuest provides.
- **Hirelings, inn prices:** WSR-original price tables, structure inspired by RuneQuest.

**Reasoning:** Per `design.md` §1.2 #3 ("ancient world setting") and §3.1 ("Equipment is bronze-and-iron-age"). RuneQuest is BRP UGE's closest cousin and fills our equipment gaps with genre-coherent material we would otherwise design from scratch.

---

## 2026-05-10 - Iron-vs-sorcery rule: borrow

**Context:** RuneQuest W&E's iron-vs-sorcery penalty (`notes/runequest-weapons-equipment.md`) imposes -5% sorcery skill per ENC of unenchanted iron carried. The mechanic was flagged as genre-resonant and complementary to the locked sorcery cost architecture (PP / Patron Score / Corruption).

**Decision:** Adopt the iron-vs-sorcery penalty (mechanism only, WSR-original rules text):

- Carrying unenchanted iron disrupts sorcery. Each ENC of unenchanted iron borne by the sorcerer imposes a **-5% penalty on all sorcery rolls**.
- Enchanted iron items (ritually consecrated to a patron, or otherwise harmonised with the sorcerous current) do not impose this penalty.
- Bronze, copper, stone, leather, wood etc. carry no penalty.

**Reasoning:** Per `design.md` §2.2 ("magic is alien, costly, and corrupting"). "Cold iron disrupts magic" is canonical to sword & sorcery (Howard, Moorcock, folklore broadly). Mechanically it gives sorcerer PCs another visible reason to travel light, eschew armour, and depend on bronze - a real difference between sorcerer and warrior PCs at the table.

---

## 2026-05-10 - Combat resolution: matching-dice criticals + weapon-type tables; matching-dice fumbles

**Context:** BRP UGE uses a percentile system with five outcome tiers: Critical (1/20 of skill), Special (1/5 of skill), Success, Failure, Fumble. The Special and Critical tiers carry weapon-type damage results. The Special-Success calculation (1/5 of skill) is mental-arithmetic-heavy at the table. We considered replacements after reviewing Delta Green's matching-dice mechanism (`notes/delta-green.md`), Rolemaster Arms Law's per-weapon critical tables (`notes/rolemaster-arms-law.md`), and an audit of where Special Success has mechanical effect outside combat (`notes/special-success-audit.md`, verdict: mostly combat, with five clean non-combat exceptions).

**Decision:** Replace BRP UGE's Critical + Special two-tier ladder with a **single Critical tier triggered by matching dice within success range**, plus weapon-type critical tables for the effects. Fumbles use the Delta Green matching-dice trigger.

Specifically:

- **Critical trigger:** a roll that is both a success (≤ skill) AND a matching-dice value (11, 22, 33, 44, 55, 66, 77, 88). At skill 30, only 11 and 22 crit; at skill 90, all eight do. (00 is not a critical - it's the always-fumble.)
- **Fumble trigger:** 00 OR a matching-dice failure (where the roll is > skill). At skill 30, rolls of 33, 44, 55, 66, 77, 88, 99 fumble (plus 00).
- **PP-buy mechanic:** a player who rolled a normal success may spend Power Points equal to `(current_roll - nearest_lower_matching-dice_value)` to convert their roll to that critical. The double must still be within their success range (≤ skill). A failed roll cannot be PP-bought into a critical.
- **Effects:** weapon-type critical tables inspired by Rolemaster Arms Law, with severity bands A-E (mapping to roll bands within the success range - the higher the matching-dice value, the more powerful the band). WSR-original prose results per band. Damage types initially: Slash, Pierce, Krush. Possibly Burn and Grapple if scoped.
- **Non-combat criticals:** five BRP UGE skills had numerically meaningful Special Success effects (First Aid, Medicine, Teach, Cooperative Rolls, Jump). Under the new model their previous Special Success outcomes simply become their Critical outcomes - no new mechanics, just explicit "Critical:" rulings in the Skills chapter.

**Reasoning:**

- **Simpler arithmetic** at the table: matching dice is recognised at a glance vs. computing 1/5 of skill. Serves `design.md` §3.1 (theatre-of-mind, lean rules).
- **Skill-scaled criticality** without lookups: a higher-skill character has more matching-dice values within their success range, so they crit more (and fumble less) automatically.
- **PP-buy is a meaningful new use** for Power Points, compounding with the locked Fate Points = PP architecture and the Patron Score / Corruption layers. Sorcerer PCs face an even sharper tradeoff: spend PP to push for a critical, leave less for spells.
- **Per-weapon-type crit tables** preserve and _expand_ what BRP UGE's Special Success carried (weapon-type damage flavor). They serve `design.md` §2.3 ("muscular, decisive, brutal") at a much higher resolution.
- **Rolemaster Arms Law is INSPIRE ONLY**: adopt the A-E band concept and prose result format, not the resolution chassis. WSR-original tables (estimated 150-250 prose entries to author across damage types).
- **The five non-combat skills** are well-bounded; collapsing their Special Success effects into Critical effects is a clean port (per `notes/special-success-audit.md`).

**Implications for downstream work:**

- Combat chapter (Player Book) describes the matching-dice trigger, fumble trigger, PP-buy mechanic, and how to read the crit tables.
- Crit tables themselves live in an appendix or dedicated end-of-Player-Book section (Phase 2 prose work, sized 150-250 entries).
- Five non-combat skills (First Aid, Medicine, Teach, Cooperative Rolls, Jump) carry one-line "Critical:" rulings in the Skills chapter.

---

## 2026-05-09 - Magic (secondary system) dropped entirely

**Context:** BRP UGE Chapter 4 has two magic systems: Sorcery (pp 87-102, our primary) and Magic (pp 56-70, the alternative). The Magic dispatch (`notes/source-8-magic.md`) recommended keeping ~5-9 spells as a "hedge magic" sub-system for cunning-folk archetypes, while a hard drop was option A.

**Decision:** **Drop Magic entirely.** WSR has one magic system: Sorcery.

**Reasoning:** Per `design.md` §3.1 ("focused, opinionated extraction") and §3.2 ("maximise optional rules" - we will not). Keeping a second magic system, even a minimal one, adds complexity without proportional payoff. The cunning-folk / village-wisewoman archetype can still exist in fiction without dedicated mechanics - using sparing sorcery, herbal healing (per §1.3), and personality. The Vision spell from Magic is genre-resonant; if a Sorcery equivalent is missed, port it into the Sorcery spell list during chapter drafting.

---

## 2026-05-09 - Allegiance canonised as optional Patron Score for sorcerers

**Context:** The Allegiance dispatch (`notes/source-9-allegiance.md`) recommended canonising Allegiance as a stripped, renamed Patron Score mechanic restricted to sorcerers, addressing the "patron debt" sorcery cost option without WSR-original design. The PP reserve benefit interacts beautifully with the locked Fate Points = PP decision.

**Decision:** **Canonise Allegiance** as the Patron Score mechanic, with the proviso that **patrons are an optional facet of sorcery** - a sorcerer can choose to enter a patron compact (gaining the mechanical benefits and burdens) or remain unaligned. Apotheosis is deferred to GM Book optional arcs.

**Reasoning:** Per `design.md` §2.2 ("debts to powers" as one cost option). Keeping it optional preserves player choice: not every sorcerer is Elric. Some are independent operators who borrow power without committing. Mechanically: the Patron Score mechanic appears in the Player Book as an opt-in chargen choice for sorcerer-archetype PCs.

---

## 2026-05-09 - Sanity adopted as sorcerer-specific Corruption track

**Context:** The Sanity dispatch (`notes/source-12-sanity.md`) recommended adopting SAN as a sorcerer-specific corruption track (Option B), restricted to sorcerers and reframed away from cosmic horror toward Moorcock-doom corruption. Non-sorcerers would have no track at all.

**Decision:** **Adopt SAN as a sorcerer-specific Corruption track.** Non-sorcerers have no Corruption track - their genre register is Howard's blood-and-bone, not Lovecraft's shattered psyche. Sorcerers accumulate Corruption through casting, demonic encounters, and exposure to the deep past. The "Blasphemous Lore caps max SAN downward" rule is preserved (deeper sorcery = closer to the edge). The "defeating the source" recovery rule is canonised.

**Reasoning:** Per `design.md` §2.2 ("magic is alien, costly, and corrupting") and §1.1 (Moorcock-doom accent for sorcerous scenarios). Restricting to sorcerers keeps warriors and rogues tonally Howard while letting sorcerers tip into Moorcock's doom. Together with Fate Points = PP and the Patron Score canonisation, this completes the sorcery cost architecture: PP (immediate, shared with Fate), Patron Score (relational, optional), Corruption (permanent, sorcerer-only).

---

## 2026-05-09 - Combat: Major Wounds as default, no per-location HP

**Context:** BRP UGE explicitly states hit locations and Major Wounds are mutually exclusive systems. The Combat dispatch (`notes/source-5-combat.md`) confirmed this. We needed to pick one as the WSR default and decide whether to keep the other as an optional rule.

**Decision:** Adopt **Major Wounds as the canonical wound system**. Per-location HP is **not** included, even as an optional rule. Creature Hit Location Tables (pp. 299-303 of the source) are dropped accordingly.

**Reasoning:** Major Wounds aligns with `design.md` §2.3 (combat aesthetic - "muscular, decisive, brutal"): a single threshold that can drop a PC creates the right cinematic threat without per-location bookkeeping. Per-location HP hurts theatre-of-mind play (§3.1) and adds tactical complexity that requires rules-mastery rather than fictional engagement (§3.1). Per `design.md` §3.1 ("focused, opinionated extraction") and §3.2 ("maximise optional rules" - we will not), the book is opinionated. We do not preserve per-location HP as optional.

---

## 2026-05-09 - Fate Points share the Power Point pool

**Context:** `notes/source-gaps-batch1.md` confirmed (per the source rules at pp. 133-134) that BRP UGE's Fate Points draw from the same Power Point pool as sorcery. There is no separate Hero / Luck point pool. The choice was: keep this asymmetry, or design a separate pool so every PC has equal access to luck spends.

**Decision:** Adopt the source-default behavior - **Fate Points share the PP pool with sorcery**. No separate Hero Point pool. The asymmetry between sorcerer and non-sorcerer PCs is intentional.

**Reasoning:** The shared pool creates a meaningful sorcerer-vs-non-sorcerer tension that is genre-coherent. Per `design.md` §2.2 ("every step into [sorcery] costs something"), every PP a sorcerer spends on a spell is a PP not available to deflect a killing blow - and vice versa. The asymmetry is a _feature_: sorcerer PCs face a real cost-of-luck tradeoff their warrior and rogue companions don't. This also satisfies §3.1 ("stay faithful to BRP's identity") without requiring a parallel mechanic.

---

## 2026-05-09 - Design doc v1 workshopped

**Context:** Needed a "north star" defining the genre, aesthetic, design goals, and player experience before starting chapter-by-chapter extraction.

**Decision:** Workshopped and committed initial `design.md` covering Sections 1-4. Howard-centred sword & sorcery with Leiber-and-Moorcock accents; ancient-world setting with deep cyclic history; pulp-but-mortal tone; costly alien sorcery; theatre-of-mind combat with depth via BRP texture; Player Book / GM Book split; standalone publication under the ORC License.

**Reasoning:** Locking in genre and design intent now prevents drift during the per-chapter extraction work. Each canonise/drop/modify decision will be made against `design.md` as the rubric. Open questions (sorcery cost mechanic, mook rules, death and replacement, lightweight-vs-tactical tension, GM-Book scope, sample setting fragments) are explicitly deferred to chapter-time so we don't design ahead of the source material.

---

## 2026-05-09 - System name: Warrior \* Sorcerer \* Rogue

**Context:** Needed a name that signals sword & sorcery to a player picking the book off a shelf, without locking the system to one author's iconography.

**Decision:** Adopt **Warrior \* Sorcerer \* Rogue** as the system name. Folder and filenames use the kebab-case form `warrior-sorcerer-rogue`.

**Reasoning:** The triad maps cleanly to the three literary inspirations (warrior → Howard, sorcerer → Moorcock, rogue → Leiber) while remaining mechanically agnostic - BRP is classless, and these are _archetypes_, not character classes. The form has rhythm, is easy to remember, and tells a player exactly what kind of game they're holding. Considered alternatives leaned too far into one author's tone ("Smoke & Sorcery" was very Leiber; "Black Sword" was very Moorcock) at the cost of misrepresenting the others.

---

## 2026-05-09 - Source rules: BRP UGE under ORC License

**Context:** Needed an open, permissive ruleset to build on. Wanted a percentile, skill-based system whose mechanics already feel close to the genre.

**Decision:** Use Chaosium's Basic Roleplaying Universal Game Engine (BRP UGE) as released under the ORC License. Source PDF lives in `source/`.

**Reasoning:** BRP is the engine behind Stormbringer/Elric! and the original Conan d20 successors' percentile cousins - the lineage is already aligned with sword & sorcery. The ORC License grants the freedom to remix and republish without negotiating terms. Going classless and skill-based suits the genre's preference for archetype-over-class.

---
