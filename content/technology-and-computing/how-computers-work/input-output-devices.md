## Input, Output, and Peripheral Devices

A computer by itself doesn't communicate with the world. It needs input devices to receive information from users and the environment, and output devices to communicate results back. Understanding how peripherals work demystifies how a modern computer setup fits together.

---

## Input Devices

Input devices translate real-world information into digital signals the computer can process.

**Keyboard:** Converts key presses into digital codes. Each key has a scancode; the OS translates this to a character or command based on the current keyboard layout. Modern keyboards connect via USB (Universal Serial Bus) or wirelessly via Bluetooth or proprietary 2.4 GHz radio.

**Mouse / Trackpad:** Converts physical movement and clicks into cursor position and event data. Optical mice use a camera and LED to detect surface movement. Trackpads use capacitive sensing — detecting the electrical change from finger touch — to track position and gestures.

**Touchscreen:** Typically capacitive — a grid of electrodes detects distortion in an electrical field caused by finger contact. Calculates touch coordinates and generates touch events that apps can respond to.

**Camera / Webcam:** An image sensor (CCD or CMOS) captures light from a lens. Each pixel in the sensor records light intensity and color. The resulting data is processed, compressed, and delivered as a video stream or still image.

**Microphone:** Converts sound waves (pressure variations in air) into electrical signals, which are then digitized (analog-to-digital converter, ADC). The resulting digital audio stream represents the original sound.

**Sensors:** Accelerometers detect motion and orientation (how your phone knows which way is up). GPS receives signals from satellites and calculates position. Temperature, pressure, light, and proximity sensors all deliver digital readings to the computer.

**Scanner:** Uses a light source and image sensor to digitize physical documents or images.

---

## Output Devices

Output devices translate digital information from the computer into forms humans can perceive.

**Monitor / Display:** The most common output device. Modern displays are mostly LCD or OLED:

- *LCD (Liquid Crystal Display):* A backlight shines through liquid crystals that can be oriented to block or allow light, controlled at the pixel level with color filters (RGB subpixels). IPS panels have better color accuracy and viewing angles; TN panels have faster response times; VA panels have better contrast.

- *OLED (Organic Light-Emitting Diode):* Each pixel generates its own light. True blacks (pixel is simply off), infinite contrast ratio, but potentially subject to burn-in with static images.

**Resolution** is the number of pixels in the display grid. 1920×1080 (Full HD / 1080p) = ~2 million pixels. 3840×2160 (4K/UHD) = ~8 million pixels. Higher resolution at the same screen size means smaller, sharper pixels.

**Refresh rate** is how many times per second the display updates. 60 Hz is standard; 120-165 Hz is common for gaming displays. Higher refresh rates make motion appear smoother.

**Speaker / Headphones:** The digital audio signal goes through a DAC (digital-to-analog converter), which produces an analog electrical signal. An amplifier boosts this signal, and a speaker converts it to sound by vibrating a diaphragm.

**Printer:** Inkjet printers spray microscopic droplets of ink onto paper. Laser printers use a laser to charge a drum, which attracts toner (fine powder), transferred and fused to paper with heat. Inkjet produces better photo quality; laser is faster and cheaper for text.

---

## Connections and Interfaces

**USB (Universal Serial Bus):** The dominant wired peripheral interface. USB-A is the rectangular connector; USB-C is the smaller oval connector used in modern devices. USB 3.x provides high-speed data transfer; USB 2.0 is slower but ubiquitous. USB-C can carry power, data, and video simultaneously.

**DisplayPort and HDMI:** Video output interfaces for connecting monitors and TVs. HDMI is common for consumer devices; DisplayPort is more common for computer monitors. Both carry video, audio, and some auxiliary data.

**Bluetooth:** Short-range wireless protocol (typically <10 meters) for peripherals like headphones, mice, keyboards, and speakers.

**Wi-Fi:** Used primarily for network connectivity, though some peripherals (printers, IoT devices) connect via Wi-Fi.

**Audio jacks:** The 3.5mm headphone/microphone jack is an analog interface — the signal is analog electrical current, not digital. Still common but increasingly replaced by USB-C audio or wireless.

---

## Why This Matters

Understanding peripheral connections helps you:
- Know why you might need a hub or adapter for a laptop with only USB-C ports
- Understand why displays have different capabilities (resolution, refresh rate, color gamut)
- Recognize what information your devices are generating (microphones, cameras, sensors) and what that means for privacy
- Troubleshoot connection issues by understanding what interface each device requires
