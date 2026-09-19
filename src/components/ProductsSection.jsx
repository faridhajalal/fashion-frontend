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

  if (loading) return <p style={{ textAlign: "center", padding: "20px" }}>Loading products...</p>;
  if (error) return <p style={{ textAlign: "center", padding: "20px" }}>Error: {error}</p>;

  return (
    <section style={{ padding: "30px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Our Products</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </section>
  );
}