import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import VenueSection from "@/components/VenueSection";
import EventsTimeline from "@/components/EventsTimeline";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";
import BackgroundMusic from "@/components/BackgroundMusic";

const Index = () => {
  return (
    <>
      <BackgroundMusic />

      <HeroSection />
      <VenueSection />
      <EventsTimeline />
      <RSVPSection />
      <Footer />
    </>
  );
};

export default Index;
