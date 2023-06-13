import React from "react";
import Layer1 from "../../../img/blogs/blog22.jpg";
import { Link } from "react-router-dom";

const Blog22 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/information-technology-in-india">
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
            to="/blogs/information-technology-in-india"
            className="text-decoration-none text-dark"
          >
            <h5>
              3 Reasons why Future of Information Technology in India is Booming
            </h5>
          </Link>
          <p className="card-text">
            Future of Information Technology in India India’s contribution to
            the field of information technology.
          </p>
          <Link
            to="/blogs/information-technology-in-india"
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

export default Blog22;
