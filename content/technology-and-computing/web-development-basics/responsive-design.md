## Responsive Design

More than half of all web traffic comes from mobile devices. A page that looks great on a desktop can be unusable on a phone — tiny text, horizontal scrolling, buttons too small to tap. Responsive design makes a single page work well across all screen sizes.

---

## The Problem

A desktop monitor might be 1920px wide. A phone screen might be 390px wide. If your page assumes 1920px, it looks fine on desktop and broken on mobile. The solution isn't to build two separate sites — it's to write one HTML/CSS codebase that adapts to any screen size.

---

## The Viewport Meta Tag

Required for mobile devices. Without it, mobile browsers fake a wide viewport and shrink the page down — text becomes tiny.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This tells the browser: make the viewport the actual device width, at actual size. Always include this in `<head>`.

---

## Media Queries

A media query applies CSS only when certain conditions are true — typically when the viewport is above or below a certain width.

```css
/* Default styles — apply to all screens */
.container {
    width: 100%;
    padding: 16px;
}

/* Apply when screen is 768px wide or wider */
@media (min-width: 768px) {
    .container {
        max-width: 960px;
        margin: 0 auto;
        padding: 24px;
    }
}

/* Apply when screen is 1200px wide or wider */
@media (min-width: 1200px) {
    .container {
        max-width: 1200px;
    }
}
```

The widths where your layout changes are called **breakpoints**. Common breakpoints:
- 480px — small phones
- 768px — tablets / large phones
- 1024px — laptops
- 1280px or 1440px — desktops

These are starting points, not rules. Set breakpoints where your design actually breaks.

---

## Mobile-First vs. Desktop-First

**Mobile-first:** Write base styles for mobile. Use `min-width` media queries to add styles for larger screens.

```css
/* Mobile styles */
.columns {
    display: flex;
    flex-direction: column;    /* stack vertically on mobile */
}

/* Tablet and up */
@media (min-width: 768px) {
    .columns {
        flex-direction: row;   /* side by side on wider screens */
    }
}
```

**Desktop-first:** Write base styles for desktop. Use `max-width` media queries to adjust for smaller screens.

```css
/* Desktop styles */
.columns {
    display: flex;
    flex-direction: row;
}

/* Mobile */
@media (max-width: 767px) {
    .columns {
        flex-direction: column;
    }
}
```

Mobile-first is generally preferred — it forces you to think about the constrained layout first, and it tends to produce leaner, faster-loading CSS.

---

## Responsive Layouts

**Stacking on mobile, side-by-side on desktop:**
```css
.sidebar-layout {
    display: flex;
    flex-direction: column;    /* mobile: stacked */
}

@media (min-width: 768px) {
    .sidebar-layout {
        flex-direction: row;   /* desktop: sidebar + main */
    }

    .sidebar { width: 250px; }
    .main { flex: 1; }
}
```

**Responsive grid (auto-fitting cards):**
```css
.cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 24px;
}
```

`auto-fit` fills as many columns as fit. `minmax(280px, 1fr)` means each column is at least 280px, and they grow equally. On mobile, this produces 1 column. On tablet, 2. On desktop, 3 or more. No media queries needed.

---

## Responsive Typography

**Fluid type using clamp():**
```css
h1 {
    font-size: clamp(1.5rem, 5vw, 3rem);
}
```

`clamp(min, ideal, max)` — at least 1.5rem, ideally 5% of viewport width, at most 3rem. Scales smoothly between breakpoints.

**Base font size:**
```css
html {
    font-size: 16px;    /* 1rem = 16px */
}

body {
    font-size: 1rem;    /* 16px — scales with html font size */
}
```

Using `rem` units (relative to the root font size) makes it easy to scale everything by changing one value.

---

## Responsive Images

A large image downloaded on a phone wastes bandwidth and slows loading.

**Make images fit their container:**
```css
img {
    max-width: 100%;
    height: auto;
}
```

This prevents images from overflowing their container without distorting them.

**Serving different image sizes** with the `srcset` attribute:
```html
<img
    src="photo-800w.jpg"
    srcset="photo-400w.jpg 400w, photo-800w.jpg 800w, photo-1600w.jpg 1600w"
    sizes="(max-width: 600px) 100vw, 50vw"
    alt="A landscape photo"
>
```

The browser picks the most appropriate image size for the screen. Phones download the small file; desktop downloads the large one.

---

## Testing Responsive Design

**Browser DevTools:** Every major browser has a responsive design mode.
- Chrome/Edge: F12 → toolbar icon that looks like a phone/tablet, or Ctrl+Shift+M
- Firefox: F12 → the same icon

This lets you resize the viewport and see how your page looks at different widths. You can also select specific device profiles (iPhone 14, Pixel 7, iPad).

**Real devices:** DevTools is useful but not a substitute for testing on actual phones. Touch targets that are "close enough" on a cursor become frustrating to tap on a touchscreen.

---

## Common Responsive Problems

**Horizontal scrollbar on mobile:** Something is wider than the viewport.
```css
/* Find the culprit */
* { outline: 1px solid red; }    /* temporarily shows all element boundaries */
```

**Text too small:** Did you include the viewport meta tag?

**Tap targets too small:** Buttons and links need at least 44×44px touch area on mobile.
```css
.button {
    min-height: 44px;
    min-width: 44px;
    padding: 12px 24px;
}
```

**Images overflowing:** Add `max-width: 100%` to images.
