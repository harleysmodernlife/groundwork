## Series and Summation

A series is what you get when you add up the terms of a sequence. Instead of just listing 1, 2, 3, 4, 5, you ask: what is the total? Series appear everywhere in applied math — the total payments over a loan, the total distance a bouncing ball travels, the sum of an infinite geometric series that calculus exploits constantly. This lesson covers the notation, the closed-form formulas, and how to tell when an infinite series converges to a finite value.

---

## From Sequence to Series

A **sequence:** 3, 7, 11, 15, 19
A **series:** 3 + 7 + 11 + 15 + 19 = 55

A series is just the sum of a sequence. When the sequence has a definite number of terms, we call it a **finite series**. When it goes on forever, it's an **infinite series**.

---

## Sigma Notation

Adding up a long sequence is tedious to write. Mathematicians use **sigma notation** (Σ, the Greek letter sigma meaning "sum"):

```
n
Σ aₖ = a₁ + a₂ + a₃ + ... + aₙ
k=1
```

Reading it: "Sum of aₖ, as k goes from 1 to n."

The bottom of the sigma tells you where to start (k = 1 usually), and the top tells you where to stop (n, or ∞ for an infinite sum).

**Example:** Write out the sum and evaluate:
```
5
Σ (2k + 1)
k=1
```
- k = 1: 2(1) + 1 = 3
- k = 2: 2(2) + 1 = 5
- k = 3: 2(3) + 1 = 7
- k = 4: 2(4) + 1 = 9
- k = 5: 2(5) + 1 = 11
- Sum = 3 + 5 + 7 + 9 + 11 = **35**

**Example:** Write in sigma notation: 4 + 8 + 12 + 16 + 20 + 24
- Pattern: 4k for k = 1 through 6
- Written: Σ 4k from k=1 to 6

---

## Arithmetic Series: The Sum Formula

Adding up an arithmetic sequence by hand takes forever when there are many terms. There's a famous shortcut.

The legend: A student named Gauss was told by his teacher to add 1 + 2 + 3 + ... + 100 to keep him busy. Gauss noticed that pairing the first and last terms gives the same sum each time: 1 + 100 = 101, 2 + 99 = 101, 3 + 98 = 101... 50 pairs total. So the answer is 50 × 101 = 5,050. He solved it in minutes.

This gives us the formula for the sum of an arithmetic series with n terms:

```
Sₙ = n/2 × (a₁ + aₙ)
```

Or equivalently, since aₙ = a₁ + (n - 1)d:

```
Sₙ = n/2 × (2a₁ + (n - 1)d)
```

**Example:** Sum the arithmetic series: 5 + 9 + 13 + 17 + ... + 81
- a₁ = 5, d = 4, aₙ = 81
- Find n: 81 = 5 + (n - 1)(4) → 76 = 4(n - 1) → n = 20
- S₂₀ = 20/2 × (5 + 81) = 10 × 86 = **860**

**Example:** Find the sum of the first 40 terms of 3, 7, 11, 15, ...
- a₁ = 3, d = 4, n = 40
- S₄₀ = 40/2 × (2(3) + 39(4)) = 20 × (6 + 156) = 20 × 162 = **3,240**

---

## Geometric Series: The Sum Formula

For a geometric series with first term a₁, common ratio r, and n terms:

```
Sₙ = a₁(1 - rⁿ) / (1 - r)     (when r ≠ 1)
```

If r = 1, all terms are equal and Sₙ = n · a₁.

**Derivation idea:** Write S = a₁ + a₁r + a₁r² + ... + a₁rⁿ⁻¹. Multiply both sides by r: rS = a₁r + a₁r² + ... + a₁rⁿ. Subtract: S - rS = a₁ - a₁rⁿ. Factor and solve: S(1 - r) = a₁(1 - rⁿ) → S = a₁(1 - rⁿ)/(1 - r).

**Example:** Sum the first 6 terms of 3, 6, 12, 24, 48, 96.
- a₁ = 3, r = 2, n = 6
- S₆ = 3(1 - 2⁶)/(1 - 2) = 3(1 - 64)/(-1) = 3(-63)/(-1) = **189**
- Check: 3 + 6 + 12 + 24 + 48 + 96 = 189 ✓

**Example:** Find the sum of the first 10 terms of 100, 50, 25, 12.5, ...
- a₁ = 100, r = 1/2, n = 10
- S₁₀ = 100(1 - (1/2)¹⁰)/(1 - 1/2) = 100(1 - 1/1024)/(1/2) = 200(1023/1024) ≈ **199.80**

