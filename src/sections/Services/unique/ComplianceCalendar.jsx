"use client";

import { useState } from "react";
import { FiCalendar, FiCheckSquare, FiSquare } from "react-icons/fi";

export default function ComplianceCalendar({ checklist = [], calendar = [] }) {
  const [checkedItems, setCheckedItems] = useState({});

  const toggleCheck = (idx) => {
    setCheckedItems((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 text-primary px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-primary/15 mb-3 sm:mb-4 font-figtree">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Interactive Tools
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight font-figtree tracking-tight">
            Corporate Compliance Calendar &amp; Readiness Checklist
          </h2>
          <p className="text-body-text text-sm sm:text-base mt-3 font-manrope">
            Track statutory filing targets and verify audit readiness in real time.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Left: Checklist */}
          <div className="lg:col-span-6 bg-[#FAF9F5] border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-lg sm:text-xl font-bold font-figtree text-dark mb-5 flex items-center gap-2.5">
              <FiCheckSquare className="text-primary" /> Audit Readiness Checklist
            </h3>
            <div className="flex flex-col gap-3">
              {checklist.map((item, idx) => {
                const isChecked = checkedItems[idx];
                return (
                  <div
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white border border-slate-100 hover:border-primary/30 cursor-pointer transition-all duration-200 select-none shadow-sm"
                  >
                    <span className="text-primary mt-0.5 flex-shrink-0">
                      {isChecked ? <FiCheckSquare size={18} /> : <FiSquare size={18} className="text-slate-400" />}
                    </span>
                    <span
                      className={`text-xs sm:text-sm font-medium leading-relaxed transition-all duration-200 font-manrope ${
                        isChecked ? "line-through text-slate-400 font-normal" : "text-dark"
                      }`}
                    >
                      {item}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Calendar Timeline */}
          <div className="lg:col-span-6 flex flex-col gap-5 justify-center">
            <h3 className="text-lg sm:text-xl font-bold font-figtree text-dark mb-2 flex items-center gap-2.5">
              <FiCalendar className="text-secondary" /> Annual Compliance Deadlines
            </h3>

            <div className="relative border-l-2 border-slate-200 pl-6 sm:pl-8 ml-3 flex flex-col gap-6 sm:gap-7">
              {calendar.map((item, idx) => (
                <div key={idx} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-[-31px] sm:left-[-39px] top-1 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white border-4 border-secondary flex items-center justify-center z-10 shadow-sm" />

                  <div>
                    <span className="inline-block text-[11px] font-extrabold text-primary bg-secondary/15 px-2.5 py-0.5 rounded-full mb-1.5 font-figtree">
                      {item.date}
                    </span>
                    <h4 className="text-sm sm:text-base font-bold font-figtree text-dark leading-snug">
                      {item.task}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
