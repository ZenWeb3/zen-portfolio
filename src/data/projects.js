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
    slug: "create-cofhe-app",
    title: "create-cofhe-app",
    description:
      "One command scaffolds a Fhenix CoFHE dApp — encrypted contracts, tests that run against the CoFHE mocks, and an optional frontend.",
    tech: ["TypeScript", "Fhenix CoFHE", "Solidity", "Hardhat", "Foundry", "Next.js"],
    category: "open-source",
    github: "https://github.com/ZenWeb3/create-cofhe-app",
    link: "https://www.npmjs.com/package/create-cofhe-app",
    featured: true,
    caseStudy: [
      "Starting an FHE project means assembling a stack that only works in one exact configuration, and the failure modes name the wrong thing when you get it wrong. create-cofhe-app ships that configuration as a scaffolder: pick a toolchain (Hardhat or Foundry), a frontend (Next.js, Vite or none), and one of six encrypted patterns, and the generated project's own test suite passes immediately — no testnet, no API key, no network calls during scaffolding.",
      "The patterns are the teaching surface. A sealed-bid auction finds a maximum with FHE.gt and FHE.select without revealing a bid; an encrypted ERC-20 uses FHE.gte and FHE.select in place of an underflow revert; an encrypted crowdfund publishes whether a goal was met while the amounts stay private. Beyond scaffolding, a cofhe binary handles the parts of FHE development that have no good error message: doctor catches the contracts/mocks version drift that otherwise fails with 'MockTaskManager should be marked as abstract' — an error naming neither package — and handle <ctHash> decodes an encrypted handle and reads its access list off-chain to answer why a value won't decrypt.",
    ],
    highlights: [
      "Six encrypted patterns, each with a test suite that passes straight after scaffolding",
      "cofhe doctor diagnoses the contracts/mocks version mismatch behind an error that names neither package",
      "cofhe handle decodes a bytes32 handle and reads its on-chain access list — no key needed, only eth_call",
      "cofhe deploy records the address and writes it into the frontend env file in one step",
      "CI scaffolds every toolchain x pattern combination and runs the generated project's own tests",
    ],
  },
  {
    id: 1,
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
    id: 2,
    slug: "cre-price-snapshot",
    title: "CRE Price Snapshot",
    description:
      "A Chainlink Runtime Environment workflow that reads a Data Feed price on Sepolia and writes it on-chain in a single HTTP-triggered run.",
    tech: ["Solidity", "TypeScript", "Chainlink CRE", "Foundry", "EVM"],
    category: "web3",
    github: "https://github.com/ZenWeb3/chainlink-cre-assessment",
    link: "#",
    caseStudy: [
      "One HTTP trigger, one execution: the workflow takes a token name, reads that token's USD price from a Chainlink Data Feed through the EVM Read capability, and writes the answer to a PriceSnapshot contract through EVM Write, delivered as a DON-signed report the KeystoneForwarder verifies before calling onReport.",
      "The hard requirement was storing the block at which the feed answer was last updated — and no view function on the aggregator returns it. latestRoundData gives timestamps; latestConfigDetails().blockNumber is the block the config was set, not the answer. The block lives only in the AnswerUpdated event, so the workflow masks the proxy round id down to the aggregator's own (phaseId << 64 | aggregatorRoundId), searches a window sized from how stale the answer is, and matches on the round id topic — which makes the result exact rather than approximate. If no matching log turns up it retries at the full cap and then fails loudly instead of storing a guess.",
    ],
    highlights: [
      "Exact answer-block resolution by matching the AnswerUpdated round id, not an estimate",
      "Reads pinned to the last finalized block so every DON node observes identical state",
      "Forwarder check as the trust boundary: a single write path, address(0) rejected, ERC-165 implemented, replay rejected via StaleSnapshot",
      "48 tests across Foundry and Bun, pinning the report byte layout from both sides so encode and decode cannot drift",
      "Documents the Sepolia gas discrepancy (deployment 7.6x local, delivery 4.8x) that silently reverts onReport at a locally-derived gas limit",
    ],
  },
  {
    id: 3,
    slug: "geras",
    title: "GERAS",
    description:
      "Dual-channel emergency alerting for road safety agencies. One tap on the roadside becomes a live incident on the dispatcher's map — over data, or over SMS when there is no signal.",
    tech: ["Next.js", "TypeScript", "Supabase", "PostGIS", "Leaflet", "PWA"],
    category: "civic-tech",
    github: "https://github.com/ZenWeb3/GERAS",
    link: "https://geras-two.vercel.app",
    caseStudy: [
      "GERAS is built around one hard problem: the moment a road user needs help is exactly when the network is least likely to work. It treats connectivity as three states rather than two — online, offline, and online with zero throughput — probing a health endpoint before choosing a channel and falling back to a prefilled SMS when the probe fails. The reporter is a PWA, so there is no install and no account; alerts that cannot send at all queue in IndexedDB and reconcile when signal returns.",
      "Both channels land in the same pipeline. A data report and an SMS for the same event merge server-side on a shared six-character reference code through one upsert function, so a user who sends both produces exactly one incident row rather than two. Dispatchers work from a realtime console with a PostGIS-backed nearest-unit lookup over spheroid-accurate distances, and every status transition appends to an audit log that authenticated users cannot rewrite — the service-role key is confined to server-only paths so the trail cannot be bypassed by an RLS-restricted user.",
    ],
    highlights: [
      "Automatic SMS failover: connectivity probe distinguishes real throughput from a dead connection",
      "Atomic server-side dedup — SMS and data reports merge on a shared reference code into one incident",
      "SMS payload fits one GSM-7 segment, with bounds validated at parse time and 20 tests on the parser/builder",
      "PostGIS nearest-unit dispatch with GIST-indexed geodesic lookups and ETA estimates",
      "TOTP MFA on all dispatcher access, RLS on every table, constant-time webhook auth, append-only audit log",
    ],
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
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
  { id: "fintech", label: "Fintech" },
  { id: "open-source", label: "Open Source" },
  { id: "civic-tech", label: "Civic Tech" },
  { id: "mobile", label: "Mobile" },
];
