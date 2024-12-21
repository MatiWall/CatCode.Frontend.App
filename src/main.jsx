import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <p>This is a tets {JSON.stringify(process.env.APP_CONFIG)}</p>
    <App></App>
    </>
)
