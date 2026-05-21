## Data Visualization: Charts and Graphs

Numbers in a table are hard to understand. A well-chosen chart makes patterns instantly visible — trends, outliers, comparisons, and distributions become obvious at a glance. Choosing the wrong chart, on the other hand, hides information or misleads. This lesson covers the most important types of statistical charts, when to use each, and how to read and critique them.

---

## Why Visualization Matters

**Anscombe's Quartet** is a famous example: four data sets with nearly identical means, variances, and correlation coefficients — but radically different shapes when plotted. A purely numerical summary of any one of them would be virtually identical to the others. Yet the graphs reveal that one is a perfect line, one is a curve, one has an outlier, and one is near-perfect but for a single point pulling the regression. Without visualization, you'd never know.

The point: always plot your data before summarizing it with numbers.

---

## Histograms

A **histogram** shows the distribution of one quantitative variable by grouping data into intervals (bins) and displaying the frequency or relative frequency of each bin as a bar.

**Key features:**
- Bars are adjacent (touching) — this distinguishes histograms from bar charts
- The x-axis shows the variable's value; the y-axis shows frequency or relative frequency
- Shape reveals the distribution: symmetric, skewed, bimodal, etc.

**Reading a histogram:**
- Tall bars: many data values in that range
- Short bars: few data values
- Bars to the right of center with decreasing height = right-skewed distribution
- Roughly symmetric bars = bell-shaped distribution

**Choosing bin width:** Too many bins creates a jagged, hard-to-read chart; too few hides structure. Generally 5-15 bins works well; experiment and see what reveals the most.

---

## Bar Charts

A **bar chart** (also called bar graph) shows frequencies or values for **categorical** data. Unlike a histogram, bars don't touch — there's no natural ordering or continuity between categories.

**Variations:**
- **Vertical bar chart:** categories on x-axis, counts on y-axis. Best for comparing magnitudes.
- **Horizontal bar chart:** categories on y-axis. Better when category names are long.
- **Grouped bar chart:** compares two or more groups side-by-side for each category.
- **Stacked bar chart:** shows how parts compose a whole for each category.

**When to use:** comparing amounts across categories (sales by product, votes by candidate, injuries by sport).

**Common mistake:** starting the y-axis at a value other than zero. This makes small differences look dramatic. A bar chart that starts at y = 90 makes 91% vs. 93% look like a huge gap.

---

## Pie Charts

A **pie chart** shows parts of a whole as slices of a circle. The area of each slice is proportional to the percentage that category represents.

**When to use:** showing how a total is divided among a small number of categories (5 or fewer) when the "part of whole" framing is important.

**Limitations:**
- Hard to compare slice sizes accurately (humans are bad at comparing areas and angles)
- Useless with many categories (too many slices become a confusing mess)
- Cannot show change over time
- **Most statisticians avoid pie charts** — a bar chart almost always communicates the same information more clearly

---

## Line Charts

A **line chart** shows how a quantitative variable changes over time. Time goes on the x-axis; the measured variable goes on the y-axis. Points are connected with lines to emphasize continuity and trend.

**When to use:** any data measured at regular time intervals (stock prices, temperature over months, sales by quarter, population over decades).

**Multiple lines:** overlay several groups on one chart to compare trends simultaneously (e.g., sales of three products over the same time period).

**Reading line charts:**
- Upward slope: increasing trend
- Downward slope: decreasing trend
- Flat: stable
- Sharp changes: events worth investigating

---

## Scatter Plots

A **scatter plot** shows the relationship between two quantitative variables. Each observation is a point; one variable on x, one on y.

**What to look for:**
- **Direction:** positive (both increase together) or negative (one increases as the other decreases)
- **Strength:** how tightly clustered around a line (strong vs. weak association)
- **Form:** linear or curved
- **Outliers:** points far from the main cluster

**Correlation** (r) measures the strength and direction of a linear relationship:
- r = 1: perfect positive linear relationship
- r = -1: perfect negative linear relationship
- r = 0: no linear relationship
- |r| > 0.7: strong; 0.3-0.7: moderate; <0.3: weak

**Crucial warning:** Correlation does not imply causation. Ice cream sales and drowning deaths both rise in summer — they're correlated but neither causes the other. Both are caused by hot weather.

---

## Box Plots (Box-and-Whisker Plots)

A **box plot** displays the five-number summary (min, Q1, median, Q3, max) graphically:
- Box spans Q1 to Q3 (the middle 50%)
- Line inside the box: median
- Whiskers extend to min and max (or 1.5 × IQR, with outliers shown as dots)

**Strengths:**
- Excellent for comparing distributions across groups side-by-side
- Shows skewness (asymmetric box, or whiskers of unequal length)
- Highlights outliers

**Example interpretation:** A box plot for men's and women's salaries side-by-side immediately reveals whether medians differ, whether one group has more variability, and whether outliers exist.

---

## Stem-and-Leaf Plots

Recap from the data organization lesson: stems are leading digits, leaves are trailing digits. Every individual value is preserved. Works best for small-to-medium data sets (under 50 values or so).

**Back-to-back stem-and-leaf plot:** compare two groups using the same stems, with one group's leaves going left and the other's going right.

---

## Common Misleading Charts

Charts can be honest or manipulative. Learn to spot these tricks:

**Truncated y-axis:** Starts above zero, exaggerating differences. A change from 97% to 99% looks like a doubling.

**3D charts:** Add visual distortion with no information value. Perspective makes back slices look smaller than front slices.

**Inconsistent intervals:** x-axis jumps are unequal, making slopes misleading.

**Cherry-picking the time window:** A stock that rose 20% in the last 3 months but dropped 50% over 5 years is "trending up" in a carefully selected window.

**Missing the denominator:** "100 people got sick after eating at our restaurant!" — out of how many who ate there? Out of 100 is a crisis; out of 100,000 is background rate.

---

## Practice

1. You have data on the heights of 200 students. What chart type would best show the distribution?
2. You have monthly sales data for three product lines over 5 years. What chart type would you use?
3. You want to compare the household income distributions of two neighborhoods. What chart type is ideal?
4. A scatter plot of study hours vs. exam scores shows a moderate positive correlation. A student says "studying causes higher scores." What's the problem with this conclusion?
5. A pie chart is used to show market share for 15 companies. What's wrong with this choice?

**Answers:**
1. **Histogram** — shows the distribution shape, center, and spread of a single continuous variable.
2. **Line chart with multiple lines** — one line per product, showing trends over time and enabling comparison.
3. **Side-by-side box plots** — shows median, spread, and skewness for both groups simultaneously. Histograms overlaid also work.
4. The scatter plot shows a **correlation**, not causation. It's plausible that studying causes better scores, but the data alone can't confirm this. Students who study more may also have other traits (motivation, prior knowledge, quiet home environments) that explain the scores. A controlled experiment would be needed to establish causation.
5. **Too many categories** — 15 slices make the pie chart impossible to read accurately. Humans can't distinguish 15 similar-sized slices. A **horizontal bar chart** sorted by market share would communicate the same information far more clearly.
