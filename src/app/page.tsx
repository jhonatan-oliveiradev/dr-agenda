import { Chatbot } from "@/components/layout/chatbot";
import { FAQSection } from "@/components/layout/faq-section";
import { FeaturesSection } from "@/components/layout/features-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { HeroSection } from "@/components/layout/hero-section";
import { PricingSection } from "@/components/layout/pricing-section";
import { StatsSection } from "@/components/layout/stats-section";
import { TestimonialsSection } from "@/components/layout/testimonials-section";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
