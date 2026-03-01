const particles = [
  { top: "10%", left: "5%",  animationDuration: "14s" },
  { top: "70%", left: "80%", width: "12px", height: "12px", animationDuration: "25s" },
  { top: "40%", left: "20%", width: "8px",  height: "8px",  animationDuration: "18s" },
  { top: "80%", left: "15%", width: "5px",  animationDuration: "22s" },
  { top: "15%", left: "90%", width: "10px", animationDuration: "12s" },
];

export default function Particles() {
  return (
    <div style={{ position: "fixed", inset: 0, overflow: "hidden", zIndex: -10, pointerEvents: "none" }}>
      {particles.map((p, i) => (
        <div key={i} className="particle" style={p} />
      ))}
    </div>
  );
}
