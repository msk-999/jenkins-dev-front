import React from "react";
import Layer1 from "../../../img/blogs/blog37.jpg";
import { Link } from "react-router-dom";

const Blog37 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <img className="card-img-top img-fluid" src={Layer1} alt="Blog1" />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">What Web Applications do?</h5>
          <p className="card-text">
            What Web Applications do? Discover Sucess Behind Growing
            Organisations Most business communication starts with the question
            ion What is a Web-Based Application ? Through previous meetings in
          </p>
          <Link to="/blogs/what-web-applications-do">
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

export default Blog37;
