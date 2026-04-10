export type NavItem = {
  id: string;
  label: string;
};

export type ProjectDiagramColumn = {
  title: string;
  items: readonly string[];
};

export type ProjectScreen = {
  title: string;
  subtitle: string;
  kind: "browser" | "terminal" | "editor";
  lines: readonly string[];
  footer: string;
};

export type ProjectDecision = {
  title: string;
  description: string;
  impact: string;
};

export type Project = {
  slug: string;
  title: string;
  dates: string;
  stack: readonly string[];
  github: string;
  theme: string;
  summary: string;
  highlights: readonly string[];
  architecture: readonly string[];
  overview: string;
  caseStudyLead: string;
  diagram: readonly ProjectDiagramColumn[];
  screens: readonly ProjectScreen[];
  decisions: readonly ProjectDecision[];
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  dates: string;
  summary: string;
  bullets: readonly string[];
};

export type SkillGroup = {
  title: string;
  description: string;
  items: readonly string[];
};

export const portfolioData = {
  site: {
    name: "Kaamil Khan Portfolio",
    description:
      "Software engineering portfolio focused on backend engineering, systems work, concurrency, compilers, and practical full-stack development.",
  },
  name: "Kaamil Khan",
  headline: "CS student building backend systems, compilers, and full-stack software.",
  location: "Chicago, IL",
  email: "kaamil12355@icloud.com",
  phone: "630-656-0478",
  links: {
    github: "https://github.com/lilkub223",
    linkedin: "https://www.linkedin.com/in/kaamil-khan-52555b282/",
    resume: "/resume/kaamil-khan-resume.pdf",
  },
  navItems: [
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "resume", label: "Resume" },
    { id: "contact", label: "Contact" },
  ] satisfies readonly NavItem[],
  hero: {
    summary:
      "I am a Computer Science student at DePaul University in Chicago, graduating in June 2026 with a 3.9 GPA. My strongest work is in backend systems, APIs, concurrency, compiler design, and practical full-stack applications.",
    roles:
      "I am looking for software engineering internships and new grad roles where I can contribute on backend, systems, or full-stack teams.",
    callouts: [
      "DePaul University",
      "June 2026",
      "3.9 GPA",
      "Open to internships + new grad roles",
    ],
    snapshot: [
      {
        label: "Based in",
        value: "Chicago, IL",
      },
      {
        label: "Current focus",
        value: "Backend services, APIs, concurrency, compilers, and full-stack work",
      },
      {
        label: "Coursework",
        value: "Data Structures & Algorithms, Computer Systems, Compiler Design, Database Systems",
      },
    ],
    systemsPanel: [
      "Readlytics: React -> auth -> services -> PostgreSQL",
      "Compiler: lexer -> parser -> AST -> semantic checks -> assembly",
      "Exchange: routing -> order book -> matching -> synchronized execution",
    ],
  },
  about: {
    bio:
      "I like software that has clear structure and real technical substance. Most of my work has been in service-oriented backend systems, compiler construction, concurrent Java programs, and full-stack applications that need more than simple CRUD.",
    education: {
      school: "DePaul University, Chicago, IL",
      degree: "Bachelor of Science in Computer Science",
      dates: "September 2022 - June 2026",
      gpa: "3.9 GPA",
      honors: "Dean's List Honoree (2022-Present)",
      coursework: [
        "Data Structures & Algorithms",
        "Computer Systems",
        "Compiler Design",
        "Database Systems",
      ],
    },
    focusAreas: [
      "Backend services, REST APIs, and authentication",
      "Systems work involving concurrency, memory, and runtime behavior",
      "Compiler design, parsing, semantic analysis, and code generation",
      "Full-stack applications backed by SQL, containers, and service boundaries",
    ],
    roles:
      "I am aiming for software engineering roles where strong fundamentals matter, especially backend, systems, or full-stack teams with high engineering standards.",
  },
  projects: [
    {
      slug: "readlytics",
      title: "Readlytics",
      dates: "Jan 2026 - Present",
      stack: ["React", "FastAPI", "Node.js", "PostgreSQL", "Docker", "Jenkins"],
      github: "https://github.com/lilkub223/readlytics",
      theme: "Distributed Reading Analytics Platform",
      summary:
        "Distributed reading analytics platform built as separate services for users, activity tracking, and analytics.",
      highlights: [
        "Built a React frontend and backend services in FastAPI and Node.js, using JWT authentication for multi-user access.",
        "Split user, tracking, and analytics responsibilities into separate services so the system stayed modular as features grew.",
        "Used Docker Compose for local orchestration and deployed the stack on Render with Jenkins handling build and deploy steps.",
      ],
      architecture: [
        "PostgreSQL-backed services support user state, reading activity, and analytics queries.",
        "Service boundaries keep auth, tracking, and analytics logic isolated instead of piling into one API.",
        "The same containerized workflow is used for local development and deployment.",
      ],
      overview:
        "Readlytics is the clearest example of the kind of backend work I want to keep doing. I built it around separate services for user management, tracking, and analytics so the system could grow by responsibility instead of turning into one large API.",
      caseStudyLead:
        "The project was meant to do more than show a UI. It was a chance to design service boundaries, handle authentication cleanly, move data between services, and keep deployment predictable through containers and CI/CD.",
      diagram: [
        {
          title: "Client",
          items: ["React frontend", "Authenticated requests", "Reading activity UI"],
        },
        {
          title: "Services",
          items: ["User service", "Tracking service", "Analytics service"],
        },
        {
          title: "Ops",
          items: ["PostgreSQL", "Docker Compose", "Render + Jenkins"],
        },
      ],
      screens: [
        {
          title: "Service layout",
          subtitle: "System view",
          kind: "browser",
          lines: [
            "client -> auth flow",
            "user-service | tracking-service | analytics-service",
            "shared data flow through service APIs",
            "postgres-backed persistence and reporting",
          ],
          footer: "Services split by responsibility instead of by route file.",
        },
        {
          title: "Local + deployed flow",
          subtitle: "Container and CI/CD path",
          kind: "terminal",
          lines: [
            "$ docker compose up --build",
            "jenkins -> build -> test -> deploy",
            "render rollout complete",
            "health checks across services",
          ],
          footer: "One setup for local development and deployment.",
        },
      ],
      decisions: [
        {
          title: "Separate the platform into services",
          description:
            "User management, tracking, and analytics were split into distinct services so each part of the system had a clear job.",
          impact:
            "That made the system easier to reason about and gave the project real backend structure instead of a monolithic API.",
        },
        {
          title: "Put authentication in the API contract",
          description:
            "JWT authentication was built into the service layer so the frontend and services could interact through a clean, secure boundary.",
          impact:
            "It made multi-user behavior realistic and kept service communication grounded in real application needs.",
        },
        {
          title: "Standardize environments with containers",
          description:
            "Docker and Docker Compose were used to make service startup, dependencies, and deployment more predictable.",
          impact:
            "That reduced setup friction and made the CI/CD path through Jenkins and Render much easier to manage.",
        },
      ],
    },
    {
      slug: "ourpascal-compiler",
      title: "OurPascal Compiler",
      dates: "Sep 2025 - Nov 2025",
      stack: ["Java", "JavaCC"],
      github: "https://github.com/lilkub223/ourpascal-compiler",
      theme: "Compiler Implementation",
      summary:
        "Compiler for a Pascal-like language with lexing, parsing, semantic checks, and low-level code generation.",
      highlights: [
        "Implemented lexical analysis, recursive-descent parsing, AST construction, and semantic type checking in Java.",
        "Built symbol tables and scope handling to validate identifiers, expressions, and control-flow rules.",
        "Generated low-level assembly with stack-frame management and instruction translation, then validated output with test programs.",
      ],
      architecture: [
        "The compiler is split into front-end parsing, semantic analysis, and back-end code generation stages.",
        "The AST acts as the central representation for type checking and code emission.",
        "Test programs were used to validate scoping rules, typing behavior, and generated assembly output.",
      ],
      overview:
        "This project was a full compiler pipeline, not just a parser. I built the language front end, semantic checks, and code generation path so the final output could be traced from tokens all the way to emitted assembly.",
      caseStudyLead:
        "What made the project valuable was carrying the language through every stage: lexical analysis, parsing, AST construction, semantic validation, and code generation with explicit stack-frame handling.",
      diagram: [
        {
          title: "Front end",
          items: ["Lexer", "Recursive-descent parser", "AST construction"],
        },
        {
          title: "Semantic pass",
          items: ["Symbol tables", "Scope rules", "Type checking"],
        },
        {
          title: "Back end",
          items: ["AST walk", "Assembly output", "Compiler test programs"],
        },
      ],
      screens: [
        {
          title: "Compiler pipeline",
          subtitle: "High-level flow",
          kind: "editor",
          lines: [
            "tokens -> parser -> AST",
            "AST -> semantic analyzer",
            "semantic pass -> code generator",
            "output -> low-level assembly",
          ],
          footer: "Each stage has a clear role in the pipeline.",
        },
        {
          title: "Compile run",
          subtitle: "Representative output",
          kind: "terminal",
          lines: [
            "$ java OurPascal sample.pas",
            "scope check: ok",
            "type check: ok",
            "assembly emitted successfully",
          ],
          footer: "Test programs verify correctness at each stage.",
        },
      ],
      decisions: [
        {
          title: "Use the AST as the center of the pipeline",
          description:
            "Once parsing was complete, the AST became the shared structure for semantic analysis and code generation.",
          impact:
            "That kept later compiler stages aligned and made debugging stage boundaries much easier.",
        },
        {
          title: "Model scope explicitly",
          description:
            "Symbol tables and scope handling were built to enforce identifier consistency and typing rules across nested structures.",
          impact:
            "It improved semantic correctness and made invalid programs fail for the right reasons.",
        },
        {
          title: "Finish the project with code generation",
          description:
            "The compiler was carried through to low-level code output instead of ending at parsing or AST construction.",
          impact:
            "That turned it into a complete compiler project rather than a front-end-only exercise.",
        },
      ],
    },
    {
      slug: "stock-exchange-simulator",
      title: "Stock Exchange Simulator",
      dates: "Jan 2025 - Mar 2025",
      stack: ["Java"],
      github: "https://github.com/lilkub223/stock-exchange-simulator",
      theme: "Concurrent Trading Engine",
      summary:
        "Multi-threaded exchange simulator focused on deterministic order matching, shared-state correctness, and modular engine design.",
      highlights: [
        "Designed the exchange engine with Strategy and Factory patterns so routing and matching logic stayed modular.",
        "Built a thread-safe order book using priority queues, hash maps, and synchronized sections for market and limit orders.",
        "Used Java monitors to reduce contention while preserving consistent matching behavior under concurrent load.",
      ],
      architecture: [
        "Order routing, matching, and order-book responsibilities are separated so concurrency logic stays readable.",
        "Price-time priority is modeled directly with data structures chosen for exchange-style behavior.",
        "Shared state is protected explicitly with synchronization instead of assuming single-threaded execution.",
      ],
      overview:
        "The exchange simulator was built around concurrency and determinism. The goal was not just to accept orders, but to model routing and matching in a way that stayed correct when multiple threads interacted with shared state.",
      caseStudyLead:
        "This project highlights data structures, synchronization, and system design. The order book had to preserve price-time behavior while handling concurrent market and limit orders without breaking correctness.",
      diagram: [
        {
          title: "Ingress",
          items: ["Order intake", "Routing strategy", "Factory-based creation"],
        },
        {
          title: "Matching core",
          items: ["Thread-safe order book", "Priority queues", "Price-time matching"],
        },
        {
          title: "Concurrency",
          items: ["Synchronized sections", "Java monitors", "Deterministic execution"],
        },
      ],
      screens: [
        {
          title: "Order-book model",
          subtitle: "Core data structures",
          kind: "editor",
          lines: [
            "bids: max-heap by price/time",
            "asks: min-heap by price/time",
            "symbol index -> order references",
            "matching loop -> trade execution",
          ],
          footer: "Data structures chosen to match the problem directly.",
        },
        {
          title: "Concurrent run",
          subtitle: "Representative execution",
          kind: "terminal",
          lines: [
            "$ java ExchangeSimulator",
            "orders thread -> market order accepted",
            "matching thread -> best-price fill executed",
            "shared state unlocked -> next cycle",
          ],
          footer: "Concurrency tuned for correctness before cleverness.",
        },
      ],
      decisions: [
        {
          title: "Choose exchange-aligned data structures",
          description:
            "Priority queues and maps were used to model price-time behavior and efficient order lookup.",
          impact:
            "The order book stayed close to how a matching problem actually works instead of being forced into a generic structure.",
        },
        {
          title: "Protect shared state directly",
          description:
            "Synchronization and monitors were used intentionally around the order book instead of hiding concurrency behind object boundaries.",
          impact:
            "That made correctness easier to reason about once multiple threads were involved.",
        },
        {
          title: "Keep routing and matching separate",
          description:
            "Routing, matching, and order construction were split into separate concerns with Strategy and Factory patterns.",
          impact:
            "The engine stayed modular even while the concurrency logic grew more complex.",
        },
      ],
    },
  ] satisfies readonly Project[],
  experience: [
    {
      company: "Amazon Fresh",
      role: "Technology & Operations Associate",
      location: "Bloomingdale, IL",
      dates: "July 2024 - Jan 2026",
      summary:
        "Worked in a live retail environment where reliability, issue triage, and process improvement mattered every day.",
      bullets: [
        "Monitored inventory and restocking data to catch errors early and reduce stockouts.",
        "Troubleshot POS and self-checkout software and hardware issues to keep store systems running.",
        "Used demand patterns to improve layout decisions and customer flow during busy periods.",
        "Flagged repetitive inventory work that could be automated or streamlined.",
      ],
    },
    {
      company: "RK Travel",
      role: "Data Analytics Intern",
      location: "Glen Ellyn, IL",
      dates: "May 2022 - Nov 2022",
      summary:
        "Internship focused on data cleanliness, pipeline upkeep, and reporting that supported daily operations.",
      bullets: [
        "Built and maintained pipelines to clean and consolidate booking data from multiple sources.",
        "Added validation checks across customer and account records to reduce errors and improve data reliability.",
        "Reviewed booking trends and prepared timely analyses for operational decision-making.",
      ],
    },
  ] satisfies readonly Experience[],
  skillGroups: [
    {
      title: "Languages",
      description: "Core implementation languages.",
      items: ["Java", "Python", "C", "JavaScript", "SQL"],
    },
    {
      title: "Backend",
      description: "APIs, services, and application logic.",
      items: ["Node.js", "Express", "FastAPI", "REST APIs", "Microservices"],
    },
    {
      title: "Frontend",
      description: "Client-side application work.",
      items: ["React", "JavaScript"],
    },
    {
      title: "Data, Infra, and Tools",
      description: "Persistence, deployment, and workflow tooling.",
      items: ["PostgreSQL", "Docker", "Jenkins", "CI/CD", "Git", "Linux/Unix"],
    },
  ] satisfies readonly SkillGroup[],
  resumeSection: {
    summary:
      "The resume is the quickest one-page view of my education, project work, experience, and links.",
    bullets: [
      "DePaul University Computer Science, graduating June 2026",
      "3.9 GPA and Dean's List since 2022",
      "Projects in backend systems, compilers, concurrency, and full-stack development",
      "Experience in troubleshooting, analytics, and process improvement",
    ],
  },
  contact: {
    cta:
      "If you are hiring for software engineering internships or early-career roles, email is the best way to reach me.",
  },
} as const;

export function getProjectBySlug(slug: string) {
  return portfolioData.projects.find((project) => project.slug === slug);
}
