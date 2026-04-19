export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div style={{ marginBottom: "3.5rem" }}>
      <p style={{
        fontFamily: "'Space Mono', monospace",
        color: "#00f5c4",
        fontSize: 12,
        letterSpacing: "3px",
        textTransform: "uppercase",
        marginBottom: "0.75rem",
      }}>
        {label}
      </p>
      <h2 style={{
        fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
        fontWeight: 700,
        color: "#e8eaf0",
        lineHeight: 1.1,
        marginBottom: subtitle ? "1rem" : 0,
        fontFamily: "'DM Sans', sans-serif",
      }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ color: "#8892a4", fontSize: "1rem", maxWidth: 540, lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
