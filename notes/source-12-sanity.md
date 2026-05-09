# Source Notes: Sanity (BRP UGE pp. 258-261)

**Section:** Chapter 10 / Settings / Sanity (Option)
**Pages:** 258-261
**Reviewer:** Phase 1 Task 2 - Sanity agent
**Date:** 2026-05-09

---

## Recommendation

**Adopt Option B: SAN as a sorcery-specific corruption track, renamed and reframed.**

Drop the generic psychological-stability framing entirely. Repurpose the mechanical skeleton - starting value, loss triggers, temporary/permanent thresholds, recovery - as a **Corruption track** that only sorcerers accumulate. Non-sorcerers do not have SAN or Corruption at all; they face blood and bone consequences (wounds, death, ruinous debts) rather than fractured minds.

**Rationale citing design.md:**

- design.md §2.2: magic is "alien, costly, and corrupting." A corruption track directly delivers "corrupting" as a mechanical reality rather than a narrative assertion. The PP pool (shared with Fate Points) covers the moment-to-moment cost; the Corruption track covers the long-arc cost - the slow divergence from ordinary humanity that defines the Moorcock sorcerer.
- design.md §2.1: "Moorcock's doom colors sorcerous and cosmic scenarios." The Corruption track IS Moorcock's doom, mechanized.
- design.md §1.2, feature 6: "Every step into [sorcery] costs something - corruption, debts to powers, the attention of things that shouldn't notice you." The source hands us a corruption mechanic already scaled to BRP. Use it.
- design.md §1.1: Howard's tone is "blood and bone" - SAN-as-cosmic-horror is Lovecraftian, not Howardian. Restricting Corruption to sorcerers keeps the warrior and rogue on Howard's register while letting the sorcerer tip into Moorcock.
- design.md §4.2: "Magic-using PCs make a third kind of decision: whether to pay the cost." A Corruption track makes that cost visible and cumulative, not just transient.

**Against Option A (drop entirely):** PP + Fate Points sharing is a meaningful per-spell cost, but it is recoverable. It does not produce the long-arc doom of Elric's soul-debt or the sorcerer who can no longer walk among ordinary people. "Alien, costly, and corrupting" (§2.2) requires a persistent track; recovery after a night's rest is not corruption.

**Against Option C (universal trauma for all PCs):** The source's SAN loss table is saturated with cosmic-horror triggers - monstrous alien gods, freakish creatures, horrible transformations. Applying this universally makes WSR feel like Call of Cthulhu with swords. Warriors and rogues should not be rolling SAN checks because they saw a zombie. They should be killing the zombie and moving on.

**The hybrid note:** If the GM wants to inflict a SAN-like consequence on a non-sorcerer who witnesses something truly beyond the mortal register (a Greater Demon unbound, an Old Power manifesting physically), that is a valid spot rule. But it should be exceptional and GM-adjudicated, not a universal mechanic on all characters. The source's table provides the cost scales when that call is made.

---

## SAN Mechanic Summary

### Starting Value

- SAN is an optional characteristic equal to **POW x 5** at creation.
- SAN does not change when POW later changes (it is fixed at starting POW).
- **Temporary Insanity Score (TIS)** = half the character's starting SAN. TIS is permanent and never changes.
- Optional GM variant: TIS = POW (not half-SAN), yielding a higher insanity rate for grimmer settings.

### How SAN is Lost

- When exposed to a Sanity-challenging event, the character rolls against their current SAN on D100.
- **Success:** less SAN is lost (the lower value in the Potential Loss column).
- **Failure:** more SAN is lost (the higher value).
- In some cases, an especially horrible experience costs SAN even on a success.
- The GM rolls for how much SAN is lost when the roll fails.

### Temporary Insanity

- If a character loses SAN greater than or equal to their TIS in a **five-minute period (one turn)**, they go temporarily insane.
- Roll **1D6** on the Temporary Insanity table; roll **1D8** on the Temporary Insanity Duration table.

