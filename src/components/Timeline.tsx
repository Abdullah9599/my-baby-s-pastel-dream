import { motion } from "framer-motion";
import { Heart, Users, Sparkles, Star, Crown } from "lucide-react";

const timelineSteps = [
  {
    icon: Users,
    title: "Strangers",
    description: "Two souls in the same world, waiting to meet",
    emoji: "👋",
    color: "bg-kawaii-lavender",
  },
  {
    icon: Sparkles,
    title: "First Hello",
    description: "That magical moment when our eyes first met",
    emoji: "✨",
    color: "bg-kawaii-peach",
  },
  {
    icon: Star,
    title: "Best Friends",
    description: "Laughing, sharing secrets, building memories",
    emoji: "🌟",
    color: "bg-kawaii-mint",
  },
  {
    icon: Heart,
    title: "Falling in Love",
    description: "When friendship blossomed into something more",
    emoji: "💕",
    color: "bg-primary",
  },
  {
    icon: Crown,
    title: "Soulmates",
    description: "Forever and always, my one and only",
    emoji: "👑",
    color: "bg-kawaii-gold",
  },
];

const Timeline = () => {
  return (
    <section className="py-20 px-4 bg-gradient-dreamy overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-pacifico text-gradient-romantic mb-4">
            Our Beautiful Journey 💖
          </h2>
          <p className="text-lg font-quicksand text-foreground/70">
            From strangers to soulmates
          </p>
        </motion.div>

        {/* Timeline container with horizontal scroll on mobile */}
        <div className="overflow-x-auto pb-8 -mx-4 px-4">
          <div className="flex gap-4 md:gap-6 min-w-max md:min-w-0 md:grid md:grid-cols-5">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative flex flex-col items-center w-48 md:w-auto"
              >
                {/* Connection line */}
                {index < timelineSteps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-primary/50 to-kawaii-peach/50" />
                )}

                {/* Icon circle */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`
                    relative z-10 w-24 h-24 rounded-full ${step.color}/30
                    flex items-center justify-center
                    border-4 border-white shadow-dreamy
                    cursor-pointer
                  `}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 0.2 
                    }}
                  >
                    <step.icon className="w-10 h-10 text-foreground" />
                  </motion.div>
                  
                  {/* Floating emoji */}
                  <motion.span
                    className="absolute -top-2 -right-2 text-2xl"
                    animate={{ 
                      y: [0, -8, 0],
                      rotate: [0, 15, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.3 
                    }}
                  >
                    {step.emoji}
                  </motion.span>
                </motion.div>

                {/* Title and description */}
                <motion.div
                  className="mt-6 text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <h3 className="font-pacifico text-xl text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="font-quicksand text-sm text-foreground/70 max-w-[150px]">
                    {step.description}
                  </p>
                </motion.div>

                {/* Step number */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                  <span className="text-xs font-bold text-primary-foreground">
                    {index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll hint for mobile */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-foreground/50 font-quicksand md:hidden mt-4"
        >
          ← Swipe to see our journey →
        </motion.p>
      </div>
    </section>
  );
};

export default Timeline;
