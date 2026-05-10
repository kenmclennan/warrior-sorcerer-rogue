# P5. Combat

> _"He was bleeding from a score of wounds, but the fires in his eyes burned brighter than ever."_
> _- Robert E. Howard_

Combat in Warrior \* Sorcerer \* Rogue is brutal, fast, and decisive. Fights cost something even when won. This chapter covers everything that happens once blades are drawn: the structure of a combat round, how attacks and defences resolve, what wounds mean, and the rules that cover common situations at the edge of the action. Read P4 first - the percentile roll, outcome tiers, matching-dice criticals, and the PP spend menu are all defined there and used throughout.

---

## 1. The Combat Round

Each combat round represents twelve seconds of action. A round is divided into four phases, resolved in sequence.

### 1.1 Phase One: Statements

At the start of each round, every participant declares their intended action. Characters with higher DEX declare last, giving them the most information before committing. Characters with lower DEX declare first, with less knowledge of what their opponents intend.

Typical actions: move and attack, hold position and attack, disengage, perform a noncombat action, cast a spell (in Phase Two), or fight defensively.

Declarations are intentions, not contracts. When a character's turn arrives in Phase Three, they may change what they do - but only based on events that have already occurred in that round. They may not wait to see what a faster character does and then revise accordingly.

**Ties in DEX:** if two characters share the same DEX, the character with the higher relevant weapon skill declares last. If still tied, both declare simultaneously.

### 1.2 Phase Two: Powers

Sorcerers and other characters activating abilities that precede physical action resolve them now, in DEX order. A spell cast in this phase takes effect before melee strikes in Phase Three, unless the caster is interrupted (see §6.5).

### 1.3 Phase Three: Action

Characters act in descending DEX rank order. Each character takes their declared action when their DEX rank comes up. Within a DEX rank, actions resolve in weapon-length order: missiles strike before long weapons, long weapons before medium, medium before short and unarmed. This approximates reach without requiring measurement.

**Delaying action.** A character may delay their action, acting at any lower DEX rank in the same round. Once delayed, they cannot return to their original rank. A character who delays to after the last rank loses their action for the round.

### 1.4 Phase Four: Resolution

Ongoing effects are applied: bleeding damage, conditions expiring, any end-of-round bookkeeping. The next round then begins with a new Statements phase.

---

## 2. Movement

Movement in combat is described, not measured. Three categories cover most situations:

**Short Move.** The character shifts position within the immediate area - a step back, a sidestep to flank, a lunge forward. Acts at their normal DEX rank.

**Long Move.** The character crosses a significant portion of the fighting ground - across a room, to the far side of a courtyard. Acts at half DEX rank (round down).

**Full Sprint.** The character runs as fast as possible. Acts at quarter DEX rank (round down), cannot make an attack, and can only attempt defensive actions if directly threatened.

A character who moves significantly in a round and makes an attack does so at the reduced DEX rank their move imposes.

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

**Armour disadvantages.** Armour imposes skill penalties on Agility, Stealth, Swim, Climb, and Perception skills as listed in the equipment tables (see P7 §3). It is also socially conspicuous: arriving at a merchant's hall in full bronze scales makes certain conversations difficult.

**Armour fit.** Armour is sized for its original wearer. Armour that does not fit (different SIZ) imposes an additional -20% penalty on all physical skills and halves its AV.

### 4.3 Shields

Shields are both weapons (use Shield skill to attack) and parrying tools (use Shield skill to parry melee and intercept missiles as above). Shield skill has the same -30% cumulative penalty as all parry skill uses.

---

## 5. Wounds

### 5.1 Wound Thresholds

Three wound thresholds govern how damage affects a character.

**Minor Wound.** A single attack deals less than half the character's maximum HP. The character takes the damage and continues. Multiple minor wounds that together equal or exceed half the character's maximum HP trigger a Stamina roll (CON x5): on a failure, the character falls unconscious from accumulated injury.

**Major Wound.** A single attack deals damage equal to or greater than half the character's maximum HP. This is a fight-altering event. Roll on the Major Wounds Table (§5.2), or the GM may choose an appropriate result based on the nature of the attack and the wound location.

After a Major Wound, the character makes a Luck roll (POW x5):

- **Success:** the wound heals cleanly over time; no permanent characteristic loss.
- **Failure:** the Major Wound result is permanent until addressed (extensive medical care, or sorcerous healing in rare cases).

