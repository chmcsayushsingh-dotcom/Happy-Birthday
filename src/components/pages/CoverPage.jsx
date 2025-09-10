import { useNavigate } from "react-router-dom";
import { useState } from "react";
import confetti from "canvas-confetti";

export default function CoverPage() {
  const [unlocked, setUnlocked] = useState(false);
  const navigate = useNavigate();

  const unlock = () => {
    setUnlocked(true);
    confetti();
    setTimeout(() => navigate("/letter"), 1500);
  };

  return (
    <div className="page">
      {!unlocked ? (
        <>
          <h1>💝 Unlock the Surprise 💝</h1>
          <button onClick={unlock}>Slide the Heart 🔓</button>
        </>
      ) : (
        <h2>Unlocked!</h2>
      )}
    </div>
  );
}
