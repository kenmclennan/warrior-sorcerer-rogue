# Advanced Fantasy Player's Tome - Layout and Presentation Analysis

Research conducted for Warrior \* Sorcerer \* Rogue. Goal: extract layout and at-the-table utility
lessons from Advanced Fantasy, not its rules content.

Source: Advanced Fantasy Player's Tome (Old-School Essentials derivative, OSR retroclone).
Pages read: approximately 130 of 236, targeting TOC/opening (pp. 1-20), character classes
(pp. 28-36), equipment (pp. 94-100), cleric spells (pp. 110-129), magic-user spells (pp. 178-197),
adventuring procedures (pp. 200-219), and combat (pp. 218-237).

---

## Summary

Advanced Fantasy Player's Tome (AFPT) is a dense, beautifully produced retroclone covering Old-School
Essentials / B/X D&D. It is a published, typeset book: two-column layout, colored header boxes,
alternating-row tables, and a consistent visual grammar throughout. The text is maximally compressed -
no flavor text, no designer voice, no literary quotes inside rules sections, no "why this rule exists"
explanations. Every page is pure procedure and reference material.

Book structure at a glance: character creation (classes, races, equipment), core procedures
(adventuring, combat), spells by class and level. The TOC is flat and functional. There is no
narrative onboarding.

WSR is different in kind: Markdown source, future GitHub Pages target, sword & sorcery aesthetic,
deliberate designer voice. The goal is not to replicate AFPT's visual design but to extract
structural and organizational lessons that improve conciseness and at-the-table utility.

---

## Layout Patterns

### Two-Column Body with Full-Bleed Colored Header Boxes

Every major game element (class, spell, rule section) opens with a colored rectangular header box
containing the entry name and its most critical stats. The body prose runs in two columns beneath.

At-the-table function: the eye lands on the header box to confirm "this is the entry I want," then
reads down from there. Scanning a page of spells means scanning colored boxes only.

WSR equivalent: `### Heading` lines. These work for navigation in a PDF but carry no visual weight
on a scanned page. In Phase 3, styling these as colored header boxes would be high-value. In Markdown
now, no equivalent is achievable without raw HTML.

### Arrow-Bullet Sub-Rules

Within spell entries and procedure sections, sub-rules are marked with `►` (arrow bullet) rather than
hyphens or asterisks. This distinguishes "a modifier on the main rule" from a list of alternatives or
a general bullet list.

Examples from magic-user spells (pp. 178-197):
- *Sleep*: Main rule gives a die of creatures affected; `►` bullets give per-HD breakdown.
- *Charm Person*: Main rule states the effect; `►` bullets give saving throw frequency by INT.
- *Web*: Main rule gives area; `►` bullets give burning rules, entrapment escape conditions.

WSR equivalent: currently uses unordered lists for sub-rules, which are visually identical to the
main bullet lists used elsewhere. A consistent convention (e.g., always use a bold dash `-` or an
indented list for mechanical sub-rules vs. a flat list for alternatives) would clarify hierarchy.

### Alternating-Row Table Colors

All tables use alternating green-tinted and white rows. Column headers are bold on a darker
background. No other table decoration.

WSR equivalent: standard Markdown tables. Alternating row colors are not achievable in plain
Markdown; this is a Phase 3 CSS concern. Current tables are already clean - no action needed now.

### Page Cross-References as Bold-Italic with Page Number

Cross-references appear as: "see *Combat, p222*" or "see *Saving Throws, p210*." The referenced
section name and page number are always both given.

WSR convention: cross-references use "See P5 §3" style (chapter code + section number). This is
arguably better for a source-independent format - page numbers will shift between editions and
formats. The WSR convention is correct and should be maintained.

### Sidebars

AFPT uses very few sidebars. When they appear, they are full-width colored boxes (not in a column)
with a distinct background. They are used for optional rules flagging and for tables that need the
full page width.

WSR equivalent: blockquotes (`>`) for sidebars and designer notes. This is already established
convention. Consistent.

---

## Rules-at-the-Table Utility

### Quick Reference via Consistent Entry Structure

Every spell entry in AFPT follows exactly the same visual template:

1. Colored header box: spell name + key stats (Duration, Range, Type) on the same line or
   immediately below the name.
2. Body: one or two paragraphs of mechanical effect. No flavor. No history. No literary quote.
3. Arrow-bullet sub-rules for edge cases or special conditions.

A referee can find any spell and extract its mechanics in under 10 seconds because the structure
never varies. There is no reading-past-flavor-text or scanning-past-a-quote required.

WSR sorcery chapter (p06): entries vary significantly. Some have literary quotes as blockquotes
(Summon Element, Iron Hide, others). Some have Cost Notes before the quote; others after. The `###`
heading is consistent, but the body structure is not. A reader looking for "when does Midnight end?"
must scan the entry rather than reading a fixed label-position.