A character who sustains a Major Wound can often still act in the same round - they are not automatically incapacitated. But they fight at impaired capacity and may be on a countdown.

**Fatal Wound.** A single attack reduces the character's HP to 0 or below. The character falls immediately - they are prone, unable to act, and dying. Unless a character with First Aid or Medicine skill intervenes in the same or the following round, death follows.

A character reduced to negative HP equal to their CON is dead beyond any mundane intervention.

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

**Criticals and Major Wounds.** When a critical attack triggers a Major Wound, the player may forgo consulting the Major Wounds Table and instead look up the crit result in PA1 (applying the severity band per §8). The crit result supersedes the table roll. This is often preferable when a crit is involved - the PA1 results are more specific and frequently more dramatic.

### 5.3 Healing

Natural healing is slow. Without complications, a character recovers 1D3 HP per game week. The quality of care modifies this:

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

**Engaging.** Moving into hand-to-hand range of an opponent (becoming "engaged") costs a Short Move action. An engaged character is within weapon's reach of their opponent and subject to melee attack without penalty.

**Disengaging.** Breaking out of melee is dangerous. Choose one method:

1. **Fight withdrawal.** Spend the entire round in defensive action only (parries and dodges). If every attack against the character is successfully parried or dodged, the character is disengaged at the end of the round.

2. **Knockback disengage.** If knocked back (see §6.8), attempt a Dodge immediately. Success means the character is disengaged; failure means still engaged.

3. **Turn and run.** The character turns and moves. This abandons all defence: the opponent gets one immediate attack against the fleeing character that cannot be parried or dodged.

### 6.2 Knockout and Subdual

**Knockout attack.** Declare at the start of Phase Three. The attack targets the head or equivalent vital point; the roll is Difficult. If successful, resolve damage normally but subtract armour. Then make a resistance roll: rolled damage vs. target's CON. On a success, the target is knocked unconscious for 1D10+10 rounds (secretly rolled by the GM). Slashing and knockback special effects do not apply to knockout attacks. The target is not killed.

A character who is already unconscious is simply knocked out longer: roll the resistance roll and, if it succeeds, the unconsciousness period begins again from the new roll.

**Subduing.** Pulling a blow (declaring at the start of Phase Three) means the attacker reduces the damage dice or omits their damage modifier entirely, to a minimum of 1D2 damage. This allows controlled violence - warning strikes, practice bouts, demonstrations of superiority.

**Grapple and restrain.** A successful Grapple roll (Brawl or Grapple skill) establishes a hold. The restrained character must make an opposed STR vs. STR or DEX vs. DEX resistance roll to break free (their choice). An immobilised character cannot attack but can still speak.

### 6.3 Surprise

A character who is completely unaware of an attack cannot parry or dodge. The attacker gains an Easy attack roll against them.

When both sides are surprised (neither was expecting a fight), an opposed Spot or Listen roll determines who acts first. On a tie, both sides freeze for one round while they register what is happening.

A character who is partially surprised (they know a fight may happen but did not see this specific attack coming) may attempt a Difficult parry or dodge.

**Ambush.** Attackers who are hidden and unseen when they open combat get Easy attacks on the first round. The ambush victims may not parry or dodge until the following round, when they have located the threat. If some ambush victims succeed at a Spot or Listen roll before the attack lands, those individuals may defend normally.

### 6.4 Multiple Attackers

No more than five human-sized opponents can surround and meaningfully engage a single target simultaneously. Large weapons reduce this - a pair of opponents with long spears effectively fills the fighting space available to a closer attacker. The GM evaluates the available space and weapon lengths to set the limit; attackers beyond the limit are crowded out and cannot strike.

When a character is attacked by more opponents than they have parry and dodge attempts remaining in the round, some attacks will land undefended. Choose which attacks to defend - the undefended ones hit automatically.

### 6.5 Casting in Combat

A sorcerer who declares a spell in Phase Two must not be struck before Phase Two resolves. If a faster attacker (higher DEX) succeeds in landing a hit in Phase Three before the spell resolves, the casting is interrupted: the sorcerer must make a Stamina roll (CON x5) or the spell collapses. Any PP already spent is lost.

