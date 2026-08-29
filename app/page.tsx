import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

import Hero from "@/components/marketing/Hero";
import ProductSection from "@/components/marketing/ProductSection";
import ModulesSection from "@/components/marketing/ModulesSection";
import WhyQuantPaySection from "@/components/marketing/WhyQuantPaySection";
import CTASection from "@/components/marketing/CTASection";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <ProductSection />
        <ModulesSection />
        <WhyQuantPaySection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}