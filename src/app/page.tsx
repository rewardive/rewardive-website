import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { StatsBar } from "@/components/stats-bar";
import { UseCase } from "@/components/use-case";
import { FeaturesGrid } from "@/components/features-grid";
import { HowItWorks } from "@/components/how-it-works";
import { SupportedBanks } from "@/components/supported-banks";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

function Divider() {
  return (
    <div className="mx-auto max-w-7xl px-8 lg:px-[120px]">
      <div className="h-px bg-[#F0F0F0]" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <Divider />
      <StatsBar />
      <Divider />
      <UseCase />
      <FeaturesGrid />
      <HowItWorks />
      <Divider />
      <SupportedBanks />
      <Divider />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
