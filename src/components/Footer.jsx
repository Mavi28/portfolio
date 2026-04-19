export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid rgba(255,255,255,0.06)",
      padding: "2rem",
      textAlign: "center",
    }}>
      <p style={{
        fontFamily: "'Space Mono', monospace",
        color: "#8892a4",
        fontSize: 12,
        letterSpacing: "0.5px",
      }}>
        Designed &amp; Built by{" "}
        <span style={{ color: "#00f5c4" }}>LEEN MOHAMMED</span>
        {" "}· {new Date().getFullYear()}
      </p>
    </footer>
  );
}
