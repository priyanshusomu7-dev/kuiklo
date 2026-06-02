"use client";

import { motion } from "framer-motion";

type Testimonial = {
    initials: string;
    avatarBg: string;
    name: string;
    location: string;
    review: string;
};

const testimonials: Testimonial[] = [
    {
        initials: "RP",
        avatarBg: "#0C831F",
        name: "Rahul Prasad",
        location: "Boring Road, Patna",
        review:
            "Ordered at 11pm and it arrived in 8 minutes. I literally could not believe it. This is what quick commerce should feel like in Patna.",
    },
    {
        initials: "SM",
        avatarBg: "#FFB800",
        name: "Sunita Mishra",
        location: "Rajendra Nagar, Patna",
        review:
            "Fresh vegetables every single morning. The quality is genuinely better than my local market and so much more convenient.",
    },
    {
        initials: "AK",
        avatarBg: "#1976D2",
        name: "Amit Kumar",
        location: "Kankarbagh, Patna",
        review:
            "Finally a grocery app that actually knows Patna. Fast, reliable, and the prices are fair. Already recommended it to 10 of my friends.",
    },
];

export default function Testimonials() {
    return (
        <section id="reviews" className="bg-[#F7F7F7] py-24 md:py-[100px] px-6 md:px-16">
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
                            Reviews
                        </span>
                    </div>
                    <h2 className="mb-4 text-[28px] font-black leading-tight text-[#1C1C1C] md:text-[40px] md:mb-6">
                        Patna Loves Kuiklo
                    </h2>
                    <p className="max-w-[500px] text-[17px] font-normal leading-relaxed text-[#666666]">
                        Don't take our word for it — here is what Patna residents are
                        saying.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="flex flex-col rounded-[16px] border border-[#E8E8E8] bg-white p-7 transition-all duration-[250ms] ease-out hover:border-[#0C831F] hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                ease: "easeOut",
                                delay: index * 0.12,
                            }}
                            viewport={{ once: true, margin: "-60px" }}
                            whileHover={{ y: -4 }}
                        >
                            {/* Star Rating */}
                            <div className="mb-3.5" aria-label="5 out of 5 stars">
                                <span className="text-[14px] tracking-[2px] text-[#FFB800]">
                                    ★★★★★
                                </span>
                            </div>

                            {/* Review Text */}
                            <p className="mb-5 text-[14px] italic leading-[1.75] text-[#444444] md:text-[15px]">
                                "{testimonial.review}"
                            </p>

                            {/* Divider */}
                            <div className="mb-4 border-t border-[#E8E8E8]"></div>

                            {/* Author Row */}
                            <div className="flex items-center gap-3">
                                {/* Avatar */}
                                <div
                                    className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full"
                                    style={{ backgroundColor: testimonial.avatarBg }}
                                >
                                    <span
                                        className="text-[14px] font-bold text-white"
                                        aria-hidden="true"
                                    >
                                        {testimonial.initials}
                                    </span>
                                </div>

                                {/* Author Info */}
                                <div>
                                    <p className="text-[14px] font-semibold text-[#1C1C1C]">
                                        {testimonial.name}
                                    </p>
                                    <p className="text-[12px] text-[#666666]">
                                        {testimonial.location}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
