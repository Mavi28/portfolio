import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { ExternalLink } from "lucide-react";

function GithubIcon({ size = 15 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  const hasLinks = project.githubUrl || project.liveUrl;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(5,8,16,0.85)",
          backdropFilter: "blur(8px)",
          zIndex: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 24 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "#0d1117",
            border: `1px solid ${project.accent}33`,
            borderRadius: 16,
            padding: "2rem",
            maxWidth: 600,
            width: "100%",
            maxHeight: "85vh",
            overflowY: "auto",
            boxShadow: `0 0 80px ${project.accent}15, 0 30px 60px rgba(0,0,0,0.5)`,
          }}
        >
          {/* Header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
                <span style={{ fontSize: 28 }}>{project.icon}</span>
                <h3 style={{ fontSize: "1.4rem", fontWeight: 700, color: "#e8eaf0", fontFamily: "'DM Sans', sans-serif" }}>
                  {project.title}
                </h3>
              </div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                <span style={{
                  padding: "2px 10px",
                  borderRadius: 20,
                  fontSize: 11,
                  fontFamily: "'Space Mono', monospace",
                  background: `${project.accent}22`,
                  color: project.accent,
                  border: `1px solid ${project.accent}44`,
                }}>
                  {project.category.toUpperCase()}
                </span>
                <span style={{
                  padding: "2px 10px",
                  borderRadius: 20,
                  fontSize: 11,
                  fontFamily: "'Space Mono', monospace",
                  background: "rgba(255,255,255,0.05)",
                  color: "#8892a4",
                }}>
                  {project.year}
                </span>
                {project.freelance && (
                  <span style={{
                    padding: "2px 10px",
                    borderRadius: 20,
                    fontSize: 11,
                    fontFamily: "'Space Mono', monospace",
                    background: "rgba(245,158,11,0.15)",
                    color: "#f59e0b",
                    border: "1px solid rgba(245,158,11,0.3)",
                  }}>
                    Freelance
                  </span>
                )}
              </div>
            </div>
            <button
              onClick={onClose}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "none",
                color: "#8892a4",
                width: 32,
                height: 32,
                borderRadius: 8,
                cursor: "pointer",
                fontSize: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => { e.target.style.background = "rgba(255,255,255,0.1)"; e.target.style.color = "#e8eaf0"; }}
              onMouseLeave={(e) => { e.target.style.background = "rgba(255,255,255,0.06)"; e.target.style.color = "#8892a4"; }}
            >
              ✕
            </button>
          </div>

          {/* Description */}
          <p style={{ color: "#8892a4", lineHeight: 1.7, marginBottom: "1.5rem", fontSize: "0.95rem" }}>
            {project.description}
          </p>

          {/* Bullets */}
          <div style={{ marginBottom: "1.5rem" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", color: "#00f5c4", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Key Details
            </p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {project.bullets.map((b, i) => (
                <li key={i} style={{ display: "flex", gap: "0.6rem", color: "#8892a4", fontSize: "0.9rem", lineHeight: 1.6 }}>
                  <span style={{ color: project.accent, flexShrink: 0, marginTop: 2 }}>→</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div style={{ marginBottom: hasLinks ? "1.5rem" : 0 }}>
            <p style={{ fontFamily: "'Space Mono', monospace", color: "#00f5c4", fontSize: 11, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "0.75rem" }}>
              Tech Stack
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    padding: "4px 12px",
                    background: "#161b27",
                    border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: 6,
                    fontSize: 12,
                    fontFamily: "'Space Mono', monospace",
                    color: "#8892a4",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          {hasLinks && (
            <div style={{ display: "flex", gap: "0.75rem", paddingTop: "0.25rem", flexWrap: "wrap" }}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "9px 20px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    borderRadius: 8,
                    color: "#e8eaf0",
                    textDecoration: "none",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 12,
                    fontWeight: 600,
                    transition: "background 0.2s, border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.09)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                >
                  <GithubIcon size={15} />
                  View Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "9px 20px",
                    background: project.accent,
                    border: `1px solid ${project.accent}`,
                    borderRadius: 8,
                    color: "#050810",
                    textDecoration: "none",
                    fontFamily: "'Space Mono', monospace",
                    fontSize: 12,
                    fontWeight: 700,
                    transition: "opacity 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.85";
                    e.currentTarget.style.boxShadow = `0 4px 20px ${project.accent}44`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <ExternalLink size={15} strokeWidth={2} />
                  Live Demo
                </a>
              )}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
