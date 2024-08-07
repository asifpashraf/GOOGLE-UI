import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Headd from './components/header.jsx'
import Footer from './components/footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Headd/>
    <App />
    <Footer/>
  </React.StrictMode>,
)
