"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonials() {
  const testimonialsList = [
    {
      name: "Marcus T.",
      desig: "Real Estate Investor · Irving, TX",
      initials: "MT",
      rating: 5,
      industry: "Real Estate",
      desc: "Vethavalli saved me tens of thousands in taxes by correctly structuring my rental properties and recommending a cost segregation study. She explained everything clearly and was available whenever I had questions. I've already referred three other investors to VS Tax CPA LLC.",
    },
    {
      name: "Dr. Priya N.",
      desig: "Dentist · Owner, Bright Smiles Dental",
      initials: "PN",
      rating: 5,
      industry: "Dental Practice",
      desc: "Running a dental practice is already overwhelming — dealing with taxes on top of that was a nightmare until I found VS Tax CPA LLC. Vethavalli set up our Gusto payroll, organized our books, and reduced our tax liability significantly through proper S-Corp structuring. She's an absolute gem.",
    },
    {
      name: "Alex R.",
      desig: "Co-Founder · SaaS Startup · Dallas, TX",
      initials: "AR",
      rating: 5,
      industry: "IT & Tech",
      desc: "As a tech startup founder, I needed a CPA who understands the intersection of tech, equity compensation, and growth planning. Vethavalli built us a cash flow model, helped with our entity election, and keeps our quarterly taxes on track. She's become a true strategic partner for our business.",
    },
    {
      name: "Lisa M.",
      desig: "Restaurant Owner · Fort Worth, TX",
      initials: "LM",
      rating: 5,
      industry: "Restaurants",
      desc: "I had back taxes and unfiled returns that were keeping me up at night. VS Tax CPA LLC handled everything — they filed all the back returns, negotiated with the IRS, and got my penalties abated. Now my books are clean and my sales tax is filed on time every month. I couldn't be more relieved.",
    },
    {
      name: "Ryan K.",
      desig: "General Contractor · DFW Area",
      initials: "RK",
      rating: 5,
      industry: "Contractors",
      desc: "Before VS Tax CPA LLC, I was leaving money on the table every year. Vethavalli found deductions I'd never claimed — home office, vehicle, tools, and retirement contributions. My tax bill dropped by over $12,000 last year. Wish I'd found her sooner!",
    },
  ];

  return (
    <section className="py-24 bg-bg-light/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/8 text-primary px-4 py-2 text-xs font-bold uppercase tracking-widest border border-primary/15 mb-4">
            Client Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-dark leading-tight font-figtree tracking-tight">
            Real Clients. Real Tax Savings. Real Results.
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <button className="testi-prev-btn absolute left-[-60px] top-[50%] -translate-y-1/2 hidden md:flex w-12 h-12 rounded-full border border-slate-200 text-slate-500 hover:text-white hover:bg-primary hover:border-primary items-center justify-center transition-all z-10 cursor-pointer">
            <FaChevronLeft size={16} />
          </button>
          <button className="testi-next-btn absolute right-[-60px] top-[50%] -translate-y-1/2 hidden md:flex w-12 h-12 rounded-full border border-slate-200 text-slate-500 hover:text-white hover:bg-primary hover:border-primary items-center justify-center transition-all z-10 cursor-pointer">
            <FaChevronRight size={16} />
          </button>

          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5500, disableOnInteraction: false }}
            pagination={{
              clickable: true,
              bulletActiveClass: "swiper-pagination-bullet-active !bg-primary",
            }}
            navigation={{ prevEl: ".testi-prev-btn", nextEl: ".testi-next-btn" }}
            className="pb-12"
          >
            {testimonialsList.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-white border border-border-light rounded-3xl p-8 md:p-10 shadow-sm hover:shadow-xl transition-all duration-300">
                  {/* Stars + Industry Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-0.5 text-amber-400 text-base">
                      {"★".repeat(t.rating)}
                    </div>
                    <span className="inline-flex items-center rounded-full bg-secondary/10 text-primary px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-secondary/20">
                      {t.industry}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="text-body-text text-base leading-relaxed mb-8 italic">
                    &ldquo;{t.desc}&rdquo;
                  </p>

                  {/* Client info */}
                  <div className="flex items-center gap-4 pt-6 border-t border-border-light">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-base font-figtree flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #1e3a24, #9CB05A)" }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <h5 className="text-sm font-bold font-figtree text-dark">{t.name}</h5>
                      <p className="text-xs text-body-text">{t.desig}</p>
                    </div>
                    {/* VS Tax CPA logo text */}
                    <div className="ml-auto text-right">
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Client of</p>
                      <p className="text-xs font-extrabold text-primary font-figtree">VS Tax CPA LLC</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}
