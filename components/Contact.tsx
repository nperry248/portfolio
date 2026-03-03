"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

const links = [
  {
    label: "Email",
    value: ["nperry248@gmail.com"],
    href: "mailto:nperry248@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/nperry248",
    href: "https://github.com/nperry248",
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/nicholasperry24",
    href: "https://linkedin.com/in/nicholasperry24",
    icon: Linkedin,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="text-center"
        >
          <motion.p variants={fadeUp} className="text-[#4f9cf9] text-sm font-mono tracking-widest mb-3">
            05. CONTACT
          </motion.p>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Here&apos;s My Info.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#64748b] text-lg max-w-xl mx-auto mb-12 leading-relaxed">
            I&apos;m currently open to new opportunities — full-time roles, internships, or interesting projects.
            My inbox is always open.
          </motion.p>

          <motion.div variants={fadeUp} className="grid sm:grid-cols-3 gap-4 mb-12">
            {links.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group bg-[#0f1520] border border-white/[0.06] rounded-2xl p-5 hover:border-[#4f9cf9]/30 hover:-translate-y-1 transition-all duration-300 text-left"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[#4f9cf9]/10 border border-[#4f9cf9]/20 flex items-center justify-center">
                    <Icon size={16} className="text-[#4f9cf9]" />
                  </div>
                  <ArrowUpRight size={14} className="text-[#475569] group-hover:text-[#4f9cf9] transition-colors" />
                </div>
                <p className="text-[#64748b] text-xs mb-1 font-mono tracking-wide uppercase">{label}</p>
                <p className="text-white text-sm font-medium truncate">{value}</p>
              </a>
            ))}
          </motion.div>

          <motion.div variants={fadeUp}>
            <a
              href="mailto:nperry248@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#4f9cf9] text-white font-semibold rounded-xl hover:bg-[#3b82f6] transition-colors shadow-lg shadow-[#4f9cf9]/20 text-sm"
            >
              <Mail size={16} />
              Say Hello
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
