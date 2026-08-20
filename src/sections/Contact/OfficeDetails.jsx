"use client";

import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock } from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaYelp } from "react-icons/fa";

export default function OfficeDetails() {
  const office = {
    title: "VS Tax CPA LLC — Irving Office",
    address: "3035 Ivy Hill Lane, Irving, TX 75063",
    phone: "+1 (469) 471-6580",
    email: "info@vstaxcpa.com",
    hours: "Mon–Fri: 9:00 AM – 5:30 PM CST",
  };

  const socials = [
    { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com/vstaxcpa" },
    { name: "Facebook", icon: <FaFacebookF />, href: "https://facebook.com/Vstaxcpallc" },
    { name: "Yelp", icon: <FaYelp />, href: "https://yelp.com/biz/vs-tax-cpa" },
  ];

  return (
    <section id="office" className="py-20 bg-bg-light/40">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">

        {/* Office Details Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center rounded-full bg-primary/8 text-primary px-4 py-2 text-xs font-bold uppercase tracking-widest border border-primary/15 mb-4">
            Our Location
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-dark leading-tight font-figtree tracking-tight">
            Visit or Contact Our Irving, TX Office
          </h2>
          <p className="text-body-text text-sm leading-relaxed mt-3">
            Serving individuals and business owners across Irving, Dallas-Fort Worth, and nationwide through our secure virtual client portal.
          </p>
        </div>

        {/* Card & Map Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto w-full">
          
          {/* Office Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-white border border-border-light rounded-3xl p-8 shadow-sm flex flex-col justify-between gap-6"
          >
            <div>
              <div className="flex items-center gap-3 pb-4 border-b border-border-light mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/8 text-primary flex items-center justify-center flex-shrink-0">
                  <FiMapPin size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-figtree text-dark">{office.title}</h3>
                  <p className="text-xs text-primary font-bold">Licensed Texas CPA Firm</p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex items-start gap-3 text-sm">
                  <FiMapPin className="text-secondary mt-1 flex-shrink-0" size={16} />
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Address</span>
                    <span className="text-body-text font-medium leading-relaxed">{office.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <FiPhone className="text-secondary mt-1 flex-shrink-0" size={16} />
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Phone Number</span>
                    <a href={`tel:${office.phone.replace(/[^0-9+]/g, '')}`} className="text-dark font-bold hover:text-primary transition-colors">
                      {office.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <FiMail className="text-secondary mt-1 flex-shrink-0" size={16} />
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Official Email</span>
                    <a href={`mailto:${office.email}`} className="text-dark font-bold hover:text-primary transition-colors break-all">
                      {office.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-sm">
                  <FiClock className="text-secondary mt-1 flex-shrink-0" size={16} />
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-0.5">Business Hours</span>
                    <span className="text-body-text font-medium">{office.hours}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Connect */}
            <div className="pt-6 border-t border-border-light">
              <span className="text-xs font-bold text-dark uppercase tracking-wider block mb-3 font-figtree">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-xs font-semibold px-4 py-2 rounded-full border border-border-light text-slate-600 hover:text-white hover:bg-primary hover:border-primary transition-all duration-300"
                  >
                    <span>{s.icon}</span>
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl overflow-hidden border border-border-light shadow-xl min-h-[380px] relative bg-slate-100"
          >
            <iframe
              src="https://maps.google.com/maps?q=3035+Ivy+Hill+Lane,+Irving,+TX+75063&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VS Tax CPA LLC Irving Office Map"
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
