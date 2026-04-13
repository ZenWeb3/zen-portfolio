import localFont from "next/font/local";
import "./globals.css";

// Using existing Signika fonts
const signika = localFont({
  src: [
    {
      path: "../../public/fonts/Signika-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Signika-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Signika-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Signika-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/Signika-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sora",
});

export const metadata = {
  metadataBase: new URL("https://zen-portfolio-phi.vercel.app/"),
  title: "Samuel Edohoeket | Zen — Software Developer",
  description:
    "Software Developer specializing in Web3, AI-assisted development, and full-stack applications. Building the future with code.",
  keywords: [
    "Samuel Edohoeket",
    "Zen",
    "ZeroDocs",
    "Top akwa ibom software developer",
    "Zen software engineer",
    "ZenWeb3",
    "Software Developer",
    "Web3 Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Python",
    "Nigeria Developer",
    "Hackathon Winner",
    "zeroReg",
    "RemitAI",
  ],
  authors: [{ name: "Samuel Edohoeket", url: "https://twitter.com/zenonchain" }],
  creator: "Samuel Edohoeket",
  publisher: "Samuel Edohoeket",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zen-portfolio-phi.vercel.app/",
    siteName: "Zen Portfolio",
    title: "Samuel Edohoeket | Zen — Software Developer",
    description:
      "Software Developer specializing in Web3, AI-assisted development, and full-stack applications. Building the future with code.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Samuel Edohoeket - Zen | Software Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Edohoeket | Zen — Software Developer",
    description:
      "Software Developer specializing in Web3, AI-assisted development, and full-stack applications.",
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
    canonical: "https://zen-portfolio-phi.vercel.app/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://zen-portfolio-phi.vercel.app/" />
        <meta name="theme-color" content="#0a0a0a" />
      </head>
      <body
        className={`${signika.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}