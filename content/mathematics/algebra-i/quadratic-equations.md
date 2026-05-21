## Quadratic Equations

A quadratic equation is a polynomial equation in which the highest power of the variable is 2. The standard form is ax² + bx + c = 0, where a ≠ 0. Quadratics model any situation involving area, projectile motion, optimization, or parabolic curves — they appear throughout physics, engineering, economics, and computer graphics.

---

## What Makes an Equation Quadratic?

The defining feature is the x² term. Without it, the equation is linear. With it, solutions become more complex — and there can be 0, 1, or 2 real solutions.

**Standard form:** ax² + bx + c = 0

**Examples:**
- x² - 5x + 6 = 0 (a=1, b=-5, c=6)
- 3x² + 4x = 0 (a=3, b=4, c=0)
- x² = 16 (a=1, b=0, c=-16 after rearranging: x² - 16 = 0)

---

## Method 1: Factoring

When the trinomial can be factored, this is the fastest approach.

**Zero Product Property:** If a × b = 0, then a = 0 or b = 0 (or both). This is why we set each factor equal to zero.

**Example:** Solve x² - 7x + 12 = 0

Factor: (x - 3)(x - 4) = 0

Apply zero product property:
- x - 3 = 0 → x = 3
- x - 4 = 0 → x = 4

Solutions: **x = 3 or x = 4**

Check x = 3: 9 - 21 + 12 = 0. ✓
Check x = 4: 16 - 28 + 12 = 0. ✓

**Example:** Solve 2x² + 5x - 3 = 0

Factor (AC method): a×c = -6; find 6 and -1.
Rewrite: 2x² + 6x - x - 3 = 0
Group: 2x(x + 3) - 1(x + 3) = 0
Factor: (2x - 1)(x + 3) = 0

Solutions: 2x - 1 = 0 → x = 1/2; x + 3 = 0 → x = -3
**x = 1/2 or x = -3**

---

## Method 2: Square Root Method

Use when the equation has the form x² = k (no x term), or (x - h)² = k.

**Example:** x² = 49

Take the square root of both sides:
- x = ±√49
- x = ±7

Solutions: **x = 7 or x = -7**

**Always use ±** — both the positive and negative square roots are solutions.

**Example:** (x - 3)² = 25
- x - 3 = ±5
- x - 3 = 5 → x = 8
- x - 3 = -5 → x = -2

Solutions: **x = 8 or x = -2**

---

## Method 3: Completing the Square

Transforms any quadratic into a perfect square trinomial, enabling the square root method.

**Example:** Solve x² + 6x + 5 = 0

Step 1: Move the constant to the right:
- x² + 6x = -5

Step 2: Complete the square. Take half of the x coefficient (6/2 = 3), square it (3² = 9), add to both sides:
- x² + 6x + 9 = -5 + 9
- (x + 3)² = 4

Step 3: Take square roots:
- x + 3 = ±2
- x = -3 ± 2

Solutions: **x = -1 or x = -5**

**Example:** Solve 2x² - 4x - 6 = 0

Divide everything by 2 first: x² - 2x - 3 = 0
Move constant: x² - 2x = 3
Complete the square: half of -2 is -1, (-1)² = 1. Add 1 to both sides:
- x² - 2x + 1 = 4
- (x - 1)² = 4
- x - 1 = ±2
- Solutions: **x = 3 or x = -1**

---

## Method 4: The Quadratic Formula

Works for any quadratic equation. Derived by completing the square on the general form ax² + bx + c = 0.

```
x = (-b ± √(b² - 4ac)) / (2a)
```

**Example:** Solve 2x² - 3x - 2 = 0

a = 2, b = -3, c = -2

x = (3 ± √(9 - 4(2)(-2))) / (2 × 2)
x = (3 ± √(9 + 16)) / 4
x = (3 ± √25) / 4
x = (3 ± 5) / 4

- x = (3 + 5)/4 = 8/4 = 2
- x = (3 - 5)/4 = -2/4 = -1/2

Solutions: **x = 2 or x = -1/2**

---

## The Discriminant

The expression b² - 4ac inside the square root is the **discriminant**. It tells you how many real solutions exist before you solve:

| Discriminant | Number of Solutions |
| :--- | :--- |
| b² - 4ac > 0 | Two real solutions |
| b² - 4ac = 0 | One real solution (repeated) |
| b² - 4ac < 0 | No real solutions (complex) |

**Example:** For x² + 2x + 5 = 0, discriminant = 4 - 20 = -16 < 0. No real solutions.
**Example:** For x² - 6x + 9 = 0, discriminant = 36 - 36 = 0. One solution: x = 3.

---

## Choosing a Method

| Situation | Best Method |
| :--- | :--- |
| Easy to factor | Factoring |
| No middle term (bx = 0) | Square root |
| Can't factor, or want exact answer | Quadratic formula |
| Need to convert to vertex form | Completing the square |

---

## Applications

**Projectile motion:** A ball is thrown upward from height 0 with velocity 32 ft/s. Its height is h(t) = -16t² + 32t. When does it hit the ground?
- Set h = 0: -16t² + 32t = 0
- Factor: -16t(t - 2) = 0
- t = 0 (thrown) or **t = 2 seconds** (hits ground)

**Area problem:** A rectangle's length is 3 more than its width. Its area is 40 square feet. Find dimensions.
- Let w = width, l = w + 3.
- w(w + 3) = 40
- w² + 3w - 40 = 0
- Factor: (w + 8)(w - 5) = 0
- w = 5 (reject w = -8, can't be negative)
- Width = **5 ft**, Length = **8 ft**

---

## Practice

Solve using the indicated method:

1. Factor: x² + 2x - 15 = 0
2. Square root: 4x² - 100 = 0
3. Quadratic formula: x² - 4x + 1 = 0
4. How many real solutions? 3x² - 5x + 4 = 0
5. A rectangular garden is 8 meters longer than it is wide. Its area is 105 square meters. Find the dimensions.

**Answers:**
1. (x + 5)(x - 3) = 0 → **x = -5 or x = 3**
2. 4x² = 100 → x² = 25 → **x = ±5**
3. a=1, b=-4, c=1. x = (4 ± √(16-4))/2 = (4 ± √12)/2 = 2 ± √3. **x ≈ 3.73 or x ≈ 0.27**
4. Discriminant: 25 - 48 = -23 < 0. **No real solutions.**
5. w(w+8) = 105 → w² + 8w - 105 = 0 → (w + 15)(w - 7) = 0 → w = 7. **Width = 7 m, Length = 15 m.**
