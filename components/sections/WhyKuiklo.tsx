"use client";

import { motion } from "framer-motion";

type Feature = {
    icon: string;
    title: string;
    description: string;
};

const features: Feature[] = [
    {
        icon: "⚡",
        title: "10-Min Guarantee",
        description:
            "Our dark stores are placed strategically across Patna so you are always within 2km of fresh, fast delivery.",
    },
    {
        icon: "🌿",
        title: "Freshness Promise",
        description:
            "Every product is quality-checked before it leaves our store. No stale goods, no compromises, ever.",
    },
    {
        icon: "📍",
        title: "Live Order Tracking",
        description:
            "Watch your order move from our dark store to your doorstep in real time. No guessing, just transparency.",
    },
    {
        icon: "🛒",
        title: "Zero Minimum Order",
        description:
            "Need just one lemon at midnight? Order it. No minimums, no hidden charges, no guilt whatsoever.",
    },
    {
        icon: "🏷️",
        title: "Best Prices Always",
        description:
            "We partner directly with local Patna suppliers to give you competitive prices without cutting quality.",
    },
    {
        icon: "🤝",
        title: "Local & Trusted",
        description:
            "Born in Patna. Our team knows your lanes, your brands and your love for quality Bihar produce.",
    },
];

export default function WhyKuiklo() {
    return (
        <section id="features" className="bg-white py-24 md:py-[100px] px-6 md:px-16">
            <div className="mx-auto max-w-[1280px]">
                {/* Section Header */}
                <motion.div
                    className="mb-14 md:mb-14"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-80px" }}
                >
                    <div className="mb-3 md:mb-4">
                        <span className="text-[12px] font-bold tracking-[3px] text-[#0C831F] uppercase">
                            Why Kuiklo
                        </span>
                    </div>
                    <h2 className="mb-4 text-[28px] font-black leading-tight text-[#1C1C1C] md:text-[40px] md:mb-6">
                        Built for Patna.
                        <br />
                        Built Different.
                    </h2>
                    <p className="max-w-[500px] text-[17px] font-normal leading-relaxed text-[#666666]">
                        Local knowledge meets startup speed. Here is what makes Kuiklo
                        different from everything else.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="overflow-hidden rounded-[20px] border border-[#E8E8E8] bg-[#E8E8E8]">
                    <div className="grid grid-cols-1 gap-px md:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="relative bg-white p-7 md:p-9 transition-colors duration-200 ease-out hover:bg-[#F7F7F7]"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
                                viewport={{ once: true, margin: "-60px" }}
                                whileHover={{ scale: 1.01 }}
                            >
                                {/* Icon Wrapper */}
                                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-[12px] bg-[#E8F5E9] md:mb-5">
                                    <span className="text-[22px]" aria-hidden="true">
                                        {feature.icon}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="mb-2.5 text-[17px] font-bold text-[#1C1C1C] md:text-[18px]">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-[14px] font-normal leading-[1.7] text-[#666666] md:text-[15px]">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
