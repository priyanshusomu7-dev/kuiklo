"use client";

import { motion } from "framer-motion";
import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";

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
    return (
        <section
            className="hero-section min-h-screen pt-[120px] pb-20 px-6 md:px-16"
            style={{ background: 'linear-gradient(135deg, #F0FFF4 0%, #FFFFFF 35%, #FFFBEB 65%, #F0FFF4 100%)' }}
        >
            <div className="hero-blob-1" />
            <div className="hero-blob-2" />
            <div className="hero-inner mx-auto max-w-[1280px]">
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
                            <div
                                className="flex items-center gap-2"
                                style={{
                                    background: 'linear-gradient(135deg, #E8F5E9, #F1F8E9)',
                                    border: '1.5px solid #0C831F',
                                    boxShadow: '0 4px 16px rgba(12,131,31,0.2)',
                                    padding: '8px 18px',
                                    borderRadius: '50px'
                                }}
                            >
                                <div className="relative h-2 w-2">
                                    <div
                                        className="absolute inset-0 rounded-full"
                                        style={{
                                            background: '#0C831F',
                                            boxShadow: '0 0 0 3px rgba(12,131,31,0.2)',
                                            animation: 'pulse 2s infinite'
                                        }}
                                    ></div>
                                </div>
                                <span
                                    className="text-[13px] font-bold text-[#0C831F]"
                                    style={{ fontFamily: plusJakartaSans.style.fontFamily }}
                                >
                                    Now delivering near you
                                </span>
                            </div>
                        </motion.div>

                        {/* H1 HEADLINE */}
                        {/* @ts-ignore - Framer Motion className compatibility */}
                        <motion.h1
                            variants={itemVariants}
                            style={{ fontFamily: plusJakartaSans.style.fontFamily }}
                            className="mb-6 text-[36px] md:text-[64px] font-[800] leading-[1.05] text-[#1C1C1C]"
                        >
                            Groceries in{" "}
                            <span className="text-[#0C831F]">10 Minutes.</span>{" "}
                            <span className="text-[#1C1C1C]">Right at Your Door.</span>
                        </motion.h1>

                        {/* SUBTEXT */}
                        {/* @ts-ignore - Framer Motion className compatibility */}
                        <motion.p
                            variants={itemVariants}
                            style={{ fontFamily: plusJakartaSans.style.fontFamily }}
                            className="mb-9 max-w-[480px] text-[16px] md:text-[18px] font-normal leading-[1.7] text-[#666666]"
                        >
                            From fresh vegetables to daily essentials — Kuiklo delivers it all
                            straight to your door before your chai gets cold. No minimum order, always
                            fresh, always fast.
                        </motion.p>

                        {/* CTA BUTTONS */}
                        {/* @ts-ignore - Framer Motion className compatibility */}
                        <motion.div
                            variants={itemVariants}
                            className="mb-12 flex flex-col md:flex-row gap-3 md:gap-3"
                        >
                            <a
                                href="#download"
                                aria-label="Download on Google Play"
                                className="flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] active:scale-95 active:translate-y-0"
                            >
                                <Image
                                    src="/images/google-play-badge.svg"
                                    alt="Get it on Google Play"
                                    width={160}
                                    height={53}
                                    className="h-[53px] w-[160px]"
                                />
                            </a>

                            <a
                                href="#download"
                                aria-label="Download on App Store"
                                className="flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:drop-shadow-[0_8px_16px_rgba(0,0,0,0.15)] active:scale-95 active:translate-y-0"
                            >
                                <Image
                                    src="/images/app-store-badge.svg"
                                    alt="Download on the App Store"
                                    width={160}
                                    height={53}
                                    className="h-[53px] w-[160px]"
                                />
                            </a>
                        </motion.div>

                        {/* TRUST STATS */}
                        {/* @ts-ignore - Framer Motion className compatibility */}
                        <motion.div
                            variants={itemVariants}
                            style={{ fontFamily: plusJakartaSans.style.fontFamily }}
                            className="flex flex-wrap items-center gap-[12px]"
                        >
                            <div className="hero-stat-pill hero-stat-green">
                                ⚡ 10 min delivery
                            </div>

                            <div className="hero-stat-pill hero-stat-yellow">
                                🛒 No minimum order
                            </div>

                            <div className="hero-stat-pill hero-stat-blue">
                                ⭐ 4.8 rated app
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
                        className="flex justify-center items-center"
                    >
                        <div
                            className="relative flex justify-center items-center"
                            style={{
                                background: 'linear-gradient(145deg, #E8F5E9 0%, #F1F8E9 50%, #FFFDE7 100%)',
                                borderRadius: '40px',
                                padding: '48px 40px',
                                border: '1px solid rgba(12,131,31,0.1)',
                                boxShadow: '0 20px 60px rgba(12,131,31,0.08), 0 4px 20px rgba(0,0,0,0.04)'
                            }}
                        >
                            <div
                                className="phone-float relative origin-center scale-[0.85] lg:scale-100 transition-transform duration-300"
                                style={{
                                    width: '280px',
                                    height: '620px',
                                    background: '#000000',
                                    borderRadius: '50px',
                                    boxShadow: 'inset 0 0 2px 2px #505054, inset 0 0 0 6px #1A1A1D, 0 40px 80px rgba(0,0,0,0.5), 0 20px 40px rgba(0,0,0,0.3)',
                                    padding: '10px',
                                    overflow: 'visible'
                                }}
                            >
                                {/* SCREEN CONTAINER */}
                                <div className="relative w-full h-full bg-[#0C831F] rounded-[40px] overflow-hidden border border-[#111]">
                                    {/* APP SCREENSHOT (No cropping because screen matches 722x1600 aspect ratio) */}
                                    <Image
                                        src="/images/app-mockup.png"
                                        alt="Kuiklo app home screen"
                                        fill
                                        style={{ objectFit: 'cover', objectPosition: 'top' }}
                                        priority
                                    />
                                </div>
                            </div>

                            {/* FLOATING BADGE 1 - TOP RIGHT */}
                            {/* @ts-ignore - Framer Motion className compatibility */}
                            <motion.div
                                variants={floatVariants}
                                animate="animate"
                                className="absolute -top-6 -right-16 md:-right-24 hidden md:block z-20"
                            >
                                <div
                                    className="rounded-[14px] bg-white px-4 py-2.5"
                                    style={{
                                        border: '1px solid #E8E8E8',
                                        borderLeft: '3px solid #0C831F',
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                                    }}
                                >
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
                                className="absolute -bottom-8 -left-4 md:-left-6 hidden md:block z-20"
                            >
                                <div
                                    className="rounded-[14px] bg-white px-4 py-2.5"
                                    style={{
                                        border: '1px solid #E8E8E8',
                                        borderLeft: '3px solid #FFB800',
                                        boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                                    }}
                                >
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
