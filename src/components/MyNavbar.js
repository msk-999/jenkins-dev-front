import { Navbar, Container, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./skIcon.svg";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <div className="row mb-5">
      <Navbar expand="md" bg="light" variant="light" fixed="top">
        <Container>
          <div className="col-3">
            <Navbar.Brand className="me-auto">
              <Link to="/"><img src={logo} alt="logo" /></Link>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="basic-navbar-nav"
              className="border-0"
            />
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
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
              </ul>
            </div>
          </Navbar.Collapse>
          <div className="col-sm-3 text-end text-sm-center">
            <Link to="/contact">
              <Button variant="outline-dark" className="ms-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