**Temporary Insanity Table (1D6)**

| Result | Effect |
|--------|--------|
| 1 | Catatonia - character assumes fetal position |
| 2 | Stupefaction - babbles incessantly or stares into space |
| 3 | Paranoia - lucid but convinced of unreasonable suspicions |
| 4 | Phobia - gripped by great fear of something related to the SAN source |
| 5 | Amnesia - cannot remember who they are or what happened |
| 6 | Suicidal despondency / death-wish* |

*Source notes the suicidal result must be handled with care and a character can never be forced to perform a suicidal act.

**Temporary Insanity Duration Table (1D8)**

| Result | Duration |
|--------|----------|
| 1 | Five minutes (one turn) |
| 2 | One hour |
| 3 | Two hours |
| 4 | Twelve hours |
| 5 | One day |
| 6 | Two days |
| 7 | One week |
| 8 | Two weeks |

Recovery from temporary insanity: time, counseling, potent drugs, some powers, or divine intervention.

### Permanent Insanity

- When SAN reaches **0**, the character is permanently and completely insane.
- They are either retired from play or become an NPC under GM control.
- The only cure for permanent insanity is divine intervention or some other major process (years of therapy, extensive psychological reprogramming) - determined by the GM if possible at all. The amount of SAN restored is set by the GM.

### Maximum Sanity Cap

- Certain skills reduce a character's maximum possible SAN. Specifically: the **Blasphemous Lore** specialty of the Knowledge skill reduces the maximum SAN the character can ever hold.
- Formula: 100 - Blasphemous Lore skill% = maximum possible SAN.
- This cap can fall below the character's original starting SAN.
- Example: starting SAN 75 (POW 15x5), Knowledge (Blasphemous Lore) 43% - maximum SAN becomes 57 (100-43=57).

### Restoring SAN

Characters can regain lost SAN, but never above their starting maximum. Methods:

- **Success:** Defeating or destroying a cause of SAN loss - worth up to half the potential SAN loss that source threatened. GM determines exact amount; applies to all who participated in the defeat.
- **Counseling:** Psychotherapy skill roll; success regains 1D3-1 SAN.
- **Drugs:** Some substances restore SAN at GM's discretion.
- **Powers:** Several psychic abilities and the Transfer superpower can restore SAN. (Not relevant to WSR.)
- **Self-improvement:** Attaining a 91% rating in a skill instantly restores 2D6 SAN (one-time bonus; no gain if character started with 91%+).

### Sanity Costs by Situation

The source provides a Sanity Losses table. The "Potential Loss" column format is: success-result/failure-result.

| Source of SAN Loss | Potential Loss |
|---|---|
| Something unsettling and grotesque, or a sudden scare | 0/1 |
| Minor unnatural creatures (zombies, werewolves, vampires, etc.) | 0/1D3+ |
| Scene of a violent death, finding a dead body | 0/1D3 |
| Finding a mutilated or mangled body | 1/1D4 |
| Witnessing a gruesome death | 1/1D6 |
| Suffering minor torture | 1D3/1D6 |
| Reality-challenging visions (Chaos, unnatural corruption, etc.) | 0/1D8 |
| Freakish and horrible monsters | 1D2+/1D6+ |
| Being afflicted by some horrible transformation | 1D6/2D10 |
| Monstrous alien gods | 1D10/1D100 |

Multiple exposures to the same source: GM may lessen effects of later exposure - allow totals to add up to the possible rolled max, or ignore repeat rolls if the character has become desensitized.

---

## Canonise / Drop / Modify / Defer

### Drop

- **SAN as a universal characteristic for all PCs.** Warriors and rogues do not have SAN or a corruption track. Applying universal SAN makes WSR feel like CoC-with-swords rather than sword & sorcery. Per design.md §1.3 ("not cosmic horror") and §1.1 (Howard tone).

