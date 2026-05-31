# 8 Spot Rules

## 8.1 Disease

Infection follows exposure: a plague victim's wounds, foul water, ruin miasma, a curse-inflicted bite.

**Contracting disease.** The exposed character makes a Stamina roll (CON × 5). On a success, the disease is avoided. On a failure, the character is infected.

**Daily recovery rolls.** On the morning of the second day, the infected character rolls CON × 2 to throw off the disease. On the morning of the third day, CON × 3. The multiplier increases by 1 each day until the disease is overcome. A single success ends the infection. A fumble reduces the multiplier by 1 instead of increasing it - the character is getting worse faster.

**Strenuous conditions worsen recovery.** Reduce the recovery multiplier by 1 per outstanding condition: not in bed and resting, hiking the wilderness, engaged in rigorous activity such as combat, or suffering from another disease or open wounds.

**Illness Severity.** The number of times the character has failed their daily CON roll so far determines how badly the disease manifests:

| Failed rolls | Severity | Characteristic loss rate |
| ------------ | -------- | ------------------------ |
| 1            | Mild     | 1 point per week         |
| 2            | Acute    | 1 point per day          |
| 3            | Severe   | 1 point per hour         |
| 4+           | Terminal | 1 point per minute       |

### 8.1.1 Disease Types

Each disease attacks a different characteristic. Same recovery mechanic throughout; only the target characteristic differs.

| Disease type | Characteristic attacked | Genre examples                                              |
| ------------ | ----------------------- | ----------------------------------------------------------- |
| Atrophy      | STR                     | Wasting sickness, creeping paralysis                        |
| Chills       | CON                     | Marsh fever, sweating sickness, hypothermic infection       |
| Delirium     | INT                     | Brain fever, poison-induced confusion, cursed sleep         |
| Malaise      | POW                     | Soul-drain, arcane exhaustion, spirit sickness              |
| Shakes       | DEX                     | Palsy, nerve damage, black-tongue fever                     |
| Pox          | CHA                     | Disfiguring plague, brands of corruption, plague-god's mark |

**Sorcerers and Malaise.** Reduced POW means a reduced PP pool. Every PP spent on spells or Fate Points is one fewer available for the next recovery roll. The spiral is intentional.

**Characteristic recovery.** Lost points return at the same rate they were lost, once infection is thrown off - no faster. Medicine applied daily improves the rate by one step.

## 8.2 Poison

Poisons use the Resistance Table: POT vs. CON. Overcomes CON: full POT in HP damage. Fails: half POT (round up). Two doses of the same poison do not combine into a double-strength dose.

**Delay.** Fast poisons take effect after 3 combat rounds (roughly 36 seconds). Slow poisons take effect after 3 full turns (roughly 45 minutes). The delay is fixed for the poison type; it cannot be extended by the victim.

**Antidotes.** An antidote has its own POT. Administered within 6 turns of poisoning, the antidote's POT subtracts from the poison's POT before the resistance roll is made. An antidote administered after 6 turns has no effect on damage already dealt, but may prevent ongoing effects.

**Delivery.** Unless otherwise noted, all poisons below assume ingestion or injection (blade, bite, sting). Contact poisons are rarer; a bare-hand search of a poisoned object requires a Luck roll to avoid exposure.

**Named poisons.** The genre convention is that poison is cowardly and honourable characters regard it with contempt - which does not stop rogues. Name poisons for your setting: "Black Tears of Stygia" is more evocative than "Nightshade (POT 13)."

For the catalogue of representative ancient-world poisons - hemlock, nightshade, viper venom, stonefish toxin, black lotus extract, alchemical acid, and others - see §10.2.

## 8.3 Herbs, Drugs, and Substances

Sword & sorcery is thick with alchemy: lotus-vials in a sorcerer's sleeve; the bitter resin that lets a mercenary captain march another day on no sleep; dream-reeds the tomb-finder consults before breaking a seal. Where the BRP UGE source leaves these implicit, WSR makes them part of the toolkit.

