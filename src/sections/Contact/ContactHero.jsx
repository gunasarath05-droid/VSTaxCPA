"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import darkbg from "@/assets/images/darkbg.png";

export default function ContactHero() {
  const quickInfo = [
    { icon: <FiPhone size={20} />, label: "Call Directly", value: "+1 (469) 471-6580", href: "tel:+14694716580" },
    { icon: <FiMail size={20} />, label: "Official Email", value: "info@vstaxcpa.com", href: "mailto:info@vstaxcpa.com" },
    { icon: <FiMapPin size={20} />, label: "Office Location", value: "3035 Ivy Hill Lane, Irving, TX 75063", href: "#office" },
  ];

  return (
    <section className="relative pt-36 pb-0 flex flex-col items-center text-center overflow-hidden">
      <Image src={darkbg} alt="Contact | VS Tax CPA LLC" fill priority className="object-cover object-center pointer-events-none" />
      <div className="absolute inset-0 bg-[#0E1710]/30 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-6 pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-4 sm:gap-5"
        >
          <nav className="flex items-center gap-2 text-white/60 text-xs font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color: "#9CB05A" }}>Contact Us</span>
          </nav>

          <span className="inline-flex items-center rounded-full bg-white/10 text-white/80 px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-white/20">
            Free Tax Strategy Consultation
          </span>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.15] sm:leading-[1.1] font-figtree tracking-tight max-w-3xl">
            Let&apos;s Discuss Your <span style={{ color: "#9CB05A" }}>Tax & Financial Goals.</span>
          </h1>

          <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
            Schedule a confidential consultation with Vethavalli Ramakrishnan, CPA. Whether you need tax planning, tax return filing, bookkeeping, Gusto payroll, or fractional CFO guidance — we&apos;re here to help you succeed.
          </p>
        </motion.div>
      </div>

      {/* Quick Contact Info Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="relative z-10 w-full max-w-5xl mx-auto px-6 pb-0 translate-y-8"
      >
        <div className="bg-white rounded-3xl shadow-2xl border border-border-light grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border-light overflow-hidden">
          {quickInfo.map((info, idx) => (
            <a
              key={idx}
              href={info.href}
              className="flex items-center gap-4 p-7 hover:bg-bg-light transition-colors duration-200 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/8 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                {info.icon}
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{info.label}</p>
                <p className="text-sm font-bold text-dark font-figtree leading-snug">{info.value}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
