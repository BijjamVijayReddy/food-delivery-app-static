import React, { useState, useEffect } from "react";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <header className={`header ${scrollPosition > 50 ? "fixed" : ""}`}> // Unconnect this to appy basic header
    // <header className={`header ${scrollPosition > 50 ? "fixed fade-in" : ""}`}> // Unconnect this to appy Fade In effect on header
    <header className={`header ${scrollPosition > 50 ? "fixed slide-in" : ""}`}>
      <Container>
        <Navbar expand="lg">
          <Navbar.Brand href="#home">
          </Navbar.Brand>
          <Navbar id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="#categories/react">
                  React
                </NavDropdown.Item>
                <NavDropdown.Item href="#categories/angular">
                  Angular
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
