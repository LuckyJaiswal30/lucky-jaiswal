"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";
import ThemeToggle from "@/components/ThemeToggle";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#home");
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const sections = navigation
      .map((item) => {
        const element = document.querySelector(item.href);

        return element instanceof HTMLElement
          ? { href: item.href, element }
          : null;
      })
      .filter(
        (
          entry,
        ): entry is {
          href: string;
          element: HTMLElement;
        } => entry !== null,
      );

    const visibleSections = new Set<string>();
    let frame = 0;

    const updateActive = () => {
      if (window.scrollY < 80) {
        setActiveHref("#home");
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      const candidates = sections
        .map(({ href, element }) => {
          const rect = element.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const isVisible = visibleSections.has(href);

          return {
            href,
            isVisible,
            distance: Math.abs(sectionCenter - viewportCenter),
            rectTop: rect.top,
          };
        })
        .filter((candidate) => candidate.rectTop < window.innerHeight);

      const pool = candidates.some((candidate) => candidate.isVisible)
        ? candidates.filter((candidate) => candidate.isVisible)
        : candidates;

      const current = pool.sort((a, b) => {
        if (a.distance !== b.distance) {
          return a.distance - b.distance;
        }

        return a.rectTop - b.rectTop;
      })[0];

      if (current) {
        setActiveHref(current.href);
      }
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActive);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const href = `#${entry.target.id}`;

          if (entry.isIntersecting) {
            visibleSections.add(href);
          } else {
            visibleSections.delete(href);
          }
        });

        requestUpdate();
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: "-30% 0px -30% 0px",
      },
    );

    sections.forEach(({ href, element }) => {
      visibleSections.delete(href);
      observer.observe(element);
    });

    const onScroll = () => {
      requestUpdate();
    };

    requestUpdate();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.cancelAnimationFrame(frame);
      sections.forEach(({ element }) => observer.unobserve(element));
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const handleNavigate = (href: string) => {
    setActiveHref(href);
    scrollTo(href);
    setIsOpen(false);
  };

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-4 z-50 flex items-start justify-center px-4">
        <div className="hidden md:flex md:w-full md:justify-center">
          <nav
            className="pointer-events-auto flex items-center gap-2 rounded-full border px-3 py-2 backdrop-blur-xl"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            {navigation.map((item) => (
              <button
                key={item.href}
                type="button"
                onClick={() => handleNavigate(item.href)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                  activeHref === item.href
                    ? "bg-[color:var(--surface-strong)] text-[color:var(--foreground)]"
                    : "text-[color:var(--muted)] hover:bg-[color:var(--surface-strong)] hover:text-[color:var(--foreground)]"
                }`}
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle />
          </nav>
        </div>

        <div className="flex w-full justify-end md:hidden">
          <button
            type="button"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsOpen((open) => !open)}
            className="pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300"
            style={{
              borderColor: "var(--border)",
              background: "var(--surface)",
            }}
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1.5">
              <span
                className={`h-px w-5 bg-[color:var(--foreground)] transition-all duration-300 ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-px w-5 bg-[color:var(--foreground)] transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-px w-5 bg-[color:var(--foreground)] transition-all duration-300 ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation"
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed right-0 top-0 z-50 flex h-full w-[18rem] flex-col gap-8 border-l px-6 py-24 md:hidden"
              style={{
                borderColor: "var(--border)",
                background: "color-mix(in srgb, var(--background) 88%, transparent)",
              }}
            >
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">
                  Navigation
                </p>
                <ThemeToggle />
              </div>

              <div className="flex flex-col gap-3">
                {navigation.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavigate(item.href)}
                    className={`rounded-full border px-4 py-3 text-sm uppercase tracking-[0.24em] transition-all duration-300 ${
                      activeHref === item.href
                        ? "bg-[color:var(--surface)] text-[color:var(--foreground)]"
                        : "text-[color:var(--foreground)] hover:bg-[color:var(--surface)]"
                    }`}
                    style={{ borderColor: "var(--border)" }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}
