## Basic Photo Editing

Editing is not fixing bad photographs — it's completing good ones. The camera captures raw data; editing turns that data into an image that matches what you saw and felt. Understanding what editing does (and doesn't do) shapes how you shoot and what you expect from the process.

---

## RAW vs. JPEG: The Foundation

**JPEG:** The camera applies processing — white balance, contrast, sharpening, noise reduction — and compresses the result into a finished image file. Quick, small, immediately usable. Limited editing headroom because the data is already processed and compressed.

**RAW:** The sensor's uninterpreted data, plus metadata. No processing applied. Requires editing software to convert to a viewable image. Preserves maximum data: better highlight recovery, more shadow detail, full white balance flexibility, greater dynamic range.

For serious photography, shoot RAW. The flexibility in post-processing is significant — especially in challenging light. The tradeoff: larger files and an extra editing step before you have a shareable image.

Most cameras can shoot RAW+JPEG simultaneously: the RAW for serious work, the JPEG for quick sharing or backup.

---

## The Editing Software Landscape

**Lightroom Classic (Adobe):** The industry standard for photo editing workflow. Non-destructive editing (originals are never altered), catalog management for thousands of images, synchronizable settings across batches of photos, export for every purpose. Subscription-based. Most working photographers use it or have used it.

**Lightroom (cloud-based):** Adobe's subscription service with cloud storage. Simpler workflow, strong mobile app. Different from Classic in important ways (cloud-first, not locally catalog-based).

**Capture One:** Professional-grade RAW processor. Strong color handling. Preferred by some studio photographers and many commercial photographers. More expensive than Lightroom, steeper learning curve, excellent results.

**Darktable:** Free, open-source RAW processor and image organizer. Powerful, less intuitive interface. Capable of professional-quality results.

**Photoshop:** Pixel-level editing — compositing, retouching, advanced masking, complex adjustments. Used after Lightroom for images that need more than global adjustments. Same Adobe subscription. Not a replacement for Lightroom — a complement to it.

**Affinity Photo:** One-time-purchase alternative to Photoshop. Handles most of what Photoshop does.

**Snapseed / Lightroom Mobile:** Free mobile apps. Snapseed is particularly capable for phone editing. Selective adjustments, healing tool, full tonal controls.

---

## The Non-Destructive Workflow

Modern photo editors work non-destructively: adjustments are stored as instructions applied to the original file, not burned into the pixels. You can go back to any earlier state, remove an adjustment, or change it without quality loss. The original RAW file is never altered.

This means: never hesitate to edit aggressively. You can always undo, reduce, or remove any adjustment.

---

## Core Adjustments

### Exposure

Increases or decreases the overall brightness of the image. Analogous to adjusting the aperture after the fact, but only within limits — you can't recover severely blown highlights or crushed blacks.

**When to use:** Your image is slightly too dark or too bright overall. Start here before any other adjustment.

### Highlights and Shadows

**Highlights:** Reduces brightness in the brightest areas of the image. Recovers blown-out skies, hot spots, and overexposed windows. Pull this down when bright areas are too bright.

**Shadows:** Increases brightness in the darkest areas without affecting the rest of the image. Reveals detail hidden in shadow. Pull this up when shadow areas are too dark.

The combination of reduced highlights and raised shadows compresses the tonal range — good for high-contrast images where you need to hold detail in both extremes.

### Whites and Blacks

**Whites:** Sets the point at which tones clip to pure white. Pull down to prevent clipping; push up to add punch to highlights.

**Blacks:** Sets the point at which tones clip to pure black. Pulling blacks down creates deeper shadows and more contrast. Hold Alt/Option while adjusting to see exactly where clipping begins.

### Contrast

Increases separation between light and dark tones. Makes darks darker and lights lighter simultaneously. Often overdone by beginners — images punchy to the point of losing shadow detail and highlight texture. Use in moderation.

### Clarity

Increases local contrast — midtone contrast that enhances texture and detail without affecting the brightest highlights or darkest shadows. Makes subjects look sharper and more three-dimensional. Overdone, it creates the over-processed "HDR look." Used subtly, it improves almost any image.

**Dehaze:** Similar to clarity but specifically removes the haze and atmospheric scatter in landscape images (fog, smog, distance). Can also be used for underwater photography.

### Vibrance and Saturation

**Saturation:** Uniformly increases the intensity of all colors. Easy to overdo — colors become garish and skin tones turn orange. Use cautiously.

**Vibrance:** Increases saturation only in colors that are already less saturated, and protects skin tones. Gentler than saturation. Often the better choice.

Desaturating (reducing both to negative values) creates subdued, muted color palettes or black-and-white conversions.

---

## White Balance Adjustment

Set in post-processing for RAW files without any quality penalty. Two controls:

**Temperature:** Slide toward blue to make the image cooler (counteract orange light); slide toward yellow/orange to make it warmer (counteract blue light).

**Tint:** Slide toward green or magenta to correct green or magenta color casts (common with fluorescent lighting).

Use the white balance eyedropper: click on something that should be pure neutral gray in the image. The software adjusts temperature and tint to make that point gray, correcting the white balance across the whole image.

---

## The Tone Curve

The curve represents the mapping from input tones (how they come from the sensor) to output tones (how they appear in the image). An S-curve is the most common adjustment: lift the upper-midtones (brightest areas brighter) and pull down the lower-midtones (darker areas darker). This creates contrast and punch.

