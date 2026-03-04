import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard"); // login ke baad dashboard par redirect
  };

  return (
    <AuthLayout>
      <div style={{ background: "#fff", padding: "2rem", borderRadius: "8px", width: "300px" }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </AuthLayout>
  );
}


/* import { useNavigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally you'd check username/password here
    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      <div style={{ background: "#fff", padding: "2rem", borderRadius: "8px", width: "300px" }}>
        <h2>Login</h2>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input type="text" placeholder="Username" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </AuthLayout>
  );
}
*/