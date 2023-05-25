import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog6.jpg"

const BLog6 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <img className="card-img-top img-fluid" src={Layer1} alt="Blog1" />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">What is Business Continuity Plan?</h5>{" "}
          <br /> <br />
          <p className="card-text">
            Business Continuity Plan- What It Is and Why You Need One: a blog
            about what BCP actually is along with why its important for
            businesses. If
          </p>{" "}
          <br />
          <Link to="/blogs/what-is-business-continuity-plan">
            <a href="#" className="fw-bold text-success">
              READ MORE
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BLog6;
