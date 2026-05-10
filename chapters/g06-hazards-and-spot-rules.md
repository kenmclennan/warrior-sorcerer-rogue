# G6. Hazards and Spot Rules

> _"The desert has its own laws, older and crueller than the laws of men."_
> _- Robert E. Howard_

GM reference for environmental threats, natural hazards, and situation rules outside ordinary combat. Player-facing rules (prone, aimed attacks, disengaging, close combat, weapon length) are in P5.

---

## 1. Disease

Infection follows exposure: a plague victim's wounds, foul water, ruin miasma, a curse-inflicted bite. The GM sets disease Potency (POT 3-18, treating it as a poison for the initial resistance roll).

**Contracting disease.** The exposed character makes a Stamina roll (CON x5). On a failure, they are infected. A character who has been deliberately infected (forced into contact, no chance to avoid) may not make the initial Stamina roll.

**Daily recovery rolls.** Once infected, the character makes a daily CON roll to resist the disease's progress. The multiplier starts at x2 and increases by x1 each day the character fails: CON x2 on day one, CON x3 on day two, and so on. A fumble on the recovery roll reduces the multiplier by 1 (instead of increasing it) - the character is getting worse faster. A character who achieves three consecutive daily successes throws off the infection and recovers.

**Strenuous conditions worsen recovery.** Wilderness travel reduces the roll multiplier by 1 step (CON x5 to CON x4, etc.); combat conditions reduce further. A bedridden character with proper care rolls at the base rate.

**Illness Severity.** The number of consecutive daily failures determines how badly the disease manifests:

| Consecutive failures | Severity                    | Characteristic loss rate |
| -------------------- | --------------------------- | ------------------------ |
| 0                    | None - infection thrown off | -                        |
| 1                    | Mild                        | 1 point per week         |
| 2                    | Acute                       | 1 point per day          |
| 3                    | Severe                      | 1 point per hour         |
| 4+                   | Terminal                    | 1 point per minute       |

### 1.1 Disease Types

Each disease attacks a different characteristic. Same recovery mechanic throughout; only the target characteristic differs.

| Disease type | Characteristic attacked | Genre examples                                              |
| ------------ | ----------------------- | ----------------------------------------------------------- |
| Atrophy      | STR                     | Wasting sickness, creeping paralysis                        |
| Chills       | CON                     | Marsh fever, sweating sickness, hypothermic infection       |
| Delirium     | INT                     | Brain fever, poison-induced confusion, cursed sleep         |
| Malaise      | POW                     | Soul-drain, arcane exhaustion, spirit sickness              |
| Shakes       | DEX                     | Palsy, nerve damage, black-tongue fever                     |
| Pox          | APP (or CHA)            | Disfiguring plague, brands of corruption, plague-god's mark |

**Sorcerers and Malaise.** Reduced POW means a reduced PP pool. Every PP spent on spells or Fate Points is one fewer available for the next recovery roll. The spiral is intentional.

**Characteristic recovery.** Lost points return at the same rate they were lost, once infection is thrown off - no faster. Medicine applied daily improves the rate by one step.

---

## 2. Poison

Poisons use the Resistance Table: POT vs. CON. Overcomes CON: full POT in HP damage. Fails: half POT (round up). Two doses of the same poison do not combine into a double-strength dose.

**Delay.** Fast poisons take effect after 3 combat rounds (roughly 36 seconds). Slow poisons take effect after 3 full turns (roughly 45 minutes). The delay is fixed for the poison type; it cannot be extended by the victim.

**Antidotes.** An antidote has its own POT. Administered within 6 turns of poisoning, the antidote's POT subtracts from the poison's POT before the resistance roll is made. An antidote administered after 6 turns has no effect on damage already dealt, but may prevent ongoing effects.

**Delivery.** Unless otherwise noted, all poisons below assume ingestion or injection (blade, bite, sting). Contact poisons are rarer; a bare-hand search of a poisoned object requires a Luck roll to avoid exposure.

