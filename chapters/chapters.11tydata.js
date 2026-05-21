/**
 * Directory data file for chapters/.
 *
 * Sets the default layout (chapter.njk) and permalink scheme for every
 * markdown file in this directory. The 11ty convention is that a file
 * named `<dirname>.11tydata.js` in a directory provides shared data and
 * defaults for the files in that directory.
 *
 * Each chapter file (e.g. p05-combat.md) becomes a page served at
 * `/<file-slug>/` (e.g. `/p05-combat/`).
 */
module.exports = {
  layout: "chapter.njk",
  permalink: "/{{ page.fileSlug }}/",
  tags: ["chapter"],
};
