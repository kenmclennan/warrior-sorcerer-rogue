# Warrior \* Sorcerer \* Rogue - Decision Log

Append-only record of meaningful decisions. Newest at the top. Each entry follows:

- **Date**
- **Title** (what was decided)
- **Context** (the situation/question)
- **Decision** (what we chose)
- **Reasoning** (why - the part that matters most when revisiting later)

If a decision is later overturned, do not delete it. Add a new entry that supersedes it and link back.

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
