import React from "react";
import Layer1 from "../../../img/blogs/blog10.png";
import { Link } from "react-router-dom";

const Blog10 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/what-is-infrastructure-management">
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
            to="/blogs/what-is-infrastructure-management"
            className="text-decoration-none text-dark"
          >
            <h5>What is Infrastructure Management, And Why You Should Care</h5>
          </Link>
          <p className="card-text">
            Infrastructure management is another essential part of the IT
            process in any business today. In this article, I am going to
            discuss what infrastructure management is
          </p>{" "}
          <br />
          <Link
            to="/blogs/what-is-infrastructure-management"
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

export default Blog10;
