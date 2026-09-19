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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin - Manage Products</h2>
      <ProductForm
        onSubmit={handleSubmit}
        editingProduct={editingProduct}
        onCancel={() => setEditingProduct(null)}
      />
      <ul style={{ marginTop: "20px" }}>
        {products.map((p) => (
          <li key={p._id} style={{ marginBottom: "8px" }}>
            {p.name} — ${p.price}{" "}
            <button onClick={() => setEditingProduct(p)}>Edit</button>{" "}
            <button onClick={() => handleDelete(p._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}