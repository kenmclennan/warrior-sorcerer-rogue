const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

/**
 * Custom slug for headings. Source markdown embeds global numbering in
 * each heading ("## 4.1 Percentile Roll", "## A1.2 Slash Crits"), so
 * the slug is just a kebabified copy of the leading number.
 *
 *   "## 4.1 Percentile Roll"     -> id="sec-4-1"
 *   "### 4.1.2 Difficulty"       -> id="sec-4-1-2"
 *   "## A1.2 Slash Crit Table"   -> id="sec-A1-2"
 *
 * Headings without a leading number (rare; epigraph quotes, etc.) fall back
 * to a kebabified slug of the heading text.
 */
function sectionSlug(s) {
  const m = s.match(/^(A?\d+(?:\.\d+)*)\b/);
  if (m) return `sec-${m[1].replace(/\./g, "-")}`;
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Cross-reference linker.
 *
 * Sweeps rendered HTML for `§N`, `§N.M`, `§AN`, `§AN.M` (etc.) and
 * rewrites them as anchor links into the appropriate chapter's section
 * anchor. The chapter slug map is keyed by chapter number ("5", "A1").
 */
function buildCrossRefTransform(chapterMap, pathPrefix) {
  // Section ref: "§5.3", "§A1.1.2" - chapter num, dot, section path.
  const refRe = /§(A?\d+)\.(\d+(?:\.\d+){0,3})\b/g;

  // Bare chapter ref: "§5", "§A1" - matches only when NOT followed by
  // a dot-and-digit (which would mean it's a section ref). Lets the
  // section-ref pass run first without this pass eating its inputs.
  const bareRe = /§(A?\d+)\b(?!\.\d)/g;

  return function (content, outputPath) {
    if (!outputPath || !outputPath.endsWith(".html")) return content;

    // Section refs: "§5.3" -> link to /05-combat/#sec-5-3
    content = content.replace(refRe, (match, num, section) => {
      const slug = chapterMap[num];
      if (!slug) return match;
      const anchor = `sec-${num}-${section.replace(/\./g, "-")}`;
      const displayText = `§${num}.${section}`;
      return `<a class="xref" href="${pathPrefix}${slug}/#${anchor}">${displayText}</a>`;
    });

    // Bare chapter refs: "§5" -> link to /05-combat/
    content = content.replace(bareRe, (match, num) => {
      const slug = chapterMap[num];
      if (!slug) return match;
      const displayText = `§${num}`;
      return `<a class="xref" href="${pathPrefix}${slug}/">${displayText}</a>`;
    });

    return content;
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
  // Markdown source uses "§N" / "§N.M" refs where N is the chapter num
  // ("5", "A1"), so the chapter map is keyed by num directly.
  const chapters = require("./_data/chapters.js");
  const chapterMap = Object.fromEntries(chapters.map((c) => [c.num, c.slug]));
  eleventyConfig.addTransform(
    "crossref",
    buildCrossRefTransform(chapterMap, pathPrefix),
  );

  // (Heading numbering transform retired: source markdown now embeds
  // global numbers directly in headings - "## 6.1 Becoming a Sorcerer",
  // "### 6.1.1 What a Sorcerer Is" - so no runtime renumbering needed.)

  // Passthrough static assets. The css folder lives at site/css/ but
  // we want it served from /css/ in the output, so use the mapping form.
  eleventyConfig.addPassthroughCopy({ "site/css": "css" });

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

  // Directory layout. Config + templates + data live in site/.
  // Content (chapters/) and meta-docs live at the project root.
  // 11ty is run from the project root with --config=site/.eleventy.js,
  // so input "." resolves to the project root.
  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "site/_includes",
      data: "site/_data",
    },
    pathPrefix,
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
};
