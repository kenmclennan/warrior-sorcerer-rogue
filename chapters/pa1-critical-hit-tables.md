# PA1. Appendix: Critical Hit Tables

Critical hit tables for use when a Critical Success is scored in melee or ranged combat (P5). Tables are organised by damage type and severity band. Each entry gives a wound and its immediate mechanical consequence. The GM reads or paraphrases the result aloud.

---

## 1. How to Read These Tables

### 1.1 Damage Types

Each weapon deals one of three damage types. The damage type determines which table applies.

| Damage Type | Weapons                                                               |
| ----------- | --------------------------------------------------------------------- |
| **Slash**   | Swords, axes, daggers, knives, falchions, khopesh, scythes            |
| **Pierce**  | Spears, javelins, arrows, crossbow bolts, tridents, stilettos         |
| **Krush**   | Maces, war-clubs, hammers, mauls, staves, slings (stones), warhammers |

The weapon's entry in P7 Equipment lists its damage type. When two types apply (a blade driven into a deep thrust, for instance), the attacker chooses which table to use at the moment the critical is declared.

**Animal and natural-weapon attacks.** Beasts and other non-weapon-using creatures use the same three tables. Map the attack to its mechanical character - bite or rake = Slash, gore with tusk or horn = Pierce, hoof, paw-buffet, or constriction = Krush - and substitute appropriate descriptors when reading the result aloud (fang for blade, claw for edge, hoof for haft, gore for thrust). The mechanical effects (bleed, stun, useless limb, knocked down, bonus damage) apply unchanged.

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

**Major Wound.** Some entries reference "if this causes a Major Wound, [extra effect]." This means: if the critical's total damage (base damage + bonus damage) equals or exceeds the target's Major Wound threshold (half maximum HP), apply the conditional effect. The PA1 entry is the wound description in any case; the Major Wounds Table in P5 §5.2 does not roll for criticals (see P5 §5.1).

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

### 2.1 Band A - Slash

| Roll | Result                                                                                                                                                                                    |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | A glancing cut rakes across the back of the weapon hand; the sting forces the target to readjust their grip - attacks Difficult for 1 round.                                              |
| 2    | A stinging slash opens a thin line across the forearm; +1 bonus damage, no other effect.                                                                                                  |
| 3    | The cut catches the target's knuckles; they must spend their next action adjusting their guard or lose the parry bonus from any shield or parrying weapon for 1 round.                    |
| 4    | A flat-of-blade crack across the collarbone rattles the target's whole arm; parries Difficult for 1 round.                                                                                |
| 5    | A shallow cut along the thigh; +2 bonus damage. The target winces but fights on unimpaired.                                                                                               |
| 6    | The blade skips across a shoulder guard or muscle, leaving a long superficial wound; +1 bonus damage, and the target must parry next round or take 1 additional HP from ignored bleeding. |
| 7    | A slice across the scalp produces spectacular blood flow; the blood in the target's eyes makes their next attack roll Difficult.                                                          |
| 8    | A cut that clips the ear; the sharp pain stuns the target for 1 round.                                                                                                                    |
| 9    | The blade rides along the ribs; +2 bonus damage and attacks Difficult for 1 round.                                                                                                        |
| 10   | A lashing cut across the cheek; +2 bonus damage. The target bleeds.                                                                                                                       |

### 2.2 Band B - Slash

| Roll | Result                                                                                                           |
| ---- | ---------------------------------------------------------------------------------------------------------------- |
| 1    | A solid cut opens the thigh; +3 bonus damage and the target bleeds.                                              |
| 2    | The blade bites into the forearm muscle; +2 bonus damage, attacks Difficult for 2 rounds.                        |
| 3    | A downward stroke opens the shoulder deeply; +3 bonus damage and parries Difficult for 2 rounds.                 |
| 4    | The cut catches the calf and slices into muscle; the target is knocked down and bleeds.                          |
| 5    | A backhand slash opens the side of the jaw; +3 bonus damage, stunned for 1 round.                                |
| 6    | A long cut across the abdomen; +2 bonus damage and both attacks and parries Difficult for 1 round from cramping. |
| 7    | The blade severs a ligament in the sword arm; +3 bonus damage and attacks Difficult for 3 rounds.                |
| 8    | A vicious slash across the upper back forces the target forward; knocked down, +3 bonus damage.                  |
| 9    | The weapon bites deep into the shield arm; +4 bonus damage, parries Difficult for 2 rounds, and bleeds.          |
| 10   | A heavy stroke catches the collarbone and splinters it; +4 bonus damage, attacks Difficult for 3 rounds.         |

