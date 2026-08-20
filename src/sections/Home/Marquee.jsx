"use client";

export default function Marquee() {
  const marqueeItems = [
    "Real Estate",
    "Restaurants",
    "Dental Practices",
    "Contractors",
    "IT & Tech Startups",
    "Staffing Companies",
    "Manufacturing",
    "Artists & Creators",
    "Tax Planning",
    "Bookkeeping",
    "Gusto Payroll",
    "Fractional CFO",
  ];

  // Repeat items to ensure smooth infinite wrap scrolling
  const repeatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <section
      className="py-4 overflow-hidden relative z-20"
      style={{ background: "linear-gradient(90deg, #1B2F1F 0%, #2d5234 50%, #1B2F1F 100%)" }}
    >
      <div className="marquee-container flex">
        <div className="marquee-content flex gap-10 items-center">
          {repeatedItems.map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              {/* Olive gold bullet */}
              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: "#9CB05A" }} />
              <span
                className="text-2xl font-extrabold font-figtree uppercase tracking-wider"
                style={{ color: "#FAF9F4" }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
