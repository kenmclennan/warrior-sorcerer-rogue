# Warrior \* Sorcerer \* Rogue - Decision Log

Append-only record of meaningful decisions. Newest at the top. Each entry follows:

- **Date**
- **Title** (what was decided)
- **Context** (the situation/question)
- **Decision** (what we chose)
- **Reasoning** (why - the part that matters most when revisiting later)

If a decision is later overturned, do not delete it. Add a new entry that supersedes it and link back.

---

## 2026-05-12 - Battle Tempo Combat Talent added; Warlord's Eye fixed

**Context:** User asked whether any Fate Point spend let a character improve their DEX for initiative order. None did. The discussion turned on whether to add one as a tenth universal spend or scope it to a Combat Talent.

**Decision:** Add as a Combat Talent in P2 §7.1, not as a universal Fate Point spend.

> **Battle Tempo.** 3 PP. Declare before Phase One Statements. For this round, treat your DEX as +5 for initiative order only. The bonus does not affect skill rolls, Dodge, or damage modifier - it changes the order in which you declare and act, nothing more. Once per combat.

**Reasoning:**

- **Menu discipline.** The Fate Point menu is at nine spends already; a tenth universal spend would strain cognitive load for a benefit that is archetype-specific (rogues and duellists want initiative; priests and merchants generally do not).
- **Genre fit.** Sword & sorcery initiative is preparation, not reflex-burst. A trained fighter with the _Battle Tempo_ talent has the trained reflexes; a generic character does not get to summon them by spending PP.
- **Mechanical envelope.** +5 effective DEX, one round, once per combat - meaningful but not dominant. Costs 3 PP (same as Steady Blade).
- **Talent count.** Combat Talents goes from 10 to 11. Within tolerance; original design target was "~10 per table", not a hard cap.

**Side fix - Warlord's Eye.** The existing Warlord's Eye talent referenced "+20% to their initiative roll this round" - but WSR initiative is determined by DEX order (descending in Phase Three, reverse in Phase One Statements), not by a roll. The "+20%" was a pre-existing inconsistency from BRP-era language. Replaced with "+5 effective DEX for initiative order this round" to match WSR's actual mechanic and Battle Tempo's wording. Critical effect now applies to every ally rather than the slightly ambiguous "the entire party".

**Implications:**

- P2 §7.1: 11 Combat Talents now (was 10). Battle Tempo inserted after Warlord's Eye to group the two initiative-themed talents.
- P5 combat phases unchanged.
- No new Fate Point spend - the menu remains at nine.
- "Initiative roll" was the only legacy phrase of its kind; no other chapter referenced it.

---

## 2026-05-12 - Critical Buy reframed as Fate Point spend; Push Through added; PP-buy terminology retired

**Context:** User review of P4 Action Resolution flagged that Fate Points were "mentioned in the GM section under mass combat rules but not in action resolution" - reading sequentially through P4 §1-§3, they hit the PP-Buy mechanic before the Fate Point system in §6-§7. They observed: "Converting a Success to a Critical is probably a Fate Point system but we would need to consider how it would interact with the other rules there." The PP-Buy was technically a Fate Point spend (same pool, same flavour) but labelled as a separate system, which created a reading-order confusion.

User also identified a real gap: the standard BRP UGE "shift the result one level for 6 PP" spend covers Fumble -> Failure (already handled by Ignore a Fumble at 6 PP), Failure -> Success (no current spend), and Success -> Critical (handled by the variable-cost Critical Buy). The Failure -> Success transition was the genuine missing piece.

**Decision:**

1. **Rename P4 §3 "The PP-Buy: Converting a Success to a Critical" -> "Buying a Critical".** Open the section with one sentence locating it as a Fate Point spend with variable cost: "Buying a Critical is a Fate Point spend with a variable cost - it has its own section because the cost is calculated from the dice rather than being fixed. The Critical Buy draws from the same PP pool as every other Fate Point spend."

2. **Add new Fate Point spend §7.5 Push Through (6 PP).** Converts a Failure on your own roll into an ordinary Success. Cannot apply to a re-rolled die; success does not earn an experience checkmark.

3. **Explicit no-chain rule.** Push Through and Buying a Critical cannot combine on the same roll. A failure forced to success by Push Through is not eligible for a Critical Buy. User's direct words: "you cannot buy your way from a failure to a success to a critical."

4. **Combining-spends rule added to P4 §7 opening.** Each Fate Point spend resolves independently. Multiple spends on a single action are legal where they do not contradict each other (e.g., Steady Blade pre-roll, Shrug Off a Blow post-damage). Two specific restrictions: no spend on a re-rolled die; no Push Through + Critical Buy chain.

5. **Skipped from the BRP version: multi-level shifts (12/18 PP).** WSR pool sizes are too small (~12 PP average) for cascading shifts to be balanced, and the genre needs catastrophic moments to actually matter. Each spend in the menu addresses one specific transition.

6. **Renumber P4 §7.5-§7.8 -> §7.6-§7.9.** Push Through slots in at §7.5 between Ignore a Fumble (§7.4) and Stand Your Ground (now §7.6). External cross-refs to §7.6 Deflect the Killing Blow updated in P5 (Dying Blow section) and PA1 (Band E sidebar).

7. **Terminology sweep.** "PP-buy" / "critical-buy" / "critical buy" -> "Critical Buy" (proper noun for the mechanic) across all chapters. The old terminology suggested a separate system from Fate Points; the new terminology makes the unified Fate Point framework explicit. Files swept: P2, P3, P4, P5, P6, G1, G2, GA1, PA1, PA2. Historical decisions.md entries left as-is (append-only convention).

**Reasoning:** The Fate Point system was always present in P4 §6-§7, but the PP-Buy in §3 read as orphaned because of its own naming and structural separation. Folding it conceptually into the Fate Point menu (while keeping its own section for the math) restores the reading flow. The Push Through addition fills a real gap that BRP UGE addressed with its shift mechanic, but without importing the cascade pricing that would unbalance WSR's smaller pool sizes. The no-chain rule preserves the genre's stake on failure - if every failed roll could become a critical for 9 PP, the system's lethality discipline would erode.

**Implications:**

- P4 §3 renamed; framing paragraph added; new restrictions (no chain with Push Through; no Critical Buy on re-rolled die).
- P4 §6.4 list updated to reflect the unified framing.
- P4 §7 opening rewritten with combining-spends rule.
- P4 §7.5 Push Through inserted; §7.5-§7.8 renumbered to §7.6-§7.9.
- P5 §9 (Dying Blow) cross-ref: §7.6 -> §7.7.
- PA1 §1 (Band E sidebar) cross-ref: §7.6 -> §7.7.
- "PP-buy"/"critical-buy" terminology retired in active chapter text; replaced with "Critical Buy".
- G1 (GM Principles) updated to reference nine Fate Point spend options (was eight).

---

## 2026-05-12 - Skill list additions and Stealth -> Move Quietly rename

**Context:** User review of P3 skill list flagged four gaps and one framing problem:

