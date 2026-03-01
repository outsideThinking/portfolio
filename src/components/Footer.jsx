import data from "../data";

export default function Footer() {
  return (
    <footer
      className="glass"
      style={{ borderRadius: 0, borderLeft: "none", borderRight: "none", borderBottom: "none", borderTop: "1px solid rgba(30,58,138,0.3)", padding: "3rem 0", marginTop: "3rem" }}
    >
      <div className="container" style={{ textAlign: "center", color: "#9ca3af" }}>
        <p className="gradient-text" style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0 }}>MERN.dev</p>
        <p style={{ marginTop: "0.5rem" }}>{data.footerTagline}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1.5rem", margin: "1.5rem 0", fontSize: "1.25rem" }}>
          <a href={data.social.github} style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}>
            <i className="fa-brands fa-github"></i>
          </a>
          <a href={data.social.linkedin} style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href={data.social.twitter} style={{ transition: "color 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")} onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}>
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
        <p style={{ fontSize: "0.875rem" }}>{data.footerCopy}</p>
      </div>
    </footer>
  );
}
