import { useState, React } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

function Header() {
  const [isFullscreen, setIsFullscreen] = useState(false);
  function handleToggle() {
    setIsFullscreen(!isFullscreen);
  }

  return (
    <Container fluid className="header">
      <Navbar
        className={isFullscreen ? "fullscreen" : ""}
        expand="false"
        fixed="top"
      >
      <Navbar.Brand className="brand">P</Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={handleToggle}
        className="toggler"
      >
      <i class="fa-solid fa-bars-staggered"></i>
      </Navbar.Toggle>
      <Navbar.Collapse
        id="basic-navbar-nav"
        className="justify-content-center"
      >
      <Nav className="justify-content-center">
            <Link to='/' className="links">Home</Link>
            <Link to='/about' className="links">About</Link>
            <Link to='/blog' className="links">Blog</Link>
            <Link to='/portfolio' className="links">Portfolio</Link>
            <Link to='/contact' className="links">Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;
