import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"; // make sure you have this hook

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth(); // check auth status

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
