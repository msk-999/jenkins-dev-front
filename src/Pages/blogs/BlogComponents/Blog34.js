import React from "react";
import Layer1 from "../../../img/blogs/blog34.jpg";
import { Link } from "react-router-dom";

const Blog34 = () => {
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
            Sneaky Way For IT Infrastructure Management
          </h5>
          <p className="card-text">
            You won’t find These Technology Secrets Anywhere Else; Here is a
            sneaky way to maintain your Business Technology In 2021 Now you can
            maintain your business technology
          </p>
          <Link to="/blogs/it-infrastructure-management">
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

export default Blog34;
