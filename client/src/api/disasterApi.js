const API = "http://localhost:5000/api/disasters";

const getToken = () => {
  return localStorage.getItem("token");
};

// CREATE
export const createDisaster = async (formData) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
    body: formData,
  });

  return res.json();
};

// GET ALL
export const getAllDisasters = async () => {
  const res = await fetch(API, {
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });

  return res.json();
};

// DELETE
export const deleteDisaster = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${getToken()}`,
    },
  });
};
