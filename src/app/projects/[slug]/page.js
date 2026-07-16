import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import CaseStudyBody from "@/components/projects/CaseStudyBody";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    openGraph: { title: project.title, description: project.description },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="pb-24 pt-32 md:pt-40">
      <Container size="narrow">
        <Reveal>
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-muted hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Selected Work
          </Link>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-8 font-display text-5xl italic leading-[1.05] md:text-7xl">
            {project.title}
          </h1>
        </Reveal>

        <Reveal delay={0.14}>
          <p className="mt-6 max-w-xl text-lg text-muted">{project.description}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.tech.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.26}>
          <div className="mt-6 flex flex-wrap gap-5 border-b border-border pb-10">
            {project.link !== "#" && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm hover:text-accent"
              >
                Live demo <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm hover:text-accent"
              >
                <GithubIcon className="h-3.5 w-3.5" /> Source
              </a>
            )}
          </div>
        </Reveal>
      </Container>

      <Container size="narrow" className="mt-16">
        {project.caseStudy?.length > 0 ? (
          <CaseStudyBody project={project} />
        ) : (
          <p className="text-muted">
            A full write-up for this project is on the way. In the meantime, explore the
            source or live demo above.
          </p>
        )}
      </Container>
    </main>
  );
}
