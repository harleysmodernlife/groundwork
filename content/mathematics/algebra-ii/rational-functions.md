## Rational Functions

A rational function is a ratio of two polynomial functions: f(x) = P(x)/Q(x), where Q(x) ≠ 0. The behavior of rational functions is governed by where the denominator is zero and how the degrees of the numerator and denominator compare. Rational functions model real situations where quantities vary inversely — speed and time, cost per unit as quantity increases, concentration of a mixture as components are added.

---

## Domain and Undefined Values

A rational function is undefined wherever its denominator equals zero. Those x-values are excluded from the domain.

**Finding the domain:**
1. Set the denominator equal to zero.
2. Solve for x.
3. Exclude those x-values from the domain.

**Example:** f(x) = 3x/(x² - 4)

Denominator: x² - 4 = 0 → x = ±2

Domain: all real numbers except x = 2 and x = -2.

---

## Vertical Asymptotes

A **vertical asymptote** occurs at x = a if the denominator equals zero at x = a AND the numerator does NOT also equal zero there (no cancellation).

At a vertical asymptote, the function's values approach positive or negative infinity.

**Example:** f(x) = (x + 1)/((x - 2)(x + 3))

Denominator zeros: x = 2 and x = -3. Numerator at x = 2: not zero. At x = -3: not zero.

Vertical asymptotes: x = 2 and x = -3.

---

## Holes (Removable Discontinuities)

A **hole** occurs when a factor cancels from both numerator and denominator.

**Example:** f(x) = (x - 1)(x + 2) / (x - 1)(x - 3)

The (x - 1) factor cancels, leaving f(x) = (x + 2)/(x - 3) for x ≠ 1.

At x = 1: there is a hole. The simplified function gives f(1) = 3/(-2) = -3/2, so the hole is at **(1, -3/2)**.

The vertical asymptote is at x = 3 (from the remaining denominator factor).

---

## Horizontal Asymptotes

A **horizontal asymptote** describes the long-run behavior — what value f(x) approaches as x → ±∞.

The rule depends on the degrees of the numerator (degree n) and denominator (degree m):

| Comparison | Horizontal Asymptote |
| :--- | :--- |
| n < m | y = 0 (x-axis) |
| n = m | y = (leading coeff of numerator)/(leading coeff of denominator) |
| n > m | No horizontal asymptote (see oblique asymptotes below) |

**Examples:**
- f(x) = 3x/(x² + 1): degree 1 < degree 2 → **y = 0**
- f(x) = 4x²/(2x² - 5): equal degrees, ratio = 4/2 → **y = 2**
- f(x) = x³/(x + 1): degree 3 > degree 1 → **no horizontal asymptote**

---

## Oblique (Slant) Asymptotes

When the numerator's degree is exactly one more than the denominator's, the rational function has an **oblique asymptote** — a slanted line that the function approaches.

Find it by performing polynomial long division. The quotient (without the remainder) is the asymptote.

**Example:** f(x) = (x² + 3x + 1)/(x - 2)

Divide x² + 3x + 1 by x - 2:
- x² ÷ x = x. Then x(x - 2) = x² - 2x. Subtract: 5x + 1.
- 5x ÷ x = 5. Then 5(x - 2) = 5x - 10. Subtract: remainder 11.

Quotient: x + 5 (with remainder 11/(x-2)).

Oblique asymptote: **y = x + 5**.

---

## Graphing Rational Functions

**Step-by-step:**
1. Factor numerator and denominator fully.
2. Identify holes (canceled factors) and find their y-coordinates.
3. Identify vertical asymptotes (remaining denominator zeros).
4. Find the horizontal or oblique asymptote.
5. Find x-intercepts (numerator zeros that aren't holes).
6. Find y-intercept (substitute x = 0).
7. Sketch: draw asymptotes as dashed lines, then plot intercepts and approach the asymptotes from each region.

**Example:** f(x) = (2x - 4)/(x² - x - 6)

Factor: f(x) = 2(x - 2)/((x - 3)(x + 2))

No cancellation (x - 2 doesn't match x - 3 or x + 2).

Vertical asymptotes: x = 3 and x = -2.
Horizontal asymptote: degrees 1 < 2, so y = 0.
X-intercept: numerator zero: x = 2. Point (2, 0).
Y-intercept: f(0) = (-4)/(-6) = 2/3. Point (0, 2/3).

---

## Solving Rational Equations

**Method:**
1. Find the LCD (least common denominator).
2. Multiply every term by the LCD to clear fractions.
3. Solve the resulting polynomial equation.
4. **Check for extraneous solutions** — values that make the original denominator zero.

**Example:** 3/x + 1/(x-1) = 2

LCD = x(x-1). Multiply both sides:
- 3(x-1) + x = 2x(x-1)
- 3x - 3 + x = 2x² - 2x
- 4x - 3 = 2x² - 2x
- 0 = 2x² - 6x + 3

Quadratic formula: x = (6 ± √(36-24))/4 = (6 ± √12)/4 = (3 ± √3)/2

Neither solution makes the denominator zero. Both are valid. x ≈ 2.37 or x ≈ 0.63.

---

## Inverse Variation

When y = k/x (a simple rational function), y and x are in **inverse variation**. As x doubles, y halves. Their product is always the constant k.

**Example:** Pressure and volume of a gas (Boyle's Law): P × V = constant. If pressure triples, volume becomes one-third.

If P₁ × V₁ = P₂ × V₂, and P₁ = 2 atm, V₁ = 6 L, P₂ = 4 atm:
- 2 × 6 = 4 × V₂ → V₂ = **3 L**

---

## Practice

1. Find the domain of f(x) = (x + 3)/(x² - 9).
2. Find all holes, vertical asymptotes, and horizontal asymptotes: f(x) = (x² - 1)/(x² - 3x + 2).
3. Find the oblique asymptote of f(x) = (x² + 2x - 1)/(x + 1).
4. Solve: 4/(x - 1) = x/(x - 1) + 3. Check for extraneous solutions.
5. If y varies inversely with x, and y = 12 when x = 5, find y when x = 15.

**Answers:**
1. x² - 9 = 0 → x = ±3. Domain: all reals except **x = ±3**.
2. Factor: (x+1)(x-1)/((x-1)(x-2)). Cancel (x-1): hole at x=1, y=(1+1)/(1-2)=-2, so hole at **(1,-2)**. VA: x=2. HA: degree equal, 1/1 → **y=1**.
3. Divide: x² + 2x - 1 by x + 1. x + 1 with remainder -2. Oblique asymptote: **y = x + 1**.
4. Multiply by (x-1): 4 = x + 3(x-1) = x + 3x - 3 = 4x - 3 → 7 = 4x → x = 7/4. Check: x = 7/4 ≠ 1. **x = 7/4**.
5. k = 12 × 5 = 60. y = 60/15 = **4**.
