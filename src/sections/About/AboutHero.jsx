"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import darkbg from "@/assets/images/darkbg.png";

export default function AboutHero() {
  return (
    <section className="relative pt-36 pb-20 flex flex-col items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <Image
        src={darkbg}
        alt="about| VsTaxCPA LLC"
        fill
        priority
        className="object-cover object-center pointer-events-none"
      />
      {/* Subtle dark overlay to keep text readable */}
      <div className="absolute inset-0 bg-[#0E1710]/30 pointer-events-none" />

      {/* Decorative glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #9CB05A, transparent 70%)" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 pointer-events-none" style={{ background: "radial-gradient(circle, #d4af37, transparent 70%)" }} />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4 sm:gap-5"
        >
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/60 text-xs font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: "#9CB05A" }}>About Us</span>
          </nav>

          <span className="inline-flex items-center rounded-full bg-white/10 text-white/80 px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-white/20">
            About VS Tax CPA LLC
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.15] sm:leading-[1.1] font-figtree tracking-tight">
            Your Trusted <span style={{ color: "#9CB05A" }}>CPA Partner</span> for Tax Clarity & Financial Growth.
          </h1>

          <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
            Founded by Vethavalli Ramakrishnan, CPA — a licensed Texas CPA and Indian Chartered Accountant — VS Tax CPA LLC delivers personalized, accurate, and strategic financial services for individuals and businesses in Irving, TX and beyond.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
