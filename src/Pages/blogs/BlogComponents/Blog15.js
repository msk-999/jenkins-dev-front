import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog15.png"

const Blog15 = () => {
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
            Dos & Don’ts While doing Cloud Migration
          </h5>
          <p className="card-text">
            A blog When it comes to migrating to the Cloud (or any type of data
            migration for that matter), it’s easy for an organization to get
            excited
          </p>{" "}
          <br />
          <Link to="/blogs/dos-donts-while-doing-cloud-migration">
            <a href="#" className="fw-bold text-success">
              READ MORE
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog15;
