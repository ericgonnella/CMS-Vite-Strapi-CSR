import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostContent from './PostContent';

export function Post() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (postId) {
      fetch(`http://localhost:1337/api/posts/${postId}`)
        .then((res) => res.json())
        .then((data) => {
          setPost(data.data);
        })
        .catch((err) => console.error('Error fetching post:', err));
    }
  }, [postId]);

  if (!post) return <div>Loading...</div>;

  const { title, content } = post.attributes;

  return (
    <div>
      <h1>{title}</h1>
      <PostContent content={content} />
    </div>
  );
}