The curve is powerful but can be left alone for most images. The Exposure, Contrast, Highlights, Shadows, Whites, and Blacks sliders accomplish most of what the curve does with more intuitive controls.

**RGB curves:** Individual red, green, and blue curve adjustments allow precise color correction and color grading. A slightly lifted blue in the shadows gives shadows a blue-gray coolness. Pulling down red in the highlights gives highlights a cyan-green cast. Color grading through RGB curves takes practice but enables sophisticated results.

---

## Sharpening and Noise Reduction

**Sharpening:** Increases edge contrast to make the image look crisper. Almost every image benefits from some sharpening — lenses and sensors have inherent softness. Typical settings: Amount 60-80, Radius 1.0-1.2, Detail 25-35. Hold Alt/Option while adjusting to see the sharpening mask.

**Noise reduction:** Smooths the luminance variation (grain) and color variation (colored speckles) caused by high ISO. There's a tradeoff: noise reduction smooths out detail as well as noise. Apply enough to remove distracting grain without turning the image into watercolor.

Modern AI-based noise reduction (Lightroom's Denoise, Topaz DeNoise, DxO DeepPRIME) produces dramatically better results than traditional algorithms — preserving detail while removing noise. Worth using for high-ISO images.

---

## Color Grading

Color grading applies a tonal color style to the image beyond correcting white balance errors.

**HSL (Hue / Saturation / Luminance):** Adjust specific colors in isolation. Make the sky more blue without affecting green foliage. Desaturate skin tones without desaturating everything. Shift the green of trees slightly toward teal. HSL is precise and non-destructive.

**Color mixer / targeted adjustment:** Same idea, accessible by clicking directly on colors in the image.

**Split toning / Color grading:** Apply different color tints to shadows, midtones, and highlights. A warm orange in the highlights and a cool blue in the shadows creates the "movie look" — warm skin tones in the lights with cool shadow depth. Common in portrait and cinematic photography.

---

## Cropping and Straightening

**Cropping:** Removes outer portions of the frame to improve composition, remove distracting elements, or change the aspect ratio. Every crop reduces resolution — if you need the full resolution, get the composition right in camera.

**Straightening:** Corrects a tilted horizon. The horizon should be level in most landscape and architectural photography. Even 1-2° of tilt reads as wrong.

**Perspective correction:** Corrects converging vertical lines in architectural photography. When you tilt the camera up to photograph a building, vertical lines appear to converge toward the top. Perspective correction tools in Lightroom and Photoshop restore parallel verticals.

---

## Selective Adjustments

Global adjustments affect the entire image. Sometimes you need to affect only part of it.

**Masking tools in Lightroom (as of current versions):**
- **Brush:** Paint a mask onto any area, then apply adjustments only to that area. Use to darken a sky, brighten a face, add clarity to texture areas.
- **Radial filter:** Oval adjustment area. Use for vignettes, drawing attention to subjects.
- **Graduated filter:** Linear transition, typically for sky/ground adjustments.
- **Subject selection, Sky selection:** AI-powered masks that select subjects or sky automatically. Frequently accurate enough to use directly.
- **Luminance range:** Select by brightness. Adjust only the shadows or only the highlights.
- **Color range:** Select by color. Adjust only the blues or only the reds.

Combining multiple masks with different adjustments enables surgical image control. A common portrait workflow: auto-select subject, slightly brighten skin; separate background mask, desaturate background slightly; radial mask, add slight vignette.

---

## Healing and Removal

**Spot removal / Healing:** Removes sensor dust spots, skin blemishes, distracting small objects. The tool samples nearby texture and blends it over the target area. Lightroom's healing is good for small spots; Photoshop's is more powerful for complex removals.

**Content-aware fill (Photoshop):** Removes larger elements — power lines, tourists in the background, a distracting sign — by sampling surrounding texture and filling the area. Works well on simple backgrounds (sky, grass, uniform surfaces), less well on complex backgrounds.

**Generative fill (Photoshop AI):** Fill a selection with AI-generated content that matches the surroundings. Powerful for removing objects, extending canvases, or replacing skies. The AI generation is often convincing but sometimes wrong — verify before using for professional work.

---

## Workflow

A consistent editing workflow prevents spending time re-deciding the same questions:

1. **Import and cull:** Get images into Lightroom, rate them, reject the failures. Delete nothing yet.
2. **Global tonal corrections:** Exposure, highlights, shadows, whites, blacks. Get the tonal range correct.
3. **White balance:** Confirm or correct.
4. **Contrast and clarity:** Add if needed.
5. **Color:** Vibrance, saturation, HSL, color grading.
6. **Sharpening and noise reduction:** Apply last before export — sharpen and denoise at output size.
7. **Selective adjustments:** Any areas that need specific treatment.
8. **Crop and straighten:** Finalize composition.
9. **Export:** Right format, right size, right color space for the intended use.

**Batch editing:** When you have a series of images shot in similar conditions, edit the best one and sync settings to the rest. Then adjust individually as needed. Dramatically faster than editing one image at a time.

---

## Output Settings

**For web/social media:** JPEG, sRGB color space, 72-96 PPI (let the platform determine size), quality 80-90%. Many photographers export at 2000px on the long edge for social media.

**For print:** JPEG or TIFF, Adobe RGB (wider gamut for printing), 300 PPI at print dimensions.

**For archiving:** Keep the original RAW files. Export JPEG at highest quality settings for archive copies of edited images. Never discard RAW files.