### 2.3 Band C - Slash

| Roll | Result                                                                                                                                |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | The blade drives across the bicep and severs a major vessel; +4 bonus damage, bleeds, and attacks Difficult for 2 rounds.             |
| 2    | A slash opens the belly deeply; +5 bonus damage and stunned for 1 round from shock.                                                   |
| 3    | The stroke catches the knee and lays open the joint; +4 bonus damage, knocked down, attacks and parries Difficult for 3 rounds.       |
| 4    | A cut across the windpipe - not severing, but grazing; +3 bonus damage, stunned for 2 rounds.                                         |
| 5    | The blade opens the weapon arm from elbow to wrist; +5 bonus damage, bleeds, attacks Difficult for 3 rounds.                          |
| 6    | A raking cut across the face; +4 bonus damage, stunned for 2 rounds and attacks Difficult for 2 more rounds from tears and blood.     |
| 7    | The slash catches the hamstring; +4 bonus damage, knocked down, and parries Difficult for 3 rounds from impaired stance.              |
| 8    | A stroke to the side cleaves between two ribs; +6 bonus damage and stunned for 2 rounds.                                              |
| 9    | The weapon arm is deeply cut through the forearm and tendons severed; attacks Difficult for 4 rounds, +5 bonus damage, bleeds.        |
| 10   | A sweeping blow opens the throat; +6 bonus damage, bleeds, and the target is dying in 5 rounds unless the wound is bound immediately. |

### 2.4 Band D - Slash

| Roll | Result                                                                                                                                                                        |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | A massive stroke caves in the shoulder joint; the shield arm is useless, +6 bonus damage, bleeds.                                                                             |
| 2    | The blade opens the belly deep; +7 bonus damage, stunned for 2 rounds, bleeds (1 HP/round until bound), and attacks and parries Difficult for 4 rounds.                       |
| 3    | A downward stroke severs the tendon along the sword arm; weapon arm is useless, +5 bonus damage.                                                                              |
| 4    | The weapon catches the throat in a raking cut; +7 bonus damage, attacks Difficult for the rest of the fight from impaired breathing, bleeds heavily (1 HP/round until bound). |
| 5    | A diagonal stroke opens the chest from shoulder to sternum; +8 bonus damage, stunned for 3 rounds, parries Difficult for 4 rounds.                                            |
| 6    | The blade takes the hand at the wrist; weapon arm is useless (the hand is gone), +6 bonus damage, bleeds.                                                                     |
| 7    | A two-handed stroke catches the leg at the knee; the target is knocked down and the leg is useless, +6 bonus damage, bleeds.                                                  |
| 8    | A sweeping cut opens the carotid; +8 bonus damage, bleeds, dying in 3 rounds - the target can take no meaningful action while dying except speak.                             |
| 9    | The blade drives into the armpit and severs what lies there; +8 bonus damage, shield arm useless, dying in 6 rounds.                                                          |
| 10   | A tremendous stroke takes the head half-off; the target is dead immediately.                                                                                                  |

### 2.5 Band E - Slash

