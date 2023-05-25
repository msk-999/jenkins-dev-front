import React from "react";
import Layer1 from "../../../img/blogs/blog25.png";
import { Link } from "react-router-dom";

const Blog25 = () => {
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
            Are you in Battle of Work From Home and Work From Office? Here are 5
            pros and cons
          </h5>
          <p className="card-text">
            Before covid 19 work from home was just an imagination for many of
            employees, but in 2020 it has become a part of a system
          </p>
          <Link to="/blogs/work-from-home-or-work-from-office">
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

export default Blog25;
