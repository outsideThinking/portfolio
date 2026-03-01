import { useEffect, useRef } from "react";
import data from "../data";

export default function Hero() {
  const typingRef = useRef(null);

  useEffect(() => {
    let i = 0, j = 0, isDeleting = false;
    let timer;

    const typeEffect = () => {
      const current = data.typingWords[i];
      if (isDeleting) j--; else j++;
      if (typingRef.current) typingRef.current.innerText = current.slice(0, j);
      if (!isDeleting && j === current.length) {
        isDeleting = true;
        timer = setTimeout(typeEffect, 1500);
        return;
      }
      if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % data.typingWords.length;
      }
      timer = setTimeout(typeEffect, isDeleting ? 80 : 120);
    };
    typeEffect();
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: "4rem", paddingBottom: "6rem", position: "relative" }}
    >
      {/* Wave */}
      <div className="custom-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C100.21,78,208.17,63.6,321.39,56.44Z" opacity="0.3" />
        </svg>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "3rem", width: "100%", alignItems: "center" }} className="hero-grid">
        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <span style={{ color: "#60a5fa", fontWeight: 500, fontSize: "1.125rem" }}>{data.tagline}</span>

          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 700, lineHeight: 1.15, margin: 0 }}>
            Crafting{" "}
            <span className="gradient-text">digital</span>{" "}
            experiences
          </h1>

          <div style={{ fontSize: "1.5rem", fontWeight: 300, display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap" }}>
            <span>I specialize in</span>
            <span ref={typingRef} style={{ color: "#60a5fa", fontWeight: 600 }}></span>
            <span className="typed-cursor">|</span>
          </div>

          <p style={{ color: "#d1d5db", fontSize: "1.125rem", maxWidth: "36rem", margin: 0 }}>
            MongoDB, Express, React, Node.js — modern full‑stack apps with clean UI.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", alignItems: "center" }}>
            <button
              onClick={() => scrollTo("contact")}
              style={{
                background: "#2563eb", color: "#fff", padding: "0.75rem 2rem",
                borderRadius: "9999px", fontWeight: 600, fontSize: "1rem",
                border: "none", cursor: "pointer", boxShadow: "0 8px 20px rgba(59,130,246,0.35)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
            >
              Hire Me
            </button>
            <a
              href={data.social.resume}
              download="ujjwalresume.pdf"
              target="_blank"
              rel="noreferrer"
              style={{
                border: "1px solid #3b82f6", color: "#fff", padding: "0.75rem 2rem",
                borderRadius: "9999px", fontWeight: 600, fontSize: "1rem",
                display: "flex", alignItems: "center", gap: "0.5rem", transition: "background 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(59,130,246,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
            >
              <i className="fa-solid fa-download"></i> Resume
            </a>
          </div>

          {/* Social + small avatar */}
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", paddingTop: "1rem" }}>
            <a href={data.social.github} target="_blank" rel="noreferrer" style={{ fontSize: "1.5rem", color: "#d1d5db", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")} onMouseLeave={(e) => (e.currentTarget.style.color = "#d1d5db")}>
              <i className="fa-brands fa-github"></i>
            </a>
            <a href={data.social.linkedin} target="_blank" rel="noreferrer" style={{ fontSize: "1.5rem", color: "#d1d5db", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")} onMouseLeave={(e) => (e.currentTarget.style.color = "#d1d5db")}>
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href={data.social.twitter} target="_blank" rel="noreferrer" style={{ fontSize: "1.5rem", color: "#d1d5db", transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")} onMouseLeave={(e) => (e.currentTarget.style.color = "#d1d5db")}>
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            {/* Small avatar */}
            <div className="pulse-anim" style={{ marginLeft: "1rem", width: "3.5rem", height: "3.5rem", borderRadius: "9999px", border: "2px solid #3b82f6", padding: "3px" }}>
              <img src={data.photoSmall} alt="profile" style={{ width: "100%", height: "100%", borderRadius: "9999px", objectFit: "cover" }} />
            </div>
          </div>
        </div>

        {/* Right — Profile card */}
        <div className="glass-card" style={{ padding: "2rem", textAlign: "center" }}>
          <img
            src={data.photoLarge}
            alt={data.name}
            style={{
              width: "10rem", height: "10rem", borderRadius: "9999px",
              border: "4px solid rgba(59,130,246,0.5)",
              objectFit: "cover", margin: "0 auto", display: "block",
              boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
            }}
          />
          <h2 style={{ fontSize: "1.875rem", fontWeight: 700, marginTop: "1rem", marginBottom: "0.25rem" }}>{data.name}</h2>
          <p style={{ color: "#60a5fa", margin: 0 }}>{data.role}</p>
          <p style={{ fontSize: "0.875rem", color: "#9ca3af", marginTop: "0.5rem" }}>✨ {data.experience}</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "0.75rem", marginTop: "1rem", flexWrap: "wrap" }}>
            {data.heroTags.map((tag) => (
              <span key={tag} style={{ padding: "0.25rem 0.75rem", background: "rgba(59,130,246,0.15)", borderRadius: "9999px", fontSize: "0.75rem" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo("about")}
        className="bounce"
        style={{
          position: "absolute", bottom: "2.5rem", left: "50%",
          background: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)",
          border: "none", borderRadius: "9999px", padding: "0.75rem",
          cursor: "pointer", color: "#eef2fb", fontSize: "1rem",
        }}
      >
        <i className="fa-solid fa-chevron-down"></i>
      </button>

      <style>{`
        @media (min-width: 768px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
