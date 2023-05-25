import React from "react";
import Layer1 from "../../../img/blogs/blog18.jpg";
import { Link } from "react-router-dom";

const Blog18 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <img className="card-img-top img-fluid" src={Layer1} alt="Blog1" />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">What is MultiCloud?</h5>
          <br />
          <p className="card-text">
            What Is Multicloud? Why It’s Coming Soon, Why It’s A Big Deal, and
            How You Can Benefit Enterprises are increasingly turning to
            multi-cloud deployment strategies, in
          </p>{" "}
          <br />
          <Link to="/blogs/what-is-multicloud">
            <a href="#" className="fw-bold text-success">
              READ MORE
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog18;
