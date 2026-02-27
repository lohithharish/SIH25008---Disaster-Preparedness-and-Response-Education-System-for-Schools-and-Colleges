import { useEffect, useState } from "react";
import { getAllDisasters, deleteDisaster } from "../api/disasterApi";

export default function DisasterList({ refreshFlag }) {
  const [disasters, setDisasters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchDisasters = async () => {
    try {
      const data = await getAllDisasters();
      setDisasters(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
      alert("Error fetching disasters");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDisasters();
  }, [refreshFlag]);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this disaster?")) return;

    await deleteDisaster(id);
    fetchDisasters();
  };

  if (loading) return <h3>Loading disasters...</h3>;

  return (
    <div>
      <h2>All Disasters</h2>

      {disasters.length === 0 && <p>No disasters found</p>}

      {disasters.map((d) => (
        <div key={d._id} className="card disasterCard">
          <h3>{d.title}</h3>
          <p>{d.description}</p>

          <p><b>Category:</b> {d.category}</p>
          <p><b>Severity:</b> {d.severity}</p>

          {d.image && (
            <img
              src={`http://localhost:5000/uploads/${d.image}`}
              width="200"
              alt={d.title}
            />
          )}

          <br />
          <button onClick={() => handleDelete(d._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
