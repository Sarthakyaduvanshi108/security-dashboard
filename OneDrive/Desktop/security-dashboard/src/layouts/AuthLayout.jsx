// src/layouts/AuthLayout.jsx
export default function AuthLayout({ children }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "#f0f2f5"
    }}>
      {children}
    </div>
  );
}
