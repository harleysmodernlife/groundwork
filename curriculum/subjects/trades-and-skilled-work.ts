import type { SubjectDef } from '../types'

const tradesAndSkilledWork: SubjectDef = {
  slug: 'trades-and-skilled-work',
  name: 'Trades & Skilled Work',
  description: 'The hands-on skills that keep the world running — electrical, plumbing, HVAC, carpentry, automotive, and more. High demand, good pay, and you can start learning today.',
  icon: '🔧',
  order: 5,
  courses: [
    {
      slug: 'electrical-fundamentals',
      name: 'Electrical Fundamentals',
      description: 'How electricity works, how residential electrical systems are wired, and the safety basics every electrician and homeowner needs.',
      order: 1,
      estimatedHours: 5,
      modules: [
        {
          slug: 'electricity-basics',
          name: 'How Electricity Works',
          order: 1,
          lessons: [
            { slug: 'voltage-current-resistance', name: 'Voltage, Current, and Resistance (Ohm\'s Law)', order: 1 },
            { slug: 'ac-vs-dc', name: 'AC vs DC Power', order: 2 },
            { slug: 'electrical-safety', name: 'Electrical Safety: The Non-Negotiables', order: 3 },
          ],
        },
        {
          slug: 'residential-wiring',
          name: 'Residential Electrical Systems',
          order: 2,
          lessons: [
            { slug: 'reading-an-electrical-panel', name: 'Reading a Service Panel and Circuit Breakers', order: 1 },
            { slug: 'wiring-basics', name: 'Wire Types, Gauges, and Color Codes', order: 2 },
            { slug: 'outlets-and-switches', name: 'Outlets, Switches, and Basic Circuits', order: 3 },
            { slug: 'gfci-and-afci', name: 'GFCI and AFCI Protection', order: 4 },
          ],
        },
        {
          slug: 'electrical-tools-and-code',
          name: 'Tools and Code',
          order: 3,
          lessons: [
            { slug: 'electrical-tools', name: 'Essential Electrical Tools', order: 1 },
            { slug: 'nec-basics', name: 'The National Electrical Code: What It Is and Why It Matters', order: 2 },
            { slug: 'permits-and-inspections', name: 'Permits and Inspections', order: 3 },
          ],
        },
      ],
    },
    {
      slug: 'plumbing-basics',
      name: 'Plumbing Basics',
      description: 'How water systems work in a building, common repairs, and the fundamentals of residential plumbing.',
      order: 2,
      estimatedHours: 4,
      modules: [
        {
          slug: 'plumbing-systems',
          name: 'How Plumbing Systems Work',
          order: 1,
          lessons: [
            { slug: 'supply-and-drain', name: 'Supply Lines and Drain Systems', order: 1 },
            { slug: 'water-pressure', name: 'Water Pressure and How to Measure It', order: 2 },
            { slug: 'pipe-materials', name: 'Pipe Materials: Copper, PVC, PEX, and More', order: 3 },
          ],
        },
        {
          slug: 'common-plumbing-repairs',
          name: 'Common Repairs',
          order: 2,
          lessons: [
            { slug: 'fixing-a-leak', name: 'Finding and Fixing Leaks', order: 1 },
            { slug: 'toilets-and-faucets', name: 'Toilets and Faucets: Most Common Repairs', order: 2 },
            { slug: 'water-heaters', name: 'Water Heaters: Maintenance and Basics', order: 3 },
            { slug: 'drain-clogs', name: 'Clearing Clogs Without Wrecking the Pipes', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'hvac-fundamentals',
      name: 'HVAC Fundamentals',
      description: 'How heating, ventilation, and air conditioning systems work — one of the most in-demand trades in the country.',
      order: 3,
      estimatedHours: 5,
      modules: [
        {
          slug: 'hvac-systems',
          name: 'How HVAC Systems Work',
          order: 1,
          lessons: [
            { slug: 'heating-systems', name: 'Heating Systems: Furnaces, Boilers, and Heat Pumps', order: 1 },
            { slug: 'cooling-systems', name: 'Cooling Systems: How Air Conditioners Work', order: 2 },
            { slug: 'ventilation-and-air-quality', name: 'Ventilation and Indoor Air Quality', order: 3 },
            { slug: 'thermostats-and-controls', name: 'Thermostats and System Controls', order: 4 },
          ],
        },
        {
          slug: 'hvac-maintenance',
          name: 'Maintenance and Troubleshooting',
          order: 2,
          lessons: [
            { slug: 'preventive-maintenance', name: 'Preventive Maintenance: What to Do and When', order: 1 },
            { slug: 'refrigerants', name: 'Refrigerants: Types, Regulations, and Safety', order: 2 },
            { slug: 'troubleshooting-basics', name: 'Diagnosing Common HVAC Problems', order: 3 },
            { slug: 'hvac-tools', name: 'Essential HVAC Tools and Test Equipment', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'carpentry-and-woodworking',
      name: 'Carpentry & Woodworking',
      description: 'Wood, tools, joinery, and construction — from rough framing to finish carpentry.',
      order: 4,
      estimatedHours: 5,
      modules: [
        {
          slug: 'wood-and-materials',
          name: 'Wood and Materials',
          order: 1,
          lessons: [
            { slug: 'types-of-wood', name: 'Lumber, Plywood, and Engineered Wood Products', order: 1 },
            { slug: 'reading-a-tape-measure', name: 'Measuring and Layout', order: 2 },
            { slug: 'hand-tools', name: 'Hand Tools Every Carpenter Uses', order: 3 },
            { slug: 'power-tools', name: 'Power Tools: Safe Use and Applications', order: 4 },
          ],
        },
        {
          slug: 'carpentry-skills',
          name: 'Core Carpentry Skills',
          order: 2,
          lessons: [
            { slug: 'cutting-techniques', name: 'Cutting Techniques and Saw Selection', order: 1 },
            { slug: 'joinery-basics', name: 'Joinery: How Wood Comes Together', order: 2 },
            { slug: 'framing-basics', name: 'Rough Framing Basics', order: 3 },
            { slug: 'finish-carpentry', name: 'Finish Carpentry: Trim, Doors, and Cabinets', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'automotive-basics',
      name: 'Automotive Basics',
      description: 'How a car works, how to maintain it, and how to diagnose what\'s wrong before you pay someone else to tell you.',
      order: 5,
      estimatedHours: 4,
      modules: [
        {
          slug: 'how-cars-work',
          name: 'How Cars Work',
          order: 1,
          lessons: [
            { slug: 'the-engine', name: 'The Internal Combustion Engine', order: 1 },
            { slug: 'drivetrain', name: 'Drivetrain: Transmission, Axles, and Wheels', order: 2 },
            { slug: 'electrical-systems', name: 'Automotive Electrical Systems', order: 3 },
            { slug: 'brakes-and-suspension', name: 'Brakes and Suspension', order: 4 },
          ],
        },
        {
          slug: 'automotive-maintenance',
          name: 'Maintenance and Diagnosis',
          order: 2,
          lessons: [
            { slug: 'routine-maintenance', name: 'Routine Maintenance: What, When, and Why', order: 1 },
            { slug: 'reading-error-codes', name: 'Reading OBD-II Error Codes', order: 2 },
            { slug: 'common-repairs', name: 'Common Repairs You Can Do Yourself', order: 3 },
            { slug: 'when-to-take-it-in', name: 'When to Go to a Shop — and How Not to Get Ripped Off', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'welding-fundamentals',
      name: 'Welding Fundamentals',
      description: 'The basics of welding — processes, safety, equipment, and the skills that make a competent entry-level welder.',
      order: 6,
      estimatedHours: 4,
      modules: [
        {
          slug: 'welding-processes',
          name: 'Welding Processes',
          order: 1,
          lessons: [
            { slug: 'mig-welding', name: 'MIG Welding: The Most Common Starting Point', order: 1 },
            { slug: 'stick-welding', name: 'Stick Welding (SMAW)', order: 2 },
            { slug: 'tig-welding', name: 'TIG Welding: Precision Work', order: 3 },
            { slug: 'choosing-a-process', name: 'Choosing the Right Process for the Job', order: 4 },
          ],
        },
        {
          slug: 'welding-safety-and-skills',
          name: 'Safety and Core Skills',
          order: 2,
          lessons: [
            { slug: 'welding-safety', name: 'Welding Safety: Fumes, Fire, and Protective Gear', order: 1 },
            { slug: 'reading-a-weld', name: 'Reading a Weld: What Good and Bad Welds Look Like', order: 2 },
            { slug: 'metals-and-prep', name: 'Metals and Joint Preparation', order: 3 },
          ],
        },
      ],
    },
    {
      slug: 'masonry-and-concrete',
      name: 'Masonry & Concrete Work',
      description: 'Concrete, block, brick, and stone — the fundamentals of masonry work used in construction and repair.',
      order: 7,
      estimatedHours: 3,
      modules: [
        {
          slug: 'concrete-basics',
          name: 'Concrete',
          order: 1,
          lessons: [
            { slug: 'how-concrete-works', name: 'How Concrete Works: Mix Design and Curing', order: 1 },
            { slug: 'forming-and-pouring', name: 'Forming and Pouring Concrete', order: 2 },
            { slug: 'concrete-finishing', name: 'Finishing and Sealing', order: 3 },
          ],
        },
        {
          slug: 'brick-and-block',
          name: 'Brick and Block',
          order: 2,
          lessons: [
            { slug: 'mortar-and-mixing', name: 'Mortar: Types, Mixing, and Application', order: 1 },
            { slug: 'laying-brick', name: 'Laying Brick and Block', order: 2 },
            { slug: 'masonry-repair', name: 'Tuckpointing and Masonry Repair', order: 3 },
          ],
        },
      ],
    },
  ],
}

export default tradesAndSkilledWork
