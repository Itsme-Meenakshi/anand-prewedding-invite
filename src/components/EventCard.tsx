import { motion } from "framer-motion";
import { ReactNode } from "react";

interface EventCardProps {
  title: string;
  subtitle?: string;
  icon?: ReactNode;
  children: ReactNode;
  delay?: number;
}

const EventCard = ({ title, subtitle, icon, children, delay = 0 }: EventCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay }}
      className="relative bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-10 shadow-festive overflow-hidden group"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Top decorative border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-festive rounded-b-full" />
      
      <div className="relative z-10">
        {/* Icon */}
        {icon && (
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-festive flex items-center justify-center text-primary-foreground">
              {icon}
            </div>
          </div>
        )}

        {/* Title */}
        <h3 className="font-display text-2xl md:text-3xl text-foreground text-center mb-2">
          {title}
        </h3>
        
        {/* Subtitle */}
        {subtitle && (
          <p className="font-script text-xl text-primary text-center mb-6">
            {subtitle}
          </p>
        )}

        {/* Content */}
        <div className="text-center font-elegant text-lg text-muted-foreground">
          {children}
        </div>
      </div>

      {/* Corner decorations */}
      <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
      <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
      <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
      <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />
    </motion.div>
  );
};

export default EventCard;
