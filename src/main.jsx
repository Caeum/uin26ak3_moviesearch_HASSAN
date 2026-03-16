import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // BrowserRouter gjør at vi kan bruke routing i appen, og må derfor wrappe hele App-komponenten
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
