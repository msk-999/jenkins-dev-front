import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog16.jpg";

const Blog16 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/how-to-makea-a-cloud-migration-plan">
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
            to="/blogs/how-to-makea-a-cloud-migration-plan"
            className="text-decoration-none text-dark"
          >
            <h5>How to Make an Effortless Cloud Migration Plan</h5>
          </Link>
          <p className="card-text">
            How to Make an Effortless Cloud Migration Plan – Checklist & Guide:
            A blog about how to make a cloud migration plan to ensure a smooth
            migration.
          </p>{" "}
          <br />
          <Link
            to="/blogs/how-to-makea-a-cloud-migration-plan"
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

export default Blog16;
