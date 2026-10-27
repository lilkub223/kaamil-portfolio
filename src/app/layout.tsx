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
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://kaamil-portfolio-one.vercel.app";
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
