"use client";

import { useState } from "react";

import { ActionLink, actionClassName } from "@/components/action-link";
import type { Project } from "@/data/portfolio";
import { cn } from "@/lib/cn";

type ProjectCardProps = {
  featured?: boolean;
  project: Project;
};

export function ProjectCard({ featured = false, project }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(featured);

  return (
    <article
      className={cn(
        "rounded-[30px] border border-line bg-canvasStrong p-5 shadow-panel transition duration-200 hover:-translate-y-0.5 hover:shadow-lift md:p-6",
        featured && "lg:p-7",
      )}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full bg-accentSoft px-3 py-1 text-xs font-medium text-accentStrong">
          {project.theme}
        </span>
        <span className="font-mono text-[11px] uppercase tracking-section text-muted">
          {project.dates}
        </span>
      </div>

      <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-ink md:text-[2rem]">
        {project.title}
      </h3>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-muted md:text-base">
        {project.summary}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink"
          >
            {item}
          </span>
        ))}
      </div>

      <div className={cn("mt-6 gap-6", featured && "xl:grid xl:grid-cols-[1.1fr,0.9fr]")}>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-section text-muted">
            What I built
          </p>
          <ul className="mt-4 space-y-3">
            {project.highlights.map((highlight) => (
              <li
                key={highlight}
                className="flex gap-3 text-sm leading-7 text-ink"
              >
                <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {featured ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-3 xl:mt-0 xl:grid-cols-1">
            {project.diagram.map((column) => (
              <div
                className="rounded-[24px] border border-line bg-surface px-4 py-4"
                key={column.title}
              >
                <p className="font-mono text-[11px] uppercase tracking-section text-muted">
                  {column.title}
                </p>
                <ul className="mt-3 space-y-2">
                  {column.items.map((item) => (
                    <li
                      className="text-sm leading-6 text-ink"
                      key={item}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <ActionLink href={`/projects/${project.slug}`}>
          Case Study
        </ActionLink>
        <ActionLink
          external
          href={project.github}
          variant="secondary"
        >
          GitHub
        </ActionLink>
        <button
          className={actionClassName("quiet", "border border-line")}
          onClick={() => setExpanded((current) => !current)}
          type="button"
        >
          {expanded ? "Hide notes" : "More details"}
        </button>
      </div>

      {expanded ? (
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {project.architecture.map((detail) => (
            <div
              className="rounded-[24px] border border-line bg-surface px-4 py-4 text-sm leading-7 text-ink"
              key={detail}
            >
              {detail}
            </div>
          ))}
        </div>
      ) : null}
    </article>
  );
}
