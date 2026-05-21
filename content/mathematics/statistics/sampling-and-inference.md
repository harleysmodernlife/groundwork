## Sampling, Confidence Intervals, and Inference

Statistics becomes truly powerful when it lets you make claims about a population based on data from just a sample. This is **statistical inference** — using what you can observe to draw conclusions about what you can't observe directly. The tools of inference are confidence intervals and hypothesis tests. This lesson covers sampling distributions, the Central Limit Theorem, and confidence intervals. The next lesson covers hypothesis testing.

---

## The Sampling Problem

Suppose you want to know the average income of all 4 million adults in a city. You can't survey everyone. So you take a sample of 1,000 people and compute the sample mean x̄.

The problem: your x̄ will not exactly equal the true population mean μ. It will be close — but how close? If you took a different sample of 1,000 people, you'd get a slightly different x̄. And another sample would give yet another x̄.

The key question of inference: how much should we trust x̄ as an estimate of μ?

---

## Sampling Distributions

If you repeatedly took random samples of size n from a population and computed x̄ each time, you'd get a distribution of sample means. This is called the **sampling distribution of the sample mean**.

The sampling distribution has these properties:
- Its **mean** equals the population mean: μ_x̄ = μ
- Its **standard deviation** (called the **standard error**) is: σ_x̄ = σ/√n

The standard error decreases as sample size n increases. Larger samples give more precise estimates.

---

## The Central Limit Theorem

The **Central Limit Theorem (CLT)** is arguably the most important theorem in statistics:

**If n is large enough (typically n ≥ 30), the sampling distribution of the sample mean is approximately normal, regardless of the shape of the original population distribution.**

**Why this is extraordinary:** Even if the original data is skewed, bimodal, or otherwise non-normal, the distribution of sample means will be approximately bell-shaped for sufficiently large samples. This is why the normal distribution appears everywhere in statistics — it's not because data is normally distributed, it's because sample means always are.

**Example:** Monthly incomes in a city are highly right-skewed (a few very high earners). But if you take repeated random samples of n = 100 people and compute the sample mean each time, the distribution of those sample means will be approximately normal, centered at the true population mean.

---

## Point Estimates

A **point estimate** is a single sample statistic used to estimate a population parameter.

| Population parameter | Point estimate |
| :--- | :--- |
| Population mean (μ) | Sample mean (x̄) |
| Population proportion (p) | Sample proportion (p̂) |
| Population std dev (σ) | Sample std dev (s) |

A point estimate is our best single guess, but it comes with uncertainty. A **confidence interval** quantifies that uncertainty.

---

## Confidence Intervals for a Mean

A **confidence interval** gives a range of plausible values for the population parameter, along with a confidence level.

**A 95% confidence interval for μ (when σ is known):**

```
x̄ ± z* · (σ/√n)
```

Where:
- x̄ = sample mean
- σ = population standard deviation (or use s when σ is unknown)
- n = sample size
- z* = critical value from the standard normal distribution
  - 90% confidence: z* = 1.645
  - 95% confidence: z* = 1.960
  - 99% confidence: z* = 2.576

The margin of error = z* · (σ/√n).

**Example:** A sample of 100 students has a mean test score of 74. The population standard deviation is known to be 12. Construct a 95% confidence interval for the population mean.
- Standard error: 12/√100 = 12/10 = 1.2
- Margin of error: 1.960 × 1.2 = 2.352
- Confidence interval: 74 ± 2.352 → **(71.65, 76.35)**

**Interpretation:** We are 95% confident that the true population mean test score falls between 71.65 and 76.35.

---

## What "95% Confident" Actually Means

This is frequently misunderstood. The interval (71.65, 76.35) either contains the true mean or it doesn't — there's no probability about it once it's computed.

What 95% means: if we repeated this entire process (sample 100 students, build the confidence interval) many times, about 95% of the resulting intervals would contain the true population mean.

You're not saying there's a 95% chance the true mean is in this one interval. You're saying this procedure is correct 95% of the time.

---

## Confidence Intervals for a Proportion

When estimating a population proportion p (like the fraction of voters supporting a candidate):

**Sample proportion:** p̂ = x/n (successes / sample size)

**95% confidence interval for p:**

```
p̂ ± z* · √(p̂(1 - p̂)/n)
```

**Example:** In a poll of 500 registered voters, 280 say they support Candidate A. Construct a 95% confidence interval for the true proportion who support A.
- p̂ = 280/500 = 0.56
- Standard error: √(0.56 × 0.44 / 500) = √(0.0004928) ≈ 0.0222
- Margin of error: 1.96 × 0.0222 ≈ 0.0435
- Confidence interval: 0.56 ± 0.044 → **(0.516, 0.604)** or about 52% to 60%

This is why polls are reported as "X% ± Y points" — Y is the margin of error.

---

## Effect of Sample Size and Confidence Level

**Larger sample size:** narrower confidence interval (more precise), same confidence level.
- n = 100 with σ = 10: margin of error = 1.96 × 1 = 1.96
- n = 400 with σ = 10: margin of error = 1.96 × 0.5 = 0.98 (half as wide)

**Higher confidence level:** wider confidence interval (less precise), same sample size.
- 90% CI is narrower than 95% CI, which is narrower than 99% CI.

You cannot have high confidence and high precision unless you have a large sample. There's always a tradeoff.

---

## The t-Distribution

When the population standard deviation σ is unknown (almost always in practice) and you use the sample standard deviation s instead, you use the **t-distribution** instead of z.

The t-distribution is similar to the standard normal but has heavier tails — reflecting extra uncertainty from estimating σ. It depends on the **degrees of freedom** (df = n - 1).

**90% CI for μ with unknown σ:**

```
x̄ ± t* · (s/√n)
```

where t* comes from the t-table with df = n - 1.

As n grows large, the t-distribution approaches the standard normal — this is why large-sample z and t results are similar.

---

## Practice

1. A random sample of 64 light bulbs has mean life 1,100 hours with σ = 80 hours. Construct a 95% confidence interval for the population mean.
2. A poll of 1,000 voters finds 54% support Proposition X (p̂ = 0.54). Find the 99% confidence interval for the true proportion.
3. How would doubling the sample size from 100 to 200 affect the width of a confidence interval?
4. In your own words, what does it mean to say a confidence interval "contains the true parameter"?
5. A sample of 25 students has mean sleep time 6.8 hours with s = 1.2 hours. Using t* ≈ 2.064 for 95% and df = 24, find the 95% confidence interval.

**Answers:**
1. SE = 80/√64 = 10. Margin of error = 1.96 × 10 = 19.6. CI: **(1080.4, 1119.6) hours**
2. SE = √(0.54 × 0.46/1000) = √0.0002484 ≈ 0.01576. Margin: 2.576 × 0.01576 ≈ 0.0406. CI: **(0.499, 0.581)** or 49.9% to 58.1%
3. SE = σ/√n. Doubling n multiplies √n by √2. So SE is divided by √2 ≈ 1.414. The interval width is **reduced by a factor of √2 ≈ 1.41** — about 29% narrower, not half as wide. To cut the width in half, you need 4× the sample size.
4. It means: if we repeated the sampling and interval-construction process many times, the true parameter value would be inside the resulting interval for the stated percentage of repetitions (e.g., 95%). For any one specific interval, the parameter either is or isn't inside — we just don't know which.
5. SE = 1.2/√25 = 1.2/5 = 0.24. Margin of error: 2.064 × 0.24 ≈ 0.495. CI: 6.8 ± 0.495 → **(6.305, 7.295) hours**
