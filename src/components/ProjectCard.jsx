import { motion } from "framer-motion";
import { GitBranch, ExternalLink } from "lucide-react";

function GithubIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

const categoryLabels = { genai: "GenAI", ml: "ML", fullstack: "Full Stack" };

function IconLink({ href, icon: Icon, label, accent }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onClick={(e) => e.stopPropagation()}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 30,
        height: 30,
        borderRadius: 7,
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.08)",
        color: "#8892a4",
        transition: "color 0.2s, border-color 0.2s, background 0.2s",
        textDecoration: "none",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = accent;
        e.currentTarget.style.borderColor = `${accent}55`;
        e.currentTarget.style.background = `${accent}12`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#8892a4";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.background = "rgba(255,255,255,0.05)";
      }}
    >
      <Icon size={14} strokeWidth={1.8} />
    </a>
  );
}

export default function ProjectCard({ project, index, onViewDetails }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: (index % 3) * 0.1, duration: 0.5 }}
      whileHover={{ y: -6 }}
      style={{
        background: "#0d1117",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 14,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.25s, box-shadow 0.25s",
        cursor: "default",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${project.accent}44`;
        e.currentTarget.style.boxShadow = `0 0 40px ${project.accent}18, 0 8px 30px rgba(0,0,0,0.3)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Accent bar */}
      <div style={{ height: 3, background: `linear-gradient(90deg, ${project.accent}, ${project.accent}44)` }} />

      <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", flex: 1, gap: "1rem" }}>
        {/* Icon + badges + external link icons */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
          <span style={{ fontSize: 32, flexShrink: 0 }}>{project.icon}</span>

          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.4rem" }}>
            {/* Badges row */}
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", justifyContent: "flex-end" }}>
              <span style={{
                padding: "2px 9px",
                borderRadius: 20,
                fontSize: 11,
                fontFamily: "'Space Mono', monospace",
                background: `${project.accent}1a`,
                color: project.accent,
                border: `1px solid ${project.accent}33`,
              }}>
                {categoryLabels[project.category]}
              </span>
              <span style={{
                padding: "2px 9px",
                borderRadius: 20,
                fontSize: 11,
                fontFamily: "'Space Mono', monospace",
                color: "#8892a4",
                background: "rgba(255,255,255,0.04)",
              }}>
                {project.year}
              </span>
              {project.freelance && (
                <span style={{
                  padding: "2px 9px",
                  borderRadius: 20,
                  fontSize: 11,
                  fontFamily: "'Space Mono', monospace",
                  background: "rgba(245,158,11,0.12)",
                  color: "#f59e0b",
                  border: "1px solid rgba(245,158,11,0.25)",
                }}>
                  Freelance
                </span>
              )}
            </div>

            {/* External icon buttons */}
            {(project.githubUrl || project.liveUrl) && (
              <div style={{ display: "flex", gap: "0.35rem" }}>
                {project.githubUrl && (
                  <IconLink href={project.githubUrl} icon={GithubIcon} label="View source on GitHub" accent={project.accent} />
                )}
                {project.liveUrl && (
                  <IconLink href={project.liveUrl} icon={ExternalLink} label="Open live demo" accent={project.accent} />
                )}
              </div>
            )}
          </div>
        </div>

        <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#e8eaf0", fontFamily: "'DM Sans', sans-serif", lineHeight: 1.3 }}>
          {project.title}
        </h3>

        <p style={{ color: "#8892a4", fontSize: "0.875rem", lineHeight: 1.65, flex: 1 }}>
          {project.description}
        </p>

        {/* Tech pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              style={{
                padding: "3px 10px",
                background: "#161b27",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 5,
                fontSize: 11,
                fontFamily: "'Space Mono', monospace",
                color: "#8892a4",
              }}
            >
              {t}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span style={{
              padding: "3px 10px",
              background: "#161b27",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 5,
              fontSize: 11,
              fontFamily: "'Space Mono', monospace",
              color: "#8892a4",
            }}>
              +{project.tech.length - 4}
            </span>
          )}
        </div>

        {/* CTA */}
        <div style={{ marginTop: "0.25rem", display: "flex", gap: "0.5rem" }}>
          <button
            onClick={() => onViewDetails(project)}
            style={{
              flex: 1,
              padding: "8px 0",
              background: "none",
              border: `1px solid ${project.accent}33`,
              borderRadius: 8,
              color: project.accent,
              fontFamily: "'Space Mono', monospace",
              fontSize: 12,
              cursor: "pointer",
              transition: "background 0.2s, border-color 0.2s",
            }}
            onMouseEnter={(e) => { e.target.style.background = `${project.accent}15`; e.target.style.borderColor = `${project.accent}66`; }}
            onMouseLeave={(e) => { e.target.style.background = "none"; e.target.style.borderColor = `${project.accent}33`; }}
          >
            View Details →
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                flex: 1,
                padding: "8px 0",
                background: project.accent,
                border: `1px solid ${project.accent}`,
                borderRadius: 8,
                color: "#050810",
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                fontWeight: 700,
                cursor: "pointer",
                transition: "opacity 0.2s",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "0.3rem",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85"; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
            >
              <ExternalLink size={12} strokeWidth={2.5} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
