import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog6.jpg";
import "../../../css/Styles.css";

const BLog6 = () => {
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
            <Link
              to="/blogs/what-is-business-continuity-plan"
              className="text-decoration-none text-dark"
            >
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
            to="/blogs/what-is-business-continuity-plan"
            className="text-decoration-none text-dark"
          >
            <h5
              className={`title ${isHovered2 ? "hovered" : ""}`}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              What is Business Continuity Plan?
            </h5>
          </Link>
          <br /> <br />
          <p className="card-text">
            Business Continuity Plan- What It Is and Why You Need One: a blog
            about what BCP actually is along with why its important for
            businesses. If
          </p>{" "}
          <Link
            to="/blogs/what-is-business-continuity-plan"
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

export default BLog6;
