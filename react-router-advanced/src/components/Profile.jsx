import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h1>User Profile</h1>
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Outlet /> {/* This renders nested routes */}
    </div>
  );
}
