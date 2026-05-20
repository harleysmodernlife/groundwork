## GFCI and AFCI Protection

Two technologies have dramatically reduced electrical injuries and fires in residential settings: Ground Fault Circuit Interrupters (GFCI) and Arc Fault Circuit Interrupters (AFCI). Understanding what each does, where they're required, and how to test them is essential electrical knowledge.

---

## GFCI: Ground Fault Circuit Interrupter

A ground fault occurs when electricity finds an unintended path to ground — including through a person. A GFCI constantly monitors the difference between current flowing out on the hot wire and current returning on the neutral wire. They should be equal. If there's a difference of 5 milliamps or more, the GFCI trips in 1/40th of a second.

**Why 5 mA?** This threshold is below the level that causes cardiac problems (usually 10+ mA) but above normal leakage currents in healthy wiring and devices (~1 mA). It's not zero because some leakage is unavoidable in wiring and equipment.

**What GFCI protects against:** Electrocution when current flows through a person to ground. The most common scenario: a hair dryer falls in a bathtub, someone reaches in. With GFCI, the device trips before lethal current flows. Without GFCI, the person in the water completes the circuit.

**What GFCI does NOT protect against:** Current flowing hand-to-hand across your body (both hands touching hot and neutral simultaneously). In that case, current goes out on hot and returns on neutral — the GFCI sees balanced current and doesn't trip.

---

## Types of GFCI Protection

**GFCI outlet:** The outlet itself contains the GFCI circuitry. Has TEST and RESET buttons on the face. Can protect itself (local protection) or protect additional outlets wired downstream from its LOAD terminals (circuit protection). One GFCI outlet can protect multiple regular outlets on the same circuit.

**GFCI circuit breaker:** A breaker in the panel that provides GFCI protection for the entire circuit. More expensive but protects the complete circuit, including the wiring. Has a TEST button on the breaker face. Required for some applications where you can't easily reach an outlet to test it.

**Portable GFCI:** A plug-in adapter or power strip with GFCI protection. Used with tools on job sites or in locations without permanent GFCI.

---

## Where GFCI Is Required (NEC 2023)

GFCI is required in locations where electrical equipment might contact water or be used in wet/damp conditions:
- Bathrooms (all outlets)
- Kitchens (all countertop outlets within 6 feet of a sink)
- Garages (all outlets)
- Outdoors (all outlets)
- Unfinished basements
- Crawl spaces
- Near swimming pools, hot tubs, spas
- Boathouses
- Laundry areas

State and local codes may require GFCI in additional locations. Check the applicable code for your jurisdiction.

**Older homes:** If your home was built before GFCI was required in certain locations, you're not required to retrofit — but retrofitting is a smart safety upgrade. You can replace existing two-prong ungrounded outlets with GFCI outlets and label them "No Equipment Ground" — this is code-legal and significantly improves safety.

---

## Testing GFCI

Every GFCI device should be tested monthly.

1. Press the TEST button — this introduces a controlled simulated ground fault
2. The RESET button should pop out and any protected outlets should lose power
3. Press RESET — power should restore

If the GFCI doesn't trip when tested, it has failed and must be replaced. GFCI devices can fail over time, especially in high-humidity environments. A GFCI outlet that looks fine may not be providing protection.

**Receptacle testers with GFCI test button:** Cheap plug-in testers (under $15) show polarity and grounding status and have a button to test GFCI function. More reliable than the TEST button for verifying the outlet is actually protected.

---

## AFCI: Arc Fault Circuit Interrupter

An arc fault is an unintended electrical arc — a spark or series of sparks between conductors. Arcing produces intense, localized heat that can ignite surrounding materials, starting a fire even at current levels too low to trip a standard breaker.

Common causes of arc faults:
- Damaged wire insulation (nail through a wire, wire pinched in a door hinge, pet chewing)
- Loose connections at outlets, switches, or junction boxes
- Damaged appliance cords
- Wires corroded from age

**AFCI detects arc faults** by monitoring the signature of the current waveform. Arcing produces a specific pattern of electrical noise that AFCI electronics recognize. When detected, the AFCI trips the circuit.

**What AFCI protects against:** Electrical fires. Especially from hidden wiring damage inside walls that you'd never see until the wall is burning.

---

## Types of AFCI

**AFCI circuit breaker:** Installs in the panel. Protects the entire circuit, including the branch wiring inside the walls — the most complete protection.

**Combination AFCI:** Provides both AFCI and GFCI protection in one device. This is the modern standard.

**Outlet AFCI:** Outlets with AFCI protection built in. Less common.

---

## Where AFCI Is Required (NEC 2023)

AFCI protection is required for:
- All bedroom circuits (this has been required since NEC 1999)
- Living rooms, parlors, libraries, dens, sunrooms, recreation rooms, family rooms, dining rooms
- Kitchens
- Laundry areas
- Hallways, closets

Essentially, AFCI is now required for nearly all living space circuits in new construction. Existing wiring generally isn't required to be retrofitted (check local code).

---

## GFCI vs. AFCI: Not the Same

These are often confused. Here's the difference:

| Feature | GFCI | AFCI |
|---|---|---|
| Protects against | Ground faults (electrocution) | Arc faults (fires) |
| Trips on | Current imbalance (5 mA) | Arcing signature in waveform |
| Required in | Wet/damp locations | Most living spaces |
| Device type | Outlet or breaker | Breaker (primarily) |

**Dual-function (AFCI + GFCI) breakers** provide both protections. Required in many locations where both apply (kitchen circuits, for example).

---

## Nuisance Tripping

Both AFCI and GFCI can trip unexpectedly:

**GFCI nuisance trips:** Some appliances with internal components (older electronics, some types of lighting, equipment with ground fault leakage above 5 mA) can cause GFCI to trip. If a GFCI trips immediately when something is plugged in, the device has a ground fault — it may be failing.

**AFCI nuisance trips:** Some older appliances and lights (especially fluorescent lights with older ballasts, older vacuum cleaners, and some power tools) create electrical noise that mimics arc fault signatures. Newer AFCI devices have improved filtering to reduce false trips.

If a circuit trips repeatedly without obvious cause, don't just reset — investigate. Repeated tripping is the circuit telling you something is wrong.
