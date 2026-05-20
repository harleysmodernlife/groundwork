## Voltage, Current, and Resistance (Ohm's Law)

Electricity is invisible, which makes it seem mysterious. But it follows simple, predictable rules. Understanding these three fundamentals — voltage, current, and resistance — gives you the mental model to understand every electrical system you'll ever work on.

---

## Voltage

Voltage is electrical pressure. It's the force that pushes electrical charge through a circuit. Think of it like water pressure in a pipe — higher pressure pushes more water through.

Voltage is measured in volts (V). Common voltage levels:
- 1.5V — a AA battery
- 9V — a 9V battery
- 12V — car electrical system
- 120V — standard US household outlet
- 240V — large appliances (dryers, ranges, air conditioners)

Voltage is always measured between two points — it's a difference in electrical potential. A 120V outlet has 120 volts between the hot wire and the neutral wire.

**Symbol:** V (volts)

---

## Current

Current is the flow of electrical charge — the actual electrons moving through a conductor. If voltage is the pressure, current is the flow rate.

Current is measured in amperes (amps, A). Common values:
- A smartphone charger draws about 1-2 amps
- A standard household circuit handles 15 or 20 amps
- A household dryer circuit runs at 30 amps
- Electric vehicle chargers can exceed 100 amps

Current is what heats wires. Too much current through a wire generates heat that can start fires — this is why circuit breakers exist.

**Symbol:** I (from the French word "intensité")

---

## Resistance

Resistance is opposition to current flow — the friction in the system. Every material has some resistance; some materials (conductors like copper) have very low resistance; others (insulators like rubber) have extremely high resistance.

Resistance is measured in ohms (Ω).

Resistance causes two things: it limits current, and it converts electrical energy into heat. This is useful in a toaster (intentional resistance generates heat) and dangerous in wiring (unintended resistance at a loose connection generates heat that can cause fires).

**Symbol:** R (resistance)

---

## Ohm's Law

These three quantities are related by Ohm's Law, one of the most useful equations in all of electricity:

**V = I × R**

Or equivalently:
- **I = V / R** (current equals voltage divided by resistance)
- **R = V / I** (resistance equals voltage divided by current)

**Examples:**

A 120V circuit with a resistance of 12 ohms draws how much current?
```
I = V / R = 120 / 12 = 10 amps
```

A device draws 5 amps from a 120V source. What's its resistance?
```
R = V / I = 120 / 5 = 24 ohms
```

**Why this matters practically:**
- If resistance in a connection increases (corrosion, loose terminal), current drops — and the connection heats up
- A short circuit is near-zero resistance — Ohm's law predicts massive current, which is why breakers trip
- Choosing the right wire gauge is about resistance — thicker wire has lower resistance and can carry more current

---

## Power

Related to Ohm's law is the power equation:

**P = V × I**

Power is in watts (W). A 60W light bulb on a 120V circuit draws 0.5 amps. A 1500W space heater draws 12.5 amps.

Combining with Ohm's Law:
- **P = I² × R** (heat generated increases with the square of current)
- **P = V² / R**

The I² relationship explains why wire sizing matters so much. Doubling the current produces four times the heat.

---

## Series and Parallel Circuits

**Series circuit:** Components connected end-to-end. Current must flow through all of them. Total resistance is the sum of individual resistances.

If one component fails (opens), the circuit breaks entirely — old Christmas lights were notorious for this.

**Parallel circuit:** Components connected side-by-side, each with its own path. Voltage across each is the same. Total resistance is less than any individual resistance.

House wiring is parallel — each outlet is its own path, so other outlets still work when one is off or fails.

---

## Direct Current vs Alternating Current

**DC (Direct Current):** Flows in one direction. Batteries produce DC. Most electronics run on DC.

**AC (Alternating Current):** Reverses direction 60 times per second in the US (60 Hz). What comes from your wall outlets. Used for power distribution because it's easier to transform between voltages.

Ohm's Law applies to both, though AC adds complexity (impedance instead of pure resistance) for circuits with inductors and capacitors.
