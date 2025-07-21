import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold fs-2" style={{color: '#61DAFB'}}>
          مطور
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="nav-link-custom">
              الرئيسية
            </Nav.Link>
            <Nav.Link as={Link} to="/learn" className="nav-link-custom">
              ابدأ التعلم
            </Nav.Link>
            <Nav.Link as={Link} to="/frontend-basics" className="nav-link-custom">
              أساسيات Frontend
            </Nav.Link>
            <Nav.Link as={Link} to="/react-intro" className="nav-link-custom">
              مقدمة React
            </Nav.Link>
            <Nav.Link as={Link} to="/setup" className="nav-link-custom">
              إعداد البيئة
            </Nav.Link>
            <Nav.Link as={Link} to="/concepts" className="nav-link-custom">
              المفاهيم الأساسية
            </Nav.Link>
            <Nav.Link as={Link} to="/todo-project" className="nav-link-custom">
              مشروع Todo
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-link-custom">
              تواصل معي
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;