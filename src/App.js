import React, { useState, useEffect, useRef } from "react";
import bannerImg from './assets/2151536948.jpg';

const sections = [
  { id: "home", title: "Home" },
  { id: "about", title: "Sobre" },
  { id: "services", title: "Serviços" },
  { id: "portfolio", title: "Portfólio" },
  { id: "contact", title: "Contato" },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isThrottled = useRef(false);

  const onWheel = (e) => {
    if (isThrottled.current) return;
    isThrottled.current = true;

    if (e.deltaY > 0) {
      // Scroll pra baixo → próxima seção
      setCurrentIndex((prev) => Math.min(prev + 1, sections.length - 1));
    } else if (e.deltaY < 0) {
      // Scroll pra cima → seção anterior
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }

    setTimeout(() => {
      isThrottled.current = false;
    }, 700); // espera 700ms para liberar o próximo scroll
  };

  useEffect(() => {
    window.addEventListener("wheel", onWheel, { passive: true });
    return () => window.removeEventListener("wheel", onWheel);
  }, []);
const carouselRef = useRef();

const projects = [
  { title: "Projeto 1", description: "Descrição do projeto 1", image: "https://via.placeholder.com/300x200" },
  { title: "Projeto 2", description: "Descrição do projeto 2", image: "https://via.placeholder.com/300x200" },
  { title: "Projeto 3", description: "Descrição do projeto 3", image: "https://via.placeholder.com/300x200" },
  { title: "Projeto 4", description: "Descrição do projeto 4", image: "https://via.placeholder.com/300x200" },
  { title: "Projeto 5", description: "Descrição do projeto 5", image: "https://via.placeholder.com/300x200" },
  { title: "Projeto 6", description: "Descrição do projeto 6", image: "https://via.placeholder.com/300x200" },
  { title: "Projeto 7", description: "Descrição do projeto 7", image: "https://via.placeholder.com/300x200" },
  { title: "Projeto 8", description: "Descrição do projeto 8", image: "https://via.placeholder.com/300x200" },
  { title: "Projeto 9", description: "Descrição do projeto 9", image: "https://via.placeholder.com/300x200" },
  { title: "Projeto 10", description: "Descrição do projeto 10", image: "https://via.placeholder.com/300x200" },
];

const scrollCarousel = (direction) => {
  if (carouselRef.current) {
    const scrollAmount = carouselRef.current.offsetWidth / 1.2;
    carouselRef.current.scrollBy({ left: direction * scrollAmount, behavior: "smooth" });
  }
};

  return (
    <div className="app-container">
      <div
        className="sections-wrapper"
        style={{
          width: `${sections.length * 100}vw`,
          transform: `translateX(-${currentIndex * 100}vw)`,
        }}
      >
      {sections.map((sec) => (
 <section
  key={sec.id}
  className="section"
  id={sec.id}
  style={sec.id === 'home' ? {
    backgroundImage: `url(${bannerImg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  } : {}}
>
  {sec.id === 'home' ? (
    <div className="banner-text">
      <h1>Bem-vinda ao Meu Site</h1>
      <p>Explore nosso conteúdo incrível</p>
    </div>
) : sec.id === "about" ? (
  <div className="about-section">
    <div className="about-content">
      <h2>Sobre o Studio Now</h2>
      <p>
        Fundado em 2018, o <strong>Studio Now</strong> nasceu com a missão de transformar ideias em experiências visuais impactantes.
        Desde então, temos nos especializado em <em>marketing digital</em>, <em>design gráfico</em>, <em>experiências emocionais</em>
        e soluções inovadoras para marcas que querem se destacar no mundo digital.
      </p>
      <p>
        Criamos com propósito, emoção e estratégia. Nossa essência é colaborar com marcas que buscam conexão real com seu público.
      </p>
    </div>
  </div>

    ) : sec.id === "services" ? (
  <div className="services-section">
    <h2>Nossos Serviços</h2>
    <div className="services-grid">
      <div className="service-card">
        <h3>Marketing Digital</h3>
        <p>Campanhas estratégicas, tráfego pago, branding e posicionamento digital.</p>
      </div>
      <div className="service-card">
        <h3>Front-End Moderno</h3>
        <p>Interfaces responsivas, acessíveis e otimizadas com tecnologias de ponta.</p>
      </div>
      <div className="service-card">
        <h3>Design Gráfico</h3>
        <p>Identidade visual, social media, impressos e layouts com impacto visual.</p>
      </div>
      <div className="service-card">
        <h3>Design Emocional</h3>
        <p>Projetos que criam conexão e experiência sensorial com o usuário.</p>
      </div>
      <div className="service-card">
        <h3>Neurodesign</h3>
        <p>Design guiado pela psicologia e neurociência para aumentar conversão.</p>
      </div>
    </div>
  </div>
) : sec.id === "portfolio" ? (
  <div className="portfolio-section">
    <h2>Meus Projetos</h2>
    
    <div className="carousel-container">
  <div className="carousel" ref={carouselRef}>
    {projects.map((proj, idx) => (
      <div key={idx} className="project-card">
        <img src={proj.image} alt={proj.title} />
        <h3>{proj.title}</h3>
        <p>{proj.description}</p>
      </div>
    ))}
  </div>
</div>

  </div>
) : sec.id === "contact" ? (
  <div className="contact-section">
    <h2>Entre em Contato</h2>
    <p>Tem um projeto? Vamos conversar!</p>
    
    <form className="contact-form">
      <input type="text" name="name" placeholder="Seu nome" required />
      <input type="email" name="email" placeholder="Seu e-mail" required />
      <textarea name="message" rows="5" placeholder="Sua mensagem..." required></textarea>
      <button type="submit">Enviar Mensagem</button>
    </form>

    <div className="social-links">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">WhatsApp</a>
    </div>
  </div>
) : (
  sec.title
)}


</section>

))}
      </div>
    </div>
  );
}
