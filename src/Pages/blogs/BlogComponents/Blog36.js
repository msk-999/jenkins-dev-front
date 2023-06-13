import React from "react";
import Layer1 from "../../../img/blogs/blog36.jpg";
import { Link } from "react-router-dom";

const Blog36 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/mobile-application-development">
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
            to="/blogs/mobile-application-development"
            className="text-decoration-none text-dark"
          >
            <h5>3 Still Thinking about Mobile Application Development?</h5>
          </Link>
          <p className="card-text">
            Why I should go for Mobile Application Development? If you wake up
            early morning and thinking about building a mobile application for
            your establishment. You want all
          </p>
          <Link
            to="/blogs/mobile-application-development"
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

export default Blog36;
