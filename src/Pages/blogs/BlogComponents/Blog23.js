import React from "react";
import Layer1 from "../../../img/blogs/blog23.jpg";
import { Link } from "react-router-dom";

const Blog23 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <img className="card-img-top img-fluid" src={Layer1} alt="Blog1" />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Do you need Custom Software?</h5>
          <br />
          <br />
          <p className="card-text">
            If you are thinking of developing custom software, the very first
            question will be – “Should I do it myself or hire someone?”.
          </p>
          <Link to="/blogs/do-you-need-custom-software">
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

export default Blog23;
