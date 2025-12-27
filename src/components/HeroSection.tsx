import { motion } from "framer-motion";
import RangoliMandala from "./RangoliMandala";

const HeroSection = () => {
  return (
    <section
      className="
        relative bg-gradient-warm overflow-hidden px-4
        min-h-screen
        flex flex-col
        justify-start
        pt-24
        md:pt-0 md:flex md:items-center md:justify-center
      "
    >
      {/* 🌸 BACKGROUND RANGOLI */}
      <div className="absolute inset-0 pointer-events-none">
        {/* LEFT RANGOLI */}
        <div
          className="
            absolute top-1/2 -translate-y-1/2 opacity-15
            left-[-40px] sm:left-[-80px] md:left-[-180px]
          "
        >
          <RangoliMandala size="xl" />
        </div>

        {/* RIGHT RANGOLI */}
        <div
          className="
            absolute top-1/2 -translate-y-1/2 opacity-15
            right-[-40px] sm:right-[-80px] md:right-[-180px]
          "
        >
          <RangoliMandala size="xl" />
        </div>
      </div>

      {/* 🧡 MAIN CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-4xl mx-auto text-center"
      >
        {/* Invite text */}
        <p
          className="
            font-elegant font-semibold text-secondary uppercase
            text-sm sm:text-base md:text-lg
            tracking-[0.3em]
            mb-4
          "
        >
          You are cordially invited to the
        </p>

        {/* Title */}
        <div className="mb-6">
          <h2 className="font-elegant text-primary text-xl sm:text-2xl md:text-3xl">
            Pre-Wedding Celebration
          </h2>

          <h1
            className="
              font-script text-secondary
              text-5xl sm:text-6xl md:text-7xl lg:text-8xl
              mt-2 leading-tight
            "
          >
            Rangoli
          </h1>
        </div>

        {/* Divider */}
        <div className="w-28 sm:w-32 h-0.5 bg-gradient-festive mx-auto mb-8" />

        {/* Groom */}
        <p
          className="
            font-elegant uppercase tracking-widest
            text-sm sm:text-base md:text-lg
            text-muted-foreground mb-2
          "
        >
          Celebrating the Groom
        </p>

        <h2
          className="
            font-display text-gradient-festive
            text-4xl sm:text-5xl md:text-7xl lg:text-8xl
          "
        >
          Anand Mohan
        </h2>
      </motion.div>
    </section>
  );
};

export default HeroSection;
