## Metals and Joint Preparation

The weld is only as good as the joint it fills. Proper metal identification, appropriate filler selection, and careful joint preparation determine whether the finished weld will meet strength requirements, look right, and not crack or corrode prematurely. This lesson covers the metals you'll encounter and how to prepare them for welding.

---

## Common Metals and Their Weldability

### Mild Steel (Low-Carbon Steel)

The most commonly welded metal. Mild steel (carbon content under 0.30%) is highly weldable — it doesn't harden significantly in the heat-affected zone and doesn't require preheat for most thicknesses.

**Common designations:** ASTM A36 (structural shapes, plate), A108 (bar stock), A500 (hollow structural sections — square and rectangular tubing), A572 (high-strength structural).

**Weldability:** Excellent with any process. Use ER70S-6 filler for MIG/TIG, E7018 or E6010 for stick.

**Prep:** Clean to bare metal within the weld zone. Remove mill scale (the blue-black oxide on hot-rolled steel) for TIG; MIG and stick tolerate mill scale better.

### High-Strength / Medium-Carbon Steel

Carbon content 0.30-0.60%. Stronger than mild steel but more weldability challenges. The HAZ can harden and become brittle (martensite formation), leading to cold cracking.

**Indicators:** Higher hardness than mild steel, springs back harder when bent, material specifications will call out higher yield/tensile strength.

**Weldability:** Requires preheat (temperature depends on carbon content, thickness, and constraint). Low-hydrogen process and filler required (7018, E9018). Interpass temperature control.

**Preheat:** Slows cooling rate in the HAZ, reducing martensite formation and hydrogen cracking risk. Minimum preheat temperatures are specified by AWS D1.1 (Structural Steel) and D1.8 (Seismic) based on carbon equivalent (CE).

**Carbon Equivalent formula:** CE = %C + %Mn/6 + (%Cr + %Mo + %V)/5 + (%Ni + %Cu)/15. CE above 0.40 requires preheat. Above 0.60 requires careful pre- and post-heat treatment.

### Stainless Steel

An iron alloy with a minimum of 10.5% chromium. The chromium forms a passive oxide layer on the surface that provides corrosion resistance.

**Types:**
- **300 series (austenitic):** The most common — 304 and 316 are everywhere. 304 is general purpose. 316 adds molybdenum for improved chloride corrosion resistance (marine, chemical environments). Non-magnetic. Highly weldable but requires care.
- **400 series (ferritic/martensitic):** Magnetic stainless. Less corrosion resistant than 300 series. Ferritic grades are weldable; martensitic grades (440C, 420) require careful heat treatment.

**Stainless welding challenges:**

*Sensitization:* At 800-1500°F (the sensitization range), chromium migrates from solid solution to form chromium carbides at grain boundaries. This depletes chromium from the adjacent zone, reducing corrosion resistance. The result is intergranular corrosion in service. Prevent by:
- Using low-carbon filler grades (ER308L, ER316L — the "L" is for low carbon)
- Minimizing heat input (faster travel, lower amperage)
- Post-weld solution annealing (not always practical)

*Thermal conductivity:* Stainless conducts heat about 1/3 as well as carbon steel. Heat builds up in the weld zone, causing distortion and sensitization. Use skip-welding sequences on long welds, copper backing bars to pull heat away, and tack welds to restrain distortion.

*Filler matching:* Use filler that matches or is compatible with the base metal:
- Welding 304: ER308L filler
- Welding 316: ER316L filler
- Welding 304 to 316: ER316L filler

### Aluminum

Lightweight, corrosion-resistant, excellent electrical conductor. Weldability varies significantly by alloy.

**Alloy series:**
- **1xxx:** Nearly pure aluminum. Highly weldable.
- **3xxx:** Aluminum-manganese. Common in sheet form. Weldable.
- **5xxx:** Aluminum-magnesium (5052, 5086, 5083). Marine grades. Excellent weldability, good strength. ER5356 filler.
- **6xxx:** Aluminum-magnesium-silicon (6061, 6063). The most common structural alloy (6061-T6 is everywhere). Weldable, but the weld zone loses its T6 temper heat treatment — strength in the HAZ drops significantly (often to T0 condition). This is a design consideration.
- **7xxx:** Aluminum-zinc (7075, 7050). High-strength aircraft grades. Generally not recommended for welding — cracking risk.
- **2xxx:** Aluminum-copper. High strength but poor weldability. Generally not welded.

