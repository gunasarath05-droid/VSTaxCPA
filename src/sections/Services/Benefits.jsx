"use client";

import { motion } from "framer-motion";
import { FiTrendingUp, FiShield, FiDollarSign, FiClock } from "react-icons/fi";

export default function Benefits({ benefits }) {
  if (!benefits || benefits.length === 0) return null;

  const icons = [
    <FiTrendingUp key={0} size={22} />,
    <FiShield key={1} size={22} />,
    <FiDollarSign key={2} size={22} />,
    <FiClock key={3} size={22} />,
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F5] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-[0.05] pointer-events-none bg-[radial-gradient(circle,#9CB05A,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 text-primary px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-primary/15 mb-3 sm:mb-4 font-figtree">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Key Advantages
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight font-figtree tracking-tight">
            Why Our Clients Choose This Service
          </h2>
          <p className="mt-3 text-sm sm:text-base text-body-text font-manrope">
            Tangible results, peace of mind, and financial advantages delivered by a licensed CPA.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-white border border-slate-100/90 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1.5 duration-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-secondary/15 text-[#6c802f] flex items-center justify-center mb-5 group-hover:bg-secondary group-hover:text-dark transition-all duration-300 shadow-sm">
                  {icons[idx % icons.length]}
                </div>
                <h3 className="text-base sm:text-lg font-bold font-figtree text-dark mb-2.5 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-body-text text-xs sm:text-sm leading-relaxed font-manrope">
                  {benefit.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
