import React from "react";
import Layer1 from "../../../img/blogs/blog26.png";
import { Link } from "react-router-dom";

const Blog26 = () => {
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
            Why Disaster Recovery Plan value more than actual plan ?
          </h5>
          <p className="card-text">
            Why A disaster recovery plan is costly than an actual plan and Why
            it’s important Many organizations ask us that how much we have to
            invest in
          </p>
          <Link to="/blogs/disaster-recovery-plan">
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

export default Blog26;
