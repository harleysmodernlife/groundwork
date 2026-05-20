## Wire Types, Gauges, and Color Codes

Wire selection is not guesswork. The wrong wire gauge can cause fires. Misreading color codes can be fatal. This lesson covers what you need to know to select the right wire and understand what you're working with.

---

## Wire Gauge (AWG)

Wire gauge refers to the diameter of the conductor. In the US, we use the American Wire Gauge (AWG) system — counterintuitively, smaller numbers mean thicker wire.

| AWG | Diameter | Max Ampacity | Common Use |
|---|---|---|---|
| 14 | Medium | 15A | 15A circuits, general lighting and outlets |
| 12 | Thicker | 20A | 20A circuits, kitchen/bathroom circuits |
| 10 | Thick | 30A | Dryer circuits, large window AC units |
| 8 | Very thick | 40A | Electric range, large AC |
| 6 | Heavy | 55A | Large appliances, subpanels |
| 4-1/0 | Very heavy | 65A+ | Service entrance, large subpanels, EV chargers |

**The rule:** Match wire gauge to the circuit breaker. A 15A breaker gets 14 AWG wire. A 20A breaker gets 12 AWG wire. Never use undersized wire — it will overheat.

**You can use a larger gauge wire on a smaller breaker** (12 AWG on a 15A breaker is fine but expensive). You cannot use a smaller gauge wire on a larger breaker (14 AWG on a 20A breaker is a fire hazard).

---

## Cable Types

Residential wiring typically uses non-metallic sheathed cable (NM-B, sold as "Romex" — a brand name that became generic):

**14-2 NM-B:** 14 AWG wire, 2 conductors plus ground. Black (hot), white (neutral), bare copper (ground). For 15A circuits.

**12-2 NM-B:** Same configuration in 12 AWG. For 20A circuits.

**12-3 NM-B:** 12 AWG, 3 conductors plus ground. Black (hot), red (hot), white (neutral), bare copper (ground). Used for 240V circuits or three-way switch circuits.

**UF-B cable:** Underground feeder. Similar to NM-B but rated for direct burial. Gray sheathing. Used for outdoor circuits, underground runs.

**Conduit wire types:**
- **THHN:** Individual wires run inside conduit. Thermoplastic High Heat-resistant Nylon. Used in commercial and industrial settings.
- **THWN:** Same but also rated for wet locations.

---

## Color Codes: 120V Residential

| Color | Role | Description |
|---|---|---|
| Black | Hot | 120V, carries current to the load |
| White | Neutral | Return path, tied to ground at the panel |
| Bare copper (or green) | Ground | Equipment ground, safety path |

**In cable (NM-B):**
- Black = always hot
- White = always neutral in 120V circuits
- Bare copper = always ground

**For 240V circuits (12-3 or 10-3 cable):**
- Black = hot leg 1
- Red = hot leg 2
- White = neutral (often taped black to indicate it's used as a hot in switch loops — more on this below)
- Bare = ground

---

## The Neutral vs. Ground: Don't Confuse Them

**Neutral (white):** The current-carrying return path. Under normal load, current flows out on hot and back on neutral. In a properly wired circuit, the neutral carries current.

**Ground (bare/green):** The safety path. Under normal conditions, the ground carries zero current. It exists to give fault current a path back to the panel so the breaker trips instead of the current going through a person who touches a faulty device.

These are bonded together at the main panel. Everywhere else in the system, they must remain separate. Never connect neutral to ground in a sub-panel or at a device — it creates a shock hazard and defeats the protection purpose.

---

## Identifying Wire by Touch and Color

When you open a junction box or outlet, you should see:
- **Black wire:** Do not touch without verifying dead. This is hot.
- **White wire:** Neutral — still carries current, don't assume safe.
- **Green or bare copper:** Ground.

**Switch loops (older wiring):** In older homes, a white wire was sometimes used as a hot wire in switch loop wiring. If you see white wire connected to a switch or marked with black tape, treat it as hot.

**Unmarked wires:** Use your non-contact voltage tester on every wire before touching it, regardless of color. Colors can be wrong in older or improperly wired systems.

---

## Copper vs. Aluminum Wiring

**Copper:** Standard for branch circuit wiring. Excellent conductor, durable, easy to work with.

**Aluminum:** Used in service entrance conductors (the thick wires coming from the utility to your panel) and sometimes in branch circuits from the late 1960s and 1970s.

**The aluminum wiring problem:** Aluminum expands and contracts more than copper with temperature changes, causing connections to loosen over time. Loose connections create resistance, which creates heat, which can cause fires. Aluminum branch circuit wiring (15A and 20A circuits — typically in solid form, not stranded) requires:
- CO/ALR rated devices (outlets, switches rated for aluminum)
- Antioxidant compound on connections
- Regular inspection

If you have aluminum branch circuit wiring (check the sheath — it will say "AL" or have a gray appearance), consult an electrician about remediation.

Service entrance conductors are aluminum in most homes and are fine — they use appropriate lugs and are stranded, not solid.

---

## Identifying Wire and Cable in the Field

On the cable sheath, you'll see markings like:
```
ROMEX 12-2 WITH GROUND NM-B 600V (UL)
```

This tells you:
- 12 gauge
- 2 conductors + ground
- Non-metallic sheathed
- Rated 600V
- UL listed

Count wires in a conduit by size, note colors, and always test before assuming. Documentation on a job site is frequently wrong or missing.
