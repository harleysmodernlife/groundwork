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

export const artsExercises3: Record<string, ExerciseDef[]> = {
  'typography': [
    mc(
      'Kerning in typography refers to:',
      ['The uniform spacing adjustment across a range of letters or words', 'The vertical spacing between lines of text', 'The adjustment of space between specific letter pairs', 'The height of lowercase letters measured from the baseline'],
      'The adjustment of space between specific letter pairs',
      'Kerning adjusts space between specific pairs of letters (like "AV") that create awkward gaps or collisions at their natural spacing. Tracking (letter-spacing) adjusts space uniformly across a range. Leading adjusts the vertical distance between lines. All three are distinct typographic spacing controls.',
      1,
    ),
    mc(
      'The "Two-Font Rule" in typography recommends:',
      ['Using only a single typeface in all weights for any design', 'Using no more than two typefaces — one for headlines and one for body text', 'Mixing at least two different type classifications for visual contrast', 'Limiting designs to two type sizes regardless of hierarchy needs'],
      'Using no more than two typefaces — one for headlines and one for body text',
      'Using more than two typefaces creates visual noise without adding meaning. Most designs need one typeface for headlines and one for body text. A third typeface rarely adds value and often creates visual clutter. Even simpler: using different weights of the same typeface can create sufficient hierarchy.',
      2,
    ),
    mc(
      'The recommended line length (measure) for comfortable reading is:',
      ['20-30 characters per line for compact layouts', '45-75 characters per line', '100-120 characters per line for maximum information density', 'As wide as the available column allows'],
      '45-75 characters per line',
      'Lines shorter than 45 characters create too many line breaks and interrupt reading flow. Lines longer than 75 characters require the eye to travel far to find the next line, causing readers to lose their place. This 45-75 character range is the typographic standard for comfortable continuous reading.',
      3,
    ),
    mc(
      'Slab serif typefaces are characterized by:',
      ['Very high contrast between thick and thin strokes, creating an elegant, sophisticated look', 'No finishing strokes on letterforms, giving a modern, clean appearance', 'Heavy, unbracketed serifs of approximately the same weight as the main strokes', 'Serifs based on Renaissance letterforms with diagonal stress'],
      'Heavy, unbracketed serifs of approximately the same weight as the main strokes',
      'Slab serifs (like Rockwell, Clarendon, and Courier) have thick, block-like serifs that don\'t taper or bracket — they meet the main strokes at a near-right angle. They feel bold, confident, and mechanical, used in headlines, posters, and brand contexts requiring solidity.',
      4,
    ),
    mc(
      'Using all caps for body text is generally avoided because:',
      ['It is too informal for most design contexts', 'All capitals lose the ascenders and descenders that make words visually distinct, slowing reading significantly', 'It takes up too much vertical space in a layout', 'It is associated with shouting and creates a negative emotional response'],
      'All capitals lose the ascenders and descenders that make words visually distinct, slowing reading significantly',
      'Words in mixed case are recognized by their overall shape — the distinctive profile created by ascenders (tall letters) and descenders (letters dipping below the baseline). In all caps, every word becomes a rectangle of similar height, eliminating this shape recognition and forcing letter-by-letter reading.',
      5,
    ),
  ],

  'layout-and-grid': [
    mc(
      'The primary purpose of a grid in layout design is to:',
      ['Limit the designer\'s creative options to prevent errors', 'Provide an invisible underlying structure that creates consistency, alignment, and visual order across a design', 'Ensure that all text is the same size throughout the document', 'Create equal-width columns that must each contain the same type of content'],
      'Provide an invisible underlying structure that creates consistency, alignment, and visual order across a design',
      'The grid is invisible in the final design — what the viewer sees is order and alignment, the evidence of an underlying system. Grids create consistency (every page follows the same logic), alignment (elements line up with each other), and flexibility (a well-designed grid allows many different arrangements within the system).',
      1,
    ),
    mc(
      'Gutters in a grid system refer to:',
      ['The extra space added to the inner margin to account for binding', 'The space between columns that prevents content in adjacent columns from visually blurring together', 'The area outside the live content area near the paper\'s edge', 'The baseline grid used to align text across columns'],
      'The space between columns that prevents content in adjacent columns from visually blurring together',
      'Gutters are the spaces between columns. They must be wide enough that a reader\'s eye does not accidentally flow from one column to the next. A minimum useful gutter is about 4% of the total width. Too-narrow gutters make multi-column text harder to navigate.',
      2,
    ),
    mc(
      'The 12-column grid is popular in web design because:',
      ['It is the only grid that works with CSS Flexbox', 'It provides maximum flexibility — it can be divided into halves, thirds, quarters, or asymmetric splits', 'It ensures all designs look the same across different screen sizes', 'It was mandated by early internet standards organizations'],
      'It provides maximum flexibility — it can be divided into halves, thirds, quarters, or asymmetric splits',
      'A 12-column grid can be divided into 2 columns (6+6), 3 columns (4+4+4), 4 columns (3+3+3+3), or asymmetric arrangements like 8+4 or 9+3. This flexibility makes it the basis of most web CSS grid systems — you can create many different layouts while maintaining structural consistency.',
      3,
    ),
    mc(
      'The Rule of Proximity in layout design states that:',
      ['All elements should be placed as close together as possible to save space', 'Elements that are related should be physically close; elements that are unrelated should be separated by space', 'Headlines should always be close to the top margin of the page', 'Text should be placed as close to images as possible'],
      'Elements that are related should be physically close; elements that are unrelated should be separated by space',
      'Proximity communicates relationships without labeling them. A caption placed directly below its image is understood as belonging to that image. A heading closer to its section than to the section above it is understood as introducing that section. When proximity is violated, relationships become unclear and the layout looks poorly organized.',
      4,
    ),
    mc(
      'In responsive web design, the "mobile-first" approach means:',
      ['Mobile devices should display the full desktop version of the site', 'Design starts with the smallest screen and adds complexity as screen size increases', 'Mobile users get a separate simplified version of the website', 'Images are removed on mobile to save bandwidth'],
      'Design starts with the smallest screen and adds complexity as screen size increases',
      'Mobile-first forces prioritization: what is the single most important content that gets the one column? Secondary content is added as screen size allows. This produces better-organized content hierarchies than desktop-first (which often tries to squeeze everything into small screens and produces cluttered mobile layouts).',
      5,
    ),
  ],

  'color-in-design': [
    mc(
      'A monochromatic color palette in graphic design uses:',
      ['All twelve colors of the color wheel at reduced saturation', 'Two complementary colors in equal proportions', 'One hue in various tints, shades, and saturations', 'Three colors equally spaced around the color wheel'],
      'One hue in various tints, shades, and saturations',
      'A monochromatic palette — one hue at different values and saturations — is highly cohesive, sophisticated, and relatively easy to get right. It is commonly used in premium and luxury branding contexts where visual restraint signals quality.',
      1,
    ),
    mc(
      'The WCAG AA standard minimum contrast ratio for normal body text against its background is:',
      ['2:1', '3:1', '4.5:1', '7:1'],
      '4.5:1',
      'WCAG AA requires at least 4.5:1 contrast ratio for normal text and 3:1 for large text (18pt+). WCAG AAA (enhanced) requires 7:1 for normal text. These ratios ensure readability for users with visual impairments and low vision.',
      2,
    ),
    mc(
      'About 8% of men have some form of color blindness. The most common type makes it difficult to distinguish:',
      ['Blue and yellow', 'Red and green', 'Purple and blue', 'Orange and gray'],
      'Red and green',
      'Red-green color blindness (deuteranopia and protanopia) is the most common type. Designs that communicate information only through red/green color differences — "green means good, red means bad" with no other indicator — fail for these users. The solution is to use color plus shape, pattern, and text labels together.',
      3,
    ),
    mc(
      'When designing for both print and screen, colors should be specified as:',
      ['Only RGB hex codes, since most designs end up digital anyway', 'Only CMYK values, since print is more demanding than screen', 'Both RGB hex codes (for screen) and CMYK values (for print), since the two color systems have different gamuts', 'Pantone codes only, as they work identically in both contexts'],
      'Both RGB hex codes (for screen) and CMYK values (for print), since the two color systems have different gamuts',
      'RGB (additive, screen) and CMYK (subtractive, print) are different systems with different color gamuts. Vivid screen blues and greens often become less saturated in print. A complete professional color system specifies colors in both modes, and adds Pantone codes when brand color consistency across all printed materials is critical.',
      4,
    ),
    mc(
      'The recommended starting point when building a color palette for a design is:',
      ['Choose as many colors as possible to give the client maximum options', 'Design in grayscale first to establish hierarchy and composition before adding color', 'Start with the accent color since it creates the most visual interest', 'Match the palette exactly to the competitor\'s colors to stay within category conventions'],
      'Design in grayscale first to establish hierarchy and composition before adding color',
      'Color should enhance a working design, not rescue a broken one. Designing in grayscale first ensures the layout hierarchy and composition are sound before color is introduced. A design that works without color will work well with color. A design that relies on color to function has structural problems.',
      5,
    ),
  ],

  'logo-design': [
    mc(
      'The primary job of a logo is:',
      ['To communicate the full brand story and company values in a single mark', 'Identification — reliably representing and distinguishing the organization across all contexts', 'To be visually beautiful and win design awards', 'To explain the product or service the company offers'],
      'Identification — reliably representing and distinguishing the organization across all contexts',
      'A logo\'s job is identification, not communication. Brand meaning accumulates through experience with the brand over time — it is not designed into the logo itself. The Apple logo is just a silhouetted apple; decades of products and marketing built the associations people have with it.',
      1,
    ),
    mc(
      'A "wordmark" logo type uses:',
      ['A standalone symbol with no text', 'The company\'s initials in a distinctive treatment', 'The company name in a distinctive, custom typeface', 'The company name incorporated within a symbol so text and image are inseparable'],
      'The company name in a distinctive, custom typeface',
      'A wordmark (logotype) is the company name set in a distinctive typeface — Google, Coca-Cola, FedEx. It works best for brands with memorable, visually interesting names. A lettermark uses only initials (IBM, HBO). A logomark is a standalone symbol (Nike swoosh, Apple). A combination mark pairs symbol with wordmark.',
      2,
    ),
    mc(
      'During the logo design process, why is it important to work in black and white before adding color?',
      ['Black and white printing is cheaper, so logos must work without color first', 'Color is distracting during early ideation, and the form must work without it since the logo will be used in many contexts', 'Most clients prefer to see concepts in black and white before approving color', 'Black and white automatically reveals whether the design is too complex'],
      'Color is distracting during early ideation, and the form must work without it since the logo will be used in many contexts',
      'Logos must work in black and white because they will be used in embossed, debossed, single-color, and reversed applications. A logo that only works in color is an incomplete logo. Designing in black and white first ensures the form is strong before color is added. A common mistake is designing only in color.',
      3,
    ),
    mc(
      'Following design trends in logo design is generally cautioned against because:',
      ['Trending designs are usually created by inexperienced designers', 'Logos built on trends look dated within a few years as the trend passes', 'Clients rarely approve trendy designs in formal presentations', 'Trending logos are often too simple to be distinctive'],
      'Logos built on trends look dated within a few years as the trend passes',
      'The flat design trend, gradient trend, and badge-letter trend all aged poorly — logos designed in those styles now look dated. Timeless, classic design outlasts trends. Logos are long-term investments; they should be designed to remain effective for a decade or more, not just look current this year.',
      4,
    ),
    mc(
      'Logos must be created in vector format rather than raster (JPEG/PNG) because:',
      ['Vector files are smaller and load faster on websites', 'Vector graphics scale infinitely without quality loss, while raster images pixelate when enlarged', 'Raster formats do not support the color profiles required for print', 'Vector logos are automatically protected against copyright infringement'],
      'Vector graphics scale infinitely without quality loss, while raster images pixelate when enlarged',
      'A logo must scale from a tiny app icon (16×16 pixels) to a building-sized sign. Vector graphics use mathematical curves rather than pixels, so they scale to any size with perfect quality. A raster logo at small size will pixelate at large sizes. Logos created as JPEG or PNG cannot be properly scaled for all applications.',
      5,
    ),
  ],

  'social-media-graphics': [
    mc(
      'The primary behavioral context that most influences social media graphic design is:',
      ['Viewers usually see graphics in a quiet environment with full attention', 'Most social media content is seen for under three seconds during scrolling on a mobile phone', 'Viewers save graphics to look at later in detail', 'Social media graphics are usually viewed on large desktop monitors'],
      'Most social media content is seen for under three seconds during scrolling on a mobile phone',
      'The three-second scroll context shapes every design decision: the main message must communicate immediately, text must be large enough to read at scroll speed, contrast must be strong enough to stop the scroll, and complexity must be minimized. Designing for careful viewing produces graphics that are ignored.',
      1,
    ),
    mc(
      'For Instagram Stories and Reels, important content should avoid the top 150px and bottom 250px because:',
      ['These areas appear blurry due to screen curvature on mobile devices', 'Platform UI elements — profile picture, username, action icons — overlay these zones', 'Image compression is most visible at the edges of the frame', 'The algorithm crops these areas when generating thumbnails'],
      'Platform UI elements — profile picture, username, action icons — overlay these zones',
      'Instagram Stories and Reels display the creator\'s profile photo and username at the top and action icons (like, comment, share) at the bottom. Content placed in these zones will be covered by UI elements. Keeping important text and imagery in the middle safe zone ensures it remains visible.',
      2,
    ),
    mc(
      'Brand consistency across social media graphics is best achieved through:',
      ['Using as many different visual styles as possible to keep the feed varied and interesting', 'A template system with defined colors, defined typefaces, and a consistent visual approach', 'Matching the visual style of current social media trends each week', 'Using the platform\'s default fonts and colors to avoid conflicts'],
      'A template system with defined colors, defined typefaces, and a consistent visual approach',
      'Consistent visual identity allows viewers to recognize your content before reading the handle or name. Template systems — designed in Figma, Canva, or Illustrator — define the palette, typefaces, and composition approach. Consistency is not laziness; it is the discipline of visual identity.',
      3,
    ),
    mc(
      'The recommended approach for text on a social media graphic is:',
      ['Include all relevant information in the graphic to avoid requiring the viewer to read the caption', 'Use minimal, bold, essential text since the caption carries the detailed information', 'Use small, detailed text so engaged viewers can read everything', 'Avoid text entirely and rely only on imagery to communicate'],
      'Use minimal, bold, essential text since the caption carries the detailed information',
      'The graphic carries the visual message; the post caption carries the detailed information. Packing all the event details, prices, descriptions, and contact info into the graphic creates visual clutter that reads poorly at scroll speed. One message, large and clear — let the caption expand on it.',
      4,
    ),
    mc(
      'Carousel posts (multiple swipeable images) on Instagram tend to receive more engagement than single static posts because:',
      ['The algorithm artificially boosts carousel posts', 'They require viewer interaction (swiping) which counts as active engagement', 'They use less file size, loading faster on mobile connections', 'They display at larger resolution than single image posts'],
      'They require viewer interaction (swiping) which counts as active engagement',
      'Carousel posts require physical interaction — swiping — which is a stronger signal of engagement than simply stopping the scroll. They also allow expanded content (tutorials, before/after, list posts) that gives viewers a reason to swipe through multiple frames rather than moving on.',
      5,
    ),
  ],

  'print-vs-digital': [
    mc(
      'The minimum image resolution for professional print work is:',
      ['72 DPI — the same as screen resolution', '150 DPI for most applications', '300 DPI at final output size', '600 DPI to ensure maximum detail retention'],
      '300 DPI at final output size',
      'Print output has no inherent scale — it is printed at a physical size. A small image stretched to print size becomes pixelated. 300 DPI (dots per inch) at the final printed dimensions is the professional standard. An 18×24 inch poster at 300 DPI requires a 5,400×7,200 pixel image — a very large file.',
      1,
    ),
    mc(
      'CMYK is used for print design because:',
      ['It produces a wider color gamut than RGB, allowing more vivid colors on press', 'Commercial printing presses reproduce color using cyan, magenta, yellow, and black inks', 'It is the color system used by all major design software by default', 'CMYK files are smaller than RGB files, reducing printing costs'],
      'Commercial printing presses reproduce color using cyan, magenta, yellow, and black inks',
      'CMYK is a subtractive color system — inks absorb light. Commercial printing uses these four inks. The CMYK gamut is actually smaller than RGB, meaning some vivid screen colors cannot be reproduced in print. Designing for print in RGB mode and converting late can result in disappointing color shifts.',
      2,
    ),
    mc(
      'The "bleed" in a print design refers to:',
      ['Ink that bleeds through to the back of the paper', 'Background colors and images that extend 1/8" beyond the trim line to prevent white edges from imprecise cutting', 'Overprinting of ink colors that creates unintended dark areas', 'Extra ink saturation added to compensate for color shifts on press'],
      'Background colors and images that extend 1/8" beyond the trim line to prevent white edges from imprecise cutting',
      'When a printer cuts paper, the cut is not always perfectly precise. Without bleed, slight misalignment reveals a white edge at the paper\'s border. Extending background colors and images 1/8" beyond the trim line ensures that even slightly off-cuts still show full-color coverage to the edge.',
      3,
    ),
    mc(
      'On Retina / HiDPI screens, images designed at standard resolution appear:',
      ['Sharper because the higher pixel density improves rendering', 'Blurry because the display has twice or more the pixel density and needs more pixels to display crisply', 'Identical to their appearance on standard screens', 'Smaller because more pixels are packed into the same physical space'],
      'Blurry because the display has twice or more the pixel density and needs more pixels to display crisply',
      'A standard image sized for 72 PPI appears blurry on a Retina display that has 144+ PPI. To appear crisp, images need to be designed at 2x the display size (or use SVG vector graphics that scale perfectly). This is why iOS and web design work with @1x and @2x asset variants.',
      4,
    ),
    mc(
      'The fundamental difference between print and digital design workflow is:',
      ['Print uses RGB color while digital uses CMYK', 'Print is fixed once produced and requires careful pre-press review; digital is fluid, can be revised after publishing, and must accommodate variable screen sizes', 'Digital design requires more design skill than print design', 'Print design files are always larger than digital design files'],
      'Print is fixed once produced and requires careful pre-press review; digital is fluid, can be revised after publishing, and must accommodate variable screen sizes',
      'A printing mistake is expensive and irreversible — hence the importance of proofing and careful pre-press preparation. Digital design is revisable after publishing and must also adapt to different screen sizes, resolutions, and device contexts. These different constraints create different risk tolerances and review processes.',
      5,
    ),
  ],

  'design-tools-overview': [
    mc(
      'Vector graphics software (like Adobe Illustrator) is preferred for logo design because:',
      ['Vector files are compatible with all printers without any conversion', 'Vector graphics use mathematical curves that scale infinitely without quality loss', 'Vector programs have better color management than raster programs', 'Vector logos automatically avoid copyright issues'],
      'Vector graphics use mathematical curves that scale infinitely without quality loss',
      'Logos must scale from tiny (app icon) to enormous (billboard). Vector graphics use Bézier curves — mathematical descriptions of shapes — that can be scaled to any size with perfect quality. Raster graphics (pixels) pixelate when enlarged beyond their native resolution.',
      1,
    ),
    mc(
      'Figma\'s primary advantage over traditional design tools is:',
      ['It produces higher quality visual output than Illustrator or Photoshop', 'It is browser-based and collaborative — multiple people can work in the same file simultaneously', 'It is the only free professional design tool available', 'It automatically generates code for developers without any setup'],
      'It is browser-based and collaborative — multiple people can work in the same file simultaneously',
      'Figma\'s cloud-based, collaborative model fundamentally changed design workflow — teams can work in the same file in real time, stakeholders can comment directly on designs, and developers can inspect designs for measurements and CSS values without needing the source file. This is why Figma became dominant in UI/UX design.',
      2,
    ),
    mc(
      'Adobe InDesign is primarily used for:',
      ['Photo retouching and compositing', 'Creating vector logos and brand identity', 'Multi-page print layout — books, magazines, brochures, and catalogs', 'Motion graphics and animated content'],
      'Multi-page print layout — books, magazines, brochures, and catalogs',
      'InDesign handles the demands of long-form print documents: flowing text, master pages, professional print output (bleeds, crop marks, preflight checks), typographic controls, and commercial print workflows. It is not for photo editing (Photoshop) or vector illustration (Illustrator), though files from all three are often used together.',
      3,
    ),
    mc(
      'DaVinci Resolve is notable in the professional video editing landscape because:',
      ['It is exclusive to Apple hardware', 'Its free version is capable of most professional features, unlike most professional video software', 'It automatically syncs with Adobe Creative Cloud projects', 'It was the first software to support 4K video editing'],
      'Its free version is capable of most professional features, unlike most professional video software',
      'DaVinci Resolve offers color grading and video editing capabilities that rival or exceed other professional tools, and the free version includes most of these features. This contrasts with Adobe Premiere Pro (subscription) and Final Cut Pro (expensive one-time purchase), making Resolve exceptional value for professional work.',
      4,
    ),
    mc(
      'The most important "design tool" according to the principle covered in this lesson is:',
      ['Adobe Illustrator, as the universal industry standard for all design work', 'A fast computer with enough RAM to run all Adobe Creative Cloud applications', 'Your eye — design principles apply regardless of software, and understanding them matters more than software proficiency', 'A subscription to the complete Adobe Creative Cloud suite'],
      'Your eye — design principles apply regardless of software, and understanding them matters more than software proficiency',
      'The principles of design — typography, color, composition, hierarchy — apply regardless of what software you use. A designer who understands design principles can produce good work in Canva, Figma, or PowerPoint. A designer who can only operate software without understanding the principles will produce poor work in any tool.',
      5,
    ),
  ],
}
