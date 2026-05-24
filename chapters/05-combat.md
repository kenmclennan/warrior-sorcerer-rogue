# 5 Combat

## 5.1 The Combat Round

Each combat round represents twelve seconds of action and follows these steps:

1. **Initiative.** At the start of the round, every combatant rolls one initiative. The default is **1D10 + DEX**. A sorcerer intending to cast a spell this round may instead roll **1D10 + INT** - the mental quickness of the working drives the cast's speed. Choose before the dice come up; the character takes their action on whichever count they rolled. Initiative is re-rolled each round.

2. **Pending Powers resolve.** Non-instantaneous spells from earlier rounds (rituals, multi-round summons) take effect now, before any new actions.

3. **Action.** Combatants act in descending initiative order. On their tick, a character takes one action (see §5.2 Combat Actions). Parries and dodges are reactions, not actions, and happen in response to incoming attacks regardless of initiative.

4. **Resolution.** Apply ongoing effects (bleeding, expiring conditions, end-of-round bookkeeping). The round ends.

**Ties.** The character with the higher relevant skill acts first. If still tied, simultaneous. Within a single initiative count for melee attacks, weapon length matters: missiles before long weapons, long before medium, medium before short and unarmed.

**Delaying.** A character may delay their action to act at any lower initiative count in the same round. Once delayed, they cannot return to their original count. A character who delays past initiative 1 loses their action for the round.

**Multiple actions in a round.** A character with a weapon skill above 100% (§4.1.4) or other circumstance permitting a second action takes the second action 5 initiative counts below the first.

## 5.2 Combat Actions

**Engaged or unengaged.** A character is **engaged** when they are within striking distance of an opponent who can attack them and committed to the close-quarters melee. They are **unengaged** when they are not - free to move, take non-combat actions, ready a missile weapon, or stand outside the close fight. Engagement status determines which actions are available and what defences apply.

On their initiative tick, a character may take **one** of the following actions:

- **Attack.** Make one melee or missile attack against a target in range (see §5.3).
- **Cast a spell.** The spell resolves on the caster's initiative tick (which they may have rolled with INT instead of DEX; see §5.1). See §7 for sorcery rules.
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

- **Short Move.** Repositioning within the same range band - circling for an opening, stepping off a fallen ally, taking the high ground, closing the last step on an opponent already at Near range. No initiative penalty; combines freely with any action on the same tick (Attack, Cast, Engage, etc.).
- **Long Move.** Crosses one range band (Far → Normal, or Normal → Near). Halves the character's initiative this round (round down). The character may still attack or take another action at the reduced initiative. Moving _out_ of Near range requires a Disengage first (§5.2.3).
- **Full Sprint.** Maximum speed. Crosses two range bands in a single round, runs down a fleeing target, escapes bowshot, or traverses out of an encounter entirely. Reduces initiative to a quarter (round down). Cannot attack; defensive actions only if directly threatened. Sustained sprinting across multiple rounds is a chase (§6.8).

### 5.2.2 Engaging

Moving from unengaged to engaged costs a Short Move and may be combined with a single attack on the same initiative tick.

### 5.2.3 Disengaging

Breaking out of close combat is dangerous. Choose one method:

1. **Fight withdrawal.** Spend the entire round in defensive action only (parries and dodges). If every attack against the character is successfully parried or dodged, the character is disengaged at the end of the round.

2. **Knocked-back disengage.** If a character has been Knocked Down (§5.5.2), they may attempt a Dodge immediately. Success: the character rolls away and is disengaged. Failure: they remain prone and engaged.

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

| Attack result | Defence result    | Outcome                                                                                        |
| ------------- | ----------------- | ---------------------------------------------------------------------------------------------- |
| Critical      | Critical          | Attack parried/dodged; both combatants hold ground - neither gains the crit result             |
| Critical      | Success           | Attack partially deflected: rolled damage, armour applies; no §A1 effect                       |
| Critical      | Failure or Fumble | **Maximum** damage + §A1 entry, ignores armour                                                 |
| Success       | Critical          | Attack fully parried or dodged; no damage. If parried, the attacker's weapon takes 2 HP damage |
| Success       | Success           | Attack partially deflected: half damage, armour applies                                        |
| Success       | Failure           | Normal damage, armour applies                                                                  |
| Success       | Fumble            | Normal damage, armour applies; defender additionally suffers their fumble's consequences       |
| Failure       | -                 | Attack misses. No defence required                                                             |
| Fumble        | -                 | Attack misses; attacker suffers a complication (GM narrates)                                   |

A Critical attack that is not defended against (the defender chose not to parry or dodge, or had no defence remaining) deals **maximum** damage on every damage die, adds any bonus damage from the §A1 entry, and ignores armour entirely.

### 5.3.3 Parrying

A defender may attempt to parry any successful attack by rolling their parrying weapon or shield skill. Each parry attempt beyond the first in a round suffers a cumulative -30% penalty to the parry skill. A defender who has attempted two parries that round makes the third at -60%, the fourth at -90%, and so on.

