"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { FaStar, FaArrowTrendUp, FaChartSimple } from "react-icons/fa6";
import { HiSparkles } from "react-icons/hi2";

import bgbanner from "@/assets/images/home/hero/bgbanner.png";
import heroBannerImg from "@/assets/images/home/hero/hero.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 lg:pb-24 flex items-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: `url(${bgbanner.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/* Ambient glowing radial orbs */}
      <div className="absolute top-10 right-10 w-[550px] h-[550px] bg-gradient-to-br from-[#9CB05A]/20 via-[#1E2D1F]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -top-24 left-1/6 w-[400px] h-[400px] bg-[#9CB05A]/15 rounded-full blur-2xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 items-center">

          {/* ── Left Column: Hero Content ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 flex flex-col items-start text-left"
          >
            {/* Tag Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF0CE] border border-[#9CB05A]/70 text-[#1E2D1F] text-[11px] sm:text-xs font-extrabold uppercase tracking-wider mb-5 sm:mb-6 shadow-sm hover:scale-105 transition-transform"
            >
              <span className="w-2 h-2 rounded-full bg-[#465A20] animate-ping" />
              <HiSparkles className="text-[#465A20] text-sm" />
              <span>TEXAS STATE BOARD LICENSED CPA</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-black text-[#122115] leading-[1.16] tracking-tight mb-4 sm:mb-5 font-figtree"
            >
              You&apos;ve got a business, <br className="hidden sm:inline" />
              we have got brilliant minds<span className="text-secondary font-black">.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-[#3E4F40] text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-7 max-w-xl font-normal font-manrope"
            >
              VS TAX CPA LLC provides strategic tax planning, proactive compliance, bookkeeping, Gusto payroll, and fractional CFO guidance so you can minimize tax stress and maximize savings.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-7 sm:mb-8 w-full sm:w-auto"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#9CB05A] hover:bg-[#8CA04A] text-[#121E13] text-xs sm:text-sm font-black uppercase tracking-wider px-7 py-3.5 rounded-full shadow-lg shadow-[#9CB05A]/25 hover:scale-[1.03] active:scale-95 transition-all duration-300 text-center font-figtree"
              >
                <span>Book Free Consultation</span>
                <FiArrowRight className="w-4 h-4 text-[#121E13] group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/services/tax-compliance"
                className="inline-flex items-center justify-center gap-2 bg-white/90 hover:bg-white text-[#1E2D1F] hover:text-primary border border-slate-200/90 text-xs sm:text-sm font-bold uppercase tracking-wider px-6 py-3.5 rounded-full shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all duration-300 text-center font-figtree"
              >
                <span>Explore Services</span>
              </Link>
            </motion.div>

            {/* Quick Trust Checkmarks */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap sm:flex-nowrap items-center gap-4 sm:gap-6 text-xs text-[#2D432F] font-bold font-figtree w-full"
            >
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="text-secondary text-sm shrink-0 stroke-[2.5]" />
                <span>Data-Driven Strategies</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="text-secondary text-sm shrink-0 stroke-[2.5]" />
                <span>Transparent Reporting</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FiCheckCircle className="text-secondary text-sm shrink-0 stroke-[2.5]" />
                <span>ROI-Focused Savings</span>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Column: Hero Portrait & Interactive Floating Analytics ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 flex justify-center relative mt-8 lg:mt-0"
          >
              {/* CPA Portrait Graphic */}
              <div className="relative z-10 w-[340px] sm:w-[620px] h-[320px] sm:h-[620px] flex items-end justify-center">
                <Image
                  src={heroBannerImg}
                  alt="Vethavalli Ramakrishnan CPA Founder of VS Tax CPA LLC"
                  width={520}
                  height={580}
                  priority
                  className="w-full h-full object-contain object-bottom drop-shadow-2xl"
                />
              </div>

              {/* Floating Badge 1: Top Right Metric "4.9★ Rating" */}
              <div className="absolute top-2 -right-2 sm:top-4 sm:right-2 z-20">
                <motion.div
                  animate={{ y: [-5, 5] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  }}
                  whileHover={{ scale: 1.05 }}
                  style={{ willChange: "transform" }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl px-3 py-2 sm:px-4 sm:py-2.5 shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-2.5 cursor-pointer"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#EBF0CE] text-[#1E2D1F] flex items-center justify-center text-xs sm:text-sm shrink-0">
                    <FaStar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#465A20]" />
                  </div>
                  <div>
                    <span className="block text-xs sm:text-sm font-extrabold text-[#1E2D1F] leading-tight font-figtree">
                      4.9 ★ Rating
                    </span>
                    <span className="block text-[9px] sm:text-[10px] font-medium text-slate-500 font-manrope">
                      13+ Years Experience
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Floating Badge 2: Mid-Left Metric "YoY Growth: +215%" */}
              <div className="absolute top-1/4 -left-2 sm:-left-8 lg:-left-12 z-20">
                <motion.div
                  animate={{ y: [5, -5] }}
                  transition={{
                    duration: 3.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.2,
                  }}
                  whileHover={{ scale: 1.05 }}
                  style={{ willChange: "transform" }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-2.5 sm:p-3 shadow-xl border border-slate-100 flex items-center gap-2 sm:gap-3 cursor-pointer"
                >
                  <div className="w-7 h-7 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-gradient-to-tr from-[#1E2D1F] to-[#2D432F] text-[#B8C362] flex items-center justify-center shadow-md shrink-0">
                    <FaArrowTrendUp className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <span className="block text-[9px] sm:text-[10px] font-semibold text-slate-400 uppercase tracking-wider font-figtree">
                      YoY Growth
                    </span>
                    <span className="block text-xs sm:text-base font-black text-[#1E2D1F] leading-tight font-figtree">
                      +215%
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Floating Badge 3: Bottom Right Card "Tax Optimization Chart" */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-6 lg:-right-10 z-20">
                <motion.div
                  animate={{ y: [-4, 4] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  whileHover={{ scale: 1.03 }}
                  style={{ willChange: "transform" }}
                  className="bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-slate-100 w-44 sm:w-52 cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#1E2D1F] flex items-center gap-1 font-figtree">
                      <FaChartSimple className="text-[#465A20] text-xs" />
                      Tax Optimization
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#1E2D1F] bg-[#EBF0CE] px-1.5 py-0.5 rounded font-figtree">
                      +48% saved
                    </span>
                  </div>
                  <div className="flex items-end justify-between gap-1 sm:gap-1.5 h-8 sm:h-10 mb-1.5 sm:mb-2">
                    <motion.div initial={{ height: 0 }} animate={{ height: "40%" }} transition={{ duration: 0.8, delay: 0.6 }} className="w-2.5 sm:w-3 bg-[#EBF0CE] rounded-t" />
                    <motion.div initial={{ height: 0 }} animate={{ height: "60%" }} transition={{ duration: 0.8, delay: 0.7 }} className="w-2.5 sm:w-3 bg-[#C2CD68] rounded-t" />
                    <motion.div initial={{ height: 0 }} animate={{ height: "75%" }} transition={{ duration: 0.8, delay: 0.8 }} className="w-2.5 sm:w-3 bg-[#9CB05A] rounded-t" />
                    <motion.div initial={{ height: 0 }} animate={{ height: "95%" }} transition={{ duration: 0.8, delay: 0.9 }} className="w-2.5 sm:w-3 bg-[#596E28] rounded-t" />
                    <motion.div initial={{ height: 0 }} animate={{ height: "100%" }} transition={{ duration: 0.8, delay: 1.0 }} className="w-2.5 sm:w-3 bg-[#1E2D1F] rounded-t" />
                  </div>
                  <span className="block text-[9px] sm:text-[10px] text-slate-500 font-medium leading-tight font-manrope">
                    Proactive strategies to maximize savings
                  </span>
                </motion.div>
              </div>

            
          </motion.div>

        </div>
      </div>

      {/* Vertical Scroll bar */}
      <div className="absolute bottom-10 left-12 hidden xl:flex items-center gap-3 origin-left -rotate-90 select-none pointer-events-none">
        <span className="w-10 h-[1px] bg-[#1e3a24]/30" />
        <span className="text-[#1e3a24]/60 text-xs tracking-[0.2em] font-bold">SCROLL</span>
      </div>
    </section>
  );
}