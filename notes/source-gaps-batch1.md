# Source Gaps - Batch 1

**Targets:** Reputation Modifiers table; Fate Points rules
**Reviewed:** 2026-05-09

---

## Summary

Both targets found. Neither required a last-resort search.

**Reputation Modifiers** was on p. 259 - immediately after the Reputation section (pp. 256-258) that the previous dispatch reviewed. It sits at the top of p. 259 just before the Sanity (Option) section opens. The previous dispatch reviewer stopped at p. 258; the table was one page over.

**Fate Points** was in Chapter 5: System (pp. 133-134), not in Chapter 10. The Optional Rule Checklist entry on p. 230 said "Ch. 10" for Fate Points, but that is an error in the source's index annotation or a misread of the checklist. The Fate Points section appears as an optional rule nested inside Chapter 5, under "Skill rating over 100% (Option)" on p. 133. It is genuinely in Chapter 5, not Chapter 10.

**Pages read this dispatch:**
- pp. 242-261 (Chapter 10 in full - era templates through Sanity)
- pp. 228-241 (Chapter 9 in full - confirmed no Fate Points text here beyond the checklist entry)
- pp. 127-141 (Chapter 5: System - Fate Points located on pp. 133-134)

---

## Reputation Modifiers

**Source page:** p. 259 (immediately below the "Tracking Reputation" sub-heading, at the top of p. 259, before Sanity begins)

### Full Table Contents

The table is titled **Reputation Modifiers** and describes the modifier applied to a character's Reputation roll based on the observer's social proximity to the subject.

| Observer is... | Modifier |
|---|---|
| ...from the same family, company, or locality, or has mutual acquaintances. | +25% |
| ...well-traveled, follows gossip/news, is well-connected. | +10% to -25% (range given; presumably +10 to +25 for well-connected, or -25 if out of touch) |
| ...from the same culture or region. | - (no modifier; baseline) |
| ...from outside the character's social network or cultural group, or is out of touch with recent news. | -25% |
| ...from outside the area where the character earned their Reputation, but within the same geographical region, or is of a different generation. | -50% |
| ...from outside of the geographical region where the character earned their Reputation, or many years removed from the character. | -75% |

**Source language (introductory paragraph):**
"Reputation is modified by the social distance of the audience. Usually, Reputation among family, place of employment, and neighborhood or home area is increased. On the other hand, Reputation diminishes with strangers and outsiders. Famous politicians, heroes, and celebrities might be completely unknown in distant places. Similarly, as time goes on, Reputations become less relevant. Add modifiers to a character's Reputation based on the observer's social proximity to them."

**Note on the "+10-25%" row:** The source renders this as "+10-25%" in a single cell, which appears to represent a range. This is the "well-traveled, well-connected" row and the dash is likely a typographic range separator. Best reading: a well-connected observer adds somewhere between +10% and +25% depending on how extensively they follow news and gossip, at GM's discretion.

### Integration with Reputation Rules from source-4-passions-reputation.md

The table fills the gap the previous dispatch noted. Two references in the Reputation text (pp. 257-258) pointed to "Reputation Modifiers" without reproducing it:

1. "Tracking Reputation" section (p. 258): "The gamemaster may, however, modify its chance of success (see **Reputation Modifiers**)."
2. "Identifying Someone" section (p. 258): "Apply any appropriate Reputation bonuses or penalties (see **Reputation Modifiers**) and roll."

The table answers both. It is the full modifier set applied to any Reputation roll - whether identifying someone or augmenting a Communication skill (Impressing Others). The modifier is applied to the Reputation score before rolling, exactly as the Inspiration and Impressing Others mechanics use the resulting number.

**Mechanical flow (complete):**
1. Take subject's Reputation score.
2. Apply Reputation Modifier based on observer's proximity to subject.
3. Roll D100 against modified score.
4. For Identifying Someone: success = recognition; degree of success determines detail of information.
5. For Impressing Others: degree of success then feeds into the Communication skill modifier table (Critical +50%, Special +30%, Success +20%, Failure -20%, Fumble -50%).

### Canonise / Modify / Drop Call

**Modify** - citing design.md §4.1 and §4.5.

The table structure and logic are exactly right for WSR. Social proximity as the modifier axis is genre-correct: a wandering barbarian is famous in his homeland and unknown at the far end of a trade route. The six-row structure is clean and requires no addition.

Two modifications needed for WSR:

1. **Scope framing.** The table uses modern referents ("place of employment," "follows gossip/news"). Rewrite the row descriptions for ancient-world language: "of the same household, company, or quarter" for the +25% row; "widely-travelled, frequents markets and courts" for the well-connected row; etc. The modifier values are unchanged. Citing design.md §1.2 #3 (ancient-world setting).

