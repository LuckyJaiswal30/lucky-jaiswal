"use client";

import { motion } from "motion/react";
import {
  fadeInUp,
  sectionViewport,
  staggerContainer,
  transition,
} from "@/lib/animations";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="grid gap-10 lg:grid-cols-12"
        >
          <motion.div
            variants={fadeInUp}
            transition={transition}
            className="lg:col-span-4"
          >
            <p className="text-sm uppercase tracking-[0.34em] text-[color:var(--muted)]">
              About
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-[color:var(--foreground)] sm:text-4xl">
              Structured product thinking with strong frontend execution.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            transition={{ ...transition, delay: 0.08 }}
            className="lg:col-span-8"
          >
            <div className="max-w-3xl space-y-6 text-lg leading-8 text-[color:var(--muted)]">
              <p>
                I build developer-focused and product-facing interfaces with a
                strong emphasis on clarity, consistency, and speed. My work sits
                between design intent and engineering execution, where systems
                need to feel thoughtful rather than overdesigned.
              </p>
              <p>
                I care about readable architecture, stable UX, and motion that
                supports the interface instead of distracting from it. The goal
                is always the same: make the product feel polished,
                understandable, and dependable.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
