"use client";

import { motion } from "framer-motion";

type SocialLink = {
    icon: string;
    label: string;
    href: string;
};

const socialLinks: SocialLink[] = [
    { icon: "𝕏", label: "Twitter", href: "#" },
    { icon: "📷", label: "Instagram", href: "#" },
    { icon: "f", label: "Facebook", href: "#" },
    { icon: "in", label: "LinkedIn", href: "#" },
];

const companyLinks = [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Partner with Us", href: "#" },
];

const supportLinks = [
    { label: "Help Center", href: "#" },
    { label: "Contact Us", href: "#" },
    { label: "Track My Order", href: "#" },
    { label: "Refund Policy", href: "#" },
    { label: "Report an Issue", href: "#" },
];

const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Accessibility", href: "#" },
    { label: "Sitemap", href: "#" },
];

export default function Footer() {
    return (
        <footer role="contentinfo" className="border-t border-[#E8E8E8] bg-[#F7F7F7]">
            <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        .pulse-dot {
          animation: pulse 2s infinite;
        }
      `}</style>

            {/* Main footer content */}
            <motion.div
                className="mx-auto max-w-[1280px] px-6 py-16 md:px-16 md:py-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, margin: "-60px" }}
            >
                <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4">
                    {/* Column 1 - Brand */}
                    <div className="col-span-1 sm:col-span-2 md:col-span-1">
                        {/* Logo */}
                        <div className="mb-3 flex items-center gap-1 text-[20px] font-black text-[#1C1C1C]">
                            <span className="text-[#0C831F]">⚡</span>
                            <span>Kuiklo</span>
                        </div>

                        {/* Tagline */}
                        <p className="mb-5 max-w-[260px] text-[14px] leading-[1.7] text-[#666666]">
                            10-minute grocery delivery in Patna. Fresh products, trusted
                            brands, zero minimums — delivered at startup speed.
                        </p>

                        {/* Social buttons */}
                        <div className="flex gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="flex h-9 w-9 items-center justify-center rounded-[8px] border border-[#E8E8E8] bg-white text-[#666666] transition-all duration-200 ease-out hover:border-[#0C831F] hover:bg-[#E8F5E9] hover:text-[#0C831F]"
                                    aria-label={`Follow Kuiklo on ${social.label}`}
                                >
                                    <span className="text-sm font-semibold">{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 - Company */}
                    <div className="col-span-1">
                        <h3 className="mb-4 text-[14px] font-bold text-[#1C1C1C]">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            {companyLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-[14px] text-[#666666] transition-colors duration-200 ease-out hover:text-[#0C831F]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3 - Support */}
                    <div className="col-span-1">
                        <h3 className="mb-4 text-[14px] font-bold text-[#1C1C1C]">
                            Support
                        </h3>
                        <ul className="space-y-2">
                            {supportLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-[14px] text-[#666666] transition-colors duration-200 ease-out hover:text-[#0C831F]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4 - Legal */}
                    <div className="col-span-1 sm:col-span-2 md:col-span-1">
                        <h3 className="mb-4 text-[14px] font-bold text-[#1C1C1C]">
                            Legal
                        </h3>
                        <ul className="space-y-2">
                            {legalLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-[14px] text-[#666666] transition-colors duration-200 ease-out hover:text-[#0C831F]"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </motion.div>

            {/* Bottom bar */}
            <div className="border-t border-[#E8E8E8] bg-[#F7F7F7]">
                <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-5 text-center sm:text-left md:flex-row md:items-center md:justify-between md:gap-3 md:px-16">
                    <p className="text-[13px] text-[#999999]">
                        © 2025 Kuiklo Technologies Pvt. Ltd. All rights reserved. Patna,
                        Bihar, India.
                    </p>
                    <div className="flex items-center justify-center gap-1.5 md:justify-end">
                        <div
                            className="pulse-dot h-2 w-2 rounded-full bg-[#0C831F]"
                            aria-hidden="true"
                        ></div>
                        <span className="text-[13px] font-medium text-[#666666]">
                            Delivering across Patna
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