A sorcerer who is engaged in melee (see §6.1) faces the additional constraint that incoming attacks may interrupt Phase Two casting even if the sorcerer acts first overall. An engaged sorcerer who wants to cast must either disengage first or accept the risk.

See P6 §2 for sorcery casting rules.

### 6.6 Close Combat and Weapon Length

A long weapon (spear, glaive, two-handed sword) attacks first within a DEX rank. But once a short-weapon fighter closes to grappling distance, the long weapon becomes a liability: parries with a long weapon at close range are Difficult, and the long-weapon fighter cannot use the weapon's full reach. The shorter fighter has the advantage at close range.

Closing: the short-weapon fighter who closes with a long-weapon user must survive the initial strike (the long weapon attacks first in that exchange) to claim the close-combat advantage. If they survive, subsequent rounds at close range penalise the long-weapon fighter.

Very short weapons (daggers, punches, improvised tools) are unaffected by enclosed spaces and close combat. Very long weapons (two-handed polearms, great spears) may be unusable in tight spaces where there is insufficient room to swing.

### 6.7 Cover

Partial cover (a doorframe, a low wall, a fallen pillar) makes attacks against the covered character Difficult. If the attack roll falls between the modified skill (with Difficult applied) and the unmodified skill, the cover is struck instead. Damage that exceeds the cover's structural integrity passes through.

A character who is kneeling or prone behind a full shield or wall gains substantial cover. The GM determines coverage based on description.

### 6.8 Knockback

A successful attack that deals enough damage may knock the defender backward. The specific trigger is the crushing special effect (see §7.4): when a blunt weapon's critical attack lands, the attacker may impose a knockback. Resist with a STR vs. damage resistance roll. On a failure, the defender is knocked back and falls prone. The distance is narratively described by the GM based on the severity.

A prone character is at disadvantage: attacks against them are Easy, their own attacks and parries are Difficult. Rising from prone costs the character's attack action and leaves them open to Easy attacks on the round they stand.

### 6.9 Fighting While Down

A character who has been knocked prone is not out. All their attacks, parries, and dodges are Difficult. Attacks against them are Easy.

Rising from prone takes an attack slot. While rising, parries and dodges remain Difficult, and attacks against the character are still Easy until they are fully standing.

**Difficult Dodge to rise.** A prone character may attempt a Difficult Dodge roll on their DEX rank. If it succeeds, they rise and may still make an attack that round. If it fails, they remain prone.

### 6.10 Aimed Attacks

A character may take more time to aim, sacrificing DEX rank speed for accuracy. For every 5 DEX ranks the character spends preparing (delaying their action), add +10% to the skill used for that attack, up to a maximum equal to the base skill. Announce the intention to aim at the start of Phase Three and count off the ranks openly.

---

## 7. Special Damage Types

When a weapon achieves a critical success (matching dice within success range, or PP-buy conversion), the nature of the damage type determines the critical's effects. In non-critical hits, the damage type governs the "special effect" available on ordinary successes. These are the weapons' characters - what makes fighting with a spear different from fighting with a mace.

The full crit effects for each damage type are in PA1. The special effects on ordinary successes are described below.

### 7.1 Slashing (swords, axes, daggers, claws)

**Special success:** the wound bleeds. The target takes 1 HP of ongoing damage per round at the start of each Phase Four until a character succeeds at First Aid on the wound, or until the wound is bound (a Noncombat Action in combat, or freely outside it). Multiple bleeding wounds stack.

### 7.2 Impaling (spears, arrows, javelins, thrusting swords)

**Special success:** the weapon lodges in the wound. The attacker may leave it (the target takes ongoing 1 HP per round from the embedded weapon) or extract it (a Difficult skill roll or a full-round action that deals additional damage equal to the original weapon dice roll, without the damage modifier). While the weapon is lodged, the original attacker has effectively lost it until extraction.

### 7.3 Crushing (maces, hammers, clubs, shields)

**Special success:** the blow doubles the damage modifier. In addition, the target makes a Stamina roll (CON x5): on a failure, the target is stunned for 1D3 rounds. A stunned character cannot attack; all parries and dodges require a successful Idea roll (INT x5) to attempt. All attacks against a stunned character are Easy.

### 7.4 Entangling (whips, nets, chains, ropes)

