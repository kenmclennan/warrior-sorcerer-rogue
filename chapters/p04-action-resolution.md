# P4. Action Resolution

> *"He was not afraid of men. He was afraid of himself - the thing he might become if his luck ran dry."*

This chapter is the mechanical spine of Warrior \* Sorcerer \* Rogue. Every roll, every contested outcome, every flicker of luck and power finds its resolution here. Read this chapter before any other; every rule in every chapter that follows reaches back to these pages.

---

## 1. The Percentile Roll

When a character attempts something where failure is possible and the outcome matters, the GM calls for a roll. Pick up two ten-sided dice and read them as a percentile number from 01 to 00 (where 00 means 100). Roll equal to or less than the relevant skill or characteristic target to succeed; roll higher to fail.

### 1.1 When to Roll

Not every action demands a roll. Two conditions must both be true before the dice come out:

- **The task is neither automatic nor impossible.** A competent character performing a familiar task under no duress does not roll - it simply succeeds. A task that lies beyond any human capacity does not roll - it simply fails. Reserve dice for genuine uncertainty.
- **Something is at stake.** If success and failure produce the same story, skip the roll. Dice fall when the result changes what happens next.

The GM makes automatic and impossible calls before dice are touched. Challenging the call with a roll is not permitted - if it is ruled impossible, it is impossible.

### 1.2 Difficulty

The four difficulty levels adjust the effective skill used for the roll:

| Difficulty | Modifier |
|---|---|
| Easy | Skill x2 (or characteristic x10) |
| Average (default) | Skill as rated |
| Difficult | Half skill, rounding up |
| Impossible | No roll; automatic failure |

Only one difficulty level applies at a time. If multiple factors would change difficulty, assess the net result and apply a single modifier.

Situational modifiers (unusual equipment, adverse weather, time pressure) stack on top of the difficulty modifier and are expressed as flat percentage adjustments: -50%, -20%, +20%, or +50%, depending on how significantly the situation helps or hinders. Apply difficulty first, then add the situational adjustment.

### 1.3 Characteristic Rolls

When no applicable skill exists, a characteristic roll substitutes. Multiply the relevant characteristic by five and roll against that target.

| Characteristic | Roll as |
|---|---|
| STR, CON, DEX, CHA | Characteristic x5 |
| INT | Characteristic x5 |
| POW (as Luck) | POW x5 |

Characteristic rolls follow the same outcome tiers as skill rolls. They do not earn experience checkmarks.

---

## 2. Outcome Tiers

Every roll produces one of four outcomes. The tier is determined by whether the roll succeeded (fell within the skill or target) and whether both dice showed the same digit - what the rules call a **matching-dice result**.

The matching-dice values are: **11, 22, 33, 44, 55, 66, 77, 88**. The roll 00 (100) is never a matching-dice critical - it is always a fumble.

### 2.1 The Four Outcomes

**Critical Success.** The roll is both a success (equal to or less than the skill) and a matching-dice result. Something exceptional happens beyond ordinary success. In combat, look up the critical result on the relevant damage-type table (see PA1). Outside combat, a critical represents the best possible version of what the character was attempting.

**Success.** The roll is equal to or less than the skill, but is not a matching-dice result. The character achieves what they set out to do.

**Failure.** The roll exceeds the skill and is not a matching-dice result. The character fails. The task may be attempted again if circumstances allow.

**Fumble.** The roll is 00 (always a fumble, regardless of skill), OR the roll exceeds the skill and is a matching-dice result. Something has gone distinctly wrong. The GM narrates the complication - a weapon drops, a foothold fails, a rope frays. There are no fumble tables; the fumble should fit the fiction.

### 2.2 Matching Dice and Skill Level

The matching-dice system scales naturally with ability: a higher-skill character has more matching values within their success range and therefore criticals more often. By the same logic, a lower-skill character has more matching values outside their success range and therefore fumbles more often.

