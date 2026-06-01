# 7 Mass Combat

Battles in WSR can be handled at two scales. When the PCs are caught up in an engagement they do not command - fighting as individuals within a larger battle - the **Mass Combat Abstraction** (§7.1) carries them through with a single roll per turn. When the PCs are the Leaders and Commanders, running squads and shaping the engagement's outcome, the **Skirmish System** (§7.2) gives them the tactical handles. The two layer cleanly: a single battle can use both at once, with squad-commanders on the skirmish track and independent PCs on the abstraction track. The bridge between them is §7.3 Mixed Mode.

Mass combat is more abstract than individual combat, and the GM has more work to do to make a squad-level engagement feel like a battle. The guidance below applies to both systems; it bites hardest on §7.2, where the squad stat block is the unit of resolution and the fiction has to carry the rest.

**Paint the battle's shape first.** Before commands begin, describe the field: the position of each Force, the terrain, the weather, the sound. Give it a few specific features - the ridge on the left, the smoke from the burning village behind your line, the river that cuts off the eastern flank. These are the resources and constraints the players will navigate.

**Describe in masses, not individuals.** The unit of fiction is the squad, not the trooper. "Your spearmen advance, shields locked, dust rising under their feet" - not "Tharex thrusts his spear at the man in front of him." Save the close-in language for moments when the system itself pulls the camera tight: a Champion's Challenge, a critical-hit Hero strike, a Commander's sacrifice.

**Name the squads.** A squad of nameless spearmen does not engage the table the way "the Black Dragons" or "Captain Murtagh's Spears of Aquilonia" does. Give them banners, colours, the names their captains use, the regions they hail from. The same applies to Heroes - Old Marcellus, who carried the banner at the Razing of Eshrum, dies very differently from "Standard-Bearer (NPC)."

**Brief reset at the start of each round.** Before commands are declared, give the group a one-sentence summary of the battle's current state. "Your shieldwall holds the centre; the enemy's left is wavering; Conan's heavy horse on your right has been pinned by a fresh enemy column." Players declare into a shared picture.

**Make Morale visible in the fiction.** A failing Morale check is not "the number went down by 2." It is the standard wavering, men in the back row glancing over their shoulders, a captain's voice rising too high. Players need to feel a unit cracking before it breaks. When a squad routs, narrate the rout - do not just announce it.

**Disorder is the dust of battle.** A rising Disorder count is the line stretched too thin, ranks broken by enemy lances, confusion in the smoke. Describe what Disorder looks like on the field, especially when it accumulates over multiple rounds. The dramatic weight of a squad's failed Rally roll comes from the picture of the unit failing to find its feet.

**The PCs are everywhere.** A Commander is not a remote intelligence rolling dice; they are riding the line, shouting orders, holding the squad together by force of will. Find moments to put the PC's voice and presence into the scene. The same Charge command lands differently when the player describes their PC at the head of it.

**Cut to single combat when the fiction wants it.** When Conan needs to face the enemy general blade-to-blade, drop out of the mass system entirely (§7.3 Mixed Mode is the bridge). The mass system is the frame, not a cage. The reverse is also true: when a swordfight has reached its natural end, cut back to the broader engagement and resume.

## 7.1 The Mass Combat Abstraction

Each turn (approximately five minutes of battle time), every PC involved in the larger engagement makes a Luck roll (POW × 5):

| Result           | Effect                                                                                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Critical success | The PC has a moment of clear action; they may target one specific named NPC or achieve one narrative objective this turn with an Easy roll |
| Success          | No damage; the PC survives the turn without serious threat                                                                                 |
| Failure          | 1D6 HP damage; the PC has been struck by a random attacker, a stray missile, a falling obstacle, or the press of bodies                    |
| Fumble           | 2D6 HP damage; the PC is in serious danger - knocked down, surrounded, pinned, or otherwise in a perilous situation                        |

**Armour applies.** Subtract AV from damage on both failure and fumble results.

**Targeting specific enemies.** Seeking a specific opponent - a named villain, the enemy's standard-bearer - is a narrative objective. The GM may require Agility or Spot to locate them, then normal combat once contact is made. The mass combat Luck roll is suspended during direct single combat.

