import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog13.png";

const Blog13 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/data-center-monitoring">
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
            to="/blogs/data-center-monitoring"
            className="text-decoration-none text-dark"
          >
            <h5>Why Data Center Monitoring is Essential</h5>
          </Link>
          <p className="card-text">
            Data Center Monitoring, What It Is And Why A Data Center Experienced
            In Need of One: A blog around data center monitoring and why it’s
            important.
          </p>{" "}
          <br />
          <Link
            to="/blogs/data-center-monitoring"
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

export default Blog13;
