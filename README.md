# Kaamil Khan — Software Engineering Portfolio

A responsive Next.js 14 / React / TypeScript portfolio with a light editorial design, four project case studies, technical diagrams, and a downloadable resume. Styled with CSS and the existing Tailwind toolchain. Inter is fetched at build time and self-hosted by Next.js.

## Development

```sh
npm ci
npm run dev
```

## Validation

```sh
npm run lint
npm run build
npm run start
# In another terminal, with the production server running:
npm run test:smoke
```

The smoke test checks project pages, section anchors, resume delivery, social images, production SEO URLs, the 404 route, and the redirect from the previous stock-exchange case-study URL. An alternative test origin can be passed after `--`.

## Content and configuration

- `src/data/portfolio.ts`: verified profile links, project descriptions and case-study notes, skills, and experience.
- `src/components/portfolio-page.tsx`: homepage composition and personal introduction.
- `src/components/project-diagram.tsx`: original architecture, API, compiler, and data-flow diagrams. These are explanatory diagrams, not product screenshots.
- `src/app/projects/[slug]/page.tsx`: statically generated case studies.
- `src/app/globals.css`: visual system and responsive layouts.
- `public/resume/kaamil-khan-resume.pdf`: preferred general software engineering resume supplied for the redesign.

Set `NEXT_PUBLIC_SITE_URL` when deploying to a different domain. The default is the verified current public portfolio URL: https://kaamil-portfolio-one.vercel.app. Update the same fallback in `layout.tsx`, `sitemap.ts`, and `robots.ts` if the production domain changes permanently.

## Content sources

Project descriptions were checked against the public Readlytics, LLM Software Testing Assistant, OurPascal Compiler, and Nutrition App repositories and the supplied resumes. Readlytics is dated January–June 2026. The system diagram depicts the implemented React → three backend services → shared PostgreSQL flow; planned RabbitMQ integration is deliberately omitted. OurPascal emits stack-based VM instructions.

## Browser review

Desktop and mobile checks are recorded in `QA.md`. Lighthouse scores are not claimed without an audit.
