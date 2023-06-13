import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog9.png";

const Blog9 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/what-is-ims">
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
            to="/blogs/what-is-ims"
            className="text-decoration-none text-dark"
          >
            <h5>What is IMS?</h5>
          </Link>
          <p className="card-text">
            Infrastructure Management Service: What is ims and why does your
            company need it? A blog about infrastructure management service
            (IMS) along with the pros and cons of
          </p>{" "}
          <br />
          <Link
            to="/blogs/what-is-ims"
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

export default Blog9;
