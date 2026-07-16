/**
 * Contributor roles not yet confirmed for public display.
 * Flip `enabled` to true (and fill the fields) once confirmed — every
 * consuming component checks `enabled` before rendering anything.
 *
 * @typedef {Object} ContributorRole
 * @property {boolean} enabled
 * @property {string} role
 * @property {string} org
 * @property {string} url
 * @property {string} description
 */

export const contributorRoles = {
  /** @type {ContributorRole} */
  fhenix: {
    enabled: false,
    role: "Contributor",
    org: "Fhenix",
    url: "",
    description: "",
  },
};
