## Pivot Tables

A pivot table summarizes large amounts of data quickly. It takes a raw dataset and lets you group, aggregate, and slice it in any direction — without writing formulas. Once you know how to use pivot tables, you'll wonder how you managed without them.

---

## The Problem Pivot Tables Solve

Imagine a spreadsheet with 10,000 rows of sales data — each row is one transaction with columns for Date, Salesperson, Region, Product, Quantity, and Revenue.

Questions you might want to answer:
- What was total revenue by region?
- Which salesperson had the most sales this quarter?
- What's the average order size by product?
- How did revenue trend month by month?

Without pivot tables, each of these requires writing SUMIF formulas or sorting and manually adding up. A pivot table answers all of them in seconds.

---

## Creating a Pivot Table

**In Google Sheets:**
1. Select your data (or click any cell in it)
2. Insert → Pivot Table
3. Choose where to put it (new sheet recommended)
4. Use the Pivot Table Editor on the right to configure it

**In Excel:**
1. Click any cell in your data
2. Insert → PivotTable
3. Choose where to place it
4. Use the PivotTable Fields panel on the right

---

## The Four Areas

Every pivot table has four areas where you place fields (column names from your data):

**Rows:** Values here become row labels — the "by" in "total revenue by region." Each unique value in this field gets its own row.

**Columns:** Values here become column labels — creates a cross-tabulation. Optional.

**Values:** The numbers to calculate. Define what to do with them: Sum, Count, Average, Min, Max.

**Filters:** Limit the entire pivot table to certain values (like filtering to only Q1).

---

## A Simple Example

Raw data:
```
Date        | Salesperson | Region | Product | Revenue
2024-01-15  | Alice       | West   | Widget  | 850
2024-01-16  | Bob         | East   | Gadget  | 1200
2024-01-18  | Alice       | West   | Gadget  | 950
...
```

**Question: Total revenue by salesperson**

- Rows: Salesperson
- Values: Revenue (Sum)

Result:
```
Salesperson | Sum of Revenue
Alice       | 45,200
Bob         | 38,900
Carol       | 52,100
```

**Question: Revenue by region and product**

- Rows: Region
- Columns: Product
- Values: Revenue (Sum)

Result:
```
Region | Gadget | Widget | Grand Total
East   | 22,000 | 18,000 | 40,000
West   | 19,000 | 24,000 | 43,000
Total  | 41,000 | 42,000 | 83,000
```

---

## Value Calculation Options

For the Values area, you choose how to calculate:
- **Sum** — total of all values
- **Count** — how many rows
- **Average** — mean value
- **Max / Min** — highest or lowest value
- **Count Distinct** — how many unique values (useful for "how many customers")

You can add multiple value fields — for example, both Sum of Revenue and Count of Orders in the same pivot table.

---

## Grouping Dates

When your Rows field is a date, you can group by year, quarter, month, week, or day. This is how you turn a list of daily transactions into a monthly revenue summary.

**In Google Sheets:** Click the date row label in the pivot table → right-click → Create Pivot Date Group → Month.

**In Excel:** Right-click a date value in the pivot table → Group → select grouping (months, quarters, years).

---

## Sorting and Filtering Within a Pivot Table

**Sorting:** Click the dropdown arrow on a row or column label → Sort ascending or descending. You can sort by the label itself or by the calculated values — useful for "show me salespersons ranked by revenue."

**Filtering rows:** The Row label dropdown lets you show only certain values. Filter to specific products, regions, or date ranges.

**The Filter area:** Drag a field to Filters and a dropdown appears above the pivot table — lets you filter the entire table by that field without changing the layout.

---

## Refreshing a Pivot Table

Pivot tables read your data at the time they're created. When you add or change data in the source:

- **Google Sheets:** Refreshes automatically.
- **Excel:** Right-click the pivot table → Refresh. Or Data → Refresh All.

If you add new rows beyond the original range, Excel may not pick them up. Fix by using a table (Insert → Table) as your data source — tables expand automatically.

---

## Calculated Fields

Add a custom calculation based on existing fields — for example, profit margin if you have Revenue and Cost columns.

**In Google Sheets:** In the Pivot Table Editor → under Values → Summarize by → Custom formula.

**In Excel:** PivotTable Analyze tab → Fields, Items & Sets → Calculated Field. Enter a formula using field names.

---

## Common Pivot Table Mistakes

**Data isn't in tabular format:** Pivot tables require one row per record, with column headers in the first row. Merged cells, blank header rows, and totals mixed into the data all cause problems.

**Including totals in source data:** If your raw data has a total row at the bottom, the pivot table will double-count it. Never include totals in source data.

**Not refreshing after editing data:** Pivot tables in Excel don't update automatically. Always refresh after editing the source data.

**Blank column headers:** Every column must have a name. Blank headers cause pivot table creation to fail or misbehave.
