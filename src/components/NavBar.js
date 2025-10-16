import React, { useState } from "react";
import { Menu, X, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import logo from "../assets/logovs.png";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
  <header className="navbar">
  <div className="navbar-left">
    <div className="navbar-logo">
      <img src={logo} alt="VIBE Studio" />
    </div>
  </div>

  <div className="navbar-right">
    <button
      className="menu-toggle"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Abrir menu"
    >
      {menuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>
</header>


      <nav className={`side-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home">Início</a></li>
          <li><a href="#sobre">Sobre Nós</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#marcas">Marcas</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>

        {/* Redes Sociais */}
        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={24} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={24} /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><Linkedin size={24} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><Twitter size={24} /></a>
        </div>
      </nav>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}
