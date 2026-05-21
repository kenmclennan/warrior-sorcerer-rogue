/**
 * Canonical chapter ordering for Warrior * Sorcerer * Rogue, plus
 * extracted section listings used to build the collapsible sidebar.
 *
 * Fields:
 *   code     The cross-reference identifier (P1, P5, PA1) - used by
 *            the cross-ref linker in .eleventy.js and by historical
 *            references in the markdown source. Not displayed.
 *   num      The display number in the sidebar (1, 2, ..., 13, A1-A5).
 *            The book is one volume; the P prefix is no longer shown.
 *   slug     The URL slug and source filename stem.
 *   title    The chapter title (no number).
 *   side     One of "player" / "gm" / "appendix". Retained for
 *            historical filtering even though group headings are no
 *            longer shown in the sidebar.
 *   sections Array of {id, num, title, level} extracted from the
 *            chapter's markdown headings. Level 2 (## N. Title) and
 *            level 3 (### N.M Title) headings are captured. Only
 *            level-2 sections are shown in the sidebar by default;
 *            templates can decide to surface level-3 if needed.
 */

const fs = require("fs");
const path = require("path");

// __dirname here is <root>/site/_data/. Walk up twice to reach the
// canonical chapters/ folder at the project root.
const CHAPTERS_DIR = path.join(__dirname, "..", "..", "chapters");

const baseList = [
  { code: "P1",  num: "1",  slug: "01-introduction",             title: "Introduction",              side: "player"   },
  { code: "P2",  num: "2",  slug: "02-character-creation",       title: "Character Creation",        side: "player"   },
  { code: "P3",  num: "3",  slug: "03-skills",                   title: "Skills",                    side: "player"   },
  { code: "P4",  num: "4",  slug: "04-action-resolution",        title: "Action Resolution",        side: "player"   },
  { code: "P5",  num: "5",  slug: "05-combat",                   title: "Combat",                    side: "player"   },
  { code: "P6",  num: "6",  slug: "06-sorcery",                  title: "Sorcery",                   side: "player"   },
  { code: "P7",  num: "7",  slug: "07-equipment",                title: "Equipment",                 side: "player"   },
  { code: "P8",  num: "8",  slug: "08-npcs-and-adversaries",     title: "NPCs and Adversaries",     side: "gm"       },
  { code: "P9",  num: "9",  slug: "09-bestiary",                 title: "Bestiary",                  side: "gm"       },
  { code: "P10", num: "10", slug: "10-npc-sorcery-and-patrons",  title: "NPC Sorcery and Patrons",   side: "gm"       },
  { code: "P11", num: "11", slug: "11-treasure-and-artifacts",   title: "Treasure and Artifacts",    side: "gm"       },
  { code: "P12", num: "12", slug: "12-hazards-and-spot-rules",   title: "Hazards and Spot Rules",   side: "gm"       },
  { code: "P13", num: "13", slug: "13-the-deep-past",            title: "The Deep Past",             side: "gm"       },
  { code: "PA1", num: "A1", slug: "a1-critical-hit-tables",      title: "Critical Hit Tables",       side: "appendix" },
  { code: "PA2", num: "A2", slug: "a2-examples",                 title: "Play Examples",             side: "appendix" },
  { code: "PA3", num: "A3", slug: "a3-inspirational-influences", title: "Inspirational Influences", side: "appendix" },
  { code: "PA4", num: "A4", slug: "a4-names",                    title: "Names",                     side: "appendix" },
  { code: "PA5", num: "A5", slug: "a5-gm-examples",              title: "GM Examples",               side: "appendix" },
];

function extractSections(slug) {
  const filepath = path.join(CHAPTERS_DIR, slug + ".md");
  if (!fs.existsSync(filepath)) return [];
  const content = fs.readFileSync(filepath, "utf-8");
  const sections = [];
  for (const line of content.split("\n")) {
    // Matches:
    //   ## 1. Title         (level 2, with dot)
    //   ### 1.1 Title       (level 3, no dot)
    //   #### 1.1.1 Title    (level 4)
    const m = line.match(/^(#{2,4})\s+(\d+(?:\.\d+)*)\.?\s+(.+?)\s*$/);
    if (!m) continue;
    const level = m[1].length;
    const num = m[2];
    // Strip Markdown escape backslashes (\* \_ \` \\) so titles render
    // as their literal characters in the sidebar.
    const title = m[3].replace(/\\([*_`\\])/g, "$1");
    sections.push({
      id: `sec-${num.replace(/\./g, "-")}`,
      num,
      title,
      level,
    });
  }
  return sections;
}

module.exports = baseList.map((c) => ({ ...c, sections: extractSections(c.slug) }));
