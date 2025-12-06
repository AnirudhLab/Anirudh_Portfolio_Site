import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { projects } from "@/lib/content";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <p className="small-caps text-cyan-200/80">Projects</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Impactful deliveries
          </h1>
          <p className="max-w-3xl text-lg text-slate-200">
            Guardrails for data pipelines, automation for fast feedback, and Cloud Run deployments with observability built-in.
          </p>
        </div>

        <div className="section-grid">
          {projects.map((project) => (
            <Card
              key={project.title}
              title={project.title}
              description={project.summary}
              tags={project.tags}
              metrics={project.metrics}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

