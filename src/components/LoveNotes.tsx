import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Gift, Mail, Star, Sparkles } from "lucide-react";

const loveNotes = [
  { 
    icon: Heart, 
    title: "My First Love", 
    message: "You are the first person I think about when I wake up and the last before I sleep 💕",
    color: "bg-primary/20 hover:bg-primary/30"
  },
  { 
    icon: Gift, 
    title: "My Greatest Gift", 
    message: "Having you in my life is the best present I could ever receive 🎁",
    color: "bg-kawaii-peach/30 hover:bg-kawaii-peach/40"
  },
  { 
    icon: Mail, 
    title: "My Love Letter", 
    message: "If I could write you a million letters, each one would say: I love you more 💌",
    color: "bg-kawaii-lavender/30 hover:bg-kawaii-lavender/40"
  },
  { 
    icon: Star, 
    title: "My Brightest Star", 
    message: "You light up my darkest days and make everything beautiful ⭐",
    color: "bg-kawaii-gold/20 hover:bg-kawaii-gold/30"
  },
  { 
    icon: Sparkles, 
    title: "My Magic", 
    message: "Being with you feels like magic - every moment is special ✨",
    color: "bg-kawaii-mint/30 hover:bg-kawaii-mint/40"
  },
];

const LoveNotes = () => {
  const [revealedNotes, setRevealedNotes] = useState<number[]>([]);

  const toggleNote = (index: number) => {
    if (revealedNotes.includes(index)) {
      setRevealedNotes(revealedNotes.filter((i) => i !== index));
    } else {
      setRevealedNotes([...revealedNotes, index]);
    }
  };

  return (
    <section className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-pacifico text-gradient-romantic mb-4">
            Love Notes For You 💌
          </h2>
          <p className="text-lg font-quicksand text-foreground/70">
            Click each one to reveal a special message~
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loveNotes.map((note, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => toggleNote(index)}
              className={`
                relative cursor-pointer rounded-3xl p-6 
                ${note.color} 
                border-2 border-primary/20
                shadow-soft transition-all duration-300
                hover:shadow-dreamy hover:scale-105
                min-h-[180px]
              `}
            >
              <AnimatePresence mode="wait">
                {!revealedNotes.includes(index) ? (
                  <motion.div
                    key="closed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex flex-col items-center justify-center h-full gap-4"
                  >
                    <motion.div
                      animate={{ 
                        y: [0, -5, 0],
                        rotate: [0, 5, -5, 0] 
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <note.icon className="w-12 h-12 text-primary fill-primary/50" />
                    </motion.div>
                    <span className="font-dancing text-xl text-foreground">
                      {note.title}
                    </span>
                    <span className="text-sm text-foreground/50 font-quicksand">
                      Tap to open 💕
                    </span>
                  </motion.div>
                ) : (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    exit={{ opacity: 0, rotateY: -90 }}
                    className="flex flex-col items-center justify-center h-full text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: [0, 1.2, 1] }}
                      transition={{ delay: 0.2 }}
                    >
                      <Heart className="w-8 h-8 text-primary fill-primary mb-4" />
                    </motion.div>
                    <p className="font-quicksand text-foreground leading-relaxed">
                      {note.message}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Decorative corner */}
              <div className="absolute top-2 right-2">
                <Sparkles className="w-4 h-4 text-kawaii-gold animate-twinkle" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoveNotes;
