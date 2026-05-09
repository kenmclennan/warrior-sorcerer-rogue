# Source Notes: Pulp Cthulhu (Chaosium, 2016/2020)

**Reviewer:** Research subagent
**Date:** 2026-05-09
**PDF:** `source/pulp-cthulhu.pdf`
**Pages read:** 1-10 (TOC/intro), 60-79 (Chapter 4: Game System + Chapter 5: Pulp Sanity), 15-34 (Chapter 2: Creating Pulp Heroes), 90-99 (Chapter 7: Running Pulp Games), 121-134 (Chapter 9: Villains and Generic Characters)

---

## Summary

Pulp Cthulhu is a 2016/2020 Chaosium supplement layered on top of Call of Cthulhu 7th Edition. It is not ORC-licensed - it is Chaosium copyright, all rights reserved. Nothing here can be copied verbatim into WSR; material must be adapted and rewritten. The rules are nonetheless BRP-derived and structurally compatible with WSR's foundation.

The supplement delivers exactly what WSR needs on all three priority fronts:

1. **Mook rules: found, complete, and minimal.** One paragraph, one average stat block. Highly portable.
2. **Luck mechanic: found in full detail.** Luck is a separate characteristic pool, NOT drawn from Power Points. This directly informs the WSR Fate Points decision.
3. **Pulp archetypes: 22 archetypes across warrior/rogue/mystic/specialist lines**, with occupation lists and Pulp Talents tables. Strong inspiration resource for WSR's profession design.

Chapters skipped as instructed: Chapter 5 (Pulp Sanity) was read for structural awareness but its Mythos-specific insanity mechanics are not WSR-relevant. Chapter 6 (Magic/Psychic Powers/Weird Science) skipped entirely. Chapters 8 (1930s setting), 10-14 (scenarios) skipped entirely.

---

## Priority 1: Mook Rules

### Location
Chapter 4: Game System, p. 63 (under the "Mooks" heading, immediately following the "Dirty Tricks: Using Luck with Non-Player Characters" section).

### The Full Mechanic

The mook rule in Pulp Cthulhu is exactly two paragraphs and one stat block. The entire rule is:

> "Mooks are non-player characters with average characteristics and skills. Those with above average characteristics are, in the main, not to be considered mooks as they are probably important to the plot, and so should pose a greater threat to the heroes."
>
> "Allow mooks to be automatically incapacitated when reduced to half their hit points. This results in mooks being far less effective, allowing the heroes to focus on the major villains."

**That's it.** The mechanic is a single threshold rule: any hit that reduces a mook to half hit points or below automatically incapacitates them. No further rolls required. They are out of the fight.

### The Average Mook Stat Block

Pulp Cthulhu provides a generic "Average Mook" stat block:

| Stat | Value |
|------|-------|
| STR | 40 |
| CON | 50 |
| SIZ | 50 |
| DEX | 45 |
| INT | 30 |
| APP | 30 |
| POW | 30 |
| EDU | 10 |
| HP  | 10 |
| MP  | 6 |
| Luck | N/A |
| DB   | 0 |
| Build | 0 |
| Move | 7 |

**Attacks per round:** 1
- Brawl 35% (17/7), damage 1D3
- Shotgun 12-gauge 40% (20/8), damage 4D6/2D6/1D6
- Thompson SMG 30% (16/6), damage 1D10+2
- .32 auto 40% (20/8), damage 1D8
- Dodge 25% (12/5)

**Armor:** none. **Skills:** none.

The "Luck: N/A" entry is significant: mooks explicitly have no Luck pool and cannot spend Luck to avoid death. This is how the system distinguishes mooks from named characters mechanically, not just narratively.

### Additional Mook Mechanic: "Look Out Master!"

A second mook-adjacent mechanic appears in the NPC Luck section (p. 63). This is a villain Luck spend, not a mook rule per se, but it directly affects mooks in play:

> **Look Out Master! - Cost: all Luck points**
> If a hero is engaged in combat with an important villain and scores a hit, the villain may burn all of their Luck to have a nearby mook (within 2 yards) throw themselves in front of the hero's attack - effectively taking the hit. The mook is instantly killed or incapacitated by the attack.

This mechanic creates a use case for mooks as living shields in climactic villain encounters. It costs the villain their entire Luck pool, so it is a one-time desperation move.

### Integration Cost Assessment

**Very low.** The Pulp Cthulhu mook rule is:
- Self-contained: no dependencies on other Pulp Cthulhu subsystems
- No references to sanity, psychic powers, weird science, or any Mythos-specific mechanics
- Uses only HP, which BRP (and therefore WSR) already tracks
- The "Average Mook" stat block translates directly to BRP UGE stats

The only mechanical question for WSR is how the half-HP incapacitation interacts with WSR's locked wound system (Major Wounds = single blow at HP/2+). In BRP UGE / WSR, a mook with 10 HP is already at risk of a Major Wound from any single hit that deals 5+ damage - which is most weapon hits. The mook rule as written (cumulative damage to half HP) and the Major Wound rule (single blow at HP/2) would both trigger around the same threshold but via different routes. This needs a WSR-specific clarification.

### WSR-Fit Assessment

**Direct port with minor adaptation.** The mook rule is genre-perfect for WSR (design.md §2.3: "soldiers, thugs, and city guards are sketches of combatants, designed to be dispatched"). The one-paragraph mechanic solves the confirmed gap from source-5-combat.md and source-14-npc-digest-customizing.md with minimal overhead, which matches design.md §3.1 (GM-facing rules stay lean).

**Recommended WSR version:**

Strip the Luck N/A notation (WSR has no Luck characteristic), but preserve the core rule:

> Mooks are ordinary foes - soldiers, bandits, city guards, hired thugs - with no exceptional characteristics. Reduce mooks to their essentials: one weapon skill, Dodge, and HP. A mook who takes damage equal to or greater than half their HP total (from any combination of hits) is automatically incapacitated - knocked out, driven off, or dead, as the fiction demands. No further rolls required. Named or exceptional foes are never mooks; they fight to full BRP resolution.

The "Look Out Master!" mechanic is also worth porting for WSR's major villain encounters, renamed to something like "Take the Hit" or "Expendable."

**Stat block calibration for WSR mooks (ancient-world adaptation of Average Mook):**
The Pulp Cthulhu Average Mook (HP 10, primary weapon 35-40%, Dodge 25%) translates cleanly. For WSR, the equivalent would be a Bandit or Guard with: HP 10, primary weapon (Short Sword or Spear) 35-40%, Dodge 25%, no armor or 1-pt. hide/leather. This matches the BRP UGE Thug stat block from notes/source-14-npc-digest-customizing.md with weapon substitution.

---

## Priority 2: Pulp Luck / Hero Point Mechanic

### Critical Finding: Luck is a Separate Characteristic Pool

**Pulp Cthulhu Luck is NOT drawn from Power Points (Magic Points in CoC/Pulp Cthulhu terminology).** It is an entirely separate characteristic.

**Generation:** Luck is rolled as 2D6+6 x 5 at character creation, giving a starting range of 40-90. It is recorded separately from all other characteristics and tracked independently.