**Duration.** Brief skirmish: 2-3 turns (10-15 minutes). Sustained engagement: 6-12 turns (30-60 minutes). PCs rest and recover normally after.

**Fate Points in mass combat.** Fate Point spends (§5.6) apply normally. The mass combat abstraction does not suspend the Fate Point economy.

**As the individual track.** This same procedure is used to resolve any PC who operates outside a squad during a Skirmish System battle (§7.3). One Luck roll per skirmish round, the same five-minute unit.

## 7.2 The Skirmish System

Use this system when the PCs are leading the battle and the outcome should be decided by their commands, not by the GM. Each player commands one or more squads; the GM commands the opposing Force. The system abstracts each squad to a single stat block - the unit of resolution is the squad, not the individual trooper - which means a battle of two thousand troops a side resolves in roughly the same time as a fight between two warbands.

### 7.2.1 Forces, Squads, Commanders

A **Side** is one of the two (or more) participants in the battle.

A **Fighting Force** is the army a Side brings to the field, headed by a **Leader**.

A **Squad** is the unit of resolution: a single stat block representing anywhere from a dozen to several hundred individual combatants, depending on the type. Each squad has a **Commander** - usually a PC.

A **Hero** is a named NPC attached to a squad, providing a specific benefit while alive. Heroes are not Commanders; a squad has one Commander and zero or more Heroes.

**Command capacity.** A single character may directly command a number of squads equal to **(CHA + Command/10) / 5, rounded up**. A character with CHA 15 and Command 50% commands (15 + 5) / 5 = 4 squads. The Leader of a Fighting Force is not limited in the size of their Force overall; the cap is on how many squads any one character personally issues commands to in a round. Excess squads in a large Force are commanded by subordinate Commanders (PCs or NPCs).

### 7.2.2 Squad stat blocks

Every squad has the following statistics:

- **Hit Points (HP).** Damage the squad sustains before it is defeated.
- **Armour Value (AV).** Reduces damage from each hit, as in individual combat.
- **Melee.** Percentile skill used on Melee Attack and Charge commands.
- **Missile.** Percentile skill used on Missile Attack commands. A dash (-) means the squad has no missile capability.
- **Defence.** Percentile threshold. An attacker's roll must come up _above_ Defence and _at or below_ their own Melee or Missile to hit. Criticals (rolling the attacker's skill ÷ 5 or under) always hit regardless of Defence. Disorder reduces the squad's effective Defence by 5 per point.
- **Damage.** Dice rolled when an attack lands. Some squads list a higher die for the Charge command.
- **Morale.** Tested at the end of each round on 2D6. Roll equal to or under Morale to pass.
- **Disorder.** Starts at 0. Rises during battle from failed checks, enemy successes, and routs. Reduces the squad's effective Defence (5 per point) and triggers various penalties. Cannot go below 0; some talents impose a cap above which Disorder cannot rise.
- **Formations.** Tactical configurations the squad can adopt. The first listed is the default at the start of battle. Switching between them uses the Change Formation command. See §7.2.5.

**The squad catalogue.** Nine squad types are presented here. A squad's **baseline talent** (§7.2.4) is included in the stat block.

#### Archers

```
HP 18    AV 3 (leather, light helm)
Melee 30    Missile 60    Defence 30
Damage 1D8 (bow) / 1D6 (sidearm)    Morale 8    Disorder 0
Commands: Advance, Disengage, Missile Attack, Rally, Retreat
Formations: Skirmish
Talent: Volley Drilled
```

#### Spearmen

```
HP 22    AV 4 (leather, small shield)
Melee 50    Missile -    Defence 45
Damage 1D8    Morale 9    Disorder 0
Commands: Advance, Change Formation, Disengage, Melee Attack, Rally, Retreat
Formations: Skirmish, Shieldwall, Spear Hedge
Talent: Stalwart
```

#### Shield-and-Sword Infantry

```
HP 26    AV 6 (mail, heavy shield)
Melee 55    Missile -    Defence 55
Damage 1D10    Morale 10    Disorder 0
Commands: Advance, Change Formation, Charge, Disengage, Melee Attack, Rally, Retreat
Formations: Shieldwall, Skirmish, Column
Talent: Disciplined
```

#### Light Cavalry

