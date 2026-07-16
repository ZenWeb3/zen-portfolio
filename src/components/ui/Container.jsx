import { cn } from "@/lib/utils";

export default function Container({ children, className, size = "default" }) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-10",
        size === "default" && "max-w-6xl",
        size === "narrow" && "max-w-3xl",
        size === "wide" && "max-w-7xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
