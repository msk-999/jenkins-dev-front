import React from "react";
import Layer1 from "../../../img/blogs/blog3.jpg";
import { Link } from "react-router-dom";

const Blog3 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/mobile_app_development">
              <img
                className="card-img-top img-fluid"
                src={Layer1}
                alt="Blog1"
              />
            </Link>
          </div>
        </div>
        <div className="card-body">
          <Link to="/blogs/mobile_app_development" className="text-dark text-decoration-none">
            <h5>What is Mobile App Development?</h5>
          </Link> <br />
          <p className="card-text">
            Mobile App Development: A blog about the importance of mobile apps
            and their impact. The hot new trend of mobile apps has always been
            the big thing.
          </p>
          <Link
            to="/blogs/mobile_app_development"
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

export default Blog3;
