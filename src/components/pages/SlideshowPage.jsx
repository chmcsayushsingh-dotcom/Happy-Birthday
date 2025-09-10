import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg"];

export default function SlideshowPage() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      3000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="page">
      <h1>Our Memories 📸</h1>
      <img
        src={images[index]}
        alt="Memory"
        style={{
          width: "300px",
          height: "300px",
          objectFit: "cover",
          border: "10px solid white",
          borderRadius: "16px",
          boxShadow: "0px 4px 12px rgba(0,0,0,0.3)",
        }}
      />
      <div>
        <button onClick={() => navigate(-1)}>⬅ Back</button>
        <button onClick={() => navigate("/memories")}>Next ➡</button>
      </div>
    </div>
  );
}
