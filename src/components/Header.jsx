import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand fw-bold text-primary" to="/">
        مطور
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to="/learn">ابدأ التعلم</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">تواصل معنا</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
