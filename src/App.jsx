import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Contact from './pages/Contact';
import FrontendBasics from "./pages/FrontendBasics";

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-primary text-center mb-4">مرحباً بك في منصة مطور</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </div>
  );
}

export default App;
