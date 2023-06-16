import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog7.jpg";
import "../../../css/Styles.css";

const Blog7 = () => {
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
            <Link to="/blogs/why-custom-software-development">
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
            to="/blogs/why-custom-software-development"
            className="text-decoration-none text-dark"
          >
            <h5
              className={`title ${isHovered2 ? "hovered" : ""}`}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              5 Reasons Why you should invest in Custom Software Development?
            </h5>
          </Link>
          <p className="card-text">
            Several reasons have been offered for why you should invest in
            custom software development.For some, they may be completely right.
          </p>
          <Link
            to="/blogs/why-custom-software-development"
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

export default Blog7;
