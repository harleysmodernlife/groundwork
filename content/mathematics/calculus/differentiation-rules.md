## Differentiation Rules

Computing derivatives from the limit definition every time would be exhausting. Calculus provides a set of rules that let you find derivatives of almost any function quickly, without going back to limits. These rules are derived once from the limit definition, then used forever. Learning them is learning the grammar of calculus — once you know the rules, you can differentiate any expression you encounter.

---

## The Power Rule

The most used rule in differential calculus:

```
If f(x) = xⁿ, then f'(x) = nxⁿ⁻¹
```

Bring the exponent down front, then reduce the exponent by 1.

**Examples:**
- d/dx (x⁵) = 5x⁴
- d/dx (x²) = 2x
- d/dx (x) = 1 (since x = x¹, bring down 1, reduce to x⁰ = 1)
- d/dx (1) = 0 (constant has zero slope)
- d/dx (x⁻²) = -2x⁻³
- d/dx (x^(1/2)) = (1/2)x^(-1/2) = 1/(2√x)

**With a constant multiple:** d/dx (cf(x)) = c · f'(x)
- d/dx (7x³) = 7 · 3x² = 21x²
- d/dx (4√x) = 4 · (1/2)x^(-1/2) = 2/√x

**Sum/difference rule:** derivatives add and subtract:
- d/dx [f(x) + g(x)] = f'(x) + g'(x)

---

## Differentiating Polynomials

Apply the power rule term by term:

**Example:** f(x) = 4x³ - 2x² + 7x - 5
- f'(x) = 12x² - 4x + 7

**Example:** g(x) = 3x⁴ + x³ - 6x + 11
- g'(x) = 12x³ + 3x² - 6

**Example:** h(x) = 5x^(2/3) - 2x^(-1) + 9
- h'(x) = (10/3)x^(-1/3) + 2x^(-2)

---

## The Derivative of eˣ and ln(x)

Two transcendental functions have elegant derivatives:

```
d/dx (eˣ) = eˣ
d/dx (ln x) = 1/x
```

The exponential function eˣ is its own derivative — it changes at the same rate as its current value. This is what makes exponential growth special.

**Examples:**
- d/dx (5eˣ) = 5eˣ
- d/dx (3 ln x) = 3/x
- d/dx (eˣ + ln x) = eˣ + 1/x

---

## Derivatives of Trig Functions

```
d/dx (sin x) = cos x
d/dx (cos x) = -sin x
d/dx (tan x) = sec²x
d/dx (csc x) = -csc x cot x
d/dx (sec x) = sec x tan x
d/dx (cot x) = -csc²x
```

The first two are the most important. Notice the derivative of cosine has a minus sign.

**Examples:**
- d/dx (3 sin x) = 3 cos x
- d/dx (sin x + cos x) = cos x - sin x
- d/dx (x² + tan x) = 2x + sec²x

---

## The Product Rule

When two functions are multiplied, you cannot just multiply their derivatives. Instead:

```
d/dx [f(x) · g(x)] = f'(x)g(x) + f(x)g'(x)
```

"First times derivative of second, plus second times derivative of first."

**Example:** Differentiate f(x) = x² · sin x.
- f'(x) = (2x)(sin x) + (x²)(cos x) = **2x sin x + x² cos x**

**Example:** Differentiate g(x) = (3x + 1)(x² - 4).
- g'(x) = (3)(x² - 4) + (3x + 1)(2x)
- = 3x² - 12 + 6x² + 2x
- = **9x² + 2x - 12**
(You could also expand first and differentiate — the same result.)

**Example:** Differentiate h(x) = eˣ · ln x.
- h'(x) = (eˣ)(ln x) + (eˣ)(1/x) = eˣ ln x + eˣ/x = **eˣ(ln x + 1/x)**

---

## The Quotient Rule

When one function is divided by another:

```
d/dx [f(x)/g(x)] = [f'(x)g(x) - f(x)g'(x)] / [g(x)]²
```

Memory device: "low d-high minus high d-low, all over low squared" — where high = numerator, low = denominator, d = derivative.

**Important:** The numerator is NOT symmetric. The derivative of the numerator goes first, and there's a minus sign, not plus.

**Example:** Differentiate f(x) = x²/(x + 1).
- f'(x) = [(2x)(x + 1) - (x²)(1)] / (x + 1)²
- = [2x² + 2x - x²] / (x + 1)²
- = **(x² + 2x) / (x + 1)²**

**Example:** Differentiate g(x) = sin x / x.
- g'(x) = [(cos x)(x) - (sin x)(1)] / x²
- = **(x cos x - sin x) / x²**

**Deriving tan x using quotient rule:** tan x = sin x / cos x
- d/dx(tan x) = (cos x · cos x - sin x · (-sin x)) / cos²x
- = (cos²x + sin²x) / cos²x
- = 1/cos²x = sec²x ✓

---

## Summary Table

| Function | Derivative |
| :--- | :--- |
| c (constant) | 0 |
| xⁿ | nxⁿ⁻¹ |
| eˣ | eˣ |
| aˣ | aˣ · ln a |
| ln x | 1/x |
| sin x | cos x |
| cos x | -sin x |
| tan x | sec²x |
| cf(x) | c · f'(x) |
| f + g | f' + g' |
| f · g | f'g + fg' |
| f/g | (f'g - fg') / g² |

---

## Higher-Order Derivatives

You can differentiate a derivative. The second derivative is written f''(x) or d²y/dx².

- f'(x) = first derivative (rate of change)
- f''(x) = second derivative (rate of change of the rate of change)

In physics: if position is f(t), then f'(t) = velocity, and f''(t) = acceleration.

**Example:** f(x) = x⁴ - 3x²
- f'(x) = 4x³ - 6x
- f''(x) = 12x² - 6

The second derivative tells you about **concavity**:
- f''(x) > 0: function is concave up (shaped like a bowl ∪)
- f''(x) < 0: function is concave down (shaped like a cap ∩)

---

## Practice

1. Differentiate: f(x) = 6x⁴ - 3x² + 2x - 9
2. Differentiate: g(x) = √x + 1/x
3. Differentiate: h(x) = x³ · eˣ
4. Differentiate: f(x) = (x² + 1)/(x - 1)
5. Find f''(x) for f(x) = sin x.
6. If f(x) = 2x³ + x, find all values of x where f'(x) = 0.

**Answers:**
1. f'(x) = **24x³ - 6x + 2**
2. g(x) = x^(1/2) + x^(-1). g'(x) = (1/2)x^(-1/2) - x^(-2) = **1/(2√x) - 1/x²**
3. Product rule: h'(x) = (3x²)(eˣ) + (x³)(eˣ) = **eˣ(3x² + x³) = x²eˣ(3 + x)**
4. Quotient rule: [(2x)(x-1) - (x²+1)(1)]/(x-1)² = (2x² - 2x - x² - 1)/(x-1)² = **(x² - 2x - 1)/(x-1)²**
5. f'(x) = cos x. f''(x) = **-sin x**
6. f'(x) = 6x² + 1. Set equal to 0: 6x² + 1 = 0 → x² = -1/6. **No real solutions** — the derivative is always positive (f is always increasing).
