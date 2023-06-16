import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog8.png";
import "../../../css/Styles.css";

const Blog8 = () => {
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
            <Link to="/blogs/benefits-of-byod">
              <img
                className="card-img-top img-fluid"
                src={Layer1}
                alt="Blog8 "
              />
            </Link>
          </div>
        </div>
        <div className="card-body">
          <Link
            to="/blogs/benefits-of-byod"
            className="text-decoration-none text-dark"
          >
            <h5
              className={`title ${isHovered2 ? "hovered" : ""}`}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              The Benefits of a Bring Your Own Device (BYOD)
            </h5>
          </Link>
          <p className="card-text">
            The Benefits of a Bring Your Own Device (BYOD) Corporate Policy: A
            blog about the benefits of bring your own device programs for
            businesses. Bring your own <br />
          </p>
          <Link
            to="/blogs/benefits-of-byod"
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

export default Blog8;
