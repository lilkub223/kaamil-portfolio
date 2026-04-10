import { portfolioData } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="pb-10 pt-6">
      <div className="mx-auto max-w-container px-4">
        <div className="rounded-[28px] border border-line bg-surface px-5 py-5 shadow-panel md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-display text-base font-semibold text-ink">Kaamil Khan</p>
              <p className="mt-1 text-sm text-muted">
                Chicago, IL • Software engineering candidate for backend, systems, and full-stack roles
              </p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-muted">
              <a
                className="transition hover:text-ink"
                href={portfolioData.links.github}
                rel="noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="transition hover:text-ink"
                href={portfolioData.links.linkedin}
                rel="noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="transition hover:text-ink"
                href={portfolioData.links.resume}
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