### 5.3.4 Dodging

A defender may attempt to dodge instead of parrying. Roll the Dodge skill. The same cumulative -30% penalty applies as for parries: each dodge after the first in a round is -30%, the third is -60%, and so on.

### 5.3.5 Parries and Dodges

A character commits to one defensive mode for the round - **either parrying or dodging, not both**. The two cannot be combined against a single attack, and the cumulative -30% penalty stack belongs to whichever mode the character is using.

The exception is Fight Defensively (§5.3.7). A character in that stance may freely mix parries and dodges, and the cumulative -30% penalty stack applies to both together: the second defensive action of the round (parry or dodge) is at -30%, the third at -60%, regardless of which type was first.

**Defence floor.** If the cumulative penalty stack reduces a parry or dodge chance to 1% or below, no further defensive attempt of that type can be made this round.

### 5.3.6 Critical Attacks and Armour

A Critical attack that lands against a defender who failed to defend (or was not defended) deals **maximum damage on every damage die**, adds any **bonus damage** specified by the §A1 critical entry, and **ignores armour entirely**. The damage modifier (dm) is rolled normally and added.

> **Example.** A longsword does 1D8+dm. On a critical that lands undefended, the player takes the max of 1D8 = 8, adds dm (rolled normally - say +1D4 = 3), adds the §A1 entry's bonus (say +5), for **16 damage** total, applied directly to HP and ignoring any armour the target was wearing.

A defender who parried or dodged successfully against a Critical reduces the result to a standard Success - the attack still strikes, but damage is rolled normally, armour applies, and the §A1 entry's special effect does not trigger.

When a critical attack lands and there is no successful defence: determine the severity band from the matching-dice value and damage type (§A1.1.2), then look up the result in the relevant §A1 damage-type table.

### 5.3.7 Fighting Defensively

A character may declare **Fighting Defensively** on their own initiative tick, in place of an Attack action. The declaration commits the character to defence for the round and grants two advantages:

- They may freely mix parries and dodges in the same round, sharing a single cumulative -30% penalty stack (the exception in §5.3.5).
- Their **first defensive action of the round** (parry or dodge) is free: it does not count toward the cumulative penalty stack and suffers no penalty itself.

Once declared, the stance lasts the round. Re-declare each round.

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

