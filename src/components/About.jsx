import { useEffect, useRef, useState } from "react";
import data from "../data";

export default function About() {
  const sectionRef = useRef(null);
  const [animated, setAnimated] = useState(false);
  const [counts, setCounts] = useState(data.stats.map(() => 0));
  const [widths, setWidths] = useState(data.skillBars.map(() => 0));

  useEffect(() => {
    const check = () => {
      if (animated || !sectionRef.current) return;
      if (sectionRef.current.getBoundingClientRect().top < window.innerHeight - 100) {
        setAnimated(true);
        setWidths(data.skillBars.map((s) => s.value));
        data.stats.forEach((stat, idx) => {
          let current = 0;
          const inc = stat.target / 50;
          const timer = setInterval(() => {
            current += inc;
            if (current >= stat.target) {
              setCounts((prev) => { const n = [...prev]; n[idx] = stat.target; return n; });
              clearInterval(timer);
            } else {
              setCounts((prev) => { const n = [...prev]; n[idx] = Math.floor(current); return n; });
            }
          }, 20);
        });
      }
    };
    window.addEventListener("scroll", check);
    check();
    return () => window.removeEventListener("scroll", check);
  }, [animated]);

  return (
    <section id="about" ref={sectionRef} style={{ padding: "6rem 0", position: "relative" }}>
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <span className="section-label">ABOUT ME</span>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, margin: 0 }}>
          Passionate <span style={{ color: "#60a5fa" }}>developer</span>
        </h2>
      </div>

      <div style={{ display: "grid", gap: "3rem", alignItems: "center" }} className="about-grid">
        {/* Left */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <p style={{ color: "#e5e7eb", fontSize: "1.125rem", lineHeight: 1.8, margin: 0 }}>{data.bio}</p>
          <p style={{ color: "#9ca3af", margin: 0 }}>
            Based in {data.location} · open for freelance & full‑time roles{" "}
            <span style={{ background: "rgba(34,197,94,0.15)", color: "#86efac", padding: "0.2rem 0.75rem", borderRadius: "9999px", fontSize: "0.875rem", marginLeft: "0.5rem" }}>
              available
            </span>
          </p>

          {/* Counters */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem", padding: "1.5rem 0" }}>
            {data.stats.map((stat, i) => (
              <div key={stat.label} className="glass-card" style={{ padding: "1rem", textAlign: "center" }}>
                <span style={{ fontSize: "1.875rem", fontWeight: 700, color: "#60a5fa" }}>{counts[i]}</span>
                <span style={{ display: "block", fontSize: "0.875rem", color: "#9ca3af" }}>{stat.label}</span>
              </div>
            ))}
          </div>

          {/* Soft skills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {data.softSkills.map((s) => (
              <span key={s} className="glass" style={{ padding: "0.5rem 1rem", borderRadius: "9999px", fontSize: "0.875rem" }}>{s}</span>
            ))}
          </div>
        </div>

        {/* Right */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <h3 style={{ fontSize: "1.25rem", fontWeight: 600, margin: 0 }}>Core competencies</h3>
          {data.skillBars.map((bar, i) => (
            <div key={bar.label}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.25rem" }}>
                <span>{bar.label}</span>
                <span>{bar.value}%</span>
              </div>
              <div style={{ height: "0.5rem", background: "#374151", borderRadius: "9999px" }}>
                <div
                  className="skill-fill"
                  style={{
                    width: `${widths[i]}%`,
                    height: "0.5rem",
                    background: "#3b82f6",
                    borderRadius: "9999px",
                  }}
                />
              </div>
            </div>
          ))}

          {/* Tech icons */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem", marginTop: "2rem" }}>
            {data.techIcons.map((t, i) => (
              <div key={i} className="glass-card" style={{ padding: "1rem", textAlign: "center", fontSize: "1.875rem" }}>
                <i className={t.icon} style={{ color: t.color }}></i>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .about-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
