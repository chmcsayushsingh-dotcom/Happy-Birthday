import React, { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

export default function FlipBook() {
  const flipRef = useRef();

  const playFlipSound = () => {
    const sound = new Audio("/flip.mp3");
    sound.play().catch(() => {});
  };

  return (
    <div className="book-container">
      <HTMLFlipBook
        width={400}
        height={600}
        showCover={true}
        ref={flipRef}
        onFlip={playFlipSound}
        className="book"
      >
        {/* Cover */}
        <div className="page">
          <h1 className="page-text glow-text floating-text fade-in">
            💝 Happy Birthday
          </h1>
        </div>

        {/* Letter Page */}
        <div className="page">
          <p className="page-text glow-text floating-text fade-in">
            My love, here’s a little letter just for you 💌
          </p>
        </div>

        {/* Slideshow Page */}
        <div className="page">
          <p className="page-text glow-text floating-text fade-in">
            📸 Our Memories Shine Forever
          </p>
        </div>

        {/* Memories Page */}
        <div className="page">
          <p className="page-text glow-text floating-text fade-in">
            ✨ Every Moment With You is Magic
          </p>
        </div>

        {/* Final Page */}
        <div className="page">
          <h2 className="page-text glow-text floating-text fade-in">
            🎂 Happy Birthday, My Forever 💕
          </h2>
        </div>
      </HTMLFlipBook>
    </div>
  );
}
