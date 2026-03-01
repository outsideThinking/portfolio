import { useState } from "react";
import data from "../data";

const inputStyle = {
  width: "100%",
  padding: "0.75rem",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid #4b5563",
  borderRadius: "0.75rem",
  color: "#eef2fb",
  fontSize: "1rem",
  outline: "none",
  fontFamily: "Inter, sans-serif",
  boxSizing: "border-box",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim() || !emailRegex.test(form.email)) {
      setError(true);
      setSuccess(false);
    } else {
      setError(false);
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 4000);
    }
  };

  return (
    <section id="contact" style={{ padding: "6rem 0" }}>
      <div style={{ textAlign: "center", marginBottom: "4rem" }}>
        <span className="section-label">GET IN TOUCH</span>
        <h2 style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 700, margin: 0 }}>Let's work together</h2>
      </div>

      <div style={{ display: "grid", gap: "3rem" }} className="contact-grid">
        {/* Form */}
        <div className="glass-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <h3 style={{ fontSize: "1.5rem", fontWeight: 600, margin: 0 }}>Send a message</h3>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input
              type="text" name="name" placeholder="Your name"
              value={form.name} onChange={handleChange} style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#60a5fa")}
              onBlur={(e) => (e.target.style.borderColor = "#4b5563")}
            />
            <input
              type="email" name="email" placeholder="Email address"
              value={form.email} onChange={handleChange} style={inputStyle}
              onFocus={(e) => (e.target.style.borderColor = "#60a5fa")}
              onBlur={(e) => (e.target.style.borderColor = "#4b5563")}
            />
            <textarea
              name="message" rows={4} placeholder="Project idea..."
              value={form.message} onChange={handleChange}
              style={{ ...inputStyle, resize: "vertical" }}
              onFocus={(e) => (e.target.style.borderColor = "#60a5fa")}
              onBlur={(e) => (e.target.style.borderColor = "#4b5563")}
            />
            {error && <p style={{ color: "#f87171", fontSize: "0.875rem", margin: 0 }}>All fields required & valid email.</p>}
            {success && <p style={{ color: "#4ade80", fontSize: "0.875rem", margin: 0 }}>✅ Message sent! I'll get back to you soon.</p>}
            <button
              type="submit"
              style={{
                background: "#2563eb", color: "#fff", padding: "0.75rem",
                borderRadius: "9999px", fontWeight: 600, fontSize: "1rem",
                border: "none", cursor: "pointer", display: "flex",
                alignItems: "center", justifyContent: "center", gap: "0.5rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1d4ed8")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#2563eb")}
            >
              <i className="fa-regular fa-paper-plane"></i> Send message
            </button>
          </form>

          {/* Social icons */}
          <div style={{ display: "flex", justifyContent: "space-around", paddingTop: "1rem", fontSize: "1.5rem" }}>
            <a href={data.social.whatsapp} style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")} onMouseLeave={(e) => (e.currentTarget.style.color = "#eef2fb")}>
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a href={data.social.linkedin} style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")} onMouseLeave={(e) => (e.currentTarget.style.color = "#eef2fb")}>
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href={data.social.github} style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")} onMouseLeave={(e) => (e.currentTarget.style.color = "#eef2fb")}>
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        {/* Info */}
        <div className="glass-card" style={{ padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <iframe
            src={data.mapUrl}
            title="Location map"
            style={{ width: "100%", height: "14rem", borderRadius: "0.75rem", border: 0 }}
          />
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <i className="fa-solid fa-location-dot" style={{ color: "#60a5fa" }}></i>
            {data.location}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <i className="fa-solid fa-phone" style={{ color: "#60a5fa" }}></i>
            {data.phone}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <i className="fa-regular fa-envelope" style={{ color: "#60a5fa" }}></i>
            <a href={`mailto:${data.email}`} style={{ color: "#eef2fb" }}>{data.email}</a>
          </div>
          <div style={{ background: "rgba(34,197,94,0.15)", color: "#86efac", padding: "0.5rem 1rem", borderRadius: "9999px", textAlign: "center" }}>
            ✅ {data.availability}
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
