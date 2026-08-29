import Hero from "@/components/marketing/Hero";
import ProductSection from "@/components/marketing/ProductSection";
import ModulesSection from "@/components/marketing/ModulesSection";
import WhyQuantPaySection from "@/components/marketing/WhyQuantPaySection";
import CTASection from "@/components/marketing/CTASection";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductSection />
      <ModulesSection />
      <WhyQuantPaySection />
      <CTASection />
    </main>
  );
}