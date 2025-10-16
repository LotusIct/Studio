import React from "react";
import heroImage from "../assets/hero2 (1).png"; // substitua pelo nome da sua imagem hero

export default function HomeSection() {
  return (
    <section id="home" className="home-section">
      <div className="hero-image-container">
        <img src={heroImage} alt="VIBE Studio Hero" className="hero-image" />

       
      </div>
    </section>
  );
}
