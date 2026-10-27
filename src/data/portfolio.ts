export type NavItem = { id: string; label: string };
export type Project = {
  slug: string;
  title: string;
  category: string;
  dates: string;
  github: string;
  summary: string;
  stack: string[];
  contributions: string[];
  problem: string;
  approach: string;
  decision: string;
  lesson: string;
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
      title: "Readlytics",
      category: "Distributed applications",
      dates: "Jan – Jun 2026",
      github: "https://github.com/lilkub223/readlytics",
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
      lesson:
        "Cross-service testing made data consistency and authentication behavior as important as individual endpoint correctness. This work strengthened my approach to tracing requests through service boundaries.",
    },
    {
      slug: "llm-software-testing-project",
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
      lesson:
        "A useful test suite needs failure cases as well as successful requests. Working with nondeterministic responses also made the limits of ordinary assertions explicit.",
    },
    {
      slug: "ourpascal-compiler",
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
      lesson:
        "Small language features affect several compiler phases. Custom test programs helped trace errors from source syntax through type checking and instruction generation.",
    },
    {
      slug: "nutrition-app",
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
        "Treat data imports as part of application development. Correcting CSV headers and ingredient references kept imported relationships consistent with the models and the user-facing workflows.",
      lesson:
        "Useful full-stack features depend on reliable data underneath them. This project connected UI workflows, relational modeling, migrations, and dataset cleanup in a collaborative codebase.",
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
