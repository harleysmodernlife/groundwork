## Common Spreadsheet Functions

Functions are pre-built formulas that perform specific calculations. They're what turn a spreadsheet from a simple calculator into a powerful analysis tool. You don't need to memorize dozens of functions — these twenty or so handle most real-world situations.

All functions follow the same structure: `=FUNCTION_NAME(arguments)`. Multiple arguments are separated by commas.

---

## Math and Statistics

**SUM** — add up a range of numbers:
```
=SUM(A1:A10)          sum of A1 through A10
=SUM(A1, B1, C1)      sum of three specific cells
=SUM(A1:A5, B1:B5)    sum of two ranges
```

**AVERAGE** — arithmetic mean:
```
=AVERAGE(B2:B20)
```

**COUNT** — count cells containing numbers:
```
=COUNT(A1:A100)
```

**COUNTA** — count cells that are not empty (works for text too):
```
=COUNTA(A1:A100)
```

**COUNTBLANK** — count empty cells:
```
=COUNTBLANK(A1:A100)
```

**MIN / MAX** — smallest or largest value:
```
=MIN(C1:C50)
=MAX(C1:C50)
```

**ROUND** — round to a specified number of decimal places:
```
=ROUND(A1, 2)     round to 2 decimal places
=ROUND(A1, 0)     round to nearest whole number
=ROUND(A1, -2)    round to nearest hundred
```

**ABS** — absolute value (removes the minus sign):
```
=ABS(A1)
```

---

## Conditional Functions

**COUNTIF** — count cells that meet a condition:
```
=COUNTIF(A1:A100, "Apple")        count cells equal to "Apple"
=COUNTIF(B1:B100, ">500")         count cells greater than 500
=COUNTIF(C1:C100, "<>"&"")        count non-empty cells
=COUNTIF(D1:D100, "Yes")          count cells equal to "Yes"
```

**COUNTIFS** — count cells that meet multiple conditions:
```
=COUNTIFS(A1:A100, "Apple", B1:B100, ">10")
```
Counts rows where column A is "Apple" AND column B is greater than 10.

**SUMIF** — sum cells that meet a condition:
```
=SUMIF(A1:A100, "Apple", B1:B100)
```
Where column A equals "Apple", sum the corresponding values in column B.

**SUMIFS** — sum cells meeting multiple conditions:
```
=SUMIFS(C1:C100, A1:A100, "Apple", B1:B100, ">10")
```

**AVERAGEIF / AVERAGEIFS** — same pattern as SUMIF/SUMIFS but averages.

---

## Lookup Functions

**VLOOKUP** — look up a value in the first column of a table and return a value from a specified column:
```
=VLOOKUP(lookup_value, table_range, column_index, FALSE)
```

Example: Given a product code in A2, find its price in a reference table (columns E:G where E is the code, G is the price):
```
=VLOOKUP(A2, $E:$G, 3, FALSE)
```
- `A2` — what to look for
- `$E:$G` — the table to search (column E through G, locked with $)
- `3` — return the value from the 3rd column of the table (G)
- `FALSE` — exact match required

**XLOOKUP** (newer — Google Sheets and Excel 365):
```
=XLOOKUP(A2, $E:$E, $G:$G)
```
More intuitive: specify the lookup column and the return column separately. Handles errors more gracefully, can look in any direction.

**INDEX / MATCH** — more powerful combination (works everywhere):
```
=INDEX($G:$G, MATCH(A2, $E:$E, 0))
```
- `MATCH(A2, $E:$E, 0)` — find the row number where E equals A2
- `INDEX($G:$G, ...)` — return the value from G at that row number

---

## Text Functions

**LEN** — length of a string:
```
=LEN(A1)    → 5 for "Alice"
```

**LEFT / RIGHT / MID** — extract part of a string:
```
=LEFT(A1, 3)          first 3 characters
=RIGHT(A1, 4)         last 4 characters
=MID(A1, 3, 5)        5 characters starting at position 3
```

**UPPER / LOWER / PROPER**:
```
=UPPER(A1)     "alice" → "ALICE"
=LOWER(A1)     "ALICE" → "alice"
=PROPER(A1)    "alice smith" → "Alice Smith"
```

**TRIM** — remove extra spaces:
```
=TRIM(A1)
```

**CONCATENATE / CONCAT / & operator**:
```
=CONCATENATE(A1, " ", B1)
=A1 & " " & B1        (simpler)
="Hello, " & A1 & "!"
```

**TEXT** — format a number as text:
```
=TEXT(A1, "$#,##0.00")    format as currency string
=TEXT(A1, "MM/DD/YYYY")   format a date
```

**FIND / SEARCH** — find position of a substring:
```
=FIND("@", A1)      position of "@" in A1 (case-sensitive)
=SEARCH("apple", A1) (case-insensitive)
```

---

## Date Functions

**TODAY()** / **NOW()** — current date / current date and time:
```
=TODAY()
=NOW()
```

**YEAR / MONTH / DAY** — extract parts of a date:
```
=YEAR(A1)
=MONTH(A1)
=DAY(A1)
```

**DATEDIF** — calculate the difference between two dates:
```
=DATEDIF(A1, B1, "Y")    years between A1 and B1
=DATEDIF(A1, B1, "M")    months
=DATEDIF(A1, B1, "D")    days
```

**EDATE** — add/subtract months from a date:
```
=EDATE(A1, 3)     3 months after the date in A1
=EDATE(A1, -1)    1 month before
```

---

## Logical Functions

**IF**:
```
=IF(A1 > 100, "Over budget", "On track")
=IF(B1 = "", "Missing", B1)    display "Missing" if B1 is empty
```

**AND / OR** — combine conditions:
```
=AND(A1 > 0, A1 < 100)    true if both are true
=OR(A1 = "Yes", A1 = "True")
```

**Nested IF** (for multiple conditions):
```
=IF(A1 >= 90, "A", IF(A1 >= 80, "B", IF(A1 >= 70, "C", "D")))
```

**IFS** (cleaner alternative in newer versions):
```
=IFS(A1 >= 90, "A", A1 >= 80, "B", A1 >= 70, "C", TRUE, "D")
```

**IFERROR** — return something specific if a formula produces an error:
```
=IFERROR(VLOOKUP(A1, table, 2, FALSE), "Not found")
```
Instead of seeing #N/A when a lookup fails, you see "Not found".
