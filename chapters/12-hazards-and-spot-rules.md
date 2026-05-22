# Hazards and Spot Rules

> _"The desert has its own laws, older and crueller than the laws of men."_
> _- Robert E. Howard_

GM reference for environmental threats, natural hazards, and situation rules outside ordinary combat. Player-facing rules (prone, aimed attacks, disengaging, close combat, weapon length) are in §5.

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
| Spider venom (large)        | 8      | Slow  | HP damage; CON roll or paralysis for 1D6 hours                              | Giant spiders (Bestiary §9.2) inflict POT 10-14.                                             |
| Ergot (grain contamination) | 6      | Slow  | Delirium, Shakes (as disease onset); cumulative with repeated exposure      | Affects whole groups if a food supply is contaminated.                                       |
| Black lotus extract         | 16     | Slow  | HP damage; failed CON roll = coma for 1D6 days                              | Extremely rare, sorcerer-adjacent. The GM may add Corruption implications for the harvester. |
| Alchemical acid             | varies | Fast  | HP damage to flesh; armour degraded 1 point per round of contact            | See §4 for full fire/acid rules. POT equals the 1D6 type used.                               |

**Named poisons.** The genre convention is that poison is cowardly and honourable characters regard it with contempt - which does not stop rogues. Name poisons for your setting: "Black Tears of Stygia" is more evocative than "Nightshade (POT 13)."

---

## 3. Herbs, Drugs, and Substances

Sword & sorcery is thick with alchemy: lotus-vials in a sorcerer's sleeve; the bitter resin that lets a mercenary captain march another day on no sleep; dream-reeds the tomb-finder consults before breaking a seal. Where the BRP UGE source leaves these implicit, WSR makes them part of the toolkit.

Craft (Apothecary) (§3) prepares and recognises these substances. Medicine (§3) administers them. Most use the Resistance Table - POT vs CON - the same as the poison system in §2. Effects are time-limited unless noted; some substances are addictive (see §3.3).

### 3.1 Healing Herbs

These supplement First Aid and Medicine. A successful Medicine roll is required to apply most healing herbs - the herb is the medicament; the doctor is the technique. Application within one turn of injury achieves the full benefit; later application is less effective.

| Substance               | Effect                                                                                                                                                                                           | Source                            | Cost                      |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- | ------------------------- |
| Balm of the Pale Healer | After a successful Medicine roll on an injury, the patient heals an additional 1D4 HP (the salve binds wounds and stays infection).                                                              | Common; temple apothecaries       | Inexpensive               |
| Salve of Iset's Tears   | Heals 2D4 HP applied within 1 turn of injury. After application, the patient makes POT 6 vs CON; failure means the body rejects further healing for 24 hours (no Medicine or First Aid HP gain). | Uncommon; resin from desert trees | Average                   |
| Vault-Lichen            | Halves the recovery time for crippling §A1 critical effects when chewed daily during convalescence. Cures ordinary fever and infection at the GM's discretion.                                   | Uncommon; cold caves              | Average                   |
| Saramodian Resin        | Cleanses one disease, paralysis poison, or active curse. Costs the recipient 1 CON permanently - the purge is aggressive. Single use per character.                                              | Legendary; cult formulation       | Expensive (or unfindable) |

### 3.2 Drugs and Strange Substances

These produce intentional effects: alertness, fearlessness, dreams, hallucinations. Most are addictive (see §3.3).

