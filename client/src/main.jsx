import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import  RouteProvider from './RouteProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouteProvider>
      <App />
    </RouteProvider>
  </React.StrictMode>,
)
