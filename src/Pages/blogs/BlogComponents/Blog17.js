import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog17.jpg"

const Blog17 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/are-you-e-commerce-newbie">
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
            to="/blogs/are-you-e-commerce-newbie"
            className="text-decoration-none text-dark"
          >
            <h5>Are You an E-Commerce Newbie?</h5>
          </Link>
          <br />
          <p className="card-text">
            for an organization to get excitedCan you imagine a life without
            Amazon? Bet it is hard to do so, right. Then why not make a company
            as big as this in the
          </p>{" "}
          <br />
          <Link
            to="/blogs/are-you-e-commerce-newbie"
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

export default Blog17;
