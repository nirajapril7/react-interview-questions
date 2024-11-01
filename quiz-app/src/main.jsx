import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import Quiz from './Quiz'
 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Quiz/>
  </StrictMode>,
)
