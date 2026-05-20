## How CSS Works

CSS (Cascading Style Sheets) controls how HTML looks. Without CSS, every page would be plain black text on a white background. CSS is what makes pages visually distinct — layout, colors, fonts, spacing, everything visual.

---

## The Basic Syntax

A CSS rule has two parts: a **selector** (what to style) and a **declaration block** (what styles to apply).

```css
p {
    color: blue;
    font-size: 16px;
    margin-bottom: 12px;
}
```

- `p` — the selector: targets all `<p>` elements
- The curly braces `{}` contain the declarations
- Each declaration is a property-value pair, ending with a semicolon
- `color`, `font-size`, `margin-bottom` are CSS properties
- `blue`, `16px`, `12px` are the values

---

## Selectors

Selectors target which HTML elements to style.

**Element selector — targets by tag name:**
```css
h1 { color: red; }
p { font-size: 16px; }
```

**Class selector — targets elements with a specific class:**
```css
.highlight { background-color: yellow; }
.button { padding: 8px 16px; }
```

```html
<p class="highlight">This will have a yellow background.</p>
<a class="button" href="...">Click here</a>
```

**ID selector — targets one specific element:**
```css
#header { background-color: navy; }
```

```html
<header id="header">...</header>
```

IDs must be unique per page. Use classes for repeated patterns; IDs for unique elements.

**Attribute selector:**
```css
input[type="email"] { border-color: blue; }
a[target="_blank"] { text-decoration: underline; }
```

**Pseudo-classes — based on state:**
```css
a:hover { color: red; }          /* when mouse is over the link */
button:focus { outline: 2px solid blue; }  /* when keyboard-focused */
input:checked { ... }            /* checked checkbox */
li:first-child { ... }          /* first item in a list */
li:last-child { ... }           /* last item in a list */
li:nth-child(2) { ... }         /* second item */
```

**Combining selectors:**
```css
.card h2 { ... }       /* h2 inside an element with class "card" */
.card > p { ... }      /* p that is a direct child of .card */
h2, h3, h4 { ... }    /* multiple selectors — same rule applies to all */
```

---

## How to Apply CSS to HTML

**External stylesheet (most common):**
```html
<link rel="stylesheet" href="styles.css">
```
Put this in `<head>`. The CSS is in a separate `.css` file.

**Internal stylesheet:**
```html
<head>
    <style>
        p { color: blue; }
    </style>
</head>
```
CSS directly in the HTML file, inside `<style>` tags in `<head>`. OK for small pages; avoid for production.

**Inline styles:**
```html
<p style="color: blue; font-size: 16px;">Text</p>
```
Applied directly to one element. Hardest to maintain — avoid except for quick tests or dynamically generated styles.

External stylesheets are best — styles are in one place, shared across pages, cached by the browser.

---

## The Cascade

CSS stands for Cascading Style Sheets. "Cascading" refers to how multiple rules can apply to the same element, and how conflicts are resolved.

**Specificity** determines which rule wins when two rules target the same element and property:

- Inline styles: highest specificity
- ID selectors: very high specificity
- Class, attribute, pseudo-class selectors: medium
- Element selectors: low

```css
p { color: blue; }              /* specificity: low */
.text { color: green; }         /* specificity: medium */
#main-text { color: red; }      /* specificity: high */
```

If a `<p id="main-text" class="text">` has all three rules applying, the ID selector wins: the text is red.

**Order matters for equal specificity:** When two rules have the same specificity, the one that appears later in the stylesheet wins.

**Inheritance:** Some CSS properties are inherited by child elements; others aren't. Text properties (color, font-family, font-size) are typically inherited. Box properties (width, margin, padding, border) are not.

```css
body { font-family: Arial; }
/* All text on the page inherits Arial — you don't need to repeat it everywhere */
```

---

## The Box Model

Every HTML element is a rectangular box. The box model defines how size, padding, border, and margin work together.

```
+------------------+
|     margin       |
|  +------------+  |
|  |   border   |  |
|  | +--------+ |  |
|  | | padding| |  |
|  | | +----+ | |  |
|  | | |    | | |  |
|  | | |content| |  |
|  | | +----+ | |  |
|  | +--------+ |  |
|  +------------+  |
+------------------+
```

- **Content:** The actual text, image, or other content
- **Padding:** Space between content and border (inside)
- **Border:** The border around the padding and content
- **Margin:** Space between this element and neighboring elements (outside)

```css
div {
    width: 300px;
    padding: 20px;
    border: 2px solid black;
    margin: 16px;
}
```

By default, `width` and `height` set the content size only — padding and border add to the total size. This surprises people. Fix it globally:

```css
*, *::before, *::after {
    box-sizing: border-box;
}
```

With `border-box`, `width` includes padding and border. Much more predictable.

---

## Common CSS Properties

**Typography:**
```css
font-family: Arial, Helvetica, sans-serif;
font-size: 16px;
font-weight: bold;        /* or a number: 400, 700 */
font-style: italic;
line-height: 1.5;
text-align: left;         /* center, right, justify */
text-decoration: none;    /* removes link underlines */
color: #333333;
```

**Background:**
```css
background-color: #f0f0f0;
background-image: url("image.jpg");
background-size: cover;
```

**Spacing:**
```css
margin: 16px;                  /* all sides */
margin: 8px 16px;              /* top/bottom, left/right */
margin: 8px 12px 16px 12px;   /* top, right, bottom, left */
padding: 16px;
padding-top: 8px;
padding-left: 24px;
```

**Dimensions:**
```css
width: 300px;
max-width: 800px;     /* won't grow beyond this */
height: auto;         /* grows to fit content */
```

**Display:**
```css
display: block;       /* takes full width, stacks vertically */
display: inline;      /* flows with text */
display: inline-block; /* flows with text but respects width/height */
display: none;        /* completely hidden */
display: flex;        /* flexbox layout */
display: grid;        /* grid layout */
```
