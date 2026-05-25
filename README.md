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

- [1. Introduction](chapters/01-introduction.md)
- [2. Character Creation](chapters/02-character-creation.md)
- [3. Skills](chapters/03-skills.md)
- [4. System](chapters/04-system.md)
- [5. Combat](chapters/05-combat.md)
- [6. Spot Rules](chapters/06-spot-rules.md)
- [7. Sorcery](chapters/07-sorcery.md)
- [8. Equipment](chapters/08-equipment.md)

**GM-facing**

- [9. NPCs and Adversaries](chapters/09-npcs-and-adversaries.md)
- [10. Bestiary](chapters/10-bestiary.md)
- [11. NPC Sorcery and Patrons](chapters/11-npc-sorcery-and-patrons.md)
- [12. Treasure and Artifacts](chapters/12-treasure-and-artifacts.md)
- [13. The Deep Past](chapters/13-the-deep-past.md)

**Appendices**

- [A1. Critical Hit and Fumble Tables](chapters/a1-critical-hit-tables.md)
- [A2. Play Examples](chapters/a2-examples.md)
- [A3. Inspirational Influences](chapters/a3-inspirational-influences.md)
- [A4. Names](chapters/a4-names.md)
- [A5. GM Examples](chapters/a5-gm-examples.md)
- [A6. Credits and Attribution](chapters/a6-credits-and-attribution.md)

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
