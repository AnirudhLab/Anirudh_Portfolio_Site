export type Project = {
  title: string;
  summary: string;
  tags: string[];
  metrics: string[];
  link?: string;
};

export type Article = {
  title: string;
  summary: string;
  tags: string[];
  link?: string;
};

export type Sop = {
  title: string;
  version: string;
  steps: string[];
  tags: string[];
};

export type TimelineItem = {
  period: string;
  title: string;
  subtitle: string;
  details: string;
};

export const projects: Project[] = [
  {
    title: "AI Agent for Automated Knowledge Retrieval (RAG + MCP)",
    summary:
      "Private RAG agent on GCP Cloud Run with FAISS indexing, multi-persona modes (Developer, QA, Data Engineer), and admin doc uploads.",
    tags: ["Python", "LangChain", "OpenAI", "FAISS", "Cloud Run"],
    metrics: [
      "45% reduction in support queries",
      "Answers in seconds vs minutes for internal docs",
      "Scalable knowledge automation with MCP-style orchestration",
    ],
  },
  {
    title: "Enterprise QA Automation Framework (API + UI + ETL)",
    summary:
      "Unified automation with Pytest schema checks, Playwright UI flows, ETL validations (Pandas/Spark), pytest-xdist parallelism, and CI-ready Docker runs.",
    tags: ["Python", "Pytest", "Playwright", "Pandas", "SQLAlchemy", "PySpark"],
    metrics: [
      "65% execution time improvement via parallelism",
      "90% component reuse across teams",
      "Zero-manual-test release cycles with HTML/Allure reporting",
    ],
  },
  {
    title: "MicroSaaS: Automated Cloud Deployment Advisor",
    summary:
      "Analyzes GitHub repos and outputs deploy plans for GCP/Vercel/AWS, plus Dockerfile and CI/CD suggestions for instant onboarding.",
    tags: ["Next.js", "FastAPI", "Cloud Run", "Docker", "GitHub Actions"],
    metrics: [
      "Instant deployment blueprints for repos",
      "Cuts onboarding friction for junior devs",
      "Foundation for SaaS monetization",
    ],
  },
  {
    title: "ETL Automation Framework for MySQL/Postgres/Cloud Storage",
    summary:
      "Schema validation, file-vs-DB comparisons, CSV/JSON/Parquet pipelines, and Airflow DAGs orchestrating validations at scale.",
    tags: ["Airflow", "Pandas", "PySpark", "SQLAlchemy", "ETL"],
    metrics: [
      "Zero manual validation for multi-GB datasets",
      "Automated schema/row/agg checks",
      "Reusable patterns for heterogeneous sources",
    ],
  },
  {
    title: "Containerized QA & AI Operations Platform",
    summary:
      "Docker/Compose environments for frontend+CMS+API+DB with reproducible builds, isolated QA, and AI agent services.",
    tags: ["Docker", "Compose", "Node.js", "Python", "DevOps"],
    metrics: [
      "90% reduction in environment inconsistencies",
      "Faster onboarding and local testing",
      "Reproducible multi-service stacks for QA and AI agents",
    ],
  },
];

export const articles: Article[] = [
  {
    title: "How Agentic AI is Transforming Automation in 2025",
    summary:
      "Autonomous agents, MCP-style orchestration, and what enterprise adoption looks like.",
    tags: ["AI", "Agents", "Automation"],
  },
  {
    title: "Building a Private RAG System for Your Company",
    summary: "Vector stores, embeddings, and secure cloud deployment patterns.",
    tags: ["RAG", "LangChain", "Cloud"],
  },
  {
    title: "The Future of QA: Autonomous Testing Agents",
    summary:
      "LLM-powered test generation, triage, and self-healing suites for modern stacks.",
    tags: ["QA", "AI", "Automation"],
  },
  {
    title: "Pytest Best Practices for Scalable API Testing",
    summary:
      "Fixtures, parametrization, schema validation, mocks, and CI integration.",
    tags: ["Pytest", "API", "Testing"],
  },
  {
    title: "How to Validate Massive ETL Pipelines Using Pandas + Spark",
    summary:
      "Hybrid validation strategy for large datasets with column, row, and aggregation checks.",
    tags: ["ETL", "Pandas", "Spark"],
  },
  {
    title: "Building a Reusable ETL Automation Framework from Scratch",
    summary:
      "Contracts, audit logs, orchestration, and modular validation components.",
    tags: ["ETL", "Automation", "Airflow"],
  },
  {
    title: "Deploying Production Services on GCP Cloud Run the Right Way",
    summary: "Secrets, autoscaling, monitoring, domain mapping, SSL done right.",
    tags: ["GCP", "Cloud Run", "DevOps"],
  },
  {
    title: "Docker for Testers: Why Every QA Engineer Should Learn Containers",
    summary:
      "Reproducibility, network simulation, and ephemeral environments for QA.",
    tags: ["Docker", "QA", "DevOps"],
  },
  {
    title: "How to Build and Monetize MicroSaaS Products Using AI",
    summary: "Starter architecture, automation, and monetization paths.",
    tags: ["MicroSaaS", "AI", "Product"],
  },
  {
    title: "What Makes a MicroSaaS Successful in 2025?",
    summary: "Niche selection, automation-first support, and low-overhead scaling.",
    tags: ["MicroSaaS", "Strategy"],
  },
  {
    title: "How I Use Cursor + AI Tools to Build 3x Faster",
    summary: "Multi-agent coding workflows and project patterns for speed.",
    tags: ["Productivity", "AI Coding", "Tools"],
  },
  {
    title: "10 Engineering Lessons After Building Multiple Automation Systems",
    summary: "Reliability, coverage, monitoring, and documentation principles.",
    tags: ["Automation", "Engineering", "Reliability"],
  },
];

