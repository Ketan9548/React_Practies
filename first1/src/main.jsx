import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function syasomting(){
  return(
    <div>
      <h1>Good Morning</h1>
    </div>
  )
}
const val = React.createElement(
  'p',
  {},
  "good",
)

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  // </StrictMode>
  // syasomting()
  val
)
