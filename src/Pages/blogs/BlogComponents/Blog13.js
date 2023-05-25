import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog13.png";

const Blog13 = () => {
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
            Why Data Center Monitoring is Essential
          </h5>
          <p className="card-text">
            Data Center Monitoring, What It Is And Why A Data Center Experienced
            In Need of One: A blog around data center monitoring and why it’s
            important.
          </p>{" "}
          <br />
          <Link to="/blogs/data-center-monitoring">
            <a href="#" className="fw-bold text-success">
              READ MORE
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog13;
