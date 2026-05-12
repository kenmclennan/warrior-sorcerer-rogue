# G2. NPCs and Adversaries

> _"There were at least a score of them - hard, lean, wolfish men, with a sprinkling of black-bearded nomads among them."_
> _- Robert E. Howard_

This chapter covers stat block formats, design principles, and ready-to-use examples for the three tiers of human enemy: mooks, professionals, and named antagonists. The player-facing mook rule is in P5 §8; this chapter is the GM's side.

---

## 1. The Three-Tier Model

Every human enemy belongs to one of three tiers. The tier determines mechanical complexity, narrative weight, and preparation time.

### 1.1 Mooks

Mooks are the warm bodies that fill a dungeon, guard a gate, or crew a villain's compound. They are soldiers, bandits, city watchmen, cultist conscripts, and hired swords with no particular name. The genre demands that PCs cut through them with blood and momentum rather than grinding through each one as a full BRP combat. That is what the mook rule provides.

**Narrative role.** Mooks establish threat-through-numbers, cost the PCs some HP before the real fight, and fall dramatically. They are not meant to win. A mook who lingers too long has become something else.

**Mechanical profile.** Mooks have one primary weapon skill, a Dodge rating, and an HP total. They do not have Power Points and cannot make any Fate Point spend. They do not roll on the Major Wounds Table. They fight, they absorb damage up to their threshold, and then they fall.

The mook rule: any mook who takes cumulative damage equal to or greater than half their total HP is automatically incapacitated. The GM describes how - beaten down, driven off, knocked senseless, or simply unwilling to die for six coins a day. The fiction determines the detail; the threshold determines when.

**When a mook stops being a mook.** The moment an NPC acquires a name and a plot function, they are no longer a mook. The GM makes this call before combat starts.

### 1.2 Professionals

Professionals are competent antagonists with individual identities. They may not be named, but they have a function: the mercenary sergeant, the cult enforcer, the treasury agent, the assassin hired for this specific job. They bring enough skill and initiative to pose a genuine threat to individual PCs, and enough characterisation to make encounters with them feel like encounters with people rather than obstacles.

**Narrative role.** Professionals push back: they adapt, hold their ground, and have something at stake beyond the coin. They may have loyalties that complicate instructions or limits to their ruthlessness.

**Mechanical profile.** Professionals have multiple weapon skills, Dodge or Parry, full HP, and limited PP (typically half POW or lower). No sorcery, no Fate Point access, no Patron Intercession. No formal Talents or Passions - the GM assigns one or two drive-notes informally. They roll on the Major Wounds Table normally and fight until they drop.

### 1.3 Named Antagonists

Named antagonists are PC-grade characters: individuals with full stat blocks, Fate Point access, Passions, and Talents. They may have sorcery. They are the significant enemies of the campaign - the ones the players will come to dread, curse, and eventually confront in a climactic encounter. They may survive that encounter and recur.

**Narrative role.** Named antagonists drive plots. They have goals, make decisions that shape events before the PCs arrive, and represent a sustained threat requiring time, preparation, and luck to overcome.

**Mechanical profile.** Build named antagonists exactly as you would build a PC (see P2 for the chargen procedure). All the same rules apply: characteristics, derived stats, skills, talents, passions, reputation. The GM version of a named antagonist has full Fate Point access - their Power Points can fund defensive spends, and they will use them when the stakes are high enough.

For sorcerer-villain antagonists, apply the full Sorcery rules from P6. They have Corruption, may have a Patron Score, and memorise spells like any PC sorcerer. Building a sorcerer antagonist is covered in detail in G4 (NPC Sorcery and Patrons); the stat blocks in §5 of this chapter include a worked example.

---

## 2. Mook Stat Block Format

Everything the GM needs for a mook encounter fits in seven lines.

### 2.1 Mook Block Format