| Substance             | Effect                                                                                                                                                                                                                                                   | Source                      | Cost      |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | --------- |
| White Ash of Khundar  | Suppresses fatigue and the need for sleep for 12 hours. After the effect ends, the user makes POT 6 vs CON; failure means 1D3 CON loss, recovering 1/day with rest. Addictive.                                                                           | Mountain plant; uncommon    | Average   |
| Tears of the Wolf-God | Battle rage. After ingestion, +20% to all melee skill rolls and immunity to fear for 1D6 rounds. The user cannot parry, dodge, or cast during the rage. When it ends, the user is exhausted (Stamina rolls every round or fall unconscious).             | Barbaric ritual drink; rare | Average   |
| Lotus Dust            | Inhaled or eaten. Target makes POT 12 vs CON; failure means deep sleep for 1D6 hours - matching the Slumber of the Lotus spell (§6). The sleeper does not wake to ordinary noise. Strongly addictive after three uses.                                   | Lotus harvest; uncommon     | Average   |
| Dream-Reed Vapour     | Burned, inhaled. The user receives a vision pertaining to one question held in mind. The GM narrates a fragment of truth - never a complete answer. POT 10 vs CON: failure means 1 Corruption (sorcerers) or -1 INT for 1D6 hours (non-sorcerers).       | Black-river reeds; rare     | Expensive |
| Iron-blood Tincture   | Drunk by witch-hunters and paranoid kings. For 1 hour after ingestion, all iron and steel the user carries counts as if doubled in ENC for the iron-vs-sorcery rule (§7.12.1). Effectively a -10% per ENC iron penalty to any sorcerer the user opposes. | Bitter draught; uncommon    | Average   |
| Moth-Wing Dust        | Applied to a blade. On a successful hit that breaks skin, target makes POT 8 vs CON; failure means vivid hallucinations for 1D6 rounds during which the target cannot distinguish allies from enemies and attacks the nearest figure.                    | Pale moths; rare            | Expensive |

### 3.3 Addiction

Substances marked addictive create tolerance and dependency with repeated use. After the third use of an addictive substance within a single adventure (or GM-defined equivalent), the user makes POT 8 vs CON; failure means the user is **addicted**.

An addicted character suffers **withdrawal** when more than 24 hours pass without the substance: -10% on all skill rolls until the next dose. After three days without it, the user makes a Difficult CON roll; failure means 1D3 STR or DEX is lost (recovers when the addiction is broken).

Breaking an addiction requires a successful Medicine roll and one full week of rest, free of the substance. A failed Medicine roll means the character relapses on next exposure.

### 3.4 Preparation and Trade

Craft (Apothecary) prepares these substances. Preparation time runs from one day for common salves to one month or more for rare formulations. Most herbs and drugs trade in markets, temple apothecaries, and the back-rooms of certain merchants; some require specific cultures, seasonal harvests, or relationships with particular cults.

The GM may add further substances using the entries above as calibration. The Apothecary's craft is older than any nation's law, and a clever player will find that brewing their own can be more interesting than buying.

---

## 4. Fire and Heat

Fire causes HP damage each round of exposure. Armour provides protection for the first 1D3 rounds before heat penetrates; non-metal armour then loses 1 AV per round of sustained fire. Metal armour does not degrade but becomes dangerously hot (see below).

### 4.1 Fire Intensity

| Source                                               | Damage per round | Notes                                                                                   |
| ---------------------------------------------------- | ---------------- | --------------------------------------------------------------------------------------- |
| Tiny flame (candle, small torch spark)               | 1 HP             | Rarely dangerous unless sustained against skin                                          |
| Torch held against target                            | 1D6 HP           | Luck roll each round or character's clothing catches fire                               |
| Large open fire (bonfire, brazier)                   | 1D6+2 HP         | POW x1 Luck roll each round to avoid catching fire                                      |
| Building fire (room fully alight)                    | 2D6 HP           | Plus smoke inhalation (see §4.2). Character automatically catches fire unless armoured. |
| Intense fire (forge, molten metal, alchemical flame) | 3D6 HP           | Character automatically catches fire; armour provides no protection from the heat.      |

**Catching fire.** Ongoing 1D4 HP per round at the start of each Phase Four. Putting out the fire: full round of action (rolling on ground, dousing, stripping burning clothing). All rolls Difficult while on fire.

