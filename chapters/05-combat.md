# 5 Combat

## 5.1 The Combat Round

Each combat round represents twelve seconds of action and runs through these steps:

1. **Initiative.** At the start of the round, every combatant rolls **1D10 + DEX** to determine their initiative for physical actions. Sorcerers who plan to cast a spell also roll **1D10 + INT** for their casting initiative. Reroll fresh each round.

2. **Pending Powers resolve.** Non-instantaneous spells from earlier rounds (rituals, multi-round summons) take effect now, before any new actions.

3. **Action.** Combatants act in descending initiative order. On their tick, a character takes one action (see §5.2 Combat Actions). A sorcerer casting a spell acts on their **INT initiative**; everything else uses the **DEX initiative**. Parries and dodges are reactions, not actions, and happen in response to incoming attacks regardless of initiative.

4. **Resolution.** Apply ongoing effects (bleeding, expiring conditions, end-of-round bookkeeping). The round ends.

**Ties.** The character with the higher relevant skill acts first. If still tied, simultaneous. Within a single initiative count for melee attacks, weapon length matters: missiles before long weapons, long before medium, medium before short and unarmed.

**Delaying.** A character may delay their action to act at any lower initiative count in the same round. Once delayed, they cannot return to their original count. A character who delays past initiative 1 loses their action for the round.

**Multiple actions in a round.** A character with a weapon skill above 100% (§4.1.4) or other circumstance permitting a second action takes the second action 5 initiative counts below the first.

## 5.2 Combat Actions

**Engaged or unengaged.** A character is **engaged** when they are within striking distance of an opponent who can attack them and committed to the close-quarters melee. They are **unengaged** when they are not - free to move, take non-combat actions, ready a missile weapon, or stand outside the close fight. Engagement status determines which actions are available and what defences apply.

On their initiative tick, a character may take **one** of the following actions:

- **Attack.** Make one melee or missile attack against a target in range (see §5.3).
- **Cast a spell.** Acts on the caster's INT initiative. The spell resolves at that tick. See §7 for sorcery rules.
- **Move.** See §5.2.1 below.
- **Engage.** Close to hand-to-hand range with a chosen opponent and make a single attack at no penalty - a combined move-and-attack into close combat. See §5.2.2.
- **Disengage.** Break out of close combat. See §5.2.3.
- **Non-combat action.** Draw a weapon, open a door, fish a vial from a pouch, address a crowd. Only available to an unengaged character; an engaged character cannot safely take their eyes off the fight.

**Free at any time:**

- **Parry or Dodge.** React to an incoming attack with a defensive roll (§5.3.3, §5.3.4). No declaration required.
- **Fight defensively.** Declare instead of attacking; gain one free dodge that does not count against the cumulative parry/dodge penalty stack (§5.3.7).
- **Speak.** A short sentence. No cost.

### 5.2.1 Movement

