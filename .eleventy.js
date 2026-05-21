const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

/**
 * Custom slug for headings.
 *
 *   "## 3. The Three-Tier Model"   -> id="sec-3"
 *   "### 3.1 Rabble"               -> id="sec-3-1"
 *   "### 3.1.2 Sub-sub"            -> id="sec-3-1-2"
 *   "## 5. Wounds" / "### 5.1 ..." also work
 *
 * Headings without a leading number (rare; epigraph quotes, etc.) fall back
 * to a kebabified slug of the heading text.
 */
function sectionSlug(s) {
  const m = s.match(/^(\d+(?:\.\d+)*)\b/);
  if (m) return `sec-${m[1].replace(/\./g, "-")}`;
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Cross-reference linker.
 *
 * Sweeps rendered HTML for `P1`..`P13` and `PA1`..`PA5` followed by
 * `§N` or `§N.M` (etc.) and rewrites them as anchor links into the
 * appropriate chapter's section anchor.
 *
 * The chapter slug map is generated from the chapters data file at
 * build time.
 */
function buildCrossRefTransform(chapterMap, pathPrefix) {
  const codes = Object.keys(chapterMap).sort((a, b) => b.length - a.length);
  // Build a regex like (PA1|PA2|...|P13|P12|...|P1) §section
  // Longest codes first so PA1 matches before P1.
  const codePattern = codes.join("|");
  const refRe = new RegExp(
    `\\b(${codePattern})\\s+§(\\d+(?:\\.\\d+){0,3})`,
    "g",
  );

  return function (content, outputPath) {
    if (!outputPath || !outputPath.endsWith(".html")) return content;
    return content.replace(refRe, (match, code, section) => {
      const slug = chapterMap[code];
      if (!slug) return match;
      const anchor = `sec-${section.replace(/\./g, "-")}`;
      return `<a class="xref" href="${pathPrefix}${slug}/#${anchor}">${match}</a>`;
    });
  };
}

module.exports = function (eleventyConfig) {
  const pathPrefix = "/warrior-sorcerer-rogue/";

  // Markdown setup.
  const md = markdownIt({
    html: true,
    linkify: false,
    typographer: false,
  }).use(markdownItAnchor, {
    level: [2, 3, 4],
    slugify: sectionSlug,
    permalink: markdownItAnchor.permalink.linkInsideHeader({
      symbol: "#",
      placement: "after",
      ariaHidden: false,
      class: "anchor",
    }),
  });
  eleventyConfig.setLibrary("md", md);

  // Cross-ref transform: built lazily so chapters data is loaded first.
  // Eleventy runs transforms after rendering, in the order they're added.
  // We need the chapter map; load it at config time via require.
  const chapters = require("./_data/chapters.js");
  const chapterMap = Object.fromEntries(chapters.map((c) => [c.code, c.slug]));
  eleventyConfig.addTransform(
    "crossref",
    buildCrossRefTransform(chapterMap, pathPrefix),
  );

  // Passthrough static assets.
  eleventyConfig.addPassthroughCopy("css");

  // Collect chapter markdown files into an ordered collection.
  eleventyConfig.addCollection("chaptersOrdered", function (collectionApi) {
    const ordered = chapters.map((c) => c.slug);
    return collectionApi
      .getAll()
      .filter((item) => {
        if (!item.inputPath) return false;
        if (!item.inputPath.includes("/chapters/")) return false;
        return true;
      })
      .sort((a, b) => {
        const aSlug = a.fileSlug;
        const bSlug = b.fileSlug;
        return ordered.indexOf(aSlug) - ordered.indexOf(bSlug);
      });
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    pathPrefix,
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
};
