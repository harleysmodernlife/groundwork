## Charts and Data Visualization

Numbers in a table communicate information. Numbers in a chart communicate meaning — at a glance. A well-chosen chart shows patterns, trends, and comparisons that would take minutes to extract from a table. A poorly-chosen chart obscures or distorts the data.

---

## Creating a Chart

**In Google Sheets:**
1. Select the data you want to chart (including headers)
2. Insert → Chart
3. The Chart Editor opens — use it to change chart type, customize, etc.

**In Excel:**
1. Select the data
2. Insert → Charts section → choose a chart type
3. Use the Chart Design and Format tabs that appear

**From a pivot table:** Select the pivot table → Insert → Chart/PivotChart. The chart updates when you change the pivot table.

---

## Choosing the Right Chart Type

The most important decision. The wrong chart type obscures data; the right one makes it obvious.

### Line Chart
**Use for:** Trends over time.

Values on Y axis, time on X axis. The line shows how something changes — rising, falling, fluctuating. Good for: revenue over months, temperature over days, website visits over weeks.

Don't use for: comparing unrelated categories that have no time relationship.

### Bar / Column Chart
**Use for:** Comparing values across categories.

- **Column chart:** Vertical bars. Good for comparisons.
- **Bar chart:** Horizontal bars. Better when category names are long.

Good for: sales by region, headcount by department, revenue by product.

Don't use for: time series (use line chart instead), unless the trend matters less than the comparison.

### Stacked Bar / Column
**Use for:** Comparing totals while showing composition.

Each bar is divided into segments showing parts of a whole. Good for: revenue by product over time (see both total and mix).

Don't use for: comparing individual segments precisely — the stacked format makes that hard.

### Pie / Donut Chart
**Use for:** Showing proportions of a whole.

Only works with a small number of categories (5 or fewer). Every slice must be part of one total.

Don't use for: more than 5-6 categories (slices become too small), comparing two pie charts to each other (difficult to judge), showing change over time.

Many analysts avoid pie charts entirely — bar charts almost always communicate composition more clearly.

### Scatter Plot
**Use for:** Showing relationship between two numeric variables.

Each point is one data record, plotted by its X and Y values. Shows correlation (or lack thereof). Good for: does marketing spend correlate with revenue? Does price affect sales volume?

Don't use for: categorical data or time series.

### Area Chart
**Use for:** Like a line chart but emphasizes volume. Useful for cumulative data or stacked comparisons.

### Histogram
**Use for:** Distribution of values. Shows how frequently values fall into different ranges.

Good for: understanding the shape of data — is it normally distributed? Skewed? Bimodal?

---

## Chart Anatomy

- **Title:** What this chart shows. Be specific: "Monthly Revenue, Jan–Jun 2024" not "Sales."
- **Axis labels:** What the X and Y axes represent, with units.
- **Legend:** Which color or line represents which series.
- **Data labels:** Optional values directly on bars or points. Don't use on every chart — clutters complex charts.
- **Gridlines:** Horizontal reference lines. Keep them light so they recede into the background.

---

## Common Mistakes

**Truncating the Y axis:** Starting the Y axis at a value other than 0 makes differences look larger than they are. A revenue increase from 990 to 1000 looks enormous on a chart starting at 985.

**Using 3D effects:** 3D charts distort perception. A bar that looks taller might just be positioned closer in 3D space. Never use 3D for serious data.

**Too many series:** A line chart with 12 colored lines becomes unreadable. If you have more than 4-5 series, consider breaking into multiple charts or aggregating some.

**Pie chart with too many slices:** More than 5-6 slices makes the smallest ones impossible to interpret. Group small values into "Other."

**Wrong chart type for the data:** Using a pie chart for data that doesn't add to a meaningful whole. Using a line chart for unrelated categories.

**Missing axis labels:** "What are these numbers?" Every axis needs to say what it shows and in what unit.

---

## Making Charts Clearer

**Remove chartjunk:** Remove gridlines (or make them very light), unnecessary borders, background fills, and decorative elements that add no information.

**Direct labels:** Instead of a legend + colored lines, label each line directly at the end. Eliminates the need to look back and forth between chart and legend.

**Consistent colors:** Use the same color for the same thing across all charts in a report.

**Annotations:** Add a text box to call out something important — "pandemic impact," "new product launch," "policy change."

**Sort categories:** In a bar chart comparing values, sort bars by value (descending) unless there's a reason for the order. "Alphabetical" is rarely the most useful order.

---

## Visualization Outside Spreadsheets

For more sophisticated visualization:
- **Tableau / Power BI:** Business intelligence tools with more chart types and interactivity
- **Datawrapper / Flourish:** Easy-to-use online chart builders
- **Python (matplotlib, seaborn, plotly):** Programmatic charts, good for data analysis
- **D3.js:** Complex interactive web-based visualizations (requires JavaScript knowledge)

Spreadsheet charts are fast and good enough for most purposes. Use specialized tools when you need interactivity, unusual chart types, or charts for publication.