2. **Temporal modifier note.** The -75% row ("many years removed from the character") is interesting for WSR's campaign model (design.md §4.5: "PCs grow in reputation"). Add a short GM note that Reputation earned long ago - in a different city, in a different era of the PC's life - may attract a temporal penalty even within range. This is a flavour note, not a mechanical change.

The well-connected "+10-25%" range entry should be resolved as GM's discretion and annotated as such in the WSR text. Do not try to formalize it further.

The core modifier framework should go in the **GM Book** section on awarding and using Reputation, as noted in `source-4-passions-reputation.md` (GM Book placement for the Reputation Modifiers table, confirmed now that we have its contents).

---

## Fate Points

**Source pages:** pp. 133-134 (Chapter 5: System, as an optional sub-section following "Skill rating over 100% (Option)" on p. 133)

### Full Rule Text (Paraphrased)

**Framing paragraph:** Fate Points are offered for games where the gamemaster wishes to give players more agency over outcomes. Power points are used as the resource to affect roll results and narrative elements. The source notes this is appropriate for "more action-oriented, high-adventure games with more durable and competent characters" and explicitly warns that "a horror setting should not utilize this system, as a key component of horror is the inability to control one's fate."

**Starting pool:** No starting quantity specified. The rules describe only the spend rates and what can be bought. Starting pool size is not addressed - it appears the assumption is that Fate Points = Power Points (the existing per-character PP total), not a separate tracked resource.

**Basic uses (mandatory suggested uses):**

- **Re-roll any percentile roll.** Cost: 5 power points. Can be declared after seeing the initial result. The second roll is final. Success on the re-roll does not earn an experience check.

- **Ignore a skill and trust fate.** Cost: 5 power points. Instead of a skill roll, make a *Difficult* Luck roll (Luck is a characteristic roll, typically POW x5, at Difficult difficulty meaning the roll is halved). Cannot be used for resistance rolls or characteristic rolls. Success does not earn an experience check and does not modify POW in any way.

- **Ignore 1 point of damage from a single attack.** Cost: 3 power points. The damage point is simply negated. Does not count toward knockback or other effects. The GM may require the player to explain narratively how the damage was avoided ("the steel whiskey flask in my front pocket caught the bullet").

**Extended / gamemaster-approved uses (optional expansions):**

- **Shift a roll result upward.** Cost: 6 power points per step. Can turn a fumble into a failure, a failure into a normal success, a normal success into a special success, or a special success into a critical success. Can only be used on the character's own rolls, not on dice that have been re-rolled. No experience check regardless of result. Declared after rolling.

- **Inflict maximum damage on a single attack.** Cost: power points equal to the entire damage range of the weapon. Example given: a short sword does 1D6+1 damage, so spending 7 power points makes the damage 7 (no roll) plus the damage modifier if applicable. The damage modifier is still rolled normally.

- **Add a narrative detail.** Cost: 1 to 10+ power points at GM's discretion, based on significance. Examples: "remembering" to have brought matches (1 PP); finding a usable dagger in a pile of bones (5 PP, equal to dagger's damage total); having a contact who owes a favor (1-3 PP depending on favor size); finding clean clothing on a line (1 PP); finding car keys hidden over a sun visor in an emergency (6 PP).

**Hard limit:** Any use of power points for Fate Points effects is handled as normal power point expenditure. If reduced to 0 power points, the character is exhausted and faints until regaining at least 1 power point. This means Fate Point use can push a sorcerer (or any character with PP-dependent abilities) into unconsciousness.

### Confirmation: Do Fate Points Share the PP Pool with Sorcery?

**Yes, confirmed explicitly.** The source states: "Any use of power points for these is handled normally, so if reduced to 0 power points, your character is exhausted and faints until regaining at least 1 power point."

There is no separate Fate Point pool. Fate Points are simply a set of things power points can be spent on. The same PP pool that fuels Sorcery spells, Allegiance benefits, and Psychic Abilities also funds Fate Point effects.

**Implication confirmed:** A sorcerer who spends 5 PP to re-roll a die has 5 fewer PP available for casting. Spending PP on Luck effects directly competes with spending PP on spells. This is not a design accident - it is the mechanic.

**PP recovery** (from the Significant Time Intervals table, p. 135):
- Regenerate 1 power point: one power point per hour of sleep, and 1 per two hours awake.
- Regenerate all power points: one game day (24 hours, or equivalent).

So Fate Point expenditures recover at the same rate as sorcery costs. There is no fast-recovery or bonus-regeneration mechanic for Fate Points.

