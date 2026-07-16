import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import { site } from "@/data/site";
import { stacks, stackCategoryLabels } from "@/data/stacks";
import { contributorRoles } from "@/data/contributor";
import GithubActivity from "@/components/home/GithubActivity";

export default function About() {
  const grouped = Object.entries(stackCategoryLabels).map(([key, label]) => ({
    label,
    items: stacks.filter((s) => s.category === key),
  }));

  const fhenix = contributorRoles.fhenix;

  return (
    <section id="about" className="border-t border-border py-24 md:py-36 scroll-mt-24">
      <Container>
        <SectionHeading index="01" kicker="About" title="Building at the edges of software, education, and Web3" />

        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-24">
          <div className="space-y-6">
            {site.bioParagraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-muted md:text-lg">{p}</p>
              </Reveal>
            ))}

            {fhenix.enabled && (
              <Reveal>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  {fhenix.role} at{" "}
                  <a
                    href={fhenix.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline-offset-4 hover:underline"
                  >
                    {fhenix.org}
                  </a>
                  . {fhenix.description}
                </p>
              </Reveal>
            )}

            <Reveal>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://www.npmjs.com/package/zeroreg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent"
                >
                  npm/zeroreg ↗
                </a>
                <a
                  href="https://pypi.org/project/zeroreg/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted underline decoration-border underline-offset-4 hover:text-accent hover:decoration-accent"
                >
                  pypi/zeroreg ↗
                </a>
              </div>
            </Reveal>
          </div>

          <div className="space-y-8">
            {grouped.map(
              (group, i) =>
                group.items.length > 0 && (
                  <Reveal key={group.label} delay={i * 0.05}>
                    <h3 className="kicker mb-3">{group.label}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <Tag key={item.id}>{item.name}</Tag>
                      ))}
                    </div>
                  </Reveal>
                ),
            )}
          </div>
        </div>

        <GithubActivity />
      </Container>
    </section>
  );
}
