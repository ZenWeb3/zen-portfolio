"use client";

import { motion } from "framer-motion";
import SplitText from "@/components/ui/SplitText";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import AnimatedStat from "@/components/ui/AnimatedStat";
import Container from "@/components/ui/Container";
import { site } from "@/data/site";
import { EASE } from "@/lib/motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center pb-16 pt-32 md:pt-40">
      <Container>
        {site.available && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-8 flex items-center gap-2"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-xs uppercase tracking-wide text-muted">
              Available for opportunities
            </span>
          </motion.div>
        )}

        <SplitText
          as="h1"
          lines={site.roles}
          delay={0.1}
          className="font-display text-[11vw] leading-[0.98] tracking-tight md:text-[6vw] lg:text-[4.6vw]"
        />

        <div className="mt-10 grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-end">
          <Reveal delay={0.5}>
            <p className="max-w-xl text-lg text-muted md:text-xl">
              {site.tagline} I'm {site.name}, known as{" "}
              <span className="text-accent">{site.alias}</span>, working across
              software engineering, developer education, and Web3 infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button href="/#work" variant="primary">
                View Projects
              </Button>
              <Button href="/writing" variant="secondary">
                Read Articles
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-6 md:justify-items-end">
              <AnimatedStat value={2} suffix="+" label="Hackathon Wins" />
              <AnimatedStat value={10} suffix="+" label="Projects Shipped" />
              <AnimatedStat value={4} suffix="+" label="Years Building" />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
