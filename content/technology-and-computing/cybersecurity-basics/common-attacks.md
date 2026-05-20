## Common Cyberattacks

Understanding how attacks work is the foundation of defending against them. You don't need to be a security expert — you need to know what the attacks look like so you can recognize and avoid them.

---

## Phishing

Phishing is the most common attack. You receive a message — email, text, phone call, social media — that impersonates a trusted entity and tries to get you to do something: click a link, enter credentials, open a file, or wire money.

**Email phishing:** An email that looks like it's from your bank, Amazon, Microsoft, or a colleague. It creates urgency ("Your account will be closed in 24 hours") and links to a fake login page. You enter your credentials; the attacker captures them.

**Spear phishing:** Targeted phishing — the attacker researched you specifically. The email references your employer, a coworker's name, a recent event. Much harder to recognize.

**Smishing:** Phishing via SMS text message.

**Vishing:** Phishing via voice call. Someone calls claiming to be tech support, the IRS, your bank, or a utility company.

**How to recognize it:**
- Urgent or threatening language
- Links that don't go where they say (hover over the link before clicking — check the actual URL)
- Sender address that almost but doesn't quite match the real domain (paypa1.com, micros0ft.com)
- Requests for credentials, payment, or personal information
- Attachments you didn't expect

**The rule:** When in doubt, don't click the link. Go directly to the website by typing it yourself. Call the organization using a number you find independently, not one provided in the suspicious message.

---

## Malware

Malicious software designed to damage, steal from, or compromise a system.

**Types:**
- **Virus:** Code that attaches to legitimate files and spreads when those files are shared
- **Worm:** Spreads automatically through networks without user action
- **Trojan:** Disguised as legitimate software; installs malicious payload when run
- **Ransomware:** Encrypts your files and demands payment for the decryption key
- **Spyware:** Silently monitors your activity, captures keystrokes, screenshots, data
- **Adware:** Displays unwanted ads; often bundled with free software

**How it spreads:**
- Email attachments (especially .exe, .doc with macros, .zip)
- Infected USB drives
- Malicious downloads disguised as legitimate software
- Drive-by downloads from compromised or malicious websites
- Exploiting unpatched software vulnerabilities

**Defense:** Don't run files you didn't intentionally download from trusted sources. Keep software updated. Use antivirus software. Don't enable macros in Office documents unless you specifically need to.

---

## Password Attacks

**Brute force:** Try every possible password combination until one works. Fast computers can try billions of combinations per second. Short, simple passwords fall quickly.

**Dictionary attack:** Try common passwords and variations before trying everything. "password," "123456," "qwerty," names with numbers — these fall in seconds.

**Credential stuffing:** Take usernames and passwords from one data breach and try them on other services. This works because people reuse passwords. When LinkedIn gets breached, attackers try those credentials on Gmail, banks, and everything else.

**Password spraying:** Try one common password (like "Password1!") across thousands of accounts. Avoids account lockouts from too many failed attempts on one account.

---

## Social Engineering

Manipulation that exploits human psychology rather than technical vulnerabilities.

**Pretexting:** Creating a false scenario. "I'm from IT support and need your login to fix your account." Legitimate IT will never ask for your password.

**Baiting:** Leaving infected USB drives in a parking lot hoping someone will plug one in. Human curiosity is the attack vector.

**Quid pro quo:** Offering something (help, gift, reward) in exchange for information or access.

**Tailgating/piggybacking:** Following an authorized person through a secured door.

The defense: verify identities independently. Be skeptical of unsolicited requests for access, information, or credentials — even from people who seem to be colleagues.

---

## Man-in-the-Middle (MITM) Attacks

The attacker intercepts communication between two parties. You think you're communicating directly with a website; the attacker is in the middle, reading and possibly modifying the traffic.

**How it happens:** Compromised Wi-Fi networks, ARP spoofing on local networks, DNS hijacking.

**HTTPS protects against this:** The TLS encryption in HTTPS prevents MITM attacks by verifying the server's identity and encrypting the traffic. A MITM attacker can see encrypted gibberish, not readable content.

Don't send sensitive information over HTTP (no padlock icon). On public Wi-Fi, be especially cautious.

---

## Supply Chain Attacks

Instead of attacking you directly, the attacker compromises software or hardware you trust. The SolarWinds attack (2020) is the famous example: attackers compromised a software update, and everyone who installed that update was compromised.

**Software dependencies:** Most applications use many third-party libraries. If a malicious actor publishes a library with a common name, developers might accidentally install it. This is "typosquatting" or "dependency confusion."

This is why software update sources and supply chain integrity matter — and why not running unnecessary software reduces your attack surface.

---

## What Most Attacks Have in Common

Most successful attacks exploit:
- **Trust:** Making you believe the attacker is someone legitimate
- **Urgency:** Pressuring you to act before you think
- **Convenience:** People skip security steps that feel like friction
- **Reuse:** Credentials or systems used in multiple places fail together

Awareness of these patterns makes you substantially harder to compromise.
