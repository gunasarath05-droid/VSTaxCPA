"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiAward, FiUsers, FiTarget, FiShield, FiZap } from "react-icons/fi";

import bgbanner from "@/assets/images/home/hero/bgbanner.png";
import leftPersonImg from "@/assets/images/home/whychoose.png";

export default function WhyChooseUs() {
  const cards = [
    {
      icon: <FiTarget size={24} />,
      title: "Hit Your Growth Goals",
      desc: "Our tailored tax strategies and entity planning are designed to align with your specific financial goals and minimize liability.",
    },
    {
      icon: <FiAward size={24} />,
      title: "Dual CPA Certified",
      desc: "Licensed Texas CPA & Indian CA offering high-level cross-border and state tax expertise with zero-penalty track record.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="py-12 sm:py-16 lg:py-24 mx-3 sm:mx-6 md:mx-10 my-8 sm:my-10 relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-sm border border-slate-100"
      style={{
        backgroundImage: `url(${bgbanner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* ── Left: Visual Presentation with Badges & Backdrop ── */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full max-w-[420px] sm:max-w-[480px] lg:max-w-[540px] flex items-center justify-center"
            >
              {/* Main Left Image */}
              <div className="relative z-10 w-full h-[340px] sm:h-[480px] lg:h-[580px] flex items-center justify-center">
                <Image
                  src={leftPersonImg}
                  alt="Why Choose VS Tax CPA"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
                />
              </div>

              {/* Floating Badge 1: Top Left Pill (Horizontal Float Right & Left) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute top-8 left-0 sm:-left-3 z-20"
              >
                <div
                  className="bg-white px-4 py-2.5 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center gap-2"
                  style={{
                    animation: "float-horizontal 4.5s ease-in-out infinite",
                  }}
                >
                  <FiZap className="text-primary fill-primary" size={20} />
                  <span className="text-sm font-bold text-slate-900 font-figtree tracking-tight">
                    100% Satisfaction
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Right Stat Box (Smooth Up & Down Float) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-4 right-0 sm:-right-4 z-20"
              >
                <div
                  className="bg-white p-5 sm:p-6 rounded-[24px] shadow-[0_20px_45px_rgba(0,0,0,0.12)] border border-slate-100 flex flex-col items-center justify-center min-w-[140px] sm:min-w-[160px]"
                  style={{
                    animation: "float-vertical 4.5s ease-in-out infinite 0.5s",
                  }}
                >
                  {/* Circular Progress Gauge */}
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                      {/* Background faint ring */}
                      <path
                        className="text-[#EBF2FE]"
                        strokeWidth="4"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                      {/* Vibrant active progress stroke */}
                      <path
                        className="text-primary-light"
                        strokeDasharray="95, 100"
                        strokeWidth="4"
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="none"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      />
                    </svg>
                    <span className="absolute text-base sm:text-lg font-extrabold text-slate-900 font-figtree">
                      98%
                    </span>
                  </div>

                  {/* 2-line Label */}
                  <div className="text-center mt-3">
                    <p className="text-lg font-extrabold text-slate-900 font-figtree leading-tight">
                      Engagement
                    </p>
                    <p className="text-lg font-extrabold text-slate-900 font-figtree leading-tight">
                      Statics
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ── Right: Content & Highlight Cards ── */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest border border-primary/20 mb-4 font-figtree">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block"></span>
              Why Choose Us
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight font-figtree tracking-tight mb-8">
              Personalized CPA Services That Protect and Grow Your Wealth.
            </h2>

            {/* Two Side-by-Side Highlight Cards */}
            <div className="grid sm:grid-cols-2 gap-5 w-full">
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="bg-white p-7 rounded-[26px] border border-slate-100 shadow-sm hover:shadow-xl duration-300 transition-all group flex flex-col items-start"
                >
                  {/* Circular Icon Badge */}
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-primary text-white flex items-center justify-center mb-5 shadow-lg shadow-primary/20 group-hover:scale-105 transition-transform duration-300">
                    {card.icon}
                  </div>

                  <h3 className="text-lg font-bold font-figtree text-slate-900 mb-2">
                    {card.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