**Burning characteristics.** If fire damage in a single round exceeds one-quarter current HP: Luck roll. Failure: roll 1D6 to determine affected characteristic (1=STR, 2=DEX, 3=APP/CHA, 4=CON, 5-6=HP only); lose 1D4 points. Repeated failures accumulate.

**Metal armour and heat.** Does not burn but retains heat. After 2+ rounds in sustained fire: armour is unwearable for 1D6 turns while cooling; all armour skill penalties become Extreme during that period.

### 4.2 Smoke Inhalation

Dense smoke in an enclosed space (burning building, smoke-filled tunnel, burning ship) imposes the following in addition to fire damage:

| Smoke density                               | HP per round | Additional effect                                                           |
| ------------------------------------------- | ------------ | --------------------------------------------------------------------------- |
| Smoke (visible, billowing)                  | 1D4 HP       | Spot and Perception rolls Difficult                                         |
| Dense smoke (choking, near-zero visibility) | 1D6 HP       | All rolls Difficult; Stamina roll each round or character falls unconscious |

A character who falls unconscious from smoke inhalation continues to take smoke damage each round until removed from the area.

---

## 5. Cold and Exposure

Cold is an attrition threat. Each day without adequate protection chips away at the character's capacity to function.

**Daily exposure roll.** Inadequate protection (insufficient clothing, no night shelter, wet through): daily Stamina roll (CON x5). Failure: 1 CON damage. CON reaches 0: death by exposure.

**Accelerated exposure.** Sudden catastrophic cold (plunging into icy water, being caught in a blizzard unclothed, a winter storm in the open steppe) demands an immediate Stamina roll. Failure: 1D3 CON loss immediately. Fumble: 1D6 CON and the character is incapacitated (hypothermia or frostbite).

### 5.1 Hypothermia

A character who has failed two or more consecutive daily Stamina rolls is hypothermic. Their DEX and INT each drop by 1D3 (temporarily, recovering with warmth and rest). All actions are Difficult. The hypothermic character may not run - only slow, shambling movement. A fumble on any physical roll results in collapse.

Warmth and rest halt further CON loss and restore temporary DEX/INT penalty at 1 point per hour.

### 5.2 Frostbite

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

## 6. Hunger, Thirst, and Fatigue

The ancient world does not provision adventurers. A character without supplies degrades over days.

### 6.1 Hunger

A character without adequate food begins to feel the effects after CON/2 days (round down, minimum 2 days). After that threshold:

- **Day 1-3 without food:** all Stamina-type rolls (CON x5) are Difficult.
- **Day 4-6:** all physical actions Difficult; wounds heal at half the normal rate.
- **Day 7+:** 1 point of SIZ lost per day (wasting). When SIZ reaches 0, the character is dying.

