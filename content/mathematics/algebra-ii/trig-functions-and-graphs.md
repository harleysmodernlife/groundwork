## Trigonometric Functions and Their Graphs

The trigonometric functions — sine, cosine, and tangent — extend beyond angles in triangles to become continuous functions defined for all real numbers. Their graphs have distinctive shapes: periodic waves that repeat forever in both directions. Understanding these graphs is essential for modeling any repeating phenomenon — sound waves, ocean tides, electrical signals, planetary motion, and seasonal patterns.

---

## The Graph of y = sin(x)

The sine function traces the y-coordinate of a point as it moves around the unit circle.

**Key features:**
- **Period:** 2π (the function completes one full cycle every 2π units)
- **Amplitude:** 1 (the maximum deviation from the midline)
- **Domain:** all real numbers
- **Range:** -1 ≤ y ≤ 1
- **Midline:** y = 0 (the x-axis)

**Key points in one cycle (0 to 2π):**
- (0, 0): starts at zero
- (π/2, 1): reaches maximum
- (π, 0): back to zero
- (3π/2, -1): reaches minimum
- (2π, 0): back to starting position

The graph creates a smooth S-shaped wave, endlessly repeating.

---

## The Graph of y = cos(x)

The cosine function traces the x-coordinate on the unit circle.

**Key features:**
- **Period:** 2π
- **Amplitude:** 1
- **Domain:** all real numbers
- **Range:** -1 ≤ y ≤ 1

**Key points in one cycle:**
- (0, 1): starts at maximum
- (π/2, 0): crosses midline going down
- (π, -1): reaches minimum
- (3π/2, 0): crosses midline going up
- (2π, 1): back to maximum

The cosine graph has the same shape as sine but shifted left by π/2. In other words: cos(x) = sin(x + π/2).

---

## Transformations: General Form

```
y = A sin(Bx - C) + D
y = A cos(Bx - C) + D
```

| Parameter | Effect |
| :--- | :--- |
| A | **Amplitude** = |A|. Negative A reflects across midline. |
| B | **Period** = 2π/|B|. Larger B = faster oscillation. |
| C/B | **Phase shift** = C/B (horizontal shift). Positive = right. |
| D | **Vertical shift** (midline is y = D). |

---

**Example:** y = 3 sin(2x - π/2) + 1

- Amplitude: |3| = **3** (oscillates 3 units above and below midline)
- Period: 2π/2 = **π** (completes a full cycle every π units)
- Phase shift: (π/2)/2 = **π/4 to the right**
- Vertical shift: **+1** (midline is y = 1)
- Range: 1 - 3 = -2 to 1 + 3 = 4, so **-2 ≤ y ≤ 4**

**Example:** y = -2 cos(x/3) + 5

- Amplitude: **2** (negative reflects — the graph starts at the minimum, not maximum)
- Period: 2π/(1/3) = **6π**
- Phase shift: **none** (C = 0)
- Midline: **y = 5**
- Range: **3 ≤ y ≤ 7**

---

## Sketching a Transformed Sine/Cosine Graph

**Step-by-step:**
1. Identify A, B, C, D from the equation.
2. Plot the midline y = D.
3. Mark the amplitude A above and below the midline.
4. Find the period P = 2π/B.
5. Apply the phase shift to find the starting x.
6. Mark five key points across one period (start, max, midline crossing down, min, midline crossing up for cosine; start, max, midline, min, return for sine).
7. Connect smoothly and extend.

---

## The Graph of y = tan(x)

The tangent function = sin/cos is very different from sine and cosine.

**Key features:**
- **Period:** π (half of sine/cosine)
- **No amplitude** (the function has no maximum or minimum)
- **Domain:** all reals except where cos(x) = 0, i.e., x ≠ π/2 + nπ
- **Range:** all real numbers
- **Vertical asymptotes:** x = π/2 + nπ (where cosine = 0)

**Key points in one period (-π/2 to π/2):**
- (-π/4, -1)
- (0, 0)
- (π/4, 1)
- Asymptotes at x = ±π/2

The tangent graph climbs from -∞ to +∞ between each pair of asymptotes.

**Transformation:** y = A tan(Bx - C) + D
- Vertical stretch: A
- Period: π/B
- Phase shift, vertical shift: same as before

---

## Writing Equations from Graphs

Given a graph, determine the equation:

1. **Midline (D):** Find the average of max and min: D = (max + min)/2.
2. **Amplitude (A):** A = (max - min)/2.
3. **Period:** Measure the length of one full cycle. Then B = 2π/P.
4. **Phase shift:** Find where the first maximum/zero occurs and calculate C/B.
5. **Choose sine or cosine** based on where the cycle starts.

**Example:** A graph has max 7, min 1, period 4π, and the first maximum occurs at x = π/3.

- D = (7 + 1)/2 = **4**
- A = (7 - 1)/2 = **3**
- B = 2π/(4π) = **1/2**
- The maximum of cosine occurs at x = 0 normally; here it's shifted to π/3. Phase shift = π/3. C = B × (π/3) = (1/2)(π/3) = π/6.
- Equation: **y = 3 cos(x/2 - π/6) + 4**

---

## Real-World Applications

**Sound waves:** The pitch of a note is the frequency — how many cycles per second. A higher frequency (smaller period) = higher pitch. The amplitude = loudness.

**Alternating current:** Household electricity in the US cycles at 60 Hz — 60 complete cycles per second. The voltage is modeled by V(t) = 170 sin(120πt).

**Tides:** Ocean tides are approximately sinusoidal. A location might experience a high tide of 4 meters and low tide of 0.5 meters on a 12.4-hour cycle:
- D = 2.25, A = 1.75, period = 12.4 hours → B = 2π/12.4 ≈ 0.507

---

## Practice

1. Find the amplitude, period, and midline of y = 4 cos(3x) - 2.
2. Write the equation of a sine function with amplitude 5, period π, no phase shift, midline y = 3.
3. A sinusoidal function has a maximum of 10, minimum of -2, and period of 6. Write an equation.
4. Find the period and vertical asymptotes of y = tan(x/2).
5. Describe how the graph of y = -sin(x) + 4 differs from y = sin(x).

**Answers:**
1. Amplitude: **4**, Period: 2π/3, Midline: **y = -2**
2. **y = 5 sin(2x) + 3** (B = 2π/π = 2)
3. A = (10-(-2))/2 = 6; D = (10-2)/2 = 4; B = 2π/6 = π/3. **y = 6 sin(πx/3) + 4** (or cosine version)
4. Period = π/(1/2) = **2π**. Asymptotes at x = π + 2πn = ... -π, π, 3π, ...
5. Reflected across x-axis (multiplied by -1) and shifted **up 4 units**. Midline is y = 4, and the graph goes down first then up (inverted).
