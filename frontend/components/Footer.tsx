export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} Anirudh Patil. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            className="hover:text-cyan-300"
            href="mailto:anirudhpatilmail@gmail.com"
          >
            Email
          </a>
          <a
            className="hover:text-cyan-300"
            href="https://www.linkedin.com/in/anirudh-patil"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-cyan-300"
            href="https://github.com/anirudh-patil"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