### Stat Blocks

AFPT stat blocks for monsters (not the player's book scope, but visible in class tables and NPC
entries in the adventure content) use a compressed inline format: AC 5, HD 2, #Att 1, Dmg 1d6,
Mv 120' (40'), Save F2, ML 9, AL Neutral, XP 20. All on one or two lines. No field-name expansion.

WSR g02 stat blocks use a fenced code block with one labeled field per line:

```
Name: ...
STR/CON/SIZ/DEX/INT/POW/CHA: ...
HP: ...
Skills: ...
```

The WSR format is more readable cold (no abbreviations to memorize) and appropriate for a
lighter-publication context. However, Named Antagonist blocks are long. The inline-first approach
for Mook blocks (they are already compressed in g02) is correct; the question is whether
Professional and Named blocks could compress the attribute array onto one line.

### Procedure Presentation

AFPT converts every multi-step procedure to a numbered list. Examples:

- Combat Sequence Per Round (p. 222): 4-item numbered list. Each item is one sentence.
- Encounter Sequence (p. 203): 5-item numbered list.
- Dungeon Sequence of Play (p. 210): 6-item numbered list.
- Wilderness Sequence of Play (p. 214): 5-item numbered list.
- Waterborne Sequence of Play (p. 216): 4-item numbered list.

None of these are prose paragraphs. The numbered list signals "do these in order" without the
reader needing to parse sentence flow for the ordering cue.

WSR p05-combat: phases are described in prose under subsections 1.1-1.4. Phase 1 (Initiative) is
a paragraph; Phase 2 (Actions) is a paragraph; etc. The sequence is embedded in the section
numbering, not in a leading numbered list. A GM at the table cannot quickly read off "what do I do
first?" without scanning headings.

### Index and TOC

AFPT has both a detailed TOC and a multi-page index. Every major rule concept appears in the index
with page number. This is the primary navigation mechanism for a printed book.

WSR: Markdown chapters have H2 and H3 headings that generate a navigable TOC in rendered form
(GitHub, PDF viewer). No cross-chapter index exists. The WSR cross-reference convention (P5 §3)
compensates but requires the reader to know which chapter contains what. A chapter-level table of
contents (listing each section with its number) at the top of each chapter would provide the same
fast-scan utility within a chapter.

---

## Conciseness Techniques

### No Flavor Text in Rules Sections

AFPT contains zero flavor text within rules sections. There are no sentences of the form "the wizard
reaches into the fabric of reality and..." or "this ancient power has been used since the dawn of
time." Effect, duration, range, and conditions - nothing else.

WSR p06: many sorcery entries include a literary quote as a blockquote. These quotes are good for
establishing tone during first read, but they add 2-5 lines to every entry. When the sorcerer's
player asks "can I cast Midnight before Summon Demon in the same round?" the GM must scan past the
quote to find the Cost information.

Recommendation: keep literary quotes but move them to a single collected section or appendix. The
rule entries themselves become purely mechanical.

### One-Sentence Rule Bodies

AFPT spell bodies are typically 2-5 sentences. Each sentence carries exactly one mechanical fact.
No hedging. No "note that..." or "it is worth observing that..." constructions. When an effect has
conditions, those conditions appear as arrow-bullet sub-rules rather than embedded in prose.

WSR sorcery entries range from 2 sentences (Midnight) to 12+ sentences (Summon Demon). The longer
entries are long because they contain multiple distinct sub-rules in prose paragraphs. These would
compress by converting to a bulleted list per condition.

### Bold Labels for All Stat Fields

AFPT uses bold labels consistently: **Duration:**, **Range:**, **Type:**, **Save:**. These labels
appear at the start of lines or inline in the header box. The eye can skim for "Duration:" without
reading the prose.

WSR p06: already uses **Cost:**, **Cast Time:**, **Duration:** as separate bold lines. This matches
AFPT's approach. The WSR convention is correct. The issue is consistency of placement and the
presence of material (quotes, Cost Notes) interrupting the label block.

### Procedure Steps are One Action Each

In AFPT's numbered procedure lists, each numbered item is one action. "Roll initiative." not "Each
combatant rolls initiative using their relevant modifier, and the GM notes the order." The
implementation detail goes in the referenced section; the sequence list stays minimal.

WSR p05: the combat phase subsections are self-contained prose sections. Condensing the combat
flow into a leading numbered list (separate from the detailed sections) would give the GM a
one-look reference without replacing the detailed rules.

### Absence of Designer Voice

AFPT has no "Designer's Note:" blocks, no "Why this rule:" explanations, no hedging about edition
choices. The rules speak for themselves.

