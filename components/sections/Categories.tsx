"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const categories = [
  {
    name: "Groceries",
    image: "/images/categories/groceries.jpg",
    badge: "500+ items",
    storyDescription: "Daily essentials like atta, rice, dal, oil and spices — everything your kitchen needs, always in stock.",
    products: [
      { emoji: "🌾", name: "Aashirvaad Atta 5kg", price: "₹239" },
      { emoji: "🍚", name: "Daawat Basmati Rice 1kg", price: "₹89" },
      { emoji: "🫘", name: "Toor Dal 1kg", price: "₹145" },
      { emoji: "🧂", name: "Tata Salt 1kg", price: "₹28" },
      { emoji: "🌿", name: "MDH Red Chilli 100g", price: "₹45" }
    ]
  },
  {
    name: "Fresh Fruits",
    image: "/images/categories/fruits.jpg",
    badge: "Farm fresh daily",
    storyDescription: "Hand-picked seasonal fruits, delivered fresh from farm to your fridge every single morning.",
    products: [
      { emoji: "🍌", name: "Banana 1 dozen", price: "₹49" },
      { emoji: "🍎", name: "Apple Shimla 1kg", price: "₹159" },
      { emoji: "🍇", name: "Grapes Green 500g", price: "₹79" },
      { emoji: "🍊", name: "Orange 1kg", price: "₹89" },
      { emoji: "🥝", name: "Kiwi (4 pcs)", price: "₹99" }
    ]
  },
  {
    name: "Vegetables",
    image: "/images/categories/vegetables.jpg",
    badge: "Farm fresh daily",
    storyDescription: "Crisp, fresh vegetables sourced daily — the same quality you'd pick yourself at the market.",
    products: [
      { emoji: "🍅", name: "Tomato 1kg", price: "₹35" },
      { emoji: "🥬", name: "Spinach Bunch", price: "₹20" },
      { emoji: "🫑", name: "Capsicum 500g", price: "₹45" },
      { emoji: "🥒", name: "Cucumber 1kg", price: "₹30" },
      { emoji: "🌿", name: "Coriander Bunch", price: "₹10" }
    ]
  },
  {
    name: "Dairy & Eggs",
    image: "/images/categories/dairy.jpg",
    badge: "250+ items",
    storyDescription: "Milk, paneer, curd and eggs from trusted brands — chilled and delivered within minutes.",
    products: [
      { emoji: "🥛", name: "Amul Milk 1L", price: "₹66" },
      { emoji: "🧀", name: "Amul Paneer 200g", price: "₹95" },
      { emoji: "🥣", name: "Amul Curd 400g", price: "₹45" },
      { emoji: "🥚", name: "Eggs (6 pcs)", price: "₹42" },
      { emoji: "🧈", name: "Amul Butter 100g", price: "₹58" }
    ]
  },
  {
    name: "Snacks",
    image: "/images/categories/snacks.jpg",
    badge: "300+ items",
    storyDescription: "From Lay's to Oreo — every snack you crave, ready to satisfy those midnight munchies.",
    products: [
      { emoji: "🍟", name: "Lay's Classic 52g", price: "₹20" },
      { emoji: "🍪", name: "Oreo Original", price: "₹30" },
      { emoji: "🥨", name: "Haldiram's Bhujia 200g", price: "₹50" },
      { emoji: "🍫", name: "Dairy Milk 50g", price: "₹50" },
      { emoji: "🍿", name: "Act II Popcorn", price: "₹35" }
    ]
  },
  {
    name: "Household",
    image: "/images/categories/household.jpg",
    badge: "200+ items",
    storyDescription: "Cleaning supplies, detergents and home essentials — keep your home spotless without the trip.",
    products: [
      { emoji: "🧴", name: "Surf Excel 1kg", price: "₹125" },
      { emoji: "🧽", name: "Vim Dishwash Gel", price: "₹89" },
      { emoji: "🧹", name: "Domex Floor Cleaner 1L", price: "₹99" },
      { emoji: "🧻", name: "Tissue Roll Pack", price: "₹65" },
      { emoji: "🪣", name: "Lizol Disinfectant 500ml", price: "₹110" }
    ]
  },
  {
    name: "Personal Care",
    image: "/images/categories/personal-care.jpg",
    badge: "150+ items",
    storyDescription: "Shampoos, soaps and skincare from brands you trust — self-care, delivered fast.",
    products: [
      { emoji: "🧼", name: "Dove Soap 100g", price: "₹55" },
      { emoji: "🧴", name: "Head & Shoulders 180ml", price: "₹199" },
      { emoji: "🪥", name: "Colgate Strong Teeth", price: "₹55" },
      { emoji: "🧽", name: "Himalaya Face Wash", price: "₹110" },
      { emoji: "🧴", name: "Nivea Men Cream", price: "₹95" }
    ]
  },
  {
    name: "Beverages",
    image: "/images/categories/beverages.jpg",
    badge: "100+ items",
    storyDescription: "Cold drinks, juices and water — stock up for guests or just beat the heat.",
    products: [
      { emoji: "🥤", name: "Pepsi 750ml", price: "₹40" },
      { emoji: "🥤", name: "Coca-Cola 750ml", price: "₹40" },
      { emoji: "🍋", name: "Sprite 750ml", price: "₹40" },
      { emoji: "🧃", name: "Real Fruit Juice 1L", price: "₹110" },
      { emoji: "💧", name: "Bisleri Water 1L", price: "₹20" }
    ]
  }
];

