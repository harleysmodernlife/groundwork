## IP Addresses and DNS: The Internet's Address System

Every device on the internet needs an address — a way for other devices to find it and send it data. IP addresses serve that role. But since humans are bad at memorizing numbers, DNS (Domain Name System) translates human-readable names (google.com) to the numerical addresses computers actually use.

---

## IP Addresses

**What an IP address is:** A numerical label assigned to each device connected to a network. It identifies the device and enables routing — getting data from one device to another across many interconnected networks.

**IPv4:** The older, still-dominant system. A 32-bit number written as four groups of 0-255 separated by dots. Example: `192.168.1.1`. This allows about 4.3 billion unique addresses — not enough for every device today, which is why we have NAT and why IPv6 was created.

**IPv6:** The newer system using 128-bit addresses written as groups of hexadecimal digits. Example: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`. Supports an astronomically large number of addresses — effectively unlimited for practical purposes.

**Public vs. private IP addresses:**

*Public IP:* Visible on the internet. Your internet service provider assigns your router a public IP. Everything behind your router shares this single public IP as its internet-facing address.

*Private IP:* Used within local networks (your home or office network). Not routable on the public internet. Common private ranges: `192.168.x.x`, `10.x.x.x`, `172.16.x.x - 172.31.x.x`. Your laptop, phone, and smart TV all have private IPs on your home network.

**NAT (Network Address Translation):** Your router uses NAT to map multiple devices with private IPs to a single public IP. When you request a webpage, your router tracks the request and routes the response back to your specific device. This is why many devices can share one internet connection.

**Dynamic vs. static IP:**

*Dynamic:* Most users have dynamic IP addresses assigned by their ISP, which can change periodically. Your ISP uses DHCP (Dynamic Host Configuration Protocol) to assign IPs automatically.

*Static:* Fixed IP address that doesn't change. Common for servers that need to be reliably found at the same address.

---

## DNS: The Domain Name System

Humans remember `google.com` better than `142.250.80.46`. DNS is the distributed system that translates one to the other.

**How DNS works:**

1. You type `google.com` in your browser
2. Your device checks its local DNS cache (has it looked this up recently?)
3. If not cached, it asks your DNS resolver — typically provided by your ISP or a third-party DNS like Google (8.8.8.8) or Cloudflare (1.1.1.1)
4. The resolver queries the DNS hierarchy:
   - Root nameservers: "Who handles `.com`?"
   - TLD (Top Level Domain) nameservers for `.com`: "Who handles `google.com`?"
   - Google's authoritative nameservers: "What's the IP for `google.com`?"
5. The IP address is returned and cached so future lookups are faster
6. Your browser connects to the IP address

**DNS record types:**
- **A record:** Maps a domain to an IPv4 address
- **AAAA record:** Maps a domain to an IPv6 address
- **CNAME record:** Alias — points one domain to another (e.g., `www.example.com` → `example.com`)
- **MX record:** Specifies mail servers for a domain
- **TXT record:** Text records used for verification and configuration

**TTL (Time to Live):** How long a DNS record is cached before it expires and needs to be looked up again. Short TTL means changes propagate quickly; long TTL reduces DNS lookup load.

**Why DNS matters for security:** DNS lookups are traditionally unencrypted — anyone observing your network traffic can see what domains you're looking up. DNS-over-HTTPS (DoH) and DNS-over-TLS (DoT) encrypt this traffic for privacy.

DNS is also a common attack vector:
- **DNS spoofing / cache poisoning:** Injecting false DNS responses so a domain resolves to a malicious IP
- **DNS hijacking:** Compromising the DNS resolver or nameserver
- **Typosquatting:** Registering misspelled domains (`gooogle.com`) to catch users who mistype

---

## Practical Implications

**Why a website might be slow but your internet is fine:** DNS lookup latency adds to page load time. If your DNS resolver is slow, every new connection is slower.

**Why changing DNS servers can help:** Switching from your ISP's DNS to a faster resolver (1.1.1.1, 8.8.8.8) can speed up browsing.

**Finding your IP:** `ipconfig` (Windows) or `ifconfig` / `ip addr` (Linux/macOS) shows your network interface addresses. Your public IP can be seen at sites like whatismyip.com.
