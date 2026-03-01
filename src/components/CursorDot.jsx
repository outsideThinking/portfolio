import { useEffect, useRef } from "react";

export default function CursorDot() {
  const ref = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (ref.current) {
        ref.current.style.left = e.clientX + "px";
        ref.current.style.top  = e.clientY + "px";
      }
    };
    document.addEventListener("mousemove", move);
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return <div ref={ref} className="cursor-dot" />;
}
