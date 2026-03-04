// src/components/Badges/SeverityBadge.jsx
export default function SeverityBadge({ severity }) {
  const colors = {
    Critical: "red",
    High: "orange",
    Medium: "blue",
    Low: "green"
  };

  return (
    <span style={{
      display: "inline-block",
      padding: "4px 8px",
      borderRadius: "6px",
      background: colors[severity] || "gray",
      color: "#fff",
      fontSize: "0.85em"
    }}>
      {severity}
    </span>
  );
}
