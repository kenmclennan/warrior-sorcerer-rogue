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

Chapters in extraction order (per `decisions.md` and `notes/chapter-mapping.md`). Each chapter publishes as a separate PDF in `chapters/`.

| # | Chapter | Book | Status | Notes |
|---|---------|------|--------|-------|
| 1 | P4 Action Resolution | Player | `[x]` | Chassis - everything else references this |
| 2 | P5 Combat | Player | `[x]` | Locks the matching-dice critical mechanic |
| 3 | PA1 Critical Hit Tables | Player | `[x]` | 150 entries, 3 damage types (Slash/Pierce/Krush); Burn/Grapple deferred with interim guidance |
| 4 | P3 Skills | Player | `[x]` | Skill list reference |
| 5 | P7 Equipment | Player | `[x]` | Weapons, armour, gear, currency, mounts |
| 6 | P6 Sorcery (player-facing) | Player | `[x]` | 29 spells; cost trio (PP/Patron/Corruption); iron rule; demon summoning player-side |
| 7 | P2 Character Creation | Player | `[x]` | 8,205 words; 8 cultural backgrounds; 14 professions; 40 talents (4 tables x 10); Passions + Reputation mechanics; sorcerer step |
| 8 | P1 Introduction | Player | `[x]` | 3,087 words; 5 sections; ORC attribution; synthesises everything else |
| 9 | PA2 Examples | Player | `[x]` | ~4,100 words; 4 sections: chargen (Khess the Knife full walkthrough), combat (Salt Causeway ambush with mooks/crit/PP-buy/Dying Blow), sorcery (Karash casts the Curse), session sketch (hook/complications/reckoning) |
| 10 | G1 Running the Game | GM | `[x]` | GM principles + deeper genre primer |
| 11 | G2 NPCs and Adversaries | GM | `[x]` | Mooks, professionals, named foes |
| 12 | G4 NPC Sorcery and Patrons | GM | `[x]` | 9,906 words; 5 sample NPC sorcerers; 7 sample patrons; ritual magic, demon binding deep-dive, Brazier, Apotheosis arc |
| 13 | G3 Bestiary | GM | `[x]` | 12,149 words; 12 mortal beasts, 7 undead, 7 fantasy beasts, 3 demon entries (incl. Yog-Hath sample), 4 elementals; 20-entry Chaotic Features table |
| 14 | G5 Treasure and Artifacts | GM | `[x]` | 7,321 words; mundane treasure tables; full artifact creation rules; 10 sample artifacts; 5 cursed items; Reputation economics |
| 15 | G6 Hazards and Spot Rules | GM | `[x]` | 4,192 words; 8 sections; disease table + 6 types; 11-poison reference; fire/heat/smoke; cold/hypothermia/frostbite; hunger/thirst/fatigue; falling categories + drowning; 5-position narrative chase track; mass combat Luck-per-turn abstraction |
| 16 | G7 The Deep Past | GM | `[x]` | World-building generators |
| 17 | GA1 GM Examples | GM | `[x]` | ~2,900 words; 4 sections: session design walkthrough (G7 generator hit + Passion hooks + 2 complications + reckoning variants), NPC sorcerer step-by-step (Ysolde the Annotator, mid-tier Charnel Heir sorcerer, full stat block), chase scene (3 rounds, range track, obstacle roll), sorcery cost adjudication (pre-casting checklist, resistance roll, spell-specific Corruption, patron compact moment) |
| 18 | PA3 Inspirational Influences | Player | `[x]` | "Appendix N" - user-supplied list of films (12), books (Howard / Moorcock / Leiber with specific stories, plus Gemmell, Shea, Burroughs, Dickinson, Fox), comics (Head Lopper), music (3 OSTs), art (Frazetta, Brom). Cross-referenced from P1 §5.3 and G1 §1. |

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

*Significant completed work (older items move here as the active sections get crowded).*

- **2026-05-10:** **Phase 1 complete.** Source review (BRP UGE + Pulp Cthulhu + Delta Green + RuneQuest W&E + Rolemaster Arms Law), 11 locked design decisions, 17-chapter mapping with extraction order. Phase 1 plan archived to `plans/2026-05-09-phase-1-source-review.md`.
- **2026-05-10:** **P6 Sorcery (player-facing) complete.** 8,818 words; 29 spells with WSR-original tone descriptions; full cost trio (PP, Patron Score, Corruption) mechanically specified; iron-vs-sorcery cross-referenced to P7; 2 healing spells (Mend the Mortal Frame, Vampire's Kiss) each with mandatory Corruption cost; player-side demon summoning procedure drafted. P2 Character Creation now unblocked.
- **2026-05-10:** **P2 Character Creation complete.** 8,205 words; 8 cultural backgrounds; 14 professions; 40 WSR-original talents (4 tables x 10); Passions (mandatory, 3 at chargen) + Reputation mechanics; sorcerer-specific step with POW threshold, patron compact, starting Corruption.
- **2026-05-10:** **G1 Running the Game complete.** 6,643 words; 7 sections covering genre primer (Howard/Leiber/Moorcock with named works), session structure (hook/complications/reckoning), 5 GM principles, Passions-based session zero, theatre-of-mind combat guidance, pacing (within session and across campaign), lightweight-vs-tactical tension.
- **2026-05-10:** **G4 NPC Sorcery and Patrons complete.** 9,906 words; 8 sections; 5 sample NPC sorcerers (Cult Leader, Court Mage, Hermit, Witch-Queen, Apprentice-Risen); 7 sample patrons (Drowned Goddess, Faceless One, Charnel Heir, Set the Serpent, Empty Throne, Plague-Bride, Brass Warden); ritual magic with Chain of Being procedure; demon binding deep-dive including escape clauses; Brazier of Power campaign rules; Apotheosis arc with score reduction tools.
- **2026-05-10:** **G3 Bestiary complete.** 12,149 words; 7 sections; 12 mortal beasts (lion, tiger, wolf/pack, bear, boar, 2 snakes, giant spider, crocodile, eagle, mammoth, sabre-tooth cat); 7 undead (skeleton, zombie, mummy+sorcerer variant, ghoul, vampire, ghost, wight); 7 fantasy beasts (dragon, giant, minotaur, werewolf, troll+trollwife, centaur, griffin); 3 demon entries (Lesser, Greater, Yog-Hath sample named greater demon); 4 elementals (air, earth, fire, water) reframed as alien intelligences; 20-entry Chaotic Features table weighted toward qualitative narrative features.
- **2026-05-10:** **Phase 2 complete.** All 17 chapter Markdown drafts complete (~113,000 words). Cross-references verified clean (33 refs, 0 broken via `scripts/verify-cross-refs.py`). Markdown formatting (prettier) and linting (markdownlint-cli2 with project config) tooling in place; all chapters pass lint with 0 errors. CLAUDE.md mandates the format + lint + cross-ref check before commit. **Book assembly (Phase 2 plan Task 21) was explicitly deferred to Phase 3** - the publishing pipeline (GitHub Actions to GitHub Pages) will handle assembly as part of styling and rendering. Phase 2 plan archived to `plans/2026-05-10-phase-2-chapter-drafting.md`.
