import React from "react";
import Layer1 from "../../../img/blogs/blog20.png";
import { Link } from "react-router-dom";

const Blog20 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <img className="card-img-top img-fluid" src={Layer1} alt="Blog1" />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">
            Are You Ignoring Big Data? Don’t Do That!
          </h5>
          <p className="card-text">
            Big Data is growing at a rapid rate, to the point where it’s at 90
            billion gigabytes per day . It’s no secret that Big Data is
          </p>
          <br />
          <Link to="/blogs/are-you-ignoring-big-data-dont-do-that">
            <a href="#" className="text-decoration-none fw-bold text-success">
              READ MORE {">"}
              {">"}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog20;
