import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h1>User Profile</h1>

      {/* Navigation INSIDE profile */}
      <nav>
        <Link to="">Profile Details</Link> |{" "}
        <Link to="settings">Settings</Link>
      </nav>

      <hr />

      {/* Where nested pages render */}
      <Outlet />
    </div>
  );
}
