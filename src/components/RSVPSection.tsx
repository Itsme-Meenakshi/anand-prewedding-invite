import { motion } from "framer-motion";
import RangoliMandala from "./RangoliMandala";

const RSVPSection = () => {
  return (
    <section className="relative py-24 md:py-32 px-4 bg-gradient-warm overflow-hidden">
      {/* Background Mandalas */}
      <div className="absolute top-1/3 left-0 opacity-10 pointer-events-none -translate-x-1/2">
        <RangoliMandala size="xl" />
      </div>
      <div className="absolute top-1/3 right-0 opacity-10 pointer-events-none translate-x-1/2">
        <RangoliMandala size="xl" />
      </div>

      <div className="max-w-2xl mx-auto text-center relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-elegant text-secondary tracking-[0.35em] uppercase text-sm mb-3">
            With Warmth & Joy
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-gradient-festive mb-6">
            We Await Your Presence
          </h2>
          <div className="w-28 h-0.5 bg-gradient-festive mx-auto mb-10" />
        </motion.div>

        {/* Message Card (Soft, Not CTA) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="px-6 md:px-10 py-10 md:py-12 rounded-3xl bg-card/70 backdrop-blur-md shadow-soft"
        >
          <p className="font-script text-3xl md:text-4xl text-primary mb-6">
            Please Join Us
          </p>

          <p className="font-elegant text-lg md:text-xl text-muted-foreground leading-relaxed">
            Your presence will mean the world to us.
            <br />
            Join our family and friends as we celebrate love,
            tradition, and togetherness.
          </p>

          {/* Decorative divider */}
          <div className="mt-10 flex justify-center items-center gap-3 opacity-60">
            <span className="w-12 h-px bg-primary/40" />
            <span className="w-2 h-2 rounded-full bg-primary/40" />
            <span className="w-12 h-px bg-primary/40" />
          </div>

          {/* Closing line */}
          <p className="mt-8 font-elegant text-sm tracking-widest uppercase text-muted-foreground">
            With love & blessings
          </p>
        </motion.div>

        {/* Sanskrit / Traditional Closing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-14"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;
