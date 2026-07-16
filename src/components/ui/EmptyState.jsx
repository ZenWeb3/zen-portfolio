import { cn } from "@/lib/utils";

export default function EmptyState({ title, description, className }) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed border-border px-8 py-24 text-center",
        className,
      )}
    >
      <span className="font-display text-3xl italic text-muted">{title}</span>
      {description && (
        <p className="mt-3 max-w-sm text-sm text-muted">{description}</p>
      )}
    </div>
  );
}
