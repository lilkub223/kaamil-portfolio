import Image from "next/image";

const revisions: Record<string, string> = {
  readlytics: "eb543435abeb03a800104a81718292271924998d",
  "llm-software-testing-project": "b7bca7c31c224f83d180804f7e63a492fbf5539e",
  "ourpascal-compiler": "c4df7cdcf70c047d68cc8a858e9499ca3ad227d9",
  "nutrition-app": "cf30b2cf776c27fe5159c5eaad1d5fbbd5fb2cfb",
};
const input = `program PortfolioProof;
var x: integer;
begin
  x := 2 + 3;
  writeln(x)
end.`;
const output = `intCopyOp\t@_tempVar2,@_tempVar0
intAddVarVarOp\t@_tempVar2,@_tempVar1
intCopyOp\t@x,@_tempVar2
stdOutPrintLnOp\t@x`;

export function ProjectEvidence({ slug }: { slug: string }) {
  const title = {
    readlytics: "Bookshelves in use",
    "nutrition-app": "Nutrition and weight goals",
    "ourpascal-compiler": "Source to generated instructions",
    "llm-software-testing-project": "A real controller test run",
  }[slug];
  const revision = revisions[slug];
  if (!revision) return null;
  return (
    <section className="project-evidence" aria-labelledby="evidence-title">
      <p className="eyebrow">From the implementation</p>
      <h2 id="evidence-title">{title}</h2>
      {(slug === "readlytics" || slug === "nutrition-app") && (
        <figure>
          <a
            href={`/evidence/${slug}.webp`}
            className="evidence-image-link"
            aria-label="Open application screenshot at full size"
          >
            <Image
              src={`/evidence/${slug}.webp`}
              width={1360}
              height={940}
              sizes="(max-width: 900px) 92vw, 850px"
              alt={
                slug === "readlytics"
                  ? "Readlytics library with Want to Read and Currently Reading shelves, a book at page 80 of 200, and shelf and progress controls."
                  : "Nutrition App goals page with calorie, carbohydrate, protein and fat targets, plus activity and weight goal controls."
              }
            />
          </a>
          <figcaption>
            {slug === "readlytics" ? "The actual React client and three backend services, running locally with the repository’s disposable PGlite QA database. The books and reader are fictional fixtures; this is not production user data." : "The actual Django goals page, running locally with fictional account and nutrition data. Migrations were applied to a disposable SQLite database for this capture; the application’s PostgreSQL deployment was not tested."}{" "}
            Open the image for full-size detail.
          </figcaption>
        </figure>
      )}
      {slug === "llm-software-testing-project" && (
        <>
          <pre className="evidence-output">
            <code>{`$ mvn -B test
[INFO] Tests run: 10, Failures: 0, Errors: 0, Skipped: 0
[INFO] --- jacoco:0.8.15:report (report) @ chatbot ---
[INFO] Analyzed bundle 'chatbot' with 9 classes
[INFO] BUILD SUCCESS`}</code>
          </pre>
          <p className="evidence-caption">Captured from a local Maven run. The JUnit controller suite checks blank and oversized input, chat modes, summaries, and feedback. Model and feedback services are mocked: these results verify API behavior, not live LLM answer quality. JaCoCo generated a report; no coverage percentage is claimed.</p>
          <a className="text-link" href={`https://github.com/lilkub223/${slug}/blob/${revision}/sprint2-app/src/test/java/edu/depaul/se331/chatbot/controller/ChatControllerEndpointTest.java`} target="_blank" rel="noreferrer">Inspect the controller tests ↗</a>
          <a className="text-link evidence-download" href="/evidence/maven-results.txt">Read captured results ↗</a>
        </>
      )}
      {slug === "ourpascal-compiler" && (
        <>
          <div className="evidence-code-grid">
            <div>
              <h3>Pascal-like input</h3>
              <pre><code>{input}</code></pre>
            </div>
            <div>
              <h3>Generated code · excerpt</h3>
              <pre><code>{output}</code></pre>
            </div>
          </div>
          <p className="evidence-caption">A small input written for this capture and compiled with the unmodified repository implementation. The output copies integer operands, adds them, assigns the result to x, and emits a print instruction. Replacing the integer expression with a string produces “Invalid assignment types.” The generated instructions were inspected; a separate VM was not executed.</p>
          <a className="text-link" href="/evidence/compiler-example.txt">Read input, full output, and commands ↗</a>
        </>
      )}
      <p className="evidence-provenance">Captured October 29, 2026 · <a href={`https://github.com/lilkub223/${slug}/tree/${revision}`} target="_blank" rel="noreferrer">Source at {revision.slice(0, 7)} ↗</a></p>
    </section>
  );
}
