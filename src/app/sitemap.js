import { projects } from "@/data/projects";

const siteUrl = "https://zen-five-liart.vercel.app";

export default function sitemap() {
  const staticRoutes = ["", "/writing", "/speaking"].map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  const projectRoutes = projects
    .filter((p) => p.caseStudy?.length > 0)
    .map((p) => ({
      url: `${siteUrl}/projects/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    }));

  return [...staticRoutes, ...projectRoutes];
}
