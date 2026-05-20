## Outlets, Switches, and Basic Circuits

Understanding how outlets and switches are wired is the foundation of residential electrical work. Most basic electrical tasks — replacing an outlet, adding a light switch, installing a ceiling fan — use the same fundamental principles.

---

## The Standard Outlet (Receptacle)

A standard 120V duplex outlet has three openings:
- **Hot slot (short slot):** Connects to the black hot wire
- **Neutral slot (long slot):** Connects to the white neutral wire
- **Ground hole (round):** Connects to the bare or green ground wire

On the outlet itself:
- **Gold/brass-colored screws:** Hot terminal (black wire)
- **Silver-colored screws:** Neutral terminal (white wire)
- **Green screw:** Ground terminal

A common memory aid: B-R-A-S-S = B-l-a-c-k (hot), S-I-L-V-E-R = W-h-i-t-e (neutral).

**Polarity matters.** Connect hot to hot and neutral to neutral. Reversed polarity means the neutral conductor is energized — devices still work but are in a more dangerous configuration, and polarity-sensitive equipment will fail.

---

## How a Simple Outlet Circuit Works

```
Panel → breaker → black wire → outlet hot terminal
                → white wire → outlet neutral terminal
                → bare wire → outlet ground terminal → neutral bar at panel
```

When you plug in a device:
- The circuit from hot, through your device, back through neutral is complete
- Current flows; your device operates
- The breaker monitors current — exceeds the rating, it trips

The ground wire carries nothing under normal conditions — it only activates if a fault occurs (the hot conductor contacts the equipment case, for example). The fault current rushes through ground back to the panel and trips the breaker.

---

## Outlet Ampere Ratings

**15A outlets (T-slot or basic):** Standard. Used on 15A circuits. Can also be used on 20A circuits.

**20A outlets:** Have a T-shaped neutral slot. Required on 20A circuits in some applications (kitchen countertop circuits). Indicate that higher-draw appliances can be plugged in.

You'll often see 15A outlets on 20A circuits — this is code-legal. The 20A receptacle is required for specific locations.

---

## Standard Switch (Single-Pole)

A single-pole switch controls a light or outlet from one location. It has two terminals and breaks only the hot wire.

**Wiring a single-pole switch:**
- Hot wire (black) connects to one switch terminal
- The other terminal connects to a wire going to the load (light)
- Neutral bypasses the switch, going directly to the light
- Ground connects to the green screw (if present)

**Switch loop (older method):** In older wiring, both wires in the cable to a light fixture were used in the switch loop — white wire would carry the hot to the switch, black would carry it back. This is why you might see white wires on a switch. These should be marked with black tape to indicate they're acting as hot.

**Current code:** Requires a neutral wire to be available at every switch box. This allows smart switches (which need power to operate their electronics) to be installed.

---

## Three-Way Switches

Three-way switches allow a light to be controlled from two locations (top and bottom of stairs, both ends of a hallway).

Each three-way switch has three terminals:
- **Common terminal (usually darker colored):** The traveler terminal that connects to power (at the first switch) or to the load (at the second switch)
- **Two traveler terminals:** Connect the two switches to each other

The traveler wires (often red and black in 3-wire cable) run between the two switches. Current can take either path through the travelers — the two switches work together to control whether the circuit is complete.

Wiring a three-way switch requires careful attention to which terminal is the "common" — incorrectly wired, it either won't work at all or will only work from one location.

**Four-way switches** allow control from three or more locations. A four-way goes between two three-way switches.

---

## GFCI Outlets

GFCI (Ground Fault Circuit Interrupter) outlets have TEST and RESET buttons on their face. They monitor current imbalance between hot and neutral — if 5 mA or more is unaccounted for (possibly going through a person), they trip in milliseconds.

**Required locations:** Bathrooms, kitchens near sinks, garages, outdoors, crawl spaces, unfinished basements, and near water — per NEC requirements (and state and local codes may add more).

**GFCI protection for a circuit:** A single GFCI outlet can protect all outlets downstream of it on the same circuit. Connect downstream outlets to the LOAD terminals of the GFCI.

The GFCI must be tested monthly with the TEST button.

---

## Reading Circuit Diagrams

Electricians use simple diagrams to plan and document wiring. Basic symbols:
- Rectangle with two parallel lines: battery or power source
- Open rectangle (or zigzag): resistor/load
- Line with dot: junction
- X in circle: light fixture
- S with line through it: switch

You don't need to master circuit diagrams to do basic residential work, but being able to sketch a circuit helps catch wiring errors before they're energized.

---

## Common Mistakes and How to Avoid Them

**Reversed polarity:** Hot and neutral wired backwards. A polarity tester (cheap plug-in device) will immediately tell you.

**Loose connections:** Push-in "backstab" connections on cheap outlets are unreliable. Always use the screw terminals and make a proper 3/4" hook on solid wire. For stranded wire, use wire connectors or rated terminals.

**Improper grounding:** Never leave ground wires unconnected. A missing ground defeats protection.

**Exceeding box fill:** Too many wires in a junction box creates heat and risk. NEC specifies how many wires of each gauge can be in a given box size.

**Forgetting to test:** Use a non-contact tester to verify the circuit is dead before work. Use a receptacle tester after work to verify polarity and grounding are correct.
