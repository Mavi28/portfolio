import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    category: "ML & AI",
    icon: "🤖",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace", "LangChain", "LlamaIndex"],
    color: "#00f5c4",
  },
  {
    category: "Generative AI",
    icon: "✨",
    skills: ["LLMs", "RAG", "Prompt Engineering", "Vector DBs", "FAISS", "Embeddings"],
    color: "#a855f7",
  },
  {
    category: "Data",
    icon: "📊",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "SQL", "EDA", "SpaCy"],
    color: "#3b82f6",
  },
  {
    category: "Languages",
    icon: "💻",
    skills: ["Python", "JavaScript", "Java", "HTML/CSS"],
    color: "#f59e0b",
  },
  {
    category: "Infrastructure",
    icon: "⚙️",
    skills: ["FastAPI", "Streamlit", "Docker", "AWS SageMaker", "Git", "Linux", "React", "Node.js"],
    color: "#ef4444",
  },
];

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.05, duration: 0.35, ease: "easeOut" },
  }),
};

export default function Skills() {
  return (
    <div style={{ background: "#0d1117" }}>
      <SectionWrapper id="skills">
        <SectionHeading label="03 / Skills" title="Tech Stack" />

        <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
          {skillGroups.map((group, gi) => {
            let globalIndex = 0;
            for (let i = 0; i < gi; i++) globalIndex += skillGroups[i].skills.length;

            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: gi * 0.08, duration: 0.5 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                  <span style={{ fontSize: 20 }}>{group.icon}</span>
                  <span style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 12,
                    color: group.color,
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                  }}>
                    {group.category}
                  </span>
                  <div style={{ flex: 1, height: 1, background: `${group.color}22` }} />
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {group.skills.map((skill, si) => (
                    <motion.span
                      key={skill}
                      custom={globalIndex + si}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={pillVariants}
                      whileHover={{ scale: 1.05, borderColor: group.color }}
                      style={{
                        padding: "6px 14px",
                        background: "#161b27",
                        border: `1px solid ${group.color}22`,
                        borderRadius: 8,
                        fontSize: 13,
                        fontFamily: "'Space Mono', monospace",
                        color: "#8892a4",
                        cursor: "default",
                        transition: "color 0.2s",
                        display: "inline-block",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = group.color)}
                      onMouseLeave={(e) => (e.target.style.color = "#8892a4")}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </SectionWrapper>
    </div>
  );
}
