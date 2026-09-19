import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 40px",
        background: "#fff",
        borderBottom: "1px solid #eee",
      }}
    >
      <span style={{ color: "#1f1f1f", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "2px" }}>
        FASHION
      </span>
      <div style={{ display: "flex", gap: "28px" }}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/shop" style={linkStyle}>Shop</Link>
        <Link to="/admin" style={linkStyle}>Admin</Link>
      </div>
      <button style={signupStyle}>Sign Up</button>
    </nav>
  );
}

const linkStyle = {
  color: "#4a4a4a",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "0.95rem",
};

const signupStyle = {
  background: "#b5651d",
  color: "white",
  border: "none",
  padding: "8px 20px",
  borderRadius: "20px",
  fontWeight: 600,
  fontSize: "0.85rem",
  cursor: "pointer",
};
