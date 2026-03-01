import data from "../data";

export default function WhatsAppButton() {
  return (
    <a
      href={data.social.whatsapp}
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        width: "3.5rem",
        height: "3.5rem",
        background: "#25d366",
        borderRadius: "9999px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1.75rem",
        color: "#fff",
        boxShadow: "0 4px 20px rgba(37,211,102,0.5)",
        zIndex: 9999,
        transition: "transform 0.2s, box-shadow 0.2s",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.15)";
        e.currentTarget.style.boxShadow = "0 6px 25px rgba(37,211,102,0.7)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.5)";
      }}
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
}
