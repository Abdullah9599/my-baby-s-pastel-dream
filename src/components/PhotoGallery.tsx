import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Heart } from "lucide-react";

const photos = [
  { id: 1, placeholder: "💕", caption: "Our first photo together" },
  { id: 2, placeholder: "🌸", caption: "That beautiful day" },
  { id: 3, placeholder: "✨", caption: "Making memories" },
  { id: 4, placeholder: "🎀", caption: "My favorite moment" },
  { id: 5, placeholder: "💖", caption: "Forever & always" },
  { id: 6, placeholder: "🌷", caption: "With you by my side" },
];

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gradient-dreamy">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-pacifico text-gradient-romantic mb-4">
            Our Precious Memories 📸
          </h2>
          <p className="text-lg font-quicksand text-foreground/70">
            Every moment with you is a treasure
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ rotate: [-1, 1, -1], scale: 1.05 }}
              onClick={() => setSelectedPhoto(photo.id)}
              className="cursor-pointer group"
            >
              {/* Polaroid style frame */}
              <div className="bg-white p-3 pb-12 rounded-lg shadow-dreamy transition-all duration-300 group-hover:shadow-glow">
                {/* Photo area - placeholder for now */}
                <div className="aspect-square bg-gradient-to-br from-kawaii-blush to-kawaii-lavender rounded-sm flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl">{photo.placeholder}</span>
                  
                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-primary/20 flex items-center justify-center"
                  >
                    <Heart className="w-12 h-12 text-white fill-white" />
                  </motion.div>
                </div>

                {/* Caption area */}
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="font-dancing text-lg text-foreground/80 text-center">
                    {photo.caption}
                  </p>
                </div>
              </div>

              {/* Tape decoration */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-kawaii-gold/40 -rotate-2" />
            </motion.div>
          ))}
        </div>

        {/* Add your photos prompt */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 text-foreground/50 font-quicksand text-sm"
        >
          ✨ Add your own photos to make it even more special! ✨
        </motion.p>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white p-4 pb-16 rounded-xl shadow-2xl max-w-2xl w-full"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-2 right-2 z-10 p-2 rounded-full bg-primary/20 hover:bg-primary/30 transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>

              <div className="aspect-video bg-gradient-to-br from-kawaii-blush to-kawaii-lavender rounded-lg flex items-center justify-center">
                <span className="text-9xl">
                  {photos.find((p) => p.id === selectedPhoto)?.placeholder}
                </span>
              </div>

              <p className="absolute bottom-4 left-4 right-4 font-dancing text-2xl text-foreground/80 text-center">
                {photos.find((p) => p.id === selectedPhoto)?.caption} 💕
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PhotoGallery;
