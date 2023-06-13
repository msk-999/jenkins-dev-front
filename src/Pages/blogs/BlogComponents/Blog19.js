import React from "react";
import Layer1 from "../../../img/blogs/blog19.jpg";
import { Link } from "react-router-dom";

const Blog19 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/top-technology-trends">
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
            to="/blogs/top-technology-trends"
            className="text-decoration-none text-dark"
          >
            <h5>Top 3 Technology Trends You Should Know About</h5>
          </Link>
          <p className="card-text">
            How to Make an Effortless Cloud Migration Plan – Checklist & Guide:
            A blog about how to make a cloud migration plan to ensure a smooth
            migration.
          </p>
          <Link
            to="/blogs/top-technology-trends"
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

export default Blog19;
