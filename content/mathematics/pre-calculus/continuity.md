## Continuity and Discontinuities

A function is continuous if you can draw its graph without lifting your pencil. That intuition, made precise, is one of the most important concepts in calculus. Continuous functions behave predictably — they don't jump, they don't have holes, they don't blow up to infinity in the middle of a domain. Knowing where and why a function fails to be continuous tells you exactly where you need to be careful.

---

## The Formal Definition of Continuity

A function f is **continuous at x = c** if all three conditions hold:

1. **f(c) is defined** — the function has a value at x = c (no hole, no asymptote)
2. **lim f(x) exists** as x → c — the function approaches a single value from both sides
3. **lim f(x) = f(c)** — that limiting value equals the actual function value

If any one of these three conditions fails, the function is **discontinuous at x = c**.

**Example:** Is f(x) = x² continuous at x = 3?
1. f(3) = 9 — defined ✓
2. lim x² as x → 3 = 9 — limit exists ✓
3. lim = f(3) = 9 ✓
Continuous at x = 3. ✓

**Example:** f(x) = (x² - 4)/(x - 2). Is it continuous at x = 2?
1. f(2) = 0/0 — **undefined**. Condition 1 fails.
- Discontinuous at x = 2.

---

## Types of Discontinuities

Not all discontinuities are alike. Three types appear most often:

### 1. Removable Discontinuity (a "Hole")

The limit exists at x = c, but either the function is undefined there or f(c) ≠ limit.

It's called "removable" because you could fix it by redefining the function at that single point.

**Example:** f(x) = (x² - 4)/(x - 2)
- For x ≠ 2: f(x) = x + 2
- The limit as x → 2 is 4, but f(2) is undefined.
- Removable discontinuity at x = 2. A hole on the graph at (2, 4).

**Example:** g(x) = (x² - 4)/(x - 2) but g(2) = 10.
- Now the function is defined at x = 2, but g(2) = 10 ≠ 4 (the limit).
- Still a removable discontinuity — there's a defined point that's "off" from the expected value.

### 2. Jump Discontinuity

The left-hand limit and right-hand limit both exist but aren't equal. The function "jumps" from one value to another.

**Example:**
```
f(x) = 1  if x < 0
f(x) = 3  if x ≥ 0
```
- Left limit as x → 0⁻: 1
- Right limit as x → 0⁺: 3
- 1 ≠ 3, so the two-sided limit doesn't exist.
- Jump discontinuity at x = 0.

Step functions and piecewise functions often have jump discontinuities. The graph looks like it stepped up or down instantly.

### 3. Infinite Discontinuity

The function goes to ±∞ at x = c — a vertical asymptote.

**Example:** f(x) = 1/x at x = 0.
- As x → 0⁺: f(x) → +∞
- As x → 0⁻: f(x) → -∞
- Neither limit is finite.
- Infinite (or "essential") discontinuity at x = 0.

---

## Continuity on an Interval

A function is **continuous on an interval** if it's continuous at every point in that interval. Key facts:

- **Polynomials** are continuous everywhere (on (-∞, ∞)).
- **Rational functions** are continuous everywhere their denominator ≠ 0.
- **Square root functions** f(x) = √g(x) are continuous wherever g(x) > 0.
- **Trig functions** sin(x) and cos(x) are continuous everywhere.
- **Compositions** of continuous functions are continuous (wherever the composition is defined).

**Example:** Find all discontinuities of f(x) = (x + 2)/(x² - x - 6).
- Factor denominator: (x - 3)(x + 2)
- Zero at x = 3 and x = -2.
- At x = -2: (x + 2) cancels → removable discontinuity (hole at x = -2).
- At x = 3: denominator is zero, numerator isn't → infinite discontinuity (vertical asymptote).
- Continuous everywhere except x = -2 (hole) and x = 3 (asymptote).

---

## The Intermediate Value Theorem

The **Intermediate Value Theorem (IVT)** is a powerful consequence of continuity:

