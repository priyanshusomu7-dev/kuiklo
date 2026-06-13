"use client";

import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
});

type Step = {
  number: string;
  icon: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    number: "01",
    icon: "📱",
    title: "Open the App",
    description:
      "Download Kuiklo on Android or iOS. Enter your address and instantly browse 2,000+ products available in your area.",
  },
  {
    number: "02",
    icon: "🛒",
    title: "Add to Cart",
    description:
      "Pick exactly what you need — fresh vegetables, dairy, snacks or household essentials. No minimum order, ever.",
  },
  {
    number: "03",
    icon: "⚡",
    title: "Delivered in 10 Min",
    description:
      "Our dark store network across your city ensures your order leaves instantly and arrives at your door in under 10 minutes.",
  },
];

const ConnectorArrow = ({
  index,
  isDesktop,
}: {
  index: number;
  isDesktop: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
    viewport={{ once: true }}
    className={
      isDesktop ? "hidden md:flex w-[60px] items-center justify-center" : "md:hidden flex justify-center my-2"
    }
  >
    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C8E6C9] bg-[#E8F5E9]">
      <span
        className="text-[16px] font-bold text-[#0C831F]"
        aria-hidden="true"
      >
        {isDesktop ? "→" : "↓"}
      </span>
    </div>
  </motion.div>
);

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-[#F7F7F7] py-[60px] md:py-[100px] px-6 md:px-16"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14"
          style={{ fontFamily: plusJakartaSans.style.fontFamily }}
        >
          <div className="mb-4">
            <span className="text-[12px] font-bold uppercase tracking-[3px] text-[#0C831F]">
              Simple Process
            </span>
          </div>
          <h2 className="mb-4 text-[28px] md:text-[40px] font-black leading-tight text-[#1C1C1C]">
            Order in Seconds.
            <br />
            Delivered in Minutes.
          </h2>
          <p className="max-w-[500px] text-[17px] font-normal leading-[1.6] text-[#666666]">
            We have cut the complexity. Three simple steps and your groceries
            are on the way.
          </p>
        </motion.div>

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:flex items-stretch gap-0">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-stretch gap-0 flex-1">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-60px" }}
                className="relative flex-1 rounded-[20px] border border-[#E8E8E8] bg-white p-9 overflow-hidden"
                style={{ fontFamily: plusJakartaSans.style.fontFamily }}
              >
                <div
                  aria-hidden="true"
                  className="absolute top-4 right-5 text-[64px] font-black text-[#E8F5E9]"
                >
                  {step.number}
                </div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F5E9]">
                  <span aria-hidden="true" className="text-[26px]">
                    {step.icon}
                  </span>
                </div>
                <h3 className="mb-2 text-[20px] font-bold text-[#1C1C1C]">
                  {step.title}
                </h3>
                <p className="text-[15px] font-normal leading-[1.7] text-[#666666]">
                  {step.description}
                </p>
              </motion.div>
              {index < steps.length - 1 && (
                <ConnectorArrow index={index} isDesktop={true} />
              )}
            </div>
          ))}
        </div>

        {/* MOBILE LAYOUT */}
        <div className="md:hidden flex flex-col">
          {steps.map((step, index) => (
            <div key={step.number}>
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -4 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                viewport={{ once: true, margin: "-60px" }}
                className="relative rounded-[20px] border border-[#E8E8E8] bg-white p-7 overflow-hidden"
                style={{ fontFamily: plusJakartaSans.style.fontFamily }}
              >
                <div
                  aria-hidden="true"
                  className="absolute top-4 right-5 text-[48px] font-black text-[#E8F5E9]"
                >
                  {step.number}
                </div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#E8F5E9]">
                  <span aria-hidden="true" className="text-[26px]">
                    {step.icon}
                  </span>
                </div>
                <h3 className="mb-2 text-[18px] font-bold text-[#1C1C1C]">
                  {step.title}
                </h3>
                <p className="text-[15px] font-normal leading-[1.7] text-[#666666]">
                  {step.description}
                </p>
              </motion.div>
              {index < steps.length - 1 && (
                <ConnectorArrow index={index} isDesktop={false} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
