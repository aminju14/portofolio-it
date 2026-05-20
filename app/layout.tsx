import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Amin — Software Engineer & AI System Architect",
  description:
    "9+ years of engineering experience — from Android apps to enterprise microservices and AI systems. Team Lead, Full-Stack Developer, and AI enthusiast based in Jakarta, Indonesia.",
  keywords: [
    "Muhammad Amin",
    "Software Engineer Jakarta",
    "AI System Architect",
    "Full Stack Developer Indonesia",
    "React Native Developer",
    "Node.js Developer",
    "Freelance Software Engineer",
    "Mobile App Developer",
    "Microservices",
    "LLM Integration",
    "Team Lead",
  ],
  authors: [{ name: "Muhammad Amin" }],
  metadataBase: new URL("https://aminju.vercel.app"),
  openGraph: {
    title: "Muhammad Amin — Software Engineer & AI System Architect",
    description:
      "9+ years of engineering experience — from Android apps to enterprise microservices and AI systems. Available for new opportunities.",
    type: "website",
    url: "https://aminju.vercel.app",
    images: [
      {
        url: "/images/profile.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Amin — Software Engineer & AI System Architect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Amin — Software Engineer & AI System Architect",
    description:
      "9+ years of engineering experience — from Android apps to enterprise microservices and AI systems.",
    images: ["/images/profile.png"],
  },
};

import { LanguageProvider } from "./context/LanguageContext";
import BackToTop from "./components/BackToTop";
import { Analytics } from "@vercel/analytics/next";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body>
        <LanguageProvider>
          <main style={{ paddingTop: "72px", overflowX: "hidden", maxWidth: "100vw", width: "100%" }}>
            {children}
          </main>
          <BackToTop />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
