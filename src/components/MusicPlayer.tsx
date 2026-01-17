import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Volume2, VolumeX, Music } from "lucide-react";

const MusicPlayer = () => {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio element with a soft ambient track
    // Using a royalty-free ambient music URL
    audioRef.current = new Audio(
      "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3"
    );
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleMute = async () => {
    if (!audioRef.current) return;

    if (isMuted) {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (e) {
        console.log("Audio playback failed:", e);
      }
    }

    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <motion.button
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1 }}
      onClick={toggleMute}
      className="
        fixed bottom-6 right-6 z-50
        p-4 rounded-full
        bg-gradient-to-r from-primary to-kawaii-peach
        shadow-dreamy hover:shadow-glow
        transition-all duration-300
        border-2 border-white
      "
    >
      <motion.div
        animate={!isMuted ? { scale: [1, 1.1, 1] } : {}}
        transition={{ duration: 1, repeat: Infinity }}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-foreground" />
        ) : (
          <Volume2 className="w-6 h-6 text-foreground" />
        )}
      </motion.div>

      {/* Music note animation when playing */}
      {!isMuted && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, 1, 0], y: -30 }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-4 left-1/2 -translate-x-1/2"
        >
          <Music className="w-4 h-4 text-primary" />
        </motion.div>
      )}
    </motion.button>
  );
};

export default MusicPlayer;
