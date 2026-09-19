export default function CategorySection() {
  return (
    <section style={{ padding: "10px 30px 50px", background: "#faf8f4" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {/* Men's - image left, text right */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            background: "#f4ede3",
            borderRadius: "14px",
            padding: "24px",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=300"
            alt="Men's fashion"
            style={imgStyle}
          />
          <div>
            <h3 style={titleStyle}>Men's Collection</h3>
            <p style={textStyle}>Sharp, timeless pieces for everyday confidence.</p>
            <span style={pillStyle}>New In</span>
          </div>
        </div>

        {/* Women's - text left, image right */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            background: "#f0e6e6",
            borderRadius: "14px",
            padding: "24px",
          }}
        >
          <div>
            <h3 style={titleStyle}>Women's Collection</h3>
            <p style={textStyle}>Effortless elegance for every occasion.</p>
            <span style={pillStyle}>New In</span>
          </div>
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=300"
            alt="Women's fashion"
            style={imgStyle}
          />
        </div>
      </div>
    </section>
  );
}

const imgStyle = {
  width: "120px",
  height: "120px",
  objectFit: "cover",
  borderRadius: "50%",
  flexShrink: 0,
};

const titleStyle = {
  color: "#1f1f1f",
  fontSize: "1.3rem",
  marginBottom: "6px",
  fontWeight: 700,
};

const textStyle = {
  color: "#6a6a6a",
  fontSize: "0.9rem",
  marginBottom: "12px",
  maxWidth: "180px",
};

const pillStyle = {
  display: "inline-block",
  background: "#b5651d",
  color: "white",
  padding: "6px 16px",
  borderRadius: "20px",
  fontSize: "0.8rem",
  fontWeight: 600,
};
