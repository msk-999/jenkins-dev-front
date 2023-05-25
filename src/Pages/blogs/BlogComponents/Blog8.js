import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog8.png"

const Blog8 = () => {
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
            The Benefits of a Bring Your Own Device (BYOD)
          </h5>
          <p className="card-text">
            The Benefits of a Bring Your Own Device (BYOD) Corporate Policy: A
            blog about the benefits of bring your own device programs for
            businesses. Bring your own <br />
          </p>
          <br />
          <Link to="/blogs/what-is-ims">
            <a href="#" className="fw-bold text-success">
              READ MORE
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog8;
