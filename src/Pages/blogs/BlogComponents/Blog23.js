import React from "react";
import Layer1 from "../../../img/blogs/blog23.jpg";
import { Link } from "react-router-dom";

const Blog23 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/do-you-need-custom-software">
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
            to="/blogs/do-you-need-custom-software"
            className="text-decoration-none text-dark"
          >
            <h5>Do you need Custom Software?</h5>
          </Link>
          <br />
          <br />
          <p className="card-text">
            If you are thinking of developing custom software, the very first
            question will be – “Should I do it myself or hire someone?”.
          </p>
          <Link
            to="/blogs/do-you-need-custom-software"
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

export default Blog23;
