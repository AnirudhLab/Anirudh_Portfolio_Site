import Link from "next/link";

type HeroProps = {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function Hero({
  title,
  subtitle,
  ctaLabel = "View Projects",
  ctaHref = "/projects",
  secondaryLabel = "Read Articles",
  secondaryHref = "/articles",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 via-slate-900/30 to-cyan-800/20 p-[1px] shadow-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.14),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.12),transparent_25%)]" />
      <div className="relative glass-panel-strong p-8 sm:p-12">
        <p className="small-caps mb-4 text-cyan-200/90">Data · Automation · Reliability</p>
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-200/90 sm:text-xl">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href={ctaHref}
            className="rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
          >
            {ctaLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-300/60 hover:text-cyan-200"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

