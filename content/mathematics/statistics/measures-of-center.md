## Mean, Median, Mode, and Range

Summarizing a data set with a single number sounds impossible — how can one number represent dozens or hundreds of values? Yet certain numbers do capture the essence of a data set's "center." Understanding the mean, median, and mode — and knowing which to use when — is the foundation of descriptive statistics. The range and other spread measures give context to the center. Together, these numbers tell you what's typical and how much variation exists.

---

## The Mean (Arithmetic Average)

The **mean** is the sum of all values divided by the number of values:

```
x̄ = (x₁ + x₂ + ... + xₙ) / n = Σxᵢ / n
```

The symbol x̄ (x-bar) represents the sample mean. The population mean is written μ (mu).

**Example:** Test scores: 72, 85, 91, 78, 64, 88.
- Sum = 72 + 85 + 91 + 78 + 64 + 88 = 478
- n = 6
- x̄ = 478/6 ≈ **79.7**

**The mean is the balancing point** of the data — if you put the numbers on a number line, the mean is where it would balance like a seesaw.

**Sensitivity to outliers:** The mean is pulled toward extreme values. One very large or very small number can shift the mean significantly.

**Example:** Salaries at a small company: $30,000; $32,000; $35,000; $38,000; $200,000 (the owner).
- Mean = 335,000/5 = **$67,000**
- This mean is higher than four of the five actual salaries. It's not a good description of what a "typical" employee earns.

---

## The Median

The **median** is the middle value when data is arranged in order. Half the values are above it, half below.

**For an odd number of values:** the median is the exact middle value.
- Data: 3, 7, 9, 12, 15 → Median = **9** (3rd of 5 values)

**For an even number of values:** the median is the average of the two middle values.
- Data: 4, 8, 11, 15 → Median = (8 + 11)/2 = **9.5**

**Step-by-step:**
1. Sort the data from smallest to largest.
2. If n is odd, the median is the value at position (n + 1)/2.
3. If n is even, average the values at positions n/2 and n/2 + 1.

**Example:** Salaries: $30,000; $32,000; $35,000; $38,000; $200,000.
- Already sorted. n = 5, middle is 3rd value.
- Median = **$35,000** — a much more representative "typical" salary.

**The median is resistant to outliers.** Adding a millionaire's salary to the list changes the mean dramatically but moves the median very little.

---

## When to Use Mean vs. Median

Use the **mean** when:
- Data is roughly symmetric (not skewed)
- There are no outliers
- You need to use the data in further calculations

Use the **median** when:
- Data is skewed (income, housing prices, test scores with some very low outliers)
- There are extreme outliers
- You want a "typical" value that won't be distorted

**Rule of thumb:** If mean and median are close, either works. If they're far apart, there are outliers or skew — use the median.

**Skewed distributions:**
- **Right-skewed (positive):** Tail pulls to the right. Mean > median. (Income distributions — a few very high earners pull the mean up.)
- **Left-skewed (negative):** Tail pulls to the left. Mean < median.

---

## The Mode

The **mode** is the value that appears most frequently in the data set.

- A data set can have **one mode** (unimodal), **two modes** (bimodal), **more than two** (multimodal), or **no mode** (all values unique).

**Example:** 3, 5, 5, 5, 7, 8, 8, 9 → Mode = **5** (appears 3 times)

**Example:** 2, 4, 4, 6, 6, 8 → Modes = **4 and 6** (both appear twice — bimodal)

**Example:** 1, 2, 3, 4, 5 → **No mode** (all appear once)

**When the mode matters:**
- Categorical data — you can't compute a mean or median for "favorite color," but you can find the most common color.
- Business applications: the most common shoe size, the most frequently ordered item.
- Bimodal data often suggests two distinct subgroups in your sample.

---

## The Range

The **range** is the simplest measure of spread:

```
Range = Maximum - Minimum
```

**Example:** Data: 12, 19, 24, 31, 45.
- Range = 45 - 12 = **33**

