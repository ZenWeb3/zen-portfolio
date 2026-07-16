"use client";

import { useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FilterTabs from "@/components/ui/FilterTabs";
import EmptyState from "@/components/ui/EmptyState";
import ArticleCard from "@/components/writing/ArticleCard";
import { articles, articleKinds } from "@/data/articles";

export default function WritingIndex() {
  const [active, setActive] = useState("all");

  const filtered = useMemo(() => {
    const list =
      active === "all" ? articles : articles.filter((a) => a.kind === active);
    return [...list].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, [active]);

  return (
    <main className="pb-24 pt-32 md:pt-40">
      <Container size="narrow">
        <SectionHeading
          kicker="Writing"
          title="Articles, tutorials & guides"
          description="Long-form pieces on developer tooling, Web3 infrastructure, and the craft of shipping software."
        />

        <div className="mt-12">
          <FilterTabs options={articleKinds} active={active} onChange={setActive} />

          <div className="mt-4">
            {filtered.length === 0 ? (
              <EmptyState
                title="Nothing here yet"
                description="New writing in this category is on the way."
                className="mt-8"
              />
            ) : (
              filtered.map((article, i) => (
                <ArticleCard key={article.id} article={article} delay={Math.min(i * 0.05, 0.2)} />
              ))
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}
