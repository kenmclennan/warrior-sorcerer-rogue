# G6. Hazards and Spot Rules

> *"The desert has its own laws, older and crueller than the laws of men."*
> *- Robert E. Howard*

This chapter is a GM reference for environmental threats, natural hazards, and the rules that govern situations outside ordinary combat. The entries are short and clinical: look up the hazard, apply the mechanic, move on. The genre requires that the world be hostile between fights as much as during them.

Rules that are player-facing (prone, aimed attacks, disengaging, close combat, weapon length) appear in P5. This chapter carries the GM-side reference for hazards and extended situation rules not already covered there.

---

## 1. Disease

Infection follows exposure to disease sources: a plague victim's wounds, foul water, miasma from a ruin, a curse-inflected bite. The GM sets the Potency of the disease (POT 3-18, treating it as a poison for the initial resistance roll).

**Contracting disease.** The exposed character makes a Stamina roll (CON x5). On a failure, they are infected. A character who has been deliberately infected (forced into contact, no chance to avoid) may not make the initial Stamina roll.

**Daily recovery rolls.** Once infected, the character makes a daily CON roll to resist the disease's progress. The multiplier starts at x2 and increases by x1 each day the character fails: CON x2 on day one, CON x3 on day two, and so on. A fumble on the recovery roll reduces the multiplier by 1 (instead of increasing it) - the character is getting worse faster. A character who achieves three consecutive daily successes throws off the infection and recovers.

**Strenuous conditions worsen recovery.** A character fighting or travelling in wilderness conditions makes recovery rolls at one step lower: wilderness travel reduces CON x5 to CON x4 (and CON x2 to CON x1); combat conditions reduce further. A bedridden character with proper medical care rolls at the base rate; a sorcerer still burning PP in the field while infected does not.

**Illness Severity.** The number of consecutive daily failures determines how badly the disease manifests:

| Consecutive failures | Severity | Characteristic loss rate |
|---|---|---|
| 0 | None - infection thrown off | - |
| 1 | Mild | 1 point per week |
| 2 | Acute | 1 point per day |
| 3 | Severe | 1 point per hour |
| 4+ | Terminal | 1 point per minute |

### 1.1 Disease Types

Each disease attacks a different characteristic. The GM may use these as written or rename them to suit the setting. All have the same recovery mechanic; only the target characteristic differs.

| Disease type | Characteristic attacked | Genre examples |
|---|---|---|
| Atrophy | STR | Wasting sickness, creeping paralysis |
| Chills | CON | Marsh fever, sweating sickness, hypothermic infection |
| Delirium | INT | Brain fever, poison-induced confusion, cursed sleep |
| Malaise | POW | Soul-drain, arcane exhaustion, spirit sickness |
| Shakes | DEX | Palsy, nerve damage, black-tongue fever |
| Pox | APP (or CHA) | Disfiguring plague, brands of corruption, plague-god's mark |

**Sorcerers and Malaise.** A sorcerer suffering from Malaise disease has their POW reduced - and with it, their PP pool. A sorcerer at POW 8 from a Malaise infection has 8 PP instead of their full pool. Every PP spent on spells or Fate Points is one less point available to resist the next day's recovery roll through the Stamina mechanic. The spiral is genre-appropriate.

**Characteristic recovery.** Lost characteristic points return at the same rate they were lost, once the infection is thrown off - but no faster. A character who lost 3 STR at the Acute rate (3 points in 3 days) recovers at 1 point per day. A character at Severe severity who lost 8 INT in eight hours recovers 1 INT per day under excellent care, or 1 per week in the field. The Medicine skill applied daily during recovery improves the rate by one step (per day becomes per four days improves to per three days, etc.).

---

## 2. Poison

Poisons work through a resistance roll: the poison's Potency (POT) against the target's CON using the Resistance Table. Overcomes CON: full POT in HP damage. Fails to overcome CON: half POT in HP damage (round up). Two doses of the same poison at the same POT do not combine into a double-strength dose.

**Delay.** Fast poisons take effect after 3 combat rounds (roughly 36 seconds). Slow poisons take effect after 3 full turns (roughly 45 minutes). The delay is fixed for the poison type; it cannot be extended by the victim.

**Antidotes.** An antidote has its own POT. Administered within 6 turns of poisoning, the antidote's POT subtracts from the poison's POT before the resistance roll is made. An antidote administered after 6 turns has no effect on damage already dealt, but may prevent ongoing effects.

**Delivery.** Unless otherwise noted, all poisons below assume ingestion or injection (blade, bite, sting). Contact poisons are rarer; a bare-hand search of a poisoned object requires a Luck roll to avoid exposure.

