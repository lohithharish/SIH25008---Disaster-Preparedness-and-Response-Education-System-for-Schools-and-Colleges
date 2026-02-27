function Certificate() {
  const username = localStorage.getItem("username") || "User";

  return (
    <div style={{ textAlign: "center", padding: "60px" }}>
      <h1>🎓 Certificate of Completion</h1>
      <h2>This certifies that</h2>
      <h1>{username}</h1>
      <h3>has successfully completed Disaster Preparedness Training</h3>
    </div>
  );
}

export default Certificate;
