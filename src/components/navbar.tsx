"use client";
import { useEffect, useRef, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { Arrow } from "./icons";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const position =
        window.scrollY + (header.current?.offsetHeight ?? 78) + 30;
      let current = "";
      for (const item of portfolioData.navItems) {
        const section = document.getElementById(item.id);
        if (
          section &&
          section.getBoundingClientRect().top + window.scrollY <= position
        )
          current = item.id;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      )
        current = "contact";
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const desktop = window.matchMedia("(min-width: 601px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
      schedule();
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    window.addEventListener("hashchange", schedule);
    window.addEventListener("popstate", schedule);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("hashchange", schedule);
      window.removeEventListener("popstate", schedule);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const focusOutside = (event: FocusEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", outside);
    document.addEventListener("focusin", focusOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", outside);
      document.removeEventListener("focusin", focusOutside);
    };
  }, [open]);

  return (
    <header className="site-header" ref={header}>
      <div className="container header-inner">
        <a
          className="wordmark"
          href="#top"
          aria-label="Kaamil Khan, home"
          onClick={() => setOpen(false)}
        >
          kaamil<span>.</span>
        </a>
        <button
          ref={toggle}
          id="menu-toggle"
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-nav"
          onClick={() => setOpen((value) => !value)}
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
              onClick={() => {
                setOpen(false);
                // Move keyboard focus out of the closing menu without changing native hash history.
                if (open)
                  document
                    .getElementById(item.id)
                    ?.focus({ preventScroll: true });
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            className="nav-resume"
            href={portfolioData.links.resume}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            aria-label="View resume PDF (opens in a new tab)"
          >
            Resume <Arrow diagonal />
          </a>
        </nav>
      </div>
    </header>
  );
}