```
HP 24    AV 4 (leather, small shield, barding)
Melee 55    Missile 45    Defence 40
Damage 1D8 (sabre or bow)    Morale 10    Disorder 0
Commands: Advance, Change Formation, Charge, Disengage, Melee Attack, Missile Attack, Rally, Retreat
Formations: Skirmish, Wedge
Talent: Skirmishers
```

#### Heavy Cavalry

```
HP 32    AV 8 (mail, heavy shield, barding)
Melee 60    Missile -    Defence 45
Damage 1D10 (Charge: 2D10)    Morale 11    Disorder 0
Commands: Advance, Change Formation, Charge, Disengage, Melee Attack, Rally, Retreat
Formations: Wedge, Column
Talent: Shock
```

#### Rabble

```
HP 16    AV 1 (rags and luck)
Melee 25    Missile 15    Defence 15
Damage 1D6    Morale 6    Disorder 0
Commands: Advance, Charge, Melee Attack, Missile Attack, Retreat
Formations: Skirmish
Talent: none (the lack is what makes them rabble)
```

#### Berserkers

```
HP 22    AV 3 (fur, light shield)
Melee 65    Missile -    Defence 25
Damage 1D8 + 2 (frenzy)    Morale 11    Disorder 0 (max 6)
Commands: Charge, Melee Attack
Formations: none (they fight as a mob)
Talent: Fanatic
```

#### Chariots

```
HP 24    AV 4 (driver shielded, archer/spearman crew)
Melee 45    Missile 50    Defence 35
Damage 1D10 (Charge: 2D10) / 1D8 (Missile)    Morale 9    Disorder 0
Commands: Advance, Change Formation, Charge, Disengage, Melee Attack, Missile Attack, Retreat
Formations: Skirmish, Column
Special: Open ground only. On rough or broken terrain, gain +3 Disorder per round and may not Charge.
Talent: Shock
```

#### Elites

```
HP 30    AV 7 (scale, heavy shield)
Melee 65    Missile -    Defence 65
Damage 1D10    Morale 12    Disorder 0 (max 4)
Commands: Advance, Change Formation, Charge, Disengage, Melee Attack, Rally, Retreat
Formations: Shieldwall, Spear Hedge, Wedge
Talents: Disciplined, Sworn
```

Elites are the two-baseline exception; the other eight squad types have one baseline talent each.

### 7.2.3 Heroes

A Hero is a named NPC attached to a squad before the battle begins. Each Hero provides a clear effect while alive and present with their squad. A squad may have any number of Heroes attached, though three is a practical limit.

A Hero is lost when:

- Struck down by a Critical Hit (result 5: Hero struck, §7.2.9).
- Killed when their squad collapses (catastrophic squad-death rule, §7.2.10).
- Reassigned to a different squad between battles.

| Hero                 | Effect while attached                                                                                                                                              |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Standard-Bearer**  | Squad's Morale +1 (cannot exceed original). Squad gains +20% on Rally rolls. If the Standard-Bearer falls, the banner falls: the squad immediately loses 2 Morale. |
| **Veteran Sergeant** | Squad's Defence +5. Disorder gained from any source is reduced by 1 (minimum 0).                                                                                   |
| **Sharp Shooter**    | Squad's Missile +15%. Ignores range penalty at Long range. Squad must have a Missile rating to attach.                                                             |
| **Heroic Swordsman** | Squad's Melee +15% on Melee Attack and Charge commands. Damage +1 on those commands.                                                                               |
| **Scout**            | Enables Ambush attempts; preparation check uses the Scout's INT × 5, +20% bonus. Force gains +1 on initiative rolls while Scout is present.                        |
| **Champion**         | May be sent to a Champion's Challenge (§7.2.6), resolved by standard individual combat. While present with the squad, Melee +10% on Melee Attack commands.         |

The GM may stat custom Heroes by picking a clear single-line effect modelled on those above.

### 7.2.4 Talents

A talent is an intrinsic property of the squad - training, equipment, drill, regional culture, esprit de corps. Talents persist across battles and campaigns; they cannot be lost in a single engagement.

