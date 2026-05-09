# Source Notes: Delta Green Agent's Handbook

**Source:** Delta Green: Agent's Handbook (Arc Dream Publishing, 2016/2017). Dennis Detwiller, Christopher Gunning, Shane Ivey, Greg Stolze.
**Pages read:** TOC (pp. 4-5), The Game chapter (pp. 40-47), Combat chapter (pp. 48-63).
**Reviewer:** Research subagent, 2026-05-09.

---

## Summary

Delta Green is a Lovecraftian horror / government-conspiracy RPG descended from Call of Cthulhu, itself a BRP derivative. The Agent's Handbook is the players-only volume. Its resolution system is recognisably BRP-family: percentile skill rolls, roll-under-to-succeed. But it makes two structural changes to the standard BRP outcome ladder that are directly relevant to WSR:

1. **The critical success trigger is "matching dice," not a fixed fraction of skill.** This is the mechanism the user flagged.
2. **The fumble trigger mirrors the critical trigger exactly.** Matching dice on a failure = fumble.

Both are documented in full below. A third notable departure - the Lethality Rating system for area weapons - is noted under Other Mechanics but is not relevant to WSR.

---

## Critical / Fumble Mechanism

### The Rule (pp. 44, 52)

Delta Green uses **four outcome levels** for any skill or stat test:

| Outcome | When it occurs |
|---|---|
| **Critical Success** | Roll of 01, OR any success where both dice match (11, 22, 33, 44, 55, 66, 77, 88, 99) |
| **Success** | Roll equal to or less than the skill rating (and not a critical) |
| **Failure** | Roll higher than the skill rating (and not a fumble) |
| **Fumble** | Roll of 00 (100), OR any failure where both dice match (55, 66, 77, 88, 99) |

**Key point on overlap:** The matching-dice results that fall within the skill rating are criticals; those that fall outside (above) the skill rating are fumbles. At skill 50%, rolling 44 = critical success, rolling 55 = fumble. At skill 70%, rolling 55 = critical success, rolling 77 = fumble.

### What a Critical Does (pp. 44, 52)

- **General rule:** A critical success "automatically succeeds, and exceeds expectations." It is described as "twice as good as an ordinary success."
- **In combat:** A critical hit inflicts **double damage**.
- **In investigations/skill use:** A critical might halve the time required, or produce a richer result than a standard success.
- **In opposed tests:** A critical success beats any ordinary success. "A critical success beats a success. Otherwise, whoever rolled higher succeeds and the other fails."
- **In pursuits:** A critical success counts as **two wins** (not one) toward the chase resolution threshold.
- **On Luck Rolls:** The Luck Roll is a flat 50% chance; on a critical, luck is "extra good."

The book also provides optional rules for critical hits in combat (p. 52, sidebar):
- Alternatively, a critical can inflict **normal damage** plus one of: Stun, Disarm, make it a Called Shot, knock the target Prone, or allow the attacker to **immediately roll a second attack**.

### What a Fumble Does (pp. 44, 52)

- **General rule:** A fumble "fails, no matter how high your chance of success, and has additional, catastrophic consequences." The exact complications are up to the Handler (GM), but the book lists possibilities:
  1. A gun misfires, requiring 1D4 turns to clear.
  2. A weapon drops and takes a turn to recover.
  3. The attacker accidentally hits a friend, a bystander, or themselves.
  4. The attacker stumbles and falls.
- Fumble consequences are explicitly **narrated, not table-rolled**. There is no fumble table; the Handler picks an appropriate catastrophic result.
- **On SAN tests:** A fumble doubles SAN loss (per the Sanity chapter).
- **On poison CON tests:** A fumble doubles the damage inflicted.
- **On stabilization (First Aid):** A fumble inflicts 1D4 damage rather than healing.

### The Luck Roll (p. 44)

Separate from the critical/fumble mechanism: the Luck Roll is a flat **50% chance**, independent of any skill or stat. It is used when pure fortune determines an outcome ("are the neighbors home?"). On a critical success or fumble, luck is described as "extra good or bad" - but the text does not specify a mechanical amplifier for Luck Roll criticals/fumbles beyond the Handler's narration.

---

## Comparison with BRP UGE Standard

