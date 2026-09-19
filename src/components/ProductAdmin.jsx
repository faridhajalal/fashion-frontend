import { useEffect, useState } from "react";
import { fetchProducts, createProduct, updateProduct, deleteProduct } from "../api/productApi";
import ProductForm from "./ProductForm";

export default function ProductAdmin() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadProducts = async () => {
    try {
      setLoading(true);
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleSubmit = async (formData) => {
    if (editingProduct) {
      await updateProduct(editingProduct._id, formData);
      setEditingProduct(null);
    } else {
      await createProduct(formData);
    }
    loadProducts();
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    loadProducts();
  };

  return (
    <div style={{ padding: "40px", background: "#faf8f4", minHeight: "80vh" }}>
      <h2 style={{ color: "#1f1f1f", marginBottom: "24px", fontSize: "1.6rem" }}>
        Admin — Manage Products
      </h2>

      <div style={{ display: "flex", gap: "40px", flexWrap: "wrap", alignItems: "flex-start" }}>
        <ProductForm
          onSubmit={handleSubmit}
          editingProduct={editingProduct}
          onCancel={() => setEditingProduct(null)}
        />

        <div style={{ flex: 1, minWidth: "280px" }}>
          {loading && <p style={{ color: "#6a6a6a" }}>Loading...</p>}
          {error && <p style={{ color: "#b5651d" }}>Error: {error}</p>}

          {!loading && !error && (
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {products.map((p) => (
                <div
                  key={p._id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    background: "#fff",
                    borderRadius: "10px",
                    padding: "12px",
                    border: "1px solid #eee",
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    style={{
                      width: "60px",
                      height: "60px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      flexShrink: 0,
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, color: "#1f1f1f", margin: 0 }}>{p.name}</p>
                    <p style={{ color: "#b5651d", fontWeight: 600, margin: "4px 0 0" }}>
                      ${p.price}
                    </p>
                  </div>
                  <button onClick={() => setEditingProduct(p)} style={editBtnStyle}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(p._id)} style={deleteBtnStyle}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const editBtnStyle = {
  padding: "8px 14px",
  borderRadius: "6px",
  border: "1px solid #1f1f1f",
  background: "transparent",
  color: "#1f1f1f",
  fontWeight: 600,
  fontSize: "0.85rem",
  cursor: "pointer",
};

const deleteBtnStyle = {
  padding: "8px 14px",
  borderRadius: "6px",
  border: "none",
  background: "#c0392b",
  color: "white",
  fontWeight: 600,
  fontSize: "0.85rem",
  cursor: "pointer",
};
