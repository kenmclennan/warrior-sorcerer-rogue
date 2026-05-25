# 5 System

This chapter covers the general rules of resolution: how to roll, what the four outcome tiers mean, the special skill rolls (opposed, cooperative, complementary, augment, combined, resistance), time scales, the Power Point economy, the Fate Point spend menu, and how characters improve.

**What's elsewhere.** The skill catalogue is in §3. Combat mechanics are in §6. Sorcery is in §4. The physiological and situational rules - movement and chases, encumbrance, fatigue, hunger, disease, poison, drugs, fire, cold, falling, drowning, mass combat, group stealth - live in §7 Spot Rules and §8 Equipment (§8.11 encumbrance).

## 5.1 The Percentile Roll

When a character attempts something where failure is possible and the outcome matters, the GM calls for a roll. Pick up two ten-sided dice and read them as a percentile number from 01 to 00 (where 00 means 100). Roll equal to or less than the relevant skill or characteristic target to succeed; roll higher to fail.

### 5.1.1 When to Roll

Two conditions must both be true before the dice come out:

- **The task is neither automatic nor impossible.** Reserve dice for genuine uncertainty.
- **Something is at stake.** If success and failure produce the same story, skip the roll.

### 5.1.2 Difficulty

The four difficulty levels adjust the effective skill used for the roll:

| Difficulty        | Modifier                         |
| ----------------- | -------------------------------- |
| Easy              | Skill x2 (or characteristic x10) |
| Average (default) | Skill as rated                   |
| Difficult         | Half skill, rounding up          |
| Impossible        | No roll; automatic failure       |

Only one difficulty level applies at a time. If multiple factors would change difficulty, assess the net result and apply a single modifier.

Situational modifiers (unusual equipment, adverse weather, time pressure) stack on top of the difficulty modifier and are expressed as flat percentage adjustments. Apply difficulty first, then add the situational adjustment.

| Modifier | Example conditions                                                                                                                                       |
| -------: | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     +50% | Target helpless or unaware; perfect intelligence on the task; superior tools beyond expectation; situation rigged in the character's favour              |
|     +20% | Familiar location or task; good tools; allied audience; favourable lighting and footing where these matter                                               |
|     -20% | Dim or twilight conditions; unfamiliar tools; unsteady footing; mild distraction (crowd noise, partial occlusion); minor injury (1-5 HP missing)         |
|     -50% | Near-darkness or sandstorm; hostile crowd; severe distraction (under attack, panicked, drowning); wrong tool for the job; major injury (heavily wounded) |

Only one situational modifier applies at a time. As with difficulty, assess the net effect of competing factors and apply a single value.

### 5.1.3 Acting Without a Skill

A character who lacks a skill can still attempt the task. The GM chooses one of two fallbacks:

**Wild Chance.** Roll against the skill category bonus alone (the small bonus derived from the relevant characteristic average; see §2.3.6).

**Characteristic Roll.** For tasks that directly reflect a characteristic, multiply the relevant characteristic by five and roll against that target.

| Characteristic | Roll Target | Used For                                                |
| -------------- | ----------- | ------------------------------------------------------- |
| **STR**        | STR × 5     | Lifting, breaking, brute force                          |
| **CON**        | CON × 5     | Resisting fatigue, illness, exposure                    |
| **SIZ**        | SIZ × 5     | Bulk-related tasks (rare)                               |
| **INT**        | INT × 5     | Quick recall, problem-solving (the **Idea roll**)       |
| **POW**        | POW × 5     | Luck, will, supernatural resistance (the **Luck roll**) |
| **DEX**        | DEX × 5     | Reflex, balance, fine reaction (the **Agility roll**)   |
| **CHA**        | CHA × 5     | First impression, bearing under pressure                |

Neither fallback earns an experience checkmark. Both follow the same outcome tiers as skill rolls.

### 5.1.4 Skill Ratings Above 100%

Through experience improvement (§5.7) and characteristic bonuses, a skill rating can grow past 100%. WSR PCs reach this territory in their core specialities by mid-career; lifelong masters and named NPCs can rise higher still.

The percentile roll mechanics continue to work normally - any roll equal to or below the rating succeeds, 00 is always a Fumble, the matching-dice rule still applies (§5.2.2) - so the practical effects of a rating above 100% are:

