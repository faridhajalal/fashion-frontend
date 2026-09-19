export default function ProductCard({ product }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        width: "220px",
        flexShrink: 0,
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
          borderRadius: "6px",
        }}
      />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
    </div>
  );
}