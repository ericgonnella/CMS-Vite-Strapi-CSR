import React from 'react'
import ReactDOM from 'react-dom/client'

const About = () => (
  <div style={{ fontFamily: 'Arial, sans-serif', margin: '2rem' }}>
    <h1>About Me</h1>
    <p>Hi, I'm [Your Name]. This page provides information about my background, skills, and interests.</p>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <About />
  </React.StrictMode>
)
