## Automotive Electrical Systems

Modern cars are as much computer as combustion. The electrical system powers everything from the starter motor to the fuel injectors to the infotainment screen. Understanding automotive electrical basics helps you diagnose problems, avoid expensive misdiagnoses, and know when something is genuinely serious vs. just a sensor.

---

## The 12-Volt System

Cars run on a 12-volt DC electrical system (nominally — a fully charged battery is closer to 12.6V; the charging system maintains 13.5-14.5V while the engine runs).

**Negative ground:** The battery negative terminal is connected to the car's chassis (metal body and frame). This chassis ground completes every electrical circuit — a component only needs one wire (positive) because the return path is through the chassis.

This is why poor ground connections cause so many mysterious electrical problems. A corroded ground strap or chassis ground point can cause a range of symptoms in unrelated systems.

---

## The Battery

The 12V lead-acid battery (or AGM — Absorbent Glass Mat — in many modern cars) provides power to start the engine and powers everything when the engine is off.

**Battery ratings:**
- **Cold Cranking Amps (CCA):** The amps the battery can deliver for 30 seconds at 0°F without dropping below 7.2V. This is the rating that matters for starting — match or exceed the OEM specification.
- **Reserve Capacity:** How many minutes the battery can power the car at 25A if the alternator fails. Useful for measuring overall battery health.

**Battery life:** Typically 3-5 years. Heat kills batteries faster than cold (southern climates are harder on batteries than northern ones). Cold reduces capacity, but northern batteries often last longer because heat stress is the bigger killer.

**Signs of a failing battery:** Slow cranking (engine turns over sluggishly), dashboard lights dimming at idle, battery warning light. Have it tested (free at most auto parts stores) before it leaves you stranded.

**Battery terminal corrosion:** The blue-white powder on the terminals is lead sulfate — it increases resistance and reduces current flow. Clean with a wire brush and baking soda solution. Apply terminal grease or felt terminal washers to prevent recurrence.

**Battery replacement:** When replacing, always connect positive first when installing, disconnect negative first when removing. This prevents accidental shorts if the wrench touches the chassis.

---

## The Charging System

The alternator, driven by a belt off the engine, generates AC electricity and converts it to 12V DC to charge the battery and power the car's electrical loads while the engine runs.

**Voltage regulator:** Maintains alternator output at a consistent 13.5-14.5V regardless of engine speed and electrical load. Built into the alternator on most modern vehicles.

**Checking charging:** With the engine running, measure voltage at the battery terminals with a multimeter. Should read 13.5-14.5V. Below 13V means the alternator isn't keeping up with demand. Above 15V means the regulator is failing and overcharging — which kills the battery.

**Alternator belt (serpentine belt):** The single belt on modern engines that drives the alternator, power steering pump, A/C compressor, and sometimes the water pump. When it fails, everything it drives stops — including the charging system. Replace at manufacturer's interval (typically 60,000-100,000 miles) or when cracks/glazing appear.

**Signs of alternator failure:** Battery warning light, dimming lights at idle that brighten when you rev the engine, dead battery after a normal drive.

---

## The Starting System

**Starter motor:** An electric motor that spins the engine fast enough for it to fire on its own. Draws 100-200+ amps for a few seconds. A clicking sound when you turn the key (single click = bad starter relay or connection; rapid clicking = dead battery).

**Starter solenoid:** A relay that engages the starter motor and the starter gear (Bendix) simultaneously. Often integral to the starter motor assembly.

**Ignition switch → relay → solenoid → starter:** The ignition switch doesn't carry the full starter current — it triggers a relay, which triggers the solenoid, which powers the starter motor. Failures can occur at any point in this chain.

---

## Fuses and Relays

**Fuses** protect circuits from overcurrent. When a circuit draws more amps than it should (usually from a short), the fuse element melts, breaking the circuit before wires overheat and start a fire.

**Fuse box locations:** Most cars have two: the underhood fuse box (high-current circuits — main fuses, relays) and the cabin fuse box (interior electronics). The owner's manual shows the location and purpose of each fuse.

**Checking fuses:** Pull the fuse and look through the clear plastic body. A blown fuse has a visible gap in the element. Verify with a multimeter on continuity. Never replace a fuse with a higher-rated fuse — the fuse rating must match what the circuit requires. A blown fuse is a symptom; find the root cause before just replacing it.

