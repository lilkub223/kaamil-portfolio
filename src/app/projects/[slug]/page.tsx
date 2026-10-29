import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { portfolioData, getProjectBySlug } from "@/data/portfolio";
import { ProjectDiagram } from "@/components/project-diagram";
import { ProjectEvidence } from "@/components/project-evidence";
import { Footer } from "@/components/footer";
import { Arrow, GithubIcon } from "@/components/icons";

type ProjectPageProps = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return portfolioData.projects.map((project) => ({ slug: project.slug }));
}
export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Project`,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Kaamil Khan`,
      description: project.summary,
      images: ["/twitter-image"],
    },
    openGraph: {
      title: `${project.title} | Kaamil Khan`,
      description: project.summary,
      type: "article",
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: "Kaamil Khan software engineering portfolio",
        },
      ],
      url: `/projects/${project.slug}`,
    },
  };
}
export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const index = portfolioData.projects.findIndex(
    (item) => item.slug === project.slug,
  );
  const next =
    portfolioData.projects[(index + 1) % portfolioData.projects.length];
  const contributionsHeading =
    project.ownership === "Independent project"
      ? "What I built"
      : "My contributions";
  return (
    <div id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="wordmark" href="/">
            kaamil<span>.</span>
          </Link>
          <Link className="text-link" href="/#projects">
            ← All projects
          </Link>
        </div>
      </header>
      <main id="main" tabIndex={-1} className="container case-study">
        <div className="case-heading">
          <p className="eyebrow">
            {project.ownership} / {project.category} / {project.dates}
          </p>
          <h1>{project.title}</h1>
          <p className="case-lead">{project.summary}</p>
          <div className="case-actions">
            <a
              className="button button-primary"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon /> View source <Arrow diagonal />
            </a>
            <p className="stack">{project.stack.join(" / ")}</p>
          </div>
          {"liveDemo" in project && (
            <p className="case-demo">
              <a
                className="text-link"
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
              >
                Live demo <Arrow diagonal />
              </a>
              <span>Hosted on Render; services may take a moment to wake up.</span>
            </p>
          )}
        </div>
        <ProjectDiagram kind={project.slug} />
        <ProjectEvidence slug={project.slug} />
        <div className="case-layout">
          <aside aria-label="Project contents">
            <p className="eyebrow">Project notes</p>
            <a href="#problem">The problem</a>
            <a href="#implementation">Implementation</a>
            <a href="#contributions">{contributionsHeading}</a>
            <a href="#decisions">Technical decisions</a>
            <a href="#validation">Testing & validation</a>
            <a href="#lessons">What I learned</a>
          </aside>
          <div className="case-content">
            <section id="problem">
              <h2>The problem</h2>
              <p>{project.problem}</p>
            </section>
            <section id="implementation">
              <h2>Implementation</h2>
              <p>{project.approach}</p>
            </section>
            <section id="contributions">
              <h2>{contributionsHeading}</h2>
              <ul>
                {project.contributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
            <section id="decisions">
              <h2>Technical decisions</h2>
              <p>{project.decision}</p>
            </section>
            <section id="validation">
              <h2>Testing & validation</h2>
              <p>{project.validation}</p>
            </section>
            <section id="lessons">
              <h2>What I learned</h2>
              <p>{project.lesson}</p>
            </section>
          </div>
        </div>
        <div className="next-project">
          <span>Next project</span>
          <Link href={`/projects/${next.slug}`}>
            {next.title} <Arrow />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
