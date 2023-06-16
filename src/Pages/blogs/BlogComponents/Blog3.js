import React, { useState } from "react";
import Layer1 from "../../../img/blogs/blog3.jpg";
import { Link } from "react-router-dom";
import "../../../css/Styles.css";

const Blog3 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/mobile_app_development">
              <img
                className="card-img-top img-fluid"
                src={Layer1}
                alt="Blog1"
              />
            </Link>
          </div>
        </div>
        <div className="card-body">
          <Link
            to="/blogs/mobile_app_development"
            className="text-dark text-decoration-none"
          >
            <h5
              className={`title ${isHovered2 ? "hovered" : ""}`}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              What is Mobile App Development?
            </h5>
          </Link>{" "}
          <br />
          <p className="card-text">
            Mobile App Development: A blog about the importance of mobile apps
            and their impact. The hot new trend of mobile apps has always been
            the big thing.
          </p>
          <Link
            to="/blogs/mobile_app_development"
            className="text-decoration-none fw-bold text-success"
          >
            <p
              className={`text ${isHovered ? "hovered" : ""}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              READ MORE {">"} {">"}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog3;
