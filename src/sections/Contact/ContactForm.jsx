"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiCheck } from "react-icons/fi";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    "Tax Compliance (Individual & Business Returns)",
    "Tax Planning & Strategic Advisory",
    "Business Entity Formation (LLC / S-Corp)",
    "Payroll Set Up & Management (Gusto)",
    "Bookkeeping & Financial Statements",
    "Fractional CFO Services",
    "IRS Representation & Tax Relief",
    "Sales Tax & 1099 Filing",
    "General Enquiry / Other",
  ];

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 500);
  };

  return (
    <section className="pt-28 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left: Form intro */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:sticky top-32">
            <div>
              <span className="inline-flex items-center rounded-full bg-primary/8 text-primary px-4 py-2 text-xs font-bold uppercase tracking-widest border border-primary/15 mb-4">
                Free Tax Consultation
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight font-figtree tracking-tight mb-4">
                Request a Free Tax Strategy Call
              </h2>
              <p className="text-body-text text-sm leading-relaxed">
                Tell us about your tax situation or business needs. Vethavalli Ramakrishnan, CPA will personally review your inquiry and reach out within 1 business day.
              </p>
            </div>

            {/* Trust signals */}
            <div className="flex flex-col gap-3 mt-4">
              {[
                "100% confidential & secure",
                "Direct conversation with licensed CPA",
                "Fast response within 1 business day",
                "Virtual & phone consultations available",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-dark font-medium">
                  <span className="w-5 h-5 rounded-full bg-secondary/15 text-primary flex items-center justify-center flex-shrink-0 text-[10px]">
                    <FiCheck />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-bg-light/60 border border-border-light rounded-3xl p-16 text-center flex flex-col items-center gap-5"
              >
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center text-white text-3xl shadow-lg shadow-primary/25">
                  <FiCheck />
                </div>
                <h3 className="text-2xl font-extrabold font-figtree text-dark">Thank You for Reaching Out!</h3>
                <p className="text-body-text text-sm max-w-md leading-relaxed">
                  Your consultation request has been received. Vethavalli Ramakrishnan, CPA will review your details and contact you via email or phone within one business day.
                </p>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
                className="bg-bg-light/40 border border-border-light rounded-3xl p-8 md:p-10 flex flex-col gap-6 shadow-sm"
              >
                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-dark uppercase tracking-wider">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Smith"
                      className="bg-white border border-border-light rounded-xl px-4 py-3.5 text-sm text-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-dark uppercase tracking-wider">Company / Entity Name</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="e.g. Acme Ventures LLC (optional)"
                      className="bg-white border border-border-light rounded-xl px-4 py-3.5 text-sm text-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-dark uppercase tracking-wider">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. john@example.com"
                      className="bg-white border border-border-light rounded-xl px-4 py-3.5 text-sm text-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-dark uppercase tracking-wider">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="e.g. (469) 123-4567"
                      className="bg-white border border-border-light rounded-xl px-4 py-3.5 text-sm text-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all"
                    />
                  </div>
                </div>

                {/* Service selector */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-dark uppercase tracking-wider">Service Needed</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="bg-white border border-border-light rounded-xl px-4 py-3.5 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all cursor-pointer"
                  >
                    <option value="">Select a service category...</option>
                    {services.map((s, idx) => (
                      <option key={idx} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-dark uppercase tracking-wider">How Can We Help You? (Brief Description)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us a little about your tax situation, current deadlines, or what you'd like to discuss during the call..."
                    className="bg-white border border-border-light rounded-xl px-4 py-3.5 text-sm text-dark placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary transition-all resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-3 bg-primary hover:bg-secondary text-white text-base font-bold font-figtree pl-8 pr-3 py-4 rounded-full shadow-lg hover:scale-[1.01] active:scale-95 transition-all duration-300 self-start mt-2 cursor-pointer"
                >
                  <span>Submit Consultation Request</span>
                  <span className="bg-white text-dark p-3 rounded-full flex items-center justify-center group-hover:translate-x-1 duration-300 transition-transform">
                    <FiSend size={14} />
                  </span>
                </button>
              </motion.form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
