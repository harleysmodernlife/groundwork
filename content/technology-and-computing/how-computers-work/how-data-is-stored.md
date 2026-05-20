## How Data Is Stored as Bits and Bytes

Computers store and process everything — text, images, audio, video, programs — using only two states: on and off. Understanding how this works helps you understand why files have sizes, why different formats exist, and what's actually happening when you store or send anything digital.

---

## Bits: The Fundamental Unit

A bit is the most basic unit of digital information. It has exactly two possible values: 0 or 1. This corresponds to the two electrical states a transistor can be in: off (no current, 0) or on (current flowing, 1).

Why binary? Because it's extremely reliable to build circuits that distinguish between two states. Three or more states would require more precision in voltage levels, making hardware more complex and less reliable. Two states — on and off — can be implemented with simple, reliable transistors.

Every piece of digital information is ultimately represented as a sequence of 0s and 1s.

---

## Bytes: Useful Units of Measurement

A byte is 8 bits. This became the standard unit because 8 bits can represent 256 different values (2⁸ = 256), which is enough to represent all characters in basic English text.

**The scale:**

| Unit | Abbreviation | Approximate Size |
|------|------|------|
| Byte | B | 8 bits |
| Kilobyte | KB | 1,024 bytes |
| Megabyte | MB | 1,024 KB |
| Gigabyte | GB | 1,024 MB |
| Terabyte | TB | 1,024 GB |

Note: marketing often uses 1,000 instead of 1,024 (decimal vs. binary prefixes) — this is why a "1 TB" hard drive shows up as slightly less than 1 TB in your OS.

---

## How Text Is Stored

Each character needs to be represented as a number. ASCII (American Standard Code for Information Interchange) assigns numbers to characters:
- 'A' = 65 (or 01000001 in binary)
- 'a' = 97 (or 01100001 in binary)
- '0' = 48 (or 00110000 in binary)

ASCII covers 128 characters — enough for English. Unicode expanded this to cover essentially all writing systems in the world. UTF-8 is the most common encoding — it uses 1 byte for ASCII characters and 2-4 bytes for others.

A text document's size equals roughly the number of characters times the bytes per character. A 100,000-character novel is about 100 KB in plain text.

---

## How Numbers Are Stored

**Integers:** Stored as binary numbers. 8 bits store integers 0-255 (unsigned) or -128 to 127 (signed, using one bit for sign). Larger integer types use more bytes: 16-bit, 32-bit, 64-bit.

**Floating point:** Real numbers (decimals) use a special format (IEEE 754) with bits representing a sign, exponent, and fraction — like scientific notation in binary. This allows representation of very large and very small numbers, but with limited precision.

This precision limitation is why computers sometimes produce results like 0.1 + 0.2 = 0.30000000000000004 — floating point can't exactly represent every decimal.

---

## How Images Are Stored

**Pixels:** A digital image is a grid of pixels. Each pixel is a color.

**RGB color model:** Colors are represented as combinations of Red, Green, and Blue, each from 0-255 (1 byte). A pixel takes 3 bytes (24 bits). This is "true color" — 16.7 million possible colors.

**Image size:** A 12-megapixel photo (12 million pixels × 3 bytes) = 36 MB uncompressed. This is why compression formats (JPEG, PNG, WebP) matter — they reduce file sizes dramatically.

**JPEG:** "Lossy" compression — discards information the human eye is less sensitive to. Significantly reduces file size with usually imperceptible quality loss.

**PNG:** "Lossless" compression — no quality loss. Better for images with sharp edges (screenshots, graphics); larger files than JPEG for photos.

---

## How Audio and Video Are Stored

**Audio:** Sound is analog — continuous waves. To digitize, you sample the waveform thousands of times per second (sample rate) and record the amplitude at each sample (bit depth). CD quality is 44,100 samples/second at 16 bits each, per channel. Compressed formats (MP3, AAC) remove information the human ear is less sensitive to.

**Video:** A sequence of images (frames) plus audio. Uncompressed 4K video at 30 fps produces enormous amounts of data — many GB per minute. Compression codecs (H.264, H.265/HEVC, AV1) reduce this dramatically by only encoding the changes between frames and using complex mathematical transforms.

---

## Practical Implications

- **File sizes reflect the data inside.** A 4K video is large because each frame is a large image and there are many frames per second.
- **Compression trades quality for size.** Highly compressed images look fine until they don't — JPEG artifacts are a form of data loss.
- **Encryption doesn't change file size much** — encrypted data is still bits, just scrambled.
- **"Digital" doesn't mean perfect.** Quantization, compression, and floating-point limitations all introduce imprecision.
