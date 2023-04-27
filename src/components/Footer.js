import React from "react";
import icon from "../img/Skeletos_icon.svg";

const Footer = () => {
  return (
    <footer className="bg-light py-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex align-items-between">
            <div className="col-6">
              <img src={icon} alt="Company Logo" className="img-fluid mr-3" />
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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Abous Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
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
              <li>Anytown, USA 12345</li>
              <li>Phone: (91) 123-456-7890</li>
              <li>info@skeletos.io</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
