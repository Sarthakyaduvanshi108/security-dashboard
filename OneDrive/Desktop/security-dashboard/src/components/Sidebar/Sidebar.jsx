import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside style={{ width: "220px", background: "#0F0F0F", color: "#fff", padding: "1rem" }}>
      <h2 style={{ color: "#0CC8A8" }}>security-dashboard</h2>
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/dashboard" style={{ color: "#fff" }}>Dashboard</Link></li>
          <li><Link to="/scan/1" style={{ color: "#fff" }}>Scan Detail</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
