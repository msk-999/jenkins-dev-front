import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog7.jpg";

const Blog7 = () => {
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
            5 Reasons Why you should invest in Custom Software Development?
          </h5>
          <p className="card-text">
            Several reasons have been offered for why you should invest in
            custom software development.For some, they may be completely right.
          </p>
          <Link to="/blogs/why-custom-software-development">
            <a href="#" className="fw-bold text-success">
              READ MORE
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog7;
