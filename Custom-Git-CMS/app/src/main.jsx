import React from 'react';
import ReactDOM from 'react-dom/client';
import BlogListing from './blogListing';

const container = document.getElementById('root');
ReactDOM.createRoot(container).render(
  <React.StrictMode>
    <BlogListing />
  </React.StrictMode>
);