### 2.1 Poison Reference

The following are representative ancient-world poisons for GM use. POT values assume a full dose; fractional doses halve POT. The GM may create further poisons using these as calibration points.

| Poison | POT | Delay | Primary effect | Notes |
|---|---|---|---|---|
| Hemlock | 14 | Slow | HP damage; limb paralysis precedes fatal collapse | Socrates. The limbs go cold first. |
| Henbane (Hyoscyamus) | 10 | Slow | Delirium (INT attack, -1D3 INT), HP damage | Causes vivid hallucinations before unconsciousness. |
| Nightshade (Belladonna) | 13 | Slow | HP damage; rapid heart failure | Small doses cause dilated pupils and mania first. |
| Manchineel sap | 8 | Fast | HP damage to skin and throat; blindness if eyes contacted | Burning, blistering on contact; ingestion is quickly lethal. |
| Viper venom | 9 | Slow | HP damage; CON roll or severe swelling, -1D3 STR | Desert asp; common in ruins and grain stores. |
| Scorpion sting | 6 | Fast | HP damage; failed CON roll = muscle spasms, actions Difficult for 1D6 hours | Large desert scorpions may reach POT 10. |
| Stonefish toxin | 12 | Fast | Agonising HP damage; failed CON roll = unconscious 1D6 hours | Coastal/river encounters; wound site turns black. |
| Spider venom (large) | 8 | Slow | HP damage; CON roll or paralysis for 1D6 hours | Giant spiders (Bestiary G3 §2) inflict POT 10-14. |
| Ergot (grain contamination) | 6 | Slow | Delirium, Shakes (as disease onset); cumulative with repeated exposure | Affects whole groups if a food supply is contaminated. |
| Black lotus extract | 16 | Slow | HP damage; failed CON roll = coma for 1D6 days | Extremely rare, sorcerer-adjacent. The GM may add Corruption implications for the harvester. |
| Alchemical acid | varies | Fast | HP damage to flesh; armour degraded 1 point per round of contact | See §3 for full fire/acid rules. POT equals the 1D6 type used. |

**Named poisons and the genre.** Howard, Leiber, and Moorcock all use poison as an assassination tool and a villain's shortcut. The genre convention is that poison is cowardly and honourable characters regard it with contempt - which does not stop rogues from using it. The GM should feel free to name poisons for their setting; "Black Tears of Stygia" is more evocative than "Nightshade (POT 13)."

---

## 3. Fire and Heat

Fire causes HP damage each round a character is exposed. Armour provides protection for the first 1D3 rounds of fire exposure before heat penetrates and begins degrading the armour itself (non-metal armour loses 1 AV per round of sustained fire after that point; metal armour is not damaged but becomes dangerously hot - see below).

### 3.1 Fire Intensity

| Source | Damage per round | Notes |
|---|---|---|
| Tiny flame (candle, small torch spark) | 1 HP | Rarely dangerous unless sustained against skin |
| Torch held against target | 1D6 HP | Luck roll each round or character's clothing catches fire |
| Large open fire (bonfire, brazier) | 1D6+2 HP | POW x1 Luck roll each round to avoid catching fire |
| Building fire (room fully alight) | 2D6 HP | Plus smoke inhalation (see §3.2). Character automatically catches fire unless armoured. |
| Intense fire (forge, molten metal, alchemical flame) | 3D6 HP | Character automatically catches fire; armour provides no protection from the heat. |

**Catching fire.** A character whose clothing catches fire takes ongoing 1D4 HP per round at the start of each Phase Four. Putting out the fire requires a full round of action (rolling on the ground, dousing with liquid, stripping burning clothing). A character who is on fire and continues to act in combat makes all rolls at Difficult while burning.

**Burning characteristics.** When fire damage from a single round exceeds one quarter of the character's current HP, the character makes a Luck roll. On a failure, roll 1D6: that characteristic loses 1D4 points from the burn. (1 = STR; 2 = DEX; 3 = APP/CHA; 4 = CON; 5-6 = no characteristic, HP damage only.) Repeated failures accumulate.

**Metal armour and heat.** Metal armour does not burn but retains heat. A character wearing bronze or iron in sustained fire (2+ rounds) finds their armour too hot to wear after the fire ends: unarmoured for 1D6 turns while it cools, and all skill penalties from armour become Extreme penalties during the cooling period.

### 3.2 Smoke Inhalation

Dense smoke in an enclosed space (burning building, smoke-filled tunnel, burning ship) imposes the following in addition to fire damage:

