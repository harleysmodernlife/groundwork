## VPNs and Online Privacy

VPNs are heavily marketed as privacy tools. Most of what's advertised is exaggerated. Understanding what a VPN actually does — and doesn't do — lets you make real decisions about your privacy instead of buying into marketing.

---

## What a VPN Does

A VPN (Virtual Private Network) creates an encrypted tunnel between your device and a VPN server. All your internet traffic travels through that tunnel.

**Without a VPN:**
- Your ISP sees every domain you visit (via DNS queries and connection metadata)
- Websites see your real IP address
- Anyone on the same network (public Wi-Fi) can see unencrypted traffic

**With a VPN:**
- Your ISP sees only that you're connected to a VPN server — not what you're doing
- Websites see the VPN server's IP address, not yours
- Traffic between you and the VPN server is encrypted
- The VPN provider now sees everything your ISP used to see

The privacy calculus shifts: you're trusting your VPN provider instead of your ISP. You haven't eliminated surveillance — you've moved who does it.

---

## What a VPN Doesn't Do

**A VPN does not make you anonymous.**

Your browser fingerprint, cookies, logged-in accounts, and behavior patterns still identify you. When you're logged into Google, Google knows what you're doing regardless of which IP you're coming from.

**A VPN does not protect you from malware.**

VPNs encrypt your connection. They don't scan for malware, block malicious downloads, or protect against phishing. VPN ads claiming "protection from hackers" are misleading — a VPN won't stop you from getting infected.

**A VPN does not hide traffic from websites you're visiting.**

The VPN encrypts traffic between you and the VPN server. The VPN server then makes the request on your behalf to the destination website. The website sees the VPN server's IP but still receives your request and serves your traffic.

**A VPN doesn't stop tracking via cookies or login state.**

Advertisers track you through cookies, browser fingerprinting, and your logged-in identity — none of which a VPN affects.

---

## When a VPN Actually Helps

**Public Wi-Fi:** On an unsecured network (coffee shop, airport), other people on the same network can potentially intercept unencrypted traffic. A VPN prevents this — all they see is encrypted VPN traffic. (HTTPS already protects specific connections, but a VPN protects everything including DNS lookups.)

**Hiding activity from your ISP:** If you don't want your ISP to see your browsing activity — and in the US, ISPs can legally sell browsing data — a VPN blocks that. Your VPN provider sees it instead, so this only helps if you trust your VPN provider more.

**Bypassing geographic restrictions:** A VPN makes it appear you're coming from wherever the VPN server is. Want to access content only available in the UK? Use a UK VPN server. This is how people watch foreign streaming libraries.

**Bypassing network restrictions:** On a corporate or school network that blocks certain sites, a VPN can tunnel past those restrictions (though this may violate the network's acceptable use policy).

**Remote access to a private network:** The original purpose of VPNs — corporate VPNs let employees connect to company systems as if they were in the office. This is still a primary use case.

---

## VPN Providers: What to Look For

If you use a commercial VPN, the provider is now your surveillance chokepoint. What matters:

**No-logs policy:** Does the provider claim not to log your activity? Has this claim been verified by independent audit or demonstrated by a government request they couldn't fulfill? Many VPNs claim no-logs policies that their actual privacy policy contradicts.

**Jurisdiction:** Where is the company based? Companies in countries with strong surveillance partnerships (Five Eyes nations: US, UK, Canada, Australia, New Zealand) may be compelled to provide data. This matters less if they genuinely don't log.

**Business model:** Free VPNs have to make money somehow. Many sell your data — the opposite of what you want. A paid VPN has an incentive to protect your data because their business depends on trust.

**Ownership:** The VPN industry is heavily consolidated. Many "different" VPN brands are owned by the same companies with unclear ownership structures. Research who owns the VPN before trusting them.

---

## HTTPS Is Already Doing the Heavy Lifting

Much of what VPNs are marketed to protect against is already handled by HTTPS:

- When you connect to any HTTPS site, the traffic is encrypted between your browser and the server
- Your ISP can see which domain you're connecting to (via DNS and SNI — the hostname is visible) but not the content
- A VPN adds encryption to the DNS lookups and hides the destination domains from your ISP

If you're visiting HTTPS sites (which is almost everything now), you're already protected from content interception. A VPN's additional protection is specifically about hiding destinations from your ISP and your IP from websites.

---

## Other Privacy Tools

**DNS over HTTPS (DoH):** Encrypts DNS queries so your ISP can't see which domains you're looking up. Firefox and Chrome support this. Solves part of what a VPN solves, without routing all traffic through a third party.

**Tor:** Routes traffic through multiple relays operated by volunteers, obscuring the origin. Much stronger anonymity than a VPN, but significantly slower. Appropriate when strong anonymity matters, not for everyday use.

**Browser privacy settings:** Block third-party cookies, use Firefox or Brave (which have stronger anti-tracking defaults), or add uBlock Origin. These address tracking mechanisms that VPNs don't touch.

**Private/incognito mode:** Only prevents your browser from saving local history — cookies, cache, login sessions. It doesn't hide anything from your ISP, employer, or the sites you visit. Common misconception.

---

## The Honest Summary

- A VPN hides your activity from your ISP and your IP from websites
- It moves trust to your VPN provider, not eliminates it
- It doesn't provide anonymity
- It helps on public Wi-Fi and for bypassing geographic or network restrictions
- Most privacy problems people have (ad tracking, account profiling) are not solved by a VPN
- Free VPNs should be treated with skepticism
- If you need a VPN, pay for one from a provider with a verified no-logs policy and clear ownership
