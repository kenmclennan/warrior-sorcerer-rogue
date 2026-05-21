# Critical Hit Tables

Critical hit tables for use when a Critical Success is scored in melee or ranged combat (P5). Tables are organised by damage type and severity band. Each entry gives a wound and its immediate mechanical consequence. The GM reads or paraphrases the result aloud.

---

## 1. How to Read These Tables

### 1.1 Damage Types

Each attack deals one of five damage types. The damage type determines which table applies.

| Damage Type | Sources                                                                                      |
| ----------- | -------------------------------------------------------------------------------------------- |
| **Slash**   | Swords, axes, daggers, knives, khopesh, kopis, falx, scythes; bites and rakes from beasts    |
| **Pierce**  | Spears, javelins, arrows, tridents, stilettos; tusks, horns, and goring attacks              |
| **Krush**   | Maces, war-clubs, hammers, mauls, staves, slings (stones), warhammers; hooves, paw-buffets   |
| **Burn**    | Sorcerous fire, demonic flame, Greek fire, burning oil, dragon breath, fire elementals       |
| **Grapple** | Unarmed grapples (P3 Grapple skill), creature constricting attacks, joint locks, choke holds |

The weapon's entry in P7 Equipment lists its damage type. When two types apply (a blade driven into a deep thrust, for instance), the attacker chooses which table to use at the moment the critical is declared.

**Animal and natural-weapon attacks.** Beasts and other non-weapon-using creatures use these same tables. Map the attack to its mechanical character: bite or rake = Slash, gore with tusk or horn = Pierce, hoof or paw-buffet = Krush, constricting or grappling attack = Grapple (§6), supernatural flame or fire-touch = Burn (§5). Substitute appropriate descriptors when reading the result aloud (fang for blade, claw for edge, hoof for haft, gore for thrust). The mechanical effects apply unchanged.

### 1.2 Severity Bands

Five severity bands, A through E. The severity band is determined by which matching-dice value triggered the critical:

| Matching-Dice Value | Band |
| ------------------- | ---- |
| 11                  | A    |
| 22, 33              | B    |
| 44, 55              | C    |
| 66, 77              | D    |
| 88, 99              | E    |

**The 01 always-crit special case.** A roll of 01 is always a Critical Success (P4 §2.1). Its severity band is the highest band the character could otherwise reach via matching dice at their effective skill (skill after difficulty modifiers): the 01 crit lands in the same band that the character's best regular crit would land. A novice's lucky shot is mild; a master's lucky shot is devastating.

**Skill vs matching-dice lookup.** Use this table to determine the band for any critical, including the 01 always-crit:

| Effective Skill | **01** | 11  | 22  | 33  | 44  | 55  | 66  | 77  | 88  | 99  |
| --------------- | ------ | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ≤10             | A      | -   | -   | -   | -   | -   | -   | -   | -   | -   |
| 11-21           | A      | A   | -   | -   | -   | -   | -   | -   | -   | -   |
| 22-32           | B      | A   | B   | -   | -   | -   | -   | -   | -   | -   |
| 33-43           | B      | A   | B   | B   | -   | -   | -   | -   | -   | -   |
| 44-54           | C      | A   | B   | B   | C   | -   | -   | -   | -   | -   |
| 55-65           | C      | A   | B   | B   | C   | C   | -   | -   | -   | -   |
| 66-76           | D      | A   | B   | B   | C   | C   | D   | -   | -   | -   |
| 77-87           | D      | A   | B   | B   | C   | C   | D   | D   | -   | -   |
| 88-98           | E      | A   | B   | B   | C   | C   | D   | D   | E   | -   |
| 99+             | E      | A   | B   | B   | C   | C   | D   | D   | E   | E   |

Read across the row for the character's effective skill (after any difficulty modifiers); look up the matching-dice value in the columns. Dashes (-) indicate the value exceeds the character's skill - the roll is a fumble (matching dice + failure), not a critical. The **01** column shows the always-crit's band at each skill range.

A character with skill 20-29 can only reach Band A via matching dice (only 11 is within range), plus Band B if their 01 lucky shot fires at skill 22+. A fighter with skill 80 caps at Band D for matching-dice crits and Critical Buys (the highest reachable matching value is 77, which is Band D). Skill 88+ is required to reach Band E - either by rolling 88 or 99 naturally, or by Critical Buy.

### 1.3 Selecting the Result Within a Band

