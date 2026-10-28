# Production refinement verification

Reviewed October 28, 2026. The existing forest-green/light identity, hero, project arrangement, and editorial structure are preserved.

## Findings and fixes

- The sticky header used 97% opacity. It now uses the fully opaque canvas color, with the existing height and stacking order.
- Diagram labels previously shrank to 6–9px. Consolidated rules now keep meaningful labels at 10px or larger. Narrow layouts reflow service nodes, compiler stages, and nutrition imports instead of shrinking them. Content-driven heights prevent clipping.
- Navigation accounts for header height, resize, hash changes, and history; scheduled animation frames and event listeners are cleaned up. The mobile menu supports Escape, outside interaction, focus transfer to the selected section, and dismissal when resizing to desktop.
- Case studies include repository-grounded testing/validation notes. No business metrics, product screenshots, or undocumented challenges were added.
- Added browser/touch icons, profile structured data, centralized canonical URLs, and accessible names matching visible project links. Diagrams expose image roles with descriptive text equivalents.
- Local production builds no longer request the unavailable Vercel Analytics endpoint. Its actual live script returned HTTP 200, and Vercel deployments retain analytics.
- The initial dependency audit reported one critical and three high production dependencies. Next.js 15.5.28 and a compatible PostCSS 8.5.32 override clear the production audit while retaining React 18.3.1. The case-study route now awaits `params`; lint uses the supported ESLint CLI.

## Final checks

| Check                  | Result                                                                                                                     |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `npm run lint`         | Pass, zero warnings/errors                                                                                                 |
| `npm run build`        | Pass, type checking and static generation of all four case studies                                                         |
| `npm run test:browser` | 13 passed against the final Next.js 15 production build                                                                    |
| `npm run test:smoke`   | Pass: five pages, metadata/profile data, anchors, PDF, three PNG images, SVG icon, robots/sitemap, 404 and legacy redirect |
| `npm audit --omit=dev` | Zero known production dependency vulnerabilities at review time                                                            |
| `git diff --check`     | Pass                                                                                                                       |
| Resume comparison      | Hosted PDF hash matches the supplied preferred resume                                                                      |

The build emits a Browserslist dataset-age advisory. It does not prevent compilation.

## Browser coverage

Google Chrome via Playwright, against the actual local production server:

- Homepage and all four case studies at 1920, 1440, 1280, 1024, 768, 430, 390, 375, and 320px.
- Each route refreshed directly; all returned HTTP 200 and rendered headings.
- No horizontal overflow, out-of-bounds main content, clipped diagrams, or diagram labels below 10px in the checked layouts.
- No uncaught runtime exceptions or browser console errors.
- Work, About, Experience, Contact, direct anchors, wordmark, active section states, and browser back/forward.
- Mobile menu opening, Escape/focus return, selection/focus transfer, outside dismissal, and resize dismissal.
- Keyboard skip link, reduced-motion media emulation, and 200% text scaling.
- All Explore links, source URL destinations, email/profile attributes, safe external-link attributes, actual resume download and hash comparison.

Screenshots were visually reviewed for desktop composition and mobile reflow. Additional viewport captures are supplied separately for review. Keyboard and automated accessibility checks complement the screenshots; they do not constitute a complete assistive-technology audit.

## Lighthouse

Final Lighthouse 13.6.0 measurements use the local production build and temporary headless Chrome, with default mobile throttling and the desktop preset. Reports are supplied separately. Results are lab measurements, not field Core Web Vitals or a guarantee of identical deployed scores. Local builds omit the Vercel-only analytics integration, which is enabled in the hosted environment.

| Profile | Performance | Accessibility | Best practices | SEO |
| ------- | ----------- | ------------- | -------------- | --- |
| mobile  | 100         | 100           | 100            | 100 |
| desktop | 100         | 100           | 100            | 100 |

## Source/link checks and remaining limits

- Readlytics: current Compose configuration, frontend/service test paths, and Jenkinsfile reviewed at commit `eb543435abeb03a800104a81718292271924998d`.
- LLM assistant: Spring Boot controller, JUnit controller tests, Maven/JaCoCo configuration, and repository documentation reviewed at `2b6ec71b416e9c00e7637d95dca7a541c279018a`.
- OurPascal: grammar, symbol tables, compiler phases, and VM output reviewed at `c4df7cdcf70c047d68cc8a858e9499ca3ad227d9`.
- Nutrition App: existing local models, goal/weight workflows, imports, README contributions, and scaffold test module reviewed; public repository resolves and current head is `cf30b2cf776c27fe5159c5eaad1d5fbbd5fb2cfb`.
- All four repository URLs and the GitHub profile returned HTTP 200. LinkedIn returns HTTP 999 to automated requests; the exact existing profile URL is preserved.
- Email verification checks the `mailto` destination and does not send a message.
- OS-level screen-reader behavior and physical touch devices were not tested. No blanket WCAG conformance is claimed.
- Vercel preview access can require login. Merge and production deployment remain separate from this review branch.

Assessment: ready for review and deployment based on the recorded checks, subject to successful hosted preview/build checks.
