"use client";

import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

const stats = [
  { icon: "⚡", text: "10-Minute Delivery" },
  { icon: "🌿", text: "Always Fresh" },
  { icon: "🛒", text: "₹0 Minimum Order" },
  { icon: "📍", text: "Live Order Tracking" },
  { icon: "🏪", text: "2,000+ Products" },
];

export default function TrustBar() {
  return (
    <>
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .marquee-scroll {
          animation: marquee 18s linear infinite;
        }
      `}</style>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.5 }}
        role="region"
        aria-label="Trust indicators"
        style={{
          width: "100%",
          borderTop: "1px solid #C8E6C9",
          borderBottom: "1px solid #C8E6C9",
          backgroundColor: "#E8F5E9",
          padding: "0",
        }}
      >
        {/* DESKTOP VIEW */}
        <div className="hidden md:block">
          <div className="mx-auto flex h-[52px] max-w-[1280px] items-center justify-center px-16">
            <div
              className="flex items-center justify-center gap-8"
              style={{ fontFamily: plusJakartaSans.style.fontFamily }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-base">
                    {stat.icon}
                  </span>
                  <span className="text-sm font-semibold text-[#1C1C1C]">
                    {stat.text}
                  </span>

                  {index < stats.length - 1 && (
                    <div className="mx-8 h-5 w-px bg-[#C8E6C9]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE VIEW - MARQUEE */}
        <div className="md:hidden">
          <div className="flex h-[52px] items-center overflow-hidden">
            <div
              className="marquee-scroll flex gap-6 whitespace-nowrap"
              style={{ fontFamily: plusJakartaSans.style.fontFamily }}
            >
              {/* First set of items */}
              {stats.map((stat, index) => (
                <div key={`first-${index}`} className="flex flex-shrink-0 items-center gap-2">
                  <span aria-hidden="true" className="text-base">
                    {stat.icon}
                  </span>
                  <span className="text-sm font-semibold text-[#1C1C1C]">
                    {stat.text}
                  </span>
                </div>
              ))}

              {/* Duplicate set for seamless loop */}
              {stats.map((stat, index) => (
                <div key={`second-${index}`} className="flex flex-shrink-0 items-center gap-2">
                  <span aria-hidden="true" className="text-base">
                    {stat.icon}
                  </span>
                  <span className="text-sm font-semibold text-[#1C1C1C]">
                    {stat.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
