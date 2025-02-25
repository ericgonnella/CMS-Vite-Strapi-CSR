// pages/index.js
export async function getServerSideProps() {
    const res = await fetch('http://localhost:1337/api/posts'); // Adjust to your Strapi endpoint
    const data = await res.json();
  
    return {
      props: {
        posts: data,
      },
    };
  }
  
  const HomePage = ({ posts }) => (
    <div>
      <h1>My Blog</h1>
      {posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
  
  export default HomePage;
  