## AC vs DC Power

Your phone runs on DC. Your wall outlet delivers AC. Your laptop power supply converts one to the other. Understanding the difference between alternating current and direct current explains why your electrical system is built the way it is.

---

## Direct Current (DC)

In DC, electrons flow continuously in one direction — from negative to positive terminal. The voltage is steady (or close to it).

**Sources of DC:**
- Batteries (chemical energy → electrical energy)
- Solar panels (photovoltaic cells produce DC)
- DC generators
- Rectifiers (circuits that convert AC to DC)

**Uses of DC:**
- All batteries and battery-powered devices
- Electronics (computers, phones, televisions use DC internally)
- Electric vehicles
- LED lighting
- USB power

**Why DC is limited for power distribution:** You can only step DC voltage up or down efficiently with complex electronics. In the early days of electrification, this was a major limitation. Transmitting DC over long distances also causes significant power loss at lower voltages.

---

## Alternating Current (AC)

In AC, the direction of current reverses periodically. In the US, this reversal happens 60 times per second — this is the "60 Hz" (hertz, or cycles per second) specification of your electrical system. Europe uses 50 Hz.

The voltage doesn't flip like a switch — it follows a sine wave, smoothly rising and falling through positive and negative values.

**The US standard:**
- 120V, 60 Hz for standard outlets
- 240V, 60 Hz for large appliances (actually two 120V lines out of phase with each other)

**Why AC won:** Transformers can easily step AC voltage up or down using simple electromagnetic principles. Power companies generate electricity, step it up to high voltage (hundreds of thousands of volts) for long-distance transmission — high voltage means low current means less power loss in the wires — then step it back down at local substations, and finally to 120V/240V for your home.

This efficiency advantage is why AC won the famous "War of Currents" between Thomas Edison (DC) and George Westinghouse/Nikola Tesla (AC) in the 1880s.

---

## What "120V" Actually Means for AC

AC voltage varies continuously. When we say 120V, we mean the RMS (root mean square) voltage — a mathematical equivalent to DC that produces the same power. The actual peak voltage of 120V AC is about 170V.

This is why AC from the wall feels more dangerous than a 120V DC source of equivalent power — the peak voltage is higher.

---

## AC in Your Home

Your home's electrical system is AC throughout, until electronics convert it:

**Service panel:** Your home receives either single-phase or three-phase AC from the utility. Residential service is single-phase, 240V (two 120V legs opposite each other), plus neutral.

**120V circuits:** Hot wire (typically black, 120V) + neutral (white, 0V reference). This is your standard outlet.

**240V circuits:** Two hot wires (black and red, each 120V but opposite phase) + neutral. Used for dryers, ranges, water heaters, large air conditioners. The two 120V legs add up to 240V across the load.

**The safety concern with AC:** The 60 Hz frequency is particularly dangerous to the human heart. The heart's electrical rhythm can be disrupted by AC at this frequency, causing ventricular fibrillation. This is why electrical safety is so important.

---

## Where DC Comes From in Your Home

Despite your home running on AC, almost everything you plug in converts to DC:

- Laptop power supply: converts 120V AC → 19V DC
- Phone charger: converts 120V AC → 5V DC (via USB)
- LED driver: converts 120V AC → low-voltage DC
- Desktop computer power supply: converts 120V AC → 12V, 5V, 3.3V DC

This conversion (called rectification) uses diodes to block half of the AC cycle, then capacitors to smooth the result into something approximating DC.

---

## The Growing Role of DC

The traditional advantage of AC — easy voltage transformation — is eroding. Modern power electronics can convert DC voltages efficiently.

The trend toward DC is accelerating:
- Solar panels generate DC
- Batteries store DC
- Electric vehicles run on DC
- LED lighting runs on DC
- USB-C power delivery is DC at up to 48V and 240W

Some new buildings and data centers are experimenting with DC distribution systems to avoid the repeated AC-to-DC conversion waste. Long-distance power transmission is increasingly using high-voltage DC (HVDC) for efficiency over very long runs.

---

## Practical Takeaways

- Your home's wiring is AC — don't confuse it with DC battery circuits
- AC is more dangerous at equivalent voltages than DC due to peak voltage and frequency
- Nearly all electronics contain internal power supplies to convert AC → DC
- When working with automotive or solar systems, you're working with DC
- When working with residential wiring, you're working with AC — and the safety rules are different
