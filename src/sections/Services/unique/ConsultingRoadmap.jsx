"use client";

import { useState } from "react";
import { FiTrendingUp, FiLayers, FiCompass } from "react-icons/fi";

export default function ConsultingRoadmap({ roadmap = [], maturityLevels = [] }) {
  const [activeLevelIdx, setActiveLevelIdx] = useState(1); // Standardized focus by default

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-2 text-xs font-bold uppercase tracking-widest border border-primary/20 mb-4">
            Financial Strategy
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight font-figtree tracking-tight">
            Strategic Growth Roadmap & Maturity Model
          </h2>
          <p className="text-body-text text-sm mt-3">
            Assess where your operations stand and review the roadmap to scale to institutional standards.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          {/* Left: Growth Roadmap */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-100 rounded-3xl p-8 shadow-inner flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold font-figtree text-dark mb-8 flex items-center gap-2">
                <FiCompass className="text-secondary" /> Business Growth Roadmap
              </h3>

              <div className="flex flex-col gap-6 relative pl-6 border-l border-slate-200 ml-3">
                {roadmap.map((item, idx) => (
                  <div key={idx} className="relative">
                    {/* Node Dot */}
                    <div className="absolute left-[-35px] top-1.5 w-4 h-4 rounded-full bg-secondary border-2 border-white shadow" />
                    
                    <span className="text-xs font-bold text-slate-400 block mb-1">
                      {item.phase} ({item.duration})
                    </span>
                    <p className="text-sm font-semibold text-dark font-figtree mb-1">
                      {item.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Maturity Assessment */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-xl font-bold font-figtree text-dark mb-2 flex items-center gap-2">
              <FiLayers className="text-primary" /> Business Maturity Assessment
            </h3>

            <div className="flex flex-col gap-4">
              {maturityLevels.map((level, idx) => {
                const isActive = activeLevelIdx === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActiveLevelIdx(idx)}
                    className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-dark text-white border-dark shadow-lg"
                        : "bg-slate-50 text-dark border-slate-100 hover:bg-slate-100/50"
                    }`}
                  >
                    <h4 className="text-base font-bold font-figtree mb-2 flex items-center gap-2">
                      <FiTrendingUp className={isActive ? "text-primary" : "text-slate-400"} /> {level.level}
                    </h4>
                    <p className={`text-sm leading-relaxed ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                      {level.focus}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
