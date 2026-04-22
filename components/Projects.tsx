"use client";

import { motion } from "motion/react";
import { fadeInUp, sectionViewport, transition } from "@/lib/animations";

type Project = {
  title: string;
  description: string;
  stack: string[];
  status: "Completed" | "In Progress";
  note?: string;
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "Personal Portfolio",
    description:
      "A minimal, high-performance portfolio focused on smooth interactions, clean design, and modern frontend practices.",
    stack: ["Next.js", "Tailwind CSS", "Motion", "Lenis"],
    status: "Completed",
    liveUrl: "/",
    githubUrl: "https://github.com/LuckyJaiswal30",
  },
  {
    title: "High-End Product Landing Page",
    description:
      "Designing and building a modern, high-end landing experience with strong visual hierarchy, smooth interactions, and refined UI.",
    stack: ["Next.js", "Tailwind CSS", "Motion"],
    status: "In Progress",
    note: "Focused on animation, layout precision, and performance.",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 xl:px-20"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={sectionViewport}
          className="grid gap-24"
        >
          <motion.div
            variants={fadeInUp}
            transition={transition}
            className="max-w-3xl"
          >
            <h2 className="text-4xl font-semibold tracking-[-0.05em] text-[color:var(--foreground)] sm:text-5xl">
              Selected Work
            </h2>
          </motion.div>

          <div className="space-y-24 lg:space-y-28">
            {projects.map((project, index) => {
              const alignRight = index % 2 === 1;

              return (
                <motion.article
                  key={project.title}
                  variants={fadeInUp}
                  transition={transition}
                  whileHover={{ y: -2 }}
                  className="group grid lg:grid-cols-12"
                >
                  <div
                    className={
                      alignRight
                        ? "lg:col-span-7 lg:col-start-6"
                        : "lg:col-span-7"
                    }
                  >
                    <p
                      className={`text-xs uppercase tracking-[0.26em] text-[color:var(--muted-soft)] ${
                        alignRight ? "lg:text-right" : ""
                      }`}
                    >
                      {project.status}
                    </p>

                    {project.note ? (
                      <p
                        className={`mt-2 text-xs uppercase tracking-[0.2em] text-[color:var(--muted)] ${
                          alignRight ? "lg:text-right" : ""
                        }`}
                      >
                        {project.note}
                      </p>
                    ) : null}

                    <h3
                      className={`mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] text-[color:var(--foreground)] sm:text-5xl ${
                        alignRight ? "lg:text-right" : ""
                      }`}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={`mt-6 text-base leading-7 text-[color:var(--muted)] sm:text-lg ${
                        alignRight ? "lg:text-right" : ""
                      }`}
                    >
                      {project.description}
                    </p>

                    <p
                      className={`mt-6 text-xs uppercase tracking-[0.22em] text-[color:var(--muted-soft)] ${
                        alignRight ? "lg:text-right" : ""
                      }`}
                    >
                      {project.stack.join(" / ")}
                    </p>

                    {project.status === "Completed" ? (
                      <div
                        className={`mt-8 flex items-center gap-6 text-sm ${
                          alignRight ? "lg:justify-end" : ""
                        }`}
                      >
                        {project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            className="border-b border-transparent pb-1 text-[color:var(--foreground)] transition-all duration-300 group-hover:opacity-90 hover:border-current"
                          >
                            View Project
                          </a>
                        ) : null}

                        {project.githubUrl ? (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="border-b border-transparent pb-1 text-[color:var(--muted)] transition-all duration-300 hover:border-current hover:text-[color:var(--foreground)]"
                          >
                            GitHub
                          </a>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