export default function Categories() {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [isClosing, setIsClosing] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && expandedCategory) {
        closeExpanded();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [expandedCategory]);

  useEffect(() => {
    if (expandedCategory) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [expandedCategory]);

  const openExpanded = (category) => {
    setExpandedCategory(category);
    setIsClosing(false);
  };

  const closeExpanded = () => {
    setIsClosing(true);
    setTimeout(() => {
      setExpandedCategory(null);
      setIsClosing(false);
    }, 250);
  };

  return (
    <section id="categories">
      {/* SECTION HEADER */}
      <div
        className="categories-header mx-auto max-w-[1280px]"
        style={{ padding: "100px 5% 56px", background: "#FFFFFF" }}
      >
        <div
          style={{
            color: "#0C831F",
            fontSize: "12px",
            textTransform: "uppercase",
            letterSpacing: "3px",
            fontWeight: "700",
            marginBottom: "12px",
          }}
        >
          BROWSE CATEGORIES
        </div>
        <h2
          className="text-[28px] md:text-[44px]"
          style={{
            fontWeight: "800",
            color: "#1C1C1C",
            lineHeight: "1.1",
            marginBottom: "16px",
          }}
        >
          Everything You Need,<br />Delivered in Minutes
        </h2>
        <p
          style={{
            fontSize: "17px",
            color: "#666666",
            maxWidth: "500px",
          }}
        >
          2,000+ products across 8 categories. Tap any category to explore what's inside.
        </p>
      </div>

      {/* CATEGORIES GRID */}
      <div className="mx-auto max-w-[1280px] px-[5%] pb-[100px]">
        <div
          className={`grid gap-[16px] ${
            isMobile
              ? "grid-cols-1 auto-rows-[200px]"
              : "grid-cols-12 auto-rows-[220px] md:auto-rows-[280px]"
          }`}
        >
          {categories.map((category, index) => {
            let colSpanClass = "col-span-1";
            if (!isMobile) {
              // 12-column bento grid
              // Row 1: 4/12, 3/12, 3/12, 2/12
              // Row 2: 2/12, 3/12, 3/12, 4/12
              if (index === 0 || index === 7) colSpanClass = "col-span-4";
              else if (index === 1 || index === 2 || index === 5 || index === 6) colSpanClass = "col-span-3";
              else if (index === 3 || index === 4) colSpanClass = "col-span-2";
            }
            
            return (
              <div
                key={index}
                onClick={() => openExpanded(category)}
                className={`group relative cursor-pointer overflow-hidden rounded-[20px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)] ${colSpanClass}`}
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  style={{ objectFit: "cover" }}
                  unoptimized={true}
                />
                
                {/* GRADIENT OVERLAY */}
                <div
                  className="absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0) 100%)",
                  }}
                >
                  <div className="flex flex-col gap-1">
                    <span className="inline-flex w-fit items-center rounded-full bg-white/20 px-3 py-1 text-[11px] font-bold text-white backdrop-blur-md border border-white/20 mb-2">
                      {category.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {category.name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-white/90">
                        Delivered in 10 min ⚡
                      </p>
                      <span className="text-[11px] text-white/80 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        Tap to explore →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* STORY EXPANDED VIEW */}
      {expandedCategory && (
        <>
          <div
            className={`categories-overlay ${isClosing ? "closing" : ""}`}
            onClick={closeExpanded}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.6)",
              zIndex: 90,
              opacity: 0,
              animation: isClosing ? "overlay-fade-out 0.25s ease forwards" : "overlay-fade-in 0.3s ease forwards",
            }}
          />
          <div
            className={`categories-expanded ${isClosing ? "closing" : ""} ${isMobile ? "categories-expanded-mobile" : ""}`}
            role="dialog"
            aria-modal="true"
            style={{
              position: "fixed",
              top: isMobile ? "0" : "50%",
              left: isMobile ? "0" : "50%",
              transform: isMobile ? "scale(0.95)" : "translate(-50%, -50%) scale(0.9)",
              width: isMobile ? "100vw" : "min(90vw, 900px)",
              height: isMobile ? "100vh" : "min(85vh, 600px)",
              background: "#FFFFFF",
              borderRadius: isMobile ? "0" : "28px",
              overflow: "hidden",
              zIndex: 91,
              opacity: 0,
              display: "flex",
              flexDirection: "column",
              animation: isClosing
                ? "expand-out 0.25s ease forwards"
                : "expand-in 0.35s cubic-bezier(0.22, 1, 0.36, 1) forwards",
            }}
          >
            {/* HERO IMAGE SECTION */}
            <div style={{ height: isMobile ? "35%" : "40%", position: "relative" }}>
              <Image
                src={expandedCategory.image}
                alt={expandedCategory.name}
                fill
                style={{ objectFit: "cover" }}
                unoptimized={true}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "60px",
                  background: "linear-gradient(to top, white 0%, transparent 100%)",
                }}
              />
              
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  background: "rgba(255,255,255,0.95)",
                  borderRadius: "50px",
                  padding: "6px 14px",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#0C831F",
                }}
              >
                {expandedCategory.badge}
              </div>

              <button
                onClick={closeExpanded}
                aria-label="Close category view"
                style={{
                  position: "absolute",
                  top: isMobile ? "12px" : "16px",
                  right: isMobile ? "12px" : "16px",
                  width: "36px",
                  height: "36px",
                  background: "rgba(255,255,255,0.9)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                  border: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "white";
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.9)";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                ✕
              </button>
            </div>

            {/* CONTENT SECTION */}
            <div
              style={{
                flex: 1,
                padding: "24px 32px",
                overflowY: "auto",
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: "800",
                  color: "#1C1C1C",
                  marginBottom: "8px",
                }}
              >
                {expandedCategory.name}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#666666",
                  lineHeight: "1.7",
                  marginBottom: "20px",
                  maxWidth: "500px",
                }}
              >
                {expandedCategory.storyDescription}
              </p>

              <div
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#0C831F",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "12px",
                }}
              >
                Popular in this aisle
              </div>

              {/* PRODUCT ROW */}
              <div
                className="categories-product-row"
                style={{
                  display: "flex",
                  gap: "12px",
                  overflowX: "auto",
                  paddingBottom: "8px",
                }}
              >
                {expandedCategory.products.map((product, idx) => (
                  <div
                    key={idx}
                    style={{
                      flexShrink: 0,
                      width: isMobile ? "110px" : "130px",
                      background: "#F7F7F7",
                      borderRadius: "14px",
                      padding: "14px",
                      border: "1px solid #E8E8E8",
                      transition: "border-color 0.2s",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#0C831F")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#E8E8E8")}
                  >
                    <div style={{ fontSize: "28px", marginBottom: "8px" }}>
                      {product.emoji}
                    </div>
                    <div
                      className="product-name-clamp"
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#1C1C1C",
                        lineHeight: "1.4",
                        marginBottom: "6px",
                        flex: 1,
                      }}
                    >
                      {product.name}
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        fontWeight: "800",
                        color: "#1C1C1C",
                        marginBottom: "8px",
                      }}
                    >
                      {product.price}
                    </div>
                    <button
                      style={{
                        width: "100%",
                        background: "#0C831F",
                        color: "white",
                        borderRadius: "8px",
                        padding: "6px",
                        fontSize: "12px",
                        fontWeight: "700",
                        border: "none",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = "#0a6e19")}
                      onMouseLeave={(e) => (e.currentTarget.style.background = "#0C831F")}
                    >
                      ADD
                    </button>
                  </div>
                ))}
              </div>

              {/* BOTTOM CTA */}
              <a
                href="#download"
                style={{
                  marginTop: "20px",
                  width: "100%",
                  background: "#1C1C1C",
                  color: "white",
                  borderRadius: "14px",
                  padding: "14px",
                  fontSize: "14px",
                  fontWeight: "700",
                  textAlign: "center",
                  display: "block",
                  textDecoration: "none",
                  transition: "background 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#0C831F")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "#1C1C1C")}
              >
                See all {expandedCategory.badge} in app →
              </a>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
