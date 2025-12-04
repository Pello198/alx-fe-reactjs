import { useState } from "react";
import { fetchAdvancedUserData } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);
    setPage(1);

    try {
      const data = await fetchAdvancedUserData(username, location, minRepos, 1);
      setUsers(data.items);
      setTotalCount(data.total_count);

      if (data.items.length === 0) {
        setError("Looks like we can't find the user");
      }

    } catch (err) {
      setError("No users found with the given criteria");
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    const nextPage = page + 1;
    setLoading(true);
    try {
      const data = await fetchAdvancedUserData(username, location, minRepos, nextPage);
      setUsers([...users, ...data.items]);
      setPage(nextPage);
    } catch (err) {
      setError("Error loading more users");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">GitHub User Search</h1>

      <form className="flex flex-col md:flex-row gap-2 mb-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          className="border p-2 rounded flex-1"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Location"
          className="border p-2 rounded flex-1"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Repos"
          className="border p-2 rounded w-32"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {/* NEW empty-results message */}
      {!loading && users.length === 0 && !error && (
        <p className="text-gray-500">Looks like we can't find the user</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded flex gap-4 items-center">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
            <div>
              <h2 className="font-bold">{user.login}</h2>
              {user.location && <p>Location: {user.location}</p>}
              <p>Repos: {user.public_repos ?? "N/A"}</p>
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>

      {users.length > 0 && users.length < totalCount && (
        <button
          onClick={loadMore}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
        >
          Load More
        </button>
      )}
    </div>
  );
}
