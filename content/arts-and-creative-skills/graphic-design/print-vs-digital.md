## Print vs Digital Design

Print design and digital design share the same visual principles — typography, color, composition, hierarchy — but their technical requirements, workflow, and constraints are entirely different. A designer who only knows one domain will make expensive mistakes when crossing into the other. Understanding what's different and why prevents those mistakes.

---

## The Fundamental Difference

**Print is fixed.** Once something is printed, it doesn't change. The viewer cannot zoom in, scroll, or interact with it. The designer controls every pixel of the final output (though the printer's quality may vary).

**Digital is fluid.** Digital design must accommodate different screen sizes, resolutions, orientations, operating systems, browsers, and user preferences. The designer controls intent and relative relationships; the final rendering is partially determined by the viewer's device.

This fundamental difference drives almost every technical distinction between the two disciplines.

---

## Color

**Print: CMYK**

Printing presses reproduce color by combining four inks: Cyan, Magenta, Yellow, and Key (Black). Every color in a print design is specified as percentages of these four inks.

- CMYK is a subtractive system — inks absorb light
- The color gamut (range of achievable colors) is smaller than RGB
- Vivid screen colors (particularly vivid blues and greens) often can't be reproduced in CMYK — they shift to duller versions
- Design for print in CMYK mode from the beginning, or convert carefully and check proofs

**Pantone (PMS):** Spot colors — specific premixed inks — provide guaranteed color consistency regardless of which printer produces the job. Essential for logos and brand colors in print. Pantone 485 red is the same color from any printer using that formula. A Pantone color specified in brand guidelines is printed exactly on every piece.

**Digital: RGB**

Screens produce color by combining red, green, and blue light. RGB is additive — combining all channels at full intensity produces white.

- RGB is specified as values from 0-255 for each channel (or as hex codes: #FF0000 is pure red)
- RGB can produce more vivid colors than CMYK
- What you see on your monitor may not match another monitor — screen calibration matters

**Web: hex codes.** Web colors are specified as six-character hex codes (#RRGGBB). Design tools output hex codes; these go directly into CSS.

**HSL:** Hue, Saturation, Lightness — an alternative color specification used in some CSS and design tools. More intuitive for design thinking (you can say "make this 20% lighter" easily in HSL).

---

## Resolution and Image Size

**Print: Minimum 300 DPI**

"DPI" = dots per inch. Print requires high resolution because the output has no inherent scale — it's printed at a physical size. A small image stretched to print size becomes pixelated. Minimum 300 DPI at final output size is the professional standard for most print work.

- A 1-inch × 1-inch image at 300 DPI needs to be 300 × 300 pixels
- A poster 18 × 24 inches at 300 DPI needs 5,400 × 7,200 pixels — a very large file
- Bleed: images and background colors that extend to the paper edge must "bleed" — extend 1/8" beyond the trim line — to avoid white edges from imprecise trimming

**Digital: 72 DPI (PPI), but it's complicated**

Screens are measured in PPI (pixels per inch). Standard screen resolution is 72-96 PPI. Unlike print, screen images are sized in pixels, not inches — a 1000-pixel-wide image displays at whatever size the screen renders it.

**Retina / HiDPI screens:** Modern high-resolution displays (iPhone, MacBook Pro, many 4K monitors) have twice or more the pixel density of standard displays. An image sized for standard screens appears blurry on HiDPI displays. Design at 2x (or use SVG vector graphics that scale perfectly) for crisp results on high-resolution screens.

---

## Typography Considerations

**Print typography** can be smaller and more refined — the eye reads small type well on a quality paper surface. Serif fonts in print body text are traditional and highly legible.

**Screen typography** must be larger for legibility — typical body text is 14-18px for comfortable reading. Anti-aliasing (the way screens smooth diagonal letterform edges) affects which fonts render cleanly at small sizes.

**Web-safe fonts vs. web fonts:** Early web design was constrained to fonts installed on the viewer's computer. Web fonts (Google Fonts, Adobe Fonts, custom font hosting) allow designers to specify any typeface and have it load from a server.

**Variable fonts:** A modern web font technology where a single font file contains a range of weight and width variations, allowing smooth animation between states. Useful for responsive typography.

---

## Design Dimensions

**Print dimensions** are in physical units — inches, millimeters. A business card is 3.5 × 2 inches. A letter page is 8.5 × 11 inches. An ISO A4 page is 210 × 297 mm.

**Screen dimensions** are in pixels. Common breakpoints for web design:
- Mobile: 375px wide (iPhone 13)
- Tablet: 768px (iPad)
- Desktop: 1280px or 1440px
- Wide desktop: 1920px+

**Responsive design** means the layout adapts to different screen widths. A three-column desktop layout might become a two-column tablet layout and a single-column mobile layout.

---

## File Formats

**Print file formats:**
- **PDF (Press Quality):** The standard delivery format for commercial printing. Embeds all fonts and images, preserves CMYK colors, includes bleed and crop marks.
- **AI, EPS:** Native vector formats for sending editable files to printers or other designers.
- **TIFF:** High-quality raster format for images in print work.

**Digital file formats:**
- **PNG:** Lossless compression, supports transparency. Best for graphics, logos, and UI elements on screen.
- **JPEG:** Lossy compression, no transparency. Best for photographs. Small file size at acceptable quality.
- **SVG:** Scalable Vector Graphics — XML-based vector format that scales perfectly at any size. Ideal for logos, icons, and illustrations on screen.
- **GIF:** Supports simple animation and transparency. Low color depth. Used for simple animated graphics.
- **WebP:** Modern format with better compression than JPEG/PNG, supports transparency. Increasingly standard for web.

---

## The Design Process Differences

**Print workflow:**
1. Design in CMYK mode
2. Prepare files with bleed and crop marks
3. Package all fonts and linked images
4. Send to printer (PDF or packaged file)
5. Review printer's proof before final run
6. Proof physically before full production run on large jobs

**Digital workflow:**
1. Design in RGB mode
2. Export assets in appropriate formats at correct scales
3. Hand off to developers (or publish directly)
4. Test across devices, browsers, and screen sizes
5. Update iteratively — digital can be revised after publishing

**The big difference:** Print requires commitment — mistakes after printing are expensive. Digital is revisable. This creates different risk tolerances and review processes.

---

## When Your Work Crosses Both

Most professional design work crosses between print and digital. A brand identity might include a website, a business card, a social media template, and a signage system.

**Build with both in mind from the start:**
- Create logo and primary assets as vectors (SVG/AI) that work in both contexts
- Specify colors in both RGB hex and CMYK (and Pantone if needed)
- Establish typography rules for both print and screen applications
- Design templates for print delivery (INDD/AI at 300 DPI) and digital delivery (Figma/web)
