## CPU, Memory, and Storage: What Each Does

Three components define the core of any computer. Understanding what each one does — and how they work together — makes sense of why computers behave the way they do and helps you make better decisions about hardware.

---

## The CPU: The Processor

The CPU (Central Processing Unit) is the brain of the computer. It executes instructions — the sequence of operations that make up programs.

**What it does:** The CPU continuously fetches instructions from memory, decodes them (figures out what they're telling it to do), and executes them. It can do this billions of times per second. Modern CPUs execute multiple instructions simultaneously (parallelism) through multiple processor cores.

**Clock speed:** Measured in GHz (gigahertz) — how many billions of instruction cycles per second the processor can execute. A 3.5 GHz processor executes 3.5 billion cycles per second. Clock speed is one factor in performance, but not the only one — architecture efficiency, core count, and cache size also matter.

**Cores:** Modern CPUs have multiple cores — essentially multiple processors on one chip. A 4-core CPU can run 4 tasks simultaneously. More cores help with multitasking and workloads that can be parallelized (video editing, 3D rendering, running many programs at once).

**CPU cache:** A small, extremely fast memory built into the CPU itself. The CPU checks its cache for data before looking in RAM. Cache hits (finding data in cache) are dramatically faster than fetching from RAM. Common sizes: L1 (fastest, smallest, kilobytes), L2 (megabytes), L3 (larger, shared between cores).

---

## RAM: Memory

RAM (Random Access Memory) is the computer's working memory — the temporary space where it stores the data and instructions it's actively using.

**What it does:** When you open an application, the program loads from storage (hard drive or SSD) into RAM, where the CPU can access it quickly. RAM is orders of magnitude faster than storage.

**Why it's temporary:** RAM requires constant power to maintain its contents. When you shut down or the power goes off, RAM loses everything. This is why unsaved work is lost if a computer crashes.

**Why more RAM matters:** Each open program and browser tab uses RAM. When RAM fills up, the OS starts using storage as overflow ("virtual memory" or "swap") — which is dramatically slower. This is often why computers with many programs open become sluggish.

**Typical modern amounts:** 8 GB is the minimum for comfortable general use; 16 GB handles most workloads including software development; 32+ GB for memory-intensive tasks like video editing or running virtual machines.

---

## Storage: Hard Drives and SSDs

Storage is where data lives permanently — files, programs, the operating system — even when the computer is off.

**HDD (Hard Disk Drive):** Traditional spinning disk storage. A physical disk platter rotates, and a read/write head moves across it. Cheap and available in large capacities (terabytes), but mechanical parts make it slow to access data and vulnerable to physical damage.

**SSD (Solid State Drive):** Flash memory — no moving parts. Data is stored in interconnected flash memory chips. SSDs are dramatically faster than HDDs (often 10-20x or more), more durable (no mechanical parts to fail), and silent. They're more expensive per gigabyte but now standard in most new computers.

**NVMe SSDs:** A newer, faster interface for SSDs. Instead of connecting via the older SATA interface (designed for HDDs), NVMe drives connect directly to the CPU via PCIe, with sequential read speeds 5-10x faster than SATA SSDs.

**Capacity:**
- Programs are typically gigabytes (GB) to tens of GB
- Photos are several MB to dozens of MB each
- A 4K video is many GB per hour
- Typical consumer storage: 256 GB to 2 TB

---

## How They Work Together

Here's the cycle:

1. You open a program. The OS reads it from storage (slow) and loads it into RAM (fast).
2. The CPU fetches instructions from RAM (fast) and executes them.
3. The CPU stores frequently used data in its cache (very fast) to avoid repeatedly fetching from RAM.
4. Results that need to be saved eventually get written back to storage (slow).

The bottleneck is almost always moving data up the chain — from storage to RAM to CPU cache. Modern computers are designed to minimize how often data has to travel that full path.

**The practical takeaway:**
- **CPU:** More important for computationally intensive tasks (gaming, video rendering, compiling code)
- **RAM:** More matters for multitasking and working with large data sets
- **SSD vs. HDD:** The single biggest real-world performance improvement in typical computers
