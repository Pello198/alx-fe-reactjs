import axios from "axios";

const token = import.meta.env.VITE_APP_GITHUB_API_KEY;

export const fetchUserData = async (username, location, minRepos, page = 1) => {
  let query = username ? `${username} in:login` : "";
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

const response = await axios.get(
  `https://api.github.com/search/users?q=${query}&per_page=10&page=${page}`,
  {
    headers: token ? { Authorization: `token ${token}` } : {},
  }
);


  const users = response.data.items;

  // Fetch extra details like repos and location for each user
  const detailedUsers = await Promise.all(
    users.map(async (user) => {
      const userDetails = await axios.get(user.url, {
        headers: token ? { Authorization: `token ${token}` } : {},
      });
      return { ...user, ...userDetails.data };
    })
  );

  return { total_count: response.data.total_count, items: detailedUsers };
};
