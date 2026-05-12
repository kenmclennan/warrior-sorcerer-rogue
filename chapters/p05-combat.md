# P5. Combat

## 1. The Combat Round

Each combat round represents twelve seconds of action, divided into four phases resolved in sequence.

**Combat Round Sequence**

1. **Statements.** All participants declare intent in reverse DEX order (lowest DEX declares first).
2. **Powers.** Spells and power-based actions resolve in DEX order.
3. **Action.** Attacks, parries, dodges, and movement resolve in descending DEX order.
4. **Resolution.** Ongoing effects apply; next round begins.

### 1.1 Phase One: Statements

Every participant declares their intended action. Lower DEX declares first; higher DEX declares last (more information, later commitment).

Typical actions: move and attack, hold position and attack, disengage, perform a non-combat action, cast a spell (in Phase Two), or fight defensively.

Declarations are intentions, not contracts. A character may change their action when their turn arrives in Phase Three, but only based on events that have already occurred - not by waiting to see what a faster character does.

**Ties in DEX:** if two characters share the same DEX, the character with the higher relevant weapon skill declares last. If still tied, both declare simultaneously.

### 1.2 Phase Two: Powers

Spells and power-based abilities resolve in DEX order. A spell takes effect before melee strikes in Phase Three, unless the caster is interrupted (see §6.5).

### 1.3 Phase Three: Action

Characters act in descending DEX order. Within a DEX rank, resolve in weapon-length order: missiles before long weapons, long before medium, medium before short and unarmed.

**Delaying action.** A character may delay their action, acting at any lower DEX rank in the same round. Once delayed, they cannot return to their original rank. A character who delays to after the last rank loses their action for the round.

### 1.4 Phase Four: Resolution

Apply ongoing effects: bleeding, expiring conditions, end-of-round bookkeeping. The next round begins.

---

## 2. Movement

Movement in combat is described, not measured. Three categories cover most situations:

**Short Move.** Within the immediate area. Acts at normal DEX rank.

**Long Move.** Across a significant portion of the fighting ground. Acts at half DEX rank (round down).

**Full Sprint.** Maximum speed. Acts at quarter DEX rank (round down); cannot attack; defensive actions only if directly threatened.

---

## 3. Attack and Defence

### 3.1 The Attack Roll

To attack, roll D100 against the relevant weapon skill. Consult the outcome tiers from P4 §2:

- **Critical Success** (matching dice within success range): the attack lands with exceptional force. Consult the appropriate crit table in PA1. The attacker may also have spent PP to convert a normal success to a critical (see P4 §3).
- **Success**: the attack connects. The defender may attempt to parry or dodge.
- **Failure**: the attack misses. No defensive roll needed.
- **Fumble** (00, or matching dice outside success range): something has gone wrong. The GM narrates the complication - a dropped weapon, a stumble, an opening left for the opponent.

### 3.2 The Attack and Defence Matrix

When an attack succeeds, the defender may attempt a parry or dodge. Both attack and defence generate an outcome tier. The interaction between the two tiers determines the result:

| Attack result | Defence result    | Outcome                                                                                  |
| ------------- | ----------------- | ---------------------------------------------------------------------------------------- |
| Critical      | Critical          | Attack parried/dodged; both combatants hold ground - neither gains the crit result       |
| Critical      | Success           | Attack partially deflected: half damage, ignores armour                                  |
| Critical      | Failure or Fumble | Full damage, ignores armour                                                              |
| Success       | Critical          | Attack fully parried or dodged; defender has momentary advantage                         |
| Success       | Success           | Attack partially deflected: half damage, armour applies                                  |
| Success       | Failure           | Normal damage, armour applies                                                            |
| Success       | Fumble            | Normal damage, armour applies; defender additionally suffers their fumble's consequences |

A Critical attack that is not defended against (the defender chose not to parry or dodge, or had no defence remaining) deals full damage and ignores armour.

### 3.3 Parrying

A defender may attempt to parry any successful attack by rolling their parrying weapon or shield skill. Each parry attempt beyond the first in a round suffers a cumulative -30% penalty to the parry skill. A defender who has attempted two parries that round makes the third at -60%, the fourth at -90%, and so on.

Parry and dodge cannot both be used against the same attack, except when fighting defensively (§3.6).

### 3.4 Dodging

A defender may attempt to dodge instead of parrying. Roll the Dodge skill. The same cumulative -30% penalty applies as for parries, tracking separately from parry attempts. A character who dodges three times in a round makes the third at -60%.

