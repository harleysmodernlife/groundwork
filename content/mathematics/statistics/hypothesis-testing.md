## Hypothesis Testing

Hypothesis testing is the formal procedure for using data to make decisions about claims. Does a new drug work better than the existing one? Has the defect rate decreased after changing a manufacturing process? Is this coin fair? These questions can't be answered by intuition alone — they require a structured framework for weighing evidence against chance. Hypothesis testing provides that framework, and it underlies nearly every study you read in medicine, psychology, economics, and public policy.

---

## The Core Idea

The central insight of hypothesis testing is this: instead of trying to prove something directly, we ask whether the observed data would be surprising if the claim we're testing were false.

More specifically: we assume the conservative, skeptical position (the "status quo" — nothing has changed, the drug doesn't work, the coin is fair). Then we ask: if this conservative position were true, how often would we see data as extreme as we actually observed? If the answer is "very rarely," the data provides evidence against the conservative position.

---

## The Hypotheses

Every hypothesis test involves two competing hypotheses:

**Null hypothesis (H₀):** The conservative claim. Usually "no effect," "no difference," or "no change." This is what we assume to be true unless we find strong evidence against it.

**Alternative hypothesis (H₁ or Hₐ):** The claim we're trying to find evidence for. The "research hypothesis."

**Examples:**

- Testing a new drug: H₀: drug has no effect on blood pressure. H₁: drug lowers blood pressure.
- Testing a coin: H₀: p = 0.5 (fair coin). H₁: p ≠ 0.5 (biased coin).
- Testing quality control: H₀: defect rate = 5%. H₁: defect rate < 5%.

**Types of alternative hypotheses:**
- **Two-sided (two-tailed):** H₁: μ ≠ μ₀ (testing for any difference)
- **One-sided (one-tailed):** H₁: μ > μ₀ or H₁: μ < μ₀ (testing for a specific direction)

---

## The Test Statistic

After collecting data, you compute a **test statistic** — a standardized measure of how far your sample result is from what H₀ predicts.

**For testing a mean (σ known):**
```
z = (x̄ - μ₀) / (σ/√n)
```

**For testing a mean (σ unknown, using s):**
```
t = (x̄ - μ₀) / (s/√n)       with df = n - 1
```

**For testing a proportion:**
```
z = (p̂ - p₀) / √(p₀(1-p₀)/n)
```

The test statistic measures how many standard errors your sample result is from the null hypothesis value.

---

## The P-value

The **p-value** is the probability of observing a test statistic as extreme as (or more extreme than) the one calculated, assuming H₀ is true.

- **Small p-value** (e.g., p < 0.05): the data would be rare if H₀ were true → evidence against H₀
- **Large p-value** (e.g., p > 0.05): the data would be common if H₀ were true → no evidence against H₀

The p-value does NOT tell you the probability that H₀ is true. It tells you how surprising the data is, assuming H₀.

---

## The Decision Rule

Compare the p-value to a predetermined **significance level (α)**, typically 0.05 (5%).

```
If p-value ≤ α:  Reject H₀ (results are statistically significant)
If p-value > α:  Fail to reject H₀ (insufficient evidence to reject)
```

**Note the careful language:** you "fail to reject" H₀, not "accept" H₀. Failing to find evidence against something is not the same as proving it's true.

---

## A Complete Example

A company claims their batteries last an average of 300 hours. A consumer group tests 36 batteries and finds a mean of 292 hours with a standard deviation of 30 hours. Is there evidence the true mean is less than 300 hours? Use α = 0.05.

**Step 1:** State hypotheses.
- H₀: μ = 300 (company's claim)
- H₁: μ < 300 (batteries last less than claimed)
- One-sided test (testing "less than")

**Step 2:** Compute test statistic.
- t = (292 - 300) / (30/√36) = -8 / (30/6) = -8/5 = **-1.6**

**Step 3:** Find p-value.
- With t = -1.6 and df = 35, from t-tables: p-value ≈ **0.059**

**Step 4:** Decision.
- 0.059 > 0.05. **Fail to reject H₀**.

**Step 5:** Conclusion.
- At the 5% significance level, there is insufficient evidence to conclude the batteries last fewer than 300 hours. The result approaches but doesn't cross the significance threshold. (Note: if we used α = 0.10, we would reject H₀.)

---

## Type I and Type II Errors

No decision procedure is perfect. With hypothesis tests, two errors are possible:

| Decision | H₀ true | H₀ false |
| :--- | :--- | :--- |
| Reject H₀ | **Type I error** (false positive) | Correct (power) |
| Fail to reject H₀ | Correct | **Type II error** (false negative) |

**Type I error (α):** Rejecting a true H₀. Concluding there's an effect when there isn't one. The probability of Type I error equals the significance level α — which is why α = 0.05 means you'll get false positives about 5% of the time when H₀ is true.

**Type II error (β):** Failing to reject a false H₀. Missing a real effect.

**Power:** 1 - β = the probability of correctly detecting a real effect. Higher power is better.

**Tradeoffs:**
- Smaller α → fewer false positives but more false negatives
- Larger sample size → higher power (fewer false negatives) without increasing false positives
- The only way to reduce both error types simultaneously is to increase sample size

---

## Statistical Significance vs. Practical Significance

**Statistical significance** means the result is unlikely due to chance. With a large enough sample, even tiny effects become statistically significant.

**Practical significance** means the result is large enough to matter in the real world.

**Example:** A new drug reduces blood pressure by 0.3 mmHg on average. With n = 100,000 patients, this tiny difference might be statistically significant (p < 0.05). But a 0.3 mmHg reduction has essentially no clinical significance — it won't benefit any individual patient.

Always report **effect sizes** (how large is the difference?) alongside p-values (is the difference real?). A small p-value tells you the result is real; the effect size tells you whether it matters.

---

## Common Misconceptions

**"p = 0.03 means there's a 97% chance the hypothesis is true."** Wrong. The p-value is a probability about the data given H₀ is true, not a probability about H₀.

**"p > 0.05 means no effect."** Wrong. It means insufficient evidence to detect an effect. The effect might exist but be too small or the sample too small to detect it.

**"p < 0.05 means the result is important."** Wrong. Statistical significance doesn't imply importance — only that the result is unlikely due to random chance.

---

## Practice

1. A factory claims its bolts have a mean diameter of 10 mm. A quality inspector samples 25 bolts and finds x̄ = 9.8 mm and s = 0.5 mm. State the hypotheses for a two-sided test and compute the test statistic.
2. A p-value of 0.02 is found for a test. At α = 0.05, what is the decision? At α = 0.01?
3. A researcher tests a new teaching method on 50 students and finds statistically significant improvement (p = 0.04). The actual improvement was 0.5 points on a 100-point scale. Discuss statistical vs. practical significance.
4. Describe a situation where a Type I error would be more harmful than a Type II error. Then describe one where Type II error would be more harmful.
5. Why is "failing to reject H₀" different from "accepting H₀"?

**Answers:**
1. H₀: μ = 10. H₁: μ ≠ 10 (two-sided). t = (9.8 - 10)/(0.5/√25) = -0.2/(0.5/5) = -0.2/0.1 = **-2.0** with df = 24. (p-value ≈ 0.057 — would fail to reject at α = 0.05 but is close.)
2. At α = 0.05: 0.02 < 0.05 → **Reject H₀**. At α = 0.01: 0.02 > 0.01 → **Fail to reject H₀**. The same data can lead to different decisions depending on the significance level chosen in advance.
3. The improvement is **statistically significant** — unlikely due to chance (p = 0.04). But 0.5 points on a 100-point scale is **practically insignificant** — no teacher would change their methods for half a point. Large sample sizes can detect trivial differences. Effect size matters as much as p-value.
4. **Type I more harmful:** Testing whether a drug is dangerous. A false positive (falsely concluding it's dangerous) removes a beneficial drug from market. **Type II more harmful:** Screening for a serious, treatable disease. A false negative (falsely concluding no disease) means a sick patient goes untreated. Different contexts require different balances of α and β.
5. Failing to reject H₀ means the evidence was insufficient to disprove it — like a court finding "not guilty," which means "not proven beyond reasonable doubt," not "proven innocent." H₀ might still be false; we just didn't collect enough evidence (or have large enough sample) to detect it. Accepting H₀ would mean concluding it's definitely true, which the test never establishes.
