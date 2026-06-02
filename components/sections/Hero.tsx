"use client";

import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["400", "600", "700", "800"],
    display: "swap",
});

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const rightColumnVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, delay: 0.2 },
    },
};

const floatVariants = {
    animate: {
        y: [0, -8, 0],
        transition: {
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
        },
    },
};

export default function Hero() {
    const [imageError, setImageError] = useState(false);

    return (
        <section className="min-h-screen bg-white pt-[120px] pb-20 px-6 md:px-16">
            <div className="mx-auto max-w-[1280px]">
                {/* @ts-ignore - Framer Motion className compatibility */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-[55%_45%] gap-20 items-center"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* LEFT COLUMN */}
                    {/* @ts-ignore - Framer Motion className compatibility */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col"
                    >
                        {/* BADGE */}
                        {/* @ts-ignore - Framer Motion className compatibility */}
                        <motion.div
                            variants={itemVariants}
                            className="mb-6 md:mb-6 inline-flex w-fit"
                        >
                            <div className="flex items-center gap-2 rounded-full border border-[#0C831F] bg-[#E8F5E9] px-3 py-2">
                                <div className="relative h-2 w-2">
                                    <div className="absolute inset-0 rounded-full bg-[#0C831F] animate-pulse"></div>
                                </div>
                                <span
                                    className="text-[13px] font-semibold text-[#0C831F]"
                                    style={{ fontFamily: plusJakartaSans.style.fontFamily }}
                                >
                                    Now delivering in Patna
                                </span>
                            </div>
                        </motion.div>

                        {/* H1 HEADLINE */}
                        {/* @ts-ignore - Framer Motion className compatibility */}
                        <motion.h1
                            variants={itemVariants}
                            style={{ fontFamily: plusJakartaSans.style.fontFamily }}
                            className="mb-6 text-[36px] md:text-[56px] font-black leading-[1.1] text-[#1C1C1C]"
                        >
                            Groceries in{" "}
                            <span className="text-[#0C831F]">10 Minutes.</span>{" "}
                            Right at Your Door.
                        </motion.h1>

                        {/* SUBTEXT */}
                        {/* @ts-ignore - Framer Motion className compatibility */}
                        <motion.p
                            variants={itemVariants}
                            style={{ fontFamily: plusJakartaSans.style.fontFamily }}
                            className="mb-9 max-w-[480px] text-[16px] md:text-[18px] font-normal leading-[1.7] text-[#666666]"
                        >
                            From fresh vegetables to daily essentials — Kuiklo delivers it all
                            across Patna before your chai gets cold. No minimum order, always
                            fresh, always fast.
                        </motion.p>

                        {/* CTA BUTTONS */}
                        {/* @ts-ignore - Framer Motion className compatibility */}
                        <motion.div
                            variants={itemVariants}
                            className="mb-12 flex flex-col md:flex-row gap-3 md:gap-3"
                        >
                            <a
                                href="#"
                                aria-label="Download on Google Play"
                                className="flex items-center justify-center md:justify-start gap-2.5 rounded-[12px] bg-[#1C1C1C] px-6 py-3.5 transition-all duration-200 hover:bg-[#333333] hover:-translate-y-0.5"
                                style={{ fontFamily: plusJakartaSans.style.fontFamily }}
                            >
                                <span className="text-lg">▶</span>
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-normal opacity-70 text-white">
                                        Get it on
                                    </span>
                                    <span className="text-[16px] font-bold text-white">
                                        Google Play
                                    </span>
                                </div>
                            </a>

                            <a
                                href="#"
                                aria-label="Download on App Store"
                                className="flex items-center justify-center md:justify-start gap-2.5 rounded-[12px] bg-[#1C1C1C] px-6 py-3.5 transition-all duration-200 hover:bg-[#333333] hover:-translate-y-0.5"
                                style={{ fontFamily: plusJakartaSans.style.fontFamily }}
                            >
                                <span className="text-lg">🍎</span>
                                <div className="flex flex-col">
                                    <span className="text-[11px] font-normal opacity-70 text-white">
                                        Download on the
                                    </span>
                                    <span className="text-[16px] font-bold text-white">
                                        App Store
                                    </span>
                                </div>
                            </a>
                        </motion.div>

                        {/* TRUST STATS */}
                        {/* @ts-ignore - Framer Motion className compatibility */}
                        <motion.div
                            variants={itemVariants}
                            style={{ fontFamily: plusJakartaSans.style.fontFamily }}
                            className="flex flex-wrap items-center gap-6 md:gap-6"
                        >
                            <div className="flex flex-col">
                                <span className="text-[15px] font-bold text-[#1C1C1C]">
                                    ⚡ 10 min delivery
                                </span>
                                <span className="text-[12px] font-normal text-[#666666]">
                                    Lightning fast
                                </span>
                            </div>

                            <div className="hidden md:block w-px h-8 bg-[#E8E8E8]"></div>

                            <div className="flex flex-col">
                                <span className="text-[15px] font-bold text-[#1C1C1C]">
                                    🛒 No minimum order
                                </span>
                                <span className="text-[12px] font-normal text-[#666666]">
                                    Order anything
                                </span>
                            </div>

                            <div className="hidden md:block w-px h-8 bg-[#E8E8E8]"></div>

                            <div className="flex flex-col">
                                <span className="text-[15px] font-bold text-[#1C1C1C]">
                                    ⭐ 4.8 rated app
                                </span>
                                <span className="text-[12px] font-normal text-[#666666]">
                                    Trusted by many
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT COLUMN - PHONE MOCKUP */}
                    {/* @ts-ignore - Framer Motion className compatibility */}
                    <motion.div
                        variants={rightColumnVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex justify-center items-center md:justify-center"
                    >
                        <div className="relative w-full max-w-[280px] md:max-w-[320px]">
                            <div className="rounded-[32px] bg-[#F7F7F7] p-6 flex justify-center items-center md:p-10">
                                <div className="relative w-[260px] h-[520px] overflow-hidden rounded-[36px] border border-[#E8E8E8] bg-white shadow-[0_20px_60px_rgba(0,0,0,0.10)]">
                                    {!imageError ? (
                                        <Image
                                            src="/images/app-mockup.png"
                                            alt="Kuiklo app — grocery delivery in Patna in 15 minutes"
                                            width={260}
                                            height={520}
                                            onError={() => setImageError(true)}
                                            priority
                                            style={{ objectFit: "cover", objectPosition: "top" }}
                                            className="w-full h-full"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-green-100">
                                            <div className="text-center">
                                                <div className="text-6xl mb-4">📱</div>
                                                <p className="text-sm text-gray-600">App Screenshot</p>
                                                <p className="text-xs text-gray-500 mt-2">Place app-mockup.png in public/images</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* FLOATING BADGE 1 - TOP RIGHT */}
                            {/* @ts-ignore - Framer Motion className compatibility */}
                            <motion.div
                                variants={floatVariants}
                                animate="animate"
                                className="absolute -top-6 -right-24 hidden md:block"
                            >
                                <div className="rounded-[14px] border border-[#E8E8E8] bg-white px-3.5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                                    <span
                                        className="text-[13px] font-semibold text-[#1C1C1C]"
                                        style={{ fontFamily: plusJakartaSans.style.fontFamily }}
                                    >
                                        ⚡ Order placed! Arriving in 10 min
                                    </span>
                                </div>
                            </motion.div>

                            {/* FLOATING BADGE 2 - BOTTOM LEFT */}
                            {/* @ts-ignore - Framer Motion className compatibility */}
                            <motion.div
                                variants={floatVariants}
                                animate="animate"
                                transition={{
                                    duration: 3,
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    delay: 1.5,
                                }}
                                className="absolute -bottom-8 -left-6 hidden md:block"
                            >
                                <div className="rounded-[14px] border border-[#E8E8E8] bg-white px-3.5 py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.08)]">
                                    <span
                                        className="text-[13px] font-semibold text-[#1C1C1C]"
                                        style={{ fontFamily: plusJakartaSans.style.fontFamily }}
                                    >
                                        ⭐ 4.8 · 5,000+ reviews
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