| Roll | Result                                                                                                                                                                                                            |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | A devastating cut opens the entire torso; +10 bonus damage, bleeds catastrophically (2 HP/round until bound), and attacks and parries Difficult for the rest of the fight.                                        |
| 2    | The blade shears through the shoulder and takes the arm; shield arm is gone (permanent without sorcery), +10 bonus damage, bleeds (1 HP/round until bound). The target is still alive - and obviously diminished. |
| 3    | A stroke that connects with the base of the neck; +10 bonus damage, target falls unconscious for 1D6 rounds. On waking, attacks and parries Difficult for the rest of the fight from severe neck damage.          |
| 4    | The weapon opens the femoral; +10 bonus damage, leg useless until treated, bleeds heavily (1 HP/round until bound), attacks Difficult for the rest of the fight.                                                  |
| 5    | A rising slash catches under the chin; +10 bonus damage, jaw shattered (cannot speak or cast without sorcerous healing), stunned for 3 rounds, attacks Difficult for the rest of the fight.                       |
| 6    | The blade enters the side of the neck and exits the far side; dead instantly.                                                                                                                                     |
| 7    | A massive diagonal stroke from shoulder to hip; +10 bonus damage, dying immediately - the target has 1 round to say their last words.                                                                             |
| 8    | The weapon opens the skull; dead before the hilt leaves the hand.                                                                                                                                                 |
| 9    | A stroke that drives through the ribcage and into the heart; the target is dead. There is no sound except the body falling.                                                                                       |
| 10   | A blow of such force and precision that the target is cut in two; dead instantly, and any adjacent ally must make a Difficult Luck roll or be frozen in horror, losing their next action.                         |

---

## 3. Pierce Critical Hit Table

Pierce criticals drive past armour into soft tissue. Deep punctures, internal organ damage, and at high bands wounds that cannot be easily reached and bound.

**Roll 1d10 to select the result within each band.**

### 3.1 Band A - Pierce

| Roll | Result                                                                                                                             |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1    | The point finds a gap in the guard and grazes the upper arm; +1 bonus damage.                                                      |
| 2    | A shallow thrust into the outer thigh; +2 bonus damage, the target's stride is disrupted - attacks Difficult for 1 round.          |
| 3    | The tip catches between the fingers; +1 bonus damage, the target must parry next round or drop their weapon on a failed STR roll.  |
| 4    | A jabbing strike to the upper chest; the impact makes the target step back - parries Difficult for 1 round from disrupted footing. |
| 5    | A glancing thrust to the shoulder; +1 bonus damage and attacks Difficult for 1 round.                                              |
| 6    | The point drives through the outer ear; +2 bonus damage, stunned for 1 round from the shock.                                       |
| 7    | A piercing strike to the calf; +2 bonus damage. The target limps but fights on.                                                    |
| 8    | The point enters and exits the cheek; +2 bonus damage. The target cannot shout or command without pain.                            |
| 9    | A shallow thrust to the side; +1 bonus damage, attacks Difficult for 1 round.                                                      |
| 10   | The weapon drives into the shield arm forearm; +2 bonus damage, parries Difficult for 1 round.                                     |

### 3.2 Band B - Pierce

| Roll | Result                                                                                                                                  |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | A clean thrust through the forearm; +3 bonus damage and attacks Difficult for 2 rounds.                                                 |
| 2    | The point drives into the thigh and strikes the bone; +3 bonus damage, knocked down, bleeds.                                            |
| 3    | A thrust to the shoulder joint that finds the socket; +4 bonus damage, parries Difficult for 2 rounds.                                  |
| 4    | The weapon enters the belly; +3 bonus damage, stunned for 1 round from the shock.                                                       |
| 5    | A piercing strike to the weapon arm drives through the muscle; +3 bonus damage, attacks Difficult for 3 rounds.                         |
| 6    | The point catches the side of the knee and enters the joint; +4 bonus damage, knocked down, and movement is halved if the target rises. |
| 7    | A thrust to the outer shoulder; +3 bonus damage, parries Difficult for 3 rounds, bleeds.                                                |
| 8    | The weapon enters the side below the ribs; +4 bonus damage, stunned for 1 round.                                                        |
| 9    | A precise strike finds the armpit; +4 bonus damage, the shield arm hangs - parries Difficult for 2 rounds.                              |
| 10   | A thrust directly into the sternum; +5 bonus damage and stunned for 2 rounds.                                                           |

### 3.3 Band C - Pierce

