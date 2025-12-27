import { motion } from "framer-motion";
import RangoliMandala from "./RangoliMandala";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-warm overflow-hidden px-4 min-h-screen flex items-center justify-center">
      
      {/* 🌸 DESKTOP BACKGROUND RANGOLI */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        {/* Left */}
        <div className="absolute left-[-180px] top-1/2 -translate-y-1/2 opacity-15">
          <RangoliMandala size="xl" />
        </div>

        {/* Right */}
        <div className="absolute right-[-180px] top-1/2 -translate-y-1/2 opacity-15">
          <RangoliMandala size="xl" />
        </div>
      </div>

      {/* 🌸 MOBILE BACKGROUND RANGOLI */}
      <div className="md:hidden absolute inset-0 pointer-events-none">
        {/* Top */}
        <div className="absolute top-16 left-1/2 -translate-x-1/2 opacity-10 scale-90">
          <RangoliMandala size="lg" />
        </div>

        {/* Bottom */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 opacity-10 scale-90">
          <RangoliMandala size="lg" />
        </div>
      </div>

      {/* 🧡 CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl"
      >
        <p className="font-elegant text-secondary uppercase tracking-[0.3em] text-sm sm:text-base mb-4">
          You are cordially invited to the
        </p>

        <h2 className="font-elegant text-primary text-xl sm:text-2xl md:text-3xl">
          Pre-Wedding Celebration
        </h2>

        <h1 className="font-script text-secondary text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-2">
          Rangoli
        </h1>

        <div className="w-28 h-0.5 bg-gradient-festive mx-auto my-8" />

        <p className="font-elegant text-muted-foreground uppercase tracking-widest text-sm sm:text-base mb-2">
          Celebrating the Groom
        </p>

        <h2 className="font-display text-gradient-festive text-4xl sm:text-5xl md:text-7xl lg:text-8xl">
          Anand Mohan
        </h2>
      </motion.div>
    </section>
  );
};

export default HeroSection;