If f is continuous on [a, b], and N is any number between f(a) and f(b), then there exists at least one c in (a, b) such that f(c) = N.

**In plain English:** if a continuous function starts at one value and ends at another, it must pass through every value in between. You can't jump over a value — you have to go through it.

**Example:** Show that f(x) = x³ - x - 1 has a root between x = 1 and x = 2.
- f(1) = 1 - 1 - 1 = -1 (negative)
- f(2) = 8 - 2 - 1 = 5 (positive)
- f is a polynomial → continuous everywhere.
- Since f(1) < 0 < f(2), by IVT, there exists c in (1, 2) with f(c) = 0.
- There IS a root in (1, 2). ✓ (The actual root is about x ≈ 1.3247.)

**Example:** A car's speed changes continuously from 30 mph to 75 mph over the course of an hour. By IVT, it must have been going exactly 55 mph at some moment during that hour.

The IVT doesn't tell you where the value c is — just that it exists somewhere. Finding it is a separate problem.

---

## Checking Continuity for Piecewise Functions

For piecewise functions, check continuity at the "seam" points where the formula changes.

**Example:**
```
f(x) = x² + 1   if x < 2
f(x) = 3x - 1   if x ≥ 2
```
Is f continuous at x = 2?

1. f(2) = 3(2) - 1 = 5 (using the right-side formula, since x = 2 falls in x ≥ 2) ✓
2. Left-hand limit: lim as x → 2⁻ of (x² + 1) = 4 + 1 = 5
3. Right-hand limit: lim as x → 2⁺ of (3x - 1) = 5
4. Both one-sided limits equal 5, and f(2) = 5 ✓

Continuous at x = 2. ✓

**Example:**
```
g(x) = 2x + 1   if x ≤ 1
g(x) = x² + 2   if x > 1
```
At x = 1:
- g(1) = 2(1) + 1 = 3
- Left limit: 2(1) + 1 = 3
- Right limit: (1)² + 2 = 3
- All match. Continuous at x = 1. ✓

**Example with a jump:**
```
h(x) = 4    if x < 0
h(x) = -1   if x ≥ 0
```
At x = 0:
- h(0) = -1
- Left limit: 4
- Right limit: -1
- 4 ≠ -1 → **jump discontinuity** at x = 0.

---

## Practice

1. Is f(x) = (x² - 1)/(x - 1) continuous at x = 1? What type of discontinuity, if any?
2. Find all discontinuities of g(x) = (x + 3)/[(x - 2)(x + 3)] and classify each.
3. Use the IVT to show that f(x) = x⁴ - 3x - 1 has a zero between x = 1 and x = 2.
4. Determine if the piecewise function is continuous at x = 3: f(x) = 2x - 1 for x < 3; f(x) = x + 2 for x ≥ 3.
5. Explain why the Intermediate Value Theorem requires continuity. Give an example of a function that skips a value without passing through it.

**Answers:**
1. Direct substitution: (1-1)/(1-1) = 0/0, undefined. The limit is x+1 → 2. f(1) doesn't exist. **Removable discontinuity** (hole at (1, 2)).
2. Cancel (x+3): simplified is 1/(x-2). Discontinuities: x = 2 (infinite, vertical asymptote) and x = -3 (removable, because it canceled, leaving a hole). Continuous everywhere else.
3. f(1) = 1 - 3 - 1 = -3 (negative). f(2) = 16 - 6 - 1 = 9 (positive). f is a polynomial → continuous. Since -3 < 0 < 9, by IVT there exists c in (1, 2) with f(c) = 0. ✓
4. Left limit: 2(3) - 1 = 5. Right limit: 3 + 2 = 5. f(3) = 3 + 2 = 5. All match → **continuous at x = 3**. ✓
5. The IVT requires continuity because a discontinuous function can jump over a value. For example, f(x) = 1 for x < 0 and f(x) = 3 for x ≥ 0. This function never equals 2 — it jumps from 1 to 3 at x = 0, skipping every value between. With continuity, jumps are impossible, so every intermediate value must be hit.
