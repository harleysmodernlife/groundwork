## Collecting and Organizing Data

Statistics begins before any calculation — it begins with data collection. Where the data comes from, how it's gathered, and how it's organized determines the validity of everything that follows. A perfectly executed calculation on badly collected data is worthless. This lesson covers the types of data, how to collect it properly, and the first steps in organizing raw numbers into something you can analyze.

---

## What Is Data?

**Data** is information collected for analysis. In statistics, data usually consists of measurements or observations about a group of individuals.

**Population:** the entire group you want to study (all adults in a city, all products made in a factory).

**Sample:** a subset of the population actually observed. Since populations are often too large to study completely, samples are the workhorse of statistics.

**Parameter:** a number describing a population (often unknown).

**Statistic:** a number describing a sample (calculated from data).

The goal of statistics: use statistics from samples to make inferences about parameters of populations.

---

## Types of Data

**Quantitative data** (numerical): measurements that have a meaningful numeric value.
- **Discrete:** countable whole numbers. Number of customers per day, number of defective parts.
- **Continuous:** can take any value in a range. Height, temperature, time, weight.

**Categorical data** (qualitative): values that are labels or categories, not numbers.
- Examples: color, yes/no responses, political party, brand preference.
- Even if coded with numbers (1 = male, 2 = female), the numbers are labels — arithmetic doesn't apply.

**Why it matters:** The type of data determines which statistical tools are appropriate. Calculating the "average color" makes no sense. Finding the median of yes/no data makes no sense. Always identify data type first.

---

## Levels of Measurement

Four levels, from weakest to strongest:

**Nominal:** categories only, no order. (Colors, gender, country)

**Ordinal:** categories with a meaningful order, but differences aren't consistent. (Letter grades, survey ratings like "poor/fair/good/excellent" — the gap between "poor" and "fair" isn't the same as between "good" and "excellent")

**Interval:** ordered, consistent differences, but no true zero. (Temperature in °F: 0° doesn't mean "no temperature"; 80° is not twice as hot as 40°)

**Ratio:** ordered, consistent differences, and a true zero. (Weight, height, income, age — 80 pounds is genuinely twice as heavy as 40 pounds)

The level of measurement determines what arithmetic makes sense.

---

## Sampling Methods

How you select a sample is critical. A **biased sample** will produce misleading results no matter how carefully you analyze it afterward.

**Simple Random Sample (SRS):** Every member of the population has an equal chance of being selected. Done by randomly numbering the population and using a random number generator. The gold standard.

**Stratified Random Sample:** Divide the population into non-overlapping subgroups (strata) by some characteristic (age group, region), then take a random sample from each stratum. Ensures all subgroups are represented.

**Cluster Sample:** Divide the population into clusters (often geographic), randomly select some clusters, then survey everyone in the selected clusters. Cost-effective for geographically spread populations.

**Systematic Sample:** Choose every kth member from a list after a random start. Example: survey every 10th customer who enters a store.

**Convenience Sample:** Survey whoever is easy to reach. Fast and cheap, but almost always biased — the people easiest to reach are not random.

**Voluntary Response Sample:** People choose to participate (call-in polls, online surveys). Strongly biased toward people with intense opinions. Almost never produces valid statistical inference.

---

## Types of Studies

**Observational study:** Observe and measure without interfering. Can identify associations but cannot establish causation.

**Experiment:** Randomly assign subjects to treatments. Controls for other variables and can establish causation.

**Key terms in experiments:**
- **Treatment group:** receives the intervention being tested.
- **Control group:** receives no treatment (or a placebo).
- **Blind:** subjects don't know which group they're in.
- **Double-blind:** neither subjects nor researchers know group assignments (eliminates researcher bias too).
- **Placebo effect:** the tendency of people to respond to any treatment, even an inert one, because they believe it will help. Double-blind design controls for this.

**Confounding variable:** a variable associated with both the treatment and the outcome, making it hard to establish a causal link. Example: a study that finds coffee drinkers have lower rates of a disease might be confounded by the fact that coffee drinkers tend to be higher income and have better healthcare access.

---

## Organizing Data: Frequency Tables

A **frequency table** lists all observed values (or ranges of values) and how often each appears.

**Example:** Test scores for 20 students:
72, 85, 91, 78, 85, 62, 91, 85, 74, 78, 85, 91, 72, 78, 85, 68, 91, 85, 78, 72

| Score | Frequency | Relative Frequency |
| :--- | :--- | :--- |
| 62 | 1 | 5% |
| 68 | 1 | 5% |
| 72 | 3 | 15% |
| 74 | 1 | 5% |
| 78 | 4 | 20% |
| 85 | 6 | 30% |
| 91 | 4 | 20% |

**Relative frequency** = frequency / total. Expressed as a decimal or percent.

**Cumulative frequency:** running total of frequencies. Useful for finding percentiles.

---

## Grouped Frequency Tables

For continuous data with many different values, group into class intervals:

**Example:** 30 exam scores ranging from 40 to 98:

| Class | Frequency |
| :--- | :--- |
| 40-49 | 2 |
| 50-59 | 4 |
| 60-69 | 8 |
| 70-79 | 10 |
| 80-89 | 4 |
| 90-99 | 2 |

- Classes should be equal-width and non-overlapping.
- Typically use 5-15 classes.
- The class midpoint represents the class in calculations.

---

## Stem-and-Leaf Plots

A stem-and-leaf plot preserves individual data values while showing the distribution shape.

**Example:** Data: 23, 25, 27, 32, 34, 38, 41, 41, 45, 47

```
Stem | Leaves
  2  | 3 5 7
  3  | 2 4 8
  4  | 1 1 5 7
```

Stems are the tens digits; leaves are the ones digits. Each row is a class.

Advantages: shows the actual data values and the shape of the distribution at the same time.

---

## Practice

1. A pollster calls 500 people whose phone numbers are randomly selected from a city directory. What type of sampling is this?
2. A teacher wants to survey students about school lunch quality. She surveys the first 30 students who arrive in the morning. What is the bias risk?
3. Classify each variable as quantitative or categorical, and if quantitative, as discrete or continuous: (a) number of siblings, (b) favorite genre of music, (c) blood pressure, (d) zip code.
4. A study finds people who carry lighters are more likely to get lung cancer. Why can't we conclude that carrying lighters causes lung cancer?
5. Create a frequency table for this data set: 3, 5, 3, 7, 5, 5, 3, 9, 7, 5.

**Answers:**
1. **Simple random sample** — random selection from a complete list.
2. **Convenience sample bias** — early arrivers may not represent all students (early arrivers may be more motivated, hungry, or have different commute patterns). Results can't be generalized.
3. (a) Discrete quantitative; (b) Categorical; (c) Continuous quantitative; (d) **Categorical** — zip codes are labels, not measurements; arithmetic on them (averaging zip codes) is meaningless.
4. **Confounding variable** — people who carry lighters are much more likely to be smokers. Smoking causes lung cancer. The lighters are associated with smoking, not causally linked to cancer. This is a classic confounding situation.
5. | Value | Frequency | Relative Frequency | 3 → 3, 25% | 5 → 4, 40% | 7 → 2, 20% | 9 → 1, 10% | Total: 10, 100%
