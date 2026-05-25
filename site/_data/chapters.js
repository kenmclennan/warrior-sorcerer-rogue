/**
 * Canonical chapter ordering for Warrior * Sorcerer * Rogue, plus
 * extracted section listings used to build the collapsible sidebar.
 *
 * Fields:
 *   num      The chapter's identifier: 1, 2, ..., 13 for chapters and
 *            A1-A6 for appendices. Used as the display number in the
 *            sidebar and as the lookup key for the cross-reference
 *            transform. Source markdown embeds global numbers in
 *            headings ("## 6.1 Foo") so no runtime numbering is needed.
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
  { num: "4",  slug: "04-system",                   title: "System" },
  { num: "5",  slug: "05-combat",                   title: "Combat" },
  { num: "6",  slug: "06-spot-rules",               title: "Spot Rules" },
  { num: "7",  slug: "07-sorcery",                  title: "Sorcery" },
  { num: "8",  slug: "08-equipment",                title: "Equipment" },
  { num: "9",  slug: "09-npcs-and-adversaries",     title: "NPCs and Adversaries" },
  { num: "10", slug: "10-bestiary",                 title: "Bestiary" },
  { num: "11", slug: "11-npc-sorcery-and-patrons",  title: "NPC Sorcery and Patrons" },
  { num: "12", slug: "12-treasure-and-artifacts",   title: "Treasure and Artifacts" },
  { num: "13", slug: "13-the-deep-past",            title: "The Deep Past" },
  { num: "A1", slug: "a1-critical-hit-tables",      title: "Critical Hit and Fumble Tables" },
  { num: "A2", slug: "a2-examples",                 title: "Play Examples" },
  { num: "A3", slug: "a3-inspirational-influences", title: "Inspirational Influences" },
  { num: "A4", slug: "a4-names",                    title: "Names" },
  { num: "A5", slug: "a5-gm-examples",              title: "GM Examples" },
  { num: "A6", slug: "a6-credits-and-attribution",   title: "Credits and Attribution" },
];

function extractSections(slug) {
  const filepath = path.join(CHAPTERS_DIR, slug + ".md");
  if (!fs.existsSync(filepath)) return [];
  const content = fs.readFileSync(filepath, "utf-8");
  const sections = [];
  for (const line of content.split("\n")) {
    // Matches headings with embedded global numbering:
    //   ## 6.1 Title          (level 2)
    //   ### 6.1.1 Title       (level 3)
    //   #### 6.1.1.1 Title    (level 4)
    //   ## A1.1 Title         (appendix level 2)
    const m = line.match(/^(#{2,4})\s+(A?\d+(?:\.\d+)*)\.?\s+(.+?)\s*$/);
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
