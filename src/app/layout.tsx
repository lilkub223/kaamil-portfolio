import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";

import { portfolioData } from "@/data/portfolio";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kaamil Khan | Software Engineering Portfolio",
    template: "%s | Kaamil Khan",
  },
  description:
    "Portfolio for Kaamil Khan, a DePaul University Computer Science graduate focused on backend engineering, systems thinking, compilers, concurrency, full-stack development, and early-career tech roles.",
  keywords: [
    "Kaamil Khan",
    "software engineer",
    "QA engineer",
    "quality assurance",
    "backend engineer",
    "systems",
    "concurrency",
    "compiler design",
    "full-stack",
    "DePaul University",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kaamil Khan | Software Engineering Portfolio",
    description:
      "Backend, systems, concurrency, compiler, and full-stack work from a DePaul University Computer Science graduate who finished in June 2026.",
    url: siteUrl,
    siteName: portfolioData.site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaamil Khan | Software Engineering Portfolio",
    description:
      "Portfolio with case studies in distributed systems, compiler construction, concurrent Java systems, and full-stack development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
