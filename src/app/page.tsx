import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ProcessSection } from "@/components/process-section";
import { FeaturedUnits } from "@/components/featured-units";
import { ShipmentUpdates } from "@/components/shipment-updates";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <FeaturedUnits />
      <ShipmentUpdates />
      <Testimonials />
    </>
  );
}
