import Link from "next/link";
import type { Project } from "@/data/portfolio";
import { Arrow, GithubIcon } from "./icons";
import { ProjectDiagram } from "./project-diagram";

export function ProjectCard({
  project,
  featured = false,
  compact = false,
}: {
  project: Project;
  featured?: boolean;
  compact?: boolean;
}) {
  return (
    <article
      className={`project${featured ? " project-featured" : ""}${compact ? " project-compact" : ""}`}
    >
      <Link
        className="visual-link"
        href={`/projects/${project.slug}`}
        aria-label={`Explore ${project.title} case study`}
      >
        <ProjectDiagram kind={project.slug} />
      </Link>
      <div className="project-copy">
        <div className="project-meta">
          <span>{project.category}</span>
          <span>{project.dates}</span>
        </div>
        <h3>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <p className="project-summary">{project.summary}</p>
        <p className="project-contribution">{project.contributions[0]}</p>
        {featured && (
          <p className="project-contribution">{project.contributions[2]}</p>
        )}
        <p className="stack">{project.stack.join(" / ")}</p>
        <div className="project-links">
          <Link className="text-link" href={`/projects/${project.slug}`}>
            Explore project <Arrow />
          </Link>
          <a
            className="github-link"
            href={project.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${project.title} on GitHub`}
          >
            <GithubIcon /> Code <Arrow diagonal />
          </a>
        </div>
      </div>
    </article>
  );
}