**Relays:** Electrically operated switches. A small control current (from a switch or ECU) energizes the relay coil, which closes a set of contacts carrying the larger load current. Common relays: fuel pump, horn, A/C compressor, cooling fan, starter.

**Relay testing:** Swap with an identical relay from a non-critical circuit (horn relay is often the same part number as the fuel pump relay). If the problem moves with the relay, the relay is bad. If it stays, look elsewhere.

---

## The ECU and Sensors

Modern cars have multiple electronic control units (ECUs or modules) that manage engine, transmission, ABS, airbag, HVAC, and other systems. The main one is the Engine Control Module (ECM) or Powertrain Control Module (PCM).

The ECM receives data from dozens of sensors and makes real-time decisions about fuel injection timing, quantity, and ignition timing:

**Mass Airflow Sensor (MAF):** Measures the mass of air entering the engine. The ECM uses this to calculate how much fuel to inject. A dirty or failed MAF causes rough idle, hesitation, and poor fuel economy. Clean with MAF-specific cleaner (not regular contact cleaner).

**Oxygen Sensors (O2 sensors):** Measure the oxygen content of exhaust gases. Upstream sensors (pre-catalytic converter) provide feedback to the ECM for fuel trim. Downstream sensors monitor catalytic converter efficiency. Failed O2 sensors cause rich or lean running conditions and will set a Check Engine Light.

**Throttle Position Sensor (TPS):** Reports how far the throttle is open. Modern drive-by-wire systems have an electric throttle — no mechanical connection between the accelerator pedal and throttle body.

**Crankshaft Position Sensor (CKP):** Reports crankshaft position and speed to the ECM for ignition and injection timing. When this fails, the engine typically won't start or stalls randomly. One of the more common causes of a no-start.

**Coolant Temperature Sensor (ECT):** Tells the ECM the engine temperature. The ECM runs a richer fuel mixture when cold. A failed ECT causes poor cold starts and may cause the engine to run rich permanently.

**Knock Sensor:** Detects engine detonation. When triggered, the ECM retards ignition timing. Persistent knock sensor activity indicates an underlying issue (wrong fuel, carbon buildup, timing issue).

---

## The CAN Bus

Modern cars don't wire every control to every other control directly — they'd need miles of wire. Instead, modules communicate over a shared data network called the CAN bus (Controller Area Network). Each module broadcasts its data continuously, and any other module that needs it listens.

**Implication:** A problem in one module can cause symptoms in seemingly unrelated systems. A failing BCM (Body Control Module) might cause the dashboard to behave oddly, the windows to not work, and the car to not start — all from one module. This is why electrical diagnosis requires a scan tool to read module data, not just visual inspection.

---

## OBD-II and Diagnostic Codes

Since 1996, all US cars have an OBD-II (On-Board Diagnostics) port, typically under the dash on the driver's side. A scan tool plugged into this port can read diagnostic trouble codes (DTCs) — codes the ECM stores when a sensor or system reports something out of range.

**Code format:** P (powertrain), B (body), C (chassis), U (network) followed by four digits. P0 codes are generic/standardized; P1 codes are manufacturer-specific.

**Important:** A code tells you what the ECM detected, not necessarily what failed. A P0420 (catalyst efficiency below threshold) might be a failed catalytic converter — or it might be a failed downstream O2 sensor, an exhaust leak before the sensor, or an engine burning oil. The code is the starting point for diagnosis, not the end.

The next lesson covers reading and interpreting these codes in detail.

---

## Common Electrical Problems

**Intermittent no-start:** Check battery connections first (both terminals and the chassis ground strap). Corrosion or a loose connection causes voltage drop under starter load.

**Everything dims when you brake:** Poor chassis ground. The brake light current is trying to find ground and back-feeding through other circuits.

**Radio/windows stopped working, fuse is fine:** Check for a second fuse (some circuits have a main fuse and a subfuse), check for a relay, check for a BCM update or reset.

**Battery dead after sitting a few days (parasitic drain):** Something is staying on when the car is off. A parasitic draw test measures current with the car off and all doors closed — should be below 50mA after the modules go to sleep. Pulling fuses one at a time while watching the meter identifies the circuit.

**Corrosion in connectors:** Moisture intrusion causes green corrosion on connector pins, increasing resistance. Use electrical contact cleaner and dielectric grease on connectors in exposed locations.
