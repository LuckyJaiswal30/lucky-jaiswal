"use client";

import { motion } from "motion/react";
import { fadeInUp, sectionViewport, transition } from "@/lib/animations";

const contactMailto =
  "mailto:siddharthjaiswal8550@gmail.com?subject=Portfolio%20Contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-24 px-6 pb-24 pt-24 sm:px-10 lg:px-16 xl:px-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          variants={fadeInUp}
          transition={transition}
          className="grid gap-12 border-t pt-12 lg:grid-cols-12 lg:items-start"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="lg:col-span-7">
            <h2 className="max-w-4xl text-4xl font-semibold leading-[0.98] tracking-[-0.05em] text-[color:var(--foreground)] sm:text-5xl lg:text-6xl">
              Let&apos;s build something precise, fast, and unmistakably modern.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-sm uppercase tracking-[0.4em] text-[color:var(--muted)]">
              Contact
            </p>

            <p className="mt-7 text-base leading-7 text-[color:var(--muted)]">
              Available for select product, frontend, and interaction-focused
              work.
            </p>

            <motion.a
              href={contactMailto}
              aria-label="Contact me by email"
              whileHover={{ scale: 1.05 }}
              whileFocus={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 inline-flex items-center justify-center rounded-full border px-7 py-3 text-sm font-medium uppercase tracking-[0.18em] transition-all duration-300 hover:brightness-110 focus-visible:brightness-110"
              style={{
                borderColor: "var(--border)",
                background: "var(--capsule-bg)",
                color: "var(--capsule-fg)",
              }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
