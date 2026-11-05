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
    event: "Fhenix Africa",
    topic: "Onboarding Developers to Fhenix and FHE",
    location: "Nigeria",
    date: "2026-07-01",
    photos: ["/images/fhennix-event.jpeg"],
    videoUrl: null,
    slidesUrl: null,
    description:
      "Onboarded developers to Fhenix, walking through what fully homomorphic encryption makes possible on-chain, the Fhenix SDK, and the use cases it unlocks.",
    type: "workshop",
  },
];

export const talkTypes = [
  { id: "all", label: "All" },
  { id: "workshop", label: "Workshops" },
];
