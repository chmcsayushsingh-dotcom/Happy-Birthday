import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

export default function FinalPage() {
  const navigate = useNavigate();

  useEffect(() => {
    confetti({ particleCount: 150, spread: 100 });
    const interval = setInterval(() => {
      confetti({ particleCount: 50, spread: 60 });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <h1>Happy Birthday Shikha 🎂💖</h1>
      <h2>From yours truly, Ayush ✍️</h2>
      <p style={{ fontStyle: "italic" }}>May this year bring endless love and joy!</p>
      <button onClick={() => navigate("/")}>🔄 Start Again</button>
    </div>
  );
}
