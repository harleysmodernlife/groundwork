## Forms and Links

Links and forms are the two mechanisms through which users interact with web pages. Links navigate between pages. Forms collect input and submit it to a server. Together they power most of what makes the web interactive.

---

## Links

The anchor tag `<a>` creates links.

```html
<a href="https://example.com">Visit Example</a>
```

**`href`** (hypertext reference) — where the link goes.

### Link Types by href Value

**Absolute URL — another website:**
```html
<a href="https://wikipedia.org">Wikipedia</a>
```

**Relative URL — another page on the same site:**
```html
<a href="/about">About</a>            <!-- from the root of the site -->
<a href="about.html">About</a>        <!-- relative to current directory -->
<a href="../index.html">Home</a>      <!-- one directory up -->
```

**Anchor — jump to a section on the same page:**
```html
<a href="#contact">Jump to Contact</a>

<!-- The target section has a matching id -->
<section id="contact">
    <h2>Contact Us</h2>
</section>
```

**Email link:**
```html
<a href="mailto:hello@example.com">Email us</a>
```

**Phone link (for mobile):**
```html
<a href="tel:+15551234567">Call us</a>
```

**Download link:**
```html
<a href="report.pdf" download>Download Report</a>
```

### Opening in a New Tab

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
    Opens in new tab
</a>
```

`target="_blank"` opens in a new tab. `rel="noopener noreferrer"` is a security best practice when using `target="_blank"` — without it, the opened page can access the original page via `window.opener`.

---

## Forms

A form collects user input and sends it somewhere.

```html
<form action="/submit" method="post">
    <label for="name">Your name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email address:</label>
    <input type="email" id="email" name="email" required>

    <button type="submit">Send</button>
</form>
```

**`action`** — where the form data is sent (a URL).
**`method`** — HTTP method: `get` or `post`.
- `get` — data is appended to the URL as query parameters. Use for search forms, filtering — anything that doesn't change data.
- `post` — data is sent in the request body. Use for forms that create or modify data (login, registration, orders).

---

## Form Elements

### Text Input

```html
<input type="text" name="username" placeholder="Enter your username">
<input type="email" name="email">           <!-- validates email format -->
<input type="password" name="password">     <!-- hides input -->
<input type="number" name="age" min="1" max="120">
<input type="tel" name="phone">
<input type="url" name="website">
<input type="date" name="birthdate">
<input type="search" name="q">
```

Different `type` values activate different keyboard types on mobile and different browser validation.

### Textarea (Multi-line Text)

```html
<textarea name="message" rows="4" cols="40" placeholder="Enter your message"></textarea>
```

Unlike `<input>`, `<textarea>` has an opening and closing tag.

### Checkbox

```html
<input type="checkbox" id="newsletter" name="newsletter" value="yes">
<label for="newsletter">Subscribe to newsletter</label>
```

Checkboxes are unchecked by default. Add `checked` attribute to pre-check:
```html
<input type="checkbox" name="terms" required>
```

### Radio Buttons

Radio buttons — select one from a group. All options in a group share the same `name`.

```html
<fieldset>
    <legend>Payment method</legend>
    <input type="radio" id="credit" name="payment" value="credit">
    <label for="credit">Credit card</label>

    <input type="radio" id="paypal" name="payment" value="paypal">
    <label for="paypal">PayPal</label>

    <input type="radio" id="check" name="payment" value="check">
    <label for="check">Check</label>
</fieldset>
```

### Select (Dropdown)

```html
<select name="country">
    <option value="">-- Select your country --</option>
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="uk">United Kingdom</option>
</select>
```

The `value` attribute is what gets submitted. The text content is what's displayed.

### Hidden Input

Passes data without displaying it:
```html
<input type="hidden" name="user_id" value="12345">
```

---

## Labels

Every form input should have a `<label>`. Labels:
- Tell the user what the input is for
- When clicked, focus the associated input (usability)
- Help screen readers identify inputs (accessibility)

Connect label to input via `for` and `id`:
```html
<label for="email">Email address</label>
<input type="email" id="email" name="email">
```

Or wrap the input in the label:
```html
<label>
    Email address
    <input type="email" name="email">
</label>
```

---

## Input Validation Attributes

HTML provides basic validation before the form is submitted:

```html
<input type="text" required>                    <!-- field cannot be empty -->
<input type="text" minlength="3" maxlength="50"> <!-- length constraints -->
<input type="number" min="0" max="100">          <!-- value range -->
<input type="text" pattern="[A-Za-z]{3}">       <!-- regex pattern -->
```

Browser validation catches obvious errors but is not a security measure — always validate on the server too. Users can bypass browser validation by sending requests directly.

---

## What Happens When a Form Is Submitted

With `method="post"`:
1. User fills out form and clicks submit
2. Browser collects all input values (by their `name` attributes)
3. Browser sends an HTTP POST request to the `action` URL with the form data
4. Server receives the data, processes it, and sends a response
5. Browser displays the response

The `name` attribute is what labels each piece of data on the server side. An input without a `name` attribute isn't submitted.
