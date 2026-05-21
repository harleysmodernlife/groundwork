## Integration Techniques

Direct integration using the basic formulas only works for simple functions. Most real-world integrals require at least one algebraic transformation before you can apply those formulas. This lesson covers the two most important integration techniques: u-substitution (which reverses the chain rule) and integration by parts (which reverses the product rule). Together they handle a very large class of integrals.

---

## When Basic Formulas Aren't Enough

Basic integral: ∫ x³ dx = x⁴/4 + C. Straightforward.

What about ∫ (x² + 1)⁵ · 2x dx? You could expand that fifth power — it would take forever. Or you could recognize that something elegant is happening: the 2x looks like the derivative of (x² + 1). That pattern is the key to u-substitution.

---

## U-Substitution

**The idea:** If you see a composite function and its inner derivative as a factor, substitute u = inner function.

**Procedure:**
1. Choose u = (inner function or some part of the integrand).
2. Compute du/dx, then solve for dx: du = g'(x) dx → dx = du/g'(x).
3. Substitute to get an integral entirely in terms of u.
4. Integrate.
5. Substitute back to express the answer in terms of x.

**Why it works:** U-substitution reverses the chain rule. If you differentiated F(g(x)) using the chain rule, you'd get F'(g(x)) · g'(x). U-substitution undoes that.

---

## U-Substitution Examples

**Example:** ∫ (x² + 1)⁵ · 2x dx
- Let u = x² + 1 → du = 2x dx
- Substituting: ∫ u⁵ du = u⁶/6 + C = **(x² + 1)⁶/6 + C**

**Example:** ∫ sin(3x) dx
- Let u = 3x → du = 3 dx → dx = du/3
- ∫ sin(u) · (du/3) = (1/3)∫ sin u du = (1/3)(-cos u) + C = **-(1/3)cos(3x) + C**

**Example:** ∫ eˣ²· 2x dx
- Let u = x² → du = 2x dx
- ∫ eᵘ du = eᵘ + C = **eˣ² + C**

**Example:** ∫ (2x + 5)⁷ dx
- Let u = 2x + 5 → du = 2 dx → dx = du/2
- ∫ u⁷ · (du/2) = (1/2) · u⁸/8 + C = **(2x + 5)⁸/16 + C**

**Example:** ∫ x/√(x² + 4) dx
- Let u = x² + 4 → du = 2x dx → x dx = du/2
- ∫ (1/√u)(du/2) = (1/2)∫ u^(-1/2) du = (1/2)(2u^(1/2)) + C = **√(x² + 4) + C**

**Example:** ∫ tan x dx = ∫ sin x / cos x dx
- Let u = cos x → du = -sin x dx → sin x dx = -du
- ∫ (-du)/u = -ln|u| + C = **-ln|cos x| + C = ln|sec x| + C**

---

## U-Substitution for Definite Integrals

Two approaches:
1. Substitute, find the antiderivative in x, then evaluate at original limits.
2. Or better: change the limits when you substitute.

**Changing the limits:** If u = g(x), then when x = a, u = g(a); when x = b, u = g(b).

**Example:** ∫₀¹ x(x² + 1)³ dx
- Let u = x² + 1, du = 2x dx → x dx = du/2
- Limits: x = 0 → u = 1; x = 1 → u = 2
- ∫₁² u³ (du/2) = (1/2)[u⁴/4]₁² = (1/8)[u⁴]₁² = (1/8)(16 - 1) = **15/8**

---

## Integration by Parts

This technique handles integrals where u-substitution doesn't work — usually when you have a product of two unrelated functions.

**Formula:**
```
∫ u dv = uv - ∫ v du
```

**Procedure:**
1. Identify u and dv from the integrand (f(x) dx = u · dv).
2. Compute du (differentiate u) and v (integrate dv).
3. Apply the formula.
4. Integrate ∫ v du (which should be simpler than the original).

