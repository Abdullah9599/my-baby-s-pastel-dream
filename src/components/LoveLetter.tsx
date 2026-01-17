import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

const letterContent = `My Dearest Love,

Happy Birthday to the most beautiful soul I know 💕

From the moment you came into my life, everything changed. The world became brighter, music sounded sweeter, and every day felt like a gift.

You are my sunshine on cloudy days, my calm in the storm, and my forever adventure partner. Your smile makes my heart skip a beat, and your laugh is my favorite melody.

Thank you for loving me, for choosing me, and for being you. Today, I celebrate the day the universe gave me my greatest blessing - you.

May this year bring you all the happiness your beautiful heart deserves. I promise to be there for every smile, every tear, every dream, and every step of the way.

I love you more than words could ever express, more than all the stars in the sky, and more with each passing day.

Forever and always yours,
With all my love 💖`;

const LoveLetter = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let index = 0;
    const timer = setInterval(() => {
      if (index < letterContent.length) {
        setDisplayedText(letterContent.slice(0, index + 1));
        index++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section ref={ref} className="py-20 px-4 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Heart className="w-4 h-4 text-primary fill-primary/30" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-pacifico text-gradient-romantic mb-4">
            A Letter From My Heart 💌
          </h2>
        </motion.div>

        {/* Letter container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Paper texture effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-kawaii-cream to-white rounded-3xl shadow-dreamy" />
          
          {/* Decorative corners */}
          <div className="absolute -top-4 -left-4">
            <span className="text-4xl">🎀</span>
          </div>
          <div className="absolute -top-4 -right-4">
            <span className="text-4xl">✨</span>
          </div>
          <div className="absolute -bottom-4 -left-4">
            <Sparkles className="w-8 h-8 text-kawaii-gold" />
          </div>
          <div className="absolute -bottom-4 -right-4">
            <Heart className="w-8 h-8 text-primary fill-primary" />
          </div>

          {/* Letter content */}
          <div className="relative p-8 md:p-12">
            <p className="font-dancing text-xl md:text-2xl text-foreground leading-relaxed whitespace-pre-line">
              {displayedText}
              {!isComplete && (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-0.5 h-6 bg-primary ml-1"
                />
              )}
            </p>

            {/* Completion hearts */}
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="flex justify-center gap-2 mt-8"
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      y: [0, -10, 0],
                      scale: [1, 1.2, 1] 
                    }}
                    transition={{ 
                      delay: i * 0.1, 
                      duration: 1, 
                      repeat: Infinity 
                    }}
                  >
                    <Heart className="w-6 h-6 text-primary fill-primary" />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetter;
