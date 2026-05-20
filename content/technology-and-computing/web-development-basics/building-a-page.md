## Building a Web Page

Writing HTML is one thing. Building a complete, structured page is another. This lesson walks through how to think about a page, plan its structure, and build it with HTML from scratch.

---

## Start with Content, Not Appearance

A common mistake: opening a code editor and immediately worrying about how things will look. Instead:

1. Decide what content goes on the page
2. Structure that content with HTML
3. Apply CSS to make it look right

Appearance is CSS's job. HTML's job is structure. Keep the jobs separate.

---

## Plan the Structure

Look at a typical blog post page. What's on it?

- Site logo and navigation
- Page title (the post's headline)
- Metadata (author, date, tags)
- Post body (paragraphs, headings, maybe images, maybe lists)
- Comments section
- Footer (copyright, links)

Now translate that to HTML structure:

```
<header>
    logo + <nav>
</header>
<main>
    <article>
        <h1> post title
        <p> metadata
        <section> body content
    </article>
    <section> comments
</main>
<footer>
    copyright + links
</footer>
```

The structure reflects the content hierarchy. This planning step saves rewriting later.

---

## Building It

Here's a complete blog post page — minimal but structurally sound:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>How to Make Coffee — The Daily Brew</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<header>
    <a href="/" class="logo">The Daily Brew</a>
    <nav>
        <a href="/articles">Articles</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
    </nav>
</header>

<main>
    <article>
        <header>
            <h1>How to Make Perfect Coffee</h1>
            <p>
                By <a href="/author/alice">Alice Johnson</a>
                &middot;
                <time datetime="2024-03-15">March 15, 2024</time>
            </p>
        </header>

        <section>
            <p>Coffee is simple to make and easy to make wrong. The difference
            between a great cup and a mediocre one comes down to a few variables.</p>

            <h2>The Variables That Matter</h2>

            <ul>
                <li>Coffee-to-water ratio</li>
                <li>Water temperature</li>
                <li>Grind size</li>
                <li>Freshness of beans</li>
            </ul>

            <h2>The Basic Method</h2>

            <ol>
                <li>Measure your coffee: 1 to 2 tablespoons per 6 ounces of water.</li>
                <li>Heat water to 195–205°F (just off the boil).</li>
                <li>Grind beans to the right coarseness for your method.</li>
                <li>Brew using your preferred method.</li>
            </ol>

            <p>Taste it. Adjust. The goal is a cup you actually enjoy.</p>
        </section>
    </article>
</main>

<footer>
    <p>&copy; 2024 The Daily Brew</p>
    <nav>
        <a href="/privacy">Privacy</a>
        <a href="/terms">Terms</a>
    </nav>
</footer>

</body>
</html>
```

Notice:
- `<article>` has its own `<header>` — this is valid and semantic
- `<time>` with a `datetime` attribute for machine-readable dates
- `&middot;` and `&copy;` are HTML entities — special characters
- Navigation links don't wrap in `<ul>` here — both are valid; `<ul>` is more common and explicit

---

## Indentation and Readability

HTML doesn't require indentation — the browser ignores it. But humans need it.

Indent child elements relative to their parents:

```html
<header>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
    </nav>
</header>
```

Consistent indentation shows the nesting structure at a glance. Standard indent is 2 or 4 spaces. Pick one and be consistent.

---

## HTML Entities

Some characters can't be typed directly or have special meaning in HTML:

| Entity | Character | When to use |
|---|---|---|
| `&lt;` | `<` | Less-than sign in text |
| `&gt;` | `>` | Greater-than sign in text |
| `&amp;` | `&` | Ampersand in text |
| `&copy;` | © | Copyright symbol |
| `&mdash;` | — | Em dash |
| `&ndash;` | – | En dash |
| `&middot;` | · | Bullet/separator |
| `&nbsp;` | (non-breaking space) | Space that won't line-break |

---

## The `<link>` and `<script>` Tags

To add CSS and JavaScript to your page:

```html
<head>
    <!-- CSS goes in the head -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- content -->

    <!-- JavaScript goes at the end of body, before </body> -->
    <script src="app.js"></script>
</body>
```

CSS in the `<head>` — so styles are loaded before content is displayed (prevents unstyled flash).

JavaScript at the end of `<body>` — so the HTML is parsed before scripts run (scripts can access HTML elements). Can also go in `<head>` with the `defer` attribute: `<script src="app.js" defer></script>`.

---

## Validating HTML

The W3C Markup Validation Service checks your HTML for errors. Paste your code or enter a URL and it reports problems — missing required attributes, unclosed tags, incorrect nesting.

Valid HTML renders consistently across browsers. Invalid HTML relies on browser error-correction, which can differ between browsers.

---

## The Path Forward

Once you have solid HTML structure, add CSS to control appearance. The structure you set up here becomes the foundation CSS works on — good structure makes styling much easier.
