import React, { useEffect, useRef } from "react";
import approachImage from "../assets/approach.png";
import studioImage from "../assets/studio.png";
import "./AboutSections.css";

const sections = [
  {
    id: "history",
    title: "Nossa História",
    text: `Fundada em 2018, a VIBE Studio nasceu da paixão por transformar ideias em experiências visuais marcantes. Desde o início, nosso objetivo foi claro: unir criatividade, estratégia e inovação para criar soluções que geram impacto real para marcas e pessoas.

Ao longo dos anos, consolidamos nossa expertise em marketing digital, design gráfico, branding e comunicação estratégica, sempre com atenção aos detalhes e à percepção do público-alvo. Cada projeto que assumimos é tratado como único, buscando não apenas entregar resultados, mas criar narrativas visuais que emocionem e inspirem.

Acreditamos que a história de uma marca se constrói através de experiências memoráveis e que a estética, aliada à funcionalidade, é capaz de gerar conexões duradouras.`,
    image: null,
  },
  {
    id: "approach",
    title: "Nossa Abordagem",
    text: `Na VIBE Studio, nossa abordagem é pautada na integração entre estratégia, design e análise de resultados. Cada projeto começa com um estudo detalhado do mercado, do público e das tendências visuais, garantindo que cada elemento criado tenha propósito e impacto.

Utilizamos ferramentas de pesquisa de comportamento do usuário, análise de métricas e testes de usabilidade para embasar decisões de design, aplicando conceitos de design emocional e neurodesign que aumentam a conexão do público com a marca.`,
    image: approachImage,
    imageRight: true,
  },
  {
    id: "studio",
    title: "Sobre o Studio",
    text: `O VIBE Studio é mais do que um espaço de criação; somos um hub de inovação onde arte, design e estratégia se encontram. Nosso time é formado por profissionais apaixonados, que combinam sensibilidade estética com visão estratégica, sempre focados em resultados tangíveis.

Trabalhamos com empresas de diferentes segmentos, desde startups até marcas consolidadas, oferecendo serviços que vão desde marketing digital e branding até design gráfico e consultoria criativa.`,
    image: studioImage,
    imageRight: false,
  },
];

export default function AboutSections() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-wrapper">
      {sections.map((sec, idx) => (
        <section
          id={sec.id}
          key={sec.id}
          ref={(el) => (sectionRefs.current[idx] = el)}
          className={`about-section ${sec.image ? "with-image" : "centered"} ${
            sec.imageRight ? "image-right" : ""
          }`}
        >
          <div className="about-content">
            <h2>{sec.title}</h2>
            {sec.text.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            {sec.id === "history" && (
              <div className="mission-cards">
                <div className="mission-item">
                  <h3>Missão</h3>
                  <p>Transformar ideias em experiências visuais que conectam marcas e pessoas.</p>
                </div>
                <div className="mission-item">
                  <h3>Visão</h3>
                  <p>Ser referência em criatividade estratégica e inovação digital no Brasil.</p>
                </div>
                <div className="mission-item">
                  <h3>Valores</h3>
                  <p>Excelência, empatia, autenticidade e propósito em cada criação.</p>
                </div>
              </div>
            )}
          </div>

          {sec.image && (
            <div className="about-image">
              <img src={sec.image} alt={sec.title} />
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
