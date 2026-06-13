"use client";

import { useEffect } from "react";

const features = [
  {
    icon: "⚡",
    title: "10-Minute Guarantee",
    description: "Our dark stores placed across your city mean you are always within 2km of fresh, fast delivery. Speed is engineered, not promised.",
    tag: "⚡ Always under 10 min",
  },
  {
    icon: "🌿",
    title: "Freshness Promise",
    description: "Every product quality-checked before leaving our store. No stale goods, no near-expiry items. Fresh is not a feature — it is our standard.",
    tag: "🌿 Quality checked daily",
  },
  {
    icon: "📍",
    title: "Live Order Tracking",
    description: "Watch your order move from our store to your door in real time. No guessing, no anxiety. Just full transparency.",
    tag: "📍 Real-time updates",
  },
  {
    icon: "🛒",
    title: "Zero Minimum Order",
    description: "Order just one item and we will still deliver it. No minimums, no hidden charges, no pressure to spend more.",
    tag: "🛒 Order from ₹1",
  },
  {
    icon: "🏷️",
    title: "Best Prices Always",
    description: "Direct supplier partnerships mean you get competitive prices without ever cutting on quality. Fair pricing every time.",
    tag: "🏷️ Direct supplier pricing",
  },
  {
    icon: "🤝",
    title: "Local & Trusted",
    description: "Born local, built for your city. Our team knows your streets, your brands and what your community truly needs every day.",
    tag: "🤝 Community first",
  }
];

export default function WhyKuiklo() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section
      id="features"
      className="relative overflow-hidden w-full py-[60px] md:py-[100px]"
      style={{
        background: "linear-gradient(180deg, #F0FFF4 0%, #FFFFFF 100%)",
      }}
    >
      {/* Decorative Blob */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(12,131,31,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="mx-auto max-w-[1280px] px-[20px] md:px-[5%] relative z-10">
        
        {/* Section Header */}
        <div
          className="relative z-10 reveal"
          style={{ transitionDelay: "0s" }}
        >
          <div
            style={{
              color: "#0C831F",
              fontSize: "12px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "3px",
              marginBottom: "12px",
            }}
          >
            WHY KUIKLO
          </div>
          <h2
            className="text-[30px] md:text-[44px]"
            style={{
              fontWeight: 800,
              color: "#1C1C1C",
              lineHeight: 1.1,
              marginBottom: "16px",
            }}
          >
            Built for India.<br />Built Different.
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#666666",
              fontWeight: 400,
              maxWidth: "480px",
              marginBottom: "64px",
            }}
          >
            Six reasons why thousands of people choose Kuiklo every single day.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          {features.map((feature, index) => {
            const delays = ["0s", "0.08s", "0.16s", "0.08s", "0.16s", "0.24s"];
            return (
              <div
                key={index}
                className="feature-card reveal flex flex-col h-full bg-[#FFFFFF]"
                style={{
                  transitionDelay: delays[index],
                  borderRadius: "24px",
                  border: "1px solid rgba(12,131,31,0.1)",
                  padding: "36px 32px",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "default",
                }}
              >
                <div
                  className="card-top-glow"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "3px",
                    background: "linear-gradient(90deg, #0C831F, #4CAF50)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    borderRadius: "24px 24px 0 0",
                  }}
                />

                <div
                  className="feature-icon"
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "18px",
                    background: "linear-gradient(135deg, #E8F5E9, #F1F8E9)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "28px",
                    marginBottom: "24px",
                    marginTop: "8px",
                    boxShadow: "0 4px 12px rgba(12,131,31,0.1)",
                  }}
                  aria-hidden="true"
                >
                  {feature.icon}
                </div>

                <h3
                  style={{
                    fontSize: "19px",
                    fontWeight: 800,
                    color: "#1C1C1C",
                    marginBottom: "12px",
                    lineHeight: 1.3,
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  style={{
                    fontSize: "14px",
                    color: "#666666",
                    lineHeight: 1.75,
                    marginBottom: "20px",
                  }}
                >
                  {feature.description}
                </p>

                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    background: "#F0FFF4",
                    border: "1px solid #C8E6C9",
                    borderRadius: "50px",
                    padding: "6px 14px",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#0C831F",
                    marginTop: "auto",
                    width: "max-content",
                  }}
                >
                  <span aria-hidden="true">{feature.tag.split(' ')[0]}</span>
                  {feature.tag.substring(feature.tag.indexOf(' ') + 1)}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Social Proof Strip */}
        <div
          className="reveal grid grid-cols-2 md:flex justify-center items-center gap-0 mt-[48px] p-[20px] md:p-[28px_40px] flex-wrap"
          style={{
            transitionDelay: "0.1s",
            background: "#FFFFFF",
            border: "1px solid rgba(12,131,31,0.12)",
            borderRadius: "20px",
          }}
        >
          {/* Stat 1 */}
          <div className="text-center px-0 md:px-[40px] max-md:border-b max-md:border-[#F0F0F0] max-md:py-4">
            <div style={{ fontSize: "32px", fontWeight: 800, color: "#0C831F", lineHeight: 1 }}>10 min</div>
            <div style={{ fontSize: "13px", color: "#666666", marginTop: "6px", fontWeight: 500 }}>Average delivery time</div>
          </div>

          <div className="hidden md:block" style={{ width: "1px", height: "40px", background: "#E8E8E8" }} />

          {/* Stat 2 */}
          <div className="text-center px-0 md:px-[40px] max-md:border-b max-md:border-[#F0F0F0] max-md:py-4">
            <div style={{ fontSize: "32px", fontWeight: 800, color: "#0C831F", lineHeight: 1 }}>2,000+</div>
            <div style={{ fontSize: "13px", color: "#666666", marginTop: "6px", fontWeight: 500 }}>Products available</div>
          </div>

          <div className="hidden md:block" style={{ width: "1px", height: "40px", background: "#E8E8E8" }} />

          {/* Stat 3 */}
          <div className="text-center px-0 md:px-[40px] max-md:py-4 md:border-none">
            <div style={{ fontSize: "32px", fontWeight: 800, color: "#0C831F", lineHeight: 1 }}>₹0</div>
            <div style={{ fontSize: "13px", color: "#666666", marginTop: "6px", fontWeight: 500 }}>Minimum order value</div>
          </div>

          <div className="hidden md:block" style={{ width: "1px", height: "40px", background: "#E8E8E8" }} />

          {/* Stat 4 */}
          <div className="text-center px-0 md:px-[40px] max-md:py-4 md:border-none">
            <div style={{ fontSize: "32px", fontWeight: 800, color: "#0C831F", lineHeight: 1 }}>4.8 ★</div>
            <div style={{ fontSize: "13px", color: "#666666", marginTop: "6px", fontWeight: 500 }}>App store rating</div>
          </div>
        </div>

      </div>
    </section>
  );
}