**Magic Points** (the CoC equivalent of BRP's Power Points) are equal to one-fifth of POW - exactly as in BRP UGE. Luck and Magic Points are two completely different pools that never interact.

This is the opposite of WSR's locked decision. WSR has decided that Fate Points share the PP pool (decisions.md, 2026-05-09). Pulp Cthulhu's Luck has its own dedicated pool. This means Pulp Cthulhu's Luck design cannot be borrowed as-is for WSR - the pool architecture is different by design decision.

### How Luck Works in Pulp Cthulhu

**Spending:** Luck points are spent by the player to affect outcomes. Points are deducted from the Luck score, reducing both the current pool and the chance of future Luck rolls.

**Recovery:** At the start of each new session, players make a Luck Recovery roll: roll 1D100 against current Luck score. If the roll exceeds current Luck (i.e., a failure), add 2D10+10 points. If equal to or less (a success), add only 1D10+5. Maximum is 99; excess is lost. Starting Luck value is not used again.

**What Luck Can Buy (player spends):**

| Spend | Effect |
|-------|--------|
| 1 per point | Adjust any skill or characteristic roll on a 1-for-1 basis (no limit except available Luck) |
| 10 points | Ignore a weapon fumble or firearm malfunction result |
| Double the Sanity loss | Halve the Sanity point loss from a failed Sanity roll |
| 1 point (doubles each round) | Avoid unconsciousness for one round; cost doubles each successive round (1, 2, 4, 8...) |
| 20 points | Gain 1D6 hit points immediately ("It's Only a Scratch!") |
| All remaining Luck (30 minimum) | Avoid certain death: hero regains 1D6+1 HP, "turns up in the next scene," player narrates escape ("Avoiding Certain Death") |

**What Luck Cannot Buy:**
- Luck rolls themselves
- Damage rolls
- Results of a pushed roll
- Sanity rolls (only the loss, not the roll)
- Skill experience checks

**NPC Luck:** Important NPCs have Luck equal to their POW score. Subordinate NPCs may have half-POW. Mooks have no Luck. NPC Luck does not reset between sessions - it is a finite resource. Only the main villain (if recurring) may refresh Luck between scenarios.

**Critical Success Note:** Using Luck to reduce a roll to "01" always produces an Extreme success rather than a Critical Success in combat ties.

### WSR Relevance

The architecture is instructive even though it contradicts WSR's locked decision:

1. **WSR's decision is correct for genre reasons.** The shared PP pool creates the warrior/sorcerer asymmetry that design.md §2.2 describes as a feature. Pulp Cthulhu's separate Luck pool gives all characters equal access to luck spending, which flattens the distinction. WSR intentionally preserves the tension.

2. **The Luck spend menu is highly useful as a design reference.** WSR's Fate Points will need a spend menu. Pulp Cthulhu's is well-tested and covers the right space: adjusting rolls, avoiding fumbles, staying conscious, avoiding death. The "avoiding certain death" spend (all remaining PP, minimum 30 in WSR terms) is particularly WSR-appropriate.

3. **The recovery mechanic is relevant.** Pulp Cthulhu recovers Luck between sessions via a skill-roll-style check. WSR's PP recovery is already defined (natural recovery over time, rest). If Fate Points = PP, they recover on the same schedule. This is more punishing than Pulp Cthulhu's per-session recovery roll - but that is genre-appropriate for WSR's "mortality is real" tone.

4. **NPC Luck = POW is a clean design note.** For WSR, named antagonists having Fate Points = their POW (same as all characters) is already implied. The Pulp Cthulhu explicit statement ("major NPC's Luck score is normally equal to their POW characteristic") validates this as a clean design convention.

### Spend Menu to Borrow for WSR Fate Points

The following Pulp Cthulhu Luck spends translate cleanly into WSR Fate Point spends (with PP pool substitution):

- **Adjust a roll:** spend PP on a 1-for-1 basis to improve any skill or characteristic roll. No per-roll cap in Pulp Cthulhu (though an optional rule caps at 10 or 25 per roll).
- **Ignore a fumble:** 10 PP. Clean, appropriate for WSR.
- **Avoid unconsciousness:** 1 PP, doubling each round. WSR's CON roll to stay conscious after a Major Wound would use this.
- **Instant HP recovery:** 20 PP for 1D6 HP ("rallying from the wound" - Conan fighting on despite injury). Strong genre fit.
- **Avoid certain death:** all remaining PP (minimum 30) for 1D6+1 HP and narrative survival. The genre's "walked away from what should have killed him" moment.

---

## Priority 3: Other Useful Material

### Pulp Archetypes (Character Distinctiveness)

Chapter 2 presents **22 named archetypes** as shorthand character concepts. Each archetype provides:
- A core characteristic (highest stat for the concept)
- 100 bonus skill points to distribute among a named list of thematic skills
- Suggested occupations (profession templates)
- 2 Pulp Talents (special abilities from four tables)
- Suggested personality traits

**The 22 archetypes:**

| Archetype | Core Stat | WSR Analog |
|-----------|-----------|------------|
| Adventurer | DEX or APP | Warrior/Rogue blend |
| Beefcake | STR | Warrior (brute) |
| Bon Vivant | SIZ | Social rogue |
| Cold Blooded | INT | Assassin type |
| Dreamer | POW | Sorcerer-adjacent |
| Egghead | INT or EDU | Scholar/sage |
| Explorer | DEX or POW | Wilderness warrior |
| Femme Fatale | APP or INT | Social rogue |
| Grease Monkey | INT | Artisan/craftsman |
| Hard Boiled | CON | Street warrior |
| Harlequin | APP | Trickster rogue |
| Hunter | INT or CON | Wilderness warrior |
| Mystic | POW | Sorcerer |
| Outsider | INT or CON | Barbarian/exile |
| Rogue | DEX or APP | Rogue |
| Scholar | EDU | Sage/loremaster |
| Seeker | INT | Investigator |
| Sidekick | DEX or CON | Apprentice |
| Steadfast | CON | Loyal warrior |
| Swashbuckler | DEX or APP | Duelist/pirate |
| Thrill Seeker | DEX or POW | Daredevil |
| Two-Fisted | STR or SIZ | Brawler/barbarian |

**WSR-relevant archetypes in detail:**

- **Beefcake (STR core):** Climb, Fighting (Brawl), Intimidate, Listen, Mechanical Repair, Psychology, Swim, Throw. Maps to WSR's warrior-brute. The focus on physical skills without weapon specialization is useful calibration.
- **Explorer (DEX or POW core):** Animal Handling, Anthropology, Climb, Fighting (Brawl), First Aid, Jump, Language Other, Natural World, Navigate, Ride, Stealth, Survival, Track. Maps to WSR's wilderness warrior or ranger archetype.
- **Hard Boiled (CON core):** Art/Craft (Acting), Fighting (Brawl), Firearms, Drive Auto, Fast Talk, Intimidate, Law, Listen, Locksmith, Spot Hidden, Throw. The street-fighter-who-bends-rules type maps to a WSR mercenary or city rogue.
- **Mystic (POW core):** Art/Craft, Disguise, History, Hypnosis, Language Other, Natural World, Occult, Psychology, Sleight of Hand, Stealth. Note: **Mystic requires the Psychic talent.** Not directly portable since WSR has no psychic powers, but the POW-based occultist skill spread (Occult, History, Languages, Sleight of Hand) is useful for WSR's sorcerer archetype skill calibration.
- **Outsider (INT or CON core):** Art/Craft, Animal Handling, Fighting, First Aid, Intimidate, Language Other, Listen, Medicine, Navigation, Stealth, Survival, Track. This is the cleanest WSR barbarian/exile archetype. The outsider identity (alien to the setting's civilization) matches design.md §1.2 feature 9 perfectly.
- **Rogue (DEX or APP core):** Appraise, Art/Craft, Charm, Disguise, Fast Talk, Law, Locksmith, Psychology, Read Lips, Spot Hidden, Stealth. Direct WSR rogue.
- **Swashbuckler (DEX or APP core):** Art/Craft, Charm, Climb, Fighting, Jump, Language Other, Mechanical Repair, Navigate, Pilot, Swim, Throw. The Leiber-style pirate/duelist. Note: Swashbuckler "disdains firearms as the tools of cowards" and focuses on melee. Perfect for WSR's ancient-world framing.
- **Two-Fisted (STR or SIZ core):** Drive Auto, Fighting (Brawl), Firearms, Intimidate, Listen, Mechanical Repair, Spot Hidden, Swim, Throw. Conan-type brawler. The "resolves disputes with fists rather than words" description is pure Howard.

**Adoption recommendation:** Do not port archetypes as a chargen step - WSR is classless and BRP-based, and archetypes-as-classes would contradict design.md §3.2 ("no classes"). Instead, use the archetypes as inspiration for WSR **Background** or **Archetype** descriptors that provide skill-point distribution guidance without locking a character. The archetype concept (shorthand character concept + skill bonus list + 2 signature abilities) maps well onto WSR's profession/background system design.

### Pulp Talents (Character Distinctiveness)

Four tables of 10 talents each = 40 total talents across Physical, Mental, Combat, and Miscellaneous categories. Chosen at chargen (2 talents standard, up to 4 at high pulp), and can be gained through play.

**Talents that are directly WSR-relevant (no modern-tech dependency):**

Physical Talents:
- **Quick Healer:** natural healing +3 HP per day. WSR could use this as a warrior-type talent.
- **Endurance:** bonus die on CON rolls. Clean.
- **Tough Guy:** spend 10 Luck to shrug off up to 5 HP of damage in one round. Direct WSR-portable; spend PP instead of Luck.
- **Keen Hearing / Keen Vision:** bonus die to Listen/Spot rolls.

Mental Talents:
- **Hardened:** ignores Sanity loss from attacking other humans, viewing horrific injuries, or the deceased. For WSR: a warrior who has seen too much - ignores stress effects from ordinary violence. Maps to the Howard-hero who is unmoved by bloodshed.
- **Resilient:** spend Luck (PP in WSR) to reduce Sanity (Corruption in WSR) loss, 1-for-1. Directly port as a sorcerer talent for managing Corruption.
- **Strong Willed:** bonus die on POW rolls. Clean.
- **Arcane Insight:** halve time to learn spells, bonus die on spell casting. Direct sorcerer talent.
- **Linguist:** bonus die on Language rolls. Ancient-world appropriate.

Combat Talents:
- **Alert:** never surprised in combat. Clean.
- **Heavy Hitter:** spend 10 Luck (PP) to add an extra damage die on melee. Direct port.
- **Nimble:** does not lose next action when diving for cover.
- **Outmaneuver:** counted as one Build higher when initiating combat maneuvers. WSR-portable with BRP UGE's resistance table.
- **Rapid Attack:** spend 10 Luck (PP) for one extra melee attack in a round. Direct port.
- **Fleet Footed:** spend 10 Luck (PP) to avoid "outnumbered" penalty for one encounter.

Miscellaneous Talents:
- **Shadow:** reduces difficulty on Stealth rolls; bonus surprise attacks if unseen. Rogue talent.
- **Resourceful:** spend 10 Luck (PP) to declare a useful piece of equipment is at hand. "The thief who always has a knife" talent.
- **Master of Disguise:** spend 10 Luck (PP) for bonus die on Disguise. Rogue/social talent.
- **Animal Companion:** starts with a loyal animal companion. Ancient-world appropriate (war-horse, hunting hawk, etc.).
- **Lucky:** regains +1D10 Luck on recovery rolls. In WSR terms: regains additional PP on rest. Powerful but genre-appropriate for the "charmed life" archetype.
- **Scary:** reduces difficulty on Intimidate rolls. Warrior/enforcer talent.

**Adoption recommendation:** The Pulp Talents system is the best available template for WSR's signature ability / trait design. Borrow the structure (4 tables, 10 per table, choose 2 at chargen) rather than the specific talents. Rewrite talents against WSR's skill list and without modern-tech references. The spend-PP-for-effect pattern (Heavy Hitter, Rapid Attack, Fleet Footed, Resilient, Resourceful) provides a clean model for how WSR Fate Point spends can be gated behind character choices - only characters with the relevant talent can make that specific Fate Point spend.

**This directly addresses the character distinctiveness watch-item.** The talent system (choose 2 from 40+) creates combinatorial distinctiveness without classes or rigid templates. Two warriors with different talent pairs play very differently. This is exactly what design.md §3.1 ("Make characters feel distinctive without classes") requires and what BRP UGE natively lacks.

### Recurring Villains / Named Antagonist Design

Chapter 7 (pp. 96-98) contains explicit guidance on running recurring villains with Luck pools as a limited resource. Key design note:

> "Use the villain's Luck points wisely as they are essentially a limited resource, not refreshed until the start of a new scenario or campaign chapter. Having your main villain trapped with no Luck pool to sustain them is sure way to allow the heroes to defeat them."

This is the named antagonist model WSR needs: the villain who always escapes is doing so on a shrinking Luck (Fate Point) budget. Once they run dry, the heroes can finally land the decisive blow. Directly applicable to WSR's recurring villain design in the GM Book.

The "Look Out Master!" mechanic (villain burns all remaining Luck to have a mook take the hit) is the climax trigger for this model: the villain's last use of their Fate Point pool, after which they are finally vulnerable.

### Action Scenes / Chase Rules

Chapter 7 mentions chases explicitly as a key pulp element: "intense chases" are listed alongside combat as defining pulp action. Pulp Cthulhu defers to CoC's standard chase rules (Chapter 7: Combat of the CoC Rulebook) rather than defining its own. The Pulp Cthulhu contribution is the framing: chases are a genre requirement, not an optional rule.

No new mechanical content to borrow from this section. WSR's chase rules will need to come from BRP UGE's equivalent section (not yet reviewed).

### Pulp Plots and Scenario Structure

Chapter 7 describes six plot types: Adventure/Quest, Mystery, Discovery, Two-Fisted (combat-focused), Suspense, Exploration, Out-and-Out Horror. The first five are directly applicable to WSR scenarios.

The **Red Lining** sidebar describes "travel shorthand" - cutting directly to arrival at destination, only playing through travel when it matters to the plot. Named after Indiana Jones's map-line montage. This is WSR-appropriate advice for the GM Book.

The **Cliffhangers** guidance (end sessions at moments of maximum tension) and the **Hazards** list (environmental obstacles that raise stakes without requiring additional combat) are both useful GM Book inclusions.

### Backstory System (Party Cohesion Partial Solution)

Character creation includes a **Step Six: Create a Backstory** that asks players to define:
- Description (physical)
- Ideology/Beliefs
- Significant People (who matters to this character)
- Meaningful Locations
- Treasured Possessions
- Traits (personality descriptors)

In Pulp Cthulhu, the Backstory also serves as the Sanity recovery mechanic (spending time with a backstory element can restore Sanity). WSR would not use the Sanity-recovery function, but the backstory framework - particularly **Significant People** and **Meaningful Locations** - provides hooks for party cohesion and recurring scenario material. The "Significant People" entry directly enables the cross-PC connection ("my significant person is another PC") that design.md §3.1 ("provide hooks for party cohesion") requires.

**Adoption recommendation:** Borrow the backstory framework structure (not the Sanity recovery function) as WSR's character background system. The combination of Significant People + Ideology/Beliefs + Traits produces the anti-hero-with-personal-code described in design.md §1.2 feature 2, with mechanical hooks for scenario engagement.

### Generic Character Stat Blocks (NPC Calibration)

Chapter 9 provides three generic human NPC stat blocks relevant to WSR:

**Beat Cop** (maps to WSR City Guard):
- STR 80, CON 70, SIZ 70, DEX 55, INT 60, HP 14
- Brawl 65%, .38 revolver 50%, Dodge 27%

**Police Detective** (maps to WSR Temple Inspector or City Prefect):
- STR 65, CON 70, SIZ 50, DEX 55, INT 65, HP 12
- Brawl 65%, .38 auto 50%, Dodge 27%

**National Guard** (maps to WSR Legion Soldier):
- STR 60, CON 60, SIZ 60, DEX 70, INT 60, HP 12
- Brawl 60%, carbine 40%, Dodge 35%

These are all higher-caliber than the Average Mook (HP 10, Brawl 35%) and represent the "competent professional" NPC tier - a step above mook but not named-antagonist level. Useful calibration data for WSR's three-tier NPC design (mook / professional / named).

The **Caravaggio Heavy (typical thug/mook)** stat block from p. 122 confirms mook calibration:
- STR 60, CON 50, SIZ 55, DEX 60, HP 10, Luck: -
- Brawl 50%, Dodge 30%

This is slightly higher than the Average Mook (Brawl 35%, Dodge 25%) but has the same HP 10 and same Luck: none. The source uses "typical thug (mook)" as a label on this stat block, confirming HP 10 as the mook HP baseline regardless of slightly better skills.

The **Servant of the Jade Emperor (typical minion/mook)** from p. 124 also has HP 10 and Luck: none, further confirming the HP 10 mook baseline.

---

## Borrow / Inspire / Skip Recommendations

| Item | Recommendation | Notes |
|------|---------------|-------|
| Mook rule (half-HP incapacitation) | **Borrow with modification** | Core mechanic is direct port; needs WSR clarification re: Major Wounds interaction |
| Average Mook stat block | **Borrow with modification** | Swap modern weapons for ancient-world equivalents; HP 10, weapon ~35-40%, Dodge ~25% preserved |
| "Look Out Master!" villain Luck spend | **Borrow with modification** | Rename; replace Luck with Fate Points (PP); excellent climactic villain mechanic |
| Luck spend menu structure | **Inspire only (rewrite)** | Architecture (separate pool) contradicts WSR decision; menu items (fumble ignore, unconsciousness avoid, death avoid) are directly useful as Fate Point spend design |
| Fate Points = PP confirmation | **N/A - validates WSR decision** | Pulp Cthulhu's opposite choice (separate pool) highlights why WSR's shared-pool decision creates a meaningful asymmetry |
| Pulp Talents system structure | **Borrow with modification** | 4 tables, 10 per table, choose 2 at chargen - excellent framework; rewrite all specific talents against WSR skill list |
| Individual Pulp Talents (ancient-world-compatible) | **Borrow with modification** | Tough Guy, Heavy Hitter, Rapid Attack, Fleet Footed, Arcane Insight, Resilient, Hardened, Alert, Shadow, Resourceful, Lucky, Quick Healer, Endurance, Strong Willed, Linguist, Animal Companion, Scary, Keen Hearing, Keen Vision |
| Pulp Archetypes (22 archetypes) | **Inspire only (rewrite)** | Use as inspiration for WSR Background/Archetype descriptors and skill-distribution guidance, not as character classes |
| Backstory system framework | **Borrow with modification** | Strip Sanity-recovery function; keep Significant People, Ideology/Beliefs, Traits as party-cohesion and personal-code hooks |
| Recurring villain / diminishing Luck model | **Borrow with modification** | Excellent GM Book guidance; swap Luck for Fate Points (PP) |
| Red Lining (travel shorthand) | **Borrow with modification** | Useful GM Book prose; strip Indiana Jones references |
| Hazards framework (environmental obstacles) | **Inspire only (rewrite)** | Modern-setting examples; keep the design principle (hazards as Luck-burning opportunities) |
| Pulp Sanity (Chapter 5) | **Skip** | Mythos-specific; WSR has its own Corruption track for sorcerers |
| Weird Science / Psychic Powers (Chapter 6) | **Skip** | Incompatible with WSR's ancient-world frame and design.md §1.3 |
| 1930s setting material (Chapter 8) | **Skip** | Wrong era entirely |
| Scenarios (Chapters 10-13) | **Skip** | Mythos/modern content |

---

## Watch-Items (Matched Against progress.md)

### Character Distinctiveness (Watch-item 1)
**Strong match.** The Pulp Talents system is the best available external model for WSR's character distinctiveness problem. The "choose 2 from 40" combinatorial approach produces 780 unique pairs from 40 talents - more than sufficient for a classless system. More importantly, talents that gate PP spends (Heavy Hitter: spend 10 PP for extra damage die) create meaningfully different playstyles from the same base system. **This is the primary design recommendation from this research.**

### Party Cohesion (Watch-item 2)
**Partial match.** The Backstory system's Significant People entry (especially cross-PC connections) and the pulp organization framework (Chapter 3: Pulp Organizations) address party binding narratively but not mechanically. No cooperative combat mechanics were found. The pulp organizations chapter (read briefly in TOC) describes six fictional organizations; some provide narrative cohesion (shared employer, shared enemy) but no mechanical cooperative-action rules. The gap identified in source-5-combat.md remains: WSR will need original design for cooperative combat mechanics.

### Mook Rules (Watch-item 3)
**Gap closed.** Full mook rule found, documented above. The solution is simpler than expected: one threshold, one sentence. No complexity required. Recommend WSR adopt this immediately rather than designing from scratch.

### Sorcery Cost (Watch-item 4)
**Partial match.** Pulp Cthulhu confirms that Luck (as a separate pool) can be spent to halve Sanity losses. In WSR terms: Fate Points (from PP) can be spent to reduce Corruption from casting. This is an already-available spend in the BRP UGE framework (Resilient talent in Pulp Cthulhu). The PP/Fate-Point-as-Corruption-buffer design is validated by Pulp Cthulhu's "Resilient" talent precedent.

---

## Open Questions to Escalate

1. **Mook / Major Wound interaction.** A mook with HP 10 takes a single hit of 5+ damage - that is a Major Wound by WSR rules (single blow = HP/2). But the mook rule says mooks are incapacitated at cumulative HP/2. These two thresholds overlap but use different triggers (single blow vs. cumulative damage). WSR needs a ruling: does a single Major Wound blow automatically incapacitate a mook (collapsing the two rules into one), or do mooks use only the cumulative HP threshold and the Major Wound table is irrelevant for them? The simpler answer is: mooks have no Major Wound Table - any hit that deals HP/2 or more damage (cumulative or single) incapacitates them. Named foes use the full Major Wound system.

2. **Talents as the distinctiveness solution: decision needed.** The Pulp Talents framework (choose 2 from tables at chargen, can gain more through play) is the strongest answer WSR has found to the character distinctiveness problem. This is a significant design decision. Should WSR adopt a talent system structured on this model? If yes, it needs a design pass against the WSR skill list and the three archetype lines (warrior/sorcerer/rogue). Recommend escalating this to a design session.

3. **Backstory as a structured chargen step.** Pulp Cthulhu makes Backstory a mandatory chargen step (Step 6 of 7). WSR could adopt this structure to ensure every PC has Ideology/Beliefs (personal code), Significant People (party cohesion hooks), and Traits (anti-hero personality). This would address design.md §3.1 ("Provide hooks for party cohesion") and §1.2 feature 2 (anti-heroes with personal codes) without designing original mechanics.

4. **Three-tier NPC design.** Pulp Cthulhu implicitly uses three tiers: Mook (HP 10, Luck: none, skills ~35%), Professional/Subordinate (HP 12-14, Luck: half-POW, skills ~50-65%), Named Antagonist (doubled HP option, full Luck pool, 1-2 Pulp Talents). WSR should formalize this three-tier model in the GM Book. The tiers map cleanly: Mook (bandit, guard, thrall), Professional (veteran soldier, skilled assassin, cult enforcer), Named (the named villain, the sorcerer-captain, the rival champion).

5. **Currency/economy.** No currency or economy system found in Pulp Cthulhu (CoC uses Credit Rating as an abstract wealth trait, not coin counts). This gap was on the Priority 3 list and remains open. Pulp Cthulhu does not help here.

6. **ORC License status.** Pulp Cthulhu is Chaosium copyright, all rights reserved, not ORC-licensed. WSR cannot reproduce any text verbatim. All borrowed mechanics must be expressed in original language. This is a legal constraint on how the mook rule and Pulp Talents adaptations are written into WSR chapters.
