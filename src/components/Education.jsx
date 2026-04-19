import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";

const certs = [
  { title: "Generative AI & AI Agents", provider: "Udemy", year: 2025 },
  { title: "AI Engineering with AWS SageMaker", provider: "Zero To Mastery", year: 2025 },
  { title: "Statistics Bootcamp", provider: "Zero To Mastery", year: 2025 },
  { title: "Prompt Engineering Bootcamp", provider: "Udemy", year: 2024 },
];

export default function Education() {
  return (
    <div>
      <SectionWrapper id="education">
        <SectionHeading label="04 / Education" title="Education & Certifications" />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem" }}>
          {/* Education */}
          <div>
            <p style={{
              fontFamily: "'Space Mono', monospace",
              color: "#00f5c4",
              fontSize: 11,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              Degree
            </p>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{
                position: "relative",
                paddingLeft: "1.5rem",
                borderLeft: "2px solid rgba(0,245,196,0.2)",
              }}
            >
              <div style={{
                position: "absolute",
                left: -6,
                top: 4,
                width: 10,
                height: 10,
                borderRadius: "50%",
                background: "#00f5c4",
                boxShadow: "0 0 12px rgba(0,245,196,0.6)",
              }} />

              <p style={{ fontFamily: "'Space Mono', monospace", color: "#8892a4", fontSize: 11, letterSpacing: "1px", marginBottom: "0.5rem" }}>
                2021 — 2026
              </p>
              <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "#e8eaf0", marginBottom: "0.3rem", fontFamily: "'DM Sans', sans-serif" }}>
                B.Sc. Software Engineering
              </h3>
              <p style={{ color: "#00f5c4", fontSize: "0.9rem", marginBottom: "0.3rem", fontFamily: "'Space Mono', monospace" }}>
                Nisantasi University
              </p>
              <p style={{ color: "#8892a4", fontSize: "0.875rem" }}>
                Istanbul, Turkey &nbsp;·&nbsp; GPA 3.0 / 4.0
              </p>
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <p style={{
              fontFamily: "'Space Mono', monospace",
              color: "#00f5c4",
              fontSize: 11,
              letterSpacing: "2px",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
            }}>
              Certifications
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {certs.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "0.875rem 1rem",
                    background: "#0d1117",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: 10,
                    transition: "border-color 0.2s",
                  }}
                  whileHover={{ borderColor: "rgba(0,245,196,0.2)" }}
                >
                  <div style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#00f5c4",
                    flexShrink: 0,
                  }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ color: "#e8eaf0", fontSize: "0.9rem", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {cert.title}
                    </p>
                    <p style={{ color: "#8892a4", fontSize: "0.8rem", fontFamily: "'Space Mono', monospace", marginTop: 2 }}>
                      {cert.provider} · {cert.year}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
