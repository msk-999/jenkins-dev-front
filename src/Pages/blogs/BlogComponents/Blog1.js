import React from "react";
import layer1 from "../../../img/blogs/NAC.jpg";
import { Link } from "react-router-dom";

const Blog1 = () => {
  return (
    <div>
      <div className="card">
        <div className="row justify-content-center">
          <div className="col">
            <Link to="/blogs/choose-a-right-nac-network-access-control-for-your-office">
              <img
                className="card-img-top img-fluid"
                src={layer1}
                alt="Blog1"
              />
            </Link>
          </div>
        </div>
        <div className="card-body">
          <Link
            to="/blogs/choose-a-right-nac-network-access-control-for-your-office"
            className="text-decoration-none text-dark"
          >
            <h5>Choose a right NAC (Network Access Control) for your office</h5>
          </Link>
          <p className="card-text">
            Thankfully we are done with COVID-19. This doesn’t mean that the
            virus has vanished, but Humans are the best species to adapt to the
            changes, and so
          </p>
          <Link
            to="/blogs/choose-a-right-nac-network-access-control-for-your-office"
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

export default Blog1;
