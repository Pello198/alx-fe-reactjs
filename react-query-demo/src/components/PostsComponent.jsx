import React from "react";
import { useQuery } from "@tanstack/react-query";

export default function PostsComponent() {
  // Fetch posts with React Query v5
  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
    // Cache data for 5 minutes
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Error fetching posts: {error.message}</p>;

  return (
    <div>
      <h1>Posts</h1>

      {/* Refetch button */}
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>

      <p>
        <em>
          Note: If you navigate away and return, data may load instantly from
          cache (staleTime = 5 min)
        </em>
      </p>
    </div>
  );
}
