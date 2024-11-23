import { useEffect, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import "./Header.css";

const Header = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.className = theme === "light" ? "light-theme" : "";
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  const [expanded, setExpanded] = useState(false);

  const navLinks = [{ id: 1, name: "Home", icon: <FaHome />, navlink: "/" }];

  const handleLinkClick = () => {
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded} expand="lg" className="header-section">
      <Container>
        <Navbar.Brand href="#" className="text-light">
          <span className="heading-font">
            <a className="color-white" href="/">
              BookHunt
            </a>
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
          onClick={() => setExpanded(!expanded)}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex gap-4">
            {navLinks.map((link) => (
              <Nav.Link
                key={link.id}
                href={link.navlink}
                className="link"
                onClick={handleLinkClick}
              >
                {link.icon} {link.name}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
