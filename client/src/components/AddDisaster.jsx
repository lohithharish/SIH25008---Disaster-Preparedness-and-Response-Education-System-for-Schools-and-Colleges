import { useState } from "react";
import { createDisaster } from "../api/disasterApi";

export default function AddDisaster({ refresh }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Flood");
  const [severity, setSeverity] = useState("Low");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("severity", severity);
      formData.append("image", image);

      await createDisaster(formData);

      // reset form
      setTitle("");
      setDescription("");
      setCategory("Flood");
      setSeverity("Low");
      setImage(null);

      refresh(); // refresh list
      alert("Disaster added successfully 🚀");

    } catch (err) {
      console.error(err);
      alert("Error adding disaster");
    }

    setLoading(false);
  };

  return (
    <div className="card">
      <h2>Add Disaster</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Disaster Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Flood</option>
          <option>Earthquake</option>
          <option>Fire</option>
          <option>Cyclone</option>
        </select>

        <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          required
        />

        <button disabled={loading}>
          {loading ? "Adding..." : "Add Disaster"}
        </button>
      </form>
    </div>
  );
}
