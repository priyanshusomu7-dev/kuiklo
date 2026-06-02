"use client";

import { motion } from "framer-motion";

export default function AppDownload() {
    return (
        <section
            id="download"
            className="relative overflow-hidden bg-[#0C831F] py-[60px] px-6 md:py-[100px] md:px-16"
        >
            {/* Decorative circles */}
            <div
                className="pointer-events-none absolute rounded-full"
                style={{
                    width: "500px",
                    height: "500px",
                    backgroundColor: "rgba(255,255,255,0.05)",
                    top: "-150px",
                    right: "-100px",
                }}
                aria-hidden="true"
            ></div>
            <div
                className="pointer-events-none absolute rounded-full"
                style={{
                    width: "300px",
                    height: "300px",
                    backgroundColor: "rgba(255,255,255,0.04)",
                    bottom: "-80px",
                    left: "-60px",
                }}
                aria-hidden="true"
            ></div>

            {/* Main content */}
            <div className="relative mx-auto max-w-[1280px]">
                <div className="grid grid-cols-1 gap-20 md:grid-cols-[1fr_auto] md:items-center">
                    {/* Left Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        {/* Tag */}
                        <div className="mb-3">
                            <span
                                className="text-[12px] font-bold uppercase tracking-[3px]"
                                style={{ color: "rgba(255,255,255,0.7)" }}
                            >
                                Download
                            </span>
                        </div>

                        {/* Heading */}
                        <h2 className="mb-4 text-[30px] font-black leading-[1.1] text-white md:text-[44px]">
                            Get Kuiklo on<br />
                            Your Phone,<br />
                            Start in <span className="text-[#FFD700]">2 Minutes</span>
                        </h2>

                        {/* Subtext */}
                        <p
                            className="mb-9 max-w-[460px] text-[15px] leading-[1.7] md:text-[17px]"
                            style={{ color: "rgba(255,255,255,0.8)" }}
                        >
                            Download now and get your first order delivered in under 10
                            minutes. Available on Android and iOS. Serving all major areas
                            across Patna.
                        </p>

                        {/* Store Buttons */}
                        <div className="flex flex-col gap-3 md:flex-row">
                            {/* Google Play Button */}
                            <motion.a
                                href="#"
                                className="flex w-full items-center gap-3 rounded-[14px] bg-white px-[22px] py-3.5 transition-all duration-200 ease-out hover:bg-[#F0F0F0] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:translate-y-[-2px] md:w-auto"
                                aria-label="Download Kuiklo on Google Play"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true, margin: "-80px" }}
                            >
                                <span className="text-2xl text-[#1C1C1C]">▶</span>
                                <div>
                                    <div className="text-[11px] font-normal text-[#666666]">
                                        Get it on
                                    </div>
                                    <div className="text-[16px] font-bold text-[#1C1C1C]">
                                        Google Play
                                    </div>
                                </div>
                            </motion.a>

                            {/* App Store Button */}
                            <motion.a
                                href="#"
                                className="flex w-full items-center gap-3 rounded-[14px] bg-white px-[22px] py-3.5 transition-all duration-200 ease-out hover:bg-[#F0F0F0] hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:translate-y-[-2px] md:w-auto"
                                aria-label="Download Kuiklo on the App Store"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                viewport={{ once: true, margin: "-80px" }}
                            >
                                <span className="text-2xl">🍎</span>
                                <div>
                                    <div className="text-[11px] font-normal text-[#666666]">
                                        Download on the
                                    </div>
                                    <div className="text-[16px] font-bold text-[#1C1C1C]">
                                        App Store
                                    </div>
                                </div>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Right Column - QR Card */}
                    <motion.div
                        className="mx-auto flex w-[180px] flex-col items-center rounded-[20px] bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.15)] md:mx-0 md:w-[200px]"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: true, margin: "-80px" }}
                    >
                        {/* QR Code */}
                        <div className="mb-3.5 flex h-[140px] w-[140px] flex-col items-center justify-center rounded-[12px] border border-[#E8E8E8] bg-[#F7F7F7]">
                            <span className="text-[48px] text-[#999999]">▦</span>
                            <span className="mt-2 text-[11px] text-[#999999]">QR Code</span>
                        </div>

                        {/* Divider */}
                        <div className="mb-3.5 w-full border-t border-[#E8E8E8]"></div>

                        {/* Label */}
                        <p className="text-center text-[12px] font-semibold leading-[1.5] text-[#666666]">
                            Scan to download<br />
                            Kuiklo App
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
