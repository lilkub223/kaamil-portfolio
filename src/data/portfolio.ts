export type NavItem = { id: string; label: string };
export type Project = {
  slug: string;
  title: string;
  category: string;
  ownership: "Independent project" | "Team project";
  dates: string;
  github: string;
  liveDemo?: string;
  summary: string;
  stack: string[];
  contributions: string[];
  problem: string;
  approach: string;
  decision: string;
  lesson: string;
  validation: string;
};

export const portfolioData = {
  site: {
    name: "Kaamil Khan — Software Engineer",
    description:
      "Chicago-based software engineer and DePaul CS graduate. Explore backend services, full-stack applications, Java development, and software testing projects.",
  },
  name: "Kaamil Khan",
  location: "Chicago, IL",
  email: "kaamil12355@icloud.com",
  links: {
    github: "https://github.com/lilkub223",
    linkedin: "https://www.linkedin.com/in/kaamil-khan-52555b282/",
    resume: "/resume/kaamil-khan-resume.pdf",
  },
  navItems: [
    { id: "projects", label: "Work" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ] satisfies NavItem[],
  projects: [
    {
      slug: "readlytics",
      ownership: "Independent project",
      title: "Readlytics",
      category: "Distributed applications",
      dates: "Jan – Jun 2026",
      github: "https://github.com/lilkub223/readlytics",
      liveDemo: "https://readlytics-web.onrender.com",
      summary:
        "A reading platform that connects personal bookshelves, activity tracking, and reading analytics.",
      stack: [
        "React",
        "FastAPI",
        "Node.js",
        "PostgreSQL",
        "Docker Compose",
        "Jenkins",
      ],
      contributions: [
        "Built REST APIs and JWT-authenticated workflows across user, reading, and analytics services.",
        "Developed analytics functionality and tested PostgreSQL-backed data flows between services.",
        "Containerized the application with Docker Compose and worked on Jenkins build and deployment workflows.",
      ],
      problem:
        "Bring a reader’s books, progress, and activity into one application while keeping authentication, reading workflows, and analytics separate.",
      approach:
        "A React client calls three backend services: Node.js/Express for users, FastAPI for reading, and FastAPI for analytics. Each service connects to a shared PostgreSQL database. JWT authentication protects user-specific workflows.",
      decision:
        "Separate services organize the application by responsibility. Docker Compose defines the local environment, while Jenkins supports repeatable checks and deployment workflows. RabbitMQ is included in local infrastructure for planned extensions; it is not part of the implemented request flow shown here.",
      validation:
        "JWT-protected API behavior and PostgreSQL-backed flows were checked across services. The current repository includes frontend tests, Node.js user-service tests, Python API tests, and Jenkins stages that run these checks before building artifacts.",
      lesson:
        "Building the full stack independently meant tracing one action across the React client, JWT checks, reading records, and analytics queries. A successful write is only part of the workflow: the library and analytics views also need to agree about the resulting data.",
    },
    {
      slug: "llm-software-testing-project",
      ownership: "Team project",
      title: "LLM Software Testing Assistant",
      category: "Java backend & testing",
      dates: "Apr – Jun 2026",
      github: "https://github.com/lilkub223/llm-software-testing-project",
      summary:
        "A Spring Boot chatbot with specialized chat modes and an MCP-assisted software testing workflow.",
      stack: ["Java", "Spring Boot", "JUnit", "Maven", "FastMCP", "JaCoCo"],
      contributions: [
        "Developed REST endpoints for chat modes, input validation, feedback, and text summarization.",
        "Wrote JUnit tests for valid requests, invalid inputs, and edge cases; used Maven and JaCoCo to inspect test results and coverage.",
        "Built MCP-assisted test workflows and evaluated LLM responses for quality and consistency.",
      ],
      problem:
        "Test a chatbot that combines predictable API requirements with model responses that can vary from one request to the next.",
      approach:
        "Spring Boot exposes chat, summary, and feedback endpoints. Input validation rejects blank or oversized messages before model calls. JUnit tests verify application behavior, and FastMCP tooling supports test generation, Maven execution, and coverage analysis.",
      decision:
        "Separate deterministic API checks from qualitative evaluation of model output. Status codes, validation, and response structure can be tested repeatedly; relevance, clarity, helpfulness, and chat-mode consistency need separate review.",
      validation:
        "JUnit controller tests cover blank and oversized messages, each chat mode, summarization, and feedback validation. A fresh Maven run passed all 10 controller tests and generated a JaCoCo report. These tests mock the model and feedback services; they do not measure live model quality or complete application coverage.",
      lesson:
        "Mocking the model service lets me test request handling repeatedly without depending on generated wording. A passing controller test verifies the API contract; it does not establish whether an LLM answer is useful or correct.",
    },
    {
      slug: "ourpascal-compiler",
      ownership: "Independent project",
      title: "OurPascal Compiler",
      category: "Languages & systems",
      dates: "Sep – Nov 2025",
      github: "https://github.com/lilkub223/ourpascal-compiler",
      summary:
        "A compiler that translates a Pascal-like language into stack-based virtual machine instructions.",
      stack: ["Java", "JavaCC", "ASTs", "Symbol tables"],
      contributions: [
        "Built lexical analysis, parsing, AST construction, and semantic type checking using Java and JavaCC.",
        "Implemented hash-based symbol tables and scope management for declarations and expressions.",
        "Developed AST-driven code generation and validated compiler behavior with custom programs.",
      ],
      problem:
        "Translate source programs into lower-level instructions while detecting invalid declarations, types, and expressions before execution.",
      approach:
        "JavaCC defines the lexer and recursive-descent parser. A typed AST represents the program; symbol tables and scope handling support semantic validation. Code generation walks the AST and emits stack-based VM instructions.",
      decision:
        "Keep parsing, semantic checks, and code generation in distinct phases. The AST provides a shared representation without tying every phase directly to source text. Symbol tables track names and their scopes during validation.",
      validation:
        "Custom Pascal programs were used to check parsing, type consistency, scope handling, and generated instructions. For the example above, I regenerated the parser with JavaCC, compiled the Java sources, and ran the compiler. It emitted integer-addition instructions for the valid program and reported “Invalid assignment types” for a string assigned to an integer. This is a focused example, not a complete language test suite.",
      lesson:
        "An assignment connects parsing, symbol lookup, type checking, and code generation. Tracing a small program through those stages made it easier to distinguish a grammar problem from a semantic error or an incorrect emitted instruction.",
    },
    {
      slug: "nutrition-app",
      ownership: "Team project",
      title: "Nutrition App",
      category: "Full-stack development",
      dates: "Feb – Apr 2026",
      github: "https://github.com/lilkub223/nutrition-app",
      summary:
        "A nutrition planner for people managing chronic conditions, with personal goals and weight tracking.",
      stack: ["Python", "Django", "PostgreSQL", "Docker"],
      contributions: [
        "Built the goals page for calorie and macronutrient targets, custom goals, and weight tracking.",
        "Added multi-condition selection and improved goal-completion workflows.",
        "Updated database models and migrations, built CSV import commands, and corrected dataset references.",
      ],
      problem:
        "Support personal nutrition goals and multiple selected health conditions within a shared nutrition-planning application.",
      approach:
        "A team-built Django application uses server-rendered templates and PostgreSQL. Models and migrations support nutrition records, while management commands load recipe, ingredient, and disease-related CSV data.",
      decision:
        "Keep nutrition targets on the account, custom goals as related records, and weight changes as dated entries. Goal updates are scoped to the signed-in user. Correcting CSV headers and ingredient references also kept imported relationships consistent with these user-facing workflows.",
      validation:
        "Validation focused on goal completion, weight-tracking inputs, selected conditions, and imported data relationships. The repository’s Django test module is a scaffold; this case study does not claim an automated application test suite.",
      lesson:
        "A goal on screen depends on several related records: the account, nutrition targets, and dated weight entries. Keeping those relationships consistent through migrations and CSV imports mattered as much as the form itself in our shared codebase.",
    },
  ] satisfies Project[],
  skillGroups: [
    { title: "Languages", items: "Java · Python · JavaScript · C · SQL" },
    {
      title: "Backend",
      items: "Spring Boot · FastAPI · Django · Node.js · Express · REST APIs",
    },
    { title: "Frontend", items: "React · HTML · CSS" },
    {
      title: "Data & delivery",
      items:
        "PostgreSQL · Docker / Compose · Jenkins · Git · Linux/Unix · CI/CD",
    },
    {
      title: "Testing",
      items:
        "JUnit · Maven · JaCoCo · Playwright · FastMCP · API & integration testing",
    },
  ],
  experience: [
    {
      company: "Amazon Fresh",
      role: "Technology & Operations Associate — Produce Department",
      dates: "Jul 2024 – Jan 2026",
      location: "Bloomingdale, IL",
      summary:
        "Investigated inventory discrepancies, troubleshot POS and self-checkout issues, and used operational data to identify recurring process gaps and improve everyday workflows.",
    },
    {
      company: "RK Travel",
      role: "Data Analytics Intern",
      dates: "May – Nov 2022",
      location: "Glen Ellyn, IL",
      summary:
        "Built Python and SQL data-processing and validation workflows for booking records. Analyzed travel trends and prepared reports to support trip planning and improve data accuracy.",
    },
  ],
};

export function getProjectBySlug(slug: string) {
  return portfolioData.projects.find((project) => project.slug === slug);
}
