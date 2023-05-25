import React from "react";
import Layer1 from "../../../img/blogs/blog24.jpg";
import { Link } from "react-router-dom";

const Blog24 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <img className="card-img-top img-fluid" src={Layer1} alt="Blog1" />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Why Cloud Data Security is Important ?</h5>
          <br />
          <p className="card-text">
            You’ll want to make sure your data is safe while it’s being kept on
            the cloud, therefore cloud data security is crucial
          </p>
          <Link to="/blogs/cloud-data-security">
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

export default Blog24;
