// src/components/Buttons/StatusChip.jsx
export default function StatusChip({ status }) {
  const colors = {
    Completed: "green",
    Scheduled: "gray",
    Failed: "red"
  };

  return (
    <span style={{
      display: "inline-block",
      padding: "4px 8px",
      borderRadius: "12px",
      background: colors[status] || "blue",
      color: "#fff",
      fontSize: "0.9em"
    }}>
      {status}
    </span>
  );
}
