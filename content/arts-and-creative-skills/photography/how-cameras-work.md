## How Cameras Work: Light, Lens, and Sensor

A camera captures light. Everything about camera design — the lens, the sensor, the shutter, the aperture — is in service of that one function: controlling how much light, from what direction, for how long, falls on a light-sensitive surface. Understanding this physical reality helps you understand why cameras behave the way they do and how to make intentional choices instead of guessing.

---

## Light and the Image

Everything visible reflects or emits light. Your eye (and a camera) creates an image by collecting that light and focusing it.

**Reflection:** Most objects are visible because they reflect ambient light. A white surface reflects most light that hits it; a black surface absorbs most of it. Colors reflect some wavelengths and absorb others.

**Emission:** Some subjects (the sun, fire, light bulbs, screens) emit light directly.

When light from a scene enters the camera, the lens bends it to focus it onto the sensor. The sensor records the intensity and color of that light at every point, creating a digital image.

---

## The Lens

A lens is a curved piece of optical glass (or multiple pieces of glass in a stack — a lens "element") that bends light rays so they converge at a single focal point.

### Focal Length

**Focal length** (measured in millimeters) describes how much the lens magnifies and its angle of view:

- **Wide angle (below ~35mm):** Wide field of view, takes in more of the scene. Makes objects look farther apart than they actually are. Useful for landscapes, architecture, interior spaces.
- **Normal (35-50mm):** Roughly matches the human eye's field of view. Images look natural and undistorted. The 50mm lens is a classic for everyday photography.
- **Telephoto (above ~85mm):** Narrow field of view, magnifies distant subjects. Makes objects look compressed and closer together. Used for portraits, sports, wildlife, any subject at distance.

On a full-frame sensor, these ranges are standard. On a smaller sensor (APS-C, Micro Four Thirds), multiply the focal length by the crop factor (typically 1.5-1.6× for APS-C) to get the effective full-frame equivalent.

### Aperture (in the Lens)

Every lens has an aperture — an iris-like opening that controls how much light passes through. This is also the primary control for depth of field.

Covered in depth in the next lesson (The Exposure Triangle). The short version: a wide aperture (small f-number like f/1.8) lets in more light; a narrow aperture (large f-number like f/16) lets in less.

### Fixed vs. Zoom Lenses

**Prime (fixed) lenses:** One focal length, no zoom. Typically faster (wider maximum aperture), lighter, and optically sharper at their focal length than zooms. Forces you to move your feet to change composition, which often results in more thoughtful framing.

**Zoom lenses:** Range of focal lengths in one lens. Convenience and flexibility at some cost to maximum aperture and sometimes to optical quality. Modern professional zoom lenses are excellent — the quality gap with primes has narrowed.

---

## The Sensor

The sensor is a digital grid of photodetectors — each one records the intensity of light that falls on it. The total number of these photodetectors is the megapixel count.

### Sensor Size

Larger sensors produce better image quality: lower noise (especially in low light), greater dynamic range, and the ability to achieve shallower depth of field.

Common sensor sizes, from largest to smallest:
- **Medium format:** Very large, very expensive (Hasselblad, Phase One). Used in fashion, commercial photography.
- **Full frame (36×24mm):** The standard of professional 35mm photography. Canon, Nikon, Sony, Leica. High quality, moderate cost.
- **APS-C (about 24×16mm):** Common in mid-range DSLRs and mirrorless cameras. Good quality, more affordable.
- **Micro Four Thirds (17×13mm):** Used in Olympus/OM System, Panasonic Lumix. Compact camera systems.
- **1-inch:** High-end compact cameras, some bridge cameras, larger drones.
- **Smartphone:** Much smaller sensors. Compensated by computational photography and multiple lenses.

### How the Sensor Sees Color

Sensors are inherently grayscale — each photodetector records only light intensity, not color. Color is captured through a Bayer filter — a pattern of red, green, and blue filters over individual pixels. The camera's processor interpolates color for each pixel based on the surrounding filtered readings.

This processing happens in JPEG capture. **RAW files** record the uninterpreted sensor data, allowing the photographer to control the demosaicing (color interpretation), white balance, and tone mapping in post-processing.

### ISO Sensitivity

ISO measures the sensor's sensitivity to light. Higher ISO = more sensitivity = ability to shoot in darker conditions. The cost: more noise (visible grain or speckle in the image).

At ISO 100, the sensor needs a lot of light. At ISO 6400, it can capture an image in near-darkness, but the image will have visible noise. Good cameras handle high ISO better than cheap ones — "base ISO" performance and "high ISO" performance are key buying considerations.

---

## The Shutter

The shutter controls how long the sensor is exposed to light.

**Mechanical shutter:** Physical curtains that open and close in front of the sensor. The time they're open (shutter speed) determines exposure duration.

**Electronic shutter:** The sensor itself starts and stops capturing, with no physical movement. Silent, and allows faster speeds. Some electronic shutters have "rolling shutter" distortion — fast-moving subjects appear skewed because the sensor reads row by row rather than all at once.

**Shutter speed range:** Typical cameras shoot from 1/8000 second (freezing a hummingbird's wing) to 30 seconds or longer (capturing star trails). See the Exposure Triangle lesson for how to use shutter speed.

---

## Camera Types

**DSLR (Digital Single-Lens Reflex):** A mirror inside the camera reflects light up through a prism to the optical viewfinder. When you shoot, the mirror flips up and the shutter opens. DSLRs offer an optical viewfinder (no lag, no electronics between your eye and the scene), extensive battery life, and a massive ecosystem of lenses. The dominant camera type until recently.

**Mirrorless:** No mirror — the sensor is always exposed. An electronic viewfinder (EVF) shows a live preview from the sensor. This enables smaller bodies (no mirror box space required), faster shooting (no mirror slap), and the ability to preview exposure in the viewfinder. Most new camera development is in mirrorless systems. Sony, Fujifilm, Nikon Z, Canon R, OM System, Panasonic.

**Compact cameras:** Small, pocketable cameras with fixed lenses. Wide range of quality from point-and-shoot to the excellent Ricoh GR series.

**Smartphones:** Increasingly capable, with computational photography compensating for small sensors through AI processing, multi-camera systems, and night modes.

---

## Image Quality: What Determines It

**Lens quality:** A sharp, well-corrected lens on an average camera beats a poor lens on a great camera. Lens choice and quality matters.

**Sensor size and generation:** Larger sensors with newer technology produce better low-light performance and dynamic range.

**Technique:** Camera movement (camera shake) and subject movement limit sharpness before sensor quality matters. Holding the camera still, using the right shutter speed, and focusing accurately are the foundational techniques.

**Light:** More light means better exposure options — faster shutter speeds, lower ISO, smaller aperture. Cameras and lenses are constrained by physics. Good light makes good images; poor light requires compromises.

---

## Reading the Histogram

The histogram is a graph showing the distribution of tonal values in your image — from black (left) on the x-axis to white (right), with the y-axis showing how many pixels are at each value.

- **Clipping at the left edge:** Pixels are pure black (underexposed shadows with no detail)
- **Clipping at the right edge:** Pixels are pure white (overexposed highlights with no detail)
- **A well-exposed histogram:** Tones distributed without significant clipping at either extreme (though intentionally high-key or low-key images may be weighted to one side)

Checking the histogram is more reliable than checking the screen preview — the screen's brightness and ambient light affect how the preview looks.
