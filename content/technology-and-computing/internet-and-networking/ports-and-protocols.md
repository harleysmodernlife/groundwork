## Ports and Protocols

When data travels across a network, it needs to know not just which computer to reach, but which service on that computer to talk to. A server might be running a web server, an email server, and an SSH server all at once — ports are how traffic gets directed to the right one.

---

## What a Port Is

An IP address identifies a computer on a network. A port is a number (0–65535) that identifies a specific service or application on that computer.

Think of it this way: the IP address is the street address of an office building. The port is the specific office number inside. Mail goes to the building (IP), then to the right office (port).

When your browser requests a webpage, it doesn't just connect to an IP address — it connects to port 443 (HTTPS) or port 80 (HTTP) on that IP address. The web server is listening on those ports. Other services on the same server listen on their own ports.

---

## Well-Known Ports

Ports 0–1023 are "well-known ports" — assigned to specific standard services by the Internet Assigned Numbers Authority (IANA). Some common ones:

| Port | Protocol | What it's for |
|---|---|---|
| 20, 21 | FTP | File transfer (old, avoid) |
| 22 | SSH | Secure shell — remote terminal access |
| 25 | SMTP | Sending email between mail servers |
| 53 | DNS | Domain name resolution |
| 80 | HTTP | Unencrypted web traffic |
| 110 | POP3 | Receiving email (old) |
| 143 | IMAP | Receiving email |
| 443 | HTTPS | Encrypted web traffic |
| 587 | SMTP | Email submission (client to server) |
| 993 | IMAPS | IMAP over TLS |
| 3389 | RDP | Windows Remote Desktop |

**Registered ports (1024–49151):** Used by specific applications and services, but less strictly controlled. MySQL uses 3306, PostgreSQL uses 5432, MongoDB uses 27017.

**Dynamic/ephemeral ports (49152–65535):** When your computer initiates a connection, the OS assigns a temporary port on your end (the "source port") from this range. The server responds to that port. When the connection closes, the port is freed.

---

## Protocols

A protocol is a set of rules for how two systems communicate — what messages to send, in what order, in what format, and how to handle errors.

You've already seen some protocols in context:

**At the application layer (what applications speak):**
- **HTTP/HTTPS:** Web requests and responses
- **DNS:** Translating domain names to IPs
- **SMTP/IMAP:** Email sending and receiving
- **SSH:** Encrypted remote terminal access
- **FTP/SFTP:** File transfer (SFTP is the secure version)
- **WebSocket:** Persistent two-way connections for real-time apps (chat, live updates)

**At the transport layer:**
- **TCP:** Reliable, ordered delivery (see Packets and Routing)
- **UDP:** Fast, unreliable delivery

**At the network layer:**
- **IP (IPv4/IPv6):** Addressing and routing
- **ICMP:** Error reporting and diagnostics (what ping uses)

---

## How a Connection Actually Works

When you connect to a web server, here's what happens with ports and protocols:

1. Your browser initiates a TCP connection to the server's IP address, port 443
2. Your OS assigns an ephemeral port on your side (e.g., port 52341)
3. The connection is established — source: your IP:52341, destination: server IP:443
4. Your browser and server exchange HTTPS traffic through this connection
5. When done, the connection is closed and port 52341 is freed

Multiple tabs = multiple simultaneous connections, each with a different ephemeral port on your side, all going to port 443 on the server.

---

## Firewalls and Port Filtering

A firewall controls which network traffic is allowed through by examining packets — source, destination, port, protocol — and applying rules.

**Inbound rules:** What connections can be initiated from outside toward your computer. A home router's firewall typically blocks all inbound connections by default. That's why people on the internet can't just connect to your computer — the firewall rejects unsolicited inbound traffic.

**Outbound rules:** What connections your computer can initiate outward. Usually permissive by default — most traffic from your computer to the internet is allowed.

**Port forwarding:** An exception to inbound blocking. You can configure your router to forward traffic arriving on a specific port to a specific device inside your network. If you're running a game server on your desktop, you'd forward the game's port to your desktop's local IP. This is sometimes called "opening a port."

**Why closing unused ports matters:** Every open port is a potential attack surface. Services listening on ports can have vulnerabilities. Good security practice: don't run services you don't need, and block ports you don't use. That's why servers have firewall rules limiting access to only the ports they actually serve.

---

## Common Port-Related Tasks

**Checking what's listening on your machine:**

On Linux/macOS:
```
ss -tlnp
```
or
```
netstat -tlnp
```
Shows which ports your computer is currently listening on and which program is listening.

On Windows:
```
netstat -ano
```
Lists connections with the process ID (PID).

**Testing if a port is open on a remote host:**

```
telnet example.com 443
```
or more commonly:
```
nc -zv example.com 443
```
(netcat) — attempts a connection and reports success or failure.

**Ping:** Uses ICMP (not a port-based protocol) to test basic connectivity — whether a host is reachable at all.
```
ping google.com
```

---

## Why This Matters

Understanding ports and protocols helps you:
- Diagnose connection failures (wrong port, blocked by firewall, service not running)
- Understand what a firewall rule actually does
- Make sense of server configuration
- Recognize when a service is running on a non-standard port (`:8080` in a URL, for example)
- Understand what "opening a port" for a game or application actually means
