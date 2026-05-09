# Warrior \* Sorcerer \* Rogue - Decision Log

Append-only record of meaningful decisions. Newest at the top. Each entry follows:

- **Date**
- **Title** (what was decided)
- **Context** (the situation/question)
- **Decision** (what we chose)
- **Reasoning** (why - the part that matters most when revisiting later)

If a decision is later overturned, do not delete it. Add a new entry that supersedes it and link back.

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
