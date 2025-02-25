import React from 'react'
import ReactDOM from 'react-dom/client'

const Projects = () => (
  <div style={{ fontFamily: 'Arial, sans-serif', margin: '2rem' }}>
    <h1>My Projects</h1>
    <p>Here are some projects I've worked on. More details will be added soon.</p>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Projects />
  </React.StrictMode>
)
