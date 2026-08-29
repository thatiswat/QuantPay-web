import ProductExperience from "@/components/product/ProductExperience";
import BillingSection from "@/components/product/BillingSection";
import InventorySection from "@/components/product/InventorySection";
import CustomerPaymentsSection from "@/components/product/CustomerPaymentsSection";
import PlatformSection from "@/components/product/PlatformSection";
import ProductCTA from "@/components/product/ProductCTA";

export default function ProductPage() {
  return (
    <>
      <ProductExperience />
      <BillingSection />
      <InventorySection />
      <CustomerPaymentsSection />
      <PlatformSection />
      <ProductCTA />
    </>
  );
}