| Skill Rating | Matching Values in Success Range (Criticals) | Matching Values in Failure Range (Fumbles) |
|---|---|---|
| 20 | 11 (1 value) | 22, 33, 44, 55, 66, 77, 88, 00 (8 values) |
| 30 | 11, 22 (2 values) | 33, 44, 55, 66, 77, 88, 00 (7 values) |
| 40 | 11, 22, 33 (3 values) | 44, 55, 66, 77, 88, 00 (6 values) |
| 50 | 11, 22, 33, 44 (4 values) | 55, 66, 77, 88, 00 (5 values) |
| 60 | 11, 22, 33, 44, 55 (5 values) | 66, 77, 88, 00 (4 values) |
| 70 | 11, 22, 33, 44, 55, 66 (6 values) | 77, 88, 00 (3 values) |
| 80 | 11, 22, 33, 44, 55, 66, 77 (7 values) | 88, 00 (2 values) |
| 90 | 11, 22, 33, 44, 55, 66, 77, 88 (8 values) | 00 (1 value) |

A character with a skill of exactly 90 criticals on any of the eight matching values. A character with a skill of 30 criticals only on rolls of 11 or 22. This is the table in full - no other matching values fall in any skill's success range at these ratings. (At skill 100+, 99 also becomes a critical.)

> **Example:** A swordsman with a Sword skill of 55 rolls the dice and gets 33. Both dice match, and 33 is within his skill rating. This is a Critical Success. The same swordsman rolls 66 - both dice match but 66 exceeds his skill of 55. This is a Fumble. He rolls 47 - no matching dice, within his skill. This is an ordinary Success.

### 2.3 Minimum and Maximum

A skill with a base chance of 5% or more always succeeds on a roll of 01 to 05, even if penalties have reduced the effective skill below 5%. There is always a sliver of hope.

A skill reduced to 0% by penalties cannot be attempted.

### 2.4 Non-Combat Critical Outcomes

Most skills under a matching-dice critical simply produce the best achievable version of success - the lock opens silently and leaves no sign of tampering, the wound is stanched so cleanly that the patient does not even wake. Five skills have specific numerical critical outcomes that supersede this general rule:

