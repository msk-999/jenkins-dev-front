import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog4.jpg"

const Blog4 = () => {
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
            Datacenter Management Services? What is Datacenter Management
            Services
          </h5>
          <p className="card-text">
            Why You Need Datacenter Management Services: A blog that talks about
            the importance of managed services. Every business owner dreams of
            owning their own physical data
          </p>
          <Link to="/blogs/datacenter-management-services">
            <a href="#" className="fw-bold text-success">
              READ MORE
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog4;
