## Trigonometric Identities

A trigonometric identity is an equation involving trig functions that is true for all values of the variable. Identities are not equations to solve — they are tools for rewriting expressions in more useful forms. Simplifying trig expressions using identities is essential for integrating in calculus, solving trig equations, and working through proofs in physics and engineering.

---

## The Fundamental Identities

These are derived from the definitions and the unit circle. Memorize them.

### Reciprocal Identities

```
csc(θ) = 1/sin(θ)
sec(θ) = 1/cos(θ)
cot(θ) = 1/tan(θ)
```

### Quotient Identities

```
tan(θ) = sin(θ)/cos(θ)
cot(θ) = cos(θ)/sin(θ)
```

### Pythagorean Identities

The fundamental one, from the unit circle equation x² + y² = 1:

```
sin²(θ) + cos²(θ) = 1
```

Two derived forms (divide by sin² or cos²):

```
1 + cot²(θ) = csc²(θ)
tan²(θ) + 1 = sec²(θ)
```

Rearrangements you should know:
- sin²(θ) = 1 - cos²(θ)
- cos²(θ) = 1 - sin²(θ)
- tan²(θ) = sec²(θ) - 1

### Even/Odd Identities

```
sin(-θ) = -sin(θ)     (sine is ODD — symmetric about origin)
cos(-θ) = cos(θ)      (cosine is EVEN — symmetric about y-axis)
tan(-θ) = -tan(θ)     (tangent is ODD)
```

### Cofunction Identities

Functions of complementary angles are equal:

```
sin(θ) = cos(90° - θ)
cos(θ) = sin(90° - θ)
tan(θ) = cot(90° - θ)
sec(θ) = csc(90° - θ)
```

---

## Sum and Difference Formulas

These allow calculation of trig values for sums or differences of angles.

```
sin(A + B) = sin(A)cos(B) + cos(A)sin(B)
sin(A - B) = sin(A)cos(B) - cos(A)sin(B)

cos(A + B) = cos(A)cos(B) - sin(A)sin(B)
cos(A - B) = cos(A)cos(B) + sin(A)sin(B)

tan(A + B) = (tan(A) + tan(B)) / (1 - tan(A)tan(B))
tan(A - B) = (tan(A) - tan(B)) / (1 + tan(A)tan(B))
```

**Application:** Find sin(75°) exactly.
- 75° = 45° + 30°
- sin(75°) = sin(45°)cos(30°) + cos(45°)sin(30°)
- = (√2/2)(√3/2) + (√2/2)(1/2)
- = √6/4 + √2/4
- = **(√6 + √2)/4**

---

## Double Angle Formulas

These are the sum formulas with A = B:

```
sin(2θ) = 2 sin(θ)cos(θ)

cos(2θ) = cos²(θ) - sin²(θ)
         = 2cos²(θ) - 1          (using sin²= 1 - cos²)
         = 1 - 2sin²(θ)          (using cos²= 1 - sin²)

tan(2θ) = 2tan(θ) / (1 - tan²(θ))
```

**Example:** If sin(θ) = 3/5 and θ is in Quadrant I, find sin(2θ) and cos(2θ).
- cos(θ) = 4/5 (Pythagorean theorem in a 3-4-5 right triangle)
- sin(2θ) = 2(3/5)(4/5) = **24/25**
- cos(2θ) = (4/5)² - (3/5)² = 16/25 - 9/25 = **7/25**

---

## Half Angle Formulas

```
sin(θ/2) = ±√((1 - cos θ)/2)
cos(θ/2) = ±√((1 + cos θ)/2)
tan(θ/2) = sin(θ)/(1 + cos θ) = (1 - cos θ)/sin(θ)
```

The ± depends on which quadrant θ/2 is in.

**Example:** Find cos(15°) exactly using the half-angle formula with θ = 30°.
- cos(15°) = cos(30°/2) = +√((1 + cos 30°)/2) [positive because 15° is in QI]
- = √((1 + √3/2)/2) = √((2 + √3)/4) = **√(2 + √3)/2**

---

## Proving Identities

To prove that an identity is true:
1. Work on one side only (usually the more complicated side).
2. Apply known identities to rewrite it until it matches the other side.
3. Never cross the equals sign — don't assume both sides are equal and then prove something from that.

**Strategy tips:**
- Convert everything to sin and cos.
- Multiply by 1 in a useful form (e.g., multiply by (1+sin)/( 1+sin)).
- Factor where possible.
- Use Pythagorean identities to switch between sin², cos², and 1.

**Example:** Prove that tan²(θ) + 1 = sec²(θ).

Start from sin²(θ) + cos²(θ) = 1.
Divide both sides by cos²(θ):
- sin²(θ)/cos²(θ) + 1 = 1/cos²(θ)
- tan²(θ) + 1 = sec²(θ). ✓

**Example:** Prove (sin(θ) + cos(θ))² = 1 + 2sin(θ)cos(θ).

Expand left side:
- sin²(θ) + 2sin(θ)cos(θ) + cos²(θ)
- = (sin²(θ) + cos²(θ)) + 2sin(θ)cos(θ)
- = 1 + 2sin(θ)cos(θ). ✓

**Example:** Prove (1 - cos²θ)/sin(θ) = sin(θ).

Left side:
- sin²(θ)/sin(θ) [using 1 - cos²(θ) = sin²(θ)]
- = sin(θ). ✓

---

## Solving Trig Equations

Trigonometric equations are solved by using identities to simplify, then using inverse trig functions. Solutions must account for the periodic nature of trig functions.

**Example:** Solve 2sin²(x) - sin(x) = 0 for x in [0°, 360°).

Factor: sin(x)(2sin(x) - 1) = 0

sin(x) = 0 → x = 0°, 180°
2sin(x) - 1 = 0 → sin(x) = 1/2 → x = 30°, 150°

Solutions: **x = 0°, 30°, 150°, 180°**

**Example:** Solve cos(2x) = sin(x) for x in [0, 2π).

Replace cos(2x) using identity: 1 - 2sin²(x) = sin(x)
2sin²(x) + sin(x) - 1 = 0
(2sin(x) - 1)(sin(x) + 1) = 0

sin(x) = 1/2 → x = π/6, 5π/6
sin(x) = -1 → x = 3π/2

Solutions: **x = π/6, 5π/6, 3π/2**

---

## Practice

1. Simplify: (sin²θ - 1)/cos(θ)
2. Verify the identity: cos(θ)tan(θ) = sin(θ)
3. Find sin(2θ) if cos(θ) = -5/13 and θ is in Quadrant III.
4. Use a sum formula to find exact value of cos(105°).
5. Solve for x in [0°, 360°): 2cos²(x) + cos(x) - 1 = 0.

**Answers:**
1. sin²θ - 1 = -(1 - sin²θ) = -cos²θ. So -cos²θ/cosθ = **-cos(θ)**
2. cos(θ) × (sin(θ)/cos(θ)) = sin(θ). ✓
3. sin(θ) = -12/13 (QIII, negative). sin(2θ) = 2(-12/13)(-5/13) = **120/169**
4. cos(105°) = cos(60° + 45°) = cos60°cos45° - sin60°sin45° = (1/2)(√2/2) - (√3/2)(√2/2) = (√2 - √6)/4 = **-(√6 - √2)/4**
5. Factor: (2cos(x) - 1)(cos(x) + 1) = 0. cos(x) = 1/2 → x = 60°, 300°. cos(x) = -1 → x = 180°. Solutions: **60°, 180°, 300°**.
