import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ActionLink } from "@/components/action-link";
import { Footer } from "@/components/footer";
import { ProjectDiagram } from "@/components/project-diagram";
import { ProjectPreviewPanel } from "@/components/project-preview-panel";
import { portfolioData, getProjectBySlug } from "@/data/portfolio";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: ProjectPageProps): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {};
  }

  return {
    title: `${project.title} Case Study`,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Kaamil Khan`,
      description: project.summary,
      type: "article",
      url: `/projects/${project.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Kaamil Khan`,
      description: project.summary,
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pb-6">
      <main className="mx-auto flex max-w-container flex-col gap-8 px-4 pt-6">
        <section className="rounded-[34px] border border-line bg-surface px-5 py-6 shadow-panel md:px-8 md:py-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              className="text-sm text-muted transition hover:text-ink"
              href="/"
            >
              &larr; Back to portfolio
            </Link>

            <div className="flex flex-wrap gap-3">
              <ActionLink
                external
                href={project.github}
                variant="secondary"
              >
                GitHub
              </ActionLink>
              <ActionLink href={portfolioData.links.resume} target="_blank">
                Resume
              </ActionLink>
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.15fr,0.85fr]">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-section text-accent">
                {project.theme}
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
                {project.title}
              </h1>
              <p className="mt-4 text-sm text-muted md:text-base">{project.dates}</p>
              <p className="mt-6 max-w-3xl text-base leading-8 text-muted md:text-lg">
                {project.overview}
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-ink md:text-base">
                {project.caseStudyLead}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    className="rounded-full border border-line bg-canvasStrong px-3 py-1.5 text-xs text-ink"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <aside className="rounded-[30px] border border-line bg-canvasStrong p-5 shadow-panel md:p-6">
              <p className="font-mono text-[11px] uppercase tracking-section text-muted">
                Snapshot
              </p>
              <p className="mt-4 text-sm leading-7 text-ink md:text-base">
                {project.summary}
              </p>
              <div className="mt-6">
                <p className="font-mono text-[11px] uppercase tracking-section text-muted">
                  Key points
                </p>
                <ul className="mt-4 space-y-3">
                  {project.highlights.map((highlight) => (
                    <li
                      className="flex gap-3 text-sm leading-7 text-ink"
                      key={highlight}
                    >
                      <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section className="rounded-[30px] border border-line bg-surface px-5 py-6 shadow-panel md:px-8 md:py-8">
          <div className="mb-7 grid gap-4 lg:grid-cols-[minmax(0,0.9fr),minmax(0,0.85fr)] lg:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-section text-accent">
                System layout
              </p>
              <h2 className="mt-3 font-display text-[2rem] font-semibold tracking-tight text-ink md:text-[2.35rem]">
                How the project is structured.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted md:text-[15px] lg:justify-self-end">
              A quick view of the parts that matter most: the main flow, the system boundaries, and where the work lives.
            </p>
          </div>

          <ProjectDiagram columns={project.diagram} />
        </section>

        <section className="rounded-[30px] border border-line bg-surface px-5 py-6 shadow-panel md:px-8 md:py-8">
          <div className="mb-7 grid gap-4 lg:grid-cols-[minmax(0,0.9fr),minmax(0,0.85fr)] lg:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-section text-accent">
                Representative views
              </p>
              <h2 className="mt-3 font-display text-[2rem] font-semibold tracking-tight text-ink md:text-[2.35rem]">
                The project in a more concrete form.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted md:text-[15px] lg:justify-self-end">
              These panels are meant to make the project easier to talk through in a recruiting or interview setting.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {project.screens.map((screen) => (
              <ProjectPreviewPanel
                key={screen.title}
                screen={screen}
              />
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-line bg-surface px-5 py-6 shadow-panel md:px-8 md:py-8">
          <div className="mb-7 grid gap-4 lg:grid-cols-[minmax(0,0.9fr),minmax(0,0.85fr)] lg:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-section text-accent">
                Key decisions
              </p>
              <h2 className="mt-3 font-display text-[2rem] font-semibold tracking-tight text-ink md:text-[2.35rem]">
                Decisions that shaped the build.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted md:text-[15px] lg:justify-self-end">
              These are the choices that mattered most in the implementation, and why they were worth making.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {project.decisions.map((decision) => (
              <article
                className="rounded-[28px] border border-line bg-canvasStrong p-5 shadow-panel"
                key={decision.title}
              >
                <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
                  {decision.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">{decision.description}</p>
                <p className="mt-4 rounded-2xl border border-line bg-surface px-4 py-4 text-sm leading-7 text-ink">
                  {decision.impact}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-[30px] border border-line bg-surface px-5 py-6 shadow-panel md:px-8 md:py-8">
          <div className="mb-7 grid gap-4 lg:grid-cols-[minmax(0,0.9fr),minmax(0,0.85fr)] lg:items-end">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-section text-accent">
                Implementation notes
              </p>
              <h2 className="mt-3 font-display text-[2rem] font-semibold tracking-tight text-ink md:text-[2.35rem]">
                Specific technical details.
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted md:text-[15px] lg:justify-self-end">
              Additional details that help explain how the project was actually built.
            </p>
          </div>

          <ul className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {project.architecture.map((detail) => (
              <li
                className="rounded-[24px] border border-line bg-canvasStrong px-5 py-5 text-sm leading-7 text-ink shadow-panel"
                key={detail}
              >
                {detail}
              </li>
            ))}
          </ul>
        </section>
      </main>

      <Footer />
    </div>
  );
}