A squad starts with **one baseline talent** as listed in its stat block (Elites get two). A squad may gain **up to two additional talents** through campaign play, awarded by the GM after a battle in which the squad performed exceptionally - held against impossible odds, broke a feared enemy, survived a rout. The cap is three talents total per squad.

**Discipline**

| Talent          | Effect                                                                                                                              |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Disciplined** | Disorder cannot exceed 4. Failed Morale checks reduce Morale by 1 instead of 2.                                                     |
| **Sworn**       | May re-roll any failed Morale check while their Leader is alive on the battlefield. If the Leader falls, immediate -3 Morale shock. |
| **Hardened**    | Ignore the first failed Morale check per battle.                                                                                    |
| **Stalwart**    | When holding ground (not Advancing, Charging, Retreating, or Disengaging this round), Defence +10.                                  |

**Aggression**

| Talent          | Effect                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------- |
| **Shock**       | Charge command rolls damage twice and keeps the higher result.                                          |
| **Wild Charge** | Charge command at +15% Melee, but the squad gains +1 self-Disorder on a successful Charge.              |
| **Fanatic**     | Cannot Retreat or Disengage. Disorder cannot exceed 6. Ignore the first failed Morale check per battle. |

**Missile**

| Talent             | Effect                                                         |
| ------------------ | -------------------------------------------------------------- |
| **Volley Drilled** | Missile commands ignore the range penalty at Long range.       |
| **Sniper Trained** | Missile criticals trigger on Missile/4 (instead of Missile/5). |

**Terrain and Movement**

| Talent               | Effect                                                                                                                         |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Skirmishers**      | Once per round, may shift between adjacent positions (Centre to Left or Right Flank, and back) without using a command action. |
| **Mountaineers**     | Ignore Disorder gained from rough, elevated, or broken ground.                                                                 |
| **Sons of the Land** | When defending home territory, Morale +1 and Morale cannot drop below its starting value from failed checks.                   |

**Other**

| Talent       | Effect                                                                                                                                                                            |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Loyal**    | Cannot Retreat unless Morale is 2 or under. Cannot be commanded by anyone other than their assigned Commander during a battle.                                                    |
| **Bloodied** | _Earned only._ Awarded after a battle in which the squad was reduced to half HP and survived. Effect: +1 Morale (cannot exceed original), Defence +5. Permanent across campaigns. |

### 7.2.5 Formations

A formation is the tactical configuration a squad adopts on the field - loose order, shields locked, spears set for the charge, wedge for the breakthrough, column for the march. Each squad type has a default formation listed first in its stat block; some can switch between two or more via the **Change Formation** command (§7.2.8).

A squad in any formation other than its default returns to default when it next Changes Formation, when Disorder reaches its cap, or when the squad routs.

| Formation       | Effect                                                                                                                                                                                                   |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Skirmish**    | Loose order, the default for most light units. No modifiers.                                                                                                                                             |
| **Shieldwall**  | +10 Defence vs Melee, +5 Defence vs Missile. Cannot Charge. Requires shields.                                                                                                                            |
| **Spear Hedge** | When an enemy squad attempts a Charge against this squad, the charging squad takes 1D8 damage before the Charge resolves; the charging squad's Defence is reduced by 10 for that round. Requires spears. |
| **Wedge**       | Charge command at +20% Melee; Defence -10 until the squad next Changes Formation. Heavy or driven units only.                                                                                            |
| **Column**      | Advance moves two range bands instead of one. Defence -10 if attacked while in Column. Most disciplined or marching units.                                                                               |

A squad without a Formations line in its stat block has only the default (Skirmish) available, with no Change Formation command. Berserkers and other mobs are deliberately excluded from formation discipline.

### 7.2.6 Before the Battle

The following procedure is worked through once, in order, before the first round begins.

**1. Assign Leaders, Commanders, and Heroes.** Each Side picks one PC (or named NPC) as their Force's Leader. Squads are distributed among Commanders within the command capacity rule. Heroes are attached to chosen squads.

**2. Set positions.** Each squad takes one of four positions in its Force: Centre, Left Flank, Right Flank, or Rear. All squads under a single Commander must share a position.

**3. Set relative range.** The two Forces begin at one of four battlefield ranges:

