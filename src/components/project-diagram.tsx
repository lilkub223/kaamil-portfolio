import type { ProjectDiagramColumn } from "@/data/portfolio";

export function ProjectDiagram({
  columns,
}: {
  columns: readonly ProjectDiagramColumn[];
}) {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
      {columns.map((column, index) => (
        <div
          className="flex flex-1 items-stretch gap-4"
          key={column.title}
        >
          <article className="flex-1 rounded-[28px] border border-line bg-canvasStrong p-5 shadow-panel">
            <p className="font-mono text-[11px] uppercase tracking-section text-accent">
              {column.title}
            </p>
            <div className="mt-4 space-y-3">
              {column.items.map((item) => (
                <div
                  className="rounded-2xl border border-line bg-surface px-4 py-3 text-sm leading-7 text-ink"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </article>

          {index < columns.length - 1 ? (
            <div className="hidden items-center justify-center lg:flex">
              <div className="rounded-full border border-line bg-surface px-3 py-2 font-mono text-xs text-muted">
                -&gt;
              </div>
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}