**Cleaning aluminum before welding:**
1. Remove the oxide layer mechanically with a stainless steel wire brush (dedicated to aluminum — using a brush that's touched steel contaminates the aluminum with iron oxide). Brush the weld zone only.
2. Wipe with acetone to remove oils and fingerprints. Aluminum picks up oils easily.
3. Weld promptly — the oxide layer re-forms immediately, but thorough pre-cleaning reduces its thickness.

**Aluminum welding characteristics:**
- High thermal conductivity — heat dissipates rapidly. Preheat (250-350°F) helps maintain puddle temperature on thicker sections.
- Solidification cracking risk: some alloys are more prone. Use ER4043 (more silicon, lower cracking susceptibility) when cracking is a concern. ER5356 for higher strength needs.

### Cast Iron

A high-carbon iron alloy. Found in engine blocks, brake drums, vises, old cookware, and machine bases. Welding cast iron requires care — the high carbon content and brittleness make it crack-prone during the thermal cycle of welding.

**Why it's difficult:**
- Brittle at room temperature (low ductility, doesn't yield before fracturing)
- Carbon migration into the HAZ can create extremely hard zones
- Rapid cooling causes the weld and HAZ to crack as the metal contracts

**Approaches:**
- **Preheat and slow cool:** Preheat the entire casting to 500-1200°F. Weld with nickel-based electrodes (ENi-CI for machinable repairs). Slow-cool — wrap in insulating blankets or bury in sand. Prevents the rapid cooling that causes cracking.
- **Cold welding:** Use low-heat welding (low amperage, short beads) with nickel electrodes. Let each small bead cool before the next. Peening (hammering) each bead immediately while hot relieves stress. Practical for small repairs.
- **Brazing:** For non-structural repairs, brazing (bronze filler, oxyacetylene torch) at lower temperatures reduces cracking risk.

---

## Joint Types

The geometry of how two pieces meet determines the joint type. Each joint type has different accessibility, strength characteristics, and welding requirements.

**Butt joint:** Two pieces meeting edge-to-edge in the same plane. Requires the most consideration for penetration — thin material welds through from one side; thick material needs a groove cut for access to the root.

**T-joint:** One piece perpendicular to another, forming a T. Welded with fillet welds on one or both sides.

**Lap joint:** One piece overlapping another. Welded with fillet welds along the overlap edge.

**Corner joint:** Two pieces meeting at a right angle at their edges. Used in box construction, frames, and vessels.

**Edge joint:** Two pieces side-by-side, joined along their edges. Used for sheet metal seams.

---

## Groove Preparation for Thick Material

Thick material (generally over 3/16" for full-penetration requirements) needs a groove cut into the joint to allow the weld to reach the root.

**Square groove:** No bevel. Used for material up to about 3/16" with MIG, or where back-welding from the opposite side is accessible.

**Single V-groove:** One or both pieces are beveled to form a V-shape when brought together. The included angle is typically 60-70° total (30-35° per side). Allows welding from one side with full penetration.

**Double V-groove:** V-groove on both sides. Used on material over 3/4" — reduces the volume of weld metal required (compared to a single V all the way through) and balances distortion.

**Single bevel:** Only one piece is beveled. Common for T-joint partial-penetration welds.

**J and U grooves:** Curved preparation. Less common, requires machining. More efficient (less weld metal) than V grooves for thick material.

**Root opening:** The gap between the pieces at the base of the groove. A root opening allows the first pass (root pass) to penetrate fully. Typical root opening: 1/16" to 3/32" for most groove welds.

**Root face (land):** A small flat area at the bottom of the bevel. Prevents burn-through on the root pass. Typically 0-1/8".

---

## Cleaning and Preparation

**Grinders:** Angle grinder with a grinding wheel or flap disc removes rust, scale, and parent metal for groove preparation. Use appropriate wheel for the metal — standard grinding wheels contaminate aluminum and stainless.

**Wire brushing:** Stainless steel wire wheels for steel and most metals. Dedicated stainless brushes for aluminum and stainless (to prevent iron contamination). Never use the same brush on multiple metals.

**Chemical cleaning:**
- *Acetone or isopropyl alcohol:* Removes oil, grease, and fingerprints. Standard pre-weld cleaning for aluminum and stainless.
- *Acid pickling (stainless):* Nitric acid or phosphoric acid removes the heat tint and restores passive oxide layer after welding. Critical for corrosion-resistant applications.

**Preheat:**
Applied with a propane or oxy-fuel torch, induction heating, or resistance heating blankets. Measure with a temperature-indicating crayon (Tempilstik), contact thermometer, or infrared thermometer. Preheat requirements vary by material — mild steel rarely needs preheat under 1" thickness; high-strength steel, tool steel, and cast iron almost always do.

**Tack welding:**
Before running continuous welds, tack-weld the joint at intervals to hold fit-up. Tacks should be strong enough to hold the joint under welding distortion. On critical joints, full-size tacks (same size as the finish weld) are required by some codes. On TIG work, tacks with the same filler as the fill passes.