**Special success:** the target is entangled. They cannot move from their current position and cannot make attacks with restrained limbs. Escaping requires an opposed STR vs. STR or DEX vs. DEX resistance roll as a full-round action. The entangling weapon holds until deliberately released or the attacker is incapacitated.

A character may also declare an entangle intent without a special success: the attack is Difficult, but on a success, the entangle takes effect without damage.

---

## 8. Mooks

Most enemies a PC faces are ordinary soldiers, hired thugs, city guards, and bandit conscripts. These are mooks: fighters without exceptional qualities, with no access to Fate Point spends, and no will to fight to the death.

**The mook rule.** A mook who takes damage equal to or greater than half their HP total - from any combination of hits - is automatically incapacitated. They do not roll on the Major Wounds Table. They are knocked out, driven off, broken by the wound, or simply decide the coin is not worth dying for. The GM narrates which, based on the fiction.

Mooks use the standard combat round and resolution. The half-HP threshold is the only simplified element - they still attack, still parry (within their skill), still roll to hit. The threshold means that a solid strike nearly always ends a mook's fight without further complications.

A mook is never a named character. The moment an NPC becomes plot-relevant or individually characterised, they cease to be a mook and resolve under full combat rules. The GM makes this call.

**Mooks have no Fate Point access.** They cannot spend PP on any option from the menu in P4 §7. They do not deflect killing blows; they do not stand their ground; they do not rally from wounds. This is the primary mechanical distinction between a mook and a professional antagonist.

For the GM-side design of mook stat blocks, the three-tier NPC model, and the "Look Out Master!" villain mechanic, see G2 §1.

---

## 9. Dying Blows

A character at the Fatal Wound threshold - HP at 0 or below, dying - is not yet finished. They may attempt one last act.

**Declaring a Dying Blow.** On their DEX rank, before falling unconscious, the character declares their Dying Blow. Make a Stamina roll (CON x5). If it succeeds, the character takes one final action: a single attack, a shouted warning, a dropped potion to an ally, the triggering of a prepared sorcerous effect. The action is Difficult regardless of circumstances.

After the action resolves, the character falls unconscious and is dying as normal.

**Actions already spent.** If the character has already used their full action for the round when the killing wound arrives, a Dying Blow may still be declared: this is an additional desperate action taken after the round's normal action. In this case, the Stamina roll is Difficult (halved). If it fails, the character simply falls.

A Dying Blow cannot be used for a defensive action - it is one last offensive or purposeful act, not a last parry. It can be used to trigger a Fate Point spend (including Deflect the Killing Blow, if the character has PP remaining - see P4 §7.6).

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

A PP-buy critical uses the matching-dice value that was purchased. If a character with Sword 65 rolls 47 and spends 3 PP to claim 44, the severity band is D.

Band A crits are disruptive but survivable. Band C is fight-altering. Band E at high rolls is potentially lethal. See PA1 §1 for the full lethality gradient.

### 10.3 Find the Roll

Within the damage type table and severity band column, roll 1D100. Find the row that contains the result, and read the crit aloud. Every result is a sentence or two: what the wound is, what ongoing damage it causes, what penalties apply and for how long.

The crit result can be modified by Fate Point spends. A character who has just received a lethal crit result may spend PP from the menu (P4 §7) - Shrug Off a Blow, Stand Your Ground, or Deflect the Killing Blow - after hearing the result but before it takes full effect.

### 10.4 Criticals and Mooks

Mooks do not consult the crit tables. A critical hit against a mook simply deals full damage ignoring armour. If that damage equals or exceeds half the mook's HP, they are automatically incapacitated by the mook rule (§8). Consulting the crit table for a mook is optional - for descriptive colour only, with no mechanical effect beyond the incapacitation threshold.

---

## Source notes cited

- `notes/source-5-combat.md`
- `notes/source-10-spot-rules.md`
- `notes/pulp-cthulhu.md`
- `notes/rolemaster-arms-law.md`

## Locked decisions applied

- 2026-05-10 - Combat resolution: matching-dice criticals + weapon-type tables + PP-buy + matching-dice fumbles
- 2026-05-09 - Combat: Major Wounds as default, no per-location HP
- 2026-05-10 - Mook rule: borrow Pulp Cthulhu mechanism (WSR-original prose)
- 2026-05-10 - Fate Point spend menu finalised
- 2026-05-10 - Borrowing principle: mechanisms only from non-ORC sources