### 2.1 Poison Reference

The following are representative ancient-world poisons for GM use. POT values assume a full dose; fractional doses halve POT. The GM may create further poisons using these as calibration points.

| Poison                      | POT    | Delay | Primary effect                                                              | Notes                                                                                        |
| --------------------------- | ------ | ----- | --------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Hemlock                     | 14     | Slow  | HP damage; limb paralysis precedes fatal collapse                           | Socrates. The limbs go cold first.                                                           |
| Henbane (Hyoscyamus)        | 10     | Slow  | Delirium (INT attack, -1D3 INT), HP damage                                  | Causes vivid hallucinations before unconsciousness.                                          |
| Nightshade (Belladonna)     | 13     | Slow  | HP damage; rapid heart failure                                              | Small doses cause dilated pupils and mania first.                                            |
| Manchineel sap              | 8      | Fast  | HP damage to skin and throat; blindness if eyes contacted                   | Burning, blistering on contact; ingestion is quickly lethal.                                 |
| Viper venom                 | 9      | Slow  | HP damage; CON roll or severe swelling, -1D3 STR                            | Desert asp; common in ruins and grain stores.                                                |
| Scorpion sting              | 6      | Fast  | HP damage; failed CON roll = muscle spasms, actions Difficult for 1D6 hours | Large desert scorpions may reach POT 10.                                                     |
| Stonefish toxin             | 12     | Fast  | Agonising HP damage; failed CON roll = unconscious 1D6 hours                | Coastal/river encounters; wound site turns black.                                            |
| Spider venom (large)        | 8      | Slow  | HP damage; CON roll or paralysis for 1D6 hours                              | Giant spiders (Bestiary G3 §2) inflict POT 10-14.                                            |
| Ergot (grain contamination) | 6      | Slow  | Delirium, Shakes (as disease onset); cumulative with repeated exposure      | Affects whole groups if a food supply is contaminated.                                       |
| Black lotus extract         | 16     | Slow  | HP damage; failed CON roll = coma for 1D6 days                              | Extremely rare, sorcerer-adjacent. The GM may add Corruption implications for the harvester. |
| Alchemical acid             | varies | Fast  | HP damage to flesh; armour degraded 1 point per round of contact            | See §3 for full fire/acid rules. POT equals the 1D6 type used.                               |

**Named poisons.** The genre convention is that poison is cowardly and honourable characters regard it with contempt - which does not stop rogues. Name poisons for your setting: "Black Tears of Stygia" is more evocative than "Nightshade (POT 13)."

---

## 3. Fire and Heat

Fire causes HP damage each round of exposure. Armour provides protection for the first 1D3 rounds before heat penetrates; non-metal armour then loses 1 AV per round of sustained fire. Metal armour does not degrade but becomes dangerously hot (see below).

### 3.1 Fire Intensity

| Source                                               | Damage per round | Notes                                                                                   |
| ---------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------- |
| Tiny flame (candle, small torch spark)               | 1 HP             | Rarely dangerous unless sustained against skin                                          |
| Torch held against target                            | 1D6 HP           | Luck roll each round or character's clothing catches fire                               |
| Large open fire (bonfire, brazier)                   | 1D6+2 HP         | POW x1 Luck roll each round to avoid catching fire                                      |
| Building fire (room fully alight)                    | 2D6 HP           | Plus smoke inhalation (see §3.2). Character automatically catches fire unless armoured. |
| Intense fire (forge, molten metal, alchemical flame) | 3D6 HP           | Character automatically catches fire; armour provides no protection from the heat.      |

**Catching fire.** Ongoing 1D4 HP per round at the start of each Phase Four. Putting out the fire: full round of action (rolling on ground, dousing, stripping burning clothing). All rolls Difficult while on fire.

**Burning characteristics.** If fire damage in a single round exceeds one-quarter current HP: Luck roll. Failure: roll 1D6 to determine affected characteristic (1=STR, 2=DEX, 3=APP/CHA, 4=CON, 5-6=HP only); lose 1D4 points. Repeated failures accumulate.

