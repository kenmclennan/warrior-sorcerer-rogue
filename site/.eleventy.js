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
  // Cross-ref codes ("P5", "PA1") in the markdown source are derived
  // from each chapter's num: "P" + num produces "P5" for num "5" and
  // "PA1" for num "A1".
  const chapters = require("./_data/chapters.js");
  const chapterMap = Object.fromEntries(
    chapters.map((c) => ["P" + c.num, c.slug]),
  );
  eleventyConfig.addTransform(
    "crossref",
    buildCrossRefTransform(chapterMap, pathPrefix),
  );

  // Chapter+section numbering transform. Source markdown uses local
  // numbering ("## 1. Becoming a Sorcerer" / "### 1.1 What a Sorcerer
  // Is") inside each chapter. For the rendered book we want global
  // numbering ("6.1 Becoming a Sorcerer" / "6.1.1 What a Sorcerer Is"
  // in chapter 6). The transform finds the file's chapter num and
  // prefixes the H1 title plus each H2/H3/H4 section number.
  const slugToNum = Object.fromEntries(chapters.map((c) => [c.slug, c.num]));
  eleventyConfig.addTransform(
    "chapter-numbering",
    function (content, outputPath) {
      if (!outputPath || !outputPath.endsWith(".html")) return content;
      const m = outputPath.match(/\/([^/]+)\/index\.html$/);
      if (!m) return content;
      const num = slugToNum[m[1]];
      if (!num) return content; // not a chapter page

      // H1 chapter title: "<h1>Sorcery</h1>" -> "<h1>6. Sorcery</h1>".
      // Only the first H1, which is the chapter title.
      content = content.replace(
        /<h1>([^<]+)<\/h1>/,
        `<h1>${num}. $1</h1>`,
      );

      // H2/H3/H4 section numbers. Markdown source uses "1.", "1.1", "1.1.1";
      // markdown-it-anchor renders to:
      //   <h2 id="sec-1" tabindex="-1">1. Becoming a Sorcerer <a ...>#</a></h2>
      // Prefix the section number with the chapter num and a dot, dropping
      // any trailing dot after the original section number.
      content = content.replace(
        /(<h[234]\s+id="sec-[\d-]+"[^>]*>\s*)(\d+(?:\.\d+)*)\.?(\s+)/g,
        `$1${num}.$2$3`,
      );

      return content;
    },
  );

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
