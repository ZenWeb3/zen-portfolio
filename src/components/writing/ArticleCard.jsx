import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import Tag from "@/components/ui/Tag";
import { formatDate } from "@/lib/utils";
import { cn } from "@/lib/utils";

export default function ArticleCard({ article, delay = 0 }) {
  const Wrapper = article.url ? "a" : "div";
  const wrapperProps = article.url
    ? { href: article.url, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Reveal delay={delay}>
      <Wrapper
        {...wrapperProps}
        className={cn(
          "group grid gap-4 border-b border-border py-8 first:pt-0 md:grid-cols-[1fr_auto] md:items-center md:gap-8",
          article.url && "cursor-pointer",
        )}
      >
        <div>
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wide text-muted">
            <span>{article.platform}</span>
            <span className="text-border">·</span>
            <span>{formatDate(article.date)}</span>
            <span className="text-border">·</span>
            <span>{article.readingTime} min read</span>
            {article.sample && (
              <>
                <span className="text-border">·</span>
                <span className="text-accent">Sample</span>
              </>
            )}
          </div>
          <h3
            className={cn(
              "mt-3 font-display text-2xl italic leading-snug md:text-3xl",
              article.url && "transition-colors duration-300 group-hover:text-accent",
            )}
          >
            {article.title}
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        </div>

        {article.url && (
          <ArrowUpRight className="h-5 w-5 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        )}
      </Wrapper>
    </Reveal>
  );
}
