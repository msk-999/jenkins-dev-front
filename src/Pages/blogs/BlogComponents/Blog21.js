import React from "react";
import Layer1 from "../../../img/blogs/blog21.jpg";
import { Link } from "react-router-dom";

const Blog21 = () => {
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
            How Artificial Intelligence Tools That Will Change The Way You Do
            Business
          </h5>
          <p className="card-text">
            Thankfully we are done with COVID-19. This doesn’t mean that the
            virus has vanished, but Humans are the best species
          </p>
          <Link to="/blogs/artificial-intelligence-tools">
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

export default Blog21;
