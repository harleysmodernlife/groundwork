## Files, Directories, and the File System

Files and folders are so fundamental to how we use computers that most people never think about what they actually are. But understanding the file system — the structure that organizes data on storage devices — helps you work more effectively and troubleshoot problems.

---

## What a File Is

A file is a named collection of data stored on a storage device. From the OS's perspective, a file is a sequence of bytes with associated metadata.

**File contents:** The raw data — bytes that represent whatever the file contains (text, image pixels, executable code, database records).

**Metadata:** Information about the file:
- Name
- Size (in bytes)
- Type / extension (what kind of data it contains)
- Creation date, modification date, last-accessed date
- Permissions (who can read, write, or execute it)
- Owner

**File extensions:** The suffix after the last dot in a filename (`.txt`, `.jpg`, `.pdf`, `.py`, `.exe`). Extensions signal the file type to the OS and applications, determining which program opens the file by default. The extension is a convention — technically a file's actual format is determined by its internal structure, not its extension. But changing the extension without changing the format doesn't actually change what the file is.

---

## Directories (Folders)

A directory is a container that can hold files and other directories. This creates a hierarchical structure — a tree — for organizing data.

- A directory contains entries pointing to files or other directories
- A "subdirectory" or "subfolder" is a directory inside another directory
- The root of the tree is the topmost directory — on Windows, it's typically `C:\`; on Unix/Linux/macOS, it's `/`

**File paths:** The location of a file in the hierarchy, expressed as a sequence of directories from the root.

- Windows: `C:\Users\Alice\Documents\report.txt`
- Unix/macOS: `/home/alice/documents/report.txt`

**The path separator** is `\` (backslash) on Windows and `/` (forward slash) on Unix/Linux/macOS.

**Absolute vs. relative paths:**
- *Absolute:* The complete path from the root. Always starts with `/` or a drive letter.
- *Relative:* Relative to your current location. `documents/report.txt` means "report.txt inside the documents directory inside wherever I currently am."

Special notations:
- `.` means "the current directory"
- `..` means "the parent directory" (one level up)
- `~` (Unix) means "the current user's home directory"

---

## How the File System Works

The file system is the system the OS uses to organize data on a storage device. Different operating systems use different file systems with different capabilities.

**Allocation:** The file system divides the storage device into blocks (typically 4 KB or larger). When you save a file, the file system finds free blocks and marks them as belonging to that file. Files can be spread across non-contiguous blocks (fragmentation).

**File Allocation Table / Index:** The file system maintains a map of which blocks belong to which files. Different file systems do this differently:
- FAT32 / exFAT: Simple, widely compatible. FAT32 has a 4 GB maximum file size.
- NTFS (Windows): Supports large files, permissions, encryption, journaling.
- ext4 (Linux): Common Linux file system. Journaling reduces corruption risk.
- APFS (macOS): Apple's modern file system. Supports encryption, snapshots.

**Journaling:** The file system keeps a log (journal) of operations in progress. If the system crashes mid-write, the journal helps restore a consistent state rather than leaving corrupt data.

**Free space:** When you delete a file, the file system marks those blocks as available — the data isn't immediately overwritten. This is why file recovery software can sometimes recover deleted files: the data is still physically there until new files are written to those blocks.

---

## Special Directories on Major OSes

**Windows:**
- `C:\Windows\` — OS system files
- `C:\Program Files\` — installed applications
- `C:\Users\[username]\` — your personal files
- `C:\Users\[username]\Desktop`, `Documents`, `Downloads`, `Pictures`

**macOS:**
- `/System/` — OS files (protected)
- `/Applications/` — installed applications
- `/Users/[username]/` — your home directory
- `/Users/[username]/Desktop`, `Documents`, `Downloads`

**Linux:**
- `/bin/` and `/usr/bin/` — system programs
- `/etc/` — system configuration files
- `/home/[username]/` — your home directory
- `/tmp/` — temporary files (often cleared on reboot)
- `/var/` — variable data (logs, databases)

---

## Permissions

Every file and directory has permissions defining who can do what:

**Three permission types:**
- Read (r): Can view the file's contents
- Write (w): Can modify or delete the file
- Execute (x): Can run the file as a program (for scripts and executables)

**Unix permission model:** Three groups of these permissions: owner, group, others. Expressed as `rwxr-xr--` or numerically (755, 644). `chmod` changes permissions; `chown` changes ownership.

**Windows:** Uses Access Control Lists (ACLs) — more granular, specifying permissions for individual users and groups.

Permissions are why you need administrator access to install software or change system files — the OS prevents ordinary programs from modifying files they shouldn't.
