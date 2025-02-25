import React from 'react'
import ReactDOM from 'react-dom/client'

const Contact = () => (
  <div style={{ fontFamily: 'Arial, sans-serif', margin: '2rem' }}>
    <h1>Contact Me</h1>
    <p>You can reach me via email at <a href="mailto:your.email@example.com">your.email@example.com</a>.</p>
  </div>
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Contact />
  </React.StrictMode>
)
