import { useState } from "react";
import data from "../data";

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="glass-card"
      style={{ overflow: "hidden", padding: 0, position: "relative" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={project.img} alt={project.title} style={{ width: "100%", height: "12rem", objectFit: "cover", display: "block" }} />
      <div style={{ padding: "1.5rem" }}>
        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, margin: "0 0 0.25rem" }}>{project.title}</h3>
        <p style={{ fontSize: "0.875rem", color: "#9ca3af", margin: "0 0 0.75rem" }}>{project.desc}</p>
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {project.tags.map((tag) => (
            <span key={tag.label} style={{ fontSize: "0.75rem", background: tag.color, padding: "0.2rem 0.5rem", borderRadius: "0.375rem" }}>
              {tag.label}
            </span>
          ))}
        </div>
      </div>

      {/* Hover overlay */}
      <div
        style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(30,58,138,0.92), transparent)",
          display: "flex", alignItems: "flex-end", justifyContent: "center",
          gap: "1rem", padding: "1.5rem",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s",
        }}
      >
        <a
          href={project.liveUrl}
          style={{ background: "#fff", color: "#0f172a", padding: "0.5rem 1rem", borderRadius: "9999px", fontSize: "0.875rem", fontWeight: 600 }}
        >
          Live ↗
        </a>
        <a
          href={project.codeUrl}
          style={{ background: "#1f2937", color: "#fff", padding: "0.5rem 1rem", borderRadius: "9999px", fontSize: "0.875rem" }}
        >
          <i className="fa-brands fa-github"></i> Code
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "6rem 0" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <span className="section-label">PORTFOLIO</span>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, margin: 0 }}>Recent projects</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }} className="projects-grid">
        {data.projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .projects-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (min-width: 1024px) {
          .projects-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