| Feature | BRP UGE standard | Delta Green |
|---|---|---|
| **Critical threshold** | 1/20 of skill rating, rounded up (e.g., skill 60% = critical on 01-03) | 01, or matching dice within skill (e.g., skill 60%: 01, 11, 22, 33, 44, 55) |
| **Special Success** | 1/5 of skill rating (e.g., skill 60% = special on 01-12) | Does not exist as a distinct tier |
| **Success** | Within skill, above special threshold | Equal to or below skill, above critical threshold |
| **Failure** | Above skill (with fumble subtracted) | Above skill (with fumble subtracted) |
| **Fumble threshold** | 96-00 if skill <= 100%; 00 only if skill > 100% (or variant: always 00) | 00, or matching dice above skill (mirrors critical trigger) |
| **Critical frequency at skill 50%** | 1/20 = 5% (01-03 rounds to 03, i.e., ~3%) | 01 + 11 + 22 + 33 + 44 = ~5 results in 100 = 5% |
| **Critical frequency at skill 30%** | ~2% (01-02) | 01 + 11 + 22 = ~3 results in 100 = 3% |
| **Critical frequency at skill 80%** | ~4% (01-04) | 01 + 11 + 22 + 33 + 44 + 55 + 66 + 77 = 8 results = 8% |
| **Fumble frequency at skill 50%** | Fixed ~5% (96-00) | 55 + 66 + 77 + 88 + 99 + 00 = 6 results = 6% |
| **Fumble frequency at skill 80%** | Fixed ~5% (96-00) | 88 + 99 + 00 = 3 results = 3% |
| **Special damage types** | Yes - weapon type drives bleeding/crushing/impaling/knockback on special success | No special damage tier; all weapon texture is in base damage dice |
| **Fumble resolution** | Roll on one of four fumble tables (different tables for melee attack, parry, missile, natural weapon) | Handler narrates from a short list of possibilities; no tables |
| **Critical effect in combat** | Max possible damage; ignores armor | Double rolled damage (or alternative: normal damage + bonus effect) |

**Frequency note:** In BRP UGE the critical and fumble windows are fixed (proportional to skill for critical, fixed ~5% for fumble). In Delta Green, both windows **scale with skill level** in opposite directions: a highly skilled combatant (80%) has more criticals and fewer fumbles; a poor combatant (30%) has fewer criticals and more fumbles. This is the key design difference.

---

## Design Effect

### What the matching-dice rule produces at the table

**Recognisability.** Players instantly see matching dice without calculation. "Double numbers, within my skill = critical" is faster to verify than "my skill is 68, so 1/20 rounds to 4, so 01-04 is critical." The cognitive overhead of the BRP UGE method is real; the matching-dice method eliminates it.

**Skill-scaled drama.** High skill rewards mastery with more criticals (the expert who makes the truly exceptional shot more often) while punishing incompetence less harshly (fewer fumbles for the untrained). Low skill characters fumble more and crit less - which is realistic and genre-appropriate. In BRP UGE, a master swordsman and a novice have the same fumble range (96-00), which is slightly counterintuitive.

**Symmetric tension.** The fact that the critical and fumble triggers are structurally identical (matching dice, but above vs. below skill) creates a pleasing symmetry that players grasp quickly. It also means that at any skill level, the probability of a critical always roughly tracks the probability of a fumble from the "other side" of the skill boundary.

**No Special Success tier.** This is the most significant simplification. BRP UGE's three-tier success ladder (critical / special / success) is collapsed to two (critical / success). The special success tier in BRP UGE is the locus of weapon-type tactical differentiation: bleeding from slash weapons, crushing from blunt, impaling from thrusting. Removing the special tier removes all of that. Delta Green replaces it with nothing in the base rules (the optional Called Shot alternatives partially fill the space, but are not equivalent).

**Handler-narrated fumbles.** The absence of fumble tables is a deliberate design choice. Delta Green is an investigation game; the Handler is expected to pick a contextually appropriate catastrophe. This produces more dramatically relevant fumbles ("your lamp falls into the ritual diagram, setting the room on fire") rather than generic table results ("you drop your weapon"). The cost is consistency and the ability to know in advance what could happen.

---

## WSR-Fit Assessment

### Does the matching-dice critical/fumble serve WSR's design goals?

**For the critical trigger: partial fit, with a notable cost.**

