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
      "AI-powered study assistant that generates personalised quizzes and adapts difficulty based on performance.",
    bullets: [
      "Prompt engineering + LLM chaining for adaptive difficulty quiz generation",
      "Tracks learning progress across topics with performance analytics",
      "Clean Streamlit UI with topic selection and score history",
    ],
    tech: ["Python", "OpenAI API", "LangChain", "Streamlit"],
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
    title: "Wolf Drop — B2B Dropshipping",
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
    liveUrl: null,
  },
  {
    id: 5,
    title: "MCP Server real-time weather tool",
    description:
      "Model Context Protocol server enabling AI agents to interact with external tools through a standardised interface.",
    bullets: [
      "A custom MCP server providing real-time weather as a tool for Claude and autonomous AI agents via OpenWeatherMap.”",
      "Modular tool registry with runtime discovery and schema validation",
      "FastAPI + MCP SDK with full OpenAPI documentation",
    ],
    tech: ["Python", "FastAPI", "MCP SDK"],
    category: "fullstack",
    year: 2025,
    freelance: false,
    icon: "⚙️",
    accent: "#ef4444",
    githubUrl: "https://github.com/Mavi28/mcp_server.git",
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
];

export default projects;
