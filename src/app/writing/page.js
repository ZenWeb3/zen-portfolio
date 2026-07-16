import WritingIndex from "@/components/writing/WritingIndex";
import { articles } from "@/data/articles";

export const metadata = {
  title: "Writing",
  description:
    "Articles, tutorials, and technical guides on developer tooling, Web3 infrastructure, and shipping software.",
};

export default function WritingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles
      .filter((a) => a.url)
      .map((a, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: a.url,
        name: a.title,
      })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WritingIndex />
    </>
  );
}
