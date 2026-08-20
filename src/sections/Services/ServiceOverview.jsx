"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";

export default function ServiceOverview({ title, subtitle, overview, keyword }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 flex items-center overflow-hidden bg-gradient-to-br from-[#122115] via-[#1e3a24] to-[#2d5234]">
      {/* Decorative radial glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none bg-[radial-gradient(circle,#9CB05A,transparent_70%)]" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none bg-[radial-gradient(circle,#d4af37,transparent_70%)]" />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M60 0H0v60' fill='none' stroke='%239CB05A' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center w-full">
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
            <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <span className="text-secondary line-clamp-1">{title}</span>
          </nav>

          {/* Subtitle Pill */}
          <span className="inline-flex items-center rounded-full bg-white/10 text-white/80 px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-white/20 backdrop-blur-sm">
            {subtitle || "VS Tax CPA Service"}
          </span>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.15] sm:leading-[1.1] font-figtree tracking-tight max-w-4xl">
            {title}
          </h1>

          {/* Overview Paragraph */}
          <p className="text-white/75 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-manrope">
            {overview}
          </p>

          {/* Keyword Target Badge */}
          {keyword && (
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs text-white/70">
              <FiCheckCircle className="text-secondary" size={14} />
              <span>Specialized in <strong className="text-secondary font-figtree">{keyword}</strong> compliance &amp; regulations</span>
            </div>
          )}

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2 sm:mt-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 bg-secondary text-dark text-sm sm:text-base font-semibold font-figtree pl-6 sm:pl-8 pr-2.5 sm:pr-3 py-2.5 sm:py-3 rounded-full shadow-lg hover:bg-[#8CA04A] hover:scale-[1.02] active:scale-95 transition-all duration-300 w-full sm:w-auto"
            >
              <span>Schedule Free Consultation</span>
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
