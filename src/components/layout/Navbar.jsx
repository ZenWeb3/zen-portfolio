"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/motion";
import ThemeToggle from "@/components/layout/ThemeToggle";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#work", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: EASE }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,padding] duration-300",
        scrolled
          ? "border-b border-border bg-bg/90 py-3 backdrop-blur-md"
          : "border-b border-transparent bg-transparent py-6",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <Link href="/" className="font-display text-xl italic tracking-tight">
          zen<span className="text-accent">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative font-mono text-xs uppercase tracking-wide text-muted transition-colors duration-300 hover:text-text"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
        </div>

        <button
          type="button"
          className="p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          className="border-t border-border bg-bg px-6 py-6 md:hidden"
        >
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-sm uppercase tracking-wide text-muted hover:text-text"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </motion.nav>
      )}
    </motion.header>
  );
}
