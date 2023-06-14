import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "./skIcon.svg";
import "./MyNavbar.css"; // Import custom CSS

function MyNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = (isOpen) => {
    setIsDropdownOpen(isOpen);
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              as={NavLink}
              exact
              to="/"
              className="nav-link"
              activeClassName="active"
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/about"
              className="nav-link"
              activeClassName="active"
            >
              About Us
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/careers"
              className="nav-link"
              activeClassName="active"
            >
              Careers
            </Nav.Link>
            <Nav.Link
              as={NavLink}
              to="/it-support-blog"
              className="nav-link"
              activeClassName="active"
            >
              Blogs
            </Nav.Link>
            <NavDropdown
              title="Services"
              id="services-dropdown"
              show={isDropdownOpen}
              onMouseEnter={() => handleDropdownToggle(true)}
              onMouseLeave={() => handleDropdownToggle(false)}
            >
              <NavDropdown.Item>
                <NavDropdown title="IMS" id="ims-dropdown">
                  <NavDropdown.Item
                    as={NavLink}
                    to="/managed-services"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Managed Services
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/cloud-solutions"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Cloud Solutions
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/datacenter-migration"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Datacenter Migration
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown.Item>
              <NavDropdown.Item
                as={NavLink}
                to="/devops"
                className="nav-link"
                activeClassName="active"
              >
                DevOps
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavDropdown title="Development" id="development-dropdown">
                  <NavDropdown.Item
                    as={NavLink}
                    to="/software-development"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Software Development
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/website-development"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Website Development
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    as={NavLink}
                    to="/ecommerce-development"
                    className="nav-link"
                    activeClassName="active"
                  >
                    E-Commerce Development
                  </NavDropdown.Item>
                </NavDropdown>
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              as={NavLink}
              to="/contact"
              className="nav-link"
              activeClassName="active"
            >
              <div className="row">
                <div className="col">
                  <Link to="/contact">
                    <button type="button" className="btn btn-outline-dark">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