```
[Name/Type]

STR ##  CON ##  SIZ ##  DEX ##  POW ##  INT ##
HP ##  Dodge ##%  Damage Modifier: [none / +/-1D4 / +1D6]
Armour: [none / # AP, type]

Primary weapon: [Weapon] ##%, damage [dice]
Secondary (if any): [Weapon] ##%, damage [dice]

Incapacitated at ## HP (half of ## HP total).
No Fate Point access. No Major Wounds Table.
```

**Design notes:**

- HP 6-10 is the typical mook range. A solid hit from any PC should threaten the threshold.
- Primary weapon skill 30-50%. Heavy armour belongs on professionals.
- No skills beyond combat. If a mook's Stealth or Insight matters, promote them to a different tier.

### 2.2 The Mook Rule - GM Detail

**Cumulative threshold.** Total damage taken, not per-blow. A mook with 8 HP is incapacitated at 4 HP cumulative - whether from one solid hit or three scratches.

**Critical hits.** Full damage ignoring armour (P5 §10.4). If cumulative damage reaches the threshold, incapacitated immediately. Crit table results are colour only - no Major Wounds trigger.

**Major Wounds.** Mooks never roll on the Major Wounds Table. The threshold replaces that system.

**Describing incapacitation.** Not always lethal. A bandit struck by a sword might be dead; the same bandit knocked sprawling by a half-spent blow is unconscious. City guardsmen beaten down create a different problem than twelve dead ones. Let the fiction determine what "incapacitated" looks like.

**Mooks in numbers.** Track each mook's cumulative damage separately - not a group HP pool. Two or three rounds should scatter most mook groups.

### 2.3 "Look Out Master!"

This mechanic lets a villain redirect an incoming blow to a nearby mook, spending down their Power Points to do it.

**The spend.** When a PC's attack connects with a named antagonist villain and damage is about to be resolved, the villain may spend all their remaining Power Points (minimum 8 PP) to activate this move. A mook within hand-to-hand range of the villain (or within throwing distance of a projectile attack) hurls themselves in front of the blow. The mook takes the full attack result, including any critical effects, and is immediately killed or incapacitated.

The villain takes no damage from this attack.

**Pacing function.** Look Out Master! is a narrative timer, not a defensive tactic. The villain has spent their entire remaining PP pool - no Fate Point access, no critical buys, gutted casting capacity if a sorcerer. Deploy it once per encounter at maximum dramatic tension. Name the mook who dies. Give them one descriptive line.

**Constraints.** The villain must have a mook within range. "Range" is defined by the attack type:

- Melee attack: one mook who is engaged or adjacent to the villain.
- Missile or thrown attack: one mook who is physically between the villain and the projectile's line.

If no mook qualifies, the mechanic cannot be used.

The PP minimum of 8 ensures this is not free for villains who have already spent heavily.

---

## 3. Building Professional NPCs

Professionals are built from the same skeleton as mooks with a broader skill profile and enough character to feel real in an encounter.

### 3.1 Professional Stat Block Format

```
[Name/Role]

STR ## | CON ## | SIZ ## | DEX ## | POW ## | INT ## | CHA ##
HP ##  Damage Modifier: [as applicable]
PP ##  (no Fate Point access; no sorcery)
Armour: [AP and type]

Combat skills:
  [Weapon A] ##%  damage [dice]
  [Weapon B] ##%  damage [dice]
  Dodge ##%  |  Parry (as primary weapon) ##%

Other skills: [3-5 relevant skills with %]

Notes: [any notable equipment, drives, or situational rules]
```

**Design principles:**

- **Two or three weapon skills.** Pick what fits the role, not what produces the most combinations.
- **Primary weapon skill 50-70%.** At 60%, they connect more often than not and genuinely threaten PCs.
- **PP total as a resilience buffer, not a resource pool.** They will not spend it; it ensures characteristic rolls are meaningful.
- **Three to five relevant skills.** Match the encounter context, not the archetype. A mercenary captain needs Command; an infiltrator needs Stealth and Insight.
- **No Talents, no Passions as mechanics.** Drives are notes under Notes: "Will not harm children. Will flee if the paymaster is dead."

### 3.2 What Professionals Are Not

