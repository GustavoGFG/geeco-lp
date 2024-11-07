import { AboutSection } from "../components/AboutUs";
import { BuyerBenefits } from "../components/BuyerBenefits";
import { Differentials } from "../components/Differentials";
import { FAQSection } from "../components/Faq";
import { FinalCTA } from "../components/FinalCta";
import { Hero } from "../components/Hero";
import { OurBusiness } from "../components/OurBusiness";
import { SellerBenefits } from "../components/SellerBenefits";

// src/app/trade-off/page.tsx
export default function TradeOffPage() {
  return (
    <>
      <Hero />
      <OurBusiness />
      <AboutSection />
      <Differentials />
      <SellerBenefits />
      <FinalCTA />
      <BuyerBenefits />
      <FAQSection />
    </>
  );
}
