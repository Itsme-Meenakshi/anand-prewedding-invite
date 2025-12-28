import { motion } from "framer-motion";
import {
  Music,
  Heart,
  PartyPopper,
  Calendar,
  Clock,
  MapPin,
} from "lucide-react";
import RangoliMandala from "./RangoliMandala";

const events = [
  {
    title: "Rangoli Night",
    description: "An evening of colours, music, dance, and joy.",
    date: "3 January 2026",
    time: "5:30 PM - 8:30 PM",
    venue: "Amrita Heritage",
    mapLink: "https://maps.app.goo.gl/LcjnxPGCBEmnxmqd7",
    icon: <Music className="w-6 h-6" />,
  },
  {
    title: "Wedding",
    description: "A sacred union celebrated with rituals, love, and blessings.",
    date: "4 January 2026",
    time: "11:20 AM - 12:05 PM",
    venue: "RDR Convention Center",
    mapLink: "https://maps.app.goo.gl/8B443Y1HLJtJ79Jx7",
    icon: <Heart className="w-6 h-6" />,
  },
  {
    title: "After Party",
    description: "A joyful celebration with laughter, music, and togetherness.",
    date: "4 January 2026",
    time: "6:00 PM - 10:00 PM",
    venue: "O by Tamara",
    mapLink: "https://maps.app.goo.gl/5Q31g7JDDvwBTTa38",
    icon: <PartyPopper className="w-6 h-6" />,
  },
];

const EventsTimeline = () => {
  return (
    <section className="relative py-20 md:py-32 px-4 bg-burgundy overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10">
          <RangoliMandala size="xl" animate={false} />
        </div>
        <div className="absolute bottom-10 right-10">
          <RangoliMandala size="xl" animate={false} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-elegant text-secondary tracking-[0.3em] uppercase text-sm mb-3">
            A Journey of
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
            Celebrations
          </h2>
          <div className="w-32 h-0.5 bg-gradient-gold mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

          {events.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                }`}
              >
                <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-xl p-6 hover:bg-card/20 transition-colors leading-relaxed">
                  {/* Header */}
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-festive flex items-center justify-center text-primary-foreground">
                      {event.icon}
                    </div>
                    <h3 className="font-display text-xl text-primary-foreground">
                      {event.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="font-elegant text-primary-foreground/80 mb-4">
                    {event.description}
                  </p>

                  {/* Date & Time — FIXED ALIGNMENT */}
                   <div
  className={`flex items-center gap-4 text-sm text-primary-foreground/90 mb-4 ${
    index % 2 === 0 ? "md:justify-end" : "md:justify-start"
  }`}
>
  <div className="flex items-center gap-1">
    <Clock className="w-4 h-4 shrink-0" />
    <span>{event.time}</span>
  </div>

  <span className="opacity-50">|</span>

  <div className="flex items-center gap-1">
    <Calendar className="w-4 h-4 shrink-0" />
    <span>{event.date}</span>
  </div>
</div>



                  {/* Venue Button */}
                  <a
                    href={event.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-festive text-primary-foreground font-elegant text-sm tracking-wide shadow-gold hover:scale-105 transition-transform"
                  >
                    <MapPin className="w-4 h-4" />
                    {event.venue}
                  </a>
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-burgundy hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsTimeline;
