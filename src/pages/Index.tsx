import { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import VenueSection from "@/components/VenueSection";
import EventsTimeline from "@/components/EventsTimeline";
import RSVPSection from "@/components/RSVPSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Anand Mohan | Pre-Wedding Celebration";
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <VenueSection />
      <EventsTimeline />
      <RSVPSection />
      <Footer />
    </main>
  );
};

export default Index;
