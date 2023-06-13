import React from "react";
import Layer1 from "../../../img/blogs/blog34.jpg";
import { Link } from "react-router-dom";

const Blog34 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/it-infrastructure-management">
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
            to="/blogs/it-infrastructure-management"
            className="text-decoration-none text-dark"
          >
            <h5>Sneaky Way For IT Infrastructure Management</h5>
          </Link>
          <p className="card-text">
            You won’t find These Technology Secrets Anywhere Else; Here is a
            sneaky way to maintain your Business Technology In 2021 Now you can
            maintain your business technology
          </p>
          <Link
            to="/blogs/it-infrastructure-management"
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

export default Blog34;
