import React, { useState, useEffect, useRef } from "react";
import bannerVideo from './assets/aberturapreta.mp4';
import aboutGif from './assets/efect.gif';

const sections = [
  { id: "home", title: "Home" },
  { id: "about", title: "Sobre" },
  { id: "services", title: "Serviços" },
  { id: "portfolio", title: "Portfólio" },
  { id: "contact", title: "Contato" },
];

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

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isThrottled = useRef(false);

  const carouselRef = useRef();
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  // Scroll desktop
  const onWheel = (e) => {
    if (isThrottled.current) return;
    isThrottled.current = true;

    if (e.deltaY > 0) {
      setCurrentIndex((prev) => Math.min(prev + 1, sections.length - 1));
    } else if (e.deltaY < 0) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }

    setTimeout(() => { isThrottled.current = false; }, 700);
  };

  // Scroll mobile
  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchMove = (e) => {
    touchEndY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = () => {
    if (isThrottled.current) return;
    const deltaY = touchStartY.current - touchEndY.current;
    if (Math.abs(deltaY) > 50) {
      isThrottled.current = true;
      if (deltaY > 0) {
        setCurrentIndex((prev) => Math.min(prev + 1, sections.length - 1));
      } else {
        setCurrentIndex((prev) => Math.max(prev - 1, 0));
      }
      setTimeout(() => { isThrottled.current = false; }, 700);
    }
  };

  useEffect(() => {
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  // Carousel
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
>
  {sec.id === 'home' ? (
  <div className="home-section">
    <video className="home-video" autoPlay muted loop>
      <source src={bannerVideo} type="video/mp4" />
      Seu navegador não suporta vídeos.
    </video>

   <div className="banner-text">
  <div className="banner-left">
  <h1>
    Welcome to <span className="vibe-text">VIBE Studio </span>
  </h1>
  <p>Where every idea turns into a <span className="experience-text">remarkable experience.</span></p>
</div>
  <div className="banner-right">
    <h1 className="big-word" style={{ animationDelay: "2s" }}>VISION</h1>
    <h1 className="big-word" style={{ animationDelay: "3s" }}>INNOVATION</h1>
    <h1 className="big-word" style={{ animationDelay: "4s" }}>BRANDING</h1>
    <h1 className="big-word" style={{ animationDelay: "5s" }}>EXPERIENCE</h1>
  </div>
</div>

  </div>
):sec.id === "about" ? (
  <div className="about-section">
    {/* Texto */}
    <div className="about-content">
      <h2>Sobre a VIBE Studio</h2>

      {/* Palavras-chave */}
      <div className="keywords">
        <span className="keyword pink">Cores</span>
        <span className="keyword blue">Formas</span>
        <span className="keyword green">Efeitos</span>
      </div>

      <p>
        Fundada em 2018, a <strong>VIBE Studio</strong> nasceu com a convicção de que cada ideia tem o potencial de se transformar em algo extraordinário. 
        Desde o início, buscamos unir criatividade e estratégia para entregar resultados que vão além do visual, criando experiências que comunicam, conectam e inspiram.
      </p>
      <p>
        Ao longo da nossa trajetória, consolidamos nossa expertise em <em>marketing digital</em>, <em>design gráfico</em>, 
        <em> branding</em> e <em>soluções criativas</em> voltadas para empresas e profissionais que desejam fortalecer sua presença no mercado 
        e estabelecer uma comunicação autêntica com seu público.
      </p>
      <p>
        Nossa abordagem é pautada pela inovação, sensibilidade estética e foco em resultados. 
        Mais do que desenvolver projetos, buscamos construir histórias junto aos nossos clientes, 
        traduzindo seus valores em experiências capazes de gerar impacto real e duradouro.
      </p>
      <p>
        Acreditamos que o futuro das marcas está na capacidade de criar vínculos genuínos. 
        Por isso, cada projeto na <strong>VIBE Studio</strong> é desenvolvido com propósito, 
        dedicação e o compromisso de entregar não apenas soluções criativas, mas também 
        ferramentas estratégicas que fortalecem a identidade e ampliam o alcance das empresas no cenário digital.
      </p>
    </div>

    {/* Imagem (GIF) */}
  <div className="about-image">
  <img src={aboutGif} alt="Equipe criativa da VIBE Studio" />
</div>

  </div>
) 




: sec.id === "services" ? (
  <div className="services-section">
    <h2>Nossos Serviços</h2>
    <div className="services-grid">

      <div className="service-card">
        <div className="card-front">
          <h3>Marketing Digital</h3>
          <p>Campanhas estratégicas, tráfego pago, branding e posicionamento digital.</p>
        </div>
        <div className="card-back">
          <p>
            Estratégias avançadas de marketing digital orientadas por dados, análise de KPIs e otimização de ROI, 
            com foco em segmentação e performance.
          </p>
        </div>
      </div>

      <div className="service-card">
        <div className="card-front">
          <h3>Front-End Moderno</h3>
          <p>Interfaces responsivas, acessíveis e otimizadas com tecnologias de ponta.</p>
        </div>
        <div className="card-back">
          <p>
            Desenvolvimento com React, Next.js e Tailwind, priorizando UX/UI moderno, performance e acessibilidade.
          </p>
        </div>
      </div>

      <div className="service-card">
        <div className="card-front">
          <h3>Design Gráfico</h3>
          <p>Identidade visual, social media, impressos e layouts com impacto visual.</p>
        </div>
        <div className="card-back">
          <p>
            Criação de materiais gráficos estratégicos, branding consistente e soluções visuais impactantes.
          </p>
        </div>
      </div>

      <div className="service-card">
        <div className="card-front">
          <h3>Design Emocional</h3>
          <p>Projetos que criam conexão e experiência sensorial com o usuário.</p>
        </div>
        <div className="card-back">
          <p>
            Experiências de design que estimulam emoção e percepção, aumentando engajamento e fidelidade.
          </p>
        </div>
      </div>

      <div className="service-card">
        <div className="card-front">
          <h3>Neurodesign</h3>
          <p>Design guiado pela psicologia e neurociência para aumentar conversão.</p>
        </div>
        <div className="card-back">
          <p>
            Aplicação de princípios da neurociência e psicologia cognitiva para otimizar interação, decisões e conversões.
          </p>
        </div>
      </div>

      {/* Novos cards adicionados */}
      <div className="service-card">
        <div className="card-front">
          <h3>UX Research</h3>
          <p>Pesquisa e análise de comportamento do usuário para embasar decisões de design.</p>
        </div>
        <div className="card-back">
          <p>
            Testes de usabilidade, entrevistas e análise de jornada do usuário para criar experiências mais eficientes.
          </p>
        </div>
      </div>

      <div className="service-card">
        <div className="card-front">
          <h3>Branding Estratégico</h3>
          <p>Definição de posicionamento, missão, valores e identidade visual da marca.</p>
        </div>
        <div className="card-back">
          <p>
            Desenvolvimento de guidelines, comunicação visual consistente e storytelling para fortalecer a marca.
          </p>
        </div>
      </div>

      <div className="service-card">
        <div className="card-front">
          <h3>Consultoria Digital</h3>
          <p>Assessoria completa para otimização de processos e presença online.</p>
        </div>
        <div className="card-back">
          <p>
            Planejamento estratégico digital, análise de métricas e recomendações técnicas para crescimento sustentável.
          </p>
        </div>
      </div>

    </div>
  </div>
)

 : sec.id === "portfolio" ? (
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
