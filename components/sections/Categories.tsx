"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

type Category = {
  name: string;
  count: string;
  image: string;
};

const categories: Category[] = [
  { name: "Groceries", count: "500+ items", image: "/images/categories/groceries.jpg" },
  { name: "Fresh Fruits", count: "Farm fresh daily", image: "/images/categories/fruits.jpg" },
  { name: "Vegetables", count: "Farm fresh daily", image: "/images/categories/vegetables.jpg" },
  { name: "Dairy & Eggs", count: "250+ items", image: "/images/categories/dairy.jpg" },
  { name: "Snacks", count: "300+ items", image: "/images/categories/snacks.jpg" },
  { name: "Household", count: "200+ items", image: "/images/categories/household.jpg" },
  { name: "Personal Care", count: "150+ items", image: "/images/categories/personal-care.jpg" },
  { name: "Beverages", count: "100+ items", image: "/images/categories/beverages.jpg" },
];

const row1 = categories.slice(0, 4);
const row2 = categories.slice(4, 8);

function CategoryCard({ category, index }: { category: Category; index: number }) {
  return (
    /* @ts-ignore - Framer Motion className compatibility */
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-[20px] cursor-pointer bg-black"
      role="button"
      tabIndex={0}
      aria-label={`Shop ${category.name}`}
    >
      {/* Image Layer */}
      {/* @ts-ignore - Framer Motion className compatibility */}
      <motion.div
        className="absolute inset-0"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          src={category.image}
          alt={`${category.name} available for delivery in Patna`}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          sizes="(max-width: 768px) 200px, (max-width: 1024px) 50vw, 25vw"
          className="transition-transform duration-500"
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0) 100%)",
        }}
      ></div>

      {/* Green Border on Hover */}
      <div className="absolute inset-0 rounded-[20px] group-hover:shadow-[0_0_0_2px_#0C831F] pointer-events-none transition-shadow duration-300"></div>

      {/* Content Layer */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        {/* Badge */}
        <div
          className="w-fit mb-2 px-3 py-1 rounded-full border border-opacity-25 backdrop-blur-md"
          style={{
            background: "rgba(255,255,255,0.15)",
            borderColor: "rgba(255,255,255,0.25)",
          }}
        >
          <span className="text-[11px] font-semibold text-white">
            {category.count}
          </span>
        </div>

        {/* Category Name */}
        <h3 className="text-[18px] font-black text-white leading-[1.2] drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
          {category.name}
        </h3>

        {/* Delivery Promise */}
        <p className="text-[12px] font-medium text-white text-opacity-80 mt-1">
          Delivered in 10 min ⚡
        </p>
      </div>
    </motion.div>
  );
}

export default function Categories() {
  return (
    <section
      id="categories"
      className="bg-white py-24 md:py-[100px] px-6 md:px-16"
      style={{ fontFamily: plusJakartaSans.style.fontFamily }}
    >
      <div className="mx-auto max-w-[1280px]">
        {/* Section Header */}
        {/* @ts-ignore - Framer Motion className compatibility */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-14 md:mb-14"
        >
          <div className="mb-3 md:mb-4">
            <span className="text-[12px] font-bold tracking-[3px] text-[#0C831F] uppercase">
              Browse Categories
            </span>
          </div>
          <h2 className="mb-4 text-[28px] font-black leading-tight text-[#1C1C1C] md:text-[40px] md:mb-6">
            Everything You Need,
            <br />
            Delivered in Minutes
          </h2>
          <p className="max-w-[500px] text-[15px] leading-relaxed text-[#666666] md:text-[17px]">
            2,000+ products across 8 categories. Fresh, fast and always available in
            Patna.
          </p>
        </motion.div>

        {/* Bento Grid */}
        {/* @ts-ignore - Framer Motion className compatibility */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Desktop/Tablet View */}
          <div className="hidden md:block space-y-4">
            {/* Row 1 */}
            <div className="grid grid-cols-[2fr_1.5fr_1.5fr_1fr] gap-4 h-[280px]">
              {row1.map((category, index) => (
                <CategoryCard key={category.name} category={category} index={index} />
              ))}
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-[1fr_1.5fr_1.5fr_2fr] gap-4 h-[280px]">
              {row2.map((category, index) => (
                <CategoryCard
                  key={category.name}
                  category={category}
                  index={index + 4}
                />
              ))}
            </div>
          </div>

          {/* Tablet View (below md) */}
          <div className="hidden sm:grid md:hidden grid-cols-2 gap-3">
            {categories.map((category, index) => (
              <div key={category.name} style={{ height: "220px" }}>
                <CategoryCard category={category} index={index} />
              </div>
            ))}
          </div>

          {/* Mobile View - Horizontal Scroll */}
          <div
            className="sm:hidden flex gap-3 overflow-x-auto pb-3"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <style>{`
              .mobile-categories-scroll::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="mobile-categories-scroll flex-shrink-0"
                style={{ width: "200px", height: "220px" }}
              >
                <CategoryCard category={category} index={index} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Strip */}
        {/* @ts-ignore - Framer Motion className compatibility */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 md:mt-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-4 flex-wrap"
        >
          <p className="text-center md:text-left text-[15px] text-[#666666]">
            Can't find what you need? We have 2,000+ more products inside the app.
          </p>
          <a
            href="#download"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById("download");
              if (element) {
                element.scrollIntoView({ behavior: "smooth", block: "start" });
              }
            }}
            className="inline-flex items-center justify-center rounded-full bg-[#1C1C1C] px-[22px] py-[10px] text-[14px] font-semibold text-white transition-all duration-200 hover:bg-[#333333] hover:-translate-y-px cursor-pointer whitespace-nowrap"
            aria-label="Browse all categories in the app"
          >
            Browse All →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
