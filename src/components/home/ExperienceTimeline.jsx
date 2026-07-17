import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { experience, achievements } from "@/data/experience";

const typeLabels = {
  engineering: "Engineering",
  devrel: "Developer Relations",
  community: "Community",
  writing: "Writing",
};

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="border-t border-border py-24 md:py-36 scroll-mt-24">
      <Container>
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-20">
          <SectionHeading
            index="03"
            kicker="Experience"
            title="Where I've worked"
            description="Real-world products across healthcare, hospitality, and Web3, plus the community work around them."
          />

          <div>
            {experience.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 0.06} className="border-b border-border py-6 first:pt-0">
                <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                  <div>
                    <h3 className="font-display text-xl italic md:text-2xl">{exp.role}</h3>
                    <p className="mt-1 text-sm text-accent">{exp.org}</p>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wide text-muted">
                    <span>{typeLabels[exp.type]}</span>
                    <span className="text-border">·</span>
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="mt-3 max-w-xl text-sm text-muted md:text-base">{exp.description}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-20 border-t border-border pt-16">
          <Reveal>
            <span className="kicker">Recognition</span>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {achievements.map((a, i) => (
              <Reveal key={a.id} delay={i * 0.08}>
                <h4 className="font-display text-lg italic md:text-xl">{a.title}</h4>
                <p className="mt-2 text-sm text-muted">{a.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
