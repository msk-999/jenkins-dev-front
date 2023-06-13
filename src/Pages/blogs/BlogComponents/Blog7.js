import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog7.jpg";

const Blog7 = () => {
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
            <h5>
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
            READ MORE {">"}
            {">"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog7;