Craft (Apothecary) (§3.4.8) prepares and recognises these substances. Medicine (§3.4.25) administers them. Most use the Resistance Table - POT vs CON - the same as the poison system in §8.2. Healing herbs additionally require a successful Medicine roll on application - the herb is the medicament; the doctor is the technique. Effects are time-limited unless noted; some substances are addictive (see §8.3.1).

For the catalogue of specific healing herbs, drugs, and strange substances - balms, salves, battle-rages, lotus dusts, dream vapours, iron-blood tinctures, and more - see §10.1 (Healing Herbs) and §10.3 (Drugs and Strange Substances).

### 8.3.1 Addiction

Substances marked addictive create tolerance and dependency with repeated use. After the third use of an addictive substance within a single week, the user makes POT 8 vs CON; failure means the user is **addicted**.

An addicted character suffers **withdrawal** when more than 24 hours pass without the substance: -10% on all skill rolls until the next dose. After three days without it, the user makes a Difficult CON roll; failure means 1D3 STR or DEX is lost (recovers when the addiction is broken).

Breaking an addiction requires a successful Medicine roll and one full week of rest, free of the substance. A failed Medicine roll means the character relapses on next exposure.

### 8.3.2 Preparation and Trade

Craft (Apothecary) prepares these substances. Preparation time runs from one day for common salves to one month or more for rare formulations. Most herbs and drugs trade in markets, temple apothecaries, and the back-rooms of certain merchants; some require specific cultures, seasonal harvests, or relationships with particular cults.

## 8.4 Fire and Heat

Fire causes HP damage each round of exposure. Armour provides protection for the first 1D3 rounds before heat penetrates; non-metal armour then loses 1 AV per round of sustained fire. Metal armour does not degrade but becomes dangerously hot (see below).

### 8.4.1 Fire Intensity

| Source                                               | Damage per round | Notes                                                                                     |
| ---------------------------------------------------- | ---------------- | ----------------------------------------------------------------------------------------- |
| Tiny flame (candle, small torch spark)               | 1 HP             | Rarely dangerous unless sustained against skin                                            |
| Torch held against target                            | 1D6 HP           | Luck roll each round or character's clothing catches fire                                 |
| Large open fire (bonfire, brazier)                   | 1D6+2 HP         | POW x1 Luck roll each round to avoid catching fire                                        |
| Building fire (room fully alight)                    | 2D6 HP           | Plus smoke inhalation (see §8.4.2). Character automatically catches fire unless armoured. |
| Intense fire (forge, molten metal, alchemical flame) | 3D6 HP           | Character automatically catches fire; armour provides no protection from the heat.        |

**Catching fire.** Ongoing 1D4 HP per round at the end of each round. Putting out the fire: full round of action (rolling on ground, dousing, stripping burning clothing). All rolls Difficult while on fire.

**Burning characteristics.** If fire damage in a single round exceeds one-quarter current HP: Luck roll. Failure: roll 1D6 to determine affected characteristic (1=STR, 2=DEX, 3=CHA, 4=CON, 5-6=HP only); lose 1D4 points. Repeated failures accumulate.

**Metal armour and heat.** Does not burn but retains heat. After 2+ rounds in sustained fire: armour is unwearable for 1D6 turns while cooling; all armour skill penalties become Extreme during that period.

### 8.4.2 Smoke Inhalation

Dense smoke in an enclosed space (burning building, smoke-filled tunnel, burning ship) imposes the following in addition to fire damage:

| Smoke density                               | HP per round | Additional effect                                                           |
| ------------------------------------------- | ------------ | --------------------------------------------------------------------------- |
| Smoke (visible, billowing)                  | 1D4 HP       | Spot and Perception rolls Difficult                                         |
| Dense smoke (choking, near-zero visibility) | 1D6 HP       | All rolls Difficult; Stamina roll each round or character falls unconscious |

A character who falls unconscious from smoke inhalation continues to take smoke damage each round until removed from the area.

## 8.5 Cold and Exposure

Cold is an attrition threat. Each day without adequate protection chips away at the character's capacity to function.

**Daily exposure roll.** Inadequate protection (insufficient clothing, no night shelter, wet through): daily Stamina roll (CON x5). Failure: 1 CON damage. CON reaches 0: death by exposure.

