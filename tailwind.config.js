/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        canvasStrong: "var(--canvas-strong)",
        surface: "var(--surface)",
        surfaceStrong: "var(--surface-strong)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        line: "var(--line)",
        accent: "var(--accent)",
        accentStrong: "var(--accent-strong)",
        accentSoft: "var(--accent-soft)",
        warm: "var(--warm)",
      },
      fontFamily: {
        display: ["Satoshi", "Avenir Next", "Segoe UI", "sans-serif"],
        body: ["Manrope", "Avenir Next", "Segoe UI", "sans-serif"],
        mono: ["IBM Plex Mono", "SFMono-Regular", "Menlo", "monospace"],
      },
      boxShadow: {
        panel: "0 24px 60px rgba(16, 32, 51, 0.08)",
        lift: "0 18px 36px rgba(16, 32, 51, 0.12)",
      },
      maxWidth: {
        container: "74rem",
      },
      letterSpacing: {
        section: "0.32em",
      },
    },
  },
  plugins: [],
};

module.exports = config;
