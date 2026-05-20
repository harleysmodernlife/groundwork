## Sorting and Filtering

Raw data is rarely in a useful order. Sorting arranges your data so you can see what's highest, lowest, or in alphabetical order. Filtering hides rows you don't need so you can focus on what's relevant. These two features turn a spreadsheet from a pile of data into something you can actually work with.

---

## Sorting

Sorting rearranges the rows of your data based on the values in one or more columns.

**Basic sort:**
1. Click any cell in the column you want to sort by
2. Click the Sort A→Z or Sort Z→A button in the toolbar (ascending or descending)

Or: Data menu → Sort Range (Google Sheets) / Sort (Excel).

**Sorting text:** A→Z is alphabetical. Z→A is reverse alphabetical.

**Sorting numbers:** A→Z is smallest to largest. Z→A is largest to smallest.

**Sorting dates:** A→Z is oldest to newest. Z→A is newest to oldest.

**Important:** When sorting, always select your entire data range (or let the spreadsheet detect it automatically). If you sort only one column, you'll misalign that column's data from all the other columns in the same rows.

### Multi-Level Sort

Sort by more than one column — for example, sort by department, then by last name within each department.

Data → Sort Range → Sort by multiple columns.

Add sort levels in order of priority: first sort key, then secondary sort key, then tertiary.

### Sort Ascending vs. Descending

"Ascending" means smallest to largest (A, B, C... or 1, 2, 3... or oldest to newest).
"Descending" means largest to smallest (Z, Y, X... or 10, 9, 8... or newest to oldest).

---

## Filters

Filtering hides rows that don't match your criteria. The data is still there — just hidden.

**Enable filters:**
- Google Sheets: Data → Create a Filter
- Excel: Home → Sort & Filter → Filter (or Data → Filter)

A dropdown arrow appears in each header cell.

**Apply a filter:**
Click the dropdown arrow in a header cell. Options include:
- Select/deselect specific values
- Filter by condition (greater than, less than, contains, etc.)
- Text filter (starts with, ends with, contains)

Only rows matching your criteria are shown. Everything else is hidden.

**Clear a filter:** Click the dropdown and choose "Clear" or select all values. Or turn off the filter entirely from the Data menu.

**Stacking filters:** You can filter by multiple columns simultaneously — the spreadsheet shows only rows that match all active filters.

---

## Filter Views (Google Sheets)

A filter view saves a filtering configuration without affecting what others see if the spreadsheet is shared. Create multiple saved views for different analysis needs.

Data → Filter Views → Create New Filter View.

---

## Advanced Filtering: Filter by Condition

Beyond selecting specific values, you can filter by conditions:

- **Text:** Contains "apple", Starts with "A", Ends with ".com", Is exactly "Yes"
- **Numbers:** Greater than 100, Between 50 and 100, Not equal to 0
- **Dates:** Before today, In the past week, In a specific month

In Excel, use the dropdown → Number Filters / Text Filters / Date Filters.

In Google Sheets, use the dropdown → Filter by Condition.

---

## SORT and FILTER Functions

For non-destructive sorting and filtering that outputs results in a separate area (doesn't rearrange your original data):

**SORT function (Google Sheets / Excel 365):**
```
=SORT(A2:C100, 2, TRUE)
```
- `A2:C100` — the data range
- `2` — sort by the 2nd column
- `TRUE` — ascending (FALSE for descending)

Returns the data sorted, displayed starting in the cell where you put the formula. The original data is unchanged.

**FILTER function (Google Sheets / Excel 365):**
```
=FILTER(A2:C100, B2:B100 = "Apple")
```
Returns only rows where column B equals "Apple".

Multiple conditions:
```
=FILTER(A2:C100, (B2:B100 = "Apple") * (C2:C100 > 100))
```
The `*` acts as AND — both conditions must be true.

```
=FILTER(A2:C100, (B2:B100 = "Apple") + (B2:B100 = "Banana"))
```
The `+` acts as OR — either condition.

---

## Conditional Formatting

Automatically format cells based on their values — highlighting outliers, showing progress bars, color-coding status.

**Apply:** Select a range → Format → Conditional Formatting (Sheets) or Conditional Formatting (Excel, on the Home tab).

Common uses:
- Highlight cells greater than a threshold: cells where sales > 1000 turn green
- Color scale: green-yellow-red gradient from highest to lowest values
- Duplicate values: highlight any value that appears more than once
- Blank cells: highlight where data is missing

Conditional formatting updates automatically as values change — useful for dashboards and monitoring.

---

## Practical Workflow

When you get a new dataset:

1. **Look at it.** What columns are there? What types of data?
2. **Sort** by the most important column to get oriented.
3. **Filter** to check for problems — blank cells, unexpected values, duplicates.
4. **Clean** what needs cleaning (see data cleaning lesson).
5. **Then analyze** — sort by relevant metrics, filter to specific subsets.

Sorting and filtering are exploratory tools — use them constantly while getting familiar with a dataset, not just for final presentations.
