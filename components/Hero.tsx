"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#4f9cf9]/5 blur-[120px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#4f9cf9 1px, transparent 1px), linear-gradient(90deg, #4f9cf9 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-4xl w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#4f9cf9] text-sm font-mono mb-4 tracking-widest"
        >
          Hi, I&apos;m
        </motion.p>

        <motion.h5
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl md:text-7xl font-black text-white tracking-tight leading-none mb-4"
        >
          Nick Perry
        </motion.h5>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-[#4f9cf9]" />
          <p className="text-xl md:text-2xl text-[#94a3b8] font-light">
            Software Engineer
          </p>
        </motion.div> */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-[#64748b] text-base md:text-lg max-w-xl leading-relaxed mb-10"
        >
          Northwestern CS &apos;26 · Prev Google SWE intern
          <br />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-[#4f9cf9] text-white text-sm font-semibold rounded-lg hover:bg-[#3b82f6] transition-colors shadow-lg shadow-[#4f9cf9]/20"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white/5 border border-white/10 text-white text-sm font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            Get in Touch
          </a>
          <div className="flex items-center gap-3 ml-2">
            <a
              href="https://github.com/nperry248"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/nicholasperry24"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#64748b] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#475569] flex flex-col items-center gap-2"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
