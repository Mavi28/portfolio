import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";


const roles = ["ML Engineer", "AI Engineer", "RAG Builder", "GenAI Developer"];

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function WordReveal({ text, className, baseDelay = 0 }) {
  const words = text.split(" ");
  return (
    <span className={className} style={{ display: "inline" }}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i + baseDelay}
          initial="hidden"
          animate="visible"
          variants={wordVariants}
          style={{ display: "inline-block", marginRight: "0.3em" }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = roles[roleIndex];

    if (!isDeleting && charIndex <= current.length) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, 70);
    } else if (!isDeleting && charIndex > current.length) {
      timeoutRef.current = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && charIndex > 0) {
      timeoutRef.current = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((r) => (r + 1) % roles.length);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "7rem 2rem 5rem",
        maxWidth: 1200,
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div style={{ width: "100%", display: "flex", alignItems: "center", gap: "5rem", flexWrap: "wrap" }}>
        {/* Text content */}
        <div style={{ flex: "1 1 420px" }}>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            style={{
              fontFamily: "'Space Mono', monospace",
              color: "#00f5c4",
              fontSize: 13,
              letterSpacing: "2px",
              marginBottom: "1rem",
              textTransform: "uppercase",
            }}
          >
            Hey, I&apos;m
          </motion.p>

          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 700, lineHeight: 1.05, marginBottom: "0.75rem", fontFamily: "'DM Sans', sans-serif" }}>
            <WordReveal text="LEEN MOHAMMED" baseDelay={0} />
          </h1>

          <div style={{ marginBottom: "1.5rem", minHeight: 44 }}>
            <span style={{ fontSize: "clamp(1.25rem, 3vw, 1.8rem)", color: "#8892a4", fontFamily: "'DM Sans', sans-serif" }}>
              ML Engineer &amp;{" "}
            </span>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                color: "#00f5c4",
                fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                borderRight: "2px solid #00f5c4",
                paddingRight: 4,
                animation: "blink 1s step-end infinite",
              }}
            >
              {displayed}
            </span>
            <style>{`@keyframes blink { 0%,100%{border-color:#00f5c4} 50%{border-color:transparent} }`}</style>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            style={{ color: "#8892a4", fontSize: "1.05rem", lineHeight: 1.7, maxWidth: 520, marginBottom: "2.5rem" }}
          >
            Software Engineering student building production-grade ML systems, RAG pipelines, and GenAI applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <a
              href="#projects"
              style={{
                padding: "12px 28px",
                background: "#00f5c4",
                color: "#050810",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 600,
                fontSize: 15,
                fontFamily: "'Space Mono', monospace",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => { e.target.style.transform = "translateY(-2px)"; e.target.style.boxShadow = "0 8px 30px rgba(0,245,196,0.35)"; }}
              onMouseLeave={(e) => { e.target.style.transform = "none"; e.target.style.boxShadow = "none"; }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              style={{
                padding: "12px 28px",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#e8eaf0",
                borderRadius: 8,
                textDecoration: "none",
                fontWeight: 500,
                fontSize: 15,
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => { e.target.style.borderColor = "#00f5c4"; e.target.style.color = "#00f5c4"; }}
              onMouseLeave={(e) => { e.target.style.borderColor = "rgba(255,255,255,0.15)"; e.target.style.color = "#e8eaf0"; }}
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          style={{ flex: "0 0 auto", display: "flex", justifyContent: "center" }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: 280,
                height: 280,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(0,245,196,0.3)",
                boxShadow: "0 0 60px rgba(0,245,196,0.12), 0 0 120px rgba(0,245,196,0.06)",
              }}
            >
              <img
                src={avatarSrc}
                alt="LEEN MOHAMMED"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentNode.style.background = "linear-gradient(135deg, #0d1117 0%, #161b27 100%)";
                  e.target.parentNode.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-family:'Space Mono',monospace;font-size:64px;">👤</div>`;
                }}
              />
            </div>
            {/* Glow ring */}
            <div
              style={{
                position: "absolute",
                inset: -12,
                borderRadius: "50%",
                border: "1px solid rgba(0,245,196,0.1)",
                animation: "pulse-ring 3s ease-in-out infinite",
              }}
            />
            <style>{`@keyframes pulse-ring{0%,100%{transform:scale(1);opacity:0.5}50%{transform:scale(1.04);opacity:1}}`}</style>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