Roll 1d10. The GM may substitute the result that best fits the fiction (e.g., a result referencing a shield arm when the target has no shield arm). Lower results trend toward disruption; higher results toward the severe end of the band's lethality range.

### 1.4 Reading a Result Entry

Each result: **wound description + mechanical effect**. Read or paraphrase the description; apply the effect immediately. Vocabulary:

**Round counts.** Conditions last the stated number of full combat rounds. A condition lasting "2 rounds" expires at the start of the affected character's action two rounds after the result is applied.

**Attacks and parries Difficult.** The affected character's attack and parry skills are halved for the duration.

**Attacks Difficult.** Only attacks are halved; parries roll normally.

**Parries Difficult.** Only parries are halved; attacks roll normally.

**Bonus damage.** Additional HP damage applied immediately, on top of the attack's base damage. This damage bypasses armour.

**Bleeds.** The target loses 1 HP per round until the wound is bound (a successful First Aid roll, or 1 full round spent binding the wound with cloth - no roll needed, but costs the action).

**Burns.** The target loses 1 HP per round from clinging fire for the stated number of rounds. Extinguished early by spending an action to pat out, roll on ground, or douse with water (no roll required). Catastrophic burns (2 HP/round) typically require Medicine treatment or sorcery to stop, like a severe bleed.

**Useless.** The affected limb cannot be used until the wound is treated and the character rests. A useless weapon arm means weapons must be switched to the other hand (all attacks Difficult until trained); a useless shield arm means no shield bonus to parry.

**Stunned.** The character loses their next action entirely. They may still defend (parry or dodge) at Difficult but cannot attack, cast, or move meaningfully.

**Knocked down.** The character falls prone. Rising costs 1 action.

**Dying.** The character will die in the stated number of rounds unless they receive First Aid (stopping the dying process - a successful roll stabilises them at 1 HP, but they remain unconscious and gravely wounded).

### 1.5 Lethality by Band - At a Glance

| Band | Character of Results                                                                                                                                                                           |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| A    | Disruption only; never fight-ending; costs the target an action or forces a parry                                                                                                              |
| B    | Moderate wounds; brief stuns; possible bleed; parry restrictions                                                                                                                               |
| C    | Fight-altering; stacked conditions; injuries that shift the tactical balance                                                                                                                   |
| D    | Severe wounds. Lower results (1-5): permanent or heavy maiming, deep bleeds, prolonged conditions - severe but not fight-ending. Higher results (6-10): dying or instant death.                |
| E    | Catastrophic. Lower results (1-5): permanent characteristic loss, prolonged unconsciousness, devastating maiming - survivable with intervention. Higher results (6-10): near or instant death. |

Band E results can be survived by a PC with PP remaining for a Deflect the Killing Blow spend (see P4 §7.7). Named antagonists can do the same. Rabble cannot.

> **Sidebar: A Worked Example**
>
> Korrath the Spearman (Spear skill 58%) attacks the city guard. He rolls 22. The roll is both a success (22 is within 58) and a matching-dice value, so it is a Critical Success. The matching value 22 places the result in Band B of the Pierce table. Korrath's player rolls 1d10 and gets a 7.
>
> Band B, result 7 on the Pierce table reads: "The spearhead buries itself in the outer shoulder; the target's parry arm goes numb - parries Difficult for 3 rounds, and +3 bonus damage." The guard's parries are halved for three rounds. The GM applies the bonus damage immediately on top of the spear's base damage roll.
>
> If Korrath had rolled 44, he would be in Band C. If he had rolled a plain 37 (success, no matching dice), there is no critical at all - ordinary success only.

---

## 2. Slash Critical Hit Table


Slash criticals carve flesh, open arteries, and sever tendons. Higher bands attack limbs, faces, and vital organs.

**Roll 1d10 to select the result within each band.**

