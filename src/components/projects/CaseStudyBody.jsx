import Reveal from "@/components/ui/Reveal";

export default function CaseStudyBody({ project }) {
  return (
    <div className="grid gap-16 md:grid-cols-[1fr_2fr]">
      {project.highlights?.length > 0 && (
        <Reveal>
          <span className="kicker">Highlights</span>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((h) => (
              <li key={h} className="border-t border-border pt-3 text-sm text-muted first:border-t-0 first:pt-0">
                {h}
              </li>
            ))}
          </ul>
        </Reveal>
      )}

      <div className="space-y-6">
        {project.caseStudy.map((paragraph, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <p className="text-lg leading-relaxed text-muted md:text-xl">{paragraph}</p>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
