import Link from "next/link";

import { ActionLink } from "@/components/action-link";
import { portfolioData } from "@/data/portfolio";

export function HeroSection() {
  return (
    <section
      className="grid scroll-mt-32 gap-6 rounded-[34px] border border-line bg-surface px-5 py-6 shadow-panel md:px-8 md:py-8 lg:grid-cols-[1.15fr,0.85fr]"
      id="top"
    >
      <div className="flex flex-col justify-between">
        <div>
          <div className="flex flex-wrap gap-2 animate-fade-up">
            {portfolioData.hero.callouts.map((item) => (
              <span
                className="rounded-full border border-line bg-canvasStrong px-3 py-1.5 text-[11px] font-medium text-ink"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>

          <p className="mt-8 font-mono text-[11px] uppercase tracking-section text-accent animate-fade-up">
            {portfolioData.name}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-[1.04] tracking-tight text-ink animate-fade-up md:text-[3.85rem]">
            {portfolioData.headline}
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-muted animate-fade-up animation-delay-100 md:text-lg">
            {portfolioData.hero.summary}
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-ink animate-fade-up animation-delay-200 md:text-base">
            {portfolioData.hero.roles}
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-3 animate-fade-up animation-delay-300">
          <ActionLink href={portfolioData.links.resume} target="_blank">
            Resume
          </ActionLink>
          <ActionLink
            external
            href={portfolioData.links.github}
            variant="secondary"
          >
            GitHub
          </ActionLink>
          <ActionLink
            external
            href={portfolioData.links.linkedin}
            variant="secondary"
          >
            LinkedIn
          </ActionLink>
          <ActionLink href={`mailto:${portfolioData.email}`} variant="secondary">
            Email
          </ActionLink>
        </div>
      </div>

      <aside className="grid gap-4">
        <article className="rounded-[30px] border border-line bg-canvasStrong p-5 shadow-panel md:p-6">
          <p className="font-mono text-[11px] uppercase tracking-section text-accent">
            At a glance
          </p>
          <div className="mt-5 space-y-4">
            {portfolioData.hero.snapshot.map((item) => (
              <div
                className="rounded-2xl border border-line bg-surface px-4 py-4"
                key={item.label}
              >
                <p className="font-mono text-[11px] uppercase tracking-section text-muted">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-7 text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </article>

        <article className="rounded-[30px] border border-line bg-canvasStrong p-5 shadow-panel md:p-6">
          <p className="font-mono text-[11px] uppercase tracking-section text-accent">
            Selected work
          </p>
          <div className="mt-5 space-y-3">
            {portfolioData.projects.map((project) => (
              <Link
                className="block rounded-2xl border border-line bg-surface px-4 py-4 transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-white"
                href={`/projects/${project.slug}`}
                key={project.slug}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-ink">{project.title}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">{project.theme}</p>
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-section text-muted">
                    {project.dates}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </article>
      </aside>
    </section>
  );
}
