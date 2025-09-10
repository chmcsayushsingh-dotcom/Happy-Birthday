import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MemoriesPage() {
  const [flipped, setFlipped] = useState([false, false, false]);
  const navigate = useNavigate();

  const toggle = (i) => {
    setFlipped((prev) => {
      const newArr = [...prev];
      newArr[i] = !newArr[i];
      return newArr;
    });
  };

  return (
    <div className="page">
      <h1>Flip the Cards 🎴</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        {["I", "ƎVO⅃", "UOY"].map((text, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            style={{
              width: "120px",
              height: "160px",
              background: flipped[i] ? "white" : "pink",
              color: flipped[i] ? "black" : "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "12px",
              cursor: "pointer",
              boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
              transition: "transform 0.6s",
              transform: flipped[i] ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            {flipped[i] ? `💖 ${text}` : "Click"}
          </div>
        ))}
      </div>
      <div>
        <button onClick={() => navigate(-1)}>⬅ Back</button>
        <button onClick={() => navigate("/final")}>Next ➡</button>
      </div>
    </div>
  );
}
