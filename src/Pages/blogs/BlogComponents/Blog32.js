import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog32.jpg";

const Blog32 = () => {
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
            3 reasons why “Intrapreneurship” is the next big thing
          </h5>
          <p className="card-text">
            The business environment is getting competitive day by day and to be
            in-market companies should use each and every tool which is
            available and grow every day. Companies are coming up
          </p>
          <Link to="/blogs/3-reasons-why-intrapreneurship">
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

export default Blog32;
