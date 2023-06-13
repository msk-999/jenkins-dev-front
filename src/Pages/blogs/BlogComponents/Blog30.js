import React from "react";
import Layer1 from "../../../img/blogs/blog30.png";
import { Link } from "react-router-dom";

const Blog30 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/why-it-outsourcing">
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
            to="/blogs/why-it-outsourcing"
            className="text-decoration-none text-dark"
          >
            <h5>Why IT outsourcing ?</h5>
          </Link>
          <br />
          <p className="card-text">
            IT outsourcing comes with many benefits which will boost your
            business but at the same time, you cannot avoid the risk which comes
            with it. Outsourcing services
          </p>
          <Link
            to="/blogs/why-it-outsourcing"
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

export default Blog30;