### 3.5 Critical Attacks and Armour

A Critical attack that lands against a defender who failed to defend (or was not defended) deals maximum damage and ignores armour entirely. A defender who parried or dodged successfully against a Critical reduces the result to a standard Success - the attack still strikes, but armour applies and damage is halved.

When a critical attack lands and there is no successful defence: determine the severity band from the matching-dice value and damage type, then look up the result in PA1. See §8 for how to read the crit tables.

### 3.6 Fighting Defensively

A character who forgoes all attacks for the round gains one additional Dodge that costs no -30% penalty. They may still parry normally (with cumulative penalties), and the free dodge does not count toward the parry penalty track. Declare at the start of Phase Three.

### 3.7 Missile Weapons

Missile attacks follow the same success tiers as melee attacks. Missiles cannot generally be dodged or parried by the target unless the attack was visible before it was launched (the first visible arrow or thrown weapon in a round may be dodged at Difficult).

Shields can intercept missile attacks based on shield size:

| Shield type      | Chance to intercept a missile |
| ---------------- | ----------------------------- |
| Small or buckler | 15%                           |
| Full             | 30%                           |
| Large            | 60%                           |

This is a separate roll, not a parry: the shield either blocks the missile or the missile passes. A shield roll does not count against the parry-attempts limit.

**Range bands.** Range affects all missile attacks:

