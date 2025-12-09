import { Navigate } from "react-router-dom";

// Simulated authentication check
function isAuthenticated() {
  return localStorage.getItem("loggedIn") === "true";
}

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