Professionals are not named antagonists in waiting. Do not give them Fate Point access, Corruption tracks, or patron relationships. A professional who becomes important enough for full mechanical weight should be re-statted from scratch as a named antagonist.

---

## 4. Building Named Antagonists

Named antagonists are PCs with different goals. Build them with the full chargen procedure from P2.

### 4.1 Named Antagonist Stat Block Format

The full stat block records everything a PC sheet would, but laid out for fast GM reference rather than player exploration.

```
[Name, role, brief descriptor]

STR ## | CON ## | SIZ ## | DEX ## | INT ## | POW ## | CHA ##
HP ##  PP ##  Damage Modifier: [as applicable]  MOV 10

Armour: [AP and type]

Combat skills:
  [Weapon A] ##%  damage [dice]
  [Weapon B] ##%  damage [dice]
  Dodge ##%  |  Parry ##%

Other skills: [8-12 relevant skills with %]

Talents: [name and cost; 1-2 relevant talents]
Passions: [1-3 passions with % and brief descriptor]
Reputation: ##%  [tag]

Fate Point access: yes.  PP spent on: [list options likely to be used]

[For sorcerers only:]
Corruption: ##  Breaking Point: ##
Patron Score: ## (patron name or None)
Spells in memory: [spell, level] x [number known]
Grimoire: [format]

Notes: [drives, behavioural limits, escalation notes, scenario hooks]
```

### 4.2 Designing the Antagonist's PP Budget

The villain's PP are the GM's primary pacing tool. Decide at session prep how many they have when the PCs confront them - this is a story decision:

- **Full PP:** Resting and prepared. Rare for a climactic encounter.
- **Half PP:** One earlier encounter, one Look Out Master! spend, or one costly spell. Standard for a mid-campaign confrontation.
- **Low PP (8 or fewer):** Grinding through the session. Near the Look Out Master! threshold. Brittle and vulnerable.

**Tracking between encounters.** Track remaining PP across sessions. A villain who fled with 3 PP should not arrive at the next encounter with full reserves unless recovery time is a deliberate story beat.

### 4.3 Sorcerer Antagonists

Sorcerer-villain antagonists have a Corruption track and may have a Patron Score. Use the full mechanics from P6 for their sorcery. Additionally:

**Spells in memory.** Two or three spells, total levels not exceeding half INT (consistent with the PC rule in P2 §10.2).

**Casting under pressure.** Sorcerer antagonists follow P6 §2 and share the combat interruption risk (P5 §6.5). A smart party closes to melee before the sorcerer casts; a smart sorcerer antagonist keeps mooks and bodyguards between them and melee fighters.

**Corruption as a signal.** Corruption level shows how far the sorcerer has gone. Near the Breaking Point means they have sold something fundamental - let that show in their behaviour and decisions.

Cross-reference G4 for patron design, ritual magic, and demon binding. This chapter provides the stat block; G4 provides what is behind it.

### 4.4 The Recurring Antagonist

The villain who keeps escaping is a campaign asset. The mechanics are simple: they had PP remaining when they fled and used it to survive. Not GM fiat - they invested resources in survival rather than killing.

Track surviving antagonists between sessions: what they lost (PP, mooks, resources) and what they gained (rest, allies, information about the PCs). A villain who has suffered once is cannier, warier, and probably angrier. Let that show.

---

## 5. Sample Stat Blocks

Five ready-to-use stat blocks calibrated for a mid-campaign WSR session. Adjust characteristics as needed for your party.

---

### 5.1 City Guard (Mook)

Gate watch, market patrol, temple precinct foot soldier. People doing a job for coin.

```
City Guard (Mook)

STR 11  CON 11  SIZ 12  DEX 10  POW 10  INT 10
HP 12  Dodge 25%  Damage Modifier: none
Armour: 3 AP (bronze-plate reinforced leather)

Primary weapon: Spear 35%, damage 1D8+1
Backup: Short Sword 30%, damage 1D6

Incapacitated at 6 HP (half of 12 HP).
No Fate Point access. No Major Wounds Table.

Notes: Carries a whistle (1D6 rounds to summon 1D4+1 additional guards on a
success). Will typically flee or surrender at the incapacitation threshold
unless pride or watch-captain presence demands otherwise.
```

