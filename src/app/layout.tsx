import type React from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Header } from "@/components/landingPage/Header";
import Footer from "@/components/landingPage/footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const baseUrl = "https://areebaxirfan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Areeba Irfan | AI & Full-Stack Developer, GIAIC Coordinator",
    template: "%s | Areeba Irfan",
  },
  description:
    "Associate Degree in Computer Science student, AI & Full-Stack Developer, GIAIC Coordinator, and IT Instructor. Building AI and full-stack projects with React, Next.js, and Python. Open to opportunities.",
  keywords: [
    "full stack developer",
    "web developer",
    "react developer",
    "next.js",
    "portfolio",
    "frontend",
    "backend",
    "javascript",
    "typescript",
    "python",
    "ai engineer",
    "machine learning",
    "openai",
    "gemini ai",
    "agentic ai",
    "giaic coordinator",
    "associate degree computer science",
  ],
  authors: [{ name: "Areeba Irfan" }],
  creator: "Areeba Irfan",
  publisher: "Areeba Irfan",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "Areeba Irfan | Portfolio",
    title: "Areeba Irfan | AI & Full-Stack Developer, GIAIC Coordinator",
    description:
      "Associate Degree in Computer Science student, AI & Full-Stack Developer, GIAIC Coordinator, and IT Instructor. Building AI and full-stack projects with React, Next.js, and Python.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Areeba Irfan - AI & Full-Stack Developer Portfolio",
        type: "image/svg+xml",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Areeba Irfan | AI & Full-Stack Developer, GIAIC Coordinator",
    description:
      "Associate Degree in Computer Science student, AI & Full-Stack Developer, GIAIC Coordinator, and IT Instructor.",
    creator: "@areebaXirfan",
    images: ["/og-image.svg"],
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// JSON-LD Structured Data for Person/Developer
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Areeba Irfan",
  url: baseUrl,
  image: `${baseUrl}/areebairfan.png`,
  sameAs: [
    "https://www.linkedin.com/in/areebairfan/",
    "https://github.com/AreebaxIrfan",
    "https://x.com/areebaXirfan",
    "https://www.instagram.com/areebaxirfan/",
    "https://www.facebook.com/AreebaxIrfan/",
    "https://medium.com/@areebaxirfan",
  ],
  jobTitle: "AI & Full-Stack Developer",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "FastAPI",
    "AI",
    "Machine Learning",
    "OpenAI",
    "Google Gemini",
    "Agentic AI",
    "Full Stack Development",
    "API Development",
  ],
  description:
    "Associate Degree in Computer Science student, AI & Full-Stack Developer, GIAIC Coordinator, and IT Instructor building AI and full-stack projects.",
  knowsLanguage: ["English", "Urdu"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href={baseUrl} />
        <link rel="dns-prefetch" href="https://vercel.app" />
        <link rel="dns-prefetch" href="https://github.com" />
        <meta name="theme-color" content="#14b8a6" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#06b6d4" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.json" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <ScrollReveal />
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-teal-700 text-white rounded-md"
          >
            Skip to main content
          </a>
          <Header />
          <main id="main-content" className="min-h-screen" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}