import React from "react";
import Layer1 from "../../../img/blogs/blog3.jpg";
import { Link } from "react-router-dom";

const Blog3 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <img className="card-img-top img-fluid" src={Layer1} alt="Blog1" />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">What is Mobile App Development?</h5>
          <p className="card-text">
            Mobile App Development: A blog about the importance of mobile apps
            and their impact. The hot new trend of mobile apps has always been
            the big thing.
          </p>
          <Link to="/blogs/mobile_app_development">
            <a href="#" className="fw-bold text-success">
              READ MORE
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog3;
