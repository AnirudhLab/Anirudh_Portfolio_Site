type CardProps = {
  title: string;
  description: string;
  tags?: string[];
  metrics?: string[];
  href?: string;
};

export function Card({ title, description, tags = [], metrics = [], href }: CardProps) {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
      className="glass-panel flex h-full flex-col gap-4 p-5 transition hover:-translate-y-[2px] hover:border-cyan-300/50"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-slate-300">{description}</p>
        </div>
        <span className="tag text-xs">Featured</span>
      </div>

      {metrics.length > 0 && (
        <ul className="space-y-2 text-sm text-slate-200/90">
          {metrics.map((metric) => (
            <li key={metric} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-400" />
              <span>{metric}</span>
            </li>
          ))}
        </ul>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2 text-xs text-slate-200">
          {tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      )}
    </Wrapper>
  );
}

