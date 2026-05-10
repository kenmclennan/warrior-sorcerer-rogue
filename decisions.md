# Warrior \* Sorcerer \* Rogue - Decision Log

Append-only record of meaningful decisions. Newest at the top. Each entry follows:

- **Date**
- **Title** (what was decided)
- **Context** (the situation/question)
- **Decision** (what we chose)
- **Reasoning** (why - the part that matters most when revisiting later)

If a decision is later overturned, do not delete it. Add a new entry that supersedes it and link back.

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
- **Per-weapon-type crit tables** preserve and *expand* what BRP UGE's Special Success carried (weapon-type damage flavor). They serve `design.md` §2.3 ("muscular, decisive, brutal") at a much higher resolution.
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

**Reasoning:** The shared pool creates a meaningful sorcerer-vs-non-sorcerer tension that is genre-coherent. Per `design.md` §2.2 ("every step into [sorcery] costs something"), every PP a sorcerer spends on a spell is a PP not available to deflect a killing blow - and vice versa. The asymmetry is a *feature*: sorcerer PCs face a real cost-of-luck tradeoff their warrior and rogue companions don't. This also satisfies §3.1 ("stay faithful to BRP's identity") without requiring a parallel mechanic.

---

## 2026-05-09 - Design doc v1 workshopped

**Context:** Needed a "north star" defining the genre, aesthetic, design goals, and player experience before starting chapter-by-chapter extraction.

**Decision:** Workshopped and committed initial `design.md` covering Sections 1-4. Howard-centred sword & sorcery with Leiber-and-Moorcock accents; ancient-world setting with deep cyclic history; pulp-but-mortal tone; costly alien sorcery; theatre-of-mind combat with depth via BRP texture; Player Book / GM Book split; standalone publication under the ORC License.

**Reasoning:** Locking in genre and design intent now prevents drift during the per-chapter extraction work. Each canonise/drop/modify decision will be made against `design.md` as the rubric. Open questions (sorcery cost mechanic, mook rules, death and replacement, lightweight-vs-tactical tension, GM-Book scope, sample setting fragments) are explicitly deferred to chapter-time so we don't design ahead of the source material.

---

## 2026-05-09 - System name: Warrior \* Sorcerer \* Rogue

**Context:** Needed a name that signals sword & sorcery to a player picking the book off a shelf, without locking the system to one author's iconography.

**Decision:** Adopt **Warrior \* Sorcerer \* Rogue** as the system name. Folder and filenames use the kebab-case form `warrior-sorcerer-rogue`.

**Reasoning:** The triad maps cleanly to the three literary inspirations (warrior → Howard, sorcerer → Moorcock, rogue → Leiber) while remaining mechanically agnostic - BRP is classless, and these are *archetypes*, not character classes. The form has rhythm, is easy to remember, and tells a player exactly what kind of game they're holding. Considered alternatives leaned too far into one author's tone ("Smoke & Sorcery" was very Leiber; "Black Sword" was very Moorcock) at the cost of misrepresenting the others.

---

## 2026-05-09 - Source rules: BRP UGE under ORC License

**Context:** Needed an open, permissive ruleset to build on. Wanted a percentile, skill-based system whose mechanics already feel close to the genre.

**Decision:** Use Chaosium's Basic Roleplaying Universal Game Engine (BRP UGE) as released under the ORC License. Source PDF lives in `source/`.

**Reasoning:** BRP is the engine behind Stormbringer/Elric! and the original Conan d20 successors' percentile cousins - the lineage is already aligned with sword & sorcery. The ORC License grants the freedom to remix and republish without negotiating terms. Going classless and skill-based suits the genre's preference for archetype-over-class.

---
