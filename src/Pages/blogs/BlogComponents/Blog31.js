import React from "react";
import Layer1 from "../../../img/blogs/blog31.jpg";
import { Link } from "react-router-dom";

const Blog31 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/why-entrepreneurs-use-software-management-tools-to-boost-business">
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
            to="/blogs/why-entrepreneurs-use-software-management-tools-to-boost-business"
            className="text-decoration-none text-dark"
          >
            <h5>
              Why Entrepreneurs use Software Management Tools to boost business
            </h5>
          </Link>
          <p className="card-text">
            5 Reasons why Entrepreneurs should use Software Management Tools for
            Various Projects Many entrepreneurs like us are working on various
            projects at one time.
          </p>
          <Link
            to="/blogs/why-entrepreneurs-use-software-management-tools-to-boost-business"
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

export default Blog31;
