# Warrior \* Sorcerer \* Rogue - Progress

## Status legend

- `[ ]` To do
- `[~]` In progress
- `[x]` Done

---

## Project setup

- [x] Pick system name
- [x] Create project folder structure
- [x] Download source PDF (BRP UGE, ORC License)
- [x] Outline design, decision, and progress documents
- [x] Create CLAUDE.md
- [x] Workshop design doc (genre, aesthetic, design goals, player experience)
- [x] Enumerate chapters from source PDF
- [x] Plan chapter-extraction order

---

## Phase 2: Chapter Extraction

Chapters in book order (single-book structure as of 2026-05-21). Each chapter publishes as a separate PDF in `chapters/`.

| #   | Chapter                      | Side     | Status |
| --- | ---------------------------- | -------- | ------ |
| 1   | P1 Introduction              | Player   | `[x]`  |
| 2   | P2 Character Creation        | Player   | `[x]`  |
| 3   | P3 Skills                    | Player   | `[x]`  |
| 4   | P4 Action Resolution         | Player   | `[x]`  |
| 5   | P5 Combat                    | Player   | `[x]`  |
| 6   | P6 Sorcery                   | Player   | `[x]`  |
| 7   | P7 Equipment                 | Player   | `[x]`  |
| 8   | P8 NPCs and Adversaries      | GM       | `[x]`  |
| 9   | P9 Bestiary                  | GM       | `[x]`  |
| 10  | P10 NPC Sorcery and Patrons  | GM       | `[x]`  |
| 11  | P11 Treasure and Artifacts   | GM       | `[x]`  |
| 12  | P12 Hazards and Spot Rules   | GM       | `[x]`  |
| 13  | P13 The Deep Past            | GM       | `[x]`  |
| 14  | PA1 Critical Hit Tables      | Appendix | `[x]`  |
| 15  | PA2 Play Examples            | Appendix | `[x]`  |
| 16  | PA3 Inspirational Influences | Appendix | `[x]`  |
| 17  | PA4 Names                    | Appendix | `[x]`  |
| 18  | PA5 GM Examples              | Appendix | `[x]`  |

The two-book structure (Player Book + GM Book) was collapsed into a single book on 2026-05-21. The old G1 Running the Game chapter was dropped at the same time; theatre-of-mind combat and group stealth migrated into P12 §§10-11.

---

## Watch-items for source PDF review

When reading through BRP UGE, keep a specific eye out for:

1. **Mechanisms that make characters feel distinctive without classes.** Backgrounds, cultures, distinguishing features, personality / passion mechanics, signature skills - anything that gives a class-less character a unique feel. Note what BRP UGE provides natively, and what we will need to design or borrow. (Per design.md §3.1.)
2. **Mechanisms that bind a party together.** Shared histories, common enemies, mutual debts, cooperative or combo abilities that trigger when PCs work together. Note BRP UGE features and gaps. (Per design.md §3.1.)
3. **Mook / minion rules.** Whether the source provides streamlined rules for handling ordinary foes, or we need to borrow from a sibling BRP system. (Per design.md §2.3, §3.3.)
4. **Sorcery cost mechanics.** What BRP UGE offers (sanity, corruption, fatigue, debt-to-power systems) before we commit to one for the magic chapter. (Per design.md §2.2, §3.3.)

---

## Open questions / blockers

- **PA1 Critical Hit Tables: lethality needs softening.** Initial draft (commit `5937091`) is too brutal, especially given PCs will be on the receiving end. Revisit before Phase 2 closeout - likely tweak Band E severity downward, possibly also Band D. Rolemaster's lethality gradient is intentionally extreme; WSR wants pulpier survivability while preserving cinematic teeth.
- **Burn and Grapple crit tables not yet written.** PA1 currently uses interim rules (Burn = Krush one band lower; Grapple = Krush same band). A focused dispatch can author the proper tables when convenient.

---

## Done log

_Significant completed work (older items move here as the active sections get crowded)._

- **2026-05-10:** **Phase 1 complete.** Source review (BRP UGE + Pulp Cthulhu + Delta Green + RuneQuest W&E + Rolemaster Arms Law), 11 locked design decisions, 17-chapter mapping with extraction order. Phase 1 plan archived to `plans/2026-05-09-phase-1-source-review.md`.
- **2026-05-10:** **P6 Sorcery (player-facing) complete.** 8,818 words; 29 spells with WSR-original tone descriptions; full cost trio (PP, Patron Score, Corruption) mechanically specified; iron-vs-sorcery cross-referenced to P7; 2 healing spells (Mend the Mortal Frame, Vampire's Kiss) each with mandatory Corruption cost; player-side demon summoning procedure drafted. P2 Character Creation now unblocked.
- **2026-05-10:** **P2 Character Creation complete.** 8,205 words; 8 cultural backgrounds; 14 professions; 40 WSR-original talents (4 tables x 10); Passions (mandatory, 3 at chargen) + Reputation mechanics; sorcerer-specific step with POW threshold, patron compact, starting Corruption.
- **2026-05-10:** **G1 Running the Game complete.** 6,643 words; 7 sections covering genre primer (Howard/Leiber/Moorcock with named works), session structure (hook/complications/reckoning), 5 GM principles, Passions-based session zero, theatre-of-mind combat guidance, pacing (within session and across campaign), lightweight-vs-tactical tension.
- **2026-05-10:** **G4 NPC Sorcery and Patrons complete.** 9,906 words; 8 sections; 5 sample NPC sorcerers (Cult Leader, Court Mage, Hermit, Witch-Queen, Apprentice-Risen); 7 sample patrons (Drowned Goddess, Faceless One, Charnel Heir, Set the Serpent, Empty Throne, Plague-Bride, Brass Warden); ritual magic with Chain of Being procedure; demon binding deep-dive including escape clauses; Brazier of Power campaign rules; Apotheosis arc with score reduction tools.
- **2026-05-10:** **G3 Bestiary complete.** 12,149 words; 7 sections; 12 mortal beasts (lion, tiger, wolf/pack, bear, boar, 2 snakes, giant spider, crocodile, eagle, mammoth, sabre-tooth cat); 7 undead (skeleton, zombie, mummy+sorcerer variant, ghoul, vampire, ghost, wight); 7 fantasy beasts (dragon, giant, minotaur, werewolf, troll+trollwife, centaur, griffin); 3 demon entries (Lesser, Greater, Yog-Hath sample named greater demon); 4 elementals (air, earth, fire, water) reframed as alien intelligences; 20-entry Chaotic Features table weighted toward qualitative narrative features.
- **2026-05-10:** **Phase 2 complete.** All 17 chapter Markdown drafts complete (~113,000 words). Cross-references verified clean (33 refs, 0 broken via `scripts/verify-cross-refs.py`). Markdown formatting (prettier) and linting (markdownlint-cli2 with project config) tooling in place; all chapters pass lint with 0 errors. CLAUDE.md mandates the format + lint + cross-ref check before commit. **Book assembly (Phase 2 plan Task 21) was explicitly deferred to Phase 3** - the publishing pipeline (GitHub Actions to GitHub Pages) will handle assembly as part of styling and rendering. Phase 2 plan archived to `plans/2026-05-10-phase-2-chapter-drafting.md`.
