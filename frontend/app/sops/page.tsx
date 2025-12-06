import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { sops } from "@/lib/content";

export default function SopsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <p className="small-caps text-cyan-200/80">SOPs</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Runbooks for safe releases
          </h1>
          <p className="max-w-3xl text-lg text-slate-200">
            Standard operating procedures for releases, smoke tests, and on-call diagnostics. Authored in MDX so they stay versioned with the code.
          </p>
        </div>

        <div className="section-grid">
          {sops.map((sop) => (
            <Card
              key={sop.title}
              title={`${sop.title} (${sop.version})`}
              description={sop.steps.join(" · ")}
              tags={sop.tags}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

