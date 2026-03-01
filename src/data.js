// ============================================================
//  data.js  —  SINGLE SOURCE OF TRUTH
//  Edit everything here: name, photo, links, skills, projects
// ============================================================

const data = {

  // ─── PERSONAL INFO ──────────────────────────────────────
  name: "Ujjwal kumar",
  role: "MERN Stack Developer",
  tagline: "⚡ Full‑stack MERN developer",
  bio: "I'm Ujjwal , a MERN stack developer who loves building scalable, user‑centric applications. My journey started with crafting small frontend toys, then I dove deep into full‑stack with MongoDB, Express, React, and Node. I focus on clean code, performance, and smooth UX.",
  location: "Noida, (remote)",
  phone: "+91 8102668655",
  email: "ujjwalkr875761@gmail.com",
  availability: "Available for freelance",
  experience: "1+ years crafting robust web apps.",

  // ─── PHOTOS ─────────────────────────────────────────────
  // Replace these with your own image paths e.g. "/ujjwalphoto.png"
  // Put your photo inside the /public folder
  photoSmall: "/ujjwalphoto.png",   // small avatar (navbar area)
  photoLarge: "/ujjwalphoto.png",   // large profile card

  // ─── SOCIAL LINKS ───────────────────────────────────────
  social: {
    github:   "https://github.com/outsideThinking",
    linkedin: "https://www.linkedin.com/in/ujjwal-kumar-805027221/",
    twitter:  "https://twitter.com/",
    whatsapp: "https://wa.me/8102668655",
    resume:   "/ujjwalresume.pdf",
  },

  // ─── HERO TAGS ──────────────────────────────────────────
  heroTags: ["#React", "#Node", "#Mongo"],

  // ─── TYPING ANIMATION WORDS ─────────────────────────────
  typingWords: ["MERN stack", "React", "Node.js", "MongoDB", "Express", "TypeScript"],

  // ─── STATS / COUNTERS ───────────────────────────────────
  stats: [
    { target: 2,  label: "years" },
    { target: 24, label: "projects" },
    { target: 12, label: "clients" },
  ],

  // ─── SOFT SKILLS ────────────────────────────────────────
  softSkills: ["💬 Team player", "🚀 Problem solver", "🧠 Fast learner"],

  // ─── SKILL PROGRESS BARS ────────────────────────────────
  skillBars: [
    { label: "React / Next",       value: 90 },
    { label: "Node.js / Express",  value: 85 },
    { label: "MongoDB / Mongoose", value: 80 },
    { label: "TypeScript",         value: 75 },
  ],

  // ─── TECH STACK ICONS (About section) ───────────────────
  techIcons: [
    { icon: "fa-brands fa-react",    color: "#60a5fa" },
    { icon: "fa-brands fa-node",     color: "#4ade80" },
    { icon: "fa-solid fa-database",  color: "#facc15" },
    { icon: "fa-brands fa-js",       color: "#fde047" },
  ],

  // ─── SKILLS SECTION CARDS ───────────────────────────────
  skillCards: [
    { icon: "fa-brands fa-react",    color: "#60a5fa", name: "React",         desc: "hooks, context, redux" },
    { icon: "fa-brands fa-node",     color: "#22c55e", name: "Node.js",       desc: "Express, REST, JWT" },
    { icon: "fa-solid fa-database",  color: "#eab308", name: "MongoDB",       desc: "Atlas, aggregation" },
    { icon: "fa-brands fa-js",       color: "#facc15", name: "TypeScript",    desc: "types, interfaces" },
    { icon: "fa-brands fa-git-alt",  color: "#fb923c", name: "Git/GitHub",    desc: null },
    { icon: "fa-solid fa-cloud",     color: "#93c5fd", name: "Vercel/Render", desc: null },
    { icon: "fa-solid fa-lock",      color: "#d8b4fe", name: "JWT, OAuth",    desc: null },
    { icon: "fa-brands fa-docker",   color: "#3b82f6", name: "Docker (basic)",desc: null },
  ],

  // ─── PROJECTS ───────────────────────────────────────────
  projects: [
  {
    img:     "https://placehold.co/600x400/1e293b/ffffff?text=Project+1",
    title:   "Real time chat app",
    desc:    "Short description of your project",
    tags:    [
      { label: "React",  color: "rgba(59,130,246,0.2)" },
      { label: "Node",   color: "rgba(34,197,94,0.2)" },
      { label: "Mongo",  color: "rgba(234,179,8,0.2)" },
    ],
    liveUrl: "https://realtimmechatapp.onrender.com/login",
    codeUrl: "https://github.com/outsideThinking/your-repo",
  },
  {
    img:     "https://placehold.co/600x400/1e293b/ffffff?text=Project+2",
    title:   "Learning management system",
    desc:    "Short description",
    tags:    [
      { label: "React",  color: "rgba(59,130,246,0.2)" },
    ],
    liveUrl: "https://lms-3-x3o0.onrender.com/",
    codeUrl: "https://github.com/outsideThinking/second-repo",
  },
  {
    img:     "https://placehold.co/600x400/1e293b/ffffff?text=Project+3",
    title:   "Third Project",
    desc:    "Short description of third project",
    tags:    [
      { label: "React",    color: "rgba(59,130,246,0.2)" },
      { label: "Node",     color: "rgba(34,197,94,0.2)" },
      { label: "MongoDB",  color: "rgba(234,179,8,0.2)" },
    ],
    liveUrl: "https://thirdproject.vercel.app",
    codeUrl: "https://github.com/outsideThinking/third-repo",
  },
],

  // ─── MAP EMBED URL ───────────────────────────────────────
  mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=77.2273%2C28.4744%2C77.4273%2C28.6744&layer=mapnik&marker=28.5744%2C77.3273",

  // ─── FOOTER ─────────────────────────────────────────────
  footerTagline: "crafting full‑stack experiences",
  footerCopy:    "© 2025 Ujjwal kumar — MERN developer. All rights reserved.",
};

export default data;
