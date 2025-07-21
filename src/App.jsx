import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Contact from './pages/Contact';
import FrontendBasics from "./pages/FrontendBasics";
import ReactIntro from "./pages/ReactIntro";
import Setup from "./pages/Setup";
import Concepts from "./pages/Concepts";
import TodoProject from "./pages/TodoProject";
import NextSteps from "./pages/NextSteps";

// Create placeholder components for missing pages
const ReactIntro = () => (
  <div className="container mt-5">
    <h1>مقدمة React - قريباً</h1>
    <p>هذه الصفحة قيد التطوير</p>
  </div>
);

const Setup = () => (
  <div className="container mt-5">
    <h1>إعداد البيئة - قريباً</h1>
    <p>هذه الصفحة قيد التطوير</p>
  </div>
);

const Concepts = () => (
  <div className="container mt-5">
    <h1>المفاهيم الأساسية - قريباً</h1>
    <p>هذه الصفحة قيد التطوير</p>
  </div>
);

const TodoProject = () => (
  <div className="container mt-5">
    <h1>مشروع Todo - قريباً</h1>
    <p>هذه الصفحة قيد التطوير</p>
  </div>
);

const NextSteps = () => (
  <div className="container mt-5">
    <h1>الخطوات التالية - قريباً</h1>
    <p>هذه الصفحة قيد التطوير</p>
  </div>
);

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/frontend-basics" element={<FrontendBasics />} />
        <Route path="/react-intro" element={<ReactIntro />} />
        <Route path="/setup" element={<Setup />} />
        <Route path="/concepts" element={<Concepts />} />
        <Route path="/todo-project" element={<TodoProject />} />
        <Route path="/next-steps" element={<NextSteps />} />
      </Routes>
    </MainLayout>
  );
}

export default App;