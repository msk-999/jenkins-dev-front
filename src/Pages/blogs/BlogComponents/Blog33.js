import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog33.jpg";

const Blog33 = () => {
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
            How to Avoid Common Problems in Software Development
          </h5>
          <p className="card-text">
            Everything is being Digitalised with technology that’s why the need
            for software is getting in demand day by day. Everyone is trying to
            avoid complicated work and
          </p>
          <Link to="/blogs/common-problems-in-software-development">
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

export default Blog33;