| Roll | A | B | C | D | E |
| ---- | --- | --- | --- | --- | --- |
| 1 | A glancing cut to the weapon hand forces a regrip; attacks Difficult for 1 round. | A solid cut opens the thigh; +3 bonus damage and the target bleeds. | Blade severs a vessel in the bicep; +4 bonus damage, bleeds, attacks Difficult for 2 rounds. | A massive stroke caves in the shoulder joint; the shield arm is useless, +6 bonus damage, bleeds. | Cut opens the torso end-to-end; +10 bonus damage, bleeds catastrophically (2 HP/round until bound), attacks and parries Difficult for fight. |
| 2 | A stinging slash opens a thin line across the forearm; +1 bonus damage, no other effect. | The blade bites into the forearm muscle; +2 bonus damage, attacks Difficult for 2 rounds. | A slash opens the belly deeply; +5 bonus damage and stunned for 1 round from shock. | Blade opens the belly deeply; +7 bonus damage, stunned for 2 rounds, bleeds, attacks and parries Difficult for 4 rounds. | Blade shears through the shoulder and takes the arm; shield arm permanently gone (without sorcery), +10 bonus damage, bleeds. |
| 3 | A cut to the knuckles; the next action must adjust guard, or lose the shield/weapon parry bonus for 1 round. | A downward stroke opens the shoulder deeply; +3 bonus damage and parries Difficult for 2 rounds. | Stroke opens the knee joint; +4 bonus damage, knocked down, attacks and parries Difficult for 3 rounds. | A downward stroke severs the tendon along the sword arm; weapon arm is useless, +5 bonus damage. | Stroke to the neck-base; +10 bonus damage, unconscious 1D6 rounds; on waking, attacks and parries Difficult for fight. |
| 4 | A flat-of-blade crack across the collarbone rattles the target's whole arm; parries Difficult for 1 round. | The cut catches the calf and slices into muscle; the target is knocked down and bleeds. | A cut across the windpipe - not severing, but grazing; +3 bonus damage, stunned for 2 rounds. | Raking cut across the throat; +7 bonus damage, bleeds, attacks Difficult for fight from impaired breathing. | The weapon opens the femoral; +10 bonus damage, leg useless until treated, bleeds, attacks Difficult for the fight. |
| 5 | A shallow cut along the thigh; +2 bonus damage. The target winces but fights on unimpaired. | A backhand slash opens the side of the jaw; +3 bonus damage, stunned for 1 round. | The blade opens the weapon arm from elbow to wrist; +5 bonus damage, bleeds, attacks Difficult for 3 rounds. | Diagonal cut, shoulder to sternum; +8 bonus damage, stunned for 3 rounds, parries Difficult for 4 rounds. | Rising slash under the chin; +10 bonus damage, jaw shattered (no speech or casting without sorcery), stunned for 3 rounds. |
| 6 | A long superficial cut; +1 bonus damage; must parry next round or take 1 extra HP from ignored bleeding. | A long cut across the abdomen; +2 bonus damage and both attacks and parries Difficult for 1 round from cramping. | Raking cut across the face; +4 bonus damage, stunned for 2 rounds, attacks Difficult 2 more rounds from tears. | The blade takes the hand at the wrist; weapon arm is useless (the hand is gone), +6 bonus damage, bleeds. | The blade enters the side of the neck and exits the far side; dead instantly. |
| 7 | A scalp cut produces spectacular bleeding; the blood in their eyes makes the next attack roll Difficult. | The blade severs a ligament in the sword arm; +3 bonus damage and attacks Difficult for 3 rounds. | The slash catches the hamstring; +4 bonus damage, knocked down, and parries Difficult for 3 rounds from impaired stance. | Two-handed stroke catches the leg at the knee; knocked down, leg useless, +6 bonus damage, bleeds. | Massive diagonal cut, shoulder to hip; +10 bonus damage, dying immediately - 1 round for last words. |
| 8 | A cut that clips the ear; the sharp pain stuns the target for 1 round. | A vicious slash across the upper back forces the target forward; knocked down, +3 bonus damage. | A stroke to the side cleaves between two ribs; +6 bonus damage and stunned for 2 rounds. | A sweeping cut to the carotid; +8 bonus damage, bleeds, dying in 3 rounds (no actions while dying except speech). | The weapon opens the skull; dead before the hilt leaves the hand. |
| 9 | The blade rides along the ribs; +2 bonus damage and attacks Difficult for 1 round. | The weapon bites deep into the shield arm; +4 bonus damage, parries Difficult for 2 rounds, and bleeds. | Weapon-arm tendons severed at the forearm; +5 bonus damage, attacks Difficult for 4 rounds, bleeds. | Blade severs vessels in the armpit; +8 bonus damage, shield arm useless, dying in 6 rounds. | Stroke through the ribcage into the heart; the target is dead. |
| 10 | A lashing cut across the cheek; +2 bonus damage. The target bleeds. | A heavy stroke catches the collarbone and splinters it; +4 bonus damage, attacks Difficult for 3 rounds. | Sweeping cut opens the throat; +6 bonus damage, bleeds, dying in 5 rounds unless bound immediately. | A tremendous cut nearly removes the head; dead immediately. | Cut in two; dead instantly. Adjacent allies must make a Difficult Luck roll or lose their next action in horror. |

