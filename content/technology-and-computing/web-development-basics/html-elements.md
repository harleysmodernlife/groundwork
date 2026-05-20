## HTML Elements

HTML has dozens of elements — each one marks up a different type of content. Knowing the common elements and when to use them is the practical core of writing HTML.

---

## Text Elements

**Headings:** Six levels, `<h1>` through `<h6>`. `<h1>` is the most important; `<h6>` the least.

```html
<h1>Page Title</h1>
<h2>Section Heading</h2>
<h3>Subsection</h3>
```

Use headings to create a logical document outline. There should be only one `<h1>` per page (usually the page's main title). Don't skip levels — don't jump from `<h1>` to `<h3>`.

**Paragraph:**
```html
<p>This is a paragraph of text. The browser adds spacing above and below it.</p>
```

**Line break:**
```html
First line.<br>Second line on the same paragraph.
```

`<br>` is a self-closing tag — no closing tag needed. Use sparingly; separate paragraphs are usually better.

**Emphasis and importance:**
```html
<strong>Bold text</strong> — indicates importance
<em>Italic text</em> — indicates emphasis
```

Use `<strong>` and `<em>` for semantic meaning, not just appearance. For purely visual styling (making something look bold without implying importance), use CSS instead.

**Inline text formatting:**
```html
<code>monospace code</code>
<mark>highlighted text</mark>
<del>deleted text</del>
<ins>inserted text</ins>
<sub>subscript</sub>
<sup>superscript</sup>
```

---

## Lists

**Unordered list (bullets):**
```html
<ul>
    <li>Apple</li>
    <li>Banana</li>
    <li>Cherry</li>
</ul>
```

**Ordered list (numbered):**
```html
<ol>
    <li>First step</li>
    <li>Second step</li>
    <li>Third step</li>
</ol>
```

**Nested lists:**
```html
<ul>
    <li>Fruits
        <ul>
            <li>Apple</li>
            <li>Banana</li>
        </ul>
    </li>
    <li>Vegetables</li>
</ul>
```

---

## Links

```html
<a href="https://example.com">Visit Example</a>
<a href="/about">About page</a>        <!-- relative URL — same site -->
<a href="#section-id">Jump to section</a>   <!-- anchor link on same page -->
<a href="mailto:hello@example.com">Email us</a>
<a href="https://example.com" target="_blank">Opens in new tab</a>
```

`target="_blank"` opens the link in a new tab. When used, add `rel="noopener"` for security: `<a href="..." target="_blank" rel="noopener">`.

---

## Images

```html
<img src="photo.jpg" alt="A cat sitting in a sunbeam" width="400" height="300">
```

`src` — path to the image file. Can be relative or absolute URL.
`alt` — text description. Required. Used by screen readers and shown when image fails to load.
`width` and `height` — helps the browser allocate space before the image loads (prevents layout shift).

`<img>` is self-closing — no closing tag.

---

## Structural / Semantic Elements

These elements divide the page into meaningful regions:

```html
<header>
    <!-- site header, logo, navigation -->
</header>

<nav>
    <!-- navigation links -->
</nav>

<main>
    <!-- primary content of the page -->
</main>

<article>
    <!-- self-contained content (blog post, news story) -->
</article>

<section>
    <!-- thematic grouping of content -->
</section>

<aside>
    <!-- sidebar content, related but not essential -->
</aside>

<footer>
    <!-- footer, copyright, contact links -->
</footer>
```

These replaced generic `<div>` elements with meaningful names. Search engines, screen readers, and browsers use this structure to understand page layout.

---

## Generic Containers

**Block-level container (takes full width, starts on new line):**
```html
<div class="card">
    <h2>Card title</h2>
    <p>Card content</p>
</div>
```

**Inline container (stays in flow of text):**
```html
<p>This word is <span class="highlight">highlighted</span> in the paragraph.</p>
```

`<div>` and `<span>` have no inherent meaning — they're pure containers. Use them for grouping elements that CSS or JavaScript needs to work with as a unit. When a more semantic element fits (like `<article>` or `<nav>`), use that instead.

---

## Tables

Tables are for tabular data — rows and columns. Don't use tables for page layout.

```html
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>City</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Alice</td>
            <td>30</td>
            <td>Chicago</td>
        </tr>
        <tr>
            <td>Bob</td>
            <td>25</td>
            <td>Denver</td>
        </tr>
    </tbody>
</table>
```

`<thead>` — header row group. `<tbody>` — body row group. `<tr>` — table row. `<th>` — header cell (bold, centered by default). `<td>` — data cell.

---

## Semantic HTML and Why It Matters

Using the right element for the right content is called "semantic HTML." It matters because:

- **Accessibility:** Screen readers announce `<h1>` as a heading, `<nav>` as navigation, `<button>` as a button. Generic `<div>` elements with CSS styling give screen readers nothing to work with.
- **SEO:** Search engines use HTML structure to understand content.
- **Maintainability:** `<nav>` is more readable than `<div class="nav-container">`.

The rule: use the element whose meaning matches your content. If nothing fits, use `<div>` or `<span>`.
