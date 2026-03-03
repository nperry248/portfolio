"use client";
import { motion } from "framer-motion";

const skills = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "C", "C++", "HTML/CSS", "Matlab"],
  },
  {
    category: "Frontend",
    items: ["React", "React Native", "Angular", "Next.js", "Expo", "Tailwind CSS"],
  },
  {
    category: "Backend & Cloud",
    items: ["Node.js", "Flask", "AWS", "GCP", "Supabase", "PostgreSQL", "Docker"],
  },
  {
    category: "Data & ML",
    items: ["Scikit-learn", "Pandas", "Matplotlib", "XGBoost", "Gemini AI"],
  },
  {
    category: "Tools",
    items: ["Git", "Figma", "Claude Code", "Tableau", "Webflow"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 bg-[#0a0e16]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-[#4f9cf9] text-sm font-mono tracking-widest mb-3">
            04. SKILLS
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-black text-white mb-16 tracking-tight">
            What I work with.
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group, i) => (
              <motion.div
                key={group.category}
                variants={fadeUp}
                className="bg-[#0f1520] border border-white/[0.06] rounded-2xl p-6"
              >
                <h3 className="text-[#4f9cf9] text-xs font-mono tracking-widest uppercase mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-[#94a3b8] hover:text-white hover:border-[#4f9cf9]/30 transition-colors cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Education card */}
            <motion.div
              variants={fadeUp}
              className="bg-[#0f1520] border border-white/[0.06] rounded-2xl p-6 md:col-span-2 lg:col-span-1"
            >
              <h3 className="text-[#4f9cf9] text-xs font-mono tracking-widest uppercase mb-4">
                Education
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-white font-semibold">Northwestern University</p>
                  <p className="text-[#94a3b8] text-sm">B.S. Computer Science, Systems</p>
                  <p className="text-[#64748b] text-xs mt-1">Minor: Data Science · GPA: 3.8 · June 2026</p>
                </div>
                <div className="h-px bg-white/[0.06]" />
                <div>
                  <p className="text-[#94a3b8] text-sm">McCormick Engineering Honors</p>
                  <p className="text-[#64748b] text-xs mt-0.5">Fall 2023, Winter 2024, Winter–Fall 2025</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
