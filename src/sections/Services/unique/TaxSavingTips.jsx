"use client";

import { useState } from "react";
import { FiAlertCircle, FiInfo, FiPercent } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";

export default function TaxSavingTips({ tips = [], deadlines = [] }) {
  const [activeTipIdx, setActiveTipIdx] = useState(0);

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F5] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 text-primary px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-primary/15 mb-3 sm:mb-4 font-figtree">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Tax Strategy Playbook
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight font-figtree tracking-tight">
            Tax Saving Strategies &amp; Important Deadlines
          </h2>
          <p className="text-body-text text-sm sm:text-base mt-3 font-manrope">
            Legitimate optimization techniques to minimize tax exposure and keep filings on schedule.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto items-start">
          {/* Left: Interactive Saving Tips */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <h3 className="text-lg sm:text-xl font-bold font-figtree text-dark mb-1 flex items-center gap-2">
              <FiPercent className="text-primary" /> Key Tax Saving Tips
            </h3>

            <div className="flex flex-col gap-3">
              {tips.map((tip, idx) => {
                const isActive = activeTipIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveTipIdx(idx)}
                    className={`p-5 sm:p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-dark text-white border-dark shadow-xl -translate-y-0.5"
                        : "bg-white text-dark border-slate-200/80 hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`text-[11px] font-extrabold px-3 py-1 rounded-full font-figtree uppercase tracking-wider ${
                          isActive ? "bg-secondary text-dark" : "bg-primary/10 text-primary"
                        }`}
                      >
                        {tip.category}
                      </span>
                    </div>
                    <p className={`text-xs sm:text-sm font-medium leading-relaxed font-manrope ${isActive ? "text-slate-200" : "text-slate-700"}`}>
                      {tip.tip}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Tax Deadlines Card */}
          <div className="lg:col-span-5 bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold font-figtree text-dark mb-6 flex items-center gap-2">
              <FaRegCalendarAlt className="text-secondary" /> Filing Schedule
            </h3>

            <div className="flex flex-col gap-4">
              {deadlines.map((deadline, idx) => (
                <div key={idx} className="flex gap-3.5 items-start border-b border-slate-100 pb-4 last:border-b-0 last:pb-0">
                  <div className="w-9 h-9 rounded-xl bg-secondary/15 flex items-center justify-center text-dark flex-shrink-0 mt-0.5">
                    <FiInfo size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-slate-400 block mb-0.5 font-figtree">
                      {deadline.date}
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-dark font-figtree leading-snug">
                      {deadline.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 bg-[#FAF9F5] p-4 rounded-xl border border-slate-200/60 flex items-start gap-2.5">
              <span className="text-amber-600 mt-0.5 flex-shrink-0">
                <FiAlertCircle size={16} />
              </span>
              <p className="text-[11px] text-body-text leading-relaxed font-manrope">
                <strong className="text-dark">Note:</strong> Deadlines vary based on entity structure. Consult our CPA team for a custom schedule.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