export const sops: Sop[] = [
  {
    title: "API Testing Using Postman",
    version: "v1.0",
    steps: [
      "Import Swagger/OpenAPI spec and create environments (BASE_URL, TOKEN)",
      "Add pre-request scripts for auth token generation",
      "Write pm.expect tests for status, schema, payload",
      "Add iteration tests for datasets and integrate Newman in CI",
      "Export CLI/HTML reports",
    ],
    tags: ["API", "Postman", "CI"],
  },
  {
    title: "API Automation Using Pytest",
    version: "v1.0",
    steps: [
      "Structure tests/api and shared utils/fixtures",
      "Use fixtures for base URL and auth tokens",
      "Apply jsonschema for payload validation",
      "Parametrize datasets; run pytest -n auto",
      "Publish Allure reports in CI",
    ],
    tags: ["API", "Pytest", "Automation"],
  },
  {
    title: "UI Automation Using Pytest + Playwright",
    version: "v1.0",
    steps: [
      "Install pytest-playwright and launch Chromium headless",
      "Adopt Page Object Model with auto-wait selectors",
      "Capture screenshots on failure",
      "Integrate with CI and Docker for reproducible runs",
    ],
    tags: ["UI", "Playwright", "Pytest"],
  },
  {
    title: "ETL Testing Using Pandas + SQL",
    version: "v1.0",
    steps: [
      "Read source/target data (MySQL/Postgres/CSV/Parquet)",
      "Perform column-level and row/aggregation comparisons",
      "Validate transformation rules with audit logging",
      "Dockerize the ETL test runner for CI",
    ],
    tags: ["ETL", "Pandas", "SQL"],
  },
  {
    title: "Dockerization SOP",
    version: "v1.0",
    steps: [
      "Create Dockerfile with multi-stage build and .dockerignore",
      "Build/test image locally; tag & push to registry",
      "Deploy via Cloud Run with health checks",
    ],
    tags: ["Docker", "DevOps", "Cloud Run"],
  },
];

export const timeline: TimelineItem[] = [
  {
    period: "Aug 2022 — Present",
    title: "Senior QA Engineer — Sequoia Group",
    subtitle: "ETL validation, synthetic data, QA leadership",
    details:
      "Own QA strategy for ETL pipelines, build synthetic data tooling, mentor 4 engineers, and integrate validation into CI/CD.",
  },
  {
    period: "Dec 2019 — Aug 2022",
    title: "Senior QA Engineer — Huawei Technologies",
    subtitle: "SQL migration QA, UI/API/ETL coverage",
    details:
      "Automated SQL extraction/conversion validation to GaussDB, improved regression speed, and enforced synchronised UI/API/DB checks.",
  },
  {
    period: "Jun 2018 — Dec 2019",
    title: "Solution Engineer — Datagres",
    subtitle: "Containerised solutions & storage performance",
    details:
      "Architected Docker/K8s deployments, tested NoSQL/Oracle integrations, and improved resource utilisation.",
  },
  {
    period: "Mar 2013 — Feb 2018",
    title: "Senior Project Engineer — Wipro",
    subtitle: "Enterprise storage QA & performance",
    details:
      "Delivered storage solution validations (HP 3PAR, NetApp, IBM), reducing post-deployment issues by 40% and earning multiple awards.",
  },
];

