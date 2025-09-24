import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import MetricsSection from "@/components/MetricsSection";
import VideoSection from "@/components/VideoSection";
import ModulesSection from "@/components/ModulesSection";
import FinalClaimSection from "@/components/FinalClaimSection";
import Footer from "@/components/Footer";
import PartnersSection from "@/components/PartnersSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
                <VideoSection />
        <BenefitsSection />
        <MetricsSection />
        <ModulesSection />
        <PartnersSection />
        <FinalClaimSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