- **Melee.** Squads in adjacent positions may use Melee Attack and Charge commands against each other.
- **Short.** Within Missile reach without penalty.
- **Long.** Missile attacks suffer -20% to Missile.
- **Very Long.** Missile attacks suffer -40% to Missile.

These are the battlefield-scale range bands, distinct from the individual-combat range bands of §6.3.8.

**4. Set terrain.** The GM describes the field's terrain, drawing from the table below or improvising. Different positions on the same battlefield may have different terrain - the central squads on open ground, the right flank in woods, the left along a river. Terrain effects apply to whichever positions sit in that terrain.

| Terrain                 | Effect                                                                                                              |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Open ground**         | No modifier.                                                                                                        |
| **Hills / high ground** | Defender +1 Defence. Charges _up_ at -10% Melee.                                                                    |
| **Woods**               | Squads in woods +1 Defence vs Missile. Cavalry cannot Charge. Chariots impassable.                                  |
| **River or ford**       | Crossing squads gain +2 Disorder per round of crossing. Bowmen on the bank +1 Defence.                              |
| **Marsh**               | All movement commands at -10% to the relevant characteristic roll. Cavalry and Chariots gain +3 Disorder per round. |
| **Narrow pass**         | Only one squad fits across. The pass-holder gains +10 Defence. The attacker may engage only one squad at a time.    |
| **City street**         | As Narrow Pass, plus all squads at +1 Disorder from press of crowds and rubble.                                     |

**Fortifications.** A squad defending from behind a wall, palisade, or earthwork gains **+20 Defence**. A squad defending a **breach** in a wall gains +10 Defence. A squad defending **inside a closed gatehouse or tower** gains +30 Defence but cannot Charge, Advance, or Retreat - only Melee Attack, Missile Attack, and Rally. A wall is reduced to a breach by GM ruling, the application of a war machine, or the expenditure of an in-fiction effort (a sapping operation, a sustained ram action) priced narratively. Full siege rules - wall HP and AV, war machine stat blocks, breach mechanics, sapping, escalade - are deferred to a future revision (tracked in IDEAS.md).

**5. Apply size disparity.** The smaller Force has the Morale of all its squads reduced by 1. If significantly outnumbered (roughly 2:1 or worse), reduce by 2 instead.

**6. Resolve Ambush.** If one Side intends to ambush the other, their Leader rolls INT × 5 (with a Scout Hero attached, +20%; the GM may apply terrain modifiers). On success, the ambushing Side gains a free round of action at the start of the battle, and any enemy squad they engage with that round gains +2 Disorder.

**7. Resolve Chosen Ground.** A defending Side that has had time to prepare may have its Leader roll INT × 5 to select advantageous terrain. On success, all defending squads gain +1 Defence for the battle.

**8. Inspire the troops.** Each Leader may attempt a CHA × 5 roll. On success, every squad in the Force gains +1 Morale (cannot exceed original).

**9. Issue Challenges.** Either Leader may issue a Champion's Challenge. If accepted, both Sides each elect a champion (typically the Leader, a Hero, or a PC); the challenge is resolved by standard individual combat (§6). The challenge's outcome is _not abiding_: the loser's Side fights on. If the losing champion is slain, the loser's Leader rolls 1D6; on a 1 or 2, the Force is outraged, every squad loses 2 Morale and gains +2 Disorder, and on its first round must take a Charge or Melee Attack command if able.

### 7.2.7 The Skirmish Round

One skirmish round equals five minutes of battle time, matching the §7.1 turn.

Each round proceeds in four phases:

**1. Initiative.** Each Leader rolls **1D10 + CHA** for their Force. Highest goes first; on a tie, both Forces resolve simultaneously.

**2. Command Action.** Each Commander declares one command for each of their squads (see §7.2.8).

**3. Resolution.** Commands resolve in initiative order, Force by Force. Within a Force, the Leader chooses the order of squad resolution. Each squad's Commander rolls the relevant skill or characteristic for the declared command; effects apply, damage is dealt, Disorder rises and falls.

**4. Morale Check.** At the end of the round, every squad rolls 2D6. Roll equal to or under Morale to pass. On a failure, Morale is reduced by 2 and Disorder rises by 1.

### 7.2.8 Commands

Each command is declared by the Commander and rolled in the Resolution phase. Attack commands use the squad's Melee or Missile percentile. Manoeuvre commands use a characteristic of the Commander, rolled as characteristic × 5.

