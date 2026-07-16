/**
 * @typedef {Object} Stack
 * @property {number} id
 * @property {string} name
 * @property {"language"|"frontend"|"backend"|"mobile"|"database"|"web3"|"tools"} category
 */

/** @type {Stack[]} */
export const stacks = [
  { id: 0, name: "JavaScript", category: "language" },
  { id: 1, name: "TypeScript", category: "language" },
  { id: 2, name: "Python", category: "language" },
  { id: 3, name: "React", category: "frontend" },
  { id: 4, name: "Next.js", category: "frontend" },
  { id: 5, name: "React Native", category: "mobile" },
  { id: 6, name: "Tailwind CSS", category: "frontend" },
  { id: 7, name: "Node.js", category: "backend" },
  { id: 8, name: "FastAPI", category: "backend" },
  { id: 9, name: "PostgreSQL", category: "database" },
  { id: 10, name: "Supabase", category: "database" },
  { id: 11, name: "Solidity", category: "web3" },
  { id: 12, name: "Move", category: "web3" },
  { id: 13, name: "Git", category: "tools" },
  { id: 14, name: "Figma", category: "tools" },
];

export const stackCategoryLabels = {
  language: "Languages",
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobile",
  database: "Database",
  web3: "Web3",
  tools: "Tools",
};
