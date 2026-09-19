export default function Footer() {
  return (
    <footer style={{ background: "#2f3e2f", color: "white" }}>
      <img
        src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1600"
        alt="Fashion banner"
        style={{ width: "100%", height: "220px", objectFit: "cover", display: "block" }}
      />
      <div style={{ padding: "20px", textAlign: "center" }}>
        <p>&copy; {new Date().getFullYear()} Fashion App. All rights reserved.</p>
      </div>
    </footer>
  );
}