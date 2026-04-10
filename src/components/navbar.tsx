"use client";

import { ActionLink } from "@/components/action-link";
import { cn } from "@/lib/cn";

type NavbarProps = {
  activeSection: string;
  email: string;
  navItems: ReadonlyArray<{
    id: string;
    label: string;
  }>;
  resumeUrl: string;
};

export function Navbar({ activeSection, email, navItems, resumeUrl }: NavbarProps) {
  return (
    <header className="sticky top-4 z-50 px-4 pt-4">
      <div className="mx-auto max-w-container">
        <div className="rounded-[24px] border border-line bg-[rgba(255,255,255,0.82)] px-4 py-3 shadow-panel backdrop-blur md:px-5">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <a
              className="flex shrink-0 flex-col text-left"
              href="#top"
            >
              <span className="font-display text-base font-semibold tracking-tight text-ink">
                Kaamil Khan
              </span>
              <span className="mt-1 font-mono text-[11px] uppercase tracking-section text-muted">
                Backend • Systems • Full-stack
              </span>
            </a>

            <nav
              aria-label="Section navigation"
              className="no-scrollbar overflow-x-auto lg:flex-1 lg:px-6"
            >
              <div className="flex min-w-max items-center gap-1 rounded-full bg-canvasStrong/90 p-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;

                  return (
                    <a
                      key={item.id}
                      className={cn(
                        "rounded-full px-3.5 py-2 text-sm font-medium transition duration-200",
                        isActive
                          ? "bg-white text-ink shadow-sm"
                          : "text-muted hover:text-ink",
                      )}
                      href={`#${item.id}`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </nav>

            <div className="hidden shrink-0 items-center gap-3 md:flex">
              <ActionLink
                href={resumeUrl}
                target="_blank"
              >
                Resume
              </ActionLink>
              <ActionLink
                href={`mailto:${email}`}
                variant="secondary"
              >
                Email
              </ActionLink>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
