import { useState, useEffect } from "react";

export default function ProductForm({ onSubmit, editingProduct, onCancel }) {
  const [form, setForm] = useState({ name: "", price: "", image: "", description: "" });

  useEffect(() => {
    if (editingProduct) setForm(editingProduct);
  }, [editingProduct]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", price: "", image: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "8px", maxWidth: "400px" }}>
      <input name="name" placeholder="Product name" value={form.name} onChange={handleChange} required />
      <input name="price" type="number" placeholder="Price" value={form.price} onChange={handleChange} required />
      <input name="image" placeholder="Image URL" value={form.image} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <button type="submit">{editingProduct ? "Update Product" : "Add Product"}</button>
      {editingProduct && <button type="button" onClick={onCancel}>Cancel</button>}
    </form>
  );
}