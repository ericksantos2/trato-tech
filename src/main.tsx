import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset.css'
import './styles/index.css'
import Router from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