- **First Aid:** Critical = heals 2D3 HP (ordinary success = 1D3 HP).
- **Medicine:** Critical = heals 2D3 HP or restores 1D3 points to a damaged characteristic (ordinary success = 1D3 HP or stabilises the patient).
- **Teach:** Critical = the student gains 1D6 points to the skill being taught (ordinary success = training proceeds at the standard rate).
- **Jump:** Critical = double the distance jumped or height cleared; reduces fall damage by 3D6 instead of 1D6.
- **Cooperative Rolls (helper's roll):** Critical = the lead character gains +50% to their skill for the cooperative roll (ordinary success = +20%).

---

## 3. The PP-Buy: Converting a Success to a Critical

A character who rolls an ordinary success may spend Power Points to convert that roll to a Critical Success, as though the dice had shown a matching value.

**How it works:** After rolling an ordinary success, identify the highest matching-dice value that is both (a) less than or equal to the actual roll and (b) within the character's success range. The PP cost to claim that critical is equal to the difference between the actual roll and that matching value.

> **Example:** A character with a Bow skill of 65 rolls 47. The nearest matching-dice value below 47 that is within his skill is 44. The cost to convert to a Critical is 47 - 44 = 3 Power Points. He pays 3 PP, and his roll is treated as if he had rolled 44 - a Critical Success.

**Restrictions:**

- The conversion is only available on an ordinary success. A fumble or failure cannot be bought into a critical.
- The matching-dice value claimed must fall within the character's success range (equal to or less than the relevant skill). You cannot buy a critical at a matching value that would be a fumble.
- The PP cost must be paid in full. If the character does not have enough PP, the conversion is not available.
- The conversion is declared before the result of the roll is applied. Once the roll's effect has begun to resolve, it is too late to spend PP.

Sorcerer PCs face a sharper version of this choice: every PP spent on a critical buy is a PP unavailable for casting. See P6 §1 for the sorcery cost interaction.

---

## 4. Opposed Actions

### 4.1 Opposed Skill Rolls

When two characters directly contest the same action - one striking, one evading; one deceiving, one detecting - both roll against their own skill. The character with the higher degree of success wins. Ties go to the character with the higher die roll, which advantages the more skilled character.

Degree of success, from highest to lowest: Critical Success, Success, Failure, Fumble.

If both characters fumble, the outcome is a mutual disaster - the GM narrates something that is bad for everyone.

### 4.2 Cooperative Skill Rolls

When characters work together, one character is designated the lead. The lead makes the primary roll. Each helper makes their own roll against the relevant skill:

- **Critical:** +50% to the lead's effective skill
- **Success:** +20% to the lead's effective skill
- **Failure:** -10% to the lead's effective skill
- **Fumble:** -50% to the lead's effective skill

Apply the single best helper result to the lead's skill. Only the best modifier counts; additional helpers cannot stack. The GM may rule that some physical tasks cannot meaningfully accept more than one or two helpers.

If the lead succeeds (at any tier), every helper who rolled a success or better earns an experience checkmark on the skill they used.

### 4.3 Combined Skill Rolls

When a task demands two different skills in sequence - tracking a prey animal while staying quiet, for instance - the GM may call for a combined roll. Use the lower of the two relevant skills as the effective target. If the character succeeds, both skills contributed to the outcome. If they fail on the higher skill alone (they would have succeeded if only the lower skill were used), the result is a partial success: the first element succeeds, the second fails.

### 4.4 The Resistance Table

When an effect pits one characteristic against another - a sorcerer's spell against a victim's will, a grappler's grip against a prisoner's strength - use the Resistance Table.

**Base chance = 50% + (active characteristic x5) - (passive characteristic x5).**

A difference of 10 or more between active and passive results in an automatic success or automatic failure without a roll.

Common resistance contests:

| Active | Passive | Used for |
|---|---|---|
| POW | POW | Spell resistance; willpower contests |
| PP | PP | Competing magical effects |
| POT | CON | Poisons and venoms against the body |
| STR | STR | Raw strength contests |
| Damage | CON | Knockback and stun effects |

A successful win in a POW vs. POW contest against an opponent with equal or greater POW earns the winner an experience checkmark toward improving POW. See §8.4 for POW improvement.

---

## 5. Time

### 5.1 Time Scales

The game uses four time scales. The GM shifts between them as the fiction demands.

**Narrative Time.** Variable; hours, days, weeks. Used for travel, recovery, training, long-term activity. No rigid structure.

**Scene Time.** Variable; minutes to hours. One location or event. The GM narrates freely until something demanding immediate resolution occurs.

**Turn.** Five minutes, equivalent to twenty-five combat rounds. Used for dungeon exploration, timed tasks with meaningful stakes.

**Combat Round.** Twelve seconds. Used whenever combat is active. See P5 §1 for combat structure.

### 5.2 Key Intervals

Reference times for common game activities:

| Activity | Time Required |
|---|---|
| Recover 1 Power Point (sleeping) | 1 hour |
| Recover 1 Power Point (awake) | 2 hours |
| Recover all Power Points | 1 game day (24 hours) |
| Natural healing: 1D3 HP | 1 game week |
| Experience roll opportunity | 1 downtime period (end of adventure) |
| Skill training roll | Current skill x1 hour (up to 50 hours/week) |
| Training roll, combat skills | ~3 game weeks |
| Training roll, non-combat skills | ~12 game weeks or less |

---

## 6. Power Points

### 6.1 What Power Points Are

Power Points (PP) represent the vital force - the will, the luck, and the sorcerous potential - that a character carries within them. They are not a separate resource for each use: the same pool pays for sorcery, fuels Fate Point spends, enables critical conversions, and activates talent abilities. Every draw on that pool is a draw on the same reservoir.

Starting PP equals the character's POW characteristic. A character with POW 13 starts each day with 13 PP.

### 6.2 Spending and Recovery

PP are spent as needed and recover over time:

- **Sleeping:** 1 PP recovered per hour of sleep.
- **Awake and resting:** 1 PP recovered per 2 hours.
- **Full recovery:** 24 hours of rest and ordinary activity restores PP to the maximum.

PP does not recover through extraordinary effort - fighting, running, or casting spells cannot hurry the process.

### 6.3 Reaching Zero

A character whose PP total reaches 0 is exhausted and falls unconscious. They remain unconscious until they have recovered at least 1 PP. Sorcerers who drain their pool to zero mid-casting do not complete the spell: the working collapses, and any PP already spent is lost.

A Fate Point spend that would push a character to exactly 0 PP can still be declared: the effect occurs, then the character collapses.

### 6.4 What Spends Power Points

Power Points are spent by:

- **Sorcery (P6 §2).** Casting spells costs PP equal to the spell's power cost, paid at the moment of casting.
- **Critical conversion (P4 §3).** Converting an ordinary success to a Critical costs PP equal to the gap between the roll and the nearest lower matching value.
- **Fate Point spends (P4 §7).** The Fate Point menu lists specific PP costs for each option.
- **Talents (P2 §4).** Certain talent abilities have a PP cost listed in their description.

Named antagonists and competent NPC foes have their own PP pools, spent under the same rules. Mooks have no PP and no access to any PP-spend ability. See G2 §1 for the NPC tier model.

---

## 7. Fate Point Spends

A character's Power Points are also their luck and their courage under fire. Spending PP on a Fate Point option is spending something real - the same fuel a sorcerer would pour into a spell, the same reserve a warrior might call on to twist a failure into a critical buy.

The following options are always available to any character with sufficient PP. No additional resource, no tracking beyond the PP pool. Mooks cannot make any Fate Point spend. Named foes can.

---

### 7.1 Re-roll (Cost: 5 PP)

Declare after seeing the initial result. Roll again; the second result stands, even if worse. The re-rolled result does not earn an experience checkmark. Only one re-roll may be declared per roll.

---

### 7.2 Trust the Fates (Cost: 5 PP)

Instead of a skill roll, trust to fortune. Declare before rolling: make a Difficult Luck roll (POW x5 at half value, rounded up) instead of the normal skill roll. Cannot be used for Resistance Table rolls or bare characteristic rolls. No experience checkmark is earned regardless of result.

---

### 7.3 Shrug Off a Blow (Cost: 2 PP per point of damage negated)

Declare immediately after taking damage, before applying it. Reduce the damage of a single attack by 1 point per 2 PP spent. The damage is not soaked by armour - the character simply turns the wound slightly: the blade skipped the vital spot, the pommel struck the brow-guard rather than the temple. The reduction cannot bring the damage below 1 if the attack connected.

---

### 7.4 Ignore a Fumble (Cost: 6 PP)

Declare immediately after a fumble result, before the GM narrates the consequence. The roll becomes an ordinary failure instead. The fumble complication does not occur. This does not turn the roll into a success - it merely prevents disaster.

---

### 7.5 Stand Your Ground (Cost: 2 PP, then 2 PP more each consecutive round)

When a wound, a failed Stamina roll, or a shock effect would force unconsciousness or incapacitation, the character may fight through it for one more round. The cost begins at 2 PP and doubles each consecutive round the character holds on (2 PP, 4 PP, 8 PP, ...). The character takes all wound effects normally but does not go down. If they cannot or choose not to pay the escalating cost, they fall at the start of their next action.

---

### 7.6 Deflect the Killing Blow (Cost: all remaining PP, minimum 8)

When a character would be killed outright - reduced to 0 HP by a single blow, or struck in a vital location in circumstances that would end their story - they may spend their entire remaining PP pool to survive. Minimum cost is 8 PP; if fewer remain, this spend is not available.

The character drops to 1 HP instead of dying, falls unconscious, and the killing blow is narrated as having narrowly missed the vital centre: the sword pierced lung, not heart; the axe opened the scalp rather than cleaving the skull. They are gravely wounded and out of the fight, but they are alive. The character recovers at the same rate as any other grievous wound, but they carry the mark of the near-death: a permanent scar, a recurring injury, or some other lasting consequence the GM and player agree on.

This spend cannot be made by a character already at 0 PP.

---

### 7.7 Steady Blade (Cost: 3 PP)

The character's hand does not waver. On a single attack or skill roll this round, the character may ignore all situational penalties (darkness, difficult terrain, adversarial conditions) affecting that roll. Difficulty modifiers still apply; only situational penalties are negated. Declare before rolling.

---

### 7.8 Rally From the Wound (Cost: 8 PP)

The character summons something from deeper than will. Immediately recover 1D6 HP. This recovery is instantaneous and takes no action. It cannot restore HP above the character's maximum, cannot close a Major Wound that has caused permanent damage (see P5 §4), and cannot be declared when the character is already unconscious. A character may rally at most once per scene.

---

> **Designer's note on the Fate Point menu:** The menu is intentionally lean. The options address the catastrophes that end characters - fumbles, killing blows, incapacitation - without giving players purchase over every outcome. Re-rolling and standing your ground are expensive enough that they demand real choices. Sorcerer PCs will feel the menu most acutely: every PP spent surviving the fight is a PP not available for the spells that make them sorcerers.
>
> The menu was designed with the Pulp Cthulhu Luck spend structure in mind as an architectural inspiration, but every option and cost is WSR-original, calibrated to the PP pool economy and the matching-dice PP-buy system.

---

## 8. Experience and Improvement

### 8.1 Earning Experience Checkmarks

When a character uses a skill in a genuinely stressful or dramatically uncertain situation, they earn an experience checkmark on that skill. The checkmark records that this skill was used when it counted. Routine use - practising in a safe courtyard, applying a skill where failure carries no meaningful consequence - does not earn a checkmark.

A character earns at most one checkmark per skill per adventure, regardless of how many times the skill is used. Checkmarks on a skill do not accumulate across adventures; the improvement roll at the end of each adventure clears the slate.

The GM grants automatic checkmarks (without requiring a successful roll) for sustained immersive exposure: a character who spends a month labouring with master shipwrights earns a checkmark on an appropriate Craft skill without a specific stress test.

### 8.2 The Improvement Roll

At the end of each adventure, during downtime, the player makes an improvement roll for each skill that earned a checkmark.

Roll D100. Add INT/2 (round up) to the result as the experience bonus. If the adjusted total **exceeds** the current skill rating, the skill improves. Otherwise, no improvement this adventure.

**Improvement:** add 1D6 to the skill rating. Alternatively, if the player declares before rolling, take +3 instead of rolling 1D6 (the safe option for skills near critical thresholds).

At skill ratings above 75%, improvement becomes harder: the same formula applies, but the experience bonus (INT/2) is increasingly necessary to push the adjusted total past the high base rating. Skills do not improve rapidly once they are already expert-level.

### 8.3 Skill Training

A character may engage a trainer with a higher skill rating than their own and submit to formal instruction. The training takes time proportional to the current skill level; the trainer then makes a Teach roll.

- **Critical (Teach):** student gains 1D6 to the skill.
- **Success (Teach):** training proceeds by the standard rules (improvement roll at end of training period).
- **Failure (Teach):** no improvement this session.
- **Fumble (Teach):** the student loses 1D3 from the skill - poor instruction has ingrained a bad habit.

**Training cap:** training can raise a skill to a maximum of 75%. No amount of formal instruction can push a skill above this threshold. Mastery beyond 75% comes only through in-play experience - from dangerous use in real circumstances, not from the practice yard.

### 8.4 Research

A character who has access to appropriate materials (a library, a grimoire, an ancient text, a captured sample) may study independently. Research takes the same time as training and requires no teacher, but it costs appropriately in resources and access. A successful improvement roll from research yields 1D6-2 (minimum 0) points of improvement, or take +2 as the safe option.

Unlike training, research can push a skill above 75%, because immersion in primary sources and original knowledge is not bounded by a trainer's competence ceiling. Sorcerers who mine grimoires for technique may slowly push their sorcery-adjacent knowledge well past what any teacher could provide.

### 8.5 Characteristic Improvement

Most characteristics do not improve after character creation. The exceptions:

**POW.** A character who wins a POW vs. POW Resistance contest against an opponent whose POW equals or exceeds their own earns an experience checkmark toward POW improvement. When an improvement roll is made for POW, the chance of improvement is:

**(Maximum rollable POW + Minimum rollable POW - Current POW) x5**

On a successful roll: POW increases by 1D3-1 (which may be 0, 1, or 2). Take +1 without rolling by declaring the safe option before rolling. POW does not improve easily, but the contest with another powerful will - mortal or sorcerous - is the crucible for that growth.

**STR and CON.** May be raised through training under a demanding physical regimen, to a maximum equal to the highest of the character's three STR, CON, SIZ values. The natural ceiling of the body cannot be exceeded through conditioning.

**DEX and CHA.** May be trained to a maximum of 1.5 times the original characteristic value.

**INT and SIZ.** Do not improve after character creation.

---

## Source notes cited

- `notes/source-11-system.md`
- `notes/special-success-audit.md`
- `notes/delta-green.md`
- `notes/source-gaps-batch1.md`
- `notes/pulp-cthulhu.md`

## Locked decisions applied

- 2026-05-10 - Combat resolution: matching-dice criticals + matching-dice fumbles + PP-buy mechanic
- 2026-05-09 - Fate Points share the Power Point pool
- 2026-05-10 - Borrowing principle: mechanisms only from non-ORC sources
