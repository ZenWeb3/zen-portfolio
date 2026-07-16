import { cn } from "@/lib/utils";

export default function FilterTabs({ options, active, onChange }) {
  return (
    <div className="flex flex-wrap gap-2 border-b border-border pb-6">
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          onClick={() => onChange(option.id)}
          className={cn(
            "rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-wide transition-colors duration-300",
            active === option.id
              ? "border-accent text-accent"
              : "border-border text-muted hover:border-text hover:text-text",
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
