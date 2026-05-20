## Encryption Basics

Encryption transforms readable data into scrambled data that only authorized parties can read. It's the foundation of security on the internet — without it, every password you type, every message you send, and every purchase you make would be readable by anyone watching the traffic.

---

## What Encryption Does

Plaintext is readable data. Ciphertext is the encrypted version — unreadable without the key.

```
Plaintext:  "Hello, Alice"
Ciphertext: "aG8k29Xm7#qP..."
```

An encryption algorithm transforms plaintext into ciphertext using a key. Decryption reverses the process using a key. Without the key, the ciphertext is computationally infeasible to reverse — even with enormous computing power.

**Why it works:** Modern encryption algorithms are designed so that breaking them without the key would require more time than the age of the universe, even with every computer on Earth. The security lies in mathematics, not secrecy about how the algorithm works.

---

## Symmetric Encryption

One key encrypts and decrypts. The same key is shared between sender and receiver.

**Pros:** Fast — used for encrypting large amounts of data.

**Cons:** How do you securely share the key in the first place? If you can communicate securely to share the key, you didn't need encryption. This is the "key exchange problem."

**AES (Advanced Encryption Standard):** The most widely used symmetric algorithm. Used in Wi-Fi (WPA2/WPA3), disk encryption (FileVault, BitLocker), HTTPS (for bulk data), and many other contexts. AES-256 is the 256-bit key variant — the standard for high-security applications.

---

## Asymmetric Encryption (Public-Key Cryptography)

Two mathematically related keys: a **public key** (share it with everyone) and a **private key** (never share it, keep it secret).

**The properties:**
- Anything encrypted with the public key can only be decrypted with the private key
- Anything signed with the private key can be verified with the public key
- You cannot derive the private key from the public key

**Key exchange:** This solves the key exchange problem. You publish your public key openly. Anyone can use it to encrypt a message that only you can read (with your private key). No need to securely exchange a key in advance.

**RSA:** The classic asymmetric algorithm. Widely used, based on the difficulty of factoring large numbers.

**Elliptic Curve Cryptography (ECC):** Newer, more efficient. The same security with much smaller keys. Used in modern TLS, SSH, and many other protocols.

---

## How HTTPS Uses Both

HTTPS combines both types:

1. Your browser connects to a server and requests its **public key** (delivered via an SSL/TLS certificate)
2. The browser verifies the certificate is legitimate (signed by a trusted Certificate Authority)
3. Browser and server use asymmetric cryptography to negotiate a **session key** — a temporary symmetric key
4. All subsequent communication in that session uses the symmetric session key (fast AES encryption)

Asymmetric encryption solves the key exchange problem. Symmetric encryption handles the bulk data efficiently.

---

## Hashing

A hash function takes input of any size and produces a fixed-size output (the hash or digest). It's one-way — you cannot recover the input from the hash.

```
"password123"  →  SHA-256 →  ef92b779...
"Password123"  →  SHA-256 →  ff3af8c3...
```

One character different → completely different hash. Given the hash, you cannot derive the original string.

**What hashing is used for:**

**Password storage:** Systems don't store your password — they store a hash of it. When you log in, they hash what you entered and compare it to the stored hash. If an attacker steals the database, they get hashes, not passwords.

**Verification:** Verify a downloaded file hasn't been tampered with. The publisher provides a hash of the correct file; you hash the downloaded file and compare. If they match, the file is intact.

**Data integrity:** Git uses SHA-1 hashes to identify commits and verify repository integrity.

**Weak hashing:** MD5 and SHA-1 are cryptographically broken — don't use them for security purposes. Use SHA-256 or SHA-3.

**Password hashing requires special algorithms:** bcrypt, scrypt, Argon2 — designed to be slow intentionally, which makes brute-force cracking much harder. A general hash like SHA-256 is too fast for password hashing.

---

## End-to-End Encryption (E2EE)

Encryption where only the communicating users can read the messages — not the service provider, not the server operator, not anyone intercepting traffic.

The server stores ciphertext it cannot decrypt. Only the participants' devices hold the keys.

**What uses E2EE:**
- **Signal:** E2EE by default for all messages and calls
- **WhatsApp:** E2EE by default
- **iMessage:** E2EE when both parties use iMessage (blue bubbles) — but not SMS (green bubbles)
- **ProtonMail:** E2EE email when both sender and recipient use ProtonMail

**What doesn't use E2EE:** Regular SMS, standard email (Gmail, Outlook), most standard messaging apps.

**The limitation:** E2EE protects data in transit and on the server. If someone has access to your unlocked device or has compromised your device with malware, they can read the messages directly — encryption can't help there.

---

## Disk Encryption

Encrypts the entire hard drive or specific files. Without the decryption key (typically your password), the drive appears as random data.

- **FileVault (macOS):** Full-disk encryption built in
- **BitLocker (Windows):** Full-disk encryption (Pro/Enterprise) or Device Encryption (Home)
- **LUKS (Linux):** Full-disk encryption configured at install
- **VeraCrypt:** Cross-platform, can encrypt individual files or containers

If your laptop is stolen, disk encryption means the thief gets a paperweight — they can't access your files by removing the drive.

---

## What Encryption Doesn't Protect

**Data at rest on a running, unlocked device.** Once you've unlocked your device, encryption is transparent — everything is accessible. Someone who gets into your running, unlocked computer can access your encrypted files normally.

**Metadata.** E2EE protects message content but often not metadata — who you talk to, when, how frequently. Signal minimizes metadata collection. Most services don't.

**The endpoints.** If your device or the other party's device is compromised with malware, the attacker can read plaintext before encryption or after decryption.

**Weak keys or poor implementation.** Encryption is only as strong as its implementation. A correctly implemented AES-256 is unbreakable; a poorly implemented custom algorithm might be trivial to break.
