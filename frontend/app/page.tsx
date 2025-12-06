import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Timeline } from "@/components/Timeline";
import { articles, projects, timeline } from "@/lib/content";

export default function Home() {
  const expertise = [
    "AI Agents",
    "Cloud Deployments",
    "QA Automation",
    "MicroSaaS",
    "ETL Frameworks",
    "CI/CD",
    "Dockerization",
    "RAG Systems",
  ];

  const competencies = [
    {
      title: "AI Engineering & Agentic Automation",
      items: [
        "Retrieval-Augmented Generation (RAG)",
        "OpenAI, LangChain, LlamaIndex",
        "Multi-agent orchestration (MCP-style)",
        "Knowledgebase engineering",
        "Conversational AI assistants for enterprises",
      ],
      tags: ["AI", "RAG", "LangChain", "MCP"],
    },
    {
      title: "QA & Automation Excellence",
      items: [
        "API automation (Pytest, Requests)",
        "UI automation (Playwright/Selenium)",
        "ETL validations (Pandas, PySpark, SQL)",
        "Contract testing (OpenAPI/Swagger)",
        "TestOps workflows (CI/CD + reporting)",
      ],
      tags: ["Pytest", "Playwright", "ETL", "Contract Testing"],
    },
    {
      title: "Cloud & DevOps",
      items: [
        "GCP Cloud Run / Cloud SQL / Cloud Storage",
        "Docker & containerized pipelines",
        "CI/CD with GitHub Actions & Cloud Build",
        "Infra as Code (Terraform planned)",
      ],
      tags: ["GCP", "Cloud Run", "Docker", "CI/CD"],
    },
    {
      title: "MicroSaaS & Product Engineering",
      items: [
        "SaaS MVP architecture with auth/billing-ready foundations",
        "Rapid iterations via Cursor + AI coding",
        "Deployment automation to GCP/AWS/Vercel",
      ],
      tags: ["MicroSaaS", "Product", "Automation"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl space-y-12 px-4 py-12 sm:px-6 lg:px-8">
        <Hero
          title="Anirudh Labs — Engineering the Future with AI, Automation & Cloud"
          subtitle="I help teams design AI Agents, build Automation Frameworks, streamline ETL pipelines, and deploy cloud-native MicroSaaS with enterprise-grade QA. From idea → architecture → code → deployment → automation → observability — I turn complex engineering challenges into reliable, scalable systems."
          ctaLabel="Build smarter, automate faster"
          ctaHref="/projects"
          secondaryLabel="Browse articles"
          secondaryHref="/articles"
        />

        <section className="space-y-3">
          <p className="small-caps text-cyan-200/80">Areas of expertise</p>
          <div className="flex flex-wrap gap-2">
            {expertise.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-3 glass-panel p-6">
          <p className="small-caps text-cyan-200/80">About preview</p>
          <h2 className="text-2xl font-semibold text-white">
            Senior QA & Automation Engineer building AI, Cloud, Data, and Productivity Automation.
          </h2>
          <p className="text-slate-200">
            With 10+ years in software engineering, I specialize in AI-driven systems, cloud-native deployments, Python automation, and RAG-powered knowledge apps. My philosophy: high-quality engineering is scalable, automated, observable, and cloud-ready.
          </p>
        </section>

        <section className="space-y-4">
          <div className="section-heading">
            <h2>Featured competencies</h2>
            <span className="text-sm text-slate-400">
              AI, automation, cloud, and product engineering pillars
            </span>
          </div>
          <div className="section-grid">
            {competencies.map((comp) => (
              <div key={comp.title} className="glass-panel p-5 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-lg font-semibold text-white">{comp.title}</h3>
                  <span className="tag text-xs">Featured</span>
                </div>
                <ul className="space-y-2 text-sm text-slate-200">
                  {comp.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 text-xs text-slate-200">
                  {comp.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <div className="section-heading">
            <h2>Featured projects</h2>
            <a
              href="/projects"
              className="text-sm text-cyan-200 transition hover:text-cyan-100"
            >
              View all →
            </a>
          </div>
          <div className="section-grid">
            {projects.slice(0, 3).map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.summary}
                tags={project.tags}
                metrics={project.metrics}
              />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="section-heading">
            <h2>Recent articles</h2>
            <a
              href="/articles"
              className="text-sm text-cyan-200 transition hover:text-cyan-100"
            >
              Browse all →
            </a>
          </div>
          <div className="section-grid">
            {articles.slice(0, 4).map((article) => (
              <Card
                key={article.title}
                title={article.title}
                description={article.summary}
                tags={article.tags}
              />
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <div className="section-heading">
            <h2>Timeline</h2>
            <span className="text-sm text-slate-400">
              Experience and focus areas
            </span>
          </div>
          <div className="glass-panel p-6">
            <Timeline items={timeline} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
