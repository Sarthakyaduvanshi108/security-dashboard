import DashboardLayout from "../layouts/DashboardLayout";
import mockData from "../assets/mockData.json";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <h1>Dashboard</h1>
      <table style={{ width: "100%", marginTop: "1rem", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#eee" }}>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>Scan Name</th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>Type</th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>Status</th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>Progress</th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>Critical</th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>High</th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>Medium</th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>Low</th>
            <th style={{ padding: "8px", border: "1px solid #ccc" }}>Last Scan</th>
          </tr>
        </thead>
        <tbody>
          {mockData.scans.map((scan, i) => (
            <tr key={i}>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>{scan.name}</td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>{scan.type}</td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>{scan.status}</td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>{scan.progress}</td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>{scan.vulnerabilities.critical}</td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>{scan.vulnerabilities.high}</td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>{scan.vulnerabilities.medium}</td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>{scan.vulnerabilities.low}</td>
              <td style={{ padding: "8px", border: "1px solid #ccc" }}>{scan.lastScan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DashboardLayout>
  );
}
