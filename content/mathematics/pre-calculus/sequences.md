## Arithmetic and Geometric Sequences

A sequence is an ordered list of numbers following a pattern. You've seen sequences your whole life — counting by twos, doubling a recipe, the monthly balance of a savings account. Pre-calculus sequences give you the formal tools to describe these patterns precisely, predict any term without listing everything in between, and sum them up efficiently. These ideas lead directly into calculus, where sequences of approximations converge on exact answers.

---

## What Is a Sequence?

A **sequence** is a list of numbers in a specific order:

3, 7, 11, 15, 19, ...

Each number in the list is called a **term**. The first term is a₁, the second is a₂, and so on. The subscript tells you the position.

A sequence can be **finite** (it ends) or **infinite** (it goes on forever, indicated by "...").

**Notation:** aₙ means the nth term. A sequence can be described by a formula for aₙ in terms of n.

---

## Arithmetic Sequences

An **arithmetic sequence** is one where you add the same number each time to get the next term. That fixed number is called the **common difference** (d).

**Examples:**
- 5, 8, 11, 14, 17, ... → d = 3 (adding 3 each time)
- 20, 15, 10, 5, 0, ... → d = -5 (subtracting 5 each time)
- 2, 2, 2, 2, ... → d = 0 (a constant sequence is arithmetic)

**Finding the common difference:** subtract any term from the next one.
- d = a₂ - a₁ = a₃ - a₂ (it must be constant throughout)

---

## The nth Term Formula for Arithmetic Sequences

You don't want to list 50 terms to find the 50th one. The formula is:

```
aₙ = a₁ + (n - 1)d
```

Where:
- a₁ = the first term
- d = common difference
- n = the position you want

**Derivation:** a₁ gets no jumps. a₂ gets 1 jump. a₃ gets 2 jumps. The nth term gets (n - 1) jumps of size d added to the first term.

**Example:** The sequence 7, 11, 15, 19, ... Find the 30th term.
- a₁ = 7, d = 4
- a₃₀ = 7 + (30 - 1)(4) = 7 + 116 = **123**

**Example:** An arithmetic sequence has a₁ = 3 and a₁₀ = 48. Find d and the formula for aₙ.
- 48 = 3 + (10 - 1)d → 45 = 9d → d = 5
- aₙ = 3 + (n - 1)(5) = 3 + 5n - 5 = **5n - 2**
- Check: a₁ = 5(1) - 2 = 3 ✓; a₁₀ = 5(10) - 2 = 48 ✓

---

## Geometric Sequences

A **geometric sequence** is one where you multiply by the same number each time. That fixed number is called the **common ratio** (r).

**Examples:**
- 2, 6, 18, 54, 162, ... → r = 3 (multiplying by 3)
- 80, 40, 20, 10, 5, ... → r = 1/2 (multiplying by 1/2)
- 4, -4, 4, -4, ... → r = -1 (multiplying by -1, alternating signs)

**Finding the common ratio:** divide any term by the previous one.
- r = a₂/a₁ = a₃/a₂ (it must be constant throughout)

---

## The nth Term Formula for Geometric Sequences

```
aₙ = a₁ · rⁿ⁻¹
```

**Derivation:** a₁ gets multiplied by r zero times. a₂ gets multiplied once. The nth term gets r multiplied (n - 1) times.

**Example:** The sequence 5, 15, 45, 135, ... Find the 8th term.
- a₁ = 5, r = 3
- a₈ = 5 · 3⁷ = 5 · 2187 = **10,935**

**Example:** A geometric sequence has a₁ = 6 and r = 1/2. Find a₆.
- a₆ = 6 · (1/2)⁵ = 6 · (1/32) = **6/32 = 3/16**

---

## Identifying the Type of Sequence

To tell if a sequence is arithmetic or geometric:
- Compute the differences between consecutive terms. If they're all equal → arithmetic.
- Compute the ratios between consecutive terms. If they're all equal → geometric.
- If neither → it might be neither (other types of sequences exist).

