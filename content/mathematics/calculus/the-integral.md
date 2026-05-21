## The Integral: Accumulation and Area

The integral is the second great idea of calculus. While the derivative measures instantaneous rate of change, the integral measures accumulation — total area, total distance, total growth, total charge. The connection between these two seemingly opposite ideas is one of the most profound discoveries in mathematics. This lesson introduces integrals from the ground up: what they measure, how they're defined, and how to evaluate the simplest ones.

---

## The Problem: Finding Area Under a Curve

You know how to find the area of rectangles and triangles. But what's the area under the curve y = x² from x = 0 to x = 2? The boundary of that region isn't a straight line — it's a curve. No basic formula handles this.

The key idea: **approximate the area with rectangles, then take a limit**.

---

## Riemann Sums

Divide the interval [a, b] into n equal subintervals, each of width Δx = (b - a)/n.

For each subinterval, pick a height — the function value at some point in the interval — and draw a rectangle. The area of each rectangle is f(xₖ) · Δx.

Add them all up:

```
Approximate area ≈ Σ f(xₖ) · Δx
                   k=1 to n
```

This is a **Riemann sum**. The approximation improves as n gets larger.

**Example:** Estimate the area under f(x) = x² from 0 to 2 using 4 left-endpoint rectangles.
- Δx = 2/4 = 0.5
- Left endpoints: x = 0, 0.5, 1, 1.5
- Heights: f(0) = 0, f(0.5) = 0.25, f(1) = 1, f(1.5) = 2.25
- Sum = (0 + 0.25 + 1 + 2.25)(0.5) = 3.5 × 0.5 = **1.75**

The true area is 8/3 ≈ 2.667. The approximation improves with more rectangles.

---

## The Definite Integral

As n → ∞ and Δx → 0, the Riemann sum approaches the exact area. This limit is the **definite integral**:

```
∫ₐᵇ f(x) dx = lim Σ f(xₖ) · Δx
               n→∞
```

Notation:
- ∫ is the integral sign (an elongated S for "sum")
- a is the lower limit of integration
- b is the upper limit of integration
- f(x) is the integrand (the function being integrated)
- dx indicates we're integrating with respect to x

**What it means:** The definite integral ∫ₐᵇ f(x) dx is the net signed area between the curve y = f(x) and the x-axis from x = a to x = b.

**Signed area:** area above the x-axis counts as positive; area below counts as negative.

---

## Properties of Definite Integrals

```
∫ₐᵃ f(x) dx = 0         (zero-width interval has no area)

∫ₐᵇ f(x) dx = -∫ᵦᵃ f(x) dx   (flipping limits negates the integral)

∫ₐᵇ [f(x) + g(x)] dx = ∫ₐᵇ f(x) dx + ∫ₐᵇ g(x) dx

∫ₐᵇ c·f(x) dx = c · ∫ₐᵇ f(x) dx

∫ₐᵇ f(x) dx + ∫ᵦᶜ f(x) dx = ∫ₐᶜ f(x) dx   (split interval)
```

---

## The Antiderivative

To compute definite integrals exactly (not just approximations), we need the concept of an **antiderivative**.

An antiderivative of f(x) is a function F(x) such that F'(x) = f(x). In other words, it's the function that, when differentiated, gives you f(x) back.

**Examples:**
- If f(x) = 2x, then F(x) = x² is an antiderivative (since d/dx(x²) = 2x).
- If f(x) = cos x, then F(x) = sin x is an antiderivative.
- If f(x) = 1, then F(x) = x is an antiderivative.

**Note:** Antiderivatives are not unique. If F(x) is one antiderivative, then F(x) + C for any constant C is also one. The constant C disappears when you differentiate.

---

## The Indefinite Integral

The **indefinite integral** represents the entire family of antiderivatives:

```
∫ f(x) dx = F(x) + C
```

where F'(x) = f(x) and C is an arbitrary constant called the **constant of integration**.

**Basic indefinite integrals:**

```
∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C    (n ≠ -1)

∫ 1/x dx = ln|x| + C

∫ eˣ dx = eˣ + C

∫ cos x dx = sin x + C

∫ sin x dx = -cos x + C

∫ sec²x dx = tan x + C
```

**Examples:**
- ∫ x⁴ dx = x⁵/5 + C
- ∫ 3x² dx = x³ + C
- ∫ √x dx = ∫ x^(1/2) dx = (2/3)x^(3/2) + C
- ∫ (4x³ - 2x + 1) dx = x⁴ - x² + x + C

---

## Connection to Area: A Preview

The incredible fact — fully stated in the next lesson as the Fundamental Theorem of Calculus — is that antiderivatives let you compute exact areas.

To find the area under f(x) from a to b:
1. Find an antiderivative F(x).
2. Compute F(b) - F(a).

**Example:** Find the exact area under f(x) = x² from x = 0 to x = 2.
- Antiderivative: F(x) = x³/3
- Area = F(2) - F(0) = 8/3 - 0 = **8/3 ≈ 2.667**

This confirms our earlier Riemann sum estimate of 1.75 (using only 4 rectangles) was an underestimate, and the exact answer is 8/3.

---

## Initial Value Problems

When you know the derivative and a condition (a starting value), you can find the specific antiderivative.

**Example:** If f'(x) = 2x and f(0) = 5, find f(x).
- f(x) = ∫ 2x dx = x² + C
- Apply f(0) = 5: 0 + C = 5 → C = 5
- f(x) = **x² + 5**

**Example:** A particle has velocity v(t) = 3t² - 4t + 1. If the position at t = 0 is s(0) = 2, find s(t).
- s(t) = ∫ (3t² - 4t + 1) dt = t³ - 2t² + t + C
- s(0) = 0 + C = 2 → C = 2
- s(t) = **t³ - 2t² + t + 2**

---

## Practice

1. Evaluate ∫ (5x² - 3x + 2) dx.
2. Evaluate ∫ (sin x + eˣ) dx.
3. Evaluate ∫ x^(-3) dx.
4. Find f(x) if f'(x) = 6x² - 4 and f(1) = 3.
5. Approximate the area under f(x) = x² + 1 from x = 0 to x = 2 using 4 equal left-endpoint rectangles. Then state what the exact answer would be (using the antiderivative).

**Answers:**
1. **(5/3)x³ - (3/2)x² + 2x + C**
2. **-cos x + eˣ + C**
3. ∫ x^(-3) dx = x^(-2)/(-2) + C = **-1/(2x²) + C**
4. f(x) = 2x³ - 4x + C. f(1) = 2 - 4 + C = 3 → C = 5. **f(x) = 2x³ - 4x + 5**
5. Δx = 0.5. Left endpoints: x = 0, 0.5, 1, 1.5. Heights: 1, 1.25, 2, 3.25. Sum = 0.5(1 + 1.25 + 2 + 3.25) = 0.5(7.5) = **3.75**. Exact: F(x) = x³/3 + x. F(2) - F(0) = (8/3 + 2) - 0 = 8/3 + 6/3 = **14/3 ≈ 4.667**. Left rectangles underestimate since the function is increasing.
