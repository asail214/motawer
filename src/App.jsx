//Main app with router
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/learn" element={<MainLayout><Learn /></MainLayout>} />
      <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
    </Routes>
  );
}