## Permutations and Combinations

Combinatorics is the mathematics of counting — not "how many things are there?" but "how many ways can you arrange or select them?" This matters more than it sounds. Probability is built on it. Poker hand calculations, password security, lottery odds, quality control sampling, and clinical trial design all require knowing how many arrangements or selections are possible. This lesson covers the two fundamental tools: permutations (when order matters) and combinations (when it doesn't).

---

## The Fundamental Counting Principle

Before permutations and combinations, you need the basic rule: if one event can happen m ways and a second independent event can happen n ways, then both can happen m × n ways.

**Example:** A restaurant offers 4 appetizers, 6 entrees, and 3 desserts. How many different 3-course meals are possible?
- 4 × 6 × 3 = **72 meals**

**Example:** A phone requires a 4-digit PIN. How many PINs are possible?
- Each of the 4 positions has 10 choices (0-9).
- 10 × 10 × 10 × 10 = **10,000 PINs**

**Example:** Same as above, but no digit can repeat.
- 1st digit: 10 choices. 2nd: 9 (one used). 3rd: 8. 4th: 7.
- 10 × 9 × 8 × 7 = **5,040 PINs**

---

## Factorials

The symbol n! (read "n factorial") means the product of all positive integers from 1 to n:

```
n! = n × (n-1) × (n-2) × ... × 2 × 1
```

- 1! = 1
- 2! = 2
- 3! = 6
- 4! = 24
- 5! = 120
- 10! = 3,628,800

By definition: **0! = 1** (this is a convention that makes the formulas work out.)

Factorials grow extremely fast. 20! is already over 2 quintillion.

---

## Permutations: When Order Matters

A **permutation** is an arrangement of items where the order matters. "ABC" and "CBA" are different permutations — they're the same letters in different orders.

**How many ways to arrange n distinct objects taken r at a time?**

```
P(n, r) = n! / (n - r)!
```

Also written ₙPᵣ.

**Intuition:** You have n choices for the first position, n-1 for the second (one already used), n-2 for the third, ... down to (n - r + 1) for the rth. This product equals n!/(n - r)!.

**Example:** How many ways can 8 runners finish in 1st, 2nd, and 3rd place?
- P(8, 3) = 8!/(8 - 3)! = 8!/5! = 8 × 7 × 6 = **336 ways**

**Example:** How many 4-letter arrangements can be made from the letters in MATH (no repetition)?
- P(4, 4) = 4!/0! = 24/1 = **24 arrangements**
- (This is just 4! — arranging all 4 in order)

**Example:** A president, vice president, and treasurer are elected from 15 club members. How many outcomes are possible?
- P(15, 3) = 15!/12! = 15 × 14 × 13 = **2,730 outcomes**

---

## Permutations with Repeated Elements

If some elements are identical, many arrangements are duplicates. To count distinct arrangements:

```
Arrangements = n! / (n₁! × n₂! × ... × nₖ!)
```

Where n₁, n₂, ... are the counts of each repeated element.

**Example:** How many distinct arrangements are there of the letters in MISSISSIPPI?
- Total letters: 11. M appears 1 time, I appears 4 times, S appears 4 times, P appears 2 times.
- Arrangements = 11! / (1! × 4! × 4! × 2!) = 39,916,800 / (1 × 24 × 24 × 2) = 39,916,800 / 1,152 = **34,650**

**Example:** How many ways can you arrange the word BANANA?
- 6 letters: B(1), A(3), N(2)
- 6! / (1! × 3! × 2!) = 720 / 12 = **60 arrangements**

---

## Combinations: When Order Doesn't Matter

A **combination** is a selection of items where order doesn't matter. A committee of {Alice, Bob, Carol} is the same committee regardless of the order you list them.

```
C(n, r) = n! / (r! × (n - r)!)
```

Also written ₙCᵣ or (n choose r).

The extra r! in the denominator divides out the duplicate orderings — since r! is the number of ways to arrange r chosen items.

**Example:** How many ways can you choose a committee of 3 from 10 people?
- C(10, 3) = 10! / (3! × 7!) = (10 × 9 × 8) / (3 × 2 × 1) = 720 / 6 = **120 ways**

**Example:** A standard deck has 52 cards. How many different 5-card hands are possible?
- C(52, 5) = 52! / (5! × 47!) = (52 × 51 × 50 × 49 × 48) / 120 = **2,598,960 hands**

**Example:** How many ways can you choose 4 toppings from a menu of 12?
- C(12, 4) = 12! / (4! × 8!) = (12 × 11 × 10 × 9) / 24 = 11,880 / 24 = **495 ways**

---

## Permutations vs. Combinations: How to Tell

The key question: **does the order of selection matter?**

| Situation | Type | Why |
| :--- | :--- | :--- |
| Race finishers (1st, 2nd, 3rd) | Permutation | Position matters |
| Committee of 3 from 10 | Combination | No positions, just members |
| PIN digits | Permutation | 1234 ≠ 4321 |
| Lottery ticket (pick 6 of 49) | Combination | Winning if you have the 6 numbers |
| Award rankings (gold, silver, bronze) | Permutation | The awards are distinct |
| Pizza toppings | Combination | Same toppings regardless of order listed |

---

## Pascal's Triangle and C(n, r)

Pascal's Triangle is a number triangle where each entry is the sum of the two above it:

```
Row 0:          1
Row 1:        1   1
Row 2:      1   2   1
Row 3:    1   3   3   1
Row 4:  1   4   6   4   1
```

The entries in row n are exactly C(n, 0), C(n, 1), C(n, 2), ... C(n, n).

Row 4: C(4,0)=1, C(4,1)=4, C(4,2)=6, C(4,3)=4, C(4,4)=1.

This is where the Binomial Theorem comes from — when you expand (a + b)ⁿ, the coefficients come from row n of Pascal's Triangle.

**(a + b)⁴ = 1a⁴ + 4a³b + 6a²b² + 4ab³ + 1b⁴**

---

## Complementary Counting

Sometimes it's easier to count what you don't want and subtract from the total.

**Example:** From a class of 12, how many committees of 4 include at least one of the two class officers?
- Total committees: C(12, 4) = 495
- Committees with no officers (only from the other 10): C(10, 4) = 210
- Committees with at least one officer: 495 - 210 = **285**

---

## Practice

1. How many ways can 5 books be arranged on a shelf?
2. How many 3-letter arrangements can be made from the letters A, B, C, D, E (no repeats)?
3. A class of 20 students must choose a president, vice president, and secretary. How many outcomes?
4. How many ways can you choose 5 people from a group of 9?
5. How many distinct arrangements are there of the letters in PEPPER?
6. A lottery requires picking 6 numbers from 1-50. How many possible tickets? (Combinations)

**Answers:**
1. 5! = **120 ways**
2. P(5, 3) = 5!/2! = 5 × 4 × 3 = **60 arrangements**
3. P(20, 3) = 20 × 19 × 18 = **6,840 outcomes**
4. C(9, 5) = 9!/(5! × 4!) = (9 × 8 × 7 × 6)/(4 × 3 × 2 × 1) = 3024/24 = **126 ways**
5. 6 letters: P(3), E(2), R(1). 6!/(3! × 2! × 1!) = 720/12 = **60 arrangements**
6. C(50, 6) = 50!/(6! × 44!) = (50 × 49 × 48 × 47 × 46 × 45)/720 = **15,890,700 tickets**
