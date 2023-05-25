import React, { useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./skIcon.svg";
import { Link } from "react-router-dom";
import "./MyNavbar.css"; // Import custom CSS

function MyNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = (isOpen) => {
    setIsDropdownOpen(isOpen);
  };

  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <div className="col-3">
          <Navbar.Brand className="me-auto">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </Navbar.Brand>
        </div>

        {/* <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={toggleExpanded}
        /> */}

        {/* <Navbar.Collapse id="basic-navbar-nav" expanded={expanded}> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="col-8 text-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link active">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link active">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/careers" className="nav-link active">
                  Careers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/it-support-blog" className="nav-link active">
                  Blogs
                </Link>
              </li>
              <NavDropdown
                title="Services"
                id="basic-nav-dropdown"
                onMouseEnter={() => handleDropdownToggle(true)}
                onMouseLeave={() => handleDropdownToggle(false)}
                show={isDropdownOpen}
              >
                <NavDropdown.Item>
                  <NavDropdown title="IMS" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link to="/managed-services" className="nav-link active">
                        Managed Services
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link to="/cloud-solutions" className="nav-link active">
                        Cloud Solutions
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to="/datacenter-migration"
                        className="nav-link active"
                      >
                        Datacenter Migration
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/devops" className="nav-link active">
                    DevOps
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavDropdown title="Development" id="basic-nav-dropdown">
                    <NavDropdown.Item>
                      <Link
                        to="/software-development"
                        className="nav-link active"
                      >
                        Software Development
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to="/website-development"
                        className="nav-link active"
                      >
                        Website Development
                      </Link>
                    </NavDropdown.Item>
                    <NavDropdown.Item>
                      <Link
                        to="/ecommerce-development"
                        className="nav-link active"
                      >
                        E-Commerce Development
                      </Link>
                    </NavDropdown.Item>
                  </NavDropdown>
                </NavDropdown.Item>
              </NavDropdown>
            </ul>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
