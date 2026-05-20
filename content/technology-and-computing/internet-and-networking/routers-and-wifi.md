## Routers, Wi-Fi, and Local Networks

Your home has two distinct networks: your local network (the devices in your house talking to each other) and the internet (everything beyond). A router connects these two worlds and manages traffic between them. Understanding this helps you troubleshoot connection problems, improve performance, and make better decisions about your setup.

---

## Your Local Network

Every device in your home — phone, laptop, smart TV, game console — connects to a local network. This network lets your devices communicate with each other and, through the router, with the internet.

**The router's jobs:**

- Connects your local network to your ISP (internet service provider)
- Assigns IP addresses to devices on your local network (via DHCP)
- Manages traffic between devices and the internet
- Acts as a basic firewall

**Private IP addresses:** Devices on your local network get private IP addresses — addresses that are only meaningful inside your home network. These are typically in ranges like 192.168.x.x or 10.x.x.x. Your router has one public IP (assigned by your ISP) and one private IP (typically 192.168.1.1 or similar).

**DHCP (Dynamic Host Configuration Protocol):** When a device connects to your network, it doesn't know its own IP address yet. It broadcasts a request, and the router's DHCP server responds with an IP address to use, how long to use it, and the address of the gateway (the router) and DNS server. This is automatic — you never think about it.

**The gateway:** Your router's private IP address is the gateway for your local network — all traffic destined for the internet goes through it first.

---

## NAT: How One Public IP Serves Many Devices

Your ISP gives your home one public IP address. But you have many devices. Network Address Translation (NAT) solves this.

When your laptop sends a request to a website:
1. The packet leaves your laptop with its private IP (192.168.1.5)
2. Your router replaces the source address with your public IP and records the mapping in a translation table
3. The website sees the request coming from your public IP
4. The response comes back to your router
5. Your router looks up the translation table and forwards the response to your laptop's private IP

To the outside world, all your devices look like one address. This is why websites see your location as a single IP even if everyone in your house is browsing simultaneously.

---

## Wi-Fi: Wireless Local Networking

Wi-Fi is the radio technology your devices use to connect to your router without wires. It's a standardized protocol (IEEE 802.11) that has gone through many generations.

**Wi-Fi generations:**

| Standard | Common Name | Max Speed | Notes |
|---|---|---|---|
| 802.11n | Wi-Fi 4 | 600 Mbps | Still very common |
| 802.11ac | Wi-Fi 5 | ~3.5 Gbps | Current mainstream standard |
| 802.11ax | Wi-Fi 6/6E | ~9.6 Gbps | Modern, more efficient |

Advertised speeds are theoretical maximums. Real-world speeds are lower due to distance, interference, and how many devices share the connection.

**Frequency bands:**

Wi-Fi operates on different radio frequencies:

- **2.4 GHz:** Longer range, better at penetrating walls, but more congested (many devices use it, including microwaves and baby monitors). Slower max speeds.
- **5 GHz:** Shorter range, doesn't penetrate walls as well, but faster and less congested. Better for devices close to the router.
- **6 GHz (Wi-Fi 6E and newer):** Even faster, very little congestion. Only newer devices support it.

Modern routers are "dual-band" or "tri-band" — they broadcast on multiple frequencies simultaneously. Your devices pick whichever band they connect to (usually handled automatically).

**Channels:** Within each band, Wi-Fi uses specific channels. When many neighboring networks use the same channel, they interfere with each other. On 2.4 GHz, channels 1, 6, and 11 don't overlap — using one of these reduces interference. Router admin interfaces let you change the channel.

---

## SSID, Passwords, and Security

**SSID (Service Set Identifier):** The name of your Wi-Fi network. When you see a list of available networks, you're seeing SSIDs. You can name your network anything — it's just a label.

**Wi-Fi security protocols:**

- **WEP (Wired Equivalent Privacy):** Old and broken. Do not use.
- **WPA (Wi-Fi Protected Access):** Improved WEP. Also outdated.
- **WPA2:** The standard for years. Uses AES encryption. Still secure if you use a strong password.
- **WPA3:** Current standard. Stronger password protection (resistant to offline brute force attacks). Better for open networks.

Your router password protects who can join your network. Anyone on your network can see all local traffic and use your internet connection. Use WPA2 or WPA3 with a strong password.

**Hidden SSIDs:** You can configure a router not to broadcast its SSID. This provides minimal security — tools can still detect hidden networks. Not a meaningful protection.

---

## Router Admin Interface

Your router has a built-in administration page. Access it by navigating to the router's IP address in a browser — typically 192.168.1.1 or 192.168.0.1. The default username and password are on a sticker on the router (change these — factory defaults are public knowledge).

From the admin interface you can:
- See all connected devices
- Change Wi-Fi name and password
- Change security settings
- View traffic statistics
- Set up port forwarding (allow outside connections to reach specific devices)
- Configure parental controls or device-level restrictions
- Update firmware

**Firmware updates:** Your router runs software (firmware) that the manufacturer occasionally updates to fix security vulnerabilities and bugs. Check for updates periodically — many newer routers do this automatically.

---

## Troubleshooting Common Problems

**Slow Wi-Fi:**
- Move closer to the router
- Switch to 5 GHz if you're close enough
- Reduce interference (move router away from microwaves, cordless phones)
- Check if many devices are using bandwidth simultaneously
- Restart the router (it's not a joke — it clears memory and re-establishes connections)

**Can't connect to internet (but Wi-Fi connects):**
- The problem is between your router and ISP, not your device
- Restart the router and modem (if separate)
- Check if your ISP is having an outage

**Devices get different speeds:**
- Distance and obstacles matter
- Older devices with older Wi-Fi standards will always be slower
- A device on 2.4 GHz will be slower than one on 5 GHz

**Weak signal in parts of your home:**
- Wi-Fi range extenders repeat the signal (with some speed penalty)
- Mesh network systems (multiple nodes throughout the home) solve this more elegantly
- Powerline adapters use your home's electrical wiring to carry network traffic to remote locations

---

## Wired vs. Wireless

Ethernet (wired) connections are almost always better than Wi-Fi for devices that don't move:

- More reliable (no interference, no signal loss)
- Lower latency
- Consistent speeds

For a desktop, game console, or smart TV in a fixed location, running an Ethernet cable to the router (or a network switch) gives a measurably better experience. Wi-Fi is valuable for portable devices, not a requirement for everything.
