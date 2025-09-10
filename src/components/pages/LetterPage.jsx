import { useNavigate } from "react-router-dom";

export default function LetterPage() {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1>Dear Shikha ❤️</h1>
      <p>
        From the moment we met, my world became brighter.  
        You’re not just my girl, you’re my best friend, my laughter, my peace.  
        Today I want you to know — you mean everything to me 💕
      </p>
      <div>
        <button onClick={() => navigate(-1)}>⬅ Back</button>
        <button onClick={() => navigate("/slideshow")}>Next ➡</button>
      </div>
    </div>
  );
}
