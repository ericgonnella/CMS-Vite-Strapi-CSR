import React from 'react';
import ReactMarkdown from 'react-markdown';

function PostContent({ content }) {
  return <ReactMarkdown>{content}</ReactMarkdown>;
}

export default PostContent;
