"use client";

import { useState, useEffect, useRef } from "react";
import { KuikloLogo } from "../ui/KuikloLogo";

const cities = [
  { name: "Patna", status: "live", statusLabel: "Now delivering ⚡" },
  { name: "Delhi", status: "coming-soon", statusLabel: "Coming soon" },
  { name: "Mumbai", status: "coming-soon", statusLabel: "Coming soon" },
  { name: "Bangalore", status: "coming-soon", statusLabel: "Coming soon" },
  { name: "Hyderabad", status: "coming-soon", statusLabel: "Coming soon" },
  { name: "Kolkata", status: "coming-soon", statusLabel: "Coming soon" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Patna");
  const [toastCity, setToastCity] = useState(null);
  const [activeSection, setActiveSection] = useState("");

  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["categories", "how-it-works", "features", "reviews"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target)
      ) {
        setIsCityOpen(false);
      }
    };

    if (isCityOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isCityOpen]);

  const handleCityClick = (city) => {
    if (city.status === "live") {
      setSelectedCity(city.name);
      setIsCityOpen(false);
    } else {
      setToastCity(city.name);
      setTimeout(() => {
        setToastCity((prev) => (prev === city.name ? null : prev));
      }, 2000);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/70 backdrop-blur-[16px] border-b border-black/5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]"
          : "bg-white border-b-transparent shadow-none"
      }`}
    >
      <div className="mx-auto max-w-[1280px] w-full h-[56px] md:h-[64px] px-[16px] md:px-[5%] flex items-center justify-between">
        
        {/* LEFT SIDE: Logo + Divider + City Selector */}
        <div className="flex items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-[4px] no-underline">
            <KuikloLogo className="h-8 md:h-10 w-auto" />
          </a>

          {/* Divider */}
          <div className="w-[1px] h-[22px] bg-[#E8E8E8] mx-[16px]"></div>

          {/* City Selector */}
          <div className="md:relative">
            <button
              ref={triggerRef}
              onClick={() => setIsCityOpen(!isCityOpen)}
              className="flex items-center gap-[6px] bg-transparent border-none cursor-pointer px-[10px] py-[6px] rounded-[8px] hover:bg-[#F7F7F7] transition-colors duration-200"
            >
              <span className="text-[#0C831F] text-[14px]">📍</span>
              <div className="flex flex-col text-left">
                <span className="hidden md:block text-[10px] text-[#999999] font-[400] leading-[1.2]">
                  Deliver to
                </span>
                <span className="text-[14px] font-[700] text-[#1C1C1C] leading-[1.2]">
                  {selectedCity}
                </span>
              </div>
              <span
                className={`text-[#999999] text-[12px] transition-transform duration-200 ease-in-out ${
                  isCityOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {/* City Dropdown Menu */}
            {isCityOpen && (
              <div
                ref={dropdownRef}
                className="dropdown-enter fixed left-[16px] top-[56px] w-[calc(100vw-32px)] md:absolute md:top-[calc(100%+8px)] md:left-0 md:w-[240px] bg-white border border-[#E8E8E8] rounded-[16px] shadow-[0_16px_48px_rgba(0,0,0,0.12)] p-[8px] z-[100] overflow-hidden"
              >
                <div className="text-[11px] font-[700] text-[#999999] uppercase tracking-[1px] px-[12px] pt-[8px] pb-[6px] border-b border-[#F0F0F0] mb-[4px]">
                  Select your city
                </div>
                {cities.map((city) => (
                  <div key={city.name} className="flex flex-col">
                    <div
                      onClick={() => handleCityClick(city)}
                      className={`flex items-center justify-between px-[12px] py-[10px] rounded-[10px] transition-colors duration-150 ${
                        city.status === "live"
                          ? "cursor-pointer hover:bg-[#E8F5E9]"
                          : "cursor-not-allowed hover:bg-[#F7F7F7]"
                      }`}
                    >
                      <div>
                        <div className="text-[14px] font-[600] text-[#1C1C1C]">
                          {city.name}
                        </div>
                        <div
                          className={`text-[12px] ${
                            city.status === "live"
                              ? "text-[#0C831F]"
                              : "text-[#999999]"
                          }`}
                        >
                          {city.statusLabel}
                        </div>
                      </div>
                      <div>
                        {city.status === "live" ? (
                          <span className="bg-[#E8F5E9] border border-[#C8E6C9] text-[#0C831F] text-[11px] font-[700] px-[10px] py-[3px] rounded-[50px]">
                            Live
                          </span>
                        ) : (
                          <span className="bg-[#F5F5F5] text-[#999999] text-[11px] font-[600] px-[10px] py-[3px] rounded-[50px]">
                            Soon
                          </span>
                        )}
                      </div>
                    </div>
                    {toastCity === city.name && (
                      <div
                        className="text-[11px] text-[#0C831F] mt-[4px] ml-[12px]"
                        style={{ animation: "toast-fade 2s forwards" }}
                      >
                        Coming to {city.name} soon! 🚀
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* CENTER NAV LINKS */}
        <nav className="hidden md:flex gap-[36px] absolute left-1/2 -translate-x-1/2">
          <a
            href="#categories"
            className={`nav-link-wrap relative text-[14px] font-[500] no-underline transition-colors duration-200 hover:text-[#1C1C1C] group ${
              activeSection === "categories" ? "active text-[#1C1C1C]" : "text-[#666666]"
            }`}
          >
            Categories
            <span className="nav-underline"></span>
          </a>
          <a
            href="#how-it-works"
            className={`nav-link-wrap relative text-[14px] font-[500] no-underline transition-colors duration-200 hover:text-[#1C1C1C] group ${
              activeSection === "how-it-works" ? "active text-[#1C1C1C]" : "text-[#666666]"
            }`}
          >
            How it works
            <span className="nav-underline"></span>
          </a>
          <a
            href="#features"
            className={`nav-link-wrap relative text-[14px] font-[500] no-underline transition-colors duration-200 hover:text-[#1C1C1C] group ${
              activeSection === "features" ? "active text-[#1C1C1C]" : "text-[#666666]"
            }`}
          >
            Features
            <span className="nav-underline"></span>
          </a>
          <a
            href="#reviews"
            className={`nav-link-wrap relative text-[14px] font-[500] no-underline transition-colors duration-200 hover:text-[#1C1C1C] group ${
              activeSection === "reviews" ? "active text-[#1C1C1C]" : "text-[#666666]"
            }`}
          >
            Reviews
            <span className="nav-underline"></span>
          </a>
        </nav>

        {/* RIGHT SIDE: Download App Button */}
        <div>
          <a href="#download" className="dl-btn">
            <span className="dl-btn-label">Download App</span>
            <span className="dl-btn-icon">⚡</span>
          </a>
        </div>
      </div>
    </header>
  );
}
