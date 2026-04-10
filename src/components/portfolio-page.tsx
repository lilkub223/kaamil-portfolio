"use client";

import { useEffect, useState } from "react";

import { ActionLink } from "@/components/action-link";
import { ExperienceCard } from "@/components/experience-card";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/project-card";
import { SectionShell } from "@/components/section-shell";
import { portfolioData } from "@/data/portfolio";

const defaultSection = portfolioData.navItems[0]?.id ?? "about";

export function PortfolioPage() {
  const [activeSection, setActiveSection] = useState(defaultSection);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("[data-section]"),
    );

    if (sections.length === 0) {
      return;
    }

    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          visibility.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        }

        const nextSection = [...visibility.entries()].sort(
          (left, right) => right[1] - left[1],
        )[0];

        if (nextSection && nextSection[1] > 0) {
          setActiveSection(nextSection[0]);
        }
      },
      {
        rootMargin: "-16% 0px -55% 0px",
        threshold: [0.12, 0.28, 0.45, 0.65],
      },
    );

    for (const section of sections) {
      visibility.set(section.id, 0);
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="pb-6">
      <Navbar
        activeSection={activeSection}
        email={portfolioData.email}
        navItems={portfolioData.navItems}
        resumeUrl={portfolioData.links.resume}
      />

      <main className="mx-auto mt-5 flex max-w-container flex-col gap-8 px-4">
        <HeroSection />

        <SectionShell
          description="A short profile, current focus, and the kind of software engineering work I am targeting."
          eyebrow="01 / About"
          id="about"
          isActive={activeSection === "about"}
          title="About"
        >
          <div className="grid gap-6 xl:grid-cols-[1.05fr,0.95fr]">
            <div className="grid gap-6">
              <article className="rounded-[28px] border border-line bg-canvasStrong p-5 shadow-panel md:p-6">
                <p className="text-sm leading-8 text-ink md:text-base">
                  {portfolioData.about.bio}
                </p>
                <p className="mt-4 text-sm leading-8 text-muted md:text-base">
                  {portfolioData.about.roles}
                </p>
              </article>

              <article className="rounded-[28px] border border-line bg-canvasStrong p-5 shadow-panel md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-section text-muted">
                  Focus areas
                </p>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {portfolioData.about.focusAreas.map((area) => (
                    <div
                      className="rounded-2xl border border-line bg-surface px-4 py-4 text-sm leading-7 text-ink"
                      key={area}
                    >
                      {area}
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <div className="grid gap-6">
              <article className="rounded-[28px] border border-line bg-canvasStrong p-5 shadow-panel md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-section text-muted">
                  Education
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">
                  {portfolioData.about.education.school}
                </h3>
                <p className="mt-2 text-sm text-ink md:text-base">
                  {portfolioData.about.education.degree}
                </p>
                <div className="mt-5 grid gap-3 rounded-[24px] border border-line bg-surface px-4 py-4 text-sm text-muted sm:grid-cols-2">
                  <div>{portfolioData.about.education.dates}</div>
                  <div>{portfolioData.about.education.gpa}</div>
                  <div className="sm:col-span-2">{portfolioData.about.education.honors}</div>
                </div>
                <div className="mt-5">
                  <p className="font-mono text-[11px] uppercase tracking-section text-muted">
                    Relevant coursework
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {portfolioData.about.education.coursework.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </article>

              <article className="rounded-[28px] border border-line bg-canvasStrong p-5 shadow-panel md:p-6">
                <p className="font-mono text-[11px] uppercase tracking-section text-muted">
                  Looking for
                </p>
                <p className="mt-4 text-sm leading-8 text-ink md:text-base">
                  Software engineering internships and new grad roles where backend, systems, or full-stack work is taken seriously and strong fundamentals matter.
                </p>
              </article>
            </div>
          </div>
        </SectionShell>

        <SectionShell
          description="Selected work that best reflects my backend, systems, and full-stack interests."
          eyebrow="02 / Projects"
          id="projects"
          isActive={activeSection === "projects"}
          title="Projects"
        >
          <div className="space-y-6">
            <ProjectCard
              featured
              project={portfolioData.projects[0]}
            />
            <div className="grid gap-6 xl:grid-cols-2">
              {portfolioData.projects.slice(1).map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                />
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell
          description="Roles that show troubleshooting, data accuracy, and day-to-day reliability in real environments."
          eyebrow="03 / Experience"
          id="experience"
          isActive={activeSection === "experience"}
          title="Experience"
        >
          <div className="grid gap-6 xl:grid-cols-2">
            {portfolioData.experience.map((item) => (
              <ExperienceCard
                experience={item}
                key={`${item.company}-${item.role}`}
              />
            ))}
          </div>
        </SectionShell>

        <SectionShell
          description="Tools and technologies I have used across coursework, projects, and application development."
          eyebrow="04 / Skills"
          id="skills"
          isActive={activeSection === "skills"}
          title="Skills"
        >
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {portfolioData.skillGroups.map((group) => (
              <article
                className="rounded-[26px] border border-line bg-canvasStrong p-5 shadow-panel"
                key={group.title}
              >
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs text-ink"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell
          description="A one-page version with the same core information, links, and project highlights."
          eyebrow="05 / Resume"
          id="resume"
          isActive={activeSection === "resume"}
          title="Resume"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr,0.9fr]">
            <article className="rounded-[28px] border border-line bg-canvasStrong p-5 shadow-panel md:p-6">
              <p className="text-sm leading-8 text-ink md:text-base">
                {portfolioData.resumeSection.summary}
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {portfolioData.resumeSection.bullets.map((bullet) => (
                  <div
                    className="rounded-2xl border border-line bg-surface px-4 py-4 text-sm leading-7 text-ink"
                    key={bullet}
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </article>

            <article className="flex flex-col justify-between rounded-[28px] border border-line bg-canvasStrong p-5 shadow-panel md:p-6">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-section text-muted">
                  Quick access
                </p>
                <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-ink">
                  Open the full resume.
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  It is the fastest way to scan my education, project work, experience, and links in one place.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <ActionLink
                  href={portfolioData.links.resume}
                  target="_blank"
                >
                  Open Resume
                </ActionLink>
                <ActionLink
                  download
                  href={portfolioData.links.resume}
                  variant="secondary"
                >
                  Download PDF
                </ActionLink>
              </div>
            </article>
          </div>
        </SectionShell>

        <SectionShell
          description="Direct ways to reach me for software engineering internships and early-career roles."
          eyebrow="06 / Contact"
          id="contact"
          isActive={activeSection === "contact"}
          title="Contact"
        >
          <div className="grid gap-6 lg:grid-cols-[0.95fr,1.05fr]">
            <article className="rounded-[28px] border border-line bg-canvasStrong p-5 shadow-panel md:p-6">
              <p className="text-sm leading-8 text-ink md:text-base">
                {portfolioData.contact.cta}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <ActionLink href={`mailto:${portfolioData.email}`}>
                  Email Me
                </ActionLink>
                <ActionLink
                  external
                  href={portfolioData.links.linkedin}
                  variant="secondary"
                >
                  LinkedIn
                </ActionLink>
                <ActionLink
                  external
                  href={portfolioData.links.github}
                  variant="secondary"
                >
                  GitHub
                </ActionLink>
              </div>
              <p className="mt-5 text-sm leading-7 text-muted">
                I am open to internship and new grad opportunities in backend, systems, and full-stack software engineering.
              </p>
            </article>

            <article className="rounded-[28px] border border-line bg-canvasStrong p-5 shadow-panel md:p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-line bg-surface px-4 py-4">
                  <p className="font-mono text-[11px] uppercase tracking-section text-muted">
                    Email
                  </p>
                  <a
                    className="mt-2 inline-block text-sm text-ink hover:text-accentStrong"
                    href={`mailto:${portfolioData.email}`}
                  >
                    {portfolioData.email}
                  </a>
                </div>
                <div className="rounded-2xl border border-line bg-surface px-4 py-4">
                  <p className="font-mono text-[11px] uppercase tracking-section text-muted">
                    LinkedIn
                  </p>
                  <a
                    className="mt-2 inline-block text-sm text-ink hover:text-accentStrong"
                    href={portfolioData.links.linkedin}
                    rel="noreferrer"
                    target="_blank"
                  >
                    View profile
                  </a>
                </div>
                <div className="rounded-2xl border border-line bg-surface px-4 py-4">
                  <p className="font-mono text-[11px] uppercase tracking-section text-muted">
                    GitHub
                  </p>
                  <a
                    className="mt-2 inline-block text-sm text-ink hover:text-accentStrong"
                    href={portfolioData.links.github}
                    rel="noreferrer"
                    target="_blank"
                  >
                    lilkub223
                  </a>
                </div>
                <div className="rounded-2xl border border-line bg-surface px-4 py-4">
                  <p className="font-mono text-[11px] uppercase tracking-section text-muted">
                    Phone
                  </p>
                  <p className="mt-2 text-sm text-ink">{portfolioData.phone}</p>
                </div>
                <div className="rounded-2xl border border-line bg-surface px-4 py-4 md:col-span-2">
                  <p className="font-mono text-[11px] uppercase tracking-section text-muted">
                    Location
                  </p>
                  <p className="mt-2 text-sm text-ink">{portfolioData.location}</p>
                </div>
              </div>
            </article>
          </div>
        </SectionShell>
      </main>

      <Footer />
    </div>
  );
}
