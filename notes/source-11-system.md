# Source Notes: Chapter 5 - System (pp. 127-141)

> Phase 1 Task 2 extraction notes. Every decision cites design.md.

---

## Summary

Chapter 5 is the mechanical chassis for everything else in BRP UGE. It covers the five degrees of success (fumble, failure, success, special success, critical success) with a Skill Results Table; the resistance table for opposed-characteristic contests; modifying action rolls (difficulty levels and situational modifiers); three special skill roll types (cooperative, opposed, combined); Fate Points as an optional PP-drain mechanic; time scales (narrative, scene, turn, combat round) and movement rates; encumbrance; and a complete Character Improvement section covering skill experience checks, training, research, and characteristic improvement including POW increases. Sanity does not appear in this chapter - it lives in Chapter 10. The chapter is almost entirely canonisable as written; the main WSR decisions are which Fate Point uses to adopt, how hard to cap skill improvement above 75%, and whether the aging/inaction rules are worth including for a genre that skews mortal over geriatric.

---

## Canonise

- **Percentile resolution core**: roll D100 equal to or less than the target to succeed; roll higher to fail. The system of action. (design.md §3.1 - "Stay faithful to BRP's percentile, skill-based identity.")
- **Automatic and Impossible actions**: routine actions need no roll; truly overwhelming tasks are ruled Impossible before any dice. Keeps drama-dice reserved for dramatic moments. (design.md §3.1 - "players think in fictional terms"; §4.2 - "skill rolls when something is at stake.")
- **Five degrees of success**: Fumble / Failure / Success / Special Success / Critical Success. Fumble = 5% of failure chance, usually 96-00. Special = roll equal to or less than 1/5 skill. Critical = equal to or less than 1/20 skill. (design.md §3.1 - "tactical depth via BRP's existing texture." The success spectrum is a core part of that texture.)
- **Skill Results Table** (full table, pp. 128): the base-chance-to-critical/special/fumble lookup chart. Extends through base chances over 120 for completeness. Canonise and reproduce. (design.md §3.1 - faithful to BRP.)
- **Skill Rolls**: any skill with a base chance of 5%+ always succeeds on a roll of 01-05, even after penalties. (design.md §3.1 - faithful to BRP; preserves the always-a-sliver-of-hope feel.)
- **Characteristic Rolls** (CON, INT, DEX, CHA at x5; POW x5 as Luck): catch-all resolution tool when no skill applies. Already canonised in Ch. 2 notes but confirmed here. (design.md §3.1 - faithful to BRP.)
- **Resistance Rolls**: the resistance table opposed-characteristic mechanic. Base chance = 50% + (active x5) - (passive x5). Differences of 10+ trigger automatic success/failure. The full table is reproduced on pp. 129-130. Canonise table and all named use-cases: PP vs. PP, POT vs. CON, POW vs. POW, STR vs. STR, Damage vs. CON, STR+SIZ vs. STR+SIZ. (design.md §3.1 - faithful to BRP; the PP vs. PP and POW vs. POW uses are directly required by the Sorcery chapter's spell-resistance and POW-contest mechanics. See also Watch-item: sorcery cost.)
- **POW vs. POW contest bonus**: a successful win against an equal-or-higher POW opponent earns the winner an experience check to increase their POW. Canonise. (design.md §3.1 - faithful to BRP; also reinforces "growth through dangerous use" without level inflation.)
- **Difficulty modifier levels**: Automatic (no roll), Easy (x2 skill or x10 characteristic), Average (base skill, x5 characteristic), Difficult (half skill round up), Impossible (no roll, automatic fail). Canonise all five. (design.md §3.1 - faithful to BRP; the Difficult level is the workhorse for "fighting in the dark," "climbing a sheer wall," etc. that the genre needs.)
- **Situational Modifiers Table** (p. 133): seven condition categories (Task Complexity, Equipment, Environment, Familiarity, Range, Time, Understanding) each with -50% / -20% / +20% / +50% steps. Canonise the table and the principle that difficulty and situational modifiers apply in a specific order (difficulty first, situational on top). (design.md §3.1 - lean resolution without invented subsystems.)
- **Cooperative Skill Rolls**: lead character rolls; helpers make their own rolls; best helper result modifies lead's skill (Critical +50%, Special +30%, Success +20%, Failure -10%, Fumble -50%). If lead succeeds, all who succeeded on a helper roll earn an experience check. (design.md §3.1 - "Provide hooks for party cohesion." This is a concrete cooperative mechanic that rewards working together. See Watch-item: party cohesion.)
- **Opposed Skill Rolls (default method)**: both parties roll against their skills; highest degree of success wins; tie goes to the higher die roll (advantaging higher-rated characters). (design.md §3.1 - faithful to BRP.)
- **Combined Skill Rolls**: two skills linked in one roll at the lower rating as base chance; failure at the higher skill = partial success. (design.md §3.1 - faithful to BRP; adds texture to compound actions without a new subsystem.)
- **Time Scales**: Narrative time (variable, GM narration), Scene (variable, one location/event), Turn = 5 minutes = 25 combat rounds, Combat Round = 12 seconds. Canonise all four. (design.md §3.1 - "Run online without a VTT. Combat is theatre-of-mind compatible." Verbal time-scales support this.)
- **Significant Time Intervals Table** (p. 135): includes the PP and HP recovery rates and training/experience durations. Canonise the table with these key entries:
  - Regenerate 1 PP: 1 hour of sleep, 1 PP per 2 hours awake
  - Regenerate all PP: 1 game day (24 hours)
  - Regenerate 1D3 HP: 1 game week
  - Experience rolls: 1 game week or more
  - Training roll, combat skills: ~3 game weeks
  - Training roll, non-combat skills: ~12 game weeks or less
  (design.md §1.2 point 7 - "naturalistic healing. Recovery is herbal, restful, and slow." These time scales enforce that.)
- **Combat Round Movement**: MOV 10 units per round; 1 unit = up to 10 meters (typically ~3 meters for precision); maximum sustainable human rate. (design.md §3.1 - theatre-of-mind; MOV is abstracted, not grid-bound.)
- **Movement Rates Table (ancient-world subset)**: Walking, Marching, Running, Swimming, Riding (walk/gallop), Boat (small rowed), Ship (ancient rowed, vintage sailing). Canonise these rows only. (design.md §1.2 point 3 - ancient world setting; §3.2 - "No grid or VTT for combat.")
- **Terrain and Weather Modifiers**: fractional reductions to travel rates for rivers, forests, hills, deserts, storms, mountains, marshes, ice. Canonise as a GM tool. (design.md §1.2 point 4 - hostile wilderness; §2.4 - "wilds are full of beasts, raiders, ruins, and stranger things.")
- **Encumbrance (ENC)**: abstract unit system (items worth 1-2 ENC each). Maximum comfortable ENC = average of STR+CON (round up). Over-ENC costs -1 MOV, -5% Agility, -5% to Agility/Manipulation/Stealth/Dodge/weapon skills per point over maximum; plus 1 fatigue point per turn per additional ENC while exerting. (design.md §3.1 - lean resolution; §2.3 - "wounds matter" - ENC penalties make the fighter who grabs too much loot visibly weaker.)
- **Character Improvement - Experience Check system**: successful use of a skill in a dramatic/stressful situation earns a checkmark. One experience roll per skill per adventure, resolved at downtime. Easy skill rolls do not earn checks. (design.md §4.5 - "PCs grow in experience and reputation, not raw power." This mechanism directly delivers slow, earned growth.)
- **Making an Experience Roll**: roll D100 higher than current skill rating, adding experience bonus (INT/2 round up) to the roll. If higher, the skill improves. (design.md §4.5 - growth that tracks use, not sessions survived.)
- **Increasing Skills by Experience**: success = add 1D6 to the skill rating. Default alternative: +3 (must be declared before the roll). (design.md §4.5 - "not raw power" - 1D6 average of 3.5 means skills creep slowly upward, not leaps.)
- **Skill Training**: find a trainer with a higher rating, spend time equal to current skill x1 hour (50 hours/week available), teacher rolls Teach. Success = +1D6 to skill; fumble = -1D3. Training cap: no skill can be trained above 75% - mastery beyond 75% must come from in-play experience. (design.md §4.5 - "growth that feels earned but doesn't break the human-scale ceiling." The 75% training cap is critical: it means sorcerers, warriors, and rogues cannot simply buy their way to elite competence.)
- **Research**: self-directed study, same time as training, no cost. Roll experience as normal; success = +1D6-2 (minimum 0 gain, or +2 as safe choice). Unlike training, research can push skills above 75%. (design.md §4.5 - research-in-the-field suits the genre; "delving into ancient tomes" is a sword & sorcery archetype.)
- **Exceeding 100% in a Skill**: allowed; primarily improves critical and special success ranges. Experience rolls above 100% require rolling over 75% (i.e. the experience bonus is necessary). (design.md §3.1 - "depth via BRP's existing texture"; skills over 100 belong to the elite-of-elite in WSR's Heroic frame, and the narrowing improvement rate naturally caps extreme growth.)
- **Skill Improvement - automatic checks**: GM may grant automatic experience check without a roll for immersive exposure (prolonged time in a foreign language environment, working alongside a master craftsman). (design.md §4.5 - growth through adventure, not just combat.)
- **POW Increases**: POW can increase through winning a POW vs. POW resistance roll against an equal-or-greater POW opponent. Roll chance = (max possible rolled POW + min rolled POW - current POW) x5. Success = 1D3-1 increase (may be 0, may be +2). Alternative: take +1 without rolling (declare before the roll). (design.md §4.5 - "growth in experience and reputation, not raw power." POW grows only through genuinely dangerous willpower contests - fitting for a sorcery-cost system where PP = POW.)

---

## Drop

- **Skill Ratings Over 100% (Option) as general option**: canonised above in the narrow sense that skills can exceed 100% through experience. The source presents this as a campaign-level toggle for "epic or superhuman" games. WSR does not need the explicit option framing - skills simply improve as they improve, and the rules handle ratings over 100 naturally. Drop the option box; keep the underlying rules as implicit. (design.md §3.2 - "Maximise optional rules" is a will-not-do; §1.2 point 5 - exceptional but mortal, not superhuman.)
- **Opposing Skill Roll Systems (three alternate methods)**: the source offers three alternate opposed roll systems beyond the default: Highest Successful Result, Opposed Skill Subtraction, and Opposed Skill Using the Resistance Table. These are useful GM tools but create player confusion if all three are available. Drop all three alternates; canonise the default (highest degree of success wins, tie goes to higher die roll). (design.md §3.1 - "Keep rules text uncluttered"; §3.2 - "Maximise optional rules" is a will-not-do.)
- **Movement Rates Table - modern/advanced rows**: Land vehicle (modern/future), train (all types), air vehicle (all types), space vehicle. These have no place in WSR's ancient-world setting. (design.md §1.2 point 3 - ancient world setting; §3.2 - "No generic BRP supplement.")
- **Aging and Inaction (Option)**: detailed characteristic degradation starting at age 41, with annual 2D6 rolls on the Characteristic Point Loss Table and a 1D10 Characteristic table. Drop entirely. WSR PCs are sword & sorcery heroes; campaign timescales rarely span decades, and characteristic decay is a bookkeeping overhead with no genre payoff. The EDU aging bonus is also dropped (EDU is already dropped). (design.md §3.1 - "Keep rules text uncluttered"; §4.5 - growth and reputation, not geriatric accounting; EDU already dropped per Ch. 2 notes.)
- **Characteristic Increases - INT and SIZ cap note**: INT and SIZ "increase only rarely" per the source. Since EDU is dropped, the EDU aging paragraph on p. 141 ("+1 EDU per 10 years") is also dropped. No replacement needed - the culture and backgrounds framework handles knowledge growth better. (Same reasoning as EDU drop in Ch. 2 notes.)
- **Fate Points - expanded/optional uses (pp. 133-134)**: the source lists several expanded Fate Point options explicitly flagged as for "more action-oriented, high-adventure games with more durable and competent characters." These expanded uses include: shift a roll's result level by spending PP (fumble to failure, failure to success, etc.); spend PP equal to weapon damage range to inflict maximum damage; spend PP to retroactively add narrative details or resources. These are dropped as standard WSR rules (too close to "player controls fate" rather than "player rolls fate"), though one use is modified (see Modify). (design.md §2.3 - "A finite resource that lets PCs reroll, deflect a killing blow, or pull off the cinematic move" - the expanded uses overshoot this into narrative control.)

---

## Modify

- **Fate Points (core three uses only, cost reduced)**: the source's Fate Points are a PP-spending mechanic. The three core uses are:
  1. Spend 5 PP to re-roll any percentile roll (declared after the initial roll; second result is final; no experience check).
  2. Spend 5 PP to ignore a skill and trust fate, substituting a Difficult Luck roll (POW x5, halved). No resistance or characteristic rolls.
  3. Spend 3 PP to ignore 1 point of damage from a single attack (with narrative justification).
  The source notes these uses are optional and flags them for action-adventure, not horror. WSR canonises all three core uses but modifies the cost: 5 PP re-roll and 5 PP Luck substitute remain at 5 PP; the 3 PP damage absorption drops to 2 PP to make it genuinely usable in play. The "faints until regaining at least 1 PP" consequence of reaching 0 PP is preserved as written (important for sorcery cost interaction - see Watch-item). (design.md §2.3 - "A finite resource that lets PCs reroll, deflect a killing blow, or pull off the cinematic move. Their existence is what makes the system pulpy without abandoning lethality."; §3.3 - Fate Points/hero points deferred in Ch. 2 notes, resolved here.)
- **Characteristic Increases - STR, CON, DEX, CHA training cap**: the source caps STR/CON training at the highest value of the three (if SIZ 14 is highest, neither STR nor CON can be trained above 14). DEX and CHA training caps at half again the original characteristic. WSR keeps these caps as written - they enforce the "exceptional but mortal" ceiling without needing a separate rule. Modify the framing only: in WSR text, the training cap is presented as "the natural limit of your body" rather than a numerical puzzle, and the example of "futuristic muscular augmentation surgery" is replaced with "disciplined physical conditioning under a demanding master." (design.md §1.2 point 5 - "exceptional but mortal heroes"; §1.3 - "zero-to-hero arcs" rejected; §2.5 - "grounded extraordinariness.")
- **Encumbrance - drop the full Fatigue Points integration**: the source ties over-ENC to Fatigue Points (losing 1 FP per turn per ENC over max while exerting). WSR uses Simple Fatigue (per Ch. 2 Modify decision), not tracked FP. Modify: over-ENC causes the skill/MOV penalties as written, but the FP loss is replaced by the Simple Fatigue rule's existing round-count degradation. The net effect is the same (overloaded characters tire faster and fight worse) with no additional tracking. (design.md §3.1 - "Keep rules text uncluttered"; Ch. 2 decision to use Simple Fatigue.)
- **Movement Rates Table - ancient-world trim**: keep the following rows and rename where needed for setting: Walking, Marching (forced), Running (normal/sprint), Swimming, Riding (walking speed), Riding (gallop), Land vehicle (drawn - horse-drawn cart), Boat (small rowed), Ship (ancient rowed), Ship (vintage sailing). Rename "Land vehicle, drawn" to "Cart or wagon." Drop all others. (design.md §1.2 point 3 - ancient world; §3.2 - "No generic BRP supplement.")
- **Terrain and Weather Modifiers - trim modern references**: the source mentions "powered vehicles" are exempt from some terrain modifiers. Remove this clause. All other terrain rules apply as written. (design.md §1.2 point 3 - ancient world setting.)

---

## Defer

- **Fate Points vs. Hero Points - final design**: the source's Fate Points spend PP (not a separate pool), which means sorcerers who burn PP on spells are directly trading sorcery capacity for pulp survival. This is mechanically interesting - it creates a genuine cost tension for sorcery-using PCs. Whether WSR keeps Fate Points as pure PP expenditure or introduces a separate Hero Point pool (separate from PP, not competing with sorcery) is a §3.3 open question. The Fate Points as PP approach should be presented to the controller for a decision before the magic chapter is finalised, because the choice changes how sorcery cost pressure works. (design.md §2.3 - "Luck / Hero points. A finite resource..."; §3.3 - "sorcery cost mechanic" deferred.)
- **PP spending above base Fate Point uses**: once the sorcery chapter is finalised, there may be value in allowing PP to be spent on sorcery-specific Fate Point effects (e.g., the sorcerer spends extra PP to hold a spell on a fumble, avoiding disaster). This is a magic-chapter decision. (design.md §2.2 - "every step into it costs something.")
- **Characteristic Increases - POW via POW contest and sorcery interaction**: POW increases through successful POW vs. POW contests. If sorcery costs PP (= POW at max), then a sorcerer's PP total grows when POW grows - creating a feedback loop where winning willpower contests makes you a better sorcerer. This is genre-appropriate (Elric's demonic pacts feed his POW) but needs to be flagged for the magic chapter design. Defer to magic chapter. (design.md §2.2 - "sorcery as costly choice"; §3.3 - sorcery cost deferred.)
- **Experience check for cooperative rolls and party cohesion**: cooperative skill rolls give all successful helpers an experience check if the lead succeeds. This is a concrete party-cohesion reward mechanic. It should be cross-referenced with the Passions chapter (Ch. 10) notes when those are reviewed, to see if cooperative rolls can also trigger Passion checks. Defer to phase 2 design. (design.md §3.1 - "Provide hooks for party cohesion.")
- **HP recovery rate and naturalistic healing**: the Significant Time Intervals Table gives "regenerate 1D3 HP: one game week." This is the baseline for WSR's naturalistic healing. The full recovery rules (bed rest, bandaging, medical skill use) are in Chapter 7: Spot Rules. Do not finalise healing rules until Ch. 7 has been reviewed. (design.md §1.2 point 7 - "naturalistic healing"; §2.2 - "no healing magic.")

---

## Open Questions

1. **Fate Points as PP vs. separate Hero Point pool**: this is the most consequential decision in this chapter. If Fate Points spend PP, a sorcerer who uses spells has fewer survival-saves; a non-sorcerer has full PP available as a Fate buffer. This asymmetry is interesting but may feel unfair to sorcery-using PCs. If WSR introduces a separate Hero Point pool (e.g., 3 Hero Points per session, refreshed), it removes the asymmetry but adds a new resource to track. Recommend presenting both options to the controller before the magic chapter is written.

2. **Skill improvement cap at 75% for training**: the source's 75% training cap is tight at Heroic power level, where characters start with skills already near or at that cap. A Warrior with Sword at 80% from chargen cannot train Sword at all - only in-play experience can push it higher. Is this the intended ceiling behaviour? It may create pressure for players to diversify rather than deepen, which could be a feature, not a bug. Worth flagging for the controller.

3. **Experience bonus (INT/2) scale**: the experience bonus ranges from ~4 (INT 8) to ~11 (INT 21). At high skill ratings (80%+), the roll needs to exceed the current skill, so the bonus matters enormously. A high-INT character improves skills roughly 3x faster than a low-INT character at the same skill level. This may be the right design (smart people learn faster) or may feel unfair to Warrior-archetype characters with average INT. Open question for phase 2.

4. **Research cap above 75%**: unlike training, research can push skills above 75%. The source gives +1D6-2 (average +1) or take +2. This is very slow. For ancient-world sorcerers studying grimoires, this should feel appropriately glacial - but is the rate right? Flagged for the magic chapter.

---

## Watch-Items

### Character Distinctiveness

- The experience check system is the primary long-term distinctiveness driver. Characters who use different skills in play earn checks on different skills - two Warriors who survive the same adventure may improve in entirely different things depending on what they actually did. This naturally differentiates characters without any class or level constraint.
- The 75% training cap means characters cannot fully optimise a single skill through training alone; they must diversify to keep growing, which pushes characters toward broader, more individuated profiles over time.
- POW increase through POW contests specifically rewards sorcery-capable PCs who engage in magical confrontations, creating a distinctiveness gradient between sorcerers who use their power aggressively and those who hoard it.

### Party Cohesion

- **Cooperative Skill Rolls are the best party cohesion mechanic in this chapter.** When PCs work together, the lead gets a meaningful bonus (up to +50%), and all successful helpers earn an experience check. This is a direct mechanical incentive for cooperation - helping a party member in a stressful situation grows your own skills. This should be highlighted in the Player Book.
- The mechanic is explicit that physical tasks may have limits on how many can assist; the GM adjudicates. This is appropriate and prevents degenerate "everyone assists everything" behavior.
- **Gap**: cooperative rolls reward skill-based cooperation but not emotional or relationship-based bonds. Passions (Ch. 10) are expected to fill this gap.

### Mook Rules

- Nothing in this chapter. Time scales and movement rates are neutral to mook/boss distinctions. Experience and improvement rules apply to PCs only (NPCs don't typically track experience).
- **Gap confirmed**: no mook rules in this chapter. Still looking to Ch. 6 (Combat) and Ch. 11 (Creatures) for native mook support.

### Sorcery Cost

- **Power Points are fully specified here as the resource.** Key mechanics:
  - PP maximum = POW (an 11 POW character has 11 PP).
  - Regeneration: 1 PP per hour of sleep; 1 PP per 2 hours awake. Full regeneration: 1 game day.
  - Reaching 0 PP: character "exhausts and faints until regaining at least 1 PP" (confirmed by the Fate Points section, p. 133).
  - PP vs. PP resistance rolls: relevant for spells that target POW or contest magical will.
  - POW vs. POW resistance rolls: the contest of spiritual force; winning earns a POW experience check.
- **Fate Points interact directly with sorcery cost**: all three Fate Point uses spend PP. A sorcerer cannot both cast spells freely and maintain a Fate Point buffer. This is the most important sorcery-adjacent finding in this chapter - the PP economy is load-bearing across both sorcery and survival.
- **The PP regeneration rate is slow**: full regeneration takes 24 hours. After a sorcerous encounter that burns 8 PP, the caster needs 8 hours of sleep or 16 hours awake to recover. This naturally limits how often sorcery can be used in a session, without needing a separate "spells per day" count.
- **PP as sorcery foundation assessment**: PP is a clean, elegant resource. It is bounded (max = POW, which is relatively low for most characters), slow to recover, and already carrying the Fate Point load. Any additional corruption or cost mechanic layered on top in the magic chapter should be designed with awareness that PP is already doing a lot of work.

---

## Book Placement

**Player Book (all of the following):**
- Actions section (automatic/impossible, five degrees of success)
- Skill Results Table
- Skill Rolls section
- Characteristic Rolls (cross-reference from Ch. 2)
- Resistance Rolls and Resistance Table
- Difficulty Modifiers (all five levels)
- Situational Modifiers Table
- Cooperative Skill Rolls
- Opposed Skill Rolls (default method only)
- Combined Skill Rolls
- Fate Points (core three uses, WSR cost modifications)
- Time Scales (all four)
- Significant Time Intervals Table
- Combat Round Movement
- Movement Rates Table (ancient-world rows only)
- Encumbrance rules and ENC penalties
- Character Improvement - full section (experience checks, experience rolls, skill training, research, characteristic increases, POW increases)

**GM Book:**
- Terrain and Weather Modifiers (useful primarily for overland travel, which is a GM narration tool)
- Note on granting automatic experience checks for immersive exposure
- Guidance on when to invoke Difficult vs. Impossible rulings
- Training time and cost guidance (the 50 hours/week and trainer-compensation notes are GM-facing)
- Characteristic Increases - framing for how the ancient world provides training opportunities (physical labor, masters, etc.)
