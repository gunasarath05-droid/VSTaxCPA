"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from "react-icons/fa";
import { FiPhone, FiMail, FiMapPin, FiCheck, FiArrowRight } from "react-icons/fi";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog & Guides", href: "/blog" },
  { label: "FAQ", href: "/faq" },
];

const serviceLinks = [
  { label: "Tax Compliance & Filing", href: "/services/tax-compliance" },
  { label: "Tax Planning & Advisory", href: "/services/tax-planning" },
  { label: "Business Entity Formation", href: "/services/business-formation" },
  { label: "Bookkeeping & Payroll", href: "/services/bookkeeping" },
  { label: "Fractional CFO & IRS Support", href: "/services/fractional-cfo" },
];

const supportLinks = [
  { label: "Schedule Consultation", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-of-service" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Client FAQ", href: "/faq" },
];

const socials = [
  { icon: <FaInstagram className="text-lg" />, href: "https://instagram.com/vstaxcpa", label: "Instagram" },
  { icon: <FaFacebookF className="text-lg" />, href: "https://facebook.com/Vstaxcpallc", label: "Facebook" },
  { icon: <FaLinkedinIn className="text-lg" />, href: "https://linkedin.com/company/vstaxcpa", label: "LinkedIn" },
  { icon: <FaYelp className="text-lg" />, href: "https://yelp.com/biz/vs-tax-cpa", label: "Yelp" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#0E1710] text-gray-400 text-sm border-t border-[#9CB05A]/15 pt-10 pb-6 font-manrope">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* ── Top Row: Brand + Newsletter ── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-4">

          {/* Brand */}
          <div className="max-w-md">
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/Logo1.png"
                alt="VS Tax CPA LLC"
                width={160}
                height={46}
                style={{ width: "auto", height: "auto" }}
                className="object-contain h-12 sm:h-14"
              />
            </Link>
            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
              Your trusted partner for proactive tax planning, bookkeeping, payroll, and strategic CPA advisory for growing businesses in Irving, TX and beyond.
            </p>
          </div>

          {/* Newsletter */}
          <div className="w-full lg:max-w-md">
            <h4 className="text-[#FAF9F2] text-xs sm:text-sm font-semibold mb-2.5 font-figtree">
              Subscribe to our newsletter:
            </h4>
            {subscribed ? (
              <div className="flex items-center gap-2 text-xs text-[#9CB05A] bg-[#162319] border border-[#9CB05A]/30 px-3.5 py-2.5 rounded-xl">
                <FiCheck className="text-base flex-shrink-0" />
                <span>Thank you for subscribing to our tax insights!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex items-center gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#162319] border border-[#243526] text-xs text-[#FAF9F2] placeholder-gray-500 focus:outline-none focus:border-[#9CB05A] focus:ring-1 focus:ring-[#9CB05A]/40 transition-all font-manrope"
                />
                <button
                  type="submit"
                  className="btn-gradient-gold px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 shadow-md cursor-pointer"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-4" />

        {/* ── Middle Links Grid: 4 columns ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-4">

          {/* Col 1: Quick Links */}
          <div>
            <h4 className="text-[#FAF9F2] font-bold text-sm sm:text-base mb-3 font-figtree">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="hover:text-[#9CB05A] transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 2: Our Services */}
          <div>
            <h4 className="text-[#FAF9F2] font-bold text-sm sm:text-base mb-3 font-figtree">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {serviceLinks.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="hover:text-[#9CB05A] transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Client Support */}
          <div>
            <h4 className="text-[#FAF9F2] font-bold text-sm sm:text-base mb-3 font-figtree">
              Client Support
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {supportLinks.map((l, i) => (
                <li key={i}>
                  <Link href={l.href} className="hover:text-[#9CB05A] transition-colors duration-200">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 className="text-[#FAF9F2] font-bold text-sm sm:text-base mb-3 font-figtree">
              Contact Information
            </h4>
            <div className="space-y-3">

              <div className="flex items-start gap-2.5">
                <FiPhone className="text-[#9CB05A] text-base shrink-0 mt-0.5" />
                <div>
                  <span className="block text-gray-500 text-[10px] uppercase font-bold tracking-wider mb-0.5 font-figtree">Phone</span>
                  <a href="tel:+14694716580" className="text-[#FAF9F2] hover:text-[#9CB05A] transition-colors font-medium text-xs sm:text-sm">
                    (469) 471-6580
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FiMail className="text-[#9CB05A] text-base shrink-0 mt-0.5" />
                <div>
                  <span className="block text-gray-500 text-[10px] uppercase font-bold tracking-wider mb-0.5 font-figtree">Email</span>
                  <a href="mailto:info@vstaxcpa.com" className="text-[#FAF9F2] hover:text-[#9CB05A] transition-colors font-medium text-xs sm:text-sm break-all">
                    info@vstaxcpa.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <FiMapPin className="text-[#9CB05A] text-base shrink-0 mt-0.5" />
                <div>
                  <span className="block text-gray-500 text-[10px] uppercase font-bold tracking-wider mb-0.5 font-figtree">Office</span>
                  <a
                    href="https://maps.google.com/?q=3035+Ivy+Hill+Lane,+Irving,+TX+75063"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-300 hover:text-[#9CB05A] transition-colors leading-snug text-xs sm:text-sm"
                  >
                    3035 Ivy Hill Lane,<br />Irving, TX 75063
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10" />

        {/* ── Bottom Bar ── */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-manrope">
          <p>
            © {new Date().getFullYear()} <span className="font-bold text-gray-400">VS Tax CPA LLC</span>. All Rights Reserved. Licensed CPA Firm · Irving, TX.
          </p>
          <p>Design & Developed by <a href="https://ec4you.in/">EC4You</a></p>
          <div className="flex items-center gap-3">
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#9CB05A] hover:text-[#122115] flex items-center justify-center transition-all text-gray-400"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
