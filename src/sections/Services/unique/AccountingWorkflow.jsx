"use client";

import { useState } from "react";
import { FiCheckCircle, FiActivity, FiLayers } from "react-icons/fi";

export default function AccountingWorkflow({ workflow = [], metrics = [] }) {
  const [activeStepIdx, setActiveStepIdx] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-2 text-xs font-bold uppercase tracking-widest border border-primary/20 mb-4">
            Accounting Routine
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight font-figtree tracking-tight">
            Monthly Accounting Workflow & Dashboard Samples
          </h2>
          <p className="text-body-text text-sm mt-3">
            Understand exactly how we run bank reconciliations and track critical financial indices.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          {/* Left: Interactive Workflow steps */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-xl font-bold font-figtree text-dark mb-2 flex items-center gap-2">
              <FiCheckCircle className="text-primary" /> Month-End Close Playbook
            </h3>

            <div className="flex flex-col gap-3">
              {workflow.map((item, idx) => {
                const isActive = activeStepIdx === idx;
                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveStepIdx(idx)}
                    className={`p-6 rounded-2xl border cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-dark text-white border-dark shadow-lg"
                        : "bg-slate-50 text-dark border-slate-100 hover:bg-slate-100/50"
                    }`}
                  >
                    <h4 className="text-base font-bold font-figtree mb-2">
                      {item.step}
                    </h4>
                    <p className={`text-sm leading-relaxed ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Dashboard sample list */}
          <div className="lg:col-span-5 bg-[#edf1fa]/40 border border-slate-100 rounded-3xl p-8 shadow-inner flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold font-figtree text-dark mb-6 flex items-center gap-2">
                <FiActivity className="text-secondary" /> Dynamic Dashboard KPIs
              </h3>

              <div className="flex flex-col gap-4">
                {metrics.map((metric, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-150 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <span className="text-sm font-bold text-dark font-figtree">
                      {metric}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 bg-white p-4 rounded-xl border border-slate-100 flex items-start gap-3">
              <span className="text-secondary mt-0.5">
                <FiLayers size={20} />
              </span>
              <p className="text-xs text-body-text leading-relaxed">
                <span className="font-bold text-dark">Live Reports:</span> These metrics link directly to your bank ledger APIs to display real-time updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
