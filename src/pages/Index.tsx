import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import VisionSection from "@/components/VisionSection";
import TimelineSection from "@/components/TimelineSection";
import ProductSection from "@/components/ProductSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <MissionSection />
    <VisionSection />
    <TimelineSection />
    <ProductSection />
    <FooterSection />
  </div>
);

export default Index;