WSR p04: includes a designer's note blockquote at the end of §7 (Fate Point menu). One instance is
acceptable. If designer notes multiply across chapters, they add bulk during play without adding
mechanics.

---

## Specific Lessons Applicable to WSR

### Lesson 1: Add a Combat Sequence Summary List to p05 (P5 §1)

WSR p05 §1 covers the combat round phases (Initiative, Actions, Reactions, Resolution) in prose
subsections. AFPT's equivalent is a 4-item numbered list that a GM can read in 5 seconds.

Proposed addition: a summary box (blockquote or horizontal-rule-delimited block) at the top of P5
§1 containing the combat round as a numbered list. The existing prose subsections remain as the
authoritative rules; the list is a quick-reference overlay.

```
**Combat Round Sequence**
1. Determine initiative order (see §1.1).
2. Highest initiative acts first; resolve each combatant's actions (see §1.2).
3. Resolve reactions - parries, dodges (see §1.3).
4. Apply damage and conditions; advance to next initiative slot (see §1.4).
```

### Lesson 2: Standardize Sorcery Entry Structure in p06

WSR p06 entries vary in internal order. AFPT's spell entries are structurally identical. Proposed
canonical order for every WSR sorcery entry:

1. `### Spell Name`
2. **Cost:** / **Cast Time:** / **Duration:** block (always three consecutive lines, no
   interruption)
3. Mechanical description (no flavor, no quote)
4. Sub-rule bullet list (if any edge cases or conditions)
5. **Cost Notes:** (if present, always last before the horizontal rule)
6. Literary quote as blockquote (if present, always last, after Cost Notes)
7. `---` separator

This order means a reader scanning for "how much does this cost?" always finds the Cost block
immediately under the heading. It means a reader who wants the literary quote can find it at the
bottom without reading past it during play.

### Lesson 3: Move Literary Quotes to a Separate Appendix or Collected Section

This is the highest-impact single change for at-the-table utility in p06. Each literary quote adds
2-5 lines to every spell entry. During play, these are never consulted. During design/reading,
they establish tone.

Options (in order of disruption):
a. Add a "Sorcery in Literature" appendix at the end of p06 collecting all quotes, with the spell
   name as heading. Remove quotes from individual entries.
b. Keep quotes in entries but always position them last (standardization - Lesson 2 above).
c. No change - accept the tradeoff.

Option (a) serves the design principle in design.md §3.1: "Examples live in a dedicated appendix,
not interleaved with the rules." Literary quotes are not examples, but the same logic applies.

### Lesson 4: Compress the Sorcery Entry Header Block onto Two Lines

AFPT fits all key stats (Duration, Range, Type) on one or two lines in the header box. WSR uses
three separate bold lines (Cost, Cast Time, Duration). This is correct for readability in a
two-column typeset book. In a single-column Markdown document, three separate lines is also fine.

However, if the entry is simple, consider: `**Cost:** 1 MP | **Cast Time:** 1 action | **Duration:**
Concentration` on a single line. This is purely optional and does not help unless WSR moves to a
two-column typeset layout in Phase 3.

Current verdict: no action needed. The existing three-line format is readable and scan-friendly in
Markdown.

### Lesson 5: Flag Optional Rules with a Consistent Inline Marker in Headers

AFPT section headers that describe optional rules include "(Optional Rule)" in the header text. This
is the only flag - no color, no box, just the header text.

WSR currently has no convention for optional rules (some subsystems like Allegiance are present in
BRP UGE but WSR's inclusion status is recorded in decisions.md, not visible in the chapter text).

Proposed: add `(Optional)` to any WSR section header covering a rule that the GM can run without.
Example: `### 4.1 Allegiance (Optional)`. This costs nothing in Markdown and immediately signals
to the GM which sections can be skipped in a shorter campaign.

### Lesson 6: Compress Named Antagonist Stat Block Attribute Array in g02

WSR g02 Named Antagonist blocks print each attribute on its own line in the code block. AFPT
compresses its attribute arrays onto one line. WSR's full-name attributes (STR, CON, SIZ, DEX,
INT, POW, CHA) are already abbreviations in the code block. Putting them on one line saves 6 lines
per Named Antagonist block:

```
STR 14 | CON 12 | SIZ 13 | DEX 11 | INT 16 | POW 14 | CHA 15
```

versus:

```
STR: 14
CON: 12
SIZ: 13
DEX: 11
INT: 16
POW: 14
CHA: 15
```

The pipe-separated single line is scannable once the reader knows the attribute order (which is
consistent across all WSR chapters). This change is low-risk and saves meaningful vertical space
in g02, which has many stat blocks.