**Metal armour and heat.** Does not burn but retains heat. After 2+ rounds in sustained fire: armour is unwearable for 1D6 turns while cooling; all armour skill penalties become Extreme during that period.

### 3.2 Smoke Inhalation

Dense smoke in an enclosed space (burning building, smoke-filled tunnel, burning ship) imposes the following in addition to fire damage:

| Smoke density                               | HP per round | Additional effect                                                           |
| ------------------------------------------- | ------------ | --------------------------------------------------------------------------- |
| Smoke (visible, billowing)                  | 1D4 HP       | Spot and Perception rolls Difficult                                         |
| Dense smoke (choking, near-zero visibility) | 1D6 HP       | All rolls Difficult; Stamina roll each round or character falls unconscious |

A character who falls unconscious from smoke inhalation continues to take smoke damage each round until removed from the area.

---

## 4. Cold and Exposure

Cold is an attrition threat. Each day without adequate protection chips away at the character's capacity to function.

**Daily exposure roll.** Inadequate protection (insufficient clothing, no night shelter, wet through): daily Stamina roll (CON x5). Failure: 1 CON damage. CON reaches 0: death by exposure.

**Accelerated exposure.** Sudden catastrophic cold (plunging into icy water, being caught in a blizzard unclothed, a winter storm in the open steppe) demands an immediate Stamina roll. Failure: 1D3 CON loss immediately. Fumble: 1D6 CON and the character is incapacitated (hypothermia or frostbite).

### 4.1 Hypothermia

A character who has failed two or more consecutive daily Stamina rolls is hypothermic. Their DEX and INT each drop by 1D3 (temporarily, recovering with warmth and rest). All actions are Difficult. The hypothermic character may not run - only slow, shambling movement. A fumble on any physical roll results in collapse.

Warmth and rest halt further CON loss and restore temporary DEX/INT penalty at 1 point per hour.

### 4.2 Frostbite

When the character's CON is reduced to half or less by cold exposure, roll on the following table (1D6):

| Roll | Frostbite location | Permanent effect                                                                    |
| ---- | ------------------ | ----------------------------------------------------------------------------------- |
| 1-2  | Fingers            | DEX reduced by 1 (permanent if not treated within one day)                          |
| 3    | Toes               | Movement reduced permanently unless treated within one day                          |
| 4    | Nose, ears         | APP/CHA reduced by 1D3 (permanent)                                                  |
| 5    | Feet               | Movement halved (permanent unless treated within one day)                           |
| 6    | Hands              | Both hands affected; weapon use Difficult permanently unless treated within one day |

Frostbite treatment requires warmth, clean bindings, and a successful Medicine roll. On a critical Medicine result, no permanent effect occurs even if the one-day window has passed.

---

## 5. Hunger, Thirst, and Fatigue

The ancient world does not provision adventurers. A character without supplies degrades over days.

### 5.1 Hunger

A character without adequate food begins to feel the effects after CON/2 days (round down, minimum 2 days). After that threshold:

- **Day 1-3 without food:** all Stamina-type rolls (CON x5) are Difficult.
- **Day 4-6:** all physical actions Difficult; wounds heal at half the normal rate.
- **Day 7+:** 1 point of SIZ lost per day (wasting). When SIZ reaches 0, the character is dying.

