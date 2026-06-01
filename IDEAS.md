# Ideas

Pending design ideas for WSR. Each one is something to come back to, not something to do now.

## Add fumble tables

Currently §4.2.1 just says "There are no fumble tables; the fumble should fit the fiction." That feels thin - a fumble is a dramatic moment and the genre rewards specificity. Look at how Rolemaster handles this (Arms Law / Claw Law) and consider whether WSR should have damage-type or skill-type fumble tables to parallel the §A1 critical hit tables.

Open questions:

- Damage-type fumble tables (parallel to §A1 crits) vs skill-type vs single generic table?
- Severity bands like the crit tables, or flat?
- Combat-only or also non-combat (e.g., a Climb fumble, a Sorcery fumble)?
- Should the genre lean into "fumble = catastrophe" (Rolemaster) or "fumble = setback you can recover from" (lighter touch)?

Research notes from a background pass on Rolemaster's approach are appended below when ready.

### Research notes (Rolemaster fumble approach)

**1. Trigger.** A fumble is triggered by the unmodified d100 attack roll falling within the weapon's "Fumble Range" (a UM result - skill, OB, situational mods are ignored). Each weapon has its own range printed on its attack table and weapon-stats line, typically 01-02 for a dagger or rapier up to 01-08 or higher for clumsy weapons like a morning star or two-handed flail. Mounted use widens the range; longer/heavier weapons fumble more. Magic items can buy down the range to a floor of 01 (an unmodified 01 always fumbles).

**2. Structure.** There is one Weapon Fumble Table (Arms Law 8.2.1) split into six columns by weapon class: Hand Arms (1-h), Hand Arms (2-h), Pole Arms, Spear & Mounted Arms, Thrown Arms, Bows. So Rolemaster cuts fumbles by weapon family, not by damage type. Rows are eleven severity bands: 01-25, 26-30, 31-40, 41-50, 51-60, 61-70, 71-80, 81-85, 86-90, 91-95, 96-99, 100. The roll is a separate d100 made after the fumble is triggered - low rolls are mild, high rolls are catastrophic. Animal/martial-arts attack tables note "Fumble = no action this round" rather than referencing the table.

**3. Outcome flavour.** Low band (01-25) is essentially "no swing this round, try harder next time" with snarky narration. Mid band ramps through: drop weapon (1-4 rounds to draw/recover), juggle weapon for several rounds (no attack but can still parry), slip and be stunned 1-3 rounds, lose parry, take -10 on next swing, hold onto weapon but lose initiative. Upper bands (81-99) introduce: break weapon, break bowstring, mount rears/throws rider, shot goes 20-30 feet astray or behind, stunned-and-unable-to-parry for 3-6 rounds, take a flat 5-20 hits. The 100 result is genuinely horrific: roll on the "D" severity critical strike table against yourself (a slash crit for blades, a krush crit for blunt, a puncture crit for the thrower of the weapon, etc.) - i.e., a fumble of 100 can kill or maim the fumbler outright. The voice is wisecracking ("Good luck pal", "Real weak", "Reroll if someone lies in the new path") which is a strong tonal signature.

**4. Non-combat fumbles.** Yes. The Maneuver/Movement Table (Arms Law 8.2.2) is the moving-maneuver equivalent: cross-index the maneuver difficulty (Routine through Absurd) with the modified roll, and very negative results give falls, broken arms, broken legs, broken backs, comas, paralysis, and skull-crushing death at the worst. Spell Law has a Non-attack Spell Failures Table (15.7) and an Extraordinary Spell Failure (ESF) concept - low casting rolls back-fire the spell, drain the caster, or worse, and Burnout in Character Law dumps directly into that table. So Rolemaster treats fumble as a universal pattern: weapon, maneuver, spell each get their own table, all sharing the "low roll = bad result on its own table" structure.

**5. WSR fit.** Translates well:

- One combat fumble table indexed by **weapon family** rather than damage type. WSR's crit tables are damage-typed because the wound matters; a fumble is about the attacker losing control, which is a property of the weapon in hand, not the damage it would have done. A dagger fumble is dropping a dagger; a bow fumble is breaking a string. Damage-type slicing fits crits, weapon-family slicing fits fumbles - the deliberate asymmetry is the point.
- Severity bands rolled on a separate d100 after the trigger. Mirrors the WSR crit-table workflow (trigger, then roll for severity) and keeps a single fumble trigger from always meaning the same thing.
- Genre-appropriate outcomes for sword & sorcery: drop weapon, lose tempo, slip prone, weapon flies wide, bowstring snaps, blade chips on a shield, sandal-strap breaks, lose initiative, expose flank to next attack. These are setbacks that feed swashbuckling recovery beats.
- A separate Sorcery fumble table fits the genre hard - misfires, summons something unintended, the sorcerer takes the spell's effect, loses Power, attracts attention from something Outside. Sword & sorcery sorcery is supposed to be dangerous, and this is the canonical place to make it so.
- The Maneuver/Movement-style approach (one table covering Climb/Swim/Stealth fumbles) is probably worth a short section rather than a full per-skill table.

