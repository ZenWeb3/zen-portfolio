import { articles } from "@/data/articles";
import { site } from "@/data/site";

const siteUrl = "https://zen-five-liart.vercel.app";

function escapeXml(str) {
  return str.replace(/[<>&'"]/g, (c) => ({
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&apos;",
    '"': "&quot;",
  })[c]);
}

export async function GET() {
  const items = articles
    .filter((a) => a.url)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(
      (a) => `
    <item>
      <title>${escapeXml(a.title)}</title>
      <link>${a.url}</link>
      <guid>${a.url}</guid>
      <pubDate>${new Date(a.date).toUTCString()}</pubDate>
      <category>${escapeXml(a.kind)}</category>
    </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(site.name)} — Writing</title>
    <link>${siteUrl}/writing</link>
    <atom:link href="${siteUrl}/writing/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(site.bio)}</description>
    <language>en-us</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
