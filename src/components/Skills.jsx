import data from "../data";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "6rem 0" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <span className="section-label">TECH STACK</span>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, margin: 0 }}>
          What I bring to the table
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }} className="skills-grid">
        {data.skillCards.map((skill) => (
          <div
            key={skill.name}
            className="glass-card"
            style={{ padding: "1.5rem", textAlign: "center", cursor: "default" }}
          >
            <i className={skill.icon} style={{ fontSize: "3rem", color: skill.color, display: "block", marginBottom: "0.75rem" }}></i>
            <h3 style={{ fontWeight: 700, margin: "0 0 0.25rem" }}>{skill.name}</h3>
            {skill.desc && <p style={{ fontSize: "0.75rem", color: "#9ca3af", margin: 0 }}>{skill.desc}</p>}
          </div>
        ))}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .skills-grid { grid-template-columns: repeat(4, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