| Smoke density | HP per round | Additional effect |
|---|---|---|
| Smoke (visible, billowing) | 1D4 HP | Spot and Perception rolls Difficult |
| Dense smoke (choking, near-zero visibility) | 1D6 HP | All rolls Difficult; Stamina roll each round or character falls unconscious |

A character who falls unconscious from smoke inhalation continues to take smoke damage each round until removed from the area.

---

## 4. Cold and Exposure

Cold and extreme weather are attrition threats, not instant killers. The danger is cumulative: each day without adequate protection, food, and warmth chips away at the character's capacity to function.

**Daily exposure roll.** A character inadequately protected against severe cold (insufficient clothing, no shelter at night, wet through) makes a daily Stamina roll (CON x5). On a failure, they take 1 point of CON damage that day. If their CON reaches 0 by this route, they die of exposure.

**Accelerated exposure.** Sudden catastrophic cold (plunging into icy water, being caught in a blizzard unclothed, a winter storm in the open steppe) demands an immediate Stamina roll. Failure: 1D3 CON loss immediately. Fumble: 1D6 CON and the character is incapacitated (hypothermia or frostbite).

### 4.1 Hypothermia

A character who has failed two or more consecutive daily Stamina rolls is hypothermic. Their DEX and INT each drop by 1D3 (temporarily, recovering with warmth and rest). All actions are Difficult. The hypothermic character may not run - only slow, shambling movement. A fumble on any physical roll results in collapse.

Warming a hypothermic character (fire, shelter, warm liquid, body heat) halts further CON loss and restores the temporary DEX/INT penalty at 1 point per hour of warmth and rest.

### 4.2 Frostbite

When the character's CON is reduced to half or less by cold exposure, roll on the following table (1D6):

| Roll | Frostbite location | Permanent effect |
|---|---|---|
| 1-2 | Fingers | DEX reduced by 1 (permanent if not treated within one day) |
| 3 | Toes | Movement reduced permanently unless treated within one day |
| 4 | Nose, ears | APP/CHA reduced by 1D3 (permanent) |
| 5 | Feet | Movement halved (permanent unless treated within one day) |
| 6 | Hands | Both hands affected; weapon use Difficult permanently unless treated within one day |

Frostbite treatment requires warmth, clean bindings, and a successful Medicine roll. On a critical Medicine result, no permanent effect occurs even if the one-day window has passed.

---

## 5. Hunger, Thirst, and Fatigue

These are the hazards of the hostile wilderness: the ancient world does not provision adventurers. A character without supplies degrades over days.

### 5.1 Hunger

A character without adequate food begins to feel the effects after CON/2 days (round down, minimum 2 days). After that threshold:

- **Day 1-3 without food:** all Stamina-type rolls (CON x5) are Difficult.
- **Day 4-6:** all physical actions Difficult; wounds heal at half the normal rate.
- **Day 7+:** 1 point of SIZ lost per day (wasting). When SIZ reaches 0, the character is dying.

A single adequate meal resets the clock. "Adequate" is a single day's rations or equivalent foraging.

### 5.2 Thirst

Thirst is faster and more lethal than hunger.

- **After CON/3 days without water** (round down, minimum 1 day): Stamina rolls Difficult.
- **After CON/2 days:** all actions Difficult; Stamina roll each day or 1 CON lost.
- **After CON days without water:** death.

Desert conditions (heat, exertion) halve all thresholds. Water found in the field may be foul: CON roll or mild disease (Chills, POT 6, see §1).

### 5.3 Fatigue

Extended exertion without rest degrades performance. Use this rule when characters push beyond normal limits: multiple combats in a single day, forced marches, swimming against current, extended climbing.

**Fatigue track.** A character's fatigue is tracked in steps: Fresh, Winded, Tired, Exhausted, Spent.

| State | Effect |
|---|---|
| Fresh | No penalty |
| Winded | -10% to all physical skills |
| Tired | -20% to all physical skills; Stamina rolls required for sustained exertion |
| Exhausted | -40% to all skills; Stamina roll each turn or collapse |
| Spent | Cannot act; must rest |

