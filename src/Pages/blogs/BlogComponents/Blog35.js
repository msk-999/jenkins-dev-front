import React from "react";
import Layer1 from "../../../img/blogs/blog35.jpg";
import { Link } from "react-router-dom";

const Blog35 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/devops-it-blog">
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
            to="/blogs/devops-it-blog"
            className="text-decoration-none text-dark"
          >
            <h5>All You Want to Know About DevOps</h5>
          </Link>
          <p className="card-text">
            DevOps? What is DevOps? How This Technology is going to Enhance your
            Business? The ultimate guide of DevOps which is going to make
            operations Faster What is DevOps Technology?
          </p>
          <Link
            to="/blogs/devops-it-blog"
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

export default Blog35;