**Advance in Order** (Commander's INT × 5)
Move one range band closer to or further from the enemy. Cannot be used if the squad is in Melee range with an enemy squad. _Fail:_ Disorder +1.

**Charge** (squad's Melee, with squad in motion)
Move into Melee range with an enemy squad and make an immediate Melee Attack at +10% to Melee. Requires line of sight and clear terrain. Cannot be used if already in Melee range with another squad. _Fail:_ self-Disorder +2 and the enemy squad's Defence is reduced by 5 for the next round only (the line is exposed, but the charge went wide).

**Change Formation** (Commander's DEX × 5)
A squad with multiple formations available (§7.2.5) reforms into a different formation. Disorder resets to 0; the new formation's effects apply next round. _Fail:_ Disorder is not reset and increases by 1.

**Disengage** (Commander's DEX × 5)
A squad in Melee with an enemy ends the melee and moves back to Short range. _Fail:_ cannot disengage.

**Retreat** (Commander's CHA × 5)
As Disengage but moves to Long range. Disorder increases by 2 regardless of success. _Fail:_ rout. Every squad in the same position must immediately make a Morale check or also take Retreat. All squads in the position have Morale reduced by 1.

**Melee Attack** (squad's Melee)
The squad attacks an adjacent enemy squad in Melee range. On a hit, deal Damage and the target's Disorder rises by 1. _Fail:_ no damage, no Disorder change.

**Missile Attack** (squad's Missile)
The squad attacks an enemy squad at Short range or further. Range penalty: Short 0, Long -20%, Very Long -40%. The attacking squad must not be in Melee. On a hit, deal Damage and the target's Disorder rises by 1. _Fail:_ no damage, no Disorder change.

**Rally** (Commander's CHA × 5)
The squad's Disorder resets to 0 and Morale increases by 2 (cannot exceed original). _Fail:_ Disorder is reduced by 2 (a partial recovery, but the squad does not steady fully).

### 7.2.9 Criticals and Fumbles

Whenever any command roll comes up at the rolling skill or characteristic-roll target ÷ 5 or under, the rolling Side rolls on the **Critical Event** table. Whenever any command roll comes up 96-00, the rolling Side rolls on the **Fumble Event** table. These tables are command-agnostic: the chaos of battle hands out fortune and misfortune that flow with the engagement, not tied to the specific command being attempted.

**Critical Event (1D6)**

| 1D6 | Effect                                                                                                                                                                                           |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | **Inspired action.** Your squad's Morale increases by 1 (cannot exceed original).                                                                                                                |
| 2   | **Tactical opening.** Choose: nearest enemy squad gains +2 Disorder, or your own squad's Disorder resets to 0.                                                                                   |
| 3   | **Standard raised.** All allied squads in this Force gain +1 on Morale checks until the end of the next round.                                                                                   |
| 4   | **Free rally.** One allied squad of your choice immediately performs a Rally as a free action - automatic success, Disorder resets to 0, Morale rises by 1 to the cap of its original value.     |
| 5   | **Hero ascendant.** One attached Hero distinguishes themselves; their next contribution to the squad (attack support, Morale steadying, command bonus) is doubled.                               |
| 6   | **Decisive moment.** If this was an attack command, deal double damage; otherwise, your squad may take an additional free command action of the Commander's choice on the same Initiative count. |

**Fumble Event (1D6)**

| 1D6 | Effect                                                                                                                                                                                     |
| --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1   | **Confusion in the ranks.** Command fails, +2 self-Disorder, lose initiative on the next round (acts last).                                                                                |
| 2   | **Banner falls.** Command fails. All squads in your Force take -1 on Morale checks until the end of the next round.                                                                        |
| 3   | **Commander down.** Command fails. The Commander takes 1D6 damage and rolls CON × 5; failure = unconscious for the rest of the round.                                                      |
| 4   | **Wrong way.** Command fails. The squad shifts one range band in a randomly determined direction (1D4: forward toward enemy, withdraw to rear, slide to left flank, slide to right flank). |
| 5   | **Discord.** Command fails. The squad's Morale drops by 2.                                                                                                                                 |
| 6   | **Rout begins.** Command fails. Immediate Morale check at -3 for this squad and every allied squad in the same position.                                                                   |

### 7.2.10 Damage, Morale, and Defeat

**Damage and AV.** When an attack lands, roll the squad's Damage dice; subtract the target squad's AV; apply remaining damage to the target's HP.

**Half-HP shock.** When a squad's HP is reduced to half its starting value or below for the first time, its Morale is reduced by 3.

**Commander's sacrifice.** When a squad takes damage, the Commander may elect to halve their own current HP (rounding up) to reduce the squad's damage to 0. Roll Commander's DEX × 5; on failure, the squad still takes half damage (rounding up) and the Commander still loses half their HP.

**Squad defeated.** A squad reduced to 0 HP is defeated and removed from the battle. Attached characters (the Commander and any Heroes) make a survival roll:

- **Gradual collapse** (squad was at more than half HP at the start of the resolution that reduced it to 0): each attached character takes **1D6 damage** and rolls **CON × 5** to remain on their feet. Failure = unconscious in the rout. Critical = no damage.
- **Catastrophic collapse** (squad went from above half HP to 0 in a single resolution, or any critical hit dropped the squad): each attached character takes **2D6 damage** and rolls **CON × 3** to remain on their feet. Failure = unconscious in the rout. Critical = no damage.
- **Elites always count as catastrophic.** Their fighting-to-the-last nature means attached characters are always in the worst of the collapse.

**Fate Point escape.** A Commander may spend a Fate Point (§5.6) to convert their own survival result to "survives at 1 HP and rallies to the nearest friendly squad." Heroes, as NPCs, do not have this option.

**Force defeat.** A Force is defeated when its Leader judges (or the GM judges, for NPC Forces) that the engagement can no longer be sustained: when half or more of its squads are defeated or in Retreat; when its Leader has fallen and no successor has taken command; or when its situation is hopeless. The losing Force withdraws; the winning Force holds the field.

### 7.2.11 Battle Magic

This section is reserved. Battle-scale sorcery - the spells that level a wall, summon a horde, or fold a regiment in fear - does not scale from the §4 spell list as written; a 3 PP spell that affects an army would break the cost economy that makes WSR sorcery costly. The design space (ritual-prepared effects, sustained channelling, sorcerous defence) is tracked in IDEAS.md and will be addressed in a future revision of this chapter.

In the meantime, GMs running a battle in which a sorcerer is present should treat any spell of level 4 or higher as a single use during the battle (cast at the moment of greatest dramatic weight) and resolve its effect as a special command issued by the sorcerer's Force, with the effect described to fit the spell.

## 7.3 Mixed Mode

A battle may use §7.1 and §7.2 simultaneously: PCs commanding squads run on the skirmish track; PCs operating outside any squad run on the abstraction track.

**Time scales match.** One skirmish round equals one §7.1 turn (five minutes of battle time). Independent PCs roll on the §7.1 Luck table once per skirmish round, after the Morale Check phase.

**Crossing the tracks.** An independent PC may cross to the skirmish track during the battle in two ways:

- **Attach to a friendly squad as a Hero.** Their effect is whatever fits the fiction - a sorcerer might give the equivalent of _Sharp Shooter_ through a buff spell; a warrior PC might give _Heroic Swordsman_. Reaching the squad requires the PC to be in the same position as the squad, which is itself a narrative objective and usually requires a §7.1 critical or a successful Agility roll across one range band.
- **Hunt a named NPC.** A §7.1 critical lets the PC target one specific named NPC - the enemy Leader, a Hero attached to a specific squad, the Commander of a Force's right flank. Resolution then jumps to standard individual combat for that scene; other PCs continue in their respective modes.

**Force-level shocks affect the fiction, not the math.** A Force-wide -2 Morale check penalty (from a Standard struck, a fumbled command, a defeated elite squad) is dramatic pressure that the GM may reflect in narrating §7.1 outcomes for individuals on that side: the press of fleeing troops, a sudden rumour of treason, the loss of cohesion in the line. No mechanical penalty is added to the individual track.

**The Champion's Challenge bridges both modes.** A challenge is resolved by standard individual combat (§6), regardless of which mode the participating PCs were operating in.
