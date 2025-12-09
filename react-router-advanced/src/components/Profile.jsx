import React from "react";
import { Routes, Route } from "react-router-dom";

// Nested pages/components
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <div>
      <h1>User Profile</h1>

      {/* Nested Routes */}
      <Routes>
        <Route index element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
