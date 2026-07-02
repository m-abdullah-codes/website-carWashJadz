import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BeforeAfterSection from "@/components/BeforeAfterSection";
import BestWashPromo from "@/components/BestWashPromo";
import RevitalizeSection from "@/components/RevitalizeSection";
import TestimonialSection from "@/components/TestimonialSection";
import BestCarWashExperienceSection from "@/components/BestCarWashExperienceSection";
import FooterCtaSection from "@/components/FooterCtaSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-background">
      <Header />
      <Hero />
      <BeforeAfterSection />
      <BestWashPromo />
      <RevitalizeSection />
      <TestimonialSection />
      <BestCarWashExperienceSection />
      <FooterCtaSection />
    </main>
  );
}
