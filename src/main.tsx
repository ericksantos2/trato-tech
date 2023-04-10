import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset.css'
import './styles/index.css'
import Router from './routes'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
)
