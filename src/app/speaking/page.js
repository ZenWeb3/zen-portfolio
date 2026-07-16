import SpeakingIndex from "@/components/speaking/SpeakingIndex";
import { talks } from "@/data/talks";

export const metadata = {
  title: "Speaking",
  description:
    "Conference talks, workshops, hackathons, and panels on developer tooling and Web3 infrastructure.",
};

export default function SpeakingPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: talks.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Event",
        name: t.topic,
        startDate: t.date,
        location: { "@type": "Place", name: t.location },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SpeakingIndex />
    </>
  );
}
