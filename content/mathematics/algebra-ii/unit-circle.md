## The Unit Circle

The unit circle is a circle with radius 1 centered at the origin of the coordinate plane. It extends trigonometry beyond right triangles to any angle — including angles greater than 90°, negative angles, and angles measured in radians. Every essential trig value can be read directly from the unit circle, and memorizing its key points unlocks rapid calculation across all of trigonometry and calculus.

---

## Why the Unit Circle?

In right triangle trig, angles are restricted to 0° to 90° (you can't have a 135° interior angle in a right triangle). The unit circle removes this restriction by defining trigonometric functions using coordinates, not triangle sides.

**Definition:** For any angle θ measured counterclockwise from the positive x-axis, place a point P on the unit circle where the terminal side of θ intersects the circle. Then:

```
cos(θ) = x-coordinate of P
sin(θ) = y-coordinate of P
```

Since the radius is 1, this is consistent with the right triangle definitions for angles between 0° and 90°.

---

## Radians

Radians are an alternative unit for measuring angles. Instead of degrees (arbitrary division of a circle into 360 parts), radians measure arc length on the unit circle.

**One radian** = the angle that cuts off an arc of length 1 on a unit circle.

A full circle has circumference 2π, so a full rotation = **2π radians = 360°**.

**Key conversions:**
- π radians = 180°
- To convert degrees to radians: multiply by π/180
- To convert radians to degrees: multiply by 180/π

**Common equivalences:**

| Degrees | Radians |
| :--- | :--- |
| 0° | 0 |
| 30° | π/6 |
| 45° | π/4 |
| 60° | π/3 |
| 90° | π/2 |
| 120° | 2π/3 |
| 135° | 3π/4 |
| 150° | 5π/6 |
| 180° | π |
| 270° | 3π/2 |
| 360° | 2π |

---

## The Key Points on the Unit Circle

These coordinates must be memorized. The x-coordinate is cos(θ) and the y-coordinate is sin(θ).

**Quadrant I (0 to 90°):**
- 0°/0: (1, 0)
- 30°/π/6: (√3/2, 1/2)
- 45°/π/4: (√2/2, √2/2)
- 60°/π/3: (1/2, √3/2)
- 90°/π/2: (0, 1)

**Quadrant II (90° to 180°): x is negative, y is positive.**
- 120°/2π/3: (-1/2, √3/2)
- 135°/3π/4: (-√2/2, √2/2)
- 150°/5π/6: (-√3/2, 1/2)
- 180°/π: (-1, 0)

**Quadrant III (180° to 270°): both negative.**
- 210°/7π/6: (-√3/2, -1/2)
- 225°/5π/4: (-√2/2, -√2/2)
- 240°/4π/3: (-1/2, -√3/2)
- 270°/3π/2: (0, -1)

**Quadrant IV (270° to 360°): x is positive, y is negative.**
- 300°/5π/3: (1/2, -√3/2)
- 315°/7π/4: (√2/2, -√2/2)
- 330°/11π/6: (√3/2, -1/2)
- 360°/2π: (1, 0)

---

## Reference Angles

A **reference angle** is the acute angle between the terminal side and the x-axis. It simplifies trig calculations for any angle.

For any angle θ in standard position, the reference angle θ' is:
- Quadrant I: θ' = θ
- Quadrant II: θ' = 180° - θ
- Quadrant III: θ' = θ - 180°
- Quadrant IV: θ' = 360° - θ

**Signs of trig functions by quadrant** (ASTC: "All Students Take Calculus"):
- Quadrant I (All): sin > 0, cos > 0, tan > 0
- Quadrant II (Students): sin > 0, cos < 0, tan < 0
- Quadrant III (Take): sin < 0, cos < 0, tan > 0
- Quadrant IV (Calculus): sin < 0, cos > 0, tan < 0

**Example:** Find sin(210°).
- 210° is in Quadrant III. Reference angle = 210° - 180° = 30°.
- sin(30°) = 1/2. In Q III, sin is negative.
- sin(210°) = **-1/2**

**Example:** Find cos(5π/3).
- 5π/3 = 300°. Quadrant IV. Reference angle = 360° - 300° = 60°.
- cos(60°) = 1/2. In Q IV, cos is positive.
- cos(5π/3) = **1/2**

---

## Tan from the Unit Circle

Since tan(θ) = sin(θ)/cos(θ) = y/x on the unit circle:

**tan is undefined** when x = 0, i.e., at 90° and 270° (the y-axis).
**tan = 0** when y = 0, i.e., at 0° and 180°.

---

## The Pythagorean Identity

Since the unit circle has equation x² + y² = 1, and cos(θ) = x and sin(θ) = y:

```
sin²(θ) + cos²(θ) = 1
```

This is the fundamental Pythagorean identity. It holds for every angle, always.

---

## Coterminal Angles

Two angles are **coterminal** if they share the same terminal side. You can add or subtract multiples of 360° (or 2π) to find coterminal angles.

- 50° and 410° are coterminal (50 + 360 = 410)
- 50° and -310° are coterminal (50 - 360 = -310)

Coterminal angles have identical trig values.

**Example:** Find the trig values for -π/6.
- -π/6 is coterminal with 2π - π/6 = 11π/6 = 330°.
- cos(330°) = √3/2; sin(330°) = -1/2.

---

## Practice

1. Convert 225° to radians.
2. Convert 7π/4 to degrees.
3. Find sin(120°) and cos(120°) using the unit circle.
4. Find tan(5π/6).
5. Which quadrant is 7π/5 in?
6. Find a positive and a negative coterminal angle for 80°.
7. Use sin²(θ) + cos²(θ) = 1 to find sin(θ) if cos(θ) = -3/5 and θ is in Quadrant III.

**Answers:**
1. 225 × π/180 = **5π/4**
2. 7π/4 × 180/π = **315°**
3. Reference angle 60°. QII: sin positive, cos negative. sin(120°) = **√3/2**, cos(120°) = **-1/2**
4. 5π/6 = 150°. Reference 30°. QII: sin positive, cos negative. tan = sin/cos = (1/2)/(-√3/2) = **-1/√3 = -√3/3**
5. 7π/5 = 252°. Between 180° and 270°. **Quadrant III.**
6. 80° + 360° = **440°**; 80° - 360° = **-280°**
7. sin²(θ) = 1 - (9/25) = 16/25; sin(θ) = ±4/5. In QIII, sin is negative: **sin(θ) = -4/5**
