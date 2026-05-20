## Layout with CSS

Getting elements positioned where you want them is one of the biggest challenges in web design. CSS provides several layout systems. Two of them — Flexbox and Grid — cover most practical needs.

---

## How Elements Flow by Default

Without any layout CSS, elements follow "normal flow":

- **Block elements** (`div`, `p`, `h1`, `section`, etc.) stack vertically — each one starts on a new line and takes the full width.
- **Inline elements** (`span`, `a`, `strong`, etc.) flow horizontally with text — they sit next to each other on the same line.

Normal flow works for simple documents. For complex layouts (sidebars, navigation bars, cards in a row), you need Flexbox or Grid.

---

## Flexbox

Flexbox is for one-dimensional layout — arranging items in a row or a column.

To use Flexbox, apply `display: flex` to a **container element**. Its direct children become **flex items**.

```html
<div class="container">
    <div class="item">One</div>
    <div class="item">Two</div>
    <div class="item">Three</div>
</div>
```

```css
.container {
    display: flex;
}
```

By default, the items line up in a row.

### Flex Direction

```css
flex-direction: row;          /* default — left to right */
flex-direction: row-reverse;  /* right to left */
flex-direction: column;       /* top to bottom */
flex-direction: column-reverse;
```

### Alignment

**`justify-content`** — alignment along the main axis (horizontal for row, vertical for column):
```css
justify-content: flex-start;    /* default — items at start */
justify-content: flex-end;      /* items at end */
justify-content: center;        /* items centered */
justify-content: space-between; /* equal space between items */
justify-content: space-around;  /* equal space around items */
justify-content: space-evenly;  /* truly equal spacing */
```

**`align-items`** — alignment along the cross axis (vertical for row):
```css
align-items: stretch;    /* default — items stretch to fill container height */
align-items: flex-start; /* items at top */
align-items: flex-end;   /* items at bottom */
align-items: center;     /* items vertically centered */
```

**Centering something horizontally and vertically:**
```css
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
}
```

### Flex Item Properties

Control how individual items grow and shrink:

```css
.item {
    flex: 1;    /* items grow equally to fill available space */
}

.item-big {
    flex: 2;    /* this item gets twice as much space */
}
```

```css
.item {
    flex-grow: 1;    /* can grow */
    flex-shrink: 0;  /* won't shrink below its base size */
    flex-basis: 200px; /* starting size */
}
```

### Wrapping

```css
.container {
    display: flex;
    flex-wrap: wrap; /* items wrap to next line when they don't fit */
    gap: 16px;       /* space between items */
}
```

`gap` is cleaner than using margins — it only adds space between items, not around the container edges.

---

## CSS Grid

Grid is for two-dimensional layout — rows and columns simultaneously. Ideal for the overall page structure and for complex components.

```html
<div class="grid">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
</div>
```

```css
.grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;  /* three equal columns */
    gap: 16px;
}
```

`1fr` is a fractional unit — one fraction of the available space. Three `1fr` columns each get one-third.

### Defining Columns and Rows

```css
grid-template-columns: 200px 1fr 1fr;  /* fixed left column, two equal right columns */
grid-template-columns: repeat(4, 1fr); /* four equal columns */
grid-template-rows: auto 1fr auto;     /* header, main (fills remaining), footer */
```

### Placing Items Precisely

Items can span multiple columns or rows:

```css
.header {
    grid-column: 1 / -1;  /* spans from first to last column */
}

.sidebar {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
}

.main {
    grid-column: 2 / -1;
    grid-row: 2 / 3;
}
```

### Named Grid Areas

More readable way to define layout:

```css
.container {
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar main"
        "footer footer";
    grid-template-columns: 250px 1fr;
    grid-template-rows: auto 1fr auto;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

---

## When to Use Flexbox vs. Grid

**Use Flexbox when:**
- Arranging items in a single row or column
- Navigation bars
- Centering something
- Aligning elements that have variable widths
- Card lists where you want items to wrap

**Use Grid when:**
- Two-dimensional layout (rows and columns)
- Overall page structure (header/sidebar/main/footer)
- Precise placement of items in a structured layout

They're not mutually exclusive. Use Grid for the page layout, Flexbox for components within it.

---

## Positioning

Sometimes you need to pull elements out of normal flow.

```css
position: static;    /* default — in normal flow */
position: relative;  /* stays in flow, but can be offset */
position: absolute;  /* removed from flow, positioned relative to nearest positioned ancestor */
position: fixed;     /* stays fixed on screen when scrolling */
position: sticky;    /* stays in flow until you scroll past it, then sticks */
```

**Fixed navigation bar:**
```css
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;    /* stays on top of other elements */
}
```

**Absolute positioning inside a relative container:**
```css
.card {
    position: relative;
}

.badge {
    position: absolute;
    top: 8px;
    right: 8px;
}
```

The badge positions itself relative to `.card`, not the whole page.

---

## Overflow

When content is larger than its container:

```css
overflow: visible;  /* default — content spills outside */
overflow: hidden;   /* clips content at container boundary */
overflow: scroll;   /* adds scrollbars */
overflow: auto;     /* adds scrollbars only when needed */

/* For one direction only: */
overflow-x: auto;
overflow-y: scroll;
```
