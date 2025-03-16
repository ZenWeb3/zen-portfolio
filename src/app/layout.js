import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ 
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: "400", 
});
 
export const metadata = {
  metadataBase: new URL("https://zen-portfolio-phi.vercel.app/"),
  title: "Samuel Edohoeket | Creative Software Engineer",
  description: "Creative Software Engineer with 4 years of experience, specializing in web development and app development. Building scalable products with great user experiences.",
  keywords: [
    "Software Engineer",
    "Web Development",
    "App Development",
    "Web3 Enthusiast",
    "Samuel Edohoeket"
  ],
  authors: [{ name: "Samuel Edohoeket" }],
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
    siteName: "Samuel Edohoekt Portfolio",
    title: "Robinson Honour | Creative Software Engineer",
    description: "Creative Software Engineer specializing in web development, app development, robotics, and cloud computing. Building scalable products with great user experiences.",
    images: [
      {
        url: "/portfolio-img.png",
        width: 1200,
        height: 630,
        alt: "Samuel Edohoeket - Creative Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Edohoeket | Creative Software Engineer",
    description: "Creative Software Engineer building scalable products with great user experiences.",
    creator: "@samuel_edohoeketet",
    images: ["/portfolio-img.png"],
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
  verification: {
    google: "", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
