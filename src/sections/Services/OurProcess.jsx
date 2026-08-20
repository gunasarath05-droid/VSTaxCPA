"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiShield } from "react-icons/fi";

export default function OurProcess({ steps }) {
  const [activeStep, setActiveStep] = useState(0);

  if (!steps || steps.length === 0) return null;

  // Calculate the progress line width percentage (0% to 100%)
  const progressPercent = steps.length > 1 ? (activeStep / (steps.length - 1)) * 100 : 0;

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full opacity-[0.03] pointer-events-none bg-[radial-gradient(circle,#1e3a24,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 text-primary px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-primary/15 mb-3 sm:mb-4 font-figtree">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Our Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight font-figtree tracking-tight">
            How We Execute This Service Step-by-Step
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-body-text font-manrope">
            A structured, transparent roadmap from initial onboarding to completed filing.
          </p>
        </div>

        {/* ── Desktop Horizontal Connected Workflow with Filling Line ── */}
        <div className="relative max-w-6xl mx-auto">

          {/* Background Track Line (Desktop) */}
          <div className="hidden lg:block absolute top-7 left-[12%] right-[12%] h-[3px] bg-slate-100 rounded-full z-0" />

          {/* Dynamic Filling Line on Hover / Progress (Desktop) */}
          <div
            className="hidden lg:block absolute top-7 left-[12%] h-[3px] bg-gradient-to-r from-primary via-secondary to-primary rounded-full transition-all duration-500 ease-out z-0"
            style={{
              width: `calc(${progressPercent * 0.76}%)`,
            }}
          />

          {/* 4 Connected Step Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPassed = activeStep >= idx;

              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  {/* Step Number Circle Sitting on Line */}
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center font-extrabold text-base font-figtree transition-all duration-400 mb-6 shadow-sm ${
                      isActive
                        ? "bg-primary text-secondary ring-4 ring-primary/20 scale-110 shadow-lg"
                        : isPassed
                        ? "bg-primary text-white shadow-md"
                        : "bg-white border-2 border-slate-200 text-slate-400 group-hover:border-primary group-hover:text-primary"
                    }`}
                  >
                    {step.num || String(idx + 1).padStart(2, "0")}
                  </div>

                  {/* Step Card Below */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`w-full h-full p-6 sm:p-7 rounded-3xl border transition-all duration-400 flex flex-col justify-between text-center ${
                      isActive
                        ? "bg-[#FAF9F5] border-primary/40 shadow-xl -translate-y-1.5 ring-1 ring-primary/10"
                        : "bg-white border-slate-200/80 hover:bg-[#FAF9F5]/70 hover:border-slate-300 hover:shadow-md"
                    }`}
                  >
                    <div>
                      {/* Step Subtag */}
                      <span
                        className={`text-[10px] font-extrabold uppercase tracking-widest font-figtree block mb-2 transition-colors ${
                          isActive ? "text-primary" : "text-slate-400"
                        }`}
                      >
                        Step {idx + 1}
                      </span>

                      {/* Title */}
                      <h3
                        className={`text-base sm:text-lg font-bold font-figtree mb-2.5 leading-snug transition-colors ${
                          isActive ? "text-primary" : "text-dark group-hover:text-primary"
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* Description */}
                      <p className="text-body-text text-xs sm:text-sm leading-relaxed font-manrope">
                        {step.desc}
                      </p>
                    </div>

                    {/* Step Complete / Active status */}
                    <div className="pt-4 mt-4 border-t border-slate-100/80 flex items-center justify-center gap-1.5 text-xs">
                      {isPassed ? (
                        <span className="text-primary font-bold font-figtree flex items-center gap-1">
                          <FiCheckCircle size={13} className="text-secondary" /> Ready
                        </span>
                      ) : (
                        <span className="text-slate-400 font-manrope text-[11px]">Phase {idx + 1}</span>
                      )}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </section>
  );
}
