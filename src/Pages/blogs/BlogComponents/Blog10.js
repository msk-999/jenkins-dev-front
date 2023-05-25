import React from "react";
import Layer1 from "../../../img/blogs/blog10.png";
import { Link } from "react-router-dom";

const Blog10 = () => {
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
            What is Infrastructure Management, And Why You Should Care
          </h5>
          <p className="card-text">
            Infrastructure management is another essential part of the IT
            process in any business today. In this article, I am going to
            discuss what infrastructure management is
          </p>{" "}
          <br />
          <Link to="/blogs/what-is-infrastructure-management">
            <a href="#" className="fw-bold text-success">
              READ MORE
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog10;
