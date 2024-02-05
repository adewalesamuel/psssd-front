import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "./app-assets/vendors/css/vendors.min.css"
import "./app-assets/css/bootstrap.css"
import "./app-assets/css/bootstrap-extended.css"
import "./app-assets/css/colors.css"
import "./app-assets/css/components.css"
import "./app-assets/css/themes/dark-layout.css"
import "./app-assets/css/themes/semi-dark-layout.css"
import "./app-assets/css/core/menu/menu-types/vertical-menu.css"


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
