import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

const FinalSurprise = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);

    // Heart confetti explosion
    const colors = ["#f9a8d4", "#fbbf24", "#c4b5fd", "#fda4af", "#fb923c"];
    
    // Multiple confetti bursts
    const duration = 5000;
    const end = Date.now() + duration;

    const heartConfetti = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        shapes: ["circle"],
        scalar: 1.5,
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        shapes: ["circle"],
        scalar: 1.5,
      });

      if (Date.now() < end) {
        requestAnimationFrame(heartConfetti);
      }
    };

    // Initial big burst
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: colors,
      scalar: 2,
    });

    heartConfetti();
  };

  return (
    <section className="py-20 px-4 bg-card relative overflow-hidden min-h-[80vh] flex items-center justify-center">
      {/* Background floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              rotate: [0, 360],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Heart
              className={`w-${4 + Math.floor(Math.random() * 4)} h-${4 + Math.floor(Math.random() * 4)} text-primary fill-primary/30`}
            />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <AnimatePresence mode="wait">
          {!isClicked ? (
            <motion.div
              key="button"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="flex flex-col items-center gap-8"
            >
              <motion.h2
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-3xl md:text-4xl font-pacifico text-gradient-romantic"
              >
                One more thing... 💕
              </motion.h2>

              <motion.button
                onClick={handleClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 20px hsl(350 80% 80% / 0.4)",
                    "0 0 40px hsl(350 80% 80% / 0.7)",
                    "0 0 20px hsl(350 80% 80% / 0.4)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Infinity },
                }}
                className="
                  relative px-12 py-6 rounded-full
                  bg-gradient-to-r from-primary via-kawaii-peach to-kawaii-lavender
                  text-foreground font-dancing text-2xl
                  border-4 border-white
                  shadow-dreamy hover:shadow-glow
                  transition-all duration-300
                "
              >
                <span className="relative z-10">Click if you love me 😳💕</span>
                
                {/* Sparkle decorations */}
                <motion.div
                  className="absolute -top-2 -right-2"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-6 h-6 text-kawaii-gold" />
                </motion.div>
                <motion.div
                  className="absolute -bottom-2 -left-2"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Heart className="w-6 h-6 text-primary fill-primary" />
                </motion.div>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="message"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
              className="flex flex-col items-center gap-8"
            >
              {/* Big heart */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-32 h-32 text-primary fill-primary" />
              </motion.div>

              {/* Final message */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-6xl font-pacifico text-gradient-romantic"
              >
                I love you forever
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-2xl md:text-3xl font-dancing text-foreground"
              >
                my baby 💖
              </motion.p>

              {/* Floating hearts ring */}
              <motion.div
                className="relative w-48 h-48"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `rotate(${i * 45}deg) translateY(-80px)`,
                    }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  >
                    <Heart className="w-6 h-6 text-primary fill-primary -translate-x-1/2 -translate-y-1/2" />
                  </motion.div>
                ))}
              </motion.div>

              {/* Sparkles */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex gap-4 mt-4"
              >
                {["✨", "💕", "🎀", "💖", "✨"].map((emoji, i) => (
                  <motion.span
                    key={i}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="text-3xl"
                  >
                    {emoji}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FinalSurprise;
