import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog9.png";

const Blog9 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <img className="card-img-top img-fluid" src={Layer1} alt="Blog1" />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">What is IMS?</h5>
          <p className="card-text">
            Infrastructure Management Service: What is ims and why does your
            company need it? A blog about infrastructure management service
            (IMS) along with the pros and cons of
          </p>{" "}
          <br />
          <Link to="/blogs/benefits-of-byod">
            <a href="#" className="fw-bold text-success">
              READ MORE
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog9;
