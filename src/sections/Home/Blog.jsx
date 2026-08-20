"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function Blog() {
  const posts = [
    {
      image: "https://ranko.themejunction.net/wp-content/uploads/2025/09/blog-1.webp",
      category: "Tax Planning",
      date: "Jan 15, 2026",
      title: "How Small Business Owners Can Maximize Deductions and Lower Taxes in 2026",
      href: "/blog/tax-savings",
    },
    {
      image: "https://ranko.themejunction.net/wp-content/uploads/2025/09/blog-2.webp",
      category: "Gusto Payroll",
      date: "Jan 28, 2026",
      title: "Setting Up Compliant Payroll: What S-Corp Owners Must Know About Reasonable Salary",
      href: "/blog/gusto-payroll-setup",
    },
    {
      image: "https://ranko.themejunction.net/wp-content/uploads/2025/09/blog-3.webp",
      category: "Fractional CFO",
      date: "Feb 10, 2026",
      title: "Why Growing Businesses Choose Fractional CFO Services to Scale Profitably",
      href: "/blog/fractional-cfo-benefits",
    },
  ];

  return (
    <section id="blog" className="py-16 sm:py-24 bg-bg-light/30 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 sm:gap-8 mb-10 sm:mb-14">
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/8 text-primary px-3.5 sm:px-4 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-widest border border-primary/15 mb-3 sm:mb-4">
              Knowledge Base
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-dark leading-tight font-figtree tracking-tight max-w-xl">
              Explore Tax & Accounting Insights
            </h2>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-3 bg-primary hover:bg-secondary text-white text-sm sm:text-base font-semibold font-figtree pl-6 sm:pl-8 pr-2.5 sm:pr-3 py-2.5 sm:py-3 rounded-full shadow-lg transition-all duration-300 self-start lg:self-center"
          >
            <span>Read All Articles</span>
            <span className="bg-white text-dark p-2.5 sm:p-3 rounded-full flex items-center justify-center group-hover:translate-x-1 duration-300 transition-transform text-xs sm:text-sm">
              <FiArrowRight />
            </span>
          </Link>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative rounded-[26px] sm:rounded-3xl overflow-hidden aspect-[4/4.6] sm:aspect-[4/4.8] shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer bg-[#122115]"
            >
              <Link href={post.href} className="block w-full h-full relative">
                {/* Background Image */}
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                />

                {/* Brand Dark Forest Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#122115]/95 via-[#122115]/60 via-45% to-transparent transition-opacity duration-300" />

                {/* Content at Bottom with smooth Y-axis lift and subtle scale */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7 flex flex-col items-start gap-2.5 z-10 transform transition-all duration-500 ease-out group-hover:-translate-y-2.5 group-hover:scale-[1.02] origin-bottom-left">
                  {/* Category & Date Row */}
                  <div className="flex items-center gap-2 text-xs">
                    <span className="bg-secondary text-dark font-black text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded shadow-sm font-figtree">
                      {post.category}
                    </span>
                    <span className="text-white/40 text-[10px]">•</span>
                    <span className="text-white/85 font-semibold text-[11px] uppercase tracking-wider font-figtree">
                      {post.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-figtree text-white leading-snug tracking-tight line-clamp-2 transition-colors duration-300 group-hover:text-secondary">
                    {post.title}
                  </h3>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
