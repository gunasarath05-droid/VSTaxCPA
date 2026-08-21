"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYelp } from "react-icons/fa";
import { FiChevronDown, FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { usePathname } from "next/navigation";

const serviceLinks = [
  { name: "Tax Compliance", href: "/services/tax-compliance" },
  { name: "Tax Planning & Advisory", href: "/services/tax-planning" },
  { name: "Business Entity Formation", href: "/services/business-formation" },
  { name: "Payroll Set Up (Gusto)", href: "/services/payroll-services" },
  { name: "Bookkeeping & Accounting", href: "/services/bookkeeping" },
  { name: "Fractional CFO Services", href: "/services/fractional-cfo" },
  { name: "IRS Representation", href: "/services/irs-representation" },
  { name: "Sales Tax & 1099 Filing", href: "/services/sales-tax-1099" },
];

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Any page other than home "/" has the dark green hero at the top
  const isDarkHero = pathname !== "/";

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    if (href === "/services") return pathname.startsWith("/services");
    if (href.startsWith("/#")) return pathname === "/";
    return pathname.startsWith(href);
  };

  // Nav text color: consistently clear light text with gold hover matching bg-[#0E1710]
  const navTextColor = "text-[#FAF9F2]/90 hover:text-[#9CB05A]";

  // Logo: Exclusively use /Logo1.png across the entire website
  const logoSrc = "/Logo1.png";

  return (
    <>
      {/* ── Main Header ── */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-400 ease-in-out ${
          isSticky
            ? "bg-[#0E1710]/85 backdrop-blur-xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.6)] border-b border-[#9CB05A]/25 py-2.5 sm:py-3"
            : isDarkHero
            ? "bg-transparent py-4 sm:py-5 border-b border-transparent"
            : "bg-[#0E1710]/95 backdrop-blur-md shadow-sm border-b border-[#9CB05A]/15 py-3.5 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="relative flex-shrink-0 flex items-center">
            <Image
              src={logoSrc}
              alt="VS Tax CPA LLC"
              width={260}
              height={80}
              priority
              style={{ height: "70px", width: "auto" }}
              className="h-14 sm:h-16 lg:h-20 w-auto object-contain object-left transition-all duration-300"
            />
          </Link>

          {/* ── Desktop Navigation ── */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((item) => {
              const active = isActive(item.href);

              if (item.hasDropdown) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    ref={dropdownRef}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 text-[15px] font-semibold font-figtree transition-all duration-300 py-2 cursor-pointer ${navTextColor} ${
                        active ? "!text-[#9CB05A] font-bold" : ""
                      }`}
                    >
                      <span>{item.name}</span>
                      <FiChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {/* Underline */}
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 bg-[#9CB05A] ${
                        active ? "w-full" : "w-0"
                      }`}
                    />

                    {/* Transparent bridge — fills the gap so mouse doesn't leave on way to dropdown */}
                    <div className="absolute top-full left-0 w-full h-2" />

                    {/* ── Mega Dropdown ── */}
                    <div
                      className={`absolute top-[calc(100%+2px)] left-1/2 -translate-x-1/2 w-[600px] bg-[#121E14]/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-[#9CB05A]/25 overflow-hidden transition-all duration-200 origin-top ${
                        isServicesOpen
                          ? "opacity-100 scale-100 pointer-events-auto translate-y-0"
                          : "opacity-0 scale-95 pointer-events-none -translate-y-1"
                      }`}
                    >
                      <div className="flex">
                        {/* Left: Service Links 2-column grid */}
                        <div className="flex-1 p-4">
                          <div className="grid grid-cols-2 gap-0.5">
                            {serviceLinks.map((service) => (
                              <Link
                                key={service.href}
                                href={service.href}
                                onClick={() => setIsServicesOpen(false)}
                                className={`flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[12.5px] font-semibold font-figtree transition-all duration-150 group/item ${
                                  pathname === service.href
                                    ? "bg-[#9CB05A] text-[#0E1710] font-bold"
                                    : "text-[#FAF9F2]/90 hover:bg-[#1C2C1E] hover:text-[#9CB05A]"
                                }`}
                              >
                                <span
                                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                                    pathname === service.href
                                      ? "bg-[#0E1710]"
                                      : "bg-[#9CB05A]/40 group-hover/item:bg-[#9CB05A]"
                                  }`}
                                />
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Right: Featured Dark Card */}
                        <div className="w-[188px] flex-shrink-0 bg-gradient-to-br from-[#0B130D] via-[#142217] to-[#1E3322] border-l border-[#9CB05A]/15 p-5 flex flex-col justify-between relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-28 h-28 rounded-full opacity-20 pointer-events-none bg-[radial-gradient(circle,#9CB05A,transparent_70%)]" />
                          <div className="flex flex-col gap-3 relative z-10">
                            <span className="inline-flex items-center rounded-full bg-[#9CB05A]/20 text-[#9CB05A] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider border border-[#9CB05A]/30 w-fit font-figtree">
                              Free Call
                            </span>
                            <h4 className="text-sm font-extrabold font-figtree text-white leading-snug">
                              Not Sure Which Service You Need?
                            </h4>
                            <p className="text-white/70 text-[11px] font-manrope leading-relaxed">
                              Book a 15-min discovery call — no obligation, no cost.
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 mt-5 relative z-10">
                            <Link
                              href="/contact"
                              onClick={() => setIsServicesOpen(false)}
                              className="inline-flex items-center justify-center bg-[#9CB05A] hover:bg-[#8CA04A] text-[#0E1710] text-[11px] font-extrabold font-figtree py-2.5 px-3 rounded-xl transition-all duration-200 shadow-sm"
                            >
                              Book Free Strategy Call
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`text-[15px] font-semibold font-figtree transition-all duration-300 py-2 block ${navTextColor} ${
                      active ? "!text-[#9CB05A] font-bold" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 bg-[#9CB05A] ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </div>
              );
            })}
          </nav>


          {/* ── Right Controls ── */}
          <div className="flex items-center gap-4 sm:gap-5">

            {/* Desktop sidebar toggle */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open Info Panel"
              className="hidden lg:flex flex-col gap-1.5 cursor-pointer justify-center items-end group p-1"
            >
              <span className="w-6 h-[2px] transition-all group-hover:w-8 bg-[#FAF9F2] group-hover:bg-[#9CB05A]" />
              <span className="w-8 h-[2px] bg-[#FAF9F2] group-hover:bg-[#9CB05A]" />
              <span className="w-5 h-[2px] transition-all group-hover:w-8 bg-[#FAF9F2] group-hover:bg-[#9CB05A]" />
            </button>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center justify-center bg-[#9CB05A] hover:bg-[#8CA04A] text-[#0E1710] text-xs sm:text-sm font-bold font-figtree px-5 sm:px-6 py-2.5 rounded-full shadow-[0_4px_14px_rgba(156,176,90,0.35)] hover:scale-[1.03] active:scale-95 transition-all duration-300"
            >
              Free Consultation
            </Link>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
              className="lg:hidden text-2xl cursor-pointer p-1.5 transition-colors text-[#FAF9F2] hover:text-[#9CB05A]"
            >
              <HiOutlineMenuAlt3 />
            </button>
          </div>

        </div>
      </header>

      {/* ── Mobile Backdrop ── */}
      <div
        className={`fixed inset-0 bg-dark/70 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* ── Mobile Drawer ── */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-[#0E1710] text-[#FAF9F2] border-l border-[#9CB05A]/20 z-[60] shadow-2xl flex flex-col transition-transform duration-500 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-7 py-5 border-b border-[#9CB05A]/15">
          <Image
            src="/Logo1.png"
            alt="VS Tax CPA LLC"
            width={140}
            height={40}
            style={{ width: "auto", height: "auto" }}
            className="object-contain"
          />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl text-[#FAF9F2] hover:text-[#9CB05A] transition-colors cursor-pointer"
          >
            <IoCloseOutline />
          </button>
        </div>

        {/* Mobile Nav Links */}
        <nav className="flex-1 overflow-y-auto px-7 py-5">
          <ul className="flex flex-col gap-1">
            {navLinks.map((item) => {
              const active = isActive(item.href);

              if (item.hasDropdown) {
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => setIsMobileServicesOpen((p) => !p)}
                      className={`w-full flex items-center justify-between text-[15px] font-semibold font-figtree py-3 transition-colors cursor-pointer ${
                        active ? "text-[#9CB05A] font-bold" : "text-[#FAF9F2]/90 hover:text-[#9CB05A]"
                      }`}
                    >
                      {item.name}
                      <FiChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isMobileServicesOpen ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <ul className="pl-4 flex flex-col gap-1 pb-2">
                        <li key="all-services">
                          <Link
                            href="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xs font-bold text-[#9CB05A] block py-2"
                          >
                            ➔ All Services Catalog
                          </Link>
                        </li>
                        {serviceLinks.map((s) => (
                          <li key={s.href}>
                            <Link
                              href={s.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className={`flex items-center gap-2 text-sm py-2 font-medium transition-colors ${
                                pathname === s.href ? "text-[#9CB05A] font-bold" : "text-gray-300 hover:text-[#9CB05A]"
                              }`}
                            >
                              <span className="w-1 h-1 rounded-full bg-[#9CB05A]" />
                              {s.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-[15px] font-semibold font-figtree py-3 block transition-colors border-b border-[#1E2E21] ${
                      active ? "text-[#9CB05A] font-bold" : "text-[#FAF9F2]/90 hover:text-[#9CB05A]"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile CTA */}
        <div className="px-7 py-5 border-t border-[#9CB05A]/15">
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#9CB05A] hover:bg-[#8CA04A] text-[#0E1710] text-center py-3.5 rounded-full font-bold text-sm block transition-all duration-300 shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>

      {/* ── Desktop Info Sidebar Backdrop ── */}
      <div
        className={`fixed inset-0 bg-dark/60 backdrop-blur-sm z-40 transition-opacity duration-300 hidden lg:block ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      />

      {/* ── Desktop Info Sidebar ── */}
      <div
        className={`fixed top-0 right-0 h-full w-[380px] bg-[#0E1710] text-[#FAF9F2] border-l border-[#9CB05A]/20 z-50 shadow-2xl flex flex-col transition-transform duration-500 ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-[#9CB05A]/15">
          <Image
            src="/Logo1.png"
            alt="VS Tax CPA LLC"
            width={160}
            height={45}
            style={{ width: "auto", height: "auto" }}
            className="object-contain"
          />
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="text-2xl text-[#FAF9F2] hover:text-[#9CB05A] transition-colors cursor-pointer"
          >
            <IoCloseOutline />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-8 flex flex-col gap-8">

          {/* About blurb */}
          <div className="flex flex-col gap-3">
            <h4 className="text-lg font-bold font-figtree text-[#FAF9F2] pb-2 border-b border-[#9CB05A]/15">
              VS Tax CPA LLC
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed font-manrope">
              A forward-thinking CPA firm founded by Vethavalli Ramakrishnan, CPA — licensed by the Texas State Board of Public Accountancy. We deliver reliable, accurate, and strategic tax and accounting services for individuals and businesses in Irving, TX and beyond.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold font-figtree text-[#FAF9F2] pb-2 border-b border-[#9CB05A]/15">
              Contact Info
            </h4>
            <div className="flex flex-col gap-4 text-sm font-manrope">
              <div className="flex items-start gap-3">
                <FiPhone className="text-[#9CB05A] mt-0.5 flex-shrink-0" size={14} />
                <div>
                  <p className="text-[#9CB05A] uppercase text-[10px] font-bold tracking-wider mb-1">Phone</p>
                  <a href="tel:+14694716580" className="text-[#FAF9F2] font-semibold hover:text-[#9CB05A] transition">
                    +1 (469) 471-6580
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiMail className="text-[#9CB05A] mt-0.5 flex-shrink-0" size={14} />
                <div>
                  <p className="text-[#9CB05A] uppercase text-[10px] font-bold tracking-wider mb-1">Email</p>
                  <a href="mailto:info@vstaxcpa.com" className="text-[#FAF9F2] font-semibold hover:text-[#9CB05A] transition break-all">
                    info@vstaxcpa.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="text-[#9CB05A] mt-0.5 flex-shrink-0" size={14} />
                <div>
                  <p className="text-[#9CB05A] uppercase text-[10px] font-bold tracking-wider mb-1">Irving, TX Office</p>
                  <p className="text-gray-300 font-medium leading-relaxed">
                    3035 Ivy Hill Lane,<br />Irving, TX 75063
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiClock className="text-[#9CB05A] mt-0.5 flex-shrink-0" size={14} />
                <div>
                  <p className="text-[#9CB05A] uppercase text-[10px] font-bold tracking-wider mb-1">Working Hours</p>
                  <p className="text-gray-300 font-medium">Mon–Fri: 9:00 AM – 5:30 PM CST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold font-figtree text-[#FAF9F2] pb-2 border-b border-[#9CB05A]/15">
              Follow Us
            </h4>
            <div className="flex items-center gap-3">
              {[
                { icon: <FaInstagram />, href: "https://instagram.com/vstaxcpa", label: "Instagram" },
                { icon: <FaFacebookF />, href: "https://facebook.com/Vstaxcpallc", label: "Facebook" },
                { icon: <FaLinkedinIn />, href: "https://linkedin.com/company/vstaxcpa", label: "LinkedIn" },
                { icon: <FaYelp />, href: "https://yelp.com/biz/vs-tax-cpa", label: "Yelp" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-[#9CB05A]/30 text-gray-300 hover:text-[#0E1710] hover:bg-[#9CB05A] hover:border-[#9CB05A] flex items-center justify-center transition-all duration-300 text-sm"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Sidebar CTA */}
        <div className="px-8 py-6 border-t border-[#9CB05A]/15">
          <Link
            href="/contact"
            onClick={() => setIsSidebarOpen(false)}
            className="bg-[#9CB05A] hover:bg-[#8CA04A] text-[#0E1710] text-center py-4 rounded-full font-bold text-sm block transition-all duration-300 shadow-lg"
          >
            Book a Free Tax Strategy Call
          </Link>
        </div>
      </div>
    </>
  );
}