# Kaamil Khan — Software Engineering Portfolio

A responsive Next.js / React / TypeScript portfolio with a light editorial design, four project case studies, technical diagrams, and a downloadable resume. Inter is self-hosted by Next.js; the existing Tailwind/CSS styling and React 18 stack are retained.

## Development and validation

Use Node.js 20 or later.

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build
npm run test:browser
npm audit --omit=dev
```

The Playwright suite uses an installed Google Chrome and starts the production server automatically. It checks all five pages at nine widths from 320px to 1920px, navigation/history, mobile menu and focus, reduced motion, text scaling, project routes, console errors, and an actual PDF download. Screenshots and traces are written to ignored test output directories.

To check HTTP responses, metadata, icons, sharing images, and PDF delivery:

```sh
npm run start
# In another terminal:
npm run test:smoke
```

Pass an alternative origin after `--` to the HTTP smoke test, or set `PLAYWRIGHT_BASE_URL` for browser tests against an existing server. Protected Vercel previews require authentication.

## Content and configuration

- `src/data/portfolio.ts`: profile links, project descriptions, case-study/validation notes, skills, and experience.
- `src/components/portfolio-page.tsx`: homepage composition and personal introduction.
- `src/components/project-diagram.tsx`: original diagrams, with accessible text equivalents and responsive CSS layouts.
- `src/app/projects/[slug]/page.tsx`: the four statically generated project case studies.
- `src/app/globals.css`: visual system and responsive styling.
- `src/lib/site.ts`: canonical site URL; set `NEXT_PUBLIC_SITE_URL` for a different production domain.
- `public/resume/kaamil-khan-resume.pdf`: the supplied preferred general software engineering resume.

Vercel Analytics is rendered only when `VERCEL=1`. The live deployment serves its script, while ordinary local builds omit the unavailable Vercel-only endpoint. Canonical URLs intentionally reference the production domain rather than preview hostnames.

## Maintenance

The refinement updates Next.js from 14.2.13 to 15.5.28 to resolve reported production advisories. Project routes use the asynchronous `params` API. PostCSS 8.5.32 is shared through an npm override because the framework otherwise pins an older nested release. Keep the lockfile and override together, and rerun the production dependency audit after dependency changes. The ESLint CLI replaces the deprecated `next lint` command.

## Evidence

Project content is grounded in the supplied resumes and actual repositories. Readlytics remains dated January–June 2026. The architecture depicts the implemented three-service flow to a shared PostgreSQL database; RabbitMQ is not depicted as an active integration. Nutrition App validation is distinguished from an automated suite, which its scaffold does not provide.

See `QA.md` for the final verification results and limitations.
