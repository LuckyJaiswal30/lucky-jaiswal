"use client";

import { motion } from "motion/react";
import {
  fadeInUp,
  sectionViewport,
  staggerContainer,
  transition,
} from "@/lib/animations";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Motion",
  "Lenis",
  "Accessibility",
  "Performance",
  "Design Systems",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 xl:px-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="mx-auto flex max-w-4xl flex-col items-center text-center"
        >
          <motion.p
            variants={fadeInUp}
            transition={transition}
            className="text-sm uppercase tracking-[0.34em] text-[color:var(--muted)]"
          >
            Skills
          </motion.p>

          <motion.h2
            variants={fadeInUp}
            transition={transition}
            className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.04em] text-[color:var(--foreground)] sm:text-4xl"
          >
            A focused stack for building fast, modern, and maintainable product
            experiences.
          </motion.h2>

          <motion.div
            variants={fadeInUp}
            transition={{ ...transition, delay: 0.08 }}
            className="mt-10 flex max-w-3xl flex-wrap justify-center gap-3"
          >
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-[color:var(--surface-strong)]"
                style={{
                  borderColor: "var(--border)",
                  background: "var(--surface)",
                  color: "var(--foreground)",
                }}
              >
                {skill}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