- **Headroom on Difficult tasks.** Halving the rating still leaves significant skill. A character with Sword 140 rolls Difficult at 70%, an expert-level chance.
- **Headroom against situational penalties.** A character with Persuade 120 facing a -30% situational penalty still rolls at 90%.
- **Criticals dominate matching dice.** At 99+ effective skill, all nine matching-dice values (11 through 99) are Criticals; only a natural 00 remains a Fumble.
- **Multiple attacks in combat.** A weapon skill above 100% enables multiple attacks per round; see §6.3.9.

## 5.2 Outcome Tiers

Every roll produces one of four outcomes, determined by whether the roll succeeded and whether both dice show the same digit - a **matching-dice result**. Matching-dice values: **11, 22, 33, 44, 55, 66, 77, 88, 99**. Two rolls are special regardless of skill: a roll of **01 is always a Critical Success**, and a roll of **00 is always a Fumble**.

### 5.2.1 The Four Outcomes

**Critical Success.** A roll of **01 is always a Critical Success**, regardless of skill - the traditional lucky shot. Otherwise, a Critical occurs when the roll is both a success (equal to or less than the skill) AND a matching-dice result. Something exceptional happens beyond ordinary success. In combat, look up the critical result on the relevant damage-type table (see §A1). Outside combat, a critical represents the best possible version of what the character was attempting.

**Success.** The roll is equal to or less than the skill, but is not a matching-dice result. The character achieves what they set out to do.

**Failure.** The roll exceeds the skill and is not a matching-dice result. The character fails. The task may be attempted again if circumstances allow.

**Fumble.** The roll is 00 (always a fumble, regardless of skill), OR the roll exceeds the skill and is a matching-dice result. Something has gone distinctly wrong. The GM narrates the complication - a weapon drops, a foothold fails, a rope frays. There are no fumble tables; the fumble should fit the fiction.

### 5.2.2 Matching Dice and Skill Level

The nine matching-dice values - **11, 22, 33, 44, 55, 66, 77, 88, 99** - split into Criticals and Fumbles by where they fall relative to the skill:

- A matching value **at or below the skill** is a Critical.
- A matching value **above the skill** is a Fumble.

A higher skill turns more matching values into Criticals and fewer into Fumbles. A character with Sword 30 criticals on 11 and 22; everything from 33 upward fumbles. A character with Sword 80 criticals on 11 through 77; only 88 and 99 fumble.

Two values stand outside the skill rule: a roll of **01 is always a Critical**, and a roll of **00 is always a Fumble**.

> **Example:** A swordsman with Sword 62 rolls 33 - matching dice, within his skill: Critical. He rolls 66 - matching dice, but above 62: Fumble. He rolls 47 - within his skill but not matching: ordinary Success.

### 5.2.3 Minimum and Maximum

A skill with a base chance of 5% or more always succeeds on a roll of 01 to 05, even if penalties have reduced the effective skill below 5%. There is always a sliver of hope.

A skill reduced to 0% by penalties cannot be attempted.

### 5.2.4 Non-Combat Critical Outcomes

Five skills have specific numerical critical outcomes that supersede the general "best achievable version" rule:

