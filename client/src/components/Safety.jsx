export default function Safety() {
  const tips = [
    {
      title: "🌊 Flood Safety",
      items: [
        "Move to higher ground immediately",
        "Avoid walking/driving in flood water",
        "Keep emergency kit ready",
      ],
    },
    {
      title: "🔥 Fire Safety",
      items: [
        "Use stairs, not elevators",
        "Stay low to avoid smoke",
        "Use fire extinguisher if safe",
      ],
    },
    {
      title: "🌍 Earthquake Safety",
      items: [
        "Drop, Cover and Hold",
        "Stay away from windows",
        "Move to open area after shaking stops",
      ],
    },
  ];

  return (
    <div style={{ padding: 30 }}>
      <h1>🛟 Safety Guidelines</h1>

      {tips.map((tip, i) => (
        <div key={i} style={{ background:"#f1f5f9", padding:20, margin:15 }}>
          <h2>{tip.title}</h2>
          <ul>
            {tip.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
