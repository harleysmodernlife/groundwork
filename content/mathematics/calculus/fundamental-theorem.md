## The Fundamental Theorem of Calculus

The Fundamental Theorem of Calculus is one of the most important results in all of mathematics. It reveals that differentiation and integration — two operations that seem completely unrelated — are actually inverse processes. One undoes the other. This connection, discovered independently by Newton and Leibniz in the 17th century, unified centuries of separate work on tangent lines and areas under curves into a single coherent theory.

---

## The Two Parts

The Fundamental Theorem has two parts:

**Part 1:** If F(x) = ∫ₐˣ f(t) dt, then F'(x) = f(x).

In other words: differentiating an integral (where the upper limit is x) gives you back the original integrand.

**Part 2:** If F is any antiderivative of f on [a, b], then:
```
∫ₐᵇ f(x) dx = F(b) - F(a)
```

Part 2 is the computational engine. Part 1 is the theoretical foundation.

---

## Part 1: The Derivative of an Integral

The function F(x) = ∫ₐˣ f(t) dt defines a new function: the accumulated area from a to x.

**Part 1 says:** the rate of change of this accumulated area equals the function f(x) itself.

**Intuition:** As x increases by a tiny amount dx, the area increases by a thin rectangle of height f(x) and width dx, so dF/dx = f(x). The derivative of the accumulated area is the height of the curve — the integrand.

**Example:** If G(x) = ∫₀ˣ t² dt, find G'(x).
- By Part 1: G'(x) = x²
- (No computation needed — just read off the integrand and replace t with x.)

**Example:** If H(x) = ∫₁ˣ sin(t³) dt, find H'(x).
- H'(x) = sin(x³)

**With chain rule:** If the upper limit is a function of x, apply the chain rule.

H(x) = ∫₁^(x²) sin t dt → H'(x) = sin(x²) · 2x

---

## Part 2: Evaluating Definite Integrals

Part 2 gives us the mechanical procedure for computing exact values of definite integrals:

1. Find any antiderivative F(x) of f(x) — the constant C cancels, so pick the simplest one (C = 0).
2. Evaluate F(b) - F(a).

**Notation:** Write F(x) evaluated from a to b as [F(x)]ₐᵇ.

```
∫ₐᵇ f(x) dx = [F(x)]ₐᵇ = F(b) - F(a)
```

**Example:** ∫₀² x² dx
- Antiderivative: F(x) = x³/3
- [x³/3]₀² = 8/3 - 0 = **8/3**

**Example:** ∫₁⁴ √x dx = ∫₁⁴ x^(1/2) dx
- Antiderivative: F(x) = (2/3)x^(3/2)
- [(2/3)x^(3/2)]₁⁴ = (2/3)(8) - (2/3)(1) = 16/3 - 2/3 = **14/3**

**Example:** ∫₀^π sin x dx
- Antiderivative: F(x) = -cos x
- [-cos x]₀^π = -cos(π) - (-cos 0) = -(-1) + 1 = 1 + 1 = **2**
- This is the total area of one complete arch of the sine curve — exactly 2 square units.

**Example:** ∫₋₁¹ (3x² + 2x + 1) dx
- F(x) = x³ + x² + x
- [x³ + x² + x]₋₁¹ = (1 + 1 + 1) - (-1 + 1 - 1) = 3 - (-1) = **4**

---

## Net Area vs. Total Area

The definite integral gives **net signed area**: area above the x-axis is positive, area below is negative. Regions below can cancel regions above.

**Example:** ∫₀^(2π) sin x dx
- Antiderivative: -cos x
- [-cos x]₀^(2π) = -cos(2π) + cos(0) = -1 + 1 = **0**

The positive arch from 0 to π and the negative arch from π to 2π cancel exactly. The net signed area is zero.

If you want the **total area** (counting both positive and negative regions positively), integrate the absolute value |f(x)|, or split at the zeros:

Total area = ∫₀^π sin x dx + |∫_π^(2π) sin x dx| = 2 + |-(-2)| = 2 + 2 = **4**

---

## The Average Value of a Function

The average value of f on [a, b] is:

```
f_avg = (1/(b - a)) · ∫ₐᵇ f(x) dx
```

**Intuition:** This is like finding the height of a rectangle that has the same area as the region under the curve.

**Example:** Find the average value of f(x) = x² on [0, 3].
- f_avg = (1/3) · ∫₀³ x² dx = (1/3) · [x³/3]₀³ = (1/3) · (27/3) = (1/3)(9) = **3**

---

## Why the Theorem Is Deep

Before the Fundamental Theorem, computing areas and computing rates of change were completely separate problems requiring different techniques. The Fundamental Theorem reveals they're the same problem viewed from opposite directions:

- **Differentiate to go from accumulation to rate:** F(x) = area → F'(x) = height of curve
- **Integrate to go from rate to accumulation:** f'(x) = rate → ∫f'(x) dx = total change

This means: if you know a rate (velocity, growth rate, cooling rate), you can find the total accumulated quantity (distance, total growth, total heat lost) by integrating. If you know the accumulated quantity, you can find the current rate by differentiating.

The universe runs on rates and accumulations. The Fundamental Theorem is the bridge between them.

---

## Practice

1. Use the Fundamental Theorem Part 2 to evaluate ∫₁³ (2x + 1) dx.
2. Evaluate ∫₀^(π/2) cos x dx.
3. Evaluate ∫₁⁴ (1/√x) dx.
4. Find the average value of f(x) = x³ on [0, 2].
5. If G(x) = ∫₀ˣ (t² + 1) dt, find G'(x) and G'(3).
6. Find ∫₋₁² (x² - 1) dx. Identify where the integrand is negative and interpret the result as net area.

**Answers:**
1. F(x) = x² + x. [x² + x]₁³ = (9 + 3) - (1 + 1) = 12 - 2 = **10**
2. F(x) = sin x. [sin x]₀^(π/2) = sin(π/2) - sin(0) = 1 - 0 = **1**
3. ∫ x^(-1/2) dx = 2x^(1/2). [2√x]₁⁴ = 2(2) - 2(1) = 4 - 2 = **2**
4. f_avg = (1/2)∫₀² x³ dx = (1/2)[x⁴/4]₀² = (1/2)(16/4) = (1/2)(4) = **2**
5. G'(x) = x² + 1. G'(3) = 9 + 1 = **10**
6. F(x) = x³/3 - x. [x³/3 - x]₋₁² = (8/3 - 2) - (-1/3 + 1) = (2/3) - (2/3) = **0**. The integrand x²-1 is negative on (-1, 1) (since x²<1 there) and positive on (1, 2). The negative region from -1 to 1 cancels the positive regions, giving net area 0. Total area (ignoring sign) would be larger.
