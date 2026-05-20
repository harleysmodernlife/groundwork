## Network Security

Every time your device connects to a network, traffic flows between you and the world. The security of that connection determines how exposed your communications are.

---

## Your Home Network

Your home network is relatively safe — it's private, password-protected, and behind a router firewall. But it's not impenetrable.

### Router Security

Your router is the gateway between your home and the internet. Securing it matters.

**Change the default admin credentials.** Every router ships with a default username and password (often "admin"/"admin" or printed on a sticker). These are publicly documented. Anyone on your network — or potentially anyone who can reach your router's admin interface — can look them up. Change them to something strong.

**Update router firmware.** Routers run software with security vulnerabilities. Check the manufacturer's website or your router's admin interface for firmware updates. Some routers do this automatically.

**Use WPA2 or WPA3 encryption.** Your Wi-Fi password should be long and random. Check your router's admin interface to verify the security protocol — WEP is broken, WPA is old, WPA2 or WPA3 are current.

**Don't expose services unnecessarily.** If you're not running a home server or game server, there's no reason for port forwarding rules to be active. Check your router's admin interface and remove forwarding rules you didn't set up deliberately.

**Guest network.** Most modern routers support a separate guest Wi-Fi network. Use it for visitors, smart home devices, and anything you don't want on your main network. IoT devices (smart TVs, thermostats, cameras) often have poor security — isolating them limits the damage if one is compromised.

### Devices on Your Network

Every device on your network is a potential entry point. A compromised smart TV could allow an attacker to monitor traffic on your local network.

- Only connect devices you trust and need
- Keep IoT devices on a guest/IoT network
- Don't connect devices you don't recognize (check your router's connected device list occasionally)

---

## Public Wi-Fi

Public Wi-Fi (coffee shops, airports, hotels, libraries) is untrusted. Other people on the same network can potentially:
- See unencrypted traffic (HTTP)
- Intercept traffic if they compromise the access point
- Create fake access points that mimic legitimate ones (evil twin attack)

**What's actually risky on public Wi-Fi:**
- Sending data over HTTP (not HTTPS) — any unencrypted traffic is readable
- Connecting to a fake access point (entering your email, "Free Airport Wi-Fi 2")

**What HTTPS protects:**
- Most web traffic is HTTPS now — the content of your communication is encrypted even on public Wi-Fi
- Attackers can see which sites you're visiting (via DNS and connection metadata), not what you're doing on them

**Practical guidance:**
- Avoid public Wi-Fi for highly sensitive tasks (banking, healthcare) when possible
- Use your phone's cellular connection instead if available
- If you use public Wi-Fi, ensure every sensitive site uses HTTPS
- A VPN encrypts all traffic including DNS — useful if you regularly work on public Wi-Fi

**Never connect to networks named generically or without knowing who runs them.** "Free WiFi" with no password is suspicious. Confirm the network name with staff before connecting.

---

## DNS Security

DNS translates domain names to IP addresses. By default, DNS queries are unencrypted — your ISP (and anyone on your network path) can see every domain you're looking up.

**DNS over HTTPS (DoH):** Encrypts DNS queries so your ISP can't see which sites you're looking up. Firefox and Chrome support this natively. You can also configure it at the OS level.

**Alternative DNS servers:**
- Cloudflare (1.1.1.1) — fast, strong privacy policy, supports DoH
- Google (8.8.8.8) — fast, widely used
- NextDNS — configurable filtering, blocks ads and tracking at DNS level

Your ISP's DNS may log your queries and sell them. Switching to a privacy-respecting DNS provider reduces this.

**Malicious DNS:** If an attacker can change your DNS settings (through a compromised router or network), they can redirect domains to fake sites. This is another reason router security matters — your router typically serves as the DNS resolver for your local network.

---

## Firewalls

A firewall filters network traffic based on rules — allowing or blocking connections by IP address, port, and protocol.

**Your router's firewall:** Blocks unsolicited inbound connections from the internet. By default, if you haven't configured port forwarding, no one on the internet can initiate a connection to devices inside your home network.

**Your device's firewall:** A second layer. Controls which apps can accept incoming connections on your computer.

**What firewalls don't do:** Block all malware (malware often uses outbound connections, which firewalls typically allow), prevent phishing, or protect against attacks on services you've intentionally exposed.

---

## Network Monitoring

For technical users who want visibility into what's happening on their network:

**Pi-hole:** A local DNS server that blocks ads and tracking at the network level — affects all devices on the network. Runs on a Raspberry Pi or any small computer.

**Wireshark:** A network protocol analyzer — captures and displays all network traffic. Useful for understanding what your devices are communicating, but requires technical knowledge to interpret.

**Router device list:** Simply looking at your router's connected device list occasionally tells you whether unexpected devices have joined your network.

---

## The Practical Priority List

1. Strong Wi-Fi password (WPA2/WPA3)
2. Changed router admin password
3. Updated router firmware
4. IoT devices on a separate network
5. HTTPS everywhere (browser extensions like "HTTPS Everywhere" or "HTTPS Upgrade" help)
6. DNS over HTTPS enabled

These changes take an hour and significantly improve your home network's security posture.
