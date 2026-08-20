"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiArrowRight,
  FiFileText,
  FiTrendingUp,
  FiBriefcase,
  FiUsers,
  FiBook,
  FiCpu,
  FiShield,
  FiTag,
} from "react-icons/fi";

import bgbanner from "@/assets/images/home/hero/bgbanner.png";
import img1 from "@/assets/images/home/services/about-2-1.png";
import img2 from "@/assets/images/home/services/about-2-2.png";
import img3 from "@/assets/images/home/services/about-2-3.png";
import img4 from "@/assets/images/home/services/about-2-4.png";
import img5 from "@/assets/images/home/services/about-2-5.png";

const serviceList = [
  {
    no: "001.",
    title: "Tax Compliance",
    icon: <FiFileText size={24} />,
    desc: "Accurate and timely federal and state tax return filing for individuals, businesses, trusts, and estates — with zero penalties.",
    slug: "tax-compliance",
    image: img1,
  },
  {
    no: "002.",
    title: "Tax Planning & Advisory",
    icon: <FiTrendingUp size={24} />,
    desc: "Year-round proactive tax strategy to minimize your liability, maximize deductions, and plan for retirement and business growth.",
    slug: "tax-planning",
    image: img2,
  },
  {
    no: "003.",
    title: "Business Entity Formation",
    icon: <FiBriefcase size={24} />,
    desc: "Expert guidance on LLC, S-Corp, and C-Corp formation, Texas state filings, EIN registration, and S-Corp election.",
    slug: "business-formation",
    image: img3,
  },
  {
    no: "004.",
    title: "Payroll Setup (Gusto)",
    icon: <FiUsers size={24} />,
    desc: "Complete Gusto payroll onboarding, pay run processing, payroll tax deposits, W-2 & 1099-NEC filings, and salary compliance.",
    slug: "payroll-services",
    image: img4,
  },
  {
    no: "005.",
    title: "Bookkeeping & Accounting",
    icon: <FiBook size={24} />,
    desc: "Monthly bookkeeping, bank reconciliations, financial statements (P&L, Balance Sheet, Cash Flow), and clean year-end books.",
    slug: "bookkeeping",
    image: img5,
  },
  {
    no: "006.",
    title: "Fractional CFO",
    icon: <FiCpu size={24} />,
    desc: "Cash flow forecasting, KPI dashboards, budgeting, and lender/investor preparation — at a fraction of a full-time CFO cost.",
    slug: "fractional-cfo",
    image: img1,
  },
  {
    no: "007.",
    title: "IRS Representation",
    icon: <FiShield size={24} />,
    desc: "IRS notice response, audit representation, penalty abatement, unfiled return filing, and tax debt resolution.",
    slug: "irs-representation",
    image: img2,
  },
  {
    no: "008.",
    title: "Sales Tax & 1099",
    icon: <FiTag size={24} />,
    desc: "Texas and multi-state sales tax returns, plus year-end 1099-NEC and 1099-MISC preparation, IRS e-filing, and delivery.",
    slug: "sales-tax-1099",
    image: img3,
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section
      id="services"
      className="py-12 sm:py-16 mx-3 sm:mx-6 lg:mx-10 relative overflow-hidden rounded-2xl sm:rounded-3xl"
      style={{
        backgroundImage: `url(${bgbanner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-8xl mx-auto px-4 sm:px-6">

        {/* ── Section Header ── */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/8 text-primary border border-primary/15 px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight font-figtree tracking-tight max-w-xl">
              Comprehensive CPA Services for Every Financial Need.
            </h2>
          </div>

          <Link
            href="/services/tax-compliance"
            className="group inline-flex items-center gap-3 bg-secondary text-dark text-sm sm:text-base font-semibold font-figtree pl-6 sm:pl-8 pr-2.5 sm:pr-3 py-2.5 sm:py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 shrink-0"
          >
            <span>View All Services</span>
            <span className="bg-dark text-white p-2.5 sm:p-3 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 text-xs sm:text-sm">
              <FiArrowRight />
            </span>
          </Link>
        </div>

        {/* ── Mobile/Tablet Grid (<lg) ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:hidden">
          {serviceList.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 flex flex-col justify-between gap-4"
            >
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-xl bg-primary text-secondary flex items-center justify-center flex-shrink-0">
                  {card.icon}
                </div>
                <span className="text-xs font-bold font-mono text-slate-300">
                  {card.no}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-figtree mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed line-clamp-3">
                  {card.desc}
                </p>
              </div>
              <Link
                href={`/services/${card.slug}`}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-secondary-dark font-figtree pt-2 border-t border-slate-100"
              >
                Learn More ↗
              </Link>
            </div>
          ))}
        </div>

        {/* ── Desktop Accordion Cards (lg+) ── */}
        <div className="hidden lg:flex flex-row gap-3 items-stretch h-[320px]">
          {serviceList.map((card, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                className={`relative rounded-3xl overflow-hidden cursor-pointer bg-white ${isActive
                  ? "shadow-[0_20px_56px_rgba(0,0,0,0.22)]"
                  : "shadow-[0_2px_10px_rgba(0,0,0,0.08)]"
                  }`}
                style={{
                  flex: isActive ? "4" : "1",
                  minWidth: isActive ? "0" : "88px",
                  transition: "flex 0.65s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease",
                }}
              >
                {/* ── COLLAPSED LAYOUT ─── */}
                <div
                  className={`absolute inset-0 transition-opacity duration-[250ms] ${isActive
                      ? "opacity-0 pointer-events-none"
                      : "opacity-100 pointer-events-auto"
                    }`}
                >
                  {/* Number — absolute top-right */}
                  <span className="absolute top-4 right-3.5 text-[10px] font-bold font-mono text-slate-300 tracking-[0.03em]">
                    {card.no}
                  </span>

                  {/* Icon — fixed position from bottom */}
                  <div className="absolute bottom-[98px] left-4 w-[52px] h-[52px] rounded-full bg-primary text-secondary flex items-center justify-center shrink-0">
                    {card.icon}
                  </div>

                  {/* Title — fixed position at bottom */}
                  <h3 className="absolute bottom-5 left-3.5 right-3.5 text-lg font-bold text-slate-900 leading-snug font-figtree">
                    {card.title}
                  </h3>
                </div>

                {/* ── ACTIVE / EXPANDED LAYOUT ─── */}
                <div
                  className={`absolute inset-0 flex flex-row transition-opacity duration-[150ms] px-4 ${isActive
                      ? "opacity-100 pointer-events-auto"
                      : "opacity-0 pointer-events-none"
                    }`}
                >
                  {/* Left: Image */}
                  <div className="relative w-[46%] shrink-0 overflow-hidden">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="280px"
                      className="object-contain"
                    />
                  </div>

                  {/* Right: Content */}
                  <div className="flex-1 relative flex flex-col justify-center gap-3 px-5 py-6 overflow-hidden">
                    {/* Number — absolute top-right */}
                    <span className="absolute top-4 right-4 text-[10px] font-bold font-mono text-slate-300 tracking-[0.03em]">
                      {card.no}
                    </span>

                    {/* Icon badge — solid colored circle */}
                    <div className="w-[60px] h-[60px] rounded-full bg-secondary text-white flex items-center justify-center shrink-0">
                      {card.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-extrabold text-slate-900 leading-snug font-figtree">
                      {card.title}
                    </h3>

                    {/* Description — line-clamped */}
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">
                      {card.desc}
                    </p>

                    {/* Learn More ↗ */}
                    <Link
                      href={`/services/${card.slug}`}
                      className="inline-flex items-center gap-1 text-base font-bold text-slate-900 font-figtree hover:text-primary transition-colors duration-200"
                    >
                      Learn More ↗
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}