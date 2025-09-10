import React, { useEffect, useRef, useState } from "react";
import confetti from "canvas-confetti";

/**
 * Slider unlock implemented with pointer events (no external libs).
 * onUnlock() is called when slider passes threshold.
 */
export default function CoverUnlock({ onUnlock }) {
  const trackRef = useRef(null);
  const knobRef = useRef(null);
  const draggingRef = useRef(false);
  const [pos, setPos] = useState(0); // 0..1
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    const move = (e) => {
      if (!draggingRef.current) return;
      const track = trackRef.current.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      let p = (clientX - track.left) / track.width;
      p = Math.max(0, Math.min(1, p));
      setPos(p);
    };
    const up = () => {
      if (!draggingRef.current) return;
      draggingRef.current = false;
      // success threshold
      if (pos >= 0.86) {
        setPos(1);
        setUnlocked(true);
        confetti({
          particleCount: 150,
          spread: 70,
          origin: { y: 0.6 },
        });
        // trigger parent (user gesture allowed)
        setTimeout(() => onUnlock?.(), 250);
      } else {
        // snap back
        setPos(0);
      }
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [pos, onUnlock]);

  const onPointerDown = (e) => {
    e.preventDefault();
    draggingRef.current = true;
  };

  return (
    <div className="center-wrap">
      <div className="page">
        <div style={{ textAlign: "center" }}>
          <div className="h1 glow">Happy Birthday, Shikha ✨</div>
          <div className="sub">Slide the heart into the lock to open your surprise</div>

          <div ref={trackRef} className="slider-track" style={{ marginTop: 22 }}>
            <div className="slider-text">Slide to unlock</div>
            <div className="lock-icon">🔒</div>

            <div
              ref={knobRef}
              className="slider-knob"
              onMouseDown={onPointerDown}
              onTouchStart={onPointerDown}
              style={{ left: `${pos * 100}%`, transform: "translate(-50%, -50%)" }}
            >
              💖
            </div>
          </div>

          <div style={{ marginTop: 18 }}>
            <button className="btn ghost" onClick={() => { setPos(1); confetti({particleCount: 120, spread:60}); setTimeout(()=>onUnlock?.(),240); }}>
              Skip & Open
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
}
