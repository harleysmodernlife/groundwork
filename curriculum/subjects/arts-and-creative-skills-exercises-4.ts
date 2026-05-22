import type { ExerciseDef } from '../types'

function mc(
  question: string,
  options: string[],
  correctAnswer: string,
  explanation: string,
  order: number,
): ExerciseDef {
  return { question, type: 'MULTIPLE_CHOICE', options, correctAnswer, explanation, order }
}

export const artsExercises4: Record<string, ExerciseDef[]> = {
  'how-cameras-work': [
    mc(
      'Focal length in a camera lens determines:',
      ['How fast the lens can autofocus', 'The field of view and degree of magnification — shorter focal lengths capture more of the scene; longer focal lengths magnify distant subjects', 'The maximum aperture the lens can achieve', 'How close the lens can focus to the subject'],
      'The field of view and degree of magnification — shorter focal lengths capture more of the scene; longer focal lengths magnify distant subjects',
      'A wide-angle lens (below ~35mm) takes in a wide field of view and makes objects look farther apart. A normal lens (35-50mm) roughly matches human eye perspective. A telephoto lens (above ~85mm) narrows the field of view, magnifying distant subjects and compressing apparent depth.',
      1,
    ),
    mc(
      'Larger camera sensors generally produce better image quality because:',
      ['They can accommodate more megapixels', 'They capture more light per photodetector, producing lower noise, greater dynamic range, and the ability to achieve shallower depth of field', 'They have faster autofocus systems', 'They are compatible with more lens options'],
      'They capture more light per photodetector, producing lower noise, greater dynamic range, and the ability to achieve shallower depth of field',
      'A larger sensor has larger individual photodetectors that collect more light per pixel. More light means less amplification needed, which means less noise. Larger sensors also have greater dynamic range and produce shallower depth of field at equivalent apertures — all reasons why full-frame cameras outperform smartphones in challenging light.',
      2,
    ),
    mc(
      'Shooting in RAW format (compared to JPEG) provides:',
      ['Smaller file sizes that are easier to store and share', 'Immediately shareable images without any editing step', 'Uninterpreted sensor data preserving maximum editing flexibility — especially in highlight recovery and white balance', 'Automatic in-camera processing optimized by the manufacturer'],
      'Uninterpreted sensor data preserving maximum editing flexibility — especially in highlight recovery and white balance',
      'RAW files preserve all the sensor data before any in-camera processing. This allows the photographer to control white balance, tone mapping, and noise reduction in post-processing without quality loss. Highlights and shadows that would be permanently clipped in a JPEG can often be recovered from a RAW file.',
      3,
    ),
    mc(
      'On a histogram, clipping at the right edge means:',
      ['The image is underexposed with too-dark shadows', 'Some pixels are pure white with no recoverable detail in the highlights', 'The color saturation is too high', 'The autofocus missed and the image is blurry'],
      'Some pixels are pure white with no recoverable detail in the highlights',
      'The histogram shows tonal distribution from black (left) to white (right). Clipping at the right edge means pixels are pure white — completely blown out with no texture or detail. Clipping at the left edge means pure black shadows with no detail. A well-exposed histogram avoids significant clipping at either extreme unless intentional.',
      4,
    ),
    mc(
      'The key difference between DSLR and mirrorless cameras is:',
      ['DSLRs can use interchangeable lenses; mirrorless cameras have fixed lenses', 'Mirrorless cameras lack a mirror and use an electronic viewfinder showing a live sensor preview; DSLRs use a mirror and optical viewfinder', 'Mirrorless cameras cannot shoot in RAW format', 'DSLRs always produce better image quality than mirrorless cameras'],
      'Mirrorless cameras lack a mirror and use an electronic viewfinder showing a live sensor preview; DSLRs use a mirror and optical viewfinder',
      'DSLRs use a mirror to reflect light to an optical viewfinder — what you see is the actual optical image. When you shoot, the mirror flips up. Mirrorless cameras remove the mirror; the sensor is always exposed and an electronic viewfinder shows the live image. This enables smaller bodies, preview of exposure before shooting, and faster frame rates.',
      5,
    ),
  ],

  'exposure-triangle': [
    mc(
      'F-stop numbers are counterintuitive because:',
      ['Higher f-numbers indicate more light entering the lens', 'A smaller f-number (like f/1.8) means a larger aperture opening and more light', 'F-stops represent the number of blades in the aperture diaphragm', 'F-numbers only apply to prime lenses, not zoom lenses'],
      'A smaller f-number (like f/1.8) means a larger aperture opening and more light',
      'The f-number is a ratio of focal length to aperture diameter, so a smaller ratio means a larger physical opening. f/1.4 is wide open (most light); f/16 is very narrow (least light). Moving from f/2.8 to f/4 halves the light; moving from f/8 to f/5.6 doubles it. Each full stop doubles or halves the light.',
      1,
    ),
    mc(
      'A wide aperture (small f-number like f/1.8) is particularly useful for:',
      ['Landscape photography where everything should be sharp from near to far', 'Portrait photography where you want the subject sharp and the background blurred', 'Architecture photography requiring precise geometric lines', 'Sports photography requiring fast shutter speeds to freeze motion'],
      'Portrait photography where you want the subject sharp and the background blurred',
      'Wide aperture creates shallow depth of field — only a narrow range of distance is in acceptably sharp focus. At f/1.8, a portrait might have sharp eyes while the ears are soft and the background blurs into smooth bokeh. This separation isolates the subject and is the characteristic portrait lens look.',
      2,
    ),
    mc(
      'The "reciprocal rule" for minimum handheld shutter speed states:',
      ['The shutter speed should match the ISO setting to avoid noise', 'The minimum handheld shutter speed is approximately 1/focal length (e.g., 1/200 sec for a 200mm lens)', 'Shutter speed and aperture must always be equal stops apart', 'The shutter speed should be double the frame rate for video recording'],
      'The minimum handheld shutter speed is approximately 1/focal length (e.g., 1/200 sec for a 200mm lens)',
      'Camera shake at slow shutter speeds blurs images. As a rule of thumb, the minimum handheld shutter speed without image stabilization is 1/focal length — 1/50 sec for a 50mm lens, 1/200 sec for a 200mm. Longer lenses magnify camera shake, requiring faster shutter speeds. Image stabilization adds 3-5 stops of leeway.',
      3,
    ),
    mc(
      'In Aperture Priority (Av/A) mode, the photographer sets the aperture and the camera automatically determines:',
      ['ISO and focus point', 'Shutter speed to achieve correct exposure', 'White balance and color profile', 'Autofocus mode and area'],
      'Shutter speed to achieve correct exposure',
      'Aperture Priority lets the photographer control depth of field (by setting aperture) while the camera manages the shutter speed needed to correctly expose the scene. It is the most useful semi-automatic mode for most photographers because depth of field is often the most important creative variable.',
      4,
    ),
    mc(
      'The primary trade-off of using a very high ISO (like ISO 6400) is:',
      ['Loss of color accuracy and white balance errors', 'Increased noise — visible grain or speckle in the image — as the sensor signal is amplified', 'Reduced maximum shutter speed capability', 'Automatic reduction in image resolution'],
      'Increased noise — visible grain or speckle in the image — as the sensor signal is amplified',
      'Higher ISO amplifies the sensor\'s signal to allow shooting in darker conditions — but amplification also amplifies noise (random variation in the signal). The noise appears as grain or colored speckle, most visible in shadow areas. Modern cameras handle high ISO significantly better than older ones.',
      5,
    ),
  ],

  'focus-and-depth': [
    mc(
      'The three factors that control depth of field are:',
      ['ISO, shutter speed, and focal length', 'Aperture, distance to subject, and focal length', 'Sensor size, megapixel count, and aperture', 'Autofocus mode, aperture, and shutter speed'],
      'Aperture, distance to subject, and focal length',
      'Aperture is the primary control: wide aperture = shallow depth of field. Distance to subject matters: closer subjects have shallower depth of field at the same aperture. Focal length also plays a role: longer lenses compress depth of field at the same shooting position and aperture.',
      1,
    ),
    mc(
      'Phase detection autofocus is preferred for moving subjects because:',
      ['It is more accurate for static subjects than contrast detection', 'It detects the direction and amount of focus adjustment needed without hunting, making it fast and predictive', 'It works better in low light than contrast detection', 'It uses fewer battery resources than contrast detection'],
      'It detects the direction and amount of focus adjustment needed without hunting, making it fast and predictive',
      'Phase detection reads light coming from slightly different angles to determine both the direction and magnitude of the focus adjustment needed — making it fast and predictive for moving subjects. Contrast detection must "hunt" by moving focus back and forth looking for peak sharpness, which is slower.',
      2,
    ),
    mc(
      'Back-button AF (assigning autofocus to a rear button rather than the shutter button) is preferred by many working photographers because:',
      ['It prevents accidental shutter releases while focusing', 'It allows instant switching between tracking focus and locking focus without changing AF modes', 'It is faster than half-press focusing', 'It works only with single-point AF, which is more accurate'],
      'It allows instant switching between tracking focus and locking focus without changing AF modes',
      'With back-button AF, holding the AF-On button activates continuous tracking focus; releasing it locks focus where it is. This eliminates the need to switch between AF-S (single/lock) and AF-C (continuous/tracking) modes — you simply hold or release the AF button as needed.',
      3,
    ),
    mc(
      'Zone focusing (a technique used in street and documentary photography) involves:',
      ['Using the camera\'s multi-zone autofocus area to track subjects across the frame', 'Pre-setting focus to a specific distance with a narrow aperture, so anything within a range is acceptably sharp without refocusing', 'Dividing the frame into zones for compositional balance', 'Combining multiple focus points to increase autofocus accuracy'],
      'Pre-setting focus to a specific distance with a narrow aperture, so anything within a range is acceptably sharp without refocusing',
      'For example: a 28mm lens at f/8 focused at 10 feet gives depth of field from roughly 6 feet to infinity. The photographer can walk and shoot without focusing, knowing anything beyond a few feet will be sharp. This technique trades some precision for speed — valuable in fast-moving documentary situations.',
      4,
    ),
    mc(
      'The "hyperfocal distance" is the focusing distance at which:',
      ['The subject appears largest in the frame', 'Infinity falls exactly within the depth of field, maximizing the near-to-far range of sharpness', 'The depth of field is shallowest, creating maximum subject separation', 'Autofocus is most accurate without hunting'],
      'Infinity falls exactly within the depth of field, maximizing the near-to-far range of sharpness',
      'At the hyperfocal distance, everything from half that distance to infinity is within acceptable sharpness. Focusing closer than hyperfocal means infinity is out of focus; focusing farther wastes depth of field in front. Setting focus to the hyperfocal distance gives maximum depth of field in landscape and documentary photography.',
      5,
    ),
  ],

  'photo-composition': [
    mc(
      'In photography, the Rule of Thirds recommends placing the horizon:',
      ['Always in the center of the frame for maximum symmetry', 'On the upper third if the foreground is the story; on the lower third if the sky is the story', 'Below the center to match how humans naturally perceive landscapes', 'In the upper quarter to create a cinematic aspect ratio'],
      'On the upper third if the foreground is the story; on the lower third if the sky is the story',
      'A centered horizon usually means neither the foreground nor the sky is interesting enough to emphasize — it is the default, uncommitted choice. Placing the horizon on a third line is a deliberate statement: the upper third when the ground, people, or foreground are the subject; the lower third when clouds, a dramatic sky, or light are the subject.',
      1,
    ),
    mc(
      'Negative space in photography serves the composition by:',
      ['Filling the frame to avoid wasted space', 'Giving the eye a place to rest, creating the isolation that makes a focal point powerful, and suggesting scale or mood', 'Providing visual information about the environment surrounding the subject', 'Balancing the color weight across the image'],
      'Giving the eye a place to rest, creating the isolation that makes a focal point powerful, and suggesting scale or mood',
      'Negative space — open sky, plain backgrounds, empty ground — is compositional material, not wasted space. A single figure in a vast landscape suggests solitude. Isolation by empty space creates a powerful focal point. Beginning photographers are often afraid of empty space; using it deliberately is a mark of compositional confidence.',
      2,
    ),
    mc(
      'When a strong line in the frame exits the image without leading to the subject, it creates:',
      ['A sense of depth and spatial recession', 'A compositional problem — the eye follows the line out of the frame and is lost', 'A natural frame for the subject', 'Effective leading-line behavior'],
      'A compositional problem — the eye follows the line out of the frame and is lost',
      'Counter-leading lines — lines that lead away from the subject or exit the frame — pull the eye out of the image. Awareness of all lines in a frame (not just the ones being used intentionally) is part of compositional skill. Every strong line in a composition should be directing attention toward the subject or helping the overall image.',
      3,
    ),
    mc(
      'Using symmetry deliberately in a photograph is most effective when:',
      ['The subject is placed at a rule-of-thirds intersection', 'Symmetry itself is the point — and the composition commits to exact symmetry rather than near-symmetry', 'The image has an odd number of elements for visual balance', 'The background is out of focus to simplify the composition'],
      'Symmetry itself is the point — and the composition commits to exact symmetry rather than near-symmetry',
      'Symmetry works when it is intentional and precise. Architectural interiors, reflections in still water, and formal subjects benefit from exact symmetry. A near-symmetrical image that isn\'t quite symmetrical looks like an accident. If you\'re going to be symmetrical, commit fully and center the subject exactly.',
      4,
    ),
    mc(
      'The "foreground, middle ground, background" structure in landscape photography is valuable because:',
      ['It ensures the camera can focus sharply on all three distance zones simultaneously', 'Including elements in all three planes creates the illusion of depth and gives the viewer a sense of moving into the scene', 'It is required to correctly expose for all brightness ranges in the landscape', 'It eliminates the need for leading lines in the composition'],
      'Including elements in all three planes creates the illusion of depth and gives the viewer a sense of moving into the scene',
      'Three-plane structure — something near (foreground), the main subject (middle ground), and context (background) — creates a layered sense of space that flat compositions lack. Wide-angle lenses exaggerate foreground, which is one reason they are extensively used in landscape photography to create this depth.',
      5,
    ),
  ],

  'light-in-photography': [
    mc(
      'Hard light (from a small, distant source) compared to soft light is characterized by:',
      ['Gentle, diffused shadows with soft edges and even, wrapping illumination', 'Crisp, defined shadows with sharp edges, high contrast, and strong texture emphasis', 'Lower color temperature, producing a blue-gray tone', 'Wider coverage area that illuminates the entire subject evenly'],
      'Crisp, defined shadows with sharp edges, high contrast, and strong texture emphasis',
      'Hard light comes from a small source relative to the subject — a bare bulb or direct sun on a clear day. It creates well-defined shadows with sharp edges, high contrast, and strong emphasis on texture (because light grazes the surface). Soft light (from a large source) wraps around subjects and produces gentle shadows.',
      1,
    ),
    mc(
      'Golden hour light (the hour after sunrise and before sunset) is prized by photographers because:',
      ['The color temperature is neutral and consistent, making white balance easy', 'The sun is low, producing warm color, long shadows that reveal texture, and directional side or back lighting', 'The light is diffused by the atmosphere, producing soft, even illumination', 'The high angle of the sun provides flattering top lighting for portraits'],
      'The sun is low, producing warm color, long shadows that reveal texture, and directional side or back lighting',
      'At golden hour, the sun is near the horizon — the light is warm (2500-3500K), travels through more atmosphere, and comes from a low angle that creates long shadows revealing texture and dimension. The same location at 7am looks categorically different from the same location at noon.',
      2,
    ),
    mc(
      'When photographing a backlit subject (light source behind the subject), a common technique to correctly expose the subject\'s face is:',
      ['Using a very narrow aperture to reduce the bright background', 'Adding exposure compensation (+1 to +2 stops) or using spot metering aimed at the subject', 'Switching to manual focus to prevent the camera from refocusing on the bright background', 'Waiting until the light source is no longer directly behind the subject'],
      'Adding exposure compensation (+1 to +2 stops) or using spot metering aimed at the subject',
      'In backlit conditions, the camera meters the bright background and underexposes the subject. Exposure compensation forces the camera to expose brighter, correctly exposing the subject\'s face even if the background becomes slightly overexposed. Spot metering aimed at the face achieves the same result.',
      3,
    ),
    mc(
      'Bounce flash (aiming the flash head at the ceiling or a nearby wall) dramatically improves on-camera flash because:',
      ['It reduces the flash\'s power output to prevent overexposure', 'The reflected light creates a larger, softer effective light source instead of a small, hard direct source', 'It extends the flash\'s range to illuminate more distant subjects', 'It automatically matches the flash color temperature to ambient light'],
      'The reflected light creates a larger, softer effective light source instead of a small, hard direct source',
      'An on-camera flash pointing directly at the subject is a small, hard source — producing harsh, flat, "deer-in-headlights" light. When bounced off a ceiling or wall, the large reflected surface becomes the effective light source — soft, directional, and flattering. The physics: larger source relative to the subject = softer light.',
      4,
    ),
    mc(
      'Overcast skies are actually preferred over direct sun for which type of photography?',
      ['Landscape photography where dramatic shadows reveal terrain texture', 'Portrait and forest photography — soft, even light is flattering and eliminates harsh patch patterns', 'Architecture photography where sharp shadows define structural form', 'Golden-hour-style images with warm color and long shadows'],
      'Portrait and forest photography — soft, even light is flattering and eliminates harsh patch patterns',
      'An overcast sky is a giant softbox — large source, diffused, even, low contrast. For portraits, this means no squinting, even skin tones, and flattering wrap-around light. For forest photography, it eliminates the blown-out sky patches that show through canopy in direct sun. Overcast light is often underrated by beginners who wait for the sun.',
      5,
    ),
  ],

  'editing-basics': [
    mc(
      'The "Vibrance" slider in photo editing software differs from "Saturation" in that:',
      ['Vibrance affects only warm colors; saturation affects only cool colors', 'Vibrance increases saturation only in less-saturated colors and protects skin tones; saturation uniformly affects all colors', 'Vibrance adjusts color temperature; saturation adjusts color intensity', 'Vibrance is a destructive edit; saturation is non-destructive'],
      'Vibrance increases saturation only in less-saturated colors and protects skin tones; saturation uniformly affects all colors',
      'Saturation uniformly increases the intensity of all colors — easy to overdo, turning skin tones orange. Vibrance is more intelligent: it boosts colors that are already less saturated while protecting skin tones, making it a gentler and often better choice for most images.',
      1,
    ),
    mc(
      'Non-destructive editing in software like Lightroom means:',
      ['The software prevents you from making changes that could harm the image', 'Adjustments are stored as instructions applied to the original file, which is never altered — allowing any adjustment to be undone or changed at any time', 'The original file is duplicated before any edits are applied', 'Edits are saved directly into the image pixels as permanent changes'],
      'Adjustments are stored as instructions applied to the original file, which is never altered — allowing any adjustment to be undone or changed at any time',
      'Lightroom and other modern photo editors store edits as metadata instructions alongside the original file. The original RAW file is never changed. You can return to any state, remove any adjustment, or change it without any quality loss. This is why aggressive editing should never be feared — everything is reversible.',
      2,
    ),
    mc(
      'When should sharpening and noise reduction be applied in an editing workflow?',
      ['At the very beginning of editing, before any tonal adjustments', 'Simultaneously with white balance correction', 'Last, before export — after all tonal, color, and selective adjustments are finalized', 'Only to images that will be printed; not to images for web use'],
      'Last, before export — after all tonal, color, and selective adjustments are finalized',
      'Sharpening and noise reduction should be applied last because earlier adjustments (especially local contrast like Clarity) interact with sharpening. Also, the appropriate amount of sharpening and noise reduction depends on the output size and format — different settings for web versus large print.',
      3,
    ),
    mc(
      'The Highlights slider in Lightroom or similar software works by:',
      ['Uniformly increasing the brightness of the entire image', 'Reducing brightness specifically in the brightest areas of the image, recovering blown-out skies and hot spots', 'Adding contrast to the upper midtones', 'Adjusting the white point where tones clip to pure white'],
      'Reducing brightness specifically in the brightest areas of the image, recovering blown-out skies and hot spots',
      'The Highlights slider selectively targets the brightest areas of the image without affecting midtones or shadows. Pulling it down recovers texture and detail in bright areas like skies or windows. It works in conjunction with the Shadows slider (which selectively brightens dark areas) to manage high-contrast scenes.',
      4,
    ),
    mc(
      'For archiving edited photographs, the correct approach is:',
      ['Delete the original RAW files once a JPEG export has been created to save storage space', 'Keep the original RAW files; export JPEG at high quality settings as edited archive copies', 'Convert all RAW files to JPEG immediately after import for consistency', 'Store only the final exported files; editing instructions are not worth retaining'],
      'Keep the original RAW files; export JPEG at high quality settings as edited archive copies',
      'RAW files are the original, unprocessed data — they are the digital negative. Deleting them means losing the ability to re-edit with improved software, correct earlier editing mistakes, or create different exports for different purposes. Storage is cheap; irreplaceable original files are not.',
      5,
    ),
  ],

  'finding-your-eye': [
    mc(
      'A "photographic eye" is best described as:',
      ['An innate talent for visual composition that some photographers are born with', 'The accumulation of visual preferences, noticing habits, technical fluency, and a genuine point of view — all learnable through practice', 'The ability to memorize compositional rules and apply them automatically', 'Perfect color vision enabling accurate color judgments in any light'],
      'The accumulation of visual preferences, noticing habits, technical fluency, and a genuine point of view — all learnable through practice',
      'A photographic eye is not a special talent — it\'s the result of training yourself to notice what others walk past, knowing how the camera renders scenes, and being genuinely curious about the world. Photographers who are curious about people, places, light, and specific details make better photographs than technically flawless photographers with nothing to say.',
      1,
    ),
    mc(
      'The distinction between the "subject" and the "photograph" in photography means:',
      ['The subject is the photographer\'s artistic intent; the photograph is the technical execution', 'The subject is what the image is of (a person, landscape); the photograph is what the image is about (time, loss, beauty, scale)', 'The subject is in focus; the photograph includes all elements including blurred background', 'The subject is the primary light source; the photograph includes all light and shadow relationships'],
      'The subject is what the image is of (a person, landscape); the photograph is what the image is about (time, loss, beauty, scale)',
      'The best photographers know what they\'re looking for — a feeling, a quality, an idea — and find subjects that carry it. The subject (a person at a bus stop) is a vehicle for the photograph (isolation in a crowd, the weight of waiting). Subject and photograph are not the same thing.',
      2,
    ),
    mc(
      'The "one-lens exercise" — committing to a single focal length for several months — develops the photographic eye by:',
      ['Reducing equipment costs and simplifying the kit', 'Eliminating focal length decisions so you fully inhabit one perspective and learn exactly what that lens shows', 'Training the eye to see in both wide-angle and telephoto simultaneously', 'Forcing the use of wide aperture since zoom capability is eliminated'],
      'Eliminating focal length decisions so you fully inhabit one perspective and learn exactly what that lens shows',
      'With one lens, you stop shopping for focal lengths and start seeing only in terms of what that lens shows. You learn the exact angle of view, the spatial relationships, how backgrounds compress or expand. You learn to work within constraints — moving your feet instead of zooming. Most photographers who do this come out with stronger, more consistent work.',
      3,
    ),
    mc(
      'Ira Glass\'s observation about the "gap between taste and ability" for creative beginners states that:',
      ['Beginners should trust their instincts over external critiques since they have fresh perspective', 'Early creative work is often not as good as the maker\'s taste — which is normal, and only large volumes of work over time close the gap', 'Beginners should lower their standards until their skill level improves', 'The gap only exists for self-taught artists; formal education eliminates it'],
      'Early creative work is often not as good as the maker\'s taste — which is normal, and only large volumes of work over time close the gap',
      'Glass observed that people who get into creative work have good taste — it\'s what drew them in. But their ability lags behind their taste. You can see that your work isn\'t as good as what you admire. The only fix is volume — making a lot of work. The taste that got you started begins to align with the technical ability built through practice.',
      4,
    ),
    mc(
      'Photography rewards which quality above most others for long-term development?',
      ['Natural talent and a strong innate sense of composition', 'Expensive, professional-grade equipment', 'Persistence — showing up consistently and photographing attentively over time', 'Access to exotic or unusual locations and subjects'],
      'Persistence — showing up consistently and photographing attentively over time',
      'A person of modest natural talent who photographs attentively every day for a year will make better images than a talented person who photographed twice and stopped. Photographers develop by being present when things happen — which requires showing up consistently, in ordinary places, with ordinary light, until extraordinary moments occur.',
      5,
    ),
  ],
}