| Roll | Result                                                                                                                                     |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 1    | The weapon drives into the thigh and severs a vessel; +5 bonus damage, bleeds, attacks Difficult for 2 rounds.                             |
| 2    | A thrust through the upper chest; +5 bonus damage, stunned for 2 rounds.                                                                   |
| 3    | The point enters the weapon shoulder and tears through to the joint; weapon arm useless for 2 rounds, +4 bonus damage, bleeds.             |
| 4    | A deep abdominal wound; +5 bonus damage and attacks and parries Difficult for 2 rounds from the pain.                                      |
| 5    | The weapon pierces the lung; +5 bonus damage, stunned for 2 rounds, and the target can hear themselves breathing with a terrible sound.    |
| 6    | A thrust to the face that enters the cheekbone; +5 bonus damage, stunned for 2 rounds and attacks Difficult for 2 more.                    |
| 7    | The point drives between two ribs and into the intercostal muscle; +6 bonus damage, bleeds internally - +1 HP lost per round for 3 rounds. |
| 8    | A thrust through the shield arm at the elbow; +5 bonus damage, the arm is useless, bleeds.                                                 |
| 9    | The weapon enters the side of the neck; +6 bonus damage, stunned for 2 rounds, bleeds.                                                     |
| 10   | A deep thrust through the gut; +6 bonus damage, dying in 8 rounds unless treated. A terrible wound even if treated - Major Wound applies.  |

### 3.4 Band D - Pierce

| Roll | Result                                                                                                                                                           |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | The weapon drives through the thigh and severs the great vessel there; +7 bonus damage, bleeds heavily (1 HP/round until bound), attacks Difficult for 4 rounds. |
| 2    | A thrust directly into the eye socket; +6 bonus damage, that eye is destroyed, stunned for 2 rounds.                                                             |
| 3    | The point enters the upper chest and partially collapses a lung; +7 bonus damage, attacks Difficult for the rest of the fight from impaired breathing, bleeds.   |
| 4    | A thrust through the gut that exits the back; +7 bonus damage, stunned for 3 rounds, bleeds, attacks and parries Difficult for the rest of the fight.            |
| 5    | The weapon enters the knee joint and destroys it; leg is useless, +6 bonus damage, knocked down. The leg will not heal without sorcerous aid.                    |
| 6    | A thrust through the upper back; +8 bonus damage, stunned for 3 rounds, bleeds.                                                                                  |
| 7    | The point enters the liver; +7 bonus damage, dying in 4 rounds. The target feels nothing for 1 round, then everything at once.                                   |
| 8    | A piercing strike through the throat; +8 bonus damage, dying in 2 rounds - cannot speak or shout.                                                                |
| 9    | The weapon drives through the heart's outer wall; +9 bonus damage, dying in 1 round. Only a Deflect the Killing Blow spend can prevent death.                    |
| 10   | A thrust directly into the heart; the target is dead. The weapon may be lodged - the wielder loses it unless they succeed on a STR roll to pull it clear.        |

### 3.5 Band E - Pierce

| Roll | Result                                                                                                                                                                                                                                        |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | The weapon drives into the upper chest and collapses both lungs in sequence; +10 bonus damage, stunned for 4 rounds, attacks and parries Difficult for the rest of the fight, bleeds.                                                         |
| 2    | A thrust through the weapon arm that pins it momentarily; the arm is useless permanently without sorcerous healing, +8 bonus damage, bleeds.                                                                                                  |
| 3    | The point enters the eye and drives into the skull; +10 bonus damage, eye destroyed, target falls unconscious for 1D6 rounds, on waking permanently loses 1D3 INT.                                                                            |
| 4    | A thrust through the throat that severs the great vessels; +10 bonus damage, target cannot speak or cast spells without sorcerous restoration, bleeds catastrophically (2 HP/round until bound), attacks Difficult for the rest of the fight. |
| 5    | The weapon enters the chest and finds tissue beside the heart; +10 bonus damage, knocked down, attacks and parries Difficult for the rest of the fight, bleeds.                                                                               |
| 6    | A precise thrust between ribs into the left ventricle; dead, instantly and silently.                                                                                                                                                          |
| 7    | The weapon drives through the base of the skull; the target dies without understanding what has happened.                                                                                                                                     |
| 8    | A thrust through both cheeks and into the back of the skull; dead instantly. The death is shocking - all witnesses must make a Luck roll or be stunned for 1 round.                                                                           |
| 9    | The point drives into the spine at the neck; the target drops immediately, paralysed from the neck down, and dying in 3 rounds. Only sorcery can undo the paralysis even if death is averted.                                                 |
| 10   | A strike of terrible precision - into the brain stem through the soft tissue of the jaw; the target ceases to exist as a person in the time it takes to register pain. Dead.                                                                  |

