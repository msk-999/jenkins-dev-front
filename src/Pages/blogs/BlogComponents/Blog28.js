import React from "react";
import Layer1 from "../../../img/blogs/blog28.png";
import { Link } from "react-router-dom";

const Blog28 = () => {
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
            Do you get tired at the end of day without being efficient on
            workplace?
          </h5>
          <p className="card-text">
            Future of Information Technology in India India’s contribution to
            the field of information technology.
          </p>
          <Link to="/blogs/time-management-technique">
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

export default Blog28;
