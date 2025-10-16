import React from "react";
import "./WorkProcess.css";

// Imagens geradas ou ilustrativas
import researchImg from "../assets/wp1.png";
import designImg from "../assets/wp2.png";
import developmentImg from "../assets/wp3.png";
import testingImg from "../assets/wp4.png";
import deliveryImg from "../assets/wp5.png";

const steps = [
  {
    title: "Descoberta e Estratégia",
    text: "Entendemos o seu negócio, o público e o posicionamento. Nosso processo começa com uma análise detalhada do mercado, público-alvo e tendências. Definimos objetivos claros e estratégias de marketing e design orientadas por dados para garantir impacto real.",
    image: researchImg,
  },
  {
    title: "Criação e Design",
    text: "A identidade visual e a linguagem ganham forma. Transformamos ideias em experiências visuais. Criamos wireframes, mockups e protótipos, alinhando estética, usabilidade e identidade de marca para cada projeto.",
    image: designImg,
  },
  {
    title: "Desenvolvimento e Implementação",
    text: "Transformamos o design em produtos digitais reais: sites, campanhas e experiências que unem tecnologia, performance e estética. Garantimos que design e performance caminhem juntos, entregando soluções confiáveis e modernas.",
    image: developmentImg,
  },
  {
    title: "Testes e Otimização",
    text: "Medimos resultados, otimizamos campanhas e ajustamos estratégias com base em dados reais. Nosso processo é contínuo, sempre buscando evolução e performance, analisando comportamento do usuário, métricas e feedbacks. Otimizamos interfaces e campanhas para maximizar engajamento e conversão.",
    image: testingImg,
  },
  {
    title: "Entrega e Resultados",
    text: "Apresentamos o projeto final com clareza e propósito. Cada entrega reflete a união entre criatividade, técnica e estratégia — sempre acompanhada de dados, insights e indicadores que comprovam o valor gerado. Nosso objetivo é transformar ideias em resultados reais e sustentáveis.",
    image: deliveryImg,
  },
];

export default function WorkProcess() {
  return (
    <section className="work-process">
      <h2>Como Transformamos Ideias em Resultados</h2>
      <p className="intro-text">
        Da estratégia à execução, unimos criatividade, dados e design para construir experiências digitais que conectam marcas e pessoas.
      </p>
      <div className="process-steps">
        {steps.map((step, idx) => (
          <div key={idx} className="process-step">
            <div className="step-image">
              <img src={step.image} alt={step.title} />
            </div>
            <div className="step-text">
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="work-footer">
        <p>
          Cada projeto nasce de uma ideia. Nosso papel é transformá-la em algo
          que inspira, conecta e gera valor — unindo arte, tecnologia e
          estratégia.
        </p>
        <span className="signature">VIBE Studio — criatividade com propósito.</span>
      </div>
    </section>
  );
}
