import { site } from "@/data/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-10">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-2 font-mono text-xs text-muted">
          <span>© {year}</span>
          <span className="text-border">·</span>
          <span>{site.name}</span>
          <span className="text-border">·</span>
          <span className="text-accent">@{site.alias.toLowerCase()}</span>
          <span className="text-border">·</span>
          <span>{site.location}</span>
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {site.available ? "Available for opportunities" : "Not currently available"}
        </div>
      </Container>
    </footer>
  );
}
