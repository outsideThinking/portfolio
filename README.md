# MERN Portfolio — Vite + React

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Opens at → http://localhost:5173

---

## ✏️ How to Customize — Edit ONE file: `src/data.js`

Everything (name, photo, links, skills, projects) is in `src/data.js`.

### Change your name
```js
name: "Your Name Here",
```

### Change your photo
1. Put your photo in the `/public` folder, e.g. `public/myPhoto.png`
2. Update in data.js:
```js
photoSmall: "/myPhoto.png",
photoLarge: "/myPhoto.png",
```

### Change social links
```js
social: {
  github:   "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
  twitter:  "https://twitter.com/yourusername",
  whatsapp: "https://wa.me/yourphonenumber",
},
```

### Add a project
```js
{
  img:     "/project-screenshot.png",   // put image in /public
  title:   "My Project",
  desc:    "Short description",
  tags:    [{ label: "React", color: "rgba(59,130,246,0.2)" }],
  liveUrl: "https://myproject.com",
  codeUrl: "https://github.com/me/myproject",
},
```

---

## 📁 Project Structure

```
mern-portfolio/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── (put your images here)
└── src/
    ├── data.js              ← ✅ EDIT THIS FILE for all content
    ├── main.jsx
    ├── App.jsx
    ├── styles/
    │   └── global.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── Particles.jsx
        ├── ScrollProgress.jsx
        └── CursorDot.jsx
```
