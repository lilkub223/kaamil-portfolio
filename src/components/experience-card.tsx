import type { Experience } from "@/data/portfolio";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="rounded-[30px] border border-line bg-canvasStrong p-5 shadow-panel md:p-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-ink">
            {experience.role}
          </h3>
          <p className="mt-2 text-sm font-medium text-ink md:text-base">
            {experience.company}
          </p>
          <p className="mt-1 text-sm text-muted">{experience.location}</p>
        </div>
        <span className="rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] uppercase tracking-section text-muted">
          {experience.dates}
        </span>
      </div>

      <p className="mt-5 text-sm leading-7 text-muted md:text-base">{experience.summary}</p>
      <ul className="mt-5 space-y-3">
        {experience.bullets.map((bullet) => (
          <li
            key={bullet}
            className="flex gap-3 text-sm leading-7 text-ink md:text-base"
          >
            <span className="mt-2 h-2 w-2 rounded-full bg-accent" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
