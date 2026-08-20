"use client";

import { motion } from "framer-motion";
import { FiTrendingDown, FiServer, FiShoppingBag, FiTool } from "react-icons/fi";

export default function CostOptimization({ pillars = [], benchmarks = [] }) {
  const getIcon = (title) => {
    switch (title.toLowerCase()) {
      case "infrastructure":
        return <FiServer size={20} />;
      case "vendors":
        return <FiShoppingBag size={20} />;
      default:
        return <FiTool size={20} />;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 text-primary px-4 py-2 text-xs font-bold uppercase tracking-widest border border-primary/20 mb-4">
            Cost Optimization
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight font-figtree tracking-tight">
            Cost Optimization Framework & Industry Benchmarking
          </h2>
          <p className="text-body-text text-sm mt-3">
            Compare your spending percentages against industry averages to target potential savings.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          {/* Left: Optimization Framework Pillars */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h3 className="text-xl font-bold font-figtree text-dark mb-2 flex items-center gap-2">
              <FiTrendingDown className="text-primary" /> Strategy Optimization Pillars
            </h3>

            <div className="flex flex-col gap-4">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 p-6 rounded-2xl flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    {getIcon(pillar.title)}
                  </div>
                  <div>
                    <h4 className="text-base font-bold font-figtree text-dark mb-1">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-body-text leading-relaxed">
                      {pillar.optimization}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Benchmarking Table */}
          <div className="lg:col-span-7 bg-[#edf1fa]/40 border border-slate-100 rounded-3xl p-8 shadow-inner flex flex-col justify-between overflow-x-auto">
            <div>
              <h3 className="text-xl font-bold font-figtree text-dark mb-6 flex items-center gap-2">
                Industry Cost Benchmarks
              </h3>

              <table className="w-full text-left text-xs font-medium text-slate-500 min-w-[400px]">
                <thead className="text-[10px] text-slate-400 uppercase tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="pb-3">Category</th>
                    <th className="pb-3 text-center">Your Cost %</th>
                    <th className="pb-3 text-center">Benchmark %</th>
                    <th className="pb-3 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  {benchmarks.map((row, idx) => (
                    <tr key={idx}>
                      <td className="py-4 font-bold text-dark font-figtree">{row.category}</td>
                      <td className="py-4 text-center font-semibold text-primary">{row.companyPct}</td>
                      <td className="py-4 text-center font-semibold text-slate-600">{row.benchmarkPct}</td>
                      <td className="py-4 text-right">
                        <span
                          className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                            row.status.toLowerCase().includes("optimal") || row.status.toLowerCase().includes("healthy")
                              ? "bg-green-500/10 text-green-600"
                              : "bg-amber-500/10 text-amber-600"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
