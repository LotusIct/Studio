import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <h2>Entre em Contato</h2>
      <p>Tem um projeto? Vamos conversar!</p>

      <form className="contact-form">
        <div className="floating-label">
          <input type="text" name="name" placeholder=" " required />
          <label>Nome</label>
        </div>
        <div className="floating-label">
          <input type="email" name="email" placeholder=" " required />
          <label>E-mail</label>
        </div>
        <div className="floating-label">
          <textarea name="message" rows="5" placeholder=" " required></textarea>
          <label>Mensagem...</label>
        </div>
        <button type="submit">Enviar Mensagem</button>
      </form>

      <div className="social-links">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://wa.me/5599999999999" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      </div>
    </section>
  );
}
