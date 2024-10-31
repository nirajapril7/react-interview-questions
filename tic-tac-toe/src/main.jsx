import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import TicTacToe from './TicTacToe.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TicTacToe/>
  </StrictMode>,
)