| Range                        | Modifier                                                                                                                                                                                                               |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Near (within arm's reach)    | Easy to hit, but: short bows are Difficult, longbows and composite bows are Impossible (too long to bring to bear); thrown weapons can't be thrown and become improvised melee weapons (use §5.7.8 Improvised Weapons) |
| Normal (standard distance)   | Skill as rated                                                                                                                                                                                                         |
| Far (challenging distance)   | Difficult                                                                                                                                                                                                              |
| Extreme (edge of capability) | 1/5 skill; any success counts as a normal success only                                                                                                                                                                 |

The GM determines which band applies based on the description of the scene.

**Shooting up or down.** Elevation modifies missile attacks. A target significantly _below_ the attacker's line of sight (downhill, a lower floor, the street from a parapet): **+10%**. A target _above_ the attacker (uphill, an upper floor, a defender on a wall): **-10%**. A target directly overhead (more than 45° up): **Difficult**, and effective range is halved. Some weapons (slings, crossbows) may be unable to fire directly above or below at the GM's call.

### 5.3.9 Multiple Attacks

A character whose weapon skill exceeds 100% may split that skill into multiple attacks, each at a minimum effective skill of 50%. Additional attacks resolve at -5 initiative count intervals after the first. No single attack may exceed the character's full skill rating.

**Example.** A warrior with Sword 110% may attack twice: once at 110% on their normal initiative count and once at 50% -5 initiative. Or they may choose 70%/70% (any split summing to the base, each at minimum 50%). The second attack comes at -5 initiative counts from the first.

### 5.3.10 Volley Fire

A character with a thrown or missile weapon may sacrifice accuracy and defence to send as many attacks at a target as the weapon allows in a single round. Declare at the start of the round.

The weapon's **Attk** stat (from the missile weapons table, §8.2.3) gives the maximum number of attacks per round. The first attack resolves at the character's normal initiative tick; subsequent attacks resolve at **-5 initiative count intervals**, up to the Attk limit. **All volley fire attacks are Difficult.** If a subsequent initiative count falls below 1, that attack is lost.

While volley firing, the character **cannot parry or dodge** until the start of their next initiative tick. Each shot consumes ammunition normally.

Most missile weapons have Attk 1 - they cannot benefit from volley fire (one Difficult shot is strictly worse than one normal shot). Volley fire is reserved for weapons with Attk 2 or higher - typically small thrown weapons (throwing knives, darts, thrown rocks) that a character can release in quick succession.

A character with weapon skill above 100% who also volleys combines volley fire with Multiple Attacks (§5.3.9): each shot is Difficult _and_ uses the split skill.

## 5.4 Damage and Armour

### 5.4.1 Damage Rolls

Each weapon lists a damage dice expression. The attacker rolls this dice, adds their damage modifier (derived from STR and SIZ), and applies the result to the defender's HP total after subtracting armour.

### 5.4.2 Armour Value

Armour reduces all incoming damage by its Armour Value (AV). Subtract AV from damage before applying to HP. If the reduction brings damage to 0 or below, no HP are lost - but the impact still occurred.

**Armour disadvantages.** Armour imposes skill penalties on Agility, Move Quietly, Swim, Climb, and Perception skills as listed in the equipment tables (see §8.3). It is also socially conspicuous: arriving at a merchant's hall in full bronze scales makes certain conversations difficult.

**Armour fit.** Armour is sized for its original wearer. Armour that does not fit (different SIZ) imposes an additional -20% penalty on all physical skills and halves its AV.

### 5.4.3 Shields

Shields are both weapons (use Shield skill to attack) and parrying tools (use Shield skill to parry melee and intercept missiles as above). Shield skill has the same -30% cumulative penalty as all parry skill uses.

**Shield bash damage.** A shield used to attack deals **1D3 + dm** (small shield or buckler) or **1D4 + dm** (large shield), Krush damage type. Spiked shields deal Pierce instead. See §8.3 for full shield stats. A shield bash that exceeds the target's SIZ on the Resistance Table triggers Knockback (§5.5.1).

### 5.4.4 Broken Weapons

A weapon or shield reduced to 0 HP through combat - typically by parrying attacks that exceed its hit points - **breaks**. A broken weapon:

- Does **half rolled damage** (round up).
- Attacks and parries with it are **Difficult**.
- May be unusable entirely if the break is fundamental (a bow string, a flail's chain, a spearhead snapped from its haft).

A broken weapon resembling a smaller weapon may be used at the smaller weapon's skill rating instead - a broadsword broken to half-length can be used as a Sword (Short) at the corresponding speciality rating without the Difficult penalty. The GM decides what the broken weapon now resembles.

The break is permanent until a competent smith repairs it (Craft (Smithing) at the GM's call; cost and time scale with the weapon).

## 5.5 Wounds

### 5.5.1 Taking Damage

Damage is subtracted from current HP. Combat continues at any positive HP - the character keeps acting, parrying, casting, regardless of the wound count. The genre tolerates beating, blood, and exhaustion right up until the moment a character drops.

**Critical attack.** A critical hit applies the appropriate §A1 entry in addition to its damage. The §A1 entry is the wound - its stated duration, impairment, and permanence are authoritative. Crit-driven wounds are the only source of permanent injury in WSR; ordinary damage just accumulates as HP loss.

**Reeling Blows.** A non-critical attack that deals damage equal to or greater than the defender's **half max HP** in a single blow (after armour) inflicts the **Reeling** status (§5.5.2). The heavy strike broke the character's rhythm without quite getting through their guard. Critical attacks do not trigger Reeling - the §A1 entry replaces it.

**Knockback.** A non-critical crushing impact (mace, hammer, shield bash, charging mount, giant's club) whose **raw damage rolled** exceeds the target's **SIZ** on the Resistance Table (§4.3.5) inflicts the **Knockback** status (§5.5.2). Knockback applies to crushing/blunt attacks only by default; the GM may rule that a critical of any type carries knockback if the fiction calls for it (a spear through the gut driving the target into a wall).

Reeling and Knockback may both apply to the same blow.

**Fatal Wound.** A single attack reduces HP to 0 or below. The character falls: prone, unable to act, dying. A character with First Aid or Medicine must intervene in the same or following round to prevent death. A character reduced to negative HP equal to their CON is dead beyond any mundane intervention.

**Pushing past the drop.** A character at 0 HP may attempt a Dying Blow (§5.11): one last action before falling. A character on the edge of falling may spend PP to Deflect the Killing Blow (§4.6.8). These are the two pressure-valves the system offers; there is no separate "stay-conscious-through-a-heavy-hit" roll.

**Rabble exception.** Rabble (§9.2) do not follow the full damage rules above. They are incapacitated when cumulative damage reaches half their HP total, regardless of which attack pushed them over. They do not consult §A1 entries on criticals received, do not take Reeling Blow effects, and have no Fate Point access. The full Rabble rules and stat-block format are in §9.2; this is the player-facing summary.

### 5.5.2 Status Effects

A **status** is a named condition applied to a character by a critical, a special attack, sorcery, or the environment. Each status defines its own effect and how it ends. A character may carry multiple statuses simultaneously.

#### Bleeding

A wound that does not close on its own.

- The character loses **1 HP per round** at the end of each round.
- Stopped by First Aid (no roll required if applied within one turn of the wound; later application requires a successful First Aid roll), or by one full round of binding with cloth (no roll, but costs the action).
- Multiple bleeds do not stack - a character bleeds 1 HP per round total regardless of the number of bleeding wounds.

Triggers: Slash criticals (per §A1.2 entries); some bestiary attacks; an arrow lodged in the body (combines with Impaled).

#### Burning

Caught fire and taking ongoing damage.

- The character loses **1D4 HP per round** at the start of each round, until extinguished. Catastrophic burns can be 2 HP/round per the §A1 entry.
- All rolls Difficult while on fire.
- Extinguish: one full round of action (rolling on the ground, dousing with water, stripping burning clothing). No roll required.

Triggers: Burn criticals (per §A1.5 entries); contact with a fire source (a torch to the face, a brazier); alchemical acid; dragon breath; certain sorcery.

#### Entangled

Restrained by a passive constraint - a net, snare, trap, sorcerous binding, or an entangling weapon that an attacker has committed to maintaining.

- Cannot move from current position.
- Cannot attack with restrained limbs.
- Parries and dodges are Difficult.
- **Escape.** Opposed STR vs STR or DEX vs DEX resistance roll vs the entangling source's STR or DEX (or a fixed POT for sorcery and traps). Full-round action. The source may resist with its own roll where applicable.

Triggers: Entangle attack (§5.10.4); sorcery (Inescapable Bonds and similar); snares and traps.

The difference between Entangled and Grappled is opposition. Entangled is escape from a passive constraint; Grappled is an active contest against a thinking opponent.

#### Grappled

Held by an active opponent in close grapple.

- Cannot move from the grappler's hold.
- Cannot attack with the held limb(s); off-limb actions may be Difficult depending on the grip.
- Parries and dodges are Difficult.
- **Escape.** Opposed STR vs STR or DEX vs DEX resistance roll vs the grappler's STR or DEX, full-round action. The grappler may attempt to maintain the hold with their own roll. Both characters are committed to the grapple until one breaks free or surrenders.

Triggers: Grapple skill (§5.7.7); Grapple criticals (per §A1.6 entries).

#### Impaled

A piercing weapon is lodged in the target's body.

- The affected limb (or torso, throat) is Difficult to use; actions involving it suffer the penalty.
- 1 HP per round bleeds around the entry point (compounds with Bleeding from other sources).
- The wielder's weapon is unavailable to them while embedded - it's stuck in the target.
- **Removing the weapon.** A full-round action by the impaled character or an ally. The pull deals the weapon's rolled damage again. The impaled character makes a Stamina roll (CON x5) or is Stunned 1 round from the pain. First Aid can be applied immediately after; the Impaled status ends.

Triggers: Pierce criticals (per §A1.3 entries); set weapon against a charge (§5.8); falling onto spikes.

#### Knockback

A target is shoved backward by a heavy impact.

- Pushed **one range step back** (typically Near → Normal, breaking engagement).
- Must succeed at a DEX roll or fall prone (gaining the Knocked Down status, below).
- A target who declared a **brace stance** at the start of the round (forgoing all movement and Long Moves) doubles their effective SIZ for knockback resistance.

Triggers: Krush criticals (per §A1.4 entries); a non-crit crushing impact whose raw damage exceeds the target's SIZ on the Resistance Table (§4.3.5); shield bash that exceeds the target's SIZ.

#### Knocked Down

Prone.

- All attacks, parries, and dodges from prone are Difficult.
- Attacks against the character are Easy.
- Rising costs the character's initiative tick (a full action). Alternately, they may attempt a Difficult Dodge on their tick to rise without consuming it (§5.6.8).

Triggers: Krush criticals (per §A1.4 entries); failed DEX roll after Knockback; failed Agility roll on a slippery surface (§5.6.9); certain bestiary attacks.

#### Reeling

Struck by a heavy non-critical blow that broke the character's rhythm.

- Next action at Difficult.
- May move no more than a Short Move.
- Next parry or dodge is at an additional -30% beyond any cumulative penalty already applied.
- Duration: until the character's next action resolves.

Trigger: a non-critical attack that deals damage equal to or greater than the defender's half max HP in a single blow (after armour). See §5.5.1.

#### Stunned

Disoriented by a heavy blow, shock, or extreme pain.

- The character cannot attack, cast, or move meaningfully on their next action.
- Parries and dodges are Difficult.
- Duration: typically 1-3 rounds (specified by the trigger).

Triggers: Krush criticals (per §A1.4 entries); Knockout attacks (§5.7.7); pain from removing an embedded weapon (see Impaled); some bestiary special attacks.

### 5.5.3 Healing

Natural healing is slow. A character recovers 1D4 HP per game week, modified by conditions:

| Conditions                                 | Healing rate         |
| ------------------------------------------ | -------------------- |
| Poor (wilderness, no rest, no supplies)    | 1D4 HP per two weeks |
| Restful (inn, adequate food, warmth)       | 1D4 HP per week      |
| Excellent (physician's care, herbs, quiet) | 1D4 HP per four days |

First Aid applied immediately after a wound heals 1D4 HP (Critical: 2D4 HP) and halts any ongoing bleeding. First Aid must be applied within one turn of the wound to achieve these benefits; later application only halts bleeding.

Medicine skill applied in proper conditions heals 1D4 HP or restores 1 point to a reduced characteristic per treatment (Critical: 2D4 HP, or 1D3 to a characteristic). Medicine cannot be applied in the middle of combat.

Sorcerous healing exists as rare, costly spells in the sorcery list (see §7.3). It is never the default recovery path, and it pays its own price.

## 5.6 Tactical Situations

### 5.6.1 Surprise

A completely unaware character cannot parry or dodge; the attacker gains an Easy roll. A partially surprised character (knew a fight was possible but did not see this attack) may attempt a Difficult parry or dodge.

When both sides are surprised, an opposed Spot or Listen roll determines who acts first. On a tie, both sides freeze for one round.

**Ambush.** Hidden attackers get Easy attacks on the first round. Victims may not parry or dodge until the following round - unless some succeed at a Spot or Listen roll before the attack lands, in which case those individuals may defend normally.

### 5.6.2 Backstabs and Helpless Opponents

A character attacking the unprotected back of a target in active combat strikes at **Easy**. The target may attempt a Difficult parry or dodge only if they succeed at a Difficult Listen or Sense roll first, and only if they have defensive attempts remaining.

A **helpless target** - bound, unconscious, asleep, or otherwise unable to defend - can be attacked at Easy with no possibility of parry or dodge. The attack has its usual lethality; the helpless attack is the assassin's choice and the executioner's.

The GM may allow a POW x1 roll for some external interruption (a sentry's footfall, a wind that snuffs the lamp, a creak that stays the attacker's hand for the round) when the dramatic timing demands it.

### 5.6.3 Multiple Attackers

No more than five human-sized opponents can meaningfully engage a single target simultaneously. Large weapons reduce this number further. Attackers beyond the limit are crowded out.

When a character is attacked by more opponents than they have parry and dodge attempts remaining, some attacks land undefended. Choose which to defend; the rest hit automatically.

### 5.6.4 Big and Little Targets

Combat against creatures significantly larger or smaller than the attacker carries a size modifier:

- **Target more than twice the attacker's SIZ** (giants, drakes, war elephants): attack skill **+20%**. The target is too large to miss easily.
- **Target less than half the attacker's SIZ** (rats, sprites, small swift creatures): attack skill **-20%**. The target is too small and quick.

Larger creatures attacking smaller targets apply the same modifiers in reverse. A giant swinging a club at a man-sized PC is at -20%; the PC swinging a sword at the giant is at +20%.

Inanimate objects use the same scale: a large stationary object is Easy to hit; a tiny object is Difficult.

### 5.6.5 Close Combat and Weapon Length

Long weapons attack first within an initiative count. Once a short-weapon fighter closes to grappling distance, long-weapon parries become Difficult and the full reach cannot be used.

Daggers and unarmed strikes are unaffected by close quarters. Two-handed polearms may be unusable in tight spaces.

**Closing.** To close from outside reach to grappling distance with a long-weapon fighter, the short-weapon fighter must survive the long weapon's initial strike (which always acts first in that exchange, regardless of initiative). Once closed, subsequent rounds at close range penalise the long-weapon fighter.

**Keeping at bay.** Instead of attacking, a long-weapon fighter may use their initiative tick to **keep a short-weapon fighter at bay**: roll the weapon skill as a normal attack. On a success, the short-weapon fighter cannot close this round. On a failure, the short-weapon fighter may attempt to close as normal.

**Slipping past the bay.** A short-weapon fighter being kept at bay may attempt a Dodge or Parry roll to slip past the long weapon's guard. On a success, they close immediately and may attack at the normal initiative tick.

**Action economy at close range.** A long-weapon fighter engaged at close range loses some flexibility. While they remain at close range with a short-weapon fighter, on a single initiative tick they may attack **or** parry **or** dodge - not the usual combination of attack plus defensive actions. The reach that makes the long weapon dominant at normal range becomes a liability at arm's length.

### 5.6.6 Enclosed Environments

Fighting in tight quarters - a crypt corridor, a ship's hold, a narrow alley - restricts weapon choice.

- **Normal corridor** (one-metre radius around the character): hand-to-hand weapons of ENC 2 or less work normally. Larger weapons (ENC 3+: greatswords, polearms, war-flails) attack and parry at **Difficult**; ENC 4+ are unusable.
- **Cramped** (half-metre radius): even ENC 1 weapons attack and parry at **Difficult**. ENC 0 weapons (daggers, knives) and unarmed strikes work normally.
- **No room** (smaller still): only ENC 0 weapons and unarmed.

The character with the smaller weapon has the advantage in cramped quarters - inverting the usual long-weapon reach dynamic.

### 5.6.7 Cover

Partial cover (a door-frame, a low wall, a fallen pillar) makes attacks against the covered character Difficult. If the attack roll falls between the modified skill (with Difficult applied) and the unmodified skill, the cover is struck instead. Damage that exceeds the cover's structural integrity passes through.

A character who is kneeling or prone behind a full shield or wall gains substantial cover. The GM determines coverage based on description.

**Fortified positions.** A character standing or kneeling behind a sturdy defensive structure (a stone parapet, a battlement, the lip of a trench) is in a fortified position. Attacks against them are Difficult, as with cover. A character who crouches or kneels _entirely_ behind the fortification cannot be hit by small missile fire at all - though they remain vulnerable to area attacks, siege weapons, and sorcery that reaches over or through. Aimed Attacks (§5.7.1) can overcome a fortified position one accumulated tick at a time.

### 5.6.8 Fighting While Down

All attacks, parries, and dodges are Difficult while prone; attacks against the character are Easy. Rising takes an attack slot, during which these penalties still apply.

**Difficult Dodge to rise.** A prone character may attempt a Difficult Dodge on their initiative count. Success: they rise and may still attack. Failure: they remain prone.

### 5.6.9 Slippery and Unstable Surfaces

Fighting on ice, oil, wet stone, a ship's deck in a storm, or any other unsteady footing requires an Agility roll (DEX x5) at the start of each round to keep balance. On a failure, the character falls prone (§5.6.8). On a fumble, they take 1D3 damage from the fall.

The GM may rule the roll Difficult on particularly treacherous surfaces (an oil-slick floor, an earthquake, a heaving deck). Movement on slippery surfaces is reduced - a Long Move requires the Agility roll _and_ halves initiative again (essentially Full Sprint cost for Long Move distance).

## 5.7 Special Combat Actions

### 5.7.1 Aimed Attacks

For every 5 initiative counts spent delaying, add +10% to the attack skill, up to the base skill maximum. Announce when delaying begins; count off the initiative ticks openly.

### 5.7.2 Disarming

A character may attempt to knock or twist an opponent's weapon from their grip rather than wound them. Roll the attacker's melee weapon skill at **Difficult**. The defender may parry or dodge as normal.

- **Attack succeeds, defence fails:** the weapon spins from the defender's grip 1D6 metres in a direction the GM chooses (often based on the angle of attack). No damage is dealt.
- **Critical disarm:** as above, plus the weapon lands in the attacker's hand, or in any position of the attacker's choosing.
- **Attack fails or is defended:** no effect. The attacker has used their action.

Picking up a dropped weapon takes a Non-combat action (§5.2) and requires being unengaged. A weapon within arm's reach may be retrieved by a Short Move combined with the Non-combat action on the same initiative tick.

### 5.7.3 Two-Weapon Fighting

A character with a weapon in each hand may attack with both in the same round. The **primary attack** (with the dominant hand) uses the full weapon skill. The **off-hand attack** uses the off-hand weapon's skill at **-30%**. Both attacks resolve on the character's initiative count.

**Training the off-hand.** A character may train the off-hand specifically. Once the off-hand attack skill (tracked as a separate speciality) reaches half the primary attack skill, the off-hand penalty drops to **-10%**. Once it reaches equal to or higher than the primary attack skill, the penalty is removed entirely.

**Off-hand parries.** A weapon held in the off-hand may parry attacks at no off-hand penalty. The cumulative parry penalty stack (§5.3.3) still applies across all parry attempts in the round.

**Compatible weapons.** Both weapons must be one-handed (1H, or 1H/2H wielded one-handed). A shield wielded in the off-hand is for parrying or shield-bash (Knockback, §5.5.1) only and does not enable an off-hand attack roll alongside the primary.

### 5.7.4 Quickdraw

Drawing a weapon is normally a Non-combat action (§5.2), unavailable to engaged characters. A character may instead **quickdraw**: draw the weapon and attack in the same initiative tick, at **-20%** to the attack roll. Available only with weapons designed to be carried ready (a sheathed sword, dagger, hand-axe, throwing knife) - not a stowed bow or bundled spear.

A character surprised and reaching for their weapon (§5.6.1) may quickdraw as their first action; they are otherwise treated as surprised for that exchange.

### 5.7.5 Sweep and Area Attacks

A character wielding a two-handed weapon with broad reach (greatsword, falx, great axe, two-handed flail) may attack multiple adjacent opponents in one swing. Declare at the start of the round. Roll once against the attack skill at **-20% per opponent beyond the first**. Damage is rolled once and applied to each target hit. Each defender rolls their own parry or dodge as normal.

**Restrictions:**

- Maximum 3 opponents in a single sweep.
- All targets must be within the weapon's reach and within an arc the swing can plausibly cover - the GM rules whether geometry permits.
- The attacker may not parry or dodge until their next initiative tick (committing fully to the sweep).

Larger creatures (giants, drakes, certain demons) may sweep larger groups; their stat blocks note the size of the sweep and any modifiers.

### 5.7.6 Firing Into Combat

Missile attacks targeting an opponent who is engaged in melee with allies risk hitting the wrong combatant. After rolling the attack:

- **Success:** the attack hits the intended target normally.
- **Failure (not a fumble):** the GM rolls 1D6. On **1-2**, the missile strikes an adjacent friendly combatant instead (resolve as a normal hit on that target, using the original attack roll for damage placement). On **3-6**, the missile misses everyone.
- **Critical:** as a normal critical against the intended target. The friendly-fire risk does not apply.
- **Fumble:** the missile automatically strikes a random adjacent friendly combatant (or other Bad Place, GM's call).

Aiming reduces the risk: each +10% from Aimed Attacks (§5.7.1) also reduces the 1D6 friendly-fire range by 1 (so a single +10% aim means friendly fire on 1 only; +20% removes it entirely). A character who declares "I'll wait for a clear shot" delays their initiative until the melee separates.

### 5.7.7 Knockout and Subdual

**Knockout attack.** Declare on the attacker's initiative tick. Targets the head; roll is Difficult. On a success, resolve damage minus armour, then make a resistance roll: damage vs. CON. On a success, the target is knocked unconscious for 1D10+10 rounds (GM rolls secretly). §A1 critical effects do not apply to Knockout criticals - the result is the unconsciousness rule above, not the brutal wounds of a lethal critical. The target is not killed. A character already unconscious simply resets their unconsciousness duration.

**Subduing.** Declare on the attacker's initiative tick. The attacker reduces the damage dice or omits the damage modifier, to a minimum of 1D2.

**Grapple and restrain.** A successful Grapple roll (Brawl or Grapple skill) establishes a hold. The restrained character must make an opposed STR vs. STR or DEX vs. DEX resistance roll to break free (their choice). An immobilised character cannot attack but can still speak.

### 5.7.8 Improvised Weapons

A character can pick up almost any solid object and use it as a weapon. Damage and properties scale with the object's size:

- **Small improvised** (chair leg, wine bottle, candlestick, dropped torch): 1D4 + dm, ENC 1, HP 6, Krush damage.
- **Large improvised** (bench, broken spear haft, large rock): 1D6 + dm, ENC 2, HP 8, Krush damage.
- **Sharp improvised** (broken bottle, jagged shard, dropped knife caught by the hilt): 1D4 + dm, ENC 1, HP 4, Slash or Pierce.

Attack skill is **half the character's nearest similar weapon skill** (e.g., Club for a chair leg, Dagger for a sharp shard) or 25%, whichever is higher. Improvised weapons take 1 HP damage per successful parry and may break (§5.4.4).

**Improvised parrying.** A character holding a weapon not designed for parrying (a bow, a held thrown weapon, a torch, a lantern) may still parry with it at **half the weapon's skill rating** (or 20%, whichever is higher). The parrying object takes 1 HP damage per successful parry and may break.

### 5.7.9 Desperate Actions

When a character has already taken their action for the round but a situation demands one more - the door is closing, the priest is invoking the final word, an ally is about to die at a sword's point - the GM may permit a **desperate action**.

Roll DEX x3 (effectively a Difficult Agility roll). On a success, the character takes one final action this round, resolved at the bottom of the initiative order. The action itself is Difficult. On a failure, the action does not happen.

In the round following a desperate action - successful or not - the character cannot attack or move; they are unbalanced and recovering. Parries and dodges work normally.

Desperate actions are a **GM-approved last resort**, not a routine option. They fit the "back against the wall" moment when the character is out of PP, out of options, and the genre is calling for one last act of will.

## 5.8 Mounted Combat

A mounted character fights from horseback, chariot, camel, or other mount. The Ride skill (§3.4.34) governs control of the mount and stability of the character while attacking.

**Initiative.** The mounted character uses their own DEX initiative; the mount does not roll separately. The character may move the mount up to a Long Move and attack on the same initiative tick - the mount's momentum carries the action.

**Weapon skill capped by Ride.** While mounted, the rider's effective weapon skill is capped at their **Ride skill**. A character with Sword 80% and Ride 40% attacks at 40% from horseback. A career horseman with high Ride suffers no cap; a competent fighter on a borrowed horse may suddenly be ineffective. Train Ride to lift the cap.

**Dodge while mounted.** All Dodge attempts the rider makes while mounted are **Difficult**. The horse's bulk and the rider's seat limit personal evasion - parrying with a weapon or shield is unaffected.

**Height and reach.** Mounted characters strike down at unmounted opponents. Mounted attacks gain **+10%** against unmounted defenders. Unmounted attacks against a mounted target are at **-20%** unless the attacker uses a long weapon (spear, polearm, two-handed sword) or attacks the mount instead.

**Charge.** A mounted character who moves a Long Move directly toward an opponent and attacks may declare a **charge** with a long weapon (lance, spear, pike). The attack deals **+1D6 bonus damage** and ignores the initiative penalty for the Long Move. The mount must have clear ground to gain momentum. A charge that misses leaves the character exposed: any opponent at Near range may make an immediate free attack as the rider hauls the mount to a stop.

**Set weapon against charge.** An unmounted character with a long pointed weapon (lance, spear, pike, polearm) may declare a **set weapon** stance against an incoming mounted charge. Requires firm ground and a declaration before the charging mount's initiative tick. The set character takes no attack action that round; when the charge arrives, roll the set weapon's skill as a normal attack. On a hit, **add the mount's damage modifier to the set weapon's damage** (the mount's own momentum drives it onto the weapon). An intelligent mount may attempt its own Dodge to avoid the set weapon; the rider must succeed at a Difficult Ride roll (or a POW vs. mount's POW contest) to force the charge home over the mount's self-preservation.

**Ride roll under attack.** A character making any attack while their mount is moving must succeed at a Ride roll, or attack at **-20%**. A character struck for serious damage (over half their HP in one blow) while mounted must make a Ride roll or be unhorsed (falling damage per §6.7.1).

**Mounts as targets.** A mount has its own HP (typically 20-30 for a horse). A mount reduced to half HP panics; a mount at 0 HP collapses, throwing or trapping its rider.

**Stirrups (§8.7).** A character riding without stirrups attacks at an additional **-10%** and rolls Ride at Difficult to stay mounted under combat stress.

## 5.9 Casting in Combat

A sorcerer struck before their spell resolves on their initiative tick must make a Stamina roll (CON x5) or the spell collapses; any PP spent are lost. An engaged sorcerer risks interruption from incoming attacks even if their initiative is high - any attack that connects before the casting tick is enough. Disengage first or accept the risk.

See §7.2 for full sorcery casting rules.

## 5.10 Damage Types

WSR weapons deal one of several damage types. Type determines which critical hit table is consulted in §A1 when a critical attack lands, and which **status** (§5.5.2) the attack characteristically inflicts. Type also affects armour interactions (some armours protect better against some types - see §8 Equipment) and certain talents and creature abilities that react to specific types.

### 5.10.1 Slashing (swords, axes, daggers, claws)

Cutting wounds. Slash criticals resolve on the **§A1 Slash table** (§A1.2) and characteristically inflict the **Bleeding** status (§5.5.2) on top of the wound itself.

### 5.10.2 Impaling (spears, arrows, javelins, thrusting swords)

Puncturing wounds. Impale criticals resolve on the **§A1 Pierce table** (§A1.3) and characteristically inflict the **Impaled** status (§5.5.2) - the weapon lodges in the target until pulled free.

### 5.10.3 Crushing (maces, hammers, clubs, shields)

Blunt-force wounds. Crush criticals resolve on the **§A1 Krush table** (§A1.4) and characteristically inflict **Knockback**, **Knocked Down**, or **Stunned** status (§5.5.2) depending on the entry. Crushing attacks also inflict the Knockback status directly on non-criticals when raw damage exceeds the target's SIZ - see §5.5.1.

### 5.10.4 Entangling (whips, nets, chains, ropes)

Restraining attacks. Entangling weapons do not wound; they inflict the **Entangled** status (§5.5.2) via a successful entangle attempt - they have no §A1 critical hit table, because the status itself is the result.

**Entangle attempt.** Instead of striking for damage, a character may declare an entangle attempt with an entangling weapon. The roll is Difficult; on a success, the target gains the Entangled status (§5.5.2) without taking damage. The entangling weapon holds until deliberately released or the wielder is incapacitated.

An entangling critical (whether on a damage attack or an entangle attempt) inflicts Entangled immediately and irresistibly: no resistance roll is permitted at the moment of impact, though subsequent escape attempts proceed normally.

### 5.10.5 Burn (sorcerous flame, dragon breath, alchemical acid)

Heat and flame wounds. Burn criticals resolve on the **§A1 Burn table** (§A1.5) and characteristically inflict the **Burning** status (§5.5.2). Following the same band structure (A through E) and matching-dice severity rules as the other damage types.

### 5.10.6 Grapple (Grapple skill, constricting attacks)

Holds and crushing grips. Grapple criticals resolve on the **§A1 Grapple table** (§A1.6) and characteristically inflict the **Grappled** status (§5.5.2) - an active hold from a thinking opponent (compare to Entangled, which is escape from a passive constraint).

## 5.11 Dying Blows

A character at 0 HP or below may attempt one last act before falling.

**Declaring a Dying Blow.** On their initiative tick, declare the Dying Blow and make a Stamina roll (CON x5). On a success, take one final action - a single attack, a warning shout, a dropped potion, the triggering of a prepared sorcerous effect. The action is Difficult. After it resolves, the character falls unconscious and is dying as normal.

**Actions already spent.** If the character has exhausted their action for the round when the killing wound arrives, the Dying Blow is still available, but the Stamina roll is Difficult (halved).

A Dying Blow cannot be a defensive action. It can trigger a Fate Point spend, including Deflect the Killing Blow (see §4.6.8).
