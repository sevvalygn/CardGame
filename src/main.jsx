import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import { store } from './store/store'
import './index.css'

const rootEl = document.getElementById('root')
if (!rootEl) {
  document.body.innerHTML = '<p style="padding:2rem;color:red;">#root bulunamadı.</p>'
} else {
  ReactDOM.createRoot(rootEl).render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  )
}
