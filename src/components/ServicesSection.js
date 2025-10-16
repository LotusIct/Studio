import React, { useRef, useEffect } from "react";
import "./ServiceSection.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
  { title: "Marketing Digital", description: "Campanhas estratégicas, tráfego pago e branding de alto impacto." },
  { title: "Front-End Moderno", description: "Interfaces responsivas e imersivas com tecnologias de ponta." },
  { title: "Design Gráfico", description: "Identidades visuais e materiais com estética e propósito." },
  { title: "Design Emocional", description: "Criação de experiências que despertam emoção e conexão." },
  { title: "Neurodesign", description: "Psicologia aplicada ao design para decisões visuais mais eficazes." },
  { title: "UX Research", description: "Compreensão do comportamento do usuário como base da criação." },
  { title: "Branding Estratégico", description: "Construção de marcas fortes, com propósito e autenticidade." },
  { title: "Consultoria Digital", description: "Direcionamento criativo e estratégico para o seu negócio." },
];

export default function ServicesSection() {
  const scrollRef = useRef(null);

  // Passa 1 card por vez
  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const card = scrollRef.current.querySelector(".service-card");
    if (!card) return;

    const cardWidth = card.offsetWidth + 24; // card + gap
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  // Duplicar cards para efeito infinito
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const children = Array.from(slider.children);
    children.forEach((child) => {
      const clone = child.cloneNode(true);
      slider.appendChild(clone);
    });

    const cards = slider.querySelectorAll(".service-card");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("enter");
        });
      },
      { threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // Scroll infinito
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const handleScroll = () => {
      const card = slider.querySelector(".service-card");
      if (!card) return;

      const cardWidth = card.offsetWidth + 24;
      const totalCards = slider.children.length;
      const halfScrollWidth = (cardWidth * totalCards) / 2;

      if (slider.scrollLeft >= halfScrollWidth) {
        slider.scrollLeft -= halfScrollWidth;
      } else if (slider.scrollLeft <= 0) {
        slider.scrollLeft += halfScrollWidth;
      }
    };

    slider.addEventListener("scroll", handleScroll);
    return () => slider.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="services" className="services-section">
      <div className="serviços">
        <h2>Nossos Serviços</h2>
        <div className="slider-container">
          <button className="nav-button left" onClick={() => scroll("left")}><ChevronLeft /></button>
          <div className="services-slider" ref={scrollRef}>
            {services.map((s, idx) => (
              <div key={idx} className="service-card">
                <div className="card-content">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="nav-button right" onClick={() => scroll("right")}><ChevronRight /></button>
        </div>
      </div>
    </section>
  );
}
