import React from "react";
import Layer1 from "../../../img/blogs/blog2.jpg";
import { Link } from "react-router-dom";

const Blog2 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <img className="card-img-top img-fluid" src={Layer1} alt="Blog1" />
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">Shall I go with IT outsourcing?</h5> <br />
          <p className="card-text">
            IT outsourcing comes with many benefits which will boost your
            business but at the same time, you cannot avoid the risk which comes
            with it. Outsourcing services
          </p>
          <Link to="/blogs/shall-i-go-with-it-outsourcing">
            <a href="#" className="text-decoration-none text-success fw-bold">
              READ MORE
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog2;
