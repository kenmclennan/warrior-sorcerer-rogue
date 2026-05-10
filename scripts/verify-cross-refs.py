#!/usr/bin/env python3
"""Verify cross-references between WSR chapters.

For each "See <ChapterID> §<section>" reference, check:
  - the target chapter file exists
  - the target section exists in that file
"""

import os
import re
import sys
from glob import glob

CHAPTERS_DIR = os.path.join(os.path.dirname(__file__), "..", "chapters")
CHAPTERS_DIR = os.path.abspath(CHAPTERS_DIR)


def chapter_id_to_filename(chapter_id: str) -> str | None:
    """Convert a chapter ID (P4, PA1, G3, GA1) to its filename prefix.

    P4  -> p04
    P12 -> p12
    PA1 -> pa1
    G3  -> g03
    GA1 -> ga1
    """
    m = re.match(r"^(P|G)(A)?(\d+)$", chapter_id)
    if not m:
        return None
    book = m.group(1).lower()
    appendix = (m.group(2) or "").lower()
    num = m.group(3)
    # Pad numeric chapters to 2 digits; appendices keep their natural number
    if appendix:
        return f"{book}{appendix}{num}"
    else:
        return f"{book}{int(num):02d}"


def find_sections(filepath: str) -> set[str]:
    """Find all section numbers in a chapter file.

    Matches `## N.`, `### N.M`, `### N.M.K` patterns at the start of a line.
    Returns a set of section identifiers like {"1", "1.1", "2.4", "3.3.1"}.
    """
    sections = set()
    with open(filepath) as f:
        for line in f:
            m = re.match(r"^#{2,4}\s+(\d+(?:\.\d+){0,3})\.?\s", line)
            if m:
                sections.add(m.group(1))
    return sections


def main() -> int:
    files = sorted(glob(os.path.join(CHAPTERS_DIR, "*.md")))
    files = [f for f in files if not os.path.basename(f).startswith("_")]

    # Build chapter map: chapter_id -> (filename, set of sections)
    chapter_map: dict[str, tuple[str, set[str]]] = {}
    for filepath in files:
        name = os.path.basename(filepath)
        # Extract chapter ID from filename
        m = re.match(r"^([pg]a?\d+)-", name)
        if not m:
            continue
        prefix = m.group(1)
        # Normalize back to chapter ID form: p04 -> P4, pa1 -> PA1, g07 -> G7
        upper = prefix.upper()
        # P04 -> P4, G03 -> G3, but PA1 stays PA1, GA1 stays GA1
        norm = re.sub(r"^(P|G)0(\d)$", r"\1\2", upper)
        chapter_map[norm] = (name, find_sections(filepath))

    # Find all cross-references
    ref_re = re.compile(r"(?:See|Per|See also)\s+([PG]A?\d+)\s*§\s*(\d+(?:\.\d+){0,3})")
    all_refs = []
    broken = []
    for filepath in files:
        name = os.path.basename(filepath)
        with open(filepath) as f:
            for lineno, line in enumerate(f, 1):
                for m in ref_re.finditer(line):
                    target_chapter = m.group(1)
                    target_section = m.group(2)
                    all_refs.append((name, lineno, target_chapter, target_section))

                    if target_chapter not in chapter_map:
                        broken.append(
                            (name, lineno, f"unknown chapter {target_chapter}")
                        )
                        continue

                    target_sections = chapter_map[target_chapter][1]
                    if target_section in target_sections:
                        continue
                    # Allow subsection matches: ref §3 valid if ### 3.1 exists
                    if any(s.startswith(target_section + ".") for s in target_sections):
                        continue
                    broken.append(
                        (
                            name,
                            lineno,
                            f"section §{target_section} not found in {target_chapter} "
                            f"(available: {', '.join(sorted(target_sections)) or 'none'})",
                        )
                    )

    print(f"Chapters indexed: {len(chapter_map)}")
    print(f"Cross-references found: {len(all_refs)}")
    print(f"Broken references: {len(broken)}")
    if broken:
        print()
        for filename, lineno, message in broken:
            print(f"  {filename}:{lineno} - {message}")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
