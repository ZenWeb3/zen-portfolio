import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "group inline-flex items-center gap-2 text-sm transition-colors duration-300 focus-visible:outline-none";

const variants = {
  primary:
    "rounded-full bg-text px-6 py-3 text-bg hover:bg-accent",
  secondary:
    "rounded-full border border-border px-6 py-3 hover:border-accent hover:text-accent",
  link: "border-b border-transparent pb-0.5 hover:border-accent hover:text-accent",
};

export default function Button({
  children,
  href,
  variant = "primary",
  className,
  external,
  ...props
}) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    const isExternal = external ?? /^https?:\/\//.test(href);
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
