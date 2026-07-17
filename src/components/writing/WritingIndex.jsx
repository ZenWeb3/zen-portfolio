"use client";

import { useMemo } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import EmptyState from "@/components/ui/EmptyState";
import ArticleCard from "@/components/writing/ArticleCard";
import { articles } from "@/data/articles";

export default function WritingIndex() {
  const sorted = useMemo(
    () => [...articles].sort((a, b) => new Date(b.date) - new Date(a.date)),
    [],
  );

  return (
    <main className="pb-24 pt-32 md:pt-40">
      <Container size="narrow">
        <SectionHeading
          kicker="Writing"
          title="Articles"
          description="Long-form pieces on developer tooling, Web3 infrastructure, and the craft of shipping software."
        />

        <div className="mt-12">
          {sorted.length === 0 ? (
            <EmptyState
              title="Nothing here yet"
              description="New writing is on the way."
              className="mt-8"
            />
          ) : (
            sorted.map((article, i) => (
              <ArticleCard key={article.id} article={article} delay={Math.min(i * 0.05, 0.2)} />
            ))
          )}
        </div>
      </Container>
    </main>
  );
}
