import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Countdown from "@/components/Countdown";
import HeroSection from "@/components/HeroSection";
import LoveNotes from "@/components/LoveNotes";
import PhotoGallery from "@/components/PhotoGallery";
import LoveLetter from "@/components/LoveLetter";
import Timeline from "@/components/Timeline";
import FinalSurprise from "@/components/FinalSurprise";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import HeartCursor from "@/components/HeartCursor";
import MusicPlayer from "@/components/MusicPlayer";

const Index = () => {
  const [showCountdown, setShowCountdown] = useState(true);

  const handleCountdownComplete = () => {
    setShowCountdown(false);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Heart cursor trail */}
      <HeartCursor />

      {/* Floating background hearts */}
      <FloatingHearts />

      {/* Music player */}
      <MusicPlayer />

      <AnimatePresence>
        {showCountdown && (
          <Countdown onComplete={handleCountdownComplete} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!showCountdown && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HeroSection />
            <LoveNotes />
            <PhotoGallery />
            <LoveLetter />
            <Timeline />
            <FinalSurprise />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