**Running city guards.** The threat is the whistle, not the spear. PCs inside a city wall should be calculating whether they can end the fight before reinforcements arrive. Narrate incapacitation as going down hard, not necessarily dying - twelve dead watchmen create different problems than twelve unconscious ones.

---

### 5.2 Bandit Raider (Mook)

Desert road-watcher, mountain pass ambusher, organised criminal.

```
Bandit Raider (Mook)

STR 12  CON 11  SIZ 11  DEX 12  POW 9  INT 10
HP 11  Dodge 30%  Damage Modifier: none
Armour: 1 AP (hide or cloth)

Primary weapon: Short Sword or Hand Axe 40%, damage 1D6
Secondary: Dagger 35%, damage 1D4+2

Incapacitated at 6 HP (rounded from half of 11 HP).
No Fate Point access. No Major Wounds Table.

Notes: Bandits fight for profit. Once the fight looks costly, they reassess.
If two or more are incapacitated in the same round, remaining bandits may
attempt to disengage (the first one who runs takes the rest with them).
```

**Running bandit raiders.** Bandits are opportunists who will not fight to the last without a professional or named antagonist holding them in the fight. Low armour, slightly higher weapon skills than guards; most dangerous in an ambush before the PCs have time to prepare.

---

### 5.3 Mercenary Captain (Professional)

A veteran soldier-for-hire. Keeps their people alive. Follows the paymaster until the paymaster stops making sense.

```
Mercenary Captain

STR 14 | CON 14 | SIZ 13 | DEX 13 | POW 11 | INT 12 | CHA 13
HP 14  Damage Modifier: +1D4  MOV 10
PP 11  (no Fate Point access; no sorcery)
Armour: 5 AP (scale and bronze helmet)

Combat skills:
  Sword 65%  damage 1D8+1+1D4
  Shield (Large Round) 55%  damage 1D6+1D4  |  Parry 55%
  Javelin 50%  damage 1D6+1D4  (thrown, 3 javelins carried)
  Dodge 35%

Other skills:
  Command 60%
  Insight 55%
  Persuade 45%
  Strategy 50%
  First Aid 40%

Notes: Commands up to a dozen mercenaries (use Bandit Raider or City Guard
as mook stat blocks for the troops). Will not abandon wounded subordinates
unless specifically ordered to. Has a grudge against sorcerers (bad
campaign experience - the GM can make this a useful lever or a
complication). Equipment includes a silver arm-ring worth 4 Staters.
```

**Running the mercenary captain.** Fights smart: directs mooks with Command, takes the best ground, keeps the shield up. Not a berserker - a professional who has survived by avoiding unnecessary risks. At Sword 60% / Shield 55%, they genuinely threaten any PC without comparable skills. They will flee if the paymaster is visibly dead, or switch sides for a price.

---

### 5.4 Cult Priest (Professional)

Temple enforcer, inquisitor of the hidden faith. Not a sorcerer, but has seen enough sorcery not to be frightened of it.

```
Cult Priest

STR 11 | CON 12 | SIZ 12 | DEX 11 | POW 14 | INT 14 | CHA 15
HP 12  Damage Modifier: none  MOV 10
PP 14  (no Fate Point access; no sorcery)
Armour: 3 AP (lamellar coat under ceremonial robes)

Combat skills:
  Morningstar 50%  damage 1D8
  Dagger 45%  damage 1D4+2
  Dodge 40%

Other skills:
  Insight 70%
  Intimidate 65%
  Persuade 60%
  Knowledge (Religion) 75%
  Knowledge (Occult) 55%
  Research 50%
  Status 60%

Notes: Commands 2D6 cultist followers (treat as mooks: HP 8, primary weapon
30%, Dodge 20%, incapacitated at 4 HP, no armour). Uses Intimidate and
Persuade before weapons; has long experience reading interrogation situations
and exploiting emotional pressure points. Will not fight the PCs directly if
the cult's true sorcerer is present - defers to power. If the true sorcerer
is eliminated, may attempt to bargain with the PCs (knows things; is willing
to trade information for survival).
```

