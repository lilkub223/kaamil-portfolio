import Link from "next/link";
export default function NotFound() {
  return (
    <main className="container not-found">
      <p className="eyebrow">404 / Not found</p>
      <h1>
        This page took
        <br />a wrong turn.
      </h1>
      <p>The page you’re looking for isn’t here.</p>
      <Link className="button button-primary" href="/">
        Return to portfolio →
      </Link>
    </main>
  );
}
