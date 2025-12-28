import { motion } from "framer-motion";
import RangoliMandala from "./RangoliMandala";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-warm px-4">

      {/* ================= DESKTOP BACKGROUND RANGOLI ================= */}
      {/* Left */}
      <div className="absolute left-[-180px] top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden md:block">
        <RangoliMandala size="xl" />
      </div>

      {/* Right */}
      <div className="absolute right-[-180px] top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden md:block">
        <RangoliMandala size="xl" />
      </div>

      {/* ================= MOBILE BACKGROUND RANGOLI ================= */}
      {/* Top (extra spacing) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none md:hidden">
        <RangoliMandala size="lg" />
      </div>

      {/* Bottom (extra spacing) */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none md:hidden">
        <RangoliMandala size="lg" />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center max-w-4xl"
      >
        {/* Invite text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-secondary font-elegant font-semibold text-sm md:text-lg tracking-[0.35em] uppercase mb-4"
        >
          You are cordially invited to the
        </motion.p>

        {/* Title */}
        <div className="mb-6">

          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-secondary mt-2">
            Rangoli Night
          </h1>
        </div>

        {/* Decorative line */}
        <div className="w-28 md:w-32 h-0.5 bg-gradient-festive mx-auto mb-8" />

        {/* Groom */}
        <div>
          <p className="font-elegant text-sm md:text-lg text-muted-foreground tracking-widest uppercase mb-2">
            Celebrating the Groom
          </p>

          <h2 className="font-display text-4xl md:text-7xl lg:text-8xl text-gradient-festive tracking-wide">
            Anand Mohan
          </h2>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
