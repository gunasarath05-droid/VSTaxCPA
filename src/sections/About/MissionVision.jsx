"use client";

import { motion } from "framer-motion";
import { FiTarget, FiEye, FiShield, FiCheckCircle, FiAward, FiLock, FiZap } from "react-icons/fi";

export default function MissionVision() {
  const pillars = [
    {
      number: "01",
      tag: "Purpose & Impact",
      title: "Our Mission",
      icon: <FiTarget size={24} />,
      accentBg: "bg-primary/10",
      accentText: "text-primary",
      borderColor: "hover:border-primary/40",
      glowColor: "group-hover:bg-primary/5",
      headline: "Simplifying Taxes. Maximizing Wealth.",
      desc: "To demystify complex tax codes and empower business owners and individuals to make confident financial decisions that foster long-term prosperity and security.",
      bullets: [
        "Proactive year-round tax mitigation strategies",
        "Transparent, jargon-free financial guidance",
        "Customized accounting built for your goals",
      ],
    },
    {
      number: "02",
      tag: "Future & Growth",
      title: "Our Vision",
      icon: <FiEye size={24} />,
      accentBg: "bg-secondary/20",
      accentText: "text-[#7a8f3b]",
      borderColor: "hover:border-secondary/60",
      glowColor: "group-hover:bg-secondary/10",
      headline: "The DFW Standard for CPA Excellence.",
      desc: "To be recognized as Texas's most trusted CPA and advisory firm — celebrated for unwavering accuracy, modern cloud efficiency, and boutique, high-touch client care.",
      bullets: [
        "Top-tier dual-certified (CPA & CA) expertise",
        "Seamless cloud-driven accounting integration",
        "Long-term strategic partnership for scaling",
      ],
    },
    {
      number: "03",
      tag: "Ethics & Standard",
      title: "Core Values",
      icon: <FiShield size={24} />,
      accentBg: "bg-amber-500/10",
      accentText: "text-amber-600",
      borderColor: "hover:border-amber-500/40",
      glowColor: "group-hover:bg-amber-500/5",
      headline: "Integrity Without Compromise.",
      desc: "Every tax return, financial statement, and advisory session is grounded in absolute precision, ethical compliance, and genuine care for our clients' success.",
      bullets: [
        "100% audit-ready precision and compliance",
        "Client-first advocacy and dedicated attention",
        "Relentless pursuit of maximum legitimate savings",
      ],
    },
  ];

  const highlights = [
    { icon: <FiAward className="text-secondary" size={18} />, label: "Dual CPA & CA Certified" },
    { icon: <FiLock className="text-secondary" size={18} />, label: "100% Confidential & Secure" },
    { icon: <FiZap className="text-secondary" size={18} />, label: "Year-Round Proactive Advisory" },
    { icon: <FiCheckCircle className="text-secondary" size={18} />, label: "Zero-Penalty Filing Track Record" },
  ];

  return (
    <section id="mission" className="py-20 sm:py-28 bg-[#FAF9F5] relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-40 pointer-events-none bg-[radial-gradient(circle,#9CB05A33,transparent_70%)] filter blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-30 pointer-events-none bg-[radial-gradient(circle,#1e3a2420,transparent_70%)] filter blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 text-primary px-4 py-1.5 text-xs font-bold uppercase tracking-widest border border-primary/15 mb-4 font-figtree">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Purpose &amp; Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight font-figtree tracking-tight">
              Guiding Principles That Drive Your Financial Success
            </h2>
            <p className="mt-4 text-base sm:text-lg text-body-text font-manrope leading-relaxed max-w-2xl mx-auto">
              Our firm was built on the premise that tax planning shouldn&apos;t just happen once a year — it should be a year-round engine for protection and wealth accumulation.
            </p>
          </motion.div>
        </div>

        {/* ── 3-Column Pillar Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`group relative bg-white rounded-3xl p-7 sm:p-8 lg:p-9 border border-slate-200/80 ${pillar.borderColor} shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between overflow-hidden cursor-default`}
            >
              {/* Card top decorative ambient glow on hover */}
              <div className={`absolute top-0 right-0 w-44 h-44 rounded-full transition-colors duration-500 pointer-events-none filter blur-2xl -z-0 ${pillar.glowColor}`} />

              <div className="relative z-10">
                {/* Header Row: Icon + Number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-13 h-13 sm:w-14 sm:h-14 rounded-2xl ${pillar.accentBg} ${pillar.accentText} flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                    {pillar.icon}
                  </div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-slate-200 font-figtree group-hover:text-dark/20 transition-colors duration-300">
                    {pillar.number}
                  </span>
                </div>

                {/* Subtag + Title */}
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 font-figtree block mb-1">
                  {pillar.tag}
                </span>
                <h3 className="text-2xl font-extrabold font-figtree text-dark mb-2 tracking-tight group-hover:text-primary transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm font-bold text-slate-800 font-figtree mb-3">
                  {pillar.headline}
                </p>

                {/* Description */}
                <p className="text-sm text-body-text font-manrope leading-relaxed mb-6">
                  {pillar.desc}
                </p>

                {/* Key Points */}
                <div className="pt-5 border-t border-slate-100 space-y-2.5">
                  {pillar.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium font-manrope">
                      <FiCheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={16} />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom Trust Strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-slate-200/70 shadow-sm"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-3 justify-center sm:justify-start px-2">
                <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <span className="text-xs sm:text-sm font-bold text-dark font-figtree">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
