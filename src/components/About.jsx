import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: "🧠",
    title: "End-to-End ML",
    desc: "From raw data and feature engineering to model training, evaluation, and deployment in production environments.",
  },
  {
    icon: "✨",
    title: "Generative AI Native",
    desc: "Building with LLMs from the ground up — RAG pipelines, prompt engineering, agent architectures, and vector databases.",
  },
  {
    icon: "🚀",
    title: "Production Mindset",
    desc: "Shipping real systems for real users. Every project is built with reliability, scalability, and maintainability in mind.",
  },
];

export default function About() {
  return (
    <div style={{ background: "#0d1117" }}>
      <SectionWrapper id="about">
        <SectionHeading label="01 / About" title="Who I Am" />

        <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap", alignItems: "flex-start" }}>
          {/* Text */}
          <div style={{ flex: "1 1 340px" }}>
            <p style={{ color: "#8892a4", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.25rem" }}>
              I&apos;m a Software Engineering student at Nisantasi University, Istanbul, specialising in machine learning and AI systems. I build production-grade pipelines — from data ingestion to deployed models that real users interact with.
            </p>
            <p style={{ color: "#8892a4", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.25rem" }}>
              My focus is the intersection of generative AI and practical engineering: RAG pipelines, LLM integrations, and AI-powered applications that solve real problems at scale.
            </p>
            <p style={{ color: "#8892a4", fontSize: "1.05rem", lineHeight: 1.85 }}>
              I bring a full-stack perspective to every ML project — comfortable across the entire stack from model training and API design to React frontends and cloud deployment.
            </p>
          </div>

          {/* Highlight cards */}
          <div style={{ flex: "1 1 340px", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                style={{
                  display: "flex",
                  gap: "1rem",
                  padding: "1.25rem 1.5rem",
                  background: "#161b27",
                  borderRadius: 12,
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "border-color 0.2s",
                }}
                whileHover={{ borderColor: "rgba(0,245,196,0.2)" }}
              >
                <span style={{ fontSize: 28, flexShrink: 0, marginTop: 2 }}>{h.icon}</span>
                <div>
                  <p style={{ fontWeight: 600, color: "#e8eaf0", marginBottom: "0.35rem", fontSize: "1rem" }}>{h.title}</p>
                  <p style={{ color: "#8892a4", fontSize: "0.875rem", lineHeight: 1.65 }}>{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
