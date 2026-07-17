"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FilterTabs from "@/components/ui/FilterTabs";
import EmptyState from "@/components/ui/EmptyState";
import TalkCard from "@/components/speaking/TalkCard";
import { talks, talkTypes } from "@/data/talks";

export default function SpeakingIndex() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    const list = active === "all" ? talks : talks.filter((t) => t.type === active);
    return [...list].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [active]);

  return (
    <main className="pb-24 pt-32 md:pt-40">
      <Container size="narrow">
        <SectionHeading
          kicker="Speaking"
          title="Talks, workshops & panels"
          description="Conference talks, workshops, and hackathon presentations, with slides and recordings where available."
        />

        <div className="mt-12">
          <FilterTabs options={talkTypes} active={active} onChange={setActive} />

          <div className="mt-4">
            {filtered.length === 0 ? (
              <EmptyState
                title="Nothing here yet"
                description="New talks in this category will show up here."
                className="mt-8"
              />
            ) : (
              filtered.map((talk, i) => (
                <TalkCard key={talk.id} talk={talk} index={i} delay={Math.min(i * 0.05, 0.2)} />
              ))
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
