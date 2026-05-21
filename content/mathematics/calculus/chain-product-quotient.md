## Chain Rule, Product Rule, and Quotient Rule

The previous lesson covered the basic rules for differentiation. This lesson goes deeper into the three rules that handle composed, multiplied, and divided functions — the chain rule, product rule, and quotient rule. These rules appear constantly in calculus, and knowing when and how to apply each one (and how to combine them) is the core skill of differentiation.

---

## The Chain Rule

The chain rule handles **composite functions** — a function inside another function.

If y = f(g(x)), then:
```
dy/dx = f'(g(x)) · g'(x)
```

"Derivative of the outside (leaving the inside alone) times derivative of the inside."

Think of it as peeling layers. If you have f(g(x)), first differentiate f with respect to its input, then multiply by the derivative of that input.

**Example:** Differentiate y = (3x + 1)⁵.
- Outer function: u⁵ where u = 3x + 1
- dy/dx = 5(3x + 1)⁴ · 3 = **15(3x + 1)⁴**

**Example:** Differentiate y = sin(x²).
- Outer: sin(u), inner: u = x²
- dy/dx = cos(x²) · 2x = **2x cos(x²)**

**Example:** Differentiate y = e^(3x).
- Outer: eᵘ, inner: u = 3x
- dy/dx = e^(3x) · 3 = **3e^(3x)**

**Example:** Differentiate y = ln(x² + 1).
- Outer: ln(u), inner: u = x² + 1
- dy/dx = 1/(x² + 1) · 2x = **2x/(x² + 1)**

**Example:** Differentiate y = √(4x - 7).
- Rewrite: (4x - 7)^(1/2)
- dy/dx = (1/2)(4x - 7)^(-1/2) · 4 = **2/√(4x - 7)**

---

## Identifying the Layers

The hardest part of the chain rule is identifying what's "inside" and what's "outside."

**Strategy:** ask yourself, "What's the last operation applied?"
- In sin(x²): the last operation is sin. Outer = sin, inner = x².
- In (x² + 3)⁴: the last operation is raising to the 4th power. Outer = u⁴, inner = x² + 3.
- In e^(sin x): the last operation is eˣ. Outer = eᵘ, inner = sin x.

---

## Chaining Multiple Layers

Sometimes you have three or more nested functions:

**Example:** Differentiate y = sin²(3x).
- Rewrite: [sin(3x)]²
- Three layers: outer = u², middle = sin(v), inner = v = 3x
- dy/dx = 2 sin(3x) · cos(3x) · 3 = **6 sin(3x) cos(3x)**

**Example:** Differentiate y = e^(cos(x²)).
- Outer: eᵘ, middle: cos(v), inner: v = x²
- dy/dx = e^(cos(x²)) · (-sin(x²)) · 2x = **-2x sin(x²) e^(cos(x²))**

---

## Combining Chain Rule with Product Rule

Real problems often require multiple rules at once. Work from the outside in.

**Example:** Differentiate f(x) = x² · e^(3x).
- This is a product: u = x², v = e^(3x)
- f'(x) = (2x)(e^(3x)) + (x²)(3e^(3x))
- = 2xe^(3x) + 3x²e^(3x)
- = **xe^(3x)(2 + 3x)**

**Example:** Differentiate g(x) = sin(x) · (x² + 1)³.
- Product rule: u = sin(x), v = (x² + 1)³
- u' = cos(x), v' = 3(x² + 1)² · 2x = 6x(x² + 1)² [chain rule for v]
- g'(x) = cos(x)(x² + 1)³ + sin(x) · 6x(x² + 1)²
- = **(x² + 1)²[cos(x)(x² + 1) + 6x sin(x)]**

---

## Combining Chain Rule with Quotient Rule

**Example:** Differentiate h(x) = sin(x) / (x² + 1).
- Quotient rule: f = sin(x), g = x² + 1
- f' = cos(x), g' = 2x
- h'(x) = [cos(x)(x² + 1) - sin(x)(2x)] / (x² + 1)²
- = **[(x² + 1)cos(x) - 2x sin(x)] / (x² + 1)²**

**Example:** Differentiate k(x) = e^(2x) / (x + 1).
- f = e^(2x), f' = 2e^(2x) [chain rule]
- g = x + 1, g' = 1
- k'(x) = [2e^(2x)(x + 1) - e^(2x)(1)] / (x + 1)²
- = e^(2x)[2(x + 1) - 1] / (x + 1)²
- = **e^(2x)(2x + 1) / (x + 1)²**

---

## Implicit Differentiation

Sometimes a function isn't written as y = f(x) — it's given by an equation mixing x and y. You differentiate both sides with respect to x, using the chain rule on any term involving y (because y is a function of x).

**The key:** whenever you differentiate y, multiply by dy/dx (because you're differentiating a function of x).

**Example:** Differentiate x² + y² = 25 and find dy/dx.
- Differentiate both sides: 2x + 2y(dy/dx) = 0
- Solve for dy/dx: 2y(dy/dx) = -2x → **dy/dx = -x/y**

This is the slope of any point on the circle x² + y² = 25. At (3, 4): dy/dx = -3/4.

**Example:** Find dy/dx for x³ + y³ = 6xy (a folium of Descartes).
- Differentiate: 3x² + 3y²(dy/dx) = 6y + 6x(dy/dx)
- Collect dy/dx terms: 3y²(dy/dx) - 6x(dy/dx) = 6y - 3x²
- Factor: dy/dx(3y² - 6x) = 6y - 3x²
- **dy/dx = (6y - 3x²)/(3y² - 6x) = (2y - x²)/(y² - 2x)**

---

## The Chain Rule for Exponentials and Logs

These appear constantly — know them cold:

```
d/dx [eˢ⁽ˣ⁾] = eˢ⁽ˣ⁾ · g'(x)
d/dx [aˢ⁽ˣ⁾] = aˢ⁽ˣ⁾ · ln(a) · g'(x)
d/dx [ln(g(x))] = g'(x)/g(x)
```

**Examples:**
- d/dx [e^(x²)] = e^(x²) · 2x
- d/dx [2^(3x)] = 2^(3x) · ln(2) · 3
- d/dx [ln(sin x)] = cos(x)/sin(x) = cot(x)
- d/dx [ln(x³ + 1)] = 3x²/(x³ + 1)

---

## Practice

1. Differentiate: y = (5x - 2)⁴
2. Differentiate: y = cos(3x² + 1)
3. Differentiate: y = eˣ · sin(x)
4. Differentiate: y = (x + 1)²/(x - 1)
5. Use implicit differentiation: find dy/dx for x²y + y³ = 8.
6. Differentiate: y = ln(cos x)

**Answers:**
1. dy/dx = 4(5x-2)³ · 5 = **20(5x - 2)³**
2. dy/dx = -sin(3x²+1) · 6x = **-6x sin(3x² + 1)**
3. Product rule: (eˣ)(sin x) + (eˣ)(cos x) = **eˣ(sin x + cos x)**
4. Quotient rule: [2(x+1)(x-1) - (x+1)²·1]/(x-1)² = (x+1)[2(x-1)-(x+1)]/(x-1)² = (x+1)(x-3)/(x-1)². **dy/dx = (x+1)(x-3)/(x-1)²**
5. Differentiate: 2xy + x²(dy/dx) + 3y²(dy/dx) = 0. Group: (x² + 3y²)(dy/dx) = -2xy. **dy/dx = -2xy/(x² + 3y²)**
6. dy/dx = (1/cos x) · (-sin x) = -sin x/cos x = **-tan x**