### Defer Call

**Defer.** This decision is explicitly held open per design.md §3.3 ("Luck / Hero Points") and the open question logged in `source-3-gamemastering.md` (Fate Points - are they power-point-based?). The key question is now answered descriptively. The decision of whether to canonise, modify, or drop follows from a broader design choice about the PP pool and sorcery cost. That is design.md §3.3's "Sorcery's cost mechanic" and must be decided when the sorcery chapter notes are integrated.

**The decision space, laid out for when that integration happens:**

**Option A - Canonise as-is (shared PP pool).** The sorcerer's luck and the sorcerer's magic compete for the same resource. A sorcerer who burns PP on luck effects is a sorcerer who has less to cast with. This is mechanically clean and genre-correct for Moorcock-accent play: using luck is spending power, and power is never free. Elric's soul-drinking blade vs. his own life force is the tonal parallel. Cost: the warrior and the rogue also spend PP on luck effects, which depletes their only offensive power resource too - but warriors and rogues use PP very little in the base game, so the cost is lower for them. This creates an asymmetry that may or may not be desirable.

**Option B - Modify: separate Luck Point pool.** Create a small separate pool (e.g., 3 points per session, refreshed per session or per adventure) that operates like BRP's Fate Points mechanically but is distinct from PP. Sorcerers and non-sorcerers are on equal footing. Loss of Luck Points has no bearing on PP or casting. This is how most pulp-genre games handle Hero/Luck points. Cleaner from a design standpoint, but loses the "magic and luck are the same expendable thing" tension. Rename to "Luck Points" for genre fit (design.md §2.3: "Luck / Hero points").

**Option C - Modify: PP-shared pool, but with sorcerer-specific note.** Keep the shared PP mechanic but write the Luck rule with a sidebar flagging that sorcerers feel the cost differently. This preserves the tension without special-casing the mechanic. A notes note (not a rule) telling the player "your luck and your sorcery run on the same fuel" is genre-flavored and mechanically true.

**Option D - Drop Fate Points, design something original.** If the shared-PP mechanic feels wrong and a session-pool mechanic feels too genre-conventional, design a new luck mechanic for WSR from scratch. Risk: adds design work; may not integrate cleanly with BRP's percentile chassis.

**Recommendation (for logging, not a decision):** Option A or C, depending on how sorcery cost is resolved. If sorcery is PP-heavy (which the Chapter 4 notes suggest it is - spells cost POW, losing all POW means death or transformation), then the shared pool is a meaningful constraint that keeps the sorcerer from freely using Luck. If sorcery is designed to be costly-but-survivable, the shared pool makes Luck feel like an additional tax on the most narratively interesting character type. That tension needs resolving at magic chapter review time.

**Rename confirmed:** Whatever is kept, "Fate Points" becomes "Luck Points" in WSR. The BRP term is generic; the WSR term should fit the pulp idiom (design.md §2.3).

---

## Surprises

1. **Fate Points are in Chapter 5, not Chapter 10.** The Optional Rule Checklist (p. 230) lists Fate Points under the "Miscellaneous" category with a source reference, but the actual text lives in the System chapter. The checklist's reference appears to be a categorization note, not a page-location cross-reference. Worth flagging for other dispatches: checklist category labels do not always match chapter location.

2. **No starting Fate Point / Luck Point count specified.** The rules define the spend costs but say nothing about how many PP a character begins with, how a "Fate Points" optional rule interacts with starting PP totals, or whether PCs get bonus PP for taking the optional rule. Starting PP is derived from POW (POW = starting PP), so a character's Luck resource at session start is literally their POW score. A POW 13 character starts with 13 PP and can re-roll twice (10 PP) before hitting the danger zone. A POW 16 sorcerer starts with 16 PP and can cast two or three spells before running dry. This tight economy is significant for the design decision above.

3. **Fate Points explicitly not for horror settings.** The source's own text disrecommends this mechanic for horror. WSR's Moorcock accent is not horror in the SAN-loss sense, but the cosmic doom tone is close enough that this caution is worth noting. If the final WSR design leans hard into cosmic horror (corruption-as-SAN variant, see deferred items in `source-4-passions-reputation.md`), the "trust fate" mechanic may undercut the intended feel. This reinforces the defer call.

4. **The Reputation Modifiers table was one page past the end of the previously reviewed range.** No structural inference needed - it was simply on p. 259, and the previous dispatch reviewed pp. 256-258. The source-4 reviewer flagged it correctly as "referenced but not printed on these pages," and the table was the very next thing after the Reputation section ended.
