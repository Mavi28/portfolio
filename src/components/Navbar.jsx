import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      if (y > lastY.current + 5 && y > 80) setHidden(true);
      else if (y < lastY.current - 5) setHidden(false);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        background: scrolled ? "rgba(5,8,16,0.85)" : "transparent",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          {/* Logo */}
          <a
            href="#hero"
            style={{ textDecoration: "none", fontFamily: "'Space Mono', monospace", color: "#00f5c4", fontWeight: 700, fontSize: 18, letterSpacing: "-0.5px" }}
          >
            &lt;YN /&gt;
          </a>

          {/* Desktop links */}
          <div style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="nav-desktop">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  color: "#8892a4",
                  textDecoration: "none",
                  fontFamily: "'Space Mono', monospace",
                  fontSize: 13,
                  letterSpacing: "0.5px",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#00f5c4")}
                onMouseLeave={(e) => (e.target.style.color = "#8892a4")}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "6px 16px",
                border: "1px solid #00f5c4",
                borderRadius: 6,
                color: "#00f5c4",
                textDecoration: "none",
                fontFamily: "'Space Mono', monospace",
                fontSize: 12,
                letterSpacing: "0.5px",
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => { e.target.style.background = "#00f5c4"; e.target.style.color = "#050810"; }}
              onMouseLeave={(e) => { e.target.style.background = "transparent"; e.target.style.color = "#00f5c4"; }}
            >
              Resume
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "none" }}
            aria-label="Toggle menu"
          >
            <div style={{ width: 22, height: 2, background: "#e8eaf0", marginBottom: 5, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
            <div style={{ width: 22, height: 2, background: "#e8eaf0", marginBottom: 5, transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <div style={{ width: 22, height: 2, background: "#e8eaf0", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{
              overflow: "hidden",
              background: "rgba(5,8,16,0.96)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              backdropFilter: "blur(16px)",
            }}
          >
            <div style={{ padding: "1rem 2rem 1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: "#8892a4", textDecoration: "none", fontFamily: "'Space Mono', monospace", fontSize: 14 }}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#00f5c4", textDecoration: "none", fontFamily: "'Space Mono', monospace", fontSize: 13 }}
              >
                Resume ↗
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: block !important; }
        }
      `}</style>
    </motion.nav>
  );
}
