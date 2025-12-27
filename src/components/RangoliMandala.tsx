import { motion } from "framer-motion";
import rangoliMandala from "@/assets/rangoli-mandala.png";

interface RangoliMandalaProps {
  className?: string;
  animate?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeClasses = {
  sm: "w-24 h-24",
  md: "w-40 h-40",
  lg: "w-64 h-64",
  xl: "w-96 h-96",
};

const RangoliMandala = ({ className = "", animate = true, size = "md" }: RangoliMandalaProps) => {
  return (
    <motion.div
      className={`${sizeClasses[size]} ${className}`}
      animate={animate ? { rotate: 360 } : undefined}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <img
        src={rangoliMandala}
        alt="Decorative Rangoli"
        className="w-full h-full object-contain opacity-80"
      />
    </motion.div>
  );
};

export default RangoliMandala;
