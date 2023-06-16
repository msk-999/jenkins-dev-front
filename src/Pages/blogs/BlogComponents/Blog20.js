import React, { useState } from "react";
import Layer1 from "../../../img/blogs/blog20.png";
import { Link } from "react-router-dom";import "../../../css/Styles.css";

const Blog20 = () => {
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
            <Link to="/blogs/are-you-ignoring-big-data-dont-do-that">
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
            to="/blogs/are-you-ignoring-big-data-dont-do-that"
            className="text-decoration-none text-dark"
          >
            <h5
              className={`title ${isHovered2 ? "hovered" : ""}`}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              Are You Ignoring Big Data? Don’t Do That!
            </h5>
          </Link>
          <p className="card-text">
            Big Data is growing at a rapid rate, to the point where it’s at 90
            billion gigabytes per day . It’s no secret that Big Data is
          </p>
          <br />
          <Link
            to="/blogs/are-you-ignoring-big-data-dont-do-that"
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

export default Blog20;
