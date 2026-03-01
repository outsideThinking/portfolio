import { useState } from "react";
import data from "../data";

const navLinks = ["home", "about", "skills", "projects", "contact"];

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className="glass"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderRadius: 0,
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        borderBottom: "1px solid rgba(30,58,138,0.3)",
      }}
    >
      <nav
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "1rem 1.5rem",
        }}
      >
        {/* Logo */}
        <a href="#home" onClick={(e) => scrollTo(e, "home")} className="gradient-text" style={{ fontSize: "1.5rem", fontWeight: 700 }}>
          MERN.dev
        </a>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: "2rem", fontSize: "0.875rem", fontWeight: 500 }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link}`}
              onClick={(e) => scrollTo(e, link)}
              style={{ color: "#eef2fb", transition: "color 0.2s" }}
              onMouseEnter={(e) => (e.target.style.color = "#60a5fa")}
              onMouseLeave={(e) => (e.target.style.color = "#eef2fb")}
            >
              {link.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button onClick={toggleTheme} style={{ fontSize: "1.25rem", color: "#93c5fd", background: "none", border: "none", cursor: "pointer" }}>
            <i className={`fa-regular ${theme === "dark" ? "fa-sun" : "fa-moon"}`}></i>
          </button>
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "contact")}
            style={{
              background: "#2563eb", color: "#fff", padding: "0.5rem 1.25rem",
              borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 600,
              boxShadow: "0 4px 15px rgba(59,130,246,0.3)", transition: "background 0.2s",
            }}
            onMouseEnter={(e) => (e.target.style.background = "#1d4ed8")}
            onMouseLeave={(e) => (e.target.style.background = "#2563eb")}
            className="hire-btn"
          >
            Hire Me
          </a>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ fontSize: "1.5rem", background: "none", border: "none", cursor: "pointer", color: "#eef2fb" }}
            className="mobile-menu-btn"
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="glass"
          style={{
            borderRadius: 0, borderTop: "1px solid rgba(30,58,138,0.3)",
            padding: "1rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem",
          }}
        >
          {navLinks.map((link) => (
            <a key={link} href={`#${link}`} onClick={(e) => scrollTo(e, link)} style={{ padding: "0.25rem 0" }}>
              {link.toUpperCase()}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => scrollTo(e, "contact")}
            style={{ background: "#2563eb", color: "#fff", textAlign: "center", padding: "0.5rem", borderRadius: "9999px" }}
          >
            Hire Me
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hire-btn { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
