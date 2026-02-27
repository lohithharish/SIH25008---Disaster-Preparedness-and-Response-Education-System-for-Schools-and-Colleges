import { useEffect, useState } from "react";

function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/scores")
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div className="container">
      <h1>🏆 Leaderboard</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Level</th>
            <th>Score</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {data.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.level}</td>
              <td>{user.score}</td>
              <td>{user.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
