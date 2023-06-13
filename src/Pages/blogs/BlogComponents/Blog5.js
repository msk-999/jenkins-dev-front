import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog5.jpg";

const Blog5 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/how-technology-can-improve-roi">
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
            to="/blogs/how-technology-can-improve-roi"
            className="text-decoration-none text-dark"
          >
            <h5>How Technology can improve ROI ?</h5>
          </Link>
          <br />
          <p className="card-text">
            6 Ways Technology Can Improve Your ROI: A blog about the ways that
            technology can improve your return on investment. The future of
            technology is limitless
          </p>{" "}
          <br />
          <Link
            to="/blogs/how-technology-can-improve-roi"
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

export default Blog5;
