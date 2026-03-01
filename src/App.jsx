import { useState } from "react";
import "./styles/global.css";
import Navbar          from "./components/Navbar";
import Hero            from "./components/Hero";
import About           from "./components/About";
import Skills          from "./components/Skills";
import Projects        from "./components/Projects";
import Contact         from "./components/Contact";
import Footer          from "./components/Footer";
import Particles       from "./components/Particles";
import ScrollProgress  from "./components/ScrollProgress";
import CursorDot       from "./components/CursorDot";
import WhatsAppButton  from "./components/WhatsAppButton";

export default function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    if (theme === "dark") {
      document.body.style.background = "#f0f4fa";
      document.body.style.color = "#0f172a";
      setTheme("light");
    } else {
      document.body.style.background = "#0a0f1e";
      document.body.style.color = "#eef2fb";
      setTheme("dark");
    }
  };

  return (
    <>
      <CursorDot />
      <ScrollProgress />
      <Particles />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
