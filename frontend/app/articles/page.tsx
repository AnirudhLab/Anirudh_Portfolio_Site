import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { articles } from "@/lib/content";

export default function ArticlesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="space-y-3">
          <p className="small-caps text-cyan-200/80">Articles</p>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Writing on data quality, automation, and delivery
          </h1>
          <p className="max-w-3xl text-lg text-slate-200">
            MDX-powered content so technical notes, SOPs, and diagrams live close to the code.
          </p>
        </div>

        <div className="section-grid">
          {articles.map((article) => (
            <Card
              key={article.title}
              title={article.title}
              description={article.summary}
              tags={article.tags}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

