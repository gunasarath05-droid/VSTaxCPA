"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function AboutHero() {
  return (
    <section className="relative py-24 flex items-center overflow-hidden bg-gradient-to-br from-[#122115] via-[#1e3a24] to-[#2d5234]">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='%239CB05A' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-4 sm:gap-6"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/60 text-xs font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-secondary">About Us</span>
          </nav>

          <span className="inline-flex items-center rounded-full bg-white/10 text-white/80 px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-white/20">
            About VS Tax CPA LLC
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.15] sm:leading-[1.1] font-figtree tracking-tight max-w-4xl">
            Your Trusted <span className="text-secondary">CPA Partner</span> for Tax Clarity &amp; Financial Growth.
          </h1>

          <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl font-manrope">
            Founded by Vethavalli Ramakrishnan, CPA — a licensed Texas CPA and Indian Chartered Accountant — VS Tax CPA LLC delivers personalized, accurate, and strategic financial services for individuals and businesses in Irving, TX and beyond.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-secondary text-dark text-sm sm:text-base font-semibold font-figtree pl-6 sm:pl-8 pr-2.5 sm:pr-3 py-2.5 sm:py-3 rounded-full shadow-lg hover:bg-[#8CA04A] hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto"
            >
              <span>Book a Free Strategy Call</span>
              <span className="bg-dark/20 p-2.5 sm:p-3 rounded-full flex items-center justify-center group-hover:translate-x-1 duration-300 transition-transform text-xs sm:text-sm">
                <FiArrowRight className="text-dark" />
              </span>
            </Link>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
