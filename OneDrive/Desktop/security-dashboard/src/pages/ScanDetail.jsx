import DashboardLayout from "../layouts/DashboardLayout";
import mockData from "../assets/mockData.json";

export default function ScanDetail() {
  return (
    <DashboardLayout>
      <h1>Scan Detail</h1>
      <div style={{ marginTop: "1rem" }}>
        {mockData.findings.map((f, i) => (
          <div key={i} style={{
            border: "1px solid #ccc",
            borderRadius: "6px",
            padding: "1rem",
            marginBottom: "1rem",
            background: "#fff"
          }}>
            <strong style={{ 
              color: f.severity === "Critical" ? "red" : 
                     f.severity === "High" ? "orange" : 
                     f.severity === "Medium" ? "blue" : "green" 
            }}>
              {f.severity}
            </strong>
            <h3>{f.title}</h3>
            <p><b>Endpoint:</b> {f.endpoint}</p>
            <p><b>Time:</b> {f.time}</p>
            <p>{f.description}</p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}