1. **Survival** - referenced in P2 Cultural Background bonuses (Cold Wilds +15%) but absent from P3.
2. **Animal handling** - Ride exists for mounted use but no skill covers calming, training, or commanding non-mount beasts. Genre-core in Howard and Burroughs (Beastmaster, falconer, snake-charmer territory).
3. **Herbalism / poison handling** - Medicine references herbs as material input but no skill produces them; the apothecary trade had no home.
4. **Sailor** - discovered during the profession audit; referenced in Sea-Raider and Merchant bundles but absent from the skill list. (Latent pre-existing inconsistency.)
5. **Stealth** - name and framing carried commando/ninja baggage that misaligned with the genre's lower-key sneaking. User: "make sure that the skill description (and maybe even name) sets the level of expectation."

**Decision:**

1. **Add Survival** (Mental, base 15%). One skill, no specialities - covers hunting, foraging, water-finding, shelter, weather, route-finding. Resolves the P2 Cultural Background reference.

2. **Add Animal Handling** (Mental, base 05%). Non-mount beasts only; Ride remains the specialised mounted-use skill. A horse-breaker uses Animal Handling to break the horse, then Ride to use it.

3. **Add Craft (Apothecary)** as a new Craft speciality - rather than a top-level skill. Gathers and prepares herbs, salves, antitoxins, sleep-draughts, poisons. Produces consumables that other skills use (Medicine, combat skills, Survival). Distinct from Knowledge (Occult) (theoretical toxicology) and Medicine (bedside treatment).

4. **Add Sailor** (Physical, base 05%). Practical seamanship - rigging, lines, weather at sea, working a vessel. Distinct from Navigate (charts) and Craft (Carpentry/Shipwright).

5. **Rename Stealth -> Move Quietly.** New entry adds explicit failure rules:
   - **Failure is not automatic detection** - it means the character did not conceal their passage, and any alert observer gets a Spot/Listen roll.
   - With no alert observer: success unnoticed, failure inconsequential.
   - With an alert observer: opposed roll, Move Quietly vs Spot/Listen. Higher successful result wins; ties favour the observer.
   - **Fumble is automatic detection** - the GM narrates the specific noise (kicked tankard, snapped branch, etc.).

6. **New G1 §8 Group Stealth and Concealment.** Group rolls Move Quietly at the _worst_ member's rating. Hangouts: opt-out (lag behind, roll separately), Strategy complementary bonus for leadership, individual fumble still detects that member with one-round grace for the rest. Same rule applies to Hide for stationary groups.

**Profession audit (consequence of the skill changes):**

- **Tribal Warrior**: OR slot now "Move Quietly / Animal Handling / Missile Weapon (Bow)" (was Stealth/Navigate/Bow; tribal warriors know their territory, so Navigate was the weakest fit).
- **Sea-Raider**: Stealth -> Move Quietly. Sailor reference now resolves.
- **City Thief**, **Outcast**, **Spy/Infiltrator**: Stealth -> Move Quietly.
- **Wayfarer**: OR slot adds Survival as a third option (Knowledge (Folklore) / Knowledge (History) / Survival).
- **Hunter-Tracker**: dropped Medicine and Sense; added Survival as core, Move Quietly as core, OR slot for Animal Handling / Craft (Apothecary). Profile sharpens: more wild, less physician/supernatural.
- **Scholar of the Dark Arts**: OR slot adds Craft (Apothecary) as a third option.
- **Merchant**: Sailor reference now resolves (no other change).
- Other professions unchanged.

**Talent text in P2 §7.3**: three talents (Shadow's Step, Vanishing Act, Death's Calm) updated to reference Move Quietly. The talent category name "Stealth and Finesse" preserved as a thematic label, not a skill reference.

**Side fix:** P7 §3 armour skill modifier mentioned "Athletics" (which is not a WSR skill). Replaced with concrete examples (Climb, Brawl, Dodge, Move Quietly, Swim).

**Reasoning:** Filling the skill gaps was clarification of what was already implied by the rest of the system - Cultural Background grants Survival, professions assume Sailor exists, Medicine lists herbs as materials. The Move Quietly rename addresses a tone issue: the genre is unsuited to commando-level infiltration mythology, and the new name plus failure-consequence text set the more genre-appropriate expectation that sneaking is a relative skill, not a binary one.

**Implications:**

- Four new skills in P3 (Animal Handling, Sailor, Survival, Move Quietly) + one new Craft speciality (Apothecary).
- Eight profession bundles updated.
- Three talents updated.
- New G1 §8 Group Stealth and Concealment.
- P5 §3 armour penalty list and P7 §3 armour skill modifier updated.
- P6 Cloak of Night spell description updated.
- PA2 examples updated.
- G2 NPC-building guidance updated.

---

## 2026-05-12 - Remove P1 §5.2 Mechanism Inspirations from public credits

**Context:** The original P1 §5 Credits and Attribution chapter included a §5.2 "Mechanism Inspirations" listing four non-ORC published games (Delta Green, Pulp Cthulhu, RuneQuest W&E, Rolemaster Arms Law) as sources of mechanical ideas. User questioned whether this section was legally obligated.

**Decision:** Remove P1 §5.2 entirely. Renumber §5.3 → §5.2 (Literary Inspirations) and §5.4 → §5.3 (Author).

**Reasoning:**

- Game mechanics are not copyrightable in US law (Baker v. Selden; Allen v. Academic Games line). Only the specific text expressing them is. The ORC License only governs the BRP UGE Licensed Material; it has no claim over non-ORC mechanical influences.
- ORC's required notices (Powered by BRP, copyright stack, trademark notice, license text, Reserved/Licensed Material identification, downstream attribution clause) are all in §5.1. Nothing in the license obliges acknowledgment of non-ORC inspirations.
- The provenance trail already exists internally: every mechanism borrowed from a non-ORC source is documented per the 2026-05-10 "ORC + non-ORC borrowing principle" entry in this decision log. That's the authoritative record; the public-facing §5.2 was a courtesy duplicate.
- Naming Delta Green / Arms Law / Pulp Cthulhu in front matter risks the (mistaken) reader assumption that some licensing relationship is involved, which there is not. Silence is the cleaner posture.

**Implications:**

- P1 §5.2 deleted; §5.3 (Literary Inspirations) becomes §5.2; §5.4 (Author) becomes §5.3.
- No external cross-references to the renumbered sections exist (verified by grep across `chapters/` and `decisions.md`).
- No change to the internal borrowing principle - mechanism citations continue to live in `decisions.md` as the project's authoritative provenance record.

---

## 2026-05-12 - Experience checkmarks require successful skill use

**Context:** P1 §2 (how-to-play primer) and P4 §8.1 (canonical experience rule) both described the checkmark trigger as "use a skill in a stressful/uncertain situation" without explicitly stating whether the use had to be successful. P4 §8.1 hinted at the answer via the parenthetical "(without requiring a successful roll)" on its training/immersion exception, but never stated the default rule plainly. User flagged the omission during review of the how-to-play primer.