---

## 3. Pierce Critical Hit Table


Pierce criticals drive past armour into soft tissue. Deep punctures, internal organ damage, and at high bands wounds that cannot be easily reached and bound.

**Roll 1d10 to select the result within each band.**

| Roll | A | B | C | D | E |
| ---- | --- | --- | --- | --- | --- |
| 1 | The point finds a gap in the guard and grazes the upper arm; +1 bonus damage. | A clean thrust through the forearm; +3 bonus damage and attacks Difficult for 2 rounds. | The weapon drives into the thigh and severs a vessel; +5 bonus damage, bleeds, attacks Difficult for 2 rounds. | Weapon severs the great thigh vessel; +7 bonus damage, bleeds, attacks Difficult for 4 rounds. | Weapon collapses both lungs; +10 bonus damage, stunned for 4 rounds, bleeds, attacks and parries Difficult for fight. |
| 2 | Shallow thrust to the outer thigh; +2 bonus damage, attacks Difficult for 1 round from disrupted stride. | The point drives into the thigh and strikes the bone; +3 bonus damage, knocked down, bleeds. | A thrust through the upper chest; +5 bonus damage, stunned for 2 rounds. | A thrust directly into the eye socket; +6 bonus damage, that eye is destroyed, stunned for 2 rounds. | Thrust pins the weapon arm; +8 bonus damage, arm permanently useless without sorcery, bleeds. |
| 3 | Tip catches between the fingers; +1 bonus damage; parry next round or drop weapon on a failed STR roll. | Thrust into the shoulder socket; +4 bonus damage, parries Difficult for 2 rounds. | Point tears through the weapon shoulder joint; weapon arm useless 2 rounds, +4 bonus damage, bleeds. | Point partially collapses a lung; +7 bonus damage, bleeds, attacks Difficult for fight from impaired breathing. | Point enters the eye and skull; +10 bonus damage, eye destroyed, unconscious 1D6 rounds; on waking lose 1D3 INT. |
| 4 | Jab to the upper chest; parries Difficult for 1 round from disrupted footing. | The weapon enters the belly; +3 bonus damage, stunned for 1 round from the shock. | Deep abdominal wound; +5 bonus damage, attacks and parries Difficult for 2 rounds. | Thrust through gut to back; +7 bonus damage, stunned for 3 rounds, bleeds, attacks and parries Difficult for fight. | Thrust severs throat vessels; +10 bonus damage, no speech or casting without sorcery, bleeds catastrophically (2 HP/round until bound). |
| 5 | A glancing thrust to the shoulder; +1 bonus damage and attacks Difficult for 1 round. | Pierce drives through the weapon-arm muscle; +3 bonus damage, attacks Difficult for 3 rounds. | Weapon pierces the lung; +5 bonus damage, stunned for 2 rounds; breathing makes a terrible sound. | Weapon destroys the knee joint; leg useless, +6 bonus damage, knocked down. Will not heal without sorcery. | Weapon finds tissue beside the heart; +10 bonus damage, knocked down, bleeds, attacks and parries Difficult for fight. |
| 6 | The point drives through the outer ear; +2 bonus damage, stunned for 1 round from the shock. | Point enters the knee joint; +4 bonus damage, knocked down; movement halved if the target rises. | Thrust into the cheekbone; +5 bonus damage, stunned for 2 rounds, attacks Difficult 2 more. | A thrust through the upper back; +8 bonus damage, stunned for 3 rounds, bleeds. | A precise thrust between ribs into the left ventricle; dead, instantly and silently. |
| 7 | A piercing strike to the calf; +2 bonus damage. The target limps but fights on. | A thrust to the outer shoulder; +3 bonus damage, parries Difficult for 3 rounds, bleeds. | Point drives between ribs into the intercostal muscle; +6 bonus damage, bleeds internally - 1 HP/round for 3 rounds. | Point enters the liver; +7 bonus damage, dying in 4 rounds. Felt as nothing for 1 round, then everything. | Weapon drives through the skull-base; dead instantly. |
| 8 | Point enters and exits the cheek; +2 bonus damage; cannot shout or command without pain. | The weapon enters the side below the ribs; +4 bonus damage, stunned for 1 round. | Thrust through the shield-arm elbow; +5 bonus damage, the arm is useless, bleeds. | Pierce through the throat; +8 bonus damage, dying in 2 rounds; cannot speak. | Thrust through cheeks and skull; dead instantly. Witnesses make a Luck roll or be stunned for 1 round. |
| 9 | A shallow thrust to the side; +1 bonus damage, attacks Difficult for 1 round. | Precise strike into the armpit; +4 bonus damage, shield arm hangs, parries Difficult for 2 rounds. | The weapon enters the side of the neck; +6 bonus damage, stunned for 2 rounds, bleeds. | Drives through the heart wall; +9 bonus damage, dying in 1 round. Only Deflect the Killing Blow prevents death. | Point pierces the spine at the neck; paralysed neck-down, dying in 3 rounds. Only sorcery undoes paralysis. |
| 10 | The weapon drives into the shield arm forearm; +2 bonus damage, parries Difficult for 1 round. | A thrust directly into the sternum; +5 bonus damage and stunned for 2 rounds. | A deep thrust through the gut; +6 bonus damage, dying in 8 rounds unless treated. | Thrust into the heart; dead instantly. Weapon may lodge - lose it unless a STR roll pulls it free. | Strike through the soft jaw into the brain stem; dead before pain registers. |

