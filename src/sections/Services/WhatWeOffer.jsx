"use client";

import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

export default function WhatWeOffer({ offers }) {
  if (!offers || offers.length === 0) return null;

  return (
    <section id="what-we-offer" className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 rounded-full opacity-[0.04] pointer-events-none bg-[radial-gradient(circle,#1e3a24,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 text-primary px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-primary/15 mb-3 sm:mb-4 font-figtree">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight font-figtree tracking-tight">
            Specialized Services &amp; Capabilities Included
          </h2>
          <p className="mt-3 text-sm sm:text-base text-body-text font-manrope">
            Tailored deliverables designed to maintain rigorous compliance and unlock strategic savings.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {offers.map((offer, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-slate-50/70 hover:bg-white border border-slate-100 hover:border-primary/25 rounded-3xl p-6 sm:p-8 flex items-start gap-4 sm:gap-6 shadow-sm hover:shadow-xl hover:-translate-y-1 duration-300 transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white duration-300 transition-colors shadow-sm">
                <FiCheckCircle size={22} />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <h3 className="text-lg sm:text-xl font-bold font-figtree text-dark group-hover:text-primary transition-colors">
                    {offer.title}
                  </h3>
                  <span className="text-xs font-extrabold text-slate-300 font-figtree">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-body-text text-xs sm:text-sm leading-relaxed font-manrope">
                  {offer.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
