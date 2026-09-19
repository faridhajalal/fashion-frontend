export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        padding: "80px 20px",
        textAlign: "center",
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "10px" }}>Elevate Your Style</h1>
      <p style={{ fontSize: "1.2rem" }}>
        Discover the latest fashion trends, curated just for you.
      </p>
    </section>
  );
}