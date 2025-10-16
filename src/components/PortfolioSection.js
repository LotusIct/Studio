import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./PortfolioSection.css";

// Importando as imagens
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";
import m5 from "../assets/m5.png";
import m6 from "../assets/m6.png";
import m7 from "../assets/m7.png";
import m8 from "../assets/m8.png";
import m9 from "../assets/m9.png";
import m10 from "../assets/m10.png";

const projects = [
  {
    title: "Mona Lisa Digital",
    description: "Mona Lisa Digital – campanha de redes sociais, combinando arte clássica com anúncios modernos e gráficos de engajamento.",
    image: m1,
  },
  {
    title: "O Grito Publicitário",
    description: "O Grito Publicitário – emoção do consumidor em contato com anúncios digitais modernos.",
    image: m2,
  },
  {
    title: "Café Terrace Ads",
    description: "Café Terrace Ads – cenário urbano moderno transformado em propaganda digital.",
    image: m3,
  },
  {
    title: "A Persistência da Marca",
    description: "A Persistência da Marca – branding atemporal com design surreal aplicado a marketing digital.",
    image: m4,
  },
  {
    title: "A Última Ceia Digital",
    description: "A Última Ceia Digital – personagens clássicos como profissionais de marketing em ambiente moderno.",
    image: m5,
  },
  {
    title: "O Nascimento da Campanha",
    description: "O Nascimento da Campanha – arte clássica transformada em propaganda de lançamento digital.",
    image: m6,
  },
  {
    title: "Cubismo Criativo",
    description: "Cubismo Criativo – cubismo aplicado ao design gráfico e estratégias digitais de marketing.",
    image: m7,
  },
  {
    title: "Pop Art Digital",
    description: "Pop Art Digital – Lichtenstein encontra marketing digital com estilo icônico e moderno.",
    image: m8,
  },
  {
    title: "Céu Digital Interativo",
    description: "Céu Digital Interativo – Monet aplicado a marketing digital e social media em estilo impressionista moderno.",
    image: m9,
  },
  {
    title: "Mondrian Storytelling",
    description: "Mondrian Storytelling – narrativa visual de marketing digital usando geometria abstrata e cores modernas.",
    image: m10,
  },
];

export default function PortfolioSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="portfolio" className="portfolio-section">
      <h2>Projetos & Parcerias</h2>

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        loop
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 40,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        navigation
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="portfolio-swiper"
      >
        {projects.map((proj, idx) => (
          <SwiperSlide key={idx} className="project-slide" onClick={() => setActiveIndex(idx)}>
            <img src={proj.image} alt={proj.title} />
            <div className="overlay">
              <h3>{proj.title}</h3>
              {activeIndex === idx && <p>{proj.description}</p>}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
