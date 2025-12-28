import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import bgMusic from "@/assets/nazm-nazm.mp3";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Try autoplay muted (ALLOWED)
    audio.muted = true;
    audio.volume = 0.5;

    audio.play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {});

    const unlockAudio = () => {
      if (!audio) return;

      audio.muted = false;
      audio.play().catch(() => {});
      setIsPlaying(true);
      setShowHint(false);

      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("scroll", unlockAudio);
    };

    // Any real interaction
    window.addEventListener("click", unlockAudio, { once: true });
    window.addEventListener("touchstart", unlockAudio, { once: true });
    window.addEventListener("scroll", unlockAudio, { once: true });

    return () => {
      window.removeEventListener("click", unlockAudio);
      window.removeEventListener("touchstart", unlockAudio);
      window.removeEventListener("scroll", unlockAudio);
    };
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.muted = false;
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={bgMusic} loop />

      {/* Floating Music Button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full
                   bg-gradient-festive text-white shadow-lg
                   hover:scale-110 transition-transform"
        aria-label="Toggle music"
      >
        {isPlaying ? <Pause size={20} /> : <Music size={20} />}
      </button>
    </>
  );
};

export default BackgroundMusic;
