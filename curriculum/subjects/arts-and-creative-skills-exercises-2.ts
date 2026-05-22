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

export const artsExercises2: Record<string, ExerciseDef[]> = {
  'learning-to-see': [
    mc(
      'According to Betty Edwards\'s research, the primary reason untrained people struggle to draw realistically is:',
      ['They lack the hand coordination to control a pencil precisely', 'They draw symbols and concepts they know rather than the shapes they actually observe', 'They cannot memorize the correct proportions of common objects', 'Their eyes cannot detect fine differences in shape and angle'],
      'They draw symbols and concepts they know rather than the shapes they actually observe',
      'Edwards\'s central insight is that drawing is a seeing skill, not a hand skill. Untrained people draw what they know a table or face looks like — a symbol — rather than what the actual edges and shapes look like from a specific viewpoint. Training the eye to see analytically is the core skill.',
      1,
    ),
    mc(
      'Upside-down drawing is effective as a training exercise because:',
      ['It forces the hand to move in new directions, building motor control', 'It inverts the value relationships so lights appear dark', 'Inverting the image prevents the brain from easily labeling objects, forcing analytical observation of shapes', 'It makes proportional errors more visible to the untrained eye'],
      'Inverting the image prevents the brain from easily labeling objects, forcing analytical observation of shapes',
      'When an image is upside down, the brain can no longer easily label "arm," "shoulder," or "face." You are forced to see dark curved shapes, lighter angled planes, and edges — analytical seeing rather than symbolic seeing. Results are often dramatically better than right-side-up copies from the same people.',
      2,
    ),
    mc(
      'Negative space drawing is useful for training observation because:',
      ['It is faster than drawing the positive shapes of objects', 'Drawing the shapes of air around objects bypasses the brain\'s symbolic labeling system', 'It teaches proper shading technique without the complexity of full forms', 'It is the standard professional method for beginning any observational drawing'],
      'Drawing the shapes of air around objects bypasses the brain\'s symbolic labeling system',
      'When drawing the negative space (the air between the handle and body of a mug, for example), there is no category in the brain for it — no "coffee mug air shape" symbol. This forces genuine observation and accurate recording of the actual shapes.',
      3,
    ),
    mc(
      '"Unit measuring" as a proportion-checking technique involves:',
      ['Using a ruler to measure the subject and scale dimensions proportionally onto the paper', 'Choosing one feature as a unit (often head height) and expressing all other measurements as multiples of that unit', 'Measuring angles with a protractor and transferring them to the drawing', 'Dividing the drawing surface into a grid and copying section by section'],
      'Choosing one feature as a unit (often head height) and expressing all other measurements as multiples of that unit',
      'Unit measuring is a relational measuring technique: pick one dimension (like the head height in a figure drawing), then compare every other dimension against it — how many head-heights tall is the torso? How many units wide are the shoulders? This establishes accurate proportional relationships.',
      4,
    ),
    mc(
      'Categories of objects that tend to remain "stubbornly symbolic" and require extra effort to draw analytically include:',
      ['Simple geometric forms like cubes and cylinders', 'Distant background objects with little detail', 'Eyes, mouths, hands, and foreshortened limbs', 'Smooth, reflective surfaces like glass and metal'],
      'Eyes, mouths, hands, and foreshortened limbs',
      'These are the parts we know most intimately — we have very strong pre-existing symbols for them. The solution is the same for all: switch from symbolic to analytical seeing. Instead of "eye," think "an almond-shaped dark area with a small bright reflection in the upper-left quadrant, surrounded by a white area that tapers at both ends."',
      5,
    ),
  ],

  'gesture-drawing': [
    mc(
      'The line of action in gesture drawing is best described as:',
      ['The precise outline of the figure\'s silhouette', 'The primary curve or thrust running through the entire pose that captures its main direction and energy', 'The direction the figure\'s eyes are looking', 'A horizontal line indicating the figure\'s center of gravity'],
      'The primary curve or thrust running through the entire pose that captures its main direction and energy',
      'The line of action is the most important element of gesture drawing. It might run from the top of the head through the spine into a supporting leg, or curve dramatically in a dancer\'s backbend. Drawing the line of action first gives the pose its energy — without it, even a detailed drawing feels static.',
      1,
    ),
    mc(
      'Gesture drawing is valuable primarily because it:',
      ['Produces finished, detailed drawings suitable for portfolios', 'Trains the hand to draw accurately at any speed', 'Develops the ability to identify and capture the essential movement, weight, and action of a subject quickly', 'Replaces the need for longer, more careful observation drawing'],
      'Develops the ability to identify and capture the essential movement, weight, and action of a subject quickly',
      'Gesture drawing forces you to identify what matters most about a pose — where the weight is, which direction the body twists. This "getting to the essential" skill transfers to all drawing: even in long, careful drawings, you must first establish the gesture before adding detail.',
      2,
    ),
    mc(
      'When drawing a gesture at one minute or less, what should be drawn first?',
      ['The most detailed and visually interesting area of the pose', 'The hands and feet, which are most likely to be forgotten', 'The line of action — the primary movement through the whole pose', 'The facial features and head position'],
      'The line of action — the primary movement through the whole pose',
      'In gesture drawing, the sequence matters: find the line of action, draw it first, then block in major masses. The line of action is the foundation everything else builds on. Starting with detail before establishing the gesture is the most common cause of stiff, lifeless figure drawings.',
      3,
    ),
    mc(
      'In animation and figure drawing, exaggerating the line of action is recommended because:',
      ['It is the only way to convey movement in a still image', 'Exaggeration communicates the pose\'s character more powerfully than exact replication', 'Anatomical accuracy requires exaggeration to account for foreshortening', 'It is faster than drawing the pose accurately'],
      'Exaggeration communicates the pose\'s character more powerfully than exact replication',
      'If a pose leans 15 degrees, drawing it leaning 20 makes the lean read more clearly. Animators push poses beyond what physics allows to maximize the feeling of movement. In realistic drawing, modest exaggeration of the primary action tends to make gesture drawings more successful, not less accurate.',
      4,
    ),
    mc(
      'Gesture drawing principles apply beyond human figures to:',
      ['Only organic, living subjects — not man-made objects', 'Only subjects that are literally in motion at the time of drawing', 'Animals, vehicles, landscapes, and abstract motion — any subject with a sense of direction or energy', 'Only large-scale compositions, not small sketches'],
      'Animals, vehicles, landscapes, and abstract motion — any subject with a sense of direction or energy',
      'The underlying skill — seeing essential movement and capturing it quickly — is universal. A running horse, a ship in rough water, a storm scene all have a gesture. The direction of movement, the tilt of energy, the overall thrust of a composition can be captured with gesture thinking regardless of subject.',
      5,
    ),
  ],

  'contour-drawing': [
    mc(
      'Blind contour drawing — drawing without looking at the paper — produces distorted results, but is valuable because:',
      ['The distortion itself is aesthetically interesting and worth pursuing', 'It forces the eye to genuinely trace and observe the edges of the subject rather than drawing from memory', 'It trains the hand to move at consistent speed regardless of complexity', 'It eliminates the need for erasing since imprecision is expected'],
      'It forces the eye to genuinely trace and observe the edges of the subject rather than drawing from memory',
      'The distorted result doesn\'t matter. What blind contour training does is force genuine observation — the pencil must follow the eye, and the eye is forced to slow down and actually trace each edge. Over time, this develops the eye-hand coordination and breaks the habit of drawing symbols rather than observations.',
      1,
    ),
    mc(
      'Cross-contour lines differ from outer contour (silhouette) lines in that they:',
      ['Describe the outer edge separating subject from background', 'Run across a form\'s surface to show how it curves in three dimensions', 'Are used only in abstract, non-representational drawing', 'Define interior details like folds of cloth within the silhouette'],
      'Run across a form\'s surface to show how it curves in three dimensions',
      'Cross-contour lines run across the surface of a form (like latitude lines on a globe) to show that the surface curves back and around in space. They are powerful for expressing three-dimensional form in a line drawing without any shading.',
      2,
    ),
    mc(
      'Variable line weight in a drawing means:',
      ['Using multiple different pens or pencils of different thicknesses', 'Varying the thickness of a single line in response to what it describes — thick for weight and shadow, thin for lightness and distance', 'Drawing some lines dark and others light depending on their importance', 'Alternating between thick and thin lines randomly for visual interest'],
      'Varying the thickness of a single line in response to what it describes — thick for weight and shadow, thin for lightness and distance',
      'Variable line weight carries information: thick lines suggest mass, weight, shadow, and the dark side of a form; thin lines suggest lightness, delicacy, and distance. In a figure drawing, the line under the foot (where weight presses) is often thicker than the line at the top of the head. This variation makes drawings feel three-dimensional without shading.',
      3,
    ),
    mc(
      'Hard edges and soft edges in a contour drawing correspond to:',
      ['Dark areas and light areas respectively', 'Places where one plane sharply meets another versus where a surface gradually curves away', 'Areas of high detail versus simplified background areas', 'The outer silhouette versus interior contour lines'],
      'Places where one plane sharply meets another versus where a surface gradually curves away',
      'A hard edge exists where one plane abruptly meets another (a table\'s corner, the edge of a cast shadow). A soft edge exists where one surface gradually curves away (the shadow on a sphere, the form of a cheek). In line drawing, soft edges are often better expressed through broken or fading lines — or no line at all.',
      4,
    ),
    mc(
      'The most common contour drawing mistake is:',
      ['Using too much pressure on the pencil, causing dark marks', 'Drawing the outline of the concept rather than the observed edges', 'Drawing too slowly and losing the gesture of the pose', 'Focusing on negative space instead of the positive form'],
      'Drawing the outline of the concept rather than the observed edges',
      'A table viewed from an angle has a top that is a trapezoid, not a rectangle — but beginners draw the rectangle because they know tables are rectangular. Drawing the observed edges (a trapezoid from this viewpoint) gives you that specific table from that specific viewpoint. Drawing the concept gives you a generic table symbol.',
      5,
    ),
  ],

  'basic-forms': [
    mc(
      'On a sphere lit from one side, the core shadow is located:',
      ['At the very edge of the sphere, farthest from the light', 'At the bright highlight where light hits most directly', 'Slightly inside from the edge, where the surface curves most away from the light', 'Evenly distributed across the entire shadow side'],
      'Slightly inside from the edge, where the surface curves most away from the light',
      'The core shadow is the darkest value on the sphere, but it is not at the edge. The edge receives reflected light from nearby surfaces, making it lighter than the core shadow. Making the shadow darkest at the very edge is the most common mistake and flattens the form.',
      1,
    ),
    mc(
      'The key visual difference between how light falls on a sphere versus a cube is:',
      ['A sphere\'s shadow is always darker than a cube\'s shadow', 'A sphere shows gradual gradation from light to shadow; a cube shows three distinct, uniformly lit planes', 'A sphere always casts a rounder shadow; a cube casts a square shadow', 'A sphere requires more colors to render correctly than a cube'],
      'A sphere shows gradual gradation from light to shadow; a cube shows three distinct, uniformly lit planes',
      'The sphere\'s curved surface produces a continuous gradation — highlight, light, midtone, core shadow, reflected light. The cube\'s flat planes each receive light uniformly, creating three clearly distinct value zones: the light plane (brightest), the middle plane (medium), and the shadow plane (darkest). Hard edges separate the planes.',
      2,
    ),
    mc(
      'When drawing a cylinder, the ellipses at the top and bottom should:',
      ['Be identical in proportion since they represent the same circular cross-section', 'Both be drawn as circles regardless of viewing angle', 'Differ slightly — the bottom ellipse should be slightly more open (closer to a circle) than the top', 'Only appear when the cylinder is viewed from directly above'],
      'Differ slightly — the bottom ellipse should be slightly more open (closer to a circle) than the top',
      'Because you are looking at the bottom ellipse from slightly more directly above (it\'s farther from your eye level), it should appear slightly more circular than the top ellipse. This subtle difference is often ignored, making cylinders look wrong. The proportion of both ellipses is determined by the viewing angle.',
      3,
    ),
    mc(
      'Why is understanding basic forms (sphere, cube, cylinder) foundational to drawing complex objects?',
      ['Basic forms are the only shapes used in technical illustration', 'Complex objects can be broken down into combinations of basic forms, making them easier to construct and understand', 'Basic forms do not require perspective knowledge to draw correctly', 'Mastering basic forms eliminates the need for observational drawing practice'],
      'Complex objects can be broken down into combinations of basic forms, making them easier to construct and understand',
      'A human face is a collection of spheres and curved planes. A car is a series of boxes with cylinders for wheels. When you look at a hand and think "four cylinders connected to a flattened box with another smaller cylinder," drawing it becomes less daunting. Basic forms provide the structural vocabulary for all complex subjects.',
      4,
    ),
    mc(
      'Reflected light within the shadow area of an object should be:',
      ['As bright as the highlight to show strong environmental light', 'The darkest value in the shadow to anchor the form', 'Lighter than the core shadow, but always darker than any area in direct light', 'Absent in realistic drawing — it only appears in stylized illustration'],
      'Lighter than the core shadow, but always darker than any area in direct light',
      'Reflected light (light bounced back into the shadow from nearby surfaces) is lighter than the core shadow, which is why it gives a sense of roundness at the shadow\'s edge. However, it must stay darker than any directly lit area — beginners who make it too bright collapse the shadow and flatten the form.',
      5,
    ),
  ],

  'shading-and-light': [
    mc(
      'Hatching as a shading technique produces darker values by:',
      ['Pressing harder on the pencil', 'Drawing parallel lines closer together', 'Using a softer pencil grade', 'Blending the marks with a finger'],
      'Drawing parallel lines closer together',
      'In hatching, value is controlled by the spacing between parallel lines — closer lines create denser, darker areas; wider spacing creates lighter areas. This allows building value through mark density rather than pressure, giving the artist more control and the drawing more texture.',
      1,
    ),
    mc(
      'The recommended sequence when building value in a shading drawing is:',
      ['Start with the darkest darks to anchor the value scale, then fill in lighter values', 'Work from light to dark — start with the lightest marks and add progressively darker ones', 'Apply all midtones first, then add lights and darks simultaneously', 'Begin with the cast shadow, then work through reflected light, core shadow, and highlight'],
      'Work from light to dark — start with the lightest marks and add progressively darker ones',
      'Building from light to dark is easier because it\'s easier to add than to erase. Dark marks made too early are hard to control and impossible to erase cleanly. Starting light allows progressive refinement. (Note: in charcoal, an eraser can be used as a mark-making tool to lift lights, offering more flexibility.)',
      2,
    ),
    mc(
      'Squinting at a drawing while shading is useful because:',
      ['It reduces eye strain during long drawing sessions', 'Squinting blurs detail and reduces visual information to value relationships, making it easier to compare relative values accurately', 'It makes small errors in proportion more visible', 'It helps the artist see color temperature differences in the shading'],
      'Squinting blurs detail and reduces visual information to value relationships, making it easier to compare relative values accurately',
      'When you squint, the detailed information in the scene disappears and you see only the broad light and dark masses. This lets you compare your drawing\'s value structure to the subject\'s without being distracted by edges, textures, or local color variation.',
      3,
    ),
    mc(
      'Cross-hatching, compared to simple hatching, allows:',
      ['Creating gradients without any visible marks', 'Faster coverage of large areas with a single stroke', 'Building up darker values through layering lines at angles rather than pressing harder', 'Representing texture on smooth, polished surfaces'],
      'Building up darker values through layering lines at angles rather than pressing harder',
      'Cross-hatching adds a second (and more) layer of lines crossing the first at angles. More layers equal darker value. This allows building up very dark values through accumulation rather than pressing hard, which gives the artist more control and produces a characteristic precise, deliberate quality.',
      4,
    ),
    mc(
      'A "lost edge" in shading refers to:',
      ['An edge that was accidentally erased during the drawing process', 'An edge where the form disappears into shadow or merges with the background', 'An outer contour line that is drawn too lightly to see', 'A perspective line that converges beyond the edges of the drawing surface'],
      'An edge where the form disappears into shadow or merges with the background',
      'Lost edges are intentional — letting a form merge into its surroundings gives a sense of the form extending beyond the picture, creates softness and atmosphere, and prevents a mechanical appearance. Varying between hard edges (which advance) and lost edges (which recede) creates depth in a shaded drawing.',
      5,
    ),
  ],

  'perspective': [
    mc(
      'The horizon line in perspective drawing represents:',
      ['The boundary between sky and land in a landscape drawing', 'The viewer\'s eye level — the line at which all vanishing points sit', 'The furthest visible point in the scene', 'The midpoint of the drawing surface regardless of the viewer\'s position'],
      'The viewer\'s eye level — the line at which all vanishing points sit',
      'The horizon line is at the viewer\'s eye level and moves with the viewer — crouch down and it drops; stand on a hill and it rises. All vanishing points in a scene sit on this horizon line. This is not just a visible line between sky and earth; it is the fundamental spatial reference of all perspective drawing.',
      1,
    ),
    mc(
      'One-point perspective is most appropriate when:',
      ['You are looking at an object from an angle where two sides are visible', 'You are looking directly at the front face of an object, with no sides visible at an angle', 'You are viewing a very tall building from far below', 'You are drawing an aerial view from directly above'],
      'You are looking directly at the front face of an object, with no sides visible at an angle',
      'One-point perspective applies when the front face of the object is parallel to the picture plane — you\'re looking straight at it. Long corridors, roads leading away, and train tracks stretching into the distance are classic one-point perspective situations. As soon as you see two faces of an object at an angle, you need two-point perspective.',
      2,
    ),
    mc(
      'In two-point perspective, placing the vanishing points very close together creates:',
      ['A more natural, undistorted sense of space', 'An extreme, fish-eye or exaggerated sense of perspective', 'Better accuracy in depicting interior spaces', 'The correct perspective for objects viewed at eye level'],
      'An extreme, fish-eye or exaggerated sense of perspective',
      'The distance between vanishing points determines how dramatic the perspective looks. Very close vanishing points produce a dramatic, distorted fish-eye effect. For most natural-looking perspective, vanishing points should be at or outside the edges of the drawing — even off the paper entirely.',
      3,
    ),
    mc(
      'In one-point and two-point perspective, vertical lines in the scene should be drawn:',
      ['Converging toward a third vanishing point above or below the horizon', 'Truly vertical — perfectly perpendicular to the horizon line', 'Slightly angled to suggest the natural lean of objects under gravity', 'Converging toward the primary vanishing point along with horizontal lines'],
      'Truly vertical — perfectly perpendicular to the horizon line',
      'In one-point and two-point perspective, all vertical lines remain truly vertical. Three-point perspective is used only when there is dramatic vertical convergence — like looking up at a very tall building or viewing from above. Even a slight lean in vertical lines looks obviously wrong.',
      4,
    ),
    mc(
      'A common perspective error is making horizontal lines slightly angled without following them all the way to the vanishing point. The sign this is happening in your drawing is:',
      ['Vertical lines appear to lean outward', 'Horizontal edges of the same face converge to different points rather than the same vanishing point', 'The cast shadows fall in the wrong direction', 'Objects appear too large in the foreground and too small in the background'],
      'Horizontal edges of the same face converge to different points rather than the same vanishing point',
      'All horizontal edges on the same face of an object must converge to the same vanishing point. When drawn freehand without checking, lines drift slightly and converge to different points — creating subtle but visually wrong inconsistency. Using a ruler to test lines is the fix: do all the edges on this face actually converge to one point?',
      5,
    ),
  ],

  'drawing-from-observation': [
    mc(
      'A primary advantage of drawing from life (three-dimensional objects) over drawing from photographs is:',
      ['Photographs are too high-resolution for beginners to work from accurately', 'Life drawing provides direct access to three-dimensional form; photographs have already flattened and processed the scene', 'Photographs cannot be used as reference for learning proportion', 'Life drawing is always faster than working from photographic reference'],
      'Life drawing provides direct access to three-dimensional form; photographs have already flattened and processed the scene',
      'Drawing from a photograph means translating a translation — a version of reality that\'s already flattened, cropped, and processed by a camera sensor. Drawing from a real object gives direct access to the three-dimensional form, and the way light actually behaves on form, which cameras compress and distort.',
      1,
    ),
    mc(
      'When setting up a still life for observation drawing, a single, clear light source is preferred because:',
      ['It makes the still life more aesthetically pleasing to look at', 'It creates clear shadows and defined forms that are easier to understand and draw than diffuse ambient light', 'Multiple light sources confuse the camera when photographing the setup', 'A single light source is required by classical drawing tradition'],
      'It creates clear shadows and defined forms that are easier to understand and draw than diffuse ambient light',
      'A single lamp creates clear, predictable shadows and defined light and shadow zones — easy to understand and draw. Diffuse ambient light (from an overcast sky through a window, for example) flattens form and blurs shadows, making value relationships harder to see and render.',
      2,
    ),
    mc(
      'The recommended ratio when drawing from observation — how much time to spend looking at the subject versus looking at the drawing — is approximately:',
      ['50% looking at the subject, 50% looking at the drawing', '70% looking at the subject, 30% looking at the drawing', '30% looking at the subject, 70% looking at the drawing', '90% looking at the subject, 10% looking at the drawing'],
      '70% looking at the subject, 30% looking at the drawing',
      'Constant comparison is the discipline of observation drawing. The information is in the subject, not on your paper — you can only draw accurately what you have recently seen. Spending most of your time looking at the subject (roughly 70%) and regularly comparing it to the drawing (roughly 30%) produces accurate work.',
      3,
    ),
    mc(
      'Flipping a drawing upside down is useful for checking because:',
      ['It reveals value errors by reversing the tonal range', 'Errors in proportion become obvious when orientation is reversed and the brain stops compensating for expected forms', 'It helps the artist see line quality problems more easily', 'It is a standard method for checking perspective accuracy'],
      'Errors in proportion become obvious when orientation is reversed and the brain stops compensating for expected forms',
      'Familiarity makes us blind to errors — we correct what we see to match what we expect. Flipping the drawing upside down defeats this compensation: the brain stops seeing "a face" and starts seeing shapes, making proportion errors immediately visible.',
      4,
    ),
    mc(
      'In observation drawing, the principle of working "from general to specific" means:',
      ['Drawing the background before the foreground', 'Starting with a light sketch of overall proportions and major shapes, then progressively adding information and detail', 'Beginning with the most interesting part and adding less interesting areas later', 'Drawing the largest objects first and the smallest objects last'],
      'Starting with a light sketch of overall proportions and major shapes, then progressively adding information and detail',
      'The first marks establish the overall proportions and placement. Subsequent marks add information about forms, values, and mid-level details. The final marks are the most specific — edges, textures, finest details. Jumping to detail before establishing general structure results in drawings with accurate details but wrong overall proportions.',
      5,
    ),
  ],
}
