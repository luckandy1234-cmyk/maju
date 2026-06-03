import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollRevealProvider from "@/components/landing/ScrollRevealProvider";
import HeroSection from "@/components/landing/HeroSection";
import ProblemSection from "@/components/landing/ProblemSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import MentorsSection from "@/components/landing/MentorsSection";
import TrustSection from "@/components/landing/TrustSection";
import TiersSection from "@/components/landing/TiersSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import FaqSection from "@/components/landing/FaqSection";
import { MentorCtaSection, FinalCtaSection } from "@/components/landing/CtaSection";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <ScrollRevealProvider>
        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <HowItWorksSection />
          <MentorsSection />
          <TrustSection />
          <TiersSection />
          <TestimonialsSection />
          <FaqSection />
          <MentorCtaSection />
          <FinalCtaSection />
        </main>
      </ScrollRevealProvider>
      <Footer />
    </>
  );
}