A single adequate meal (a day's rations or equivalent foraging) resets the clock.

### 5.2 Thirst

Thirst is faster and more lethal than hunger.

- **After CON/3 days without water** (round down, minimum 1 day): Stamina rolls Difficult.
- **After CON/2 days:** all actions Difficult; Stamina roll each day or 1 CON lost.
- **After CON days without water:** death.

Desert conditions (heat, exertion) halve all thresholds. Water found in the field may be foul: CON roll or mild disease (Chills, POT 6, see §1).

### 5.3 Fatigue

Extended exertion without rest degrades performance. Use this rule when characters push beyond normal limits: multiple combats in a single day, forced marches, swimming against current, extended climbing.

**Fatigue track.** A character's fatigue is tracked in steps: Fresh, Winded, Tired, Exhausted, Spent.

| State     | Effect                                                                     |
| --------- | -------------------------------------------------------------------------- |
| Fresh     | No penalty                                                                 |
| Winded    | -10% to all physical skills                                                |
| Tired     | -20% to all physical skills; Stamina rolls required for sustained exertion |
| Exhausted | -40% to all skills; Stamina roll each turn or collapse                     |
| Spent     | Cannot act; must rest                                                      |

**Moving along the track.** One step down for: a full combat (3+ rounds); a significant overland march; extended swimming, climbing, or heavy loads. Short Rest (one turn): recover one step. Full night's rest: return to Fresh.

**Interaction with wounds and disease.** Wounded, diseased, and exhausted simultaneously: GM may advance two steps for a significant exertion; requires two nights' rest to return to Fresh.

---

## 6. Falling and Drowning

### 6.1 Falling

The GM assigns a narrative fall category based on the fiction.

| Fall category | Damage     | Examples                                                                         |
| ------------- | ---------- | -------------------------------------------------------------------------------- |
| Short         | 1D6        | Knocked from a horse; tumbled from a low wall; stumbled off a loading platform   |
| Significant   | 2D6 to 3D6 | Two stories; a cliff edge; from a ship's mast to the deck                        |
| Long          | 4D6 to 6D6 | A tall tower; a high cliff; from a bridge over a gorge                           |
| Extreme       | 7D6+       | A very great height; a fall into a deep shaft; from a rampart of a citadel tower |

**Armour.** Armour provides half its normal AV against a Short fall only. For Significant falls and above, the impact overwhelms any mundane protection.

**SIZ modifiers.** A very small character (SIZ 5 or below) reduces fall damage by 1D6 (minimum 1D6). A very large character (SIZ 20+) adds 1D6; add another 1D6 for every 20 SIZ above that.

**Jumping.** Deliberate jump: Jump roll. Success: designate the hit location for the landing. Failure: land badly, treat as one category higher.

**Obstacles.** Landing on stakes, sharp rubble, or similar hazards adds a separate 1D10+1 damage roll in addition to the fall damage.

### 6.2 Drowning and Asphyxiation

Submerged, strangled, or otherwise deprived of air: Stamina rolls at decreasing ease each round.

| Round | Stamina roll required |
| ----- | --------------------- |
| 1     | CON x10 (Easy)        |
| 2     | CON x5                |
| 3     | CON x4                |
| 4     | CON x3                |
| 5     | CON x2                |
| 6     | CON x1                |
| 7+    | Automatic failure     |

**Failure at any point:** unconscious and drowning. 1D8 HP per round from water inhalation. Death when HP reaches negative CON without rescue.

**Smoke:** 1D4 HP per round and the escalating Stamina roll above. Dense smoke: 1D6 HP per round (see §3.2).

**Deliberate strangulation.** A character being strangled makes the escalating CON roll each round. Additionally, the strangler may make a resistance roll (their STR vs. target's CON each round): on a success, the target takes 1D6 HP damage directly. The strangulation can be broken by a successful STR vs. STR resistance roll on the victim's part.

**Taking a breath before submersion.** Luck roll: success, full breath taken, begin at Round 1. Failure, caught mid-exhale, begin at Round 2.

**Sorcerers and drowning.** PP spent on spells while drowning is PP unavailable for Deflect the Killing Blow when the CON rolls fail (P4 §6).

---

## 7. Chases

The GM uses the following framework to run a chase.

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

| Position         | Description                         | What is possible                                                       |
| ---------------- | ----------------------------------- | ---------------------------------------------------------------------- |
| **Side by Side** | Within arm's reach                  | Full melee combat; grappling; the quarry is effectively caught         |
| **Closing**      | A stride or two ahead               | Melee attacks are possible but Difficult; thrown weapons at Near range |
| **Engaged**      | Visible, a short sprint away        | Missile fire at Normal range; the chase is active                      |
| **Distant**      | Visible but losing ground           | Missile fire at Far range (Difficult); no melee possible               |
| **Out of Sight** | Lost in crowd, darkness, or terrain | The chase ends unless tracking or knowledge of destination             |

Each round, each side makes the relevant skill roll. Compare results:

| Pursuer result vs. quarry result | Position shift             |
| -------------------------------- | -------------------------- |
| Pursuer crits, quarry does not   | Move two positions closer  |
| Pursuer succeeds, quarry fails   | Move one position closer   |
| Both succeed or both fail        | No change                  |
| Quarry succeeds, pursuer fails   | Move one position further  |
| Quarry crits, pursuer does not   | Move two positions further |

**Starting position.** Ambush or short-range discovery: Closing. Market square: Engaged. Head start: Distant.

**Obstacles.** The GM may declare an obstacle (a locked gate, a market stall, a canal, a low roof). Both sides must make a relevant roll (Climb, Jump, Swim) in addition to the chase roll. Failure on the obstacle roll means the character loses one position in addition to the normal round outcome.

**Mounted vs. foot.** A mounted pursuer on open ground automatically moves one position closer each round unless the quarry is also mounted or the terrain constrains the horse (narrow streets, rubble, stairs). In constraining terrain, both use the standard opposed roll.

**Conclusion.** Quarry at Out of Sight for two consecutive rounds: escaped. Pursuer at Side by Side: caught. Environmental conclusions (quarry reaches a known door; horse falls) called by the GM at any point.

### 7.3 Tracking the Chase

Five verbal positions; no miniatures, no tape measures. For GM tracking: write SS | CL | EN | DI | OS and mark the current gap with a slash. Shift each round.

---

## 8. Mass Combat

When PCs are caught up in a larger battle, the GM does not run every combatant through standard combat resolution. The engagement's outcome has already been determined by narrative or prep; the PCs are fighting within it, not commanding it.

**The mass combat abstraction.** Each turn (approximately 5 minutes of battle time), every PC involved in the larger engagement makes a Luck roll (POW x5):

| Result           | Effect                                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Critical success | The PC has a moment of clear action; they may target one specific named NPC or achieve one narrative objective this turn with an Easy roll |
| Success          | No damage; the PC survives the turn without serious threat                                                                                 |
| Failure          | 1D6 HP damage; the PC has been struck by a random attacker, a stray missile, a falling obstacle, or the press of bodies                    |
| Fumble           | 2D6 HP damage; the PC is in serious danger - knocked down, surrounded, pinned, or otherwise in a perilous situation                        |

**Armour applies.** Subtract AV from damage on both failure and fumble results.

**Targeting specific enemies.** Seeking a specific opponent (a named villain, the enemy's standard-bearer) is a narrative objective. GM may require Agility or Spot to locate them, then normal combat once contact is made. The mass combat Luck roll is suspended during direct single combat.

**The larger battle's outcome.** The GM decides when and whether the PCs' side wins. A PC who achieves a notable objective (kills the enemy commander, breaks the ritual, captures the gate) may shift the outcome at the GM's discretion.

**Duration.** Brief skirmish: 2-3 turns (10-15 minutes). Sustained engagement: 6-12 turns (30-60 minutes). PCs rest and recover normally after.

**Fate Points in mass combat.** Fate Point spends (P4 §7) apply normally. The mass combat abstraction does not suspend the Fate Point economy.

---

## Source notes cited

- `notes/source-10-spot-rules.md`

## Locked decisions applied

- 2026-05-09 - Design doc: theatre-of-mind, no grid (§3.2)
- 2026-05-10 - Borrowing principle: mechanisms only from non-ORC sources
- 2026-05-09 - Fate Points share the Power Point pool (relevant to §6.2 and §8 Fate Point notes)
