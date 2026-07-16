import { cn } from "@/lib/utils";

export default function Tag({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-border px-3 py-1 font-mono text-xs text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
