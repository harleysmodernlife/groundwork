## Thermostats and System Controls

The thermostat is the interface between the occupant and the HVAC system. Understanding how thermostats work, the wiring behind them, and the control logic of HVAC systems is essential for installation, troubleshooting, and system setup.

---

## How a Thermostat Works

A thermostat measures indoor temperature and controls the HVAC system to maintain a set point. When temperature deviates from the set point, the thermostat sends signals to the equipment to call for heating or cooling.

**The basic control loop:**
1. Occupant sets the desired temperature (set point)
2. Thermostat senses actual temperature
3. If actual < set point: thermostat calls for heat
4. If actual > set point: thermostat calls for cooling (if AC is set to active)
5. Equipment runs until actual temperature reaches set point
6. Thermostat stops the call

---

## Thermostat Wiring

Thermostat wiring uses low-voltage control wires (18-24 gauge, typically 18 AWG multi-conductor cable) carrying 24V AC from the HVAC equipment's transformer. The wire terminals are labeled by letter codes:

**Common terminals:**

| Terminal | Label | Function |
|---|---|---|
| Common (ground return) | C | 24V common return — required for smart thermostats |
| Cooling | Y or Y1 | Calls the compressor for cooling |
| Heat | W or W1 | Calls for first-stage heat |
| Fan | G | Runs the air handler fan independently |
| Reversing valve | O or B | For heat pumps — switches between heating and cooling mode |
| Second stage heat | W2 | Second heat stage (heat pumps: auxiliary/emergency heat) |
| Second stage cool | Y2 | Second compressor stage (two-stage systems) |

**The C wire:** The "common" wire completes the 24V circuit for the thermostat's electronics. Older thermostats used battery power and didn't need it. Modern smart thermostats draw power from the system — they need the C wire. Many older systems didn't run a C wire; adding one sometimes requires running a new cable or using adapter kits.

**Heat pump wiring:** Heat pump systems use O or B terminals instead of W for primary heat. O energized = cooling mode (most brands). B energized = heating mode (Rheem/Ruud). Getting this backwards makes the system heat when you want cooling and vice versa.

---

## Types of Thermostats

**Manual (non-programmable):** Basic dial or digital display. Set the temperature, the system maintains it. Simple but energy-inefficient — people forget to adjust when away or sleeping.

**Programmable:** Set schedules for different times of day and days of the week. "Setback" during sleeping hours and away periods reduces energy consumption. Most code and utility programs recommend:
- Set back 8-10°F during sleeping hours
- Set back during consistently unoccupied periods

**Smart thermostats (Wi-Fi connected):** Connect to Wi-Fi, controlled by smartphone app. Features vary:
- Remote temperature adjustment
- Learning algorithms (Nest) that adapt to your schedule
- Geofencing (adjust based on your location — set back when you leave home)
- Energy usage reporting
- Integration with home automation
- HVAC system diagnostics

**Multi-stage thermostats:** Required for two-stage furnaces and heat pumps with auxiliary heat. Can control two stages of heating and/or cooling independently.

**Communicating thermostats:** Proprietary systems (Ecobee with Carrier/Bryant, Lennox iComfort, etc.) that communicate digitally with compatible equipment — more precise control and better diagnostics than standard 24V wiring.

---

## Replacing a Thermostat

**Step 1:** Take a photo of the existing wiring before disconnecting anything. Label each wire with tape if needed.

**Step 2:** Turn off the HVAC system at the equipment disconnect or breaker. (Thermostat wiring is low voltage and unlikely to cause serious injury, but disconnecting the power protects the equipment from short-circuit damage.)

**Step 3:** Remove the thermostat faceplate and base. Disconnect each wire, noting which terminal it came from.

**Step 4:** Mount the new base to the wall. Connect each wire to the corresponding terminal on the new thermostat.

**Step 5:** Configure the new thermostat for your system type (heat pump vs. conventional, stages of heating/cooling, etc.). Incorrect system type selection causes the system to malfunction.

**Step 6:** Test heating, cooling, and fan manually through the thermostat menu.

---

## System Control Logic

**Single-stage vs. two-stage systems:**

Single-stage equipment runs at full capacity or not at all. Two-stage equipment runs at low capacity (typically 65-70% output) most of the time and only fires at full capacity on extreme days. Two-stage operation is quieter, maintains more consistent temperatures, and is more efficient.

**Variable speed (modulating) systems:** The most advanced equipment varies output continuously from minimum to maximum. Extremely efficient and comfortable — the system runs at a low level almost continuously rather than cycling on and off.

**Heat pump control in heating mode:** The thermostat monitors indoor temperature. If the heat pump can't keep up (temperature drops more than a few degrees below set point), the system activates auxiliary heat (electric resistance strips). If the auxiliary heat is enabled manually ("Emergency Heat" mode), the heat pump compressor shuts off — use this only when the heat pump is malfunctioning.

---

## Deadband and Temperature Differential

**Deadband:** The range around the set point where the system doesn't run. A 2°F deadband means heating doesn't call until 1°F below set point, cooling doesn't call until 1°F above. Without deadband, the system would cycle constantly as temperature fluctuates even slightly.

**Anticipators (older thermostats):** Mechanical thermostats have a heat anticipator — a small resistor that slightly warms the thermostat before the set point is reached, signaling the system to shut off a bit early so the home coasts to the set point without overshooting. Smart thermostats handle this algorithmically.

---

## Troubleshooting With the Thermostat

**System won't call for heat:**
- Check thermostat setting — is it set to Heat, not Cool or Off?
- Check that set point is above current temperature
- Replace batteries (if battery-powered)
- Check that the C wire is connected (for smart thermostats)
- Test by jumping R to W terminals directly — if equipment runs, the thermostat is faulty

**System runs continuously:**
- Set point much lower (cooling) or higher (heating) than current temperature
- Thermostat faulty — stuck in call
- Check that the system mode matches the call (thermostat set to Heat but Y wire connected to cooling)

**Equipment short-cycling (running very briefly, cycling frequently):**
- Thermostat location issue (near a heat source or cold draft)
- Oversized equipment (cools or heats too quickly)
- Low refrigerant causing rapid pressure changes (cooling)
