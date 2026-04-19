# Portfolio — ML Engineer & AI Systems Builder

## Setup

```bash
npm install
npm run dev
```

---

## How to add a new project

Open **`src/data/projects.js`** and append a new object to the array:

```js
{
  id: 7,                        // must be unique
  title: "My New Project",
  description: "One-sentence summary shown on the project card.",
  bullets: [
    "Detail point one",
    "Detail point two",
    "Detail point three",
  ],
  tech: ["Python", "FastAPI", "React"],
  category: "genai",            // "genai" | "ml" | "fullstack"
  year: 2025,
  freelance: false,             // true shows a "Freelance" badge
  icon: "🔬",                   // emoji shown on card header
  accent: "#00f5c4",            // card border + glow colour (CSS colour string)
},
```

That's it — no other file needs to change. The Projects section reads this array dynamically.

---

## Replacing the avatar

Drop your photo at **`src/assets/avatar.jpg`** (any JPEG/PNG works — displayed in a circular crop).

## Adding your resume

Replace **`public/resume.pdf`** with your actual resume. The "Download Resume" button and the Navbar "Resume" link both point to `/resume.pdf`.

## Updating contact links

Open **`src/components/Contact.jsx`** and update the `links` array near the top with your real email, LinkedIn URL, and GitHub URL.

## Stack

- React 19 + Vite 8
- Framer Motion (animations)
- Tailwind CSS v4 (utility styling)
- Google Fonts: Space Mono + DM Sans