- **The psychological-stability framing.** The source explicitly frames SAN as the "stability of the human mind." This is Lovecraftian. WSR should not use the word "Sanity" or the "SAN" abbreviation in the final text. The mechanic is kept; the framing is stripped.

- **Counseling / Psychotherapy recovery.** In WSR's ancient-world setting there are no psychotherapists. This recovery route is dropped; the skill itself may be dropped from the skill list (flagged in the Skills notes). Per design.md §1.2, feature 3 (ancient world).

- **Powers and Transfer superpower recovery.** These are post-apocalyptic / superhero power-set options entirely outside WSR's scope. Drop.

- **The Blasphemous Lore maximum-SAN-cap rule (as written).** The specific Knowledge (Blasphemous Lore) implementation is CoC-lineage flavor. However, the underlying mechanic - that deep arcane knowledge permanently lowers a sorcerer's ceiling - is extremely genre-appropriate and should be Modify-kept in reframed form.

- **SAN recovery via self-improvement (91% skill milestone).** This is a generic system artifact. It makes no thematic sense as a Corruption-track recovery mechanism. Drop.

- **The source's trigger table (most entries).** "Scene of a violent death," "finding a dead body," "witnessing a gruesome death," "suffering minor torture" - these are horror-game triggers that would fire constantly in a sword & sorcery game where the PCs kill people for a living. Drop all non-sorcerous triggers from the PC-facing rules. Keep the cost-scale table as GM reference material for the rare exceptional case.

### Canonise (with rename/reframe)

- **The core mechanic skeleton:** starting value as a characteristic derived from POW, a fixed threshold (half starting value) that triggers immediate consequences when a large loss occurs in a short window, and a scale from temporary consequence to permanent retirement. This three-tier architecture (stable / temporarily broken / permanently broken) is the right shape for a corruption track.

- **Temporary consequence tables.** The 1D6 effect table and 1D8 duration table are clean and functional. With renamed and reframed results they serve Corruption perfectly: a sorcerer who burns too much of themselves too fast in one session suffers a temporary collapse - visions, compulsions, fugue states - without being permanently destroyed. The duration table (5 minutes to 2 weeks) gives appropriate stakes at different severity levels.

- **The permanent-retirement threshold (track reaching 0).** A sorcerer who pushes Corruption to its limit is lost - retired from play or becomes an NPC under GM control. This is a meaningful consequence that creates real long-arc pressure.

- **Multiple-exposure desensitization.** The rule that repeated exposure to the same source can be ignored or capped is worth keeping. A sorcerer who regularly summons demons becomes inured to lesser demons; Greater Demons and Old Powers still cost full Corruption. Per design.md §2.5 (PCs grow in experience, not just power).

- **The defeat-as-recovery mechanic.** Destroying a source of Corruption can restore some of the track. Reframed: a sorcerer who binds and destroys the demon that has been degrading their soul recovers some of what was taken. Clean, incentivizes active engagement with sources of danger rather than avoidance.

### Modify

- **Starting value:** Keep POW x 5 formula. In WSR this becomes the sorcerer's **Corruption Resistance** (working title) - how much degradation their soul can sustain before they are lost. Mechanically identical; only the name and framing change.

- **The TIS threshold:** Keep half-starting-value as the "acute crisis" trigger. Rename to something like **Corruption Threshold** or **Breaking Point**. When a sorcerer accumulates Corruption losses equal to their Breaking Point in a single session (or single turn - see Open Questions), they suffer an acute episode.

- **Temporary insanity effects:** Retain the mechanical structure but reframe the table entries for WSR tone. Catatonia becomes fugue-state possession (the sorcerer stares as something looks out through their eyes briefly). Paranoia becomes certainty of demonic surveillance. Amnesia becomes an hours-long episode of speaking in a dead language. Suicidal despondency becomes a compulsion toward a dangerous offering. These are sorcery-specific, not generic psychological collapse.

