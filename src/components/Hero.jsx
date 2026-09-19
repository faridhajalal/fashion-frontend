export default function Hero() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        padding: "70px 40px",
        background: "#f5f1ea",
        gap: "30px",
      }}
    >
      <div style={{ maxWidth: "460px" }}>
        <h1
          style={{
            fontSize: "3rem",
            color: "#1f1f1f",
            marginBottom: "18px",
            lineHeight: 1.15,
            fontWeight: 700,
          }}
        >
          Elevate Your Style
        </h1>
        <p style={{ color: "#6a6a6a", fontSize: "1.05rem", marginBottom: "26px", lineHeight: 1.6 }}>
          Discover the latest fashion trends, curated just for you. Timeless pieces for every wardrobe.
        </p>
        <button
          style={{
            background: "#b5651d",
            color: "white",
            border: "none",
            padding: "13px 28px",
            borderRadius: "6px",
            fontWeight: 600,
            fontSize: "0.95rem",
            cursor: "pointer",
          }}
        >
          Shop Now
        </button>
      </div>
      <div
        style={{
          position: "relative",
          width: "420px",
          maxWidth: "100%",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=700"
          alt="Fashion"
          style={{
            width: "100%",
            height: "420px",
            objectFit: "cover",
            borderRadius: "16px",
          }}
        />
      </div>
    </section>
  );
}