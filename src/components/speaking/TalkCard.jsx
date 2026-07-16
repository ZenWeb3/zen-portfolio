import Image from "next/image";
import { ExternalLink, MapPin, Play } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import { formatDate } from "@/lib/utils";

const typeLabels = {
  talk: "Talk",
  workshop: "Workshop",
  hackathon: "Hackathon",
  panel: "Panel",
};

export default function TalkCard({ talk, index, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <article className="grid gap-6 border-b border-border py-10 first:pt-0 md:grid-cols-[220px_1fr] md:gap-10">
        <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-xl border border-border bg-surface">
          {talk.photos?.[0] ? (
            <Image
              src={talk.photos[0]}
              alt={talk.event}
              fill
              sizes="220px"
              className="object-cover"
            />
          ) : (
            <span className="font-display text-4xl italic text-border">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
        </div>

        <div>
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wide text-muted">
            <Tag>{typeLabels[talk.type]}</Tag>
            <span>{formatDate(talk.date)}</span>
            {talk.location && (
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" /> {talk.location}
              </span>
            )}
            {talk.sample && <span className="text-accent">Sample</span>}
          </div>

          <h3 className="mt-3 font-display text-2xl italic leading-snug md:text-3xl">
            {talk.topic}
          </h3>
          <p className="mt-1 text-sm text-accent">{talk.event}</p>
          <p className="mt-3 max-w-xl text-sm text-muted md:text-base">{talk.description}</p>

          <div className="mt-4 flex flex-wrap gap-5">
            {talk.videoUrl && (
              <a
                href={talk.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent"
              >
                <Play className="h-3.5 w-3.5" /> Watch
              </a>
            )}
            {talk.slidesUrl && (
              <a
                href={talk.slidesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-muted hover:text-accent"
              >
                <ExternalLink className="h-3.5 w-3.5" /> Slides
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