- **First Aid:** Critical = heals 2D4 HP (ordinary success = 1D4 HP).
- **Medicine:** Critical = heals 2D4 HP or restores 1D3 points to a damaged characteristic (ordinary success = 1D4 HP or stabilises the patient).
- **Teach:** Critical = the student gains 1D6 points to the skill being taught (ordinary success = training proceeds at the standard rate).
- **Jump:** Critical = double the distance jumped or height cleared; reduces fall damage by 3D6 instead of 1D6.
- **Cooperative Rolls (helper's roll):** Critical = the lead character gains +50% to their skill for the cooperative roll (ordinary success = +20%).

## 5.3 Special Skill Rolls

### 5.3.1 Opposed Skill Rolls

Both characters roll against their own skill. The character with the higher degree of success wins (Critical > Success > Failure > Fumble). Ties go to the higher die roll. If both fumble, the GM narrates a mutual disaster.

### 5.3.2 Cooperative Skill Rolls

When characters work together, one character is designated the lead. The lead makes the primary roll. Each helper makes their own roll against the relevant skill:

- **Critical:** +50% to the lead's effective skill
- **Success:** +20% to the lead's effective skill
- **Failure:** -10% to the lead's effective skill
- **Fumble:** -50% to the lead's effective skill

Apply the single best helper result to the lead's skill. Only the best modifier counts; additional helpers cannot stack. The GM may rule that some physical tasks cannot meaningfully accept more than one or two helpers.

If the lead succeeds (at any tier), every helper who rolled a success or better earns an experience checkmark on the skill they used.

### 5.3.3 Complementary Skills and Augments

A complementary skill or an augment is one of the character's _own_ skills used to support another of their skills on the same roll. (Cross-character help is handled through Cooperative Skill Rolls, above.) A character may use a complementary bonus _or_ an augment on a given roll, never both.

**Complementary Skill Bonus.** A complementary skill is one that logically supports the primary skill being used. When the GM agrees the connection is valid, the character adds one-fifth of the complementary skill rating (round down) to the primary skill for that roll.

A character using Persuade in a formal legal context might add one-fifth of their Knowledge (Law). A scout using Navigate to guide a party through mountain passes might add one-fifth of Navigate to their Ride roll. A sorcerer using Perform (Ritual) to prepare a summoning might add one-fifth of Perform to their Sorcery skill.

The GM decides whether the connection is genuine. "I am very good at Brawl, so that helps my Bargain roll" is not a complementary connection. "My Knowledge (History) of this trade route helps my Bargain with the caravan master" is.

**Augment.** An augment is a riskier, more powerful version of the complementary bonus: the character makes a full roll against the supporting skill, and the outcome shifts the difficulty of the primary action along the four-step ladder (Easy → Average → Difficult → Impossible). Cap at the ends.

- **Critical:** primary difficulty improves **two steps** (e.g., Difficult → Easy).
- **Success:** primary difficulty improves **one step** (e.g., Average → Easy, or Difficult → Average).
- **Failure:** primary difficulty worsens **one step**.
- **Fumble:** primary difficulty worsens **two steps**.

A primary roll pushed to Impossible by a failed or fumbled augment automatically fails.

### 5.3.4 Combined Skill Rolls

When a single action requires two different skills to succeed - picking a lock while muffling the sound, climbing while carrying a wounded comrade, a feint that has to land in the same beat as the strike behind it - the GM may call for a combined roll. Make a single d100 roll and compare it against **both** skill ratings:

- **Roll ≤ both ratings:** full success. Both skills do their work.
- **Roll between the two ratings** (≤ the higher, > the lower): partial success. The higher-rated skill succeeds; the lower-rated skill fails.
- **Roll > both ratings:** outright failure on both.

> **Example:** Khess picks a lock while keeping the work quiet (Sleight of Hand 60, Move Quietly 45). She rolls 51. The roll is ≤ 60 but > 45 - partial success: the lock opens, but the noise carries. A roll of 38 would have succeeded on both; a roll of 78 would have failed on both.

### 5.3.5 Resistance Rolls

A **resistance roll** pits one characteristic (or other measured value) against another: a sorcerer's spell against a victim's will, a grappler's grip against a prisoner's strength, a poison's potency against a target's constitution. Skills do not enter into it - this is not an opposed skill roll (§5.3.1). One side is **active** (the force trying to overcome) and the other is **passive** (the force being overcome); the active side's chance of success is read from the **Resistance Table** below.

Subtract the passive value from the active. The difference gives the active party's chance of success:

| Active − Passive | Chance to succeed |
| ---------------: | :---------------- |
|      +10 or more | Automatic success |
|               +9 | 95%               |
|               +8 | 90%               |
|               +7 | 85%               |
|               +6 | 80%               |
|               +5 | 75%               |
|               +4 | 70%               |
|               +3 | 65%               |
|               +2 | 60%               |
|               +1 | 55%               |
|        0 (equal) | 50%               |
|               -1 | 45%               |
|               -2 | 40%               |
|               -3 | 35%               |
|               -4 | 30%               |
|               -5 | 25%               |
|               -6 | 20%               |
|               -7 | 15%               |
|               -8 | 10%               |
|               -9 | 5%                |
|      -10 or less | Automatic failure |

Equivalent formula for quick mental computation: **chance = 50% + (active × 5) − (passive × 5)**.

Common resistance contests:

| Active | Passive | Used for                             |
| ------ | ------- | ------------------------------------ |
| POW    | POW     | Spell resistance; willpower contests |
| PP     | PP      | Competing magical effects            |
| POT    | CON     | Poisons and venoms against the body  |
| STR    | STR     | Raw strength contests                |
| Damage | CON     | Knockback and stun effects           |

A successful win in a POW vs. POW contest against an opponent with equal or greater POW earns the winner an experience checkmark toward improving POW. See §9.4 for POW improvement.

## 5.4 Time

### 5.4.1 Time Scales

The game uses four time scales. The GM shifts between them as the fiction demands.

**Narrative Time.** Variable; hours, days, weeks. Used for travel, recovery, training, long-term activity. No rigid structure.

**Scene Time.** Variable; minutes to hours. One location or event. The GM narrates freely until something demanding immediate resolution occurs.

**Turn.** Five minutes, equivalent to twenty-five combat rounds. Used for dungeon exploration, timed tasks with meaningful stakes.

**Combat Round.** Twelve seconds. Used whenever combat is active. See §6.1 for combat structure.

### 5.4.2 Key Intervals

Reference times for common game activities:

| Activity                         | Time Required                               |
| -------------------------------- | ------------------------------------------- |
| Recover 1 Power Point (sleeping) | 1 hour                                      |
| Recover 1 Power Point (awake)    | 2 hours                                     |
| Recover all Power Points         | 1 game day (24 hours)                       |
| Natural healing: 1D4 HP          | 1 game week                                 |
| Experience roll opportunity      | 1 downtime period (end of adventure)        |
| Skill training roll              | Current skill x1 hour (up to 50 hours/week) |
| Training roll, combat skills     | ~3 game weeks                               |
| Training roll, non-combat skills | ~12 game weeks or less                      |

## 5.5 Power Points

### 5.5.1 What Power Points Are

Power Points (PP) represent the vital force - the will, the luck, and the sorcerous potential - that a character carries within them. The same pool pays for sorcery, Fate Point spends, critical conversions, and talent abilities.

Starting PP equals POW.

### 5.5.2 Spending and Recovery

PP are spent as needed and recover over time:

- **Sleeping:** 1 PP recovered per hour of sleep.
- **Awake and resting:** 1 PP recovered per 2 hours.
- **Full recovery:** 24 hours of rest and ordinary activity restores PP to the maximum.

PP does not recover through extraordinary effort - fighting, running, or casting spells cannot hurry the process.

### 5.5.3 Reaching Zero

A character whose PP total reaches 0 is exhausted and falls unconscious. They remain unconscious until they have recovered at least 1 PP. Sorcerers who drain their pool to zero mid-casting do not complete the spell: the working collapses, and any PP already spent is lost.

A Fate Point spend that would push a character to exactly 0 PP can still be declared: the effect occurs, then the character collapses.

### 5.5.4 What Spends Power Points

Power Points are spent by:

- **Sorcery (§4.2).** Casting spells costs PP equal to the spell's power cost, paid at the moment of casting.
- **Buying a Critical (§5.6.1).** A Fate Point spend with variable cost: converting an ordinary success to a Critical costs PP equal to the gap between the roll and the nearest lower matching value.
- **Other Fate Point spends (§5.6).** Fixed-cost spends from the menu - re-rolls, defensive responses, forcing a success.
- **Talents (§2.4).** Certain talent abilities have a PP cost listed in their description.

Named antagonists and competent NPC foes have their own PP pools, spent under the same rules. Rabble have no PP and no access to any PP-spend ability. See §9.1 for the NPC tier model.

## 5.6 Fate Point Spends

Fate Point spends are PP expenditures that bend the dice or the fiction in the character's favour. Every spend below draws from the same PP pool that fuels sorcery and talent activations (§5.5).

The following options are always available to any character with sufficient PP. Rabble cannot make any Fate Point spend. Named foes can.

**Combining spends.** Each Fate Point spend resolves independently. Multiple spends on a single action are legal where they do not contradict each other - for example, Steady Blade before the roll, then Shrug Off a Blow after damage lands. Two specific restrictions:

- **No spend may be applied to a die that has been re-rolled.** Re-rolling resolves the result; PP cannot then alter it.
- **Push Through and Buying a Critical cannot chain on the same roll.** A failure forced to success by Push Through does not become eligible for a Critical Buy. The two spends address different problems; chaining them would let any failure become a critical, which is more than the genre allows.

### 5.6.1 Buying a Critical (Cost: variable)

After rolling an ordinary success, the player may claim any matching-dice value within the character's success range - that is, any matching value (11, 22, 33...) that does not exceed the relevant skill. The PP cost is the absolute difference between the actual roll and the claimed value. The claimed value determines the critical's severity band (§A1.1.2).

> **Example (combat):** A character with Bow 65 rolls 47. Matching values within skill are 22 (Band B), 33 (Band B), 44 (Band C), and 55 (Band C). The cost is the absolute gap from the roll: 25, 14, 3, and 8 PP respectively. The cheapest claim - 44 at 3 PP - is also a Band C critical, so the choice is easy. The mechanic earns its weight on rolls where the cheapest matching value sits one band below a more expensive one: there, paying extra PP to upgrade the band is a real decision.
>
> **Example (non-combat):** A character with Medicine 55 treats a wounded comrade. They roll 41 - an ordinary success (heals 1D4 HP) - but want the Critical to heal 2D4 HP or restore a lost characteristic point (§5.2.4). Matching values within skill: 11, 22, 33, 44, 55. Costs: 30, 19, 8, 3, 14 PP. They claim 44 for 3 PP. Non-combat criticals have no severity bands; the cheapest matching value is always the right pick.

**Restrictions:**

- The conversion is only available on an ordinary success. A fumble or failure cannot be bought into a critical.
- The PP cost must be paid in full. If the character does not have enough PP, the conversion is not available.
- The conversion is declared before the result of the roll is applied. Once the roll's effect has begun to resolve, it is too late to spend PP.
- A roll forced to success by Push Through (§5.6.6) is not eligible for a Critical Buy.
- A roll that has been re-rolled (§5.6.2) is not eligible for a Critical Buy.

Sorcerer PCs: every PP spent on a Critical Buy is a PP unavailable for casting. See §4.3.1.

### 5.6.2 Re-roll (Cost: 5 PP)

Declare after seeing the initial result. Roll again; the second result stands, even if worse. The re-rolled result does not earn an experience checkmark. Only one re-roll may be declared per roll.

### 5.6.3 Trust the Fates (Cost: 5 PP)

Instead of a skill roll, trust to fortune. Declare before rolling: make a Difficult Luck roll (POW x5 at half value, rounded up) instead of the normal skill roll. Cannot be used for Resistance Table rolls or bare characteristic rolls. No experience checkmark is earned regardless of result.

### 5.6.4 Shrug Off a Blow (Cost: 2 PP per point of damage negated)

Declare immediately after taking damage, before applying it. Reduce the damage of a single attack by 1 point per 2 PP spent. The damage is not soaked by armour - the character simply turns the wound slightly: the blade skipped the vital spot, the pommel struck the brow-guard rather than the temple. The reduction cannot bring the damage below 1 if the attack connected.

### 5.6.5 Ignore a Fumble (Cost: 6 PP)

Declare immediately after a fumble result, before the GM narrates the consequence. The roll becomes an ordinary failure instead. The fumble complication does not occur. This does not turn the roll into a success - it merely prevents disaster.

### 5.6.6 Push Through (Cost: 6 PP)

Declare after the roll, before the result is applied. Convert a Failure on your own roll into an ordinary Success. The character pulls success out of an attempt that was going to fall short - the grip held, the spell-words came through, the leap cleared the gap by inches. The forced success does not earn an experience checkmark.

Push Through cannot be applied to a roll that has been re-rolled. It cannot be combined with Buying a Critical on the same roll: a failure converted to success is not then eligible for a critical conversion. Only your own rolls qualify; you cannot Push Through another character's roll.

### 5.6.7 Stand Your Ground (Cost: 2 PP, then 2 PP more each consecutive round)

When a wound, a failed Stamina roll, or a shock effect would force unconsciousness or incapacitation, the character may fight through it for one more round. The cost begins at 2 PP and doubles each consecutive round the character holds on (2 PP, 4 PP, 8 PP, ...). The character takes all wound effects normally but does not go down. If they cannot or choose not to pay the escalating cost, they fall at the start of their next action.

### 5.6.8 Deflect the Killing Blow (Cost: all remaining PP, minimum 8)

When a character would be killed outright - reduced to 0 HP by a single blow, or struck in a vital location in circumstances that would end their story - they may spend their entire remaining PP pool to survive. Minimum cost is 8 PP; if fewer remain, this spend is not available.

The character drops to 1 HP instead of dying, falls unconscious, and the killing blow is narrated as having narrowly missed the vital centre: the sword pierced lung, not heart; the axe opened the scalp rather than cleaving the skull. They are gravely wounded and out of the fight, but they are alive. The character recovers at the same rate as any other grievous wound, but they carry the mark of the near-death: a permanent scar, a recurring injury, or some other lasting consequence the GM and player agree on.

This spend cannot be made by a character already at 0 PP.

### 5.6.9 Steady Blade (Cost: 3 PP)

The character's hand does not waver. On a single attack or skill roll this round, the character may ignore all situational penalties (darkness, difficult terrain, adversarial conditions) affecting that roll. Difficulty modifiers still apply; only situational penalties are negated. Declare before rolling.

### 5.6.10 Rally From the Wound (Cost: 8 PP)

The character summons something from deeper than will. Immediately recover 1D6 HP. This recovery is instantaneous and takes no action. It cannot restore HP above the character's maximum, cannot close a §A1 critical wound (see §6.5.1) that has caused permanent damage, and cannot be declared when the character is already unconscious. A character may rally at most once per scene.

## 5.7 Experience and Improvement

### 5.7.1 Earning Experience Checkmarks

When a character _successfully_ uses a skill in a genuinely stressful or dramatically uncertain situation, they earn an experience checkmark. Failure earns nothing, no matter how heroic the attempt - the genre learns from what works, not from what doesn't. Routine use earns nothing either; if there is no real chance of failure, there is no learning. A character earns at most one checkmark per skill per adventure; the improvement roll at the end of each adventure clears the slate.

**Exception - sustained immersive exposure.** The GM may grant automatic checkmarks (no specific roll required) for prolonged practice or training: a character who spends a month labouring with master shipwrights earns a checkmark on an appropriate Craft skill without a specific stress test. This is the only exception to the success requirement.

### 5.7.2 The Improvement Roll

At the end of each adventure, roll D100 and add INT/2 (round up). If the adjusted total exceeds the current skill rating, the skill improves: add 1D6, or take +3 by declaring before rolling.

At skill ratings above 75%, the experience bonus (INT/2) is increasingly necessary to push the adjusted total past the high base rating.

### 5.7.3 Skill Training

A character may engage a trainer with a higher skill rating and submit to formal instruction. The trainer makes a Teach roll:

- **Critical:** student gains 1D6 to the skill.
- **Success:** improvement roll at end of training period.
- **Failure:** no improvement this session.
- **Fumble:** student loses 1D3 from the skill.

**Training cap:** 75%. Mastery beyond 75% comes only through in-play experience.

### 5.7.4 Research

Independent study from appropriate materials (a library, a grimoire, an ancient text) takes the same time as training but requires no teacher. A successful improvement roll yields 1D6-2 (minimum 0), or take +2 as the safe option.

Unlike training, research can push a skill above 75%: immersion in primary sources is not bounded by a trainer's competence ceiling.

### 5.7.5 Characteristic Improvement

Most characteristics do not improve after character creation. The exceptions:

**POW.** Winning a POW vs. POW Resistance contest against an opponent whose POW equals or exceeds your own earns a checkmark. Improvement chance: **(Maximum rollable POW + Minimum rollable POW - Current POW) x5**. On success, POW increases by 1D3-1 (0, 1, or 2). Take +1 as the safe option.

**STR and CON.** May be raised through training, to a maximum equal to the highest of the character's STR, CON, SIZ values.

**DEX and CHA.** May be trained to a maximum of 1.5 times the original value.

**INT and SIZ.** Do not improve.
