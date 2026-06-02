import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Categories from "@/components/sections/Categories";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyKuiklo from "@/components/sections/WhyKuiklo";
import Testimonials from "@/components/sections/Testimonials";
import AppDownload from "@/components/sections/AppDownload";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBar />
      <Categories />
      <HowItWorks />
      <WhyKuiklo />
      <Testimonials />
      <AppDownload />
      <Footer />
    </main>
  );
}
