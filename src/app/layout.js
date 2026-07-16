import localFont from "next/font/local";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GrainOverlay from "@/components/layout/GrainOverlay";
import Cursor from "@/components/layout/Cursor";
import CommandPalette from "@/components/layout/CommandPalette";
import { site } from "@/data/site";

// Satoshi (Fontshare, free for commercial use) — self-hosted, see public/fonts/satoshi/LICENSE
const satoshi = localFont({
  src: [
    { path: "../../public/fonts/satoshi/Satoshi-Variable.woff2", weight: "300 900", style: "normal" },
    { path: "../../public/fonts/satoshi/Satoshi-VariableItalic.woff2", weight: "300 900", style: "italic" },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://zen-five-liart.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} — ${site.roles[0]}`,
    template: `%s — ${site.alias}`,
  },
  description: site.bio,
  keywords: [
    site.name,
    site.alias,
    ...site.roles,
    "Web3 Developer",
    "Developer Relations",
    "Technical Writer",
    "Next.js Developer",
    "zeroReg",
    "ZeroDocs",
  ],
  authors: [{ name: site.name, url: site.social.twitter }],
  creator: site.name,
  publisher: site.name,
  formatDetection: { email: false, address: false, telephone: false },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.roles[0]}`,
    description: site.bio,
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.roles[0]}`,
    description: site.bio,
    creator: "@zenonchain",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
    types: { "application/rss+xml": `${siteUrl}/writing/rss.xml` },
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ee" },
    { media: "(prefers-color-scheme: dark)", color: "#18150f" },
  ],
};

export default function RootLayout({ children }) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    alternateName: site.alias,
    url: siteUrl,
    jobTitle: site.roles.join(", "),
    sameAs: [site.social.github, site.social.twitter, site.social.telegram],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={`${satoshi.variable} ${plexSans.variable} ${jetbrainsMono.variable} antialiased bg-bg text-text`}
      >
        <Providers>
          <Cursor />
          <GrainOverlay />
          <Navbar />
          {children}
          <Footer />
          <CommandPalette />
        </Providers>
      </body>
    </html>
  );
}
