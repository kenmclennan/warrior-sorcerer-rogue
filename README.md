# Warrior \* Sorcerer \* Rogue

A sword & sorcery roleplaying game built on Chaosium's **Basic Roleplaying Universal Game Engine (BRP UGE)**, released under the ORC License.

**Read it online:** <https://kenmclennan.github.io/warrior-sorcerer-rogue/>

---

## What it is

WSR is a focused, opinionated extraction of BRP for one specific genre - the sword & sorcery of **Robert E. Howard**, **Fritz Leiber**, and **Michael Moorcock**. Every rules choice has been made with the genre in view:

- Percentile skill resolution, matching-dice criticals
- Pulp action with personal stakes; anti-heroes with personal codes
- Costly sorcery - every step into it pays in Power Points, Patron Score, or Corruption
- Theatre-of-mind combat - no grid, no positional measurements
- Ancient-world setting: bronze and iron, not pseudo-medieval Europe

The book is one volume of thirteen numbered chapters plus five appendices.

## Chapters

The chapter source lives in `chapters/`. The links below open the markdown files directly; for the styled, searchable version with cross-references as clickable links, see the [published site](https://kenmclennan.github.io/warrior-sorcerer-rogue/).

**Player-facing**

- [P1. Introduction](chapters/p01-introduction.md)
- [P2. Character Creation](chapters/p02-character-creation.md)
- [P3. Skills](chapters/p03-skills.md)
- [P4. Action Resolution](chapters/p04-action-resolution.md)
- [P5. Combat](chapters/p05-combat.md)
- [P6. Sorcery](chapters/p06-sorcery.md)
- [P7. Equipment](chapters/p07-equipment.md)

**GM-facing**

- [P8. NPCs and Adversaries](chapters/p08-npcs-and-adversaries.md)
- [P9. Bestiary](chapters/p09-bestiary.md)
- [P10. NPC Sorcery and Patrons](chapters/p10-npc-sorcery-and-patrons.md)
- [P11. Treasure and Artifacts](chapters/p11-treasure-and-artifacts.md)
- [P12. Hazards and Spot Rules](chapters/p12-hazards-and-spot-rules.md)
- [P13. The Deep Past](chapters/p13-the-deep-past.md)

**Appendices**

- [PA1. Critical Hit Tables](chapters/pa1-critical-hit-tables.md)
- [PA2. Play Examples](chapters/pa2-examples.md)
- [PA3. Inspirational Influences](chapters/pa3-inspirational-influences.md)
- [PA4. Names](chapters/pa4-names.md)
- [PA5. GM Examples](chapters/pa5-gm-examples.md)

## Building the site locally

The published site is built with [Eleventy](https://www.11ty.dev/) and indexed for search with [Pagefind](https://pagefind.app/). Everything build-related lives under `site/`:

```
site/
├── .eleventy.js          # build config
├── package.json          # npm dependencies + scripts
├── _data/chapters.js     # chapter ordering, section extraction
├── _includes/            # base.njk, chapter.njk templates
├── css/book.css          # site styling
└── index.njk             # landing page template
```

To build:

```bash
cd site
npm install
npm run serve   # local dev with hot reload
npm run build   # full production build (HTML + search index) into ../_site/
```

The same build also runs automatically via `.github/workflows/publish.yml` on push to `main`, deploying to GitHub Pages.

## License

This work is licensed under the [ORC License](https://www.chaosium.com/orclicense/).

**Reserved Material.** The title _Warrior \* Sorcerer \* Rogue_; all WSR-original rules text, tables, and descriptions; all spell names and spell descriptions; all critical hit table entries; all WSR-original character backgrounds, professions, and talents; all monster and NPC descriptions.

**Powered by BRP.** This product uses material from the _Basic Roleplaying: Universal Game Engine ORC Content Document_, copyright © 2023 Chaosium Inc., authored by Jason Durall and Steve Perrin. _Basic Roleplaying_ is a trademark of Chaosium Inc.

**Required Attribution Notice (for downstream creators).** _This product is based on Warrior \* Sorcerer \* Rogue, and uses rules derived from the Basic Roleplaying: Universal Game Engine published by Chaosium Inc. under the ORC License._
