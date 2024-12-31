import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import TechBanner from "./components/TechBanner";
import Achievements from "./components/Achievements";
import SocialSection from "./components/SocialSection";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <main className="cursor-pizza">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <TechBanner />
      <Achievements />
      <SocialSection />
      <Analytics />
    </main>
  );
}

export default App;
