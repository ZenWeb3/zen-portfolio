"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FilterTabs from "@/components/ui/FilterTabs";
import EmptyState from "@/components/ui/EmptyState";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects, projectCategories } from "@/data/projects";

export default function ProjectsIndex() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    const list = active === "all" ? projects : projects.filter((p) => p.category === active);
    return [...list].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, [active]);

  return (
    <main className="pb-24 pt-32 md:pt-40">
      <Container size="narrow">
        <SectionHeading
          kicker="Projects"
          title="Things I've built"
          description="Products, tools, and hackathon builds spanning Web3, AI agents, and developer tooling."
        />

        <div className="mt-12">
          <FilterTabs options={projectCategories} active={active} onChange={setActive} />

          <div className="mt-4">
            {filtered.length === 0 ? (
              <EmptyState
                title="Nothing here yet"
                description="No projects in this category yet."
                className="mt-8"
              />
            ) : (
              filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  delay={Math.min(i * 0.04, 0.2)}
                  featured={project.featured}
                />
              ))
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
