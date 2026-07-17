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
 * @property {"article"} kind
 * @property {boolean} [featured]
 * @property {boolean} [sample] marks placeholder entries shown until real content replaces them
 */

/** @type {Article[]} */
export const articles = [
  {
    id: 0,
    title: "Hyperliquid API Latency: What's Actually Slow, and Why It Matters When You Build",
    platform: "Medium",
    date: "2026-07-08",
    readingTime: 6,
    cover: null,
    tags: ["Hyperliquid", "APIs", "Performance"],
    url: "https://medium.com/@samueledohoeket257/hyperliquid-api-latency-whats-actually-slow-and-why-it-matters-when-you-build-9ee0e5a291c5",
    kind: "article",
    featured: true,
  },
  {
    id: 1,
    title: "Best Multichain Blockchain Data APIs in 2026",
    platform: "Medium",
    date: "2026-07-02",
    readingTime: 6,
    cover: null,
    tags: ["Blockchain", "APIs", "Multichain"],
    url: "https://medium.com/@samueledohoeket257/best-multichain-blockchain-data-apis-in-2026-7dbe38eaef33",
    kind: "article",
    featured: true,
  },
];
