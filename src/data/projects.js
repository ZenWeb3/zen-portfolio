/**
 * @typedef {Object} Project
 * @property {number} id
 * @property {string} slug
 * @property {string} title
 * @property {string} description
 * @property {string[]} tech
 * @property {string} category
 * @property {string} github
 * @property {string} link
 * @property {boolean} [featured]
 * @property {string} [award]
 * @property {boolean} [contribution]
 * @property {string[]} [caseStudy] paragraphs of case-study copy, empty = no detail beyond the card
 * @property {string[]} [highlights]
 */

/** @type {Project[]} */
export const projects = [
  {
    id: 0,
    slug: "zeroreg",
    title: "zeroReg",
    description:
      "Human-readable regex builder library. Published on npm and PyPI with comprehensive documentation.",
    tech: ["TypeScript", "Python", "npm", "PyPI"],
    category: "open-source",
    github: "https://github.com/ZenWeb3/zeroreg",
    link: "https://zeroreg.xyz",
    featured: true,
    caseStudy: [
      "Regular expressions are one of the least readable things a developer writes and one of the most common. zeroReg exists to close that gap: it lets you compose a pattern from plain, chainable methods and outputs the regular expression, so the intent of a pattern stays legible in code review months later.",
      "The library ships for both TypeScript and Python from a shared design, with documentation and examples aimed specifically at developers who avoid regex rather than developers who already know it cold.",
    ],
    highlights: [
      "Published on npm and PyPI",
      "Dual TypeScript / Python implementation",
      "Documentation-first API design",
    ],
  },
  {
    id: 1,
    slug: "taisetsu",
    title: "Taisetsu",
    description:
      "Turn your endpoints into revenue streams. Paste a URL, set a price, start earning USDC. No code changes required.",
    tech: ["Next.js", "AI", "Stablecoins", "Telegram Bot", "Cronosx401", "EVM"],
    category: "fintech",
    github: "https://github.com/ZenWeb3/taisetsu",
    link: "https://taisetsu.vercel.app",
    featured: true,
    caseStudy: [
      "Taisetsu monetizes existing API endpoints without asking developers to touch their code. Paste a URL, set a price in USDC, and requests are metered and paid for through a proxy layer settled on-chain.",
      "Built with a Telegram bot as a companion interface for monitoring earnings, alongside a Next.js dashboard for setup and configuration.",
    ],
  },
  {
    id: 2,
    slug: "stashai",
    title: "StashAI",
    description:
      "Financial management app for freelancers with inconsistent income. AI-powered insights and budgeting.",
    tech: ["Next.js", "Supabase", "Gemini AI"],
    category: "fintech",
    github: "https://github.com/ZenWeb3/stashai",
    link: "https://stashai-sigma.vercel.app",
    featured: true,
    caseStudy: [
      "Freelance income is irregular by nature, and most budgeting tools assume a steady paycheck. StashAI models cash flow around that irregularity, using Gemini to turn raw transaction history into plain-language insight rather than another dashboard of charts.",
    ],
  },
  {
    id: 3,
    slug: "proofa",
    title: "Proofa",
    description: "Decentralized proof of authenticity platform built on Story Protocol.",
    tech: ["Next.js", "Story Protocol", "Web3", "Solidity", "Telegram Bot"],
    category: "hackathon",
    github: "https://github.com/ZenWeb3/proofa",
    link: "https://proofa.vercel.app",
    award: "Story Protocol Hackathon",
    caseStudy: [
      "Built during the Story Protocol Hackathon, Proofa registers proof of authenticity for creative work on-chain, giving creators a verifiable, timestamped record of origin backed by Story Protocol's IP infrastructure.",
    ],
  },
  {
    id: 4,
    slug: "whatsapp-chat-analyzer",
    title: "WhatsApp Chat Analyzer",
    description: "Tool to extract insights and details from WhatsApp chat exports.",
    tech: ["React", "TypeScript", "Vite"],
    category: "tools",
    github: "https://github.com/ZenWeb3/whatsapp-tool",
    link: "https://whatsapp-tool.vercel.app",
  },
  {
    id: 5,
    slug: "pharminventory",
    title: "PharmInventory",
    description:
      "Comprehensive pharmacy inventory management system with role-based access control for Rootcare Pharmaceuticals.",
    tech: ["Next.js", "PostgreSQL", "RBAC"],
    category: "enterprise",
    github: "#",
    link: "#",
    caseStudy: [
      "A full-stack inventory system built for Rootcare Pharmaceuticals, with role-based access control separating pharmacist, procurement, and admin workflows, and stock tracking built to match how the pharmacy actually operates day to day.",
    ],
  },
  {
    id: 6,
    slug: "buildoor",
    title: "Buildoor",
    description: "Developer tools with OpenCV and MediaPipe integration. 3D frontend with Three.js.",
    tech: ["HTML", "Three.js", "OpenCV", "MediaPipe"],
    category: "tools",
    github: "https://github.com/ZenWeb3/buildoor",
    link: "#",
  },
  {
    id: 7,
    slug: "zonex",
    title: "ZoneX",
    description: "Mobile app for mapping and navigating network dead zones.",
    tech: ["React Native", "Expo", "TypeScript"],
    category: "mobile",
    github: "https://github.com/lil-p7/ZoneX",
    link: "#",
    contribution: true,
  },
  {
    id: 8,
    slug: "zerodocs",
    title: "ZeroDocs",
    description:
      "A platform that helps developers and teams generate README docs for public repositories.",
    tech: ["Next.js", "TypeScript", "Grok", "Gemini AI"],
    category: "open-source",
    github: "https://github.com/zenweb3/zerodocs",
    link: "https://zerodocs.pxxl.pro",
    caseStudy: [
      "ZeroDocs points at a public repository and generates a first-draft README from the actual code, aimed at the open-source maintainers who ship faster than they document.",
    ],
  },
  {
    id: 9,
    slug: "toilet-flush",
    title: "Toilet Flush",
    description: "Lottery-based site for the toiletdust meme coin on Sui.",
    tech: ["HTML", "JavaScript", "Sui SDK"],
    category: "web",
    link: "https://toilet.pxxl.pro/",
    github: "#",
  },
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "open-source", label: "Open Source" },
  { id: "fintech", label: "Fintech" },
  { id: "hackathon", label: "Hackathon" },
  { id: "tools", label: "Tools" },
  { id: "mobile", label: "Mobile" },
  { id: "enterprise", label: "Enterprise" },
  { id: "web", label: "Web" },
];