**Running the cult priest.** Most dangerous when they have information the PCs need and use it as leverage. In a fight, they defend and protect the sorcerer or ritual. High Insight (70%) means they read the PCs quickly - play them as observant and calculating, not a mace-charging zealot. The cultist followers are true believers with improvised weapons; they die on command, but only the priest's or sorcerer's command.

---

### 5.5 Tribal Champion (Named Antagonist)

The great fighter of a warrior culture: elected by blood-right, feared by reputation, certain of their own excellence.

```
Dhakar the Unbeaten, Champion of the Red Sands Tribe

STR 17 | CON 16 | SIZ 15 | DEX 16 | INT 12 | POW 12 | CHA 13
HP 16  PP 12  Damage Modifier: +1D6  MOV 10
Armour: 3 AP (hide and bone-plate reinforcement)

Combat skills:
  Spear 75%  damage 1D8+2+1D6
  Thrown Spear 65%  damage 1D8+2+1D6
  Hand Axe 60%  damage 1D6+2+1D6
  Brawl 55%  damage 1D3+1D6
  Dodge 50%

Other skills:
  Command 55%
  Intimidate 65%
  Survival 60%
  Track 55%
  Navigate 45%

Talents:
  Bone-Breaker (Combat, 4 PP): On a successful melee attack, add +1D6 damage.
  Unbreakable (Combat, 3 PP): Auto-succeed one Stamina roll to avoid
    unconsciousness from a wound (once per combat).

Passions:
  Honour of the bloodline 80% - will not attack from ambush or strike an
    unarmed opponent who has yielded.
  Hatred of sorcery 70% - will refuse to work with or accept aid from
    sorcerers; the GM may invoke this to complicate alliances.
  Loyalty to the tribe 60%.

Reputation: 35%  ("Dhakar the Unbeaten - forty duels, no defeat")

Fate Point access: yes.  Likely spends: Bone-Breaker (damage burst), Deflect
the Killing Blow (if clearly losing), Stand Your Ground (prevent
incapacitation while still fighting).

Notes: Dhakar enters a duel formally - challenge is expected, terms are set,
witnesses count. Fighting him in an ambush costs social credibility with the
tribe and triggers his Hatred of sorcery passion if any magic is involved.
He will not flee from a duel unless the opponent reveals sorcerous power, at
which point he considers the duel forfeit and will withdraw with contempt. He
collects the weapons of opponents he has defeated; currently carries six
besides his own. A skilled persuader can learn what debts his tribe owes to
the powers that sent them raiding.
```

**Running Dhakar.** In a formal duel, his Honour passion is active - benefits him (+20% to +50% inspiration) and constrains him. A clever PC may deliberately make the fight informal to disrupt his rhythm and trigger the passion as a liability. At Spear 75% + Bone-Breaker, he is devastating. His low HP (16) means focused fire ends him fast, but Unbreakable and Deflect the Killing Blow make him harder to finish than he looks.

---

### 5.6 Sorcerer-Villain (Named Antagonist)

A mid-tier sorcerer with ambitions slightly too large for their power and a patron watching the investment. Not the arch-villain, but capable of being its engine.

