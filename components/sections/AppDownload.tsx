import Image from "next/image";

export default function AppDownload() {
  return (
    <section id="download" className="bg-[#0C831F] py-[60px] md:py-[80px] px-[24px] md:px-[5%] relative overflow-hidden">
      {/* BACKGROUND DECORATIONS */}
      <div
        aria-hidden="true"
        className="absolute top-[-120px] right-[-80px] w-[400px] h-[400px] rounded-full border border-[rgba(255,255,255,0.1)] bg-transparent pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-[-60px] right-[-20px] w-[260px] h-[260px] rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[-80px] left-[-40px] w-[300px] h-[300px] rounded-full border border-[rgba(255,255,255,0.08)] bg-transparent pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="mx-auto max-w-[1280px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] gap-[48px] items-center">

          {/* LEFT COLUMN — TEXT CONTENT */}
          <div className="w-full text-center md:text-left">
            <div className="text-[11px] font-bold uppercase tracking-[3px] text-[rgba(255,255,255,0.6)] mb-[16px]">
              DOWNLOAD
            </div>

            <h2 className="text-[32px] md:text-[48px] font-extrabold text-white leading-[1.05] mb-[20px]">
              Get Kuiklo on<br />
              Your Phone.<br />
              Start in <span className="text-[#FFD700]">2 Minutes</span>
            </h2>

            <p className="text-[16px] text-[rgba(255,255,255,0.75)] leading-[1.7] max-w-[420px] mb-[36px] mx-auto md:mx-0">
              Download now and get your first order delivered in under 10 minutes. Available on Android and iOS. Expanding to cities across India.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-[12px]">
              {/* Google Play Button */}
              <a
                href="#download"
                aria-label="Download Kuiklo on Google Play"
                className="flex items-center gap-[12px] bg-black border-[1.5px] border-[rgba(255,255,255,0.2)] rounded-[14px] px-[20px] py-[12px] transition-all duration-250 ease hover:bg-[#1a1a1a] hover:border-[rgba(255,255,255,0.4)] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] w-full sm:w-auto justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M3 20.5v-17c0-.83 1.01-1.3 1.62-.78l14 8.5c.55.33.55 1.13 0 1.47l-14 8.5C4.01 21.8 3 21.33 3 20.5z" fill="#4CAF50" />
                  <path d="M3 12V3.5c0-.83 1.01-1.3 1.62-.78l7 4.25L3 12z" fill="#29B6F6" />
                  <path d="M3 12l8.62-5.03 3 1.82L3 20.5V12z" fill="#F44336" />
                  <path d="M11.62 6.97l3 1.82 2.38-1.44c.55-.33.55-1.13 0-1.47l-2.38-1.44-3 1.82z" fill="#FFCA28" />
                </svg>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[11px] text-[rgba(255,255,255,0.7)] leading-tight">Get it on</span>
                  <span className="text-[17px] font-bold text-white leading-tight">Google Play</span>
                </div>
              </a>

              {/* App Store Button */}
              <a
                href="#download"
                aria-label="Download Kuiklo on App Store"
                className="flex items-center gap-[12px] bg-black border-[1.5px] border-[rgba(255,255,255,0.2)] rounded-[14px] px-[20px] py-[12px] transition-all duration-250 ease hover:bg-[#1a1a1a] hover:border-[rgba(255,255,255,0.4)] hover:-translate-y-[2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] w-full sm:w-auto justify-center"
              >
                <svg width="22" height="24" viewBox="0 0 814 1000" fill="white" aria-hidden="true">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 790.7 0 663 0 541.8c0-207.5 135.4-317.3 269-317.3 100.5 0 184.4 66.2 247 66.2 59.2 0 152.4-70.5 271.1-70.5z M616.3 168.3c32.8-39.2 55.7-93.5 55.7-147.8 0-7.8-.7-15.7-2.1-22.2-52.2 2-114.3 34.9-151.2 78.1-29.5 34.2-56.9 88.5-56.9 143.5 0 7.8 1.4 15.7 2.1 18.4 3.5.7 9.2 1.4 14.9 1.4 46.4 0 106.3-32.1 137.5-71.4z" />
                </svg>
                <div className="flex flex-col items-start text-left">
                  <span className="text-[11px] text-[rgba(255,255,255,0.7)] leading-tight">Download on the</span>
                  <span className="text-[17px] font-bold text-white leading-tight">App Store</span>
                </div>
              </a>
            </div>

            {/* Trust Row */}
            <div className="mt-[28px] flex flex-row flex-wrap items-center justify-center md:justify-start gap-[20px]">
              <div className="flex flex-row items-center gap-[6px]">
                <div className="w-[18px] h-[18px] rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center text-[10px] text-white">✓</div>
                <span className="text-[13px] font-medium text-[rgba(255,255,255,0.8)]">Free to download</span>
              </div>
              <div className="w-[1px] h-[14px] bg-[rgba(255,255,255,0.2)]" />
              <div className="flex flex-row items-center gap-[6px]">
                <div className="w-[18px] h-[18px] rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center text-[10px] text-white">✓</div>
                <span className="text-[13px] font-medium text-[rgba(255,255,255,0.8)]">No subscription</span>
              </div>
              <div className="w-[1px] h-[14px] bg-[rgba(255,255,255,0.2)]" />
              <div className="flex flex-row items-center gap-[6px]">
                <div className="w-[18px] h-[18px] rounded-full bg-[rgba(255,255,255,0.2)] flex items-center justify-center text-[10px] text-white">✓</div>
                <span className="text-[13px] font-medium text-[rgba(255,255,255,0.8)]">4.8 ★ rated</span>
              </div>
            </div>
          </div>

          {/* CENTER COLUMN — PHONE VISUAL */}
          <div className="hidden lg:block">
            <div className="phone-float w-[280px] mx-auto relative" aria-hidden="true">
              
              {/* iOS PHONE FRAME */}
              <div 
                className="w-[280px] h-[620px] bg-[#000000] rounded-[50px] relative overflow-hidden"
                style={{ 
                  boxShadow: 'inset 0 0 2px 2px #505054, inset 0 0 0 6px #1A1A1D, 0 40px 80px rgba(0,0,0,0.5), 0 20px 40px rgba(0,0,0,0.3)',
                  padding: '10px'
                }}
              >
                {/* SCREEN AREA */}
                <div className="relative w-full h-full bg-[#0C831F] rounded-[40px] overflow-hidden border border-[#111]">
                  {/* Real App Screenshot (No cropping because screen matches 722x1600 aspect ratio) */}
                  <img 
                    src="/images/app-mockup.png" 
                    alt="Kuiklo App UI" 
                    className="absolute inset-0 w-full h-full object-cover object-top z-10"
                  />
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT COLUMN — QR + STATS */}
          <div className="w-full">

            {/* QR Code Card */}
            <div className="bg-white rounded-[20px] p-[24px] shadow-[0_16px_48px_rgba(0,0,0,0.15)] text-center mb-[20px] max-w-[280px] mx-auto md:max-w-none">
              <div className="w-[140px] h-[140px] relative bg-white rounded-[12px] border border-[#E8E8E8] p-[6px] mx-auto mb-[14px]">
                <div className="relative w-full h-full rounded-[8px] overflow-hidden">
                  <Image
                    src="/images/kuiklo_app_qr.png"
                    alt="Scan to Download Kuiklo App"
                    fill
                    style={{ objectFit: "contain" }}
                    unoptimized={true}
                  />
                </div>
              </div>
              <div className="text-[13px] font-bold text-[#1C1C1C] mb-[4px]">Scan to Download</div>
              <div className="text-[12px] text-[#666666]">Works on Android & iOS</div>
              <div className="h-[1px] bg-[#E8E8E8] my-[14px]" />
              <div className="flex justify-center items-center gap-[8px] text-[12px] text-[#666666]">
                🟢 Available now
              </div>
            </div>

            {/* 3 Stats Boxes */}
            <div className="grid grid-cols-3 gap-[10px]">
              <div className="bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.2)] rounded-[14px] px-[8px] py-[16px] md:px-[12px] text-center">
                <div className="text-[18px] sm:text-[22px] font-extrabold text-white">10 min</div>
                <div className="text-[11px] text-[rgba(255,255,255,0.7)] mt-[4px]">Delivery</div>
              </div>
              <div className="bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.2)] rounded-[14px] px-[8px] py-[16px] md:px-[12px] text-center">
                <div className="text-[18px] sm:text-[22px] font-extrabold text-white">₹0</div>
                <div className="text-[11px] text-[rgba(255,255,255,0.7)] mt-[4px]">Min order</div>
              </div>
              <div className="bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.2)] rounded-[14px] px-[8px] py-[16px] md:px-[12px] text-center">
                <div className="text-[18px] sm:text-[22px] font-extrabold text-white">4.8★</div>
                <div className="text-[11px] text-[rgba(255,255,255,0.7)] mt-[4px]">Rating</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
