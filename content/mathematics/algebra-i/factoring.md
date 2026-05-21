## Factoring Polynomials

Factoring is the reverse of multiplying. When you multiply (x + 3)(x + 5), you get x² + 8x + 15. Factoring starts with x² + 8x + 15 and finds (x + 3)(x + 5). It is one of the most essential skills in algebra — factoring is how you solve quadratic equations, simplify rational expressions, and find zeros of polynomial functions.

---

## Greatest Common Factor (GCF)

Always check for a GCF first. Factor out the largest expression that divides evenly into every term.

**Example:** 12x³ - 8x² + 4x
- GCF of coefficients: GCF(12, 8, 4) = 4
- GCF of variables: x (the smallest power of x present)
- GCF: 4x
- Factor: **4x(3x² - 2x + 1)**

**Example:** 6x²y - 9xy² + 15xy
- GCF: 3xy
- Result: **3xy(2x - 3y + 5)**

Check: distribute the factored form and verify it equals the original.

---

## Factoring Trinomials: Leading Coefficient = 1

For x² + bx + c, find two numbers that:
- **Multiply** to give c
- **Add** to give b

**Example:** Factor x² + 7x + 12
- Need two numbers that multiply to 12 and add to 7.
- Pairs that multiply to 12: (1, 12), (2, 6), (3, 4), (-1, -12), (-2, -6), (-3, -4)
- Which pair sums to 7? **3 and 4** (3 × 4 = 12, 3 + 4 = 7)
- Factor: **(x + 3)(x + 4)**

**Example:** Factor x² - 5x + 6
- Multiply to 6, add to -5.
- -2 × -3 = 6, and -2 + (-3) = -5. ✓
- Factor: **(x - 2)(x - 3)**

**Example:** Factor x² + 3x - 18
- Multiply to -18, add to 3.
- 6 × (-3) = -18, and 6 + (-3) = 3. ✓
- Factor: **(x + 6)(x - 3)**

**Sign patterns (helpful shortcuts):**
- c is positive, b is positive → both factors are positive
- c is positive, b is negative → both factors are negative
- c is negative → one factor is positive, one is negative (signs differ)

---

## Factoring Trinomials: Leading Coefficient ≠ 1

For ax² + bx + c where a ≠ 1, use the **AC method (factor by grouping)**.

**Procedure:**
1. Multiply a × c.
2. Find two numbers that multiply to (a × c) and add to b.
3. Rewrite the middle term as the sum of two terms using those numbers.
4. Factor by grouping.

**Example:** Factor 2x² + 7x + 3

Step 1: a × c = 2 × 3 = 6
Step 2: Find numbers that multiply to 6 and add to 7: **1 and 6** (1 × 6 = 6, 1 + 6 = 7)
Step 3: Rewrite: 2x² + x + 6x + 3
Step 4: Group: (2x² + x) + (6x + 3) = x(2x + 1) + 3(2x + 1) = **(x + 3)(2x + 1)**

**Verify:** (x + 3)(2x + 1) = 2x² + x + 6x + 3 = 2x² + 7x + 3. ✓

**Example:** Factor 3x² - 10x + 8

Step 1: a × c = 24
Step 2: Multiply to 24, add to -10: -4 and -6 (-4 × -6 = 24, -4 + -6 = -10)
Step 3: Rewrite: 3x² - 4x - 6x + 8
Step 4: Group: x(3x - 4) - 2(3x - 4) = **(x - 2)(3x - 4)**

---

## Special Factoring Patterns

### Difference of Squares
```
a² - b² = (a + b)(a - b)
```
- x² - 25 = (x + 5)(x - 5)
- 4x² - 9 = (2x + 3)(2x - 3)
- 16x² - 49y² = (4x + 7y)(4x - 7y)

**Note:** Sum of squares (a² + b²) does NOT factor over real numbers.

### Perfect Square Trinomials
```
a² + 2ab + b² = (a + b)²
a² - 2ab + b² = (a - b)²
```
- x² + 6x + 9 = (x + 3)²
- x² - 10x + 25 = (x - 5)²
- 4x² + 12x + 9 = (2x + 3)²

**Recognition test:** For a² ± 2ab + b², check that the first and last terms are perfect squares and the middle term is twice the product of their square roots.

### Difference (and Sum) of Cubes
```
a³ - b³ = (a - b)(a² + ab + b²)
a³ + b³ = (a + b)(a² - ab + b²)
```
- x³ - 8 = (x - 2)(x² + 2x + 4)
- 27x³ + 1 = (3x + 1)(9x² - 3x + 1)

---

## Factoring Completely

A polynomial is **factored completely** when all factors are prime (cannot be factored further).

**Strategy — always in this order:**
1. Factor out the GCF.
2. Look for special patterns (difference of squares, perfect square trinomial).
3. Factor the remaining trinomial if needed.
4. Check that no factor can be factored further.

**Example:** Factor 2x³ - 8x completely.
- GCF: 2x → 2x(x² - 4)
- x² - 4 is a difference of squares: (x + 2)(x - 2)
- Completely factored: **2x(x + 2)(x - 2)**

**Example:** Factor 3x³ - 12x² - 15x.
- GCF: 3x → 3x(x² - 4x - 5)
- Factor the trinomial: 3x(x - 5)(x + 1)
- Check: can (x - 5) or (x + 1) factor further? No.
- **3x(x - 5)(x + 1)**

---

## Practice

1. Factor: 15x³y - 10x²y² + 5xy
2. Factor: x² + 9x + 20
3. Factor: x² - 3x - 28
4. Factor: 6x² + 11x + 4
5. Factor: 4x² - 81
6. Factor completely: 2x³ - 32x

**Answers:**
1. **5xy(3x² - 2xy + 1)**
2. Need numbers × to 20, + to 9: 4 and 5. **(x + 4)(x + 5)**
3. Need × to -28, + to -3: -7 and 4. **(x - 7)(x + 4)**
4. AC = 24; find 8 and 3 (multiply to 24, add to 11): 6x² + 8x + 3x + 4 = 2x(3x + 4) + 1(3x + 4) = **(2x + 1)(3x + 4)**
5. Difference of squares: **(2x + 9)(2x - 9)**
6. GCF = 2x: 2x(x² - 16) = 2x(x + 4)(x - 4) → **2x(x + 4)(x - 4)**
