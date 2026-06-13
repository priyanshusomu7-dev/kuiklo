"use client";

import { useEffect, useRef } from "react";

const reviews = [
  {
    name: "Rahul Prasad",
    location: "Boring Road",
    avatar: "RP",
    color: "#0C831F",
    stars: 5,
    text: "Ordered at 11pm and it arrived in 8 minutes. I literally could not believe it. This is what quick commerce should feel like.",
    order: "Snacks & beverages",
    delivery: "8 min"
  },
  {
    name: "Sunita Mishra",
    location: "Rajendra Nagar",
    avatar: "SM",
    color: "#FFB800",
    stars: 5,
    text: "Fresh vegetables every single morning. The quality is genuinely better than my local market and so much more convenient.",
    order: "Fruits & vegetables",
    delivery: "9 min"
  },
  {
    name: "Amit Kumar",
    location: "Kankarbagh",
    avatar: "AK",
    color: "#1976D2",
    stars: 5,
    text: "Finally a grocery app that actually understands my city. Fast, reliable, and the prices are fair. Already recommended it to 10 of my friends.",
    order: "Grocery essentials",
    delivery: "10 min"
  },
  {
    name: "Priya Sharma",
    location: "Patliputra Colony",
    avatar: "PS",
    color: "#E65100",
    stars: 5,
    text: "I was skeptical about 10-minute delivery but they actually deliver on the promise. Even got fresh paneer within minutes.",
    order: "Dairy & eggs",
    delivery: "7 min"
  },
  {
    name: "Vikash Singh",
    location: "Kidwaipuri",
    avatar: "VS",
    color: "#6A1B9A",
    stars: 4,
    text: "Great app, super fast delivery. Sometimes a product is out of stock but they always suggest a good alternative.",
    order: "Household items",
    delivery: "11 min"
  },
  {
    name: "Anjali Verma",
    location: "Boring Road",
    avatar: "AV",
    color: "#C2185B",
    stars: 5,
    text: "The zero minimum order thing is a game changer. I order just one packet of milk sometimes and they still deliver.",
    order: "Dairy",
    delivery: "8 min"
  },
  {
    name: "Rohit Kumar",
    location: "Exhibition Road",
    avatar: "RK",
    color: "#00897B",
    stars: 5,
    text: "Live tracking is so accurate. I can see exactly when the rider leaves the store and reaches my door.",
    order: "Snacks & dairy",
    delivery: "9 min"
  },
  {
    name: "Neha Gupta",
    location: "Rajendra Nagar",
    avatar: "NG",
    color: "#5E35B1",
    stars: 5,
    text: "Prices are honestly better than I expected for this kind of convenience. My weekly grocery routine completely changed.",
    order: "Grocery essentials",
    delivery: "10 min"
  }
];

const ratingBreakdown = [
  { stars: 5, percentage: 78 },
  { stars: 4, percentage: 16 },
  { stars: 3, percentage: 4 },
  { stars: 2, percentage: 1 },
  { stars: 1, percentage: 1 }
];

