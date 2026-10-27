import { Arrow } from "./icons";
export function Footer() {
  return (
    <footer className="container footer">
      <span>© {new Date().getFullYear()} Kaamil Khan</span>
      <span>Built with care in Chicago.</span>
      <a href="#top">
        Back to top <Arrow />
      </a>
    </footer>
  );
}
