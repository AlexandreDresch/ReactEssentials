import { useState, useEffect } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

const DataFetching = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data.slice(0, 2));
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Posts</h1>
      <button onClick={fetchPosts} style={{ marginBottom: "20px" }}>
        Reload Posts
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {posts.map((post: Post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DataFetching;
