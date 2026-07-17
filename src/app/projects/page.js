import ProjectsIndex from "@/components/projects/ProjectsIndex";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects",
  description:
    "Products, tools, and hackathon builds spanning Web3, AI agents, and developer tooling.",
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `/projects/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProjectsIndex />
    </>
  );
}
