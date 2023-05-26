import React from "react";
import icon from "../img/Skeletos_icon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-between">
            <div className="row justify-content-center">
              <div className="col-6">
                <img src={icon} alt="Company Logo" className="img-fluid mr-3" />
              </div>
            </div>
            <div className="col-6">
              <h5>About Us</h5>
              <p>We are a business that specializes in...</p>
            </div>
          </div>
          <div className="col-md-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-decoration-none">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-decoration-none">
                  Abous Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-decoration-none">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-decoration-none">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>
                Skeletos IT Services LLP Level 02, Shakuntal Appt, Law College
                Road, Near Pastry Corner, Nal Stop, Erandwane, India, MH, Pune:
                411004
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
