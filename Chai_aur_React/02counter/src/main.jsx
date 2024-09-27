import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// createRoot creates a DOM : it compares our main DOM with its virtual dom and updtaes only those who ar4e updated in the UI
// browser removes previous dom and repend complete dom : Reload  

// not updating immediately - but applying some algorithm to update optimizely - in UI updation

// React - Fibre : https://github.com/acdlite/react-fiber-architecture