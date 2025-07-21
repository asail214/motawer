import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div className="d-flex flex-column min-vh-100" style={{ backgroundColor: '#0d1117' }}>
      <Header />
      <main className="flex-grow-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;