Translates poorly:

- The catastrophic 100 result that sends a fighter to roll a D-severity crit on themselves is too much for the tone. WSR's fiction-first ethos and the lighter "swashbuckling" lean argue against the fumbler routinely killing themselves. Cap the worst outcome at "drop weapon, prone, stunned, and the next attack against you has advantage" rather than self-inflicted maiming. Reserve self-harm for explicit edge cases (e.g., a critical fumble while wielding a cursed or unfamiliar weapon).
- Six weapon-family columns may be one or two too many for WSR's scope. Consider collapsing to three or four: melee one-handed, melee two-handed/polearm, thrown, and missile. The mounted column especially is probably out of scope.
- The wisecracking voice ("One's ten thumbs just cannot handle loading") is fun but reads as 1980s D&D-adjacent humour, not Howard/Leiber/Moorcock. WSR's fumble flavour text should be terse and grim - "The blade turns in your hand. You feel it bite leather, not flesh" - not jokey.
- The Rolemaster trigger range (up to 8% of all attacks) is too frequent for a system that wants fumbles to be dramatic. A tighter trigger - natural 100 on a percentile attack, or 96-00 on a low-skill weapon - keeps the moment rare enough to remain a moment.

## Picaresque travel: banes and boons

The system needs a way to handle what happens on journeys. Rather than playing out every encounter on the road, travel between locations should generate **banes** or **boons** based on the danger level of the route. The GM rolls (kept secret), describes the journey in a few sentences, and the consequences arrive later - at an inopportune moment during the adventure.

Worked example: the party travels to the City of Bimesh. The route has a moderate danger rating. The GM rolls: bandit encounter, party wins but the leader escapes wounded (bane stored). Travel is described briefly: "Three days through the broken hills. You fought off a bandit ambush in a gulley on the second night - bloody, but yours." Then, two sessions later, the wounded bandit leader and a dozen of his thugs ambush the party in the Bimesh market square, settling the score at the worst possible moment.

This is genre-native: the Conan stories (and Leiber, Howard generally) constantly compress travel into a paragraph and then have the consequences walk back in later. The mechanic should reward that narrative shape rather than forcing every road encounter to be a full scene.

Open questions:

- Roll structure: single d100 against route danger, or a small tableau (one roll per day / per stage)?
- What kinds of outcomes go on the table? Bane categories (a debt, a pursuer, a wound that hasn't healed, a lost item, an angered local power) vs. boon categories (a contact made, a rumour overheard, a useful trinket, an obligation owed _to_ you)?
- Storage: how does the GM track "stored" banes/boons so they actually surface in play and don't get forgotten?
- Pacing: when can a bane fire? Always at the worst moment (GM judgement) or constrained (only when the party is in a public place, only during a downtime scene, etc.)?
- Player visibility: total secret, or does the player know "something happened" and just not what?
- Interaction with the Reputation track - a route-bane might raise local Reputation in a specific city if the bandits told the story before being killed.

## Play framework: sessions, adventures, campaigns, and GM guidance

WSR has the genre design DNA in `design.md` (hook → complications → reckoning, theatre-of-mind, anti-heroes with personal codes) but no formal _framework chapter_ that gives the GM the tools to run play at scale. This is the missing GM-facing toolkit.

What's needed:

**Terminology.** Pin down the unit-words and use them consistently across the book.

- **Session**: one sitting at the table. Three to four hours of play.
- **Adventure** (or **Episode**): a single self-contained storyline - hook, complications, reckoning. Typically spans one to three sessions. The episode framing is genre-native: Conan stories, Fafhrd & Grey Mouser stories, Elric stories are nearly all self-contained.
- **Arc**: a series of adventures linked by a recurring antagonist, theme, or quest. Three to six adventures.
- **Campaign**: the full life of the characters. Multiple arcs.

These terms recur in §7.3.2 Addiction ("within a single adventure"), §A2 (Karash's example crosses three sessions), and various rules tied to recovery time. Today they are used loosely; should be defined and applied consistently.

**Travel rules.** See the Picaresque travel: banes and boons entry above. Travel between locations is part of this framework.

**Adventure structure guidance.** Codify the hook → complications → reckoning pattern from design.md as a workable how-to-build-an-adventure section. Give the GM a checklist: pick a hook that hits a Passion, plan two complications (one external, one internal), prepare three possible reckonings (costly success, partial success, expensive escape). §A5.1 already does this informally; deserves a proper rules-side codification.

**Campaign structure guidance.** When and how to escalate. When recurring antagonists return. How a Patron Score is supposed to progress over a campaign (if patrons return in §12). How Corruption-equivalent stakes accumulate. When to retire a character. When the campaign ends.

**Random tables and content generators.** WSR already has the Deep Past generator (§14.1-14.3) but campaign play needs more:

- City-scale encounters and rumour tables
- Wilderness encounters by terrain type
- Tavern/temple/marketplace scene generators
- Rival/ally name generators (§A4 has names; could extend to NPC quick-generators)
- "What does this NPC want?" prompt tables
- "What goes wrong on the road?" tables (overlapping with Picaresque travel)

**Genre-fit advice.** Sword & sorcery is not D&D. The book should explicitly call out the differences for GMs coming from longer-form fantasy: anti-heroes, no party balance, fortune wheels and reversal, the GM as collaborator in the protagonist's downfall and recovery, the tone of complications (theft, betrayal, broken oaths) rather than dungeon crawls.

Open questions:

- Where does this live? A new GM-facing chapter after §A5? Or fold into an expanded §A5? Or its own section in §13 Treasure / §14 Deep Past adjacency?
- Is "Adventure" or "Episode" the better term? Episode reads more genre-correct (Howard wrote episodes); Adventure is the established RPG term.
- How prescriptive should the structure advice be? Too prescriptive and it constrains GM creativity; too loose and it doesn't help.
- Random tables: bake them in or leave as a separate generator appendix?
- Should there be sample adventures/arcs as worked examples, in the spirit of §A2 / §A5?

## Battle magic: sorcery in mass combat

The §7 Mass Combat catalogue deliberately excludes a "Sorcerous Construct" or "Summoned Host" squad type, and the NPC archetype list does not currently include a battle-magic Sorcerer. Both are wanted - the genre is full of them (Thoth-Amon raising mist over a battlefield, an Acheronian necromancer hurling an undead legion at Conan's column) - but the sorcery review made it clear that battle-scale magic needs to scale differently from personal-scale magic.

The constraint: a §4 spell that meaningfully affects an army is not a 3 PP spell. The Plague Wind precedent established that large-mass-effect sorcery requires infrastructure-tier PP (Brazier of Power + Chain of Being, 50-100 PP), which is a session-scale ritual, not an in-round action. A sorcerer cannot "cast a fireball at the enemy line" each turn of mass combat without breaking the cost economy that makes WSR sorcery costly.

Two design directions to weigh when picking this up:

- **Pre-battle ritual model.** The sorcerer's army arrives with one or more battle-scale spells already prepared via Brazier-tier ritual the night before. Each ritual-prepared effect is consumed in a single use during the battle. Mechanically: a "stored" spell on the army roster. This preserves the cost economy.
- **Sustained channelling model.** During mass combat, a sorcerer attached to a squad (as a Hero or as a Leader) can sustain a battle-scale effect at the cost of being unable to act otherwise and reducing their PP maximum each round. This is closer to how Plague Wind's outbreak maintenance was modelled. Higher tension but fiddlier at the table.

Open questions:

- Does a Sorcerer Hero archetype exist at all, or is sorcery handled exclusively at the Leader tier?
- What is the effect catalogue? Suggested: area damage, area fear/morale assault, area movement debuff (mist, mud), area buff (ward, courage), summoned host (a free squad for N turns).
- How does sorcerous defence work? Can a counter-sorcerer on the other side cancel an effect, and at what cost?
- Does this section live in §7 Mass Combat, in §13 NPC Sorcery and Patrons, or both with cross-references?
- Should the §4 spell list grow battle-scale spells with stated PP costs of 50+, or are these effects new and live only in the mass combat chapter?

## War machines as deployable mass-combat units

The §7 Mass Combat chapter currently handles fortifications with a single Defence-bonus rule and explicitly defers war machines (siege towers, scorpions, ballistae, catapults, rams) to a future revision. The catalogue would parallel the squad catalogue: each war machine gets its own stat block with HP, AV, range, damage, crew requirements, and available commands.

Likely entries:

- **Scorpion / Light Ballista.** Anti-personnel bolt thrower. Long range, accurate, 1D10+2 damage, crew of 2-3. May target individual Commanders or Heroes with a -20% penalty (the Roman use). Vulnerable in melee.
- **Heavy Ballista / Catapult.** Stone or javelin thrower. Long to Very Long range, 2D10 area damage to a single squad, slow to reload (one shot every two rounds). Crew of 4-6.
- **Battering Ram.** Reduces a wall to a breach over several rounds. Crew of 6-10. Slow to advance. Vulnerable to missile attack.
- **Siege Tower.** Mobile platform for crossing walls. Crew + a passenger squad. Once positioned, the passenger squad attacks the wall's defenders at Melee range. Targetable by defending missile units and fire-based attacks.
- **Mantlet / Pavise Line.** Defensive screen for advancing troops. Provides +10 Defence vs Missile to the squad sheltering behind it. Slow movement.

Open questions:

- Are war machines squads in their own right (a "Scorpion Battery" stat block), or are they attached to a squad as a hero-equivalent that grants a special command?
- Do crews die separately from the machine, or is the machine destroyed when its crew is killed?
- How do flame weapons (fire arrows, naphtha) interact with war machines and siege towers? Specifically, can a single fumbling Missile Attack burn down a siege tower?
- Does the rules section live in §7.2 (extending the catalogue) or in a separate sub-chapter under §7?

## Full siege subsystem

A siege is not a battle - it is a campaign of attrition with intermittent moments of mass combat (sallies, escalades, breach assaults). The §7 Light Fortifications rule handles the moment of breach but does not address the days, weeks, or months that surround it.

A full siege subsystem would need:

- **Investment.** How a Force surrounds a fortress, the rules for blockade and supply line interdiction, the timescale (a day a turn, or a week a turn?).
- **Walls as objects.** Wall HP, AV by construction type (timber palisade, stone curtain, masonry tower). Damage from siege weapons and time.
- **Sapping and mining.** Underground operations to undermine walls, opposed by defender counter-mining. Time and skill (Engineering speciality?).
- **Escalade.** Direct assault on intact walls with ladders. Brutal casualty rates; falls back to standard skirmish rules with the wall as terrain.
- **Hunger and disease.** Supply depletion, water contamination, sickness spreading among besiegers and besieged. Already partially addressed by §8.1 Disease.
- **Sallies.** The defender's sortie - a brief mass-combat engagement outside the walls, then withdraw. Couples to the skirmish system as a short battle.
- **Relief.** Outside Forces arriving to break the siege. Triggers a full battle.

Genre fit is strong (Howard's _The Hour of the Dragon_ climaxes at a siege; Leiber and Moorcock have multiple) but the design space is large enough to deserve its own dedicated chapter rather than an expansion of §7.

## Naval combat

Adjacent territory currently not covered. Howard's _The Black Stranger_, _Queen of the Black Coast_, and similar stories have ship-to-ship action that the mass-combat system does not handle well: ships are not squads in the line-of-battle sense, and individual ships often carry small numbers of named PCs and NPCs rather than abstract troops.

Likely shape:

- **Individual ship combat** for small skirmishes (one to four ships per side) using individual-combat rules for the boarding melee and per-ship stats for ramming, missile exchange, and manoeuvre.
- **Mass naval combat** for fleet engagements (galleys at Salamis scale) reusing the §7 squad framework, treating each squad as a flotilla rather than a single ship.
- **Ship stat blocks.** Hull HP, oars/sails, ram damage, missile platforms, crew capacity. The Carrack, the Galley, the Longship, the Trireme.
- **Weather and seamanship.** Wind direction, storm rolls, navigator's skill (Seamanship speciality).
- **Boarding.** Bridge from naval combat to standard individual or mass combat for the deck fight.

Open questions:

- Is naval combat part of §7 Mass Combat or its own chapter?
- How much overlap is there between ship-as-squad in fleet combat and ship-as-character in single-ship action?
- Does the system need rules for piracy, privateering, and naval economics (loot, prizes, port hostility), or are those campaign-framework concerns?

## Cohesion unification refactor for Mass Combat

§7.2 squads currently track two cohesion-adjacent statistics: **Morale** (2D6 check at end of round, represents will to fight) and **Disorder** (rises during play, represents physical formation cohesion, reduces Defence). They model genuinely different things and the current design preserves the distinction deliberately - a fresh elite squad can be Disordered without losing nerve, and a steady levy can be in perfect order yet on the edge of breaking.

A reviewer has proposed unifying them into a single **Cohesion** stat (start high, drops on damage or setbacks, low Cohesion = Defence penalty + rout). This would simplify tracking and talent design, at the cost of losing the Disorder/Morale distinction.

The current design rejects this in favour of preserving the two-track distinction. The unification idea is logged here in case play surfaces the friction the reviewer predicts.

Open questions if revisiting:

- Does the two-track distinction actually deliver dramatic value at the table, or do the two stats blur together in practice and just feel like extra bookkeeping?
- Is there a hybrid - keep one stat for the game-mechanical effect (Defence penalty) and let "Morale" become purely narrative GM colour - that captures the best of both?
- Would a single Cohesion stat with two _states_ (physical disorder vs psychological wavering) inheriting from a single track preserve the texture while removing the bookkeeping?
- How would the talent catalogue redesign work? "Disciplined" currently caps Disorder; under Cohesion it would cap the rate of Cohesion loss. Are talents cleaner or messier under the unified model?