The matching-dice critical is faster, more legible, and produces the right scaling effect (skilled fighters crit more often). For WSR's "muscular, decisive, brutal" combat aesthetic (design.md §2.3), making criticals more frequent for skilled warriors serves the pulp feel - Conan connecting with an exceptional blow more often than a city guard does is genre-correct.

The cost is the elimination of the Special Success tier and everything it carries. WSR's combat notes (source-5-combat.md) specifically identified the BRP UGE special success as a critical canonise: "this is the locus of tactical weapon choice without adding rules." The bleeding/crushing/impaling/knockback effects that make weapon choice meaningful in WSR are all triggered by special successes. Delta Green's matching-dice system has no equivalent hook for these effects.

**This is the core adoption problem.** You cannot simply swap in the matching-dice trigger without losing the special success tier and its weapon-type differentiation. The two things are coupled: BRP UGE's three tiers (critical/special/success) produce weapon texture; Delta Green's two tiers (critical/success) do not.

**For the fumble trigger: strong fit.**

The matching-dice fumble, with its skill-scaling behavior (expert fighters fumble less) and Handler-narrated consequences (no tables), fits WSR better than BRP UGE's fumble tables. Design.md §3.1 calls for "GM-facing rules [that] stay lean so a session runs without bookkeeping overhead." Four fumble tables are bookkeeping overhead. Handler narration from a short list of possibilities is leaner and more evocative.

The skill-scaling fumble frequency also fits the design goal of "exceptional but mortal heroes" (design.md §1.2 feature 5): a master warrior is genuinely less likely to catastrophically mis-swing, which feels right.

**Theatre-of-mind compatibility:** Both triggers are fully theatre-of-mind compatible. Neither requires positional information. The matching-dice read is instant. The narrated fumble is richer than a table roll for evocative theatre-of-mind play. Strong fit with design.md §3.1 ("Run online without a VTT").

**Adoption cost analysis:**

