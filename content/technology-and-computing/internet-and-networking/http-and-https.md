## HTTP and HTTPS: How Web Pages Get to You

Every time you load a webpage, your browser and a web server have a conversation. HTTP (HyperText Transfer Protocol) is the language they speak. HTTPS is the same protocol but encrypted. Understanding how this works helps you understand web security, performance, and what's actually happening when pages load.

---

## What HTTP Is

HTTP is an application-layer protocol — a set of rules governing how web clients (browsers) and web servers communicate. It defines how requests are made, what responses look like, and how error conditions are handled.

HTTP is a request-response protocol: the client sends a request, the server sends a response.

**A simple HTTP request looks like:**
```
GET /index.html HTTP/1.1
Host: example.com
User-Agent: Mozilla/5.0 ...
Accept: text/html
```

**A response looks like:**
```
HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 1234

<html>...</html>
```

---

## HTTP Methods

HTTP defines methods (also called verbs) that specify the type of request:

**GET:** Retrieve a resource. Most web requests are GETs — "give me this page." Parameters go in the URL. Should not change server state.

**POST:** Submit data to the server. Used for form submissions, uploading files, creating records. Data goes in the request body, not the URL.

**PUT:** Replace a resource entirely.

**PATCH:** Partially update a resource.

**DELETE:** Remove a resource.

These methods form the foundation of REST (Representational State Transfer) APIs — the design style used by most modern web services.

---

## HTTP Status Codes

Every response includes a three-digit status code:

**2xx — Success:**
- 200 OK: Request succeeded, response contains the resource
- 201 Created: New resource created (common after a POST)
- 204 No Content: Success but no body to return

**3xx — Redirection:**
- 301 Moved Permanently: Resource has permanently moved to new URL (browser and search engines update)
- 302 Found: Temporary redirect
- 304 Not Modified: Resource unchanged since last request; use your cached version

**4xx — Client Error:**
- 400 Bad Request: Malformed request
- 401 Unauthorized: Authentication required
- 403 Forbidden: Authenticated but not allowed
- 404 Not Found: Resource doesn't exist
- 429 Too Many Requests: Rate limited

**5xx — Server Error:**
- 500 Internal Server Error: Something went wrong on the server
- 502 Bad Gateway: Server received an invalid response from an upstream server
- 503 Service Unavailable: Server overloaded or down for maintenance

---

## HTTPS: HTTP + Encryption

HTTP is plaintext. Anyone between you and the server — your ISP, your router, someone on the same Wi-Fi — can read everything: which pages you visit, what data you submit, passwords, private messages.

HTTPS adds a layer of encryption (TLS — Transport Layer Security) between HTTP and the underlying TCP connection. This encrypts the data so that interceptors see scrambled content they can't read.

**What HTTPS provides:**

*Encryption:* Data in transit is encrypted. Third parties can't read the content of requests and responses.

*Authentication:* The server proves it is who it claims to be through an SSL/TLS certificate. This prevents man-in-the-middle attacks where an attacker impersonates the server.

*Integrity:* Data cannot be modified in transit without detection.

**How HTTPS works (simplified TLS handshake):**

1. Client connects to server and says "I support TLS versions X, Y, with these cipher suites"
2. Server responds with its certificate (which contains its public key and is signed by a Certificate Authority)
3. Client verifies the certificate is legitimate and signed by a trusted CA
4. Client and server use asymmetric cryptography to securely exchange a session key
5. From here on, all communication is encrypted symmetrically with the session key

**Certificate Authorities (CAs):** Organizations that issue and verify SSL certificates. Browsers come pre-loaded with a list of trusted CAs. If you visit a site with an invalid certificate, your browser shows a warning.

**Let's Encrypt:** A free, automated CA that has dramatically increased HTTPS adoption by making certificates free and easy to obtain. Essentially all new websites now run HTTPS.

---

## HTTP Versions

**HTTP/1.1:** The long-dominant version. One request at a time per connection (head-of-line blocking). Works fine but inefficient.

**HTTP/2:** Allows multiple requests simultaneously over a single connection (multiplexing). Compresses headers. Significantly faster for loading pages with many resources (modern pages make dozens to hundreds of requests).

**HTTP/3:** Uses QUIC (a transport protocol over UDP rather than TCP) instead of TCP. Handles packet loss more gracefully, faster connection establishment. Still rolling out broadly.

---

## Practical Implications

- Always look for HTTPS (padlock in the browser) before submitting any sensitive information
- HTTP sites can be upgraded to HTTPS by the server — if you see HTTP, the site owner hasn't set it up (increasingly rare)
- Browser developer tools (F12) let you inspect HTTP requests and responses for any page you visit
- API design is built on HTTP — understanding methods and status codes is foundational for working with web APIs
