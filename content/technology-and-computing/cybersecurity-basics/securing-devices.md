## Securing Your Devices

Your phone and computer hold enormous amounts of personal and financial information. Securing them reduces risk from theft, malware, and unauthorized access.

---

## Your Phone

Phones are more at-risk than computers in some ways — they leave the house, get lost, get stolen, and connect to networks you don't control.

### Screen Lock

Use a strong screen lock — biometrics (fingerprint or face) plus a PIN fallback. Don't use a simple 4-digit PIN if you can set a 6-digit or alphanumeric one. Don't use "1234" or your birth year.

Set your phone to lock automatically after 30 seconds to a minute of inactivity.

**Why it matters:** A stolen unlocked phone gives thieves access to your email, bank apps, authenticator codes, and everything else. A locked phone gives them a brick (and hopefully triggers Find My / Find My Device).

### Operating System Updates

iOS and Android regularly release updates that patch security vulnerabilities. Enable automatic updates. Running a phone that's years out of date on the operating system means running known-vulnerable software.

**End-of-life devices:** Eventually, manufacturers stop releasing security updates for older phones. A phone that no longer receives updates should be replaced, or at minimum not used for sensitive tasks.

### App Permissions

Review which apps have access to:
- **Location:** Does this app really need your location, and should it be "always on" or "only while using"?
- **Camera and microphone:** Only grant to apps that genuinely need them
- **Contacts:** Why does a game need your contacts?
- **Background activity:** Some apps request permissions they use to track you even when you're not using them

Review permissions regularly: Settings → Privacy (iOS) or Settings → Apps → Permissions (Android).

### Only Install Apps from Official Stores

The App Store and Google Play have review processes that reduce (but don't eliminate) malicious apps. Sideloading apps from outside official stores significantly increases risk. On iOS, sideloading requires deliberate effort. On Android, "Unknown sources" must be enabled.

### Enable Remote Wipe

Both iPhone and Android support remote wiping if your phone is lost or stolen.
- **iPhone:** Find My (findmy.apple.com) — can remotely locate, lock, or erase
- **Android:** Find My Device (findmydevice.google.com) — same capabilities

Requires the phone to be online. Enable these features before you need them.

---

## Your Computer

### Full Disk Encryption

Encrypts your entire hard drive. If someone steals your laptop and removes the drive, they get encrypted gibberish instead of your files.

- **macOS:** FileVault (System Settings → Privacy & Security → FileVault). Enable it.
- **Windows:** BitLocker (Control Panel → BitLocker Drive Encryption). Available on Pro and Enterprise. Windows Home has "Device Encryption" which is limited.
- **Linux:** LUKS encryption during installation, or VeraCrypt for specific volumes.

This doesn't slow down your computer during normal use — decryption is transparent. Only matters if someone gets physical access to your drive.

### User Account Setup

- **Don't use an administrator account for everyday use.** Use a standard user account. Only switch to admin when installing software or changing system settings. This limits the damage malware can do.
- **Set a strong login password.** Your login password is the first line of defense when you step away from your computer.
- **Lock your screen** when walking away: Win+L (Windows), Ctrl+Cmd+Q (Mac).

### Keep Software Updated

- **Operating system:** Enable automatic updates (Windows Update, macOS Software Update). Don't defer indefinitely.
- **Browser:** Chrome, Firefox, Edge, and Safari update automatically. Let them.
- **Applications:** Especially anything that handles external content — PDF viewers, Office software, media players. These are common exploitation targets.
- **Router firmware:** Routers run software too and have vulnerabilities. Check your router manufacturer's site or admin interface for firmware updates.

### Antivirus

- **Windows:** Windows Defender (built in) is good. Real-time protection should be enabled. Third-party antivirus can help but often comes with bloat.
- **Mac:** macOS has built-in protections (XProtect, Gatekeeper) that catch most common malware. Third-party antivirus is less critical but not harmful.

Antivirus catches known malware but can't catch everything — especially new malware, targeted attacks, or social engineering. Don't treat it as a complete security solution.

### Firewall

Your OS firewall controls inbound network connections. Enable it.
- **Windows:** Windows Defender Firewall — on by default. Leave it on.
- **macOS:** System Settings → Network → Firewall. Enable it.

Your home router also provides firewall protection for inbound connections from the internet. Both layers are useful.

---

## Physical Security

**Don't leave devices unattended in public:** A brief moment is all someone needs to steal a laptop or phone.

**Laptop locking cables:** For desktop use in semi-public spaces (library, office), Kensington locks are a deterrent.

**Screen privacy filters:** Physical filters prevent shoulder surfing — people reading your screen. Useful in airports, coffee shops, on transit.

**Webcam covers:** Simple physical covers prevent unauthorized camera access. Some laptops have built-in covers. Cheap and effective.

---

## Backups

The most underused security measure. A backup protects against:
- Ransomware (restore from before the attack)
- Hardware failure
- Accidental deletion
- Theft (at least you don't lose the data, just the device)

**3-2-1 rule:** 3 copies, on 2 different media types, 1 offsite.

Practically:
- Cloud backup (automatic, offsite): Backblaze, iCloud, Google One, OneDrive
- External hard drive (local, fast recovery): plug in, run backup, unplug and store

Test your backups occasionally — a backup you've never restored from might not work when you need it.
