"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus, FiHelpCircle, FiArrowRight, FiSearch } from "react-icons/fi";
import darkbg from "@/assets/images/darkbg.png";

const faqCategories = [
  {
    id: "all",
    name: "All Questions",
  },
  {
    id: "general",
    name: "General & CPA Advisory",
  },
  {
    id: "tax",
    name: "Tax Planning & Filing",
  },
  {
    id: "business",
    name: "Business Formation & Entities",
  },
  {
    id: "payroll",
    name: "Payroll & Bookkeeping",
  },
  {
    id: "irs",
    name: "IRS & Notice Resolution",
  },
];

const allFaqs = [
  {
    category: "general",
    q: "Why should I choose VS Tax CPA LLC over generic online tax software?",
    a: "Online software is backward-looking — it simply inputs what already happened. As a licensed Texas CPA and Indian Chartered Accountant, Vethavalli Ramakrishnan provides proactive, forward-looking strategy. We uncover deductions, optimize entity structures, prevent costly IRS penalties, and remain available all 12 months of the year.",
  },
  {
    category: "general",
    q: "Do you serve clients outside of Irving, Texas?",
    a: "Yes! While our office is based in Irving, TX (serving the entire Dallas-Fort Worth metroplex), we work seamlessly with individuals and businesses across all 50 states through our secure, encrypted client portal and virtual video consultations.",
  },
  {
    category: "general",
    q: "What does dual CPA & CA qualification mean for my business?",
    a: "Vethavalli is both a licensed Certified Public Accountant (CPA) in Texas and a Chartered Accountant (CA) from India. This dual certification gives our clients world-class analytical rigor, high-level corporate accounting depth, and specialized capability in handling US-India cross-border tax considerations (FBAR, FATCA, foreign income/assets).",
  },
  {
    category: "tax",
    q: "When should I start tax planning for the year?",
    a: "The best time for tax planning is right now. Effective tax minimization strategies — such as retirement plan contributions, equipment expensing (Section 179), entity restructuring, and reasonable compensation adjustments — must be implemented before December 31st of the tax year.",
  },
  {
    category: "tax",
    q: "What is an S-Corporation and how can it reduce self-employment tax?",
    a: "An S-Corp election allows small business owners and LLC members to split company profits between a 'reasonable W-2 salary' (subject to FICA payroll taxes) and 'shareholder distributions' (exempt from the 15.3% self-employment tax). For profitable businesses earning over $70,000 net, this can save thousands of dollars annually.",
  },
  {
    category: "tax",
    q: "Do you handle multi-state corporate and individual tax returns?",
    a: "Absolutely. We routinely file complex multi-state returns for businesses with remote workers, multi-state sales tax nexus, or individuals who relocated, worked across state lines, or hold rental properties in multiple states.",
  },
  {
    category: "business",
    q: "Which entity structure is best for my new business: LLC or S-Corp?",
    a: "There is no one-size-fits-all answer. We analyze your expected revenue, liability risks, ownership structure, and growth plans during a Strategy Consultation. Often, forming an LLC with a timely S-Corp election offers the ideal balance of legal protection and tax efficiency.",
  },
  {
    category: "business",
    q: "What is the Texas Franchise Tax, and do I have to file it?",
    a: "Every taxable entity formed or doing business in Texas (including LLCs and Corporations) must file an Annual Franchise Tax Report with the Texas Comptroller by May 15th each year, even if no tax is owed under the 'No Tax Due' threshold.",
  },
  {
    category: "payroll",
    q: "How does VS Tax CPA LLC handle payroll with Gusto?",
    a: "We are a Gusto Certified Partner. We handle your complete payroll setup, employee onboarding, automated tax withholdings, quarterly 941 filings, annual W-2/W-3 generation, and ensure compliance with Texas Workforce Commission rules.",
  },
  {
    category: "payroll",
    q: "What is the difference between a W-2 employee and a 1099 contractor?",
    a: "Classification depends on behavioral control, financial control, and relationship type. Misclassifying workers can lead to severe IRS back-tax penalties. We review your worker agreements and ensure correct 1099-NEC vs W-2 filing every January.",
  },
  {
    category: "payroll",
    q: "How often should my QuickBooks bookkeeping be reconciled?",
    a: "We recommend monthly reconciliations. Keeping your books clean and reconciled month-over-month prevents tax-season panics, gives you accurate financial statements for lenders or investors, and ensures no deductible business expenses are forgotten.",
  },
  {
    category: "irs",
    q: "I received a notice or audit letter from the IRS. What should I do?",
    a: "Do not panic, but do not ignore it. IRS notices have strict response deadlines (often 30 days). Contact us immediately with a copy of the notice. As a licensed CPA, Vethavalli can represent you directly before the IRS via Power of Attorney (Form 2848) so you never have to speak to the IRS alone.",
  },
  {
    category: "irs",
    q: "Can you help if I haven't filed tax returns for multiple years?",
    a: "Yes. We frequently help clients get back into full compliance. We pull official IRS transcripts, reconstruct your accounting records, prepare and file all missing years, and apply for First-Time Penalty Abatement whenever possible.",
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedIdx, setExpandedIdx] = useState<number | null>(0);

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesCategory = activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleFAQ = (idx: number) => {
    setExpandedIdx(expandedIdx === idx ? null : idx);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 text-white overflow-hidden">
        <Image src={darkbg} alt="FAQ | VS Tax CPA LLC" fill priority className="object-cover object-center pointer-events-none" />
        <div className="absolute inset-0 bg-[#0E1710]/30 pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <nav className="flex items-center justify-center gap-2 text-white/60 text-xs font-semibold mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-secondary">Frequently Asked Questions</span>
          </nav>
          <span className="inline-flex items-center rounded-full bg-white/10 text-white/80 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest border border-white/20 mb-4 font-figtree">
            Knowledge &amp; Support Hub
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold font-figtree tracking-tight max-w-3xl mx-auto leading-tight">
            Frequently Asked <span className="text-secondary">Questions</span>
          </h1>
          <p className="text-white/75 text-sm sm:text-base md:text-lg font-manrope mt-4 max-w-2xl mx-auto leading-relaxed">
            Clear, authoritative answers to common questions about tax compliance, business structuring, payroll, and CPA advisory services.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder="Search questions (e.g. S-Corp, IRS notice, payroll)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-secondary backdrop-blur-md text-sm font-manrope shadow-lg"
            />
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60" size={18} />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24 bg-[#FAF9F5] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-14">
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setExpandedIdx(null);
                }}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold font-figtree transition-all duration-300 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-primary text-white shadow-md scale-105"
                    : "bg-white text-slate-700 border border-slate-200/80 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* FAQ Accordion List */}
          <div className="flex flex-col gap-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isExpanded = expandedIdx === idx;

                return (
                  <div
                    key={idx}
                    className={`bg-white border rounded-2xl overflow-hidden shadow-sm transition-all duration-300 ${
                      isExpanded
                        ? "border-secondary/60 shadow-md ring-1 ring-secondary/20"
                        : "border-slate-200/80 hover:border-slate-300"
                    }`}
                  >
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer transition-colors group"
                    >
                      <span className="text-sm sm:text-base font-bold text-dark font-figtree pr-4 group-hover:text-primary transition-colors flex items-center gap-3">
                        <FiHelpCircle className="text-secondary flex-shrink-0 hidden sm:block" size={20} />
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
              })
            ) : (
              <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8">
                <p className="text-dark font-bold font-figtree text-base">No questions found matching your search.</p>
                <p className="text-slate-500 text-xs sm:text-sm font-manrope mt-1">Try another keyword or select a different category above.</p>
              </div>
            )}
          </div>

          {/* Still Have Questions CTA Card */}
          <div className="mt-14 sm:mt-20 bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-md text-center flex flex-col items-center gap-4">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 text-primary px-3.5 py-1 text-xs font-bold uppercase tracking-widest font-figtree">
              Have a Specific Question?
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-figtree text-dark">
              Talk Directly With Vethavalli Ramakrishnan, CPA
            </h3>
            <p className="text-body-text text-sm sm:text-base font-manrope max-w-xl">
              Every tax situation is unique. Schedule a free, confidential strategy consultation to discuss your specific goals and numbers.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-secondary hover:bg-[#8CA04A] text-dark text-sm sm:text-base font-semibold font-figtree pl-7 pr-3 py-3 rounded-full shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300 mt-2 cursor-pointer"
            >
              <span>Schedule Free Strategy Call</span>
              <span className="bg-dark/20 p-2.5 rounded-full flex items-center justify-center group-hover:translate-x-1 duration-300 transition-all text-xs sm:text-sm">
                <FiArrowRight className="text-dark" />
              </span>
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
