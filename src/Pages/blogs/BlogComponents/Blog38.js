import React from "react";
import Layer1 from "../../../img/blogs/blog38.jpg";
import { Link } from "react-router-dom";

const Blog38 = () => {
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
            Do you want to Be Independent from the Infrastructure of the Cloud?
          </h5>
          <p className="card-text">
            Yes, you can be independent with IT experts of Skeletos In this new
            digitalized world, Technology is taking place all over the
            traditional processes and creating
          </p>
          <Link to="/blogs/cloud-computing-blog">
            <a href="#" className="text-decoration-none fw-bold text-success">
              READ MORE {">"}
              {">"}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog38;
