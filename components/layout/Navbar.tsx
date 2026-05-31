"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "800"],
  display: "swap",
});

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Categories", href: "#categories" },
  { label: "Reviews", href: "#reviews" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY >= 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={[
        plusJakartaSans.className,
        "fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ease-in-out",
        scrolled
          ? "border-b border-[#E8E8E8] shadow-[0_1px_8px_rgba(0,0,0,0.06)]"
          : "border-b border-transparent shadow-none",
      ].join(" ")}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-14 max-w-[1280px] items-center justify-between px-6 md:h-16 md:px-16"
      >
        {/* LEFT — Logo */}
        <Link
          href="#"
          className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1C1C] focus-visible:ring-offset-2 rounded"
          aria-label="Kuiklo — back to top"
        >
          <span className="relative h-8 w-28 block">
            <Image
              src="/images/logo.png"
              alt="Kuiklo"
              fill
              priority
              className="object-contain object-left"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
                const fallback = document.getElementById("logo-fallback");
                if (fallback) fallback.style.display = "flex";
              }}
            />
          </span>
          <span
            id="logo-fallback"
            className="hidden items-center gap-1 text-[22px] font-extrabold leading-none text-[#1C1C1C]"
            aria-hidden="true"
          >
            <span className="text-green-500">⚡</span>
            Kuiklo
          </span>
        </Link>

        {/* CENTER — Nav Links (desktop only) */}
        <ul className="hidden items-center md:flex" style={{ gap: "36px" }}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-[#666666] transition-colors duration-200 hover:text-[#1C1C1C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1C1C] focus-visible:ring-offset-2 rounded"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT — CTA Button */}
        <a
          href="#download"
          className="inline-flex items-center justify-center rounded-[50px] bg-[#1C1C1C] px-[22px] py-[10px] text-sm font-semibold text-white transition-all duration-200 hover:bg-[#333333] hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C1C1C] focus-visible:ring-offset-2"
        >
          Download App
        </a>
      </nav>
    </header>
  );
}
