## Diagnosing Common HVAC Problems

Good HVAC diagnosis is systematic, not guesswork. You gather information, form hypotheses, test them, and confirm before replacing parts. A technician who replaces parts until something works is expensive. A technician who diagnoses accurately is valuable.

---

## The Diagnostic Process

1. **Gather information:** What's the complaint? What's the thermostat set to? When did the problem start? Has anything changed (new thermostat, recent service, weather event)?

2. **Observe:** Watch the system run. What's happening vs. what should be happening? What's the system doing when it fails?

3. **Check the simple things first:** Thermostat settings, filter condition, breakers, disconnect switches, power switches.

4. **Measure:** Temperature rise/fall, amperage, pressures, voltage. Numbers tell you what's happening.

5. **Isolate:** Narrow down which component is failing. Test components individually when possible.

6. **Confirm before replacing:** Verify the failed component is actually the cause before replacing it.

---

## Cooling System Diagnosis

### No Cooling at All

**Check first:**
- Is the thermostat set to Cool and the set point below the current temperature?
- Is the circuit breaker for the outdoor unit on? (AC units have a dedicated breaker, often two separate breakers — one for the air handler, one for the condenser)
- Is the disconnect at the outdoor unit in the "on" position?
- Is the furnace/air handler power switch on?

**If equipment won't start:**
- Check for 24V at the Y terminal in the thermostat (use a multimeter) — if no voltage, the thermostat or wiring is the problem
- If 24V is present, check for voltage at the contactor in the outdoor unit — if no voltage at the contactor coil, the low-voltage control circuit has a problem
- If voltage is at the contactor coil but it won't pull in, the contactor may have failed

**If the air handler runs but the outdoor unit doesn't:**
- Listen for a hum from the outdoor unit — if humming but not starting, a capacitor may be weak or failed
- Capacitors are the most commonly failed component in AC systems. A start/run capacitor stores charge and helps start and run the compressor and fan motors. They're inexpensive ($10-30) and relatively safe to replace (but hold dangerous charge — discharge before touching)

### Cooling But Not Enough

**Check:**
- Air filter condition
- All supply registers open and unobstructed
- Return air grilles clear

**Measure:**
- Supply air temperature vs. return air temperature — the system should produce 15-22°F temperature difference across the evaporator coil. Less than 15°F drop suggests low refrigerant or dirty coil. More than 22°F suggests restricted airflow.

**Outdoor unit:**
- Is the condenser fan running? If not, fan motor or capacitor may be failed
- Are the condenser coils dirty? Restricted airflow out of the outdoor unit causes high head pressure and reduced capacity

**Low refrigerant signs:**
- Low suction pressure (requires gauges to measure)
- Ice forming on the suction line or evaporator coil
- Indoor unit running hot (high return air temp, low temperature drop)
- Outdoor unit running but compressor not cycling down

---

## Heating System Diagnosis (Gas Furnace)

### No Heat

**Check first:**
- Thermostat setting, filter, breaker, power switch

**Furnace diagnostic sequence:** Modern furnaces have LED diagnostic codes. A flashing LED on the furnace control board tells you the fault — the code legend is usually on a sticker inside the access panel or in the manual.

**Common fault codes:**
- **Pressure switch fault:** The inducer motor pulls a vacuum that closes the pressure switch. If it doesn't close, combustion won't start. Causes: failed inducer, clogged condensate drain (condensing furnaces), blocked flue.
- **Limit switch open:** A high-temperature safety switch has opened. Causes: restricted airflow (dirty filter, blocked registers), failed blower motor, dirty coil.
- **Ignition lockout:** The furnace tried to light several times and failed. The flame sensor is dirty (the most common cause), the igniter has failed, or gas supply is interrupted.
- **Rollout switch open:** Flames rolled out of the combustion area — a serious condition indicating restricted flue, cracked heat exchanger, or blocked burners. Don't reset and continue — this needs investigation.

### Furnace Short-Cycling (Starts and Stops Frequently)

- Dirty filter → high temperature → limit switch opens → furnace shuts off → resets → repeat
- Oversized furnace heats space too quickly, short cycles
- Dirty flame sensor — cleans off with steel wool, a 5-minute fix that prevents service calls

### Furnace Runs But Not Enough Heat

- Check that all heat stages are working (two-stage furnaces should run at low then high stage)
- Check temperature rise: measure supply air temp vs. return air temp — should be 35-70°F rise, depending on furnace specs
- Check gas pressure (manifold pressure) — requires a manometer
- Check heat exchanger for cracks (visual inspection, smoke pencil test, CO test)

---

## Heat Pump Diagnosis

Heat pumps are more complex because they have two modes and the refrigeration cycle runs in both directions.

### Not Heating

- In very cold weather, heat pumps run harder and may need auxiliary heat to maintain set point — this is normal
- Check that the O/B wire is set correctly for the brand (O for cooling mode = Carrier, Lennox, Trane; B for cooling mode = Rheem, Ruud)
- If the outdoor unit is frosted over and not defrosting, the defrost board or sensor may be failed

### Auxiliary Heat Running Constantly

- The heat pump isn't keeping up — refrigeration system may be low on charge or have a component issue
- Outdoor temperatures may be below the heat pump's effective range

---

## Measuring Tools

**Multimeter:** Measures voltage (AC/DC), resistance, and current. Essential for diagnosing electrical components — contactors, capacitors, motors, control boards.

**Manifold gauge set:** Measures refrigerant pressures on suction and discharge sides. Required for refrigerant diagnosis. Readings compared to the refrigerant's pressure-temperature chart reveal charge level and system state.

**Thermometer (IR or probe):** Measures supply and return air temperatures, pipe temperatures. Inexpensive and useful for airflow and heat transfer checks.

**Clamp meter:** Measures current draw of motors without breaking the circuit. Compressor and fan motor amperage compared to nameplate ratings indicates health.

**Manometer (digital):** Measures gas pressure for furnace diagnosis.
