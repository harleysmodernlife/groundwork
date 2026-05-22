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

export const artsExercises1: Record<string, ExerciseDef[]> = {
  'line-and-shape': [
    mc(
      'Which type of line is described as "invisible" — created by the arrangement of elements rather than any actual drawn mark?',
      ['Contour line', 'Implied line', 'Gesture line', 'Cross-contour line'],
      'Implied line',
      'Implied lines are not drawn; they are created by the way elements are arranged. Three dots at equal intervals create an implied line between them, and multiple objects pointing the same direction create an implied line the eye follows.',
      1,
    ),
    mc(
      'What is the key difference between a shape and a form in visual art?',
      ['Shapes use curved lines; forms use straight lines', 'Shapes are flat (two-dimensional); forms have the illusion of depth (three-dimensional)', 'Shapes are geometric; forms are organic', 'Shapes are drawn with outlines; forms are drawn with shading only'],
      'Shapes are flat (two-dimensional); forms have the illusion of depth (three-dimensional)',
      'A shape is a closed, flat area — a circle or a square. A form is its three-dimensional counterpart — a sphere or a cube. In drawing, form is an illusion created through shading, value, and perspective on a flat surface.',
      2,
    ),
    mc(
      'Negative space in a composition is best defined as:',
      ['The dark shadows cast by objects', 'The shapes of the areas around and between objects', 'The background color of a painting', 'The area outside the frame of a drawing'],
      'The shapes of the areas around and between objects',
      'Negative space is the space where things aren\'t — the shapes formed by the gaps and surroundings of the subject. Skilled artists treat negative space as real shapes with their own form, not as empty voids.',
      3,
    ),
    mc(
      'Diagonal lines in a composition tend to suggest:',
      ['Calm and stability', 'Strength and height', 'Motion, tension, and instability', 'Natural, organic feeling'],
      'Motion, tension, and instability',
      'Diagonal lines imply something in the act of falling or rising, creating a sense of movement and dynamic tension. Horizontal lines suggest calm (a horizon), vertical lines suggest strength (a column), and diagonal lines suggest energy and instability.',
      4,
    ),
    mc(
      'The basic forms that underlie all complex objects in drawing are:',
      ['Rectangle, oval, and triangle', 'Sphere, cube, cylinder, cone, and pyramid', 'Circle, square, and pentagon', 'Prism, dome, and arch'],
      'Sphere, cube, cylinder, cone, and pyramid',
      'Mastering these five basic forms — how they receive light, cast shadow, and sit in space — is foundational to drawing anything. A human face is a collection of spheres and curved planes; a building is made of cubes and cylinders.',
      5,
    ),
  ],

  'color-theory': [
    mc(
      'In traditional pigment color theory, which colors are the primary colors?',
      ['Red, green, and blue', 'Cyan, magenta, and yellow', 'Red, yellow, and blue', 'Orange, green, and violet'],
      'Red, yellow, and blue',
      'In traditional pigment (subtractive) color theory, red, yellow, and blue are the primaries — they cannot be mixed from other colors. Note that screens use RGB (red, green, blue) as primaries because light mixes additively.',
      1,
    ),
    mc(
      'When complementary colors are mixed together as pigments, the result is:',
      ['A brighter, more saturated version of both colors', 'Neutral grays and browns', 'The secondary color between them on the color wheel', 'Pure white'],
      'Neutral grays and browns',
      'Complementary colors are opposite each other on the color wheel. When mixed as pigments they cancel each other out, producing neutral grays and browns. This is how artists mix subtle neutrals without using tube black.',
      2,
    ),
    mc(
      'The three measurable properties of any color are:',
      ['Primary, secondary, and tertiary', 'Warm, cool, and neutral', 'Hue, value, and saturation', 'Tint, shade, and tone'],
      'Hue, value, and saturation',
      'Hue is the color itself (red, blue, green). Value is the lightness or darkness of the color. Saturation (chroma) is the intensity or purity — a highly saturated red is vivid; a desaturated red is muted and grayish.',
      3,
    ),
    mc(
      'An analogous color palette consists of:',
      ['Colors directly opposite each other on the color wheel', 'Three colors equally spaced 120 degrees apart', 'Colors adjacent to each other on the color wheel', 'One hue used in various tints and shades'],
      'Colors adjacent to each other on the color wheel',
      'Analogous colors — two to four colors in a row on the color wheel — produce harmony and cohesion. They feel natural because they appear often in nature (the colors of a sunset or autumn leaves). Their limitation is potential monotony without added variety.',
      4,
    ),
    mc(
      'Warm colors (red, orange, yellow) appear to advance in a painting, while cool colors (blue, green, violet) appear to recede. This property is most useful for:',
      ['Creating color harmony within a limited palette', 'Suggesting depth and atmospheric perspective in a flat painting', 'Identifying complementary color pairs', 'Mixing neutral grays and browns'],
      'Suggesting depth and atmospheric perspective in a flat painting',
      'The warm/cool relationship is one of the most important tools for creating the illusion of depth. Objects in the foreground tend to have warmer light; distant objects appear cooler and more blue-gray due to atmospheric perspective (the atmosphere scattering light).',
      5,
    ),
  ],

  'value-and-contrast': [
    mc(
      'In the zones of light on a three-dimensional form, the core shadow is located:',
      ['At the very edge of the object', 'Where light hits the surface most directly', 'Slightly inside the shadow\'s edge, where the surface curves furthest from the light', 'In the cast shadow on the ground'],
      'Slightly inside the shadow\'s edge, where the surface curves furthest from the light',
      'The core shadow is the darkest value on the object itself. It is not at the edge — the edge often receives reflected light from nearby surfaces, making it slightly lighter than the core shadow. Beginners who make the edge darkest flatten the sense of form.',
      1,
    ),
    mc(
      'The law of simultaneous contrast states that:',
      ['Equal amounts of complementary colors always neutralize each other', 'A value always appears the same regardless of the values surrounding it', 'The same gray appears lighter against black and darker against white', 'High-contrast compositions always feel more dramatic than low-contrast ones'],
      'The same gray appears lighter against black and darker against white',
      'The eye reads value relative to its surroundings, not as an absolute. A gray square looks lighter when surrounded by black than when surrounded by white. This is why artists squint at their work — squinting helps them see values more accurately without being fooled by local variation.',
      2,
    ),
    mc(
      'Atmospheric (aerial) perspective creates the illusion of depth by making distant objects:',
      ['Darker in value and higher in contrast than foreground objects', 'Lighter in value, lower in contrast, and cooler in color than foreground objects', 'Sharper in edge quality and more detailed than nearby objects', 'Warmer in color and more saturated than nearby objects'],
      'Lighter in value, lower in contrast, and cooler in color than foreground objects',
      'The atmosphere between the viewer and distant objects scatters light, making darks lighter and reducing the value range. Mountains in the background appear as pale, cool gray-blue; grass in the foreground is dark and vivid. This consistent principle creates strong depth cues in landscape painting.',
      3,
    ),
    mc(
      'A "high key" value scheme in a painting refers to:',
      ['A composition with the full range from white to black', 'A composition predominantly made up of light values', 'A composition with very high contrast between lights and darks', 'A composition concentrated in the midtones'],
      'A composition predominantly made up of light values',
      'High key means most values are in the lighter range of the scale — airy, delicate, and often optimistic in feeling. Impressionist landscapes of sunlit days are often high key. Low key is the opposite: predominantly dark values with a somber, dramatic quality.',
      4,
    ),
    mc(
      'In graphic design, WCAG accessibility guidelines specify minimum contrast ratios for text primarily to:',
      ['Ensure text colors match the brand palette', 'Make text readable for users with visual impairments or color blindness', 'Limit the number of colors used on a page', 'Prevent designers from using dark backgrounds'],
      'Make text readable for users with visual impairments or color blindness',
      'The WCAG specifies 4.5:1 minimum contrast ratio for normal text and 3:1 for large text. High contrast between text and background is a readability requirement that serves people with low vision, color blindness, and anyone reading in challenging conditions like bright sunlight.',
      5,
    ),
  ],

  'texture-and-space': [
    mc(
      'What is the difference between actual texture and implied texture in visual art?',
      ['Actual texture is smooth; implied texture is rough', 'Actual texture is the physical surface quality of the artwork; implied texture is the illusion of surface quality in a flat image', 'Actual texture is created with paint; implied texture is created with pencil', 'Actual texture appears in abstract art; implied texture appears in realistic art'],
      'Actual texture is the physical surface quality of the artwork; implied texture is the illusion of surface quality in a flat image',
      'Actual texture can be felt by touch — the thick impasto of oil paint, the grain of paper. Implied texture is what an artist creates on a flat surface through marks that suggest how a surface feels — the viewer perceives the texture of rough stone or smooth glass even though the paper is flat.',
      1,
    ),
    mc(
      'In creating implied texture, stippling refers to:',
      ['Parallel lines drawn close together to create value', 'Random circular marks that build up a rough texture', 'Lines crossing at angles to build dense dark areas', 'Dots of varying density — dense clusters for dark areas, sparse for light'],
      'Dots of varying density — dense clusters for dark areas, sparse for light',
      'Stippling creates value and texture through point marks rather than lines. It is controlled and time-intensive, common in pen-and-ink illustration and scientific illustration. Dense clusters of dots create dark values; sparse dots create light values.',
      2,
    ),
    mc(
      'Which technique for creating the illusion of depth relies on the fact that objects farther away appear smaller?',
      ['Overlapping', 'Size', 'Atmospheric perspective', 'Value contrast'],
      'Size',
      'Size is one of the primary depth cues: objects farther away appear smaller. Making the same object smaller within the composition makes it read as more distant. This is distinct from atmospheric perspective (which involves value and color changes) or overlapping (which indicates which object is in front).',
      3,
    ),
    mc(
      'In landscape composition, the foreground is typically characterized by:',
      ['Lightest values, lowest contrast, and simplest forms', 'Coolest colors, softest edges, and least detail', 'Darkest values, strongest contrast, most detail, and largest forms', 'Neutral colors and middle values throughout'],
      'Darkest values, strongest contrast, most detail, and largest forms',
      'The foreground is closest to the viewer and shows the strongest visual characteristics: dark values, high contrast, rich detail, and large forms. The background, by contrast, has the lightest values, lowest contrast, and simplest forms due to atmospheric perspective.',
      4,
    ),
    mc(
      'Overlapping as a depth cue works because:',
      ['Overlapping objects appear lighter in value than non-overlapping ones', 'An object that overlaps another appears to be in front of it', 'Overlapping creates implied texture between the two objects', 'Objects that overlap appear to be the same distance from the viewer'],
      'An object that overlaps another appears to be in front of it',
      'Overlapping is one of the simplest and most effective depth cues. When one object partially covers another, the viewer immediately understands the spatial relationship — the covering object is closer. This is a monocular depth cue that works even without any value or size differences.',
      5,
    ),
  ],

  'composition': [
    mc(
      'The Rule of Thirds works as a compositional guideline primarily because:',
      ['It ensures the subject is always perfectly centered in the frame', 'Off-center placement creates tension and dynamism compared to static centered compositions', 'It divides the frame into equal quarters for balanced weight distribution', 'It guarantees the golden ratio is achieved in every composition'],
      'Off-center placement creates tension and dynamism compared to static centered compositions',
      'A centered subject feels static and formal. Placing elements along the thirds-grid lines or at the four "power points" (intersections) creates visual tension and allows the eye room to move. The rule of thirds is a quick formula for getting elements off-center in a balanced way.',
      1,
    ),
    mc(
      'Leading lines in a composition are most effective when:',
      ['They run parallel to the frame edges', 'They start near a corner or edge of the frame and lead inward toward the focal point', 'They cross each other to create a complex visual pattern', 'They are vertical lines pointing toward the sky'],
      'They start near a corner or edge of the frame and lead inward toward the focal point',
      'The eye enters the frame at the edge or corner and follows the leading line to the subject. Lines that lead out of the frame or away from the subject pull the eye away, which is a compositional problem to be aware of and correct.',
      2,
    ),
    mc(
      'Asymmetrical balance in a composition achieves balance by:',
      ['Mirroring elements exactly on both sides of a central axis', 'Using different visual weights on each side that still balance each other out', 'Ensuring all elements are the same size and color', 'Placing all elements in the center of the frame'],
      'Using different visual weights on each side that still balance each other out',
      'Asymmetrical balance places different elements — a large simple shape on one side balanced by a small complex one on the other, for example — that create visual equilibrium without mirroring. It is more dynamic and interesting than symmetry, but harder to achieve deliberately.',
      3,
    ),
    mc(
      'Natural framing (using elements in the scene to frame the subject) serves two purposes: it focuses attention and:',
      ['Eliminates the need for leading lines', 'Adds depth and context by placing the framing element closer to the camera than the subject', 'Ensures perfect symmetrical balance in the composition', 'Removes all negative space from the image'],
      'Adds depth and context by placing the framing element closer to the camera than the subject',
      'Natural framing — using a doorway, tree branches, or an archway to frame the subject — corrals the viewer\'s eye toward the subject AND adds a sense of depth through layering. The framing element in the foreground and the subject deeper in the frame creates spatial relationships.',
      4,
    ),
    mc(
      'The golden ratio (approximately 1:1.618) is often described in relation to composition as:',
      ['A strict rule that all professional artists must follow', 'A useful real-time tool that is faster and more precise than the rule of thirds', 'A proportion appearing in nature often used retroactively to explain why compositions feel right, producing similar results to the rule of thirds', 'The only mathematically correct way to place a subject in a frame'],
      'A proportion appearing in nature often used retroactively to explain why compositions feel right, producing similar results to the rule of thirds',
      'The golden ratio appears throughout nature and art history, and the Fibonacci spiral is used by some artists for composition. In practice, the golden ratio and rule of thirds produce similar results. The mathematical precision of the golden ratio is often used after the fact to explain why a composition works, more than as a real-time tool.',
      5,
    ),
  ],

  'balance-and-rhythm': [
    mc(
      'Which factor increases an element\'s visual weight in a composition?',
      ['Being lighter in value than surrounding elements', 'Being placed in the center of the frame', 'Being isolated, dark, large, or complex relative to its surroundings', 'Using cool colors rather than warm colors'],
      'Being isolated, dark, large, or complex relative to its surroundings',
      'Visual weight is how much attention an element demands. It increases with size, darkness, isolation (surrounded by space), complexity, warm color temperature, and placement at the frame\'s edges or top. Knowing these factors lets you adjust composition deliberately.',
      1,
    ),
    mc(
      'Radial balance organizes elements:',
      ['In rows and columns like a grid', 'As mirror images on either side of a central axis', 'Around a central point, like spokes on a wheel', 'In a sequence that builds from small to large'],
      'Around a central point, like spokes on a wheel',
      'Radial balance places elements radiating outward from a center point. Mandalas, rose windows in cathedrals, and some graphic design use radial balance. It creates a sense of movement and wholeness — the eye naturally circles around the composition.',
      2,
    ),
    mc(
      'Visual rhythm in a composition is created by:',
      ['Using only one element repeated at perfectly even intervals', 'The repetition of visual elements — shapes, colors, lines, or textures — at regular or varied intervals', 'Balancing equal visual weights on both sides of the frame', 'Maintaining consistent line weight throughout a drawing'],
      'The repetition of visual elements — shapes, colors, lines, or textures — at regular or varied intervals',
      'Like musical rhythm organizing time through beat patterns, visual rhythm organizes space through recurring visual patterns. A row of fence posts creates regular rhythm; a flock of birds creates irregular rhythm (same element, varying scale and position). Rhythm ties a composition together and creates movement.',
      3,
    ),
    mc(
      'The most powerful tool for creating emphasis — making one element the clear focal point — is:',
      ['Placing the element at the exact center of the composition', 'Making all elements the same size', 'Contrast: light against dark, sharp against soft, saturated against desaturated', 'Using only neutral colors throughout the composition'],
      'Contrast: light against dark, sharp against soft, saturated against desaturated',
      'Contrast is the most powerful tool for emphasis. Any element that contrasts strongly with its surroundings draws the eye first. A bright light against dark surroundings, a sharp edge among soft edges, a saturated color among desaturated ones — all create immediate focal points.',
      4,
    ),
    mc(
      'Intentional imbalance in a composition (weighting heavily to one side) is most effective when:',
      ['It is the result of an oversight rather than a deliberate choice', 'It creates the right tension or emotional quality that serves the image\'s meaning', 'It ensures the viewer\'s eye stays on the subject at all times', 'It is combined with perfectly symmetrical color choices'],
      'It creates the right tension or emotional quality that serves the image\'s meaning',
      'Intentional imbalance creates tension — a sense that something is unresolved, about to change, or emotionally charged. This can be exactly right for images about instability, conflict, or emotion. The difference between intentional and unintentional imbalance is whether the effect serves the subject.',
      5,
    ),
  ],

  'unity-and-variety': [
    mc(
      'Repetition creates unity in a composition by:',
      ['Ensuring every element is unique and different from all others', 'Using the same element — color, shape, texture, or mark — more than once to create visual connections', 'Balancing visual weight equally on both sides of the frame', 'Removing all contrast from the composition'],
      'Using the same element — color, shape, texture, or mark — more than once to create visual connections',
      'Repetition is the most powerful unity tool. When the same blue appears in the sky, the water, and a shadow in the foreground, those three areas are visually connected. Repetition of color, shape, texture, or style ties disparate elements into a coherent whole.',
      1,
    ),
    mc(
      'A composition with pure variety — every element completely different from every other — typically results in:',
      ['A dynamic, exciting image with many focal points', 'Chaos — no resting point, no connections, overwhelming to the viewer', 'Maximum visual interest and engagement', 'The most effective use of contrast'],
      'Chaos — no resting point, no connections, overwhelming to the viewer',
      'Pure variety without any unifying element is chaos. There is nowhere for the eye to rest, no connections to follow, no path through the work. The viewer feels overwhelmed and disengages. This is the common failure mode of beginning compositions: too many competing elements with no repetition to tie them together.',
      2,
    ),
    mc(
      'A "limited palette" (working with only three to five colors) helps create:',
      ['Maximum variety in the color relationships', 'Color unity, because all mixed colors share component pigments from the same restricted set', 'High contrast between complementary colors', 'A wider range of value relationships'],
      'Color unity, because all mixed colors share component pigments from the same restricted set',
      'A limited palette produces inherent color unity — all the mixed colors share ingredients, so they are automatically related. Beginning artists who use too many colors often create chaotic, muddy results. A restricted palette forces color mixing and produces visual cohesion.',
      3,
    ),
    mc(
      'An "accent" in a composition refers to:',
      ['A large dominant element that fills most of the frame', 'A small area that contrasts with the dominant element, creating emphasis through difference', 'The consistent texture or mark quality throughout a work', 'The frame or border around an image'],
      'A small area that contrasts with the dominant element, creating emphasis through difference',
      'An accent is a small area of contrast against a unified background — one vivid orange among soft blues, one sharp edge in a field of soft ones. The accent works because of the dominant unity around it. A tiny red boat in a vast gray sea becomes the focal point of the entire composition.',
      4,
    ),
    mc(
      'When a composition feels chaotic and overwhelming, the recommended approach is to:',
      ['Add more variety to make it more visually interesting', 'Introduce more unity: consistent light source, dominant shape or value, related colors', 'Increase the number of elements to fill the space', 'Remove the focal point so all elements receive equal weight'],
      'Introduce more unity: consistent light source, dominant shape or value, related colors',
      'Chaos is the symptom of too many competing elements with insufficient connection. The cure is unity: establish a consistent light source, limit the color relationships, find a dominant shape or value, reduce competing focal points. Unity gives the eye a foundation from which variety can register.',
      5,
    ),
  ],
}
