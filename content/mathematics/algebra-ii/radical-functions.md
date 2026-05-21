## Radical Functions and Complex Numbers

Radical functions involve roots — square roots, cube roots, and higher. They appear wherever you reverse a power operation: finding a side length from an area, finding a speed from kinetic energy, finding time from displacement. Complex numbers extend the real number system to include the square roots of negative numbers — a seemingly abstract idea that is essential to electrical engineering, quantum mechanics, and signal processing.

---

## Radical Expressions: Review

A **radical** is a root. The most common is the square root:

```
√a = b means b² = a (with b ≥ 0)
```

**Cube root:** ∛a = b means b³ = a (no restriction on sign — cube roots of negative numbers are negative real numbers).

**nth root:** ⁿ√a = a^(1/n)

**Simplifying radicals:** Pull out perfect square factors.
- √72 = √(36 × 2) = 6√2
- √48 = √(16 × 3) = 4√3

**Rationalizing denominators:** Eliminate radicals from the denominator.
- 5/√3 = 5√3/3 (multiply top and bottom by √3)
- 3/(2 - √5) = 3(2 + √5)/((2)² - (√5)²) = 3(2+√5)/(4-5) = -3(2+√5)

---

## Radical Functions

A radical function has the variable under a radical sign. The most common:

```
f(x) = √x   (square root function)
f(x) = ∛x   (cube root function)
```

### Square Root Function: f(x) = √x

- Domain: x ≥ 0 (can't take the square root of a negative)
- Range: y ≥ 0
- Graph: starts at (0, 0), curves upward to the right, always above the x-axis.

**Transformations:**
- f(x) = √(x - h) + k: shift h units right, k units up.
- f(x) = a√x: stretches vertically by factor a (reflects across x-axis if a < 0).

**Example:** f(x) = √(x + 3) - 2
- Domain: x + 3 ≥ 0 → x ≥ -3
- Start point: (-3, -2) (the vertex shifts)
- Shape: same curve as √x but starting at (-3, -2)

### Cube Root Function: f(x) = ∛x

- Domain: all real numbers (cube roots of negatives exist)
- Range: all real numbers
- Graph: S-shaped curve through the origin, extending in both directions.

---

## Solving Radical Equations

**Procedure:**
1. Isolate the radical on one side.
2. Raise both sides to the power that eliminates the radical.
3. Solve the resulting equation.
4. **Always check for extraneous solutions** — squaring both sides can introduce false answers.

**Example:** √(2x + 3) = 5
- Square both sides: 2x + 3 = 25
- 2x = 22 → x = 11
- Check: √(22 + 3) = √25 = 5. ✓ **x = 11**

**Example with extraneous solution:** √x = x - 2
- Square: x = (x - 2)² = x² - 4x + 4
- 0 = x² - 5x + 4 = (x - 4)(x - 1)
- Solutions: x = 4 or x = 1
- Check x = 4: √4 = 2 and 4 - 2 = 2. ✓
- Check x = 1: √1 = 1 and 1 - 2 = -1. 1 ≠ -1. ✗ **Extraneous.**
- Only solution: **x = 4**

**Two radicals:** √(x + 6) - √x = 2
- Isolate one radical: √(x + 6) = √x + 2
- Square: x + 6 = x + 4√x + 4
- Simplify: 2 = 4√x → √x = 1/2 → x = 1/4
- Check: √(1/4 + 6) - √(1/4) = √(25/4) - 1/2 = 5/2 - 1/2 = 2. ✓ **x = 1/4**

---

## Complex Numbers

The **imaginary unit** i is defined as:

```
i = √(-1),   so   i² = -1
```

A **complex number** has the form a + bi, where a is the real part and b is the imaginary part.

**Examples:**
- 3 + 2i: real part 3, imaginary part 2
- -5i: real part 0, imaginary part -5
- 4: real part 4, imaginary part 0 (all real numbers are complex numbers)

**Powers of i:**
- i¹ = i
- i² = -1
- i³ = i² × i = -i
- i⁴ = (i²)² = (-1)² = 1
- i⁵ = i (the pattern repeats every 4)

To find iⁿ, divide n by 4 and use the remainder: remainder 0 → 1; remainder 1 → i; remainder 2 → -1; remainder 3 → -i.

---

## Arithmetic with Complex Numbers

**Addition:** (a + bi) + (c + di) = (a + c) + (b + d)i
- (3 + 2i) + (1 - 5i) = **4 - 3i**

**Subtraction:** (a + bi) - (c + di) = (a - c) + (b - d)i
- (6 + 3i) - (2 - 4i) = **4 + 7i**

**Multiplication:** Use FOIL, then replace i² with -1.
- (2 + 3i)(1 - 4i) = 2 - 8i + 3i - 12i² = 2 - 5i - 12(-1) = 2 - 5i + 12 = **14 - 5i**

**Complex conjugate:** The conjugate of a + bi is a - bi. Their product is always real:
- (a + bi)(a - bi) = a² - (bi)² = a² + b²

**Division:** Multiply numerator and denominator by the conjugate of the denominator.
- (2 + 3i)/(1 - i): multiply by (1 + i)/(1 + i)
- Numerator: (2 + 3i)(1 + i) = 2 + 2i + 3i + 3i² = 2 + 5i - 3 = -1 + 5i
- Denominator: (1 - i)(1 + i) = 1 + 1 = 2
- Result: **(-1 + 5i)/2 = -1/2 + 5/2 i**

---

## Square Roots of Negative Numbers

```
√(-a) = i√a   (for a > 0)
```

- √(-9) = 3i
- √(-50) = 5i√2
- √(-7) = i√7

Complex numbers arise when solving quadratics with negative discriminants:
- x² + 4 = 0 → x² = -4 → x = ±2i
- x² - 2x + 5 = 0: discriminant = 4 - 20 = -16. x = (2 ± √(-16))/2 = (2 ± 4i)/2 = **1 ± 2i**

---

## Practice

1. Simplify: √(75x⁴y³).
2. Solve: √(3x - 2) = 4.
3. Solve: √(x + 5) = x - 1. Check for extraneous solutions.
4. Find i²⁷.
5. Multiply: (4 - 3i)(2 + 5i).
6. Divide: (3 + i)/(1 - 2i).
7. Solve: x² + 6x + 13 = 0.

**Answers:**
1. √75 × x² × y√y = 5√3 × x²y√y = **5x²y√(3y)**
2. Square: 3x - 2 = 16 → x = 6. Check: √16 = 4. ✓ **x = 6**
3. Square: x + 5 = x² - 2x + 1 → x² - 3x - 4 = 0 → (x-4)(x+1) = 0. x = 4: √9 = 3 = 4-1 ✓. x = -1: √4 = 2, -1-1 = -2. ✗. **x = 4.**
4. 27 ÷ 4 = 6 rem 3 → i³ = **-i**.
5. 8 + 20i - 6i - 15i² = 8 + 14i + 15 = **23 + 14i**
6. Multiply by (1+2i)/(1+2i): (3+i)(1+2i)/5 = (3+6i+i+2i²)/5 = (3+7i-2)/5 = (1+7i)/5 = **1/5 + 7/5 i**
7. Discriminant: 36 - 52 = -16. x = (-6 ± 4i)/2 = **-3 ± 2i**
