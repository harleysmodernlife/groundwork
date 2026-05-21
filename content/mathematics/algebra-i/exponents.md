## Exponents and Exponential Functions

An exponent tells you how many times to multiply a base number by itself. This simple notation captures repeated multiplication and also describes one of the most important patterns in nature and finance: exponential growth and decay. Understanding exponents — their rules, their properties, and what they model — is foundational for all of algebra II, calculus, and data science.

---

## Exponent Basics

```
b^n = b × b × b × ... × b   (n times)
```

- **b** is the **base**
- **n** is the **exponent** (also called the power)
- The result is a **power** of b

**Examples:**
- 3⁴ = 3 × 3 × 3 × 3 = 81
- 2⁵ = 32
- 10³ = 1,000

Reading: 3⁴ is "three to the fourth power" or "three to the fourth." 5² is "five squared." 2³ is "two cubed."

---

## The Rules of Exponents

These rules hold for all real numbers (with some caveats noted):

### Product Rule
When multiplying powers with the same base, add the exponents:
- bᵐ × bⁿ = b^(m+n)
- 2³ × 2⁴ = 2⁷ = 128

### Quotient Rule
When dividing powers with the same base, subtract the exponents:
- bᵐ / bⁿ = b^(m-n)
- 5⁶ / 5² = 5⁴ = 625

### Power of a Power
When raising a power to a power, multiply the exponents:
- (bᵐ)ⁿ = b^(m×n)
- (3²)⁴ = 3⁸ = 6,561

### Power of a Product
Distribute the exponent to each factor:
- (ab)ⁿ = aⁿ × bⁿ
- (2x)³ = 8x³

### Power of a Quotient
- (a/b)ⁿ = aⁿ/bⁿ
- (2/3)⁴ = 16/81

---

## Zero Exponent

Any non-zero base raised to the power of 0 equals 1:
- b⁰ = 1 (for b ≠ 0)
- 7⁰ = 1, 100⁰ = 1, (x + 3)⁰ = 1

**Why?** Use the quotient rule: bⁿ / bⁿ = b^(n-n) = b⁰. And any number divided by itself is 1. So b⁰ = 1.

0⁰ is mathematically undefined (or considered 1 by convention in some contexts).

---

## Negative Exponents

A negative exponent means "take the reciprocal":
- b^(-n) = 1 / bⁿ
- 2⁻³ = 1/2³ = 1/8
- x⁻² = 1/x²
- 3⁻¹ = 1/3

To eliminate a negative exponent, flip the base to the other side of the fraction:
- 5⁻² / 1 = 1/5² = 1/25
- 1/4⁻³ = 4³ = 64

---

## Fractional (Rational) Exponents

Fractional exponents connect exponents to roots:
- b^(1/n) = the nth root of b → b^(1/2) = √b, b^(1/3) = ∛b
- b^(m/n) = (nth root of b)^m = nth root of b^m

**Examples:**
- 9^(1/2) = √9 = 3
- 8^(1/3) = ∛8 = 2
- 27^(2/3) = (∛27)² = 3² = 9
- 16^(3/4) = (⁴√16)³ = 2³ = 8

---

## Scientific Notation

Scientific notation uses powers of 10 to write very large or very small numbers compactly.

Format: a × 10ⁿ, where 1 ≤ |a| < 10

**Converting to scientific notation:**
- 4,500,000 = 4.5 × 10⁶ (decimal moved 6 places left)
- 0.00037 = 3.7 × 10⁻⁴ (decimal moved 4 places right)

**Converting from scientific notation:**
- 6.02 × 10²³ = 602,000,000,000,000,000,000,000 (Avogadro's number)
- 1.6 × 10⁻¹⁹ = 0.00000000000000000016 (charge of an electron in coulombs)

**Multiplying in scientific notation:**
(3 × 10⁴) × (2 × 10³) = (3 × 2) × 10^(4+3) = 6 × 10⁷

---

## Exponential Functions

An exponential function has the variable in the exponent:

```
f(x) = a × b^x
```

Where a is the initial value and b is the growth factor (b > 0, b ≠ 1).

**b > 1:** Exponential growth. As x increases, f(x) grows rapidly.
**0 < b < 1:** Exponential decay. As x increases, f(x) shrinks toward zero.

### Exponential Growth Example: Compound Interest

If $1,000 is invested at 8% annual interest compounded annually:
- After year 1: 1,000 × 1.08 = $1,080
- After year 2: 1,080 × 1.08 = $1,166.40
- After year n: A = 1,000 × (1.08)ⁿ

After 20 years: A = 1,000 × (1.08)²⁰ ≈ 1,000 × 4.66 = **$4,661**

### Exponential Decay Example: Half-Life

A radioactive substance with a 5-year half-life starts with 200 grams. After n half-lives:
- Amount = 200 × (1/2)ⁿ
- After 10 years (n = 2): 200 × (1/2)² = 200 × 1/4 = **50 grams**

---

## Key Properties of Exponential Functions

| Property | Growth (b > 1) | Decay (0 < b < 1) |
| :--- | :--- | :--- |
| As x → ∞ | f(x) → ∞ | f(x) → 0 |
| Y-intercept | (0, a) | (0, a) |
| Shape | Curves upward rapidly | Approaches x-axis |
| Rate | Faster and faster | Slower and slower |

---

## Practice

1. Simplify: x³ × x⁵
2. Simplify: (2x²)³
3. Simplify: 4⁻²
4. Evaluate: 64^(2/3)
5. Write 0.00000508 in scientific notation.
6. A town has 2,500 residents and is growing at 3% per year. Write the exponential function and find the population in 10 years.

**Answers:**
1. x⁸
2. 2³ × x⁶ = **8x⁶**
3. 1/4² = **1/16**
4. (∛64)² = 4² = **16**
5. **5.08 × 10⁻⁶**
6. P(t) = 2500 × (1.03)^t; P(10) = 2500 × (1.03)¹⁰ ≈ 2500 × 1.344 ≈ **3,360 people**
