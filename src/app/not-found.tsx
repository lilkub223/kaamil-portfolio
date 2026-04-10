import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-container items-center px-4">
      <section className="w-full rounded-[36px] border border-line bg-surface px-6 py-10 shadow-panel md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-section text-accent">
          Not found
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-ink">
          That page does not exist.
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-8 text-muted md:text-base">
          The route may have changed, or the project page you tried to open does not exist in the current portfolio build.
        </p>
        <Link
          className="mt-8 inline-flex rounded-full border border-line bg-canvasStrong px-4 py-2.5 text-sm font-medium text-ink transition hover:-translate-y-0.5 hover:shadow-panel"
          href="/"
        >
          Return to portfolio
        </Link>
      </section>
    </main>
  );
}
