import React from 'react';

export default function BlogListing() {
  const [posts, setPosts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetch('http://localhost:1338/api/posts?sort=publishedAt:desc')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log('Fetched data:', data);
        setPosts(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading posts...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (posts.length === 0) return <div>No posts found.</div>;

  return (
    <div style={{ padding: '1rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>My Blog Posts</h1>
      <ul>
        {posts.map((post) => {
          const { id, title, slug, date } = post;
          return (
            <li key={id}>
              <h2>{title}</h2>
              <p>Slug: {slug}</p>
              <p>Date: {date}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
