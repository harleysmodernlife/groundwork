## Distributions, Variance, and Standard Deviation

The center of a data set tells you where the typical value falls. But two data sets can have the same mean and wildly different characters. Knowing the spread — how far values deviate from the center — is just as important as knowing the center. This lesson covers variance, standard deviation, and the concept of a distribution: the overall shape and pattern of how data is arranged.

---

## Why Spread Matters

Consider two job offers:
- Job A: base salary $60,000 with a $2,000 bonus in good years, $0 in bad years.
- Job B: base salary $50,000 with a $12,000 bonus in good years, $0 in bad years.

If good and bad years are equally likely, both jobs have the same mean annual pay: $61,000 for A, $56,000 for B. But their spread is very different — Job B has much higher variability. Whether that's better or worse depends on your risk tolerance.

Spread matters in quality control (consistent products have low spread), medicine (how variable is a patient's response?), finance (risk = spread of returns), and virtually every applied use of statistics.

---

## Variance

**Variance** measures the average squared distance of each value from the mean.

**Population variance (σ²):**
```
σ² = Σ(xᵢ - μ)² / N
```

**Sample variance (s²):**
```
s² = Σ(xᵢ - x̄)² / (n - 1)
```

The denominator is n - 1 for samples (not n), because using n underestimates the population variance. This is called Bessel's correction.

**Computing variance step-by-step:**
1. Find the mean x̄.
2. Subtract the mean from each value (the "deviation").
3. Square each deviation.
4. Sum the squared deviations.
5. Divide by n - 1 (for sample variance).

**Example:** Data: 4, 7, 13, 16. n = 4.
- Mean: (4 + 7 + 13 + 16)/4 = 40/4 = 10
- Deviations: (4-10) = -6; (7-10) = -3; (13-10) = 3; (16-10) = 6
- Squared deviations: 36, 9, 9, 36
- Sum = 90
- Sample variance: 90/(4-1) = 90/3 = **30**

Note: the squared deviations are always positive (or zero). A dataset with all values equal to the mean has variance 0.

---

## Standard Deviation

**Standard deviation** is the square root of the variance. It brings the units back from "squared units" to the original units.

```
s = √(s²) = √[Σ(xᵢ - x̄)² / (n - 1)]
```

Population standard deviation: σ (sigma).
Sample standard deviation: s.

From the example above: s = √30 ≈ **5.48**

**Interpretation:** A standard deviation of 5.48 means the data values are typically about 5.48 units away from the mean.

The larger the standard deviation, the more spread out the data. The smaller, the more tightly clustered around the mean.

---

## The Empirical Rule (68-95-99.7 Rule)

For data that follows a **normal distribution** (bell-shaped curve):

```
About 68% of data falls within 1 standard deviation of the mean.
About 95% of data falls within 2 standard deviations of the mean.
About 99.7% of data falls within 3 standard deviations of the mean.
```

**Example:** Heights of adult men in a country are normally distributed with mean 70 inches and standard deviation 3 inches.
- 68% of men are between 67 and 73 inches tall.
- 95% are between 64 and 76 inches.
- 99.7% are between 61 and 79 inches.
- A man who is 76 inches tall (6'4") is at about the 97.5th percentile — taller than 97.5% of men.

This rule is approximate and only applies to bell-shaped data, but it gives quick, powerful intuition about where data falls.

---

## The Normal Distribution

The **normal distribution** is the most important distribution in statistics. It's symmetric, bell-shaped, and completely described by two parameters: the mean μ and standard deviation σ.

Why it's everywhere:
- The Central Limit Theorem (covered in inference lessons) says that sample means are approximately normally distributed regardless of the original data's distribution — as long as the sample size is large enough.
- Many natural measurements (heights, weights, measurement errors, test scores) are approximately normal.

**Standard Normal Distribution:** mean = 0, standard deviation = 1. Written Z ~ N(0,1).

**Z-score:** how many standard deviations a value is from the mean.
```
z = (x - μ) / σ
```

Z-scores let you compare values from different distributions on a common scale.

**Example:** A student scores 82 on a test with mean 74 and standard deviation 8.
- z = (82 - 74)/8 = 8/8 = **1.0**
- The student is 1 standard deviation above the mean.

**Example:** Another student scores 95 on a different test with mean 85 and standard deviation 5.
- z = (95 - 85)/5 = **2.0**
- The second student performed relatively better — 2 standard deviations above their mean vs. 1 for the first student.

---

## Types of Distributions

Not all data is normally distributed. Recognizing distribution shapes is essential.

**Symmetric:** left and right sides are mirror images. Mean ≈ median. Normal distribution is symmetric.

**Right-skewed (positive skew):** long tail on the right, data piled on the left. Mean > median. Examples: income, house prices, waiting times, population of cities.

**Left-skewed (negative skew):** long tail on the left. Mean < median. Examples: exam scores for an easy test (most people score high, a few score very low).

**Bimodal:** two peaks. Suggests two distinct subgroups. Example: heights of a mixed male-female sample.

**Uniform:** all values equally likely. Example: outcomes of rolling a fair die.

---

## The Five-Number Summary and Box Plots

The **five-number summary** describes a distribution:
- Minimum
- Q1 (25th percentile)
- Median (50th percentile)
- Q3 (75th percentile)
- Maximum

A **box plot** (box-and-whisker plot) displays the five-number summary visually:
- A box spans from Q1 to Q3 (the IQR)
- A line inside the box marks the median
- "Whiskers" extend to the min and max (or to 1.5 × IQR, with outliers plotted separately)

Box plots are excellent for comparing distributions across groups and spotting skewness.

---

## Comparing Spread: CV and z-scores

**Coefficient of Variation (CV):** expresses standard deviation as a percentage of the mean.
```
CV = (s / x̄) × 100%
```

Useful for comparing spread across measurements with different units or scales.

**Example:** Investment A: mean return 10%, s = 5%. CV = 50%.
Investment B: mean return 25%, s = 8%. CV = 32%.
Investment B has higher standard deviation, but lower relative variability — it's more consistent relative to its average return.

---

## Practice

1. Calculate the sample variance and standard deviation for: 2, 4, 4, 4, 5, 5, 7, 9.
2. A data set has mean 50 and standard deviation 10. Using the empirical rule, what percent of data falls between 40 and 70?
3. Heights of a plant species are normally distributed with mean 24 cm and standard deviation 3 cm. A plant is 30 cm tall. Find its z-score and interpret it.
4. Which distribution type (skewed right, skewed left, normal, bimodal) would you expect for: (a) ages of attendees at a retirement community event, (b) a test scores where almost everyone passes easily, (c) daily high temperatures in a mild climate over a full year.
5. Data set: 5, 8, 10, 12, 15, 18, 20. Give the five-number summary.

**Answers:**
1. Mean = 40/8 = 5. Deviations: -3,-1,-1,-1,0,0,2,4. Squared: 9,1,1,1,0,0,4,16. Sum = 32. s² = 32/7 ≈ **4.57**. s = √4.57 ≈ **2.14**
2. Between 40 and 70: 40 = 50 - 10 (1 SD below), 70 = 50 + 20 (2 SD above). That's the range from -1SD to +2SD. By the empirical rule: 0 to +2SD covers 47.5% (half of 95%), and -1SD to 0 covers 34% (half of 68%). Total ≈ **81.5%**.
3. z = (30 - 24)/3 = **2.0**. The plant is 2 standard deviations above the mean. By the empirical rule, about 97.5% of plants are shorter than this one — it is quite tall for its species.
4. (a) **Left-skewed** — mostly older people at a retirement community, with a few younger visitors; tail extends down toward younger ages. (b) **Left-skewed** — scores pile up near the top, few low scores. (c) **Bimodal** — temperatures cluster around summer highs and winter lows, creating two peaks.
5. Min = 5, Q1 = 8, Median = 12, Q3 = 18, Max = 20. **Five-number summary: {5, 8, 12, 18, 20}**
