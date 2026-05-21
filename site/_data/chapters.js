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
  { num: "1",  slug: "01-introduction",             title: "Introduction" },
  { num: "2",  slug: "02-character-creation",       title: "Character Creation" },
  { num: "3",  slug: "03-skills",                   title: "Skills" },
  { num: "4",  slug: "04-action-resolution",        title: "Action Resolution" },
  { num: "5",  slug: "05-combat",                   title: "Combat" },
  { num: "6",  slug: "06-sorcery",                  title: "Sorcery" },
  { num: "7",  slug: "07-equipment",                title: "Equipment" },
  { num: "8",  slug: "08-npcs-and-adversaries",     title: "NPCs and Adversaries" },
  { num: "9",  slug: "09-bestiary",                 title: "Bestiary" },
  { num: "10", slug: "10-npc-sorcery-and-patrons",  title: "NPC Sorcery and Patrons" },
  { num: "11", slug: "11-treasure-and-artifacts",   title: "Treasure and Artifacts" },
  { num: "12", slug: "12-hazards-and-spot-rules",   title: "Hazards and Spot Rules" },
  { num: "13", slug: "13-the-deep-past",            title: "The Deep Past" },
  { num: "A1", slug: "a1-critical-hit-tables",      title: "Critical Hit Tables" },
  { num: "A2", slug: "a2-examples",                 title: "Play Examples" },
  { num: "A3", slug: "a3-inspirational-influences", title: "Inspirational Influences" },
  { num: "A4", slug: "a4-names",                    title: "Names" },
  { num: "A5", slug: "a5-gm-examples",              title: "GM Examples" },
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
