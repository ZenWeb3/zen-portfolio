/**
 * @typedef {Object} Article
 * @property {number} id
 * @property {string} title
 * @property {string} platform
 * @property {string} date ISO date string
 * @property {number} readingTime minutes
 * @property {string|null} cover
 * @property {string[]} tags
 * @property {string} url
 * @property {"article"|"tutorial"|"guide"} kind
 * @property {boolean} [featured]
 * @property {boolean} [sample] marks placeholder entries shown until real content replaces them
 */

/** @type {Article[]} */
export const articles = [
  {
    id: 0,
    title: "Publishing a Human-Readable Regex Builder to npm and PyPI",
    platform: "Hashnode",
    date: "2026-02-14",
    readingTime: 7,
    cover: null,
    tags: ["Open Source", "TypeScript", "Python"],
    url: null,
    kind: "article",
    featured: true,
    sample: true,
  },
  {
    id: 1,
    title: "A Field Guide to Onboarding Developers onto a Web3 SDK",
    platform: "dev.to",
    date: "2026-01-20",
    readingTime: 9,
    cover: null,
    tags: ["Developer Relations", "Web3", "SDKs"],
    url: null,
    kind: "guide",
    sample: true,
  },
];

export const articleKinds = [
  { id: "all", label: "All" },
  { id: "article", label: "Articles" },
  { id: "tutorial", label: "Tutorials" },
  { id: "guide", label: "Technical Guides" },
];
