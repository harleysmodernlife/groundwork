import type { SubjectDef } from '../types'

const technologyAndComputing: SubjectDef = {
  slug: 'technology-and-computing',
  name: 'Technology & Computing',
  description: 'How computers, the internet, and software actually work — and how to build things with them. The skills that determine earning power in the modern economy.',
  icon: '💻',
  order: 4,
  courses: [
    {
      slug: 'how-computers-work',
      name: 'How Computers Work',
      description: 'What\'s actually happening inside a computer — hardware, operating systems, and the fundamentals every tech-literate person should know.',
      order: 1,
      estimatedHours: 3,
      modules: [
        {
          slug: 'hardware-fundamentals',
          name: 'Hardware',
          order: 1,
          lessons: [
            { slug: 'cpu-memory-storage', name: 'CPU, Memory, and Storage: What Each Does', order: 1 },
            { slug: 'how-data-is-stored', name: 'How Data Is Stored as Bits and Bytes', order: 2 },
            { slug: 'input-output-devices', name: 'Input, Output, and Peripheral Devices', order: 3 },
          ],
        },
        {
          slug: 'software-and-os',
          name: 'Software & Operating Systems',
          order: 2,
          lessons: [
            { slug: 'what-is-an-operating-system', name: 'What an Operating System Does', order: 1 },
            { slug: 'files-and-directories', name: 'Files, Directories, and the File System', order: 2 },
            { slug: 'processes-and-memory', name: 'Processes, RAM, and Why Computers Slow Down', order: 3 },
            { slug: 'command-line-basics', name: 'The Command Line: Your First Look', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'internet-and-networking',
      name: 'The Internet & Networking',
      description: 'How the internet actually works — from your device to the server and back — and why it matters for security and privacy.',
      order: 2,
      estimatedHours: 3,
      modules: [
        {
          slug: 'how-the-internet-works',
          name: 'How the Internet Works',
          order: 1,
          lessons: [
            { slug: 'ip-addresses-and-dns', name: 'IP Addresses and DNS: The Internet\'s Address System', order: 1 },
            { slug: 'http-and-https', name: 'HTTP and HTTPS: How Web Pages Get to You', order: 2 },
            { slug: 'packets-and-routing', name: 'Packets and Routing: How Data Travels', order: 3 },
          ],
        },
        {
          slug: 'networking-basics',
          name: 'Networking Basics',
          order: 2,
          lessons: [
            { slug: 'routers-and-wifi', name: 'Routers, Wi-Fi, and Local Networks', order: 1 },
            { slug: 'ports-and-protocols', name: 'Ports and Protocols', order: 2 },
            { slug: 'vpns-and-privacy', name: 'VPNs, Proxies, and Online Privacy', order: 3 },
          ],
        },
      ],
    },
    {
      slug: 'introduction-to-programming',
      name: 'Introduction to Programming',
      description: 'The fundamentals of writing code — logic, data, functions, and problem-solving — using Python.',
      order: 3,
      estimatedHours: 6,
      modules: [
        {
          slug: 'programming-fundamentals',
          name: 'Programming Fundamentals',
          order: 1,
          lessons: [
            { slug: 'what-is-programming', name: 'What Programming Is and How Computers Execute Code', order: 1 },
            { slug: 'variables-and-data-types', name: 'Variables and Data Types', order: 2 },
            { slug: 'operators-and-expressions', name: 'Operators and Expressions', order: 3 },
            { slug: 'input-and-output', name: 'Input and Output', order: 4 },
          ],
        },
        {
          slug: 'control-flow',
          name: 'Control Flow',
          order: 2,
          lessons: [
            { slug: 'conditionals', name: 'Conditionals: If, Else, and Logic', order: 1 },
            { slug: 'loops', name: 'Loops: Repeating Actions', order: 2 },
            { slug: 'functions', name: 'Functions: Writing Reusable Code', order: 3 },
          ],
        },
        {
          slug: 'data-structures',
          name: 'Working with Data',
          order: 3,
          lessons: [
            { slug: 'lists-and-arrays', name: 'Lists and Arrays', order: 1 },
            { slug: 'dictionaries', name: 'Dictionaries and Key-Value Pairs', order: 2 },
            { slug: 'reading-and-writing-files', name: 'Reading and Writing Files', order: 3 },
            { slug: 'debugging', name: 'Debugging: Finding and Fixing Errors', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'web-development-basics',
      name: 'Web Development Basics',
      description: 'How to build web pages and web applications — HTML, CSS, and JavaScript from scratch.',
      order: 4,
      estimatedHours: 6,
      prerequisites: ['introduction-to-programming'],
      modules: [
        {
          slug: 'html',
          name: 'HTML: Structure',
          order: 1,
          lessons: [
            { slug: 'what-is-html', name: 'What HTML Is and How It Works', order: 1 },
            { slug: 'html-elements', name: 'Elements, Tags, and Attributes', order: 2 },
            { slug: 'building-a-page', name: 'Building Your First Web Page', order: 3 },
            { slug: 'forms-and-links', name: 'Forms, Links, and Navigation', order: 4 },
          ],
        },
        {
          slug: 'css',
          name: 'CSS: Style',
          order: 2,
          lessons: [
            { slug: 'how-css-works', name: 'How CSS Works: Selectors and Properties', order: 1 },
            { slug: 'layout-with-css', name: 'Layout: Flexbox and Grid', order: 2 },
            { slug: 'responsive-design', name: 'Responsive Design for Mobile', order: 3 },
          ],
        },
        {
          slug: 'javascript',
          name: 'JavaScript: Behavior',
          order: 3,
          lessons: [
            { slug: 'javascript-basics', name: 'JavaScript in the Browser', order: 1 },
            { slug: 'dom-manipulation', name: 'Manipulating the Page with the DOM', order: 2 },
            { slug: 'events', name: 'Events: Responding to User Actions', order: 3 },
            { slug: 'fetch-and-apis', name: 'Fetching Data from APIs', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'data-and-spreadsheets',
      name: 'Data & Spreadsheets',
      description: 'How to work with data — organizing, analyzing, and visualizing it using spreadsheets and basic data tools.',
      order: 5,
      estimatedHours: 4,
      modules: [
        {
          slug: 'spreadsheet-fundamentals',
          name: 'Spreadsheet Fundamentals',
          order: 1,
          lessons: [
            { slug: 'spreadsheet-basics', name: 'Rows, Columns, Cells, and Formulas', order: 1 },
            { slug: 'common-functions', name: 'Functions Everyone Should Know', order: 2 },
            { slug: 'sorting-and-filtering', name: 'Sorting, Filtering, and Finding Patterns', order: 3 },
          ],
        },
        {
          slug: 'data-analysis',
          name: 'Basic Data Analysis',
          order: 2,
          lessons: [
            { slug: 'pivot-tables', name: 'Pivot Tables: Summarizing Data Fast', order: 1 },
            { slug: 'charts-and-visualization', name: 'Charts and Data Visualization', order: 2 },
            { slug: 'data-cleaning', name: 'Data Cleaning: Garbage In, Garbage Out', order: 3 },
            { slug: 'introduction-to-sql', name: 'Introduction to SQL: Querying Databases', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'cybersecurity-basics',
      name: 'Cybersecurity Basics',
      description: 'How attacks work, how to defend yourself and your organization, and the fundamentals of digital security.',
      order: 6,
      estimatedHours: 4,
      modules: [
        {
          slug: 'threat-landscape',
          name: 'Understanding Threats',
          order: 1,
          lessons: [
            { slug: 'common-attacks', name: 'Phishing, Malware, and Social Engineering', order: 1 },
            { slug: 'passwords-and-authentication', name: 'Passwords, MFA, and Authentication', order: 2 },
            { slug: 'how-breaches-happen', name: 'How Data Breaches Actually Happen', order: 3 },
          ],
        },
        {
          slug: 'defending-yourself',
          name: 'Defending Yourself and Your Data',
          order: 2,
          lessons: [
            { slug: 'personal-security-practices', name: 'Personal Security: What Everyone Should Do', order: 1 },
            { slug: 'securing-devices', name: 'Securing Your Devices', order: 2 },
            { slug: 'network-security', name: 'Network Security Basics', order: 3 },
            { slug: 'encryption-basics', name: 'Encryption: What It Is and Why It Matters', order: 4 },
          ],
        },
      ],
    },
    {
      slug: 'ai-and-automation-literacy',
      name: 'AI & Automation Literacy',
      description: 'What AI actually is, how it\'s changing work and society, and how to use it without being replaced by it.',
      order: 7,
      estimatedHours: 3,
      modules: [
        {
          slug: 'understanding-ai',
          name: 'Understanding AI',
          order: 1,
          lessons: [
            { slug: 'what-ai-actually-is', name: 'What AI Actually Is (and Isn\'t)', order: 1 },
            { slug: 'how-machine-learning-works', name: 'How Machine Learning Works at a High Level', order: 2 },
            { slug: 'large-language-models', name: 'Large Language Models: What They Are and How to Use Them', order: 3 },
          ],
        },
        {
          slug: 'ai-in-practice',
          name: 'AI in Practice',
          order: 2,
          lessons: [
            { slug: 'using-ai-tools', name: 'Using AI Tools Effectively', order: 1 },
            { slug: 'ai-and-work', name: 'AI and the Future of Work: What\'s Actually Changing', order: 2 },
            { slug: 'ai-ethics-and-bias', name: 'Bias, Ethics, and the Limits of AI', order: 3 },
          ],
        },
      ],
    },
  ],
}

export default technologyAndComputing
