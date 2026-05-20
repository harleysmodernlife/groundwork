## Packets and Routing: How Data Travels

When you load a webpage, data travels from a server somewhere in the world to your device. It doesn't travel as a single stream — it's broken into small pieces called packets, routed across dozens of different devices, and reassembled at your end. Understanding this explains internet behavior, latency, and how the internet is so resilient.

---

## Packet Switching

Early telephone networks used circuit switching: when you called someone, a dedicated physical circuit was established between you for the duration of the call. That circuit couldn't carry anything else.

The internet uses packet switching instead. Data is broken into small chunks (packets), each of which can take any available route to the destination. Multiple conversations can share the same links. Links can fail and packets can route around them.

**Why packets?**

- **Efficiency:** Multiple data flows can share the same network links simultaneously
- **Resilience:** If one path fails, packets find another route
- **Scalability:** No need to reserve a circuit — resources are shared dynamically

---

## What's in a Packet

Every packet has two parts:

**Header:** Metadata about the packet — where it came from, where it's going, its sequence number (so it can be reassembled in order), error-checking data, and protocol information.

**Payload:** The actual data chunk being carried.

Packets are typically limited to 1,500 bytes of payload (this is the MTU — Maximum Transmission Unit — for most ethernet networks). A 1 MB file would be split into roughly 700 packets.

---

## The Protocol Stack

Data travels through layers, each adding its own headers and handling its own concerns:

**Application layer (HTTP, DNS, SMTP):** The protocol of the application. HTTP request headers sit here.

**Transport layer (TCP or UDP):** Manages the reliability and ordering of data streams.

**Network layer (IP):** Handles addressing and routing. IP packets carry the source and destination IP addresses.

**Data link layer (Ethernet, Wi-Fi):** Physical network segment addressing (MAC addresses) and transmission over a specific link.

**Physical layer:** Actual signals — electrons, light pulses, radio waves.

When your browser sends an HTTP request, it's wrapped in TCP, then in IP, then in Ethernet frames, then converted to physical signals. At each hop, the physical and data link layers are stripped and added anew; the IP layer persists until the destination.

---

## TCP vs. UDP

The two main transport protocols handle reliability differently:

**TCP (Transmission Control Protocol):**
- Guarantees delivery — packets that don't arrive are retransmitted
- Guarantees ordering — if packet 5 arrives before packet 3, TCP waits for 3 before delivering
- Provides congestion control — slows down when the network is congested
- Connection-oriented — establishes a connection (three-way handshake) before data flows
- Used for: web browsing (HTTP/HTTPS), email, file transfers, anything where data integrity matters

**UDP (User Datagram Protocol):**
- No delivery guarantee — packets may be lost
- No ordering guarantee — packets may arrive out of order
- No retransmission — lost packets are simply gone
- Lower overhead and lower latency
- Used for: video streaming, video calls, online gaming, DNS (where speed matters more than perfect reliability, and applications handle their own reliability if needed)

For a video call, a dropped frame is acceptable — a momentary glitch. Retransmitting the old frame would make the video appear to freeze while waiting for the retransmit, which is worse. UDP's "fire and forget" is better for real-time streams.

---

## Routing

A router is a device that forwards packets toward their destination. Your home router connects your local network to your ISP's network. The internet is a network of networks, connected by routers.

**How a router decides where to send a packet:**

Routers maintain routing tables — maps of which direction to send packets destined for each network. When a packet arrives, the router looks up the destination IP in its routing table and forwards the packet to the next hop — the next router on the path toward the destination.

**BGP (Border Gateway Protocol):** The protocol routers at the internet's core use to share routing information with each other. ISPs and large networks advertise which IP ranges they're responsible for. This is how the internet's routing tables are built and maintained.

**Traceroute:** A tool that shows you every router hop a packet takes between you and a destination. On Unix/macOS: `traceroute google.com`. On Windows: `tracert google.com`. You'll see each router and the round-trip time to reach it.

---

## Latency

Latency is the time it takes for data to travel from one point to another. It's separate from bandwidth (how much data can flow simultaneously).

**Speed of light limit:** Signals travel through fiber at about 2/3 the speed of light. New York to London is ~5,500 km. At 2/3 speed of light, the minimum possible latency is about 27ms one-way. Real-world latency is higher due to processing time at each hop and routing inefficiencies.

**Why latency matters:** High latency makes interactive applications (video calls, online games, remote desktop) feel sluggish even with high bandwidth. A file download cares about bandwidth; a video call cares about latency.

**CDNs (Content Delivery Networks):** By caching content on servers closer to users worldwide, CDNs reduce the distance data travels and lower latency for common resources.
