## Probability: What Are the Chances?

Probability is the mathematics of uncertainty. It gives us a way to reason precisely about events that aren't certain — to calculate odds, make informed decisions, and understand risk. Every insurance premium, every medical treatment recommendation, every weather forecast, and every gambling game is built on probability. This lesson introduces the foundations: sample spaces, events, and the rules that govern how probability works.

---

## What Is Probability?

**Probability** is a number between 0 and 1 that measures how likely an event is.

- P = 0: impossible (will never happen)
- P = 1: certain (will always happen)
- P = 0.5: equally likely to happen or not happen
- P = 0.8: likely (will happen about 80% of the time in the long run)

**Theoretical probability** (based on equally likely outcomes):

```
P(event) = number of favorable outcomes / total number of possible outcomes
```

**Experimental probability** (based on observed data):

```
P(event) ≈ number of times event occurred / total number of trials
```

As the number of trials increases, experimental probability approaches theoretical probability. This is the **Law of Large Numbers**.

---

## Vocabulary

**Experiment:** any process that produces an observable outcome (flipping a coin, rolling a die, drawing a card).

**Outcome:** a single possible result of an experiment.

**Sample space (S):** the set of all possible outcomes.

**Event:** a subset of the sample space — one or more outcomes that we're interested in.

**Example:** Roll a standard 6-sided die.
- Sample space: S = {1, 2, 3, 4, 5, 6}
- Event A = "roll an even number" = {2, 4, 6}
- P(A) = 3/6 = **1/2**

---

## Basic Examples

**Coin flip:** S = {H, T}. P(Heads) = 1/2.

**Deck of 52 cards:**
- P(drawing a heart) = 13/52 = 1/4
- P(drawing an ace) = 4/52 = 1/13
- P(drawing the ace of spades) = 1/52

**Rolling two dice:** S has 6 × 6 = 36 equally likely outcomes.
- P(sum = 7) = 6/36 = 1/6 (the pairs: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1))
- P(sum = 12) = 1/36 (only (6,6))
- P(sum = 2) = 1/36 (only (1,1))

---

## Complement

The **complement** of event A (written A' or Aᶜ) is everything in the sample space that's not in A.

```
P(Aᶜ) = 1 - P(A)
```

**Example:** P(rolling something other than a 6) = 1 - P(6) = 1 - 1/6 = **5/6**

**Example:** P(at least one head in 3 coin flips).
- Complement: P(no heads) = P(TTT) = (1/2)³ = 1/8
- P(at least one head) = 1 - 1/8 = **7/8**

The complement rule is especially useful when "at least one" appears — it's often much easier to compute P(none) and subtract.

---

## Mutually Exclusive Events

Two events are **mutually exclusive** (or disjoint) if they cannot both happen on the same trial. On a single die roll, you can't roll a 3 and a 5 simultaneously.

**Addition rule for mutually exclusive events:**

```
P(A or B) = P(A) + P(B)
```

**Example:** P(rolling a 2 or a 5) = 1/6 + 1/6 = **2/6 = 1/3**

**Example:** P(drawing a heart or a spade) = 13/52 + 13/52 = 26/52 = **1/2**

---

## Non-Mutually-Exclusive Events

If events can overlap (both happen simultaneously), you must subtract the overlap to avoid double-counting:

```
P(A or B) = P(A) + P(B) - P(A and B)
```

This is the **General Addition Rule**.

**Example:** A card is drawn. Let A = heart, B = ace.
- P(A) = 13/52, P(B) = 4/52, P(A and B) = 1/52 (ace of hearts)
- P(heart or ace) = 13/52 + 4/52 - 1/52 = **16/52 = 4/13**

**Example:** In a class, 40% of students play sports, 30% play an instrument, and 15% do both.
- P(sports or instrument) = 0.40 + 0.30 - 0.15 = **0.55** (55%)

---

## Independent Events

Two events are **independent** if the outcome of one doesn't affect the probability of the other. Flipping a coin twice — the result of the first flip doesn't change the probability of the second.

**Multiplication rule for independent events:**

```
P(A and B) = P(A) × P(B)
```

**Example:** P(flipping two heads in a row) = 1/2 × 1/2 = **1/4**

**Example:** A factory has three machines, each failing with probability 0.05. If they fail independently, what's the probability all three fail simultaneously?
- P(all fail) = 0.05 × 0.05 × 0.05 = **0.000125** (about 0.0125%)

**Example:** What's the probability that at least one machine fails?
- P(none fail) = 0.95³ ≈ 0.857
- P(at least one fails) = 1 - 0.857 = **0.143** (about 14.3%)

---

## Counting Outcomes: Equally Likely Spaces

For complex events, systematically list or count outcomes.

**Example:** Two dice are rolled. What's P(the product of the dice is 12)?
- Pairs with product 12: (2,6), (3,4), (4,3), (6,2) — four outcomes.
- P = 4/36 = **1/9**

**Example:** Three coins are flipped. What's P(exactly 2 heads)?
- Sample space: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT — 8 outcomes.
- Exactly 2 heads: HHT, HTH, THH — 3 outcomes.
- P = 3/8 = **0.375**

---

## Subjective Probability

Not all probability comes from counting equally likely outcomes. Sometimes probabilities are assigned based on judgment, expertise, or prior experience.

A doctor might say "there's a 70% chance the treatment will work" based on similar cases. A meteorologist says "30% chance of rain" based on atmospheric models and historical data. These are **subjective probabilities** — valid uses of the framework even when perfect enumeration is impossible.

---

## Practice

1. A bag has 5 red, 3 blue, and 2 green marbles. What's P(drawing a red marble)?
2. Two cards are drawn with replacement from a standard deck. What's P(both are aces)?
3. A die is rolled. What's P(3 or even)?
4. In a school, 55% of students take math, 40% take science, and 25% take both. What's P(a student takes math or science)?
5. What's P(at least one 6 when rolling a fair die 4 times)?

**Answers:**
1. P(red) = 5/10 = **1/2**
2. With replacement, draws are independent. P(ace) = 4/52 = 1/13 each. P(both aces) = (1/13)² = **1/169 ≈ 0.6%**
3. P(3) = 1/6. Even numbers = {2,4,6}, P(even) = 3/6 = 1/2. Are they mutually exclusive? Yes — 3 is odd. P(3 or even) = 1/6 + 3/6 = **4/6 = 2/3**
4. General addition rule: 0.55 + 0.40 - 0.25 = **0.70** (70%)
5. Complement: P(no 6 in 4 rolls) = (5/6)⁴ = 625/1296 ≈ 0.482. P(at least one 6) = 1 - 0.482 = **0.518** (about 51.8%)
