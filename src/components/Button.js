export default function Button({ children, color, bgColor }) {
  return (
    <button
      style={{
        fontFamily: "var(--font-text)",
        fontSize: "1.2rem",
        fontWeight: 600,
        padding: "10px 24px",
        background: bgColor,
        color,
        borderRadius: 16,
        cursor: "pointer",
        letterSpacing: "0.03em",
        whiteSpace: "nowrap",
      }}
    >
      {children}
    </button>
  );
}
