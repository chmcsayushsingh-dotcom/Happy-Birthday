import { useEffect, useRef } from "react";

export default function MusicPlayer() {
  const audioRef = useRef(null);

  useEffect(() => {
    const enableAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
      document.removeEventListener("click", enableAudio);
    };
    document.addEventListener("click", enableAudio);
  }, []);

  return (
    <audio ref={audioRef} loop preload="auto">
      <source src="/sounds/song.mp3" type="audio/mpeg" />
    </audio>
  );
}
