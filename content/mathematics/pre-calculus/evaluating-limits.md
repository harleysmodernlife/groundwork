## Evaluating Limits Algebraically

The previous lesson introduced what limits are. This lesson develops the techniques to calculate them exactly, without needing a table of values. Most limits you'll encounter in calculus can be found using a handful of rules and algebraic strategies. The key skill is recognizing which technique applies, and knowing what to do when direct substitution fails.

---

## The Limit Laws

If lim f(x) and lim g(x) both exist as x → c, then:

**Sum/Difference:**
lim [f(x) ± g(x)] = lim f(x) ± lim g(x)

**Product:**
lim [f(x) · g(x)] = lim f(x) · lim g(x)

**Quotient:**
lim [f(x) / g(x)] = lim f(x) / lim g(x), provided lim g(x) ≠ 0

**Scalar Multiple:**
lim [k · f(x)] = k · lim f(x)

**Power:**
lim [f(x)]ⁿ = [lim f(x)]ⁿ

**Root:**
lim √f(x) = √(lim f(x)), provided the limit is non-negative

In plain terms: limits of sums, products, and quotients equal the sums, products, and quotients of the limits — as long as no division by zero occurs.

---

## Method 1: Direct Substitution

The first thing to try: just plug in x = c.

For any polynomial, and for most rational functions when the denominator isn't zero, you can evaluate the limit by direct substitution.

**Example:** lim (3x² - 2x + 5) as x → 4
- Substitute x = 4: 3(16) - 2(4) + 5 = 48 - 8 + 5 = **45**

**Example:** lim (x + 1)/(x - 3) as x → 2
- Substitute x = 2: (2 + 1)/(2 - 3) = 3/(-1) = **-3**

**Example:** lim (x + 1)/(x - 3) as x → 3
- Substitute x = 3: 4/0 — undefined! Direct substitution fails.
- When the denominator is zero, you need another method.

---

## Method 2: Factor and Cancel

When direct substitution gives 0/0 (an "indeterminate form"), factor the numerator and denominator and cancel the common factor causing the zero.

**Example:** lim (x² - 9)/(x - 3) as x → 3
- Direct substitution: 0/0 — indeterminate.
- Factor: (x - 3)(x + 3) / (x - 3) = x + 3, for x ≠ 3.
- Now substitute: 3 + 3 = **6**

**Example:** lim (x² - x - 6)/(x - 3) as x → 3
- Direct substitution: 0/0.
- Factor numerator: (x - 3)(x + 2)/(x - 3) = x + 2.
- Substitute: 3 + 2 = **5**

**Example:** lim (x² + 2x)/(x² + x) as x → 0
- Direct substitution: 0/0.
- Factor: x(x + 2) / x(x + 1) = (x + 2)/(x + 1) for x ≠ 0.
- Substitute: (0 + 2)/(0 + 1) = **2**

The limit exists because once you cancel the problematic factor, you're left with an expression that's well-behaved near x = 0.

---

## Method 3: Rationalize (Conjugate Method)

When a limit involves square roots and gives 0/0, multiply the numerator and denominator by the conjugate to eliminate the radical.

**Example:** lim (√x - 2)/(x - 4) as x → 4
- Direct substitution: (√4 - 2)/(4 - 4) = 0/0.
- Multiply numerator and denominator by (√x + 2):
  - Numerator: (√x - 2)(√x + 2) = x - 4
  - Denominator: (x - 4)(√x + 2)
  - Simplified: (x - 4)/[(x - 4)(√x + 2)] = 1/(√x + 2)
- Substitute x = 4: 1/(√4 + 2) = 1/4 = **1/4**

**Example:** lim (√(x + 5) - 3)/(x - 4) as x → 4
- 0/0. Multiply by (√(x + 5) + 3)/(√(x + 5) + 3).
- Numerator becomes: (x + 5) - 9 = x - 4
- Result: (x - 4)/[(x - 4)(√(x + 5) + 3)] = 1/(√(x + 5) + 3)
- Substitute: 1/(√9 + 3) = 1/6 = **1/6**

---

## Limits Involving Infinity

**Rational functions and horizontal asymptotes:**

When evaluating lim f(x)/g(x) as x → ∞, divide every term by the highest power of x in the denominator.

**Example:** lim (4x² - 3x) / (2x² + 5) as x → ∞
- Divide everything by x²:
- (4 - 3/x) / (2 + 5/x²)
- As x → ∞, 3/x → 0 and 5/x² → 0.
- Limit = (4 - 0)/(2 + 0) = **2**

**Quick rules (degree comparison):**

| Numerator degree vs. denominator degree | Limit as x → ∞ |
| :--- | :--- |
| Numerator degree < denominator degree | 0 |
| Numerator degree = denominator degree | ratio of leading coefficients |
| Numerator degree > denominator degree | ±∞ (no finite limit) |

**Example:** lim (6x³) / (2x⁵) as x → ∞ → degree of num < denom → **0**

**Example:** lim (5x²) / (x² - 1) as x → ∞ → equal degrees → 5/1 = **5**

**Example:** lim (x³ + 2) / (3x + 1) as x → ∞ → num > denom → **∞** (no finite limit)

---

## The Squeeze Theorem

If g(x) ≤ f(x) ≤ h(x) near x = c, and lim g(x) = lim h(x) = L, then lim f(x) = L.

In other words: if a function is sandwiched between two functions that both approach the same limit, it must approach that limit too.

**Classic example:** lim x · sin(1/x) as x → 0

We know -1 ≤ sin(1/x) ≤ 1 for all x ≠ 0. Multiply by |x|:
- -|x| ≤ x · sin(1/x) ≤ |x|

Since lim(-|x|) = 0 and lim(|x|) = 0 as x → 0, by the squeeze theorem: lim x·sin(1/x) = **0**.

---

## The Special Trig Limits

Two limits appear constantly in calculus derivations. Just memorize them:

```
lim sin(x)/x = 1       (as x → 0)
lim (1 - cos x)/x = 0  (as x → 0)
```

These cannot be proven by direct substitution (both give 0/0). They're proven using the squeeze theorem in calculus.

**Application:** lim sin(3x)/x as x → 0
- Rewrite: sin(3x)/x = 3 · sin(3x)/(3x)
- As x → 0, 3x → 0, so sin(3x)/(3x) → 1.
- Limit = 3 · 1 = **3**

---

## Practice

1. Evaluate: lim (2x² - 3x + 1) as x → -1
2. Evaluate: lim (x² - 16)/(x - 4) as x → 4
3. Evaluate: lim (x² + x - 2)/(x - 1) as x → 1
4. Evaluate: lim (√(x + 4) - 2)/x as x → 0
5. Evaluate: lim (3x³ - 1)/(7x³ + 2x) as x → ∞

**Answers:**
1. Direct substitution: 2(1) - 3(-1) + 1 = 2 + 3 + 1 = **6**
2. Factor: (x-4)(x+4)/(x-4) = x + 4. Substitute: 4 + 4 = **8**
3. Factor: (x+2)(x-1)/(x-1) = x + 2. Substitute: 1 + 2 = **3**
4. Multiply by (√(x+4) + 2): numerator = (x+4) - 4 = x. Result = x/[x(√(x+4)+2)] = 1/(√(x+4)+2). Substitute x=0: 1/(2+2) = **1/4**
5. Equal degrees (3). Ratio of leading coefficients = 3/7 = **3/7**
