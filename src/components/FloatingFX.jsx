import { useEffect } from "react";

export default function FloatingFX() {
  useEffect(() => {
    const create = (emoji) => {
      const el = document.createElement("div");
      el.textContent = emoji;
      el.style.position = "fixed";
      el.style.left = Math.random() * 100 + "vw";
      el.style.bottom = "-50px";
      el.style.fontSize = "24px";
      el.style.animation = "floatUp 6s linear infinite";
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 6000);
    };

    const interval = setInterval(() => {
      create(Math.random() > 0.5 ? "🎈" : "💖");
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <style>
      {`
        @keyframes floatUp {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-120vh); opacity: 0; }
        }
      `}
    </style>
  );
}
