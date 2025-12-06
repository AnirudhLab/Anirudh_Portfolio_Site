import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Timeline } from "@/components/Timeline";
import { timeline } from "@/lib/content";

const highlights = [
  "Designs AI agents and RAG systems for private knowledge bases (LangChain/OpenAI/FAISS).",
  "Builds unified automation frameworks (API/UI/ETL) with Pytest, Playwright, Pandas/Spark.",
  "Ships cloud-native services on GCP Cloud Run with Dockerized pipelines and CI/CD.",
  "Architects MicroSaaS MVPs with auth/billing-ready foundations and rapid AI-powered iteration.",
  "Champions QA discipline: contract testing, synthetic data, and observability baked into releases.",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-5xl space-y-10 px-4 py-10 sm:px-6 lg:px-8">
        <section className="space-y-4">
          <p className="small-caps text-cyan-200/80">About</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Hi, I’m Anirudh Patil.
          </h1>
          <p className="text-lg text-slate-200">
            Senior QA & Automation Engineer (10+ years) building AI agents, automation frameworks, cloud-native deployments, and MicroSaaS accelerators. I focus on scalable, observable, and automated systems—so teams can ship faster with confidence.
          </p>
          <div className="glass-panel p-5">
            <h2 className="text-lg font-semibold text-white">What I’m good at</h2>
            <ul className="mt-3 space-y-2 text-slate-200">
              {highlights.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <div className="section-heading">
            <h2>Timeline</h2>
            <span className="text-sm text-slate-400">Roles and focus areas</span>
          </div>
          <div className="glass-panel p-5">
            <Timeline items={timeline} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

