// Keep canonical metadata independent of Vercel preview hostnames.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://kaamil-portfolio-one.vercel.app"
).replace(/\/$/, "");
