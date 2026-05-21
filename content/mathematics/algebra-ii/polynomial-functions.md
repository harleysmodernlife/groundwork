## Polynomial Functions

A polynomial function is a function of the form f(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + ... + a₁x + a₀, where n is a non-negative integer and the coefficients aₙ through a₀ are real numbers with aₙ ≠ 0. Polynomial functions include the linear and quadratic functions you already know, but extend to cubic, quartic, and higher-degree functions that model more complex behaviors.

---

## Degree and Leading Behavior

The **degree** is the highest power of x. The **leading coefficient** is the coefficient of that term.

Together, these two determine the **end behavior** — what the function does as x approaches positive or negative infinity.

**End Behavior Rules:**

| Degree | Leading Coefficient | Left End (x → -∞) | Right End (x → +∞) |
| :--- | :--- | :--- | :--- |
| Even | Positive | Up | Up |
| Even | Negative | Down | Down |
| Odd | Positive | Down | Up |
| Odd | Negative | Up | Down |

Think of it as: even-degree polynomials have both ends going the same direction; odd-degree polynomials have ends going opposite directions.

**Example:** f(x) = -2x³ + 5x² - x + 1
- Degree 3 (odd), leading coefficient -2 (negative) → left end up, right end down.

---

## Zeros, Roots, and x-Intercepts

A **zero** of f(x) is a value c where f(c) = 0. Zeros are also called **roots** or **x-intercepts** (since that's where the graph crosses the x-axis).

**Finding zeros:** Set f(x) = 0 and solve.

The degree tells you the maximum number of zeros. A degree-3 polynomial has at most 3 zeros; a degree-4 has at most 4, etc.

**The Fundamental Theorem of Algebra:** Every polynomial of degree n has exactly n zeros in the complex numbers (counting multiplicity). Some may be imaginary.

---

## Multiplicity and Behavior at Zeros

When a factor is repeated, the zero has **multiplicity** greater than 1.

f(x) = (x - 2)²(x + 1) has zeros at x = 2 (multiplicity 2) and x = -1 (multiplicity 1).

**Multiplicity rules for graph behavior at a zero:**
- **Odd multiplicity (1, 3, 5, ...):** The graph crosses through the x-axis at that zero.
- **Even multiplicity (2, 4, 6, ...):** The graph touches the x-axis but turns around (bounces).

**Example:** f(x) = (x - 1)³(x + 2)²(x - 4)
- At x = 1 (multiplicity 3, odd): graph crosses the x-axis.
- At x = -2 (multiplicity 2, even): graph touches and bounces.
- At x = 4 (multiplicity 1, odd): graph crosses.

---

## Graphing Polynomial Functions

**Step-by-step process:**

1. **Find the zeros** by factoring or other methods. Note multiplicities.
2. **Determine end behavior** from degree and leading coefficient.
3. **Find the y-intercept**: set x = 0 and evaluate.
4. **Sketch:** Start with the end behavior, pass through each x-intercept (crossing or bouncing based on multiplicity), and hit the y-intercept.

**Example:** Graph f(x) = x³ - x² - 4x + 4

Factor: f(x) = x²(x - 1) - 4(x - 1) = (x² - 4)(x - 1) = (x + 2)(x - 2)(x - 1)

Zeros: x = -2, x = 1, x = 2 (all multiplicity 1 → all crossings)
End behavior: degree 3, positive leading coefficient → down-left, up-right.
Y-intercept: f(0) = 4.

---

## The Factor Theorem

If (x - c) is a factor of f(x), then f(c) = 0. And conversely: if f(c) = 0, then (x - c) is a factor.

This connects factoring to finding zeros.

**Example:** Is (x - 3) a factor of f(x) = x³ - 2x² - 5x + 6?
- f(3) = 27 - 18 - 15 + 6 = 0. ✓ Yes, (x - 3) is a factor.

---

## Synthetic Division and Polynomial Division

**Synthetic division** is a shortcut for dividing a polynomial by a linear factor (x - c).

**Example:** Divide x³ - 2x² - 5x + 6 by (x - 3).

Setup (using c = 3):
```
3 | 1  -2  -5   6
  |     3   3  -6
  |_____________
    1   1  -2   0
```

Result: x² + x - 2, remainder 0. So f(x) = (x - 3)(x² + x - 2) = (x - 3)(x + 2)(x - 1).

Zeros: x = 3, x = -2, x = 1.

---

## Rational Root Theorem

For a polynomial aₙxⁿ + ... + a₀ with integer coefficients, any rational zero must be of the form ±p/q, where p divides the constant term a₀ and q divides the leading coefficient aₙ.

**Example:** Find the rational zeros of f(x) = 2x³ - 3x² - 11x + 6.
- p divides 6: ±1, ±2, ±3, ±6
- q divides 2: ±1, ±2
- Possible rational zeros: ±1, ±2, ±3, ±6, ±1/2, ±3/2

Test x = 3: f(3) = 2(27) - 3(9) - 33 + 6 = 54 - 27 - 33 + 6 = 0. ✓

Divide by (x - 3): 2x² + 3x - 2 = (2x - 1)(x + 2).
Zeros: x = 3, x = 1/2, x = -2.

---

## Turning Points

A polynomial of degree n has at most n - 1 **turning points** (local maxima and minima). The graph changes direction at each turning point.

A degree-3 polynomial has at most 2 turning points. A degree-4 has at most 3.

---

## Practice

1. Describe the end behavior of f(x) = 3x⁴ - 2x³ + x - 7.
2. Find all zeros and their multiplicities: f(x) = (x + 3)²(x - 1)(x + 1)³.
3. Graph the sign changes: at which zeros does f cross vs. bounce?
4. Use the Rational Root Theorem and synthetic division to factor completely: f(x) = x³ - 4x² + x + 6.
5. A polynomial has zeros at x = -2, x = 1 (multiplicity 2), and x = 4. Write a possible polynomial in factored form.

**Answers:**
1. Even degree, positive leading coefficient: **both ends up**.
2. x = -3 (mult. 2, bounce); x = 1 (mult. 1, cross); x = -1 (mult. 3, cross).
3. At x = -3: bounces. At x = 1 and x = -1: crosses.
4. Test x = -1: (-1) - 4 - 1 + 6 = 0. ✓ Divide: (x+1)(x²-5x+6) = **(x+1)(x-2)(x-3)**.
5. **f(x) = (x + 2)(x - 1)²(x - 4)** (or any scalar multiple).
