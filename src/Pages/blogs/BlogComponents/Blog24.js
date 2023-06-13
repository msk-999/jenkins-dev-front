import React from "react";
import Layer1 from "../../../img/blogs/blog24.jpg";
import { Link } from "react-router-dom";

const Blog24 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/cloud-data-security">
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
            to="/blogs/cloud-data-security"
            className="text-decoration-none text-dark"
          >
            <h5>Why Cloud Data Security is Important ?</h5>
          </Link>
          <br />
          <p className="card-text">
            You’ll want to make sure your data is safe while it’s being kept on
            the cloud, therefore cloud data security is crucial
          </p>
          <Link
            to="/blogs/cloud-data-security"
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

export default Blog24;
