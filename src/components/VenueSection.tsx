import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import RangoliMandala from "./RangoliMandala";

const EVENT_DATE = new Date("2026-01-03T18:00:00");

const VenueSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = EVENT_DATE.getTime() - now;

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative bg-gradient-warm overflow-hidden pt-24 pb-32 px-4">

      {/* 🌸 DIVIDER — lives inside Venue, overlaps Hero */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full z-20 pointer-events-none">
        <RangoliMandala size="md" animate />
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <p className="font-elegant text-secondary tracking-[0.35em] uppercase text-sm mb-3">
            Venue Details
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-gradient-festive mb-4">
            Join Us At
          </h2>
          <div className="w-32 h-0.5 bg-gradient-festive mx-auto" />
        </motion.div>

        {/* ✨ VENUE CARD */}
        <motion.div
          whileHover={{ y: -8, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="relative mx-auto max-w-3xl rounded-3xl p-[2px]
                     bg-gradient-to-br from-accent via-secondary to-primary
                     shadow-[0_30px_80px_-20px_rgba(0,0,0,0.45)]"
        >
          <div className="rounded-3xl bg-card px-12 py-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-accent to-primary pointer-events-none" />

            <div className="relative z-10 text-center space-y-12">

              <div>
                <MapPin className="w-9 h-9 mx-auto text-primary mb-3" />
                <h3 className="font-display text-3xl md:text-4xl mb-4">
                  Amrita Heritage
                </h3>

                <motion.a
                  href="https://maps.app.goo.gl/LcjnxPGCBEmnxmqd7"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-7 py-3 rounded-full
                             bg-gradient-to-r from-primary to-secondary
                             text-primary-foreground font-elegant text-sm tracking-wider
                             shadow-[0_12px_30px_-8px_rgba(0,0,0,0.4)]"
                >
                  <MapPin className="w-4 h-4 animate-pulse" />
                  View Location
                </motion.a>
              </div>

              <div className="w-24 h-0.5 bg-gradient-festive mx-auto opacity-70" />

              <div className="flex flex-col sm:flex-row items-center justify-center gap-10">
                <div>
                  <Calendar className="w-7 h-7 mx-auto text-primary mb-2" />
                  <p className="font-elegant text-lg md:text-xl">
                    3 January 2026
                  </p>
                </div>

                <div>
                  <Clock className="w-7 h-7 mx-auto text-primary mb-2" />
                  <p className="font-elegant text-lg md:text-xl">
                    5:30 PM – 8:00 PM
                  </p>
                </div>
              </div>

            </div>
          </div>
        </motion.div>

        {/* 🔥 COUNTDOWN — below venue */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="flex flex-wrap justify-center gap-6 mt-16"
        >
          {Object.entries(timeLeft).map(([label, value]) => (
            <div
              key={label}
              className="w-24 h-24 md:w-28 md:h-28 rounded-3xl
                         bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10
                         backdrop-blur-md border border-primary/30
                         flex flex-col items-center justify-center
                         shadow-[0_20px_50px_-15px_rgba(0,0,0,0.4)]"
            >
              <span className="font-display text-3xl md:text-4xl text-primary">
                {value}
              </span>
              <span className="mt-2 text-xs md:text-sm uppercase tracking-[0.3em] text-muted-foreground">
                {label}
              </span>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default VenueSection;
