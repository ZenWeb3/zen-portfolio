import { cn } from "@/lib/utils";
import Reveal from "@/components/ui/Reveal";

export default function SectionHeading({
  index,
  kicker,
  title,
  description,
  align = "left",
  className,
}) {
  return (
    <div className={cn(align === "center" && "text-center", className)}>
      <Reveal>
        <span className="kicker">
          {index ? `${index} — ` : ""}
          {kicker}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 max-w-xl text-base text-muted md:text-lg",
              align === "center" && "mx-auto",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