---

## 4. Krush Critical Hit Table

Krush criticals crush bone, rupture organs, and knock targets senseless. They bleed less than Slash but shatter and break more. High-band results destroy joints and cave in skulls.

**Roll 1d10 to select the result within each band.**

### 4.1 Band A - Krush

| Roll | Result                                                                                                                                |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | A hammering blow to the weapon arm; +1 bonus damage, attacks Difficult for 1 round from the numbing impact.                           |
| 2    | The weapon catches the side of the knee; the target's footing fails - knocked down.                                                   |
| 3    | A ringing blow to the side of the head; +2 bonus damage, stunned for 1 round.                                                         |
| 4    | A strike to the shoulder that jars the joint; +1 bonus damage, parries Difficult for 1 round.                                         |
| 5    | The weapon drives into the thigh; +2 bonus damage, the target limps - attacks Difficult for 1 round.                                  |
| 6    | A glancing blow to the forearm numbs the fingers; the target must immediately succeed on a DEX roll or drop whatever is in that hand. |
| 7    | A hammer strike to the back of the weapon hand; +1 bonus damage and attacks Difficult for 1 round.                                    |
| 8    | The blow lands on the shin, splitting the skin over the bone; +2 bonus damage.                                                        |
| 9    | A strike to the chest that drives the air out; +1 bonus damage, the target is winded - stunned for 1 round.                           |
| 10   | The weapon clips the jaw; +2 bonus damage, stunned for 1 round.                                                                       |

### 4.2 Band B - Krush

| Roll | Result                                                                                                                              |
| ---- | ----------------------------------------------------------------------------------------------------------------------------------- |
| 1    | A heavy blow to the weapon arm fractures something in the forearm; +3 bonus damage, attacks Difficult for 3 rounds.                 |
| 2    | The weapon catches the knee and buckles it; +3 bonus damage, knocked down, movement Difficult until rested.                         |
| 3    | A crushing blow to the shoulder; +4 bonus damage, parries Difficult for 2 rounds.                                                   |
| 4    | The strike takes the target across the collarbone; +3 bonus damage, stunned for 1 round, and attacks Difficult for 2 rounds.        |
| 5    | A blow to the ribs; +3 bonus damage and attacks and parries Difficult for 1 round from splinted breathing.                          |
| 6    | The weapon crushes the fingers of the shield hand; +4 bonus damage, the target drops any shield and parries Difficult for 2 rounds. |
| 7    | A side blow to the head; +4 bonus damage, stunned for 2 rounds.                                                                     |
| 8    | A heavy blow to the upper arm; +3 bonus damage, attacks Difficult for 2 rounds, bleeds from the skin splitting over the impact.     |
| 9    | The weapon drives into the thigh; +4 bonus damage, knocked down, and movement is halved.                                            |
| 10   | A crushing strike to the chest over the sternum; +5 bonus damage, stunned for 2 rounds.                                             |

### 4.3 Band C - Krush

| Roll | Result                                                                                                                                                                    |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | The weapon shatters the elbow of the weapon arm; attacks Difficult for 3 rounds, +5 bonus damage.                                                                         |
| 2    | A crushing blow to the side of the skull; +5 bonus damage, stunned for 2 rounds - the target hears a sound like the world ending.                                         |
| 3    | The strike caves in two or three ribs; +5 bonus damage, stunned for 1 round, and both attacks and parries Difficult for 3 rounds from breathing agony.                    |
| 4    | A hammer blow to the knee that destroys the joint; knocked down, leg useless for 3 rounds, +4 bonus damage.                                                               |
| 5    | The weapon drives into the shield shoulder; +5 bonus damage, shield arm useless for 2 rounds.                                                                             |
| 6    | A crushing blow to the jaw; +4 bonus damage, stunned for 2 rounds and the target cannot speak clearly for the remainder of the scene.                                     |
| 7    | The strike takes the weapon arm below the elbow and snaps the forearm; attacks Difficult for 4 rounds, +5 bonus damage, bleeds from the skin-split.                       |
| 8    | A full-force blow to the back of the skull; +6 bonus damage and stunned for 3 rounds.                                                                                     |
| 9    | The weapon caves in the temple; +6 bonus damage, stunned for 2 rounds - if a Major Wound results, the target is dying.                                                    |
| 10   | A blow to the upper spine that sends a shock through the whole body; knocked down, +6 bonus damage, and all actions Difficult for 2 rounds from disrupted nerve function. |

