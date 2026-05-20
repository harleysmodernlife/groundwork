## Spreadsheet Basics

Spreadsheets are among the most widely used software tools in the world. They're used for budgets, schedules, inventory, analysis, reporting, and dozens of other purposes. Being fluent with a spreadsheet makes you more effective in almost any job.

This applies to Google Sheets, Microsoft Excel, and LibreOffice Calc — the core concepts are identical, with minor differences in exact function names and menus.

---

## The Structure

A spreadsheet is a grid of cells organized into rows and columns.

- **Columns** are identified by letters: A, B, C... Z, AA, AB...
- **Rows** are identified by numbers: 1, 2, 3...
- **Cells** are identified by column and row: A1, B3, C12

The active cell is the one you're currently working in. Click any cell to select it.

A **worksheet** (sheet) is one tab of a spreadsheet. A **workbook** is the entire file, which can contain multiple sheets.

---

## Entering Data

Click a cell and type to enter data. Press:
- **Enter** — confirm and move down
- **Tab** — confirm and move right
- **Escape** — cancel
- **F2** — edit the current cell's contents

**Types of data:**
- **Text:** Letters, words, sentences. Left-aligned by default.
- **Numbers:** Right-aligned by default. Include only digits, decimal points, and minus signs. Don't include currency symbols in number cells.
- **Dates:** Stored as numbers internally (days since a starting point). Format them to display how you want.
- **Booleans:** TRUE or FALSE.
- **Formulas:** Start with `=`. The spreadsheet calculates the result and displays it.

---

## Formulas

Every formula starts with `=`. The spreadsheet evaluates the formula and shows the result.

```
= 2 + 2           → 4
= A1 + B1         → sum of the values in A1 and B1
= A1 * 1.08       → A1 plus 8% (tax calculation)
= B5 - C5         → difference
```

**Cell references** make formulas powerful — instead of hard-coding numbers, you reference cells. When the cell value changes, all formulas depending on it update automatically.

---

## Selecting Ranges

Many operations work on a range of cells.

- `A1:A10` — cells A1 through A10 (same column, 10 rows)
- `A1:D1` — cells A1 through D1 (same row, 4 columns)
- `A1:D10` — a rectangular block from A1 to D10
- `A:A` — entire column A
- `1:1` — entire row 1

Click and drag to select a range. Hold Shift and click to extend a selection. Hold Ctrl (or Cmd on Mac) and click to select non-contiguous cells.

---

## Formatting Cells

Right-click a cell → Format Cells (or use the toolbar).

**Number formats:**
- General — default, shows whatever you typed
- Number — with decimal places
- Currency — dollar sign, two decimals
- Percentage — multiplies by 100 and adds %
- Date — various date display formats
- Text — treats everything as text (useful for ZIP codes, phone numbers — prevents leading zeros from being dropped)

**Visual formatting:** Font, size, bold, italic, color, borders, alignment. These don't affect values, only appearance.

---

## Working with Rows and Columns

**Insert a row:** Right-click a row number → Insert Row Above / Insert Row Below

**Insert a column:** Right-click a column letter → Insert Column Left / Insert Column Right

**Delete a row or column:** Right-click → Delete

**Resize:** Drag the border between row numbers or column letters. Double-click the border to auto-fit to content.

**Freeze rows/columns:** View → Freeze to keep headers visible while scrolling. Freeze row 1 to keep column headers always visible.

---

## Copying and Pasting

**Copy a cell:** Ctrl+C (Cmd+C on Mac). The "marching ants" dashed border shows what's copied.

**Paste:** Ctrl+V. Pastes the cell's value and formatting.

**Paste Special:** Ctrl+Shift+V. Lets you paste only values (not formulas), or only formats, or other subsets. Paste values when you want to paste the result of a formula without the formula itself.

**Fill handle:** The small square at the bottom-right of a selected cell. Drag it down or across to copy the formula or data to adjacent cells. Smart fill — it increments numbers and dates automatically.

---

## Absolute vs. Relative References

When you copy a formula, cell references adjust automatically. This is "relative referencing."

```
Cell B2: =A2 * 1.08
Copy to B3: → =A3 * 1.08  (adjusted automatically)
Copy to B4: → =A4 * 1.08
```

Sometimes you want a reference to stay fixed — pointing to the same cell regardless of where the formula moves. Add `$` to lock it: `$A$2` is always A2, no matter where the formula goes.

```
Cell B2: =A2 * $E$1    (E1 contains the tax rate — fixed)
Copy to B3: → =A3 * $E$1   (A3 adjusted, $E$1 stays fixed)
```

- `$A$2` — both column and row are locked (fully absolute)
- `$A2` — column A is locked, row adjusts
- `A$2` — row 2 is locked, column adjusts

Press F4 while editing a cell reference to cycle through the combinations.

---

## Keyboard Shortcuts

| Action | Windows | Mac |
|---|---|---|
| Save | Ctrl+S | Cmd+S |
| Undo | Ctrl+Z | Cmd+Z |
| Copy | Ctrl+C | Cmd+C |
| Paste | Ctrl+V | Cmd+V |
| Paste values | Ctrl+Shift+V | Cmd+Shift+V |
| Select all | Ctrl+A | Cmd+A |
| Go to cell A1 | Ctrl+Home | Cmd+Home |
| Go to last cell | Ctrl+End | Cmd+End |
| Select to end of column | Ctrl+Shift+Down | Cmd+Shift+Down |
| Insert row | (use right-click) | |
| Delete row | (use right-click) | |

---

## Organizing Your Spreadsheet

**Put headers in row 1.** Give each column a clear, short name.

**One piece of data per cell.** Don't combine multiple values in one cell ("Name + Email"). It makes analysis much harder.

**Keep raw data separate from analysis.** Have one sheet with the raw data; calculate and summarize on another sheet.

**Avoid empty rows in the middle of data.** They break sorting, filtering, and many functions.

**Use tables.** In Excel: Insert → Table. In Sheets: Format as Table. Tables auto-expand when you add data, apply formatting consistently, and make formulas easier to write.
