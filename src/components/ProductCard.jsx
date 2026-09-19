export default function ProductCard({ product }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          background: "#f5f1ea",
          borderRadius: "12px",
          padding: "16px",
          marginBottom: "10px",
        }}
      >
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "130px",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
      </div>
      <h3 style={{ fontSize: "0.95rem", color: "#1f1f1f", margin: "4px 0", fontWeight: 600 }}>
        {product.name}
      </h3>
      <p style={{ color: "#8a8a8a", fontSize: "0.9rem" }}>${product.price}</p>
    </div>
  );
}
