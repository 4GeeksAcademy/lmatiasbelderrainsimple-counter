import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
let unidad = 0

setInterval(() => {
  unidad++
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Home
        digito={unidad}
      />
    </React.StrictMode>
  )
}, 1000)
