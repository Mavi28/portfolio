import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const links = [
  {
    label: "Email",
    href: "mailto:leenmohd2003@gmail.com",
    icon: "✉️",
    display: "leenmohd2003@gmail.com",
    color: "#00f5c4",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/leen-m-50223629b/",
    icon: "💼",
    display: "linkedin.com/in/leen-m-50223629b/",
    color: "#3b82f6",
  },
  {
    label: "GitHub",
    href: "https://github.com/Mavi28",
    icon: "🐙",
    display: "github.com/Mavi28",
    color: "#a855f7",
  },
];

export default function Contact() {
  return (
    <div style={{ background: "#0d1117" }}>
      <SectionWrapper id="contact">
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto" }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              fontFamily: "'Space Mono', monospace",
              color: "#00f5c4",
              fontSize: 12,
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            05 / Contact
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              color: "#e8eaf0",
              marginBottom: "1rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Let&apos;s Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: "#8892a4", fontSize: "1rem", lineHeight: 1.7, marginBottom: "2.5rem" }}
          >
            Open to ML engineering roles, AI internships, and freelance projects.
          </motion.p>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 + i * 0.08 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "1rem 1.5rem",
                  background: "#161b27",
                  border: `1px solid ${l.color}22`,
                  borderRadius: 12,
                  textDecoration: "none",
                  transition: "border-color 0.2s, background 0.2s, transform 0.2s",
                }}
                whileHover={{ y: -2 }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${l.color}55`;
                  e.currentTarget.style.background = `${l.color}0a`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${l.color}22`;
                  e.currentTarget.style.background = "#161b27";
                }}
              >
                <span style={{ fontSize: 20 }}>{l.icon}</span>
                <div style={{ textAlign: "left", flex: 1 }}>
                  <p style={{ fontFamily: "'Space Mono', monospace", color: l.color, fontSize: 11, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 2 }}>
                    {l.label}
                  </p>
                  <p style={{ color: "#8892a4", fontSize: "0.875rem" }}>{l.display}</p>
                </div>
                <span style={{ color: "#8892a4", fontSize: 16 }}>→</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Resume CTA */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            whileHover={{ y: -2, boxShadow: "0 8px 30px rgba(0,245,196,0.3)" }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "12px 32px",
              background: "#00f5c4",
              color: "#050810",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 700,
              fontFamily: "'Space Mono', monospace",
              fontSize: 13,
              letterSpacing: "0.5px",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
          >
            ↓ Download Resume
          </motion.a>
        </div>
      </SectionWrapper>
    </div>
  );
}
