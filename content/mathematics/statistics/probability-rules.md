## Probability Rules and Conditional Probability

The basic probability rules from the previous lesson handle simple events. But many real situations involve events that aren't independent — knowing one thing happened changes the probability of another. Medical tests, quality control, spam filters, and legal reasoning all involve conditional probability. This lesson covers conditional probability, the multiplication rule, Bayes' theorem, and discrete probability distributions.

---

## Conditional Probability

**Conditional probability** is the probability of event A given that event B has already occurred.

```
P(A | B) = P(A and B) / P(B)
```

Read: "probability of A given B."

**Intuition:** When we know B happened, we restrict the sample space to only outcomes where B is true. Conditional probability is just regular probability within that smaller sample space.

**Example:** A class of 30 students: 18 are female, 12 are male. 10 females and 5 males are seniors.
- P(senior | female) = P(senior and female) / P(female) = (10/30)/(18/30) = 10/18 = **5/9 ≈ 0.556**
- That is: among females only, 10 out of 18 are seniors.

**Example:** A card is drawn from a standard deck. Given it's a heart, what's P(it's a face card)?
- Hearts: 13. Face cards that are hearts: J, Q, K = 3.
- P(face | heart) = 3/13 ≈ **0.231**

---

## The General Multiplication Rule

This follows directly from conditional probability:

```
P(A and B) = P(A) × P(B | A)
           = P(B) × P(A | B)
```

**Example:** A bag has 5 red and 3 blue marbles. Two are drawn without replacement. P(both red)?
- P(first red) = 5/8
- P(second red | first was red) = 4/7 (one red removed)
- P(both red) = (5/8)(4/7) = 20/56 = **5/14**

**Example:** A box has 10 items, 3 defective. Two are inspected randomly without replacement. P(first good, second defective)?
- P(first good) = 7/10
- P(second defective | first good) = 3/9 = 1/3
- P(good then defective) = (7/10)(1/3) = 7/30 ≈ **0.233**

---

## Independence, Revisited

Events A and B are **independent** if:

```
P(A | B) = P(A)     (knowing B happened doesn't change P(A))
```

This is equivalent to: P(A and B) = P(A) × P(B).

**Testing independence:**

**Example:** In a group: P(left-handed) = 0.10, P(blue eyes) = 0.35, P(left-handed and blue eyes) = 0.035.
- Are they independent? Check: P(L) × P(B) = 0.10 × 0.35 = 0.035 = P(L and B).
- Yes, they're **independent**.

**Example:** P(A) = 0.4, P(B) = 0.3, P(A and B) = 0.15.
- 0.4 × 0.3 = 0.12 ≠ 0.15. **Not independent** — knowing A happened makes B more likely.

---

## Contingency Tables (Two-Way Tables)

A **contingency table** cross-classifies data by two categorical variables. It's one of the clearest ways to reason about conditional probability.

**Example:** Blood type and Rh factor for 200 people:

|  | Rh+ | Rh- | Total |
| :--- | :--- | :--- | :--- |
| Type A | 76 | 8 | 84 |
| Type B | 28 | 4 | 32 |
| Type O | 70 | 10 | 80 |
| Type AB | 3 | 1 | 4 |
| **Total** | **177** | **23** | **200** |

- P(Type O) = 80/200 = 0.40
- P(Rh-) = 23/200 = 0.115
- P(Type O | Rh-) = 10/23 ≈ 0.435
- P(Rh- | Type O) = 10/80 = 0.125

---

## Bayes' Theorem

Bayes' theorem reverses the direction of conditional probability. If you know P(test positive | disease), Bayes' theorem lets you find P(disease | test positive) — the far more useful quantity.

```
P(A | B) = P(B | A) × P(A) / P(B)
```

Or in expanded form:
```
P(A | B) = P(B | A) × P(A) / [P(B | A) × P(A) + P(B | Aᶜ) × P(Aᶜ)]
```

**Example:** A disease affects 1% of the population. A test is 95% accurate (if you have the disease, 95% chance it's positive; if you don't, 5% chance of false positive). You test positive. What's the probability you actually have the disease?

- P(disease) = 0.01, P(no disease) = 0.99
- P(positive | disease) = 0.95
- P(positive | no disease) = 0.05

P(disease | positive) = [P(pos | disease) × P(disease)] / P(positive)
= (0.95 × 0.01) / [(0.95 × 0.01) + (0.05 × 0.99)]
= 0.0095 / (0.0095 + 0.0495)
= 0.0095 / 0.059
≈ **0.161** (about 16%)

**Interpretation:** Even with a 95% accurate test, a positive result only means a 16% chance of actually having the disease. This is because the disease is rare — most positive tests are false positives. This counterintuitive result explains why mass screening programs for rare diseases can cause more harm (anxiety, unnecessary treatment) than good.

---

## Discrete Probability Distributions

A **probability distribution** lists all possible outcomes of a random variable and their associated probabilities.

**Requirements:**
1. All probabilities between 0 and 1.
2. All probabilities sum to 1.

**Example:** Let X = number of heads in 2 coin flips.

| X | P(X) |
| :--- | :--- |
| 0 (TT) | 1/4 |
| 1 (HT or TH) | 2/4 = 1/2 |
| 2 (HH) | 1/4 |

Sum: 1/4 + 1/2 + 1/4 = 1 ✓

**Expected value (mean):** the long-run average value of a random variable.

```
E(X) = Σ x · P(x)
```

For the coin example: E(X) = 0(1/4) + 1(1/2) + 2(1/4) = 0 + 0.5 + 0.5 = **1**

On average, 2 coin flips produce 1 head. Makes intuitive sense.

---

## The Binomial Distribution

The binomial distribution models the number of successes in n independent trials, each with success probability p.

```
P(X = k) = C(n, k) · pᵏ · (1-p)^(n-k)
```

Where:
- n = number of trials
- k = number of successes
- p = probability of success per trial
- C(n, k) = "n choose k" (combinations formula)

**Mean:** μ = np
**Standard deviation:** σ = √(np(1-p))

**Example:** A basketball player makes 70% of free throws. In 10 attempts, P(exactly 7 made)?
- P(X = 7) = C(10,7) · (0.7)⁷ · (0.3)³
- = 120 · 0.0824 · 0.027
- = 120 · 0.002224 ≈ **0.267** (about 26.7%)

**Example:** Mean and SD of the above scenario.
- μ = 10 × 0.7 = **7**
- σ = √(10 × 0.7 × 0.3) = √2.1 ≈ **1.45**

---

## Practice

1. A drawer has 4 red and 6 black socks. Two socks are drawn without replacement. Find P(both are red).
2. Events A and B: P(A) = 0.5, P(B) = 0.4, P(A and B) = 0.2. Are A and B independent? Find P(A | B).
3. Using Bayes' theorem: 5% of items from a factory are defective. A quality test catches 90% of defective items but also flags 8% of good items as defective. An item is flagged. P(it's actually defective)?
4. For X with distribution: P(0)=0.2, P(1)=0.4, P(2)=0.3, P(3)=0.1. Find E(X).
5. A coin is flipped 8 times. Find P(exactly 3 heads) using the binomial distribution.

**Answers:**
1. P(first red) = 4/10 = 2/5. P(second red | first red) = 3/9 = 1/3. P(both red) = (2/5)(1/3) = **2/15 ≈ 0.133**
2. P(A) × P(B) = 0.5 × 0.4 = 0.20 = P(A and B). **Independent**. P(A|B) = P(A and B)/P(B) = 0.20/0.40 = **0.5** = P(A), confirming independence.
3. P(defective) = 0.05. P(flagged | defective) = 0.90. P(flagged | good) = 0.08. P(defective | flagged) = (0.90×0.05)/[(0.90×0.05)+(0.08×0.95)] = 0.045/(0.045+0.076) = 0.045/0.121 ≈ **0.372** (37.2%)
4. E(X) = 0(0.2) + 1(0.4) + 2(0.3) + 3(0.1) = 0 + 0.4 + 0.6 + 0.3 = **1.3**
5. P(X=3) = C(8,3) · (0.5)³ · (0.5)⁵ = 56 · (0.5)⁸ = 56/256 = **7/32 = 0.21875**
