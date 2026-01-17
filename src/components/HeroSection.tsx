import { motion } from "framer-motion";
import { Heart, Sparkles, Star, Ribbon } from "lucide-react";

const HeroSection = () => {
  const decorations = [
    { icon: Heart, className: "top-20 left-10 w-12 h-12 fill-primary text-primary", delay: 0 },
    { icon: Star, className: "top-32 right-20 w-8 h-8 fill-kawaii-gold text-kawaii-gold", delay: 0.2 },
    { icon: Sparkles, className: "top-40 left-1/4 w-10 h-10 text-kawaii-lavender", delay: 0.4 },
    { icon: Heart, className: "bottom-40 right-10 w-14 h-14 fill-kawaii-peach text-kawaii-peach", delay: 0.6 },
    { icon: Star, className: "bottom-60 left-16 w-6 h-6 fill-kawaii-gold text-kawaii-gold", delay: 0.8 },
    { icon: Ribbon, className: "top-60 right-1/4 w-12 h-12 text-primary", delay: 1 },
    { icon: Heart, className: "top-1/3 left-20 w-8 h-8 fill-kawaii-lavender text-kawaii-lavender", delay: 1.2 },
    { icon: Sparkles, className: "bottom-32 right-1/3 w-8 h-8 text-kawaii-peach", delay: 1.4 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-dreamy">
      {/* Floating decorations */}
      {decorations.map((dec, i) => (
        <motion.div
          key={i}
          className={`absolute ${dec.className}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -20, 0],
          }}
          transition={{ 
            opacity: { delay: dec.delay, duration: 0.5 },
            scale: { delay: dec.delay, duration: 0.5, type: "spring" },
            y: { delay: dec.delay + 0.5, duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <dec.icon className="w-full h-full" />
        </motion.div>
      ))}

      {/* Main content */}
      <div className="relative z-10 text-center px-4">
        {/* Bow decoration */}
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <span className="text-8xl">🎀</span>
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl font-pacifico text-gradient-romantic mb-6 leading-tight"
        >
          Happy Birthday
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-4xl md:text-6xl font-dancing text-foreground mb-8"
        >
          My Baby 💕
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-xl md:text-2xl font-quicksand text-foreground/80 max-w-xl mx-auto"
        >
          Today is all about you, my love ✨
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { delay: 1.5 },
            y: { delay: 1.5, duration: 1.5, repeat: Infinity }
          }}
          className="mt-16"
        >
          <div className="flex flex-col items-center gap-2 text-foreground/60">
            <span className="text-sm font-quicksand">Scroll down for more love</span>
            <Heart className="w-6 h-6 fill-primary text-primary animate-bounce-gentle" />
          </div>
        </motion.div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto fill-card">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
