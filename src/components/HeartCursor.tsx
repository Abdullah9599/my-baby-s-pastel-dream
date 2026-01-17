import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

interface HeartTrail {
  id: number;
  x: number;
  y: number;
}

const HeartCursor = () => {
  const [hearts, setHearts] = useState<HeartTrail[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let lastAddTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });

      const now = Date.now();
      if (now - lastAddTime > 50) {
        lastAddTime = now;
        const newHeart: HeartTrail = {
          id: now,
          x: e.clientX,
          y: e.clientY,
        };
        setHearts((prev) => [...prev.slice(-15), newHeart]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setHearts((prev) => prev.slice(-10));
    }, 500);
    return () => clearInterval(cleanup);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100]">
      <AnimatePresence>
        {hearts.map((heart, index) => (
          <motion.div
            key={heart.id}
            initial={{ 
              x: heart.x - 8, 
              y: heart.y - 8, 
              scale: 0.5, 
              opacity: 0.8 
            }}
            animate={{ 
              y: heart.y - 30, 
              scale: 0.3, 
              opacity: 0 
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute"
            style={{ zIndex: 100 - index }}
          >
            <Heart 
              size={16} 
              className="fill-primary text-primary"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default HeartCursor;