export default function Testimonials() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      const revealElements = sectionRef.current.querySelectorAll(".reveal");
      revealElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="reviews" 
      ref={sectionRef}
      className="bg-[#F7F7F7] pt-[100px] pb-[100px] px-[24px] md:px-[5%]"
    >
      <div className="mx-auto max-w-[1280px]">
        {/* SECTION HEADER */}
        <div className="mb-[56px]">
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
            REVIEWS
          </div>
          <h2
            className="text-[30px] md:text-[44px]"
            style={{
              fontWeight: "800",
              color: "#1C1C1C",
              lineHeight: "1.1",
              marginBottom: "16px",
            }}
          >
            Love from Our Communities
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#666666",
              maxWidth: "500px",
            }}
          >
            Don't take our word for it — here is what our customers are saying.
          </p>
        </div>

        {/* MAIN LAYOUT — SPLIT GRID */}
        <div className="flex flex-col lg:grid lg:grid-cols-[380px_1fr] gap-[32px] items-start">
          
          {/* LEFT PANEL — TRUST STATS CARD */}
          <div 
            className="reveal w-full bg-white rounded-[24px] border border-[#E8E8E8] p-[24px] sm:p-[32px] lg:sticky lg:top-[100px] shadow-[0_8px_32px_rgba(0,0,0,0.04)] mb-[24px] lg:mb-0"
            style={{ transitionDelay: "0s" }}
          >
            <div className="flex items-baseline gap-[8px]">
              <span className="text-[44px] sm:text-[56px] font-[800] text-[#1C1C1C] leading-none">4.8</span>
              <span className="text-[20px] font-[600] text-[#999999]">/5</span>
            </div>
            
            <div 
              className="text-[#FFB800] text-[20px] mt-[8px]"
              style={{ letterSpacing: "2px" }}
              aria-label="Rated 4.8 out of 5 stars"
            >
              ★★★★★
            </div>
            
            <div className="text-[14px] text-[#666666] mt-[6px]">
              Based on 12,847 reviews
            </div>
            
            <div className="mt-[16px] inline-flex items-center gap-[6px] bg-[#E8F5E9] border border-[#C8E6C9] rounded-[50px] px-[14px] py-[6px] text-[12px] font-[700] text-[#0C831F]">
              ✓ Verified Orders Only
            </div>

            <div className="my-[24px] h-[1px] bg-[#F0F0F0]"></div>

            {/* RATING BREAKDOWN BARS */}
            <div>
              {ratingBreakdown.map((item) => (
                <div key={item.stars} className="flex items-center gap-[10px] mb-[10px]">
                  <div className="w-[36px] shrink-0 text-[13px] font-[600] text-[#444444]">
                    {item.stars} ★
                  </div>
                  <div className="flex-1 h-[8px] bg-[#F0F0F0] rounded-[4px] overflow-hidden">
                    <div 
                      className="h-full rounded-[4px]"
                      style={{ 
                        width: `${item.percentage}%`,
                        background: item.stars >= 4 ? "#0C831F" : "#FFB800"
                      }}
                    ></div>
                  </div>
                  <div className="w-[36px] text-right text-[12px] text-[#999999]">
                    {item.percentage}%
                  </div>
                </div>
              ))}
            </div>

            <div className="my-[24px] h-[1px] bg-[#F0F0F0]"></div>

            {/* THREE MINI TRUST METRICS */}
            <div className="flex flex-col">
              <div className="flex items-center gap-[12px] py-[10px]">
                <div className="w-[36px] h-[36px] rounded-[10px] bg-[#F0FFF4] flex items-center justify-center text-[16px]">⚡</div>
                <div>
                  <div className="text-[16px] font-[800] text-[#1C1C1C]">9 min</div>
                  <div className="text-[12px] text-[#666666]">Average delivery time rated</div>
                </div>
              </div>
              <div className="flex items-center gap-[12px] py-[10px]">
                <div className="w-[36px] h-[36px] rounded-[10px] bg-[#F0FFF4] flex items-center justify-center text-[16px]">🔄</div>
                <div>
                  <div className="text-[16px] font-[800] text-[#1C1C1C]">94%</div>
                  <div className="text-[12px] text-[#666666]">Customers reorder within a week</div>
                </div>
              </div>
              <div className="flex items-center gap-[12px] py-[10px]">
                <div className="w-[36px] h-[36px] rounded-[10px] bg-[#F0FFF4] flex items-center justify-center text-[16px]">🛡️</div>
                <div>
                  <div className="text-[16px] font-[800] text-[#1C1C1C]">100%</div>
                  <div className="text-[12px] text-[#666666]">Orders quality checked</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — REVIEW FEED */}
          <div className="relative w-full">
            <div 
              className="review-feed flex flex-col gap-[16px] lg:max-h-[640px] lg:overflow-y-auto pr-0 lg:pr-[8px]"
              aria-label="Customer reviews"
            >
              {reviews.map((review, index) => {
                const starsDisplay = "★".repeat(review.stars) + "☆".repeat(5 - review.stars);
                return (
                  <div
                    key={index}
                    className="reveal bg-white border border-[#E8E8E8] rounded-[16px] p-[18px] sm:p-[22px] transition-all duration-200 hover:border-[#C8E6C9] hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)]"
                    style={{ transitionDelay: `${0 + index * 0.05}s` }}
                  >
                    <div className="flex justify-between items-start mb-[10px]">
                      <div className="flex items-center gap-[12px]">
                        <div 
                          className="w-[42px] h-[42px] rounded-full flex items-center justify-center text-[15px] font-[700] text-white shrink-0"
                          style={{ background: review.color }}
                        >
                          {review.avatar}
                        </div>
                        <div>
                          <div className="text-[14px] font-[700] text-[#1C1C1C]">
                            {review.name}
                          </div>
                          <div className="text-[12px] text-[#999999] mt-[2px]">
                            {review.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="inline-flex items-center gap-[4px] bg-[#F0FFF4] rounded-[50px] px-[10px] py-[4px] text-[11px] font-[700] text-[#0C831F] shrink-0">
                        ✓ Verified
                      </div>
                    </div>

                    <div 
                      className="text-[#FFB800] text-[14px] mb-[10px]"
                      style={{ letterSpacing: "2px" }}
                      aria-label={`Rated ${review.stars} out of 5 stars`}
                    >
                      {starsDisplay}
                    </div>

                    <div className="text-[14px] text-[#444444] leading-[1.7] mb-[12px] italic">
                      "{review.text}"
                    </div>

                    <div className="inline-flex items-center gap-[6px] bg-[#F7F7F7] rounded-[50px] px-[12px] py-[5px] text-[11px] text-[#666666] font-[600]">
                      📦 {review.order} · Delivered in {review.delivery}
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Fade effect at bottom of feed */}
            <div 
              className="review-feed-fade hidden lg:block absolute bottom-0 left-0 right-[8px] h-[60px] pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, rgba(247,247,247,0) 0%, #F7F7F7 100%)"
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
