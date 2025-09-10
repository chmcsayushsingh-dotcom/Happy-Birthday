import React, { useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import CoverPage from "./components/pages/CoverPage";
import LetterPage from "./components/pages/LetterPage";
import SlideshowPage from "./components/pages/SlideshowPage";
import MemoriesPage from "./components/pages/MemoriesPage";
import FinalPage from "./components/pages/FinalPage";
import MusicPlayer from "./components/MusicPlayer";
import CoverUnlock from "./components/CoverUnlock";
import FlipBook from "./components/FlipBook";
import "./index.css";


function App() {
  const musicRef = useRef(null);
  const [unlocked, setUnlocked] = useState(false);

  const handleUnlock = async () => {
    try {
      // Play background music on unlock
      if (musicRef.current) {
        await musicRef.current.play();
      }
    } catch (e) {
      console.warn("Autoplay blocked, user needs interaction:", e);
    }
    setUnlocked(true);
  };

  return (
    <>
      <MusicPlayer ref={musicRef} />

      {!unlocked ? (
        <CoverUnlock onUnlock={handleUnlock} />
      ) : (
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<CoverPage />} />
            <Route path="/letter" element={<LetterPage />} />
            <Route path="/slideshow" element={<SlideshowPage />} />
            <Route path="/memories" element={<MemoriesPage />} />
            <Route path="/final" element={<FinalPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
