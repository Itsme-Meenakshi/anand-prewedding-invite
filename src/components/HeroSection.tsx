import { motion } from "framer-motion";
import RangoliMandala from "./RangoliMandala";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-warm px-4">

      {/* 🌸 LEFT RANGOLI */}
      <div className="absolute left-[-160px] top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden md:block scale-110">
      <RangoliMandala size="xl" />
      </div>

        {/* 🌸 RIGHT RANGOLI */}
        <div className="absolute right-[-160px] top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden md:block scale-110">
        <RangoliMandala size="xl" />
        </div>

      {/* 🧡 MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-4xl"
      >
        {/* Invite text */}
        <motion.p
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="text-secondary font-elegant font-semibold text-base md:text-lg tracking-[0.35em] uppercase mb-4"
        >
          You are cordially invited to the
        </motion.p>

        {/* Title */}
        <div className="mb-6">
          <h2 className="font-elegant text-2xl md:text-3xl text-primary tracking-wide">
            Pre-Wedding Celebration
          </h2>

          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-secondary mt-2">
            Rangoli
          </h1>
        </div>

        {/* Decorative line */}
        <div className="w-32 h-0.5 bg-gradient-festive mx-auto mb-8" />

        {/* Groom */}
        <div>
          <p className="font-elegant text-base md:text-lg text-muted-foreground tracking-widest uppercase mb-2">
            Celebrating the Groom
          </p>

          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-gradient-festive tracking-wide">
            Anand Mohan
          </h2>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