**Accelerated exposure.** Sudden catastrophic cold (plunging into icy water, being caught in a blizzard unclothed, a winter storm in the open steppe) demands an immediate Stamina roll. Failure: 1D3 CON loss immediately. Fumble: 1D6 CON and the character is incapacitated (hypothermia or frostbite).

### 8.5.1 Hypothermia

A character who has failed two or more consecutive daily Stamina rolls is hypothermic. Their DEX and INT each drop by 1D3 (temporarily, recovering with warmth and rest). All actions are Difficult. The hypothermic character may not run - only slow, shambling movement. A fumble on any physical roll results in collapse.

Warmth and rest halt further CON loss and restore temporary DEX/INT penalty at 1 point per hour.

### 8.5.2 Frostbite

When the character's CON is reduced to half or less by cold exposure, roll on the following table (1D6):

| Roll | Frostbite location | Permanent effect                                                                    |
| ---- | ------------------ | ----------------------------------------------------------------------------------- |
| 1-2  | Fingers            | DEX reduced by 1 (permanent if not treated within one day)                          |
| 3    | Toes               | Movement reduced permanently unless treated within one day                          |
| 4    | Nose, ears         | CHA reduced by 1D3 (permanent)                                                      |
| 5    | Feet               | Movement halved (permanent unless treated within one day)                           |
| 6    | Hands              | Both hands affected; weapon use Difficult permanently unless treated within one day |

Frostbite treatment requires warmth, clean bindings, and a successful Medicine roll. On a critical Medicine result, no permanent effect occurs even if the one-day window has passed.

## 8.6 Hunger, Thirst, and Fatigue

The ancient world does not provision adventurers. A character without supplies degrades over days.

### 8.6.1 Hunger

A character without adequate food begins to feel the effects after CON/2 days (round down, minimum 2 days). After that threshold:

- **Day 1-3 without food:** all Stamina rolls are Difficult.
- **Day 4-6:** all physical actions Difficult; wounds heal at half the normal rate.
- **Day 7+:** 1 point of SIZ lost per day (wasting). When SIZ reaches 0, the character is dying.

