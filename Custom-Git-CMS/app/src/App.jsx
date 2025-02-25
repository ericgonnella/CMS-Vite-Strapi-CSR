// src/App.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import { Post } from './components/Post';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:postId" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById('root');
if (!window.myAppRoot) {
  window.myAppRoot = ReactDOM.createRoot(container);
}
window.myAppRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