Movement in combat is described, not measured. Three categories tie to the four range bands used by missile and theatre-of-mind combat (§5.3.8, §6.10): **Near** (arm's reach), **Normal** (standard distance within a fight), **Far** (across a significant space), **Extreme** (edge of vision).

- **Short Move.** Repositioning within the same range band - circling for an opening, stepping off a fallen ally, taking the high ground, closing the last step on an opponent already at Near range. No initiative penalty; combines freely with an Attack on the same tick.
- **Long Move.** Crosses one range band (Far → Normal, or Normal → Near). Halves the character's initiative this round (round down). The character may still attack or take another action at the reduced initiative. Moving _out_ of Near range requires a Disengage first (§5.2.3).
- **Full Sprint.** Maximum speed. Crosses two range bands in a single round, runs down a fleeing target, escapes bowshot, or traverses out of an encounter entirely. Reduces initiative to a quarter (round down). Cannot attack; defensive actions only if directly threatened. Sustained sprinting across multiple rounds is a chase (§6.8).

### 5.2.2 Engaging

Moving from unengaged to engaged costs a Short Move and may be combined with a single attack on the same initiative tick.

### 5.2.3 Disengaging

Breaking out of close combat is dangerous. Choose one method:

1. **Fight withdrawal.** Spend the entire round in defensive action only (parries and dodges). If every attack against the character is successfully parried or dodged, the character is disengaged at the end of the round.

2. **Knocked-back disengage.** If a character has been knocked prone (see §A1.1.4 _Knocked down_), they may attempt a Dodge immediately. Success: the character rolls away and is disengaged. Failure: they remain prone and engaged.

3. **Turn and run.** The character turns and moves. This abandons all defence: the opponent gets one immediate attack against the fleeing character that cannot be parried or dodged.

## 5.3 Attack and Defence

### 5.3.1 The Attack Roll

To attack, roll D100 against the relevant weapon skill. Consult the outcome tiers from §4.2:

- **Critical Success** (01 or matching dice within success range): the attack lands with exceptional force. Consult the appropriate crit table in §A1. The attacker may also have spent PP to convert a normal success to a critical (see §4.6.1).
- **Success**: the attack connects. The defender may attempt to parry or dodge.
- **Failure**: the attack misses. No defensive roll needed.
- **Fumble** (00, or matching dice outside success range): something has gone wrong. The GM narrates the complication - a dropped weapon, a stumble, an opening left for the opponent.

### 5.3.2 The Attack and Defence Matrix

When an attack succeeds, the defender may attempt a parry or dodge. Both attack and defence generate an outcome tier. The interaction between the two tiers determines the result:

| Attack result | Defence result    | Outcome                                                                                  |
| ------------- | ----------------- | ---------------------------------------------------------------------------------------- |
| Critical      | Critical          | Attack parried/dodged; both combatants hold ground - neither gains the crit result       |
| Critical      | Success           | Attack partially deflected: rolled damage, armour applies; no §A1 effect                 |
| Critical      | Failure or Fumble | **Maximum** damage + §A1 entry, ignores armour                                           |
| Success       | Critical          | Attack fully parried or dodged; defender has momentary advantage                         |
| Success       | Success           | Attack partially deflected: half damage, armour applies                                  |
| Success       | Failure           | Normal damage, armour applies                                                            |
| Success       | Fumble            | Normal damage, armour applies; defender additionally suffers their fumble's consequences |

A Critical attack that is not defended against (the defender chose not to parry or dodge, or had no defence remaining) deals **maximum** damage on every damage die, adds any bonus damage from the §A1 entry, and ignores armour entirely.

### 5.3.3 Parrying

A defender may attempt to parry any successful attack by rolling their parrying weapon or shield skill. Each parry attempt beyond the first in a round suffers a cumulative -30% penalty to the parry skill. A defender who has attempted two parries that round makes the third at -60%, the fourth at -90%, and so on.

### 5.3.4 Dodging

A defender may attempt to dodge instead of parrying. Roll the Dodge skill. The same cumulative -30% penalty applies as for parries: each dodge after the first in a round is -30%, the third is -60%, and so on.

### 5.3.5 Parries and Dodges

A character commits to one defensive mode for the round - **either parrying or dodging, not both**. The two cannot be combined against a single attack, and the cumulative -30% penalty stack belongs to whichever mode the character is using.

The exception is Fight Defensively (§5.3.7). A character in that stance may freely mix parries and dodges, and the cumulative -30% penalty stack applies to both together: the second defensive action of the round (parry or dodge) is at -30%, the third at -60%, regardless of which type was first.

### 5.3.6 Critical Attacks and Armour

A Critical attack that lands against a defender who failed to defend (or was not defended) deals **maximum damage on every damage die**, adds any **bonus damage** specified by the §A1 critical entry, and **ignores armour entirely**. The damage modifier (dm) is rolled normally and added.

> **Example.** A longsword does 1D8+dm. On a critical that lands undefended, the player takes the max of 1D8 = 8, adds dm (rolled normally - say +1D4 = 3), adds the §A1 entry's bonus (say +5), for **16 damage** total, applied directly to HP and ignoring any armour the target was wearing.

A defender who parried or dodged successfully against a Critical reduces the result to a standard Success - the attack still strikes, but damage is rolled normally, armour applies, and the §A1 entry's special effect does not trigger.

When a critical attack lands and there is no successful defence: determine the severity band from the matching-dice value and damage type (§A1.1.2), then look up the result in the relevant §A1 damage-type table.

### 5.3.7 Fighting Defensively

A character who forgoes all attacks for the round gains one additional Dodge that costs no -30% penalty. They may still parry normally (with cumulative penalties), and the free dodge does not count toward the parry penalty track. Declare on the attacker's initiative tick.

### 5.3.8 Missile Weapons

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

### 5.3.9 Multiple Attacks

A character whose weapon skill exceeds 100% may split that skill into multiple attacks, each at a minimum effective skill of 50%. Additional attacks resolve at -5 initiative count intervals after the first. No single attack may exceed the character's full skill rating.

**Example.** A warrior with Sword 110% may attack twice: once at 110% on their normal initiative count and once at 50% -5 initiative. Or they may choose 70%/70% (any split summing to the base, each at minimum 50%). The second attack comes at -5 initiative counts from the first.

## 5.4 Damage and Armour

### 5.4.1 Damage Rolls

Each weapon lists a damage dice expression. The attacker rolls this dice, adds their damage modifier (derived from STR and SIZ), and applies the result to the defender's HP total after subtracting armour.

### 5.4.2 Armour Value

Armour reduces all incoming damage by its Armour Value (AV). Subtract AV from damage before applying to HP. If the reduction brings damage to 0 or below, no HP are lost - but the impact still occurred.

**Armour disadvantages.** Armour imposes skill penalties on Agility, Move Quietly, Swim, Climb, and Perception skills as listed in the equipment tables (see §8.3). It is also socially conspicuous: arriving at a merchant's hall in full bronze scales makes certain conversations difficult.

**Armour fit.** Armour is sized for its original wearer. Armour that does not fit (different SIZ) imposes an additional -20% penalty on all physical skills and halves its AV.

### 5.4.3 Shields

Shields are both weapons (use Shield skill to attack) and parrying tools (use Shield skill to parry melee and intercept missiles as above). Shield skill has the same -30% cumulative penalty as all parry skill uses.

## 5.5 Wounds

### 5.5.1 Taking Damage

Damage is subtracted from current HP. Combat continues at any positive HP - the character keeps acting, parrying, casting, regardless of the wound count. The genre tolerates beating, blood, and exhaustion right up until the moment a character drops.

**Critical attack.** A critical hit applies the appropriate §A1 entry in addition to its damage. The §A1 entry is the wound - its stated duration, impairment, and permanence are authoritative. Crit-driven wounds are the only source of permanent injury in WSR; ordinary damage just accumulates as HP loss.

**Reeling Blows.** When a non-critical attack deals damage equal to or greater than the defender's **half max HP** in a single blow, the defender is **Reeling**. Until their next action resolves:

- Their next action is at Difficult.
- They may move no more than a Short Move.
- Their next parry or dodge is at an additional -30% beyond any cumulative penalty already applied.

A Reeling blow is the heavy strike that doesn't quite get through your guard cleanly: you took the wound, but it broke your rhythm. The attacker presses the advantage on the next exchange. Critical attacks do not trigger Reeling - the §A1 entry replaces it. If the blow is also a crushing impact past the SIZ threshold, Knockback (§5.6.12) applies in addition.

**Fatal Wound.** A single attack reduces HP to 0 or below. The character falls: prone, unable to act, dying. A character with First Aid or Medicine must intervene in the same or following round to prevent death. A character reduced to negative HP equal to their CON is dead beyond any mundane intervention.

**Pushing past the drop.** A character at 0 HP may attempt a Dying Blow (§5.9): one last action before falling. A character on the edge of falling may spend PP to Deflect the Killing Blow (§4.6.8). These are the two pressure-valves the system offers; there is no separate "stay-conscious-through-a-heavy-hit" roll.

### 5.5.2 Healing

Natural healing is slow. A character recovers 1D4 HP per game week, modified by conditions:

| Conditions                                 | Healing rate         |
| ------------------------------------------ | -------------------- |
| Poor (wilderness, no rest, no supplies)    | 1D4 HP per two weeks |
| Restful (inn, adequate food, warmth)       | 1D4 HP per week      |
| Excellent (physician's care, herbs, quiet) | 1D4 HP per four days |

First Aid applied immediately after a wound heals 1D4 HP (Critical: 2D4 HP) and halts any ongoing bleeding. First Aid must be applied within one turn of the wound to achieve these benefits; later application only halts bleeding.

Medicine skill applied in proper conditions heals 1D4 HP or restores 1 point to a reduced characteristic per treatment (Critical: 2D4 HP, or 1D3 to a characteristic). Medicine cannot be applied in the middle of combat.

Sorcerous healing exists as rare, costly spells in the sorcery list (see §7.3). It is never the default recovery path, and it pays its own price.

## 5.6 Common Combat Situations

### 5.6.1 Knockout and Subdual

**Knockout attack.** Declare on the attacker's initiative tick. Targets the head; roll is Difficult. On a success, resolve damage minus armour, then make a resistance roll: damage vs. CON. On a success, the target is knocked unconscious for 1D10+10 rounds (GM rolls secretly). §A1 critical effects do not apply to Knockout criticals - the result is the unconsciousness rule above, not the brutal wounds of a lethal critical. The target is not killed. A character already unconscious simply resets their unconsciousness duration.

**Subduing.** Declare on the attacker's initiative tick. The attacker reduces the damage dice or omits the damage modifier, to a minimum of 1D2.

**Grapple and restrain.** A successful Grapple roll (Brawl or Grapple skill) establishes a hold. The restrained character must make an opposed STR vs. STR or DEX vs. DEX resistance roll to break free (their choice). An immobilised character cannot attack but can still speak.

### 5.6.2 Surprise

A completely unaware character cannot parry or dodge; the attacker gains an Easy roll. A partially surprised character (knew a fight was possible but did not see this attack) may attempt a Difficult parry or dodge.

When both sides are surprised, an opposed Spot or Listen roll determines who acts first. On a tie, both sides freeze for one round.

**Ambush.** Hidden attackers get Easy attacks on the first round. Victims may not parry or dodge until the following round - unless some succeed at a Spot or Listen roll before the attack lands, in which case those individuals may defend normally.

### 5.6.3 Multiple Attackers

No more than five human-sized opponents can meaningfully engage a single target simultaneously. Large weapons reduce this number further. Attackers beyond the limit are crowded out.

When a character is attacked by more opponents than they have parry and dodge attempts remaining, some attacks land undefended. Choose which to defend; the rest hit automatically.

### 5.6.4 Casting in Combat

A sorcerer struck before their spell resolves on their INT initiative must make a Stamina roll (CON x5) or the spell collapses; any PP spent are lost. An engaged sorcerer risks interruption from incoming attacks even if their INT initiative beats the attacker's DEX initiative - any attack that connects before the casting tick is enough. Disengage first or accept the risk.

See §7.2 for full sorcery casting rules.

### 5.6.5 Close Combat and Weapon Length

Long weapons attack first within a initiative count. Once a short-weapon fighter closes to grappling distance, long-weapon parries become Difficult and the full reach cannot be used. To close, the short-weapon fighter must survive the initial strike (long weapon attacks first in that exchange); subsequent rounds at close range penalise the long-weapon fighter.

Daggers and unarmed strikes are unaffected by close quarters. Two-handed polearms may be unusable in tight spaces.

### 5.6.6 Cover

Partial cover (a door-frame, a low wall, a fallen pillar) makes attacks against the covered character Difficult. If the attack roll falls between the modified skill (with Difficult applied) and the unmodified skill, the cover is struck instead. Damage that exceeds the cover's structural integrity passes through.

A character who is kneeling or prone behind a full shield or wall gains substantial cover. The GM determines coverage based on description.

### 5.6.7 Fighting While Down

All attacks, parries, and dodges are Difficult while prone; attacks against the character are Easy. Rising takes an attack slot, during which these penalties still apply.

**Difficult Dodge to rise.** A prone character may attempt a Difficult Dodge on their initiative count. Success: they rise and may still attack. Failure: they remain prone.

### 5.6.8 Aimed Attacks

For every 5 initiative counts spent delaying, add +10% to the attack skill, up to the base skill maximum. Announce when delaying begins; count off the initiative ticks openly.

### 5.6.9 Disarming

A character may attempt to knock or twist an opponent's weapon from their grip rather than wound them. Roll the attacker's melee weapon skill at **Difficult**. The defender may parry or dodge as normal.

- **Attack succeeds, defence fails:** the weapon spins from the defender's grip 1D6 metres in a direction the GM chooses (often based on the angle of attack). No damage is dealt.
- **Critical disarm:** as above, plus the weapon lands in the attacker's hand, or in any position of the attacker's choosing.
- **Attack fails or is defended:** no effect. The attacker has used their action.

Picking up a dropped weapon takes a Non-combat action (§5.2) and requires being unengaged. A weapon within arm's reach may be retrieved by a Short Move combined with the Non-combat action on the same initiative tick.

### 5.6.10 Two-Weapon Fighting

A character with a weapon in each hand may attack with both in the same round. The **primary attack** (with the dominant hand) uses the full weapon skill. The **off-hand attack** uses the off-hand weapon's skill at **-30%**. Both attacks resolve on the character's initiative count.

**Training the off-hand.** A character may train the off-hand specifically. Once the off-hand attack skill (tracked as a separate speciality) reaches half the primary attack skill, the off-hand penalty drops to **-10%**. Once it reaches equal to or higher than the primary attack skill, the penalty is removed entirely.

**Off-hand parries.** A weapon held in the off-hand may parry attacks at no off-hand penalty. The cumulative parry penalty stack (§5.3.3) still applies across all parry attempts in the round.

**Compatible weapons.** Both weapons must be one-handed (1H, or 1H/2H wielded one-handed). A shield wielded in the off-hand is for parrying or shield-bash (§5.6.12 Knockback) only and does not enable an off-hand attack roll alongside the primary.

### 5.6.11 Mounted Combat

A mounted character fights from horseback, chariot, camel, or other mount. The Ride skill (§3.4.34) governs control of the mount and stability of the character while attacking.

**Initiative.** The mounted character uses their own DEX initiative; the mount does not roll separately. The character may move the mount up to a Long Move and attack on the same initiative tick - the mount's momentum carries the action.

**Height and reach.** Mounted characters strike down at unmounted opponents. Mounted attacks gain **+10%** against unmounted defenders. Unmounted attacks against a mounted target are at **-20%** unless the attacker uses a long weapon (spear, polearm, two-handed sword) or attacks the mount instead.

**Charge.** A mounted character who moves a Long Move directly toward an opponent and attacks may declare a **charge** with a long weapon (lance, spear, pike). The attack deals **+1D6 bonus damage** and ignores the initiative penalty for the Long Move. The mount must have clear ground to gain momentum. A charge that misses leaves the character exposed: any opponent at Near range may make an immediate free attack as the rider hauls the mount to a stop.

**Ride roll under attack.** A character making any attack while their mount is moving must succeed at a Ride roll, or attack at **-20%**. A character struck for serious damage (over half their HP in one blow) while mounted must make a Ride roll or be unhorsed (falling damage per §6.7.1).

**Mounts as targets.** A mount has its own HP (typically 20-30 for a horse). A mount reduced to half HP panics; a mount at 0 HP collapses, throwing or trapping its rider.

**Stirrups (§8.7).** A character riding without stirrups attacks at an additional **-10%** and rolls Ride at Difficult to stay mounted under combat stress.

### 5.6.12 Knockback

A heavy crushing impact - a shield-bash, a charging shove, a giant's club-swing - may knock a defender backwards regardless of whether the attack wounds them. After damage is dealt, compare the **raw damage rolled** to the target's **SIZ** on the Resistance Table (§4.3.5). If damage exceeds SIZ, the target is pushed back one range step (typically Near → Normal, breaking engagement) and must make a DEX roll or fall prone (§5.6.7).

Knockback applies to crushing/blunt attacks: maces, hammers, shield bashes, charging mounts, falling debris, kicks, and the natural attacks of large creatures. It does not apply to slashing or piercing damage by default. The GM may rule that a critical of any type carries knockback if the fiction calls for it (a spear through the gut, driving the target back into a wall).

A target who declares a **brace stance** at the start of the round (forgoing all movement and Long Moves) doubles their effective SIZ for knockback resistance.

### 5.6.13 Firing Into Combat

Missile attacks targeting an opponent who is engaged in melee with allies risk hitting the wrong combatant. After rolling the attack:

- **Success:** the attack hits the intended target normally.
- **Failure (not a fumble):** the GM rolls 1D6. On **1-2**, the missile strikes an adjacent friendly combatant instead (resolve as a normal hit on that target, using the original attack roll for damage placement). On **3-6**, the missile misses everyone.
- **Critical:** as a normal critical against the intended target. The friendly-fire risk does not apply.
- **Fumble:** the missile automatically strikes a random adjacent friendly combatant (or other Bad Place, GM's call).

Aiming reduces the risk: each +10% from Aimed Attacks (§5.6.8) also reduces the 1D6 friendly-fire range by 1 (so a single +10% aim means friendly fire on 1 only; +20% removes it entirely). A character who declares "I'll wait for a clear shot" delays their initiative until the melee separates.

### 5.6.14 Quickdraw

Drawing a weapon is normally a Non-combat action (§5.2), unavailable to engaged characters. A character may instead **quickdraw**: draw the weapon and attack in the same initiative tick, at **-20%** to the attack roll. Available only with weapons designed to be carried ready (a sheathed sword, dagger, hand-axe, throwing knife) - not a stowed bow or bundled spear.

A character surprised and reaching for their weapon (§5.6.2) may quickdraw as their first action; they are otherwise treated as surprised for that exchange.

### 5.6.15 Sweep and Area Attacks

A character wielding a two-handed weapon with broad reach (greatsword, falx, great axe, two-handed flail) may attack multiple adjacent opponents in one swing. Declare at the start of the round. Roll once against the attack skill at **-20% per opponent beyond the first**. Damage is rolled once and applied to each target hit. Each defender rolls their own parry or dodge as normal.

**Restrictions:**

- Maximum 3 opponents in a single sweep.
- All targets must be within the weapon's reach and within an arc the swing can plausibly cover - the GM rules whether geometry permits.
- The attacker may not parry or dodge until their next initiative tick (committing fully to the sweep).

Larger creatures (giants, drakes, certain demons) may sweep larger groups; their stat blocks note the size of the sweep and any modifiers.

## 5.7 Damage Types

WSR weapons deal one of four damage types. Type determines which critical hit table is consulted in §A1 when a critical attack lands. Type also affects armour interactions (some armours protect better against some types - see §8 Equipment) and certain talents and creature abilities that react to specific types.

### 5.7.1 Slashing (swords, axes, daggers, claws)

Cutting wounds. Slash criticals resolve on the **§A1 Slash table** (§A1.2). Slash critical entries commonly cause bleeding wounds; the bleed effect is defined in §A1.1.4.

### 5.7.2 Impaling (spears, arrows, javelins, thrusting swords)

Puncturing wounds. Impale criticals resolve on the **§A1 Pierce table** (§A1.3). Pierce critical entries can lodge a weapon in the wound or pin a limb; the specific effect is described within the relevant entry.

### 5.7.3 Crushing (maces, hammers, clubs, shields)

Blunt-force wounds. Crush criticals resolve on the **§A1 Krush table** (§A1.4). Krush critical entries commonly stun the target or knock them prone; the stunned and knocked-down effects are defined in §A1.1.4.

### 5.7.4 Entangling (whips, nets, chains, ropes)

Restraining attacks. Entangling weapons have a dedicated tactical option:

**Entangle attempt.** Instead of striking for damage, a character may declare an entangle attempt with an entangling weapon. The roll is Difficult; on a success, the target is entangled without taking damage. An entangled target cannot move from their current position and cannot attack with restrained limbs. Escape requires an opposed STR vs. STR or DEX vs. DEX resistance roll as a full-round action. The entangling weapon holds until deliberately released or the wielder is incapacitated.

An entangling critical (whether on a damage attack or an entangle attempt) imposes the entangle effect immediately and irresistibly: no resistance roll is permitted at the moment of impact, though subsequent escape attempts proceed normally.

**Other damage types.** Fire damage (sorcerous flame, Greek fire, dragon breath, fire elementals) and Grapple damage (the §3 Grapple skill, creature constricting attacks) have their own §A1 critical hit tables - see §A1.5 (Burn) and §A1.6 (Grapple). They follow the same band structure (A through E) and the same matching-dice severity rules as Slash, Pierce, and Krush.

## 5.8 Rabble

Rabble are ordinary soldiers, hired thugs, city guards, and bandit conscripts - fighters without exceptional qualities, without Fate Point access, and without the will to fight to the death.

**The Rabble rule.** A Rabble who takes cumulative damage equal to or greater than half their HP total is automatically incapacitated. The GM narrates the result: knocked out, driven off, or unwilling to die for six coins. Rabble still attack, parry, and roll to hit normally - only the incapacitation threshold is simplified.

A Rabble is never a named character. The moment an NPC becomes plot-relevant or individually characterised, they resolve under full combat rules.

**Rabble have no Fate Point access.** They cannot spend PP on any option from the menu in §4.6.

For Rabble stat blocks, the three-tier NPC model, and the "Look Out Master!" villain mechanic, see §9.1.

## 5.9 Dying Blows

A character at 0 HP or below may attempt one last act before falling.

**Declaring a Dying Blow.** On their initiative tick, declare the Dying Blow and make a Stamina roll (CON x5). On a success, take one final action - a single attack, a warning shout, a dropped potion, the triggering of a prepared sorcerous effect. The action is Difficult. After it resolves, the character falls unconscious and is dying as normal.

**Actions already spent.** If the character has exhausted their action for the round when the killing wound arrives, the Dying Blow is still available, but the Stamina roll is Difficult (halved).

A Dying Blow cannot be a defensive action. It can trigger a Fate Point spend, including Deflect the Killing Blow (see §4.6.8).

## 5.10 Reading the Crit Tables

When a critical attack lands and is not fully defended, look up the result in §A1. This section explains how to find the right result.

### 5.10.1 Determine the Damage Type

The weapon used determines which table to consult:

- **Slash:** swords, axes, daggers, claws, most edged weapons.
- **Pierce:** spears, arrows, thrusting swords, javelins.
- **Krush:** maces, hammers, clubs, slings, shields used offensively, fists.

Some weapons may fall into more than one type (a short sword used for a hacking cut is Slash; the same weapon used for a thrusting stab is Pierce). The attacker declares which type applies at the time of the roll.

### 5.10.2 Determine the Severity Band

The severity band (A through E) is determined by the matching-dice value that triggered or was bought into the critical:

| Matching-dice value | Severity band |
| ------------------- | ------------- |
| 11                  | A             |
| 22, 33              | B             |
| 44, 55              | C             |
| 66, 77              | D             |
| 88, 99              | E             |

A higher matching-dice value is only accessible to characters whose skill (after any difficulty modifiers) is at least that value: a fighter with Sword 50 cannot crit on 66 or higher, because 66 exceeds their skill - those rolls are fumbles instead.

**01 always-crit.** A roll of 01 is always a Critical Success (§4.2.1). Its severity band is the highest band the character could otherwise reach via matching dice at their effective skill (skill after difficulty modifiers): the 01 lucky shot lands in the same band that the character's best regular crit would land. A novice's lucky shot is mild; a master's lucky shot is devastating. See §A1.1.2 for the full skill-vs-value lookup table.

**Critical Buy.** A Critical Buy uses the purchased value. If a character with Sword 65 rolls 47 and spends 3 PP to claim 44, the severity band is C. See §A1.1 for the full lethality gradient.

### 5.10.3 Find the Roll

Within the damage type table and severity band column, roll 1D100 and read the result. A character who has received a lethal crit may spend PP (§4.6) after hearing the result but before it takes full effect.

### 5.10.4 Criticals and Rabble

**Rabble inflicting criticals.** A Rabble who rolls matching dice within their skill (or rolls 01) inflicts a critical normally. The PC may defend; if the attack lands, the standard §A1 table is consulted, maximum damage applies, and armour is ignored. Rabble cannot Critical Buy (no Fate Point access), and their natural skill cap (typically 30-50%) limits them to Band A or B - an exceptionally-skilled Rabble at skill 50+ may reach Band C, but Bands D and E require skill 66+ and 88+ respectively, which is above the tier's design envelope.

**Rabble receiving criticals.** Rabble do not consult the crit tables when struck. A critical hit deals maximum damage ignoring armour; if this reaches the incapacitation threshold (§9), the Rabble is done. The crit table may be consulted for descriptive colour only.
