/**
 * @typedef {Object} SiteData
 * @property {string} name
 * @property {string} alias
 * @property {string[]} roles
 * @property {string} tagline
 * @property {string} bio
 * @property {string[]} bioParagraphs
 * @property {boolean} available
 * @property {string} location
 * @property {string} now
 * @property {string} resumeUrl
 * @property {{ github: string, twitter: string, telegram: string, email: string }} social
 */

/** @type {SiteData} */
export const site = {
  name: "Samuel Edohoeket",
  alias: "Zen",
  roles: [
    "Software Engineer",
    "Developer Relations Engineer",
    "Technical Content Creator",
  ],
  tagline:
    "I build developer tools, and write about how to use them.",
  bio: "Software engineer and developer relations engineer working at the intersection of software engineering, developer education, and Web3 infrastructure.",
  bioParagraphs: [
    "My work sits at the intersection of software engineering, developer relations, and Web3 infrastructure. I build applications, SDK demos, developer tooling, and the documentation and tutorials that help other developers onboard faster.",
    "Previously a Software Developer at Rootcare Pharmaceuticals, where I built their inventory management system, and an IT & Networking Intern at Ceedapeg Hotels. I also help web3 projects ship websites and infrastructure tooling.",
    "Workshop organizer. Public speaker. Winner of the Story Protocol Hackathon. Publisher of open-source packages including zeroReg and ZeroDocs.",
  ],
  available: true,
  location: "Nigeria",
  now: "Leading engineering at Drift X and shipping developer tooling on the side.",
  resumeUrl: "/pdf/Samuel_Edohoeket_CV.pdf",
  social: {
    github: "https://github.com/ZenWeb3",
    twitter: "https://twitter.com/zenonchain",
    telegram: "https://t.me/codewithzen",
    email: "samueledohoeket257@gmail.com",
  },
};
