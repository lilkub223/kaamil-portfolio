# Project evidence

Captured October 29, 2026 from the unmodified project revisions linked on each case study. These are snapshots, not continuously updated status reports.

- **Readlytics:** actual library screenshot at 1360 × 940. The React frontend, Express user service, and two FastAPI services ran locally. The repository's QA harness used disposable PGlite storage over its PostgreSQL-compatible socket. A fictional account and the repository's two QA books were created through real APIs, including a shelf entry at page 80. No API responses were mocked for the capture. This does not verify production PostgreSQL behavior or concurrency.
- **Nutrition App:** actual goals-page screenshot at 1360 × 940. The Django migrations were applied to disposable SQLite storage. A fictional account, nutrition targets, custom goal, and weight entry were seeded with Django's ORM; the screenshot was taken after logging in through the real application. No production database was accessed. This does not verify its PostgreSQL deployment or constitute an application test suite.
- **LLM assistant:** `maven-results.txt` preserves the result excerpt from `mvn -B test` in `sprint2-app`. All 10 JUnit controller tests passed, and JaCoCo generated a report. The test class mocks `ChatService` and `FeedbackService`; this is not live LLM evaluation, complete application coverage, or a coverage-percentage claim. Startup output and local paths are omitted.
- **OurPascal:** `compiler-example.txt` contains the capture input, full verbatim output, build commands, and negative-case diagnostic. The parser was regenerated with JavaCC 7.0.13, then the Java sources were compiled and run. The displayed four instructions are an excerpt of that output. The compiler catches semantic exceptions without a failing process status; a separate VM was not executed.

Screenshots were captured with Playwright in Chrome, then encoded as WebP without compositing, retouching, or replacing application content. They contain fictional sample data only. Full-size originals in WebP are linked from the case studies.

Readlytics' public frontend rendered successfully, and all three `/health` endpoints returned HTTP 200 with healthy database status. Signed-in production workflows were not exercised; Render cold starts may delay access.