### Lesson 7: Add Section-Level Quick-Reference Summaries for Long Chapters

AFPT's chapters are short (2-8 pages) because OSR rules are terse. WSR chapters are longer. For
chapters like p05-combat (multi-phase system, major wounds, special attacks) and p06-sorcery (29
spells), a one-page quick-reference summary at the start of the chapter (or as a final section)
would serve the same function as AFPT's compressed rule entries.

For p05: a Sequence of Play summary (see Lesson 1) plus a two-column table of special attack types
(§7) with their key modifiers.

For p06: a summary table of all spells with Cost, Cast Time, Duration in three columns - a player
can scan this to find which spell fits their MP pool without reading each entry.

---

## Recommendations Ranked by Impact

### 1 - Add Combat Sequence Summary List to p05 §1 [HIGHEST IMPACT]

One blockquote or bold-line block at the top of the combat round section. GMs reach for the combat
chapter most during actual play. A 4-item numbered sequence list is the single most useful addition
for at-the-table utility. Effort: 30 minutes. Risk: none.

### 2 - Standardize Sorcery Entry Order in p06 [HIGH IMPACT]

Canonical entry structure: heading, Cost/Cast Time/Duration block (uninterrupted), mechanics,
sub-rules, Cost Notes, literary quote, separator. This removes the need to scan within an entry
for cost information. Effort: 2-3 hours to audit and reorder all 29 entries. Risk: low (no rules
content changes, only order).

### 3 - Collect Literary Quotes into a p06 Appendix Section [HIGH IMPACT]

Separates tone-setting content from procedural content. Reduces average entry length by 2-5 lines.
Aligns with design.md §3.1 principle. Effort: 1-2 hours. Risk: low (additive change - the
appendix section is new, entries just lose their blockquote).

### 4 - Compress Attribute Array in g02 Stat Blocks [MEDIUM IMPACT]

Single-line attribute array saves 6 lines per Named Antagonist stat block. Easy to read once
attribute order is established (it already is consistent). Effort: 30 minutes. Risk: low.

### 5 - Add Sorcery Summary Table to p06 [MEDIUM IMPACT]

A table listing all 29 spells with Cost, Cast Time, Duration. Players use this to plan casting;
GMs use it for NPC sorcerers. Does not replace individual entries. Effort: 1 hour. Risk: none
(additive).

### 6 - Flag Optional Rules in Headers [MEDIUM IMPACT]

Add `(Optional)` to section headers for rules the GM can safely ignore. Zero markup cost. High
clarity gain for new GMs reading the chapter cold. Effort: 15 minutes per chapter. Risk: none.

### 7 - Add Spell Sub-Rule Bullets for Complex Entries [LOW-MEDIUM IMPACT]

Entries like Summon Demon have multiple conditions embedded in prose. Converting these to
arrow-bullet or indented-bullet sub-rules would compress them. Apply only to entries with 3+ edge
cases. Effort: 1 hour. Risk: low (no rules changes, presentation only).

---

## Recommendations to Skip

### Do Not Remove the Designer's Note from p04 §7

AFPT has no designer voice at all. WSR's single designer's note in p04 §7 (Fate Point menu) is
appropriate to the authored-game register WSR is aiming for, distinct from OSR reference material.
One well-placed designer note is a feature. Multiplying them across chapters would be a problem.

### Do Not Adopt AFPT's Cross-Reference Format

AFPT uses "*Section Name, p222*" format. WSR uses "P5 §3" format. WSR's convention is
edition-independent and survives pagination changes. It is superior for a project that will be
published in multiple formats. No change.

### Do Not Adopt AFPT's Abbreviation-Dense Stat Blocks for Mooks

AFPT's inline stat blocks assume readers have memorized what ML, #Att, and Mv mean. WSR's
explicit field names (HP, Move, Armor, Skills) are appropriate for a game that does not have a
40-year familiarity baseline. The WSR Mook block is already compressed to 7 lines; further
compression would harm readability for new GMs. No change.

### Do Not Strip Literary Quotes Entirely

AFPT has no literary quotes. WSR's literary quotes are a deliberate aesthetic choice (genre
lineage, Howard/Leiber/Moorcock). The recommendation is to relocate them to a collected appendix
section, not to remove them. They serve the project's identity; they just do not serve play utility
when interleaved with mechanics.

### Do Not Adopt Two-Column Body Text in Markdown

AFPT's two-column layout is a typeset-book feature. It is not achievable in Markdown without raw
HTML. Phase 3 (GitHub Pages) can adopt two-column layout via CSS. No action in Markdown source.

### Do Not Add Colored Header Boxes in Markdown

Same constraint as two-column. Phase 3 concern. The existing `### Heading` convention is correct
for now.
