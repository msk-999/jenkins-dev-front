import React, { useState } from "react";
import icon from "../img/Skeletos_icon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const imageClasses = `rotate-effect img-fluid mr-3 mb-3 ${
    isHovered ? "rotate-effect" : ""
  }`;

  return (
    <footer className="bg-light py-3">
      <hr />
      <div className="container p-5">
        <div className="row">
          {/* <h4 className="text-center fw-bold">Contact Us</h4> <br /> */}
          <br />
          <div className="col-md-2 col-sm-3 col-3">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <Link to="/">
                  <img
                    src={icon}
                    alt="Rotating Image"
                    className={imageClasses}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    style={{ maxWidth: "100%", height: "auto" }} // Added CSS styles
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="row">
              <div className="col-1">
                <FontAwesomeIcon icon={faLocationDot} size="xl" />
              </div>
              <div className="col-10">
                <h6 className="fw-bold">India</h6>
                <span className="h6 text-dark">
                  Skeletos IT Services LLP
                </span>{" "}
                <br /> Level 02, Shakuntal Appt, Law College Road, Near Pastry
                Corner, Nal Stop, Erandwane. <br /> India, MH, Pune: 411004
              </div>
            </div>
          </div>
          <br />
          <div className="col-md-5">
            <div className="row">
              <div className="col-1">
                <FontAwesomeIcon icon={faLocationDot} size="xl" />
              </div>
              <div className="col-10">
                <h6 className="fw-bold">USA</h6>
                <span className="h6 text-dark">
                  Skeletos IT Services LLC
                </span>{" "}
                <br /> 651 N. Broad st., Suite 206, Middletown DE, USA <br />{" "}
                Call: 302-520-2853
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-start">
          <div className="col-2"></div>
          <div className="col-9">
            <hr className="text-dark" />
            <ul className="list-inline">
              <li className="list-inline-item">
                <Link
                  to="/"
                  className="list-inline-item text-decoration-none me-3"
                >
                  Home
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to="/about"
                  className="list-inline-item text-decoration-none me-3"
                >
                  Abous Us
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to="/careers"
                  className="list-inline-item text-decoration-none me-3"
                >
                  Careers
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  to="/contact"
                  className="list-inline-item text-decoration-none me-3"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
