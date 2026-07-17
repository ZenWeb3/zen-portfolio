/**
 * @typedef {Object} ExperienceEntry
 * @property {number} id
 * @property {string} role
 * @property {string} org
 * @property {string} period
 * @property {string} description
 * @property {"engineering"|"devrel"|"community"|"writing"} type
 * @property {boolean} [current]
 */

/** @type {ExperienceEntry[]} */
export const experience = [
  {
    id: 0,
    role: "Engineering Lead",
    org: "Drift X",
    period: "Current",
    description:
      "Lead engineering at Drift X, a logistics ride-hailing platform for dispatch riders.",
    type: "engineering",
    current: true,
  },
  {
    id: 1,
    role: "Software Developer",
    org: "Rootcare Pharmaceuticals",
    period: "2026",
    description:
      "Built PharmInventory, a full-stack pharmacy inventory management system with role-based access control.",
    type: "engineering",
  },
  {
    id: 2,
    role: "IT & Networking Intern",
    org: "Ceedapeg Hotels",
    period: "2025 — 2026",
    description:
      "Configured admin systems, troubleshot network issues, and maintained the company website and internal software.",
    type: "engineering",
  },
  {
    id: 3,
    role: "Mobile App Developer",
    org: "Suiver",
    period: "2025",
    description:
      "Worked on the mobile app for Suiver, a platform that off-ramps crypto to local fiat.",
    type: "engineering",
  },
  {
    id: 4,
    role: "Frontend Developer Intern",
    org: "Kodehauz Solution Planet",
    period: "2024",
    description:
      "Contributed to developing and maintaining websites for brands and businesses.",
    type: "engineering",
  },
];

/**
 * @typedef {Object} Achievement
 * @property {number} id
 * @property {string} title
 * @property {string} description
 */

/** @type {Achievement[]} */
export const achievements = [
  {
    id: 0,
    title: "Story Protocol Hackathon Winner",
    description: "Won the Story Protocol Hackathon with Proofa, a decentralized proof of authenticity platform. November 2025.",
  },
  {
    id: 1,
    title: "Open Source Publisher",
    description:
      "Published zeroReg on npm and PyPI, a human-readable regex builder used by developers worldwide.",
  },
  {
    id: 2,
    title: "B.Sc. Software Engineering",
    description: "Graduated with a degree in Software Engineering, 2025.",
  },
];
