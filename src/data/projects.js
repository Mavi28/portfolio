// ─────────────────────────────────────────────────────────────
// HOW TO ADD A NEW PROJECT
// Just append a new object to this array. No other file needs
// to change — the Projects section reads this array dynamically.
//
// Fields:
//   title       string        — project name
//   description string        — one-sentence summary shown on card
//   bullets     string[]      — detail points shown in the modal
//   tech        string[]      — tech pills on the card
//   category    "genai" | "ml" | "fullstack"
//   year        number
//   freelance   bool          — shows a "Freelance" badge when true
//   icon        string        — emoji or short string for the card header
//   accent      string        — CSS colour for card left-border + glow
//   githubUrl   string | null — GitHub repo link (null = button hidden)
//   liveUrl     string | null — live demo link (null = button hidden)
// ─────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: "RAG Document Assistant",
    description:
      "Production-grade RAG system — query PDF documents with natural language using FAISS + LangChain + OpenAI.",
    bullets: [
      "Built vector embeddings pipeline with FAISS for fast similarity search",
      "Integrated OpenAI and HuggingFace LLMs with LangChain retrieval chains",
      "Streamlit app with drag-and-drop PDF upload and real-time Q&A",
    ],
    tech: ["PyTorch", "LangChain", "FAISS", "OpenAI API", "Streamlit", "Python"],
    category: "genai",
    year: 2024,
    freelance: false,
    icon: "📄",
    accent: "#00f5c4",
    githubUrl: "https://github.com/Mavi28/multi-pdf-ragqa.git",
    liveUrl: "https://multi-pdf-ragapp.streamlit.app/",
  },
  {
    id: 2,
    title: "ConvoPro — Private Chatbot",
    description:
      "Self-hosted conversational AI with persistent memory and multi-session context management.",
    bullets: [
      "Conversation history compression with sliding context window management",
      "Multi-session architecture with per-user memory persistence",
      "FastAPI backend + React frontend + PostgreSQL for session storage",
    ],
    tech: ["Python", "OpenAI API", "FastAPI", "React", "PostgreSQL"],
    category: "genai",
    year: 2025,
    freelance: false,
    icon: "💬",
    accent: "#a855f7",
    githubUrl: "https://github.com/Mavi28/streamlit-genai-chatbot.git ",
    liveUrl: "https://scarlet-chatbot.streamlit.app/",
  },
  {
    id: 3,
    title: "AI Study Coach",
    description:
      "Full-stack MERN AI study assistant — quiz generation, document upload, study plans, progress tracking, and a Pomodoro focus timer.",
    bullets: [
      "Built complete REST API with auth, quiz generation, document upload, study plan creation, and performance analytics",
      "Pomodoro focus timer with streaks, music, drag functionality, and motivational quotes",
      "MongoDB + Mongoose for user data, questions, documents, and progress tracking",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "JWT", "Multer"],
    category: "genai",
    year: 2025,
    freelance: false,
    icon: "🎓",
    accent: "#3b82f6",
    githubUrl: "https://github.com/Mavi28/Ai_study_coach.git",
    liveUrl: "https://aistudycoach1.vercel.app/",
  },
  {
    id: 4,
    title: "Wolf Platform — B2B Dropshipping",
    description:
      "Full-stack B2B dropshipping platform for a real client — product catalogue, supplier integration, order management.",
    bullets: [
      "Full project architecture, API design, and frontend implementation",
      "REST API with React + Node.js + MongoDB  ",
      "Supplier catalogue sync, bulk order management, and client dashboard",
    ],
    tech: ["React", "Node.js", "MongoDB", "REST API"],
    category: "fullstack",
    year: 2025,
    freelance: true,
    icon: "🐺", 
    accent: "#f59e0b",
    githubUrl: null,
    liveUrl: "https://www.wolfplatform.net/",
  },
  {
  id: 5,
  title: "Model Regression Detection System",
  description:
    "CI/CD pipeline that automatically detects LLM quality regressions by testing prompt changes against a golden dataset and alerting via Slack.",
  bullets: [
    "Built eval engine scoring category accuracy and summary relevance using an LLM-as-judge across 50+ hand-labeled test cases",
    "Comparison logic that diffs each run against the previous one, detecting regressions and improvements with statistical significance thresholds",
    "GitHub Actions workflow triggers on every prompt change PR, generates HTML diff report, and sends structured Slack alerts",
  ],
  tech: ["Python", "Groq API", "Pydantic", "GitHub Actions", "Docker", "PyYAML"],
  category: "genai",
  year: 2025,
  freelance: false,
  icon: "🔍",
  accent: "#f97316",
  githubUrl: "https://github.com/Mavi28/Model-Regression-Detection-System.git",
  liveUrl: null,
},
  {
    id: 6,
    title: "CV Analyzer",
    description:
      "ML-powered CV analysis tool that scores resumes, extracts key skills, and gives improvement suggestions using NLP.",
    bullets: [
      "NLP pipeline for skill extraction and semantic resume scoring",
      "Compares CV content against job descriptions for gap analysis",
      "Outputs structured feedback report with improvement recommendations",
    ],
    tech: ["Python", "SpaCy", "Scikit-learn", "OpenAI API", "FastAPI", "Streamlit"],
    category: "ml",
    year: 2025,
    freelance: false,
    icon: "📋",
    accent: "#22c55e",
    githubUrl: "https://github.com/Mavi28/hirematch-ai.git",
    liveUrl: "https://hirematch-aii.streamlit.app/",
  },
  {
    id: 7,
    title: "Yzeydenim — Idea of Her",
    description:
      "Full-stack feminine denim e-commerce store based in Egypt. A rebrand from brutalist streetwear to soft editorial aesthetic with full shopping experience.",
    bullets: [
      "Built complete e-commerce flow — product catalogue, authentication, and checkout",
      "Rebranded from dark streetwear to soft feminine editorial (pink/blue/lavender palette)",
      "Cloudinary for image hosting, Resend for transactional emails, Google Analytics 4 for tracking",
      "NextAuth v5 for auth, Zustand for state management, React Hook Form + Zod for validation",
    ],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "MongoDB", "NextAuth", "Cloudinary", "Framer Motion", "Zustand"],
    category: "fullstack",
    year: 2026,
    freelance: true,
    icon: "👗",
    accent: "#f9a8d4",
    githubUrl: "https://github.com/Mavi28/Yzeydenim",
    liveUrl: "https://yzeydenim.vercel.app/",
  },
];

export default projects;
