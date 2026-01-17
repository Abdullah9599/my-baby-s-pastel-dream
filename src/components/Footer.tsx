import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-gradient-to-t from-kawaii-blush to-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4"
        >
          {/* Decorative bow */}
          <span className="text-5xl">🎀</span>

          {/* Message */}
          <p className="font-dancing text-2xl text-foreground">
            Made with all my love, just for you
          </p>

          {/* Hearts */}
          <div className="flex gap-2 items-center">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              >
                <Heart className="w-4 h-4 text-primary fill-primary" />
              </motion.div>
            ))}
          </div>

          {/* Year */}
          <p className="font-quicksand text-sm text-foreground/50 mt-4">
            Forever yours © {new Date().getFullYear()} 💕
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