A single adequate meal (a day's rations or equivalent foraging) resets the clock.

### 6.2 Thirst

Thirst is faster and more lethal than hunger.

- **After CON/3 days without water** (round down, minimum 1 day): Stamina rolls Difficult.
- **After CON/2 days:** all actions Difficult; Stamina roll each day or 1 CON lost.
- **After CON days without water:** death.

Desert conditions (heat, exertion) halve all thresholds. Water found in the field may be foul: CON roll or mild disease (Chills, POT 6, see §1).

### 6.3 Fatigue

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

## 7. Falling and Drowning

### 7.1 Falling

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

### 7.2 Drowning and Asphyxiation

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

**Smoke:** 1D4 HP per round and the escalating Stamina roll above. Dense smoke: 1D6 HP per round (see §4.2).

**Deliberate strangulation.** A character being strangled makes the escalating CON roll each round. Additionally, the strangler may make a resistance roll (their STR vs. target's CON each round): on a success, the target takes 1D6 HP damage directly. The strangulation can be broken by a successful STR vs. STR resistance roll on the victim's part.

**Taking a breath before submersion.** Luck roll: success, full breath taken, begin at Round 1. Failure, caught mid-exhale, begin at Round 2.

**Sorcerers and drowning.** PP spent on spells while drowning is PP unavailable for Deflect the Killing Blow when the CON rolls fail (§4.6).

---

## 8. Chases

The GM uses the following framework to run a chase.

### 8.1 Before the Chase Begins

Establish six elements before running the chase:

1. **Starting positions.** Who is running, who is chasing, and what is the initial distance between them (use the range track below).
2. **The course.** What terrain and obstacles are involved? Narrow alleys favour the nimble; open plains favour the horse. Name two or three features that will shape the chase.
3. **Skills required.** What skill(s) will advance or close the gap? On foot: CON (endurance), Agility (bursts of speed and obstacles), Climb, Jump, Swim as appropriate. Mounted: Ride capped by the mount's MOV. Mixed: the chase naturally splits into phases as terrain changes.
4. **Combat during the chase.** Can the quarry or pursuer act in other ways while running? A rogue turning to throw a knife is using an action instead of running that round - they do not make a position roll that turn.
5. **Duration.** Chase rounds represent approximately 10-12 seconds - the same as a combat round. The GM may declare a maximum number of rounds before terrain changes or a conclusion is forced.
6. **Conclusion.** What ends the chase? The quarry reaches a safe door; the pursuer's horse stumbles; the city watch blocks the alley; the river is crossed. Establish at least one possible conclusion for each side.

### 8.2 The Range Track

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

### 8.3 Tracking the Chase

Five verbal positions; no miniatures, no tape measures. For GM tracking: write SS | CL | EN | DI | OS and mark the current gap with a slash. Shift each round.

---

## 9. Mass Combat

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

**Fate Points in mass combat.** Fate Point spends (§4.7) apply normally. The mass combat abstraction does not suspend the Fate Point economy.

---

## 10. Theatre-of-Mind Combat

Warrior \* Sorcerer \* Rogue is designed to be played without a grid. Combat is described rather than measured, and the GM's job is to make the description carry the weight that geometry carries in a grid-based game.

### 10.1 Describing Position in Prose

Position is a shared understanding maintained by description. The GM and players together build a mental picture of the fight, specific enough that tactical decisions are meaningful.

**Establish the space before combat begins.** Before anyone draws a weapon, describe the room, the courtyard, the alley. Give it one or two specific features: the collapsed pillar on the left side, the narrow passage at the back, the wall of fire burning along the eastern edge. These are not set dressing - they are the tactical resources the PCs can use and the constraints they must navigate.

**Track the broad positions, not the fine ones.** Engaged, withdrawn, elevated, flanked, separated - these are the categories that matter. You do not need to know that Tharex is four metres from the doorway; you need to know that Tharex is between the doorway and the main body of soldiers, which means he is blocking the escape route. Maintain these broad relationships as combat proceeds.

**Describe transitions actively.** When a PC moves from engaged to withdrawn, or from cover to open, say so. "You back up against the wall; the two soldiers follow, and now you are the one with nowhere to go" is more information than "you move to square D4." Description carries tactical weight when it is specific about what changed.

**Use the fiction when a rule is unclear.** When two players disagree about whether a position is valid - whether there is cover, whether a PC is in range, whether an opponent can reach them - decide based on what makes sense given everything that has been described. Not every tactical ambiguity needs a ruling; some are resolved by asking "what would this look like if we were watching it?" and going with that answer.

### 10.2 Adjudicating Range Bands

The four range bands - Near, Normal, Far, Extreme - are defined in §5.3.7 and give missile weapons a functional range structure without requiring measurement. At the table, apply them as follows.

**Near** is arm's length - within the same engagement zone as the target. Throwing weapons at Near range use close combat rules. Bows at Near range are Difficult because a longbow is not a close-quarters weapon; the attacker is fighting the weapon's design as much as the target.

**Normal** is the default. If the attacker and target are in the same fight and not immediately on top of each other, assume Normal range. This covers most combat scenarios.

**Far** is across a significant space. Across a courtyard, from one end of a great hall to the other, from a rooftop to the street. If you have to describe the space to make the shot make sense, it is Far. Apply the Difficult modifier.

**Extreme** is the edge of the weapon's capability. The extreme range of a war bow is hundreds of metres; the extreme range of a thrown dagger is perhaps fifteen. If a player asks to make a shot that requires you to say "that is genuinely the limit of what this weapon can do," it is Extreme. Apply the 1/5 skill cap.

**Moving between bands.** A character who wants to close from Far to Normal must move; that is at least a Long Move, which delays their DEX rank by half. A character who wants to move from Near to Normal must disengage (see §5.6.1). These costs make range management a meaningful tactical dimension without requiring measurement.

### 10.3 Keeping Tactical Pace Without a Grid

These practices prevent the tactical pace from slowing as players and GM lose track of position.

**Start each round with a brief reset.** Before statements are declared, give the group a one-sentence summary of the situation: "You are engaged with the two spearmen; Seren is at the far end of the room holding off the captain; Kethros is near the door with a clear line to the sorcerer." One sentence, current, accurate. Players can then declare against a shared picture.

**Narrate after every result.** When a roll resolves, describe what happened before moving to the next roll. "The sword connects - the guard goes down clutching his leg - and now the way to the stairs is open, but the other two are turning toward you." This keeps the shared picture current and makes the fight feel like a fight rather than a sequence of dice rolls.

**Let the players describe their victories.** When a PC lands a critical hit or drops an opponent, ask the player what it looks like. "What does that look like - how did you take him down?" This is not a time cost; it is a pacing beat that also enriches the fiction, makes the player feel the weight of the moment, and gives the table a breath between the peaks of the action.

**Rabble go down fast.** The Rabble rule (§5.8) is designed to prevent fights against ordinary opponents from dragging. When a Rabble hits their half-HP threshold, they are done. Narrate it briefly and move on.

**Keep the sorcerer in the picture.** Sorcery's Phase Two resolution and the interruption risk from melee (§5.6.5) need active tracking in theatre-of-mind play. When a sorcerer begins casting, note it openly: "Seren is casting - she needs to make it to Phase Two without taking a hit." This gives the warrior and rogue players the information they need to prioritise protecting the sorcerer, and gives the opposing side's controller (you) the same signal to apply pressure.

---

## 11. Group Stealth and Concealment

When a group needs to move quietly together - a warband creeping toward a sentry post, a band of thieves crossing a temple precinct, a party trying not to wake the household - do not roll Move Quietly for every character. Roll once for the group at the rating of the **least capable** member.

The slowest, loudest, or most armoured character sets the pace. A rogue with Move Quietly 75% gains nothing by accompanying a warrior in bronze scale who has Move Quietly 25% - the warrior is the limit. This produces the genre-correct outcome: scouts go alone or in pairs, and large groups must split up or make peace with being detected.

### 11.1 Exceptions and Refinements

- **Hanging back.** A character may opt out of the group roll by lagging behind. They then roll separately at their own rating; they are no longer "with" the group for stealth purposes.
- **Leadership.** A leader with Strategy may attempt a complementary Strategy roll (§3.3.1) to support the group's Move Quietly: success grants the appropriate complementary bonus, representing specific tactical guidance - staying off the gravel path, taking the gap behind the woodpile, holding for the lull between watch-bell strikes.
- **Individual fumble.** A fumble by any single member still automatically alerts - even if the group roll succeeded overall - but only that member is initially detected. The GM may give the rest of the group one round to react before the sentry's shout commits the situation.

### 11.2 Concealment for Stationary Groups

The same principle applies to Hide. A group concealing itself takes the worst Hide rating among them. Splitting up to hide separately is often the better tactical choice, but it has the price you would expect: when the violence starts, the group is not together.