### 4.4 Band D - Krush

| Roll | Result                                                                                                                                                                            |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | The weapon takes the knee entirely; the leg is useless permanently without sorcerous healing, knocked down, +6 bonus damage.                                                      |
| 2    | A crushing blow to the weapon arm at the elbow; the arm is useless, +7 bonus damage.                                                                                              |
| 3    | The strike catches the skull above the ear and staves it inward; +7 bonus damage, target falls unconscious for 1D6 rounds, on waking parries Difficult for the rest of the fight. |
| 4    | A full blow to the ribs over the heart; +7 bonus damage, stunned for 3 rounds, attacks and parries Difficult for the rest of the fight from chest pain.                           |
| 5    | The weapon destroys the shoulder joint; the arm is useless, +7 bonus damage, knocked off balance - knocked down.                                                                  |
| 6    | A direct strike to the face that collapses the nose and cheekbone; +8 bonus damage, stunned for 3 rounds.                                                                         |
| 7    | The weapon caves in the sternum; +8 bonus damage, stunned for 3 rounds, and attacks and parries Difficult for the remainder of the fight from breathing difficulty.               |
| 8    | A blow to the back of the head; +8 bonus damage, the target falls unconscious immediately and is dying in 8 rounds without treatment.                                             |
| 9    | The strike takes the forearm and the bone punches through the skin; weapon arm is useless, +8 bonus damage, bleeds.                                                               |
| 10   | A crushing blow directly to the skull's crown; +9 bonus damage. The target's skull fails. Dead.                                                                                   |

### 4.5 Band E - Krush

| Roll | Result                                                                                                                                                                                                    |
| ---- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | The weapon takes the shield arm at the elbow; the arm is shattered beyond use permanently, +9 bonus damage, bleeds from the split skin.                                                                   |
| 2    | A full-force blow to the upper chest; +10 bonus damage, target falls unconscious for 1D6 rounds, on waking attacks and parries Difficult for the rest of the fight from internal injuries.                |
| 3    | The weapon drives into the side of the skull; +10 bonus damage, target falls unconscious for 1D10 rounds, on waking permanently loses 1D3 INT (the impact has damaged the brain).                         |
| 4    | A blow to the jaw that carries through to the skull; +10 bonus damage, jaw shattered (cannot speak or cast without sorcerous healing), stunned for 5 rounds, attacks Difficult for the rest of the fight. |
| 5    | The weapon strikes the temple with its full weight; +10 bonus damage, target falls unconscious for 2D6 rounds, on waking permanently loses 1D3 to POW or INT (attacker's choice).                         |
| 6    | A blow to the back of the head with the full weight of the swing; the target falls dead and does not twitch.                                                                                              |
| 7    | The weapon strikes the throat and collapses it completely; dying in 2 rounds, cannot speak or call out - dying in silence.                                                                                |
| 8    | A crushing blow to the face that drives bone into the brain; dead before the weapon is withdrawn.                                                                                                         |
| 9    | The weapon catches the skull at its weakest point; +10 bonus damage. If the target survives by any means, they wake with a permanent characteristic reduction of 1D3 to INT or POW (attacker's choice).   |
| 10   | A blow of such force that the target's skull simply ceases to be a skull; dead, and the body falls in a way that will be described for years afterwards.                                                  |

---

## 5. Future Expansion: Burn and Grapple Tables

Burn and Grapple tables are not included in this edition. Interim guidance below.

### 5.1 Burn (Future Table)

Burn damage arises from sorcerous fire, Greek fire, burning oil, and similar sources.

**Interim rule:** Treat Burn criticals as Krush criticals at one band lower (Band C Burn = Band B Krush). Approximates the blunt-trauma shock of extreme heat.

### 5.2 Grapple (Future Table)

Grapple damage arises from unarmed combat, wrestling, creature grabs, and constriction.

**Interim rule:** Treat Grapple criticals as Krush criticals. The wound description references the attacker's grip rather than an implement.
