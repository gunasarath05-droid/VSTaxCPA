"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Essential Compliance",
      monthlyPrice: 199,
      yearlyPrice: 1800,
      desc: "For freelancers, sole proprietors, and simple entities needing accurate tax returns and on-time filing.",
      features: [
        "Annual Federal & State Tax Filing",
        "Year-End 1099-NEC & 1099-MISC Filing",
        "Quarterly Estimated Tax Reminders",
        "Standard Deduction Optimization",
        "Secure Client Portal Access",
        "Direct CPA Email Support",
      ],
      recommended: false,
    },
    {
      name: "Growth & Advisory",
      monthlyPrice: 449,
      yearlyPrice: 4200,
      desc: "For growing businesses seeking proactive tax reduction, Gusto payroll management, and monthly clean books.",
      features: [
        "Everything in Essential Plan",
        "Year-Round Proactive Tax Strategy",
        "Gusto Payroll Setup & Pay Runs",
        "Monthly Bookkeeping & Reconciliations",
        "Quarterly Strategy & Tax Planning Call",
        "S-Corp Salary & Dividend Optimization",
      ],
      recommended: true,
      badge: "MOST POPULAR",
    },
    {
      name: "Fractional CFO Suite",
      monthlyPrice: 899,
      yearlyPrice: 8900,
      desc: "Comprehensive financial leadership, budgeting, cash flow projections, and full IRS representation.",
      features: [
        "Everything in Growth & Advisory",
        "Monthly Fractional CFO Strategy Sessions",
        "12-Month Cash Flow Forecasting",
        "KPI Dashboard & Profitability Analysis",
        "Lender & Investor Package Prep",
        "Priority IRS Representation & Defense",
      ],
      recommended: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center rounded-full bg-primary/8 text-primary px-4 py-2 text-xs font-bold uppercase tracking-widest border border-primary/15 mb-4">
            Transparent Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark leading-tight font-figtree tracking-tight mb-8">
            Tailored CPA & Tax Advisory Packages
          </h2>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 bg-slate-100 p-1.5 rounded-full relative z-10 border border-slate-200">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold font-figtree transition-all duration-300 cursor-pointer ${
                !isYearly ? "bg-primary text-white shadow-md" : "text-slate-500 hover:text-dark"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold font-figtree transition-all duration-300 cursor-pointer ${
                isYearly ? "bg-primary text-white shadow-md" : "text-slate-500 hover:text-dark"
              }`}
            >
              Annual (Save ~20%)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch mt-16">
          {plans.map((plan, idx) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;
            const period = isYearly ? "/ Year" : "/ Month";

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`relative rounded-3xl p-8 flex flex-col justify-between border transition-all duration-300 ${
                  plan.recommended
                    ? "text-white shadow-2xl scale-[1.03] z-10"
                    : "bg-white text-dark border-border-light hover:shadow-xl"
                }`}
                style={
                  plan.recommended
                    ? {
                        background: "linear-gradient(135deg, #122115 0%, #1e3a24 50%, #2d5234 100%)",
                        borderColor: "#9CB05A",
                      }
                    : {}
                }
              >
                {/* Recommended Badge */}
                {plan.recommended && plan.badge && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-dark text-[11px] font-extrabold px-4 py-1.5 rounded-full tracking-wider shadow-md">
                    {plan.badge}
                  </span>
                )}

                {/* Plan Content */}
                <div>
                  <h5
                    className={`text-lg font-bold font-figtree mb-4 ${
                      plan.recommended ? "text-secondary" : "text-primary"
                    }`}
                  >
                    {plan.name}
                  </h5>

                  {/* Price */}
                  <div className="flex items-baseline mb-6">
                    <span className="text-3xl font-extrabold font-figtree align-top">$</span>
                    <span className="text-5xl font-extrabold font-figtree tracking-tight mx-1">
                      {price}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        plan.recommended ? "text-white/60" : "text-slate-500"
                      }`}
                    >
                      {period}
                    </span>
                  </div>

                  <p
                    className={`text-sm leading-relaxed mb-8 ${
                      plan.recommended ? "text-white/75" : "text-slate-500"
                    }`}
                  >
                    {plan.desc}
                  </p>

                  <div className={`w-full h-[1px] mb-8 ${plan.recommended ? "bg-white/15" : "bg-border-light"}`} />

                  {/* Features List */}
                  <div className="mb-8">
                    <h6
                      className={`text-xs font-bold font-figtree mb-4 uppercase tracking-wider ${
                        plan.recommended ? "text-secondary" : "text-dark"
                      }`}
                    >
                      What&apos;s Included:
                    </h6>
                    <ul className="flex flex-col gap-3.5 text-sm">
                      {plan.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-3">
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] flex-shrink-0 ${
                              plan.recommended ? "bg-secondary text-dark" : "bg-primary/8 text-primary"
                            }`}
                          >
                            <FaCheck />
                          </span>
                          <span className={plan.recommended ? "text-white/90" : "text-body-text"}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action button */}
                <Link
                  href="/contact"
                  className={`w-full text-center py-4 rounded-full font-bold text-sm tracking-wide shadow-md transition-all duration-300 cursor-pointer ${
                    plan.recommended
                      ? "bg-secondary text-dark hover:bg-accent hover:scale-[1.02]"
                      : "bg-primary text-white hover:bg-secondary hover:text-dark hover:scale-[1.02]"
                  }`}
                >
                  Choose {plan.name}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
