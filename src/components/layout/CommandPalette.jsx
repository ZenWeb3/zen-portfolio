"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { Mail } from "lucide-react";
import { GithubIcon, XIcon } from "@/components/ui/Icons";
import { site } from "@/data/site";

const destinations = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#work" },
  { label: "Writing", href: "/writing" },
  { label: "Speaking", href: "/speaking" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((v) => !v);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function go(href) {
    setOpen(false);
    router.push(href);
  }

  function goExternal(href) {
    setOpen(false);
    window.open(href, "_blank", "noopener,noreferrer");
  }

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Command palette"
      overlayClassName="fixed inset-0 z-[99] bg-text/20 backdrop-blur-sm"
      contentClassName="fixed left-1/2 top-28 z-[100] w-[92vw] max-w-lg -translate-x-1/2 overflow-hidden rounded-2xl border border-border bg-bg shadow-2xl outline-none"
    >
      <div className="flex items-center border-b border-border px-4">
        <Command.Input
          placeholder="Jump to..."
          className="w-full bg-transparent py-4 font-sans text-sm text-text placeholder:text-muted focus:outline-none"
        />
        <kbd className="font-mono text-[10px] text-muted">ESC</kbd>
      </div>
      <Command.List className="max-h-80 overflow-y-auto p-2">
        <Command.Empty className="py-8 text-center font-mono text-xs text-muted">
          No results found.
        </Command.Empty>

        <Command.Group heading="Navigate" className="px-2 py-2 font-mono text-[10px] uppercase tracking-wide text-muted">
          {destinations.map((d) => (
            <Command.Item
              key={d.href}
              onSelect={() => go(d.href)}
              className="cursor-pointer rounded-lg px-3 py-2.5 text-sm text-text data-[selected=true]:bg-surface data-[selected=true]:text-accent"
            >
              {d.label}
            </Command.Item>
          ))}
        </Command.Group>

        <Command.Group heading="Connect" className="px-2 py-2 font-mono text-[10px] uppercase tracking-wide text-muted">
          <Command.Item
            onSelect={() => goExternal(site.social.github)}
            className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-text data-[selected=true]:bg-surface data-[selected=true]:text-accent"
          >
            <GithubIcon className="h-3.5 w-3.5" /> GitHub
          </Command.Item>
          <Command.Item
            onSelect={() => goExternal(site.social.twitter)}
            className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-text data-[selected=true]:bg-surface data-[selected=true]:text-accent"
          >
            <XIcon className="h-3.5 w-3.5" /> Twitter
          </Command.Item>
          <Command.Item
            onSelect={() => goExternal(`mailto:${site.social.email}`)}
            className="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-text data-[selected=true]:bg-surface data-[selected=true]:text-accent"
          >
            <Mail className="h-3.5 w-3.5" /> Email
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