```
Nashtira of the Burnt Hand, Keeper of the Second Compact

STR 9 | CON 10 | SIZ 11 | DEX 13 | INT 17 | POW 18 | CHA 14
HP 11  PP 18  Damage Modifier: none  MOV 10
Armour: none (occasionally casts Sorcerous Armor before expected combat)

Combat skills:
  Dagger 40%  damage 1D4+2
  Dodge 35%

Other skills:
  Knowledge (Occult) 80%
  Knowledge (Demonic) 60%
  Knowledge (Blasphemous Lore) 35%
  Research 65%
  Insight 60%
  Persuade 55%
  Stealth 50%
  Sorcery 55% (complementary on contested workings)

Sorcery:
  Corruption: 72  Breaking Point: 45
  Patron Score: 14  (Patron: the Devouring Lattice, a chaos intelligence)
  Spells in memory:
    Curse of Sorcery (level 3) - afflicts a target with sorcerous decay
    Sorcerous Armor (level 3) - 6 AP magical protection, costs PP per AP
    Witch Sight (level 2) - see sorcery, demons, invisible workings
  Grimoire: a bronze-clasped codex, illegible to non-sorcerers

Talents:
  Arcane Insight (Sorcery): Halves time to learn new spells; bonus die on
    casting-relevant rolls (treat as +20% on qualifying rolls).
  Still-Face (Sorcery, 2 PP): When Corruption triggers, pay 2 PP instead of
    rolling; the Corruption loss is 0.

Passions:
  Devotion to the Devouring Lattice 70% - not love, but a cold commitment
    to the agreement. Nashtira regards the patron as an employer.
  Greed for the Codex of the Third Circle 80% - the actual driver of most
    of her actions in this arc.
  Contempt for the ungifted 60% - regards non-sorcerers as tools.

Reputation: 20%  ("the woman who burnt her hand in the ritual at Khet-Ur")

Fate Point access: yes.  Likely spends: Deflect the Killing Blow (when
melee reaches her), Still-Face talent (to avoid Corruption from heavy
casting), Steady Blade (to ignore situational penalties on sorcery rolls).
Look Out Master! available at full PP cost.

Notes: Nashtira does not fight in melee if she can avoid it. She will have
mooks or a professional bodyguard interposed between herself and the PCs at
all times. Her opening move in any dangerous encounter is Witch Sight to
assess sorcerous threats, then Sorcerous Armor if she has time, then Curse of
Sorcery on the most threatening PC fighter.

Her Breaking Point is 45 (Corruption is 72; she has spent well past it). She
is already changed. The GM should reflect this in how she speaks and what she
is willing to do - she crosses lines that a less-corrupted sorcerer would
not.

The Devouring Lattice is not interested in Nashtira's survival specifically;
it is interested in the Codex of the Third Circle, which it sent her to
retrieve. If she fails, another agent will be found. Nashtira knows this,
which explains both her ruthlessness and her desperation.

Cross-reference G4 for the Devouring Lattice's full patron profile and the
Patron Intercession mechanics at Patron Score 14.
```

**Running Nashtira.** Physically fragile (HP 11, no armour), magically dangerous (POW 18). The PCs can kill her quickly if they reach melee; the challenge is getting through the mooks and bodyguard. Her Corruption past the Breaking Point is a description tool: she should seem wrong - too still, too calm, capable of decisions a normal person would flinch from. She knows the patron will not intercede unless the Codex is at stake, so she burns her own resources first. Look Out Master! is available at full PP; after heavy casting it may not be, leaving her running - which is an invitation for a chase scene.

---

## 6. Encounter Design Notes

**Mix tiers deliberately.** The most interesting encounters have mooks, one professional, and the shadow of a named antagonist not yet present. The professional gives the mooks direction; the offstage antagonist gives the fight stakes beyond this particular exchange.

**Named antagonists do not fight every session.** Place them at moments of maximum dramatic consequence: once to establish threat, once to raise stakes, once for the confrontation that resolves or escalates the arc. Between appearances, they operate through professionals and mooks.

**The PP economy is the encounter economy.** Every mook that uses Look Out Master!, every professional who costs the PCs a Fate Point, every hard fight that drains the party PP is preparation for the final confrontation. Track the antagonist's PP spending as carefully as the PCs'.

**Calibrate mook HP to party damage output.** A mook with HP 6 goes down in one hit - satisfying but possibly too easy. HP 10 survives one hit but not two. Two rounds to scatter a mook group is ideal; four is too long.

**Give professionals a reason to be there.** The mercenary captain is there because someone is paying them. A sentence of context makes a professional feel like a person, not an encounter difficulty slider.