Adopting the matching-dice rule wholesale (replacing BRP UGE's critical/special/fumble ladder) would require:
1. Dropping the special success tier and all weapon-type special effects (bleeding, crushing, impaling, knockback, entangling) that depend on it. This is a significant loss. Source-5-combat.md recommended all five as strong canonises.
2. Or: retaining the special effects but re-anchoring them to a different trigger (e.g., any success within 1/5 of skill, independent of matching dice) - creating a hybrid system.
3. Or: adopting only the fumble trigger change (Handler-narrated, matching-dice fumble replacing the four fumble tables) while keeping BRP UGE's critical/special ladder intact.

Option 3 has the lowest cost and the clearest fit: the fumble improvement is pure gain with no loss. The critical change is a harder trade.

### Adoption Recommendation: ADAPT (fumble) / SKIP (critical)

**Fumble: ADAPT.** Replace BRP UGE's four fumble tables with the Delta Green approach: fumble on 00 or any failure where the dice match, with the Handler narrating a contextually appropriate catastrophe from a short guidance list (drop weapon, stumble and fall, hit an unintended target, create a dangerous situation). This is simpler, faster, more evocative, and correctly rewards skilled fighters with fewer fumbles. Retain the four fumble table categories as guidance text for the Handler (melee, parry, missile, natural weapon), but strip them from being formal dice-lookup tables. Per design.md §3.1 (GM rules stay lean) and §2.3 (muscular, decisive, brutal - the fumble should feel like a story beat, not a lookup).

**Critical: SKIP.** Do not replace BRP UGE's critical/special ladder with matching-dice criticals. The critical/special/success three-tier structure is the load-bearing mechanism for weapon-type differentiation in WSR (source-5-combat.md, strong canonise). Losing it to gain legibility is a bad trade. BRP UGE's critical (1/20 of skill) is slightly less legible than matching dice, but not intolerably so - and WSR can include a reference card. The special success tier is too valuable to lose. Per design.md §3.1 ("carry tactical depth in player-facing options, not in resolution complexity") - the special success is exactly that: depth without complexity.

---

## Other Notable Mechanics

### Willpower Points (pp. 47)

Delta Green uses Willpower Points (WP) as a mental fuel resource - distinct from HP - that must be spent to resist persuasion, terror, and exhaustion. Running out causes emotional breakdown (WP 1-2: -20% to all actions; WP 0: collapse and incapacitation). Recovery is through sleep and emotional engagement with personal motivations.

**WSR note:** WSR already has Power Points (PP), which serve as both sorcery fuel and Fate Point currency. A separate WP track would add complexity. However, the WP exhaustion cascade (hitting zero causes collapse) is a design pattern worth noting for how WSR handles PP depletion - the idea that a sorcerer who burns their last PP is suddenly helpless is genre-appropriate.

### Opposed Tests and the "Highest Failure Wins" Rule (p. 45)

When both characters fail an opposed test, "whoever rolled lower succeeds and the other fails (Handler's choice)." The lower failure is treated as a lesser failure - a relative success by default. This is a clean resolution for stalemates.

**WSR note:** BRP UGE handles this with the resistance table. The Delta Green approach is simpler and produces less "nothing happens" outcomes. Could be adopted for non-combat opposed tests in WSR if the resistance table is found to produce too many stalemates.

### Bonds (p. 36 onwards, chargen chapter)

Delta Green uses Bonds as named relationships that degrade when agents miss obligations or suffer trauma. Each SAN loss incident can damage Bonds. Bonds provide mechanical grounding (SAN recovery) and represent the human connections the horror is destroying.

**WSR note:** This is the horror-game version of WSR's "personal codes" and "party cohesion" needs (design.md §3.1, §4.3). WSR does not need the SAN-damage-to-Bonds pipeline, but the concept of named mechanical relationships with degradation/recovery is adjacent to what design.md §3.1 ("hooks for party cohesion") is asking for. Flag for party cohesion design.

### The "Adapting to Violence / Helplessness" SAN mechanic (pp. 35-37, chargen)

Delta Green allows Agents to become "Adapted" to specific SAN stressors (Violence, Helplessness) by logging incidents of SAN loss without breaking. Adapted agents no longer lose SAN from that category of stress but gain a disorder. This is the cost of having seen too much.

**WSR note:** This has already been addressed in decisions.md (SAN adopted as sorcerer-specific Corruption track). Not applicable to warriors/rogues. Noted only because the Adapted mechanic is a clean implementation of "exposure breeds callousness" - relevant to how WSR might handle the Corruption track's long-term erosion of a sorcerer's humanity.

### The Lethality Rating system (pp. 57-59)

Delta Green uses a percentile Lethality test for area weapons and automatic fire. A hit triggers a Lethality roll against the weapon's rating (10-30%); success kills the target outright (drops to 0 HP); failure adds the two dice as HP damage. This replaces rolling many dice or many attacks.

**WSR note:** Not applicable. WSR is ancient-world; no automatic weapons, no grenades, no area-kill firearms. Ancient-world area effects (Greek fire, a collapsing ceiling, a stampede) do not occur frequently enough to warrant a Lethality system. Drop entirely.

---

## Open Questions

1. **Fumble hybrid implementation:** If WSR adopts matching-dice fumbles, does this require changing how fumble probability is explained to players? BRP UGE's "96-00 = fumble" is a fixed reference; matching-dice fumbles require players to understand that the fumble window shifts with skill. A brief explanation and example at the start of the combat chapter will be needed.

2. **The special success trigger under the hybrid:** If WSR keeps BRP UGE's three tiers (critical/special/success) but adopts matching-dice fumbles, the tier descriptions become asymmetric: two of three success levels use fixed fractions of skill, while the fumble uses a different logic. This is not necessarily a problem - players read the success ladder top-down, and fumbles are a failure outcome - but it should be flagged as a potential consistency complaint.

3. **Optional Critical Hit effects (p. 52 sidebar):** Delta Green's optional critical hit list (Stun, Disarm, Called Shot, Prone, Second Attack) is interesting for WSR. These alternatives to "double damage" produce more narratively varied criticals without a special-success tier. Could WSR offer a similar optional list for criticals (in addition to BRP UGE's "max damage" standard) to add combat variety at low rules cost? Flag for the combat chapter drafting stage.

4. **Handler-narrated fumble guidance list:** If WSR adopts narrated fumbles, the GM Book needs a concise guidance list per combat context (melee attack, melee defense/parry, missile attack, unarmed). The Delta Green list (misfire, drop weapon, hit ally, stumble) is a starting point but needs ancient-world flavoring (bowstring snaps instead of gun jam; sandal catches on cobblestone instead of modern stumble equivalents).
