import type { SubjectDef } from '../types'
import { techExercises1 } from './tech-exercises-1'
import { techExercises2 } from './tech-exercises-2'
import { techExercises3 } from './tech-exercises-3'
import { techExercises4 } from './tech-exercises-4'
import { techExercises5 } from './tech-exercises-5'
import { techExercises6 } from './tech-exercises-6'
import { techExercises7 } from './tech-exercises-7'
import { techExercises8 } from './tech-exercises-8'
import { technologyAssessments } from './technology-assessments'

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
      assessment: technologyAssessments['how-computers-work'],
      modules: [
        {
          slug: 'hardware-fundamentals',
          name: 'Hardware',
          order: 1,
          lessons: [
            { slug: 'cpu-memory-storage', name: 'CPU, Memory, and Storage: What Each Does', order: 1, exercises: techExercises1['cpu-memory-storage'] },
            { slug: 'how-data-is-stored', name: 'How Data Is Stored as Bits and Bytes', order: 2, exercises: techExercises1['how-data-is-stored'] },
            { slug: 'input-output-devices', name: 'Input, Output, and Peripheral Devices', order: 3, exercises: techExercises1['input-output-devices'] },
          ],
        },
        {
          slug: 'software-and-os',
          name: 'Software & Operating Systems',
          order: 2,
          lessons: [
            { slug: 'what-is-an-operating-system', name: 'What an Operating System Does', order: 1, exercises: techExercises1['what-is-an-operating-system'] },
            { slug: 'files-and-directories', name: 'Files, Directories, and the File System', order: 2, exercises: techExercises1['files-and-directories'] },
            { slug: 'processes-and-memory', name: 'Processes, RAM, and Why Computers Slow Down', order: 3, exercises: techExercises1['processes-and-memory'] },
            { slug: 'command-line-basics', name: 'The Command Line: Your First Look', order: 4, exercises: techExercises1['command-line-basics'] },
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
      assessment: technologyAssessments['internet-and-networking'],
      modules: [
        {
          slug: 'how-the-internet-works',
          name: 'How the Internet Works',
          order: 1,
          lessons: [
            { slug: 'ip-addresses-and-dns', name: 'IP Addresses and DNS: The Internet\'s Address System', order: 1, exercises: techExercises2['ip-addresses-and-dns'] },
            { slug: 'http-and-https', name: 'HTTP and HTTPS: How Web Pages Get to You', order: 2, exercises: techExercises2['http-and-https'] },
            { slug: 'packets-and-routing', name: 'Packets and Routing: How Data Travels', order: 3, exercises: techExercises2['packets-and-routing'] },
          ],
        },
        {
          slug: 'networking-basics',
          name: 'Networking Basics',
          order: 2,
          lessons: [
            { slug: 'routers-and-wifi', name: 'Routers, Wi-Fi, and Local Networks', order: 1, exercises: techExercises2['routers-and-wifi'] },
            { slug: 'ports-and-protocols', name: 'Ports and Protocols', order: 2, exercises: techExercises2['ports-and-protocols'] },
            { slug: 'vpns-and-privacy', name: 'VPNs, Proxies, and Online Privacy', order: 3, exercises: techExercises2['vpns-and-privacy'] },
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
      assessment: technologyAssessments['introduction-to-programming'],
      modules: [
        {
          slug: 'programming-fundamentals',
          name: 'Programming Fundamentals',
          order: 1,
          lessons: [
            { slug: 'what-is-programming', name: 'What Programming Is and How Computers Execute Code', order: 1, exercises: techExercises2['what-is-programming'] },
            { slug: 'variables-and-data-types', name: 'Variables and Data Types', order: 2, exercises: techExercises3['variables-and-data-types'] },
            { slug: 'operators-and-expressions', name: 'Operators and Expressions', order: 3, exercises: techExercises3['operators-and-expressions'] },
            { slug: 'input-and-output', name: 'Input and Output', order: 4, exercises: techExercises3['input-and-output'] },
          ],
        },
        {
          slug: 'control-flow',
          name: 'Control Flow',
          order: 2,
          lessons: [
            { slug: 'conditionals', name: 'Conditionals: If, Else, and Logic', order: 1, exercises: techExercises3['conditionals'] },
            { slug: 'loops', name: 'Loops: Repeating Actions', order: 2, exercises: techExercises3['loops'] },
            { slug: 'functions', name: 'Functions: Writing Reusable Code', order: 3, exercises: techExercises3['functions'] },
          ],
        },
        {
          slug: 'data-structures',
          name: 'Working with Data',
          order: 3,
          lessons: [
            { slug: 'lists-and-arrays', name: 'Lists and Arrays', order: 1, exercises: techExercises3['lists-and-arrays'] },
            { slug: 'dictionaries', name: 'Dictionaries and Key-Value Pairs', order: 2, exercises: techExercises4['dictionaries'] },
            { slug: 'reading-and-writing-files', name: 'Reading and Writing Files', order: 3, exercises: techExercises4['reading-and-writing-files'] },
            { slug: 'debugging', name: 'Debugging: Finding and Fixing Errors', order: 4, exercises: techExercises4['debugging'] },
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
      assessment: technologyAssessments['web-development-basics'],
      modules: [
        {
          slug: 'html',
          name: 'HTML: Structure',
          order: 1,
          lessons: [
            { slug: 'what-is-html', name: 'What HTML Is and How It Works', order: 1, exercises: techExercises4['what-is-html'] },
            { slug: 'html-elements', name: 'Elements, Tags, and Attributes', order: 2, exercises: techExercises4['html-elements'] },
            { slug: 'building-a-page', name: 'Building Your First Web Page', order: 3, exercises: techExercises4['building-a-page'] },
            { slug: 'forms-and-links', name: 'Forms, Links, and Navigation', order: 4, exercises: techExercises4['forms-and-links'] },
          ],
        },
        {
          slug: 'css',
          name: 'CSS: Style',
          order: 2,
          lessons: [
            { slug: 'how-css-works', name: 'How CSS Works: Selectors and Properties', order: 1, exercises: techExercises5['how-css-works'] },
            { slug: 'layout-with-css', name: 'Layout: Flexbox and Grid', order: 2, exercises: techExercises5['layout-with-css'] },
            { slug: 'responsive-design', name: 'Responsive Design for Mobile', order: 3, exercises: techExercises5['responsive-design'] },
          ],
        },
        {
          slug: 'javascript',
          name: 'JavaScript: Behavior',
          order: 3,
          lessons: [
            { slug: 'javascript-basics', name: 'JavaScript in the Browser', order: 1, exercises: techExercises5['javascript-basics'] },
            { slug: 'dom-manipulation', name: 'Manipulating the Page with the DOM', order: 2, exercises: techExercises5['dom-manipulation'] },
            { slug: 'events', name: 'Events: Responding to User Actions', order: 3, exercises: techExercises5['events'] },
            { slug: 'fetch-and-apis', name: 'Fetching Data from APIs', order: 4, exercises: techExercises5['fetch-and-apis'] },
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
      assessment: technologyAssessments['data-and-spreadsheets'],
      modules: [
        {
          slug: 'spreadsheet-fundamentals',
          name: 'Spreadsheet Fundamentals',
          order: 1,
          lessons: [
            { slug: 'spreadsheet-basics', name: 'Rows, Columns, Cells, and Formulas', order: 1, exercises: techExercises6['spreadsheet-basics'] },
            { slug: 'common-functions', name: 'Functions Everyone Should Know', order: 2, exercises: techExercises6['common-functions'] },
            { slug: 'sorting-and-filtering', name: 'Sorting, Filtering, and Finding Patterns', order: 3, exercises: techExercises6['sorting-and-filtering'] },
          ],
        },
        {
          slug: 'data-analysis',
          name: 'Basic Data Analysis',
          order: 2,
          lessons: [
            { slug: 'pivot-tables', name: 'Pivot Tables: Summarizing Data Fast', order: 1, exercises: techExercises6['pivot-tables'] },
            { slug: 'charts-and-visualization', name: 'Charts and Data Visualization', order: 2, exercises: techExercises6['charts-and-visualization'] },
            { slug: 'data-cleaning', name: 'Data Cleaning: Garbage In, Garbage Out', order: 3, exercises: techExercises6['data-cleaning'] },
            { slug: 'introduction-to-sql', name: 'Introduction to SQL: Querying Databases', order: 4, exercises: techExercises6['introduction-to-sql'] },
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
      assessment: technologyAssessments['cybersecurity-basics'],
      modules: [
        {
          slug: 'threat-landscape',
          name: 'Understanding Threats',
          order: 1,
          lessons: [
            { slug: 'common-attacks', name: 'Phishing, Malware, and Social Engineering', order: 1, exercises: techExercises7['common-attacks'] },
            { slug: 'passwords-and-authentication', name: 'Passwords, MFA, and Authentication', order: 2, exercises: techExercises7['passwords-and-authentication'] },
            { slug: 'how-breaches-happen', name: 'How Data Breaches Actually Happen', order: 3, exercises: techExercises7['how-breaches-happen'] },
          ],
        },
        {
          slug: 'defending-yourself',
          name: 'Defending Yourself and Your Data',
          order: 2,
          lessons: [
            { slug: 'personal-security-practices', name: 'Personal Security: What Everyone Should Do', order: 1, exercises: techExercises7['personal-security-practices'] },
            { slug: 'securing-devices', name: 'Securing Your Devices', order: 2, exercises: techExercises7['securing-devices'] },
            { slug: 'network-security', name: 'Network Security Basics', order: 3, exercises: techExercises7['network-security'] },
            { slug: 'encryption-basics', name: 'Encryption: What It Is and Why It Matters', order: 4, exercises: techExercises7['encryption-basics'] },
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
      assessment: technologyAssessments['ai-and-automation-literacy'],
      modules: [
        {
          slug: 'understanding-ai',
          name: 'Understanding AI',
          order: 1,
          lessons: [
            { slug: 'what-ai-actually-is', name: 'What AI Actually Is (and Isn\'t)', order: 1, exercises: techExercises8['what-ai-actually-is'] },
            { slug: 'how-machine-learning-works', name: 'How Machine Learning Works at a High Level', order: 2, exercises: techExercises8['how-machine-learning-works'] },
            { slug: 'large-language-models', name: 'Large Language Models: What They Are and How to Use Them', order: 3, exercises: techExercises8['large-language-models'] },
          ],
        },
        {
          slug: 'ai-in-practice',
          name: 'AI in Practice',
          order: 2,
          lessons: [
            { slug: 'using-ai-tools', name: 'Using AI Tools Effectively', order: 1, exercises: techExercises8['using-ai-tools'] },
            { slug: 'ai-and-work', name: 'AI and the Future of Work: What\'s Actually Changing', order: 2, exercises: techExercises8['ai-and-work'] },
            { slug: 'ai-ethics-and-bias', name: 'Bias, Ethics, and the Limits of AI', order: 3, exercises: techExercises8['ai-ethics-and-bias'] },
          ],
        },
      ],
    },
  ],
}

export default technologyAndComputing