**Moving along the track.** The GM moves a character one step down the track for each of the following: a full combat (3+ rounds of actual fighting); a significant overland march (half a day's travel at speed); extended swimming, climbing, or carrying heavy loads. A Short Rest (one turn without significant exertion) recovers one step. A full night's rest returns the character to Fresh.

**Interaction with wounds and disease.** A character who is simultaneously wounded, diseased, and exhausted moves down the fatigue track faster (the GM may advance two steps for a significant exertion) and requires extended rest (two nights) to return to Fresh.

---

## 6. Falling and Drowning

### 6.1 Falling

Falling damage is determined by the height of the fall, expressed in narrative categories. The GM assigns the category based on the fiction.

| Fall category | Damage | Examples |
|---|---|---|
| Short | 1D6 | Knocked from a horse; tumbled from a low wall; stumbled off a loading platform |
| Significant | 2D6 to 3D6 | Two stories; a cliff edge; from a ship's mast to the deck |
| Long | 4D6 to 6D6 | A tall tower; a high cliff; from a bridge over a gorge |
| Extreme | 7D6+ | A very great height; a fall into a deep shaft; from a rampart of a citadel tower |

**Armour.** Armour provides half its normal AV against a Short fall only. For Significant falls and above, the impact overwhelms any mundane protection.

**SIZ modifiers.** A very small character (SIZ 5 or below) reduces fall damage by 1D6 (minimum 1D6). A very large character (SIZ 20+) adds 1D6; add another 1D6 for every 20 SIZ above that.

**Jumping.** A character who jumps deliberately (rather than falling) may make a Jump roll. On a success, they may designate the hit location affected by the landing (or choose to roll and take the best result for positioning). A failed Jump roll means they land badly - treat as a fall of one category higher.

**Obstacles.** Landing on stakes, sharp rubble, or similar hazards adds a separate 1D10+1 damage roll in addition to the fall damage.

### 6.2 Drowning and Asphyxiation

A character who is submerged, strangled, or otherwise deprived of air makes Stamina rolls at decreasing ease as each round passes.

| Round | Stamina roll required |
|---|---|
| 1 | CON x10 (Easy) |
| 2 | CON x5 |
| 3 | CON x4 |
| 4 | CON x3 |
| 5 | CON x2 |
| 6 | CON x1 |
| 7+ | Automatic failure |

**Failure at any point:** the character is unconscious and drowning. They take 1D8 HP damage per round from water inhalation. Without immediate rescue, death follows when HP reaches negative CON.

**Smoke:** 1D4 HP per round and the escalating Stamina roll above. Dense smoke: 1D6 HP per round (see §3.2).

**Deliberate strangulation.** A character being strangled makes the escalating CON roll each round. Additionally, the strangler may make a resistance roll (their STR vs. target's CON each round): on a success, the target takes 1D6 HP damage directly. The strangulation can be broken by a successful STR vs. STR resistance roll on the victim's part.

**Taking a breath before submersion.** A character who knew they were going under may make a Luck roll: on a success, they took a full breath first and begin at Round 1. On a failure, they are caught mid-exhale and begin at Round 2.

**Sorcerers and drowning.** A sorcerer spending PP on spells while drowning is burning the same pool used for Fate Point spends. A sorcerer who spends 4 PP on a spell has 4 fewer PP available to Deflect the Killing Blow when the CON rolls fail. This is the PP-pool asymmetry (see P4 §6) playing out in the most direct way.

---

## 7. Chases

A chase is a structured scene, not a sprint. The GM uses the following framework to run it.

### 7.1 Before the Chase Begins

Establish six elements before running the chase:

1. **Starting positions.** Who is running, who is chasing, and what is the initial distance between them (use the range track below).
2. **The course.** What terrain and obstacles are involved? Narrow alleys favour the nimble; open plains favour the horse. Name two or three features that will shape the chase.
3. **Skills required.** What skill(s) will advance or close the gap? On foot: CON (endurance), Agility (bursts of speed and obstacles), Climb, Jump, Swim as appropriate. Mounted: Ride capped by the mount's MOV. Mixed: the chase naturally splits into phases as terrain changes.
4. **Combat during the chase.** Can the quarry or pursuer act in other ways while running? A rogue turning to throw a knife is using an action instead of running that round - they do not make a position roll that turn.
5. **Duration.** Chase rounds represent approximately 10-12 seconds - the same as a combat round. The GM may declare a maximum number of rounds before terrain changes or a conclusion is forced.
6. **Conclusion.** What ends the chase? The quarry reaches a safe door; the pursuer's horse stumbles; the city watch blocks the alley; the river is crossed. Establish at least one possible conclusion for each side.

### 7.2 The Range Track

Five narrative positions describe the distance between pursuer and quarry. Track this verbally; no physical prop is required.

| Position | Description | What is possible |
|---|---|---|
| **Side by Side** | Within arm's reach | Full melee combat; grappling; the quarry is effectively caught |
| **Closing** | A stride or two ahead | Melee attacks are possible but Difficult; thrown weapons at Near range |
| **Engaged** | Visible, a short sprint away | Missile fire at Normal range; the chase is active |
| **Distant** | Visible but losing ground | Missile fire at Far range (Difficult); no melee possible |
| **Out of Sight** | Lost in crowd, darkness, or terrain | The chase ends unless tracking or knowledge of destination |

Each round, each side makes the relevant skill roll. Compare results:

| Pursuer result vs. quarry result | Position shift |
|---|---|
| Pursuer crits, quarry does not | Move two positions closer |
| Pursuer succeeds, quarry fails | Move one position closer |
| Both succeed or both fail | No change |
| Quarry succeeds, pursuer fails | Move one position further |
| Quarry crits, pursuer does not | Move two positions further |

**Starting position.** A chase that begins from ambush or discovery at short range starts at Closing. A chase that begins across a market square starts at Engaged. A fugitive who had a head start begins at Distant.

**Obstacles.** The GM may declare an obstacle (a locked gate, a market stall, a canal, a low roof). Both sides must make a relevant roll (Climb, Jump, Swim) in addition to the chase roll. Failure on the obstacle roll means the character loses one position in addition to the normal round outcome.

**Mounted vs. foot.** A mounted pursuer on open ground automatically moves one position closer each round unless the quarry is also mounted or the terrain constrains the horse (narrow streets, rubble, stairs). In constraining terrain, both use the standard opposed roll.

**Conclusion.** When the quarry reaches Out of Sight for two consecutive rounds, the chase ends: they have escaped. When the pursuer reaches Side by Side, the chase ends: the quarry is caught. Environmental conclusions (the quarry reaches a door they know; the horse falls) are called by the GM at any point.

### 7.3 The Range Track in Play

The five positions are verbal. The GM says "you are now Distant - they are visible but pulling away." The player says "I push harder - CON roll?" The GM confirms. No miniatures, no tape measures, no counting squares. The positions are a shared language for describing a chase, not a precise spatial model.

For the GM's own tracking, a simple notation works: write the positions as a row (SS | CL | EN | DI | OS) and mark the current gap with a slash. Shift the slash each round.

---

## 8. Mass Combat

When PCs are caught up in a larger battle - a siege, a mercenary skirmish, a desert raid, a city riot - the GM does not run every combatant through the standard combat resolution. The outcome of the larger engagement has already been determined by narrative or by the GM's preparation. The PCs are not commanding the battle; they are fighting within it.

**The mass combat abstraction.** Each turn (approximately 5 minutes of battle time), every PC involved in the larger engagement makes a Luck roll (POW x5):

| Result | Effect |
|---|---|
| Critical success | The PC has a moment of clear action; they may target one specific named NPC or achieve one narrative objective this turn with an Easy roll |
| Success | No damage; the PC survives the turn without serious threat |
| Failure | 1D6 HP damage; the PC has been struck by a random attacker, a stray missile, a falling obstacle, or the press of bodies |
| Fumble | 2D6 HP damage; the PC is in serious danger - knocked down, surrounded, pinned, or otherwise in a perilous situation |

**Armour applies.** Subtract AV from damage on both failure and fumble results.

**Targeting specific enemies.** If a PC wishes to seek out and engage a specific opponent within the battle (a named villain, a sorcerer directing the enemy, the enemy's standard-bearer), this is a narrative objective. The GM may require an Agility or Spot roll to locate them in the chaos, then normal combat resolution once contact is made. The mass combat Luck roll is suspended for the PC while they are in direct single combat.

**The larger battle's outcome.** The GM decides whether the overall engagement is won or lost by the PCs' side, and when. A PC who achieves a notable objective (kills the enemy commander, breaks their ritual, captures the gate) may shift the outcome with a single Success or Critical result at the GM's discretion.

**Duration.** The battle lasts as many turns as the GM decides. A brief skirmish is 2-3 turns (10-15 minutes). A sustained engagement is 6-12 turns (30-60 minutes). After the battle ends, PCs may rest and recover normally.

**Fate Points in mass combat.** Fate Point spends (see P4 §7) apply normally during mass combat. A PC who takes 2D6 from a fumble result may spend PP to Shrug Off a Blow or Deflect the Killing Blow as usual. The mass combat abstraction does not suspend the Fate Point economy.

---

## Source notes cited

- `notes/source-10-spot-rules.md`

## Locked decisions applied

- 2026-05-09 - Design doc: theatre-of-mind, no grid (§3.2)
- 2026-05-10 - Borrowing principle: mechanisms only from non-ORC sources
- 2026-05-09 - Fate Points share the Power Point pool (relevant to §6.2 and §8 Fate Point notes)
