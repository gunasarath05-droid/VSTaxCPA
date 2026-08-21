"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { FiCheckCircle, FiAward, FiArrowRight, FiStar } from "react-icons/fi";
import ceo from "../../assets/images/ceo.png";
import lightbg from "../../assets/images/about/lightbg.png";

export default function Founder() {
  const credentials = [
    "Licensed Certified Public Accountant (CPA) – Texas State Board of Public Accountancy",
    "Chartered Accountant (CA) – Institute of Chartered Accountants of India (ICAI)",
    "13+ Years of Comprehensive Accounting Experience",
    "Nearly a Decade of Specialized Tax & Advisory Expertise",
    "Gusto Certified Payroll Specialist & QuickBooks ProAdvisor",
  ];

  const stats = [
    { value: "13+", label: "Years\nExperience" },
    { value: "500+", label: "Clients\nServed" },
    { value: "100%", label: "Compliance\nRate" },
  ];

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Light texture background — unoptimized to preserve exact quality */}
      <Image
        src={lightbg}
        alt=""
        fill
        priority
        unoptimized
        className="object-cover object-center pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Background Decorative */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.04] pointer-events-none bg-[radial-gradient(circle,#1e3a24,transparent_70%)]" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-[0.03] pointer-events-none bg-[radial-gradient(circle,#9CB05A,transparent_70%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 text-primary px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-primary/15 mb-3 sm:mb-4 font-figtree">
            <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
            Founder &amp; Leadership
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight font-figtree tracking-tight">
            Meet Your Trusted CPA &amp; Advisor
          </h2>
        </div>

        {/* Founder Spotlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center"
        >

          {/* ── Left: Photo Column ── */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">

              {/* Main CEO Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3/4] w-full border-4 border-white">
                <Image
                  src={ceo}
                  alt="Vethavalli Ramakrishnan, CPA — Founder of VS Tax CPA LLC"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 640px) 100vw, 380px"
                />
                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-[#122115]/90 to-transparent z-10" />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 z-20 p-5 sm:p-6">
                  <p className="text-white font-extrabold text-base sm:text-lg font-figtree leading-tight">Vethavalli Ramakrishnan</p>
                  <p className="text-secondary text-xs font-bold uppercase tracking-wider mt-0.5 font-figtree">CPA · CA · Founder &amp; CEO</p>
                </div>
              </div>

              {/* Floating: 13+ Years badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-secondary text-dark rounded-2xl p-4 sm:p-5 shadow-2xl border-4 border-white text-center min-w-[90px] sm:min-w-[100px]"
                style={{ animation: "float-vertical 4s ease-in-out infinite" }}
              >
                <p className="text-2xl sm:text-3xl font-extrabold font-figtree leading-none">13+</p>
                <p className="text-[10px] font-bold uppercase tracking-wider leading-tight mt-0.5">Years<br />Exp</p>
              </motion.div>

              {/* Floating: 5-star rating pill */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.45 }}
                className="absolute -bottom-4 -left-4 sm:-left-6 bg-white rounded-2xl px-4 py-3 shadow-xl border border-slate-100 flex items-center gap-2 z-10"
                style={{ animation: "float-horizontal 5s ease-in-out infinite" }}
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="text-amber-400 fill-amber-400" size={13} />
                  ))}
                </div>
                <span className="text-xs font-extrabold text-dark font-figtree">5.0 Rating</span>
              </motion.div>

              {/* Social Links */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2.5">
                {[
                  { href: "https://instagram.com/vstaxcpa", icon: <FaInstagram size={14} />, label: "Instagram" },
                  { href: "https://facebook.com/Vstaxcpallc", icon: <FaFacebookF size={14} />, label: "Facebook" },
                  { href: "https://linkedin.com/company/vstaxcpa", icon: <FaLinkedinIn size={14} />, label: "LinkedIn" },
                ].map(({ href, icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-500 hover:text-white hover:bg-primary hover:border-primary flex items-center justify-center transition-all shadow-md"
                  >
                    {icon}
                  </a>
                ))}
              </div>

            </div>
          </div>

          {/* ── Right: Bio Column ── */}
          <div className="lg:col-span-7 flex flex-col gap-6">

            {/* Intro */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4 text-body-text text-sm sm:text-base leading-relaxed font-manrope">
                <p>
                  I&apos;m <strong className="text-dark font-figtree">Vethavalli Ramakrishnan, CPA</strong>, Founder and CEO of VS Tax CPA LLC. With <strong className="text-dark font-figtree">13 years of accounting experience</strong> and nearly a decade of specialized tax expertise, I help individuals and businesses navigate their financial world with clarity, confidence, and compliance.
                </p>
                <p>
                  I&apos;m a <strong className="text-dark font-figtree">Certified Public Accountant licensed by the Texas State Board of Public Accountancy</strong> and a <strong className="text-dark font-figtree">Chartered Accountant from India</strong> — a journey fueled by my lifelong love for numbers and strengthened after moving to the United States.
                </p>
                <p>
                  Serving clients has always inspired me, and the desire to build a firm rooted in trust, accuracy, and genuine care motivated me to establish <strong className="text-dark font-figtree">VS Tax CPA LLC in 2026</strong>.
                </p>
                <blockquote className="italic text-slate-600 text-sm border-l-2 border-secondary pl-4 py-1 font-manrope">
                  &ldquo;When I&apos;m not solving tax challenges or supporting business owners, I enjoy cooking, traveling, and spending time with my husband and our two boys. If you&apos;re looking for a CPA who listens, understands, and delivers results — I&apos;m here to help you move forward with confidence.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 py-5 border-t border-b border-border-light">
              {stats.map(({ value, label }, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl sm:text-3xl font-extrabold text-primary font-figtree leading-none">{value}</p>
                  <p className="text-[10px] sm:text-xs text-body-text font-manrope mt-1 leading-tight whitespace-pre-line">{label}</p>
                </div>
              ))}
            </div>

            {/* Key Credentials */}
            <div>
              <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-dark font-figtree mb-3 flex items-center gap-2">
                <FiAward className="text-primary" size={15} />
                Key Qualifications &amp; Certifications
              </h4>
              <ul className="flex flex-col gap-2">
                {credentials.map((cred, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-body-text font-medium font-manrope">
                    <FiCheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={14} />
                    <span>{cred}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 bg-primary hover:bg-primary/90 text-white text-sm font-bold font-figtree pl-6 sm:pl-7 pr-2.5 sm:pr-3 py-2.5 sm:py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95 w-full sm:w-auto justify-center sm:justify-start"
              >
                <span>Schedule a Consultation</span>
                <span className="bg-white text-dark p-2.5 rounded-full flex items-center justify-center group-hover:translate-x-1 duration-300 transition-transform">
                  <FiArrowRight size={14} />
                </span>
              </Link>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
