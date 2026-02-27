import { useState } from "react";
import { updateDisaster } from "../api/disasterApi";

export default function EditDisaster({ disaster, close, refresh }) {
  const [title, setTitle] = useState(disaster.title);
  const [description, setDescription] = useState(disaster.description);
  const [category, setCategory] = useState(disaster.category);
  const [severity, setSeverity] = useState(disaster.severity);
  const [image, setImage] = useState(null);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("severity", severity);
    if (image) formData.append("image", image);

    await updateDisaster(disaster._id, formData);
    refresh();
    close();
  };

  return (
    <div className="editBox">
      <h2>Edit Disaster</h2>

      <form onSubmit={handleUpdate}>
        <input value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input value={description} onChange={(e)=>setDescription(e.target.value)} />

        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
          <option>Flood</option>
          <option>Earthquake</option>
          <option>Fire</option>
          <option>Cyclone</option>
        </select>

        <select value={severity} onChange={(e)=>setSeverity(e.target.value)}>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <input type="file" onChange={(e)=>setImage(e.target.files[0])} />

        <button>Update</button>
        <button type="button" onClick={close}>Cancel</button>
      </form>
    </div>
  );
}
