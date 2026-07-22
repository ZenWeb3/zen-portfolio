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
    slug: "warden",
    title: "Warden",
    description:
      "A gasless, policy-gated firewall for autonomous on-chain agents, enforced on-chain instead of in a prompt.",
    tech: ["Solidity", "Hardhat", "React", "Vite", "EVM"],
    category: "hackathon",
    github: "https://github.com/ZenWeb3/warden",
    link: "https://warden-lemon-gamma.vercel.app",
    featured: true,
    award: "BOT Chain Builder Challenge #1",
    caseStudy: [
      "An LLM agent can propose an on-chain action, but it can never sign one on its own. WardenGuard sits between the agent and the chain: every proposed action is checked against six policies (per-tx spend cap, rolling 24h budget, destination allowlist, cooldown, slippage ceiling, session balance) inside the EVM before a signature exists. Actions that pass execute gaslessly through an EOA Paymaster; actions that fail are refused and recorded, not just rejected client-side.",
      "Refusals don't revert. A hard revert would enforce the policy but drop the record of the attempt, since reverted transactions emit no persistent events. WardenGuard emits a Decision event either way, so every allowed or blocked action stays on the permanent chain history: a tamper-evident audit trail of agent behavior, built for the BOT Chain Builder Challenge's AI Agent track.",
    ],
    highlights: [
      "Six on-chain policies enforced in the EVM before any signature exists",
      "Gasless execution via an EOA Paymaster",
      "Refuse-and-record model: blocked actions stay on-chain as Decision events instead of silent reverts",
      "Separate owner and agent keys: the agent can only call screenAndExecute, never move funds unilaterally",
    ],
  },
  {
    id: 1,
    slug: "amber",
    title: "amber",
    description:
      "A Slack agent that learns which MCP tool to route a question to, and gets sharper from 👍/👎 feedback.",
    tech: ["TypeScript", "Slack Bolt", "Gemini", "Model Context Protocol", "Supabase"],
    category: "ai-agents",
    github: "https://github.com/ZenWeb3/amber",
    link: "#",
    featured: true,
    caseStudy: [
      "Most Slack agents wire up one tool and hardcode when to call it. amber treats tool selection as a learned routing problem. A classifier extracts features from the incoming question, a router consults learned priors to pick the best of five connected MCP servers (GitHub, Google Drive, Calendar, Notion, and live web search), and a planner and executor carry out the query before a synthesizer writes the answer back into the thread.",
      "Every thumbs up or thumbs down reaction on an answer feeds an evaluator that updates the router's priors in Supabase, so amber gets sharper at knowing which tool wins for which kind of question the more a team uses it. Built for the Slack Agent Builder Challenge, July 2026.",
    ],
    highlights: [
      "Five-stage pipeline: classifier, router, planner, executor, synthesizer, plus a feedback evaluator",
      "Routes across five MCP servers: GitHub, Google Drive, Calendar, Notion, and web search",
      "Router state persisted in Supabase; reactions on answers retrain the routing priors",
      "Built with Google Gemini 2.5 Flash and Slack Bolt in Socket Mode",
    ],
  },
  {
    id: 2,
    slug: "umbra",
    title: "Umbra",
    description:
      "Privacy-preserving binary prediction market with encrypted positions, built on Fhenix FHE.",
    tech: ["TypeScript", "Solidity", "Fhenix FHE", "Next.js"],
    category: "web3",
    github: "https://github.com/ZenWeb3/Umbra",
    link: "#",
    featured: true,
    caseStudy: [
      "Umbra is a prediction market built around fully homomorphic encryption rather than bolted onto it afterward. Positions and order details stay encrypted end-to-end via Fhenix, so a market can settle correctly without exposing who bet what. It's an active build testing how far FHE can go as a privacy layer for on-chain markets.",
    ],
    highlights: [
      "Encrypted positions end-to-end via Fhenix FHE; order details never hit the chain in plaintext",
      "Binary prediction market architecture, built as a pnpm monorepo",
    ],
  },
  {
    id: 3,
    slug: "zeroreg",
    title: "zeroReg",
    description:
      "Human-readable regex builder library. Published on npm and PyPI with comprehensive documentation.",
    tech: ["TypeScript", "Python", "npm", "PyPI"],
    category: "open-source",
    github: "https://github.com/ZenWeb3/zeroreg",
    link: "https://zeroreg.xyz",
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
    id: 4,
    slug: "taisetsu",
    title: "Taisetsu",
    description:
      "Turn your endpoints into revenue streams. Paste a URL, set a price, start earning USDC. No code changes required.",
    tech: ["Next.js", "AI", "Stablecoins", "Telegram Bot", "Cronosx401", "EVM"],
    category: "fintech",
    github: "https://github.com/ZenWeb3/taisetsu",
    link: "https://taisetsu.vercel.app",
    caseStudy: [
      "Taisetsu monetizes existing API endpoints without asking developers to touch their code. Paste a URL, set a price in USDC, and requests are metered and paid for through a proxy layer settled on-chain.",
      "Built with a Telegram bot as a companion interface for monitoring earnings, alongside a Next.js dashboard for setup and configuration.",
    ],
  },
  {
    id: 5,
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
    id: 6,
    slug: "signet",
    title: "Signet",
    description: "An onchain successor vault on Monad, deployed at a deterministic address for each signet.",
    tech: ["Solidity", "TypeScript", "Monad", "CREATE2"],
    category: "web3",
    github: "https://github.com/ZenWeb3/Signet",
    link: "#",
    caseStudy: [
      "Signet is an onchain successor vault built on Monad. A factory contract, SignetFactory, deploys each vault at a deterministic address via CREATE2, keyed by a nonce-based salt so every signet gets a unique, predictable address. A public Wall page surfaces created signets on the frontend.",
    ],
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
];

export const projectCategories = [
  { id: "all", label: "All" },
  { id: "hackathon", label: "Hackathon" },
  { id: "web3", label: "Web3" },
  { id: "ai-agents", label: "AI Agents" },
  { id: "fintech", label: "Fintech" },
  { id: "open-source", label: "Open Source" },
  { id: "mobile", label: "Mobile" },
];
