"use client";

import { Instagram, Linkedin, Mail } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/LuckyJaiswal30",
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/luckyjaiswaldev/",
    icon: LinkedInIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/__siddharth_.9/",
    icon: InstagramIcon,
  },
  {
    label: "Email",
    href: "mailto:siddharthjaiswal8550@gmail.com?subject=Portfolio%20Contact",
    icon: EmailIcon,
  },
];

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <footer className="px-6 pb-14 pt-6 sm:px-10 lg:px-16 xl:px-20">
      <div
        className="mx-auto flex w-full max-w-6xl flex-col gap-8 border-t pt-8 sm:flex-row sm:items-center sm:justify-between"
        style={{ borderColor: "var(--border)" }}
      >
        <p className="text-sm tracking-[0.08em] text-[color:var(--muted-soft)]">
          {`© ${new Date().getFullYear()} Lucky Jaiswal. All rights reserved.`}
        </p>

        <div className="flex items-center gap-4 sm:gap-5">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              onHoverStart={() => setHoveredLink(link.label)}
              onHoverEnd={() =>
                setHoveredLink((current) =>
                  current === link.label ? null : current
                )
              }
              onFocus={() => setHoveredLink(link.label)}
              onBlur={() =>
                setHoveredLink((current) =>
                  current === link.label ? null : current
                )
              }
              whileHover={{ y: -1, scale: 1.05 }}
              whileFocus={{ y: -1, scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="group relative inline-flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12"
              style={{
                color:
                  hoveredLink === link.label
                    ? "var(--foreground)"
                    : "var(--muted)",
              }}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              <AnimatePresence>
                {hoveredLink === link.label ? (
                  <motion.span
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="pointer-events-none absolute bottom-[calc(100%+4px)] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[color:var(--foreground)]"
                    style={{
                      borderColor: "var(--border)",
                      background: "var(--surface-strong)",
                    }}
                  >
                    {link.label}
                  </motion.span>
                ) : null}
              </AnimatePresence>

              <link.icon />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function EmailIcon() {
  return (
    <Mail
      aria-hidden="true"
      className="h-7 w-7"
      strokeWidth={1.8}
      absoluteStrokeWidth
    />
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7 transition-all duration-300"
      fill="currentColor"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <Linkedin
      aria-hidden="true"
      className="h-7 w-7"
      strokeWidth={1.75}
      absoluteStrokeWidth
    />
  );
}

function InstagramIcon() {
  return (
    <Instagram
      aria-hidden="true"
      className="h-7 w-7"
      strokeWidth={1.75}
      absoluteStrokeWidth
    />
  );
}
