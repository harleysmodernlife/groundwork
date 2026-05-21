## Polynomials: Adding, Subtracting, Multiplying

A polynomial is an expression consisting of variables and coefficients, involving only addition, subtraction, multiplication, and non-negative integer exponents. Polynomials are the foundation of algebraic computation — they model curves, approximate functions, and form the basis for everything from calculus to computer graphics.

---

## Anatomy of a Polynomial

**Term:** A product of a coefficient and variable(s) with non-negative integer exponents.
- 5x², -3x, 7, 2x³y

**Polynomial:** A sum of terms.
- 4x³ - 2x² + 7x - 9 is a polynomial with four terms.

**Degree of a term:** The sum of the exponents in that term.
- 5x²: degree 2
- 3x²y³: degree 5 (2 + 3)

**Degree of a polynomial:** The degree of the highest-degree term.
- 4x³ - 2x² + 7x - 9: degree 3

**Leading coefficient:** The coefficient of the highest-degree term.
- In 4x³ - 2x²: the leading coefficient is 4.

**Constant term:** The term with no variable (or the term with degree 0).
- In 4x³ - 2x² + 7x - 9: the constant term is -9.

---

## Classifying by Number of Terms

| Terms | Name | Example |
| :--- | :--- | :--- |
| 1 | Monomial | 3x², -7 |
| 2 | Binomial | 2x + 5, x² - 4 |
| 3 | Trinomial | x² + 3x - 10 |
| 4+ | Polynomial | x³ - 2x² + x - 6 |

---

## Standard Form

A polynomial in standard form has terms written from highest to lowest degree.
- Not standard: 5 - 3x + 2x³ + x²
- Standard form: 2x³ + x² - 3x + 5

Always write polynomials in standard form before adding, subtracting, or comparing.

---

## Adding Polynomials

Combine like terms. Like terms have the same variable raised to the same power.

**Example:** (3x² + 5x - 2) + (x² - 4x + 7)

Group like terms:
- x² terms: 3x² + x² = 4x²
- x terms: 5x - 4x = x
- Constants: -2 + 7 = 5

Result: **4x² + x + 5**

**Column method:**
```
  3x² + 5x - 2
+  x² - 4x + 7
--------------
  4x² +  x + 5
```

---

## Subtracting Polynomials

Distribute the minus sign to every term of the polynomial being subtracted, then combine like terms.

**Example:** (4x² - 3x + 6) - (x² + 2x - 1)

Distribute the minus:
- 4x² - 3x + 6 - x² - 2x + 1

Combine like terms:
- x² terms: 4x² - x² = 3x²
- x terms: -3x - 2x = -5x
- Constants: 6 + 1 = 7

Result: **3x² - 5x + 7**

**Most common mistake:** Forgetting to distribute the minus sign to ALL terms in the second polynomial. (4x² - 3x + 6) - (x² + 2x - 1) ≠ 4x² - 3x + 6 - x² + 2x - 1 would only be right if the minus distributed to x² and nothing else — which is wrong.

---

## Multiplying Polynomials

### Monomial × Polynomial (Distributive Property)

Multiply the monomial by every term of the polynomial.

**Example:** 3x(2x² - 4x + 1)
- 3x × 2x² = 6x³
- 3x × (-4x) = -12x²
- 3x × 1 = 3x
- Result: **6x³ - 12x² + 3x**

### Binomial × Binomial (FOIL)

FOIL: First, Outer, Inner, Last — the four pairs of terms in (a + b)(c + d).

**Example:** (x + 3)(x + 5)
- First: x × x = x²
- Outer: x × 5 = 5x
- Inner: 3 × x = 3x
- Last: 3 × 5 = 15
- Sum: x² + 5x + 3x + 15 = **x² + 8x + 15**

**Example:** (2x - 1)(3x + 4)
- First: 6x²
- Outer: 8x
- Inner: -3x
- Last: -4
- Sum: **6x² + 5x - 4**

### Polynomial × Polynomial (General)

Multiply each term of the first polynomial by each term of the second, then combine like terms.

**Example:** (x + 2)(x² - 3x + 4)

Distribute x:  x³ - 3x² + 4x
Distribute 2:  2x² - 6x + 8

Sum: x³ + (-3x² + 2x²) + (4x - 6x) + 8
= **x³ - x² - 2x + 8**

---

## Special Products (Worth Memorizing)

**Perfect Square Trinomial:**
- (a + b)² = a² + 2ab + b²
- (a - b)² = a² - 2ab + b²

**Examples:**
- (x + 5)² = x² + 10x + 25
- (3x - 2)² = 9x² - 12x + 4

**Difference of Squares:**
- (a + b)(a - b) = a² - b²

**Examples:**
- (x + 6)(x - 6) = x² - 36
- (4x + 3)(4x - 3) = 16x² - 9

Recognizing these patterns saves time and prevents errors in both multiplication and factoring.

---

## Evaluating Polynomials

Substitute a value for x and compute.

**Example:** P(x) = 2x³ - 3x + 1. Find P(-2).
- P(-2) = 2(-2)³ - 3(-2) + 1
- = 2(-8) + 6 + 1
- = -16 + 6 + 1
- = **-9**

---

## Practice

1. Add: (3x³ - x + 4) + (x³ + 2x² - 5)
2. Subtract: (6x² - 4x + 9) - (2x² - 7x + 3)
3. Multiply: 5x(3x² - 2x + 4)
4. Multiply: (x + 7)(x - 3)
5. Multiply: (2x - 5)²
6. Multiply: (x + 2)(x² - x + 3)

**Answers:**
1. **4x³ + 2x² - x - 1**
2. 6x² - 4x + 9 - 2x² + 7x - 3 = **4x² + 3x + 6**
3. **15x³ - 10x² + 20x**
4. x² - 3x + 7x - 21 = **x² + 4x - 21**
5. 4x² - 20x + 25 (use (a-b)² = a² - 2ab + b²)
6. x³ - x² + 3x + 2x² - 2x + 6 = **x³ + x² + x + 6**
