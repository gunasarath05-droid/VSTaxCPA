"use client";

import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";

export default function IndustriesWeServe({ industries }) {
  if (!industries || industries.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 text-primary px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-primary/15 mb-3 sm:mb-4 font-figtree">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Industry Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight font-figtree tracking-tight">
            Tailored Financial Expertise Across Sectors
          </h2>
          <p className="mt-3 text-sm sm:text-base text-body-text font-manrope">
            Customized tax structures built specifically for the unique operational dynamics of each industry.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3.5 sm:gap-4 max-w-5xl mx-auto">
          {industries.map((industry, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="bg-white border border-slate-200/80 shadow-sm rounded-2xl px-5 sm:px-6 py-3.5 sm:py-4 flex items-center gap-3 hover:shadow-lg hover:border-secondary hover:-translate-y-0.5 duration-300 transition-all cursor-default group"
            >
              <div className="w-8 h-8 rounded-lg bg-secondary/15 text-dark flex items-center justify-center flex-shrink-0 group-hover:bg-secondary transition-colors">
                <FiBriefcase size={15} />
              </div>
              <span className="text-dark font-bold font-figtree text-xs sm:text-sm group-hover:text-primary transition-colors">
                {industry}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