---

## Infinite Geometric Series

What happens when you add infinitely many terms of a geometric series? Usually this would blow up to infinity — but if the common ratio satisfies |r| < 1, each successive term is smaller than the last, and the infinite sum converges to a finite number.

**The infinite geometric series formula:**

```
S∞ = a₁ / (1 - r)     (only valid when |r| < 1)
```

If |r| ≥ 1, the series **diverges** (no finite sum).

**Derivation:** As n → ∞, rⁿ → 0 (when |r| < 1). So the formula Sₙ = a₁(1 - rⁿ)/(1 - r) approaches a₁(1 - 0)/(1 - r) = a₁/(1 - r).

**Example:** Find the sum: 8 + 4 + 2 + 1 + 1/2 + ...
- a₁ = 8, r = 1/2. Since |1/2| < 1, it converges.
- S∞ = 8 / (1 - 1/2) = 8 / (1/2) = **16**

**Example:** Find the sum: 1 - 1/3 + 1/9 - 1/27 + ...
- a₁ = 1, r = -1/3. Since |-1/3| < 1, it converges.
- S∞ = 1 / (1 - (-1/3)) = 1 / (4/3) = **3/4**

**Example:** Does 5 + 10 + 20 + 40 + ... converge?
- r = 2. Since |2| ≥ 1, it **diverges**. No finite sum.

---

## Repeating Decimals as Infinite Series

Every repeating decimal can be expressed as an infinite geometric series.

**Example:** Express 0.333... as a fraction.
- 0.333... = 3/10 + 3/100 + 3/1000 + ...
- a₁ = 3/10, r = 1/10
- S∞ = (3/10) / (1 - 1/10) = (3/10) / (9/10) = 3/9 = **1/3** ✓

**Example:** Express 0.121212... as a fraction.
- 0.121212... = 12/100 + 12/10000 + ...
- a₁ = 12/100, r = 1/100
- S∞ = (12/100) / (1 - 1/100) = (12/100) / (99/100) = 12/99 = **4/33**

---

## Real-World Applications

**Annuities:** If you deposit $500 at the end of each year into an account earning 6% annual interest, the total after n years is a geometric series. Each payment earns interest for a different number of years.

**Bouncing ball:** A ball is dropped from 10 feet and bounces back to 60% of its previous height each time. The total vertical distance traveled is:
- Down: 10 + 6 + 3.6 + ... = 10/(1 - 0.6) = 25
- Up: 6 + 3.6 + 2.16 + ... = 6/(1 - 0.6) = 15
- Total: **40 feet**

**Loan payments:** The sum formula for arithmetic or geometric series is the mathematical foundation for amortization tables showing how loan payments are applied to principal and interest.

---

## Key Formulas Summary

| Series Type | Sum of n terms | Infinite sum |
| :--- | :--- | :--- |
| Arithmetic | Sₙ = n/2 (a₁ + aₙ) | Diverges (unless d = 0) |
| Geometric, r ≠ 1 | Sₙ = a₁(1 - rⁿ)/(1 - r) | S∞ = a₁/(1 - r) if \|r\| < 1 |

---

## Practice

1. Find the sum of the arithmetic series: 2 + 5 + 8 + 11 + ... + 59.
2. Find S₈ for the geometric series: 1, 3, 9, 27, ...
3. Find the infinite sum: 18 + 12 + 8 + 16/3 + ...
4. Does the series 5 - 5 + 5 - 5 + ... have a finite sum? Explain.
5. A store offers a 10% discount each week on an unsold item. If the original price is $200, what is the total of all prices the item could be sold for over infinite weeks?

**Answers:**
1. a₁ = 2, d = 3, aₙ = 59. n = (59 - 2)/3 + 1 = 20. S₂₀ = 20/2 × (2 + 59) = 10 × 61 = **610**
2. a₁ = 1, r = 3, n = 8. S₈ = 1(1 - 3⁸)/(1 - 3) = (1 - 6561)/(-2) = (-6560)/(-2) = **3,280**
3. a₁ = 18, r = 2/3. |r| < 1. S∞ = 18/(1 - 2/3) = 18/(1/3) = **54**
4. r = -1, |r| = 1, so the series **diverges**. Partial sums alternate between 5 and 0, never settling.
5. a₁ = 200, r = 0.9. S∞ = 200/(1 - 0.9) = 200/0.1 = **$2,000**
