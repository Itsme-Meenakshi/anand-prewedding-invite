import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import bgMusic from "@/assets/nazm-nazm.mp3";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const startMusic = () => {
      if (!audioRef.current) return;

      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);

      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };

    window.addEventListener("click", startMusic);
    window.addEventListener("touchstart", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} src={bgMusic} loop />

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
