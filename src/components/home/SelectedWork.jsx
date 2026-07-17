"use client";

import Link from "next/link";
import { ArrowDown } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

const VISIBLE_COUNT = 3;

export default function SelectedWork() {
  const ordered = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  const visible = ordered.slice(0, VISIBLE_COUNT);
  const remaining = ordered.length - VISIBLE_COUNT;

  return (
    <section id="work" className="border-t border-border py-24 md:py-36 scroll-mt-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading index="02" kicker="Selected Work" title="Things I've built" />
          <a
            href={site.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mb-1 shrink-0 font-mono text-xs uppercase tracking-wide text-muted hover:text-accent"
          >
            All repositories ↗
          </a>
        </div>

        <div className="mt-16">
          {visible.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              delay={Math.min(i * 0.04, 0.2)}
              featured={project.featured}
            />
          ))}
        </div>

        {remaining > 0 && (
          <div className="mt-12 flex justify-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-wide text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              View All Projects ({remaining} more)
              <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
            </Link>
          </div>
        )}
      </Container>
    </section>
  );
}
