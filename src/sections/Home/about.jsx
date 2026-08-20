"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { FaArrowUp, FaStar, FaHeart } from "react-icons/fa";

// Count Up component
function CountUp({ value, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseFloat(value);
    if (isNaN(end)) return;
    const totalMiliseconds = duration * 1000;
    const incrementTime = 30;
    const totalSteps = Math.ceil(totalMiliseconds / incrementTime);
    const stepValue = end / totalSteps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      if (step >= totalSteps) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount((prev) => {
          const nextVal = prev + stepValue;
          return nextVal > end ? end : nextVal;
        });
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const isFloat = value.toString().includes(".");
  const displayCount = isFloat ? count.toFixed(1) : Math.floor(count);
  return <span ref={ref}>{displayCount}</span>;
}

export default function About() {
  const stats = [
    {
      value: "13",
      suffix: "+",
      label: "Years of Accounting Experience",
      icon: <FaArrowUp className="inline ml-1 text-secondary text-sm rotate-45" />,
    },
    {
      value: "10",
      suffix: "+",
      label: "Years of Tax Specialization",
      badge: "CPA",
    },
    {
      value: "100",
      suffix: "%",
      label: "Compliance Track Record",
      icon: <FaStar className="inline ml-1 text-supportive text-sm" />,
    },
    {
      value: "8",
      suffix: "",
      label: "Core CPA Services Offered",
      icon: <FaHeart className="inline ml-1 text-secondary text-sm" />,
    },
  ];

  const pillars = [
    "Licensed Texas CPA & Indian Chartered Accountant",
    "Personalized, one-on-one client service",
    "Year-round proactive tax guidance",
    "Technology-forward accounting (Gusto, QuickBooks)",
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background subtle accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, #1e3a24, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* About Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5">
            <span className="inline-flex items-center rounded-full bg-primary/8 text-primary px-4 py-2 text-xs font-bold uppercase tracking-widest border border-primary/15">
              Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-dark leading-[1.15] font-figtree tracking-tight">
              A CPA Firm Built on Trust, Accuracy & Genuine Care.
            </h2>

            {/* Pillar list */}
            <ul className="flex flex-col gap-3 mt-2">
              {pillars.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-body-text text-sm">
                  <span className="w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                    <FiCheck size={10} className="text-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7 flex flex-col items-start gap-8 lg:pl-8">
            <p className="text-body-text text-lg leading-relaxed">
              VS Tax CPA LLC is a forward-thinking CPA firm established in 2026, dedicated to delivering reliable, accurate, and strategic tax and accounting services for individuals and businesses. We combine deep financial expertise with a commitment to personalized service, ensuring every client receives clear guidance, compliant solutions, and year-round support.
            </p>
            <p className="text-body-text text-base leading-relaxed">
              Whether it&apos;s tax planning, bookkeeping, payroll on Gusto, or fractional CFO advisory — our mission is to simplify complex financial matters and empower clients to make confident decisions that support long-term growth and stability.
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 bg-primary hover:bg-secondary text-white text-base font-semibold font-figtree pl-8 pr-3 py-3 rounded-full shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-300"
              >
                <span>Meet Our Founder</span>
                <span className="bg-white text-dark p-3 rounded-full flex items-center justify-center group-hover:translate-x-1 duration-300 transition-transform">
                  <FiArrowRight />
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-dark font-bold hover:text-primary transition-all underline underline-offset-4 decoration-secondary font-figtree text-sm"
              >
                Book a Free Tax Strategy Call →
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-2xl border border-border-light bg-bg-light hover:bg-white p-8 text-center hover:shadow-xl hover:-translate-y-1.5 duration-300 transition-all border-b-4 border-b-transparent hover:border-b-primary"
            >
              <h3 className="text-6xl font-extrabold text-dark font-figtree mb-4 flex items-center justify-center tracking-tight">
                <CountUp value={item.value} />
                <span className="text-3xl ml-1 text-secondary">{item.suffix}</span>
              </h3>

              <p className="text-body-text font-semibold text-base flex items-center justify-center gap-1.5">
                {item.label}
                {item.icon && item.icon}
                {item.badge && (
                  <span className="rounded-full bg-secondary/20 text-primary px-2.5 py-0.5 text-xs font-black ml-1">
                    {item.badge}
                  </span>
                )}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}