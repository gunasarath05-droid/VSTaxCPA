"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { servicesData } from "@/constants/servicesData";

export default function RelatedServices({ relatedSlugs }) {
  if (!relatedSlugs || relatedSlugs.length === 0) return null;

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 text-primary px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-primary/15 mb-3 sm:mb-4 font-figtree">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Related Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight font-figtree tracking-tight">
            Explore Complementary CPA Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-body-text font-manrope">
            Comprehensive financial coverage for your business and personal tax needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {relatedSlugs.map((slug, idx) => {
            const service = servicesData[slug];
            if (!service) return null;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-[#FAF9F5] border border-slate-200/80 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:bg-white hover:border-primary/20 duration-300 transition-all group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary bg-secondary/15 px-2.5 py-1 rounded-full border border-secondary/20 font-figtree mb-3 inline-block">
                    {service.overviewTitle || "Specialized Service"}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-figtree text-dark mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-body-text text-xs sm:text-sm leading-relaxed mb-6 line-clamp-2 font-manrope">
                    {service.overview}
                  </p>
                </div>

                <Link
                  href={`/services/${slug}`}
                  className="group/btn inline-flex items-center gap-2.5 bg-primary hover:bg-secondary text-white hover:text-dark text-xs sm:text-sm font-bold font-figtree pl-5 pr-2.5 py-2.5 rounded-full transition-all duration-300 shadow-md self-start"
                >
                  <span>View Details</span>
                  <span className="bg-white/20 group-hover/btn:bg-dark/20 text-white group-hover/btn:text-dark p-1.5 rounded-full flex items-center justify-center group-hover/btn:translate-x-1 duration-300 transition-all text-xs">
                    <FiArrowRight />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
