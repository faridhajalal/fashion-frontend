import { useState, useEffect } from "react";

export default function ProductForm({ onSubmit, editingProduct, onCancel }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    description: "",
  });
  const [preview, setPreview] = useState("");

  useEffect(() => {
    if (editingProduct) {
      setForm(editingProduct);
      setPreview(editingProduct.image || "");
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm((prev) => ({ ...prev, image: reader.result }));
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ name: "", price: "", image: "", description: "" });
    setPreview("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        maxWidth: "420px",
        background: "#fff",
        padding: "24px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
        border: "1px solid #eee",
      }}
    >
      <div>
        <label style={labelStyle}>Product Name</label>
        <input
          name="name"
          placeholder="e.g. Classic White Shirt"
          value={form.name}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Price ($)</label>
        <input
          name="price"
          type="number"
          placeholder="e.g. 29.99"
          value={form.price}
          onChange={handleChange}
          required
          style={inputStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Product Image</label>
        <label style={fileButtonStyle}>
          Choose from Desktop
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </label>

        {preview && (
          <img
            src={preview}
            alt="Preview"
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "10px",
              marginTop: "10px",
              border: "1px solid #eee",
            }}
          />
        )}
      </div>

      <div>
        <label style={labelStyle}>Description</label>
        <textarea
          name="description"
          placeholder="Short description..."
          value={form.description}
          onChange={handleChange}
          style={{ ...inputStyle, minHeight: "70px", resize: "vertical" }}
        />
      </div>

      <button type="submit" style={buttonStyle}>
        {editingProduct ? "Update Product" : "Add Product"}
      </button>
      {editingProduct && (
        <button type="button" onClick={onCancel} style={cancelButtonStyle}>
          Cancel
        </button>
      )}
    </form>
  );
}

const labelStyle = {
  display: "block",
  fontSize: "0.85rem",
  fontWeight: 600,
  color: "#1f1f1f",
  marginBottom: "6px",
};

const inputStyle = {
  width: "100%",
  padding: "10px 12px",
  borderRadius: "8px",
  border: "1px solid #ddd",
  fontSize: "0.95rem",
  boxSizing: "border-box",
};

const fileButtonStyle = {
  display: "inline-block",
  padding: "10px 16px",
  borderRadius: "8px",
  border: "1px dashed #b5651d",
  color: "#b5651d",
  fontWeight: 600,
  fontSize: "0.9rem",
  cursor: "pointer",
  textAlign: "center",
  width: "100%",
  boxSizing: "border-box",
};

const buttonStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "none",
  background: "#b5651d",
  color: "white",
  fontWeight: 600,
  fontSize: "0.95rem",
  cursor: "pointer",
};

const cancelButtonStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #b5651d",
  background: "transparent",
  color: "#b5651d",
  fontWeight: 600,
  fontSize: "0.95rem",
  cursor: "pointer",
};
