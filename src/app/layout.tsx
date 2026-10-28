import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { portfolioData } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
import { siteUrl } from "@/lib/site";
export const metadata: Metadata = {
  ...(siteUrl
    ? { metadataBase: new URL(siteUrl), alternates: { canonical: "/" } }
    : {}),
  title: {
    default: "Kaamil Khan | Software Engineer",
    template: "%s | Kaamil Khan",
  },
  description: portfolioData.site.description,
  keywords: [
    "Kaamil Khan",
    "software engineer",
    "backend",
    "full-stack",
    "Java",
    "Python",
    "software testing",
    "Chicago",
    "DePaul University",
  ],
  openGraph: {
    title: "Kaamil Khan | Software Engineer",
    description: portfolioData.site.description,
    siteName: portfolioData.site.name,
    locale: "en_US",
    type: "website",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaamil Khan | Software Engineer",
    description: portfolioData.site.description,
  },
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "@id": `${siteUrl}/#profile`,
              url: siteUrl,
              mainEntity: {
                "@type": "Person",
                "@id": `${siteUrl}/#person`,
                name: portfolioData.name,
                url: siteUrl,
                description: portfolioData.site.description,
                sameAs: [
                  portfolioData.links.github,
                  portfolioData.links.linkedin,
                ],
                alumniOf: {
                  "@type": "CollegeOrUniversity",
                  name: "DePaul University",
                },
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
        {children}
        {process.env.VERCEL === "1" && <Analytics />}
      </body>
    </html>
  );
}
