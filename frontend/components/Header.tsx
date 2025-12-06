import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/articles", label: "Articles" },
  { href: "/sops", label: "SOPs" },
  { href: "/about", label: "About" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-slate-950/70 border-b border-white/5">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_20px_6px_rgba(56,189,248,0.45)]" />
          <span>AnirudhLabs</span>
        </Link>
        <nav className="flex items-center gap-3 text-sm text-slate-200">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 transition hover:bg-white/10"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/resume.pdf"
            className="ml-2 rounded-full bg-cyan-500 px-3 py-1 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  );
}