| Range                        | Modifier                                                                                       |
| ---------------------------- | ---------------------------------------------------------------------------------------------- |
| Near (within arm's reach)    | Easy - but bow attacks become Difficult or Impossible; throwing weapons use close combat rules |
| Normal (standard distance)   | Skill as rated                                                                                 |
| Far (challenging distance)   | Difficult                                                                                      |
| Extreme (edge of capability) | 1/5 skill; any success counts as a normal success only                                         |

The GM determines which band applies based on the description of the scene.

### 3.8 Multiple Attacks

A character whose weapon skill exceeds 100% may split that skill into multiple attacks, each at a minimum effective skill of 50%. Additional attacks resolve at -5 DEX rank intervals after the first. No single attack may exceed the character's full skill rating.

**Example.** A warrior with Sword 110% may attack twice: once at 110% on their normal DEX rank and once at 50% at DEX -5. Or they may choose 70%/70% (any split summing to the base, each at minimum 50%). The second attack comes at -5 DEX ranks from the first.

---

## 4. Damage and Armour

### 4.1 Damage Rolls

Each weapon lists a damage dice expression. The attacker rolls this dice, adds their damage modifier (derived from STR and SIZ), and applies the result to the defender's HP total after subtracting armour.

### 4.2 Armour Value

Armour reduces all incoming damage by its Armour Value (AV). Subtract AV from damage before applying to HP. If the reduction brings damage to 0 or below, no HP are lost - but the impact still occurred.

**Armour disadvantages.** Armour imposes skill penalties on Agility, Move Quietly, Swim, Climb, and Perception skills as listed in the equipment tables (see P7 §3). It is also socially conspicuous: arriving at a merchant's hall in full bronze scales makes certain conversations difficult.

**Armour fit.** Armour is sized for its original wearer. Armour that does not fit (different SIZ) imposes an additional -20% penalty on all physical skills and halves its AV.

### 4.3 Shields

Shields are both weapons (use Shield skill to attack) and parrying tools (use Shield skill to parry melee and intercept missiles as above). Shield skill has the same -30% cumulative penalty as all parry skill uses.

---

## 5. Wounds

### 5.1 Wound Thresholds

Three wound thresholds govern how damage affects a character.

**Minor Wound.** A single attack deals less than half the character's maximum HP. Multiple minor wounds that together equal or exceed half maximum HP trigger a Stamina roll (CON x5): on a failure, the character falls unconscious.

**Major Wound.** A single attack deals damage equal to or greater than half the character's maximum HP. Roll on the Major Wounds Table (§5.2), or the GM may choose an appropriate result.

After a Major Wound, the character makes a Luck roll (POW x5):

- **Success:** the wound heals cleanly; no permanent characteristic loss.
- **Failure:** the Major Wound result is permanent until addressed.

A character who sustains a Major Wound is not automatically incapacitated - they may still act in the same round, but at impaired capacity.

**Fatal Wound.** A single attack reduces HP to 0 or below. The character falls: prone, unable to act, dying. A character with First Aid or Medicine must intervene in the same or following round to prevent death. A character reduced to negative HP equal to their CON is dead beyond any mundane intervention.

### 5.2 Major Wounds Table

Roll 1D100 when a character sustains a Major Wound (unless the GM chooses an appropriate result):

| Roll  | Result                                                                                                                                                           |
| ----- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 01-05 | Knocked senseless. Unconscious for 1D6 rounds; no permanent effect.                                                                                              |
| 06-10 | Leg wound. Movement is halved. Agility rolls Difficult.                                                                                                          |
| 11-15 | Arm wound. One arm is weakened; attack or parry with that arm is Difficult.                                                                                      |
| 16-20 | Blow to the ribs. All physical actions Difficult. Coughing fits prevent sustained effort.                                                                        |
| 21-25 | Gash to the face. Bleeding 1 HP/round until stanched. CHA reduced by 1D3 (permanent on failed Luck roll).                                                        |
| 26-30 | Shoulder wound. Shield or weapon arm at Difficult. STR reduced by 1D3 (permanent on failed Luck roll).                                                           |
| 31-35 | Deep cut to the thigh. Movement halved. Ongoing 1 HP/round bleed until treated.                                                                                  |
| 36-40 | Hand wound. Fingers severed or tendons cut. That hand cannot grip a weapon without a Stamina roll. DEX reduced by 1D3 (permanent on failed Luck roll).           |
| 41-45 | Gut wound. Stamina roll each round or fall unconscious; CON reduced by 1D3 (permanent on failed Luck roll).                                                      |
| 46-50 | Back blow. Character knocked prone. STR and DEX each reduced by 1D3 (permanent on failed Luck roll).                                                             |
| 51-55 | Head blow. Stunned 1D6 rounds; INT reduced by 1D3 (permanent on failed Luck roll).                                                                               |
| 56-60 | Knee injury. Movement reduced to short moves only. DEX reduced by 1D3 (permanent on failed Luck roll).                                                           |
| 61-65 | Chest wound. All actions Difficult; CON reduced by 1D3. Ongoing 1 HP/round until treated.                                                                        |
| 66-70 | Eye wound. Vision impaired; Difficult on all sight-dependent rolls. CHA reduced by 1D3 (permanent).                                                              |
| 71-75 | Broken weapon arm. Cannot use that arm. STR of that arm effectively 0 until healed.                                                                              |
| 76-80 | Ear lost or hearing damaged. Difficult on all hearing-dependent rolls; CHA reduced by 1 (permanent).                                                             |
| 81-85 | Crippled leg. Cannot stand without support; requires weeks of recovery. DEX reduced by 1D3 (permanent on failed Luck roll).                                      |
| 86-90 | Severe internal damage. Unconscious immediately. Stamina roll each hour or CON reduces by 1.                                                                     |
| 91-95 | Severed or ruined limb. The limb is lost or destroyed. STR and DEX each reduced by 1D3 permanently.                                                              |
| 96-00 | Killing wound. The character is dying even if HP have not reached zero. Stamina roll each round or lose 1D3 HP; medical intervention required within 1D3 rounds. |

**Criticals and Major Wounds.** When a critical attack triggers a Major Wound, the player may forgo the Major Wounds Table and look up the crit result in PA1 instead (applying the severity band per §8). The crit result supersedes the table roll.

### 5.3 Healing

Natural healing is slow. A character recovers 1D3 HP per game week, modified by conditions:

| Conditions                                 | Healing rate         |
| ------------------------------------------ | -------------------- |
| Poor (wilderness, no rest, no supplies)    | 1D3 HP per two weeks |
| Restful (inn, adequate food, warmth)       | 1D3 HP per week      |
| Excellent (physician's care, herbs, quiet) | 1D3 HP per four days |

First Aid applied immediately after a wound heals 1D3 HP (Critical: 2D3 HP) and halts any ongoing bleeding. First Aid must be applied within one turn of the wound to achieve these benefits; later application only halts bleeding.

Medicine skill applied in proper conditions heals 1D3 HP or restores 1 point to a reduced characteristic per treatment (Critical: 2D3 HP, or 1D3 to a characteristic). Medicine cannot be applied in the middle of combat.

Sorcerous healing exists as rare, costly spells in the sorcery list (see P6 §3). It is never the default recovery path, and it pays its own price.

---

## 6. Common Combat Situations

### 6.1 Engaging and Disengaging

**Engaging.** Moving into hand-to-hand range costs a Short Move. An engaged character is within weapon's reach and subject to melee attack without penalty.

**Disengaging.** Breaking out of melee is dangerous. Choose one method:

1. **Fight withdrawal.** Spend the entire round in defensive action only (parries and dodges). If every attack against the character is successfully parried or dodged, the character is disengaged at the end of the round.

2. **Knocked-back disengage.** If a Crushing critical has knocked the character prone (see PA1 §1.4 _Knocked down_), they may attempt a Dodge immediately. Success means the character rolls away and is disengaged; failure means they remain prone and engaged.

3. **Turn and run.** The character turns and moves. This abandons all defence: the opponent gets one immediate attack against the fleeing character that cannot be parried or dodged.

### 6.2 Knockout and Subdual

**Knockout attack.** Declare at the start of Phase Three. Targets the head; roll is Difficult. On a success, resolve damage minus armour, then make a resistance roll: damage vs. CON. On a success, the target is knocked unconscious for 1D10+10 rounds (GM rolls secretly). PA1 critical effects do not apply to Knockout criticals - the result is the unconsciousness rule above, not the brutal wounds of a lethal critical. The target is not killed. A character already unconscious simply resets their unconsciousness duration.

**Subduing.** Declare at the start of Phase Three. The attacker reduces the damage dice or omits the damage modifier, to a minimum of 1D2.

**Grapple and restrain.** A successful Grapple roll (Brawl or Grapple skill) establishes a hold. The restrained character must make an opposed STR vs. STR or DEX vs. DEX resistance roll to break free (their choice). An immobilised character cannot attack but can still speak.

### 6.3 Surprise

A completely unaware character cannot parry or dodge; the attacker gains an Easy roll. A partially surprised character (knew a fight was possible but did not see this attack) may attempt a Difficult parry or dodge.

When both sides are surprised, an opposed Spot or Listen roll determines who acts first. On a tie, both sides freeze for one round.

**Ambush.** Hidden attackers get Easy attacks on the first round. Victims may not parry or dodge until the following round - unless some succeed at a Spot or Listen roll before the attack lands, in which case those individuals may defend normally.

### 6.4 Multiple Attackers

No more than five human-sized opponents can meaningfully engage a single target simultaneously. Large weapons reduce this number further. Attackers beyond the limit are crowded out.

When a character is attacked by more opponents than they have parry and dodge attempts remaining, some attacks land undefended. Choose which to defend; the rest hit automatically.

### 6.5 Casting in Combat

A sorcerer struck before Phase Two resolves must make a Stamina roll (CON x5) or the spell collapses; any PP spent are lost. An engaged sorcerer risks interruption from incoming attacks even if they act first. Disengage first or accept the risk.

See P6 §2 for full sorcery casting rules.

### 6.6 Close Combat and Weapon Length

Long weapons attack first within a DEX rank. Once a short-weapon fighter closes to grappling distance, long-weapon parries become Difficult and the full reach cannot be used. To close, the short-weapon fighter must survive the initial strike (long weapon attacks first in that exchange); subsequent rounds at close range penalise the long-weapon fighter.

Daggers and unarmed strikes are unaffected by close quarters. Two-handed polearms may be unusable in tight spaces.

### 6.7 Cover

Partial cover (a door-frame, a low wall, a fallen pillar) makes attacks against the covered character Difficult. If the attack roll falls between the modified skill (with Difficult applied) and the unmodified skill, the cover is struck instead. Damage that exceeds the cover's structural integrity passes through.

A character who is kneeling or prone behind a full shield or wall gains substantial cover. The GM determines coverage based on description.

### 6.8 Fighting While Down

All attacks, parries, and dodges are Difficult while prone; attacks against the character are Easy. Rising takes an attack slot, during which these penalties still apply.

**Difficult Dodge to rise.** A prone character may attempt a Difficult Dodge on their DEX rank. Success: they rise and may still attack. Failure: they remain prone.

### 6.9 Aimed Attacks

For every 5 DEX ranks spent delaying, add +10% to the attack skill, up to the base skill maximum. Announce at the start of Phase Three; count off the ranks openly.

---

## 7. Damage Types

WSR weapons deal one of four damage types. Type determines which critical hit table is consulted in PA1 when a critical attack lands. Type also affects armour interactions (some armours protect better against some types - see P7 Equipment) and certain talents and creature abilities that react to specific types.

### 7.1 Slashing (swords, axes, daggers, claws)

Cutting wounds. Slash criticals resolve on the **PA1 Slash table** (PA1 §2). Slash critical entries commonly cause bleeding wounds; the bleed effect is defined in PA1 §1.4.

### 7.2 Impaling (spears, arrows, javelins, thrusting swords)

Puncturing wounds. Impale criticals resolve on the **PA1 Pierce table** (PA1 §3). Pierce critical entries can lodge a weapon in the wound or pin a limb; the specific effect is described within the relevant entry.

### 7.3 Crushing (maces, hammers, clubs, shields)

Blunt-force wounds. Crush criticals resolve on the **PA1 Krush table** (PA1 §4). Krush critical entries commonly stun the target or knock them prone; the stunned and knocked-down effects are defined in PA1 §1.4.

### 7.4 Entangling (whips, nets, chains, ropes)

Restraining attacks. Entangling weapons have a dedicated tactical option:

**Entangle attempt.** Instead of striking for damage, a character may declare an entangle attempt with an entangling weapon. The roll is Difficult; on a success, the target is entangled without taking damage. An entangled target cannot move from their current position and cannot attack with restrained limbs. Escape requires an opposed STR vs. STR or DEX vs. DEX resistance roll as a full-round action. The entangling weapon holds until deliberately released or the wielder is incapacitated.

An entangling critical (whether on a damage attack or an entangle attempt) imposes the entangle effect immediately and irresistibly: no resistance roll is permitted at the moment of impact, though subsequent escape attempts proceed normally.

---

## 8. Mooks

Mooks are ordinary soldiers, hired thugs, city guards, and bandit conscripts - fighters without exceptional qualities, without Fate Point access, and without the will to fight to the death.

**The mook rule.** A mook who takes cumulative damage equal to or greater than half their HP total is automatically incapacitated. No Major Wounds Table. The GM narrates the result: knocked out, driven off, or unwilling to die for six coins. Mooks still attack, parry, and roll to hit normally - only the incapacitation threshold is simplified.

A mook is never a named character. The moment an NPC becomes plot-relevant or individually characterised, they resolve under full combat rules.

**Mooks have no Fate Point access.** They cannot spend PP on any option from the menu in P4 §7.

For mook stat blocks, the three-tier NPC model, and the "Look Out Master!" villain mechanic, see G2 §1.

---

## 9. Dying Blows

A character at 0 HP or below may attempt one last act before falling.

**Declaring a Dying Blow.** On their DEX rank, declare the Dying Blow and make a Stamina roll (CON x5). On a success, take one final action - a single attack, a warning shout, a dropped potion, the triggering of a prepared sorcerous effect. The action is Difficult. After it resolves, the character falls unconscious and is dying as normal.

**Actions already spent.** If the character has exhausted their action for the round when the killing wound arrives, the Dying Blow is still available, but the Stamina roll is Difficult (halved).

A Dying Blow cannot be a defensive action. It can trigger a Fate Point spend, including Deflect the Killing Blow (see P4 §7.7).

---

## 10. Reading the Crit Tables

When a critical attack lands and is not fully defended, look up the result in PA1. This section explains how to find the right result.

### 10.1 Determine the Damage Type

The weapon used determines which table to consult:

- **Slash:** swords, axes, daggers, claws, most edged weapons.
- **Pierce:** spears, arrows, crossbow bolts, thrusting swords, javelins.
- **Krush:** maces, hammers, clubs, slings, shields used offensively, fists.

Some weapons may fall into more than one type (a falchion used for a hacking cut is Slash; the same weapon used for a thrusting stab is Pierce). The attacker declares which type applies at the time of the roll.

### 10.2 Determine the Severity Band

The severity band (A through E) is determined by the matching-dice value that triggered or was bought into the critical:

| Matching-dice value | Severity band                                                                 |
| ------------------- | ----------------------------------------------------------------------------- |
| 11                  | A (least severe)                                                              |
| 22                  | B                                                                             |
| 33                  | C                                                                             |
| 44                  | D                                                                             |
| 55                  | E (most severe, within normal success range)                                  |
| 66, 77, 88          | E (accessible only to characters with skill 66, 77, 88 or above respectively) |

A Critical Buy uses the purchased value. If a character with Sword 65 rolls 47 and spends 3 PP to claim 44, the severity band is D. See PA1 §1 for the full lethality gradient.

### 10.3 Find the Roll

Within the damage type table and severity band column, roll 1D100 and read the result. A character who has received a lethal crit may spend PP (P4 §7) after hearing the result but before it takes full effect.

### 10.4 Criticals and Mooks

Mooks do not consult the crit tables. A critical hit deals full damage ignoring armour; if this reaches the incapacitation threshold (§8), the mook is done. The crit table may be consulted for descriptive colour only.
