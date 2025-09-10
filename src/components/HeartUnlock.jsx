import React, { useState } from "react";
import Confetti from "react-confetti";
import Draggable from "react-draggable";

export default function HeartUnlock({ onUnlock }) {
  const [done, setDone] = useState(false);

  const handleStop = (e, data) => {
    if (data.x > 200) { // dragged far enough
      setDone(true);
      setTimeout(onUnlock, 1500);
    }
  };

  return (
    <div className="unlock-page">
      {done && <Confetti recycle={false} numberOfPieces={400} />}
      <h1 className="glow-text">Happy Birthday Shikha ❤️</h1>
      {!done && (
        <div className="slider-area">
          <span className="lock">🔒</span>
          <Draggable axis="x" onStop={handleStop}>
            <div className="heart">❤️</div>
          </Draggable>
        </div>
      )}
    </div>
  );
}
