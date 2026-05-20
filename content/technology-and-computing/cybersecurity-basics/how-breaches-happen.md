## How Data Breaches Happen

A data breach is when unauthorized parties access private data. Millions of records are breached every year. Understanding how this happens explains why certain security practices matter — and helps you recognize when you're at risk.

---

## The Most Common Causes

### Stolen Credentials

The leading cause. Attackers obtain usernames and passwords through:
- Phishing attacks that trick users into entering credentials on fake sites
- Data from previous breaches (used in credential stuffing attacks on new targets)
- Malware that logs keystrokes or steals stored passwords
- Purchasing credentials from dark web marketplaces

Once they have valid credentials, attackers log in normally — no technical exploitation needed. From the server's perspective, it looks like the legitimate user.

**What this means for you:** Reusing passwords means one breach exposes many accounts. Phishing is responsible for more successful attacks than any technical exploit.

### Unpatched Vulnerabilities

Every piece of software has bugs. Some bugs are security vulnerabilities — flaws that allow attackers to execute code, access data they shouldn't, or bypass authentication.

When a vulnerability is discovered and disclosed, a race begins: defenders need to patch their systems before attackers exploit the vulnerability. "Zero-day" vulnerabilities are ones that were exploited before being publicly known, giving defenders zero days to prepare.

Organizations running unpatched software — months or years out of date — are frequently compromised through known, publicly-documented vulnerabilities that should have been fixed long ago.

**What this means for you:** Apply software and OS updates. The update is often a security fix for a vulnerability that's now publicly known.

### SQL Injection and Web Application Vulnerabilities

Many websites run database-backed applications where user input is incorporated into database queries. If user input isn't properly sanitized, attackers can inject malicious SQL code.

Example: A login form expects a username. An attacker types:
```
admin' OR '1'='1
```
If the server inserts this directly into a SQL query without sanitization, it might log the attacker in as admin.

More sophisticated attacks can dump entire database contents — usernames, passwords (often hashed), emails, and whatever else the application stores.

**Other web vulnerabilities:** Cross-site scripting (XSS), insecure direct object references, broken authentication, and many others are cataloged in the OWASP Top 10.

### Misconfigured Systems

Databases, cloud storage buckets, and servers exposed to the internet with no authentication. This happens when:
- An S3 bucket is accidentally set to public ("world-readable")
- An internal database is accessible on the internet without a firewall rule
- Default credentials are never changed (username: admin, password: admin)
- Test/development environments with real data are left running after a project ends

Misconfiguration is one of the most common causes of cloud breaches. Automated scanners constantly search the internet for exposed systems.

### Insider Threats

Current or former employees, contractors, or others with legitimate access who misuse that access — either intentionally (theft, sabotage) or accidentally (emailing data to the wrong person, losing a laptop).

### Third-Party and Supply Chain Compromise

Attackers compromise software, hardware, or services that are then distributed to victims. The SolarWinds breach affected thousands of organizations because attackers compromised a software update. A malicious npm package installed by thousands of developers executes on all their machines.

---

## What Happens After a Breach

**Attacker access:** Depending on what was breached, attackers may have email addresses, usernames, passwords (possibly in plaintext or weakly hashed), phone numbers, addresses, Social Security numbers, credit card numbers, medical records.

**What attackers do with it:**
- Use credentials immediately (check banking, email, social media)
- Sell the dataset to other attackers
- Hold it for credential stuffing (try credentials across many sites)
- Use personal information for identity theft
- Use email addresses for targeted phishing campaigns

**Plaintext vs. hashed passwords:** Well-implemented systems don't store plaintext passwords. They store a cryptographic hash. If the database is stolen, attackers need to crack the hashes to get usable passwords — which takes time and may fail for strong passwords. Weak and common passwords crack quickly.

---

## How You Find Out

**Breach notification:** US companies are generally required to notify users when their data was breached (though timing and requirements vary by state). The GDPR requires notification within 72 hours in Europe.

**HaveIBeenPwned:** The free service at haveibeenpwned.com collects breach data and lets you check if your email appears in known breaches.

**Credit monitoring:** Will alert you to new accounts opened in your name, which may indicate identity theft from breached financial data.

**Sometimes you don't find out:** Many breaches go undiscovered for months. Some are never publicly disclosed. The breach may be used quietly without triggering any obvious notification.

---

## What to Do When You're Notified

1. Read the notification carefully — what data was actually breached?
2. Change your password for that service immediately
3. If you reused that password anywhere, change it everywhere
4. Enable 2FA if you haven't already
5. If financial information was involved, monitor your accounts closely
6. If SSN was involved, consider a credit freeze (see personal finance content)
7. Be alert to phishing using the breached information — attackers know your email and may target you specifically

---

## Why Breaches Keep Happening

- Software is complex; security vulnerabilities are inevitable
- Security is often deprioritized against features and speed
- Attackers are motivated and professional; defenders are spread thin
- Humans are fallible — one phishing click can be all it takes
- Third-party dependencies multiply the attack surface

The goal isn't to prevent all risk — that's impossible. The goal is to minimize your personal exposure when (not if) something you use is breached.