**Choosing u and dv — the LIATE rule:**
Choose u from whichever category appears first:
- **L**ogarithms (ln x, log x)
- **I**nverse trig functions (arcsin, arctan)
- **A**lgebraic (polynomials: x², 3x, etc.)
- **T**rig functions (sin x, cos x)
- **E**xponential (eˣ, 2ˣ)

Whatever is "higher" on the LIATE list becomes u; the rest becomes dv.

---

## Integration by Parts Examples

**Example:** ∫ x eˣ dx
- LIATE: x is algebraic, eˣ is exponential. Choose u = x, dv = eˣ dx.
- du = dx, v = eˣ
- ∫ x eˣ dx = x eˣ - ∫ eˣ dx = x eˣ - eˣ + C = **eˣ(x - 1) + C**

**Example:** ∫ x sin x dx
- u = x, dv = sin x dx
- du = dx, v = -cos x
- ∫ x sin x dx = -x cos x - ∫ -cos x dx = -x cos x + sin x + C = **sin x - x cos x + C**

**Example:** ∫ ln x dx
- Only one factor, but let u = ln x, dv = dx
- du = (1/x)dx, v = x
- ∫ ln x dx = x ln x - ∫ x · (1/x) dx = x ln x - ∫ 1 dx = **x ln x - x + C**

**Example:** ∫ x² eˣ dx (two rounds needed)
- First: u = x², dv = eˣ dx → du = 2x dx, v = eˣ
- = x²eˣ - ∫ 2x eˣ dx
- Second (apply again): ∫ 2x eˣ dx = 2(xeˣ - eˣ) [from the first example × 2]
- Result: x²eˣ - 2xeˣ + 2eˣ + C = **eˣ(x² - 2x + 2) + C**

---

## The Circular Case

Sometimes applying integration by parts twice brings you back to the original integral:

**Example:** ∫ eˣ sin x dx
- u = sin x, dv = eˣ dx → du = cos x dx, v = eˣ
- = eˣ sin x - ∫ eˣ cos x dx
- Apply again to ∫ eˣ cos x dx: u = cos x, dv = eˣ dx → du = -sin x dx, v = eˣ
- ∫ eˣ cos x dx = eˣ cos x + ∫ eˣ sin x dx

Now substitute back:
∫ eˣ sin x dx = eˣ sin x - [eˣ cos x + ∫ eˣ sin x dx]
∫ eˣ sin x dx + ∫ eˣ sin x dx = eˣ sin x - eˣ cos x
2∫ eˣ sin x dx = eˣ(sin x - cos x)
∫ eˣ sin x dx = **eˣ(sin x - cos x)/2 + C**

---

## Practice

1. Evaluate: ∫ (4x + 3)⁶ dx
2. Evaluate: ∫ cos(x/2) dx
3. Evaluate: ∫₀¹ 2x eˣ² dx
4. Evaluate: ∫ x cos x dx (by parts)
5. Evaluate: ∫ x² ln x dx (by parts — choose u = ln x)

**Answers:**
1. u = 4x+3, du = 4dx. ∫ u⁶ du/4 = u⁷/28 + C = **(4x+3)⁷/28 + C**
2. u = x/2, du = dx/2. ∫ cos(u) · 2 du = 2 sin u + C = **2 sin(x/2) + C**
3. u = x², du = 2x dx. Limits: x=0→u=0, x=1→u=1. ∫₀¹ eᵘ du = [eᵘ]₀¹ = e - 1 ≈ **1.718**
4. u = x, dv = cos x dx. du = dx, v = sin x. ∫ x cos x dx = x sin x - ∫ sin x dx = **x sin x + cos x + C**
5. u = ln x, dv = x² dx. du = (1/x)dx, v = x³/3. ∫ x² ln x dx = (x³/3) ln x - ∫ (x³/3)(1/x) dx = (x³/3) ln x - (1/3)∫ x² dx = (x³/3) ln x - x³/9 + C = **x³(3 ln x - 1)/9 + C**