A single adequate meal (a day's rations or equivalent foraging) resets the clock.

### 8.6.2 Thirst

Thirst is faster and more lethal than hunger.

- **After CON/3 days without water** (round down, minimum 1 day): Stamina rolls Difficult.
- **After CON/2 days:** all actions Difficult; Stamina roll each day or 1 CON lost.
- **After CON days without water:** death.

Desert conditions (heat, exertion) halve all thresholds. Water found in the field may be foul: CON roll or mild disease (Chills, POT 6, see §8.1.1).

### 8.6.3 Fatigue

Extended exertion without rest degrades performance. Use this rule when characters push beyond normal limits: multiple combats in a single day, forced marches, swimming against current, extended climbing.

**Fatigue track.** A character's fatigue is tracked in steps: Fresh, Winded, Tired, Exhausted, Spent.

| State     | Effect                                                                     |
| --------- | -------------------------------------------------------------------------- |
| Fresh     | No penalty                                                                 |
| Winded    | -10% to all physical skills                                                |
| Tired     | -20% to all physical skills; Stamina rolls required for sustained exertion |
| Exhausted | -40% to all skills; Stamina roll each turn or collapse                     |
| Spent     | Cannot act; must rest                                                      |

**Moving along the track.** One step down for any of: a hard combat that genuinely strains (not a brief skirmish ended in three rounds); a long overland march; extended exertion such as swimming against current, sustained climbing, or carrying a heavy load over distance. The GM judges when an exertion is hard enough to advance fatigue. Short Rest (one turn): recover one step. Full night's rest: return to Fresh.

**Interaction with wounds and disease.** Wounded, diseased, and exhausted simultaneously: GM may advance two steps for a significant exertion; requires two nights' rest to return to Fresh.

## 8.7 Falling and Drowning

### 8.7.1 Falling

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

### 8.7.2 Drowning and Asphyxiation

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

**Smoke:** 1D4 HP per round and the escalating Stamina roll above. Dense smoke: 1D6 HP per round (see §8.4.2).

**Deliberate strangulation.** A character being strangled makes the escalating CON roll each round. Additionally, the strangler may make a resistance roll (their STR vs. target's CON each round): on a success, the target takes 1D6 HP damage directly. The strangulation can be broken by a successful STR vs. STR resistance roll on the victim's part.

**Taking a breath before submersion.** Luck roll: success, full breath taken, begin at Round 1 (CON × 10). Failure, caught mid-exhale, begin at CON × 3 - the escalation then continues normally (CON × 2 the next round, CON × 1 the round after, automatic failure thereafter).

**Sorcerers and drowning.** PP spent on spells while drowning is PP unavailable for Deflect the Killing Blow when the CON rolls fail (§5.5).

## 8.8 Chases

The GM uses the following framework to run a chase.

### 8.8.1 Before the Chase Begins

Establish six elements before running the chase:

1. **Starting positions.** Who is running, who is chasing, and what is the initial distance between them (use the range track below).
2. **The course.** What terrain and obstacles are involved? Narrow alleys favour the nimble; open plains favour the horse. Name two or three features that will shape the chase.
3. **Skills required.** What skill(s) will advance or close the gap? On foot: CON (endurance), Agility (bursts of speed and obstacles), Climb, Jump, Swim as appropriate. Mounted: Ride capped by the mount's MOV. Mixed: the chase naturally splits into phases as terrain changes.
4. **Combat during the chase.** Can the quarry or pursuer act in other ways while running? A rogue turning to throw a knife is using an action instead of running that round - they do not make a position roll that turn.
5. **Duration.** Chase rounds represent twelve seconds - the same as a combat round. The GM may declare a maximum number of rounds before terrain changes or a conclusion is forced.
6. **Conclusion.** What ends the chase? The quarry reaches a safe door; the pursuer's horse stumbles; the city watch blocks the alley; the river is crossed. Establish at least one possible conclusion for each side.

### 8.8.2 The Range Track

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

**Encumbrance.** A character running in heavy armour or carrying a significant load must make a Difficult Stamina roll (CON × 5, halved) each round to keep pace. Failure: lose one position in addition to the normal round outcome. Two consecutive failures: the character is winded and cannot continue the chase that round - they stop, double over, and the other side moves freely. Light armour and a sensible load impose no penalty.

**Conclusion.** Quarry at Out of Sight for two consecutive rounds: escaped. Pursuer at Side by Side: caught. Environmental conclusions (quarry reaches a known door; horse falls) called by the GM at any point.

### 8.8.3 Tracking the Chase

Five verbal positions; no miniatures, no tape measures. For GM tracking: write SS | CL | EN | DI | OS and mark the current gap with a slash. Shift each round.

## 8.9 Group Stealth and Concealment

When a group needs to move quietly together - a warband creeping toward a sentry post, a band of thieves crossing a temple precinct, a party trying not to wake the household - do not roll Move Quietly for every character. Roll once for the group at the rating of the **least capable** member.

The slowest, loudest, or most armoured character sets the pace. A rogue with Move Quietly 75% gains nothing by accompanying a warrior in bronze scale who has Move Quietly 25% - the warrior is the limit. This produces the genre-correct outcome: scouts go alone or in pairs, and large groups must split up or make peace with being detected.

### 8.9.1 Exceptions and Refinements

- **Hanging back.** A character may opt out of the group roll by lagging behind. They then roll separately at their own rating; they are no longer "with" the group for stealth purposes.
- **Leadership.** A leader with Strategy may attempt a complementary Strategy roll (§5.3.3) to support the group's Move Quietly: success grants the appropriate complementary bonus, representing specific tactical guidance - staying off the gravel path, taking the gap behind the woodpile, holding for the lull between watch-bell strikes.
- **Individual fumble.** A fumble by any single member still automatically alerts - even if the group roll succeeded overall - but only that member is initially detected. The GM may give the rest of the group one round to react before the sentry's shout commits the situation.

### 8.9.2 Concealment for Stationary Groups

The same principle applies to Hide. A group concealing itself takes the worst Hide rating among them. Splitting up to hide separately is often the better tactical choice, but it has the price you would expect: when the violence starts, the group is not together.
