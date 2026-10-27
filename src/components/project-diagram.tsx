type DiagramProps = { kind: string };
export function ProjectDiagram({ kind }: DiagramProps) {
  if (kind === "readlytics")
    return (
      <figure
        className="project-visual architecture"
        aria-label="Readlytics architecture: React connects to user, reading, and analytics services; all three connect to PostgreSQL."
      >
        <figcaption>
          <span>Readlytics / system map</span>
          <span>01</span>
        </figcaption>
        <div className="architecture-body">
          <div className="client-node">
            <span className="node-symbol">⌘</span>
            <div>
              <strong>React client</strong>
              <small>Bookshelves, progress & insights</small>
            </div>
            <span className="node-meta">UI</span>
          </div>
          <div className="connection">
            <span>REST APIs · JWT authentication</span>
          </div>
          <div className="service-nodes">
            {[
              ["User", "Node.js / Express"],
              ["Reading", "Python / FastAPI"],
              ["Analytics", "Python / FastAPI"],
            ].map(([name, tech]) => (
              <div key={name}>
                <span className="service-dot" />
                <strong>{name}</strong>
                <small>{tech}</small>
              </div>
            ))}
          </div>
          <div className="database-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="database-node">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.3"
            >
              <ellipse cx="12" cy="5" rx="8" ry="3" />
              <path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" />
            </svg>
            <strong>PostgreSQL</strong>
            <span>Shared application database</span>
          </div>
        </div>
        <div className="visual-foot">
          <span>Docker Compose</span>
          <span>Jenkins · CI/CD</span>
        </div>
      </figure>
    );
  if (kind === "llm-software-testing-project")
    return (
      <figure
        className="project-visual api-visual"
        aria-label="Spring Boot API endpoints with a test workflow using JUnit, Maven, and JaCoCo."
      >
        <figcaption>
          <span>API surface / Spring Boot</span>
          <span>02</span>
        </figcaption>
        <div className="endpoint-list">
          {[
            ["POST", "/api/chat", "Chat modes & validation"],
            ["POST", "/api/chat/summary", "Text summarization"],
            ["POST", "/api/chat/feedback", "Response feedback"],
          ].map(([method, path, title]) => (
            <div key={path}>
              <span>{method}</span>
              <code>{path}</code>
              <small>{title}</small>
            </div>
          ))}
        </div>
        <div className="test-flow">
          <span>JUnit</span>
          <b aria-hidden="true">→</b>
          <span>Maven</span>
          <b aria-hidden="true">→</b>
          <span>JaCoCo</span>
        </div>
        <div className="visual-foot">
          <span>Functional · negative · edge cases</span>
          <span>FastMCP tooling</span>
        </div>
      </figure>
    );
  if (kind === "ourpascal-compiler")
    return (
      <figure
        className="project-visual compiler-visual"
        aria-label="Compiler pipeline: source to lexer and parser, AST, semantic checks, and stack-based VM instructions."
      >
        <figcaption>
          <span>OurPascal / compilation pipeline</span>
          <span>03</span>
        </figcaption>
        <div className="compiler-body">
          <div className="source-snippet">
            <span>program.pas</span>
            <code>
              <b>begin</b>
              <br />
              &nbsp; x := 2 + 3;
              <br />
              &nbsp; writeln(x);
              <br />
              <b>end.</b>
            </code>
            <small>Illustrative source</small>
          </div>
          <div className="pipeline">
            <div>
              Lexer + parser <small>JavaCC</small>
            </div>
            <span aria-hidden="true">↓</span>
            <div>Abstract syntax tree</div>
            <span aria-hidden="true">↓</span>
            <div>
              Semantic checks <small>Types & scopes</small>
            </div>
            <span aria-hidden="true">↓</span>
            <div className="pipeline-output">Stack-based VM instructions</div>
          </div>
        </div>
        <div className="visual-foot">
          <span>Java · JavaCC</span>
          <span>Source → instructions</span>
        </div>
      </figure>
    );
  return (
    <figure
      className="project-visual nutrition-visual"
      aria-label="Nutrition App data flow: CSV datasets through Django import commands to PostgreSQL, supporting nutrition goals and weight tracking."
    >
      <figcaption>
        <span>Nutrition App / data workflow</span>
        <span>04</span>
      </figcaption>
      <div className="nutrition-flow">
        {[
          ["01", "CSV datasets", "Foods & conditions"],
          ["02", "Django imports", "Models & migrations"],
          ["03", "PostgreSQL", "Nutrition & goal data"],
        ].map(([n, label, note]) => (
          <div key={n}>
            <span>{n}</span>
            <strong>{label}</strong>
            <small>{note}</small>
          </div>
        ))}
      </div>
      <div className="visual-foot">
        <span>Personal goals · weight tracking</span>
        <span>Python / Django</span>
      </div>
    </figure>
  );
}
