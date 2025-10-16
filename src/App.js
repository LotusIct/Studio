import React from "react";
import Navbar from "./components/NavBar"; 
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ContactSection from "./components/ContactSection";
import WorkProcess from "./components/WorkProcess";

export default function App() {
  return (
    <div className="app-container">
      {/* Navbar fixa no topo */}
      <Navbar />

      {/* Conteúdo principal */}
      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <WorkProcess />
      <PortfolioSection />
      <ContactSection />
    </div>
  );
}
