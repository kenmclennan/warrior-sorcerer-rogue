/**
 * Canonical chapter ordering for Warrior * Sorcerer * Rogue.
 *
 * Used to drive: navigation (prev/next), the TOC landing page, and the
 * cross-reference linker (mapping codes like "P5" or "PA1" to their
 * URL slug).
 *
 * Order matches the in-book reading order. The "side" field is
 * descriptive only (player-facing / GM-facing / appendix) and is used
 * to group entries on the TOC page.
 */
module.exports = [
  { code: "P1", slug: "p01-introduction", title: "Introduction", side: "player" },
  { code: "P2", slug: "p02-character-creation", title: "Character Creation", side: "player" },
  { code: "P3", slug: "p03-skills", title: "Skills", side: "player" },
  { code: "P4", slug: "p04-action-resolution", title: "Action Resolution", side: "player" },
  { code: "P5", slug: "p05-combat", title: "Combat", side: "player" },
  { code: "P6", slug: "p06-sorcery", title: "Sorcery", side: "player" },
  { code: "P7", slug: "p07-equipment", title: "Equipment", side: "player" },
  { code: "P8", slug: "p08-npcs-and-adversaries", title: "NPCs and Adversaries", side: "gm" },
  { code: "P9", slug: "p09-bestiary", title: "Bestiary", side: "gm" },
  { code: "P10", slug: "p10-npc-sorcery-and-patrons", title: "NPC Sorcery and Patrons", side: "gm" },
  { code: "P11", slug: "p11-treasure-and-artifacts", title: "Treasure and Artifacts", side: "gm" },
  { code: "P12", slug: "p12-hazards-and-spot-rules", title: "Hazards and Spot Rules", side: "gm" },
  { code: "P13", slug: "p13-the-deep-past", title: "The Deep Past", side: "gm" },
  { code: "PA1", slug: "pa1-critical-hit-tables", title: "Critical Hit Tables", side: "appendix" },
  { code: "PA2", slug: "pa2-examples", title: "Play Examples", side: "appendix" },
  { code: "PA3", slug: "pa3-inspirational-influences", title: "Inspirational Influences", side: "appendix" },
  { code: "PA4", slug: "pa4-names", title: "Names", side: "appendix" },
  { code: "PA5", slug: "pa5-gm-examples", title: "GM Examples", side: "appendix" },
];
