import { Send } from "lucide-react";
import { GithubIcon, XIcon } from "@/components/ui/Icons";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import CopyButton from "@/components/ui/CopyButton";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-border py-24 md:py-40 scroll-mt-24">
      <Container size="narrow" className="text-center">
        <Reveal>
          <span className="kicker">04 — Contact</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-4 font-display text-4xl italic leading-[1.05] md:text-6xl">
            Let's build something worth shipping.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-md text-base text-muted md:text-lg">
            Open to engineering roles, DevRel collaborations, and technical
            writing. Reach out and I'll get back to you.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={`mailto:${site.social.email}`} variant="primary">
              Say Hello <Send className="h-3.5 w-3.5" />
            </Button>
            <CopyButton value={site.social.email} />
          </div>
        </Reveal>

        <Reveal delay={0.32}>
          <div className="mt-16 flex items-center justify-center gap-6 border-t border-border pt-8">
            <a
              href={site.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-accent"
            >
              <GithubIcon className="h-4 w-4" /> GitHub
            </a>
            <span className="text-border">·</span>
            <a
              href={site.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-accent"
            >
              <XIcon className="h-4 w-4" /> Twitter
            </a>
            <span className="text-border">·</span>
            <a
              href={site.social.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-muted hover:text-accent"
            >
              <Send className="h-4 w-4" /> Telegram
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-8 font-mono text-xs text-muted">
            <span className="text-accent">Now —</span> {site.now}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