---

## 4. Krush Critical Hit Table


Krush criticals crush bone, rupture organs, and knock targets senseless. They bleed less than Slash but shatter and break more. High-band results destroy joints and cave in skulls.

**Roll 1d10 to select the result within each band.**

| Roll | A | B | C | D | E |
| ---- | --- | --- | --- | --- | --- |
| 1 | Hammer blow to the weapon arm; +1 bonus damage, attacks Difficult for 1 round from numbing impact. | Heavy blow fractures the weapon-arm forearm; +3 bonus damage, attacks Difficult for 3 rounds. | Weapon shatters the weapon-arm elbow; +5 bonus damage, attacks Difficult for 3 rounds. | Weapon destroys the knee; leg permanently useless without sorcery, knocked down, +6 bonus damage. | Weapon shatters the shield-arm elbow; arm permanently useless, +9 bonus damage, bleeds. |
| 2 | The weapon catches the side of the knee; the target's footing fails - knocked down. | Weapon buckles the knee; +3 bonus damage, knocked down, movement Difficult until rested. | Crushing blow to the side of the skull; +5 bonus damage, stunned for 2 rounds. | A crushing blow to the weapon arm at the elbow; the arm is useless, +7 bonus damage. | Full-force blow to the upper chest; +10 bonus damage, unconscious 1D6 rounds; on waking, attacks and parries Difficult for fight. |
| 3 | A ringing blow to the side of the head; +2 bonus damage, stunned for 1 round. | A crushing blow to the shoulder; +4 bonus damage, parries Difficult for 2 rounds. | Strike caves in two ribs; +5 bonus damage, stunned for 1 round, attacks and parries Difficult for 3 rounds. | Strike staves in the skull above the ear; +7 bonus damage, unconscious 1D6 rounds; on waking parries Difficult for fight. | Weapon drives into the skull-side; +10 bonus damage, unconscious 1D10 rounds; on waking permanently lose 1D3 INT. |
| 4 | A strike to the shoulder that jars the joint; +1 bonus damage, parries Difficult for 1 round. | Strike across the collarbone; +3 bonus damage, stunned for 1 round, attacks Difficult for 2 rounds. | Hammer blow destroys the knee joint; +4 bonus damage, knocked down, leg useless for 3 rounds. | Blow to the ribs over the heart; +7 bonus damage, stunned for 3 rounds, attacks and parries Difficult for fight. | Blow to jaw and skull; +10 bonus damage, jaw shattered (no speech or casting without sorcery), stunned 5 rounds. |
| 5 | Weapon drives into the thigh; +2 bonus damage, attacks Difficult for 1 round from the limp. | Blow to the ribs; +3 bonus damage, attacks and parries Difficult for 1 round from splinted breathing. | The weapon drives into the shield shoulder; +5 bonus damage, shield arm useless for 2 rounds. | Weapon destroys the shoulder joint; arm useless, +7 bonus damage, knocked down. | Weapon strikes the temple full-force; +10 bonus damage, unconscious 2D6 rounds; on waking lose 1D3 POW or INT (attacker's choice). |
| 6 | Glancing forearm blow numbs the fingers; succeed on a DEX roll or drop whatever is in that hand. | Weapon crushes the shield-hand fingers; +4 bonus damage, drops any shield, parries Difficult for 2 rounds. | Crushing blow to the jaw; +4 bonus damage, stunned for 2 rounds; cannot speak clearly for the scene. | Strike collapses the nose and cheekbone; +8 bonus damage, stunned for 3 rounds. | Full-force blow to the back of the head; dead instantly. |
| 7 | A hammer strike to the back of the weapon hand; +1 bonus damage and attacks Difficult for 1 round. | A side blow to the head; +4 bonus damage, stunned for 2 rounds. | Strike snaps the weapon-arm forearm below the elbow; +5 bonus damage, attacks Difficult for 4 rounds, bleeds. | Weapon caves in the sternum; +8 bonus damage, stunned for 3 rounds, attacks and parries Difficult for fight. | Weapon collapses the throat completely; dying in 2 rounds in silence; cannot speak or call out. |
| 8 | Blow splits the skin over the shin; +2 bonus damage. | Heavy blow to the upper arm; +3 bonus damage, attacks Difficult for 2 rounds, bleeds. | A full-force blow to the back of the skull; +6 bonus damage and stunned for 3 rounds. | Blow to the back of the head; +8 bonus damage, immediately unconscious, dying in 8 rounds without treatment. | Crushing blow drives facial bone into the brain; dead before the weapon is withdrawn. |
| 9 | Strike drives the air out; +1 bonus damage, stunned for 1 round. | Weapon drives into the thigh; +4 bonus damage, knocked down, movement halved. | The weapon caves in the temple; +6 bonus damage, stunned for 2 rounds. | Strike snaps the forearm, bone through skin; weapon arm useless, +8 bonus damage, bleeds. | Weapon catches the skull at a weak point; +10 bonus damage. If they survive, lose 1D3 INT or POW permanently. |
| 10 | The weapon clips the jaw; +2 bonus damage, stunned for 1 round. | Crushing strike over the sternum; +5 bonus damage, stunned for 2 rounds. | Blow shocks the upper spine; +6 bonus damage, knocked down, all actions Difficult for 2 rounds. | Crushing blow to the crown; +9 bonus damage. Skull fails. Dead. | Skull simply ceases to be a skull; dead, the body falls memorably. |

---

## 5. Burn Critical Hit Table


Burn criticals sear flesh, blind eyes, cook lungs, and consume bodies. Lower bands singe and stagger; higher bands destroy limbs and reduce targets to ash.

**Roll 1d10 to select the result within each band.**

| Roll | A | B | C | D | E |
| ---- | --- | --- | --- | --- | --- |
| 1 | A spit of flame catches the arm; +1 bonus damage, the target slaps it out. | The flame catches the weapon arm and clings; +3 bonus damage, burns for 2 rounds. | Fire engulfs the weapon arm; +5 bonus damage, attacks Difficult for 3 rounds, burns for 3 rounds. | Pillar of flame engulfs the weapon arm; +7 bonus damage, attacks Difficult for 4 rounds, burns for 4 rounds. | Supernatural fire engulfs weapon arm and chest; +10 bonus damage, weapon arm permanently destroyed, burns catastrophically (2 HP/round) until bound. |
| 2 | Fire singes hair and brows; +1 bonus damage, attacks Difficult for 1 round from blinking. | A burst of fire takes the target in the face; +4 bonus damage, stunned for 1 round. | Flame catches the face; +5 bonus damage, stunned for 2 rounds, sight Difficult for 3 rounds. | Fire clings to the chest; +7 bonus damage, stunned 3 rounds, burns 3 rounds, attacks and parries Difficult for fight. | Flames take the legs at the knees; +10 bonus damage, legs permanently destroyed without sorcery, knocked down, unconscious 1D6 rounds. |
| 3 | Flame scorches the weapon hand; +1 bonus damage; succeed on a DEX roll or drop the weapon. | The flames spread across the back; +3 bonus damage, parries Difficult for 2 rounds. | Fire takes the shield-side leg; +5 bonus damage, knocked down, move halved for fight. | Blast scours the eyes; +7 bonus damage, stunned for 2 rounds, vision Difficult. Medicine within 1 day saves sight. | Fire takes the face and eyes; +10 bonus damage, permanent blindness (only sorcery restores), unconscious 1D10 rounds. |
| 4 | Hot ash strikes the face; +2 bonus damage, Spot Difficult for 1 round. | Burning blast catches the legs; +3 bonus damage, attacks Difficult for 2 rounds, move halved for 1 round. | Hammer-blow of heat strikes the chest; +6 bonus damage, stunned for 2 rounds. | Flame ignites hair and scalp; +7 bonus damage, burns for 4 rounds, unconscious 1D6 rounds from shock. | Fire scours lungs and throat; +10 bonus damage, permanently a whisper (no verbal casting) without sorcery, attacks Difficult for fight. |
| 5 | Flame catches the cloak's edge; +1 bonus damage. Spend 1 round patting it out (parries Difficult). | Fire ignites the cloak; +3 bonus damage. Spend 1 round patting it (no attack/parry) or burns for 3 rounds. | Flame runs across the scalp; +5 bonus damage, burns for 3 rounds (slow to extinguish). | Torrent of fire across the legs; +7 bonus damage, move reduced to short for fight, attacks and parries Difficult. | Supernatural fire full-on; +10 bonus damage, unconscious 2D6 rounds; on waking permanently lose 1D3 CON. |
| 6 | Heat scalds the lungs; +2 bonus damage, stunned for 1 round from coughing. | Hot air sears the throat; +4 bonus damage, stunned for 1 round, attacks Difficult for 2 rounds. | Flame catches both arms; +6 bonus damage, attacks and parries Difficult for 3 rounds, burns for 2 rounds. | Fire chars the weapon hand; hand permanently useless without sorcery, +7 bonus damage, burns for 2 rounds. | Flames take the head; body falls dead, head consumed. |
| 7 | Fire glances across the side; +1 bonus damage, parries Difficult for 1 round from slipping. | A licking flame across the shield arm; +3 bonus damage, parries Difficult for 3 rounds. | Fire scorches the throat inside; +5 bonus damage, attacks and parries Difficult for 3 rounds, whisper-only for 3 rounds. | Fire engulfs the head; face destroyed (-1D3 CHA permanent), sight and hearing impaired on one side. | Supernatural fire ashes the target from inside; +10 bonus damage, dying in 1 round; no recovery from the remains. |
| 8 | Burning fragment strikes the cheek; +2 bonus damage, attacks Difficult for 1 round. | Fire catches both forearms; +4 bonus damage, attacks Difficult for 3 rounds, burns for 2 rounds. | Heat collapses the target's footing; +6 bonus damage, knocked down, attacks Difficult for 2 rounds. | Flame ignites the lungs; +8 bonus damage, choking, dying in 5 rounds unless First Aid stabilises. | Fire engulfs the target; cannot be put out, dead in 2 rounds of agony. |
| 9 | Flame catches an exposed forearm; +2 bonus damage, burns for 1 HP next round. | A wave of heat across the chest; +4 bonus damage, stunned for 1 round. | Flames run between the shoulder blades; +6 bonus damage, parries Difficult for fight, burns for 2 rounds. | Supernatural fire scours the body; +9 bonus damage, dying in 4 rounds; burns too deep without sorcery. | Fire opens through chest and out the back; dead before falling, chest consumed. |
| 10 | A hot blast across the shield arm; +2 bonus damage, parries Difficult for 1 round. | Flame strikes the head; +5 bonus damage, stunned for 2 rounds, eyebrows and lashes gone. | Fire takes the eyes; +6 bonus damage, stunned for 2 rounds, vision Difficult. Medicine within 1 day saves it. | Fire engulfs the target entirely; +9 bonus damage, dying in 3 rounds; body continues burning 1D6 rounds after death. | Target incinerated where they stand; dead, only ash remains. Witnesses make a Difficult Luck roll or be stunned 1 round. |

---

## 6. Grapple Critical Hit Table


Grapple criticals dislocate joints, crush bones, choke off breath, and bend bodies past their breaking point. Lower bands wrench and squeeze; higher bands snap necks and crush ribcages.

**Roll 1d10 to select the result within each band.**

| Roll | A | B | C | D | E |
| ---- | --- | --- | --- | --- | --- |
| 1 | Grip catches the weapon wrist; +1 bonus damage; succeed on a DEX roll or drop the weapon. | Grip clamps the weapon arm; +3 bonus damage, attacks Difficult for 2 rounds; STR vs STR each round to free. | Grip dislocates the weapon shoulder; +5 bonus damage, attacks Difficult for 3 rounds (or until Medicine resets). | Constricting hold cracks three ribs; +7 bonus damage, attacks Difficult for fight; cannot run without Stamina roll for an hour. | Hold crushes the ribcage; +10 bonus damage, chest permanently shattered, attacks and parries Difficult; Stamina roll each round or drop. |
| 2 | A hug squeezes the breath out; +1 bonus damage, stunned for 1 round (winded). | Bear hug compresses the ribcage; +3 bonus damage, stunned for 1 round, attacks Difficult for 2 rounds. | Choke closes the throat; +5 bonus damage, stunned for 2 rounds, no speech or casting for 3 rounds. | Grip dislocates the shoulder; weapon arm useless until treated, +7 bonus damage, attacks Difficult for fight. | Grip rips the weapon arm from its socket; arm permanently destroyed without sorcery, +10 bonus damage, bleeds heavily. |
| 3 | The hold catches the shoulder; +2 bonus damage, parries Difficult for 1 round. | The hold catches both shoulders and twists; +4 bonus damage, parries Difficult for 2 rounds. | Hold bends the spine; +5 bonus damage, attacks and parries Difficult for 3 rounds, move halved. | A bear hug squeezes the lungs nearly empty; +7 bonus damage, stunned for 3 rounds, unconscious for 1D6 rounds. | Bear hug compresses the spine; +10 bonus damage, unconscious 1D10 rounds; on waking permanently lose 1D3 DEX. |
| 4 | Constricting hold squeezes the ribs; +1 bonus damage, attacks Difficult for 1 round. | Wrist-lock dislocates fingers; +3 bonus damage, attacks Difficult for 2 rounds. Treatable with First Aid. | Bear hug crushes the lungs; +5 bonus damage, stunned 2 rounds; CON roll or physical actions Difficult 3 rounds. | Choke closes the airway; +7 bonus damage, stunned for 3 rounds; no speech or casting for fight. | Full choke for several seconds; +10 bonus damage, unconscious 1D6 rounds; on waking permanently lose 1D3 INT. |
| 5 | The grip turns the elbow against the joint; +2 bonus damage, attacks Difficult for 1 round. | Grapple traps the target against a surface; +3 bonus damage, knocked down, attacks and parries Difficult for 2 rounds. | Grapple twists the knee; +5 bonus damage, knocked down, move halved for fight. | Grapple twists the leg from the hip; +7 bonus damage, leg useless, knocked down, move short-only for fight. | Grapple destroys the hip joint; +10 bonus damage, leg permanently destroyed without sorcery, knocked down, no weight-bearing. |
| 6 | Wrist-lock twists; drops weapon, parries Difficult for 1 round. | Brief choke takes the throat; +4 bonus damage, stunned for 1 round, attacks Difficult for 2 rounds. | Grip breaks two fingers; +5 bonus damage, attacks Difficult for 3 rounds, drops weapon. | Grip wrenches the neck; unconscious 1D10 rounds; on waking, attacks and parries Difficult for fight. | Grip tears the throat open; +10 bonus damage, dying in 2 rounds, cannot speak. |
| 7 | The hold catches the leg behind the knee; +1 bonus damage, knocked down. | Hold compresses the spine briefly; +4 bonus damage, attacks and parries Difficult for 1 round. | Hold cracks two ribs; +6 bonus damage, attacks Difficult for fight from pain on every breath. | Grappling lock shatters the elbow; weapon arm permanently useless without sorcery, +7 bonus damage. | Grappling lock breaks the neck; dead instantly. |
| 8 | A choke-hold takes the throat briefly; +2 bonus damage, attacks Difficult for 1 round from coughing. | Grip wrenches the weapon shoulder; +3 bonus damage, attacks Difficult for 3 rounds. | Grapple takes the back of the neck; +5 bonus damage, knocked down, stunned for 2 rounds. | Hold bends the spine past breaking; +8 bonus damage, immediately unconscious, dying in 8 rounds. | Hold twists the head past the limit; dead instantly. |
| 9 | The grapple pins the shield arm; +1 bonus damage, no shield bonus to parry for 1 round. | A bear hug squeezes; +4 bonus damage, stunned for 1 round. | Grip twists the shield-arm elbow; +6 bonus damage, shield arm useless until treated, parries Difficult. | Choke breaks something in the throat; +8 bonus damage, dying in 4 rounds from collapsed windpipe. | Constriction crushes the chest; +10 bonus damage, dying in 1 round, cannot draw breath. |
| 10 | Grip twists the weapon wrist; +2 bonus damage, attacks Difficult for 1 round. | The grapple locks the head; +5 bonus damage, stunned for 2 rounds. | Choke takes the throat; +6 bonus damage, dying in 8 rounds unless released (STR vs STR each round to escape). | The grip snaps the neck cleanly; the target is dead immediately. | Grip folds the body; +10 bonus damage, dead instantly. The wound disturbs anyone who sees it. |
