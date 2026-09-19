export default function Footer() {
  return (
    <footer style={{ background: "#2f2f2f", color: "white", padding: "40px 30px 24px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "30px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <div>
          <h4 style={{ marginBottom: "10px", fontSize: "1rem" }}>About Us</h4>
          <p style={{ fontSize: "0.85rem", maxWidth: "220px", color: "#b5b0a8", lineHeight: 1.6 }}>
            Curated fashion pieces designed to elevate your everyday style.
          </p>
        </div>
        <div>
          <h4 style={{ marginBottom: "10px", fontSize: "1rem" }}>Quick Links</h4>
          <p style={{ fontSize: "0.85rem", color: "#b5b0a8", marginBottom: "6px" }}>Home</p>
          <p style={{ fontSize: "0.85rem", color: "#b5b0a8", marginBottom: "6px" }}>Shop</p>
          <p style={{ fontSize: "0.85rem", color: "#b5b0a8" }}>Admin</p>
        </div>
        <div>
          <h4 style={{ marginBottom: "10px", fontSize: "1rem" }}>Follow Us</h4>
          <p style={{ fontSize: "0.85rem", color: "#b5b0a8" }}>Instagram · Facebook · Twitter</p>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          marginTop: "30px",
          fontSize: "0.8rem",
          color: "#8a8580",
        }}
      >
        &copy; {new Date().getFullYear()} Fashion App. All rights reserved.
      </p>
    </footer>
  );
}
