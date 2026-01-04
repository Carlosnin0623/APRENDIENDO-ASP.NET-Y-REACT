import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css' // Instalando bootrap
import '../node_modules/leaflet/dist/leaflet.css' // Instalando css leaflet
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
