## Exponential and Logarithmic Functions

Exponential and logarithmic functions are inverses of each other — they undo each other the same way addition and subtraction do. Exponential functions model growth and decay (population, compound interest, radioactive decay, spread of disease). Logarithms are how you solve for the exponent — they answer the question "to what power must I raise this base to get this result?" These functions appear in every quantitative field: finance, biology, physics, information theory, and computer science.

---

## Exponential Functions

An exponential function has the form:

```
f(x) = a × bˣ
```

Where:
- a is the **initial value** (value at x = 0)
- b is the **base** or **growth factor** (must be positive, not 1)

**b > 1:** Exponential growth — function increases as x increases.
**0 < b < 1:** Exponential decay — function decreases as x increases.

### Key Properties

- Domain: all real numbers
- Range: all positive real numbers (assuming a > 0)
- Y-intercept: (0, a) — because b⁰ = 1, so f(0) = a × 1 = a
- Horizontal asymptote: y = 0 (the x-axis)
- The function never equals zero

### Transformations

f(x) = a × bˣ + c has horizontal asymptote y = c.
f(x) = a × bˣ⁻ʰ is shifted horizontally by h.

---

## The Natural Base e

The number **e ≈ 2.71828...** is the most important base in mathematics. It is irrational and arises naturally in any situation involving continuous growth or decay.

The natural exponential function f(x) = eˣ has the remarkable property that its derivative is itself — it changes at exactly the same rate as its own value. This makes it essential in calculus.

**Continuous compound interest formula:**

```
A = Peʳᵗ
```

Where P is principal, r is annual rate, t is time in years, and A is the amount after time t.

**Discrete compound interest (periodic):**

```
A = P(1 + r/n)^(nt)
```

Where n is the number of compounding periods per year.

**Example:** $5,000 invested at 6% annual interest, compounded continuously for 10 years:
- A = 5000 × e^(0.06 × 10) = 5000 × e^0.6 ≈ 5000 × 1.822 ≈ **$9,110**

---

## Logarithms: The Inverse of Exponentiation

The logarithm answers: "To what power must I raise b to get x?"

```
log_b(x) = y   means   b^y = x
```

**Examples:**
- log₂(8) = 3, because 2³ = 8
- log₁₀(1000) = 3, because 10³ = 1000
- log₅(25) = 2, because 5² = 25

**Common logarithm:** log(x) with no written base means base 10.
**Natural logarithm:** ln(x) means base e.

### Essential Log-Exponential Conversions

These are the same statement in two forms:
- b^y = x ↔ log_b(x) = y
- 10^3 = 1000 ↔ log(1000) = 3
- e^2 ≈ 7.389 ↔ ln(7.389) ≈ 2

---

## Laws of Logarithms

These rules mirror the exponent rules (because logarithms are exponents).

**Product Rule:** log(AB) = log(A) + log(B)
- log(30) = log(3) + log(10) = log(3) + 1

**Quotient Rule:** log(A/B) = log(A) - log(B)
- log(25/5) = log(25) - log(5) = log(5) (since 25/5 = 5)

**Power Rule:** log(Aⁿ) = n × log(A)
- log(x³) = 3 log(x)

**Change of Base Formula:** log_b(x) = log(x)/log(b) = ln(x)/ln(b)
- log₃(20) = log(20)/log(3) ≈ 1.301/0.477 ≈ 2.727

---

## Solving Exponential Equations

**When bases can be matched:** Set exponents equal.
- 8ˣ = 32 → (2³)ˣ = 2⁵ → 3x = 5 → x = 5/3

**When bases can't be matched:** Take the log of both sides.
- 5ˣ = 200 → x log(5) = log(200) → x = log(200)/log(5) ≈ 2.301/0.699 ≈ **3.29**

**Example:** 3 × 2ˣ = 192
- 2ˣ = 64 → 2ˣ = 2⁶ → **x = 6**

---

## Solving Logarithmic Equations

**Isolate the log, then convert to exponential form.**

**Example:** log₃(x - 4) = 2
- Convert: 3² = x - 4 → 9 = x - 4 → **x = 13**

**Check:** log₃(13 - 4) = log₃(9) = 2. ✓

**Example:** log(x) + log(x - 3) = 1
- Product rule: log(x(x-3)) = 1
- Convert: x(x-3) = 10¹ = 10
- x² - 3x - 10 = 0
- (x - 5)(x + 2) = 0 → x = 5 or x = -2

Check: x = -2 gives log(-2), which is undefined. **Reject x = -2. Only x = 5.**

Always check for extraneous solutions in log equations — arguments must be positive.

---

## Exponential Growth and Decay Models

**General model:**
```
N(t) = N₀ × e^(kt)
```
- k > 0: growth
- k < 0: decay

**Half-life:** The time for a quantity to reduce to half. If half-life = T₁/₂:
```
k = -ln(2) / T₁/₂
```

**Example:** Carbon-14 has a half-life of 5,730 years. A sample has 40% of its original carbon-14. How old is it?
- 0.40 = e^(kt) where k = -ln(2)/5730 ≈ -0.0001209
- ln(0.40) = kt → t = ln(0.40)/(-0.0001209) ≈ -0.916/(-0.0001209) ≈ **7,575 years**

---

## Practice

1. Simplify: log₄(64).
2. Expand using log laws: log(x²y/z³).
3. Solve: 7ˣ = 350. Round to three decimal places.
4. Solve: log₂(x + 5) = 4.
5. $10,000 is invested at 5% annual interest compounded continuously. How long until it doubles?
6. A population of 500 grows at 3% annually. How many years to reach 800?

**Answers:**
1. 4ʸ = 64 = 4³, so **3**.
2. 2log(x) + log(y) - 3log(z)
3. x = log(350)/log(7) ≈ 2.544/0.845 ≈ **3.009**
4. 2⁴ = x + 5 → 16 = x + 5 → **x = 11**
5. 20000 = 10000e^(0.05t) → 2 = e^(0.05t) → ln(2) = 0.05t → t = 0.693/0.05 ≈ **13.86 years**
6. 800 = 500 × (1.03)^t → 1.6 = (1.03)^t → ln(1.6) = t × ln(1.03) → t = 0.470/0.0296 ≈ **15.9 years**