The range tells you the total width of the data but is extremely sensitive to outliers. One unusual value dramatically changes the range.

---

## Weighted Mean

When different values contribute differently to the overall mean (different weights), use the weighted mean:

```
x̄_w = Σ(wᵢ · xᵢ) / Σwᵢ
```

**Example:** A course is graded with these weights: homework 20%, midterm 35%, final 45%. A student scored: homework 88, midterm 74, final 81.

Weighted mean = (0.20 × 88) + (0.35 × 74) + (0.45 × 81)
= 17.6 + 25.9 + 36.45
= **79.95** ≈ 80

A simple average of 88, 74, 81 would give 81 — overstating the grade because the high homework score would be weighted equally.

---

## Mean from a Frequency Table

When data is summarized in a frequency table, use:

```
x̄ = Σ(xᵢ · fᵢ) / n
```

where fᵢ is the frequency of value xᵢ and n = Σfᵢ.

**Example:**

| Value | Frequency |
| :--- | :--- |
| 2 | 3 |
| 4 | 5 |
| 6 | 2 |

x̄ = (2 × 3 + 4 × 5 + 6 × 2) / (3 + 5 + 2) = (6 + 20 + 12) / 10 = 38/10 = **3.8**

---

## Percentiles and Quartiles

The median is the 50th percentile — 50% of data falls below it.

**Quartiles** divide ordered data into four equal parts:
- Q1 (1st quartile): 25th percentile — 25% of data below
- Q2 (2nd quartile): 50th percentile — the median
- Q3 (3rd quartile): 75th percentile — 75% of data below

**Interquartile Range (IQR)** = Q3 - Q1

The IQR is the range of the middle 50% of data. It's resistant to outliers and used to identify them:
- Outlier rule: a value is a potential outlier if it falls below Q1 - 1.5(IQR) or above Q3 + 1.5(IQR).

**Example:** Data: 4, 7, 8, 9, 10, 12, 15, 17, 21, 25.
- Median (Q2): average of 5th and 6th values = (10 + 12)/2 = 11
- Lower half: 4, 7, 8, 9, 10 → Q1 = 8
- Upper half: 12, 15, 17, 21, 25 → Q3 = 17
- IQR = 17 - 8 = **9**
- Outlier boundaries: below 8 - 13.5 = -5.5 or above 17 + 13.5 = 30.5
- No outliers in this data set.

---

## Practice

1. Find the mean, median, and mode: 8, 6, 3, 8, 9, 8, 6, 4.
2. Which measure of center would you use for: (a) average monthly rainfall, (b) median household income, (c) most popular car color?
3. A class of 30 students has a mean score of 74. If 10 students are removed with a mean of 65, what is the new mean of the remaining 20 students?
4. Find Q1, Q2, Q3, and IQR for: 3, 6, 7, 8, 10, 12, 14, 15, 18, 20.
5. A student's final grade is weighted: quizzes 10%, homework 15%, projects 25%, exams 50%. Scores: 90, 85, 78, 72. Find the weighted mean.

**Answers:**
1. Sort: 3, 4, 6, 6, 8, 8, 8, 9. Mean = 52/8 = **6.5**. Median = (6+8)/2 = **7**. Mode = **8**.
2. (a) **Mean** — rainfall is roughly symmetric with no extreme outliers. (b) **Median** — income is right-skewed; a few very high earners distort the mean. (c) **Mode** — categorical data (color has no meaningful numeric average or median).
3. Total score of 30 students: 30 × 74 = 2,220. Total of 10 removed: 10 × 65 = 650. Remaining total: 2,220 - 650 = 1,570. New mean: 1,570/20 = **78.5**
4. Q2 = (10+12)/2 = **11**. Lower half: 3,6,7,8,10 → Q1 = **7**. Upper half: 12,14,15,18,20 → Q3 = **15**. IQR = 15 - 7 = **8**.
5. (0.10×90) + (0.15×85) + (0.25×78) + (0.50×72) = 9 + 12.75 + 19.5 + 36 = **77.25**
