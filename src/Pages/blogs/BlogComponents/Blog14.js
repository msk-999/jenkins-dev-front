import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog14.png";

const Blog14 = () => {
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
            Pros and Cons of outsourcing Software Development
          </h5>
          <p className="card-text">
            The Ultimate Guide to Disadvantages of Outsourcing: A blog that
            takes a look at the disadvantages and positives of outsourcing
            software development
          </p>{" "}
          <br />
          <Link
            to="/blogs/pros-and-cons-of-software-development"
            className="text-decoration-none fw-bold text-success"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog14;
