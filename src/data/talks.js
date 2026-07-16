/**
 * @typedef {Object} Talk
 * @property {number} id
 * @property {string} event
 * @property {string} topic
 * @property {string} location
 * @property {string} date ISO date string
 * @property {string[]} photos
 * @property {string|null} videoUrl
 * @property {string|null} slidesUrl
 * @property {string} description
 * @property {"talk"|"workshop"|"hackathon"|"panel"} type
 * @property {boolean} [sample]
 */

/** @type {Talk[]} */
export const talks = [
  {
    id: 0,
    event: "Story Protocol Hackathon",
    topic: "Building Proofa: Proof of Authenticity On-Chain",
    location: "Remote",
    date: "2025-11-01",
    photos: [],
    videoUrl: null,
    slidesUrl: null,
    description:
      "Presented Proofa, a decentralized proof-of-authenticity platform built on Story Protocol, to hackathon judges. Won the hackathon.",
    type: "hackathon",
    sample: true,
  },
];

export const talkTypes = [
  { id: "all", label: "All" },
  { id: "talk", label: "Talks" },
  { id: "workshop", label: "Workshops" },
  { id: "hackathon", label: "Hackathons" },
  { id: "panel", label: "Panels" },
];
