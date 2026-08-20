"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiHelpCircle } from "react-icons/fi";

export default function FAQSection({ faqs, serviceTitle }) {
  const [expandedIdx, setExpandedIdx] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  };

  const toggleFAQ = (idx) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F5] relative overflow-hidden">
      {/* FAQ Schema injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 text-primary px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-primary/15 mb-3 sm:mb-4 font-figtree">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight font-figtree tracking-tight">
            Common Questions on {serviceTitle}
          </h2>
          <p className="text-body-text text-sm sm:text-base mt-3 font-manrope">
            Direct answers regarding filing deadlines, regulatory compliance, and CPA advisory scope.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-3.5 sm:gap-4">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedIdx === idx;

            return (
              <div
                key={idx}
                className={`bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
                  isExpanded ? "border-secondary/60 shadow-md ring-1 ring-secondary/20" : "border-slate-200/80 hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors group"
                >
                  <span className="text-sm sm:text-base font-bold text-dark font-figtree pr-4 group-hover:text-primary transition-colors flex items-center gap-3">
                    <FiHelpCircle className="text-secondary flex-shrink-0 hidden sm:block" size={18} />
                    {faq.q}
                  </span>
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isExpanded ? "bg-primary text-white" : "bg-slate-100 text-dark group-hover:bg-slate-200"
                    }`}
                  >
                    {isExpanded ? <FiMinus size={14} /> : <FiPlus size={14} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="p-5 sm:p-6 pt-0 text-xs sm:text-sm text-body-text leading-relaxed font-manrope border-t border-slate-100 bg-slate-50/40">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
