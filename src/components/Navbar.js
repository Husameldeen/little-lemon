export default function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        background: "#FFFFFF",
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 80px",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div>
        <img src="logo.svg" alt="little-lemon-logo" />
      </div>
      <ul style={{ display: "flex", gap: 32, alignItems: "center" }}>
        {["Home", "About", "Menu", "Reservations", "Order Online", "Login"].map(
          (link) => (
            <li
              key={link}
              style={{
                listStyle: "none",
                fontFamily: "var(--font-text)",
                fontSize: 13,
                fontWeight: 600,
                color: "#555555",
                cursor: "pointer",
                borderBottom: link === "Home" ? "2px solid #555555" : "none",
                paddingBottom: 2,
              }}
            >
              {link}
            </li>
          ),
        )}
      </ul>
    </nav>
  );
}
