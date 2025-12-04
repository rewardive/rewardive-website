import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesGrid } from "@/components/features-grid";
import { HowItWorks } from "@/components/how-it-works";
import { SupportedBanks } from "@/components/supported-banks";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

import { FAQSection } from "@/components/faq-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <HowItWorks />
      <SupportedBanks />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