**Decision:** Checkmarks require **successful** use of the skill under stressful or uncertain conditions. Failure earns nothing. The only exception is the GM-granted checkmark for sustained immersive exposure (training, prolonged practice, deep cultural immersion), which requires no specific roll.

**Reasoning:** This is BRP UGE's traditional rule and the source for the existing wording. Making it explicit prevents tables drifting toward "every dramatic attempt earns a check" (which devalues the mark) or the inverse (which feels punitive). The genre frames competence as earned through results, not effort - heroes are honed by what works, not by what they tried.

**Implications:**

- P1 §2 (how-to-play primer): "_successfully_ use" added; immersion exception flagged with cross-ref to P4 §8.
- P4 §8.1: restructured to state the success requirement plainly, then articulate the immersion exception as exactly that.
- No mechanical change - clarification of the locked rule, not a new rule.

---

## 2026-05-12 - Combat resolution clarification: 01 always-crit; 99 included in the matching-dice set

**Context:** During chapter review, the user flagged that the original Combat Resolution decision (2026-05-10) listed the matching-dice values as `11, 22, 33, 44, 55, 66, 77, 88` without `99`, and that `01 is also a critical`. Both were incompletely expressed in the original decision text.

**Decision:** Clarify the matching-dice rule:

- The full matching-dice set is `11, 22, 33, 44, 55, 66, 77, 88, 99` (nine values).
- A roll of **01 is always a Critical Success**, regardless of skill - the traditional BRP "lucky shot" rule, preserved in WSR.
- A roll of **00 is always a Fumble**, regardless of skill (unchanged from the original decision).
- Other matching-dice rolls (11-99) are Critical if within success range (≤ skill), Fumble if outside (> skill).
- At skill 99+, all nine matching-dice values are Criticals. Below skill 99, the higher matching values are Fumbles.

**Band mapping update:** `99` joins Band E (alongside 66, 77, 88). `01` maps to Band A (the lowest band; the lucky-shot tier).

**Reasoning:** The original entry was an incomplete expression of the locked rule. 01-as-always-crit has been the BRP convention since the system's inception; preserving it is appropriate. 99 is naturally a matching-dice value; omitting it from the listed set was an error. Neither change alters mechanical balance - 99-criticals only matter at skill 99+ (rare under the 75% training cap), and 01-criticals replace what would otherwise be ordinary successes at a rate of one in a hundred rolls.

**Implications for downstream work:**

- P1 §2 (outcome-tier summary) and §4 (how-to-play primer) updated to list 99 and the 01 always-crit.
- P4 §2 intro, §2.1 Critical Success, and §2.2 table updated: 99 added to fumble columns at skill ≤98; new row added for skill 99+; 01 and 00 always-rules surfaced.
- PA1 §1.2 band table updated: 99 added to Band E; 01 maps to Band A.
- The PP-buy mechanic is unchanged (it operates on matching-dice values within success range; 01 cannot be bought-from because it is not a matching pair, and 99 can only be bought-to at skill 99+).

---

## 2026-05-12 - Slavery references swept game-wide (extends the profession removal)

**Context:** The earlier 2026-05-12 "Slave or Freedman profession removed" decision dropped the explicit slavery-themed profession. During subsequent chapter review the user flagged additional slavery references across the books - in PC-side examples, Passion examples, profession descriptions, GM advice examples, and the GA1 worked session walkthrough. User directive: "lets not have slavery references in the game please." Per `design.md` §3.2 ("modernised attitudes - pulp-era prejudices will not survive the port"), the topic is out entirely.

**Decision:** Sweep all remaining slavery references across the chapters. Seven replacements:

