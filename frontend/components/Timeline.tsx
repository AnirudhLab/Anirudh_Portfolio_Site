import { TimelineItem } from "@/lib/content";

type TimelineProps = {
  items: TimelineItem[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <ol className="relative space-y-6 border-l border-white/10 pl-6">
      {items.map((item) => (
        <li key={item.title} className="relative">
          <span className="absolute -left-[10px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-cyan-400 shadow-[0_0_18px_6px_rgba(56,189,248,0.35)]" />
          <p className="small-caps text-cyan-200/80">{item.period}</p>
          <h3 className="mt-1 text-lg font-semibold text-white">{item.title}</h3>
          <p className="text-sm text-slate-300">{item.subtitle}</p>
          <p className="mt-2 text-sm text-slate-200/80">{item.details}</p>
        </li>
      ))}
    </ol>
  );
}

