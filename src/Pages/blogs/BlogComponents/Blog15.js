import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog15.png";
import "../../../css/Styles.css";

const Blog15 = () => {
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
            <Link to="/blogs/dos-donts-while-doing-cloud-migration">
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
            to="/blogs/dos-donts-while-doing-cloud-migration"
            className="text-decoration-none text-dark"
          >
            <h5
              className={`title ${isHovered2 ? "hovered" : ""}`}
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              Dos & Don’ts While doing Cloud Migration
            </h5>
          </Link>
          <p className="card-text">
            A blog When it comes to migrating to the Cloud (or any type of data
            migration for that matter), it’s easy for an organization to get
            excited
          </p>{" "}
          <br />
          <Link
            to="/blogs/dos-donts-while-doing-cloud-migration"
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

export default Blog15;
