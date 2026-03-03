"use client";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    name: "JobHunter AI",
    tagline: "Autonomous multi-agent job application system",
    description:
      "A multi-agent Python system that autonomously scrapes, scores, and applies to SWE jobs. An Orchestrator coordinates a Scraper Agent (Greenhouse + Lever), a Resume Match Agent (Claude API, 0–100 scoring), and an Apply Agent (Playwright automation) — all backed by FastAPI, PostgreSQL, Redis, and a React dashboard.",
    tags: ["Python", "FastAPI", "Claude AI", "PostgreSQL", "React", "Playwright"],
    github: "https://github.com/nperry248/JobHunter",
    image: "/images/jobhunter.png",
    accent: "#4f9cf9",
    featured: true,
  },
  {
    name: "Roam",
    tagline: "Full-stack mobile travel tracker",
    description:
      "React Native app with Supabase (PostgreSQL + Auth + Storage) for planning trips end-to-end. Features a dynamic dashboard, AI-powered travel chat via Gemini, photo galleries, expense tracking, and document management — all with per-user row-level security.",
    tags: ["React Native", "Supabase", "TypeScript", "Expo", "Gemini AI"],
    github: "https://github.com/nperry248/Roam",
    image: "/images/roam8.png",
    accent: "#22d3ee",
    featured: true,
  },
  {
    name: "PhishGuard",
    tagline: "ML-powered Chrome extension",
    description:
      "Chrome extension that detects phishing URLs in real time. A Flask backend serves an XGBoost classifier trained on URL features, deployed on Render. Built to be fast, lightweight, and accurate.",
    tags: ["Python", "XGBoost", "Flask", "JavaScript", "Chrome APIs"],
    github: "https://github.com/nperry248/PhishGuard",
    image: "/images/phishgaurd3.png",
    accent: "#f97316",
    featured: true,
  },
  {
    name: "MindShell",
    tagline: "Natural language terminal for macOS",
    description:
      "Type what you want in plain English — MindShell translates it into a shell command using Gemini AI, shows it to you, and runs it on confirmation. Handles cd correctly, blocks destructive commands, and stays context-aware of your working directory.",
    tags: ["Python", "Gemini AI", "CLI", "Rich", "zsh/bash"],
    github: "https://github.com/nperry248/MindShell",
    image: "/images/mind.png",
    accent: "#10b981",
    featured: true,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-[#4f9cf9] text-sm font-mono tracking-widest mb-3">
            03. PROJECTS
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-black text-white mb-4 tracking-tight">
            Things I&apos;ve built.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#64748b] mb-16 max-w-lg">
            A mix of mobile apps, ML systems, and web platforms — all shipped end to end.
          </motion.p>

          {/* Featured projects — large cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {projects.filter(p => p.featured).map((project) => (
              <motion.div
                key={project.name}
                variants={fadeUp}
                className="group bg-[#0f1520] border border-white/[0.06] rounded-2xl overflow-hidden hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-[#080c10]">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{ background: `radial-gradient(circle at 50% 50%, ${project.accent}, transparent 70%)` }}
                  />
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-white font-bold text-xl">{project.name}</h3>
                      <p className="text-sm mt-0.5" style={{ color: project.accent }}>{project.tagline}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                          className="text-[#64748b] hover:text-white transition-colors">
                          <Github size={18} />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-[#64748b] border border-white/[0.06]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Smaller projects */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.filter(p => !p.featured).map((project) => (
              <motion.div
                key={project.name}
                variants={fadeUp}
                className="group bg-[#0f1520] border border-white/[0.06] rounded-2xl p-6 hover:border-white/[0.12] transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-8 h-1 rounded-full mb-4"
                  style={{ backgroundColor: project.accent }}
                />
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-white font-bold text-lg">{project.name}</h3>
                    <p className="text-sm mt-0.5" style={{ color: project.accent }}>{project.tagline}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        className="text-[#64748b] hover:text-white transition-colors">
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-[#94a3b8] text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-[#64748b] border border-white/[0.06]">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
