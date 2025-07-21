import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Learn from './pages/Learn.jsx'
import './styles/index.css'
import "./styles/App.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
)
