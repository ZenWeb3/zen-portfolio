import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

export default function ProjectCard({ project, index, delay = 0, featured = false }) {
  return (
    <Reveal delay={delay} className={cn(featured && "md:col-span-2")}>
      <article className="group border-b border-border py-10 md:py-12">
        <div
          className={cn(
            "grid gap-6 md:items-center md:gap-10",
            featured ? "md:grid-cols-[1.1fr_1fr]" : "md:grid-cols-[auto_1fr]",
          )}
        >
          <div
            className={cn(
              "relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl border border-border bg-surface transition-colors duration-500 group-hover:border-accent/50",
              !featured && "md:w-56",
            )}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            ) : (
              <span className="font-display text-6xl italic text-border transition-colors duration-500 group-hover:text-accent/30">
                {String(index + 1).padStart(2, "0")}
              </span>
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="font-display text-2xl italic md:text-3xl">{project.title}</h3>
              {project.award && <Tag className="border-accent/40 text-accent">{project.award}</Tag>}
              {project.contribution && <Tag>Contributor</Tag>}
            </div>

            <p className="mt-3 max-w-lg text-sm text-muted md:text-base">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="font-mono text-xs text-muted">
                  {tech}
                  {project.tech.at(-1) !== tech && <span className="text-border"> · </span>}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-5">
              {project.caseStudy?.length > 0 && (
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-text underline decoration-border underline-offset-4 hover:decoration-accent"
                >
                  Case study <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              )}
              {project.link !== "#" && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent"
                >
                  Live <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${project.title} on GitHub`}
                  className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent"
                >
                  <GithubIcon className="h-3.5 w-3.5" /> Source
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
