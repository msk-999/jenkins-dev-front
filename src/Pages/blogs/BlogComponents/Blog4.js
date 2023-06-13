import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog4.jpg"

const Blog4 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/datacenter-management-services">
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
            to="/blogs/datacenter-management-services"
            className="text-dark text-decoration-none"
          >
            <h5>
              Datacenter Management Services? What is Datacenter Management
              Services
            </h5>
          </Link>
          <p className="card-text">
            Why You Need Datacenter Management Services: A blog that talks about
            the importance of managed services. Every business owner dreams of
            owning their own physical data
          </p>
          <Link
            to="/blogs/datacenter-management-services"
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

export default Blog4;
