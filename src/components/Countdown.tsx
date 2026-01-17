import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Sparkles, Star } from "lucide-react";
import confetti from "canvas-confetti";

interface CountdownProps {
  onComplete: () => void;
}

const Countdown = ({ onComplete }: CountdownProps) => {
  const [count, setCount] = useState(10);

  const launchFirecrackers = () => {
    const duration = 2000;
    const end = Date.now() + duration;

    const colors = ['#ff69b4', '#ffb6c1', '#ffc0cb', '#ff1493', '#ff85a2', '#ffd700'];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    // Initial burst
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors: colors,
    });

    frame();
  };

  useEffect(() => {
    if (count === 0) {
      launchFirecrackers();
      setTimeout(onComplete, 2000);
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onComplete]);

  const floatingElements = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    type: i % 3 === 0 ? "heart" : i % 3 === 1 ? "star" : "sparkle",
    size: Math.random() * 24 + 12,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-dreamy overflow-hidden"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Floating decorations */}
      {floatingElements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-primary"
          style={{ left: `${el.x}%`, top: `${el.y}%` }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            delay: el.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {el.type === "heart" && (
            <Heart size={el.size} className="fill-primary opacity-60" />
          )}
          {el.type === "star" && (
            <Star size={el.size} className="fill-kawaii-gold text-kawaii-gold opacity-70" />
          )}
          {el.type === "sparkle" && (
            <Sparkles size={el.size} className="text-kawaii-lavender opacity-60" />
          )}
        </motion.div>
      ))}

      {/* Main countdown */}
      <div className="relative">
        <AnimatePresence mode="wait">
          {count > 0 ? (
            <motion.div
              key={count}
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 0.5, rotate: 180, opacity: 0 }}
              transition={{ duration: 0.5, ease: "backOut" }}
              className="relative"
            >
              <span className="text-[200px] font-pacifico text-gradient-romantic drop-shadow-lg">
                {count}
              </span>
              
              {/* Orbiting hearts */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: "50%",
                    top: "50%",
                  }}
                  animate={{
                    rotate: [i * 90, i * 90 + 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <motion.div
                    style={{ x: 120, y: -20 }}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart className="w-8 h-8 fill-primary text-primary" />
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.6, times: [0, 0.7, 1] }}
              className="flex flex-col items-center gap-4"
            >
              <Heart className="w-32 h-32 fill-primary text-primary animate-heart-beat" />
              <span className="text-4xl font-dancing text-foreground">
                Here we go... 💕
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom text */}
      <motion.p
        className="absolute bottom-20 text-2xl font-dancing text-foreground/80"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Something special is coming... ✨
      </motion.p>
    </motion.div>
  );
};

export default Countdown;
