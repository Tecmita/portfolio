import { useState } from "react";
import viteLogo from "/vite.svg";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Carrousel from "./components/Carrousel";
import { carData } from "./data/carData";

function App() {
  return (
    <div className="overflow-x-hidden bg-[#0A0A0B] min-h-screen">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <div>
        <Carrousel slides={carData} speed={40} />
      </div>
    </div>
  );
}

export default App;