- **P2 §11** Significant Possession example: "slave collar I cut off" -> "manacle I cut off the night I escaped" (generic captivity)
- **P2 §7** Hate Passion example: "Hatred of slavers" -> "Hatred of the Pit Lords"
- **P2 §5** Gladiator profession description: "slave, freedman, or voluntary" -> "war-captive, condemned criminal, or voluntary"
- **P7 §1** Wealth tier examples: "slave" -> "captive"
- **G1 §2** Internal Complications example: slaver-merchant scenario -> Pit Lord-buyer scenario
- **GA1 §1** GM session walkthrough (Orryn's arc): "Hatred of slavers" -> "Hatred of the Pit Lords" everywhere; Essa's threat reframed from "sold to a labour contractor" to "sold to the Pit Lords"; three line changes total
- **G7 §2** Fallen Empire generator: "They enslaved on a massive scale" -> "They put conquered peoples to the sword or pressed them into legion service"

**Reasoning:** Per the user's directive and `design.md` §3.2. The Pit Lords substitution (illegal arena operators who kidnap people for forced gladiatorial combat) is a clean antagonist replacement - genre-evocative for sword & sorcery, connects to the existing Gladiator profession, provides the same dramatic weight as slaver-antagonists without invoking slavery as such.

**Implications for downstream work:**

- No further slavery references should be introduced in any chapter. **The Pit Lords are now the canonical "kidnap-for-forced-violence" antagonist faction** for example use.
- War-captives, prisoners, and the briefly-imprisoned are NOT slavery references and remain available as character-background framings (the Gladiator profession explicitly includes "war-captive" as one path).

---

## 2026-05-12 - Slave or Freedman profession removed

**Context:** During chapter review the user identified slavery as a "murky area" they wish to avoid in the game. The "Slave or Freedman" profession in P2 §5 contained explicit slavery framing in its description ("Born into bondage, or freed from it...") and design-note sidebar ("a household slave to a sorcerer knows different things than a galley slave..."). Per `design.md` §3.2 ("modernised attitudes" - "the genre's regrettable... attitudes do not survive the port"), this is exactly the pulp-era content the system avoids.

**Decision:** **Remove the Slave or Freedman profession entirely.** Profession count drops from 14 to 13. The Outcast profession (an "exile, disgraced, fell from a previous profession" archetype with similar Destitute / flexible-build mechanics) already covers the same character-build space without invoking slavery.

**Reasoning:** Per `design.md` §3.2. The Outcast profession provides a "destitute, varied past, flexible skill spread" build option - removing Slave/Freedman does not foreclose any meaningful character concept. A player who wants to play a character with a hard past (an escaped slave, a forced labourer, a prisoner of war freed in a chaos) can build that as an Outcast with the "former profession" framing they choose.

**Implications for downstream work:**

- P2 §5.1 header changed from "The Fourteen Professions" to "The Thirteen Professions."
- P2 §1 chargen overview row updated.
- P2 Reputation table and Starting Equipment table: Slave/Freedman row removed from each.
- `progress.md` chapter table row updated.
- No other chapters reference this profession; no cross-references to fix.

---

## 2026-05-12 - Cultural backgrounds renamed to archetypes ("serial numbers off")

**Context:** The original eight cultural backgrounds in P2 §4 used real-world labels (Mediterranean Coastal, Levantine City-Dweller, Mesopotamian Urban, Persian Imperial, Steppe Nomad, Northern Tribes, Southern Reaches, Island Peoples) with real-world languages (Greek, Aramaic, Phoenician, Akkadian, Sumerian, Cuneiform, Old Persian) and specific cultural signifiers (satraps, fire temples, ziggurats). This conflicts with the locked "no defined setting" decision (`design.md` §3.2): a player choosing "Levantine City-Dweller" in a Hyborian campaign or homebrew setting carries an incongruous label onto the character sheet.

**Decision:** Rename the cultural backgrounds to setting-agnostic archetypes. The §4 intro now explicitly frames them as **"archetypes, not specific cultures"** that the GM names within the campaign setting.

| Old                    | New                      |
| ---------------------- | ------------------------ |
| Mediterranean Coastal  | The Warm Coast           |
| Levantine City-Dweller | The Walled Cities        |
| Mesopotamian Urban     | The Great River Kingdoms |
| Persian Imperial       | The Vast Empire          |
| Steppe Nomad           | The Horse Folk           |
| Northern Tribes        | The Cold Wilds           |
| Southern Reaches       | The Burning Lands        |
| Island Peoples         | The Scattered Isles      |

Real-world languages also genericised (e.g. "Aramaic" -> "the trading tongue of the cities"; "Cuneiform" -> "river-city script"). Real-world cultural signifiers genericised where too specific ("satraps" -> "provincial governors"; "fire temples" -> "sacred fires"; "ziggurats" -> "stepped temples").

**Reasoning:** Serves `design.md` §3.2 (the GM brings the setting). The archetypes preserve all mechanical content (skills, common items, demeanour) and all genre flavour; only the specific real-world labels are removed. The same archetype can be named differently in different campaigns - Hyborian, homebrew, or otherwise.

**Implications for downstream work:**

- PA2 Examples updated: Khess's background changed from "Levantine City-Dweller" to "The Walled Cities."
- `notes/chapter-mapping.md` P2 entry updated with new archetype names.
- Real-world references elsewhere in the books (P1 introduction's genre primer mentioning "Mediterranean, Levantine, Mesopotamian, Persian, Steppe"; P7 Equipment flavour notes; P3 Skills language and script lists; G1's setting framing) are **intentionally left in place**. They serve `design.md` §1.2 #3 ("ancient world setting - Mediterranean, Levantine, Mesopotamian, Persian, Steppe") as pedagogical signposts for the genre register, not as character-sheet labels. Different rule, different treatment.

---

## 2026-05-12 - Character generation simplified: Choose Placement is the only method

**Context:** The 2026-05-11 decision added Method B (Choose Placement) as an optional alternative to Method A (Rolled in Order). On further reflection, the user chose to simplify by making the choose-placement method the default and only method, removing Method A entirely. **This entry supersedes the 2026-05-11 "two methods" entry.**

**Decision:** P2 §2.1 now offers a single method:

- Roll 3D6 seven times.
- Assign each result to a characteristic of your choice.
- SIZ and INT may not be set below 8.

Method A (in-order rolling with 3-point redistribution) is removed.

**Reasoning:** Per `design.md` §3.1 ("focused, opinionated extraction; the books are opinionated"). Offering two methods adds choice without proportional payoff - players read both, compare, then pick. A single clean method respects the reader's time and reinforces WSR's directness. The chosen method gives players agency over placement, produces no power-level difference from the in-order method, and is faster to teach.

**Implications for downstream work:**

- No other chapter affected. Combat, sorcery, equipment, and chargen-downstream steps read the same final characteristic values.
- The 2026-05-11 entry remains in this log per the append-only convention but is superseded.

---

## 2026-05-10 - Publishing pipeline: GitHub Actions to GitHub Pages (deferred to Phase 3)

**Context:** Phase 2 produces Markdown chapters only (per user direction). The question of how to publish them surfaced when the chapters were complete. User preference: GitHub Actions building a styled site to GitHub Pages, rather than local PDF generation.

**Decision:** **Deferred to Phase 3 (Publishing).** Captured here so the direction is recorded.

The rough shape of Phase 3:

- Chapters remain as canonical Markdown in `chapters/`.
- A GitHub Action (likely Pandoc-based, or a static-site generator) builds the chapters into a styled HTML site.
- Output is published to GitHub Pages.
- Styling: sword-and-sorcery flavoured layout with appropriate typography. Specific theme TBD.
- PDF output may be added to the same pipeline later if desired.

**Reasoning:** Markdown is the canonical source; HTML / GitHub Pages is the published artifact. This keeps the editing workflow simple (Markdown only, lint-clean) and pushes presentation concerns to a separate, automatable pipeline. Deferring to Phase 3 keeps Phase 2 closeout focused on Markdown completeness.

**Implications for Phase 3 planning:**

- Choose a static-site generator (Pandoc + custom HTML, Hugo, MkDocs, Eleventy, etc.) or a direct Pandoc-to-HTML pipeline.
- Design the styling (typography, layout, sidebar treatment, table styling, palette).
- Set up the GitHub Action workflow.
- Configure GitHub Pages deployment.
- Decide whether the repo gets pushed to GitHub at this point (currently local-only).

---

## 2026-05-10 - Phase 2 batch 2 chapter-time decisions (P5, PA1, P3, P7)

**Context:** Phase 2 chapter dispatches for P5 Combat, PA1 Critical Hit Tables, P3 Skills, and P7 Equipment all returned together. Each subagent made local chapter-time decisions that need to be locked because downstream chapters and cross-references depend on them.

**Decisions (locked, en bloc):**

1. **Critical severity band mapping.** P5 and PA1 independently converged on:
   - 11 = Band A (mild)
   - 22 = Band B
   - 33 = Band C
   - 44, 55 = Band D
   - 66, 77, 88 = Band E (devastating)
     The matching-dice value of the roll IS the band selector. Within-band entry selection: 1d10.

2. **Status (skill) and Reputation (mechanic) kept separate** (Option A from `notes/chapter-mapping.md` open decisions). Status = standing within a single community (skill in P3); Reputation = fame across cultures (mechanic in P2).

3. **Major Wounds Table contents** are WSR-original, drafted in P5 §5 (20 results, ancient-world prose, no per-location framing). A critical attack's PA1 result may supersede the Major Wounds Table.

4. **Desperate Action folded into Dying Blows.** A character whose actions are spent when the killing blow lands rolls a Difficult (halved) Stamina roll instead of standard Stamina.

5. **PA1 damage-type scope: 3 tables for now (Slash, Pierce, Krush).** Burn and Grapple have interim rules (Burn = Krush one band lower; Grapple = Krush same band) pending later dispatch.

6. **Currency names: Shard / Dram / Stater / Sun** (4 tiers, ascending). Ancient-world flavoured, culturally non-specific. P7 §1.

7. **Encumbrance: STR-based, 4-band penalty system** (P7 §11). ENC values listed for significant items; trivial items accumulate at 10:1. Light tracking, suitable for theatre-of-mind.

8. **Literacy: 0% base, mandatory speciality-by-script** (P3 Literacy entry).

9. **Martial Arts specialities** named after ancient-world traditions (Pankration, Kalaripayattu, etc.) rather than modern names.

10. **Ride absorbs Chariot driving** (speciality: Chariot driver). Drive (vehicle) skill dropped cleanly.

**Reasoning:** All decisions consistent with locked design.md and prior decisions.md entries. The band mapping in particular is load-bearing for the Combat Resolution decision and is now needed for any chapter that interacts with criticals.

**Implications for downstream work:**

- Future chapter dispatches read `decisions.md` and inherit these.
- Burn and Grapple table dispatches can happen anytime after PA1 is done; interim rules are usable immediately.
- P2 Character Creation (forthcoming) inherits the Status/Reputation split, the currency names, and the encumbrance system.

---

## 2026-05-11 - Character generation: Method B "Choose Placement" added as option

**Context:** During chapter review, the user requested an alternative to the default "rolled in order with 3 points redistribution" characteristic generation method. User text: _"Choosing Characteristic Values (Option): Traditionally, characteristics are rolled in order, with up to 3 points redistributed. Instead, you may roll 3D6 seven times and choose where results go. In this case, SIZ and INT cannot be below 8."_

**Decision:** Add **Method B: Choose Placement** as an optional alternative to Method A (the existing in-order method) in P2 §2.1:

- **Method A (default):** rolled in order using 3D6 / 2D6+6 mix; up to 3 points redistributed after rolling; the original WSR rule, unchanged.
- **Method B (option):** roll 3D6 seven times, assign results to characteristics in any order. SIZ and INT may not be set below 8. No redistribution.

**Reasoning:** Player choice. Method A is reactive (the character emerges through the dice); Method B is authorial (the player designs the character and accepts variance on top). The two methods produce roughly equivalent power levels - Method A's 2D6+6 floors SIZ and INT at 8 automatically; Method B replicates that floor as an explicit constraint because all seven rolls are pure 3D6. Offering both costs nothing and respects player taste.

**Implications for downstream work:**

- No other chapter affected. Combat, sorcery, equipment, and chargen-downstream steps (skills, talents, passions) all read the same final characteristic values whichever method was used.

---

## 2026-05-10 - Fate Point spend menu finalised

**Context:** P4 Action Resolution required the WSR-original Fate Point spend menu (per the locked Combat Resolution and Fate Points = PP decisions). Subagent designed the menu drawing on Pulp Cthulhu's structure as inspiration only (mechanism borrowable, prose WSR-original). User reviewed and confirmed the menu plus three chapter-time rulings.

**Decision:** The Fate Point spend menu and its associated rulings are:

| Option                   | Cost                        | Effect                                                                           |
| ------------------------ | --------------------------- | -------------------------------------------------------------------------------- |
| Re-roll                  | 5 PP                        | Re-roll any one roll; second result is final; no experience checkmark            |
| Trust the Fates          | 5 PP                        | Substitute a Difficult Luck roll (POW×5, halved) for a skill roll                |
| Shrug Off a Blow         | 2 PP per point              | Reduce damage of one attack by 1 point per 2 PP spent (minimum 1 damage remains) |
| Ignore a Fumble          | 6 PP                        | Convert a fumble to ordinary failure; complication does not occur                |
| Stand Your Ground        | 2/4/8 PP escalating         | Prevent incapacitation for one more round (cost doubles each round)              |
| Deflect the Killing Blow | All remaining PP (min 8 PP) | Survive a killing blow; drop to 1 HP, fall unconscious but alive                 |
| Steady Blade             | 3 PP                        | Ignore all situational penalties on one roll this round                          |
| Rally From the Wound     | 8 PP                        | Immediately recover 1D6 HP; once per scene                                       |

Confirmed chapter-time rulings:

- **Deflect the Killing Blow** minimum cost is 8 PP (calibrated to WSR's smaller PP pools, max POW typically 10-16).
- **Shrug Off a Blow** cannot reduce damage below 1 (preserves the fiction of being struck).
- **Rally From the Wound** limited to once per scene (prevents HP-battery abuse).

**Reasoning:** Per the locked Fate Points = PP decision. The menu is WSR-original; Pulp Cthulhu's spend categories provided the framework but every option is rewritten for WSR's smaller pool sizes (max ≈ POW) and tonal register. The PP-buy mechanic for criticals (per the Combat Resolution decision) is documented in P4 §3 separately from this menu.

**Implications for downstream work:**

- P5 Combat references this menu for in-combat spends.
- G2 NPCs and Adversaries notes that mooks have no Fate Point access.
- The PP-buy mechanic for criticals is detailed alongside this menu in P4 §3.

---

## 2026-05-10 - Healing magic revision: rare and costly, not absent

**Context:** The original design doc stated "No healing magic" (`design.md` §1.3 and §2.2). The Magic dispatch (`notes/source-8-magic.md`) flagged BRP Magic's Heal spell as a mandatory drop on this basis. The user amended this position: healing magic IS permitted, as long as it is not the _expected_ or _default_ way to heal.

**Decision:** Revise the position on healing magic:

- **Routine healing magic remains rejected** - no white mage Cure spells, no out-of-combat heal-to-full mechanics, no D&D-style hit-point batteries.
- **Sorcerous healing is permitted** as rare, costly, dramatic spells in the Sorcery list. Examples could include "Mend the Mortal Frame" (sorcerer pays Corruption / PP / patron debt to knit a wound) or "Vampire's Kiss" (heal yourself by draining another character's vitality).
- **Naturalistic healing remains the default** - herbs, rest, salves, time. The Player Book's healing rules are built around this; sorcerous healing is a chapter-time addition to the Sorcery spell list, not a separate healing chapter.
- `design.md` §1.3 and §2.2 wording updated to reflect this.

**Reasoning:** Per the user: "I think it is OK to have healing magic as long as it's not expected that this is the main way to heal in the game." The genre-fit case is strong - Howard's Conan stories use healing potions and salves; Moorcock's Elric draws health from Stormbringer at terrible cost; Leiber has tavern wenches with herbal cures. The locked sorcery cost architecture (PP / Patron / Corruption) already enforces cost, so healing-themed sorcery spells fit cleanly without a new mechanic.

**Implications for downstream work:**

- The Sorcery spell list (P6) may include 1-3 healing-themed spells, each paying the standard sorcery cost.
- The dropped secondary Magic system (`decisions.md` 2026-05-09 "Magic (secondary system) dropped") remains dropped - this revision is about Sorcery, not about reviving the alternate system.
- The Hazards chapter (G6) and Equipment chapter (P7) keep naturalistic healing (herbalism, salves, etc.) as the default mechanism.

---

## 2026-05-10 - Chapter extraction order finalised

**Context:** Phase 1 produced the chapter mapping (`notes/chapter-mapping.md`). Sequencing the extraction order for Phase 2 requires balancing dependencies (chassis-first), risk (new mechanics need early validation), and value (a playable subset emerges quickly).

**Decision:** Extraction order is set as recorded in `progress.md`'s "Phase 2: Chapter Extraction" table.

**Player Book (in order):**

1. P4 Action Resolution
2. P5 Combat
3. PA1 Critical Hit Tables
4. P3 Skills
5. P7 Equipment
6. P6 Sorcery
7. P2 Character Creation
8. P1 Introduction
9. PA2 Examples

**GM Book (in order):** 10. G1 Running the Game 11. G2 NPCs and Adversaries 12. G4 NPC Sorcery and Patrons 13. G3 Bestiary 14. G5 Treasure and Artifacts 15. G6 Hazards and Spot Rules 16. G7 The Deep Past 17. GA1 GM Examples

**Reasoning:**

- **Chassis first.** P4 Action Resolution is the foundation everything references. Must be first.
- **High-risk early.** P5 Combat locks our biggest new mechanic (matching-dice criticals + weapon-type crit tables). Drafting it second surfaces design problems while there is still time to recover.
- **Heavy prose content immediately follows.** PA1 Crit Tables is 150-250 prose entries - tackling it third validates the combat mechanic with actual content under load.
- **Reference chapters next.** P3 Skills and P7 Equipment establish the vocabulary Character Creation will use.
- **Sorcery before Chargen.** P6 must be drafted before P2 because chargen for sorcerer-archetype PCs depends on the sorcery rules being concrete.
- **Introduction and Examples last.** They synthesise the rest.
- **Player Book before GM Book.** A playable subset emerges as soon as the Player Book chapters are done; the user can run sessions before the GM Book is complete.

---

## 2026-05-10 - GM Book chapter G8 (Sample Material) dropped; sample adventures deferred to separate product

**Context:** During chapter mapping (Task 3 of Phase 1, output `notes/chapter-mapping.md`) the proposed GM Book chapter G8 "Sample Material" (sample city, cult, ruin, patron NPC, short scenario) was flagged as conditional because it risked implicit setting creep against the locked "no defined setting" position (`design.md` §3.2).

**Decision:** **Drop G8 from the GM Book.** The core Player Book and GM Book remain setting-light. They provide tools (GM Book G7 generators for fallen empires, cataclysms, ruins; G2 NPC creation; G4 patron design) but no specific named content.

**Future commitment:** Sample adventures and setting fragments will be packaged as a **separate product (or supplement)** released after the core Player Book and GM Book ship. Likely contents: a sample port city, a sample cult, a sample lost ruin, a sample fully-detailed patron NPC, and a short one-shot scenario. Format: either bundled as a single supplement or released as small individual PDFs.

**Reasoning:** Per `design.md` §3.2 ("the GM brings the setting") and the established borrowing principle that the books are opinionated and focused. Sample material in the core books undermines that discipline. Packaging it separately preserves the purity of the core release while acknowledging the genuine onboarding value of sample content for new GMs.

---

## 2026-05-10 - Borrowing principle: mechanisms only from non-ORC sources

**Context:** The project is now mining four BRP-derived sources beyond BRP UGE itself: Pulp Cthulhu, Delta Green Agent's Handbook, RuneQuest Weapons & Equipment, and Rolemaster Arms Law. Of these, **only BRP UGE is ORC-licensed**. The others are commercial copyright (Chaosium / Arc Dream / Iron Crown).

**Decision:** Establish the working principle for cross-source borrowing:

- **BRP UGE content:** may be reproduced largely verbatim under the ORC License with proper attribution.
- **Non-ORC sources** (Pulp Cthulhu, Delta Green, Rolemaster Arms Law; RuneQuest W&E status to be verified): **mechanisms are borrowable, but rules text and tables must be WSR-original.** We do not reproduce stat blocks, table contents, or rules paragraphs verbatim.
- **For each non-ORC borrow:** cite the source mechanism in `decisions.md`; write the WSR rule in our own words; author WSR-original tables and entries.

**Reasoning:** Game mechanics are not copyrightable; specific expression is. Re-implementing the _idea_ (e.g. "mooks are incapacitated at half HP") in WSR-original prose is legally clean. Reproducing a table verbatim or copying a rules paragraph is not. This principle protects the project at publication time and keeps every borrowed mechanic's lineage transparent in the decision log.

---

## 2026-05-10 - Mook rule: borrow Pulp Cthulhu mechanism

**Context:** BRP UGE has no native mook handling. Both `notes/source-5-combat.md` and `notes/source-14-npc-digest-customizing.md` confirmed the gap. `notes/pulp-cthulhu.md` found a clean, two-paragraph borrow.

**Decision:** Adopt the Pulp Cthulhu mook mechanism (mechanism only, WSR-original rules text):

- A mook is automatically **incapacitated** when reduced to half their hit points by any combination of hits. No further damage rolls or wound effects.
- Mook stat blocks use averaged characteristics. Mooks have no Fate / Power Pool to spend on luck.
- "Look Out Master!" - a villain may spend their remaining PPs to have a nearby mook take a hit instead, killing the mook.

**Reasoning:** Per `design.md` §2.3 ("ordinary foes go down quickly and don't drag fights out") and §3.1 ("rules text uncluttered"). Mooks are simpler, not more complex. Look Out Master is dramatic and reinforces villain PP depletion as a pacing tool.

---

## 2026-05-10 - Talent system: borrow Pulp Cthulhu structure

**Context:** Character distinctiveness without classes (per `design.md` §3.1) is a watch-item. `notes/source-2-characters.md` flagged BRP UGE's distinctiveness mechanisms as "shallow without Passions." `notes/pulp-cthulhu.md` identified Pulp Talents as "better than anything in BRP UGE" - 4 tables of 10 talents each, choose 2 at chargen, talents gate PP spends.

**Decision:** Borrow the **Pulp Talents structural model** (mechanism only, WSR-original talent list):

- Multiple themed tables of talents (likely 4 tables, ~10 talents each: Combat / Sorcery / Stealth & Finesse / Social & Cunning - exact tables defined during chapter drafting).
- Each PC chooses 2 talents at chargen, with structural constraints (e.g. one per allowed table; sorcerer-only talents restricted to sorcerer PCs).
- Each talent enables a specific PP-spend ability (exact costs and effects designed in Phase 2).
- Additional talents may be earned through play.

**Reasoning:** Per `design.md` §3.1 (character distinctiveness watch-item). The combinatorial structure (4 tables of 10 = 780 unique 2-talent pairs) creates strong PC differentiation without classes. PP-gated activations compound with the locked Fate Points = PP architecture - every talent spend competes with sorcery, luck, and crit-buying.

---

## 2026-05-10 - Equipment chapter: borrow extensively from RuneQuest W&E

**Context:** `notes/source-13-equipment.md` found BRP UGE's equipment chapter ~70% out of scope, with major gaps: no mundane gear list, no ancient currency, only bare-minimum mounts/vehicles. `notes/runequest-weapons-equipment.md` provides extensive ancient-world content that fills these gaps.

**Decision:** Borrow extensively from RuneQuest W&E (mechanisms and category structures only - WSR-original tables):

- **Mundane gear:** WSR-original tables across 9 categories (clothing, tools, writing supplies, containers, light sources, rope, adventuring supplies, food/drink, herbs, musical instruments). Stats: cost (in WSR coins), ENC.
- **Currency:** WSR-original 4-tier coin system (denominations and names TBD during chapter drafting; ancient-world-flavored).
- **Weapons:** add ~11 weapons missing from BRP UGE that RuneQuest covers (khopesh, falchion, whip, combat net, composite bow, etc.) - WSR-original stat blocks.
- **Armour:** expand with RuneQuest's ancient-world types (linothorax, gambeson, lamellar variants) - WSR-original AP values, converted from per-location to single-AP per the locked Major Wounds decision.
- **Material tiers:** adopt copper / bronze / iron quality tiers as a WSR mechanism (damage and durability variations).
- **Mounts, vehicles, watercraft:** WSR-original tables for the categories RuneQuest provides.
- **Hirelings, inn prices:** WSR-original price tables, structure inspired by RuneQuest.

**Reasoning:** Per `design.md` §1.2 #3 ("ancient world setting") and §3.1 ("Equipment is bronze-and-iron-age"). RuneQuest is BRP UGE's closest cousin and fills our equipment gaps with genre-coherent material we would otherwise design from scratch.

---

## 2026-05-10 - Iron-vs-sorcery rule: borrow

**Context:** RuneQuest W&E's iron-vs-sorcery penalty (`notes/runequest-weapons-equipment.md`) imposes -5% sorcery skill per ENC of unenchanted iron carried. The mechanic was flagged as genre-resonant and complementary to the locked sorcery cost architecture (PP / Patron Score / Corruption).

**Decision:** Adopt the iron-vs-sorcery penalty (mechanism only, WSR-original rules text):

- Carrying unenchanted iron disrupts sorcery. Each ENC of unenchanted iron borne by the sorcerer imposes a **-5% penalty on all sorcery rolls**.
- Enchanted iron items (ritually consecrated to a patron, or otherwise harmonised with the sorcerous current) do not impose this penalty.
- Bronze, copper, stone, leather, wood etc. carry no penalty.

**Reasoning:** Per `design.md` §2.2 ("magic is alien, costly, and corrupting"). "Cold iron disrupts magic" is canonical to sword & sorcery (Howard, Moorcock, folklore broadly). Mechanically it gives sorcerer PCs another visible reason to travel light, eschew armour, and depend on bronze - a real difference between sorcerer and warrior PCs at the table.

---

## 2026-05-10 - Combat resolution: matching-dice criticals + weapon-type tables; matching-dice fumbles

**Context:** BRP UGE uses a percentile system with five outcome tiers: Critical (1/20 of skill), Special (1/5 of skill), Success, Failure, Fumble. The Special and Critical tiers carry weapon-type damage results. The Special-Success calculation (1/5 of skill) is mental-arithmetic-heavy at the table. We considered replacements after reviewing Delta Green's matching-dice mechanism (`notes/delta-green.md`), Rolemaster Arms Law's per-weapon critical tables (`notes/rolemaster-arms-law.md`), and an audit of where Special Success has mechanical effect outside combat (`notes/special-success-audit.md`, verdict: mostly combat, with five clean non-combat exceptions).

**Decision:** Replace BRP UGE's Critical + Special two-tier ladder with a **single Critical tier triggered by matching dice within success range**, plus weapon-type critical tables for the effects. Fumbles use the Delta Green matching-dice trigger.

Specifically:

- **Critical trigger:** a roll that is both a success (≤ skill) AND a matching-dice value (11, 22, 33, 44, 55, 66, 77, 88). At skill 30, only 11 and 22 crit; at skill 90, all eight do. (00 is not a critical - it's the always-fumble.)
- **Fumble trigger:** 00 OR a matching-dice failure (where the roll is > skill). At skill 30, rolls of 33, 44, 55, 66, 77, 88, 99 fumble (plus 00).
- **PP-buy mechanic:** a player who rolled a normal success may spend Power Points equal to `(current_roll - nearest_lower_matching-dice_value)` to convert their roll to that critical. The double must still be within their success range (≤ skill). A failed roll cannot be PP-bought into a critical.
- **Effects:** weapon-type critical tables inspired by Rolemaster Arms Law, with severity bands A-E (mapping to roll bands within the success range - the higher the matching-dice value, the more powerful the band). WSR-original prose results per band. Damage types initially: Slash, Pierce, Krush. Possibly Burn and Grapple if scoped.
- **Non-combat criticals:** five BRP UGE skills had numerically meaningful Special Success effects (First Aid, Medicine, Teach, Cooperative Rolls, Jump). Under the new model their previous Special Success outcomes simply become their Critical outcomes - no new mechanics, just explicit "Critical:" rulings in the Skills chapter.

**Reasoning:**

- **Simpler arithmetic** at the table: matching dice is recognised at a glance vs. computing 1/5 of skill. Serves `design.md` §3.1 (theatre-of-mind, lean rules).
- **Skill-scaled criticality** without lookups: a higher-skill character has more matching-dice values within their success range, so they crit more (and fumble less) automatically.
- **PP-buy is a meaningful new use** for Power Points, compounding with the locked Fate Points = PP architecture and the Patron Score / Corruption layers. Sorcerer PCs face an even sharper tradeoff: spend PP to push for a critical, leave less for spells.
- **Per-weapon-type crit tables** preserve and _expand_ what BRP UGE's Special Success carried (weapon-type damage flavor). They serve `design.md` §2.3 ("muscular, decisive, brutal") at a much higher resolution.
- **Rolemaster Arms Law is INSPIRE ONLY**: adopt the A-E band concept and prose result format, not the resolution chassis. WSR-original tables (estimated 150-250 prose entries to author across damage types).
- **The five non-combat skills** are well-bounded; collapsing their Special Success effects into Critical effects is a clean port (per `notes/special-success-audit.md`).

**Implications for downstream work:**

- Combat chapter (Player Book) describes the matching-dice trigger, fumble trigger, PP-buy mechanic, and how to read the crit tables.
- Crit tables themselves live in an appendix or dedicated end-of-Player-Book section (Phase 2 prose work, sized 150-250 entries).
- Five non-combat skills (First Aid, Medicine, Teach, Cooperative Rolls, Jump) carry one-line "Critical:" rulings in the Skills chapter.

---

## 2026-05-09 - Magic (secondary system) dropped entirely

**Context:** BRP UGE Chapter 4 has two magic systems: Sorcery (pp 87-102, our primary) and Magic (pp 56-70, the alternative). The Magic dispatch (`notes/source-8-magic.md`) recommended keeping ~5-9 spells as a "hedge magic" sub-system for cunning-folk archetypes, while a hard drop was option A.

**Decision:** **Drop Magic entirely.** WSR has one magic system: Sorcery.

**Reasoning:** Per `design.md` §3.1 ("focused, opinionated extraction") and §3.2 ("maximise optional rules" - we will not). Keeping a second magic system, even a minimal one, adds complexity without proportional payoff. The cunning-folk / village-wisewoman archetype can still exist in fiction without dedicated mechanics - using sparing sorcery, herbal healing (per §1.3), and personality. The Vision spell from Magic is genre-resonant; if a Sorcery equivalent is missed, port it into the Sorcery spell list during chapter drafting.

---

## 2026-05-09 - Allegiance canonised as optional Patron Score for sorcerers

**Context:** The Allegiance dispatch (`notes/source-9-allegiance.md`) recommended canonising Allegiance as a stripped, renamed Patron Score mechanic restricted to sorcerers, addressing the "patron debt" sorcery cost option without WSR-original design. The PP reserve benefit interacts beautifully with the locked Fate Points = PP decision.

**Decision:** **Canonise Allegiance** as the Patron Score mechanic, with the proviso that **patrons are an optional facet of sorcery** - a sorcerer can choose to enter a patron compact (gaining the mechanical benefits and burdens) or remain unaligned. Apotheosis is deferred to GM Book optional arcs.

**Reasoning:** Per `design.md` §2.2 ("debts to powers" as one cost option). Keeping it optional preserves player choice: not every sorcerer is Elric. Some are independent operators who borrow power without committing. Mechanically: the Patron Score mechanic appears in the Player Book as an opt-in chargen choice for sorcerer-archetype PCs.

---

## 2026-05-09 - Sanity adopted as sorcerer-specific Corruption track

**Context:** The Sanity dispatch (`notes/source-12-sanity.md`) recommended adopting SAN as a sorcerer-specific corruption track (Option B), restricted to sorcerers and reframed away from cosmic horror toward Moorcock-doom corruption. Non-sorcerers would have no track at all.

**Decision:** **Adopt SAN as a sorcerer-specific Corruption track.** Non-sorcerers have no Corruption track - their genre register is Howard's blood-and-bone, not Lovecraft's shattered psyche. Sorcerers accumulate Corruption through casting, demonic encounters, and exposure to the deep past. The "Blasphemous Lore caps max SAN downward" rule is preserved (deeper sorcery = closer to the edge). The "defeating the source" recovery rule is canonised.

**Reasoning:** Per `design.md` §2.2 ("magic is alien, costly, and corrupting") and §1.1 (Moorcock-doom accent for sorcerous scenarios). Restricting to sorcerers keeps warriors and rogues tonally Howard while letting sorcerers tip into Moorcock's doom. Together with Fate Points = PP and the Patron Score canonisation, this completes the sorcery cost architecture: PP (immediate, shared with Fate), Patron Score (relational, optional), Corruption (permanent, sorcerer-only).

---

## 2026-05-09 - Combat: Major Wounds as default, no per-location HP

**Context:** BRP UGE explicitly states hit locations and Major Wounds are mutually exclusive systems. The Combat dispatch (`notes/source-5-combat.md`) confirmed this. We needed to pick one as the WSR default and decide whether to keep the other as an optional rule.

**Decision:** Adopt **Major Wounds as the canonical wound system**. Per-location HP is **not** included, even as an optional rule. Creature Hit Location Tables (pp. 299-303 of the source) are dropped accordingly.

**Reasoning:** Major Wounds aligns with `design.md` §2.3 (combat aesthetic - "muscular, decisive, brutal"): a single threshold that can drop a PC creates the right cinematic threat without per-location bookkeeping. Per-location HP hurts theatre-of-mind play (§3.1) and adds tactical complexity that requires rules-mastery rather than fictional engagement (§3.1). Per `design.md` §3.1 ("focused, opinionated extraction") and §3.2 ("maximise optional rules" - we will not), the book is opinionated. We do not preserve per-location HP as optional.

---

## 2026-05-09 - Fate Points share the Power Point pool

**Context:** `notes/source-gaps-batch1.md` confirmed (per the source rules at pp. 133-134) that BRP UGE's Fate Points draw from the same Power Point pool as sorcery. There is no separate Hero / Luck point pool. The choice was: keep this asymmetry, or design a separate pool so every PC has equal access to luck spends.

**Decision:** Adopt the source-default behavior - **Fate Points share the PP pool with sorcery**. No separate Hero Point pool. The asymmetry between sorcerer and non-sorcerer PCs is intentional.

**Reasoning:** The shared pool creates a meaningful sorcerer-vs-non-sorcerer tension that is genre-coherent. Per `design.md` §2.2 ("every step into [sorcery] costs something"), every PP a sorcerer spends on a spell is a PP not available to deflect a killing blow - and vice versa. The asymmetry is a _feature_: sorcerer PCs face a real cost-of-luck tradeoff their warrior and rogue companions don't. This also satisfies §3.1 ("stay faithful to BRP's identity") without requiring a parallel mechanic.

---

## 2026-05-09 - Design doc v1 workshopped

**Context:** Needed a "north star" defining the genre, aesthetic, design goals, and player experience before starting chapter-by-chapter extraction.

**Decision:** Workshopped and committed initial `design.md` covering Sections 1-4. Howard-centred sword & sorcery with Leiber-and-Moorcock accents; ancient-world setting with deep cyclic history; pulp-but-mortal tone; costly alien sorcery; theatre-of-mind combat with depth via BRP texture; Player Book / GM Book split; standalone publication under the ORC License.

**Reasoning:** Locking in genre and design intent now prevents drift during the per-chapter extraction work. Each canonise/drop/modify decision will be made against `design.md` as the rubric. Open questions (sorcery cost mechanic, mook rules, death and replacement, lightweight-vs-tactical tension, GM-Book scope, sample setting fragments) are explicitly deferred to chapter-time so we don't design ahead of the source material.

---

## 2026-05-09 - System name: Warrior \* Sorcerer \* Rogue

**Context:** Needed a name that signals sword & sorcery to a player picking the book off a shelf, without locking the system to one author's iconography.

**Decision:** Adopt **Warrior \* Sorcerer \* Rogue** as the system name. Folder and filenames use the kebab-case form `warrior-sorcerer-rogue`.

**Reasoning:** The triad maps cleanly to the three literary inspirations (warrior → Howard, sorcerer → Moorcock, rogue → Leiber) while remaining mechanically agnostic - BRP is classless, and these are _archetypes_, not character classes. The form has rhythm, is easy to remember, and tells a player exactly what kind of game they're holding. Considered alternatives leaned too far into one author's tone ("Smoke & Sorcery" was very Leiber; "Black Sword" was very Moorcock) at the cost of misrepresenting the others.

---

## 2026-05-09 - Source rules: BRP UGE under ORC License

**Context:** Needed an open, permissive ruleset to build on. Wanted a percentile, skill-based system whose mechanics already feel close to the genre.

**Decision:** Use Chaosium's Basic Roleplaying Universal Game Engine (BRP UGE) as released under the ORC License. Source PDF lives in `source/`.

**Reasoning:** BRP is the engine behind Stormbringer/Elric! and the original Conan d20 successors' percentile cousins - the lineage is already aligned with sword & sorcery. The ORC License grants the freedom to remix and republish without negotiating terms. Going classless and skill-based suits the genre's preference for archetype-over-class.

---
