## Data Cleaning

Real-world data is messy. Inconsistent formatting, extra spaces, duplicate records, mistyped values, mixed date formats, merged cells — this is normal. Before you can analyze or use data, you often need to clean it. Data cleaning is unglamorous but essential.

---

## Common Data Problems

**Extra whitespace:** Leading spaces before a value, trailing spaces after, or double spaces between words. These break lookups and comparisons — `"Alice"` and `" Alice"` don't match.

**Inconsistent capitalization:** "apple", "Apple", "APPLE" all represent the same thing but won't match in formulas.

**Inconsistent formatting:** Phone numbers as "(555) 123-4567", "555-123-4567", "5551234567", and "+15551234567". Dates as "1/15/24", "January 15, 2024", "2024-01-15".

**Duplicate rows:** The same record entered multiple times — identical rows or near-duplicates.

**Merged cells:** Two or more cells combined into one. Breaks sorting, filtering, and formulas. Don't use merged cells in data — use them only in presentation headers.

**Mixed data in one column:** City and state in one column ("Chicago, IL"). Name in one column ("Alice Smith"). Hard to sort by state or last name.

**Numbers stored as text:** A column that should be numbers but has text formatting. Numbers stored as text can't be summed or averaged. Common when importing from other systems.

**Blank rows and columns:** Random empty rows in the middle of data. Break pivot tables, filters, and formulas that expect continuous data.

---

## Fixing Whitespace

**TRIM** — removes leading, trailing, and double-spaces:
```
=TRIM(A1)
```

Apply it in a new column, then paste-values the results back over the original, then delete the helper column.

**CLEAN** — removes non-printable characters (common in data exported from other systems):
```
=CLEAN(A1)
```

Combine both:
```
=TRIM(CLEAN(A1))
```

---

## Fixing Capitalization

**UPPER / LOWER / PROPER:**
```
=UPPER(A1)     "ALICE SMITH"
=LOWER(A1)     "alice smith"
=PROPER(A1)    "Alice Smith"
```

**For lookups, use case-insensitive comparison:** VLOOKUP and COUNTIF are case-insensitive by default. But if you need exact matching, normalize case first.

---

## Standardizing Values

Find and replace to normalize inconsistent values:

Ctrl+H (Cmd+H on Mac) → Find what: old value → Replace with: new value

Example: Replace all instances of "N/A", "n/a", "NA", "N.A." with a consistent blank or a standard marker.

**SUBSTITUTE function:**
```
=SUBSTITUTE(A1, "N/A", "")          remove "N/A"
=SUBSTITUTE(A1, "-", "")            remove dashes
=SUBSTITUTE(A1, "(", "")            remove parentheses
```

For phone number normalization, chain multiple SUBSTITUTE calls:
```
=SUBSTITUTE(SUBSTITUTE(SUBSTITUTE(A1, "(", ""), ")", ""), "-", "")
```

---

## Splitting Combined Columns

If you have "Alice Smith" in one column but need first and last name separately:

**Text to Columns (Excel):** Select the column → Data → Text to Columns → Delimited → choose delimiter (space, comma, etc.).

**SPLIT function (Google Sheets):**
```
=SPLIT(A1, " ")     splits on space → "Alice" | "Smith"
```

**LEFT / RIGHT / MID / FIND for specific patterns:**
```
=LEFT(A1, FIND(" ", A1) - 1)            first word (first name)
=MID(A1, FIND(" ", A1) + 1, LEN(A1))   everything after first space (last name)
```

---

## Removing Duplicates

**Built-in tool:**
- Excel: Data → Remove Duplicates. Select which columns to check.
- Google Sheets: Data → Data Cleanup → Remove Duplicates.

**Identify duplicates without removing:** Use COUNTIF to flag duplicates:
```
=COUNTIF($A:$A, A2) > 1     TRUE if this value appears more than once
```

Filter to rows where this is TRUE to review before deleting.

---

## Converting Numbers Stored as Text

Signs you have this problem:
- Numbers are left-aligned (numbers are normally right-aligned)
- SUM of the column returns 0
- A small green triangle in the cell corner (Excel)

**Fixes:**
- Select the column → Data → Text to Columns → Finish (Excel — converts without changing format)
- Multiply by 1: in a helper column, `=A1 * 1`
- Google Sheets: Format → Number → Number (changes format, may fix stored-as-text numbers)

---

## Handling Blank Cells

**Find blanks:** Filter the column → show only blanks. Or use conditional formatting to highlight blanks.

**Fill blanks with a placeholder:**
```
=IF(A1="", "Unknown", A1)
```

**Or fill down (propagate last known value):** Select blank cells → Ctrl+G (Go To Special) → Blanks → type `=A2` (or whichever cell above) → Ctrl+Enter to fill all selected blanks at once (Excel technique).

---

## Validating Data After Cleaning

After cleaning, verify:
- Row counts: did you lose rows you should have kept?
- Distinct values: does a column now have the expected number of unique values?
- Range checks: are all numbers within expected ranges? `=MIN()` and `=MAX()` catch outliers.
- Blank checks: `=COUNTBLANK()` to see if you still have unexpected blanks.

---

## Prevention: Data Entry Validation

For data you're entering (not importing), use validation rules to prevent problems at the source.

**Google Sheets:** Select column → Data → Data Validation. Set rules (number in range, text from a list, valid date format).

**Excel:** Data → Data Validation. Similar options.

Dropdown lists for categorical fields prevent "Apple", "apple", "Apples", "APL" from all entering the same column.
