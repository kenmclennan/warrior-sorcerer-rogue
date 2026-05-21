/**
 * Canonical chapter ordering for Warrior * Sorcerer * Rogue, plus
 * extracted section listings used to build the collapsible sidebar.
 *
 * Fields:
 *   num      The chapter's identifier: 1, 2, ..., 13 for chapters and
 *            A1-A5 for appendices. Used as the display number in the
 *            sidebar and headings, and as the lookup key for the
 *            cross-reference transform (the markdown text still uses
 *            "P5 §3" / "PA1 §1.2" form; the transform derives the
 *            P / PA prefix from num at runtime).
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
  { num: "1",  slug: "01-introduction",             title: "Introduction",              side: "player"   },
  { num: "2",  slug: "02-character-creation",       title: "Character Creation",        side: "player"   },
  { num: "3",  slug: "03-skills",                   title: "Skills",                    side: "player"   },
  { num: "4",  slug: "04-action-resolution",        title: "Action Resolution",        side: "player"   },
  { num: "5",  slug: "05-combat",                   title: "Combat",                    side: "player"   },
  { num: "6",  slug: "06-sorcery",                  title: "Sorcery",                   side: "player"   },
  { num: "7",  slug: "07-equipment",                title: "Equipment",                 side: "player"   },
  { num: "8",  slug: "08-npcs-and-adversaries",     title: "NPCs and Adversaries",     side: "gm"       },
  { num: "9",  slug: "09-bestiary",                 title: "Bestiary",                  side: "gm"       },
  { num: "10", slug: "10-npc-sorcery-and-patrons",  title: "NPC Sorcery and Patrons",   side: "gm"       },
  { num: "11", slug: "11-treasure-and-artifacts",   title: "Treasure and Artifacts",    side: "gm"       },
  { num: "12", slug: "12-hazards-and-spot-rules",   title: "Hazards and Spot Rules",   side: "gm"       },
  { num: "13", slug: "13-the-deep-past",            title: "The Deep Past",             side: "gm"       },
  { num: "A1", slug: "a1-critical-hit-tables",      title: "Critical Hit Tables",       side: "appendix" },
  { num: "A2", slug: "a2-examples",                 title: "Play Examples",             side: "appendix" },
  { num: "A3", slug: "a3-inspirational-influences", title: "Inspirational Influences", side: "appendix" },
  { num: "A4", slug: "a4-names",                    title: "Names",                     side: "appendix" },
  { num: "A5", slug: "a5-gm-examples",              title: "GM Examples",               side: "appendix" },
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
