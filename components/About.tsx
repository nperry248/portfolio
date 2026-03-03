"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
        >
          <motion.p variants={fadeUp} className="text-[#4f9cf9] text-sm font-mono tracking-widest mb-3">
            01. ABOUT ME
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-black text-white mb-12 tracking-tight">
            Building things I&apos;m proud of.
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Text */}
            <motion.div variants={fadeUp} className="space-y-4 text-[#94a3b8] leading-relaxed">
              <p>
                I&apos;m a Computer Science student at{" "}
                <span className="text-white font-medium">Northwestern University</span> (graduating June 2026),
                concentrating in Systems with a minor in Data Science and a Theme in French. 
              </p>
              <p>
                This past summer I interned at{" "}
                <span className="text-white font-medium">Google</span> on the Cloud capacity management team,
                building full-stack tooling used by engineering teams across the organization. I used
                Angular and React on the front, Python and C++ in the back.
              </p>
              <p>
                Outside of these, I&apos;m on the golf course and squash court, and playing pool whenever I can. I also have been learning French for over 10 years. 
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                {["Northwestern '26", "Google Cloud", "French Proficient"].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1.5 rounded-full border border-white/10 text-[#94a3b8] bg-white/[0.03]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
