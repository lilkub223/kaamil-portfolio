"use client";
import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Arrow } from "./icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    let scheduled = false;
    const update = () => {
      const position = window.scrollY + 150;
      let current = "";
      for (const item of portfolioData.navItems) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= position) current = item.id;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 16
      )
        current = "contact";
      setActive(current);
      scheduled = false;
    };
    const onScroll = () => {
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(update);
      }
    };
    const onKey = (event: KeyboardEvent) => {
      if (
        event.key === "Escape" &&
        document
          .getElementById("menu-toggle")
          ?.getAttribute("aria-expanded") === "true"
      ) {
        setOpen(false);
        document.getElementById("menu-toggle")?.focus();
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="wordmark" href="/#top" aria-label="Kaamil Khan, home">
          kaamil<span>.</span>
        </a>
        <button
          id="menu-toggle"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="primary-nav"
          className={open ? "primary-nav is-open" : "primary-nav"}
          aria-label="Main navigation"
        >
          {portfolioData.navItems.map((item) => (
            <a
              key={item.id}
              href={`/#${item.id}`}
              aria-current={active === item.id ? "location" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="nav-resume"
            href={portfolioData.links.resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume <Arrow diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}
