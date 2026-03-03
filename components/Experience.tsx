"use client";
import { motion } from "framer-motion";

function GoogleLogo() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function NorthwesternLogo() {
  return <span style={{ color: "#4E2A84", fontWeight: 900, fontSize: 20 }}>N</span>;
}

function MentrLogo() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 19V5l4.5 8 4.5-8 4.5 8L21 5v14h-2.5V10.5L14 18l-2-3.5-2 3.5-4.5-7.5V19H3z" fill="#10B981"/>
    </svg>
  );
}

const jobs = [
  {
    company: "Google",
    LogoComponent: GoogleLogo,
    logoBg: "rgba(66,133,244,0.1)",
    logoBorder: "rgba(66,133,244,0.2)",
    role: "Software Engineering Intern",
    period: "Jun 2025 – Sep 2025",
    location: "Sunnyvale, CA",
    bullets: [
      "Worked on the Google Cloud capacity management team, building tools to optimize resource allocation at scale",
      "Developed admission control features for an internal console, implementing demand steering functionality for VMs",
      "Ensured feature parity between CLI and UI, improving accessibility for multiple engineering teams",
      "Full-stack development with Angular, Python, and C++ for end-to-end capacity management enhancements",
    ],
    tags: ["Angular", "Python", "C++", "Google Cloud"],
  },
  {
    company: "Northwestern University",
    LogoComponent: NorthwesternLogo,
    logoBg: "rgba(78,42,132,0.15)",
    logoBorder: "rgba(78,42,132,0.3)",
    role: "Undergraduate Teaching Assistant — CS310",
    period: "Jan 2026 – Present",
    location: "Evanston, IL",
    bullets: [
      "Mentoring 200+ students in Scalable Software Architectures on cloud-native design patterns",
      "Technical guidance on AWS, Docker, and Node.js with emphasis on microservice trade-offs",
      "Weekly office hours, class forum management, and assignment grading",
    ],
    tags: ["AWS", "Docker", "Node.js", "Microservices"],
  },
  {
    company: "Mentr Inc.",
    LogoComponent: MentrLogo,
    logoBg: "rgba(16,185,129,0.1)",
    logoBorder: "rgba(16,185,129,0.2)",
    role: "Software Development Intern",
    period: "Jul 2023 – Feb 2024",
    location: "Remote",
    bullets: [
      "Built critical website pages (landing, login/signup, pricing) using Webflow, HTML/CSS, and JavaScript",
      "Enhanced UX and functionality of a career mentorship marketplace connecting students with new graduates",
      "Collaborated in a fast-moving startup environment to ship features and resolve issues quickly",
    ],
    tags: ["React", "JavaScript", "Webflow", "HTML/CSS"],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 bg-[#0a0e16]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.p variants={fadeUp} className="text-[#4f9cf9] text-sm font-mono tracking-widest mb-3">
            02. EXPERIENCE
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl font-black text-white mb-16 tracking-tight">
            Where I&apos;ve worked.
          </motion.h2>

          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#4f9cf9]/30 via-[#4f9cf9]/10 to-transparent hidden md:block" />

            <div className="space-y-12">
              {jobs.map((job) => (
                <motion.div
                  key={job.company}
                  variants={fadeUp}
                  className="md:pl-20 relative"
                >
                  <div
                    className="absolute left-4 top-5 w-4 h-4 rounded-full border-2 border-[#4f9cf9] bg-[#080c10] hidden md:block"
                    style={{ boxShadow: "0 0 10px rgba(79,156,249,0.4)" }}
                  />

                  <div className="bg-[#0f1520] border border-white/[0.06] rounded-2xl p-6 hover:border-[#4f9cf9]/20 transition-colors duration-300">
                    <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
                      <div className="flex items-center gap-4">
                        <div
                          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                          style={{ backgroundColor: job.logoBg, border: `1px solid ${job.logoBorder}` }}
                        >
                          <job.LogoComponent />
                        </div>
                        <div>
                          <h3 className="text-white font-bold text-lg leading-tight">{job.role}</h3>
                          <p className="text-[#4f9cf9] text-sm font-medium">{job.company}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-[#64748b] text-sm">{job.period}</p>
                        <p className="text-[#475569] text-xs mt-0.5">{job.location}</p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {job.bullets.map((b, j) => (
                        <li key={j} className="flex gap-3 text-[#94a3b8] text-sm leading-6">
                          <span className="text-[#4f9cf9] flex-shrink-0 leading-6">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/[0.04] text-[#64748b] border border-white/[0.06]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
