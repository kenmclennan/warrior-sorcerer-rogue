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
- What kinds of outcomes go on the table? Bane categories (a debt, a pursuer, a wound that hasn't healed, a lost item, an angered local power) vs. boon categories (a contact made, a rumour overheard, a useful trinket, an obligation owed *to* you)?
- Storage: how does the GM track "stored" banes/boons so they actually surface in play and don't get forgotten?
- Pacing: when can a bane fire? Always at the worst moment (GM judgement) or constrained (only when the party is in a public place, only during a downtime scene, etc.)?
- Player visibility: total secret, or does the player know "something happened" and just not what?
- Interaction with the Reputation track - a route-bane might raise local Reputation in a specific city if the bandits told the story before being killed.
