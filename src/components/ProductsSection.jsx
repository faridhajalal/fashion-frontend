import { useEffect, useState } from "react";
import { fetchProducts } from "../api/productApi";
import ProductCard from "./ProductCard";

export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <p style={{ textAlign: "center", padding: "30px" }}>Loading products...</p>;
  if (error)
    return <p style={{ textAlign: "center", padding: "30px" }}>Error: {error}</p>;

  return (
    <section style={{ padding: "50px 30px", background: "#faf8f4" }}>
      <h2
        style={{
          textAlign: "center",
          color: "#1f1f1f",
          marginBottom: "36px",
          fontSize: "1.8rem",
        }}
      >
        Our Products
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "24px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </section>
  );
}
