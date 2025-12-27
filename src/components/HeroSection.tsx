import { motion } from "framer-motion";
import RangoliMandala from "./RangoliMandala";

const HeroSection = () => {
  return (
    <section
      className="
        relative overflow-hidden bg-gradient-warm px-4
        min-h-screen
        flex flex-col
        items-start justify-start
        md:items-center md:justify-center
      "
    >
      {/* 🌸 LEFT BACKGROUND RANGOLI (DESKTOP ONLY) */}
      <div className="absolute left-[-180px] top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden md:block">
        <RangoliMandala size="xl" />
      </div>

      {/* 🌸 RIGHT BACKGROUND RANGOLI (DESKTOP ONLY) */}
      <div className="absolute right-[-180px] top-1/2 -translate-y-1/2 opacity-15 pointer-events-none hidden md:block">
        <RangoliMandala size="xl" />
      </div>

      {/* 🧡 MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="
          relative z-10 w-full max-w-4xl text-center
          mt-24 sm:mt-28
          md:mt-0
        "
      >
        {/* Invite text */}
        <p
          className="
            text-secondary font-elegant font-semibold
            text-sm sm:text-base md:text-lg
            tracking-[0.25em] sm:tracking-[0.3em]
            uppercase mb-4
          "
        >
          You are cordially invited to the
        </p>

        {/* Title */}
        <div className="mb-6">
          <h2
            className="
              font-elegant text-primary
              text-lg sm:text-xl md:text-3xl
              tracking-wide
            "
          >
            Pre-Wedding Celebration
          </h2>

          <h1
            className="
              font-script text-secondary
              text-4xl sm:text-5xl md:text-7xl lg:text-8xl
              mt-1 sm:mt-2
              leading-tight
            "
          >
            Rangoli
          </h1>
        </div>

        {/* Decorative line */}
        <div className="w-24 sm:w-32 h-0.5 bg-gradient-festive mx-auto mb-8" />

        {/* Groom */}
        <div>
          <p
            className="
              font-elegant text-sm sm:text-base md:text-lg
              text-muted-foreground tracking-widest
              uppercase mb-2
            "
          >
            Celebrating the Groom
          </p>

          <h2
            className="
              font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl
              text-gradient-festive tracking-wide
            "
          >
            Anand Mohan
          </h2>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