**Example:** 3, 6, 12, 24, 48
- Differences: 3, 6, 12, 24 — not constant
- Ratios: 2, 2, 2, 2 — constant → **geometric, r = 2**

**Example:** 100, 93, 86, 79, 72
- Differences: -7, -7, -7, -7 — constant → **arithmetic, d = -7**

---

## Real-World Arithmetic Sequences

Any situation where a quantity increases or decreases by the same fixed amount each step is arithmetic.

**Example:** A freelancer charges $400 for the first project and adds $50 for each additional project per client (to reward larger clients with lower rates... wait, or more? — let's say the rate increases: $400, $450, $500, ...). How much does project 12 cost?
- a₁ = 400, d = 50
- a₁₂ = 400 + (11)(50) = 400 + 550 = **$950**

**Example:** A parking garage has 320 spaces on the ground floor and 12 fewer on each higher floor. On which floor are there 200 spaces?
- aₙ = 320 + (n - 1)(-12) = 320 - 12n + 12 = 332 - 12n
- 200 = 332 - 12n → 12n = 132 → n = **11** (the 11th floor)

---

## Real-World Geometric Sequences

Anything that grows or shrinks by a fixed percentage each period is geometric.

**Example:** A car purchased for $28,000 loses 15% of its value each year. What is it worth after 5 years?
- r = 0.85 (keeping 85% each year)
- a₁ = 28,000 (value at purchase)
- Value after 5 years = a₆ = 28,000 · (0.85)⁵ ≈ 28,000 · 0.4437 ≈ **$12,424**

**Example:** A bacteria culture starts with 500 cells and doubles every hour. How many cells after 8 hours?
- a₁ = 500, r = 2
- a₉ = 500 · 2⁸ = 500 · 256 = **128,000 cells**

---

## Finding Terms When You're Given Two Terms (Not the First)

If you're given aₘ and aₙ (neither of which is a₁), you can still find the formula.

**Arithmetic:** Use aₙ - aₘ = (n - m)d to find d, then use either given term to find a₁.

**Example:** a₃ = 10 and a₇ = 26. Find a₁ and aₙ.
- 26 - 10 = (7 - 3)d → 16 = 4d → d = 4
- a₁ = a₃ - 2d = 10 - 8 = 2
- aₙ = 2 + (n - 1)(4) = **4n - 2**

**Geometric:** Use aₙ/aₘ = r^(n-m) to find r, then backtrack to a₁.

**Example:** a₂ = 6 and a₅ = 48. Find r and a₁.
- 48/6 = r^(5-2) → 8 = r³ → r = 2
- a₁ = a₂/r = 6/2 = **3**
- Check: 3, 6, 12, 24, 48 ✓

---

## Practice

1. Find the 15th term of the arithmetic sequence: 12, 9, 6, 3, ...
2. Find the 7th term of the geometric sequence: 4, 12, 36, 108, ...
3. An arithmetic sequence has a₅ = 17 and a₁₂ = 38. Find a₁ and the general formula aₙ.
4. A geometric sequence has a₃ = 20 and a₆ = 2500. Find r and a₁.
5. A gym membership costs $30 to join and $25 per month. Write a formula for the total spent after n months. Is this arithmetic or geometric?

**Answers:**
1. a₁ = 12, d = -3. a₁₅ = 12 + 14(-3) = 12 - 42 = **-30**
2. a₁ = 4, r = 3. a₇ = 4 · 3⁶ = 4 · 729 = **2,916**
3. 38 - 17 = 7d → d = 3. a₁ = a₅ - 4d = 17 - 12 = 5. aₙ = **3n + 2**
4. 2500/20 = r³ → 125 = r³ → r = 5. a₁ = a₃/r² = 20/25 = **4/5**. Check: 4/5, 4, 20, 100, 500, 2500 ✓
5. Total = 30 + 25n. This is **arithmetic** — the total increases by $25 each month. (a₁ = 55, d = 25)
