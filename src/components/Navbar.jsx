import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "16px", background: "#2f3e2f" }}>
      <Link to="/" style={{ color: "white" }}>Home</Link>
      <Link to="/shop" style={{ color: "white" }}>Shop</Link>
      <Link to="/admin" style={{ color: "white" }}>Admin</Link>
    </nav>
  );
}