- **The Knowledge (Blasphemous Lore) maximum-cap mechanic:** Reframe as: the deeper a sorcerer's grimoire study, the lower their maximum Corruption Resistance ceiling (working title). A sorcerer who has memorized the Names of the Outer Powers can never be as whole as an ordinary person; the knowledge itself eats capacity. This is one of the most genre-correct mechanics in the source and should be preserved in modified form.

- **Recovery - "defeating the source":** Keep and emphasize. Reframe to: a sorcerer who destroys or permanently banishes the demonic entity or dark force responsible for a Corruption episode can recover up to half the lost Corruption. The GM sets the exact amount. Incentivizes sorcerers to hunt what is hunting them, which is extremely genre-correct.

- **Recovery - drugs:** Keep in limited form. Ritual preparations (alchemical, herbal, the black lotus, the white-blossomed plant grown on a corpse's chest) can restore small amounts of Corruption at the GM's discretion. No pharmaceutical framing; these are ritual/alchemical substances appropriate to the ancient world.

- **The cost-scale table:** Repurpose as the Corruption cost table for sorcerous events specifically. Triggers to keep and reframe:
  - Reality-challenging visions (Chaos, corruption) - 0/1D8: keep, reframe as what a sorcerer sees when they cast past their safe threshold.
  - Being afflicted by some horrible transformation - 1D6/2D10: keep for sorcerers who lose control of a self-affecting spell.
  - Freakish and horrible monsters - 1D2+/1D6+: keep as the cost of encountering a Greater Demon unbound.
  - Monstrous alien gods / Old Powers - 1D10/1D100: keep as the extreme upper end; meeting an Old Power physically is potentially catastrophic.
  - Triggers tied to violence (finding bodies, witnessing deaths) - drop from PC-facing rules entirely.

### Defer

- **The sorcery cost integration decision.** Whether Corruption is the primary second-track cost (alongside PP), or whether it applies only to specific categories of sorcery (demon summoning, Old Power invocation, casting past PP exhaustion), needs a design call at chapter-drafting time. This directly intersects with the six sorcery cost options documented in `notes/source-1-sorcery.md`. Per design.md §3.3.

- **The triggering window for acute episodes.** The source uses "five-minute period (equal to one turn)." For WSR this needs a decision: is the acute episode window a single combat encounter, a single scene, a single session, or literally five in-game minutes? The answer changes how frequently acute episodes occur. Shorter window = rarer but more surprising; session-length window = consistent long-arc pressure.

- **Whether non-sorcerers get Corruption exposure in extreme cases.** If a warrior stands inside a Great Summoning circle when a Greater Demon manifests, does that cost them Corruption? The recommendation is no (the track is sorcerer-only), but the GM may want a one-time extreme-case rule. This is a GM Book sidebar question.

- **The Corruption track name.** "Corruption" is a working title. Alternatives: Soul Toll, Doom, Marks (as in "the marks sorcery leaves"), Dark Debt, the Wound. Needs a final prose pass.

---

## Open Questions

1. **Triggering events for the sorcery-specific Corruption track.** What casts cost Corruption? Options: (a) every spell cast, scaled by spell level; (b) only summoning and binding; (c) only casting past PP exhaustion; (d) only demon and Old Power contact; (e) all of the above at different scales. This is the central design call and cannot be made until the sorcery cost mechanic decision is resolved.

2. **Corruption scale vs. PP scale.** If Corruption starts at POW x 5, a sorcerer with POW 16 starts with Corruption Resistance 80. How fast should this drain over a campaign? Enough to feel threatening in early sessions, or a slow burn across many adventures? Affects spell-cost design.

3. **Should Warriors and Rogues have any psychic-stability mechanic at all?** The genre does include non-sorcerers who are broken by what they've seen (Howard's explorers who go mad in the ruins, Leiber's Mouser after a particularly bad evening with sorcery). A very lightweight version - no track, just a one-time roll at GM discretion for extraordinary events - might be appropriate for the GM Book without appearing in the Player Book.

4. **Recovery rate.** The source's counseling recovery (1D3-1 SAN per successful Psychotherapy roll) is gentle and cumulative. For WSR's Corruption track, what is the baseline recovery? Per-session downtime? Per-adventure? Some rituals only?

5. **The Blasphemous Lore cap and character creation.** If deep arcane knowledge permanently lowers a sorcerer's Corruption ceiling, does this interact with the grimoire-based learning system? A sorcerer who has studied more spells has a lower maximum - which means more experienced sorcerers are closer to the edge. This produces excellent long-arc pressure but needs explicit mechanical integration.

6. **Sorcery source file cross-reference.** `notes/source-1-sorcery.md` identified Allegiance points toward chaotic/cruelty forces as another potential corruption scaffold. Should Corruption and Allegiance be two separate tracks, or should Allegiance accrue as a side-effect of Corruption loss? If Allegiance is not canonised (deferred in its own notes), this question may resolve itself.

---

## Watch-Items

### Character distinctiveness

**Significant match for sorcerers.** The Corruption track + the Blasphemous Lore ceiling creates a sorcerer-specific long-arc arc that no other character type shares. Two sorcerers with the same spells will diverge visibly over a campaign as their Corruption marks accumulate and their ceilings erode differently. Per design.md §3.1 ("make characters feel distinctive without classes"). The Corruption track is one of the strongest distinctiveness-without-classes levers in the system if implemented well.

### Party cohesion

**Indirect match.** The Corruption track does not directly create party-cohesion mechanics, but it creates an asymmetry that flavors inter-party dynamics: the warrior and rogue who are unmarked watching the sorcerer accrue Corruption is a relationship generator. The sorcerer's deterioration gives the rest of the party something to respond to - concern, wariness, exploitation, loyalty, interventions. Not a cohesion mechanic per se, but a cohesion driver.

### Mook rules

**No match.** The Sanity section has no mook-handling implications. One tangential note: the "multiple exposure desensitization" rule is a useful mook-adjacent precedent - if the PCs fight zombies every session, the zombie encounter should not cost full Corruption each time. This is the source's own answer to mook-scale desensitization.

### Sorcery cost

**Primary match.** This section, reframed, is Option D from `notes/source-1-sorcery.md` ("Sanity / Corruption Track"). The recommendation here is to canonise Option D as the second-track cost that operates alongside PP (making it Option F from that file - a hybrid). PP handles the tactical, per-spell cost; Corruption handles the strategic, per-campaign cost. The sorcery cost decision cannot be finalised until the user sees all six source options; this notes file provides the full mechanical detail needed to evaluate Option D/F.

---

## Book Placement

**Split: mostly GM Book, with a summary in Player Book.**

- **Player Book** contains: the existence and name of the Corruption track, how it starts (POW x 5), what causes it to grow (summary table of sorcery-specific triggers), what happens at the Breaking Point (temporary episode, effects and duration tables), and what happens when it reaches 0 (retirement / GM control). This is the player's side: what they can do, what it costs, what the stakes are.

- **GM Book** contains: the full trigger table with GM guidance on adjudicating Corruption cost for edge cases, recovery rules and their adjudication (destroying the source, ritual substances, the Blasphemous Lore ceiling), advice on pacing Corruption across a campaign, guidance on what temporary insanity looks like in a sword & sorcery register (i.e., not "babbling incoherently" but "speaking in the tongue of the demon that is eating your soul"), and the rule for whether non-sorcerer characters can ever be exposed in extreme cases.

**Reasoning:** The Corruption track is partly a player-facing resource (they need to know how full their track is and what happens when it triggers) and partly a GM tool (adjudicating costs, pacing recovery, describing episodes). The split follows the same logic as the Sorcery chapter split: the player knows what their character can do and what it costs; the GM knows what happens on the other side of the ritual circle. Per design.md §3.1 (Player Book / GM Book division).
