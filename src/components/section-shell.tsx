import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  isActive: boolean;
  children: ReactNode;
  className?: string;
};

export function SectionShell({
  children,
  className,
  description,
  eyebrow,
  id,
  isActive,
  title,
}: SectionShellProps) {
  return (
    <section
      className={cn(
        "scroll-mt-32 rounded-[30px] border px-5 py-6 shadow-panel transition duration-300 md:px-8 md:py-8",
        isActive
          ? "border-accent bg-surfaceStrong"
          : "border-line bg-surface",
        className,
      )}
      data-section
      id={id}
    >
      <div className="mb-7 grid gap-4 lg:grid-cols-[minmax(0,0.9fr),minmax(0,0.85fr)] lg:items-end">
        <div className="max-w-2xl">
          <p className="font-mono text-[11px] uppercase tracking-section text-accent">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-[2rem] font-semibold tracking-tight text-ink md:text-[2.45rem]">
            {title}
          </h2>
        </div>
        <div className="max-w-2xl lg:justify-self-end">
          <p className="text-sm leading-7 text-muted md:text-[15px]">{description}</p>
        </div>
      </div>
      {children}
    </section>
  );
}
