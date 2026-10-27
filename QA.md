# Redesign verification

Reviewed October 27, 2026 against the production build.

## Automated checks

- `npm run lint`: passed without warnings or errors.
- `npm run build`: passed, including TypeScript validation and static generation of all four case studies. The existing Browserslist dataset emits an age advisory; it does not prevent compilation.
- `npm run test:smoke`: passed for the homepage, four case studies, section targets, PDF response, Open Graph and Twitter PNGs, missing-project 404, legacy-project 308 redirect, robots, and sitemap URLs.
- `git diff --check`: passed.
- SHA-256 comparison confirms the public resume is identical to the supplied preferred general resume.

## Browser checks

Used the actual rendered production build in the Codex browser.

| View | Widths | Result |
| --- | --- | --- |
| Homepage | 1440, 1024, 768, 390, 375px | No horizontal overflow; diagrams fit without vertical clipping |
| Each of four case studies | 1440, 1024, 768, 390, 375px | No horizontal overflow |

Visually reviewed desktop composition, tablet projects, mobile homepage, mobile about/skills, and mobile case-study layouts. Full-page desktop/mobile screenshots were saved separately for handoff.

- Mobile menu opens, closes after a section selection, and closes on Escape with focus returned to its button.
- About navigation clears the mobile sticky header: section top 86px, header bottom 65px. Active navigation updates to About.
- Keyboard Tab reaches the skip link with a visible focus outline; Enter activates it.
- The Readlytics visual link opens its case study; the All projects link returns to the homepage projects section.
- Browser console check returned no errors.
- Reduced-motion support is implemented in CSS; OS-level motion preference switching was not emulated.

## Source and link verification

Readlytics service boundaries were checked against its Compose configuration and frontend API calls. The Spring Boot controller verifies the displayed chat, summary, and feedback endpoint paths. OurPascal grammar/source and README support the compiler stages and stack-based VM output. Nutrition App models, views, imports, and README support the data workflow and contribution descriptions. No project interfaces or performance numbers were fabricated.

All four project repositories and the GitHub profile return HTTP 200. The existing LinkedIn profile URL is preserved; LinkedIn returns HTTP 999 to automated requests, so its destination could not be independently confirmed. The current production domain returned HTTP 200 before metadata configuration.

Lighthouse was not run; no Lighthouse scores are claimed. No live demo link was added without verification.
