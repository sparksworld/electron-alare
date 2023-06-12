import React from 'react'
import ReactDOM from 'react-dom/client'
// import 'amfe-flexible'

import App from './App'
import 'tailwindcss/tailwind.css'
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLDivElement
)

root.render(
  <div className="relative w-screen h-screen overflow-hidden bg-gray-800">
    <App />
  </div>
)
