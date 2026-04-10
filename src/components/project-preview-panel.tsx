import { cn } from "@/lib/cn";
import type { ProjectScreen } from "@/data/portfolio";

const kindClassNames: Record<ProjectScreen["kind"], string> = {
  browser: "bg-[#0f172a] text-slate-200",
  editor: "bg-[#131b2e] text-slate-200",
  terminal: "bg-[#101827] text-emerald-200",
};

export function ProjectPreviewPanel({ screen }: { screen: ProjectScreen }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-line bg-canvasStrong shadow-panel">
      <div className="flex items-center justify-between border-b border-line bg-surface px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ef4444]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#f59e0b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#10b981]" />
        </div>
        <div className="text-right">
          <p className="text-sm font-medium text-ink">{screen.title}</p>
          <p className="text-xs text-muted">{screen.subtitle}</p>
        </div>
      </div>

      <div className={cn("px-5 py-5 font-mono text-sm leading-7", kindClassNames[screen.kind])}>
        {screen.lines.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>

      <div className="border-t border-line bg-surface px-4 py-3 text-sm text-muted">
        {screen.footer}
      </div>
    </article>
  );
}
