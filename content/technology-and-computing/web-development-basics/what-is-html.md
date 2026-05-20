## What Is HTML

Every webpage you've ever visited was built with HTML. It's the language that defines the structure and content of web pages — what's on the page and what each piece of content is. Understanding HTML is the foundation of understanding how the web works.

---

## HTML: Structure, Not Appearance

HTML (HyperText Markup Language) is a markup language, not a programming language. It doesn't calculate or make decisions — it describes content.

The three technologies of the web divide responsibilities:
- **HTML:** The content and structure (what's on the page)
- **CSS:** The presentation (how it looks)
- **JavaScript:** The behavior (what it does when you interact with it)

A well-structured webpage can look completely different depending on the CSS applied to it. The HTML is the bones; CSS is the skin.

---

## How HTML Works

HTML uses **tags** to mark up content. Tags are written in angle brackets. Most tags come in pairs: an opening tag and a closing tag.

```html
<p>This is a paragraph.</p>
```

`<p>` is the opening tag. `</p>` is the closing tag (note the slash). The content between them is the paragraph.

Tags tell the browser what kind of content something is. A `<p>` is a paragraph. An `<h1>` is a top-level heading. An `<a>` is a link. The browser uses these to render the page and to help search engines, screen readers, and other tools understand the content.

---

## The Basic Structure of an HTML File

Every HTML page follows this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Page</title>
</head>
<body>
    <h1>Hello, world!</h1>
    <p>This is my first webpage.</p>
</body>
</html>
```

**`<!DOCTYPE html>`:** Tells the browser this is HTML5. Required at the top of every HTML file.

**`<html>`:** The root element — everything on the page is inside this.

**`<head>`:** Contains information about the page — not displayed content, but metadata:
- `<meta charset="UTF-8">` — tells the browser to use UTF-8 character encoding
- `<meta name="viewport">` — makes the page work on mobile devices
- `<title>` — the page title shown in the browser tab

**`<body>`:** All visible content goes here — text, images, links, forms, everything.

---

## Nesting

Tags can be nested inside each other — elements can contain other elements.

```html
<div>
    <p>This paragraph is <strong>inside</strong> a div.</p>
</div>
```

Nesting must be proper: if you open `<p>` inside `<div>`, you must close `</p>` before `</div>`. Improper nesting causes unpredictable rendering.

This structure forms a tree — the Document Object Model (DOM). Every element has a parent and may have children. This tree is what CSS and JavaScript work with.

---

## Attributes

Tags can have attributes — additional information about the element, written inside the opening tag.

```html
<a href="https://example.com">Click here</a>
```

`href` is an attribute of the `<a>` (anchor/link) tag. It defines where the link goes. The attribute value is in quotes.

```html
<img src="photo.jpg" alt="A photo of a cat">
```

`src` tells the browser where the image file is. `alt` provides a text description — for screen readers and for when the image fails to load.

---

## The Web Is Forgiving

Browsers are designed to handle bad HTML gracefully. Missing closing tags, mismatched nesting, unknown elements — browsers make guesses and render something anyway. This is good for users but can mask errors during development.

Don't rely on this. Write proper HTML — it produces predictable results and works correctly across all browsers.

---

## Viewing HTML

Every browser lets you inspect a page's HTML:
- Right-click anywhere on a page and select "Inspect" or "Inspect Element"
- The developer tools panel opens, showing the HTML, applied CSS, and more

This is one of the best ways to learn — inspect pages you like and see how they're built.

---

## Creating an HTML File

An HTML file is just a text file with a `.html` extension. You can create one in any text editor (Notepad, TextEdit, VS Code — any of them). Save it, then open it in a browser. That's it.

```
1. Open a text editor
2. Write HTML
3. Save the file as "index.html"
4. Open the file in a browser
```

No server needed to view local HTML files in a browser.
