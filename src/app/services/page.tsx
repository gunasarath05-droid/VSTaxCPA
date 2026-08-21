import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicesData } from "@/constants/servicesData";
import { FiArrowRight, FiCheckCircle } from "react-icons/fi";
import darkbg from "@/assets/images/darkbg.png";

export const metadata: Metadata = {
  title: "Professional CPA & Tax Services | VS Tax CPA LLC",
  description: "Explore our comprehensive CPA services in Irving, TX: Tax Compliance, Strategic Tax Planning, Business Formation, Bookkeeping, Payroll, and Fractional CFO.",
};

export default function ServicesListingPage() {
  const serviceList = Object.values(servicesData);

  return (
    <>
      {/* ── Services Hub Hero ── */}
      <section className="relative pt-36 pb-20 flex flex-col items-center justify-center text-center overflow-hidden">
        <Image src={darkbg} alt="Services | VS Tax CPA LLC" fill priority className="object-cover object-center pointer-events-none" />
        <div className="absolute inset-0 bg-[#0E1710]/30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 sm:gap-5">
            <nav className="flex items-center gap-2 text-white/60 text-xs font-semibold">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span style={{ color: "#9CB05A" }}>Services</span>
            </nav>

            <span className="inline-flex items-center rounded-full bg-white/10 text-white/80 px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-white/20">
              Comprehensive CPA Solutions
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.15] sm:leading-[1.1] font-figtree tracking-tight">
              Strategic Tax, Accounting &amp; <span style={{ color: "#9CB05A" }}>Advisory Services</span>
            </h1>

            <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              Tailored financial strategies delivered with dual CPA &amp; CA certification, proactive year-round planning, and unmatched precision for businesses and individuals.
            </p>
          </div>
        </div>
      </section>

      {/* ── Services Grid ── */}
      <section className="py-16 sm:py-24 bg-[#FAF9F5] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/8 text-primary px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-primary/15 mb-3 sm:mb-4 font-figtree">
              <span className="w-1.5 h-1.5 rounded-full bg-primary inline-block" />
              Full Service Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight font-figtree tracking-tight">
              Explore Our Core Practice Areas
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {serviceList.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-sm hover:shadow-2xl hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-400 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary bg-secondary/15 px-2.5 py-1 rounded-full border border-secondary/20 font-figtree">
                      {service.overviewTitle || "Practice Area"}
                    </span>
                    <span className="text-xs font-extrabold text-slate-300 font-figtree">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-figtree text-dark mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-body-text text-xs sm:text-sm leading-relaxed mb-6 font-manrope line-clamp-3">
                    {service.overview}
                  </p>

                  {/* Highlight bullets */}
                  {service.benefits && service.benefits.length > 0 && (
                    <div className="space-y-2 mb-6 pt-4 border-t border-slate-100">
                      {service.benefits.slice(0, 2).map((b: any, bIdx: number) => (
                        <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-600 font-manrope">
                          <FiCheckCircle className="text-secondary mt-0.5 flex-shrink-0" size={14} />
                          <span className="line-clamp-1">{b.title}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="group/btn inline-flex items-center gap-2.5 bg-primary hover:bg-secondary text-white hover:text-dark text-xs sm:text-sm font-bold font-figtree pl-5 pr-2.5 py-2.5 rounded-full transition-all duration-300 shadow-md self-start"
                >
                  <span>Explore Service</span>
                  <span className="bg-white/20 group-hover/btn:bg-dark/20 text-white group-hover/btn:text-dark p-1.5 rounded-full flex items-center justify-center group-hover/btn:translate-x-1 duration-300 transition-all text-xs">
                    <FiArrowRight />
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
