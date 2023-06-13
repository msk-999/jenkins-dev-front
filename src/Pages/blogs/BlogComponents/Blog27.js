import React from "react";
import Layer1 from "../../../img/blogs/blog27.png";
import { Link } from "react-router-dom";

const Blog27 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/points-you-should-know-for-team-building">
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
            to="/blogs/points-you-should-know-for-team-building"
            className="text-decoration-none text-dark"
          >
            <h5>Points You should know for Team Building</h5>
          </Link>
          <p className="card-text">
            Team building is a very important factor to achieve your targets, It
            makes your team more effective. We all want our team needs to
            perfect as well
          </p>
          <Link
            to="/blogs/points-you-should-know-for-team-building"
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

export default Blog27;
