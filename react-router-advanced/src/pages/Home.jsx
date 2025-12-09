import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>

      <p>
        <Link to="/profile">Go to Profile (Protected)</Link>
      </p>

      <p>
        <Link to="/blog/10">View Blog Post 10</Link>
      </p>
    </div>
  );
}
