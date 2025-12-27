import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import RangoliMandala from "./RangoliMandala";

const Footer = () => {
  return (
    <footer className="relative py-16 px-4 bg-burgundy overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
        <RangoliMandala size="xl" animate={false} />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative element */}
          <div className="flex justify-center mb-6">
            <RangoliMandala size="sm" animate={true} />
          </div>

          {/* Names */}
          <h3 className="font-script text-3xl md:text-4xl text-secondary mb-4">
            Anand Mohan
          </h3>

          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-0.5 bg-gradient-gold" />
            <Heart className="w-5 h-5 text-primary fill-primary" />
            <div className="w-16 h-0.5 bg-gradient-gold" />
          </div>

          {/* Quote */}
          <p className="font-elegant text-lg text-primary-foreground/80 italic max-w-md mx-auto mb-8">
            "May this celebration be filled with love, laughter, and beautiful memories that last a lifetime."
          </p>

          {/* Hashtag */}
          <p className="font-display text-xl text-accent">
            #AnandKiShaadi
          </p>

        {/* Copyright */}
<div className="mt-8 inline-block rounded-full bg-primary-foreground/10 px-6 py-2">
  <p className="font-elegant text-sm text-primary-foreground/70 tracking-wide">
    With Love & Blessings from the Family
  </p>
</div>

        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
