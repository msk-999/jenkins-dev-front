import React from "react";
import { Link } from "react-router-dom";
import Layer1 from "../../../img/blogs/blog11.png"

const Blog11 = () => {
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
            Importance of Modern E-commerce in 2022
          </h5>
          <p className="card-text">
            Importance Of Global E-Commerce Development: A blog emphasizing the
            importance of ecommerce for your business. Before starting any
            business, every entrepreneur starts with a dream
          </p>{" "}
          <br />
          <Link to="/blogs/importance-of-modern-e-commerce">
            <a href="#" className="fw-bold text-success">
              READ MORE
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog11;
